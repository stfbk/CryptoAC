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
import kotlin.collections.HashMap
import kotlin.collections.HashSet


private val logger = KotlinLogging.logger {}

/**
 * Implementation of the methods to interface with the MM as a Redis
 * database configured with the given [mmRedisInterfaceParameters].
 *
 * Currently, Redis does not support multiple keys pointing to the
 * same value (see https://github.com/redis/redis/issues/2668).
 *
 * To regulate accesses to the metadata (e.g., the access control policy, the
 * identifiers of other users/roles/files, ...), Redis 7.0 (the most recent
 * version at the moment, 03/2022) allows defining Access Control Lists (ACLs).
 * However, these ACLs do not have support for roles or groups. As such, each user
 * has to be assigned permissions on what commands she can execute and what
 * keys she can access individually. Therefore, we need to find the right
 * balance between the ACL complexity and the possibility that users can
 * "guess" the right key to access metadata they could not (keeping in mind that
 * this would only be a privacy problem, not a security problem). In the former
 * case, we would assign each user to all keys she can access, possibly resulting
 * in an explosion of the ACL size due to the number of keys in Redis. In the
 * latter case, we would assign each user to a small number of top-level keys
 * which (like in a hierarchy) implicitly allow access to a large number of sub-keys.
 * Still, users would need extra information (e.g., the role token) to derive the
 * actual key (e.g., the sub-key is composed as <top level key>:<role token>)
 * to fetch the data from.
 * We chose the second approach, so we keep the ACL simple and do not have to update
 * it every time we change the policy. In detail, we have some top-level keys that
 * are then complemented with specific information (e.g., a user token or a role name).
 * We have the following keys that contain extra information to identify other keys:
 * - [setOfUsersKey]: set of username:userToken of users in Redis (ADMIN ONLY)
 * - [setOfDeletedUsersKey]: set of username:userToken of deleted users in Redis (ADMIN ONLY)
 * - [setOfRolesKey]: set of roleName:roleToken of roles in Redis (ADMIN ONLY)
 * - [setOfDeletedRolesKey]: set of roleName:roleToken of deleted roles in Redis (ADMIN ONLY)
 * - [setOfFilesKey]: set of fileName:fileToken of files in Redis (ADMIN ONLY)
 * - [setOfDeletedFilesKey]: set of fileName:fileToken of deleted files in Redis (ADMIN ONLY)
 * - [roleTuplesListKeyPrefix]: top-level key prefix for extra information to identify the keys of role tuples:
 *   - [byUsernameAndRoleNameKeyPrefix]: the role token as a set (ADMIN ONLY)
 *   - [byRoleNameKeyPrefix]: set of, for each user assigned to the role, the username plus the token (ADMIN ONLY)
 *   - [byUsernameKeyPrefix]: set of, for each role assigned to the user, the role name plus the token (ADMIN ONLY)
 *   - [byUserTokenKeyPrefix]: set of, for each role assigned to the user, the role name plus the token (USER WITH TOKEN CAN ACCESS)
 * - [permissionTuplesListKeyPrefix]: top-level key prefix for extra information to identify the keys of permission tuples:
 *   - [byRoleAndFileNameKeyPrefix]: set of, for each version number, the file name plus the token plus the key version number (ADMIN ONLY)
 *   - [byFileNameKeyPrefix]: set of, for each permission assigned to the file, the role name plus the token plus the key version number (ADMIN ONLY)
 *   - [byRoleNameKeyPrefix]: set of, for each permission assigned to the role, the file name plus the token plus the key version number (ADMIN ONLY)
 *   - [byRoleTokenKeyPrefix]: set of, for each permission assigned to the role, the file name plus the token plus the key version number (USERS CAN ACCESS)
 * - [fileTuplesListKeyPrefix]: top-level key prefix for extra information to identify the keys of file tuples:
 *   - [byFileNameKeyPrefix]: the file token as a set (ADMIN ONLY)
 *
 * Then, we save metadata on objects (i.e users, roles, files, role/permission/file tuples) under the following keys:
 * - [userObjectPrefix] + [byUserTokenKeyPrefix]: hashset of user (name, token, sig pub key, enc pub key, isAdmin, status) (USERS CAN ACCESS)
 * - [roleObjectPrefix] + [byRoleTokenKeyPrefix]: hashset of role (name, token, sig pub key, enc pub key, version number, status) (USERS CAN ACCESS)
 * - [fileObjectPrefix] + [byFileTokenKeyPrefix]: hashset of file (name, token, version number, status, enforcement) (USERS CAN ACCESS)
 * - [roleTupleObjectPrefix] + [byUserAndRoleTokenKeyPrefix]: hashset of role tuple (username, role name, encrypted sig key, encrypted ver key, encrypted enc key, encrypted dec key, role version number, signature) (USERS CAN ACCESS)
 * - [permissionTupleObjectPrefix] + [byRoleAndFileTokenAndVersionNumberKeyPrefix]: hashset of permission tuple (role name, file name, role token, file token, encrypted sym key, sym key version number, role version number, permission, signer, signature) (USERS CAN ACCESS)
 * - [fileTupleObjectPrefix] + [byFileTokenKeyPrefix]: hashset of file tuple (file name, file token, dec sym key version number, enforcement, role token, signer token, signature) (USERS CAN ACCESS)
 */
