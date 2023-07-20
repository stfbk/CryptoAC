package eu.fbk.st.cryptoac.mm.redis

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.EncryptedAsymKeys
import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.mm.MMServiceRBAC
import eu.fbk.st.cryptoac.mm.MMType
import eu.fbk.st.cryptoac.model.CodeServiceParameters
import eu.fbk.st.cryptoac.model.*
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
 * database configured with the given [mmRedisServiceParameters].
 *
 * Currently, Redis does not support multiple keys pointing to the
 * same value (see https://github.com/redis/redis/issues/2668).
 *
 * To regulate accesses to the metadata (e.g., the access control policy, the
 * identifiers of other users/roles/resources, ...), Redis 7.0 (the most recent
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
 * - [setOfResourcesKey]: set of resourceName:resourceToken of resources in Redis (ADMIN ONLY)
 * - [setOfDeletedResourcesKey]: set of resourceName:resourceToken of deleted resources in Redis (ADMIN ONLY)
 * - [roleTuplesListKeyPrefix]: top-level key prefix for extra information to identify the keys of role tuples:
 *   - [byUserAndRoleNameKeyPrefix]: set of, for each permission assigned to the user, the role name plus the token (ADMIN ONLY)
 *   - [byRoleNameKeyPrefix]: set of, for each user assigned to the role, the username plus the token (ADMIN ONLY)
 *   - [byUsernameKeyPrefix]: set of, for each role assigned to the user, the role name plus the token (ADMIN ONLY)
 *   - [byUserTokenKeyPrefix]: set of, for each role assigned to the user, the role name plus the token (USER WITH TOKEN CAN ACCESS)
 * - [permissionTuplesListKeyPrefix]: top-level key prefix for extra information to identify the keys of permission tuples:
 *   - [byRoleAndResourceNameKeyPrefix]: set of, for each permission assigned to the role, the resource name plus the token (ADMIN ONLY)
 *   - [byResourceNameKeyPrefix]: set of, for each permission assigned to the resource, the role name plus the token (ADMIN ONLY)
 *   - [byRoleNameKeyPrefix]: set of, for each permission assigned to the role, the resource name plus the token (ADMIN ONLY)
 *   - [byRoleTokenKeyPrefix]: set of, for each permission assigned to the role, the resource name plus the token (USERS CAN ACCESS)
 *
 * Then, we save metadata on objects (i.e users, roles, resources, role/permission/) under the following keys:
 * - [userObjectPrefix] + [byUserTokenKeyPrefix]: hashset of user (name, token, sig pub key, enc pub key, isAdmin, status) (USERS CAN ACCESS)
 * - [roleObjectPrefix] + [byRoleTokenKeyPrefix]: hashset of role (name, token, sig pub key, enc pub key, version number, status) (USERS CAN ACCESS)
 * - [resourceObjectPrefix] + [byResourceTokenKeyPrefix]: hashset of resource (name, token, enc version number, dec version number, status, enforcement) (USERS CAN ACCESS)
 * - [roleTupleObjectPrefix] + [byUserAndRoleTokenKeyPrefix]: hashset of role tuple (username, role name, encrypted sig key, encrypted ver key, encrypted enc key, encrypted dec key, role version number, signature) (USERS CAN ACCESS)
 * - [permissionTupleObjectPrefix] + [byRoleAndResourceTokenKeyPrefix]: hashset of permission tuple (role name, resource name, role token, resource token, encrypted sym key, sym key version number, role version number, permission, signer, signature) (USERS CAN ACCESS)
 */
class MMServiceRBACRedis(
    private val mmRedisServiceParameters: MMServiceRedisParameters
) : MMServiceRBAC {

    // TODO protection from stored XSS attacks? sanitize user inputs?

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    override var locks = 0

    /** The transaction connection to the Redis database */
    private var transaction: Jedis? = null

    /**
     * The connection for modifying the
     * Redis database during a transaction
     */
    private var jTransaction: Transaction? = null

    /**
     * The connection for querying the
     * Redis database during a transaction
     */
    private var jQuery: Jedis? = null

    /**
     * Whether the transaction contains
     * any command to execute (thus we need
     * to finalize the transaction during
     * the unlock phase)
     */
    private var transactionToExec: Boolean = false

    // TODO add "listOfKeysToAdd" and all related mechanisms, like for the other cache
    
    /**
     * This is a list of keys that are going to be deleted in the current
     * transaction (i.e., between a lock and an unlock/rollback operation.
     * We need to keep this information, e.g., when deleting and then
     * adding keys in the same transaction (otherwise we get errors like
     * "this key already exists")
     */
    private var listOfKeysToDelete: MutableList<String> = mutableListOf()

    /**
     * This is a list of keys that are going to be renamed in the current
     * transaction (i.e., between a lock and an unlock/rollback operation.
     * We need to keep this information, e.g., when renaming a key and
     * then fetching data from that key in the same transaction (otherwise
     * we get errors like "this key does not exist"). Note that the key of
     * the hashmap is the renamed key, the value is the original key
     */
    private var listOfKeysRenamed: HashMap<String, String> = hashMapOf()

    /**
     * This is a list of names unit elements that are going to
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

    /**
     * This is a map holding, for each key, a set of strings that are going to
     * be removed in the transaction (i.e., between a lock and an unlock/rollback
     * operation. We need to keep this information, e.g., when removing and then
     * checking the existence of delete values in the same transaction (otherwise,
     * a value could seem to be present while instead it is going to be deleted).
     */
    private var mapOfListsToRemove: HashMap<String, HashSet<String>> = hashMapOf()

    /** The threadsafe pool of network connections toward Redis */
    private val pool = JedisPool(
        JedisPoolConfig(),
        mmRedisServiceParameters.url,
        mmRedisServiceParameters.port
    )

    /**
     * The username with which connect to Redis.
     * "default" is the Redis default username
     */
    private val usernameRedis = if (mmRedisServiceParameters.username == ADMIN) {
        "default"
    } else {
        mmRedisServiceParameters.username
    }

    private val usernameField = "u"
    private val roleNameField = "rn"
    private val userIsAdminField = "uia"
    private val userTokenField = "ut"
    private val roleTokenField = "rt"
    private val asymEncPublicKeyField = "aepk"
    private val asymSigPublicKeyField = "aspk"
    private val resourceNameField = "fn"
    private val resourceTokenField = "ft"
    private val symDecKeyVersionNumberField = "sdkvn"
    private val encryptingSymKeyField = "esk"
    private val decryptingSymKeyField = "dsk"
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
    private val lockUnlockRollbackKey = "lurk" // TODO il watch potremmo farlo più fine-grained?

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
     * Key for the set of (operational) resources. Each element
     * is composed of the resource name and the resource token
     */
    private val setOfResourcesKey = "of"

    /**
     * Key for the set of (deleted) resources. Each element
     * is composed of the resource name and the resource token
     */
    private val setOfDeletedResourcesKey = "df"

    /** Delimited character for both keys and values */
    private val dl = ":"

    /** Prefix for user objects */
    private val userObjectPrefix = "uo$dl"

    /** Prefix for role objects */
    private val roleObjectPrefix = "ro$dl"

    /** Prefix for resource objects */
    private val resourceObjectPrefix = "fo$dl"

    /** Prefix for the keys of role tuples */
    private val roleTupleObjectPrefix = "rt$dl"

    /** Prefix for the keys of lists of role tuples */
    private val roleTuplesListKeyPrefix = "rtl$dl"

    /** Prefix for the keys of permission tuples */
    private val permissionTupleObjectPrefix = "pt$dl"

    /** Prefix for the keys of lists of permission tuples */
    private val permissionTuplesListKeyPrefix = "ptl$dl"

    /** Prefix for secondary indexes based on usernames */
    private val byUsernameKeyPrefix = "bu$dl"

    /** Prefix for secondary indexes based on user and role names */
    private val byUserAndRoleNameKeyPrefix = "bur$dl"

    /** Prefix for secondary indexes based on user and role tokens */
    private val byUserAndRoleTokenKeyPrefix = "burt$dl"

    /** Prefix for secondary indexes based on role names */
    private val byRoleNameKeyPrefix = "br$dl"

    /** Prefix for secondary indexes based on user tokens */
    private val byUserTokenKeyPrefix = "but$dl"

    /** Prefix for secondary indexes based on role tokens */
    private val byRoleTokenKeyPrefix = "brt$dl"

    /** Prefix for secondary indexes based on resource tokens */
    private val byResourceTokenKeyPrefix = "bft$dl"

    /** Prefix for secondary indexes based on role and resource names */
    private val byRoleAndResourceNameKeyPrefix = "brf$dl"

    /** Prefix for secondary indexes based on role and resource names */
    private val byRoleAndResourceTokenKeyPrefix = "brff$dl"

    /** Prefix for secondary indexes based on resource names */
    private val byResourceNameKeyPrefix = "bf$dl"



    /**
     * Check whether the service was
     * already configured (at least once)
     *
     * In this implementation, check if
     * the key [setOfUsersKey] (which gets
     * added to Redis when the admin is
     * initialized) is present
     */
    override fun alreadyConfigured(): CodeBoolean {
        TODO("Not yet implemented")
//        * In this implementation, check if
//        * the key [setOfUsersKey] (which gets
//        * added to Redis when the admin is
//        * initialized) is present
    }

    /**
     * This function is invoked when initializing the
     * admin (after the 'init' function), and it should
     * configure the service with the given [parameters]
     * and return the outcome code. When implementing this
     * function, remember to decide how to handle (e.g.,
     * reject or allow) subsequent invocations
     *
     * In this implementation, no configuration is needed,
     * therefore subsequent invocations are allowed
     */
    override fun configure(parameters: CoreParameters?): OutcomeCode {
        logger.info { "No configuration needed for RBAC Redis" }
        return CODE_000_SUCCESS
    }

    /**
     * This function is invoked each time the service
     * is initialized, and it should contain the code to
     * initialize the interface (e.g., possibly connect to
     * remote services like MQTT brokers, databases, etc.)
     */
    override fun init() {
        logger.info { "No action required to initialize the MM RBAC Redis service" }
    }

    /**
     * This function is invoked each time the (interface toward
     * the) service is destroyed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    override fun deinit() {
        logger.info { "No action required to de-initialize the MM RBAC Redis service" }
    }

    /**
     * Add (and initialize) the [newAdmin] in the
     * service and return the outcome code. Check that
     * the name of the admin is the expected one and
     * that the admin was not already added (or initialized)
     * 
     * In this implementation, add the admin by adding
     * the (key of the) user in the list of operational
     * users. Finally, add the public keys of the user
     * as an object with as key the token of the user,
     * and the user as an object with as key the username
     */
    override fun addAdmin(newAdmin: User): OutcomeCode {
        logger.info { "Adding the admin in the MM" }

        /** Guard clauses */
        if (newAdmin.name != ADMIN) {
            logger.warn { "Admin user has name ${newAdmin.name}, but admin name should be $ADMIN" }
            return CODE_036_ADMIN_NAME
        }
        if (getUsers(username = ADMIN).isNotEmpty()) {
            logger.warn { "Admin $ADMIN already initialized" }
            return CODE_035_ADMIN_ALREADY_INITIALIZED
        }

        val adminKeyByToken = "$userObjectPrefix$byUserTokenKeyPrefix${newAdmin.token}"
        val asymEncPublicKeyEncoded = newAdmin.asymEncKeys!!.public
        val asymSigPublicKeyEncoded = newAdmin.asymSigKeys!!.public

        transactionToExec = true

        /** Add the admin as User in the metadata */
        logger.debug { "Adding the admin as User" }
        val adminNameAndToken = concatenateNameAndToken(newAdmin.name, newAdmin.token)
        val adminObject = hashMapOf(
            usernameField to newAdmin.name,
            userTokenField to newAdmin.token,
            asymEncPublicKeyField to asymEncPublicKeyEncoded,
            asymSigPublicKeyField to asymSigPublicKeyEncoded,
            userIsAdminField to newAdmin.isAdmin.toString(),
            statusField to UnitElementStatus.OPERATIONAL.toString(),
        )
        jTransaction!!.saddCache(setOfUsersKey, adminNameAndToken)

        jTransaction!!.hsetCache(adminKeyByToken, adminObject)
        listOfElementsToAdd.add(ADMIN)

        return CODE_000_SUCCESS
    }

    /**
     * Initialize the [user] in the service and
     * return the outcome code. Check that the user
     * is present and was not already initialized or
     * deleted. This method should support invocations
     * by non-admin users
     *
     * In this implementation, move the (key of the) user
     * from the list of incomplete users to the list of
     * operational users. Finally, update the public keys
     * and the token of the user as an object with as key
     * the name of the user, and save the user as an object
     * with as key the token of the user
     */
    override fun initUser(
        user: User
    ): OutcomeCode {
        val username = user.name
        val userToken = mmRedisServiceParameters.token
        logger.info { "Initializing user $username with token $userToken in the metadata" }

        val userKeyByToken = "$userObjectPrefix$byUserTokenKeyPrefix$userToken"

        return when (getStatus(token = userToken, type = RBACUnitElementTypeWithStatus.USER)) {
            null -> {
                logger.warn { "User ${user.name} does not exist in the metadata" }
                CODE_004_USER_NOT_FOUND
            }
            UnitElementStatus.DELETED -> {
                logger.warn { "User $username was previously deleted" }
                CODE_013_USER_WAS_DELETED
            }
            UnitElementStatus.OPERATIONAL -> {
                logger.warn { "User $username already initialized" }
                CODE_052_USER_ALREADY_INITIALIZED
            }
            UnitElementStatus.INCOMPLETE -> {
                val asymEncPublicKeyEncoded = user.asymEncKeys!!.public
                val asymSigPublicKeyEncoded = user.asymSigKeys!!.public

                transactionToExec = true
                val userObject = hashMapOf(
                    userTokenField to userToken,
                    asymEncPublicKeyField to asymEncPublicKeyEncoded,
                    asymSigPublicKeyField to asymSigPublicKeyEncoded,
                    statusField to UnitElementStatus.OPERATIONAL.toString(),
                )
                jTransaction!!.hsetCache(userKeyByToken, userObject)
                listOfElementsToAdd.add(username)

                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Add the [newUser] in the service by, e.g.,
     * creating an account for the user. Check that 
     * the user was not already added. Finally,
     * return the user's configuration parameters
     * together with the outcome code
     *
     * In this implementation, the user's asymmetric
     * encryption and signing public keys and token
     * will be set by the user him/herself later on
     * (initUser function)
     */
    override fun addUser(
        newUser: User
    ): CodeServiceParameters {
        val username = newUser.name
        val userToken = newUser.token

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CodeServiceParameters(code = CODE_020_INVALID_PARAMETER)
        }


        logger.info {
            "Adding the user $username with token " +
            "$userToken in the metadata and as Redis user"
        }

        val userKeyByToken = "$userObjectPrefix$byUserTokenKeyPrefix$userToken"

        return when (getStatus(name = username, type = RBACUnitElementTypeWithStatus.USER)) {
            null -> {
                transactionToExec = true
                val userNameAndToken = concatenateNameAndToken(username, userToken)
                val userObject = hashMapOf(
                    usernameField to username,
                    userTokenField to userToken,
                    userIsAdminField to newUser.isAdmin.toString(),
                    statusField to UnitElementStatus.INCOMPLETE.toString(),
                )
                jTransaction!!.saddCache(setOfUsersKey, userNameAndToken)

                jTransaction!!.hsetCache(userKeyByToken, userObject)
                listOfElementsToAdd.add(username)

                /** TODO check password generation */
                val passwordBytes = ByteArray(20)
                Random().nextBytes(passwordBytes)
                val newPassword = passwordBytes.encodeBase64()

                val success = jQuery!!.aclSetUser(
                    username,
                    "on",
                    "+multi",
                    "+exec",
                    "+ping",
                    "+discard",
                    "(+WATCH ~$lockUnlockRollbackKey)",
                    "(+UNWATCH ~$lockUnlockRollbackKey)",
                    "(+INCR ~$lockUnlockRollbackKey)",
                    "(+SMEMBERS ~$roleTuplesListKeyPrefix$byUserTokenKeyPrefix$userToken)",
                    "(+SMEMBERS ~$permissionTuplesListKeyPrefix$byRoleTokenKeyPrefix*)",
                    "(+HGETALL ~$userObjectPrefix$byUserTokenKeyPrefix*)",
                    "(+HSET ~$userObjectPrefix$byUserTokenKeyPrefix$userToken)",
                    "(+HGETALL ~$roleObjectPrefix$byRoleTokenKeyPrefix*)",
                    "(+HGETALL ~$resourceObjectPrefix$byResourceTokenKeyPrefix*)",
                    "(+HGETALL ~$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix*)",
                    "(+HGETALL ~$permissionTupleObjectPrefix$byRoleAndResourceTokenKeyPrefix*)",
                    "(+HGET ~$userObjectPrefix$byUserTokenKeyPrefix*)",
                    "(+HGET ~$roleObjectPrefix$byRoleTokenKeyPrefix*)",
                    "(+HGET ~$resourceObjectPrefix$byResourceTokenKeyPrefix*)",
                    "(+HGET ~$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix*)",
                    "(+HGET ~$permissionTupleObjectPrefix$byRoleAndResourceTokenKeyPrefix*)",
                    ">$newPassword"
                ) == "OK"


                if (success) {
                    CodeServiceParameters(
                        parameters = MMServiceRedisParameters(
                            username = username,
                            password = newPassword,
                            port = mmRedisServiceParameters.port,
                            url = mmRedisServiceParameters.url,
                            token = userToken,
                            mmType = MMType.RBAC_REDIS
                        )
                    )
                } else {
                    logger.warn { "Could not create user $username in Redis" }
                    CodeServiceParameters(CODE_054_CREATE_USER_MM)
                }
            }
            UnitElementStatus.DELETED -> {
                logger.warn { "User $username was previously deleted" }
                CodeServiceParameters(CODE_013_USER_WAS_DELETED)
            }
            else -> {
                logger.warn { "User $username already present in the metadata" }
                CodeServiceParameters(CODE_001_USER_ALREADY_EXISTS)
            }
        }
    }

    /**
     * Delete [username] from the service. Check
     * that the user exists, and she is not the admin
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
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        return when (getStatus(name = username, type = RBACUnitElementTypeWithStatus.USER)) {
            null -> {
                CODE_004_USER_NOT_FOUND
            }
            UnitElementStatus.DELETED -> {
                CODE_013_USER_WAS_DELETED
            }
            else -> {
                val userToken = getToken(
                    name = username,
                    type = RBACUnitElementTypeWithStatus.USER
                )!!
                val elementNameAndToken = concatenateNameAndToken(username, userToken)
                val userKeyByToken = "$userObjectPrefix$byUserTokenKeyPrefix$userToken"
                logger.info { "Deleting user with token $userToken" }

                transactionToExec = true
                jTransaction!!.sremCache(
                    key = setOfUsersKey,
                    value = elementNameAndToken
                )

                jTransaction!!.saddCache(
                    key = setOfDeletedUsersKey,
                    value = elementNameAndToken
                )

                jTransaction!!.hsetCache(
                    key = userKeyByToken,
                    field = statusField,
                    value = UnitElementStatus.DELETED.toString()
                )

                logger.debug { "Deleting the user from the Redis database" }
                return if (jQuery!!.aclDelUser(username) == 1L) {
                    CODE_000_SUCCESS
                } else {
                    CODE_056_DELETE_USER_MM
                }
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

        return when (getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)) {
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
                jTransaction!!.saddCache(setOfRolesKey, roleNameAndToken)
                jTransaction!!.hsetCache(roleKeyByToken, roleObject)
                listOfElementsToAdd.add(roleName)

                CODE_000_SUCCESS
            }

            UnitElementStatus.DELETED -> {
                logger.warn { "Role $roleName was previously deleted" }
                CODE_014_ROLE_WAS_DELETED
            }
            else -> {
                logger.warn { "Role $roleName already present in the metadata" }
                CODE_002_ROLE_ALREADY_EXISTS
            }
        }
    }

    /**
     * Add the [newResource] in the metadata and
     * return the outcome code. Check that the
     * resource does not already exist or was deleted
     *
     * In this implementation, add the resource as
     * an object, plus add the key of the resource
     * in the list of OPERATIONAL resources. Finally,
     * add the symmetric encryption key version
     * number of the resource with as key the token
     * of the resource
     */
    override fun addResource(newResource: Resource): OutcomeCode {
        val resourceName = newResource.name
        val resourceToken = newResource.token
        logger.info { "Adding the resource $resourceName in the metadata" }

        val resourceKeyByToken = "$resourceObjectPrefix$byResourceTokenKeyPrefix$resourceToken"

        return when (getStatus(name = resourceName, type = RBACUnitElementTypeWithStatus.RESOURCE)) {
            null -> {
                transactionToExec = true
                val resourceNameAndToken = concatenateNameAndToken(resourceName, resourceToken)
                val resourceObject = hashMapOf(
                    resourceNameField to resourceName,
                    resourceTokenField to resourceToken,
                    symEncKeyVersionNumberField to newResource.symEncKeyVersionNumber.toString(),
                    symDecKeyVersionNumberField to newResource.symDecKeyVersionNumber.toString(),
                    statusField to newResource.status.toString(),
                    enforcementField to newResource.enforcement.toString(),
                )
                jTransaction!!.saddCache(setOfResourcesKey, resourceNameAndToken)

                jTransaction!!.hsetCache(resourceKeyByToken, resourceObject)
                listOfElementsToAdd.add(resourceName)

                CODE_000_SUCCESS
            }
            UnitElementStatus.DELETED -> {
                logger.warn { "Resource $resourceName was previously deleted" }
                CODE_015_RESOURCE_WAS_DELETED
            }
            else -> {
                logger.warn { "Resource $resourceName already present in the metadata" }
                CODE_003_RESOURCE_ALREADY_EXISTS
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
            return CODE_000_SUCCESS
        }

        logger.info { "Adding $size role tuples in the metadata (one per row below):" }
        newRoleTuples.forEachIndexed { index, roleTuple ->
            logger.info {
                "${index + 1}: user ${roleTuple.username} " +
                    "to role ${roleTuple.roleName}"
            }
        }

        var code = CODE_000_SUCCESS
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
                    CODE_000_SUCCESS
                } else {
                    when (
                        getStatus(name = username, type = RBACUnitElementTypeWithStatus.USER)
                    ) {
                        null -> {
                            logger.warn { "User $username was not found" }
                            CODE_004_USER_NOT_FOUND
                        }
                        UnitElementStatus.DELETED -> {
                            logger.warn { "User $username was previously deleted" }
                            CODE_013_USER_WAS_DELETED
                        }
                        UnitElementStatus.INCOMPLETE -> {
                            logger.warn { "User $username is incomplete" }
                            CODE_053_USER_IS_INCOMPLETE
                        }
                        else ->
                            CODE_000_SUCCESS
                    }
                }
                if (code != CODE_000_SUCCESS) {
                    return@error
                }

                code = if (listOfElementsToAdd.contains(roleName)) {
                    CODE_000_SUCCESS
                } else {
                    when (
                        getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)
                    ) {
                        null -> {
                            logger.warn { "Role $roleName was not found" }
                            CODE_005_ROLE_NOT_FOUND
                        }
                        UnitElementStatus.DELETED -> {
                            logger.warn { "Role $roleName was previously deleted" }
                            CODE_014_ROLE_WAS_DELETED
                        }
                        else ->
                            CODE_000_SUCCESS
                    }
                }
                if (code != CODE_000_SUCCESS) {
                    return@error
                }

                val userToken = getToken(username, RBACUnitElementTypeWithStatus.USER)
                val roleToken = getToken(roleName, RBACUnitElementTypeWithStatus.ROLE)
                val usernameAndToken = concatenateNameAndToken(username, userToken!!)
                val roleNameAndToken = concatenateNameAndToken(roleName, roleToken!!)

                val keyOfRoleTuplesListByUserToken = "$roleTuplesListKeyPrefix$byUserTokenKeyPrefix$userToken"
                val keyOfRoleTuplesListByUser = "$roleTuplesListKeyPrefix$byUsernameKeyPrefix$username"
                val keyOfRoleTuplesListByRole = "$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                val keyOfRoleTuplesListByUserAndRole =
                    "$roleTuplesListKeyPrefix$byUserAndRoleNameKeyPrefix$username$dl$roleName"

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
                    mapOfValuesToAdd.contains(roleTupleKey) ||
                    (!listOfKeysToDelete.contains(roleTupleKey) &&
                    jQuery!!.sismemberCache(keyOfRoleTuplesListByUser, roleNameAndToken))
                ) {
                    code = CODE_010_ROLETUPLE_ALREADY_EXISTS
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

                    jTransaction!!.saddCache(keyOfRoleTuplesListByUserToken, roleNameAndToken)
                    jTransaction!!.saddCache(keyOfRoleTuplesListByUser, roleNameAndToken)
                    jTransaction!!.saddCache(keyOfRoleTuplesListByRole, usernameAndToken)
                    jTransaction!!.saddCache(keyOfRoleTuplesListByUserAndRole, roleNameAndToken)

                    jTransaction!!.hsetCache(roleTupleKey, roleTupleObject)
                }
            }
        }

        return code
    }

    /**
     * Add the [newPermissionTuples] in the metadata
     * and return the outcome code. Check that involved
     * roles exist and were not deleted and that involved
     * resources exist and were not deleted. Also check whether
     * a permission tuple already exists
     *
     * In this implementation, add the (key of the) tuple
     * in three lists, holding the list of tuples for a
     * given role name, the list of tuples of a given
     * resource name and the list of tuples for a combination
     * of a role and resource name, respectively. Finally, add
     * the tuple with as key the combination of the role
     * name, the resource name and the symmetric key version
     * number
     */
    override fun addPermissionTuples(newPermissionTuples: HashSet<PermissionTuple>): OutcomeCode {
        val size = newPermissionTuples.size
        if (size == 0) {
            logger.warn { "No permission tuples given" }
            return CODE_000_SUCCESS
        }

        logger.info { "Adding $size permission tuples in the metadata (one per row below):" }
        newPermissionTuples.forEachIndexed { index, permissionTuple ->
            logger.info {
                "${index + 1}: role ${permissionTuple.roleName} to resource " +
                "${permissionTuple.resourceName} with permission ${permissionTuple.permission} "
            }
        }

        var code = CODE_000_SUCCESS
        run error@{
            newPermissionTuples.forEach { permissionTuple ->
                val roleName = permissionTuple.roleName
                val resourceName = permissionTuple.resourceName

                /**
                 * Check that involved roles exist and
                 * were not deleted and that involved
                 * resources exist and were not deleted
                 */
                code = if (listOfElementsToAdd.contains(roleName)) {
                    CODE_000_SUCCESS
                } else {
                    when (
                        getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)
                    ) {
                        null -> {
                            logger.warn { "Role $roleName was not found" }
                            CODE_005_ROLE_NOT_FOUND
                        }
                        UnitElementStatus.DELETED -> {
                            logger.warn { "Role $roleName was previously deleted" }
                            CODE_014_ROLE_WAS_DELETED
                        }
                        else ->
                            CODE_000_SUCCESS
                    }
                }
                if (code != CODE_000_SUCCESS) {
                    return@error
                }

                code = if (listOfElementsToAdd.contains(resourceName)) {
                    CODE_000_SUCCESS
                } else {
                    when (getStatus(name = resourceName, type = RBACUnitElementTypeWithStatus.RESOURCE)) {
                        null -> {
                            logger.warn { "Resource $resourceName was not found" }
                            CODE_006_RESOURCE_NOT_FOUND
                        }
                        UnitElementStatus.DELETED -> {
                            logger.warn { "Resource $resourceName was previously deleted" }
                            CODE_015_RESOURCE_WAS_DELETED
                        }
                        else ->
                            CODE_000_SUCCESS
                    }
                }
                if (code != CODE_000_SUCCESS) {
                    return@error
                }

                val symKeyVersionNumber = permissionTuple.symKeyVersionNumber
                val roleToken = getToken(
                    name = roleName,
                    type = RBACUnitElementTypeWithStatus.ROLE
                )
                val resourceToken = getToken(
                    name = resourceName,
                    type = RBACUnitElementTypeWithStatus.RESOURCE
                )
                val roleNameAndToken = concatenateNameAndToken(roleName, roleToken!!)
                val resourceNameAndToken = concatenateNameAndToken(resourceName, resourceToken!!)

                val keyOfPermissionTuplesListByRoleName =
                    permissionTuplesListKeyPrefix + byRoleNameKeyPrefix + roleName
                val keyOfPermissionTuplesListByRoleToken =
                    permissionTuplesListKeyPrefix + byRoleTokenKeyPrefix + roleToken
                val keyOfPermissionTuplesListByResource =
                    permissionTuplesListKeyPrefix + byResourceNameKeyPrefix + resourceName
                val keyOfPermissionTuplesListByRoleAndResource =
                    permissionTuplesListKeyPrefix + byRoleAndResourceNameKeyPrefix + roleName + dl + resourceName
                val permissionTupleKey =
                    permissionTupleObjectPrefix + byRoleAndResourceTokenKeyPrefix + roleToken + dl + resourceToken

                /**
                 * If the datastore already contains the key of
                 * the permission tuple and the list of keys to delete
                 * does NOT contain the key of the permission tuple, or
                 * the map of keys and values to add contain the
                 * key of the permission tuple, it means that the key
                 * of the permission tuple already exists
                 */
                if (
                    mapOfValuesToAdd.contains(permissionTupleKey) ||
                    (!listOfKeysToDelete.contains(permissionTupleKey) &&
                     jQuery!!.sismemberCache(keyOfPermissionTuplesListByRoleName, resourceNameAndToken)
                    )
                ) {
                    logger.warn { "Permission tuple for role $roleName and resource $resourceName already exists" }
                    code = CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
                    return@error
                } else {
                    logger.debug {
                        "Adding the permission tuple for role $roleName " +
                            "and resource $resourceName with key $permissionTupleKey"
                    }
                    transactionToExec = true
                    val permissionTupleObject = hashMapOf(
                        roleNameField to roleName,
                        resourceNameField to resourceName,
                        roleTokenField to permissionTuple.roleToken,
                        resourceTokenField to permissionTuple.resourceToken,
                        encryptingSymKeyField to permissionTuple.encryptingSymKey!!.key.encodeBase64(),
                        decryptingSymKeyField to permissionTuple.decryptingSymKey!!.key.encodeBase64(),
                        symKeyVersionNumberField to symKeyVersionNumber.toString(),
                        roleVersionNumberField to permissionTuple.roleVersionNumber.toString(),
                        permissionField to permissionTuple.permission.toString(),
                        signerTokenField to permissionTuple.signer!!,
                        signatureField to permissionTuple.signature!!.encodeBase64(),
                    )

                    jTransaction!!.saddCache(keyOfPermissionTuplesListByRoleName, resourceNameAndToken)
                    jTransaction!!.saddCache(keyOfPermissionTuplesListByRoleToken, resourceNameAndToken)
                    jTransaction!!.saddCache(keyOfPermissionTuplesListByResource, roleNameAndToken)
                    jTransaction!!.saddCache(keyOfPermissionTuplesListByRoleAndResource, resourceNameAndToken)

                    jTransaction!!.hsetCache(permissionTupleKey, permissionTupleObject)
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
        status: UnitElementStatus?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int
    ): HashSet<User> {
        logger.info { "Getting data of users (offset $offset, limit $limit)" }

        val users = HashSet<User>()
        val usersToGet = hashSetOf<String>()

        /**
         * If the user is not the admin, we get user objects
         * matching the token in the [mmRedisServiceParameters]
         */
        if (!isAdmin) {
            usersToGet.add(
                concatenateNameAndToken(
                    mmRedisServiceParameters.username,
                    mmRedisServiceParameters.token
                )
            )
        } else {
            /** Get all users depending on the [status] value */
            if (username.isNullOrBlank()) {
                if (status != null) {
                    logger.info { "Filtering by matching status $status" }
                }
                if (status == null ||
                    status == UnitElementStatus.INCOMPLETE ||
                    status == UnitElementStatus.OPERATIONAL
                ) {
                    jQuery!!.smembersCache(setOfUsersKey)?.let { usersToGet.addAll(it) }
                }
                if (status == null || status == UnitElementStatus.DELETED) {
                    jQuery!!.smembersCache(setOfDeletedUsersKey)?.let { usersToGet.addAll(it) }
                }
            }
            /** Get the user with the [username] */
            else {
                logger.info { "Filtering by matching username $username" }
                val token = getToken(username, RBACUnitElementTypeWithStatus.USER)
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
            val userValues = jQuery!!.hgetAllCache(userKeyByToken)
            val userStatus = UnitElementStatus.valueOf(userValues[statusField]!!)
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
        status: UnitElementStatus?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int
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
                if (status == null || status == UnitElementStatus.OPERATIONAL) {
                    jQuery!!.smembersCache(setOfRolesKey)?.let { rolesToGet.addAll(it) }
                }
                if (status == null || status == UnitElementStatus.DELETED) {
                    jQuery!!.smembersCache(setOfDeletedRolesKey)?.let { rolesToGet.addAll(it) }
                }
            }
            /** Get the role with the [roleName] */
            else {
                logger.info { "Filtering by matching role name $roleName" }
                val token = getToken(roleName, RBACUnitElementTypeWithStatus.ROLE)
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
            val roleValues = jQuery!!.hgetAllCache(roleKeyByToken)
            val roleStatus = UnitElementStatus.valueOf(roleValues[statusField]!!)
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
     * Retrieve data of the resources matching the specified
     * [resourceName] and [status], if given, starting from
     * the [offset] limiting the number of resources to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no resources are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getResources(
        resourceName: String?,
        status: UnitElementStatus?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int
    ): HashSet<Resource> {
        logger.info { "Getting data of resources (offset $offset, limit $limit)" }

        val resources = HashSet<Resource>()
        val resourcesToGet = hashSetOf<String>()

        /**
         * If the user is not the admin, we get the set of names
         * and tokens of the roles assigned to the users and, with
         * those, get the set of names and tokens of resources assigned
         * to each role and, with those, get the resources object, possibly
         * matching the given resource name
         */
        if (!isAdmin) {
            val rolesNameAndToken: HashSet<String> = getRolesNameAndTokenFromUserToken()

            rolesNameAndToken.forEach { roleNameAndToken ->
                val roleToken = getTokenFromElementNameAndToken(roleNameAndToken)!!

                val resourcesNameAndToken = getResourcesNameAndTokenFromRoleToken(roleToken)
                resourcesNameAndToken.forEach { resourceNameAndToken ->
                    val currentResourceName = getNameFromElementNameAndToken(resourceNameAndToken)!!
                    val resourceToken = getTokenFromElementNameAndToken(resourceNameAndToken)!!
                    if (resourceName == null || currentResourceName == resourceName) {
                        resourcesToGet.add(concatenateNameAndToken(currentResourceName, resourceToken))
                    }
                }
            }
        } else {

            /** Get all resources depending on the [status] value */
            if (resourceName.isNullOrBlank()) {
                if (status != null) {
                    logger.info { "Filtering by matching status $status" }
                }
                if (status == null || status == UnitElementStatus.OPERATIONAL) {
                    jQuery!!.smembersCache(setOfResourcesKey)?.let { resourcesToGet.addAll(it) }
                }
                if (status == null || status == UnitElementStatus.DELETED) {
                    jQuery!!.smembersCache(setOfDeletedResourcesKey)?.let { resourcesToGet.addAll(it) }
                }
            }
            /** Get the resource with the [resourceName] */
            else {
                logger.info { "Filtering by matching resource name $resourceName" }
                val token = getToken(resourceName, RBACUnitElementTypeWithStatus.RESOURCE)
                if (token != null) {
                    resourcesToGet.add(concatenateNameAndToken(resourceName, token))
                }
            }
        }

        logger.debug { "Found ${resourcesToGet.size} resources to fetch" }

        /** Get all resources from the keys collected */
        resourcesToGet.forEach { resourceNameAndToken ->
            val currentResourceName = getNameFromElementNameAndToken(resourceNameAndToken)!!
            val currentResourceToken = getTokenFromElementNameAndToken(resourceNameAndToken)!!
            val resourceKeyByToken =
                "$resourceObjectPrefix$byResourceTokenKeyPrefix${getTokenFromElementNameAndToken(resourceNameAndToken)}"

            logger.debug { "Retrieving data of resource with key $resourceKeyByToken" }
            val resourceValues = jQuery!!.hgetAllCache(resourceKeyByToken)
            val resourceStatus = UnitElementStatus.valueOf(resourceValues[statusField]!!)
            if (status == null || status == resourceStatus) {
                resources.add(
                    Resource(
                        name = currentResourceName,
                        symEncKeyVersionNumber = resourceValues[symEncKeyVersionNumberField]!!.toInt(),
                        symDecKeyVersionNumber = resourceValues[symDecKeyVersionNumberField]!!.toInt(),
                        status = resourceStatus,
                        enforcement = EnforcementType.valueOf(resourceValues[enforcementField]!!),
                    ).apply {
                        token = currentResourceToken
                    }
                )
            }
        }

        logger.debug { "Found ${resources.size} resources" }
        return resources
    }

    /**
     * Retrieve the role tuples matching the [username]
     * and/or the [roleName], if given, starting from th
     * [offset] limiting the number of tuples to return
     * to the given [limit] and with the (possibly)
     * relevant information of whether the user invoking
     * this function [isAdmin]. If no role tuples are found,
     * return an empty set. This method should
     * support invocations by non-admin users
     */
    override fun getRoleTuples(
        username: String?,
        roleName: String?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int
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

            val userToken = mmRedisServiceParameters.token
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
                val userToken = getToken(username!!, RBACUnitElementTypeWithStatus.USER)

                val keyOfRoleTuplesListByUserAndRole =
                    "$roleTuplesListKeyPrefix$byUserAndRoleNameKeyPrefix$username$dl$roleName"
                val roleNamesAndTokens = hashSetOf<String>()
                jQuery!!.smembersCache(keyOfRoleTuplesListByUserAndRole)?.let { roleNamesAndTokens.addAll(it) }

                val size = roleNamesAndTokens.size
                logger.debug { "Found $size role tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(name = username, type = RBACUnitElementTypeWithStatus.USER)) {
                        UnitElementStatus.OPERATIONAL -> when (getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)) {
                            UnitElementStatus.OPERATIONAL -> CODE_007_ROLETUPLE_NOT_FOUND
                            UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                            UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                        }
                        UnitElementStatus.DELETED -> CODE_013_USER_WAS_DELETED
                        UnitElementStatus.INCOMPLETE -> CODE_053_USER_IS_INCOMPLETE
                        null -> CODE_004_USER_NOT_FOUND
                    }
                } else {
                    roleNamesAndTokens.forEach { currentRoleNameAndToken ->
                        val roleTupleKey = roleTupleObjectPrefix +
                            byUserAndRoleTokenKeyPrefix +
                            "$userToken" +
                            dl +
                            getTokenFromElementNameAndToken(currentRoleNameAndToken)
                        keysOfRoleTuplesToGet.add(roleTupleKey)
                    }
                }
            } else if (givenUsername) {
                logger.info { "Filtering by matching username $username" }
                val userToken = getToken(username!!, RBACUnitElementTypeWithStatus.USER)

                val keyOfRoleTuplesListByUser =
                    "$roleTuplesListKeyPrefix$byUsernameKeyPrefix$username"
                val rolesNameAndToken = hashSetOf<String>()
                jQuery!!.smembersCache(keyOfRoleTuplesListByUser)?.let { rolesNameAndToken.addAll(it) }

                val size = rolesNameAndToken.size
                logger.debug { "Found $size role tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(name = username, type = RBACUnitElementTypeWithStatus.USER)) {
                        UnitElementStatus.OPERATIONAL -> CODE_007_ROLETUPLE_NOT_FOUND
                        UnitElementStatus.DELETED -> CODE_013_USER_WAS_DELETED
                        UnitElementStatus.INCOMPLETE -> CODE_053_USER_IS_INCOMPLETE
                        null -> CODE_004_USER_NOT_FOUND
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
                val roleToken = getToken(roleName!!, RBACUnitElementTypeWithStatus.ROLE)

                val keyOfRoleTuplesListByRole =
                    "$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                val usersNameAndToken = hashSetOf<String>()
                jQuery!!.smembersCache(keyOfRoleTuplesListByRole)?.let { usersNameAndToken.addAll(it) }

                val size = usersNameAndToken.size
                logger.debug { "Found $size role tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)) {
                        UnitElementStatus.OPERATIONAL -> CODE_007_ROLETUPLE_NOT_FOUND
                        UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                        UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                    }
                } else {
                    usersNameAndToken.forEach { userNameAndToken ->
                        val userToken = getTokenFromElementNameAndToken(userNameAndToken)
                        val roleTupleKey = "$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix$userToken$dl$roleToken"
                        keysOfRoleTuplesToGet.add(roleTupleKey)
                    }
                }
            } else {
                logger.info { "Not filtering by user or role name" }

                logger.debug { "Getting all users, then all role tuples of all users" }
                jQuery!!.smembersCache(setOfUsersKey)?.forEach { usernameAndToken ->
                    val currentUsername = getNameFromElementNameAndToken(usernameAndToken)
                    val currentUserToken = getTokenFromElementNameAndToken(usernameAndToken)
                    val keyOfRoleTuplesListByUser =
                        "$roleTuplesListKeyPrefix$byUsernameKeyPrefix$currentUsername"
                    jQuery!!.smembersCache(keyOfRoleTuplesListByUser)?.forEach { roleNameAndToken ->
                        val currentRoleToken = getTokenFromElementNameAndToken(roleNameAndToken)
                        val roleTupleKey = "$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix$currentUserToken$dl$currentRoleToken"
                        keysOfRoleTuplesToGet.add(roleTupleKey)
                    }
                }
            }
        }

        logger.debug { "Found ${keysOfRoleTuplesToGet.size} role tuples to fetch" }

        /** Get all role tuples from the keys collected */
        keysOfRoleTuplesToGet.forEach { roleTupleKey ->
            logger.debug { "Retrieving data of role tuple with key $roleTupleKey" }
            val roleTupleValues = jQuery!!.hgetAllCache(roleTupleKey)
            roleTuples.add(
                RoleTuple(
                    username = roleTupleValues[usernameField]!!,
                    roleName = roleTupleValues[roleNameField]!!,
                    encryptedAsymEncKeys = EncryptedAsymKeys(
                        public = roleTupleValues[encryptedAsymEncPublicKeyField]!!.decodeBase64(),
                        private = roleTupleValues[encryptedAsymEncPrivateKeyField]!!.decodeBase64(),
                        keyType = AsymKeysType.ENC,
                    ),
                    encryptedAsymSigKeys = EncryptedAsymKeys(
                        public = roleTupleValues[encryptedAsymSigPublicKeyField]!!.decodeBase64(),
                        private = roleTupleValues[encryptedAsymSigPrivateKeyField]!!.decodeBase64(),
                        keyType = AsymKeysType.SIG,
                    ),
                    roleVersionNumber = roleTupleValues[roleVersionNumberField]!!.toInt(),
                ).apply {
                    updateSignature(
                        newSignature = roleTupleValues[signatureField]!!.decodeBase64(),
                        newSigner = ADMIN,
                    )
                }
            )
        }

        logger.debug { "Found ${roleTuples.size} role tuples" }
        return roleTuples
    }

    /**
     * Retrieve the permission tuples matching the [roleName] and/or
     * the [resourceName], starting from the [offset] limiting the number
     * of tuples to return to the given [limit] and with the (possibly)
     * relevant information of whether the user invoking this function
     * [isAdmin]. If no permission tuples are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getPermissionTuples(
        roleName: String?,
        resourceName: String?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int,
    ): HashSet<PermissionTuple> {
        logger.info { "Getting data of permission tuples (offset $offset, limit $limit)" }

        val permissionTuples = HashSet<PermissionTuple>()
        val givenRoleName = !roleName.isNullOrBlank()
        val givenResourceName = !resourceName.isNullOrBlank()

        val keysOfPermissionTuplesToGet = hashSetOf<String>()

        /**
         * If the user is not the admin, we get the set of names
         * and tokens of the roles assigned to the users and, with
         * those, get the set of names and tokens of resources assigned
         * to each role and, with those, get the permission tuples
         * of the user, possibly selecting only the tuples matching
         * the given role and resource name
         */
        if (!isAdmin) {
            val rolesNameAndToken: HashSet<String> = getRolesNameAndTokenFromUserToken()

            rolesNameAndToken.forEach { roleNameAndToken ->
                val currentRoleName = getNameFromElementNameAndToken(roleNameAndToken)
                val roleToken = getTokenFromElementNameAndToken(roleNameAndToken)!!
                if (roleName == null || currentRoleName == roleName) {

                    val resourcesNameAndToken = getResourcesNameAndTokenFromRoleToken(roleToken)
                    resourcesNameAndToken.forEach { resourceNameAndToken ->
                        val currentResourceName = getNameFromElementNameAndToken(resourceNameAndToken)
                        val resourceToken = getTokenFromElementNameAndToken(resourceNameAndToken)
                        if (resourceName == null || currentResourceName == resourceName) {
                            val permissionTupleKey = permissionTupleObjectPrefix +
                                byRoleAndResourceTokenKeyPrefix +
                                roleToken +
                                dl +
                                resourceToken
                            keysOfPermissionTuplesToGet.add(permissionTupleKey)
                        }
                    }
                }
            }
        } else {
            /** Get the keys of all permission tuples */
            if (givenRoleName && givenResourceName) {
                logger.info { "Filtering by matching role name $roleName and resource name $resourceName" }

                val keyOfPermissionTuplesListByUserAndRole =
                    "$permissionTuplesListKeyPrefix$byRoleAndResourceNameKeyPrefix$roleName$dl$resourceName"
                val resourcesNameAndToken = hashSetOf<String>()
                jQuery!!.smembersCache(keyOfPermissionTuplesListByUserAndRole)?.let {
                    resourcesNameAndToken.addAll(it)
                }
                val size = resourcesNameAndToken.size
                logger.debug { "Found $size permission tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(
                        name = resourceName,
                        type = RBACUnitElementTypeWithStatus.RESOURCE
                    )) {
                        UnitElementStatus.OPERATIONAL -> when (getStatus(
                            name = roleName,
                            type = RBACUnitElementTypeWithStatus.ROLE
                        )) {
                            UnitElementStatus.OPERATIONAL -> CODE_008_PERMISSIONTUPLE_NOT_FOUND
                            UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                            UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                        }
                        UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                        UnitElementStatus.INCOMPLETE, null -> CODE_006_RESOURCE_NOT_FOUND
                    }
                } else {
                    resourcesNameAndToken.forEach { resourceNameAndToken ->
                        val permissionTupleKey = permissionTupleObjectPrefix +
                                byRoleAndResourceTokenKeyPrefix +
                                getToken(roleName!!, RBACUnitElementTypeWithStatus.ROLE)!! + // TODO optimize get token once
                                dl +
                                getTokenFromElementNameAndToken(resourceNameAndToken)!!
                        keysOfPermissionTuplesToGet.add(permissionTupleKey)
                    }
                }
            } else if (givenRoleName) {
                logger.info { "Filtering by matching role name $roleName" }

                val keyOfPermissionTuplesListByRole =
                    "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                val resourcesNameAndToken = hashSetOf<String>()
                jQuery!!.smembersCache(keyOfPermissionTuplesListByRole)?.let { resourcesNameAndToken.addAll(it) }
                val size = resourcesNameAndToken.size
                logger.debug { "Found $size permission tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(
                        name = roleName,
                        type = RBACUnitElementTypeWithStatus.ROLE
                    )) {
                        UnitElementStatus.OPERATIONAL -> CODE_008_PERMISSIONTUPLE_NOT_FOUND
                        UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                        UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                    }
                } else {
                    resourcesNameAndToken.forEach { resourceNameAndToken ->
                        val permissionTupleKey = permissionTupleObjectPrefix +
                            byRoleAndResourceTokenKeyPrefix +
                            getToken(roleName!!, RBACUnitElementTypeWithStatus.ROLE)!! + // TODO optimize get token once
                            dl +
                            getTokenFromElementNameAndToken(resourceNameAndToken)!!
                        keysOfPermissionTuplesToGet.add(permissionTupleKey)
                    }
                }
            } else if (givenResourceName) {
                logger.info { "Filtering by matching resource name $resourceName" }

                val keyOfPermissionTuplesListByResource =
                    "$permissionTuplesListKeyPrefix$byResourceNameKeyPrefix$resourceName"
                val rolesNameAndToken = hashSetOf<String>()
                jQuery!!.smembersCache(keyOfPermissionTuplesListByResource)?.let { rolesNameAndToken.addAll(it) }
                val size = rolesNameAndToken.size
                logger.debug { "Found $size permission tuples to retrieve" }

                if (size == 0) {
                    when (getStatus(
                        name = resourceName,
                        type = RBACUnitElementTypeWithStatus.RESOURCE
                    )) {
                        UnitElementStatus.OPERATIONAL -> CODE_008_PERMISSIONTUPLE_NOT_FOUND
                        UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                        UnitElementStatus.INCOMPLETE, null -> CODE_006_RESOURCE_NOT_FOUND
                    }
                } else {
                    rolesNameAndToken.forEach { roleNameAndToken ->
                        val permissionTupleKey = permissionTupleObjectPrefix +
                            byRoleAndResourceTokenKeyPrefix +
                            getTokenFromElementNameAndToken(roleNameAndToken)!! +
                            dl +
                            getToken(resourceName!!, RBACUnitElementTypeWithStatus.RESOURCE)!! // TODO can you optimize get token once?
                        keysOfPermissionTuplesToGet.add(permissionTupleKey)
                    }
                }
            } else {
                logger.info { "Not filtering by role or resource name" }

                logger.debug { "Getting all roles, then all permission tuples of all roles" }
                jQuery!!.smembersCache(setOfRolesKey)?.forEach { roleNameAndToken ->
                    val currentRoleName = getNameFromElementNameAndToken(roleNameAndToken)
                    val currentRoleToken = getTokenFromElementNameAndToken(roleNameAndToken)
                    val keyOfPermissionTuplesListByRole =
                        "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$currentRoleName"
                    jQuery!!.smembersCache(keyOfPermissionTuplesListByRole)?.forEach { resourceNameAndToken ->
                        val currentResourceToken = getTokenFromElementNameAndToken(resourceNameAndToken)
                        val permissionTupleKey = permissionTupleObjectPrefix +
                                byRoleAndResourceTokenKeyPrefix +
                                currentRoleToken +
                                dl +
                                currentResourceToken
                        keysOfPermissionTuplesToGet.add(permissionTupleKey)
                    }
                }
            }
        }

        logger.debug { "Found ${keysOfPermissionTuplesToGet.size} permission tuples to fetch" }

        /** Get all permission tuples from the keys collected */
        keysOfPermissionTuplesToGet.forEach { permissionTupleKey ->
            logger.debug { "Retrieving data of permission tuple with key $permissionTupleKey" }
            val permissionTupleValues = jQuery!!.hgetAllCache(permissionTupleKey)
            permissionTuples.add(
                PermissionTuple(
                    roleName = permissionTupleValues[roleNameField]!!,
                    resourceName = permissionTupleValues[resourceNameField]!!,
                    roleToken = permissionTupleValues[roleTokenField]!!,
                    resourceToken = permissionTupleValues[resourceTokenField]!!,
                    encryptingSymKey = EncryptedSymKey(
                        key = permissionTupleValues[encryptingSymKeyField]!!.decodeBase64(),
                    ),
                    decryptingSymKey = EncryptedSymKey(
                        key = permissionTupleValues[decryptingSymKeyField]!!.decodeBase64(),
                    ),
                    roleVersionNumber = permissionTupleValues[roleVersionNumberField]!!.toInt(),
                    symKeyVersionNumber = permissionTupleValues[symKeyVersionNumberField]!!.toInt(),
                    permission = PermissionType.valueOf(permissionTupleValues[permissionField]!!),
                ).apply {
                    updateSignature(
                        newSignature = permissionTupleValues[signatureField]!!.decodeBase64(),
                        newSigner = permissionTupleValues[signerTokenField]!!,
                    )
                }
            )
        }

        logger.debug { "Found ${permissionTuples.size} permission tuples" }
        return permissionTuples
    }

    /**
     * Retrieve the public asymmetric key of the given
     * [asymKeyType] belonging to the element of the
     * specified [elementType] by matching the [name] or
     * the [token] (at least one required). Note that
     * only operational or deleted elements are considered,
     * and resources do not have public keys. If the key was
     * not found, return null. This method should support
     * invocations by non-admin users
     */
    override fun getPublicKey(
        name: String?,
        token: String?,
        elementType: RBACUnitElementTypeWithKeys,
        asymKeyType: AsymKeysType
    ): ByteArray? {
        logger.info { "Getting public key of type $asymKeyType of a element of type $elementType" }

        // TODO support invocations by non-admin users

        val givenName = !name.isNullOrBlank()
        val givenToken = !token.isNullOrBlank()
        val tokenToUse =
            if (!givenToken) {
                if (givenName) {
                    getToken(
                        name!!,
                        when (elementType) {
                            RBACUnitElementTypeWithKeys.USER -> RBACUnitElementTypeWithStatus.USER
                            RBACUnitElementTypeWithKeys.ROLE -> RBACUnitElementTypeWithStatus.ROLE
                        }
                    )
                } else {
                    val message = "Neither name nor token given for query"
                    logger.error { message }
                    throw IllegalArgumentException(message)
                }
            } else {
                token
            }

        val fieldOfKeyToGet = when (asymKeyType) {
            AsymKeysType.ENC -> asymEncPublicKeyField
            AsymKeysType.SIG -> asymSigPublicKeyField
        }

        val keyOfElement = when (elementType) {
            RBACUnitElementTypeWithKeys.USER -> "$userObjectPrefix$byUserTokenKeyPrefix$tokenToUse"
            RBACUnitElementTypeWithKeys.ROLE -> "$roleObjectPrefix$byRoleTokenKeyPrefix$tokenToUse"
        }

        val elementData = jQuery!!.hgetAllCache(keyOfElement)
        return when (elementData[statusField]?.let { UnitElementStatus.valueOf(it) }) {
            UnitElementStatus.OPERATIONAL -> elementData[fieldOfKeyToGet]?.decodeBase64()
            UnitElementStatus.DELETED -> elementData[fieldOfKeyToGet]?.decodeBase64()
            UnitElementStatus.INCOMPLETE -> null
            null -> null
        }
    }

    /**
     * Retrieve the version number belonging to the element
     * of the specified [elementType] by matching the [name]
     * or [token] (at least one required). Note that only
     * operational elements are considered, and users do not
     * have version numbers. Note also that only the latest
     * version number of resources (i.e., the one used for encryption
     * are considered). If the version number was not found,
     * return null. This method should support invocations by
     * non-admin users
     */
    override fun getVersionNumber(
        name: String?,
        token: String?,
        elementType: RBACUnitElementTypeWithVN
    ): Int? {
        logger.info { "Getting version number of a $elementType" }

        // TODO support invocations by non-admin users

        val givenName = !name.isNullOrBlank()
        val givenToken = !token.isNullOrBlank()
        val tokenToUse =
            if (!givenToken) {
                if (givenName) {
                    getToken(
                        name!!,
                        when (elementType) {
                            RBACUnitElementTypeWithVN.ROLE -> RBACUnitElementTypeWithStatus.ROLE
                            RBACUnitElementTypeWithVN.RESOURCE -> RBACUnitElementTypeWithStatus.RESOURCE
                        }
                    )
                } else {
                    val message = "Neither name nor token given for query"
                    logger.error { message }
                    throw IllegalArgumentException(message)
                }
            } else {
                token
            }

        val fieldOfVersionNumberToGet = when (elementType) {
            RBACUnitElementTypeWithVN.ROLE -> roleVersionNumberField
            RBACUnitElementTypeWithVN.RESOURCE -> symEncKeyVersionNumberField
        }

        val keyOfElement = when (elementType) {
            RBACUnitElementTypeWithVN.ROLE -> "$roleObjectPrefix$byRoleTokenKeyPrefix$tokenToUse"
            RBACUnitElementTypeWithVN.RESOURCE -> "$resourceObjectPrefix$byResourceTokenKeyPrefix$tokenToUse"
        }

        val elementData = jQuery!!.hgetAllCache(keyOfElement)
        return if (elementData[statusField]?.let { UnitElementStatus.valueOf(it) } == UnitElementStatus.OPERATIONAL) {
            elementData[fieldOfVersionNumberToGet]?.toInt()
        } else {
            null
        }
    }

    /**
     * Retrieve the token of the element of
     * the given [type] matching the [name].
     * If the token was not found, return null.
     * Note that only operational and deleted
     * elements are considered.
     * This method should support invocations
     * by non-admin users
     */
    override fun getToken(
        name: String,
        type: RBACUnitElementTypeWithStatus
    ): String? {
        logger.debug { "Get the token of element $type with name $name" }

        // TODO support invocations by non-admin users

        val elementsNamesAndTokens = mutableSetOf<String>()
        when (type) {
            RBACUnitElementTypeWithStatus.USER -> jQuery!!.smembersCache(setOfUsersKey)
            RBACUnitElementTypeWithStatus.ROLE -> jQuery!!.smembersCache(setOfRolesKey)
            RBACUnitElementTypeWithStatus.RESOURCE -> jQuery!!.smembersCache(setOfResourcesKey)
        }?.let { elementsNamesAndTokens.addAll(it) }
        when (type) {
            RBACUnitElementTypeWithStatus.USER -> jQuery!!.smembersCache(setOfDeletedUsersKey)
            RBACUnitElementTypeWithStatus.ROLE -> jQuery!!.smembersCache(setOfDeletedRolesKey)
            RBACUnitElementTypeWithStatus.RESOURCE -> jQuery!!.smembersCache(setOfDeletedResourcesKey)
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
        type: RBACUnitElementTypeWithStatus
    ): UnitElementStatus? {
        logger.debug { "Getting the status of a $type" }

        // TODO support invocations by non-admin users

        val givenName = !name.isNullOrBlank()
        val givenToken = !token.isNullOrBlank()
        val tokenToUse =
            if (!givenToken) {
                if (givenName) {
                    getToken(name!!, type)
                } else {
                    val message = "Neither name nor token given for query"
                    logger.error { message }
                    throw IllegalArgumentException(message)
                }
            } else {
                token
            }

        return if (tokenToUse != null) {
            val keyOfElement = "${
            when (type) {
                RBACUnitElementTypeWithStatus.USER -> "$userObjectPrefix$byUserTokenKeyPrefix"
                RBACUnitElementTypeWithStatus.ROLE -> "$roleObjectPrefix$byRoleTokenKeyPrefix"
                RBACUnitElementTypeWithStatus.RESOURCE -> "$resourceObjectPrefix$byResourceTokenKeyPrefix"
            }
            }$tokenToUse"
            val status = jQuery!!.hgetCache(keyOfElement, statusField)?.let { UnitElementStatus.valueOf(it) }
            logger.debug { "The status is $status" }
            status
        } else {
            null
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
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        return when (getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)) {
            null -> {
                CODE_005_ROLE_NOT_FOUND
            }
            UnitElementStatus.DELETED -> {
                CODE_014_ROLE_WAS_DELETED
            }
            else -> {
                val roleToken = getToken(roleName, RBACUnitElementTypeWithStatus.ROLE)!!
                val elementNameAndToken = concatenateNameAndToken(roleName, roleToken)
                val roleKeyByToken = "$roleObjectPrefix$byRoleTokenKeyPrefix$roleToken"
                logger.info { "Deleting role with key $roleKeyByToken" }

                transactionToExec = true
                jTransaction!!.sremCache(setOfRolesKey, elementNameAndToken)
                jTransaction!!.saddCache(setOfDeletedRolesKey, elementNameAndToken)
                jTransaction!!.hsetCache(roleKeyByToken, statusField, UnitElementStatus.DELETED.toString())

                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Delete the [resourceName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a resource. Finally, return the outcome code.
     * Check that the resource exists and was not already
     * deleted
     *
     * In this implementation, change the status of the [resourceName]
     * to deleted and move the key to the list of deleted resources
     */
    override fun deleteResource(resourceName: String): OutcomeCode {
        logger.info { "Deleting resource $resourceName" }

        return when (getStatus(name = resourceName, type = RBACUnitElementTypeWithStatus.RESOURCE)) {
            null -> {
                CODE_006_RESOURCE_NOT_FOUND
            }
            UnitElementStatus.DELETED -> {
                CODE_015_RESOURCE_WAS_DELETED
            }
            else -> {
                val resourceToken = getToken(resourceName, RBACUnitElementTypeWithStatus.RESOURCE)!!
                val elementNameAndToken = concatenateNameAndToken(resourceName, resourceToken)
                val resourceKeyByToken = "$resourceObjectPrefix$byResourceTokenKeyPrefix$resourceToken"
                logger.info { "Deleting resource with key $resourceKeyByToken" }

                transactionToExec = true
                jTransaction!!.sremCache(setOfResourcesKey, elementNameAndToken)
                jTransaction!!.saddCache(setOfDeletedResourcesKey, elementNameAndToken)
                jTransaction!!.hsetCache(resourceKeyByToken, statusField, UnitElementStatus.DELETED.toString())

                CODE_000_SUCCESS
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
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        /** Get all users assigned to the role */
        val roleTuplesKeyByRoleName = "$roleTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
        val usersNameAndToken = hashSetOf<String>()
        jQuery!!.smembersCache(roleTuplesKeyByRoleName)?.let { usersNameAndToken.addAll(it) }
        val size = usersNameAndToken.size
        logger.debug { "Found $size role tuples to delete" }

        return if (size == 0) {
            when (getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)) {
                UnitElementStatus.OPERATIONAL -> CODE_007_ROLETUPLE_NOT_FOUND
                UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
            }
        } else {
            transactionToExec = true
            jTransaction!!.delListCache(roleTuplesKeyByRoleName)
            val roleToken = getToken(roleName, RBACUnitElementTypeWithStatus.ROLE)!!

            /** Remove the role tuples from all users */
            usersNameAndToken.forEach { userNameAndToken ->
                val username = getNameFromElementNameAndToken(userNameAndToken)
                val userToken = getTokenFromElementNameAndToken(userNameAndToken)
                val roleNameAndToken = concatenateNameAndToken(roleName, roleToken)
                val roleTuplesKeyByUserToken = "$roleTuplesListKeyPrefix$byUserTokenKeyPrefix$userToken"
                val roleTuplesKeyByUsername = "$roleTuplesListKeyPrefix$byUsernameKeyPrefix$username"
                val roleTuplesKeyByUsernameAndRoleName =
                    "$roleTuplesListKeyPrefix$byUserAndRoleNameKeyPrefix$username$dl$roleName"
                val roleTupleKey = "$roleTupleObjectPrefix$byUserAndRoleTokenKeyPrefix$userToken$dl$roleToken"

                logger.debug { "Deleting role tuple of user $username" }
                jTransaction!!.sremCache(
                    roleTuplesKeyByUsername,
                    roleNameAndToken
                )
                jTransaction!!.sremCache(
                    roleTuplesKeyByUserToken,
                    roleNameAndToken
                )
                jTransaction!!.delListCache(roleTuplesKeyByUsernameAndRoleName)
                jTransaction!!.delSetCache(roleTupleKey)
            }

            CODE_000_SUCCESS
        }
    }

    /**
     * Delete the permission tuples matching the [roleName]
     * and/or the [resourceName] (at least one required). Finally,
     * return the outcome code. Check that [roleName] is not
     * the admin. Also check that at least one permission tuple
     * is deleted, and if not check whether the [roleName] and
     * the [resourceName] exist and were not deleted
     *
     * In this implementation, delete the tuples related to the
     * [roleName], if given, the tuples related to the [resourceName],
     * if given, or the tuples related to both [roleName] and
     * [resourceName]. Also, remove the related keys from the list of
     * tuples related to the involved roles, involved users and
     * combination of involved users and roles
     */
    override fun deletePermissionTuples(
        roleName: String?,
        resourceName: String?,
    ): OutcomeCode {
        logger.info { "Deleting permission tuples" }

        /** Guard Clauses */
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }
        val givenRoleName = !roleName.isNullOrBlank()
        val givenResourceName = !resourceName.isNullOrBlank()

        return if (!givenRoleName && !givenResourceName) {
            val message = "Neither role nor resource name given for query"
            logger.error { message }
            throw IllegalArgumentException(message)
        } else if (givenRoleName && !givenResourceName) {

            logger.info { "Filtering by role name $roleName" }

            /** The role name was given. Get all resources assigned to the role */
            val permissionTuplesKeyByRoleName = "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
            val resourcesNameAndToken = hashSetOf<String>()
            jQuery!!.smembersCache(permissionTuplesKeyByRoleName)?.let { resourcesNameAndToken.addAll(it) }
            val size = resourcesNameAndToken.size

            logger.debug { "Found $size permission tuples to delete" }

            if (size == 0) {
                when (getStatus(
                    name = roleName,
                    type = RBACUnitElementTypeWithStatus.ROLE
                )) {
                    UnitElementStatus.OPERATIONAL -> CODE_008_PERMISSIONTUPLE_NOT_FOUND
                    UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                    UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                }
            } else {
                transactionToExec = true
                jTransaction!!.delListCache(permissionTuplesKeyByRoleName)

                val roleToken = getToken(roleName!!, RBACUnitElementTypeWithStatus.ROLE)!!
                val permissionTuplesKeyByRoleToken =
                    "$permissionTuplesListKeyPrefix$byRoleTokenKeyPrefix$roleToken"
                jTransaction!!.delListCache(permissionTuplesKeyByRoleToken)

                /** Remove the permission tuples from all resources */
                resourcesNameAndToken.forEach { resourceNameAndToken ->
                    val currentResourceName = getNameFromElementNameAndToken(resourceNameAndToken)
                    val resourceToken = getTokenFromElementNameAndToken(resourceNameAndToken)
                    val roleNameAndToken = concatenateNameAndToken(roleName, roleToken)

                    val permissionTuplesKeyByResourceName =
                        "$permissionTuplesListKeyPrefix$byResourceNameKeyPrefix$currentResourceName"
                    val permissionTuplesKeyByRoleNameAndResourceName =
                        "$permissionTuplesListKeyPrefix$byRoleAndResourceNameKeyPrefix" +
                            "$roleName$dl$currentResourceName"
                    val permissionTupleKey = "$permissionTupleObjectPrefix$byRoleAndResourceTokenKeyPrefix" +
                        "$roleToken$dl$resourceToken"

                    logger.debug {
                        "Deleting permission tuple of role $roleName and " +
                            "resource $currentResourceName"
                    }

                    jTransaction!!.sremCache(
                        permissionTuplesKeyByResourceName,
                        roleNameAndToken
                    )
                    jTransaction!!.delListCache(permissionTuplesKeyByRoleNameAndResourceName)
                    jTransaction!!.delSetCache(permissionTupleKey)
                }

                CODE_000_SUCCESS
            }
        } else if (!givenRoleName) {

            logger.info { "Filtering by resource name $resourceName" }

            /** The resource name was given. Get all roles assigned to the resource */
            val permissionTuplesKeyByResourceName =
                permissionTuplesListKeyPrefix + byResourceNameKeyPrefix + resourceName
            val rolesNameAndToken = hashSetOf<String>()
            jQuery!!.smembersCache(permissionTuplesKeyByResourceName)?.let { rolesNameAndToken.addAll(it) }
            val size = rolesNameAndToken.size

            logger.debug { "Found $size permission tuples to delete" }

            if (size == 0) {
                when (getStatus(
                    name = resourceName,
                    type = RBACUnitElementTypeWithStatus.RESOURCE
                )) {
                    UnitElementStatus.OPERATIONAL -> CODE_008_PERMISSIONTUPLE_NOT_FOUND
                    UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                    UnitElementStatus.INCOMPLETE, null -> CODE_006_RESOURCE_NOT_FOUND
                }
            } else {
                transactionToExec = true
                jTransaction!!.delListCache(permissionTuplesKeyByResourceName)

                val resourceToken = getToken(resourceName!!, RBACUnitElementTypeWithStatus.RESOURCE)!!

                /** Remove the permission tuples from all roles */
                rolesNameAndToken.forEach { roleNameAndToken ->
                    val currentRoleName = getNameFromElementNameAndToken(roleNameAndToken)
                    val roleToken = getTokenFromElementNameAndToken(roleNameAndToken)
                    val resourceNameAndToken = concatenateNameAndToken(resourceName, resourceToken)

                    val permissionTuplesKeyByRoleName =
                        "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$currentRoleName"
                    val permissionTuplesKeyByRoleToken =
                        "$permissionTuplesListKeyPrefix$byRoleTokenKeyPrefix$roleToken"
                    val permissionTuplesKeyByRoleNameAndResourceName =
                        "$permissionTuplesListKeyPrefix$byRoleAndResourceNameKeyPrefix" +
                            "$currentRoleName$dl$resourceName"
                    val permissionTupleKey = "$permissionTupleObjectPrefix$byRoleAndResourceTokenKeyPrefix" +
                        "$roleToken$dl$resourceToken"

                    logger.debug {
                        "Deleting permission tuple of role $currentRoleName and " +
                            "resource $resourceName"
                    }

                    jTransaction!!.sremCache(
                        key = permissionTuplesKeyByRoleName,
                        value = resourceNameAndToken
                    )
                    jTransaction!!.sremCache(
                        key = permissionTuplesKeyByRoleToken,
                        value = resourceNameAndToken
                    )
                    jTransaction!!.delListCache(permissionTuplesKeyByRoleNameAndResourceName)
                    jTransaction!!.delSetCache(permissionTupleKey)
                }
                CODE_000_SUCCESS
            }
        } else {

            logger.info { "Filtering by role name $roleName and resource name $resourceName" }

            /** Both the role and resource name were given */
            val permissionTuplesKeyByRoleNameAndResourceName =
                "$permissionTuplesListKeyPrefix$byRoleAndResourceNameKeyPrefix" +
                "$roleName$dl$resourceName"
            val resourceNamesAndTokens = hashSetOf<String>()
            jQuery!!.smembersCache(permissionTuplesKeyByRoleNameAndResourceName)?.let {
                resourceNamesAndTokens.addAll(it)
            }
            val size = resourceNamesAndTokens.size

            logger.debug { "Found $size permission tuples to delete" }

            when (size) {
                0 -> {
                    when (getStatus(
                        name = roleName,
                        type = RBACUnitElementTypeWithStatus.ROLE
                    )) {
                        UnitElementStatus.OPERATIONAL -> {
                            when (getStatus(
                                name = resourceName,
                                type = RBACUnitElementTypeWithStatus.RESOURCE
                            )) {
                                UnitElementStatus.OPERATIONAL -> CODE_008_PERMISSIONTUPLE_NOT_FOUND
                                UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                                UnitElementStatus.INCOMPLETE, null -> CODE_006_RESOURCE_NOT_FOUND
                            }
                        }
                        UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                        UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                    }
                }
                1 -> {
                    transactionToExec = true
                    jTransaction!!.delListCache(permissionTuplesKeyByRoleNameAndResourceName)

                    val roleToken = getToken(roleName!!, RBACUnitElementTypeWithStatus.ROLE)!!
                    val resourceToken = getToken(resourceName!!, RBACUnitElementTypeWithStatus.RESOURCE)!!
                    val roleNameAndToken = concatenateNameAndToken(roleName, roleToken)
                    val resourceNameAndToken = concatenateNameAndToken(resourceName, resourceToken)

                    val permissionTuplesKeyByRoleName =
                        "$permissionTuplesListKeyPrefix$byRoleNameKeyPrefix$roleName"
                    val permissionTuplesKeyByRoleToken =
                        "$permissionTuplesListKeyPrefix$byRoleTokenKeyPrefix$roleToken"
                    val permissionTuplesKeyByResourceName =
                        "$permissionTuplesListKeyPrefix$byResourceNameKeyPrefix$resourceName"

                    val permissionTupleKey = "$permissionTupleObjectPrefix$byRoleAndResourceTokenKeyPrefix" +
                            "$roleToken$dl$resourceToken"

                    logger.debug {
                        "Deleting permission tuple of role $roleName and " +
                                "resource $resourceName"
                    }

                    jTransaction!!.sremCache(
                        permissionTuplesKeyByRoleName,
                        resourceNameAndToken
                    )
                    jTransaction!!.sremCache(
                        permissionTuplesKeyByRoleToken,
                        resourceNameAndToken
                    )
                    jTransaction!!.sremCache(
                        permissionTuplesKeyByResourceName,
                        roleNameAndToken
                    )
                    jTransaction!!.delSetCache(permissionTupleKey)

                    CODE_000_SUCCESS
                }
                else -> {
                    val message = "There is more than one permission tuple for role $roleName and resource $resourceName"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
            }
        }
    }

    /**
     * Update the token of [roleName] with the [newRoleToken],
     * the asymmetric encryption and signing public keys with
     * the new [newAsymEncPublicKey] and [newAsymSigPublicKey]
     * and increase by 1 the [oldRoleVersionNumber]. Check that
     * the role exists and was not deleted
     */
    override fun updateRoleTokenAndVersionNumberAndAsymKeys(
        roleName: String,
        oldRoleVersionNumber: Int,
        oldRoleToken: String,
        newRoleToken: String,
        newAsymEncPublicKey: PublicKey,
        newAsymSigPublicKey: PublicKey
    ): OutcomeCode {
        logger.info { "Updating the token and the public keys of role $roleName" }

        return when (val role = getRoles(roleName = roleName).firstOrNull()) {
            null -> {
                logger.warn { "Role was not found" }
                CODE_005_ROLE_NOT_FOUND
            }
            else -> {
                when (role.status) {
                    UnitElementStatus.DELETED -> {
                        logger.warn { "Role $roleName was previously deleted" }
                        CODE_014_ROLE_WAS_DELETED
                    }
                    else -> {
                        transactionToExec = true
                        val roleKeyByToken = "$roleObjectPrefix$byRoleTokenKeyPrefix${role.token}"
                        val updatedRoleObject = hashMapOf(
                            roleTokenField to newRoleToken,
                            asymEncPublicKeyField to newAsymEncPublicKey.encoded.encodeBase64(),
                            asymSigPublicKeyField to newAsymSigPublicKey.encoded.encodeBase64(),
                            roleVersionNumberField to (oldRoleVersionNumber + 1).toString(),
                        )
                        jTransaction!!.hsetCache(roleKeyByToken, updatedRoleObject)

                        logger.debug { "Change the role's token in the set of roles" }
                        val oldRoleNameAndToken = concatenateNameAndToken(roleName, oldRoleToken)
                        val newRoleNameAndToken = concatenateNameAndToken(roleName, newRoleToken)
                        jTransaction!!.sremCache(setOfRolesKey, oldRoleNameAndToken)
                        jTransaction!!.saddCache(setOfRolesKey, newRoleNameAndToken)

                        logger.debug { "Change the role's token in the list of role tuples" }
                        val keyOfRoleTuplesListByRoleName =
                            roleTuplesListKeyPrefix + byRoleNameKeyPrefix + roleName
                        jQuery!!.smembersCache(keyOfRoleTuplesListByRoleName)?.forEach { usernameAndToken ->
                            logger.debug { "Changing role token for username and token $usernameAndToken" }
                            val currentUsername = getNameFromElementNameAndToken(usernameAndToken)
                            val currentUserToken = getTokenFromElementNameAndToken(usernameAndToken)

                            logger.debug { "Changing role token in list of role tuples by user token" }
                            val listOfRoleTuplesByUserToken =
                                roleTuplesListKeyPrefix + byUserTokenKeyPrefix + currentUserToken
                            jTransaction!!.sremCache(listOfRoleTuplesByUserToken, oldRoleNameAndToken)

                            jTransaction!!.saddCache(listOfRoleTuplesByUserToken, newRoleNameAndToken)

                            logger.debug { "Changing role token in list of role tuples by username" }
                            val listOfRoleTuplesByUsername =
                                roleTuplesListKeyPrefix + byUsernameKeyPrefix + currentUsername
                            jTransaction!!.sremCache(listOfRoleTuplesByUsername, oldRoleNameAndToken)

                            jTransaction!!.saddCache(listOfRoleTuplesByUsername, newRoleNameAndToken)

                            logger.debug { "Changing role token in list of role tuples by username and role name" }
                            val listOfRoleTuplesByUserAndRoleName =
                                roleTuplesListKeyPrefix + byUserAndRoleNameKeyPrefix + currentUsername + dl + roleName
                            jTransaction!!.sremCache(listOfRoleTuplesByUserAndRoleName, oldRoleNameAndToken)
                            jTransaction!!.saddCache(listOfRoleTuplesByUserAndRoleName, newRoleNameAndToken)

                            val oldRoleTupleObjectKey =
                                roleTupleObjectPrefix + byUserAndRoleTokenKeyPrefix +
                                currentUserToken + dl + oldRoleToken
                            val newRoleTupleObjectKey =
                                roleTupleObjectPrefix + byUserAndRoleTokenKeyPrefix +
                                currentUserToken + dl + newRoleToken
                            logger.debug {
                                "Rename the key of the role tuple object from " +
                                "$oldRoleTupleObjectKey to $newRoleTupleObjectKey"
                            }
                            jTransaction!!.renameCache(
                                oldRoleTupleObjectKey,
                                newRoleTupleObjectKey
                            )
                        }

                        val oldRolePermissionTuplesListKey =
                            permissionTuplesListKeyPrefix + byRoleTokenKeyPrefix + oldRoleToken
                        val newRolePermissionTuplesListKey =
                            permissionTuplesListKeyPrefix + byRoleTokenKeyPrefix + newRoleToken
                        logger.debug {
                            "Rename the key of permission tuples by role token from " +
                            "$oldRolePermissionTuplesListKey to $newRolePermissionTuplesListKey"
                        }
                        jTransaction!!.renameCache(
                            oldRolePermissionTuplesListKey,
                            newRolePermissionTuplesListKey
                        )

                        logger.debug { "Change the role's token in the list of permission tuples" }
                        val keyOfPermissionTuplesListByRoleName =
                            permissionTuplesListKeyPrefix + byRoleNameKeyPrefix + roleName
                        jQuery!!.smembersCache(keyOfPermissionTuplesListByRoleName)?.forEach { resourceNameAndToken ->
                            logger.debug { "Changing role token for resource name and token $resourceNameAndToken" }
                            val currentResourceName = getNameFromElementNameAndToken(resourceNameAndToken)
                            val currentResourceToken = getTokenFromElementNameAndToken(resourceNameAndToken)

                            logger.debug { "Change the role's token in the list of permission tuples by resource name" }
                            val listOfPermissionTuplesByResourceName =
                                permissionTuplesListKeyPrefix + byResourceNameKeyPrefix + currentResourceName
                            jTransaction!!.sremCache(listOfPermissionTuplesByResourceName, oldRoleNameAndToken)
                            jTransaction!!.saddCache(listOfPermissionTuplesByResourceName, newRoleNameAndToken)


                            val oldPermissionTupleObjectKey =
                                permissionTupleObjectPrefix + byRoleAndResourceTokenKeyPrefix +
                                oldRoleToken + dl + currentResourceToken
                            val newPermissionTupleObjectKey =
                                permissionTupleObjectPrefix + byRoleAndResourceTokenKeyPrefix +
                                newRoleToken + dl + currentResourceToken
                            logger.debug {
                                "Rename the key of the permission tuple object from " +
                                "$oldPermissionTupleObjectKey to $newPermissionTupleObjectKey"
                            }
                            jTransaction!!.renameCache(
                                oldPermissionTupleObjectKey,
                                newPermissionTupleObjectKey
                            )
                        }

                        val oldRoleObjectKey =
                            roleObjectPrefix + byRoleTokenKeyPrefix + oldRoleToken
                        val newRoleObjectKey =
                            roleObjectPrefix + byRoleTokenKeyPrefix + newRoleToken
                        logger.debug {
                            "Rename the key of the role object from " +
                            "$oldRoleObjectKey to $newRoleObjectKey"
                        }
                        jTransaction!!.renameCache(
                            oldRoleObjectKey,
                            newRoleObjectKey
                        )

                        CODE_000_SUCCESS
                    }
                }
            }
        }
    }

    /**
     * Update the version numbers of the [updatedResource]
     * and return the outcome code. Check that the resource
     * exists
     */
    override fun updateResourceVersionNumber(updatedResource: Resource): OutcomeCode {
        val resourceName = updatedResource.name
        logger.info { "Updating the version numbers of $resourceName" }

        return when (val resource = getResources(resourceName = resourceName).firstOrNull()) {
            null -> {
                logger.warn { "Resource was not found" }
                CODE_006_RESOURCE_NOT_FOUND
            }
            else -> {
                when (resource.status) {
                    UnitElementStatus.DELETED -> {
                        logger.warn { "Resource $resourceName was previously deleted" }
                        CODE_015_RESOURCE_WAS_DELETED
                    }
                    else -> {
                        transactionToExec = true
                        val resourceKeyByToken = "$resourceObjectPrefix$byResourceTokenKeyPrefix${resource.token}"
                        val updatedResourceObject = hashMapOf(
                            symDecKeyVersionNumberField to resource.symDecKeyVersionNumber.toString(),
                            symEncKeyVersionNumberField to resource.symEncKeyVersionNumber.toString()
                        )
                        jTransaction!!.hsetCache(
                            key = resourceKeyByToken,
                            values = updatedResourceObject
                        )
                        CODE_000_SUCCESS
                    }
                }
            }
        }
    }

    /**
     * Update the token of the [resourceName] with the
     * [newResourceToken] and the encryption version
     * number with the [newSymEncKeyVersionNumber].
     * Check that the resource exists
     */
    override fun updateResourceTokenAndVersionNumber(
        resourceName: String,
        oldResourceToken: String,
        newResourceToken: String,
        newSymEncKeyVersionNumber: Int,
    ): OutcomeCode {
        logger.info { "Updating the token and the sym enc version number of $resourceName" }

        return when (val resource = getResources(resourceName = resourceName).firstOrNull()) {
            null -> {
                logger.warn { "Resource was not found" }
                CODE_006_RESOURCE_NOT_FOUND
            }
            else -> {
                when (resource.status) {
                    UnitElementStatus.DELETED -> {
                        logger.warn { "Resource $resourceName was previously deleted" }
                        CODE_015_RESOURCE_WAS_DELETED
                    }
                    else -> {
                        transactionToExec = true
                        val oldResourceObjectKey =
                            resourceObjectPrefix + byResourceTokenKeyPrefix + oldResourceToken
                        val updatedResourceObject = hashMapOf(
                            resourceTokenField to newResourceToken,
                            symEncKeyVersionNumberField to newSymEncKeyVersionNumber.toString(),
                        )
                        jTransaction!!.hsetCache(
                            key = oldResourceObjectKey,
                            values = updatedResourceObject
                        )

                        logger.debug { "Change the resource's token in the set of resources" }
                        val oldResourceNameAndToken = concatenateNameAndToken(resourceName, oldResourceToken)
                        val newResourceNameAndToken = concatenateNameAndToken(resourceName, newResourceToken)
                        jTransaction!!.sremCache(setOfResourcesKey, oldResourceNameAndToken)
                        jTransaction!!.saddCache(setOfResourcesKey, newResourceNameAndToken)

                        logger.debug { "Change the resource's token in the list of permission tuples" }
                        val keyOfPermissionTuplesListByResourceName =
                            permissionTuplesListKeyPrefix + byResourceNameKeyPrefix + resourceName
                        jQuery!!.smembersCache(keyOfPermissionTuplesListByResourceName)?.forEach { roleNameAndToken ->
                            logger.debug { "Changing resource token for role name and token $roleNameAndToken" }
                            val currentRoleName = getNameFromElementNameAndToken(roleNameAndToken)
                            val currentRoleToken = getTokenFromElementNameAndToken(roleNameAndToken)

                            logger.debug { "Changing resource token in list of permissions tuples by role token" }
                            val listOfPermissionsTuplesByRoleToken =
                                permissionTuplesListKeyPrefix + byRoleTokenKeyPrefix + currentRoleToken
                            jTransaction!!.sremCache(listOfPermissionsTuplesByRoleToken, oldResourceNameAndToken)
                            jTransaction!!.saddCache(listOfPermissionsTuplesByRoleToken, newResourceNameAndToken)

                            logger.debug { "Changing resource token in list of permission tuples by role name" }
                            val listOfPermissionTuplesByRoleName=
                                permissionTuplesListKeyPrefix + byRoleNameKeyPrefix + currentRoleName
                            jTransaction!!.sremCache(listOfPermissionTuplesByRoleName, oldResourceNameAndToken)
                            jTransaction!!.saddCache(listOfPermissionTuplesByRoleName, newResourceNameAndToken)

                            logger.debug { "Changing resource token in list of permission tuples by role and resource name" }
                            val listOfPermissionTuplesByRoleAndResourceName =
                                permissionTuplesListKeyPrefix + byRoleAndResourceNameKeyPrefix + currentRoleName + dl + resourceName
                            jTransaction!!.sremCache(listOfPermissionTuplesByRoleAndResourceName, oldResourceNameAndToken)
                            jTransaction!!.saddCache(listOfPermissionTuplesByRoleAndResourceName, newResourceNameAndToken)

                            val oldPermissionTupleObjectKey =
                                permissionTupleObjectPrefix + byRoleAndResourceTokenKeyPrefix +
                                currentRoleToken + dl + oldResourceToken
                            val newPermissionTupleObjectKey =
                                permissionTupleObjectPrefix + byRoleAndResourceTokenKeyPrefix +
                                currentRoleToken + dl + newResourceToken
                            logger.debug {
                                "Rename the key of the permission tuple object from " +
                                "$oldPermissionTupleObjectKey to $newPermissionTupleObjectKey"
                            }
                            jTransaction!!.renameCache(
                                oldKey = oldPermissionTupleObjectKey,
                                newKey = newPermissionTupleObjectKey
                            )
                        }

                        val newResourceObjectKey =
                            resourceObjectPrefix + byResourceTokenKeyPrefix + newResourceToken
                        logger.debug {
                            "Rename the key of the resource object from " +
                            "$oldResourceObjectKey to $newResourceObjectKey"
                        }
                        jTransaction!!.renameCache(
                            oldResourceObjectKey,
                            newResourceObjectKey
                        )

                        CODE_000_SUCCESS
                    }
                }
            }
        }
    }

    /**
     * Update all fields (except role and resource name) of the
     * given [updatedPermissionTuple] and return the outcome code.
     * Check that the permission tuple exists
     */
    override fun updatePermissionTuple(updatedPermissionTuple: PermissionTuple): OutcomeCode {
        val roleName = updatedPermissionTuple.roleName
        val resourceName = updatedPermissionTuple.resourceName
        val roleToken = updatedPermissionTuple.roleToken
        val resourceToken = updatedPermissionTuple.resourceToken
        val permissionTupleKey = permissionTupleObjectPrefix +
            "$byRoleAndResourceTokenKeyPrefix$roleToken$dl$resourceToken"
        logger.info { "Updating the permission tuple of role $roleName to resource $resourceName" }

        return if (jQuery!!.existsCache(permissionTupleKey)) {
            transactionToExec = true
            val updatedPermissionTupleObject = hashMapOf(
                permissionField to updatedPermissionTuple.permission.toString(),
                signerTokenField to updatedPermissionTuple.signer!!,
                signatureField to updatedPermissionTuple.signature!!.encodeBase64(),
            )
            jTransaction!!.hsetCache(
                key = permissionTupleKey,
                values = updatedPermissionTupleObject
            )
            CODE_000_SUCCESS
        } else {
            CODE_008_PERMISSIONTUPLE_NOT_FOUND
        }
    }



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollback the transactions,
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
                        transaction!!.auth(usernameRedis, mmRedisServiceParameters.password)
                        transaction!!.watch(lockUnlockRollbackKey)
                        jTransaction = transaction!!.multi()
                        jQuery = pool.resource
                        jQuery!!.auth(usernameRedis, mmRedisServiceParameters.password)
                        transactionToExec = false
                        locks++
                        CODE_000_SUCCESS
                    } catch (e: JedisAccessControlException) {
                        if (e.message?.contains(
                                "WRONGPASS invalid username-password pair or user is disabled"
                            ) == true
                        ) {
                            logger.warn { "MM Redis - access denied for user $usernameRedis" }
                            CODE_055_ACCESS_DENIED_TO_MM
                        } else {
                            throw e
                        }
                    }
                } else {
                    /** A lock has been set but not released */
                    logger.info { "Connection already established" }
                    jTransaction = transaction!!.multi()
                    transactionToExec = false
                    locks++
                    CODE_000_SUCCESS
                }
            } catch (e: JedisConnectionException) {
                closeAndNullRedis()
                if ((e.message ?: "").contains("Failed to create socket")) {
                    logger.warn { "MM Redis - connection timeout" }
                    CODE_045_MM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        } else if (locks > 0) {
            locks++
            logger.debug { "Increment lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "Lock number is negative ($locks)" }
            CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
        }
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollback to the previous status only when [locks] becomes 0. Finally,
     * return the outcome code
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
            logger.debug { "Clearing list of lists to remove (size was ${mapOfListsToRemove.size})" }
            logger.debug { "Clearing list of renamed keys (size was ${listOfKeysRenamed.size})" }
            listOfElementsToAdd.clear()
            mapOfListsToAdd.clear()
            mapOfValuesToAdd.clear()
            listOfKeysToDelete.clear()
            mapOfListsToRemove.clear()
            listOfKeysRenamed.clear()
            locks--
            if (jTransaction != null && jQuery != null && transaction != null) {
                if (transactionToExec) {
                    transactionToExec = false
                    jTransaction!!.discard()
                }
                closeAndNullRedis()
                CODE_000_SUCCESS
            } else {
                /** The lock has already been released */
                logger.warn { "The lock was released but the connection was not closed" }
                jTransaction?.discard()
                closeAndNullRedis()
                CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 1) {
            locks--
            logger.debug { "Decrement lock number to $locks}" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "MM rollback number is zero or negative ($locks)" }
            CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
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
            logger.debug { "Clearing list of lists to remove (size was ${mapOfListsToRemove.size})" }
            logger.debug { "Clearing list of renamed keys (size was ${listOfKeysRenamed.size})" }
            listOfElementsToAdd.clear()
            mapOfListsToAdd.clear()
            mapOfValuesToAdd.clear()
            listOfKeysToDelete.clear()
            mapOfListsToRemove.clear()
            listOfKeysRenamed.clear()
            locks--
            if (jTransaction != null && jQuery != null && transaction != null) {
                if (transactionToExec) {
                    transactionToExec = false
                    jTransaction!!.incr(lockUnlockRollbackKey)
                    jTransaction!!.exec()
                    closeAndNullRedis()
                    CODE_000_SUCCESS
                } else {
                    closeAndNullRedis()
                    CODE_000_SUCCESS
                }
            } else {
                /** The lock has already been released */
                logger.warn { "The lock was released but the connection was not closed" }
                jTransaction?.discard()
                closeAndNullRedis()
                CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 1) {
            locks--
            logger.debug { "Decrement lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "MM unlock number is zero or negative ($locks)" }
            CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
        }
    }



    /**
     * Close all connections toward
     * Redis and null the references
     */
    private fun closeAndNullRedis() {
//        transaction?.close()
        jTransaction?.close()
//        jQuery?.close()
//        transaction = null
        jTransaction = null
//        jQuery = null
    }

    /**
     * Get all names and tokens of roles that the
     * user whose token is in the [mmRedisServiceParameters]
     * is assigned to
     */
    private fun getRolesNameAndTokenFromUserToken(): HashSet<String> {
        val keyOfRoleTuplesListByUserToken =
            roleTuplesListKeyPrefix +
                byUserTokenKeyPrefix +
                mmRedisServiceParameters.token
        return jQuery!!.smembersCache(keyOfRoleTuplesListByUserToken) as HashSet<String>
    }

    /**
     * Get all names and tokens of resources that the
     * role with the given [roleToken] is assigned to
     */
    private fun getResourcesNameAndTokenFromRoleToken(roleToken: String): HashSet<String> {
        val keyOfPermissionTuplesListByRoleToken =
            permissionTuplesListKeyPrefix +
                byRoleTokenKeyPrefix +
                roleToken
        return jQuery!!.smembersCache(keyOfPermissionTuplesListByRoleToken) as HashSet<String>
    }

    /** Concatenate the given [name] and [token] */
    private fun concatenateNameAndToken(name: String, token: String) = name + dl + token

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
     * Extend the 'sismemberCache' function to retrieve
     * values from the cache first
     */
    private fun Jedis.sismemberCache(key: String, member: String): Boolean {
        val keyToUse = checkIfKeyWasRenamed(key)

        return if (listOfKeysToDelete.contains(key)) {
            false
        } else if (mapOfListsToAdd[key]?.contains(member) == true) {
            true
        } else if (mapOfListsToRemove[key]?.contains(member) == true) {
            false
        } else {
            this.sismember(keyToUse, member)
        }
    }

    /**
     * Extend the 'exists' function to retrieve
     * values from the cache first
     */
    private fun Jedis.existsCache(key: String): Boolean {
        return if (listOfKeysToDelete.contains(key)) {
            false
        } else {
            this.exists(key)
        }
    }

    /**
     * Extend the 'smembers' function to retrieve
     * values from the cache first
     */
    private fun Jedis.smembersCache(key: String): MutableSet<String>? {
        val keyToUse = checkIfKeyWasRenamed(key)

        return if (listOfKeysToDelete.contains(key)) {
            mutableSetOf()
        } else {
            this.smembers(keyToUse).apply {
                mapOfListsToAdd[key]?.let { addAll(it) }
                mapOfListsToRemove[key]?.let { removeAll(it) }
            }
        }
    }

    /**
     * Extend the 'hgetAll' function to retrieve
     * values from the cache first
     */
    private fun Jedis.hgetAllCache(key: String): Map<String, String> {
        val keyToUse = checkIfKeyWasRenamed(key)
        return if (listOfKeysToDelete.contains(key)) {
            hashMapOf()
        } else {
            val mapFromRedis = this.hgetAll(keyToUse)
            mapOfValuesToAdd[keyToUse]?.forEach { (field, value) ->
                mapFromRedis[field] = value
            }
            return mapFromRedis
        }
    }

    /**
     * Extend the 'hget' function to retrieve
     * values from the cache first
     */
    private fun Jedis.hgetCache(key: String, field: String): String? {
        val keyToUse = checkIfKeyWasRenamed(key)

        return if (listOfKeysToDelete.contains(key)) {
            null
        } else if (mapOfValuesToAdd.contains(key)) {
            mapOfValuesToAdd[key]?.get(field) ?: this.hget(keyToUse, field)
        } else {
            this.hget(keyToUse, field)
        }
    }

    /**
     * Extend the 'rename' function to store
     * values from the cache. In particular,
     * we want to map the new key with the
     * old one, as queries done to the Redis
     * datastore need to use old keys until
     * the transaction is completed
     */
    private fun Transaction.renameCache(oldKey: String, newKey: String) {
        if (listOfKeysToDelete.contains(oldKey)) {
            val message = "Cannot rename delete key"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val oldestKeys = hashSetOf<String>()
        listOfKeysRenamed.forEach { (key, value) ->
            if (key == oldKey) {
                oldestKeys.add(value)
            }
        }
        listOfKeysRenamed.values.remove(oldKey)
        if (oldestKeys.isEmpty()) {
            listOfKeysRenamed[newKey] = oldKey
        } else {
            oldestKeys.forEach {
                listOfKeysRenamed[newKey] = it
            }
        }

        this.rename(oldKey, newKey)
        listOfKeysToDelete.add(oldKey)
    }

    /**
     * Extend the 'del' function to store
     * values from the cache when deleting
     * a set
     */
    private fun Transaction.delSetCache(key: String) {
        if (!listOfKeysToDelete.contains(key)) {
            this.del(key)
            listOfKeysToDelete.add(key)
        }
    }
    /**
     * Extend the 'del' function to store
     * values from the cache when deleting
     * a list
     */
    private fun Transaction.delListCache(key: String) {
        if (!listOfKeysToDelete.contains(key)) {

            /** Add all elements of the list to the cache object */
            jQuery!!.smembersCache(key)?.let {
                mapOfListsToRemove.getOrPut(key) { hashSetOf() }.addAll(
                    it
                )
            }
            this.del(key)
            listOfKeysToDelete.add(key)
        }
    }

    /**
     * Extend the 'hset' function to store
     * values from the cache
     */
    private fun Transaction.hsetCache(key: String, field: String, value: String) {
        this.hset(key, field, value)
        mapOfValuesToAdd.getOrPut(key) { hashMapOf() }[field] = value
        listOfKeysToDelete.remove(key)
    }

    /**
     * Extend the 'hset' function to store
     * values from the cache
     */
    private fun Transaction.hsetCache(key: String, values: HashMap<String, String>) {
        this.hset(key, values)
        mapOfValuesToAdd.putIfAbsent(key, hashMapOf())
        values.forEach { (field, value) ->
            mapOfValuesToAdd[key]!![field] = value
        }
        listOfKeysToDelete.remove(key)
    }

    /**
     * Extend the 'sadd' function to store
     * values from the cache
     */
    private fun Transaction.saddCache(key: String, value: String) {
        this.sadd(key, value)
        if (mapOfListsToRemove.containsKey(key)) {
            mapOfListsToRemove[key]!!.remove(value)
            if (mapOfListsToRemove[key]!!.size == 0)
                mapOfListsToRemove.remove(key)
        }
        mapOfListsToAdd.getOrPut(key) { hashSetOf() }.add(value)
        listOfKeysToDelete.remove(key)
    }

    /**
     * Extend the 'srem' function to store
     * values from the cache
     */
    private fun Transaction.sremCache(key: String, value: String) {
        this.srem(key, value)
        if (mapOfListsToAdd.containsKey(key)) {
            mapOfListsToAdd[key]!!.remove(value)
            if (mapOfListsToAdd[key]!!.size == 0)
                mapOfListsToAdd.remove(key)
        }
        mapOfListsToRemove.getOrPut(key) { hashSetOf() }.add(value)
        listOfKeysToDelete.remove(key)
    }

    /**
     * Return [key] is [key] was not renamed,
     * the renamed key otherwise
     */
    private fun checkIfKeyWasRenamed(key: String) = if (listOfKeysRenamed.containsKey(key)) {
        listOfKeysRenamed[key]
    } else {
        key
    }
}
