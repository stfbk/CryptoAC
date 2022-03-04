package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.core.model.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.implementation.dm.DMFactory
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceRBACCLOUD
import eu.fbk.st.cryptoac.implementation.mm.*
import eu.fbk.st.cryptoac.implementation.opa.*
import eu.fbk.st.cryptoac.implementation.rm.RMFactory
import eu.fbk.st.cryptoac.implementation.rm.RMInterface
import mu.KotlinLogging
import java.io.InputStream
import java.lang.IllegalStateException
import kotlin.collections.HashMap
import kotlin.collections.HashSet

private val logger = KotlinLogging.logger {}

// TODO implementa la possibilità di dare WRITE permissions
//  only anche nel cloud? Però attenti che il CSP può colludere

/**
 * The CoreRBACCloud implements a role-based cryptographic access
 * control scheme with hybrid cryptography for Cloud scenarios.
 * It assumes the presence of an RMCloud, a MMMySQL, a DMCloud and
 * an OPA entity, configured with the given [coreParameters]
 */
class CoreRBACCLOUD(
    override val crypto: Crypto,
    override val coreParameters: CoreParametersCLOUD
) : CoreRBAC(crypto, coreParameters) {

    /** Interface toward the MM */
    val mm: MMInterface = MMFactory.getMM(coreParameters.mmInterfaceParameters)

    /** Interface toward the DM */
    private val dm: DMInterfaceRBACCLOUD = DMFactory.getDM(coreParameters.dmInterfaceParameters) as DMInterfaceRBACCLOUD

    /** Interface toward the RM */
    private val rm: RMInterface = RMFactory.getRM(coreParameters.rmInterfaceParameters)!!

    /** Interface toward the OPA */
    private val opa: OPAInterface = OPAInterface(coreParameters.opaInterfaceParameters)

    /** Commodity reference for the user in the [coreParameters] */
    private val user: User = coreParameters.user

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

    /**
     * This function is invoked by the admin, and it should
     * initialize the admin's status, configure eventual
     * parameters and eventually return the outcome code.

     * In this implementation, add the admin [user]'s encrypting and
     * verifying public keys in the metadata, the role assignment
     * in OPA and return the outcome code
     */
    override fun initAdmin(): OutcomeCode {
        logger.info { "Initializing admin's keys for user ${user.name}" }

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
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        code = rm.configure(coreParameters)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = dm.configure(coreParameters)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = opa.configure()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Update the metadata */
        code = mm.initAdmin(user, adminRoleTuple)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            endOfMethod(code)
        } else {
            endOfMethod(opa.addURAssignment(UR.extractUR(adminRoleTuple)))
        }
    }

    /**
     * This function is invoked by the user, and it should
     * initialize the user's status, configure eventual
     * parameters and eventually return the outcome code
     *
     * In this implementation, add the [user]'s public key and
     * token in the metadata
     */
    override fun initUser(): OutcomeCode {
        logger.info { "Initializing token and public key of user ${user.name}" }

        /** Lock the status of the interfaces */
        val code = startOfMethod(opaLock = false, dmLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            code
        }
        else {
            endOfMethod(mm.initUser(user), opaLocked = false, dmLocked = false)
        }
    }

    /**
     * Add a user with the given [username] to the policy
     * and return eventual configuration parameters along
     * with the outcome code (if an error occurred, the
     * configuration parameters will be null)
     */
    override fun addUser(username: String): CodeCoreParameters {
        logger.info { "Adding user $username" }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CodeCoreParameters(OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the interfaces */
        val code = startOfMethod(opaLock = false, dmLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            CodeCoreParameters(code)
        }
        else {
            val addUserResult = mm.addUser(User(username))
            return if (addUserResult.code != OutcomeCode.CODE_000_SUCCESS) {
                CodeCoreParameters(endOfMethod(addUserResult.code, opaLocked = false, dmLocked = false))
            }
            else {
                CodeCoreParameters(endOfMethod(OutcomeCode.CODE_000_SUCCESS, opaLocked = false, dmLocked = false),
                    CoreParametersCLOUD(
                        user = User(name = username),
                        coreType = CoreType.RBAC_CLOUD,
                        cryptoType = coreParameters.cryptoType,
                        rmInterfaceParameters = coreParameters.rmInterfaceParameters.apply { this.obscureSensitiveFields() },
                        mmInterfaceParameters = addUserResult.parameters as MMInterfaceRBACCLOUDParameters,
                        dmInterfaceParameters = coreParameters.dmInterfaceParameters.apply { this.obscureSensitiveFields() },
                        opaInterfaceParameters = coreParameters.opaInterfaceParameters.apply { this.obscureSensitiveFields() },
                    )
                )
            }
        }
    }

    /**
     * Delete the user with the matching [username] from
     * the policy and revoke the user from all assigned roles.
     * Finally, return the outcome code
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
        var code = startOfMethod(opaLock = false)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Delete the user from the MM */
        code = mm.deleteUser(username)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code, opaLocked = false, dmLocked = false)
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
        return endOfMethod(code, opaLocked = false, dmLocked = false)
    }

    /**
     * Add a new role with the given [roleName] to the policy
     * and assign the admin to the new role.
     * Finally, return the outcome code
     */
    override fun addRole(roleName: String): OutcomeCode {
        logger.info { "Adding role $roleName" }

        /** Guard clauses */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod(dmLock = false)
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
        adminRoleTuple.updateSignature(newSignature = signature, newSigner = ADMIN, newSignerType = ElementTypeWithKey.USER)

        /** Update the metadata */
        code = mm.addRole(newRole)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code, dmLocked = false)
        }
        code = opa.addURAssignment(UR.extractUR(adminRoleTuple))
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            endOfMethod(code, dmLocked = false)
        } else {
            return endOfMethod(mm.addRoleTuples(HashSet<RoleTuple>().apply { add(adminRoleTuple) }), dmLocked = false)
        }
    }

    /**
     * Delete the role with the matching [roleName] from
     * the policy and revoke all users and permissions
     * from the role.
     * Finally, return the outcome code
     */
    override fun deleteRole (roleName: String): OutcomeCode {
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
        var code = startOfMethod(dmLock = false)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Delete all RoleTuples matching the [roleName] from the MM */
        val deleteRoleTuples = mm.deleteRoleTuples(roleName)
        if (deleteRoleTuples != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(deleteRoleTuples, dmLocked = false)
        }

        /** Delete the role assignments in OPA */
        code = opa.deleteURAssignments(roleName = roleName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code, dmLocked = false)
        }

        /** Delete the role from the MM */
        code = mm.deleteRole(roleName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code, dmLocked = false)
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
        return endOfMethod(code, dmLocked = false)
    }

    /**
     * Add a new file with the given name [fileName],
     * [fileContent], [enforcement] type to the policy.
     * Encrypt and sign, if necessary, and upload the
     * new [fileContent] for the file [fileName].
     * Also, assign all permissions to the admin over
     * the file.
     * Finally, return the outcome code
     */
    override fun addFile(fileName: String, fileContent: InputStream, enforcement: EnforcementType): OutcomeCode {
        logger.info { "Adding file $fileName with enforcement $enforcement" }

        /** Guard clauses */
        if (fileName.isBlank()) {
            logger.warn { "File name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the interfaces */
        var code = startOfMethod(opaLock = false)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Based on the [enforcement], encrypt or not the [fileContent] of the [fileName] */
        val encryptedFileContent: InputStream
        val encryptedSymKey: EncryptedSymKey
        if (enforcement == EnforcementType.COMBINED) {
            val symKey = crypto.generateSymKey()

            /** Encrypt the [fileContent] of the [fileName] */
            encryptedFileContent = crypto.encryptStream(symKey, fileContent)

            /** Encrypt the symmetric key with the administrator's asymmetric encrypting public key */
            val adminAsymEncPublicKeyBytes = mm.getPublicKey(
                token = ADMIN, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC,
            )
            val adminAsymEncPublicKey = crypto.recreateAsymPublicKey(
                asymPublicKeyBytes = adminAsymEncPublicKeyBytes!!,
                type = AsymKeysType.ENC
            )
            encryptedSymKey = crypto.encryptSymKey(adminAsymEncPublicKey, symKey)
        }
        else {
            encryptedFileContent = fileContent
            encryptedSymKey = EncryptedSymKey("null".toByteArray())
        }
        val newFile = File(fileName, enforcement = enforcement)

        /** Give read and write permission to the admin */
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

        code = dm.addFile(newFile, encryptedFileContent)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            endOfMethod(code, opaLocked = false)
        } else {
            code = rm.checkAddFile(newFileTuple, adminPermissionTuple)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                val deleteTempFileCode = dm.deleteTemporaryFile(newFile.name)
                if (deleteTempFileCode != OutcomeCode.CODE_000_SUCCESS) {
                    logger.error {
                        "Added file in the DM, the RM could not check it and we were not able to" +
                        "delete the (temporary) file from the DM; contact the system administrator"
                    }
                    endOfMethod(OutcomeCode.CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM, opaLocked = false)
                } else
                    endOfMethod(code)
            } else {
                endOfMethod(code, opaLocked = false)
            }
        }
    }

    /**
     * Delete the file with the matching [fileName] from
     * the policy, and delete all the related permissions.
     * Finally, return the outcome code
     */
    override fun deleteFile(fileName: String): OutcomeCode {
        logger.info { "Deleting file $fileName" }

        /** Guard clauses */
        if (fileName.isBlank()) {
            logger.warn { "File name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod()
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Delete the permission tuples matching the [fileName] from the MM */
        code = mm.deletePermissionTuples(fileName = fileName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        code = opa.deletePAAssignments(fileName = fileName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Delete the file tuple matching the [fileName] from the MM */
        code = mm.deleteFileTuples(fileName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Delete the file matching the [fileName] from the MM */
        code = mm.deleteFile(fileName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Delete the file from the DM */
        return endOfMethod(dm.deleteFile(fileName))
    }

    /**
     * Assigns the user [username] to the role [roleName]
     * in the policy.
     * Finally, return the outcome code
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
        var code = startOfMethod(dmLock = false)
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
            return endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND, dmLocked = false)
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
            name = username,
            elementType = ElementTypeWithKey.USER,
            asymKeyType = AsymKeysType.ENC
        )

        /** If we did not find the user's key, it means that the user does not exist (or was deleted) */
        if (userAsymEncPublicKeyBytes == null) {
            logger.warn { "User's key not found. Checking the user's status" }
            val status = mm.getStatus(username, ElementTypeWithStatus.USER)
            return if (status != null) {
                logger.warn { "User's status is $status" }
                when (status) {
                    ElementStatus.INCOMPLETE -> endOfMethod(OutcomeCode.CODE_053_USER_IS_INCOMPLETE, dmLocked = false)
                    ElementStatus.OPERATIONAL -> {
                        val message = "User's $username key not found but user is operational"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    ElementStatus.DELETED -> endOfMethod(OutcomeCode.CODE_013_USER_WAS_DELETED, dmLocked = false)
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

        code = opa.addURAssignment(UR.extractUR(newRoleTuple))
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code, dmLocked = false)
        }

        code = mm.addRoleTuples(HashSet<RoleTuple>().apply { add(newRoleTuple) })
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            endOfMethod(code)
        } else {
            return endOfMethod(code, dmLocked = false)
        }
    }

    /**
     * Revoke the user [username] from the role [roleName]
     * from the policy.
     * Finally, return the outcome code
     *
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
        var code = startOfMethod(dmLock = false)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Get the RoleTuples of [roleName] */
        val roleRoleTuples = mm.getRoleTuples(roleName = roleName, offset = 0, limit = NO_LIMIT)
        if (roleRoleTuples.isEmpty()) {
            logger.warn { "Role tuple not found. Probably the role does not exists" }
            return endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND, dmLocked = false)
        }

        /** Get the RoleTuple of [username] and [roleName] */
        val userRoleTuple = roleRoleTuples.firstOrNull { it.username == username }
        if (userRoleTuple == null) {
            logger.warn { "Role tuple of user $username and role $roleName not found" }
            return endOfMethod(OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND, dmLocked = false)
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
            return endOfMethod(code, dmLocked = false)
        }

        code = opa.deleteURAssignments(username = username, roleName = roleName)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code, dmLocked = false)
        }

        /** Add the new role tuples of [roleName] */
        logger.debug { "Adding the new role tuples" }
        code = mm.addRoleTuples(newRoleTuples)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(code, dmLocked = false)
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

            /** The key is the file name, the value are the related permission tuples */
            val filesAccessibleByRole = HashMap<String, HashSet<PermissionTuple>>()

            /** Collect the names of the files that [roleName] has access to */
            for (currentTuple in permissionTuples) {
                verifyTupleSignature(currentTuple)
                val fileName = currentTuple.fileName
                filesAccessibleByRole.putIfAbsent(fileName, HashSet())
                filesAccessibleByRole[fileName]!!.add(currentTuple)
            }

            /** For each file the revoked [username] had access through [roleName] */
            val newPermissionTuples = HashSet<PermissionTuple>()
            for (fileAccessibleByRole in filesAccessibleByRole) {
                val fileName = fileAccessibleByRole.key
                val fileToken = mm.getToken(
                    name = fileName, type = ElementTypeWithStatus.FILE,
                )
                val currentPermissionTuples = fileAccessibleByRole.value

                val latestFileVersionNumber = mm.getVersionNumber(
                    name = fileName, elementType = ElementTypeWithVersionNumber.FILE,
                )
                // TODO when updating file's key, update also the token
                val newSymKey = crypto.generateSymKey()

                /** Update the PermissionTuples of the [roleName] */
                for (currentPermissionTuple in currentPermissionTuples) {

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
                        roleToken = currentTuple.roleToken, fileToken = fileToken!!
                    )
                    val signature =
                        crypto.createSignature(newPermissionTuple.getBytesForSignature(), asymSigKeyPair.private)
                    newPermissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
                    newPermissionTuples.add(newPermissionTuple)
                }

                code = mm.incrementSymEncVersionNumberByOne(fileName)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code, dmLocked = false)
                }
            }

            code = mm.deletePermissionTuples(roleName = roleName, roleVersionNumber = oldRoleVersionNumber)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code, dmLocked = false)
            }

            code = mm.addPermissionTuples(newPermissionTuples)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code, dmLocked = false)
            }
        }
        return endOfMethod(
            mm.updateRoleAsymKeys(
                roleName = roleName,
                newAsymEncPublicKey = newAsymEncKeys.public, newAsymSigPublicKey = newAsymSigKeys.public
            ),
            dmLocked = false,
        )
    }

    /**
     * Assigns the [permission] to the role [roleName] over
     * the file [fileName] in the policy.
     * Finally, return the outcome code
     */
    override fun assignPermissionToRole(
        roleName: String,
        fileName: String,
        permission: PermissionType
    ): OutcomeCode {
        logger.info { "Assigning permission $permission to role $roleName over file $fileName" }

        /** Guard clauses */
        if (roleName.isBlank() || fileName.isBlank()) {
            logger.warn { "Role or file name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod(dmLock = false)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        /** Get the (latest) PermissionTuple of the admin */
        logger.debug { "Getting the permission tuples of the admin" }
        val adminPermissionTuples = mm.getPermissionTuples(
            roleName = ADMIN, fileName = fileName,
            offset = 0, limit = NO_LIMIT,
        )
        if (adminPermissionTuples.isEmpty()) {
            logger.warn { "Admin permission tuple for file $fileName not found. Probably the file does not exist" }
            return endOfMethod(OutcomeCode.CODE_006_FILE_NOT_FOUND, dmLocked = false)
        }

        logger.debug { "Getting the role version number" }
        val latestRolePermissionNumber = mm.getVersionNumber(
            name = roleName, elementType = ElementTypeWithVersionNumber.ROLE
        )
        if (latestRolePermissionNumber == null) {
            logger.warn { "Role version number not found. Probably the role does not exist" }
            return endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND, dmLocked = false)
        }


        // check if the role has other permissions over the file. Indeed, it may be the case that
        // we just have to update one of these tuples
        logger.debug { "Getting previous permission tuples of role $roleName" }
        val previousRolePermissionTuples = mm.getPermissionTuples(
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
                    return endOfMethod(OutcomeCode.CODE_016_INVALID_PERMISSION, dmLocked = false)
                }

                if (permission == previousPermissionOfRoleOverFile.permission) {
                    logger.warn { "Assigning $permission permission to role " +
                            "having $permission permission" }
                    return endOfMethod(OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS, dmLocked = false)
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
                    return endOfMethod(code, dmLocked = false)
                }

                code = opa.updatePAAssignment(PA.extractPA(upgradedPermissionTuple))
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code, dmLocked = false)
                }
            }
            // if here, the role does not have any existing permission over the file.
            // Therefore, we have to create permission tuples from scratch
            else {
                logger.debug { "Previous permission tuple does not exist for role $roleName over file $fileName" }
                /** Check the enforcement type */
                val fileTuple = mm.getFileTuples(
                    fileName = fileName,
                    isAdmin = user.isAdmin
                ).first()
                val encryptedAsymKey = when (fileTuple.enforcement) {
                    EnforcementType.COMBINED ->  {
                        logger.debug { "Enforcement for file $fileName is combined" }
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

                code = opa.addPAAssignment(PA.extractPA(newPermissionTuple))
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code, dmLocked = false)
                }

                code = mm.addPermissionTuples(HashSet<PermissionTuple>().apply { add(newPermissionTuple) })
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code, dmLocked = false)
                }
            }
        }
        return endOfMethod(OutcomeCode.CODE_000_SUCCESS, dmLocked = false)
    }

    /**
     * Revoke the [permission] from the role [roleName] over
     * the file [fileName] in the policy.
     * Finally, return the outcome code
     */
    override fun revokePermissionFromRole(
        roleName: String,
        fileName: String,
        permission: PermissionType
    ): OutcomeCode {
        logger.info { "Revoking permission $permission from role $roleName over file $fileName" }

        /** Guard clauses */
        if (roleName.isBlank() || fileName.isBlank()) {
            logger.warn { "Role or file name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot revoke the $ADMIN role" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        /** Lock the status of the interfaces */
        var code = startOfMethod(dmLock = false)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        if (permission == PermissionType.WRITE) {

            // fetch the permission tuples related to the given role so to remove the 'Write' permission from each tuple
            logger.debug { "Getting permission tuples to update for role $roleName over file $fileName" }
            val permissionTuplesToUpdate = mm.getPermissionTuples(
                roleName = roleName, fileName = fileName,
                offset = 0, limit = NO_LIMIT,
            )

            if (permissionTuplesToUpdate.isEmpty()) {
                logger.warn { "Permission tuple of role $roleName and file $fileName not found" }
                return endOfMethod(OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND, dmLocked = false)
            }

            for (permissionTupleToUpdate in permissionTuplesToUpdate) {
                verifyTupleSignature(permissionTupleToUpdate)

                if (permissionTupleToUpdate.permission == PermissionType.READ) {
                    logger.warn { "Role already has read permission only" }
                    return endOfMethod(OutcomeCode.CODE_016_INVALID_PERMISSION, dmLocked = false)
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
                    return endOfMethod(code, dmLocked = false)
                }

                code = opa.updatePAAssignment(PA.extractPA(newPermissionTuple))
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code, dmLocked = false)
                }

            }
        }
        else if (permission == PermissionType.READWRITE) {

            // we have to delete the permission tuples related to the role, as the role should
            // not have access to the symmetric key anymore. Then, we create a new symmetric key,
            // in case a user from the role cached the key
            logger.debug { "Deleting all permission tuples for role $roleName over file $fileName" }
            code = mm.deletePermissionTuples(roleName = roleName, fileName = fileName)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code, dmLocked = false)
            }

            code = opa.deletePAAssignments(roleName = roleName, fileName = fileName)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code, dmLocked = false)
            }

            // TODO when updating file's key, update also the token
            val newSymKey = crypto.generateSymKey()
            val fileLatestVersionNumber = mm.getVersionNumber(
                name = fileName, elementType = ElementTypeWithVersionNumber.FILE
            )

            // get the latest permission tuples of other roles, as we have
            // to update the symmetric key and replace it with the new one
            logger.debug { "Updating permission tuples of other roles over file $fileName" }
            val latestPermissionTuples = mm.getPermissionTuples(
                fileName = fileName, symKeyVersionNumber = fileLatestVersionNumber,
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

                code = opa.addPAAssignment(PA.extractPA(newPermissionTuple))
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code, dmLocked = false)
                }

                code = mm.addPermissionTuples(HashSet<PermissionTuple>().apply { add(newPermissionTuple) })
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return endOfMethod(code, dmLocked = false)
                }
            }

            code = mm.incrementSymEncVersionNumberByOne(fileName)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(code, dmLocked = false)
            }
        }
        else {
            logger.warn { "Permission $permission is invalid to revoke" }
            return endOfMethod(OutcomeCode.CODE_016_INVALID_PERMISSION, dmLocked = false)
        }
        return endOfMethod(OutcomeCode.CODE_000_SUCCESS, dmLocked = false)
    }

    /**
     * Download, decrypt and check the integrity of,
     * if necessary, the content of the file [fileName]
     * and return it along with the outcome code (if
     * an error occurred, the content of the file will
     * be null)
     */
    override fun readFile(fileName: String): CodeFile {
        logger.info { "Reading file $fileName by user ${user.name}" }

        /** Guard clauses */
        if (fileName.isBlank()) {
            logger.warn { "File name is blank" }
            return CodeFile(OutcomeCode.CODE_020_INVALID_PARAMETER)
        }


        /** Lock the status of the interfaces */
        val code = startOfMethod(opaLock = false)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return CodeFile(code)
        }

        // this hash set contains the file tuple related to the file to
        // read if the user has access to the file, no tuples otherwise
        val fileFileTuple = mm.getFileTuples(
            fileName = fileName, isAdmin = user.isAdmin,
            offset = 0, limit = 1,
        ).firstOrNull()
        if (fileFileTuple == null) {
            logger.warn { "File tuple not found. Either ${user.name} does not have access to file $fileName or file does not exist" }
            return CodeFile(endOfMethod(OutcomeCode.CODE_006_FILE_NOT_FOUND, opaLocked = false))
        }

        /** Verify the signature of the FileTuple */
        verifyTupleSignature(fileFileTuple)

        val fileStream: InputStream

        // if CAC was enforced, we have to obtain the symmetric key to decrypt the file.
        // Therefore, we get the decrypting key version number from the file tuple, and
        // then fetch the corresponding permission tuple
        if (fileFileTuple.enforcement == EnforcementType.COMBINED) {

            val filePermissionTuple = mm.getPermissionTuples(
                fileName = fileName, symKeyVersionNumber = fileFileTuple.symDecKeyVersionNumber,
                isAdmin = user.isAdmin,
                offset = 0, limit = 1,
            ).first()

            /** Verify the signature of the PermissionTuple */
            verifyTupleSignature(filePermissionTuple)

            // now we get the role tuple of the role that can read the file. With the
            // role tuple, we can decrypt the role private key. With the role private
            // key, we can decrypt the symmetric key. With the symmetric key, we can
            // decrypt the file
            val fileRoleTuple = mm.getRoleTuples(
                username = user.name, roleName = filePermissionTuple.roleName,
                isAdmin = user.isAdmin,
                offset = 0, limit = 1,
            ).first()

            /** Verify the signature of the RoleTuple */
            verifyTupleSignature(fileRoleTuple)

            val fileToReadResult = dm.readFile(fileName = fileName)
            if (fileToReadResult.code != OutcomeCode.CODE_000_SUCCESS) {
                return CodeFile(endOfMethod(fileToReadResult.code, opaLocked = false))
            }
            val encryptedFileStream = fileToReadResult.stream!!

            // now we decrypt the keys of the role. Then, we use the keys of the role
            // to decrypt the symmetric key. Finally, we decrypt the file
            val roleAsymEncKeys = crypto.decryptAsymEncKeys(
                encryptingKey = asymEncKeyPair.public,
                decryptingKey = asymEncKeyPair.private,
                encryptedAsymEncKeys = fileRoleTuple.encryptedAsymEncKeys!!
            )

            val symKey = crypto.decryptSymKey(
                encryptingKey = roleAsymEncKeys.public,
                decryptingKey = roleAsymEncKeys.private,
                encryptedSymKey = filePermissionTuple.encryptedSymKey!!
            )

            fileStream = crypto.decryptStream(symKey, encryptedFileStream)
        } else {
            val fileToReadResult = dm.readFile(fileName = fileName)
            if (fileToReadResult.code != OutcomeCode.CODE_000_SUCCESS) {
                return CodeFile(endOfMethod(fileToReadResult.code, opaLocked = false))
            }
            fileStream = fileToReadResult.stream!!
        }
        return CodeFile(endOfMethod(OutcomeCode.CODE_000_SUCCESS, opaLocked = false), fileStream)
    }

    /**
     * Encrypt and sign, if necessary, and upload the
     * new [fileContent] for the file [fileName].
     * Finally, return the outcome code
     */
    override fun writeFile(fileName: String, fileContent: InputStream): OutcomeCode {
        logger.info { "Writing file $fileName by user ${user.name}" }

        /** Guard clauses */
        if (fileName.isBlank()) {
            logger.warn { "File name is blank" }
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the interfaces */
        var code = startOfMethod(opaLock = false)
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        // this hash set contains the file tuple related to the file to
        // write if the user has access to the file, no tuples otherwise
        val fileFileTuple = mm.getFileTuples(
            fileName = fileName,
            isAdmin = user.isAdmin,
            offset = 0, limit = 1,
        ).firstOrNull()
        if (fileFileTuple == null) {
            logger.warn { "File tuple not found. Either ${user.name} does not have access to file $fileName or file does not exist" }
            return endOfMethod(OutcomeCode.CODE_006_FILE_NOT_FOUND, opaLocked = false)
        }

        /** Verify the signature of the FileTuple */
        verifyTupleSignature(fileFileTuple)

        val fileStream: InputStream
        val latestFileVersionNumber = mm.getVersionNumber(
            token = fileFileTuple.fileToken, elementType = ElementTypeWithVersionNumber.FILE
        )

        val filePermissionTuple = mm.getPermissionTuples(
            fileName = fileName, symKeyVersionNumber = latestFileVersionNumber,
            isAdmin = false,
            offset = 0, limit = 1,
        ).first()

        /** Verify the signature of the PermissionTuple */
        verifyTupleSignature(filePermissionTuple)

        // now we get the role tuple of the role that can read the file. With the
        // role tuple, we can decrypt the role private key. With the role private
        // key, we can decrypt the symmetric key. With the symmetric key, we can
        // decrypt the file
        val fileRoleTuple = mm.getRoleTuples(
            username = user.name, roleName = filePermissionTuple.roleName,
            isAdmin = user.isAdmin,
            offset = 0, limit = 1,
        ).first()

        /** Verify the signature of the RoleTuple */
        verifyTupleSignature(fileRoleTuple)

        // if CAC is to be enforced, we have to obtain the symmetric key to encrypt the file.
        // Therefore, we get the decrypting key version number from the file tuple, and
        // then fetch the corresponding permission tuple
        return if (fileFileTuple.enforcement == EnforcementType.COMBINED) {

            // now we decrypt the keys of the role. Then, we use the keys of the role
            // to decrypt the symmetric key. Finally, we decrypt the file
            val roleAsymEncKeys = crypto.decryptAsymEncKeys(
                encryptingKey = asymEncKeyPair.public,
                decryptingKey = asymEncKeyPair.private,
                encryptedAsymEncKeys = fileRoleTuple.encryptedAsymEncKeys!!
            )

            val symKey = crypto.decryptSymKey(
                encryptingKey = roleAsymEncKeys.public,
                decryptingKey = roleAsymEncKeys.private,
                encryptedSymKey = filePermissionTuple.encryptedSymKey!!
            )

            // encrypt the file
            fileStream = crypto.encryptStream(symKey, fileContent)

            val newFile = File(
                name = fileName,
                symEncKeyVersionNumber = latestFileVersionNumber!!,
                enforcement = fileFileTuple.enforcement
            )
            newFile.token = fileFileTuple.fileToken

            val newFileTuple = FileTuple(
                fileName = fileName, fileToken = fileFileTuple.fileToken,
                roleToken = filePermissionTuple.roleToken,
                symDecKeyVersionNumber = latestFileVersionNumber,
                enforcement = fileFileTuple.enforcement
            )
            val signature = crypto.createSignature(newFileTuple.getBytesForSignature(), asymSigKeyPair.private)
            newFileTuple.updateSignature(
                newSignature = signature, newSigner = user.token, newSignerType = ElementTypeWithKey.USER
            )

            code = dm.addFile(newFile, fileStream)
            return if (code != OutcomeCode.CODE_000_SUCCESS) {
                endOfMethod(code, opaLocked = false)
            } else {
                code = rm.checkWriteFile(newFile.symEncKeyVersionNumber, newFileTuple)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    val deleteTempFileCode = dm.deleteTemporaryFile(newFile.name)
                    if (deleteTempFileCode != OutcomeCode.CODE_000_SUCCESS) {
                        logger.error {
                            "Added file in the DM, the RM could not check it and we were not able to" +
                            "delete the (temporary) file from the DM; contact the system administrator"
                        }
                        endOfMethod(OutcomeCode.CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM, opaLocked = false)
                    } else {
                        endOfMethod(code, opaLocked = false)
                    }
                } else {
                    endOfMethod(code, opaLocked = false)
                }
            }
        }
        else {
            fileStream = fileContent

            val newFile = File(
                name = fileName,
                symEncKeyVersionNumber = latestFileVersionNumber!!,
                enforcement = fileFileTuple.enforcement
            )
            newFile.token = fileFileTuple.fileToken

            val newFileTuple = FileTuple(
                fileName = fileName, fileToken = fileFileTuple.fileToken,
                roleToken = filePermissionTuple.roleToken,
                symDecKeyVersionNumber = latestFileVersionNumber,
                enforcement = fileFileTuple.enforcement
            )
            val signature = crypto.createSignature(newFileTuple.getBytesForSignature(), asymSigKeyPair.private)
            newFileTuple.updateSignature(
                newSignature = signature, newSigner = user.token, newSignerType = ElementTypeWithKey.USER
            )

            code = dm.addFile(newFile, fileStream)
            if (code != OutcomeCode.CODE_000_SUCCESS) {
                endOfMethod(code, opaLocked = false)
            } else {
                code = rm.checkWriteFile(newFile.symEncKeyVersionNumber, newFileTuple)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    val deleteTempFileCode = dm.deleteTemporaryFile(newFile.name)
                    if (deleteTempFileCode != OutcomeCode.CODE_000_SUCCESS) {
                        logger.error {
                            "Added file in the DM, the RM could not check it and we were not able to" +
                                    "delete the (temporary) file from the DM; contact the system administrator"
                        }
                        endOfMethod(OutcomeCode.CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM, opaLocked = false)
                    } else {
                        endOfMethod(code, opaLocked = false)
                    }
                } else {
                    endOfMethod(code, opaLocked = false)
                }
            }
        }
    }



    /**
     * Return the set of users, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
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
     * Return the set of roles, along with the
     * outcome code (if an error occurred, the
     * set of roles will be null)
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
     * Return the set of files, along with the
     * outcome code (if an error occurred, the
     * set of files will be null)
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
     * Return the user-role assignments filtering
     * by the [username] and [roleName], if given,
     * along with the outcome code (if an error
     * occurred, the set of users will be null)
     */
    override fun getAssignments(username: String?, roleName: String?): CodeRoleTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting role tuples" }

        /** Lock the status of the interfaces */
        val code = startOfMethod(opaLock = false, dmLock = false)
        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            CodeRoleTuples(code)
        } else {
            val roleTuples = mm.getRoleTuples(
                username = username, roleName = roleName,
                isAdmin = user.isAdmin,
                offset = 0, limit = NO_LIMIT,
            )
            CodeRoleTuples(endOfMethod(OutcomeCode.CODE_000_SUCCESS, opaLocked = false, dmLocked = false), roleTuples)
        }
    }

    /**
     * Return the role-file permissions filtering
     * by the [username], [roleName] and [fileName],
     * if given, along with the outcome code (if an error
     * occurred, the set of users will be null)
     */
    override fun getPermissions(username: String?, roleName: String?, fileName: String?): CodePermissionTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting permission tuples" }

        /** Lock the status of the interfaces */
        val code = startOfMethod(opaLock = false, dmLock = false)
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
            CodePermissionTuples(endOfMethod(OutcomeCode.CODE_000_SUCCESS, opaLocked = false, dmLocked = false), permissionTuples)
        }
    }



    /**
     * Lock the specified interfaces
     * and return the outcome code
     */
    private fun startOfMethod(mmLock: Boolean = true, opaLock: Boolean = true, dmLock: Boolean = true): OutcomeCode {
        logger.info {
            "Locking the following interfaces: ${if (mmLock) "MM " else ""}${if (opaLock) "OPA " else ""}${if (dmLock) "DM " else ""}"
        }
        val mmLockCode = if (mmLock) mm.lock() else OutcomeCode.CODE_000_SUCCESS
        return if (mmLockCode == OutcomeCode.CODE_000_SUCCESS) {
            val opaLockCode = if (opaLock) opa.lock() else OutcomeCode.CODE_000_SUCCESS
            if (opaLockCode == OutcomeCode.CODE_000_SUCCESS) {
                val dmLockCode = if (dmLock) dm.lock() else OutcomeCode.CODE_000_SUCCESS
                if (dmLockCode == OutcomeCode.CODE_000_SUCCESS) {
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    logger.warn { "DM lock failed, code is $dmLockCode" }
                    if (opaLock) unlockOrRollbackInterface("OPA")
                    if (mmLock) unlockOrRollbackInterface("MS")
                    dmLockCode
                }
            } else {
                logger.warn { "OPA lock failed, code is $opaLockCode" }
                if (mmLock)  unlockOrRollbackInterface("MS")
                opaLockCode
            }
        } else {
            logger.warn { "MM lock failed, code is $mmLockCode" }
            mmLockCode
        }
    }

    /**
     * If the [code] is a success, unlock the
     * specified interfaces (i.e., commit the
     * changes). Otherwise, rollback to the
     * previous status. In both cases, return
     * the outcome code
     */
    private fun endOfMethod(code: OutcomeCode, mmLocked: Boolean = true, opaLocked: Boolean = true, dmLocked: Boolean = true): OutcomeCode {
        if (code == OutcomeCode.CODE_000_SUCCESS) {
            logger.info {
                "Operation successful, unlocking the following interfaces: " +
                if (mmLocked) "MM " else "" +
                if (opaLocked) "OPA " else "" +
                if (dmLocked) "DM " else ""
            }
            if (mmLocked) unlockOrRollbackInterface("MS")
            if (opaLocked) unlockOrRollbackInterface("OPA")
            if (dmLocked) unlockOrRollbackInterface("DM")
        } else {
            logger.info {
                "Operation unsuccessful (code $code), rollbacking the following interfaces: " +
                if (mmLocked) "MM " else "" +
                if (opaLocked) "OPA " else "" +
                if (dmLocked) "DM " else ""
            }
            if (mmLocked) unlockOrRollbackInterface("MS", true)
            if (opaLocked) unlockOrRollbackInterface("OPA", true)
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
     * depending on the [rollback] flag.
     */
    private fun unlockOrRollbackInterface(interfaze: String, rollback: Boolean = false) {
        val code = when (interfaze) {
            "MS" -> if (rollback) mm.rollback() else mm.unlock()
            "OPA" -> if (rollback) opa.rollback() else opa.unlock()
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
}