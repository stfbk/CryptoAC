package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.core.model.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.implementation.ds.AclType
import eu.fbk.st.cryptoac.implementation.ds.DSInterfaceMQTT
import eu.fbk.st.cryptoac.implementation.ds.DSInterfaceMQTTParameters
import eu.fbk.st.cryptoac.implementation.ds.DSMQTTMessage
import eu.fbk.st.cryptoac.implementation.ms.*
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.client.*
import org.eclipse.paho.mqttv5.client.persist.MemoryPersistence
import org.eclipse.paho.mqttv5.common.MqttException
import org.eclipse.paho.mqttv5.common.MqttMessage
import org.eclipse.paho.mqttv5.common.packet.MqttProperties
import java.io.InputStream
import java.lang.IllegalStateException
import java.security.KeyPair
import java.util.*
import javax.crypto.SecretKey
import kotlin.collections.HashMap
import kotlin.collections.HashSet
import kotlin.random.Random

private val logger = KotlinLogging.logger {}

/**
 * The CoreRBACCloud implements a role-based cryptographic access
 * control scheme with hybrid cryptography for IoT (MQTT) scenarios.
 */
class CoreRBACMQTT(
    override val user: User,
    override val crypto: Crypto,
    val coreParametersMQTT: CoreParametersMQTT
) : CoreRBAC(user, crypto, coreParametersMQTT), MqttCallback {

    /** Interface toward the MS (i.e., the MSQL database). */
    private val ms: MSInterfaceMySQL = MSInterfaceMySQL(coreParametersMQTT.msMySQLInterfaceParameters)

    /** Interface toward the DS (i.e., the MQTT broker). */
    private val ds: DSInterfaceMQTT

    /** Asymmetric encryption key pair. */
    private val asymEncKeyPair: KeyPair = crypto.recreateAsymKeys(
        asymPublicKeyBytes = user.asymEncKeys?.public,
        asymPrivateKeyBytes = user.asymEncKeys?.private,
        type = AsymKeysType.ENC
    )

    /** Asymmetric signature key pair. */
    private val asymSigKeyPair: KeyPair = crypto.recreateAsymKeys(
        asymPublicKeyBytes = user.asymSigKeys?.public,
        asymPrivateKeyBytes = user.asymSigKeys?.private,
        type = AsymKeysType.SIG
    )

    /** The MQTT client. */
    private val client: MqttClient

    /** The list of MQTT messages the client has still to download. */
    private val mqttMessages: HashMap<String, MutableList<DSMQTTMessage>> = hashMapOf()

    /** The cached key for each topic. */
    private val mqttTopicsKeys: HashMap<String, SecretKey?> = hashMapOf()

    /** The memory persistence object for the MQTT client. */
    private val persistence = MemoryPersistence()

    /** The connection option for the MQTT client. */
    private val connOpts = MqttConnectionOptions()

    init {
        val brokerBaseAPI = "tcp://${coreParametersMQTT.dsMQTTInterfaceParameters.url}:${coreParametersMQTT.dsMQTTInterfaceParameters.port}"
        logger.info { "Initializing core ${CoreType.RBAC_MQTT} for user ${coreParametersMQTT.username} with broker base API $brokerBaseAPI" }
        connOpts.isCleanStart = true
        connOpts.password = coreParametersMQTT.dsMQTTInterfaceParameters.password.toByteArray()
        connOpts.userName = coreParametersMQTT.username
        client = MqttClient(brokerBaseAPI, generateRandomClientId(), persistence) // TODO check configuration is ok
        client.setCallback(this)
        client.connect(connOpts)
        ds = DSInterfaceMQTT(coreParametersMQTT.dsMQTTInterfaceParameters, client)
    }

    /**
     * Initialize the admin [user]'s and return the outcome code.
     *
     * In this implementation, add the admin [user]'s keys in
     * the metadata and return the outcome code.
     */
    override fun initAdmin(): OutcomeCode {
        logger.info { "Initializing administrator's keys for user ${user.name}" }

        val encryptedAsymEncKeys = crypto.encryptAsymKeys(
            asymEncKeyPair.public, asymEncKeyPair, AsymKeysType.ENC
        )
        val encryptedAsymSigKeys = crypto.encryptAsymKeys(
            asymEncKeyPair.public, asymSigKeyPair, AsymKeysType.SIG
        )

        val adminRoleTuple = RoleTuple(
            username = ADMIN, roleName = ADMIN,
            encryptedAsymEncKeys = encryptedAsymEncKeys, encryptedAsymSigKeys = encryptedAsymSigKeys,
        )
        val signature = crypto.createSignature(adminRoleTuple.getBytesForSignature(), asymSigKeyPair.private)
        adminRoleTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)

        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            code
        }
        else {
            code = ds.configure(coreParametersMQTT)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                endOfMethod(code)
            } else {

                /**
                 * There is no need to add the admin user, admin role or
                 * the role assignment to the MQTT broker, as these are
                 * already present in the dynsec configuration file.
                 */
                endOfMethod(ms.initAdmin(user, adminRoleTuple))
            }
        }
    }

    /**
     * Initialize the [user]'s and then return the outcome code.
     *
     * In this implementation, add the [user]'s public key and
     * token in the metadata and then return the outcome code.
     */
    override fun initUser(): OutcomeCode {
        logger.info { "Initializing token and public key of user ${user.name}" }

        /** Lock the status of the interfaces. */
        val code = startOfMethod(dsLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            code
        }
        else {
            endOfMethod(ms.initUser(user), dsLocked = false)
        }
    }

    /**
     * Add a user with the given [username] by accordingly updating the metadata and
     * returning the outcome code, along with eventual configuration parameters.
     * Note that other user's metadata (e.g., public keys) can be updated by the user
     * him/herself in the "initUser" function.
     *
     * In this implementation, also add the user in the DS.
     */
    override fun addUser(username: String): CodeCoreParameters {
        logger.info { "Adding user $username" }

        /** Guard clauses. */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CodeCoreParameters(OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return CodeCoreParameters(code)
        }

        /** Add the user in the MS. */
        val addUserResult = ms.addUser(User(username))
        return if (addUserResult.code != OutcomeCode.CODE_000_SUCCESS) {
            CodeCoreParameters(endOfMethod(addUserResult.code))
        }
        else {
            /** Add the user in the DS. */
            val msMySQLInterfaceParameters = addUserResult.parameters as MSInterfaceMySQLParameters
            code = ds.sendDynsecCommand(hashSetOf(ds.getCreateClientCommand(username, msMySQLInterfaceParameters.password)))
            return if (code != OutcomeCode.CODE_000_SUCCESS) {
                CodeCoreParameters(endOfMethod(code))
            } else {
                CodeCoreParameters(
                    endOfMethod(OutcomeCode.CODE_000_SUCCESS),
                    CoreParametersMQTT(
                        username = username, isAdmin = false,
                        asymEncPublicKeyBase64 = Base64.getEncoder().encodeToString("null".toByteArray()),
                        asymEncPrivateKeyBase64 = Base64.getEncoder().encodeToString("null".toByteArray()),
                        asymSigPublicKeyBase64 = Base64.getEncoder().encodeToString("null".toByteArray()),
                        asymSigPrivateKeyBase64 = Base64.getEncoder().encodeToString("null".toByteArray()),
                        coreType = CoreType.RBAC_MQTT,
                        msMySQLInterfaceParameters = msMySQLInterfaceParameters,
                        dsMQTTInterfaceParameters = DSInterfaceMQTTParameters(
                            port = coreParametersMQTT.dsMQTTInterfaceParameters.port,
                            url = coreParametersMQTT.dsMQTTInterfaceParameters.url,
                            password = msMySQLInterfaceParameters.password
                        ),
                    )
                )
            }
        }
    }

    /**
     * Delete the user with the matching [username] from the metadata and
     * revoking the user from all roles. Finally, return the outcome code.
     *
     * In this implementation, also delete the user and his assignments from the DS.
     */
    override fun deleteUser(username: String): OutcomeCode {
        logger.info { "Deleting user $username" }

        /** Guard clauses. */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (username == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN user" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Delete the user from the MS. */
        code = ms.deleteUser(username)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Get the RoleTuples of the [username]. */
        val userRoleTuples = ms.getRoleTuples(username = username, offset = 0, limit = NO_LIMIT)

        /** Revoke the [username] from all roles. */
        logger.info { "Revoking the user $username from all roles" }
        userRoleTuples.forEach error@{
            code = revokeUserFromRole(it.username, it.roleName)
            if (code!= OutcomeCode.CODE_000_SUCCESS) {
                return@error
            }
        }

        /** Delete the user from the DS. */
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            endOfMethod(code)
        } else {
            // TODO does this also delete the user's assignments or not?
            endOfMethod(ds.sendDynsecCommand(hashSetOf(ds.getDeleteClientCommand(username))))
        }
    }

    /**
     * Add a new role with the given [roleName] by creating the role's keys and
     * assigning the admin to the new role. Finally, return the outcome code.
     *
     * In this implementation, also add the admin-role assignment to the DS.
     */
    override fun addRole(roleName: String): OutcomeCode {
        logger.info { "Adding role $roleName" }

        /** Guard clauses. */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }


        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Create the new Role object for the [roleName]. */
        val asymEncKeys = crypto.generateAsymEncKeys()
        val asymSigKeys = crypto.generateAsymSigKeys()
        val newRole = Role(
            name = roleName,
            asymEncKeys = AsymKeys(
                public = asymEncKeys.public.encoded,
                private = asymEncKeys.private.encoded,
                type = AsymKeysType.ENC
            ),
            asymSigKeys = AsymKeys(
                public = asymSigKeys.public.encoded,
                private = asymSigKeys.private.encoded,
                type = AsymKeysType.SIG
            )
        )

        /** Encrypt the [roleName]'s asymmetric keys with the admin's asymmetric encryption public key. */
        val encryptedAsymEncKeys = crypto.encryptAsymKeys(asymEncKeyPair.public, asymEncKeys, AsymKeysType.ENC)
        val encryptedAsymSigKeys = crypto.encryptAsymKeys(asymEncKeyPair.public, asymSigKeys, AsymKeysType.SIG)

        /** Create the new RoleTuple linking the admin with the new [roleName] */
        val adminRoleTuple = RoleTuple(
            username = ADMIN, roleName = roleName,
            encryptedAsymEncKeys = encryptedAsymEncKeys, encryptedAsymSigKeys =encryptedAsymSigKeys,
        )

        /** Sign the new RoleTuple with the asymmetric signing private key of the admin. */
        val signature = crypto.createSignature(adminRoleTuple.getBytesForSignature(), asymSigKeyPair.private)
        adminRoleTuple.updateSignature(
            newSignature = signature, newSigner = ADMIN, newSignerType = ElementTypeWithKey.USER
        )

        /** Update the metadata. */
        code = ms.addRole(newRole)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = ms.addRoleTuples(HashSet<RoleTuple>().apply { add(adminRoleTuple) })
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        return endOfMethod(ds.sendDynsecCommand(hashSetOf(
            ds.getCreateRoleCommand(roleName),
            ds.getAddClientRoleCommand(ADMIN, roleName)
        )))
    }

    /**
     * Delete the role with the matching [roleName] from the metadata and
     * revoking all users and permissions from the role. Finally, return
     * the outcome code.
     */
    override fun deleteRole(roleName: String): OutcomeCode {
        logger.info { "Deleting role $roleName" }

        /** Guard clauses. */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Delete all RoleTuples matching the [roleName]. */
        val deleteRoleTuples = ms.deleteRoleTuples(roleName)
        if (
            deleteRoleTuples != OutcomeCode.CODE_000_SUCCESS &&
            deleteRoleTuples != OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
        ) {
            return endOfMethod(deleteRoleTuples)
        }

        /** Delete the role matching the [roleName]. */
        code = ms.deleteRole(roleName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Get all permission tuples associated to the deleted [roleName]. */
        val rolePermissionTuples = ms.getPermissionTuples(roleName = roleName, offset = 0, limit = NO_LIMIT)

        /** Revoke all permissions from the [roleName]. */
        rolePermissionTuples.forEach error@{
            code = revokePermissionFromRole(it.roleName, it.fileName, PermissionType.READWRITE)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return@error
            }
        }
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Delete the role from the DS. */
        // TODO does this also delete the role's assignments/permissions or not?
        return endOfMethod(ds.sendDynsecCommand(hashSetOf(ds.getDeleteRoleCommand(roleName))))
    }

    /**
     * Add a new file with the given name [fileName] and [fileContent] and
     * apply the specified [enforcement]. Also, assign permission to the
     * admin over the file. Finally, return the outcome code.
     */
    override fun addFile(fileName: String, fileContent: InputStream, enforcement: EnforcementType): OutcomeCode {
        logger.info { "Adding file $fileName with enforcement $enforcement" }

        /** Guard clauses. */
        if (fileName.isBlank()) {
            logger.warn { "File name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Based on the [enforcement], generate or not the symmetric key. */
        val encryptedSymKey = if (enforcement == EnforcementType.COMBINED) {
            /** Encrypt the symmetric key with the administrator's asymmetric encrypting public key. */
            val adminAsymEncPublicKeyBytes = ms.getPublicKey(
                token = ADMIN, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC,
            )
            val adminAsymEncPublicKey = crypto.recreateAsymKeys(
                asymPublicKeyBytes = adminAsymEncPublicKeyBytes,
                type = AsymKeysType.ENC
            ).public
            crypto.encryptSymKey(adminAsymEncPublicKey, crypto.generateSymKey())
        } else {
            EncryptedSymKey("null".toByteArray())
        }
        val newFile = File(fileName)

        /** Give read and write permission to the admin. */
        val adminPermissionTuple = PermissionTuple(
            roleName = ADMIN, fileName = fileName,
            roleToken = ADMIN, fileToken = newFile.token,
            permission = PermissionType.READWRITE,
            encryptedSymKey = encryptedSymKey,
        )
        val newFileTuple = FileTuple(
            fileName = fileName, fileToken = newFile.token,
            roleToken = ADMIN,
            enforcement = enforcement,
        )
        val permissionTupleSignature =
            crypto.createSignature(adminPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
        val fileTupleSignature =
            crypto.createSignature(newFileTuple.getBytesForSignature(), asymSigKeyPair.private)
        adminPermissionTuple.updateSignature(permissionTupleSignature, user.token, ElementTypeWithKey.USER)
        newFileTuple.updateSignature(fileTupleSignature, user.token, ElementTypeWithKey.USER)

        /** Add the metadata in the MS. */
        code = ms.addFile(newFile)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = ms.addFileTuples(HashSet<FileTuple>().apply { add(newFileTuple) })
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = ms.addPermissionTuples(HashSet<PermissionTuple>().apply { add(adminPermissionTuple) })
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        return endOfMethod(ds.addFile(newFile, fileContent))
    }

    /**
     * Delete the file with the matching [fileName] from the metadata and
     * delete all the related file and permission tuples. Finally, return
     * the outcome code.
     */
    override fun deleteFile(fileName: String): OutcomeCode {
        logger.info { "Deleting file $fileName" }

        /** Guard clauses. */
        if (fileName.isBlank()) {
            logger.warn { "File name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }


        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Delete the permission tuples matching the [fileName] from the MS. */
        code = ms.deletePermissionTuples(fileName = fileName)
        if (code != OutcomeCode.CODE_000_SUCCESS && code != OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND) {
            return endOfMethod(code)
        }

        /** Delete the file tuple matching the [fileName] from the MS. */
        code = ms.deleteFileTuples(fileName)
        if (
            code != OutcomeCode.CODE_000_SUCCESS &&
            code != OutcomeCode.CODE_009_FILETUPLE_NOT_FOUND
        ) {
            return endOfMethod(code)
        }

        /** Delete the file matching the [fileName] from the MS. */
        code = ms.deleteFile(fileName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        // TODO also remove all ACLs regarding the file?
        /** Delete the file from the DS */
        return endOfMethod(ds.deleteFile(fileName))
    }

    /**
     * Assigns the user [username] to the role [roleName] by
     * creating a role tuple and then return the outcome code.
     */
    override fun assignUserToRole(username: String, roleName: String): OutcomeCode {
        logger.info { "Assigning user $username to role $roleName" }

        /** Guard clauses. */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "Username or role name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot assign users to the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Get the RoleTuple of the admin. */
        val adminRoleTuple = ms.getRoleTuples(
            username = ADMIN, roleName = roleName,
            offset = 0, limit = 1,
        ).firstOrNull()
        if (adminRoleTuple == null) {
            logger.error { "Admin role tuple for role $roleName not found. Probably the role does not exist" }
            return endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
        verifyTupleSignature(adminRoleTuple)

        /** Get the asymmetric encryption private keys of the [roleName]. */
        val asymEncKeys = crypto.decryptAsymEncKeys(
            asymEncKeyPair.private,
            EncryptedAsymKeys(
                private = adminRoleTuple.encryptedAsymEncKeys!!.private,
                public  = adminRoleTuple.encryptedAsymEncKeys.public,
                type = AsymKeysType.ENC,
            )
        )
        val asymSigKeys = crypto.decryptAsymEncKeys(
            asymEncKeyPair.private,
            EncryptedAsymKeys(
                private = adminRoleTuple.encryptedAsymSigKeys!!.private,
                public  = adminRoleTuple.encryptedAsymSigKeys.public,
                type = AsymKeysType.SIG,
            )
        )

        /** Create the new RoleTuple binding the [username] and the [roleName]. */
        val userAsymEncPublicKeyBytes = ms.getPublicKey(
            name = username, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
        )

        /** If we did not find the user's key, it means that the user does not exist (or was deleted) */
        if (userAsymEncPublicKeyBytes == null) {
            logger.warn { "User's key not found. Checking the user's status" }
            val getStatusResult = ms.getStatus(username, ElementTypeWithStatus.USER)
            return if (getStatusResult.code == OutcomeCode.CODE_000_SUCCESS) {
                logger.warn { "User's status is ${getStatusResult.status}" }
                when (getStatusResult.status!!) {
                    ElementStatus.INCOMPLETE -> endOfMethod(OutcomeCode.CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED)
                    ElementStatus.OPERATIONAL -> {
                        val message = "User's $username key not found but user is operational"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    ElementStatus.DELETED -> endOfMethod(OutcomeCode.CODE_013_USER_WAS_DELETED)
                }
            } else {
                if (getStatusResult.code == OutcomeCode.CODE_004_USER_NOT_FOUND) {
                    endOfMethod(OutcomeCode.CODE_004_USER_NOT_FOUND)
                }
                else {
                    val message =
                        "Unexpected error code (${getStatusResult.code}) while getting the status of user $username"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
            }
        }

        val userAsymEncPublicKey = crypto.recreateAsymKeys(
            asymPublicKeyBytes = userAsymEncPublicKeyBytes, type = AsymKeysType.ENC
        ).public
        val encryptedAsymEncKeys = crypto.encryptAsymKeys(userAsymEncPublicKey, asymEncKeys, AsymKeysType.ENC)
        val encryptedAsymSigKeys = crypto.encryptAsymKeys(userAsymEncPublicKey, asymSigKeys, AsymKeysType.SIG)
        val newRoleTuple = RoleTuple(
            username = username, roleName = roleName,
            roleVersionNumber = adminRoleTuple.roleVersionNumber,
            encryptedAsymEncKeys = encryptedAsymEncKeys, encryptedAsymSigKeys = encryptedAsymSigKeys,
        )
        val newRoleTupleSignature =
            crypto.createSignature(newRoleTuple.getBytesForSignature(), asymSigKeyPair.private)
        newRoleTuple.updateSignature(newRoleTupleSignature, ADMIN, ElementTypeWithKey.USER)

        code = ms.addRoleTuples(HashSet<RoleTuple>().apply { add(newRoleTuple) })
        return if (code == OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS) {
            endOfMethod(OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS)
        } else {
            /** Add the user to the role in the DS. */
            return endOfMethod(ds.sendDynsecCommand(hashSetOf(ds.getAddClientRoleCommand(username, roleName))))
        }
    }

    /**
     * Revoke the user [username] from the role [roleName] by updating
     * role and permission tuples and then return the outcome code.
     */
    override fun revokeUserFromRole(username: String, roleName: String): OutcomeCode {
        logger.info { "Revoking user $username from role $roleName" }

        /** Guard clauses. */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "Username or role name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (username == ADMIN || roleName == ADMIN) {
            logger.warn { "Cannot revoke the $ADMIN user or role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Get the RoleTuples of [roleName]. */
        val roleRoleTuples = ms.getRoleTuples(roleName = roleName, offset = 0, limit = NO_LIMIT)
        if (roleRoleTuples.isEmpty()) {
            logger.warn { "Role tuple not found. Probably the role does not exists" }
            return endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** Get the RoleTuple of [username] and [roleName]. */
        val userRoleTuple = roleRoleTuples.firstOrNull { it.username == username }
        if (userRoleTuple == null) {
            logger.warn { "Role tuple of user $username and role $roleName not found" }
            return endOfMethod(OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND)
        }
        verifyTupleSignature(userRoleTuple)

        /** Get the role tuple of the admin and [roleName]. */
        val adminRoleTuple = roleRoleTuples.first { it.username == ADMIN }

        /** Verify the signature of the RoleTuple of the admin for [roleName]. */
        verifyTupleSignature(adminRoleTuple)

        /** Update the version number and provide new keys for the RoleTuples (except for [username]'s one). */
        logger.debug { "Updating role tuples with new keys and version number" }
        val newAsymEncKeys = crypto.generateAsymEncKeys()
        val newAsymSigKeys = crypto.generateAsymSigKeys()
        val newRoleTuples = HashSet<RoleTuple>()
        val oldRoleVersionNumber = userRoleTuple.roleVersionNumber
        val newRoleVersionNumber = oldRoleVersionNumber + 1
        for (currentTuple in roleRoleTuples) {
            if (currentTuple.username != username) {

                /** Verify the signature of the current RoleTuple. */
                verifyTupleSignature(currentTuple)

                /** Get the key of the user of the current RoleTuple. */
                val userAsymEncPublicKeyBytes = ms.getPublicKey(
                    name = currentTuple.username, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                )
                val userAsymEncPublicKey = crypto.recreateAsymKeys(
                    asymPublicKeyBytes = userAsymEncPublicKeyBytes,
                    type = AsymKeysType.ENC
                ).public

                /** Encrypt the new asym keys with the public key of the user. */
                val encryptedAsymEncKeys = crypto.encryptAsymKeys(userAsymEncPublicKey, newAsymEncKeys, AsymKeysType.ENC)
                val encryptedAsymSigKeys = crypto.encryptAsymKeys(userAsymEncPublicKey, newAsymSigKeys, AsymKeysType.SIG)
                val newRoleTuple = RoleTuple(
                    username = currentTuple.username, roleName = roleName,
                    roleVersionNumber = newRoleVersionNumber,
                    encryptedAsymEncKeys = encryptedAsymEncKeys, encryptedAsymSigKeys = encryptedAsymSigKeys,
                )
                val newRoleTupleSignature =
                    crypto.createSignature(newRoleTuple.getBytesForSignature(), asymSigKeyPair.private)
                newRoleTuple.updateSignature(newRoleTupleSignature, ADMIN, ElementTypeWithKey.USER)
                newRoleTuples.add(newRoleTuple)
            }
        }

        /** Delete the old role tuples of [roleName]. */
        logger.debug { "Deleting the outdated role tuples" }
        code = ms.deleteRoleTuples(roleName = roleName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the new role tuples of [roleName]. */
        logger.debug { "Adding the new role tuples" }
        code = ms.addRoleTuples(newRoleTuples)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }


        /** Get the [roleName] asymmetric encryption keys. */
        val oldRoleAsymEncKeys =
            crypto.decryptAsymEncKeys(asymEncKeyPair.private, adminRoleTuple.encryptedAsymEncKeys!!)

        /** Get the PermissionTuples to update. */
        logger.debug { "Getting the permissions tuples to update" }
        val permissionTuples = ms.getPermissionTuples(roleName = roleName, offset = 0, limit = NO_LIMIT)
        if (permissionTuples.isNotEmpty()) {

            /** The key is the file name, the value are the related permission tuples */
            val roleAccessibleFiles = HashMap<String, HashSet<PermissionTuple>>()

            /** Collect the names of the files that [roleName] has access to. */
            for (currentTuple in permissionTuples) {
                verifyTupleSignature(currentTuple)
                val fileName = currentTuple.fileName
                roleAccessibleFiles.putIfAbsent(fileName, HashSet())
                roleAccessibleFiles[fileName]!!.add(currentTuple)
            }

            /** For each file the revoked [username] had access to through [roleName]. */
            val newPermissionTuples = HashSet<PermissionTuple>()
            for (roleAccessibleFile in roleAccessibleFiles) {
                val fileName = roleAccessibleFile.key
                val fileToken = ms.getToken(
                    name = fileName, type = ElementTypeWithStatus.FILE,
                )
                val currentPermissionTuples = roleAccessibleFile.value

                val latestFileVersionNumber = ms.getVersionNumber(
                    name = fileName, elementType = ElementTypeWithVersionNumber.FILE,
                )
                val newSymKey = crypto.generateSymKey()

                /** Update the PermissionTuples of the [roleName]. */
                for (currentPermissionTuple in currentPermissionTuples) {

                    val tupleFileVersionNumber = currentPermissionTuple.symKeyVersionNumber
                    val tupleSymKey = if (tupleFileVersionNumber == latestFileVersionNumber) {
                        crypto.encryptSymKey(newAsymEncKeys.public, newSymKey)
                    } else {
                        val oldSymKey =
                            crypto.decryptSymKey(oldRoleAsymEncKeys.private, currentPermissionTuple.encryptedSymKey!!)
                        crypto.encryptSymKey(newAsymEncKeys.public, oldSymKey)
                    }

                    val newPermissionTuple = PermissionTuple(
                        roleName = roleName, fileName = fileName,
                        roleVersionNumber = newRoleVersionNumber,
                        symKeyVersionNumber = currentPermissionTuple.symKeyVersionNumber + 1,
                        permission = currentPermissionTuple.permission,
                        encryptedSymKey = tupleSymKey,
                        roleToken = currentPermissionTuple.roleToken, fileToken = fileToken!!,
                    )
                    val signature =
                        crypto.createSignature(newPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
                    newPermissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
                    newPermissionTuples.add(newPermissionTuple)
                }


                /** Get the PermissionTuples of all other roles which can access the current file. */
                val othersPermissionTuples = ms.getPermissionTuples(
                    fileName = fileName, roleNameToExclude = roleName,
                    symKeyVersionNumber = latestFileVersionNumber,
                    offset = 0, limit = NO_LIMIT,
                )

                /** Update the PermissionTuples. */
                for (currentTuple in othersPermissionTuples) {

                    verifyTupleSignature(currentTuple)

                    val roleAsymEncPublicKeyBytes = ms.getPublicKey(
                        name = currentTuple.roleName, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                    )
                    val roleAsymEncPublicKey = crypto.recreateAsymKeys(
                        asymPublicKeyBytes = roleAsymEncPublicKeyBytes,
                        type = AsymKeysType.ENC
                    ).public
                    val tuplesAsymKey = crypto.encryptSymKey(roleAsymEncPublicKey, newSymKey)

                    // finally, create the new permission tuple
                    val newPermissionTuple = PermissionTuple(
                        roleName = currentTuple.roleName, fileName = fileName,
                        roleVersionNumber = currentTuple.roleVersionNumber,
                        symKeyVersionNumber = latestFileVersionNumber!! + 1,
                        permission = currentTuple.permission,
                        encryptedSymKey = tuplesAsymKey,
                        roleToken = currentTuple.roleToken, fileToken = fileToken!!
                    )
                    val signature =
                        crypto.createSignature(newPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
                    newPermissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
                    newPermissionTuples.add(newPermissionTuple)
                }

                code = ms.incrementSymEncVersionNumberByOne(fileName)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code)
                }
            }

            code = ms.deletePermissionTuples(roleName = roleName, roleVersionNumber = oldRoleVersionNumber)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }

            code = ms.addPermissionTuples(newPermissionTuples)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }
        }

        code = ms.updateRoleAsymKeys(
            roleName = roleName,
            newAsymEncPublicKey = newAsymEncKeys.public, newAsymSigPublicKey = newAsymSigKeys.public
        )
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            endOfMethod(code)
        } else {
            /** Remove the user from the role in the DS. */
            endOfMethod(ds.sendDynsecCommand(hashSetOf(ds.getRemoveClientRoleCommand(username, roleName))))
        }
    }

    /**
     * Assigns the permission [permission] to the role [roleName] over the file
     * [fileName] by creating a permission tuple and then return the outcome code.
     */
    override fun assignPermissionToRole(roleName: String, fileName: String, permission: PermissionType): OutcomeCode {
        logger.info { "Assigning permission $permission to role $roleName over file $fileName" }

        /** Guard clauses. */
        if (roleName.isBlank() || fileName.isBlank()) {
            logger.warn { "Role or file name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }


        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }


        /** Get the (latest) PermissionTuple of the admin. */
        logger.debug { "Getting the permission tuples of the admin" }
        val adminPermissionTuples = ms.getPermissionTuples(
            roleName = ADMIN, fileName = fileName,
            offset = 0, limit = NO_LIMIT,
        )
        if (adminPermissionTuples.isEmpty()) {
            logger.warn { "Admin permission tuple for file $fileName not found. Probably the file does not exist" }
            return endOfMethod(OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        logger.debug { "Getting the role version number" }
        val latestRolePermissionNumber = ms.getVersionNumber(
            name = roleName, elementType = ElementTypeWithVersionNumber.ROLE
        )
        if (latestRolePermissionNumber == null) {
            logger.warn { "Role version number not found. Probably the role does not exist" }
            return endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }


        // check if the role has other permissions over the file. Indeed, it may be the case that
        // we just have to update one of these tuples
        logger.debug { "Getting previous permission tuples of role $roleName" }
        val previousRolePermissionTuples = ms.getPermissionTuples(
            roleName = roleName, fileName = fileName,
            roleVersionNumber = latestRolePermissionNumber,
            offset = 0, limit = NO_LIMIT,
        )

        // either the role already has a permission over the file, or it doesn't. In the first case,
        // we just have to add the new permission to the existing permission tuples. Otherwise, we
        // need to share the symmetric key of the file with the role. That is why we need the permission
        // tuples of the admin, to decrypt the symmetric key. Of course, we loop as we need to match
        // the version numbers, as there may be difference symmetric keys
        for (adminPermissionTuple in adminPermissionTuples) {

            verifyTupleSignature(adminPermissionTuple)

            var previousPermissionOfRoleOverFile: PermissionTuple? = null

            // we look for a permission tuple related to the role with the same
            // file version number as the admin's permission tuple
            for (previousRolePermissionTuple in previousRolePermissionTuples) {
                if (adminPermissionTuple.symKeyVersionNumber == previousRolePermissionTuple.symKeyVersionNumber) {
                    previousPermissionOfRoleOverFile = previousRolePermissionTuple
                }
            }

            // if a previous tuple exists (i.e. the role already has a permission
            // over the file, i.e., the role already has the symmetric key)
            if (previousPermissionOfRoleOverFile != null) {
                logger.debug { "Previous permission tuple exists for role $roleName over file $fileName" }

                verifyTupleSignature(previousPermissionOfRoleOverFile)

                if (permission == PermissionType.READ &&
                    (previousPermissionOfRoleOverFile.permission == PermissionType.READWRITE ||
                            previousPermissionOfRoleOverFile.permission == PermissionType.READ
                            )
                ) {
                    logger.warn { "Role already has ${PermissionType.READ} permission" }
                    return endOfMethod(OutcomeCode.CODE_016_INVALID_PERMISSION)
                }

                if (permission == previousPermissionOfRoleOverFile.permission) {
                    logger.warn { "Assigning $permission permission to role " +
                            "having $permission permission" }
                    return endOfMethod(OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS)
                }

                logger.debug { "Upgrading previous permission tuple" }
                val upgradedPermissionTuple = PermissionTuple(
                    roleName = roleName, fileName = fileName,
                    permission = permission,
                    roleVersionNumber = previousPermissionOfRoleOverFile.roleVersionNumber,
                    roleToken = previousPermissionOfRoleOverFile.roleToken,
                    fileToken = previousPermissionOfRoleOverFile.fileToken,
                    encryptedSymKey = previousPermissionOfRoleOverFile.encryptedSymKey,
                    symKeyVersionNumber = previousPermissionOfRoleOverFile.symKeyVersionNumber,
                )
                val signature =
                    crypto.createSignature(upgradedPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
                upgradedPermissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)

                code = ms.updatePermissionTuple(upgradedPermissionTuple)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code)
                }
            }
            // if here, the role does not have any existing permission over the file.
            // Therefore, we have to create permission tuples from scratch
            else {
                logger.debug { "Previous permission tuple does not exist for role $roleName over file $fileName" }
                val asymKey = crypto.decryptSymKey(asymEncKeyPair.private, adminPermissionTuple.encryptedSymKey!!)
                val roleAsymEncPublicKeyBytes = ms.getPublicKey(
                    name = roleName, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                )
                val roleAsymEncPublicKey = crypto.recreateAsymKeys(
                    asymPublicKeyBytes = roleAsymEncPublicKeyBytes,
                    type = AsymKeysType.ENC
                ).public

                val encryptedAsymKey = crypto.encryptSymKey(roleAsymEncPublicKey, asymKey)

                logger.debug { "Creating new permission tuple" }
                val newPermissionTuple = PermissionTuple(
                    roleName = roleName, fileName = fileName,
                    permission = permission,
                    roleVersionNumber = latestRolePermissionNumber,
                    roleToken = ms.getToken(name = roleName, type = ElementTypeWithStatus.ROLE)!!,
                    fileToken = adminPermissionTuple.fileToken,
                    encryptedSymKey = encryptedAsymKey,
                    symKeyVersionNumber = adminPermissionTuple.symKeyVersionNumber,
                )
                val signature =
                    crypto.createSignature(newPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
                newPermissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)

                code = ms.addPermissionTuples(HashSet<PermissionTuple>().apply { add(newPermissionTuple) })
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code)
                }
            }
        }

        // TODO refactor computeACLTypesFromPermission
        /** Add the role to the file in the DS. */
        val permissions = when (permission) {
            PermissionType.READ -> listOf(AclType.publishClientReceive, AclType.subscribePattern, AclType.unsubscribePattern)
            PermissionType.READWRITE -> listOf(AclType.publishClientReceive, AclType.publishClientSend, AclType.subscribePattern, AclType.unsubscribePattern)
            PermissionType.WRITE -> listOf(AclType.publishClientSend, AclType.subscribePattern, AclType.unsubscribePattern)
        }
        val commands = hashSetOf<String>()
        permissions.forEach {
            commands.add(ds.getAddRoleACLCommand(roleName, it, fileName))
        }
        return endOfMethod(ds.sendDynsecCommand(commands))
    }

    /**
     * Revoke the [permission] from the [roleName] over the [fileName]
     * by updating permission tuples and then return the outcome code.
     */
    override fun revokePermissionFromRole(roleName: String, fileName: String, permission: PermissionType): OutcomeCode {
        logger.info { "Revoking permission $permission from role $roleName over file $fileName" }

        /** Guard clauses. */
        if (roleName.isBlank() || fileName.isBlank()) {
            logger.warn { "Role or file name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot revoke the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces. */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }



        if (permission == PermissionType.WRITE) {

            // fetch the permission tuples related to the given role so to remove the 'Write' permission from each tuple
            logger.debug { "Getting permission tuples to update for role $roleName over file $fileName" }
            val permissionTuplesToUpdate = ms.getPermissionTuples(
                roleName = roleName, fileName = fileName,
                offset = 0, limit = NO_LIMIT,
            )

            if (permissionTuplesToUpdate.isEmpty()) {
                logger.warn { "Permission tuple of role $roleName and file $fileName not found" }
                return endOfMethod(OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
            }

            for (permissionTupleToUpdate in permissionTuplesToUpdate) {
                verifyTupleSignature(permissionTupleToUpdate)

                if (permissionTupleToUpdate.permission == PermissionType.READ) {
                    logger.warn { "Role already has read permission only" }
                    return endOfMethod(OutcomeCode.CODE_016_INVALID_PERMISSION)
                }

                // create a new permission tuple equal to the old tuple, except for the permission
                logger.debug { "Creating new permission tuple for key version number ${permissionTupleToUpdate.symKeyVersionNumber}" }
                val newPermissionTuple = PermissionTuple(
                    roleName = roleName, fileName = fileName,
                    roleVersionNumber = permissionTupleToUpdate.roleVersionNumber,
                    permission = PermissionType.READ,
                    encryptedSymKey = permissionTupleToUpdate.encryptedSymKey,
                    symKeyVersionNumber = permissionTupleToUpdate.symKeyVersionNumber,
                    roleToken = permissionTupleToUpdate.roleToken,
                    fileToken = permissionTupleToUpdate.fileToken
                )
                val signature =
                    crypto.createSignature(newPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
                newPermissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)

                code = ms.updatePermissionTuple(newPermissionTuple)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code)
                }
            }
        }
        else if (permission == PermissionType.READWRITE) {

            // we have to delete the permission tuples related to the role, as the role should
            // not have access to the symmetric key anymore. Then, we create a new symmetric key,
            // in case a user from the role cached the key
            logger.debug { "Deleting all permission tuples for role $roleName over file $fileName" }
            code = ms.deletePermissionTuples(roleName = roleName, fileName = fileName)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }

            val newSymKey = crypto.generateSymKey()
            val fileLatestVersionNumber = ms.getVersionNumber(
                name = fileName, elementType = ElementTypeWithVersionNumber.FILE
            )

            // get the latest permission tuples of other roles, as we have
            // to update the symmetric key and replace it with the new one
            logger.debug { "Updating permission tuples of other roles over file $fileName" }
            val latestPermissionTuples = ms.getPermissionTuples(
                fileName = fileName, symKeyVersionNumber = fileLatestVersionNumber,
                offset = 0, limit = NO_LIMIT,
            )

            for (latestPermissionTuple in latestPermissionTuples) {
                verifyTupleSignature(latestPermissionTuple)

                val roleEncPublicKeyBytes = ms.getPublicKey(
                    name = latestPermissionTuple.roleName, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                )
                val roleEncPublicKey = crypto.recreateAsymKeys(
                    asymPublicKeyBytes = roleEncPublicKeyBytes,
                    type = AsymKeysType.ENC
                ).public
                val encryptedNewSymKey = crypto.encryptSymKey(roleEncPublicKey, newSymKey)

                // create the new permission tuple with the updated key and version number
                logger.debug { "Creating new permission tuple for role ${latestPermissionTuple.roleName}" }
                val newPermissionTuple = PermissionTuple(
                    roleName = latestPermissionTuple.roleName, fileName = latestPermissionTuple.fileName,
                    roleVersionNumber = latestPermissionTuple.roleVersionNumber,
                    permission = latestPermissionTuple.permission,
                    symKeyVersionNumber = latestPermissionTuple.symKeyVersionNumber + 1,
                    encryptedSymKey = encryptedNewSymKey,
                    roleToken = latestPermissionTuple.roleToken,
                    fileToken = latestPermissionTuple.fileToken,
                )
                val signature =
                    crypto.createSignature(newPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
                newPermissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)

                code = ms.addPermissionTuples(HashSet<PermissionTuple>().apply { add(newPermissionTuple) })
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code)
                }
            }

            code = ms.incrementSymEncVersionNumberByOne(fileName)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }
        }
        else {
            logger.warn { "Permission $permission is invalid to revoke" }
            return endOfMethod(OutcomeCode.CODE_016_INVALID_PERMISSION)
        }

        // TODO refactor computeACLTypesFromPermission
        /** Remove the role from the file in the DS. */
        val permissions = when (permission) {
            PermissionType.READ -> listOf(AclType.publishClientReceive, AclType.subscribePattern)
            PermissionType.READWRITE -> listOf(AclType.publishClientReceive, AclType.publishClientSend, AclType.subscribePattern)
            PermissionType.WRITE -> listOf(AclType.publishClientSend, AclType.subscribePattern)
        }
        val commands = hashSetOf<String>()
        permissions.forEach {
            commands.add(ds.getRemoveRoleACLCommand(roleName, it, fileName))
        }
        return endOfMethod(ds.sendDynsecCommand(commands))
    }

    /**
     * Read the file [fileName] by downloading and decrypting
     * its content, if possible, and return the outcome code.
     */
    override fun readFile(fileName: String): CodeFile {
        logger.info { "Reading file $fileName by user ${user.name}" }

        /** Guard clauses. */
        if (fileName.isBlank()) {
            logger.warn { "File name is blank" }
            return CodeFile(OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the interfaces. */
        val code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return CodeFile(code)
        }

        /** The user is not actively reading this topic, so subscribe and wait for messages. */
        return if (mqttMessages[fileName] == null) {
            logger.info { "Subscribe to the topic $fileName" }
            mqttMessages[fileName] = mutableListOf()
            ds.readFile(fileName) // TODO if the broker return unauthorized... what to do?
            CodeFile(endOfMethod(OutcomeCode.CODE_000_SUCCESS), Json.encodeToString(mutableListOf<DSMQTTMessage>()).toByteArray().inputStream())
        }
        /** Return all messages retained on this topic. */
        else if (mqttMessages[fileName]!!.isNotEmpty()) {
            logger.info { "Returning eventual messages of the topic $fileName" }
            val payload = Json.encodeToString(mqttMessages[fileName]).toByteArray()
            mqttMessages[fileName]!!.clear()
            CodeFile(endOfMethod(OutcomeCode.CODE_000_SUCCESS), payload.inputStream())
        } else {
            logger.info { "No new messages to read for topic $fileName" }
            CodeFile(endOfMethod(OutcomeCode.CODE_000_SUCCESS), Json.encodeToString(mutableListOf<DSMQTTMessage>()).toByteArray().inputStream())
        }
    }

    /**
     * Write the new [fileContent] for the file [fileName],
     * if possible, and return the outcome code.
     */
    override fun writeFile(fileName: String, fileContent: InputStream): OutcomeCode {
        logger.info { "Writing file $fileName by user ${user.name}" }

        /** Guard clauses. */
        if (fileName.isBlank()) {
            logger.warn { "File name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the interfaces. */
        val code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        // if CAC is to be enforced, we have to obtain the symmetric key to encrypt the file.
        // Therefore, we get the decrypting key version number from the file tuple, and
        // then fetch the corresponding permission tuple
        return if (mqttTopicsKeys[fileName] != null) {
            val symKey = mqttTopicsKeys[fileName]!!
            val messageStream = crypto.encryptStream(symKey, fileContent)
            endOfMethod(ds.writeFile(File(fileName), messageStream))
        }
        else {
            endOfMethod(ds.writeFile(File(fileName), fileContent))
        }
    }



    /**
     * Retrieve and return the users [user] can
     * see, along with the outcome code.
     */
    override fun getUsers(): CodeUsers {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting users" }

        /** Look up in the metadata only if the user is the admin. */
        return if (user.isAdmin) {
            /** Lock the status of the interfaces. */
            val code = startOfMethod(dsLock = false)
            return if (code != OutcomeCode.CODE_000_SUCCESS) {
                CodeUsers(code)
            } else {
                val users = ms.getUsers()
                CodeUsers(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dsLocked = false), users)
            }
        } else {
            CodeUsers(OutcomeCode.CODE_036_UNAUTHORIZED)
        }
    }

    /**
     * Retrieve and return the roles [user] can
     * see, along with the outcome code.
     */
    override fun getRoles(): CodeRoles {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting roles" }

        /** Look up in the metadata only if the user is the admin. */
        return if (user.isAdmin) {
            /** Lock the status of the interfaces. */
            val code = startOfMethod(dsLock = false)
            return if (code != OutcomeCode.CODE_000_SUCCESS) {
                CodeRoles(code)
            } else {
                val roles = ms.getRoles()
                CodeRoles(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dsLocked = false), roles)
            }
        } else {
            CodeRoles(OutcomeCode.CODE_036_UNAUTHORIZED)
        }
    }

    /**
     * Retrieve and return the files [user] can
     * see, along with the outcome code.
     */
    override fun getFiles(): CodeFiles {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting files" }

        /** Look up in the metadata only if the user is the admin. */
        return if (user.isAdmin) {
            /** Lock the status of the interfaces. */
            val code = startOfMethod(dsLock = false)
            return if (code != OutcomeCode.CODE_000_SUCCESS) {
                CodeFiles(code)
            } else {
                val files = ms.getFiles()
                CodeFiles(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dsLocked = false), files)
            }
        } else {
            CodeFiles(OutcomeCode.CODE_036_UNAUTHORIZED)
        }
    }

    /**
     * Retrieve and return the role tuples of the [username] and
     * the [roleName], if given, along with the outcome code.
     */
    override fun getAssignments(username: String?, roleName: String?): CodeRoleTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting role tuples" }

        /** Lock the status of the interfaces. */
        val code = startOfMethod(dsLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            CodeRoleTuples(code)
        } else {
            val roleTuples = ms.getRoleTuples(
                username = username, roleName = roleName,
                isAdmin = user.isAdmin,
                offset = 0, limit = NO_LIMIT,
            )
            CodeRoleTuples(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dsLocked = false), roleTuples)
        }
    }

    /**
     * Retrieve and return the permission tuples of the [username],
     * [roleName] and [fileName], if given, along with the outcome code.
     */
    override fun getPermissions(username: String?, roleName: String?, fileName: String?): CodePermissionTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting permission tuples" }

        /** Lock the status of the interfaces. */
        val code = startOfMethod(dsLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            CodePermissionTuples(code)
        } else {
            val permissionTuples = HashSet<PermissionTuple>()
            ms.getRoleTuples(
                username = username, roleName = roleName,
                isAdmin = user.isAdmin,
                offset = 0, limit = NO_LIMIT).forEach {
                permissionTuples.addAll(
                    ms.getPermissionTuples(
                        roleName = it.roleName, fileName = fileName,
                        isAdmin = user.isAdmin,
                        offset = 0, limit = NO_LIMIT,
                    )
                )
            }
            CodePermissionTuples(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dsLocked = false), permissionTuples)
        }
    }



    /**
     * Lock the specified interfaces
     * and return the outcome code.
     */
    private fun startOfMethod(msLock: Boolean = true, dsLock: Boolean = true): OutcomeCode {
        logger.info {
            "Locking the following interfaces: ${if (msLock) "MS " else ""}${if (dsLock) "DS " else ""}"
        }
        val msLockCode = if (msLock) ms.lock() else OutcomeCode.CODE_000_SUCCESS
        return if (msLockCode == OutcomeCode.CODE_000_SUCCESS) {
            val dsLockCode = if (dsLock) ds.lock() else OutcomeCode.CODE_000_SUCCESS
            if (dsLockCode == OutcomeCode.CODE_000_SUCCESS) {
                OutcomeCode.CODE_000_SUCCESS
            } else {
                logger.warn { "DS lock failed, code is $dsLockCode" }
                if (msLock) unlockOrRollbackInterface("MS")
                dsLockCode
            }
        } else {
            logger.warn { "MS lock failed, code is $msLockCode" }
            msLockCode
        }
    }

    /**
     * If the [code] is a success, unlock the specified interfaces (i.e., commit the changes).
     * Otherwise, rollback to the previous status. In both cases, return the outcome code.
     */
    private fun endOfMethod(code: OutcomeCode, msLocked: Boolean = true, dsLocked: Boolean = true): OutcomeCode {
        if (code == OutcomeCode.CODE_000_SUCCESS) {
            logger.info {
                "Operation successful, unlocking the following interfaces: " +
                "${if (msLocked) "MS " else ""}${if (dsLocked) "DS " else ""}"
            }
            if (msLocked) unlockOrRollbackInterface("MS")
            if (dsLocked) unlockOrRollbackInterface("DS")
        } else {
            logger.info {
                "Operation unsuccessful (code $code), rollbacking the following interfaces: " +
                "${if (msLocked) "MS " else ""}${if (dsLocked) "DS " else ""}"
            }
            if (msLocked) unlockOrRollbackInterface("MS", true)
            if (dsLocked) unlockOrRollbackInterface("DS", true)
        }
        return code
    }

    /**
     * Verify the signature of the given [tuple]. If the
     * signature is invalid, a SignatureException will be thrown.
     */
    private fun verifyTupleSignature(tuple: Tuple) {
        if (tuple.signerType == ElementTypeWithKey.USER && tuple.signer == user.name) {
            crypto.verifySignature(
                signature = tuple.signature!!,
                bytes = tuple.getBytesForSignature(),
                verifyingKey = asymSigKeyPair.public
            )
        }
        else {
            val asymSigPublicKeyBytes = ms.getPublicKey(
                token = tuple.signer,
                elementType = tuple.signerType!!,
                asymKeyType = AsymKeysType.SIG,
            )
            val asymSigPublicKey = crypto.recreateAsymKeys(
                asymPublicKeyBytes = asymSigPublicKeyBytes,
                type = AsymKeysType.SIG
            ).public
            crypto.verifySignature(tuple.signature!!, tuple.getBytesForSignature(), asymSigPublicKey)
        }
    }

    /**
     * Unlock or rollback the specified [interfaze],
     * depending on the [rollback] flag.
     */
    private fun unlockOrRollbackInterface(interfaze: String, rollback: Boolean = false) {
        val code = when (interfaze) {
            "MS" -> if (rollback) ms.rollback() else ms.unlock()
            "DS" -> if (rollback) ds.rollback() else ds.unlock()
            else -> {
                val message = "Interface not existing"
                logger.error { message }
                throw IllegalArgumentException(message)
            }
        }
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            val message = "$interfaze lock was fine but ${if (rollback) "rollback" else "unlock"} failed, code is $code"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }



    /** Generate a random string as Client ID for the MQTT client. */
    private fun generateRandomClientId(): String {
        val charPool: List<Char> = ('a'..'z') + ('A'..'Z') + ('0'..'9')
        return (1..20)
            .map { Random.nextInt(0, charPool.size) }
            .map(charPool::get)
            .joinToString("")
    }

    // TODO log doc refactor
    /**
     * This method is called when a [message] arrives from the server in the [topic].
     *
     * This method is invoked synchronously by the MQTT client. An acknowledgment is
     * not sent back to the server until this method returns cleanly.
     *
     * If an implementation of this method throws an `Exception`, then
     * the client will be shut down. When the client is next re-connected, any QoS 1
     * or 2 messages will be redelivered by the server.
     *
     * Any additional messages which arrive while an implementation of this method
     * is running, will build up in memory, and will then back up on the network.
     *
     * If an application needs to persist data, then it should ensure the data is
     * persisted prior to returning from this method, as after returning from this
     * method, the [message] is considered to have been delivered, and will not be
     * reproducible.
     *
     * It is possible to send a new message within an implementation of this
     * callback (for example, a response to this [message]), but the implementation
     * must not disconnect the client, as it will be impossible to send an
     * acknowledgment for the [message] being processed, and a deadlock will occur.
     *
     * In this implementation, TODO
     */
    override fun messageArrived(topic: String?, message: MqttMessage?) {
        logger.info { "A message arrived on topic $topic for user ${coreParametersMQTT.username}" }

        /** The message is from the admin, and it contains the version number of the symmetric key. */
        if (message!!.isRetained) {
            logger.info { "This is the message related to the key of the topic" }

            // TODO verify the signature of the message
            val mqttProperties = message.properties.userProperties
            val enforcement = mqttProperties.first {
                it.key == SERVER.ENFORCEMENT
            }.value

            if (EnforcementType.valueOf(enforcement) == EnforcementType.COMBINED) {

                val filePermissionTuple = ms.getPermissionTuples(
                    fileName = topic, symKeyVersionNumber = String(message.payload).toInt(),
                    isAdmin = user.isAdmin,
                    offset = 0, limit = 1,
                ).first()

                /** Verify the signature of the PermissionTuple. */
                verifyTupleSignature(filePermissionTuple)

                // now we get the role tuple of the role that can read the file. With the
                // role tuple, we can decrypt the role private key. With the role private
                // key, we can decrypt the symmetric key. With the symmetric key, we can
                // decrypt the file
                val fileRoleTuple = ms.getRoleTuples(
                    username = user.name, roleName = filePermissionTuple.roleName,
                    isAdmin = user.isAdmin,
                    offset = 0, limit = 1,
                ).first()

                /** Verify the signature of the RoleTuple. */
                verifyTupleSignature(fileRoleTuple)

                // now we decrypt the keys of the role. Then, we use the keys of the role
                // to decrypt the symmetric key. Finally, we decrypt the file
                val roleAsymEncKeys = crypto.decryptAsymEncKeys(
                    asymEncKeyPair.private, fileRoleTuple.encryptedAsymEncKeys!!
                )
                val symKey = crypto.decryptSymKey(roleAsymEncKeys.private, filePermissionTuple.encryptedSymKey!!)

                mqttTopicsKeys[topic!!] = symKey
            } else {
                mqttTopicsKeys[topic!!] = null
            }
        } else {
            logger.info { "This is a message sent by users" }
            val messageContent = if (mqttTopicsKeys[topic!!] == null) {
                message.payload
            } else {
                crypto.decryptStream(mqttTopicsKeys[topic]!!, message.payload.inputStream()).readAllBytes()
            }
            mqttMessages[topic]!!.add(DSMQTTMessage(String(messageContent)))
        }
    }

    /**
     * This method is called when the server gracefully disconnects from the client
     * by sending a [disconnectResponse] packet, or when the TCP connection is lost due to a
     * network issue or if the client encounters an error.
     *
     * In this implementation, TODO
     */
    override fun disconnected(disconnectResponse: MqttDisconnectResponse?) {
        // TODO
        logger.info { "I was disconnected" }
        logger.info { disconnectResponse.toString() }
        if ((disconnectResponse?.returnCode ?: 0) == 152) {
            logger.info { "Trying to reconnect" }
            client.reconnect()
        }
    }

    /**
     * Called when an AUTH packet is received by the client. The [reasonCode]
     * can be Success (0), Continue authentication (24) or Re-authenticate (25),
     * while the [properties] are the MqttProperties to be sent, containing the
     * Authentication Method, Authentication Data and any required User
     * Defined Properties.
     *
     * In this implementation, TODO
     */
    override fun authPacketArrived(reasonCode: Int, properties: MqttProperties?) {
        logger.info { "authPacketArrived" }
        logger.info { reasonCode.toString() }
        logger.info { properties.toString() }
        // TODO
    }

    /**
     * Called when the connection to the server is completed successfully.
     * The [reconnect] value is true if the connection was the result of
     * automatic reconnect. The [serverURI] is the URI of the server that
     * the connection was made to.
     *
     * In this implementation, TODO
     */
    override fun connectComplete(reconnect: Boolean, serverURI: String?) {
        logger.info { "connectComplete" }
        logger.info { reconnect.toString() }
        logger.info { serverURI.toString() }
        // TODO
    }

    /**
     * Called when delivery for a message has been completed, and all
     * acknowledgments have been received. For QoS 0 messages it is called once the
     * message has been handed to the network for delivery. For QoS 1 it is called
     * when PUBACK is received and for QoS 2 when PUBCOMP is received. The [token]
     * will be the same [token] as that returned when the message was published.
     *
     * In this implementation, TODO
     */
    override fun deliveryComplete(token: IMqttToken?) {
        logger.info { "deliveryComplete" }
        logger.info { token.toString() }
        // TODO
    }

    /**
     * This method is called when an [exception] is thrown within the MQTT client. The
     * reasons for this may vary, from malformed packets, to protocol errors or even
     * bugs within the MQTT client itself. This callback surfaces those errors to
     * the application so that it may decide how best to deal with them.
     *
     * For example, The MQTT server may have sent a publish message with an invalid
     * topic alias, the MQTTv5 specification suggests that the client should
     * disconnect from the broker with the appropriate return code, however this is
     * completely up to the application itself.
     *
     * In this implementation, TODO
     */
    override fun mqttErrorOccurred(exception: MqttException?) {
        logger.info { "mqttErrorOccurred" }
        logger.info { exception.toString() }
        // TODO
    }
}