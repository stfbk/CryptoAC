package eu.fbk.st.cryptoac.implementation.mm

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.EncryptedAsymKeys
import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.encodeBase64
import mu.KotlinLogging
import redis.clients.jedis.*
import redis.clients.jedis.exceptions.JedisAccessControlException
import redis.clients.jedis.exceptions.JedisConnectionException
import java.security.PublicKey
import java.util.*
import kotlin.collections.HashSet


private val logger = KotlinLogging.logger {}

/**
 * Implementation of the methods to interface with the MM as a Redis
 * database configured with the given [mmRedisInterfaceParameters].
 *
 * Unfortunately, Redis, for now, does not support multiple keys pointing
 * to the same value (see https://github.com/redis/redis/issues/2668).
 * Therefore, to protect the names of users, roles and files, we need
 * to duplicate some data.
 *
 * USERS:
 * - [userObjectPrefix] + [byUsernameKeyPrefix] + username: user object data
 * - [userObjectPrefix] + [byUserTokenPrefix] + user token: user object data
 * - [usersIncompleteKey]: list of the keys (by username) of incomplete users
 * - [usersOperationalKey]: list of the keys (by username) of operational users
 * - [usersDeletedKey]: list of the keys (by username) of deleted users
 *
 * ROLES:
 * - [roleObjectPrefix] + [byRoleNameKeyPrefix] + role name: role object data
 * - [roleObjectPrefix] + [byRoleTokenPrefix] + role token: role object data
 * - [rolesOperationalKey]: list of the keys (by role name) of operational roles
 * - [rolesDeletedKey]: list of the keys (by role name) of deleted roles
 *
 * FILES:
 * - [fileObjectPrefix] + [byFileNameKeyPrefix] + file name: file object data
 * - [fileObjectPrefix] + [byFileTokenPrefix] + file token: file object data
 * - [filesOperationalKey]: list of the keys (by file name) of operational files
 * - [filesDeletedKey]: list of the keys (by file name) of deleted files
 */