class MMInterfaceRedis(
    private val mmRedisInterfaceParameters: MMInterfaceRedisParameters
) : MMInterface() {

    /** The transaction connection to the Redis database */
    private var transaction: Jedis? = null

    /**
     * The connection for modifying the
     * Redis database during a transaction
     * */
    private var jTransaction: Transaction? = null

    /**
     * The connection for querying the
     * Redis database during a transaction
     * */
    private var jQuery: Jedis? = null

    /**
     * Whether the transaction contains
     * any command to execute (thus we need
     * to finalize the transaction during
     * the unlock phase)
     */
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
     * This is a list of (names and tokens of) elements that are going to
     * be inserted in Redis in the current transaction (i.e., between a
     * lock and an unlock/rollback operation. We need to remember this
     * information when first inserting the elements and then checking
     * their existence in the same transaction
     */
    private var listOfElementsToAdd: MutableList<String> = mutableListOf()

    /**
     * This is a map holding, for each key, an object represented as a map
     * that is going to be added in the transaction (i.e., between a lock
     * and an unlock/rollback operation. We need to keep this information,
     * e.g., when adding and then looking for objects in the same transaction
     * (otherwise we get errors like "this key does not exist"). Besides,
     * this works as a cache to improve performance
     */
    private var mapOfValuesToAdd: HashMap<String, HashMap<String, String>> = hashMapOf()

    /**
     * This is a map holding, for each key, a set of strings that are going to
     * be added in the transaction (i.e., between a lock and an unlock/rollback
     * operation. We need to keep this information, e.g., when adding and then
     * looking for objects in the same transaction (otherwise we get errors like
     * "this key does not exist"). Besides, this works as a cache to improve
     * performance
     */
    private var mapOfListsToAdd: HashMap<String, HashSet<String>> = hashMapOf()

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

    /**
     * Key to enable check-and-set (CAS) behavior
     * to Redis transactions, i.e., we get the
     * value of the key, execute the transaction
     * only if the value has not changed in the
     * meantime and finally change the value of
     * the key ourselves
     */
    private val lockUnlockRollbackKey = "lurk"

    /**
     * Key for the set of (incomplete or operational)
     * users. Each element is composed of the username
     * and the user token
     */
    private val setOfUsersKey = "iou"

    /**
     * Key for the set of (deleted) users. Each element
     * is composed of the username and the user token
     */
    private val setOfDeletedUsersKey = "du"

    /**
     * Key for the set of (operational) roles. Each element
     * is composed of the role name and the role token
     */
    private val setOfRolesKey = "or"

    /**
     * Key for the set of (deleted) roles. Each element
     * is composed of the role name and the role token
     */
    private val setOfDeletedRolesKey = "dr"

    /**
     * Key for the set of (operational) files. Each element
     * is composed of the file name and the file token
     */
    private val setOfFilesKey = "of"

    /**
     * Key for the set of (deleted) files. Each element
     * is composed of the file name and the file token
     */
    private val setOfDeletedFilesKey = "df"

    /** Delimited character for both keys and values */
    private val dl = ":"

    /** Prefix for user objects */
    private val userObjectPrefix = "uo$dl"

    /** Prefix for role objects */
    private val roleObjectPrefix = "ro$dl"

    /** Prefix for file objects */
    private val fileObjectPrefix = "fo$dl"

    /** Prefix for the keys of role tuples */
    private val roleTupleObjectPrefix = "rt$dl"

    /** Prefix for the keys of lists of role tuples */
    private val roleTuplesListKeyPrefix = "rtl$dl"

    /** Prefix for the keys of permission tuples */
    private val permissionTupleObjectPrefix = "pt$dl"

    /** Prefix for the keys of lists of permission tuples */
    private val permissionTuplesListKeyPrefix = "ptl$dl"

    /** Prefix for the keys of file tuples */
    private val fileTupleObjectPrefix = "ft$dl"

    /** Prefix for the keys of lists of file tuples */
    private val fileTuplesListKeyPrefix = "ftl$dl"

    /** Prefix for secondary indexes based on usernames */
    private val byUsernameKeyPrefix = "bu$dl"

    /** Prefix for secondary indexes based on user and role names */
    private val byUsernameAndRoleNameKeyPrefix = "bur$dl"

    /** Prefix for secondary indexes based on user and role tokens */
    private val byUserAndRoleTokenKeyPrefix = "burt$dl"

    /** Prefix for secondary indexes based on role names */
    private val byRoleNameKeyPrefix = "br$dl"

    /** Prefix for secondary indexes based on user tokens */
    private val byUserTokenKeyPrefix = "but$dl"

    /** Prefix for secondary indexes based on role tokens */
    private val byRoleTokenKeyPrefix = "brt$dl"

    /** Prefix for secondary indexes based on file tokens */
    private val byFileTokenKeyPrefix = "bft$dl"

    /** Prefix for secondary indexes based on role and file names */
    private val byRoleAndFileNameKeyPrefix = "brf$dl"

    /** Prefix for secondary indexes based on role and file names and file version numbers */
    private val byRoleAndFileTokenAndVersionNumberKeyPrefix = "brffvn$dl"

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

        val adminKeyByToken = "$userObjectPrefix$byUserTokenKeyPrefix${admin.token}"
        val asymEncPublicKeyEncoded = admin.asymEncKeys!!.public
        val asymSigPublicKeyEncoded = admin.asymSigKeys!!.public

        transactionToExec = true

        /** Add the admin as User in the metadata */
        logger.debug { "Adding the admin as User" }
        val adminNameAndToken = concatenateNameAndToken(admin.name, admin.token)
        val adminObject = hashMapOf(
            usernameField to admin.name,
            userTokenField to admin.token,
            asymEncPublicKeyField to asymEncPublicKeyEncoded,
            asymSigPublicKeyField to asymSigPublicKeyEncoded,
            userIsAdminField to admin.isAdmin.toString(),
            statusField to ElementStatus.OPERATIONAL.toString(),
        )
        jTransaction!!.sadd(setOfUsersKey, adminNameAndToken)
        jTransaction!!.hset(adminKeyByToken, adminObject)
        listOfElementsToAdd.add(ADMIN)

        mapOfListsToAdd.getOrPut(setOfUsersKey) { hashSetOf() }.add(adminNameAndToken)
        mapOfValuesToAdd[adminKeyByToken] = adminObject

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
     * initialized and was not already deleted. This method
     * should support invocations by non-admin users
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
        val userToken = mmRedisInterfaceParameters.token
        logger.info { "Initializing user $username with token $userToken in the metadata" }

        val userKeyByToken = "$userObjectPrefix$byUserTokenKeyPrefix$userToken"
        
        return when (getStatus(token = userToken, type = ElementTypeWithStatus.USER)) {
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
                val userObject = hashMapOf(
                    userTokenField to userToken,
                    asymEncPublicKeyField to asymEncPublicKeyEncoded,
                    asymSigPublicKeyField to asymSigPublicKeyEncoded,
                    statusField to ElementStatus.OPERATIONAL.toString(),
                )
                jTransaction!!.hset(userKeyByToken, userObject)
                listOfElementsToAdd.add(username)
                mapOfValuesToAdd[userKeyByToken] = userObject

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
        val userToken = newUser.token
        logger.info {
            "Adding the user $username with token " +
            "$userToken in the metadata and as Redis user"
        }

        val userKeyByToken = "$userObjectPrefix$byUserTokenKeyPrefix$userToken"

        return when (getStatus(name = username, type = ElementTypeWithStatus.USER)) {
            null -> {
                transactionToExec = true
                val userNameAndToken = concatenateNameAndToken(username, userToken)
                val userObject = hashMapOf(
                    usernameField to username,
                    userTokenField to userToken,
                    userIsAdminField to newUser.isAdmin.toString(),
                    statusField to ElementStatus.INCOMPLETE.toString(),
                )
                jTransaction!!.sadd(setOfUsersKey, userNameAndToken)
                jTransaction!!.hset(userKeyByToken, userObject)
                listOfElementsToAdd.add(username)
                mapOfListsToAdd.getOrPut(setOfUsersKey) { hashSetOf() }.add(userNameAndToken)
                mapOfValuesToAdd[userKeyByToken] = userObject

                /** TODO check password generation */
                val passwordBytes = ByteArray(20)
                Random().nextBytes(passwordBytes)
                val newPassword = passwordBytes.encodeBase64()

                val success = jQuery!!.aclSetUser(
                    username,
                    "on",
                    "+multi",
                    "+exec",
                    "+discard",
                    "(+WATCH ~$lockUnlockRollbackKey)",
                    "(+UNWATCH ~$lockUnlockRollbackKey)",
                    "(+INCR ~$lockUnlockRollbackKey)",
                    "(+SMEMBERS ~$roleTuplesListKeyPrefix$byUserTokenKeyPrefix$userToken)",
                    "(+SMEMBERS ~$permissionTuplesListKeyPrefix$byRoleTokenKeyPrefix*)",
                    "(+HGETALL ~$userObjectPrefix$byUserTokenKeyPrefix*)",
                    "(+HSET ~$userObjectPrefix$byUserTokenKeyPrefix$userToken)",
                    "(+HGETALL ~$roleObjectPrefix$byRoleTokenKeyPrefix*)",
                    "(+HGETALL ~$fileObjectPrefix$byFileTokenKeyPrefix*)",
                    "(+HGETALL ~$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix*)",
                    "(+HGETALL ~$permissionTupleObjectPrefix$byRoleAndFileTokenAndVersionNumberKeyPrefix*)",
                    "(+HGETALL ~$fileTupleObjectPrefix$byFileTokenKeyPrefix*)",
                    "(+HGET ~$userObjectPrefix$byUserTokenKeyPrefix*)",
                    "(+HGET ~$roleObjectPrefix$byRoleTokenKeyPrefix*)",
                    "(+HGET ~$fileObjectPrefix$byFileTokenKeyPrefix*)",
                    "(+HGET ~$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix*)",
                    "(+HGET ~$permissionTupleObjectPrefix$byRoleAndFileTokenAndVersionNumberKeyPrefix*)",
                    "(+HGET ~$fileTupleObjectPrefix$byFileTokenKeyPrefix*)",
                    ">$newPassword"
                ) == "OK"

                if (success) {
                    WrapperMMParameters(
                        parameters = MMInterfaceRedisParameters(
                            username = username, password = newPassword,
                            port = mmRedisInterfaceParameters.port, url = mmRedisInterfaceParameters.url,
                            token = userToken
                        )
                    )
                } else {
                    logger.warn { "Could not create user $username in Redis" }
                    WrapperMMParameters(OutcomeCode.CODE_054_CREATE_USER_MM)
                }
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

        val roleKeyByToken = "$roleObjectPrefix$byRoleTokenKeyPrefix$roleToken"
        
        return when (getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)) {
            null -> {
                val asymEncPublicKeyEncoded = newRole.asymEncKeys!!.public
                val asymSigPublicKeyEncoded = newRole.asymSigKeys!!.public

                transactionToExec = true
                val roleNameAndToken = concatenateNameAndToken(roleName, roleToken)
                val roleObject = hashMapOf(
                    roleNameField to roleName,
                    roleTokenField to roleToken,
                    asymEncPublicKeyField to asymEncPublicKeyEncoded,
                    asymSigPublicKeyField to asymSigPublicKeyEncoded,
                    roleVersionNumberField to newRole.versionNumber.toString(),
                    statusField to newRole.status.toString(),
                )
                jTransaction!!.sadd(setOfRolesKey, roleNameAndToken)
                jTransaction!!.hset(roleKeyByToken, roleObject)
                listOfElementsToAdd.add(roleName)
                mapOfListsToAdd.getOrPut(setOfRolesKey) { hashSetOf() }.add(roleNameAndToken)
                mapOfValuesToAdd[roleKeyByToken] = roleObject

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

        val fileKeyByToken = "$fileObjectPrefix$byFileTokenKeyPrefix$fileToken"
        
        return when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
            null -> {
                transactionToExec = true
                val fileNameAndToken = concatenateNameAndToken(fileName, fileToken)
                val fileObject = hashMapOf(
                    fileNameField to fileName,
                    fileTokenField to fileToken,
                    symEncKeyVersionNumberField to newFile.symEncKeyVersionNumber.toString(),
                    statusField to newFile.status.toString(),
                    enforcementField to newFile.enforcement.toString(),
                )
                jTransaction!!.sadd(setOfFilesKey, fileNameAndToken)
                jTransaction!!.hset(fileKeyByToken, fileObject)
                listOfElementsToAdd.add(fileName)
                mapOfListsToAdd.getOrPut(setOfFilesKey) { hashSetOf() }.add(fileNameAndToken)
                mapOfValuesToAdd[fileKeyByToken] = fileObject

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

        logger.info { "Adding $size role tuples in the metadata (one per row below):" }
        newRoleTuples.forEachIndexed { index, roleTuple ->
            logger.info {
                "${index+1}: user ${roleTuple.username} " +
                "to role ${roleTuple.roleName}"
            }
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
                code = if (listOfElementsToAdd.contains(username)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (
                        getStatus(name = username, type = ElementTypeWithStatus.USER)
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

                code = if (listOfElementsToAdd.contains(roleName)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (
                        getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)
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

                val userToken = getToken(username, ElementTypeWithStatus.USER)
                val roleToken = getToken(roleName, ElementTypeWithStatus.ROLE)
                val usernameAndToken = concatenateNameAndToken(username, userToken!!)
                val roleNameAndToken = concatenateNameAndToken(roleName, roleToken!!)

                val keyOfRoleTuplesListByUserToken = "$roleTuplesListKeyPrefix$byUserTokenKeyPrefix$userToken"
                val keyOfRoleTuplesListByUser = "$roleTuplesListKeyPrefix$byUsernameKeyPrefix$username"
                val keyOfRoleTuplesListByRole = "$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                val keyOfRoleTuplesListByUserAndRole =
                    "$roleTuplesListKeyPrefix$byUsernameAndRoleNameKeyPrefix$username$dl$roleName"

                val roleTupleKey = "$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix$userToken$dl$roleToken"
                logger.debug { "Adding the role tuple of user $username and role $roleName" }

                /**
                 * If the datastore already contains the key of
                 * the role tuple and the list of keys to delete
                 * does NOT contain the key of the role tuple, or
                 * the map of keys and values to add contain the
                 * key of the role tuple, it means that the key
                 * of the role tuple already exists
                 */
                if (
                    mapOfValuesToAdd.contains(roleTupleKey)
                    ||
                    (!listOfKeysToDelete.contains(roleTupleKey) &&
                    jQuery!!.sismember(keyOfRoleTuplesListByUser, roleNameAndToken))
                ) {
                    code = OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS
                    return@error
                } else {
                    logger.debug {
                        "Adding the role tuple for user $username " +
                        "and role $roleName with key $roleTupleKey"
                    }
                    transactionToExec = true
                    val roleTupleObject = hashMapOf(
                        usernameField to username,
                        roleNameField to roleName,
                        encryptedAsymEncPublicKeyField to roleTuple.encryptedAsymEncKeys!!.public.encodeBase64(),
                        encryptedAsymEncPrivateKeyField to roleTuple.encryptedAsymEncKeys.private.encodeBase64(),
                        encryptedAsymSigPublicKeyField to roleTuple.encryptedAsymSigKeys!!.public.encodeBase64(),
                        encryptedAsymSigPrivateKeyField to roleTuple.encryptedAsymSigKeys.private.encodeBase64(),
                        roleVersionNumberField to roleTuple.roleVersionNumber.toString(),
                        signatureField to roleTuple.signature!!.encodeBase64(),
                    )

                    jTransaction!!.sadd(keyOfRoleTuplesListByUserToken, roleNameAndToken)
                    jTransaction!!.sadd(keyOfRoleTuplesListByUser, roleNameAndToken)
                    jTransaction!!.sadd(keyOfRoleTuplesListByRole, usernameAndToken)
                    jTransaction!!.sadd(keyOfRoleTuplesListByUserAndRole, roleToken)
                    jTransaction!!.hset(roleTupleKey, roleTupleObject)

                    mapOfListsToAdd.getOrPut(keyOfRoleTuplesListByUserToken) { hashSetOf() }.add(roleNameAndToken)
                    mapOfListsToAdd.getOrPut(keyOfRoleTuplesListByUser) { hashSetOf() }.add(roleNameAndToken)
                    mapOfListsToAdd.getOrPut(keyOfRoleTuplesListByRole) { hashSetOf() }.add(usernameAndToken)
                    mapOfListsToAdd.getOrPut(keyOfRoleTuplesListByUserAndRole) { hashSetOf() }.add(roleToken)
                    mapOfValuesToAdd[roleTupleKey] = roleTupleObject
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
        
        logger.info { "Adding $size permission tuples in the metadata (one per row below):" }
        newPermissionTuples.forEachIndexed { index, permissionTuple ->
            logger.info {
                "${index+1}: role ${permissionTuple.roleName} to file " +
                "${permissionTuple.fileName} with permission ${permissionTuple.permission} " +
                "and number ${permissionTuple.symKeyVersionNumber}"
            }
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
                code = if (listOfElementsToAdd.contains(roleName)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (
                        getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)
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

                code = if (listOfElementsToAdd.contains(fileName)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
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

                val symKeyVersionNumber = permissionTuple.symKeyVersionNumber
                val roleToken = getToken(roleName, ElementTypeWithStatus.ROLE)
                val fileToken = getToken(fileName, ElementTypeWithStatus.FILE)
                val roleNameAndTokenAndVN =
                    concatenateNameAndToken(roleName, roleToken!!) + dl + symKeyVersionNumber
                val fileNameAndTokenAndVN =
                    concatenateNameAndToken(fileName, fileToken!!) + dl + symKeyVersionNumber

                val keyOfPermissionTuplesListByRoleName =
                    "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                val keyOfPermissionTuplesListByRoleToken =
                    "$permissionTuplesListKeyPrefix$byRoleTokenKeyPrefix$roleToken"
                val keyOfPermissionTuplesListByFile =
                    "$permissionTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
                val keyOfPermissionTuplesListByRoleAndFile =
                    "$permissionTuplesListKeyPrefix$byRoleAndFileNameKeyPrefix${roleName}${dl}$fileName"
                val permissionTupleKey = permissionTupleObjectPrefix +
                    "$byRoleAndFileTokenAndVersionNumberKeyPrefix$roleToken$dl$fileToken$dl$symKeyVersionNumber"


                /**
                 * If the datastore already contains the key of
                 * the permission tuple and the list of keys to delete
                 * does NOT contain the key of the permission tuple, or
                 * the map of keys and values to add contain the
                 * key of the permission tuple, it means that the key
                 * of the permission tuple already exists
                 */
                if (
                    mapOfValuesToAdd.contains(permissionTupleKey)
                    ||
                    (!listOfKeysToDelete.contains(permissionTupleKey) &&
                    jQuery!!.sismember(keyOfPermissionTuplesListByRoleName, fileNameAndTokenAndVN))
                ) {
                    logger.warn { "Permission tuple for role $roleName and file $fileName already exists" }
                    code = OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
                    return@error
                } else {
                    logger.debug {
                        "Adding the permission tuple for role $roleName " +
                        "and file $fileName with key $permissionTupleKey"
                    }
                    transactionToExec = true
                    val permissionTupleObject = hashMapOf(
                        roleNameField to roleName,
                        fileNameField to fileName,
                        roleTokenField to permissionTuple.roleToken,
                        fileTokenField to permissionTuple.fileToken,
                        encryptedSymKeyField to permissionTuple.encryptedSymKey!!.key.encodeBase64(),
                        symKeyVersionNumberField to symKeyVersionNumber.toString(),
                        roleVersionNumberField to permissionTuple.roleVersionNumber.toString(),
                        permissionField to permissionTuple.permission.toString(),
                        signerTokenField to permissionTuple.signer!!,
                        signatureField to permissionTuple.signature!!.encodeBase64(),
                    )

                    jTransaction!!.sadd(keyOfPermissionTuplesListByRoleName, fileNameAndTokenAndVN)
                    jTransaction!!.sadd(keyOfPermissionTuplesListByRoleToken, fileNameAndTokenAndVN)
                    jTransaction!!.sadd(keyOfPermissionTuplesListByFile, roleNameAndTokenAndVN)
                    jTransaction!!.sadd(keyOfPermissionTuplesListByRoleAndFile, fileNameAndTokenAndVN)
                    jTransaction!!.hset(permissionTupleKey, permissionTupleObject)

                    mapOfListsToAdd.getOrPut(keyOfPermissionTuplesListByRoleName) {
                        hashSetOf()
                    }.add(fileNameAndTokenAndVN)
                    mapOfListsToAdd.getOrPut(keyOfPermissionTuplesListByRoleToken) {
                        hashSetOf()
                    }.add(fileNameAndTokenAndVN)
                    mapOfListsToAdd.getOrPut(keyOfPermissionTuplesListByFile) {
                        hashSetOf()
                    }.add(roleNameAndTokenAndVN)
                    mapOfListsToAdd.getOrPut(keyOfPermissionTuplesListByRoleAndFile) {
                        hashSetOf() }.add(fileNameAndTokenAndVN)
                    mapOfValuesToAdd[permissionTupleKey] = permissionTupleObject
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

        logger.info { "Adding $size file tuples in the metadata (one per row below):" }
        newFileTuples.forEachIndexed { index, fileTuple ->
            logger.info { "${index+1}: file ${fileTuple.fileName}" }
        }

        var code = OutcomeCode.CODE_000_SUCCESS
        run error@{
            newFileTuples.forEach { fileTuple ->

                val fileName = fileTuple.fileName


                /**
                 * Check that involved files
                 * exist and were not deleted
                 */
                code = if (listOfElementsToAdd.contains(fileName)) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
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

                val fileToken = getToken(fileName, ElementTypeWithStatus.FILE)!!

                val keyOfTuplesListByFile = "$fileTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"

                val fileTupleKey = "$fileTupleObjectPrefix$byFileTokenKeyPrefix$fileToken"
                logger.debug { "Adding the file tuple of file $fileName" }

                /**
                 * If the datastore already contains the key of
                 * the file tuple and the list of keys to delete
                 * does NOT contain the key of the file tuple, or
                 * the map of keys and values to add contain the
                 * key of the file tuple, it means that the key
                 * of the file tuple already exists
                 */
                if (
                    mapOfValuesToAdd.contains(fileTupleKey)
                    ||
                    (!listOfKeysToDelete.contains(fileTupleKey) &&
                    jQuery!!.sismember(keyOfTuplesListByFile, fileToken))
                ) {
                    logger.warn { "File tuple for file $fileName already exists" }
                    code = OutcomeCode.CODE_012_FILETUPLE_ALREADY_EXISTS
                    return@error
                } else {
                    logger.debug { "Adding the file tuple for file $fileName with key $fileTupleKey" }
                    transactionToExec = true
                    val fileTupleObject = hashMapOf(
                        fileNameField to fileName,
                        fileTokenField to fileTuple.fileToken,
                        symDecKeyVersionNumberField to fileTuple.symDecKeyVersionNumber.toString(),
                        enforcementField to fileTuple.enforcement.toString(),
                        roleTokenField to fileTuple.roleToken,
                        signerTokenField to fileTuple.signer!!,
                        signatureField to fileTuple.signature!!.encodeBase64(),
                    )

                    jTransaction!!.sadd(keyOfTuplesListByFile, fileToken)
                    jTransaction!!.hset(fileTupleKey, fileTupleObject)

                    mapOfListsToAdd.getOrPut(keyOfTuplesListByFile) { hashSetOf() }.add(fileToken)
                    mapOfValuesToAdd[fileTupleKey] = fileTupleObject
                }
            }
        }

        return code
    }



    /**
     * Retrieve data of the users matching the specified
     * [username] and [status], if given, starting from
     * the [offset] limiting the number of users to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no users are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getUsers(
        username: String?,
        status: ElementStatus?,
        isAdmin: Boolean,
        offset: Int, limit: Int
    ): HashSet<User> {
        logger.info { "Getting data of users (offset $offset, limit $limit)" }

        val users = HashSet<User>()
        val usersToGet = hashSetOf<String>()

        /**
         * If the user is not the admin, we get user objects
         * matching the token in the [mmRedisInterfaceParameters]
         */
        if (!isAdmin) {
            usersToGet.add(concatenateNameAndToken(
                mmRedisInterfaceParameters.username,
                mmRedisInterfaceParameters.token)
            )
        } else {
            /** Get all users depending on the [status] value */
            if (username.isNullOrBlank()) {
                if (status != null) {
                    logger.info { "Filtering by matching status $status" }
                }
                if (status == null ||
                    status == ElementStatus.INCOMPLETE ||
                    status == ElementStatus.OPERATIONAL
                ) {
                    jquerySmembers(setOfUsersKey)?.let { usersToGet.addAll(it) }
                }
                if (status == null || status == ElementStatus.DELETED) {
                    jquerySmembers(setOfDeletedUsersKey)?.let { usersToGet.addAll(it) }
                }
            }
            /** Get the user with the [username] */
            else {
                logger.info { "Filtering by matching username $username" }
                val token = getToken(username, ElementTypeWithStatus.USER)
                if (token != null) {
                    usersToGet.add(concatenateNameAndToken(username, token))
                }
            }
        }

        logger.debug {
            "Found ${usersToGet.size} users to " +
            "fetch (users to return may be less " +
            "if status is INCOMPLETE or OPERATIONAL)"
        }

        /** Get all users from the data collected */
        usersToGet.forEach { userNameAndToken ->
            val currentUsername = getNameFromElementNameAndToken(userNameAndToken)!!
            val currentUserToken = getTokenFromElementNameAndToken(userNameAndToken)!!
            val userKeyByToken =
                "$userObjectPrefix$byUserTokenKeyPrefix${getTokenFromElementNameAndToken(userNameAndToken)}"

            logger.debug { "Retrieving data of user with key $userKeyByToken" }
            val userValues = jqueryHgetAll(userKeyByToken)
            val userStatus = ElementStatus.valueOf(userValues[statusField]!!)
            if (status == null || userStatus == status) {
                users.add(
                    User(
                        name = currentUsername,
                        status = userStatus,
                        isAdmin = userValues[userIsAdminField]!!.toBooleanStrict(),
                    ).apply {
                        token = currentUserToken
                    }
                )
            }
        }

        logger.debug { "Found ${users.size} users" }
        return users
    }

    /**
     * Retrieve data of the roles matching the specified
     * [roleName] and [status], if given, starting from
     * the [offset] limiting the number of roles to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no roles are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getRoles(
        roleName: String?,
        status: ElementStatus?,
        isAdmin: Boolean,
        offset: Int, limit: Int
    ): HashSet<Role> {
        logger.info { "Getting data of roles (offset $offset, limit $limit)" }

        val roles = HashSet<Role>()
        val rolesToGet = hashSetOf<String>()

        /**
         * If the user is not the admin, we get the set of names
         * and tokens of the roles assigned to the users and, with
         * those, get the role objects, possibly matching the given
         * role name
         */
        if (!isAdmin) {
            val rolesNameAndToken: HashSet<String> = getRolesNameAndTokenFromUserToken()

            rolesNameAndToken.forEach { roleNameAndToken ->
                val currentRoleName = getNameFromElementNameAndToken(roleNameAndToken)!!
                val roleToken = getTokenFromElementNameAndToken(roleNameAndToken)!!
                if (roleName == null || currentRoleName == roleName) {
                    rolesToGet.add(concatenateNameAndToken(currentRoleName, roleToken))
                }
            }
        } else {
            /** Get all roles depending on the [status] value */
            if (roleName.isNullOrBlank()) {
                if (status != null) {
                    logger.info { "Filtering by matching status $status" }
                }
                if (status == null || status == ElementStatus.OPERATIONAL) {
                    jquerySmembers(setOfRolesKey)?.let { rolesToGet.addAll(it) }
                }
                if (status == null || status == ElementStatus.DELETED) {
                    jquerySmembers(setOfDeletedRolesKey)?.let { rolesToGet.addAll(it) }
                }

            }
            /** Get the role with the [roleName] */
            else {
                logger.info { "Filtering by matching role name $roleName" }
                val token = getToken(roleName, ElementTypeWithStatus.ROLE)
                if (token != null) {
                    rolesToGet.add(concatenateNameAndToken(roleName, token))
                }
            }
        }

        logger.debug { "Found ${rolesToGet.size} roles to fetch" }

        /** Get all roles from the keys collected */
        rolesToGet.forEach { roleNameAndToken ->
            val currentRoleName = getNameFromElementNameAndToken(roleNameAndToken)!!
            val currentRoleToken = getTokenFromElementNameAndToken(roleNameAndToken)!!
            val roleKeyByToken =
                "$roleObjectPrefix$byRoleTokenKeyPrefix${getTokenFromElementNameAndToken(roleNameAndToken)}"

            logger.debug { "Retrieving data of role with key $roleKeyByToken" }
            val roleValues = jqueryHgetAll(roleKeyByToken)
            val roleStatus = ElementStatus.valueOf(roleValues[statusField]!!)
            if (status == null || status == roleStatus) {
                roles.add(
                    Role(
                        name = currentRoleName,
                        status = roleStatus,
                        versionNumber = roleValues[roleVersionNumberField]!!.toInt(),
                    ).apply {
                        token = currentRoleToken
                    }
                )
            }
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
     * [isAdmin]. If no files are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getFiles(
        fileName: String?,
        status: ElementStatus?,
        isAdmin: Boolean,
        offset: Int, limit: Int
    ): HashSet<File> {
        logger.info { "Getting data of files (offset $offset, limit $limit)" }

        val files = HashSet<File>()
        val filesToGet = hashSetOf<String>()

        /**
         * If the user is not the admin, we get the set of names
         * and tokens of the roles assigned to the users and, with
         * those, get the set of names and tokens of files assigned
         * to each role and, with those, get the files object, possibly
         * matching the given file name
         */
        if (!isAdmin) {
            val rolesNameAndToken: HashSet<String> = getRolesNameAndTokenFromUserToken()

            rolesNameAndToken.forEach { roleNameAndToken ->
                val roleToken = getTokenFromElementNameAndToken(roleNameAndToken)!!

                val filesNameAndTokenAndVN = getFilesNameAndTokenAndVNFromRoleToken(roleToken)
                filesNameAndTokenAndVN.forEach { fileNameAndTokenAndVN ->
                    val currentFileName = getNameFromElementNameAndToken(fileNameAndTokenAndVN)!!
                    val fileToken = getTokenFromElementNameAndToken(fileNameAndTokenAndVN)!!
                    if (fileName == null || currentFileName == fileName) {
                        filesToGet.add(concatenateNameAndToken(currentFileName, fileToken))
                    }
                }
            }
        } else {

            /** Get all files depending on the [status] value */
            if (fileName.isNullOrBlank()) {
                if (status != null) {
                    logger.info { "Filtering by matching status $status" }
                }
                if (status == null || status == ElementStatus.OPERATIONAL) {
                    jquerySmembers(setOfFilesKey)?.let { filesToGet.addAll(it) }
                }
                if (status == null || status == ElementStatus.DELETED) {
                    jquerySmembers(setOfDeletedFilesKey)?.let { filesToGet.addAll(it) }
                }

            }
            /** Get the file with the [fileName] */
            else {
                logger.info { "Filtering by matching file name $fileName" }
                val token = getToken(fileName, ElementTypeWithStatus.FILE)
                if (token != null) {
                    filesToGet.add(concatenateNameAndToken(fileName, token))
                }
            }
        }

        logger.debug { "Found ${filesToGet.size} files to fetch" }

        /** Get all files from the keys collected */
        filesToGet.forEach { fileNameAndToken ->
            val currentFileName = getNameFromElementNameAndToken(fileNameAndToken)!!
            val currentFileToken = getTokenFromElementNameAndToken(fileNameAndToken)!!
            val fileKeyByToken =
                "$fileObjectPrefix$byFileTokenKeyPrefix${getTokenFromElementNameAndToken(fileNameAndToken)}"

            logger.debug { "Retrieving data of file with key $fileKeyByToken" }
            val fileValues = jqueryHgetAll(fileKeyByToken)
            val fileStatus = ElementStatus.valueOf(fileValues[statusField]!!)
            if (status == null || status == fileStatus) {
                files.add(File(
                    name = currentFileName,
                    symEncKeyVersionNumber = fileValues[symEncKeyVersionNumberField]!!.toInt(),
                    status = fileStatus,
                    enforcement = EnforcementType.valueOf(fileValues[enforcementField]!!),
                ).apply {
                    token = currentFileToken
                }
                )
            }
        }

        logger.debug { "Found ${files.size} files" }
        return files
    }

    /**
     * Retrieve the role tuples matching the [username]
     * and/or the [roleName] (at least one required),
     * starting from the [offset] limiting the number
     * of tuples to return to the given [limit] and
     * with the (possibly) relevant information of
     * whether the user invoking this function
     * [isAdmin]. If no role tuples are found,
     * return an empty set. This method should
     * support invocations by non-admin users
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

        val keysOfRoleTuplesToGet = hashSetOf<String>()

        /**
         * If the user is not the admin, we get the set of names
         * and tokens of the roles assigned to the users and, with
         * those, get the role tuples of the user, possibly selecting
         * only the role tuple matching the given role name
         */
        if (!isAdmin) {
            val rolesNameAndToken: HashSet<String> = getRolesNameAndTokenFromUserToken()

            val userToken = mmRedisInterfaceParameters.token
            rolesNameAndToken.forEach { roleNameAndToken ->
                val currentRoleName = getNameFromElementNameAndToken(roleNameAndToken)
                val roleToken = getTokenFromElementNameAndToken(roleNameAndToken)
                if (roleName == null || currentRoleName == roleName) {
                    val roleTupleKey = "$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix$userToken$dl$roleToken"
                    keysOfRoleTuplesToGet.add(roleTupleKey)
                }
            }
        } else {

            /** Get the keys of all role tuples */
            if (givenUsername && givenRoleName) {
                logger.info { "Filtering by matching username $username and role name $roleName" }
                val userToken = getToken(username!!, ElementTypeWithStatus.USER)

                val keyOfRoleTuplesListByUserAndRole =
                    "$roleTuplesListKeyPrefix$byUsernameAndRoleNameKeyPrefix$username$dl$roleName"
                val roleTokens = hashSetOf<String>()
                jquerySmembers(keyOfRoleTuplesListByUserAndRole)?.let { roleTokens.addAll(it) }

                val size = roleTokens.size
                logger.debug { "Found $size role tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(name = username, type = ElementTypeWithStatus.USER)) {
                        ElementStatus.OPERATIONAL -> when (getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)) {
                            ElementStatus.OPERATIONAL -> OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
                            ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                            ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                        }
                        ElementStatus.DELETED -> OutcomeCode.CODE_013_USER_WAS_DELETED
                        ElementStatus.INCOMPLETE -> OutcomeCode.CODE_053_USER_IS_INCOMPLETE
                        null -> OutcomeCode.CODE_004_USER_NOT_FOUND
                    }
                } else {
                    roleTokens.forEach { currentRoleToken ->
                        val roleTupleKey =
                            roleTupleObjectPrefix +
                            byUserAndRoleTokenKeyPrefix +
                            "$userToken" +
                            dl +
                            currentRoleToken
                        keysOfRoleTuplesToGet.add(roleTupleKey)
                    }
                }
            } else if (givenUsername) {
                logger.info { "Filtering by matching username $username" }
                val userToken = getToken(username!!, ElementTypeWithStatus.USER)

                val keyOfRoleTuplesListByUser =
                    "$roleTuplesListKeyPrefix$byUsernameKeyPrefix$username"
                val rolesNameAndToken = hashSetOf<String>()
                jquerySmembers(keyOfRoleTuplesListByUser)?.let { rolesNameAndToken.addAll(it) }

                val size = rolesNameAndToken.size
                logger.debug { "Found $size role tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(name = username, type = ElementTypeWithStatus.USER)) {
                        ElementStatus.OPERATIONAL -> OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
                        ElementStatus.DELETED -> OutcomeCode.CODE_013_USER_WAS_DELETED
                        ElementStatus.INCOMPLETE -> OutcomeCode.CODE_053_USER_IS_INCOMPLETE
                        null -> OutcomeCode.CODE_004_USER_NOT_FOUND
                    }
                } else {
                    rolesNameAndToken.forEach { roleNameAndToken ->
                        val roleToken = getTokenFromElementNameAndToken(roleNameAndToken)
                        val roleTupleKey = "$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix$userToken$dl$roleToken"
                        keysOfRoleTuplesToGet.add(roleTupleKey)
                    }
                }
            } else if (givenRoleName) {
                logger.info { "Filtering by matching role name $roleName" }
                val roleToken = getToken(roleName!!, ElementTypeWithStatus.ROLE)

                val keyOfRoleTuplesListByRole =
                    "$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                val usersNameAndToken = hashSetOf<String>()
                jquerySmembers(keyOfRoleTuplesListByRole)?.let { usersNameAndToken.addAll(it) }

                val size = usersNameAndToken.size
                logger.debug { "Found $size role tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)) {
                        ElementStatus.OPERATIONAL -> OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
                        ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                        ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                    }
                } else {
                    usersNameAndToken.forEach { userNameAndToken ->
                        val userToken = getTokenFromElementNameAndToken(userNameAndToken)
                        val roleTupleKey = "$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix$userToken$dl$roleToken"
                        keysOfRoleTuplesToGet.add(roleTupleKey)
                    }
                }
            } else {
                val message = "A user or role name has to be specified"
                logger.error { message }
                throw IllegalArgumentException(message)
            }
        }

        logger.debug { "Found ${keysOfRoleTuplesToGet.size} role tuples to fetch" }

        /** Get all role tuples from the keys collected */
        keysOfRoleTuplesToGet.forEach { roleTupleKey ->
            logger.debug { "Retrieving data of role tuple with key $roleTupleKey" }
            val roleTupleValues = jqueryHgetAll(roleTupleKey)
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
     * the [fileName], further filtering by [roleVersionNumber],
     * [permission] and [symKeyVersionNumber], and not matching the
     * [roleNameToExclude], if given, starting from the [offset]
     * limiting the number of tuples to return to the given [limit]
     * and with the (possibly) relevant information of whether the
     * user invoking this function [isAdmin]. If no permission tuples
     * are found, return an empty set. This method should support
     * invocations by non-admin users
     */
    override fun getPermissionTuples(
        roleName: String?,
        fileName: String?,
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

        val keysOfPermissionTuplesToGet = hashSetOf<String>()


        /**
         * If the user is not the admin, we get the set of names
         * and tokens of the roles assigned to the users and, with
         * those, get the set of names and tokens of files assigned
         * to each role and, with those, get the permission tuples
         * of the user, possibly selecting only the tuples matching
         * the given role and file name
         */
        if (!isAdmin) {
            val rolesNameAndToken: HashSet<String> = getRolesNameAndTokenFromUserToken()

            rolesNameAndToken.forEach { roleNameAndToken ->
                val currentRoleName = getNameFromElementNameAndToken(roleNameAndToken)
                val roleToken = getTokenFromElementNameAndToken(roleNameAndToken)!!
                if (roleName == null || currentRoleName == roleName) {

                    val filesNameAndTokenAndVN = getFilesNameAndTokenAndVNFromRoleToken(roleToken)
                    filesNameAndTokenAndVN.forEach { fileNameAndTokenAndVN ->
                        val currentFileName = getNameFromElementNameAndToken(fileNameAndTokenAndVN)
                        val fileToken = getTokenFromElementNameAndToken(fileNameAndTokenAndVN)
                        val fileVN = getVNFromElementNameAndTokenAndVN(fileNameAndTokenAndVN)
                        if (fileName == null || currentFileName == fileName) {
                            val permissionTupleKey =
                                permissionTupleObjectPrefix +
                                byRoleAndFileTokenAndVersionNumberKeyPrefix +
                                roleToken +
                                dl +
                                fileToken +
                                dl +
                                "$fileVN"
                            keysOfPermissionTuplesToGet.add(permissionTupleKey)
                        }
                    }
                }
            }
        } else {
            /** Get the keys of all permission tuples */
            if (givenRoleName && givenFileName) {
                logger.info { "Filtering by matching role name $roleName and file name $fileName" }

                val keyOfPermissionTuplesListByUserAndRole =
                    "$permissionTuplesListKeyPrefix$byRoleAndFileNameKeyPrefix$roleName$dl$fileName"
                val filesNameAndTokenAndVN = hashSetOf<String>()
                jquerySmembers(keyOfPermissionTuplesListByUserAndRole)?.let { filesNameAndTokenAndVN.addAll(it) }
                val size = filesNameAndTokenAndVN.size
                logger.debug { "Found $size permission tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
                        ElementStatus.OPERATIONAL -> when (getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)) {
                            ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                            ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                            ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                        }
                        ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                        ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                    }
                } else {
                    filesNameAndTokenAndVN.forEach { fileNameAndTokenAndVN ->
                        val vn = getVNFromElementNameAndTokenAndVN(fileNameAndTokenAndVN)
                        val permissionTupleKey =
                            permissionTupleObjectPrefix +
                            byRoleAndFileTokenAndVersionNumberKeyPrefix +
                            getToken(roleName!!, ElementTypeWithStatus.ROLE)!! +
                            dl +
                            getToken(fileName!!, ElementTypeWithStatus.FILE)!! +
                            dl +
                            "$vn"
                        keysOfPermissionTuplesToGet.add(permissionTupleKey)
                    }
                }
            } else if (givenRoleName) {
                logger.info { "Filtering by matching role name $roleName" }

                val keyOfPermissionTuplesListByRole =
                    "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                val filesNameAndTokenAndVN = hashSetOf<String>()
                jquerySmembers(keyOfPermissionTuplesListByRole)?.let { filesNameAndTokenAndVN.addAll(it) }
                val size = filesNameAndTokenAndVN.size
                logger.debug { "Found $size permission tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)) {
                        ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                        ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                        ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                    }
                } else {
                    filesNameAndTokenAndVN.forEach { fileNameAndTokenAndVN ->
                        val vn = getVNFromElementNameAndTokenAndVN(fileNameAndTokenAndVN)
                        val permissionTupleKey =
                            permissionTupleObjectPrefix +
                            byRoleAndFileTokenAndVersionNumberKeyPrefix +
                            getToken(roleName!!, ElementTypeWithStatus.ROLE)!! +
                            dl +
                            getTokenFromElementNameAndToken(fileNameAndTokenAndVN)!! +
                            dl +
                            "$vn"
                        keysOfPermissionTuplesToGet.add(permissionTupleKey)
                    }
                }
            } else if (givenFileName) {
                logger.info { "Filtering by matching file name $fileName" }

                val keyOfPermissionTuplesListByFile =
                    "$permissionTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
                val rolesNameAndTokenAndFileVN = hashSetOf<String>()
                jquerySmembers(keyOfPermissionTuplesListByFile)?.let { rolesNameAndTokenAndFileVN.addAll(it) }
                val size = rolesNameAndTokenAndFileVN.size
                logger.debug { "Found $size permission tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
                        ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                        ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                        ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                    }
                } else {
                    rolesNameAndTokenAndFileVN.forEach { roleNameAndTokenAndFileVN ->
                        val vn = getVNFromElementNameAndTokenAndVN(roleNameAndTokenAndFileVN)
                        val permissionTupleKey =
                            permissionTupleObjectPrefix +
                            byRoleAndFileTokenAndVersionNumberKeyPrefix +
                            getTokenFromElementNameAndToken(roleNameAndTokenAndFileVN)!! +
                            dl +
                            getToken(fileName!!, ElementTypeWithStatus.FILE)!! +
                            dl +
                            "$vn"
                        keysOfPermissionTuplesToGet.add(permissionTupleKey)
                    }
                }
            } else {
                val message = "A role or file name has to be specified"
                logger.error { message }
                throw IllegalArgumentException(message)
            }
        }


        logger.debug { "Found ${keysOfPermissionTuplesToGet.size} permission tuples to fetch" }

        /** Get all permission tuples from the keys collected */
        keysOfPermissionTuplesToGet.forEach { permissionTupleKey ->
            logger.debug { "Retrieving data of permission tuple with key $permissionTupleKey" }
            val permissionTupleValues = jqueryHgetAll(permissionTupleKey)
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
            (roleVersionNumber == null || it.roleVersionNumber == roleVersionNumber) &&
            (symKeyVersionNumber == null || it.symKeyVersionNumber == symKeyVersionNumber) &&
            (roleNameToExclude == null || it.roleName != roleNameToExclude)
        }

        logger.debug { "Found ${permissionTuples.size} permission tuples" }
        return permissionTuples
    }

    /**
     * Retrieve the file tuples matching the [fileName] starting
     * from the [offset] limiting the number of tuples to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no file tuples are found, return an empty set.
     * This method should support invocations by non-admin users
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

        val keysOfFileTuplesToGet = hashSetOf<String>()

        if (!givenFileName) {
            val message = "File name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        /**
         * If the user is not the admin, we get the set of names
         * and tokens of the roles assigned to the users and, with
         * those, get the set of names and tokens of files assigned
         * to each role and, with those, get the file tuple of the
         * user matching the given file name
         */
        if (!isAdmin) {
            val rolesNameAndToken: HashSet<String> = getRolesNameAndTokenFromUserToken()

            rolesNameAndToken.forEach { roleNameAndToken ->
                val roleToken = getTokenFromElementNameAndToken(roleNameAndToken)!!

                val filesNameAndTokenAndVN = getFilesNameAndTokenAndVNFromRoleToken(roleToken)
                filesNameAndTokenAndVN.forEach { fileNameAndTokenAndVN ->
                    val currentFileName = getNameFromElementNameAndToken(fileNameAndTokenAndVN)
                    val fileToken = getTokenFromElementNameAndToken(fileNameAndTokenAndVN)
                    if (currentFileName == fileName) {
                        val fileTupleKey =
                            fileTupleObjectPrefix +
                            byFileTokenKeyPrefix +
                            fileToken
                        keysOfFileTuplesToGet.add(fileTupleKey)
                    }
                }
            }
        } else {
            /** Get the keys of all file tuples */
            logger.info { "Filtering by matching file name $fileName" }

            val keyOfFileTuplesListByFile =
                "$fileTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
            val filesToken = hashSetOf<String>()
            jquerySmembers(keyOfFileTuplesListByFile)?.let { filesToken.addAll(it) }
            val size = filesToken.size
            logger.debug { "Found $size file tuples to retrieve" }

            if (size == 0) {
                when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
                    ElementStatus.OPERATIONAL -> OutcomeCode.CODE_009_FILETUPLE_NOT_FOUND
                    ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                    ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                }
            } else {
                filesToken.forEach { fileToken ->
                    val fileTupleKey = "$fileTupleObjectPrefix$byFileTokenKeyPrefix$fileToken"
                    keysOfFileTuplesToGet.add(fileTupleKey)
                }
            }
        }


        /** Get all file tuples from the keys collected */
        keysOfFileTuplesToGet.forEach { fileTupleKey ->
            logger.debug { "Retrieving data of file tuple with key $fileTupleKey" }
            val fileTupleValues = jqueryHgetAll(fileTupleKey)
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
     * not found, return null. This method should support
     * invocations by non-admin users
     */
    override fun getPublicKey(
        name: String?,
        token: String?,
        elementType: ElementTypeWithKey,
        asymKeyType: AsymKeysType
    ): ByteArray? {
        logger.info { "Getting public key of type $asymKeyType of a element of type $elementType" }

        // TODO support invocations by non-admin users

        val givenName = !name.isNullOrBlank()
        val givenToken = !token.isNullOrBlank()
        val tokenToUse = if (!givenToken) {
            if (givenName) {
                getToken(
                    name!!,
                    when (elementType) {
                        ElementTypeWithKey.USER -> ElementTypeWithStatus.USER
                        ElementTypeWithKey.ROLE -> ElementTypeWithStatus.ROLE
                    }
                )
            } else {
                val message = "Neither name nor token given for query"
                logger.error { message }
                throw IllegalStateException(message)
            }
        } else {
            token
        }

        val fieldOfKeyToGet = when (asymKeyType) {
            AsymKeysType.ENC -> asymEncPublicKeyField
            AsymKeysType.SIG -> asymSigPublicKeyField
        }

        val keyOfElement = when (elementType) {
            ElementTypeWithKey.USER -> "$userObjectPrefix$byUserTokenKeyPrefix$tokenToUse"
            ElementTypeWithKey.ROLE -> "$roleObjectPrefix$byRoleTokenKeyPrefix$tokenToUse"
        }

        val elementData = jqueryHgetAll(keyOfElement)
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
     * return null. This method should support invocations by
     * non-admin users
     */
    override fun getVersionNumber(
        name: String?,
        token: String?,
        elementType: ElementTypeWithVersionNumber
    ): Int? {
        logger.info { "Getting version number of a $elementType" }

        // TODO support invocations by non-admin users

        val givenName = !name.isNullOrBlank()
        val givenToken = !token.isNullOrBlank()
        val tokenToUse = if (!givenToken) {
            if (givenName) {
                getToken(
                    name!!,
                    when (elementType) {
                        ElementTypeWithVersionNumber.ROLE -> ElementTypeWithStatus.ROLE
                        ElementTypeWithVersionNumber.FILE -> ElementTypeWithStatus.FILE
                    }
                )
            } else {
                val message = "Neither name nor token given for query"
                logger.error { message }
                throw IllegalStateException(message)
            }
        } else {
            token
        }

        val fieldOfVersionNumberToGet = when (elementType) {
            ElementTypeWithVersionNumber.ROLE -> roleVersionNumberField
            ElementTypeWithVersionNumber.FILE -> symEncKeyVersionNumberField
        }

        val keyOfElement = when (elementType) {
            ElementTypeWithVersionNumber.ROLE -> "$roleObjectPrefix$byRoleTokenKeyPrefix$tokenToUse"
            ElementTypeWithVersionNumber.FILE -> "$fileObjectPrefix$byFileTokenKeyPrefix$tokenToUse"
        }

        val elementData = jqueryHgetAll(keyOfElement)
        return if (elementData[statusField]?.let { ElementStatus.valueOf(it) } == ElementStatus.OPERATIONAL) {
            elementData[fieldOfVersionNumberToGet]?.toInt()
        } else {
            null
        }
    }



    /**
     * Retrieve the token of the element of
     * the given [type] matching the [name].
     * If the token was not found, return null.
     * This method should support invocations
     * by non-admin users
     */
    override fun getToken(name: String, type: ElementTypeWithStatus): String? {
        logger.debug { "Get the token of element $type with name $name" }

        // TODO support invocations by non-admin users

        /** Guard clauses */
        if (name.isBlank()) {
            val message = "Name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val elementsNamesAndTokens = mutableSetOf<String>()
        when (type) {
            ElementTypeWithStatus.USER -> jquerySmembers(setOfUsersKey)
            ElementTypeWithStatus.ROLE -> jquerySmembers(setOfRolesKey)
            ElementTypeWithStatus.FILE -> jquerySmembers(setOfFilesKey)
        }?.let { elementsNamesAndTokens.addAll(it) }
        when (type) {
            ElementTypeWithStatus.USER -> jquerySmembers(setOfDeletedUsersKey)
            ElementTypeWithStatus.ROLE -> jquerySmembers(setOfDeletedRolesKey)
            ElementTypeWithStatus.FILE -> jquerySmembers(setOfDeletedFilesKey)
        }?.let { elementsNamesAndTokens.addAll(it) }

        val element = elementsNamesAndTokens.firstOrNull { it.startsWith("$name$dl") }
        return getTokenFromElementNameAndToken(element)
    }

    /**
     * Retrieve the status of the element of the
     * given [type] by matching the [name]
     * or [token] (at least one required).
     * If the status was not found, return null.
     * This method should support invocations by
     * non-admin users
     */
    override fun getStatus(
        name: String?,
        token: String?,
        type: ElementTypeWithStatus
    ): ElementStatus? {
        logger.debug { "Getting the status of a $type" }

        // TODO support invocations by non-admin users

        val givenName = !name.isNullOrBlank()
        val givenToken = !token.isNullOrBlank()
        val tokenToUse = if (!givenToken) {
            if (givenName) {
                getToken(name!!, type)
            } else {
                val message = "Neither name nor token given for query"
                logger.error { message }
                throw IllegalStateException(message)
            }
        } else {
            token
        }

        return if (tokenToUse != null) {
            val keyOfElement = "${
                when (type) {
                    ElementTypeWithStatus.USER -> "$userObjectPrefix$byUserTokenKeyPrefix"
                    ElementTypeWithStatus.ROLE -> "$roleObjectPrefix$byRoleTokenKeyPrefix"
                    ElementTypeWithStatus.FILE -> "$fileObjectPrefix$byFileTokenKeyPrefix"
                }
            }$tokenToUse"
            val status = jqueryHget(keyOfElement, statusField)?.let { ElementStatus.valueOf(it) }
            logger.debug { "The status is $status" }
            status
        } else {
            null
        }
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

        return when (getStatus(name = username, type = ElementTypeWithStatus.USER)) {
            null -> {
                OutcomeCode.CODE_004_USER_NOT_FOUND
            }
            ElementStatus.DELETED -> {
                OutcomeCode.CODE_013_USER_WAS_DELETED
            }
            else -> {
                val userToken = getToken(username, ElementTypeWithStatus.USER)!!
                val elementNameAndToken = concatenateNameAndToken(username, userToken)
                val userKeyByToken = "$userObjectPrefix$byUserTokenKeyPrefix$userToken"
                logger.info { "Deleting user with token $userToken" }

                transactionToExec = true
                jTransaction!!.srem(setOfUsersKey, elementNameAndToken)
                jTransaction!!.sadd(setOfDeletedUsersKey, elementNameAndToken)
                jTransaction!!.hset(userKeyByToken, statusField, ElementStatus.DELETED.toString())
                mapOfListsToAdd.getOrPut(setOfDeletedUsersKey) { hashSetOf() }.add(elementNameAndToken)

                logger.debug { "Deleting the user from the Redis database" }
                return if (jQuery!!.aclDelUser(username) == 1L) {
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

        return when (getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)) {
            null -> {
                OutcomeCode.CODE_005_ROLE_NOT_FOUND
            }
            ElementStatus.DELETED -> {
                OutcomeCode.CODE_014_ROLE_WAS_DELETED
            }
            else -> {
                val roleToken = getToken(roleName, ElementTypeWithStatus.ROLE)!!
                val elementNameAndToken = concatenateNameAndToken(roleName, roleToken)
                val roleKeyByToken = "$roleObjectPrefix$byRoleTokenKeyPrefix$roleToken"
                logger.info { "Deleting role with key $roleKeyByToken" }

                transactionToExec = true
                jTransaction!!.srem(setOfRolesKey, elementNameAndToken)
                jTransaction!!.sadd(setOfDeletedRolesKey, elementNameAndToken)
                jTransaction!!.hset(roleKeyByToken, statusField, ElementStatus.DELETED.toString())
                mapOfListsToAdd.getOrPut(setOfDeletedRolesKey) { hashSetOf() }.add(elementNameAndToken)

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

        return when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
            null -> {
                OutcomeCode.CODE_006_FILE_NOT_FOUND
            }
            ElementStatus.DELETED -> {
                OutcomeCode.CODE_015_FILE_WAS_DELETED
            }
            else -> {
                val fileToken = getToken(fileName, ElementTypeWithStatus.FILE)!!
                val elementNameAndToken = concatenateNameAndToken(fileName, fileToken)
                val fileKeyByToken = "$fileObjectPrefix$byFileTokenKeyPrefix$fileToken"
                logger.info { "Deleting file with key $fileKeyByToken" }

                transactionToExec = true
                jTransaction!!.srem(setOfFilesKey, elementNameAndToken)
                jTransaction!!.sadd(setOfDeletedFilesKey, elementNameAndToken)
                jTransaction!!.hset(fileKeyByToken, statusField, ElementStatus.DELETED.toString())
                mapOfListsToAdd.getOrPut(setOfDeletedFilesKey) { hashSetOf() }.add(elementNameAndToken)

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

        /** Get all users assigned to the role */
        val roleTuplesKeyByRoleName = "$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
        val usersNameAndToken = hashSetOf<String>()
        jquerySmembers(roleTuplesKeyByRoleName)?.let { usersNameAndToken.addAll(it) }
        val size = usersNameAndToken.size
        logger.debug { "Found $size role tuples to delete" }

        return if (size == 0) {
            when (getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)) {
                ElementStatus.OPERATIONAL -> OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
                ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
            }
        } else {
            transactionToExec = true
            jTransaction!!.del(roleTuplesKeyByRoleName)
            listOfKeysToDelete.add(roleTuplesKeyByRoleName)
            val roleToken = getToken(roleName, ElementTypeWithStatus.ROLE)!!

            /** Remove the role tuples from all users */
            usersNameAndToken.forEach { userNameAndToken ->
                val username = getNameFromElementNameAndToken(userNameAndToken)
                val userToken = getTokenFromElementNameAndToken(userNameAndToken)
                val roleTuplesKeyByUserToken = "$roleTuplesListKeyPrefix$byUserTokenKeyPrefix$userToken"
                val roleTuplesKeyByUsername = "$roleTuplesListKeyPrefix$byUsernameKeyPrefix$username"
                val roleTuplesKeyByUsernameAndRoleName =
                    "$roleTuplesListKeyPrefix$byUsernameAndRoleNameKeyPrefix$username$dl$roleName"
                val roleTupleKey = "$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix$userToken$dl$roleToken"

                logger.debug { "Deleting role tuple of user $username" }
                jTransaction!!.srem(
                    roleTuplesKeyByUsername,
                    concatenateNameAndToken(roleName, roleToken)
                )
                jTransaction!!.srem(
                    roleTuplesKeyByUserToken,
                    concatenateNameAndToken(roleName, roleToken)
                )
                jTransaction!!.del(roleTuplesKeyByUsernameAndRoleName)
                listOfKeysToDelete.add(roleTuplesKeyByUsernameAndRoleName)

                jTransaction!!.del(roleTupleKey)
                listOfKeysToDelete.add(roleTupleKey)
            }

            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Delete the permission tuples matching the [roleName]
     * and/or the [fileName] (at least one required). Finally,
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
    ): OutcomeCode {
        logger.info { "Deleting permission tuples" }

        /** Guard Clauses */
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }
        val givenRoleName = !roleName.isNullOrBlank()
        val givenFileName = !fileName.isNullOrBlank()

        return if (!givenRoleName && !givenFileName) {
            val message = "Neither role nor file name given for query"
            logger.error { message }
            throw IllegalStateException(message)
        } else if (givenRoleName && !givenFileName) {

            logger.info { "Filtering by role name $roleName" }

            /** The role name was given. Get all files assigned to the role */
            val permissionTuplesKeyByRoleName = "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
            val filesNameAndTokenAndVN = hashSetOf<String>()
            jquerySmembers(permissionTuplesKeyByRoleName)?.let { filesNameAndTokenAndVN.addAll(it) }
            val size = filesNameAndTokenAndVN.size

            logger.debug { "Found $size permission tuples to delete" }


            if (size == 0) {
                when (getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)) {
                    ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                    ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                    ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                }
            } else {
                transactionToExec = true
                jTransaction!!.del(permissionTuplesKeyByRoleName)
                listOfKeysToDelete.add(permissionTuplesKeyByRoleName)

                val roleToken = getToken(roleName!!, ElementTypeWithStatus.ROLE)!!
                val permissionTuplesKeyByRoleToken =
                    "$permissionTuplesListKeyPrefix$byRoleTokenKeyPrefix$roleToken"
                jTransaction!!.del(permissionTuplesKeyByRoleToken)
                listOfKeysToDelete.add(permissionTuplesKeyByRoleToken)

                /** Remove the permission tuples from all files */
                filesNameAndTokenAndVN.forEach { fileNameAndTokenAndVN ->
                    val currentFileName = getNameFromElementNameAndToken(fileNameAndTokenAndVN)
                    val fileToken = getTokenFromElementNameAndToken(fileNameAndTokenAndVN)
                    val fileVersionNumber = getVNFromElementNameAndTokenAndVN(fileNameAndTokenAndVN)!!.toInt()

                    val permissionTuplesKeyByFileName =
                        "$permissionTuplesListKeyPrefix$byFileNameKeyPrefix$currentFileName"
                    val permissionTuplesKeyByRoleNameAndFileName =
                        "$permissionTuplesListKeyPrefix$byRoleAndFileNameKeyPrefix" +
                        "$roleName$dl$currentFileName"
                    val permissionTupleKey = "$roleTupleObjectPrefix$byRoleAndFileTokenAndVersionNumberKeyPrefix" +
                        "$roleToken$dl$fileToken$dl$fileVersionNumber"

                    logger.debug {
                        "Deleting permission tuple of role $roleName and " +
                        "file $currentFileName with version number $fileVersionNumber"
                    }

                    jTransaction!!.srem(
                        permissionTuplesKeyByFileName,
                        concatenateNameAndTokenAndVN(roleName, roleToken, fileVersionNumber)
                    )
                    jTransaction!!.del(permissionTuplesKeyByRoleNameAndFileName)
                    listOfKeysToDelete.add(permissionTuplesKeyByRoleNameAndFileName)

                    jTransaction!!.del(permissionTupleKey)
                    listOfKeysToDelete.add(permissionTupleKey)
                }

                OutcomeCode.CODE_000_SUCCESS
            }

        } else if (!givenRoleName) {

            logger.info { "Filtering by file name $fileName" }

            /** The file name was given. Get all roles assigned to the file */
            val permissionTuplesKeyByFileName = "$permissionTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
            val rolesNameAndTokenAndFileVN = hashSetOf<String>()
            jquerySmembers(permissionTuplesKeyByFileName)?.let { rolesNameAndTokenAndFileVN.addAll(it) }
            val size = rolesNameAndTokenAndFileVN.size

            logger.debug { "Found $size permission tuples to delete" }


            if (size == 0) {
                when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
                    ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                    ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                    ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                }
            } else {
                transactionToExec = true
                jTransaction!!.del(permissionTuplesKeyByFileName)
                listOfKeysToDelete.add(permissionTuplesKeyByFileName)

                val fileToken = getToken(fileName!!, ElementTypeWithStatus.FILE)!!

                /** Remove the permission tuples from all roles */
                rolesNameAndTokenAndFileVN.forEach { roleNameAndTokenAndFileVN ->
                    val currentRoleName = getNameFromElementNameAndToken(roleNameAndTokenAndFileVN)
                    val roleToken = getTokenFromElementNameAndToken(roleNameAndTokenAndFileVN)
                    val fileVersionNumber = getVNFromElementNameAndTokenAndVN(roleNameAndTokenAndFileVN)!!.toInt()

                    val permissionTuplesKeyByRoleName =
                        "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$currentRoleName"
                    val permissionTuplesKeyByRoleToken =
                        "$permissionTuplesListKeyPrefix$byRoleTokenKeyPrefix$roleToken"
                    val permissionTuplesKeyByRoleNameAndFileName =
                        "$permissionTuplesListKeyPrefix$byRoleAndFileNameKeyPrefix" +
                        "$currentRoleName$dl$fileName"
                    val permissionTupleKey = "$roleTupleObjectPrefix$byRoleAndFileTokenAndVersionNumberKeyPrefix" +
                        "$roleToken$dl$fileToken$dl$fileVersionNumber"

                    logger.debug {
                        "Deleting permission tuple of role $currentRoleName and " +
                        "file $fileName with version number $fileVersionNumber"
                    }

                    jTransaction!!.srem(
                        permissionTuplesKeyByRoleName,
                        concatenateNameAndTokenAndVN(fileName, fileToken, fileVersionNumber)
                    )
                    jTransaction!!.srem(
                        permissionTuplesKeyByRoleToken,
                        concatenateNameAndTokenAndVN(fileName, fileToken, fileVersionNumber)
                    )
                    jTransaction!!.del(permissionTuplesKeyByRoleNameAndFileName)
                    listOfKeysToDelete.add(permissionTuplesKeyByRoleNameAndFileName)

                    jTransaction!!.del(permissionTupleKey)
                    listOfKeysToDelete.add(permissionTupleKey)
                }

                OutcomeCode.CODE_000_SUCCESS
            }
        } else {

            logger.info { "Filtering by role name $roleName and file name $fileName" }

            /** Both the role and file name were given */
            val permissionTuplesKeyByRoleNameAndFileName =
                "$permissionTuplesListKeyPrefix$byRoleAndFileNameKeyPrefix" +
                "$roleName$dl$fileName"
            val filesTokenAndVN = hashSetOf<String>()
            jquerySmembers(permissionTuplesKeyByRoleNameAndFileName)?.let { filesTokenAndVN.addAll(it) }
            val size = filesTokenAndVN.size

            logger.debug { "Found $size permission tuples to delete" }


            if (size == 0) {
                when (getStatus(name = roleName, type = ElementTypeWithStatus.ROLE)) {
                    ElementStatus.OPERATIONAL -> {
                        when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
                            ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                            ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                            ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                        }
                    }
                    ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                    ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                }
            } else {
                transactionToExec = true
                jTransaction!!.del(permissionTuplesKeyByRoleNameAndFileName)
                listOfKeysToDelete.add(permissionTuplesKeyByRoleNameAndFileName)

                val roleToken = getToken(roleName!!, ElementTypeWithStatus.ROLE)!!
                val fileToken = getToken(fileName!!, ElementTypeWithStatus.FILE)!!

                /** Remove the permission tuples from all roles and files */
                filesTokenAndVN.forEach { fileNameAndTokenAndVN ->
                    val fileVersionNumber = getVNFromElementNameAndTokenAndVN(fileNameAndTokenAndVN)!!.toInt()

                    val permissionTuplesKeyByRoleName =
                        "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                    val permissionTuplesKeyByRoleToken =
                        "$permissionTuplesListKeyPrefix$byRoleTokenKeyPrefix$roleToken"
                    val permissionTuplesKeyByFileName =
                        "$permissionTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"

                    val permissionTupleKey = "$roleTupleObjectPrefix$byRoleAndFileTokenAndVersionNumberKeyPrefix" +
                            "$roleToken$dl$fileToken$dl$fileVersionNumber"

                    logger.debug {
                        "Deleting permission tuple of role $roleName and " +
                        "file $fileName with version number $fileVersionNumber"
                    }

                    jTransaction!!.srem(
                        permissionTuplesKeyByRoleName,
                        concatenateNameAndTokenAndVN(fileName, fileToken, fileVersionNumber)
                    )
                    jTransaction!!.srem(
                        permissionTuplesKeyByRoleToken,
                        concatenateNameAndTokenAndVN(fileName, fileToken, fileVersionNumber)
                    )
                    jTransaction!!.srem(
                        permissionTuplesKeyByFileName,
                        concatenateNameAndTokenAndVN(roleName, roleToken, fileVersionNumber)
                    )

                    jTransaction!!.del(permissionTupleKey)
                    listOfKeysToDelete.add(permissionTupleKey)
                }

                OutcomeCode.CODE_000_SUCCESS
            }
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

        /** Get all files to deleted */
        val fileTuplesKeyByFileName = "$fileTuplesListKeyPrefix$byFileNameKeyPrefix$fileName"
        val filesToken = hashSetOf<String>()
        jquerySmembers(fileTuplesKeyByFileName)?.let { filesToken.addAll(it) }
        val size = filesToken.size
        logger.debug { "Found $size file tuples to delete" }


        return if (size == 0) {
            when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
                ElementStatus.OPERATIONAL -> OutcomeCode.CODE_009_FILETUPLE_NOT_FOUND
                ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                ElementStatus.INCOMPLETE, null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
            }
        } else {
            transactionToExec = true
            jTransaction!!.del(fileTuplesKeyByFileName)
            listOfKeysToDelete.add(fileTuplesKeyByFileName)

            /** Remove the role tuples from all users */
            filesToken.forEach { fileToken ->

                val fileTupleKey = "$fileTupleObjectPrefix$byFileTokenKeyPrefix$fileToken"

                logger.debug { "Deleting file tuple of file $fileName" }

                jTransaction!!.del(fileTupleKey)
                listOfKeysToDelete.add(fileTupleKey)
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

        val fileToken = getToken(fileName, ElementTypeWithStatus.FILE)
        val fileKeyByToken = "$fileObjectPrefix$byFileTokenKeyPrefix$fileToken"

        return when (getStatus(name = fileName, type = ElementTypeWithStatus.FILE)) {
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
                jTransaction!!.hincrBy(fileKeyByToken, symEncKeyVersionNumberField, 1)
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
                        val roleKeyByToken = "$roleObjectPrefix$byRoleTokenKeyPrefix${role.token}"
                        jTransaction!!.hset(roleKeyByToken, hashMapOf(
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
        val roleToken = updatedPermissionTuple.roleToken
        val fileToken = updatedPermissionTuple.fileToken
        val symKeyVersionNumber = updatedPermissionTuple.symKeyVersionNumber
        val permissionTupleKey = permissionTupleObjectPrefix +
            "$byRoleAndFileTokenAndVersionNumberKeyPrefix$roleToken$dl$fileToken$dl$symKeyVersionNumber"
        logger.info { "Updating the permission tuple of role $roleName to file $fileName" }

        return if (jQuery!!.exists(permissionTupleKey)) {
            transactionToExec = true
            jTransaction!!.hset(
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
                if (jTransaction == null && jQuery == null && transaction == null) {
                    transaction = pool.resource
                    try {
                        transaction!!.auth(usernameRedis, mmRedisInterfaceParameters.password)
                        transaction!!.watch(lockUnlockRollbackKey)
                        jTransaction = transaction!!.multi()
                        jQuery = pool.resource
                        jQuery!!.auth(usernameRedis, mmRedisInterfaceParameters.password)
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
                    jTransaction?.discard()
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
            logger.debug { "Clearing list of elements to add (size was ${listOfElementsToAdd.size})" }
            logger.debug { "Clearing list of lists to add (size was ${mapOfListsToAdd.size})" }
            logger.debug { "Clearing list of values pairs to add (size was ${mapOfValuesToAdd.size})" }
            logger.debug { "Clearing list of keys to delete (size was ${listOfKeysToDelete.size})" }
            listOfElementsToAdd.clear()
            mapOfListsToAdd.clear()
            mapOfValuesToAdd.clear()
            listOfKeysToDelete.clear()
            locks--
            if (jTransaction != null && jQuery != null && transaction != null) {
                if (transactionToExec) {
                    transactionToExec = false
                    jTransaction!!.discard()
                }
                closeAndNullRedis()
                OutcomeCode.CODE_000_SUCCESS
            } else {
                /** The lock has already been released */
                logger.warn { "The lock was released but the connection was not closed" }
                jTransaction?.discard()
                closeAndNullRedis()
                OutcomeCode.CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 0) {
            locks--
            logger.debug { "Decrement lock number to $locks}" }
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
            logger.debug { "Clearing list of elements to add (size was ${listOfElementsToAdd.size})" }
            logger.debug { "Clearing list of lists to add (size was ${mapOfListsToAdd.size})" }
            logger.debug { "Clearing list of values pairs to add (size was ${mapOfValuesToAdd.size})" }
            logger.debug { "Clearing list of keys to delete (size was ${listOfKeysToDelete.size})" }
            listOfElementsToAdd.clear()
            mapOfListsToAdd.clear()
            mapOfValuesToAdd.clear()
            listOfKeysToDelete.clear()
            locks--
            if (jTransaction != null && jQuery != null && transaction != null) {
                if (transactionToExec) {
                    transactionToExec = false
                    jTransaction!!.incr(lockUnlockRollbackKey)
                    val responses = jTransaction!!.exec()
                    closeAndNullRedis()
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
                jTransaction?.discard()
                closeAndNullRedis()
                OutcomeCode.CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 0) {
            locks--
            logger.debug { "Decrement lock number to $locks" }
            OutcomeCode.CODE_000_SUCCESS
        } else {
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * This function is invoked whenever the interface
     * is dismissed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    override fun deinit() {
        /** No resources or fields to de-initialize */
    }

    /**
     * Close all connections toward
     * Redis and null the references
     */
    private fun closeAndNullRedis() {
        transaction?.close()
        jTransaction?.close()
        jQuery?.close()
        transaction = null
        jTransaction = null
        jQuery = null
    }



    /**
     * Get all names and tokens of roles that the
     * user whose token is in the [mmRedisInterfaceParameters]
     * is assigned to
     */
    private fun getRolesNameAndTokenFromUserToken(): HashSet<String> {
        val keyOfRoleTuplesListByUserToken =
            roleTuplesListKeyPrefix +
            byUserTokenKeyPrefix +
            mmRedisInterfaceParameters.token
        return jquerySmembers(keyOfRoleTuplesListByUserToken) as HashSet<String>
    }

    /**
     * Get all names and tokens of files that the
     * role with the given [roleToken] is assigned to
     */
    private fun getFilesNameAndTokenAndVNFromRoleToken(roleToken: String): HashSet<String> {
        val keyOfPermissionTuplesListByRoleToken =
            permissionTuplesListKeyPrefix +
            byRoleTokenKeyPrefix +
            roleToken
        return jquerySmembers(keyOfPermissionTuplesListByRoleToken) as HashSet<String>
    }


    /** Concatenate the given [name] and [token] */
    private fun concatenateNameAndToken(name: String, token: String) = name + dl + token

    /** Concatenate the given [name], [token] and version number [vn] */
    private fun concatenateNameAndTokenAndVN(name: String, token: String, vn: Int) = name + dl + token + dl + vn

    /**
     * Split the given [element] name + dl + token
     * string to return the name only
     */
    private fun getNameFromElementNameAndToken(element: String?) = element?.split(dl)?.get(0)

    /**
     * Split the given [element] name + dl + token
     * string to return the token only
     */
    private fun getTokenFromElementNameAndToken(element: String?) = element?.split(dl)?.get(1)

    /**
     * Split the given [element] name + dl + token + dl + version number
     * string to return the version number only
     */
    private fun getVNFromElementNameAndTokenAndVN(element: String?) = element?.split(dl)?.get(2)

    /**
     * Get the list of all elements in the
     * given [key] which holds a list
     */
    private fun jquerySmembers(key: String): MutableSet<String>? {
        return jQuery!!.smembers(key).apply {
            mapOfListsToAdd[key]?.let { addAll(it) }
            removeAll(listOfKeysToDelete.toSet())
        }
    }


    /**
     * Get all fields of the hash set
     * corresponding to the given [key]
     */
    private fun jqueryHgetAll(key: String): Map<String, String> {
        return mapOfValuesToAdd.getOrElse(key) {
            jQuery!!.hgetAll(key)
        }
    }

    /**
     * Get the [field] of the hash set
     * corresponding to the given [key]
     */
    private fun jqueryHget(key: String, field: String): String? {
        return if (mapOfValuesToAdd.contains(key)) {
            (mapOfValuesToAdd[key])!![field]
        } else {
            jQuery!!.hget(key, field)
        }
    }
}