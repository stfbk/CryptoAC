package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.model.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.implementation.dm.*
import eu.fbk.st.cryptoac.implementation.mm.*
import io.ktor.http.cio.websocket.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.encodeToString
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.client.*
import org.eclipse.paho.mqttv5.common.MqttException
import org.eclipse.paho.mqttv5.common.MqttMessage
import org.eclipse.paho.mqttv5.common.packet.MqttProperties
import java.io.InputStream
import java.lang.IllegalStateException
import kotlin.collections.HashMap
import kotlin.collections.HashSet

private val logger = KotlinLogging.logger {}

/**
 * The CoreRBACMQTT implements a role-based cryptographic access
 * control scheme with hybrid cryptography for IoT (MQTT) scenarios.
 * It assumes the presence of a MMRedis and a MQTT broker, it is
 * configured with the given [coreParameters] and has a reference
 * to a [wss] to communicate with the client
 */
class CoreRBACMQTT(
    override val crypto: Crypto,
    override val coreParameters: CoreParametersMQTT,
) : CoreRBAC(crypto, coreParameters), MqttCallback {

    /** Interface toward the MM (i.e., the Redis database) */
    val mm: MMInterface = MMFactory.getMM(coreParameters.mmInterfaceParameters)

    /** Interface toward the DM (i.e., the MQTT broker) */
    val dm: DMInterfaceRBACMQTT = DMFactory.getDM(coreParameters.dmInterfaceParameters) as DMInterfaceRBACMQTT

    /** The user in the [coreParameters] */
    private val user: User = coreParameters.user

    /** The web socket for sending MQTT messages */
    var wss: DefaultWebSocketSession? = null

    /** Asymmetric encryption key pair */
    private val asymEncKeyPair: KeyPairCryptoAC = crypto.recreateAsymKeyPair(
        asymPublicKeyBytes = user.asymEncKeys?.public?.decodeBase64()!!,
        asymPrivateKeyBytes = user.asymEncKeys.private.decodeBase64(),
        type = AsymKeysType.ENC
    )

    /** Asymmetric signature key pair */
    private val asymSigKeyPair: KeyPairCryptoAC = crypto.recreateAsymKeyPair(
        asymPublicKeyBytes = user.asymSigKeys?.public?.decodeBase64()!!,
        asymPrivateKeyBytes = user.asymSigKeys.private.decodeBase64(),
        type = AsymKeysType.SIG
    )

    /** A map of subscribed topics with the cached key and messages to send to the client */
    val subscribedTopicsKeysAndMessages: HashMap<String, SymmetricKeysAndCachedMessages?> = hashMapOf()

    init {
        dm.client.setCallback(this)
    }

    /**
     * Initialize the admin [user]'s and return the outcome code.
     *
     * In this implementation, add the admin [user]'s keys in
     * the metadata and return the outcome code
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

        /** Lock the status of the interfaces */
        var code = startOfMethod()
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            code
        }
        else {
            code = dm.configure(coreParameters)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                endOfMethod(code)
            } else {

                /**
                 * There is no need to add the admin user, admin role or
                 * the role assignment to the MQTT broker, as these are
                 * already present in the dynsec configuration file.
                 */
                endOfMethod(mm.initAdmin(user, adminRoleTuple))
            }
        }
    }

    /**
     * Initialize the user's and then return the outcome code.
     *
     * In this implementation, add the [user]'s public key and
     * token in the metadata and then return the outcome code
     */
    override fun initUser(): OutcomeCode {
        logger.info { "Initializing token and public key of user ${user.name}" }

        /** Lock the status of the interfaces */
        val code = startOfMethod(dmLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            code
        }
        else {
            endOfMethod(mm.initUser(user), dmLocked = false)
        }
    }

    /**
     * Add a user with the given [username] by accordingly updating the metadata and
     * returning the outcome code, along with eventual configuration parameters.
     * Note that other user's metadata (e.g., public keys) can be updated by the user
     * him/herself in the "initUser" function.
     *
     * In this implementation, also add the user in the DM
     */
    override fun addUser(username: String): CodeCoreParameters {
        logger.info { "Adding user $username" }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CodeCoreParameters(OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return CodeCoreParameters(code)
        }

        /** Add the user in the MM */
        val addUserResult = mm.addUser(User(username))
        return if (addUserResult.code != OutcomeCode.CODE_000_SUCCESS) {
            CodeCoreParameters(endOfMethod(addUserResult.code))
        }
        else {
            /** Add the user in the DM */
            val mmUserInterfaceParameters = addUserResult.parameters!!
            code = dm.sendDynsecCommand(
                hashSetOf(
                    dm.getCreateClientCommand(
                        username,
                        (mmUserInterfaceParameters as MMInterfaceRBACMQTTParameters).password
                    )
                )
            )
            return if (code != OutcomeCode.CODE_000_SUCCESS) {
                CodeCoreParameters(endOfMethod(code))
            } else {
                CodeCoreParameters(
                    endOfMethod(OutcomeCode.CODE_000_SUCCESS),
                    CoreParametersMQTT(
                        user = User(name = username),
                        cryptoType = coreParameters.cryptoType,
                        mmInterfaceParameters = mmUserInterfaceParameters,
                        dmInterfaceParameters = when (coreParameters.dmInterfaceParameters.dmType) {
                            DMType.MOSQUITTO -> DMInterfaceMosquittoParameters(
                                port = coreParameters.dmInterfaceParameters.port,
                                url = coreParameters.dmInterfaceParameters.url,
                                username = username,
                                password = mmUserInterfaceParameters.password.toByteArray()
                            )
                            DMType.CRYPTOAC -> {
                                val message = "Given DM CryptoAC parameters for Core RBAC MQTT"
                                logger.error { message }
                                throw IllegalStateException(message)
                            }
                        }
                    )
                )
            }
        }
    }

    /**
     * Delete the user with the matching [username] from the metadata and
     * revoking the user from all roles. Finally, return the outcome code.
     *
     * In this implementation, also delete the user and his assignments from the DM
     */
    override fun deleteUser(username: String): OutcomeCode {
        logger.info { "Deleting user $username" }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (username == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN user" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Delete the user from the MM */
        code = mm.deleteUser(username)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Get the RoleTuples of the [username] */
        val userRoleTuples = mm.getRoleTuples(username = username, offset = 0, limit = NO_LIMIT)

        /** Revoke the [username] from all roles */
        logger.info { "Revoking the user $username from all roles" }
        run error@{
            userRoleTuples.forEach {
                code = revokeUserFromRole(it.username, it.roleName)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@error
                }
            }
        }

        /** Delete the user from the DM */
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            endOfMethod(code)
        } else {
            // TODO does this also delete the user's assignments or not?
            endOfMethod(dm.sendDynsecCommand(hashSetOf(dm.getDeleteClientCommand(username))))
        }
    }

    /**
     * Add a new role with the given [roleName] by creating the role's keys and
     * assigning the admin to the new role. Finally, return the outcome code.
     *
     * In this implementation, also add the admin-role assignment to the DM
     */
    override fun addRole(roleName: String): OutcomeCode {
        logger.info { "Adding role $roleName" }

        /** Guard clauses */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Create the new Role object for the [roleName] */
        val asymEncKeys = crypto.generateAsymEncKeys()
        val asymSigKeys = crypto.generateAsymSigKeys()
        val newRole = Role(
            name = roleName,
            asymEncKeys = AsymKeys(
                public = asymEncKeys.public.encoded.encodeBase64(),
                private = asymEncKeys.private.encoded.encodeBase64(),
                keysType = AsymKeysType.ENC
            ),
            asymSigKeys = AsymKeys(
                public = asymSigKeys.public.encoded.encodeBase64(),
                private = asymSigKeys.private.encoded.encodeBase64(),
                keysType = AsymKeysType.SIG
            )
        )

        /** Encrypt the [roleName]'s asymmetric keys with the admin's asymmetric encryption public key */
        val encryptedAsymEncKeys = crypto.encryptAsymKeys(asymEncKeyPair.public, asymEncKeys, AsymKeysType.ENC)
        val encryptedAsymSigKeys = crypto.encryptAsymKeys(asymEncKeyPair.public, asymSigKeys, AsymKeysType.SIG)

        /** Create the new RoleTuple linking the admin with the new [roleName] */
        val adminRoleTuple = RoleTuple(
            username = ADMIN, roleName = roleName,
            encryptedAsymEncKeys = encryptedAsymEncKeys, encryptedAsymSigKeys =encryptedAsymSigKeys,
        )

        /** Sign the new RoleTuple with the asymmetric signing private key of the admin */
        val signature = crypto.createSignature(adminRoleTuple.getBytesForSignature(), asymSigKeyPair.private)
        adminRoleTuple.updateSignature(
            newSignature = signature, newSigner = ADMIN, newSignerType = ElementTypeWithKey.USER
        )

        /** Update the metadata */
        code = mm.addRole(newRole)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = mm.addRoleTuples(HashSet<RoleTuple>().apply { add(adminRoleTuple) })
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        return endOfMethod(dm.sendDynsecCommand(hashSetOf(
            dm.getCreateRoleCommand(roleName),
            //dm.getAddClientRoleCommand(ADMIN, roleName) // TODO no need for this?
        )))
    }

    /**
     * Delete the role with the matching [roleName] from the metadata and
     * revoking all users and permissions from the role. Finally, return
     * the outcome code
     */
    override fun deleteRole(roleName: String): OutcomeCode {
        logger.info { "Deleting role $roleName" }

        /** Guard clauses */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Delete all RoleTuples matching the [roleName] */
        val deleteRoleTuples = mm.deleteRoleTuples(roleName)
        if (
            deleteRoleTuples != OutcomeCode.CODE_000_SUCCESS &&
            deleteRoleTuples != OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
        ) {
            return endOfMethod(deleteRoleTuples)
        }

        /** Delete the role matching the [roleName] */
        code = mm.deleteRole(roleName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Get all permission tuples associated to the deleted [roleName] */
        val rolePermissionTuples = mm.getPermissionTuples(roleName = roleName, offset = 0, limit = NO_LIMIT)

        /** Revoke all permissions from the [roleName] */
        run error@{
            rolePermissionTuples.forEach {
                code = revokePermissionFromRole(it.roleName, it.fileName, PermissionType.READWRITE)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@error
                }
            }
        }
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Delete the role from the DM */
        // TODO does this also delete the role's assignments/permissions or not?
        return endOfMethod(dm.sendDynsecCommand(hashSetOf(dm.getDeleteRoleCommand(roleName))))
    }

    /**
     * Add a new file with the given name [fileName] and [fileContent] and
     * apply the specified [enforcement]. Also, assign permission to the
     * admin over the file. Finally, return the outcome code
     *
     * In this implementation, [fileContent] is ignored. Instead, the content
     * of the retained message is the version number of the symmetric key used
     * for this topic (i.e., 1) or -1 if there is no symmetric key.
     */
    override fun addFile(fileName: String, fileContent: InputStream, enforcement: EnforcementType): OutcomeCode {
        logger.info { "Adding topic $fileName with enforcement $enforcement" }

        /** Guard clauses */
        if (fileName.isBlank()) {
            logger.warn { "Topic name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Based on the [enforcement], generate or not the symmetric key */
        val encryptedSymKey = if (enforcement == EnforcementType.COMBINED) {
            /** Encrypt the symmetric key with the administrator's asymmetric encrypting public key */
            val adminAsymEncPublicKeyBytes = mm.getPublicKey(
                token = ADMIN, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC,
            )
            val adminAsymEncPublicKey = crypto.recreateAsymPublicKey(
                asymPublicKeyBytes = adminAsymEncPublicKeyBytes!!,
                type = AsymKeysType.ENC
            )
            crypto.encryptSymKey(adminAsymEncPublicKey, crypto.generateSymKey())
        } else {
            EncryptedSymKey("null".toByteArray())
        }
        val newFile = File(fileName, enforcement = enforcement)

        /** Give read and write permission to the admin */
        val adminPermissionTuple = PermissionTuple(
            roleName = ADMIN, fileName = fileName,
            roleToken = ADMIN, fileToken = newFile.token,
            permission = PermissionType.READWRITE,
            encryptedSymKey = encryptedSymKey,
        )
        val permissionTupleSignature =
            crypto.createSignature(adminPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
        adminPermissionTuple.updateSignature(permissionTupleSignature, user.token, ElementTypeWithKey.USER)

        /** Add the metadata in the MM */
        code = mm.addFile(newFile)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = mm.addPermissionTuples(HashSet<PermissionTuple>().apply { add(adminPermissionTuple) })
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        return endOfMethod(dm.addFile(
            newFile,
            (if (enforcement == EnforcementType.COMBINED) {
                "1"
            } else {
                "-1"
            }).inputStream()
        ))
    }

    /**
     * Delete the file with the matching [fileName] from the metadata and
     * delete all the related file and permission tuples. Finally, return
     * the outcome code
     */
    override fun deleteFile(fileName: String): OutcomeCode {
        logger.info { "Deleting topic $fileName" }

        /** Guard clauses */
        if (fileName.isBlank()) {
            logger.warn { "Topic name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Delete the permission tuples matching the [fileName] from the MM */
        code = mm.deletePermissionTuples(fileName = fileName)
        if (code != OutcomeCode.CODE_000_SUCCESS && code != OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND) {
            return endOfMethod(code)
        }

        /** Delete the file matching the [fileName] from the MM */
        code = mm.deleteFile(fileName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        // TODO also remove all ACLs regarding the file?
        /** Delete the file from the DM */
        return endOfMethod(dm.deleteFile(fileName).apply {
            if (this == OutcomeCode.CODE_000_SUCCESS) {
                dm.client.unsubscribe(fileName)
            }
        })
    }

    /**
     * Assigns the user [username] to the role [roleName] by
     * creating a role tuple and then return the outcome code
     */
    override fun assignUserToRole(username: String, roleName: String): OutcomeCode {
        logger.info { "Assigning user $username to role $roleName" }

        /** Guard clauses */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "Username or role name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot assign users to the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Get the RoleTuple of the admin */
        val adminRoleTuple = mm.getRoleTuples(
            username = ADMIN, roleName = roleName,
            offset = 0, limit = 1,
        ).firstOrNull()
        if (adminRoleTuple == null) {
            logger.error { "Admin role tuple for role $roleName not found. Probably the role does not exist" }
            return endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
        verifyTupleSignature(adminRoleTuple)

        /** Get the asymmetric encryption private keys of the [roleName] */
        val asymEncKeys = crypto.decryptAsymEncKeys(
            encryptingKey = asymEncKeyPair.public,
            decryptingKey = asymEncKeyPair.private,
            encryptedAsymEncKeys = EncryptedAsymKeys(
                private = adminRoleTuple.encryptedAsymEncKeys!!.private,
                public  = adminRoleTuple.encryptedAsymEncKeys.public,
                keysType = AsymKeysType.ENC,
            )
        )
        val asymSigKeys = crypto.decryptAsymSigKeys(
            encryptingKey = asymEncKeyPair.public,
            decryptingKey = asymEncKeyPair.private,
            encryptedAsymSigKeys = EncryptedAsymKeys(
                private = adminRoleTuple.encryptedAsymSigKeys!!.private,
                public  = adminRoleTuple.encryptedAsymSigKeys.public,
                keysType = AsymKeysType.SIG,
            )
        )

        /** Create the new RoleTuple binding the [username] and the [roleName] */
        val userAsymEncPublicKeyBytes = mm.getPublicKey(
            name = username, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
        )

        /** If we did not find the user's key, it means that the user does not exist (or was deleted) */
        if (userAsymEncPublicKeyBytes == null) {
            logger.warn { "User's key not found. Checking the user's status" }
            val status = mm.getStatus(username, ElementTypeWithStatus.USER)
            return if (status != null) {
                logger.warn { "User's status is $status" }
                when (status) {
                    ElementStatus.INCOMPLETE -> endOfMethod(OutcomeCode.CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED)
                    ElementStatus.OPERATIONAL -> {
                        val message = "User's $username key not found but user is operational"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    ElementStatus.DELETED -> endOfMethod(OutcomeCode.CODE_013_USER_WAS_DELETED)
                }
            } else {
                endOfMethod(OutcomeCode.CODE_004_USER_NOT_FOUND)
            }
        }

        val userAsymEncPublicKey = crypto.recreateAsymPublicKey(
            asymPublicKeyBytes = userAsymEncPublicKeyBytes, type = AsymKeysType.ENC
        )
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

        code = mm.addRoleTuples(HashSet<RoleTuple>().apply { add(newRoleTuple) })
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            endOfMethod(code)
        } else {
            /** Add the user to the role in the DM */
            return endOfMethod(dm.sendDynsecCommand(hashSetOf(dm.getAddClientRoleCommand(username, roleName))))
        }
    }

    /**
     * Revoke the user [username] from the role [roleName] by updating
     * role and permission tuples and then return the outcome code
     */
    override fun revokeUserFromRole(username: String, roleName: String): OutcomeCode {
        logger.info { "Revoking user $username from role $roleName" }

        /** Guard clauses */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "Username or role name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (username == ADMIN || roleName == ADMIN) {
            logger.warn { "Cannot revoke the $ADMIN user or role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Get the RoleTuples of [roleName] */
        val roleRoleTuples = mm.getRoleTuples(roleName = roleName, offset = 0, limit = NO_LIMIT)
        if (roleRoleTuples.isEmpty()) {
            logger.warn { "Role tuple not found. Probably the role does not exists" }
            return endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** Get the RoleTuple of [username] and [roleName] */
        val userRoleTuple = roleRoleTuples.firstOrNull { it.username == username }
        if (userRoleTuple == null) {
            logger.warn { "Role tuple of user $username and role $roleName not found" }
            return endOfMethod(OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND)
        }
        verifyTupleSignature(userRoleTuple)

        /** Get the role tuple of the admin and [roleName] */
        val adminRoleTuple = roleRoleTuples.first { it.username == ADMIN }

        /** Verify the signature of the RoleTuple of the admin for [roleName] */
        verifyTupleSignature(adminRoleTuple)

        /** Update the version number and provide new keys for the RoleTuples (except for [username]'s one) */
        logger.debug { "Updating role tuples with new keys and version number" }
        val newAsymEncKeys = crypto.generateAsymEncKeys()
        // TODO when updating role's keys, update also the token and old signatures
        val newAsymSigKeys = crypto.generateAsymSigKeys()
        val newRoleTuples = HashSet<RoleTuple>()
        val oldRoleVersionNumber = userRoleTuple.roleVersionNumber
        val newRoleVersionNumber = oldRoleVersionNumber + 1
        for (currentTuple in roleRoleTuples.filter { it.username != username }) {

            /** Verify the signature of the current RoleTuple */
            verifyTupleSignature(currentTuple)

            /** Get the key of the user of the current RoleTuple */
            val userAsymEncPublicKeyBytes = mm.getPublicKey(
                name = currentTuple.username, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
            )
            val userAsymEncPublicKey = crypto.recreateAsymPublicKey(
                asymPublicKeyBytes = userAsymEncPublicKeyBytes!!,
                type = AsymKeysType.ENC
            )

            /** Encrypt the new asym keys with the public key of the user */
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

        /** Delete the old role tuples of [roleName] */
        logger.debug { "Deleting the outdated role tuples" }
        code = mm.deleteRoleTuples(roleName = roleName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the new role tuples of [roleName] */
        logger.debug { "Adding the new role tuples" }
        code = mm.addRoleTuples(newRoleTuples)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }


        /** Get the [roleName] asymmetric encryption keys */
        val oldRoleAsymEncKeys =
            crypto.decryptAsymEncKeys(
                encryptingKey = asymEncKeyPair.public,
                decryptingKey = asymEncKeyPair.private,
                encryptedAsymEncKeys = adminRoleTuple.encryptedAsymEncKeys!!
            )

        /** Get the PermissionTuples to update */
        logger.debug { "Getting the permissions tuples to update" }
        val permissionTuples = mm.getPermissionTuples(roleName = roleName, offset = 0, limit = NO_LIMIT)
        if (permissionTuples.isNotEmpty()) {

            /** The key is the file name, the value is the related permission tuple */
            val filesAccessibleByRole = HashMap<String, PermissionTuple>()

            /** Collect the names of the files that [roleName] has access to */
            for (currentTuple in permissionTuples) {
                verifyTupleSignature(currentTuple)
                filesAccessibleByRole[currentTuple.fileName] = currentTuple
            }

            /** For each file the revoked [username] had access to through [roleName] */
            val newPermissionTuples = HashSet<PermissionTuple>()
            for (fileAccessibleByRole in filesAccessibleByRole) {
                val fileName = fileAccessibleByRole.key
                val fileToken = mm.getToken(
                    name = fileName, type = ElementTypeWithStatus.FILE,
                )
                val currentPermissionTuple = fileAccessibleByRole.value

                val latestFileVersionNumber = mm.getVersionNumber(
                    name = fileName, elementType = ElementTypeWithVersionNumber.FILE,
                )
                // TODO when updating file's key, update also the token
                val newSymKey = crypto.generateSymKey()

                /** Update the PermissionTuple of the [roleName] */
                val tupleFileVersionNumber = currentPermissionTuple.symKeyVersionNumber
                val tupleSymKey = if (tupleFileVersionNumber == latestFileVersionNumber) {
                    crypto.encryptSymKey(newAsymEncKeys.public, newSymKey)
                } else {
                    val oldSymKey =
                        crypto.decryptSymKey(
                            encryptingKey = oldRoleAsymEncKeys.public,
                            decryptingKey = oldRoleAsymEncKeys.private,
                            encryptedSymKey = currentPermissionTuple.encryptedSymKey!!
                        )
                    crypto.encryptSymKey(newAsymEncKeys.public, oldSymKey)
                }

                val newRolePermissionTuple = PermissionTuple(
                    roleName = roleName, fileName = fileName,
                    roleVersionNumber = newRoleVersionNumber,
                    symKeyVersionNumber = currentPermissionTuple.symKeyVersionNumber + 1,
                    permission = currentPermissionTuple.permission,
                    encryptedSymKey = tupleSymKey,
                    roleToken = currentPermissionTuple.roleToken, fileToken = fileToken!!,
                )
                val roleSignature =
                    crypto.createSignature(newRolePermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
                newRolePermissionTuple.updateSignature(roleSignature, ADMIN, ElementTypeWithKey.USER)
                newPermissionTuples.add(newRolePermissionTuple)


                /** Get the PermissionTuples of all other roles which can access the current file */
                val othersPermissionTuples = mm.getPermissionTuples(
                    fileName = fileName, roleNameToExclude = roleName,
                    symKeyVersionNumber = latestFileVersionNumber,
                    offset = 0, limit = NO_LIMIT,
                )

                /** Update the PermissionTuples */
                for (currentTuple in othersPermissionTuples) {

                    verifyTupleSignature(currentTuple)

                    val roleAsymEncPublicKeyBytes = mm.getPublicKey(
                        name = currentTuple.roleName, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                    )
                    val roleAsymEncPublicKey = crypto.recreateAsymPublicKey(
                        asymPublicKeyBytes = roleAsymEncPublicKeyBytes!!,
                        type = AsymKeysType.ENC
                    )
                    val tuplesAsymKey = crypto.encryptSymKey(roleAsymEncPublicKey, newSymKey)

                    // finally, create the new permission tuple
                    val newPermissionTuple = PermissionTuple(
                        roleName = currentTuple.roleName, fileName = fileName,
                        roleVersionNumber = currentTuple.roleVersionNumber,
                        symKeyVersionNumber = latestFileVersionNumber!! + 1,
                        permission = currentTuple.permission,
                        encryptedSymKey = tuplesAsymKey,
                        roleToken = currentTuple.roleToken, fileToken = fileToken
                    )
                    val signature =
                        crypto.createSignature(newPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
                    newPermissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
                    newPermissionTuples.add(newPermissionTuple)
                }

                code = mm.incrementSymEncVersionNumberByOne(fileName)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code)
                }
            }

            code = mm.deletePermissionTuples(roleName = roleName, roleVersionNumber = oldRoleVersionNumber)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }

            code = mm.addPermissionTuples(newPermissionTuples)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }
        }

        code = mm.updateRoleAsymKeys(
            roleName = roleName,
            newAsymEncPublicKey = newAsymEncKeys.public, newAsymSigPublicKey = newAsymSigKeys.public
        )
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            endOfMethod(code)
        } else {
            /** Remove the user from the role in the DM */
            endOfMethod(dm.sendDynsecCommand(hashSetOf(dm.getRemoveClientRoleCommand(username, roleName))))
        }
    }

    /**
     * Assigns the permission [permission] to the role [roleName] over the file
     * [fileName] by creating a permission tuple and then return the outcome code
     */
    override fun assignPermissionToRole(roleName: String, fileName: String, permission: PermissionType): OutcomeCode {
        logger.info { "Assigning permission $permission to role $roleName over topic $fileName" }

        // TODO check only R or RW permission is given (issues when re-keying, etc)

        /** Guard clauses */
        if (roleName.isBlank() || fileName.isBlank()) {
            logger.warn { "Role or topic name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Get the PermissionTuple of the admin */
        logger.debug { "Getting the permission tuple of the admin" }
        val adminPermissionTuple = mm.getPermissionTuples(
            roleName = ADMIN, fileName = fileName,
            offset = 0, limit = NO_LIMIT,
        ).firstOrNull()
        if (adminPermissionTuple == null) {
            logger.warn { "Admin permission tuple for topic $fileName not found. Probably the topic does not exist" }
            return endOfMethod(OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
        verifyTupleSignature(adminPermissionTuple)

        logger.debug { "Getting the role version number" }
        val latestRolePermissionNumber = mm.getVersionNumber(
            name = roleName, elementType = ElementTypeWithVersionNumber.ROLE
        )
        if (latestRolePermissionNumber == null) {
            logger.warn { "Role version number not found. Probably the role does not exist" }
            return endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }


        /**
         * Either the role already has a permission over the file or it doesn't. In the first case,
         * we just have to update the existing permission tuple with the new permission. Otherwise,
         * we need to create a new permission tuple
         */
        logger.debug { "Getting previous permission tuples of role $roleName" }
        val previousPermissionOfRoleOverFile = mm.getPermissionTuples(
            roleName = roleName, fileName = fileName,
            roleVersionNumber = latestRolePermissionNumber,
            offset = 0, limit = NO_LIMIT,
        ).firstOrNull()

        if (previousPermissionOfRoleOverFile != null) {
            logger.debug { "Previous permission tuple exists for role $roleName over topic $fileName" }

            verifyTupleSignature(previousPermissionOfRoleOverFile)

            if (permission == PermissionType.READ &&
                (previousPermissionOfRoleOverFile.permission == PermissionType.READWRITE ||
                        previousPermissionOfRoleOverFile.permission == PermissionType.READ)
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

            code = mm.updatePermissionTuple(upgradedPermissionTuple)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }
        }
        else {
            logger.debug { "Previous permission tuple does not exist for role $roleName over topic $fileName" }

            /** Check the enforcement type */
            val file = mm.getFiles(
                fileName = fileName,
            ).first()
            val encryptedAsymKey = when (file.enforcement) {
                EnforcementType.COMBINED ->  {
                    logger.debug { "Enforcement for topic $fileName is combined" }
                    val asymKey = crypto.decryptSymKey(
                        encryptingKey = asymEncKeyPair.public,
                        decryptingKey = asymEncKeyPair.private,
                        encryptedSymKey = adminPermissionTuple.encryptedSymKey!!
                    )
                    val roleAsymEncPublicKeyBytes = mm.getPublicKey(
                        name = roleName, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                    )
                    val roleAsymEncPublicKey = crypto.recreateAsymPublicKey(
                        asymPublicKeyBytes = roleAsymEncPublicKeyBytes!!,
                        type = AsymKeysType.ENC
                    )

                    crypto.encryptSymKey(roleAsymEncPublicKey, asymKey)
                }
                EnforcementType.TRADITIONAL -> {
                    logger.debug { "Enforcement for topic $fileName is traditional" }
                    adminPermissionTuple.encryptedSymKey
                }
            }

            logger.debug { "Creating new permission tuple" }
            val newPermissionTuple = PermissionTuple(
                roleName = roleName, fileName = fileName,
                permission = permission,
                roleVersionNumber = latestRolePermissionNumber,
                roleToken = mm.getToken(name = roleName, type = ElementTypeWithStatus.ROLE)!!,
                fileToken = adminPermissionTuple.fileToken,
                encryptedSymKey = encryptedAsymKey,
                symKeyVersionNumber = adminPermissionTuple.symKeyVersionNumber,
            )
            val signature =
                crypto.createSignature(newPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
            newPermissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)

            code = mm.addPermissionTuples(HashSet<PermissionTuple>().apply { add(newPermissionTuple) })
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }
        }


        // TODO refactor computeACLTypesFromPermission
        /** Add the role to the file in the DM */
        val permissions = when (permission) {
            PermissionType.READ -> listOf(AclType.publishClientReceive, AclType.subscribePattern, AclType.unsubscribePattern)
            PermissionType.READWRITE -> listOf(AclType.publishClientReceive, AclType.publishClientSend, AclType.subscribePattern, AclType.unsubscribePattern)
            PermissionType.WRITE -> listOf(AclType.publishClientSend, AclType.subscribePattern, AclType.unsubscribePattern)
        }
        val commands = hashSetOf<String>()
        permissions.forEach {
            commands.add(dm.getAddRoleACLCommand(roleName, it, fileName))
        }
        return endOfMethod(dm.sendDynsecCommand(commands))
    }

    /**
     * Revoke the [permission] from the [roleName] over the [fileName]
     * by updating permission tuples and then return the outcome code
     */
    override fun revokePermissionFromRole(roleName: String, fileName: String, permission: PermissionType): OutcomeCode {
        logger.info { "Revoking permission $permission from role $roleName over topic $fileName" }

        /** Guard clauses */
        if (roleName.isBlank() || fileName.isBlank()) {
            logger.warn { "Role or topic name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot revoke the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        if (permission == PermissionType.WRITE) {

            // fetch the permission tuples related to the given role so to remove the 'Write' permission from each tuple
            logger.debug { "Getting permission tuple to update for role $roleName over topic $fileName" }
            val permissionTupleToUpdate = mm.getPermissionTuples(
                roleName = roleName, fileName = fileName,
                offset = 0, limit = NO_LIMIT,
            ).firstOrNull()

            if (permissionTupleToUpdate == null) {
                logger.warn { "Permission tuple of role $roleName and topic $fileName not found" }
                return endOfMethod(OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
            }

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

            code = mm.updatePermissionTuple(newPermissionTuple)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }
        }
        else if (permission == PermissionType.READWRITE) {

            logger.debug { "Deleting all permission tuples for role $roleName over topic $fileName" }
            code = mm.deletePermissionTuples(roleName = roleName, fileName = fileName)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }

            // TODO when updating file's key, update also the token
            val newSymKey = crypto.generateSymKey()
            val fileLatestVersionNumber = mm.getVersionNumber(
                name = fileName, elementType = ElementTypeWithVersionNumber.FILE
            )

            // get the permission tuples of other roles to update the symmetric key
            logger.debug { "Updating permission tuples of other roles over topic $fileName" }
            val latestPermissionTuples = mm.getPermissionTuples(
                fileName = fileName, symKeyVersionNumber = fileLatestVersionNumber,
                roleNameToExclude = roleName,
                offset = 0, limit = NO_LIMIT,
            )

            for (latestPermissionTuple in latestPermissionTuples) {
                verifyTupleSignature(latestPermissionTuple)

                val roleEncPublicKeyBytes = mm.getPublicKey(
                    name = latestPermissionTuple.roleName, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                )
                val roleEncPublicKey = crypto.recreateAsymPublicKey(
                    asymPublicKeyBytes = roleEncPublicKeyBytes!!,
                    type = AsymKeysType.ENC
                )
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

                code = mm.addPermissionTuples(HashSet<PermissionTuple>().apply { add(newPermissionTuple) })
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code)
                }
            }

            code = mm.incrementSymEncVersionNumberByOne(fileName)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code)
            }
        }
        else {
            logger.warn { "Permission $permission is invalid to revoke" }
            return endOfMethod(OutcomeCode.CODE_016_INVALID_PERMISSION)
        }

        // TODO refactor computeACLTypesFromPermission
        /** Remove the role from the topic in the DM */
        val permissions = when (permission) {
            PermissionType.READ -> listOf(AclType.publishClientReceive, AclType.subscribePattern)
            PermissionType.READWRITE -> listOf(AclType.publishClientReceive, AclType.publishClientSend, AclType.subscribePattern)
            PermissionType.WRITE -> listOf(AclType.publishClientSend, AclType.subscribePattern)
        }
        val commands = hashSetOf<String>()
        permissions.forEach {
            commands.add(dm.getRemoveRoleACLCommand(roleName, it, fileName))
        }
        return endOfMethod(dm.sendDynsecCommand(commands))
    }

    /**
     * Read the file [fileName] by downloading and decrypting
     * its content, if possible, and return the outcome code.
     *
     * In this implementation, just subscribe to the topic
     * with the given [fileName]
     */
    override fun readFile(fileName: String): CodeFile {
        logger.info { "User ${user.name} is asking to subscribe to topic $fileName" }

        /** Guard clauses */
        if (fileName.isBlank()) {
            logger.warn { "Topic name is blank" }
            return CodeFile(OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the interfaces */
        val code = startOfMethod(mmLock = false)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return CodeFile(code)
        }

        /** Send anyway the subscribe request in case of policy updates */
        dm.readFile(fileName)
        return CodeFile(endOfMethod(OutcomeCode.CODE_000_SUCCESS, mmLocked = false), null)
    }

    /**
     * Write the new [fileContent] for the file [fileName],
     * if possible, and return the outcome code.
     *
     * In this implementation, check whether the client
     * is subscribed to the topic with name [fileName].
     * If so, check the enforcement type and eventually
     * use the cached key to encrypt the message, then
     * publish. Otherwise, fetch the enforcement type
     * and eventually the key from the MM.
     */
    override fun writeFile(fileName: String, fileContent: InputStream): OutcomeCode {
        /**
         * Synchronize on the [subscribedTopicsKeysAndMessages] object
         * to avoid interference with the messageArrived callback function
         **/
        synchronized(subscribedTopicsKeysAndMessages) {

            logger.info { "Publishing a message in topic $fileName by user ${user.name}" }

            /** Guard clauses */
            if (fileName.isBlank()) {
                logger.warn { "Topic name is blank" }
                return OutcomeCode.CODE_020_INVALID_PARAMETER
            }

            /** Lock the status of the interfaces */
            val code = startOfMethod()
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return code
            }

            val enforcement = if (subscribedTopicsKeysAndMessages.containsKey(fileName)) {
                /**
                 * It means that we are publishing to a topic while
                 * being subscribed. Therefore, we are sure that the
                 * key and the enforcement type of the topic are always
                 * up-to-date (because the administrator publishes
                 * retained messages for distributing updates)
                 */
                logger.debug { "Getting enforcement from cache" }
                subscribedTopicsKeysAndMessages[fileName]!!.enforcement
            } else {

                /**
                 * It means that we are publishing to a topic without
                 * being subscribed. Therefore, we have to check
                 * every time whether the key of the topic is still
                 * up-to-date
                 */
                logger.debug { "Getting enforcement from MM" }
                val file = mm.getFiles(
                    fileName = fileName,
                    isAdmin = false,
                ).firstOrNull()
                if (file == null) {
                    logger.warn {
                        "File not found. Either ${user.name} does not have " +
                        "access to topic $fileName or topic does not exist"
                    }
                    return endOfMethod(OutcomeCode.CODE_006_FILE_NOT_FOUND)
                }
                file.enforcement
            }

            return when (enforcement) {
                /** MQTT messages should not be encrypted, i.e., just publish it */
                EnforcementType.TRADITIONAL -> {
                    logger.debug { "Enforcement is TRADITIONAL, no need to encrypt" }
                    endOfMethod(dm.writeFile(File(fileName, enforcement = enforcement), fileContent))
                }
                /** MQTT messages should be encrypted, i.e., get the key to do it */
                EnforcementType.COMBINED -> {
                    logger.debug { "Enforcement is COMBINED, encrypt the message" }
                    val codeAndKey = if (subscribedTopicsKeysAndMessages.containsKey(fileName)) {
                        logger.debug { "Getting key from cache" }
                        CodeSymmetricKeyCryptoAC(
                            key = subscribedTopicsKeysAndMessages[fileName]!!.key
                        )
                    } else {
                        logger.debug { "Getting key from MM" }
                        getLatestSymmetricKey(topic = fileName)
                    }

                    if (codeAndKey.code != OutcomeCode.CODE_000_SUCCESS) {
                        endOfMethod(codeAndKey.code)
                    } else {
                        val messageStream = crypto.encryptStream(codeAndKey.key!!, fileContent)
                        endOfMethod(dm.writeFile(File(fileName, enforcement = enforcement), messageStream))
                    }
                }
            }
        }
    }



    /**
     * Retrieve the list of users,
     * along with the outcome code
     */
    override fun getUsers(): CodeUsers {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting users" }

        /** Lock the status of the interfaces */
        val code = startOfMethod(dmLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            CodeUsers(code)
        } else {
            val users = mm.getUsers()
            CodeUsers(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dmLocked = false), users)
        }
    }

    /**
     * Retrieve the list of roles,
     * along with the outcome code
     */
    override fun getRoles(): CodeRoles {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting roles" }

        /** Lock the status of the interfaces */
        val code = startOfMethod(dmLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            CodeRoles(code)
        } else {
            val roles = mm.getRoles()
            CodeRoles(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dmLocked = false), roles)
        }
    }

    /**
     * Retrieve the list of files,
     * along with the outcome code
     */
    override fun getFiles(): CodeFiles {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting topics" }

        /** Lock the status of the interfaces */
        val code = startOfMethod(dmLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            CodeFiles(code)
        } else {
            val files = mm.getFiles()
            CodeFiles(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dmLocked = false), files)
        }
    }

    /**
     * Retrieve and return the role tuples of the [username] and
     * the [roleName], if given, along with the outcome code
     */
    override fun getAssignments(username: String?, roleName: String?): CodeRoleTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting role tuples" }

        /** Lock the status of the interfaces */
        val code = startOfMethod(dmLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            CodeRoleTuples(code)
        } else {
            val roleTuples = mm.getRoleTuples(
                username = username, roleName = roleName,
                isAdmin = user.isAdmin,
                offset = 0, limit = NO_LIMIT,
            )
            CodeRoleTuples(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dmLocked = false), roleTuples)
        }
    }

    /**
     * Retrieve and return the permission tuples of the [username],
     * [roleName] and [fileName], if given, along with the outcome code
     */
    override fun getPermissions(username: String?, roleName: String?, fileName: String?): CodePermissionTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting permission tuples" }

        /** Lock the status of the interfaces */
        val code = startOfMethod(dmLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            CodePermissionTuples(code)
        } else {
            val permissionTuples = HashSet<PermissionTuple>()
            mm.getRoleTuples(
                username = username, roleName = roleName,
                isAdmin = user.isAdmin,
                offset = 0, limit = NO_LIMIT).forEach {
                permissionTuples.addAll(
                    mm.getPermissionTuples(
                        roleName = it.roleName, fileName = fileName,
                        isAdmin = user.isAdmin,
                        offset = 0, limit = NO_LIMIT,
                    )
                )
            }
            CodePermissionTuples(endOfMethod(OutcomeCode.CODE_000_SUCCESS, dmLocked = false), permissionTuples)
        }
    }



    /**
     * Lock the specified interfaces
     * and return the outcome code
     */
    private fun startOfMethod(mmLock: Boolean = true, dmLock: Boolean = true): OutcomeCode {
        logger.info {
            "Locking the following interfaces: ${if (mmLock) "MM " else ""}${if (dmLock) "DM " else ""}"
        }
        val mmLockCode = if (mmLock) mm.lock() else OutcomeCode.CODE_000_SUCCESS
        return if (mmLockCode == OutcomeCode.CODE_000_SUCCESS) {
            val dmLockCode = if (dmLock) dm.lock() else OutcomeCode.CODE_000_SUCCESS
            if (dmLockCode == OutcomeCode.CODE_000_SUCCESS) {
                OutcomeCode.CODE_000_SUCCESS
            } else {
                logger.warn { "DM lock failed, code is $dmLockCode" }
                if (mmLock) unlockOrRollbackInterface("MS")
                dmLockCode
            }
        } else {
            logger.warn { "MM lock failed, code is $mmLockCode" }
            mmLockCode
        }
    }

    /**
     * If the [code] is a success, unlock the specified interfaces (i.e., commit the changes).
     * Otherwise, rollback to the previous status. In both cases, return the outcome code
     */
    private fun endOfMethod(code: OutcomeCode, mmLocked: Boolean = true, dmLocked: Boolean = true): OutcomeCode {
        if (code == OutcomeCode.CODE_000_SUCCESS) {
            logger.info {
                "Operation successful, unlocking the following interfaces: " +
                        "${if (mmLocked) "MM " else ""}${if (dmLocked) "DM " else ""}"
            }
            if (mmLocked) unlockOrRollbackInterface("MS")
            if (dmLocked) unlockOrRollbackInterface("DM")
        } else {
            logger.info {
                "Operation unsuccessful (code $code), rollbacking the following interfaces: " +
                        "${if (mmLocked) "MM " else ""}${if (dmLocked) "DM " else ""}"
            }
            if (mmLocked) unlockOrRollbackInterface("MS", true)
            if (dmLocked) unlockOrRollbackInterface("DM", true)
        }
        return code
    }

    /**
     * Verify the signature of the given [tuple]. If the
     * signature is invalid, a SignatureException will be thrown
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
            val asymSigPublicKeyBytes = mm.getPublicKey(
                token = tuple.signer,
                elementType = tuple.signerType!!,
                asymKeyType = AsymKeysType.SIG,
            )
            val asymSigPublicKey = crypto.recreateAsymPublicKey(
                asymPublicKeyBytes = asymSigPublicKeyBytes!!,
                type = AsymKeysType.SIG
            )
            crypto.verifySignature(tuple.signature!!, tuple.getBytesForSignature(), asymSigPublicKey)
        }
    }

    /**
     * Unlock or rollback the specified [interfaze],
     * depending on the [rollback] flag
     */
    private fun unlockOrRollbackInterface(interfaze: String, rollback: Boolean = false) {
        val code = when (interfaze) {
            "MS" -> if (rollback) mm.rollback() else mm.unlock()
            "DM" -> if (rollback) dm.rollback() else dm.unlock()
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
    override fun messageArrived(topic: String, message: MqttMessage) {
        /**
         * Synchronize on the [subscribedTopicsKeysAndMessages] object
         * to avoid interference with the messageArrived callback function
         **/
        synchronized(subscribedTopicsKeysAndMessages) {

            try {
                logger.info { "Topic $topic (user ${user.name}): new message" }


                /**
                 * The message is from the admin, and it contains
                 * the (latest) version number of the symmetric key
                 */
                if (message.isRetained) {
                    // TODO verify the signature of the message and that the admin sent it
                    if (message.payload.isEmpty()) {
                        logger.info { "The payload is empty (perhaps the topic is being deleted?)" }
                        dm.client.unsubscribe(topic)
                    } else {


                        // TODO use properties for embedding the signature, the version number
                        //  and the enforcement type
                        val versionNumber = String(message.payload).toInt()
                        val enforcement = when(versionNumber) {
                            -1 -> EnforcementType.TRADITIONAL
                            else -> EnforcementType.COMBINED
                        }
                        logger.info { "Retained message (versionNumber $versionNumber, enforcement $enforcement)" }

                        when (enforcement) {
                            EnforcementType.COMBINED -> {
                                logger.info { "Enforcement is combined" }


                                /**
                                 * This is not the first retained message for this
                                 * topic that the user receives. Probably, it is
                                 * an update of the symmetric key. We check that
                                 * the enforcement type is the same as before (i.e.,
                                 * [EnforcementType.COMBINED] and that the version
                                 * number is greater than the previous one.
                                 */
                                if (subscribedTopicsKeysAndMessages.containsKey(topic)) {
                                    logger.info { "Update of cached key" }


                                    if (subscribedTopicsKeysAndMessages[topic]!!.enforcement != EnforcementType.COMBINED) {
                                        // TODO this is wrong, unless we allow the admin to dynamically
                                        //  change the security level of a topic
                                        logger.error { """
                                            this is wrong, unless we allow the admin to dynamically
                                            change the security level of a topic
                                        """.trimIndent()
                                        }
                                        throw java.lang.Exception("asdfg")
                                        // TODO decide what to do (in any case, stop here the execution)
                                    }

                                    if (subscribedTopicsKeysAndMessages[topic]!!.versionNumber > versionNumber) {
                                        // TODO this is wrong
                                        logger.error { """
                                            this is wrong
                                        """.trimIndent()
                                        }
                                        throw java.lang.Exception("asdfghjntr")
                                        // TODO decide what to do (in any case, stop here the execution)
                                    }

                                    if (subscribedTopicsKeysAndMessages[topic]!!.versionNumber == versionNumber) {
                                        // TODO this is warning (perhaps reconnect?)
                                        logger.error { """
                                            this is warning (perhaps reconnect
                                        """.trimIndent()
                                        }
                                        throw java.lang.Exception("aqwertgjtrs")
                                        // TODO decide what to do (in any case, stop here the execution)
                                    }

                                    logger.info { "Notification of a new symmetric key" }
                                }
                                /**
                                 * Probably, the user just subscribed to the topic. As
                                 * such, add the topic in the [subscribedTopicsKeysAndMessages]
                                 * variable and proceed to get the symmetric key
                                 */
                                else {
                                    logger.info { "Probably just subscribed, fetch the key" }
                                    subscribedTopicsKeysAndMessages[topic] = SymmetricKeysAndCachedMessages(
                                        key = null,
                                        versionNumber = versionNumber,
                                        enforcement = enforcement
                                    )
                                }

                                /**
                                 * Lock the mm. If an error occurs, send an
                                 * error message with the code to the client
                                 * TODO do what with the key or eventual new messages?
                                 */
                                val lockCode = startOfMethod(dmLock = false)
                                if (lockCode != OutcomeCode.CODE_000_SUCCESS) {
                                    logger.warn { "Could not lock ($lockCode)" }
                                    val lockMessage = MQTTMessage(lockCode.toString(), topic, true)
                                    cacheOrSendMessage(topic, lockMessage)
                                }


                                /**
                                 * Get the key. If an error occurs, send an
                                 * error message with the code to the client
                                 * TODO do what with the key or eventual new messages?
                                 */
                                val symKey = getLatestSymmetricKey(
                                    topic = topic,
                                    versionNumber = versionNumber
                                )
                                if (symKey.code != OutcomeCode.CODE_000_SUCCESS) {
                                    logger.warn { "Error while retrieving the key (${symKey.code})" }
                                    subscribedTopicsKeysAndMessages[topic]!!.key = null
                                    val errorMessage = MQTTMessage(symKey.code.toString(), topic, true)
                                    cacheOrSendMessage(topic, errorMessage)
                                } else {
                                    subscribedTopicsKeysAndMessages[topic]!!.key = symKey.key
                                }


                                /**
                                 * Unlock the mm. If an error occurs, send an
                                 * error message with the code to the client
                                 * TODO do what with the key or eventual new messages?
                                 */
                                val unlockCode = endOfMethod(symKey.code, dmLocked = false)
                                if (unlockCode != OutcomeCode.CODE_000_SUCCESS) {
                                    val unlockMessage = MQTTMessage(unlockCode.toString(), topic, true)
                                    cacheOrSendMessage(topic, unlockMessage)
                                }

                            }


                            EnforcementType.TRADITIONAL -> {
                                logger.info { "Enforcement is traditional" }

                                /**
                                 * This is not the first retained message for this
                                 * topic that the user receives. In a topic with
                                 * no cryptographic protection, this should not happen
                                 * TODO not unless we allow the admin to dynamically
                                 *  change the security level of a topic
                                 */
                                if (subscribedTopicsKeysAndMessages.containsKey(topic)) {
                                    logger.error { """
                                        This is not the first retained message for this
                                        topic that the user receives. In a topic with
                                        no cryptographic protection, this should not happen
                                    """.trimIndent() }
                                }
                                /** Probably, the user just subscribed to the topic */
                                else {
                                    subscribedTopicsKeysAndMessages[topic] = SymmetricKeysAndCachedMessages(
                                        key = null,
                                        versionNumber = -1,
                                        enforcement = enforcement,
                                    )
                                }
                            }
                        }
                    }
                } else {
                    logger.info { "Normal message" }
                    if (subscribedTopicsKeysAndMessages.containsKey(topic)) {
                        val topicKey = subscribedTopicsKeysAndMessages[topic]!!
                        val messageContent = when (topicKey.enforcement) {
                            EnforcementType.TRADITIONAL -> {
                                logger.debug { "The message is not encrypted" }
                                message.payload
                            }
                            EnforcementType.COMBINED -> {
                                logger.debug { "The message is encrypted" }
                                if (topicKey.key == null) {
                                    // TODO key retrieval (see below)
                                    throw java.lang.Exception("""
                                        it means that the last retrieval of the 
                                        key went wrong, but in the meantime a message
                                        arrived. what to do? I'd say either cache it 
                                        and try to get the key again OR send it to
                                        the user even if encrypted
                                    """.trimIndent())
                                } else {
                                    crypto.decryptStream(
                                        topicKey.key!!, message.payload.inputStream()
                                    ).readAllBytes()
                                }
                            }
                        }
                        val receivedMessage = MQTTMessage(String(messageContent), topic, false)
                        cacheOrSendMessage(topic, receivedMessage)
                    }
                    else {
                        // TODO iit means that the user subscribed, but no retained
                        //  message was delivered by the broker... send error to the client
                    }
                }
            } catch (e: Exception) {
                logger.error { "Exception in messageArrived MQTT callback function: ${e.localizedMessage}" }
                val exceptionMessage = MQTTMessage(OutcomeCode.CODE_047_UNEXPECTED.toString(), topic, true)
                cacheOrSendMessage(topic, exceptionMessage)
            }// TODO do try catch also in the other functions of the callbacks
        }
    }

    /**
     * This method is called when the server gracefully disconnects from the client
     * by sending a [disconnectResponse] packet, or when the TCP connection is lost due to a
     * network issue or if the client encounters an error.
     *
     * In this implementation, try to reconnect to the broker
     */
    override fun disconnected(disconnectResponse: MqttDisconnectResponse?) {
        logger.warn { "MQTT client for ${user.name} was disconnected: ${disconnectResponse.toString()}" }
        logger.info { "Trying to reconnect" }
        dm.client.connectSync(reconnecting = true)
        // TODO catch exceptions?
    }

    /**
     * Called when an AUTH packet is received by the client. The [reasonCode]
     * can be Success (0), Continue authentication (24) or Re-authenticate (25),
     * while the [properties] are the MqttProperties to be sent, containing the
     * Authentication Method, Authentication Data and any required User
     * Defined Properties.
     *
     * In this implementation, just log the event
     */
    override fun authPacketArrived(reasonCode: Int, properties: MqttProperties?) {
        logger.debug { "authPacketArrived" }
    }

    /**
     * Called when the connection to the server is completed successfully.
     * The [reconnect] value is true if the connection was the result of
     * automatic reconnect. The [serverURI] is the URI of the server that
     * the connection was made to.
     *
     * In this implementation, just log the event
     */
    override fun connectComplete(reconnect: Boolean, serverURI: String?) {
        logger.debug { "connectComplete" }
    }

    /**
     * Called when delivery for a message has been completed, and all
     * acknowledgments have been received. For QoS 0 messages it is called once the
     * message has been handed to the network for delivery. For QoS 1 it is called
     * when PUBACK is received and for QoS 2 when PUBCOMP is received. The [token]
     * will be the same [token] as that returned when the message was published.
     *
     * In this implementation, just log the event
     */
    override fun deliveryComplete(token: IMqttToken?) {
        logger.debug { "deliveryComplete" }
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
     * In this implementation, just log the event
     */
    override fun mqttErrorOccurred(exception: MqttException?) {
        logger.warn { "mqttErrorOccurred: ${exception.toString()}" }
    }

    /**
     * Given an MQTT [message] for a given [topic], send it to
     * the client through WSS. If the client is not connected
     * to the WSS, cache the message to send it later.
     */
    private fun cacheOrSendMessage(topic: String, message: MQTTMessage) {
        if (wss == null) {
            logger.info { "User ${user.name} is not connected through WSS, caching the message" }
            subscribedTopicsKeysAndMessages[topic]!!.messages.add(message)
            // TODO we cached the message, now check for reconnection
            //  from the WSS to then send to it the messages
        } else {
            runBlocking {
                logger.info { "Sending the message to the client through WSS" }
                wss!!.send(myJson.encodeToString(message))
            }
        }
    }

    /**
     * Get from the MM and decrypt the symmetric key of
     * the [topic] with the [versionNumber], if given.
     * Finally, return the key along with an outcome code.
     */
    private fun getLatestSymmetricKey(
        topic: String,
        versionNumber: Int? = null,
    ): CodeSymmetricKeyCryptoAC {
        logger.debug { "Getting the symmetric key for topic $topic (version number: $versionNumber)" }

        // we get the role tuple of the role that can read the file. With the
        // role tuple, we can decrypt the role private key. With the role private
        // key, we can decrypt the symmetric key. With the symmetric key, we can
        // decrypt the file
        val fileRoleTuples = mm.getRoleTuples(
            username = user.name,
            isAdmin = user.isAdmin,
            offset = 0, limit = 1,
        )

        if (fileRoleTuples.isEmpty()) {
            return (CodeSymmetricKeyCryptoAC(OutcomeCode.CODE_006_FILE_NOT_FOUND))
        }

        var filePermissionTuple: PermissionTuple? = null
        var fileRoleTuple: RoleTuple? = null

        run found@{
            fileRoleTuples.forEach { currentRoleTuple ->
                /** Verify the signature of the RoleTuple */
                verifyTupleSignature(currentRoleTuple)

                /**
                 * The [versionNumber] may even be null, but there
                 * is one permission tuple per topic anyway
                 */
                filePermissionTuple = mm.getPermissionTuples(
                    roleName = currentRoleTuple.roleName,
                    fileName = topic,
                    symKeyVersionNumber = versionNumber,
                    isAdmin = user.isAdmin,
                    offset = 0, limit = 1,
                ).firstOrNull()

                if (filePermissionTuple != null) {
                    /** Verify the signature of the PermissionTuple */
                    verifyTupleSignature(filePermissionTuple!!)
                    fileRoleTuple = currentRoleTuple
                    return@found
                }
            }
        }

        if (filePermissionTuple == null) {
            return (CodeSymmetricKeyCryptoAC(OutcomeCode.CODE_006_FILE_NOT_FOUND))
        }

        // now we decrypt the keys of the role. Then, we use the keys of the role
        // to decrypt the symmetric key. Finally, we decrypt the file
        val roleAsymEncKeys = crypto.decryptAsymEncKeys(
            encryptingKey = asymEncKeyPair.public,
            decryptingKey = asymEncKeyPair.private,
            encryptedAsymEncKeys = fileRoleTuple!!.encryptedAsymEncKeys!!
        )
        return CodeSymmetricKeyCryptoAC(
            key = crypto.decryptSymKey(
                encryptingKey = roleAsymEncKeys.public,
                decryptingKey = roleAsymEncKeys.private,
                encryptedSymKey = filePermissionTuple!!.encryptedSymKey!!
            ),
            versionNumber = filePermissionTuple!!.symKeyVersionNumber
        )
    }
}

/** Extension of MqttClient to provide synchronized methods for connection  */
class CryptoACMqttClient(
    serverURI: String, clientId: String, persistence: MqttClientPersistence
) : MqttClient(serverURI, clientId, persistence) {

    /** Whether the MQTT client already connected once to the broker */
    var alreadyConnectedOnce: Boolean = false

    /**
     * Synchronously reconnect (when [reconnecting]) or connect
     * with the given [username] and [password] to the MQTT broker
     */
    @Synchronized fun connectSync(
        reconnecting: Boolean,
        username: String? = null,
        password: ByteArray? = null
    ) {
        logger.debug { "connectSync invoked" }
        if (!isConnected) {
            logger.debug { "client is not connected" }
            if (reconnecting) {
                logger.debug { "reconnecting" }
                super.reconnect()
            } else {
                logger.debug { "connecting" }
                val connOpts = MqttConnectionOptions()
                connOpts.isCleanStart = if (alreadyConnectedOnce) {
                    false
                } else {
                    alreadyConnectedOnce = true
                    true
                }
                connOpts.userName = username!!
                connOpts.password = password!!
                super.connect(connOpts)
            }
            val client = this
            runBlocking {
                logger.debug { "waiting for client to be connected" }
                waitForCondition { client.isConnected }
            }
        } else {
            logger.debug { "client is already connected" }
        }
    }


    // TODO sync method with a lock. you have two concurrency problems:
    //  user wants to write, but we still have to retrieve the key.
    //  => sync on method: if key was retrieved, simply write. Otherwise,
    //     store the "message" to send in a queue and make the mqtt callback
    //     function (i.e., the one that receives the key) to send all messages
    //     in the queue.
}


/**
 * The symmetric key of a topic and a list of
 * (decrypted) messages to deliver to the MQTT client
 */
data class SymmetricKeysAndCachedMessages(
    var key: SymmetricKeyCryptoAC?,
    var versionNumber: Int,
    var enforcement: EnforcementType,
    var messages: MutableList<MQTTMessage> = mutableListOf()
)