class MMInterfaceRedis(
    private val mmRedisInterfaceParameters: MMInterfaceRedisParameters
) : MMInterface() {

    /** The transaction object to the Redis database */
    private var transaction: Transaction? = null

    /** The connection for transaction in the Redis database */
    private var jedisTransaction: Jedis? = null

    /** The connection for querying the Redis database during a transaction */
    private var jedisQuery: Jedis? = null

    /** Whether the transaction contains any command to exec */
    private var transactionToExec: Boolean = false

    /**
     * This is a list of keys that are going to be deleted in the current
     * transaction (i.e., between a lock and an unlock/rollback operation.
     * We need to keep this information, e.g., when deleting and then
     * adding keys in the same transaction (otherwise we get errors like
     * "this key already exists")
     */
    private var listOfKeysToDelete: MutableList<String> = mutableListOf()

    /**
     * This is a list of keys that are going to be inserted in the current
     * transaction (i.e., between a lock and an unlock/rollback operation.
     * We need to keep this information when first inserting key and then
     * checking their existence in the same transaction
     */
    private var listOfKeysToAdd: MutableList<String> = mutableListOf()

    /** The threadsafe pool of network connections toward Redis */
    private val pool = JedisPool(
        JedisPoolConfig(),
        mmRedisInterfaceParameters.url,
        mmRedisInterfaceParameters.port
    )

    /**
     * The username with which connect to Redis.
     * "default" is the Redis default username
     */
    private val usernameRedis = if (mmRedisInterfaceParameters.username == ADMIN) {
        "default"
    } else {
        mmRedisInterfaceParameters.username
    }

    private val usernameField = "u"
    private val roleNameField = "rn"
    private val userIsAdminField = "uia"
    private val userTokenField = "ut"
    private val roleTokenField = "rt"
    private val asymEncPublicKeyField = "aepk"
    private val asymSigPublicKeyField = "aspk"
    private val fileNameField = "fn"
    private val fileTokenField = "ft"
    private val symDecKeyVersionNumberField = "sdkvn"
    private val encryptedSymKeyField = "esk"
    private val symKeyVersionNumberField = "skvn"
    private val permissionField = "p"
    private val signerTokenField = "sto"
    private val symEncKeyVersionNumberField = "sevn"
    private val enforcementField = "e"
    private val statusField = "sta"
    private val roleVersionNumberField = "rvn"
    private val encryptedAsymEncPublicKeyField = "eaepuk"
    private val encryptedAsymEncPrivateKeyField = "eaeprk"
    private val encryptedAsymSigPublicKeyField = "easpuk"
    private val encryptedAsymSigPrivateKeyField = "easprk"
    private val signatureField = "si"

    /** Key to enable check-and-set (CAS) behavior to Redis transactions */
    private val lockUnlockRollbackKey = "lurk"

    /** Key for the set of incomplete users */
    private val usersIncompleteKey = "iu"

    /** Key for the set of operational users */
    private val usersOperationalKey = "ou"

    /** Key for the set of deleted users */
    private val usersDeletedKey = "du"

    /** Key for the set of operational roles */
    private val rolesOperationalKey = "or"

    /** Key for the set of deleted roles */
    private val rolesDeletedKey = "dr"

    /** Key for the set of operational files */
    private val filesOperationalKey = "of"

    /** Key for the set of deleted files */
    private val filesDeletedKey = "df"

    /** Prefix key delimited character */
    private val dl = ":"

    /** Prefix for user objects */
    private val userObjectPrefix = "uo$dl"

    /** Prefix for role objects */
    private val roleObjectPrefix = "ro$dl"

    /** Prefix for file objects */
    private val fileObjectPrefix = "fo$dl"

    /** Prefix for the keys of role tuples */
    private val roleTuplesKeyPrefix = "rt$dl"

    /** Prefix for the keys of lists of role tuples */
    private val roleTuplesListKeyPrefix = "rtl$dl"

    /** Prefix for the keys of permission tuples */
    private val permissionTuplesKeyPrefix = "pt$dl"

    /** Prefix for the keys of lists of permission tuples */
    private val permissionTuplesListKeyPrefix = "ptl$dl"

    /** Prefix for the keys of file tuples */
    private val fileTuplesKeyPrefix = "ft$dl"

    /** Prefix for the keys of lists of file tuples */
    private val fileTuplesListKeyPrefix = "ftl$dl"

    /** Prefix for secondary indexes based on usernames */
    private val byUsernameKeyPrefix = "bu$dl"

    /** Prefix for secondary indexes based on user and role names */
    private val byUsernameAndRoleNamePrefix = "bur$dl"

    /** Prefix for secondary indexes based on role names */
    private val byRoleNameKeyPrefix = "br$dl"

    /** Prefix for secondary indexes based on user tokens */
    private val byUserTokenPrefix = "but$dl"

    /** Prefix for secondary indexes based on role tokens */
    private val byRoleTokenPrefix = "brt$dl"

    /** Prefix for secondary indexes based on file tokens */
    private val byFileTokenPrefix = "bft$dl"

    /** Prefix for secondary indexes based on role and file names */
    private val byRoleAndFileNameKeyPrefix = "brf$dl"

    /** Prefix for secondary indexes based on file names */
    private val byFileNameKeyPrefix = "bf$dl"

    /**
     * Initialize the admin by adding in the metadata the
     * [admin] as both user and role and the [adminRoleTuple]
     * and return the outcome code. Check that the name of
     * the admin is the expected one (in both the user object
     * and the role tuple) and that the admin was not already
     * initialized
     *
     * In this implementation, add the (key of the) user
     * in the list of operational users. Finally, add the
     * public keys of the user as an object with as key
     * the token of the user, and the user as an object
     * with as key the username
     */
    override fun initAdmin(admin: User, adminRoleTuple: RoleTuple): OutcomeCode {
        logger.info { "Initializing the database and adding the admin in the MM" }

        /** Guard clauses */
        if (
            admin.name != ADMIN ||
            adminRoleTuple.username != ADMIN ||
            adminRoleTuple.roleName != ADMIN
        ) {
            logger.warn { "Admin user has name ${admin.name}, but admin name should be $ADMIN" }
            return OutcomeCode.CODE_036_ADMIN_NAME
        }
        if (getUsers(username = ADMIN).isNotEmpty()) {
            logger.warn { "Admin $ADMIN already initialized" }
            return OutcomeCode.CODE_035_ADMIN_ALREADY_INITIALIZED
        }

        val userKeyByName = "$userObjectPrefix$byUsernameKeyPrefix$ADMIN"
        val userKeyByToken = "$userObjectPrefix$byUserTokenPrefix$ADMIN"
        val asymEncPublicKeyEncoded = admin.asymEncKeys!!.public
        val asymSigPublicKeyEncoded = admin.asymSigKeys!!.public

        transactionToExec = true

        /** Add the admin as User in the metadata */
        logger.debug { "Adding the admin as User" }
        transaction!!.sadd(usersOperationalKey, userKeyByName)
        transaction!!.hset(userKeyByToken, hashMapOf(
            userTokenField to ADMIN,
            asymEncPublicKeyField to asymEncPublicKeyEncoded,
            asymSigPublicKeyField to asymSigPublicKeyEncoded,
            userIsAdminField to admin.isAdmin.toString(),
            statusField to ElementStatus.OPERATIONAL.toString(),
        ))
        transaction!!.hset(userKeyByName, hashMapOf(
            usernameField to ADMIN,
            userTokenField to ADMIN,
            asymEncPublicKeyField to asymEncPublicKeyEncoded,
            asymSigPublicKeyField to asymSigPublicKeyEncoded,
            userIsAdminField to admin.isAdmin.toString(),
            statusField to ElementStatus.OPERATIONAL.toString(),
        ))
        listOfKeysToAdd.addAll(listOf(userKeyByToken, userKeyByName))


        /** Add the admin as Role in the metadata */
        logger.debug { "Adding the admin as Role" }
        var code = addRole(Role(
            name = ADMIN,
            status = ElementStatus.OPERATIONAL,
            versionNumber = 1,
            asymEncKeys = AsymKeys(public = asymEncPublicKeyEncoded, private = "", keysType = AsymKeysType.ENC),
            asymSigKeys = AsymKeys(public = asymSigPublicKeyEncoded, private = "", keysType = AsymKeysType.SIG),
        ))


        /** Add the RoleTuple linking the admin User to the admin Role to the metadata */
        if (code == OutcomeCode.CODE_000_SUCCESS) {
            code = addRoleTuples(HashSet<RoleTuple>().apply { add(adminRoleTuple) })
        }

        return code
    }

    /**
     * Initialize the user by adding in the metadata the
     * public keys and token of the [user], updating also
     * the status flag, and return the outcome code. Check
     * that the user is not already present, was not already
     * initialized and was not already deleted
     *
     * In this implementation, move the (key of the) user
     * from the list of incomplete users to the list of
     * operational users. Finally, update the public keys
     * and the token of the user as an object with as key
     * the name of the user, and save the user as an object
     * with as key the token of the user
     */
    override fun initUser(user: User): OutcomeCode {
        val username = user.name
        val userToken = user.token
        logger.info { "Initializing user $username in the metadata" }

        val userKeyByName = "$userObjectPrefix$byUsernameKeyPrefix$username"
        val userKeyByToken = "$userObjectPrefix$byUserTokenPrefix$userToken"
        
        return when (getStatus(username, ElementTypeWithStatus.USER)) {
            null -> {
                logger.warn { "User ${user.name} does not exist in the metadata" }
                OutcomeCode.CODE_004_USER_NOT_FOUND
            }
            ElementStatus.DELETED -> {
                logger.warn { "User $username was previously deleted" }
                OutcomeCode.CODE_013_USER_WAS_DELETED
            }
            ElementStatus.OPERATIONAL -> {
                logger.warn { "User $username already initialized" }
                OutcomeCode.CODE_052_USER_ALREADY_INITIALIZED
            }
            ElementStatus.INCOMPLETE -> {
                val asymEncPublicKeyEncoded = user.asymEncKeys!!.public
                val asymSigPublicKeyEncoded = user.asymSigKeys!!.public

                transactionToExec = true
                transaction!!.srem(usersIncompleteKey, userKeyByName)
                transaction!!.sadd(usersOperationalKey, userKeyByName)
                transaction!!.hset(userKeyByToken, hashMapOf(
                    userTokenField to userToken,
                    asymEncPublicKeyField to asymEncPublicKeyEncoded,
                    asymSigPublicKeyField to asymSigPublicKeyEncoded,
                    statusField to ElementStatus.OPERATIONAL.toString(),
                ))
                transaction!!.hset(userKeyByName, hashMapOf(
                    userTokenField to userToken,
                    asymEncPublicKeyField to asymEncPublicKeyEncoded,
                    asymSigPublicKeyField to asymSigPublicKeyEncoded,
                    statusField to ElementStatus.OPERATIONAL.toString(),
                ))
                listOfKeysToAdd.add(userKeyByToken)

                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }



    /**
     * Add the [newUser] in the metadata. The user's
     * asymmetric encryption and signing public keys
     * and token will be set by the user him/herself
     * later on (initUser function). Finally, return
     * the user's configuration parameters together
     * with the outcome code. Check that the user was
     * not previously deleted or already exists
     */
    override fun addUser(newUser: User): WrapperMMParameters {
        val username = newUser.name
        logger.info { "Adding the user $username in the metadata and as Redis user" }

        val userKeyByName = "$userObjectPrefix$byUsernameKeyPrefix$username"

        return when (getStatus(username, ElementTypeWithStatus.USER)) {
            null -> {
                transactionToExec = true
                transaction!!.sadd(usersIncompleteKey, userKeyByName)
                transaction!!.hset(userKeyByName, hashMapOf(
                    usernameField to username,
                    userTokenField to username,
                    userIsAdminField to newUser.isAdmin.toString(),
                    statusField to ElementStatus.INCOMPLETE.toString(),
                ))
                listOfKeysToAdd.add(userKeyByName)

                /** TODO check password generation */
                val passwordBytes = ByteArray(20)
                Random().nextBytes(passwordBytes)
                val newPassword = passwordBytes.encodeBase64()

                val code = if (jedisQuery!!.aclSetUser(
                        username,
                        "on", "allkeys", "allcommands", ">$newPassword"
                    ) != "OK") {
                    logger.warn { "Could not create user $username in Redis" }
                    OutcomeCode.CODE_054_CREATE_USER_MM
                } else {

                    // TODO configure ACL for users. This should prevent users
                    //  from sending delete/update commands and limit the
                    //  selection of keys (i.e., when users do "getUsers/Roles/Files",
                    //  and same with tuples, they get all data, not only theirs)
                    //jedisQuery!!.aclSetUser(username, "~app1:*")

                    OutcomeCode.CODE_000_SUCCESS
                }

                WrapperMMParameters(
                    code = code,
                    parameters = MMInterfaceRedisParameters(
                        username = username, password = newPassword,
                        port = mmRedisInterfaceParameters.port, url = mmRedisInterfaceParameters.url,
                    )
                )
            }
            ElementStatus.DELETED -> {
                logger.warn { "User $username was previously deleted" }
                WrapperMMParameters(OutcomeCode.CODE_013_USER_WAS_DELETED)
            }
            else -> {
                logger.warn { "User $username already present in the metadata" }
                WrapperMMParameters(OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
            }
        }
    }

    /**
     * Add the [newRole] in the metadata and
     * return the outcome code. Check that the
     * role does not already exist or was deleted
     *
     * In this implementation, add the role as
     * an object, plus add the key of the role
     * in the list of OPERATIONAL roles. Finally,
     * add the public keys of the role and the version
     * number with as key the token of the role
     */
    override fun addRole(newRole: Role): OutcomeCode {
        val roleName = newRole.name
        val roleToken = newRole.token
        logger.info { "Adding the role $roleName in the metadata" }

        val roleKeyByName = "$roleObjectPrefix$byRoleNameKeyPrefix$roleName"
        val roleKeyByToken = "$roleObjectPrefix$byRoleTokenPrefix$roleToken"
        
        return when (getStatus(roleName, ElementTypeWithStatus.ROLE)) {
            null -> {
                val asymEncPublicKeyEncoded = newRole.asymEncKeys!!.public
                val asymSigPublicKeyEncoded = newRole.asymSigKeys!!.public

                transactionToExec = true
                transaction!!.sadd(rolesOperationalKey, roleKeyByName)
                transaction!!.hset(roleKeyByToken, hashMapOf(
                    roleTokenField to roleToken,
                    asymEncPublicKeyField to asymEncPublicKeyEncoded,
                    asymSigPublicKeyField to asymSigPublicKeyEncoded,
                    roleVersionNumberField to newRole.versionNumber.toString(),
                    statusField to newRole.status.toString(),
                ))
                transaction!!.hset(roleKeyByName, hashMapOf(
                    roleNameField to roleName,
                    roleTokenField to roleToken,
                    asymEncPublicKeyField to asymEncPublicKeyEncoded,
                    asymSigPublicKeyField to asymSigPublicKeyEncoded,
                    roleVersionNumberField to newRole.versionNumber.toString(),
                    statusField to newRole.status.toString(),
                ))
                listOfKeysToAdd.addAll(listOf(roleKeyByToken, roleKeyByName))

                OutcomeCode.CODE_000_SUCCESS
            }

            ElementStatus.DELETED -> {
                logger.warn { "Role $roleName was previously deleted" }
                OutcomeCode.CODE_014_ROLE_WAS_DELETED
            }
            else -> {
                logger.warn { "Role $roleName already present in the metadata" }
                OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS
            }
        }
    }

    /**
     * Add the [newFile] in the metadata and
     * return the outcome code. Check that the
     * file does not already exist or was deleted
     *
     * In this implementation, add the file as
     * an object, plus add the key of the file
     * in the list of OPERATIONAL files. Finally,
     * add the symmetric encryption key version
     * number of the file with as key the token
     * of the file
     */
    override fun addFile(newFile: File): OutcomeCode {
        val fileName = newFile.name
        val fileToken = newFile.token
        logger.info { "Adding the file $fileName in the metadata" }

        val fileKeyByName = "$fileObjectPrefix$byFileNameKeyPrefix$fileName"
        val fileKeyByToken = "$fileObjectPrefix$byFileTokenPrefix$fileToken"
        
        return when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
            null -> {
                logger.debug { "Adding the file $fileName with key $fileKeyByName" }
                transactionToExec = true
                logger.debug { "Adding the file $fileName to list of operational files with key $filesOperationalKey" }
                transaction!!.sadd(filesOperationalKey, fileKeyByName)
                transaction!!.hset(fileKeyByToken, hashMapOf(
                    fileTokenField to fileToken,
                    symEncKeyVersionNumberField to newFile.symEncKeyVersionNumber.toString(),
                    statusField to newFile.status.toString(),
                    enforcementField to newFile.enforcement.toString(),
                ))
                transaction!!.hset(fileKeyByName, hashMapOf(
                    fileNameField to fileName,
                    fileTokenField to fileToken,
                    symEncKeyVersionNumberField to newFile.symEncKeyVersionNumber.toString(),
                    statusField to newFile.status.toString(),
                    enforcementField to newFile.enforcement.toString(),
                ))
                listOfKeysToAdd.addAll(listOf(fileKeyByToken, fileKeyByName))
                OutcomeCode.CODE_000_SUCCESS
            }
            ElementStatus.DELETED -> {
                logger.warn { "File $fileName was previously deleted" }
                OutcomeCode.CODE_015_FILE_WAS_DELETED
            }
            else -> {
                logger.warn { "File $fileName already present in the metadata" }
                OutcomeCode.CODE_003_FILE_ALREADY_EXISTS
            }
        }
    }

    /**
     * Add the [newRoleTuples] in the metadata and
     * return the outcome code. Check that involved
     * users exist, are not incomplete or were not
     * deleted, and that involved roles exist and
     * were not deleted. Also check whether a role
     * tuple already exists
     *
     * In this implementation, add the (key of the) tuple
     * in two lists, holding the list of tuples for a
     * given username and the list of tuples of a given
     * role name, respectively. Finally, add the tuple
     * with as key the combination of the username and
     * the role name
     */
    override fun addRoleTuples(newRoleTuples: HashSet<RoleTuple>): OutcomeCode {
        val size = newRoleTuples.size
        if (size == 0) {
            logger.warn { "No role tuples given" }
            return OutcomeCode.CODE_000_SUCCESS
        }
        logger.info { "Adding $size role tuples in the metadata (one per row below)$dl" }
        newRoleTuples.forEachIndexed { index, roleTuple ->
            logger.info { "$index: user ${roleTuple.username} to role ${roleTuple.roleName}" }
        }

        var code = OutcomeCode.CODE_000_SUCCESS
        run error@{
            newRoleTuples.forEach { roleTuple ->

                val username = roleTuple.username
                val roleName = roleTuple.roleName

                /**
                 * Check that involved users exist, are
                 * not incomplete or were not deleted,
                 * and that involved roles exist and
                 * were not deleted
                 */
                val userKeyByName = "$userObjectPrefix$byUsernameKeyPrefix$username"
                code = if (listOfKeysToAdd.contains(userKeyByName)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (
                        getStatus(username, ElementTypeWithStatus.USER)
                    ) {
                        null -> {
                            logger.warn { "User $username was not found" }
                            OutcomeCode.CODE_004_USER_NOT_FOUND
                        }
                        ElementStatus.DELETED -> {
                            logger.warn { "User $username was previously deleted" }
                            OutcomeCode.CODE_013_USER_WAS_DELETED
                        }
                        ElementStatus.INCOMPLETE -> {
                            logger.warn { "User $username is incomplete" }
                            OutcomeCode.CODE_053_USER_IS_INCOMPLETE
                        }
                        else ->
                            OutcomeCode.CODE_000_SUCCESS
                    }
                }
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@error
                }

                val roleKeyByName = "$roleObjectPrefix$byRoleNameKeyPrefix$roleName"
                code = if (listOfKeysToAdd.contains(roleKeyByName)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (
                        getStatus(roleName, ElementTypeWithStatus.ROLE)
                    ) {
                        null -> {
                            logger.warn { "Role $roleName was not found" }
                            OutcomeCode.CODE_005_ROLE_NOT_FOUND
                        }
                        ElementStatus.DELETED -> {
                            logger.warn { "Role $roleName was previously deleted" }
                            OutcomeCode.CODE_014_ROLE_WAS_DELETED
                        }
                        else ->
                            OutcomeCode.CODE_000_SUCCESS
                    }
                }
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@error
                }



                val keyOfTuplesListByUser = "$roleTuplesListKeyPrefix$byUsernameKeyPrefix$username"
                val keyOfTuplesListByRole = "$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                val keyOfTuplesListByUserAndRole =
                    "$roleTuplesListKeyPrefix$byUsernameAndRoleNamePrefix$username$dl$roleName"
                val roleTupleKey = "$roleTuplesKeyPrefix$byUsernameAndRoleNamePrefix$username$dl$roleName"
                logger.debug { "Adding the role tuple of user $username and role $roleName" }

                if (!listOfKeysToDelete.contains(roleTupleKey) && jedisQuery!!.sismember(
                        keyOfTuplesListByUser,
                        roleTupleKey
                    )
                ) {
                    code = OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS
                    return@error
                } else {
                    logger.debug { "Adding the role tuple for user $username and role $roleName with key $roleTupleKey" }
                    transactionToExec = true
                    transaction!!.sadd(keyOfTuplesListByUser, roleTupleKey)
                    transaction!!.sadd(keyOfTuplesListByRole, roleTupleKey)
                    transaction!!.sadd(keyOfTuplesListByUserAndRole, roleTupleKey)
                    transaction!!.hset(
                        roleTupleKey, hashMapOf(
                            usernameField to username,
                            roleNameField to roleName,
                            encryptedAsymEncPublicKeyField to roleTuple.encryptedAsymEncKeys!!.public.encodeBase64(),
                            encryptedAsymEncPrivateKeyField to roleTuple.encryptedAsymEncKeys.private.encodeBase64(),
                            encryptedAsymSigPublicKeyField to roleTuple.encryptedAsymSigKeys!!.public.encodeBase64(),
                            encryptedAsymSigPrivateKeyField to roleTuple.encryptedAsymSigKeys.private.encodeBase64(),
                            roleVersionNumberField to roleTuple.roleVersionNumber.toString(),
                            signatureField to roleTuple.signature!!.encodeBase64(),
                        )
                    )
                    listOfKeysToAdd.add(roleTupleKey)
                }
            }
        }

        return code
    }

    /**
     * Add the [newPermissionTuples] in the metadata
     * and return the outcome code. Check that involved
     * roles exist and were not deleted and that involved
     * files exist and were not deleted. Also check whether
     * a permission tuple already exists
     *
     * In this implementation, add the (key of the) tuple
     * in three lists, holding the list of tuples for a
     * given role name, the list of tuples of a given
     * file name and the list of tuples for a combination
     * of a role and file name, respectively. Finally, add
     * the tuple with as key the combination of the role
     * name, the file name and the symmetric key version
     * number
     */
    override fun addPermissionTuples(newPermissionTuples: HashSet<PermissionTuple>): OutcomeCode {
        val size = newPermissionTuples.size
        if (size == 0) {
            logger.warn { "No permission tuples given" }
            return OutcomeCode.CODE_000_SUCCESS
        }
        logger.info { "Adding $size permission tuples in the metadata (one per row below)$dl" }
        newPermissionTuples.forEachIndexed { index, permissionTuple ->
            logger.info { "$index: role ${permissionTuple.roleName} to file ${permissionTuple.fileName} with number ${permissionTuple.symKeyVersionNumber}" }
        }

        var code = OutcomeCode.CODE_000_SUCCESS
        run error@{
            newPermissionTuples.forEach { permissionTuple ->
                val roleName = permissionTuple.roleName
                val fileName = permissionTuple.fileName



                /**
                 * Check that involved roles exist and
                 * were not deleted and that involved
                 * files exist and were not deleted
                 */
                val roleKeyByName = "$roleObjectPrefix$byRoleNameKeyPrefix$roleName"
                code = if (listOfKeysToAdd.contains(roleKeyByName)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (
                        getStatus(roleName, ElementTypeWithStatus.ROLE)
                    ) {
                        null -> {
                            logger.warn { "Role $roleName was not found" }
                            OutcomeCode.CODE_005_ROLE_NOT_FOUND
                        }
                        ElementStatus.DELETED -> {
                            logger.warn { "Role $roleName was previously deleted" }
                            OutcomeCode.CODE_014_ROLE_WAS_DELETED
                        }
                        else ->
                            OutcomeCode.CODE_000_SUCCESS
                    }
                }
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@error
                }

                val fileKeyByName = "$fileObjectPrefix$byFileNameKeyPrefix$fileName"
                code = if (listOfKeysToAdd.contains(fileKeyByName)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
                        null -> {
                            logger.warn { "File $fileName was not found" }
                            OutcomeCode.CODE_006_FILE_NOT_FOUND
                        }
                        ElementStatus.DELETED -> {
                            logger.warn { "File $fileName was previously deleted" }
                            OutcomeCode.CODE_015_FILE_WAS_DELETED
                        }
                        else ->
                            OutcomeCode.CODE_000_SUCCESS
                    }
                }
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@error
                }



                val keyOfTuplesListByRole = "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                val keyOfTuplesListByFile = "$permissionTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
                val keyOfTuplesListByRoleAndFile =
                    "$permissionTuplesListKeyPrefix$byRoleAndFileNameKeyPrefix${roleName}${dl}$fileName"
                val symKeyVersionNumber = permissionTuple.symKeyVersionNumber
                val permissionTupleKey =
                    "$permissionTuplesKeyPrefix$byRoleAndFileNameKeyPrefix$roleName$dl$fileName$dl$symKeyVersionNumber"

                if (!listOfKeysToDelete.contains(permissionTupleKey) && jedisQuery!!.sismember(
                        keyOfTuplesListByRole,
                        permissionTupleKey
                    )
                ) {
                    logger.warn { "Permission tuple for role $roleName and file $fileName already exists" }
                    code = OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
                    return@error
                } else {
                    logger.debug { "Adding the permission tuple for role $roleName and file $fileName with key $permissionTupleKey" }
                    transactionToExec = true
                    transaction!!.sadd(keyOfTuplesListByRole, permissionTupleKey)
                    transaction!!.sadd(keyOfTuplesListByFile, permissionTupleKey)
                    transaction!!.sadd(keyOfTuplesListByRoleAndFile, permissionTupleKey)
                    transaction!!.hset(
                        permissionTupleKey, hashMapOf(
                            roleNameField to roleName,
                            fileNameField to fileName,
                            roleTokenField to permissionTuple.roleToken,
                            fileTokenField to permissionTuple.fileToken,
                            encryptedSymKeyField to permissionTuple.encryptedSymKey!!.key.encodeBase64(),
                            symKeyVersionNumberField to permissionTuple.symKeyVersionNumber.toString(),
                            roleVersionNumberField to permissionTuple.roleVersionNumber.toString(),
                            permissionField to permissionTuple.permission.toString(),
                            signerTokenField to permissionTuple.signer,
                            signatureField to permissionTuple.signature!!.encodeBase64(),
                        )
                    )
                    listOfKeysToAdd.add(permissionTupleKey)
                }
            }
        }

        return code
    }

    /**
     * Add the [newFileTuples] in the metadata and
     * return the outcome code. Check that involved
     * files exist and were not deleted. Also check
     * whether a file tuple already exists
     *
     * In this implementation, add the (key of the) tuple
     * in one list, holding the list of tuples for a
     * given file name. Finally, add the tuple with as key
     * the file name
     */
    override fun addFileTuples(newFileTuples: HashSet<FileTuple>): OutcomeCode {
        val size = newFileTuples.size
        if (size == 0) {
            logger.warn { "No file tuples given" }
            return OutcomeCode.CODE_000_SUCCESS
        }
        logger.info { "Adding $size file tuples in the metadata (one per row below)$dl" }
        newFileTuples.forEachIndexed { index, fileTuple ->
            logger.info { "$index: file ${fileTuple.fileName}" }
        }

        var code = OutcomeCode.CODE_000_SUCCESS
        run error@{
            newFileTuples.forEach { fileTuple ->
                val fileName = fileTuple.fileName



                val fileKeyByName = "$fileObjectPrefix$byFileNameKeyPrefix$fileName"
                code = if (listOfKeysToAdd.contains(fileKeyByName)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
                        null -> {
                            logger.warn { "File $fileName was not found" }
                            OutcomeCode.CODE_006_FILE_NOT_FOUND
                        }
                        ElementStatus.DELETED -> {
                            logger.warn { "File $fileName was previously deleted" }
                            OutcomeCode.CODE_015_FILE_WAS_DELETED
                        }
                        else ->
                            OutcomeCode.CODE_000_SUCCESS
                    }
                }
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@error
                }



                val fileTupleKey = "$fileTuplesKeyPrefix$byFileNameKeyPrefix$fileName"
                val keyOfTuplesListByFile = "$fileTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"

                if (!listOfKeysToDelete.contains(fileTupleKey) && jedisQuery!!.sismember(
                        keyOfTuplesListByFile,
                        fileTupleKey
                    )
                ) {
                    logger.warn { "File tuple for file $fileName already exists" }
                    code = OutcomeCode.CODE_012_FILETUPLE_ALREADY_EXISTS
                    return@error
                } else {
                    logger.debug { "Adding the file tuple for file $fileName with key $fileTupleKey" }
                    transactionToExec = true
                    transaction!!.sadd(keyOfTuplesListByFile, fileTupleKey)
                    transaction!!.hset(
                        fileTupleKey, hashMapOf(
                            fileNameField to fileName,
                            fileTokenField to fileTuple.fileToken,
                            symDecKeyVersionNumberField to fileTuple.symDecKeyVersionNumber.toString(),
                            enforcementField to fileTuple.enforcement.toString(),
                            roleTokenField to fileTuple.roleToken,
                            signerTokenField to fileTuple.signer!!,
                            signatureField to fileTuple.signature!!.encodeBase64(),
                        )
                    )
                    listOfKeysToAdd.add(fileTupleKey)
                }
            }
        }

        return code
    }

    /**
     * Retrieve data of the users matching the specified
     * [username] and [status], if given, starting from
     * the [offset] limiting the number of users to return
     * to the given [limit]. If no users are found, return
     * an empty set
     */
    override fun getUsers(
        username: String?,
        status: ElementStatus?,
        offset: Int, limit: Int
    ): HashSet<User> {
        logger.info { "Getting data of users (offset $offset, limit $limit)" }

        val users = HashSet<User>()
        val keyOfUsersToGet = hashSetOf<String>()

        /** Get the keys of all users, depending on the [status] value */
        if (username.isNullOrBlank()) {
            if (status != null) {
                logger.info { "Filtering by matching status $status" }
            }
            if (status == null || status == ElementStatus.OPERATIONAL) {
                logger.debug { "Getting keys of operational users" }
                keyOfUsersToGet.addAll(jedisQuery!!.smembers(usersOperationalKey))
            }
            if (status == null || status == ElementStatus.INCOMPLETE) {
                logger.debug { "Getting keys of incomplete users" }
                keyOfUsersToGet.addAll(jedisQuery!!.smembers(usersIncompleteKey))
            }
            if (status == null || status == ElementStatus.DELETED) {
                logger.debug { "Getting keys of deleted users" }
                keyOfUsersToGet.addAll(jedisQuery!!.smembers(usersDeletedKey))
            }
        }
        /** Get the key of the user with the [username] if the status matches */
        else {
            logger.info { "Filtering by matching username $username" }
            val userKeyByName = "$userObjectPrefix$byUsernameKeyPrefix$username"
            if (jedisQuery!!.exists(userKeyByName)) {
                keyOfUsersToGet.add(userKeyByName)
            }
        }

        logger.debug { "Found ${keyOfUsersToGet.size} users to fetch" }

        /** Get all users from the keys collected */
        keyOfUsersToGet.forEach { userKey ->
            logger.debug { "Retrieving data of user with key $userKey" }
            val userValues = jedisQuery!!.hgetAll(userKey)
            users.add(
                User(
                    name = userValues[usernameField]!!,
                    status = ElementStatus.valueOf(userValues[statusField]!!),
                    isAdmin = userValues[userIsAdminField]!!.toBooleanStrict(),
                ).apply {
                    token =  userValues[userTokenField]!!
                }
            )
        }

        logger.debug { "Found ${users.size} users" }
        return users
    }

    /**
     * Retrieve data of the roles matching the specified
     * [roleName] and [status], if given, starting from
     * the [offset] limiting the number of roles to return
     * to the given [limit]. If no roles are found, return
     * an empty set
     */
    override fun getRoles(
        roleName: String?,
        status: ElementStatus?,
        offset: Int, limit: Int
    ): HashSet<Role> {
        logger.info { "Getting data of roles (offset $offset, limit $limit)" }

        val roles = HashSet<Role>()
        val keyOfRolesToGet = hashSetOf<String>()

        /** Get the keys of all roles, depending on the [status] value */
        if (roleName.isNullOrBlank()) {
            if (status != null) {
                logger.info { "Filtering by matching status $status" }
            }
            if (status == null || status == ElementStatus.DELETED) {
                logger.debug { "Getting keys of deleted roles" }
                keyOfRolesToGet.addAll(jedisQuery!!.smembers(rolesDeletedKey))
            }
            if (status == null || status == ElementStatus.OPERATIONAL) {
                logger.debug { "Getting keys of operational roles" }
                keyOfRolesToGet.addAll(jedisQuery!!.smembers(rolesOperationalKey))
            }
        }
        /** Get the key of the role with the [roleName] if the status matches */
        else {
            logger.info { "Filtering by matching role name $roleName" }
            val keyOfRole = "$roleObjectPrefix$byRoleNameKeyPrefix$roleName"
            if (jedisQuery!!.exists(keyOfRole)) {
                keyOfRolesToGet.add(keyOfRole)
            }
        }

        logger.debug { "Found ${keyOfRolesToGet.size} roles to fetch" }

        /** Get all roles from the keys collected */
        keyOfRolesToGet.forEach { roleKey ->
            logger.debug { "Retrieving data of role with key $roleKey" }
            val roleValues = jedisQuery!!.hgetAll(roleKey)
            roles.add(
                Role(
                    name = roleValues[roleNameField]!!,
                    status = ElementStatus.valueOf(roleValues[statusField]!!),
                    versionNumber = roleValues[roleVersionNumberField]!!.toInt(),
                ).apply {
                    token =  roleValues[roleTokenField]!!
                }
            )
        }

        logger.debug { "Found ${roles.size} roles" }
        return roles
    }

    /**
     * Retrieve data of the files matching the specified
     * [fileName] and [status], if given, starting from
     * the [offset] limiting the number of files to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no files are found, return an empty set
     */
    override fun getFiles(
        fileName: String?,
        status: ElementStatus?,
        isAdmin: Boolean,
        offset: Int, limit: Int
    ): HashSet<File> {
        logger.info { "Getting data of files (offset $offset, limit $limit)" }

        val files = HashSet<File>()
        val keyOfFilesToGet = hashSetOf<String>()

        /** Get the keys of all files, depending on the [status] value */
        if (fileName.isNullOrBlank()) {
            if (status != null) {
                logger.info { "Filtering by matching status $status" }
            }
            if (status == null || status == ElementStatus.DELETED) {
                logger.debug { "Getting keys of deleted files" }
                keyOfFilesToGet.addAll(jedisQuery!!.smembers(filesDeletedKey))
            }
            if (status == null || status == ElementStatus.OPERATIONAL) {
                logger.debug { "Getting keys of operational files" }
                keyOfFilesToGet.addAll(jedisQuery!!.smembers(filesOperationalKey))
            }
        }
        /** Get the key of the file with the [fileName] if the status matches */
        else {
            logger.info { "Filtering by matching file name $fileName" }
            val keyOfFile = "$fileObjectPrefix$byFileNameKeyPrefix$fileName"
            if (jedisQuery!!.exists(keyOfFile)) {
                keyOfFilesToGet.add(keyOfFile)
            }
        }

        logger.debug { "Found ${keyOfFilesToGet.size} files to fetch" }

        /** Get all files from the keys collected */
        keyOfFilesToGet.forEach { fileKey ->
            logger.debug { "Retrieving data of file with key $fileKey" }
            val fileValues = jedisQuery!!.hgetAll(fileKey)
            files.add(
                File(
                    name = fileValues[fileNameField]!!,
                    symEncKeyVersionNumber = fileValues[symEncKeyVersionNumberField]!!.toInt(),
                    status = ElementStatus.valueOf(fileValues[statusField]!!),
                    enforcement = EnforcementType.valueOf(fileValues[enforcementField]!!),
                ).apply {
                    token = fileValues[fileTokenField]!!
                }
            )
        }

        logger.debug { "Found ${files.size} files" }
        return files
    }

    /**
     * Retrieve the role tuples matching the [username]
     * and/or the [roleName], starting from the [offset]
     * limiting the number of tuples to return to the
     * given [limit] and with the (possibly) relevant
     * information of whether the user invoking this
     * function [isAdmin]. If no role tuples are found,
     * return an empty set
     */
    override fun getRoleTuples(
        username: String?,
        roleName: String?,
        isAdmin: Boolean,
        offset: Int, limit: Int
    ): HashSet<RoleTuple> {
        logger.info { "Getting data of role tuples (offset $offset, limit $limit)" }

        val roleTuples = HashSet<RoleTuple>()
        val givenUsername = !username.isNullOrBlank()
        val givenRoleName = !roleName.isNullOrBlank()

        /** Get the keys of all role tuples */
        val keyOfRoleTuplesToGet = hashSetOf<String>()
        if (givenUsername && givenRoleName) {
            logger.info { "Filtering by matching username $username and role name $roleName" }
            val roleTupleKey = "$roleTuplesListKeyPrefix$byUsernameAndRoleNamePrefix$username$dl$roleName"
            keyOfRoleTuplesToGet.addAll(jedisQuery!!.smembers(roleTupleKey))
        }
        else if (givenUsername) {
            logger.info { "Filtering by matching username $username" }
            val roleTuplesKeyByUsername = "$roleTuplesListKeyPrefix$byUsernameKeyPrefix$username"
            keyOfRoleTuplesToGet.addAll(jedisQuery!!.smembers(roleTuplesKeyByUsername))
        } else if (givenRoleName) {
            logger.info { "Filtering by matching role name $roleName" }
            val roleTuplesKeyByRoleName = "$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
            keyOfRoleTuplesToGet.addAll(jedisQuery!!.smembers(roleTuplesKeyByRoleName))
        } else {
            /**
             * If a username is not specified (and we do
             * not have a role name), get all usernames
             */
            logger.info { "Filtering by all usernames" }
            getUsers(status = ElementStatus.OPERATIONAL).forEach {
                val roleTuplesKeyByUsername = "$roleTuplesListKeyPrefix$byUsernameKeyPrefix${it.name}"
                keyOfRoleTuplesToGet.addAll(jedisQuery!!.smembers(roleTuplesKeyByUsername))
            }
        }

        logger.debug { "Found ${keyOfRoleTuplesToGet.size} role tuples to fetch" }

        /** Get all role tuples from the keys collected */
        keyOfRoleTuplesToGet.forEach { roleTupleKey ->
            logger.debug { "Retrieving data of role tuple with key $roleTupleKey" }
            val roleTupleValues = jedisQuery!!.hgetAll(roleTupleKey)
            roleTuples.add(
                RoleTuple(
                    username = roleTupleValues[usernameField]!!,
                    roleName = roleTupleValues[roleNameField]!!,
                    encryptedAsymEncKeys = EncryptedAsymKeys(
                      public = roleTupleValues[encryptedAsymEncPublicKeyField]!!.decodeBase64(),
                      private = roleTupleValues[encryptedAsymEncPrivateKeyField]!!.decodeBase64(),
                      keysType = AsymKeysType.ENC,
                    ),
                    encryptedAsymSigKeys = EncryptedAsymKeys(
                        public = roleTupleValues[encryptedAsymSigPublicKeyField]!!.decodeBase64(),
                        private = roleTupleValues[encryptedAsymSigPrivateKeyField]!!.decodeBase64(),
                        keysType = AsymKeysType.SIG,
                    ),
                    roleVersionNumber = roleTupleValues[roleVersionNumberField]!!.toInt(),
                ).apply {
                    updateSignature(
                        newSignature = roleTupleValues[signatureField]!!.decodeBase64(),
                        newSigner = ADMIN,
                        newSignerType = ElementTypeWithKey.USER
                    )
                }
            )
        }

        logger.debug { "Found ${roleTuples.size} role tuples" }
        return roleTuples
    }


    /**
     * Retrieve the permission tuples matching the [roleName] and/or
     * the [fileName], further filtering by [roleToken], [fileToken],
     * [permission], [roleVersionNumber] and [symKeyVersionNumber] and
     * not matching the [roleNameToExclude], if given, starting from
     * the [offset] limiting the number of tuples to return to the given
     * [limit] and with the (possibly) relevant information of whether
     * the user invoking this function [isAdmin]. If no permission tuples
     * are found, return an empty set
     */
    override fun getPermissionTuples(
        roleName: String?,
        fileName: String?,
        roleToken: String?,
        fileToken: String?,
        permission: PermissionType?,
        roleNameToExclude: String?,
        roleVersionNumber: Int?,
        symKeyVersionNumber: Int?,
        isAdmin: Boolean,
        offset: Int, limit: Int
    ): HashSet<PermissionTuple> {
        logger.info { "Getting data of permission tuples (offset $offset, limit $limit)" }

        val permissionTuples = HashSet<PermissionTuple>()
        val givenRoleName = !roleName.isNullOrBlank()
        val givenFileName = !fileName.isNullOrBlank()

        /** Get the keys of all permission tuples */
        val keyOfPermissionTuplesToGet = hashSetOf<String>()
        if (givenRoleName && givenFileName) {
            logger.info { "Filtering by matching role name $roleName and file name $fileName" }
            val permissionTuplesKeyByRoleAndFileName = "$permissionTuplesListKeyPrefix$byRoleAndFileNameKeyPrefix${roleName}${dl}$fileName"
            keyOfPermissionTuplesToGet.addAll(jedisQuery!!.smembers(permissionTuplesKeyByRoleAndFileName))
        } else if (givenRoleName) {
            logger.info { "Filtering by matching role name $roleName" }
            val permissionTuplesKeyByRoleName = "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
            keyOfPermissionTuplesToGet.addAll(jedisQuery!!.smembers(permissionTuplesKeyByRoleName))
        } else if (givenFileName) {
            logger.info { "Filtering by matching file name $fileName" }
            val permissionTuplesKeyByFileName = "$permissionTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
            keyOfPermissionTuplesToGet.addAll(jedisQuery!!.smembers(permissionTuplesKeyByFileName))
        } else {
            /**
             * If a role name is not specified (and we do
             * not have a file name), get all role names
             */
            logger.info { "Filtering by all role names" }
            getRoles(status = ElementStatus.OPERATIONAL).forEach {
                val permissionTuplesKeyByRoleName = "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix${it.name}"
                keyOfPermissionTuplesToGet.addAll(jedisQuery!!.smembers(permissionTuplesKeyByRoleName))
            }
        }

        /** Filter by parameters in key of permission tuple */
        keyOfPermissionTuplesToGet.retainAll {
            (symKeyVersionNumber == null || it.split(dl)[4].toInt() == symKeyVersionNumber) &&
            (roleNameToExclude == null || it.split(dl)[2] != roleNameToExclude)
        }
        logger.debug { "Found ${keyOfPermissionTuplesToGet.size} permission tuples to fetch" }

        /** Get all permission tuples from the keys collected */
        keyOfPermissionTuplesToGet.forEach { permissionTupleKey ->
            logger.debug { "Retrieving data of permission tuple with key $permissionTupleKey" }
            val permissionTupleValues = jedisQuery!!.hgetAll(permissionTupleKey)
            permissionTuples.add(
                PermissionTuple(
                    roleName = permissionTupleValues[roleNameField]!!,
                    fileName = permissionTupleValues[fileNameField]!!,
                    roleToken = permissionTupleValues[roleTokenField]!!,
                    fileToken = permissionTupleValues[fileTokenField]!!,
                    encryptedSymKey = EncryptedSymKey(
                        key = permissionTupleValues[encryptedSymKeyField]!!.decodeBase64(),
                    ),
                    roleVersionNumber = permissionTupleValues[roleVersionNumberField]!!.toInt(),
                    symKeyVersionNumber = permissionTupleValues[symKeyVersionNumberField]!!.toInt(),
                    permission = PermissionType.valueOf(permissionTupleValues[permissionField]!!),
                ).apply {
                    updateSignature(
                        newSignature = permissionTupleValues[signatureField]!!.decodeBase64(),
                        newSigner = permissionTupleValues[signerTokenField]!!,
                        newSignerType = ElementTypeWithKey.USER
                    )
                }
            )
        }

        /** Filter by remaining parameters */
        permissionTuples.retainAll {
            (roleVersionNumber == null || it.roleVersionNumber == roleVersionNumber)
        }

        logger.debug { "Found ${permissionTuples.size} permission tuples" }
        return permissionTuples
    }

    /**
     * Retrieve the file tuples matching the [fileName] starting
     * from the [offset] limiting the number of tuples to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no file tuples are found, return an empty set
     */
    override fun getFileTuples(
        fileName: String,
        isAdmin: Boolean,
        offset: Int,
        limit: Int
    ): HashSet<FileTuple> {
        logger.info { "Getting data of file tuples (offset $offset, limit $limit)" }

        val fileTuples = HashSet<FileTuple>()
        val givenFileName = fileName.isNotBlank()
        if (!givenFileName) {
            val message = "File name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        /** Get the keys of all file tuples */
        val keyOfFileTuplesToGet = hashSetOf<String>()
        logger.info { "Filtering by matching file name $fileName" }
        val fileTuplesKeyByFileName = "$fileTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
        keyOfFileTuplesToGet.addAll(jedisQuery!!.smembers(fileTuplesKeyByFileName))

        logger.debug { "Found ${keyOfFileTuplesToGet.size} file tuples to fetch" }

        /** Get all file tuples from the keys collected */
        keyOfFileTuplesToGet.forEach { fileTupleKey ->
            logger.debug { "Retrieving data of file tuple with key $fileTupleKey" }
            val fileTupleValues = jedisQuery!!.hgetAll(fileTupleKey)
            fileTuples.add(

                FileTuple(
                    fileName = fileTupleValues[fileNameField]!!,
                    fileToken = fileTupleValues[fileTokenField]!!,
                    roleToken = fileTupleValues[roleTokenField]!!,
                    symDecKeyVersionNumber = fileTupleValues[symDecKeyVersionNumberField]!!.toInt(),
                    enforcement = EnforcementType.valueOf(fileTupleValues[enforcementField]!!),
                ).apply {
                    updateSignature(
                        newSignature = fileTupleValues[signatureField]!!.decodeBase64(),
                        newSigner = fileTupleValues[signerTokenField]!!,
                        newSignerType = ElementTypeWithKey.USER
                    )
                }
            )
        }

        logger.debug { "Found ${fileTuples.size} file tuples" }
        return fileTuples
    }

    /**
     * Retrieve the public asymmetric key of the given
     * [asymKeyType] belonging to the element of the
     * specified [elementType] by matching the [name] or
     * the [token] (at least one required). Note that
     * only operational or deleted elements are considered,
     * and files do not have public keys. If the key was
     * not found, return null
     */
    override fun getPublicKey(
        name: String?,
        token: String?,
        elementType: ElementTypeWithKey,
        asymKeyType: AsymKeysType
    ): ByteArray? {
        logger.info { "Getting public key of type $asymKeyType of a element of type $elementType" }

        val givenName = !name.isNullOrBlank()
        val givenToken = !token.isNullOrBlank()
        if (!givenName && !givenToken) {
            val message = "Neither name nor token given for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val fieldOfKeyToGet = when (asymKeyType) {
            AsymKeysType.ENC -> asymEncPublicKeyField
            AsymKeysType.SIG -> asymSigPublicKeyField
        }

        val keyOfElement = if (givenName) {
            when (elementType) {
                ElementTypeWithKey.USER -> "$userObjectPrefix$byUsernameKeyPrefix$name"
                ElementTypeWithKey.ROLE -> "$roleObjectPrefix$byRoleNameKeyPrefix$name"
            }
        }
        else {
            when (elementType) {
                ElementTypeWithKey.USER -> "$userObjectPrefix$byUserTokenPrefix$token"
                ElementTypeWithKey.ROLE -> "$roleObjectPrefix$byRoleTokenPrefix$token"
            }
        }

        val elementData = jedisQuery!!.hgetAll(keyOfElement)
        return when (elementData[statusField]?.let { ElementStatus.valueOf(it) }) {
            ElementStatus.OPERATIONAL -> elementData[fieldOfKeyToGet]?.decodeBase64()
            ElementStatus.DELETED -> elementData[fieldOfKeyToGet]?.decodeBase64()
            ElementStatus.INCOMPLETE -> null
            null -> null
        }
    }

    /**
     * Retrieve the version number belonging to the element
     * of the specified [elementType] by matching the [name]
     * or [token] (at least one required). Note that only
     * operational elements are considered, and users do not
     * have version numbers. Note also that only the latest
     * version number of files (i.e., the one used for encryption
     * are considered). If the version number was not found,
     * return null
     */
    override fun getVersionNumber(
        name: String?,
        token: String?,
        elementType: ElementTypeWithVersionNumber
    ): Int? {
        logger.info { "Getting version number of a $elementType" }

        val givenName = !name.isNullOrBlank()
        val givenToken = !token.isNullOrBlank()
        if (!givenName && !givenToken) {
            val message = "Neither name nor token given for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val fieldOfVersionNumberToGet = when (elementType) {
            ElementTypeWithVersionNumber.ROLE -> roleVersionNumberField
            ElementTypeWithVersionNumber.FILE -> symEncKeyVersionNumberField
        }

        val keyOfElement = if (givenName) {
            when (elementType) {
                ElementTypeWithVersionNumber.ROLE -> "$roleObjectPrefix$byRoleNameKeyPrefix$name"
                ElementTypeWithVersionNumber.FILE -> "$fileObjectPrefix$byFileNameKeyPrefix$name"
            }
        }
        else {
            when (elementType) {
                ElementTypeWithVersionNumber.ROLE -> "$roleObjectPrefix$byRoleTokenPrefix$token"
                ElementTypeWithVersionNumber.FILE -> "$fileObjectPrefix$byFileTokenPrefix$token"
            }
        }

        val elementData = jedisQuery!!.hgetAll(keyOfElement)
        return if (elementData[statusField]?.let { ElementStatus.valueOf(it) } == ElementStatus.OPERATIONAL) {
            elementData[fieldOfVersionNumberToGet]?.toInt()
        } else {
            null
        }
    }

    /**
     * Retrieve the token of the element of
     * the given [type] matching the [name].
     * Note that only operational elements are
     * considered. If the token was not found,
     * return null
     */
    override fun getToken(name: String, type: ElementTypeWithStatus): String? {
        logger.debug { "Get the token of element $type with name $name" }

        /** Guard clauses */
        if (name.isBlank()) {
            val message = "Name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val fieldOfKeyToGet = when (type) {
            ElementTypeWithStatus.USER -> userTokenField
            ElementTypeWithStatus.ROLE -> roleTokenField
            ElementTypeWithStatus.FILE -> fileTokenField
        }

        val keyOfElement = "${when (type) {
            ElementTypeWithStatus.USER -> "$userObjectPrefix$byUsernameKeyPrefix"
            ElementTypeWithStatus.ROLE -> "$roleObjectPrefix$byRoleNameKeyPrefix"
            ElementTypeWithStatus.FILE -> "$fileObjectPrefix$byFileNameKeyPrefix"
        }}$name"

        val elementData = jedisQuery!!.hgetAll(keyOfElement)
        return if (elementData[statusField]?.let { ElementStatus.valueOf(it) } == ElementStatus.OPERATIONAL) {
            elementData[fieldOfKeyToGet]
        } else {
            null
        }
    }

    /**
     * Retrieve the status of the element of the
     * given [type] matching the given [name].
     * If the status was not found, return null
     */
    override fun getStatus(name: String, type: ElementTypeWithStatus): ElementStatus? {
        logger.debug { "Getting the status of element $type with name $name" }

        /** Guard clauses */
        if (name.isBlank()) {
            val message = "Name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val keyOfElement = "${when (type) {
            ElementTypeWithStatus.USER -> "$userObjectPrefix$byUsernameKeyPrefix"
            ElementTypeWithStatus.ROLE -> "$roleObjectPrefix$byRoleNameKeyPrefix"
            ElementTypeWithStatus.FILE -> "$fileObjectPrefix$byFileNameKeyPrefix"
        }}$name"

        return jedisQuery!!.hget(keyOfElement, statusField)?.let { ElementStatus.valueOf(it) }
    }



    /**
     * Delete the [username] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a user (e.g., the public key to verify digital
     * signatures). Finally, return the outcome code.
     * Check that the user exists and was not already
     * deleted. Check that [username] is not the admin
     *
     * In this implementation, change the status of the
     * [username] to deleted, move the key to the list
     * of deleted users and delete the user at Redis level
     */
    override fun deleteUser(username: String): OutcomeCode {
        logger.info { "Deleting user $username" }

        /** Guard Clauses */
        if (username == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN user" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        val userKeyByName = "$userObjectPrefix$byUsernameKeyPrefix$username"

        return when (val status = getStatus(username, ElementTypeWithStatus.USER)) {
            null -> {
                OutcomeCode.CODE_004_USER_NOT_FOUND
            }
            ElementStatus.DELETED -> {
                OutcomeCode.CODE_013_USER_WAS_DELETED
            }
            else -> {
                logger.info { "Deleting user with key $userKeyByName" }
                transactionToExec = true
                transaction!!.srem(if (status == ElementStatus.INCOMPLETE) {
                    usersIncompleteKey
                } else {
                    usersOperationalKey
                }, userKeyByName)
                transaction!!.sadd(usersDeletedKey, userKeyByName)
                transaction!!.hset(userKeyByName, statusField, ElementStatus.DELETED.toString())

                if (status == ElementStatus.OPERATIONAL) {
                    val userToken = getToken(username, ElementTypeWithStatus.USER)
                    val userKeyByToken = "$userObjectPrefix$byUserTokenPrefix$userToken"
                    transaction!!.hset(userKeyByToken, statusField, ElementStatus.DELETED.toString())
                }

                logger.debug { "Deleting the user from the Redis database" }
                return if (jedisQuery!!.aclDelUser(username) == 1L) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    OutcomeCode.CODE_056_DELETE_USER_MM
                }
            }
        }
    }

    /**
     * Delete the [roleName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a role (e.g., the public key to verify digital
     * signatures). Finally, return the outcome code.
     * Check that the role exists and was not already
     * deleted. Check that [roleName] is not the admin
     *
     * In this implementation, change the status of the [roleName]
     * to deleted and move the key to the list of deleted roles
     */
    override fun deleteRole(roleName: String): OutcomeCode {
        logger.info { "Deleting role $roleName" }

        /** Guard Clauses */
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        val roleKeyByName = "$roleObjectPrefix$byRoleNameKeyPrefix$roleName"

        return when (getStatus(roleName, ElementTypeWithStatus.ROLE)) {
            null -> {
                OutcomeCode.CODE_005_ROLE_NOT_FOUND
            }
            ElementStatus.DELETED -> {
                OutcomeCode.CODE_014_ROLE_WAS_DELETED
            }
            else -> {
                logger.info { "Deleting role with key $roleKeyByName" }
                transactionToExec = true
                transaction!!.srem(rolesOperationalKey, roleKeyByName)
                transaction!!.sadd(rolesDeletedKey, roleKeyByName)
                transaction!!.hset(roleKeyByName, statusField, ElementStatus.DELETED.toString())

                val roleToken = getToken(roleName, ElementTypeWithStatus.ROLE)
                val roleKeyByToken = "$roleObjectPrefix$byRoleTokenPrefix$roleToken"
                transaction!!.hset(roleKeyByToken, statusField, ElementStatus.DELETED.toString())

                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }

    /**
     * Delete the [fileName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a file. Finally, return the outcome code.
     * Check that the file exists and was not already
     * deleted
     *
     * In this implementation, change the status of the [fileName]
     * to deleted and move the key to the list of deleted files
     */
    override fun deleteFile(fileName: String): OutcomeCode {
        logger.info { "Deleting file $fileName" }

        val fileKeyByName = "$fileObjectPrefix$byFileNameKeyPrefix$fileName"

        return when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
            null -> {
                OutcomeCode.CODE_006_FILE_NOT_FOUND
            }
            ElementStatus.DELETED -> {
                OutcomeCode.CODE_015_FILE_WAS_DELETED
            }
            else -> {
                logger.info { "Deleting file with key $fileKeyByName" }
                transactionToExec = true
                transaction!!.srem(filesOperationalKey, fileKeyByName)
                transaction!!.sadd(filesDeletedKey, fileKeyByName)
                transaction!!.hset(fileKeyByName, statusField, ElementStatus.DELETED.toString())

                val fileToken = getToken(fileName, ElementTypeWithStatus.FILE)
                val fileKeyByToken = "$fileObjectPrefix$byFileTokenPrefix$fileToken"
                transaction!!.hset(fileKeyByToken, statusField, ElementStatus.DELETED.toString())

                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }



    /**
     * Delete the role tuples matching the given
     * [roleName] and return the outcome code.
     * Check that [roleName] is not the admin.
     * Also check that at least one role tuple
     * is deleted, and if not check whether the
     * [roleName] exists and was not deleted
     *
     * In this implementation, delete the tuples
     * with the [roleName] and remove the related
     * keys from the lists of tuples related to
     * the users and the roles
     */
    override fun deleteRoleTuples(roleName: String): OutcomeCode {
        logger.info { "Deleting role tuples for role name $roleName" }

        /** Guard Clauses */
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        /** Get the keys of all role tuples to delete */
        val keyOfRoleTuplesToDelete = hashSetOf<String>()
        val roleTuplesKeyByRoleName = "$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
        keyOfRoleTuplesToDelete.addAll(jedisQuery!!.smembers(roleTuplesKeyByRoleName))
        val size = keyOfRoleTuplesToDelete.size
        logger.debug { "Found $size role tuples to delete" }

        return if (size == 0) {
            when (getStatus(roleName, ElementTypeWithStatus.ROLE)) {
                ElementStatus.INCOMPLETE -> {
                    val message = "Role $roleName has incomplete status"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                ElementStatus.OPERATIONAL -> OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
                ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
            }
        } else {
            transactionToExec = true
            keyOfRoleTuplesToDelete.forEach { roleTupleKey ->
                logger.debug { "Deleting role tuple with key $roleTupleKey" }
                transaction!!.del(roleTupleKey)
                listOfKeysToDelete.add(roleTupleKey)
                val userInvolved = roleTupleKey.split(dl)[2]
                transaction!!.srem("$roleTuplesListKeyPrefix$byUsernameKeyPrefix$userInvolved", roleTupleKey)
                transaction!!.srem("$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName", roleTupleKey)
                transaction!!.srem("$roleTuplesListKeyPrefix$byUsernameAndRoleNamePrefix$userInvolved$dl$roleName", roleTupleKey)
            }
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Delete the permission tuples matching the [roleName]
     * and/or the [fileName] (at least one required), further
     * filtering by [roleVersionNumber], if given. Finally,
     * return the outcome code. Check that [roleName] is not
     * the admin. Also check that at least one permission tuple
     * is deleted, and if not check whether the [roleName] and
     * the [fileName] exist and were not deleted
     *
     * In this implementation, delete the tuples related to the
     * [roleName], if given, the tuples related to the [fileName],
     * if given, or the tuples related to both [roleName] and
     * [fileName]. Also, remove the related keys from the list of
     * tuples related to the involved roles, involved users and
     * combination of involved users and roles
     */
    override fun deletePermissionTuples(
        roleName: String?,
        fileName: String?,
        roleVersionNumber: Int?
    ): OutcomeCode {
        logger.info { "Deleting permission tuples" }

        /** Guard Clauses */
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }
        val givenRoleName = !roleName.isNullOrBlank()
        val givenFileName = !fileName.isNullOrBlank()
        if (!givenRoleName && !givenFileName) {
            val message = "Neither role nor file name given for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        /** Get the keys of all permission tuples to delete */
        val keyOfPermissionTuplesToDelete = hashSetOf<String>()
        if (givenRoleName && givenFileName) {
            logger.info { "Filtering by matching role name $roleName and file name $fileName" }
            val permissionTuplesKeyByRoleAndFileName = "$permissionTuplesListKeyPrefix$byRoleAndFileNameKeyPrefix${roleName}${dl}$fileName"
            keyOfPermissionTuplesToDelete.addAll(jedisQuery!!.smembers(permissionTuplesKeyByRoleAndFileName))
        } else if (givenRoleName) {
            logger.info { "Filtering by matching role name $roleName" }
            val permissionTuplesKeyByRoleName = "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
            keyOfPermissionTuplesToDelete.addAll(jedisQuery!!.smembers(permissionTuplesKeyByRoleName))
        } else {
            logger.info { "Filtering by matching file name $fileName" }
            val permissionTuplesKeyByFileName = "$permissionTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
            keyOfPermissionTuplesToDelete.addAll(jedisQuery!!.smembers(permissionTuplesKeyByFileName))
        }

        val size = keyOfPermissionTuplesToDelete.size
        logger.debug { "Found $size permission tuples to delete" }

        return if (size == 0) {
            val roleExists = if (roleName != null) {
                when (getStatus(roleName, ElementTypeWithStatus.ROLE)) {
                    ElementStatus.INCOMPLETE -> {
                        val message = "Role $roleName has incomplete status"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                    ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                    null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                }
            } else {
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            }
            
            if (roleExists == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND) {
                if (fileName != null) {
                    when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
                        ElementStatus.INCOMPLETE -> {
                            val message = "File $fileName has incomplete status"
                            logger.error { message }
                            throw IllegalStateException(message)
                        }
                        ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                        ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                        null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                    }
                } else {
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                }
            } else {
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            }
        } else {
            transactionToExec = true
            keyOfPermissionTuplesToDelete.forEach { permissionTupleKey ->
                logger.debug { "Deleting permission tuple with key $permissionTupleKey" }

                if (
                    roleVersionNumber == null ||
                    jedisQuery!!.hget(permissionTupleKey, roleVersionNumberField).toInt() == roleVersionNumber
                ) {
                    transaction!!.del(permissionTupleKey)
                    listOfKeysToDelete.add(permissionTupleKey)
                    val splitKey = permissionTupleKey.split(dl)
                    val roleInvolved = splitKey[2]
                    val fileInvolved = splitKey[3]
                    transaction!!.srem(
                        "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleInvolved",
                        permissionTupleKey
                    )
                    transaction!!.srem(
                        "$permissionTuplesListKeyPrefix$byFileNameKeyPrefix$fileInvolved",
                        permissionTupleKey
                    )
                    transaction!!.srem(
                        "$permissionTuplesListKeyPrefix$byRoleAndFileNameKeyPrefix$roleInvolved$dl$fileInvolved",
                        permissionTupleKey
                    )
                }
            }
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Delete the file tuples matching the given
     * [fileName] and return the outcome code.
     * Check that at least one file tuple is
     * deleted, and if not check whether the
     * [fileName] exists and was not deleted
     *
     * In this implementation, delete the tuples
     * with the [fileName] and remove the related
     * keys from the list of tuples related to
     * the files
     */
    override fun deleteFileTuples(fileName: String): OutcomeCode {
        logger.info { "Deleting file tuples for file name $fileName" }

        /** Get the keys of all file tuples to delete */
        val keyOfFileTuplesToDelete = hashSetOf<String>()
        val fileTuplesKeyByFileName = "$fileTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
        keyOfFileTuplesToDelete.addAll(jedisQuery!!.smembers(fileTuplesKeyByFileName))
        val size = keyOfFileTuplesToDelete.size
        logger.debug { "Found $size file tuples to delete" }

        return if (size == 0) {
            when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
                ElementStatus.INCOMPLETE -> {
                    val message = "File $fileName has incomplete status"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                ElementStatus.OPERATIONAL -> OutcomeCode.CODE_009_FILETUPLE_NOT_FOUND
                ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
            }
        } else {
            transactionToExec = true
            keyOfFileTuplesToDelete.forEach { fileTupleKey ->
                logger.debug { "Deleting file tuple with key $fileTupleKey" }
                transaction!!.del(fileTupleKey)
                listOfKeysToDelete.add(fileTupleKey)
                transaction!!.srem(fileTuplesKeyByFileName, fileTupleKey)
            }
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Increment the symmetric encryption version number
     * of the [fileName] by 1 and return the outcome code.
     * Check that the file exists and was not deleted
     */
    override fun incrementSymEncVersionNumberByOne(fileName: String): OutcomeCode {
        logger.info { "Incrementing the symmetric encryption version number of file $fileName by 1" }

        /** Guard clauses */
        if (fileName.isBlank()) {
            val message = "Name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val fileKeyByName = "$fileObjectPrefix$byFileNameKeyPrefix$fileName"

        return when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
            null -> {
                logger.warn { "File was not found" }
                OutcomeCode.CODE_006_FILE_NOT_FOUND
            }
            ElementStatus.DELETED -> {
                logger.warn { "File $fileName was previously deleted" }
                OutcomeCode.CODE_015_FILE_WAS_DELETED
            }
            else -> {
                transactionToExec = true
                transaction!!.hincrBy(fileKeyByName, symEncKeyVersionNumberField, 1)
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }

    /**
     * Update the asymmetric encryption and signing public keys
     * of the given [roleName] with the new [newAsymEncPublicKey]
     * and [newAsymSigPublicKey], and return the outcome code.
     * Check that the role exists and was not deleted
     */
    override fun updateRoleAsymKeys(
        roleName: String,
        newAsymEncPublicKey: PublicKey,
        newAsymSigPublicKey: PublicKey
    ): OutcomeCode {
        logger.info { "Updating the asymmetric encryption and signing public keys of $roleName" }

        /** Guard clauses */
        if (roleName.isBlank()) {
            val message = "Name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        return when (val role = getRoles(roleName = roleName).firstOrNull()) {
            null -> {
                logger.warn { "Role was not found" }
                OutcomeCode.CODE_005_ROLE_NOT_FOUND
            }
            else -> {
                when (role.status) {
                    ElementStatus.DELETED -> {
                        logger.warn { "Role $roleName was previously deleted" }
                        OutcomeCode.CODE_014_ROLE_WAS_DELETED
                    }
                    else -> {
                        transactionToExec = true
                        val roleKeyByName = "$roleObjectPrefix$byRoleNameKeyPrefix${role.name}"
                        val roleKeyByToken = "$roleObjectPrefix$byRoleTokenPrefix${role.token}"
                        transaction!!.hset(roleKeyByName, hashMapOf(
                            asymEncPublicKeyField to newAsymEncPublicKey.encoded.encodeBase64(),
                            asymSigPublicKeyField to newAsymSigPublicKey.encoded.encodeBase64(),
                            roleVersionNumberField to (role.versionNumber+1).toString(),
                        ))
                        transaction!!.hset(roleKeyByToken, hashMapOf(
                            asymEncPublicKeyField to newAsymEncPublicKey.encoded.encodeBase64(),
                            asymSigPublicKeyField to newAsymSigPublicKey.encoded.encodeBase64(),
                            roleVersionNumberField to (role.versionNumber+1).toString(),
                        ))
                        OutcomeCode.CODE_000_SUCCESS
                    }
                }
            }
        }
    }

    /**
     * Update the permission, signature and signer token of the
     * given [updatedPermissionTuple] and return the outcome code.
     * Check that the permission tuple exists
     */
    override fun updatePermissionTuple(updatedPermissionTuple: PermissionTuple): OutcomeCode {
        val roleName = updatedPermissionTuple.roleName
        val fileName = updatedPermissionTuple.fileName
        val symKeyVersionNumber = updatedPermissionTuple.symKeyVersionNumber
        val permissionTupleKey = "$permissionTuplesKeyPrefix$byRoleAndFileNameKeyPrefix$roleName$dl$fileName$dl$symKeyVersionNumber"
        logger.info { "Updating the permission tuple of role $roleName to file $fileName" }

        return if (jedisQuery!!.exists(permissionTupleKey)) {
            transactionToExec = true
            transaction!!.hset(
                permissionTupleKey, hashMapOf(
                    permissionField to updatedPermissionTuple.permission.toString(),
                    signerTokenField to updatedPermissionTuple.signer,
                    signatureField to updatedPermissionTuple.signature!!.encodeBase64(),
                )
            )
            OutcomeCode.CODE_000_SUCCESS
        } else {
            OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
        }
    }

    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0. Finally, return
     * the outcome code
     *
     * In this implementation, create a Redis transaction and another
     * connection for querying the database
     */
    override fun lock(): OutcomeCode {
        return if (locks == 0) {
            logger.info { "Locking the status of the MM" }
            try {
                if (transaction == null && jedisQuery == null && jedisTransaction == null) {
                    jedisTransaction = pool.resource
                    try {
                        jedisTransaction!!.auth(usernameRedis, mmRedisInterfaceParameters.password)
                        jedisTransaction!!.watch(lockUnlockRollbackKey)
                        transaction = jedisTransaction!!.multi()
                        jedisQuery = pool.resource
                        jedisQuery!!.auth(usernameRedis, mmRedisInterfaceParameters.password)
                        transactionToExec = false
                        locks++
                        OutcomeCode.CODE_000_SUCCESS
                    } catch (e: JedisAccessControlException) {
                        if (e.message?.contains(
                                "WRONGPASS invalid username-password pair or user is disabled"
                            ) == true) {
                            logger.warn { "MM Redis - access denied for user $usernameRedis" }
                            OutcomeCode.CODE_055_ACCESS_DENIED_TO_MM
                        } else {
                            throw e
                        }
                    }
                } else {
                    /** A lock has been set but not released */
                    logger.warn { "A lock has been set but not released" }
                    transaction?.discard()
                    closeAndNullRedis()
                    locks = 0
                    OutcomeCode.CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
                }
            } catch(e: JedisConnectionException) {
                closeAndNullRedis()
                if ((e.message ?: "").contains("Failed to create socket")) {
                    logger.warn { "MM Redis - connection timeout" }
                    OutcomeCode.CODE_045_MM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        else {
            locks++
            logger.debug { "Increment lock number to $locks" }
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0.
     * Finally, return the outcome code
     *
     * In this implementation, discard the transaction
     */
    override fun rollback(): OutcomeCode {
        return if (locks == 1) {
            logger.info { "Rollback the status of the MM" }
            logger.debug { "Clearing list of keys to add (size was ${listOfKeysToAdd.size})" }
            listOfKeysToAdd.clear()
            logger.debug { "Clearing list of keys to delete (size was ${listOfKeysToDelete.size})" }
            listOfKeysToDelete.clear()
            locks--
            if (transaction != null && jedisQuery != null && jedisTransaction != null) {
                if (transactionToExec) {
                    transactionToExec = false
                    transaction!!.discard()
                }
                closeAndNullRedis()
                OutcomeCode.CODE_000_SUCCESS
            } else {
                /** The lock has already been released */
                logger.warn { "The lock was released but the connection was not closed" }
                transaction?.discard()
                closeAndNullRedis()
                OutcomeCode.CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 0) {
            logger.debug { "Decrement lock number to ${locks-1}" }
            locks--
            OutcomeCode.CODE_000_SUCCESS
        } else {
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0. Finally, return the
     * outcome code
     *
     * In this implementation, exec the transaction and increment (i.e., change)
     * the value corresponding to the [lockUnlockRollbackKey]
     */
    override fun unlock(): OutcomeCode {
        return if (locks == 1) {
            logger.info { "Unlocking the status of the MM" }
            logger.debug { "Clearing list of keys to add (size was ${listOfKeysToAdd.size})" }
            listOfKeysToAdd.clear()
            logger.debug { "Clearing list of keys to delete (size was ${listOfKeysToDelete.size})" }
            listOfKeysToDelete.clear()
            locks--
            if (transaction != null && jedisQuery != null && jedisTransaction != null) {
                if (transactionToExec) {
                    transactionToExec = false
                    val responses = transaction!!.exec()
                    closeAndNullRedis()
                    pool.resource.use { jedis ->
                        jedis.auth(usernameRedis, mmRedisInterfaceParameters.password)
                        jedis.incr(lockUnlockRollbackKey)
                    }
                    if (responses == null) {
                        logger.warn { "Could not execute the transaction" }
                        OutcomeCode.CODE_034_UNLOCK_FAILED
                    } else {
                        OutcomeCode.CODE_000_SUCCESS
                    }
                } else {
                    closeAndNullRedis()
                    OutcomeCode.CODE_000_SUCCESS
                }
            } else {
                /** The lock has already been released */
                logger.warn { "The lock was released but the connection was not closed" }
                transaction?.discard()
                closeAndNullRedis()
                OutcomeCode.CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 0) {
            logger.debug { "Decrement lock number to ${locks-1}" }
            locks--
            OutcomeCode.CODE_000_SUCCESS
        } else {
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Close all connections toward
     * Redis and null the references
     */
    private fun closeAndNullRedis() {
        jedisTransaction?.close()
        transaction?.close()
        jedisQuery?.close()
        jedisTransaction = null
        transaction = null
        jedisQuery = null
    }
}
