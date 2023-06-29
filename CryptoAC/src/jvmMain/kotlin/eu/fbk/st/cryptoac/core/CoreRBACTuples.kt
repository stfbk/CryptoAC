package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.ac.ACServiceParameters
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.dm.DMServiceParameters
import eu.fbk.st.cryptoac.mm.MMServiceParameters
import eu.fbk.st.cryptoac.mm.NO_LIMIT
import eu.fbk.st.cryptoac.model.*
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.rm.RMServiceParameters
import mu.KotlinLogging
import java.io.InputStream

private val logger = KotlinLogging.logger {}

// TODO is there any information on what role a
//  user assumes to read/write on a file? We
//  should add this information somewhere



/**
 * The CoreRBACTuples extends the [CoreRBAC] class by implementing
 * the basic functions for a role-based CAC scheme based on tuples.
 * The implementation of these functions is loosely based on the
 * article "On the Practicality of Cryptographically Enforcing
 * Dynamic Access Control Policies in the Cloud" by Garrison et al.
 * It receives the [coreParameters] and uses the [cryptoPKE] and
 * [cryptoSKE] objects to perform cryptographic computations
 */
abstract class CoreRBACTuples(
    override val cryptoPKE: CryptoPKE,
    override val cryptoSKE: CryptoSKE,
    override val coreParameters: CoreParametersRBAC
) : CoreRBAC(cryptoPKE, cryptoSKE, coreParameters) {

    /** Asymmetric encryption key pair */
    protected abstract val asymEncKeyPair: KeyPairCryptoAC

    /** Asymmetric signature key pair */
    protected abstract val asymSigKeyPair: KeyPairCryptoAC



    /**
     * This function is invoked by the admin, and
     * it should configure the services, initialize
     * the admin's status in the various services,
     * set the value of relevant parameters and return
     * the outcome code. Ideally, this function should
     * be invoked only once. When implementing this
     * function, remember to decide how to handle (e.g.,
     * reject or allow) subsequent invocations
     *
     * In this implementation, add the admin [user]'s
     * encrypting and verifying public keys in the metadata,
     * the admin-admin UR assignment the AC (if present) and
     * return the outcome code
     */
    override fun configureServices(): OutcomeCode {

        logger.info { "Initializing admin's keys for admin ${user.name}" }

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }

        val encryptedAsymEncKeys = cryptoPKE.encryptAsymKeys(
            encryptingKey = asymEncKeyPair.public,
            asymKeys = asymEncKeyPair,
            type = AsymKeysType.ENC
        )
        val encryptedAsymSigKeys = cryptoPKE.encryptAsymKeys(
            encryptingKey = asymEncKeyPair.public,
            asymKeys = asymSigKeyPair,
            type = AsymKeysType.SIG
        )
        val adminRole = Role(
            name = ADMIN,
            status = UnitElementStatus.OPERATIONAL,
            versionNumber = 1,
            asymEncKeys = AsymKeys(
                public = user.asymEncKeys!!.public,
                private = "",
                keysType = AsymKeysType.ENC
            ),
            asymSigKeys = AsymKeys(
                public = user.asymSigKeys!!.public,
                private = "",
                keysType = AsymKeysType.SIG
            ),
        )
        val adminRoleTuple = RoleTuple(
            username = ADMIN,
            roleName = ADMIN,
            encryptedAsymEncKeys = encryptedAsymEncKeys,
            encryptedAsymSigKeys = encryptedAsymSigKeys,
        )
        val signature = cryptoPKE.createSignature(
            bytes = adminRoleTuple.getBytesForSignature(),
            signingKey = asymSigKeyPair.private
        )
        adminRoleTuple.updateSignature(
            newSignature = signature,
            newSigner = ADMIN,
        )

        /** Configure services (e.g., create tables in database) */
        code = mm.configure()
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = rm?.configure(coreParameters)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = dm.configure(coreParameters)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = ac?.configure()
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin in the AC */
        code = ac?.addAdmin(newAdmin = user)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return if (code == CODE_035_ADMIN_ALREADY_INITIALIZED) {
                logger.warn { "Code was $code, replacing with $CODE_077_SERVICE_ALREADY_CONFIGURED" }
                endOfMethod(CODE_077_SERVICE_ALREADY_CONFIGURED)
            } else {
                endOfMethod(code)
            }
        }

        /** Add the admin role in the AC */
        code = ac?.addRole(roleName = user.name)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin role assignment in the AC */
        code = ac?.assignUserToRole(
            username = user.name,
            roleName = user.name
        ) ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin in the metadata */
        code = mm.addAdmin(newAdmin = user)
        if (code != CODE_000_SUCCESS) {
            return if (code == CODE_035_ADMIN_ALREADY_INITIALIZED) {
                logger.warn { "Code was $code, replacing with $CODE_077_SERVICE_ALREADY_CONFIGURED" }
                endOfMethod(CODE_077_SERVICE_ALREADY_CONFIGURED)
            } else {
                endOfMethod(code)
            }
        }

        /** Add the admin role in the metadata */
        code = mm.addRole(newRole = adminRole)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin role tuple in the metadata */
        code = mm.addRoleTuples(hashSetOf(adminRoleTuple))
         if (code != CODE_000_SUCCESS) {
             return endOfMethod(code)
        }

        /** Add the admin in the DM */
        code = dm.addAdmin(newAdmin = user)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin in the RM */
        return endOfMethod(
            code = rm?.addAdmin(
                newAdmin = user
            ) ?: CODE_000_SUCCESS)
    }

    /**
     * Add a user with the given [username] to the
     * policy and return eventual configuration
     * parameters along with the outcome code
     * (if an error occurred, the configuration
     * parameters will be null). Note that users
     * cannot be assigned (to, e.g., attributes or
     * roles) until they invoke the initUser method
     */
    override fun addUser(
        username: String
    ): CodeCoreParameters {
        logger.info { "Adding user $username" }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CodeCoreParameters(CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the services */
        val lockCode = startOfMethod()
        if (lockCode != CODE_000_SUCCESS) {
            return CodeCoreParameters(lockCode)
        }

        /** Add the user in the MM */
        val userToAdd = User(username)
        val addMMResult = mm.addUser(
            newUser = userToAdd
        )
        if (addMMResult.code != CODE_000_SUCCESS) {
            return CodeCoreParameters(endOfMethod(
                code = addMMResult.code
            ))
        }

        /** Add the user in the RM */
        val addRMResult = rm?.addUser(
            newUser = userToAdd
        )
        if (addRMResult != null) {
            if (addRMResult.code != CODE_000_SUCCESS) {
                return CodeCoreParameters(endOfMethod(
                    code = addRMResult.code
                ))
            }
        }

        /** Add the user in the DM */
        val addDMResult = dm.addUser(
            newUser = userToAdd
        )
        if (addDMResult.code != CODE_000_SUCCESS) {
            return CodeCoreParameters(endOfMethod(
                code = addDMResult.code
            ))
        }

        /** Add the user in the AC */
        val addACResult = ac?.addUser(
            newUser = userToAdd
        )
        if (addACResult != null) {
            if (addACResult.code != CODE_000_SUCCESS) {
                return CodeCoreParameters(endOfMethod(
                    code = addACResult.code
                ))
            }
        }

        return CodeCoreParameters(
            code = endOfMethod(
                code = CODE_000_SUCCESS
            ),
            parameters = CoreParametersRBAC(
                user = userToAdd,
                coreType = coreParameters.coreType,
                cryptoType = coreParameters.cryptoType,
                mmServiceParameters = addMMResult.parameters as MMServiceParameters,
                rmServiceParameters = addRMResult?.parameters as RMServiceParameters?,
                dmServiceParameters = addDMResult.parameters as DMServiceParameters,
                acServiceParameters = addACResult?.parameters as ACServiceParameters?,
            )
        )
    }

    /**
     * Delete the user with the matching [username] from
     * the policy and revoke the user from all assignments
     * (of, e.g., attributes or roles). Finally, return
     * the outcome code
     */
    override fun deleteUser(
        username: String
    ): OutcomeCode {
        logger.info { "Deleting user $username" }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (username == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN user" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Get the RoleTuples of the [username] */
        val userRoleTuples = mm.getRoleTuples(
            username = username,
            offset = 0,
            limit = NO_LIMIT
        )

        /** Revoke the [username] from all roles */
        logger.info { "Revoking the user $username from all roles" }
        run error@{
            userRoleTuples.forEach {
                verifyTupleSignature(it)
                code = revokeUserFromRole(it.username, it.roleName)
                if (code != CODE_000_SUCCESS) {
                    return@error
                }
            }
        }
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }

        /** Delete the user from the MM */
        code = mm.deleteUser(username)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }

        /** Delete the user from the RM */
        code = rm?.deleteUser(username)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }

        /** Delete the user from the DM */
        code = dm.deleteUser(username)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }

        /** Delete the user from the AC */
        code = ac?.deleteUser(username)
            ?: CODE_000_SUCCESS
        return endOfMethod(
            code = code
        )
    }



    /**
     * Add a new role with the given [roleName]
     * to the policy and assign the admin to
     * the new role. Finally, return the outcome
     * code
     */
    override fun addRole(
        roleName: String
    ): OutcomeCode {
        logger.info { "Adding role $roleName" }

        /** Guard clauses */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Create the new Role object for the [roleName] */
        val asymEncKeys = cryptoPKE.generateAsymEncKeys()
        val asymSigKeys = cryptoPKE.generateAsymSigKeys()
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
        val encryptedAsymEncKeys = cryptoPKE.encryptAsymKeys(
            encryptingKey = asymEncKeyPair.public,
            asymKeys = asymEncKeys,
            type = AsymKeysType.ENC
        )
        val encryptedAsymSigKeys = cryptoPKE.encryptAsymKeys(
            encryptingKey = asymEncKeyPair.public,
            asymKeys = asymSigKeys,
            type = AsymKeysType.SIG
        )

        /** Create the new RoleTuple linking the admin with the new [roleName] */
        val adminRoleTuple = RoleTuple(
            username = ADMIN,
            roleName = roleName,
            encryptedAsymEncKeys = encryptedAsymEncKeys,
            encryptedAsymSigKeys = encryptedAsymSigKeys
        )

        /** Sign the new RoleTuple with the asymmetric signing private key of the admin */
        val signature = cryptoPKE.createSignature(
            bytes = adminRoleTuple.getBytesForSignature(),
            signingKey = asymSigKeyPair.private
        )
        adminRoleTuple.updateSignature(
            newSignature = signature,
            newSigner = ADMIN,
        )

        /** Add the role to the MM */
        code = mm.addRole(newRole)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Add the admin-role assignment to the MM */
        code = mm.addRoleTuples(hashSetOf(adminRoleTuple))
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Add the role to the AC */
        code = ac?.addRole(roleName)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Add the admin-role UR to the AC */
        code = ac?.assignUserToRole(
            username = adminRoleTuple.username,
            roleName = adminRoleTuple.roleName
        ) ?: CODE_000_SUCCESS
        return endOfMethod(
            code = code,
            dmLocked = false
        )
    }

    /**
     * Delete the role with the matching [roleName] from
     * the policy and revoke all users and permissions
     * from the role. Finally, return the outcome code
     */
    override fun deleteRole(
        roleName: String
    ): OutcomeCode {
        logger.info { "Deleting role $roleName" }

        /** Guard clauses */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Delete all RoleTuples matching the [roleName] from the MM */
        val deleteRoleTuples = mm.deleteRoleTuples(roleName)
        if (deleteRoleTuples != CODE_000_SUCCESS) {
            return endOfMethod(
                code = deleteRoleTuples,
                dmLocked = false
            )
        }

        /** Delete the role from the MM */
        code = mm.deleteRole(roleName = roleName)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Delete the role from the AC */
        code = ac?.deleteRole(roleName = roleName)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Get all permission tuples associated to the deleted [roleName] */
        val rolePermissionTuples = mm.getPermissionTuples(
            roleName = roleName,
            offset = 0,
            limit = NO_LIMIT
        )

        /** Revoke all permissions from the [roleName] */
        run error@{
            rolePermissionTuples.forEach {
                verifyTupleSignature(it)
                code = revokePermissionFromRole(
                    roleName = it.roleName,
                    resourceName = it.resourceName,
                    permission = PermissionType.READWRITE
                )
                if (code != CODE_000_SUCCESS) {
                    return@error
                }
            }
        }
        return endOfMethod(
            code = code,
            dmLocked = false
        )
    }

    /**
     * Add a new resource with the given name [resourceName],
     * [resourceContent], [enforcement] type to the policy.
     * Encrypt, sign and upload the new [resourceContent]
     * for the resource [resourceName]. Also, assign all
     * permissions to the admin over the resource. Finally,
     * return the outcome code
     */
    override fun addResource(
        resourceName: String,
        resourceContent: InputStream,
        enforcement: EnforcementType
    ): OutcomeCode {
        logger.info { "Adding resource $resourceName with enforcement $enforcement" }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * Based on the [enforcement], encrypt or
         * not the [resourceContent] of the [resourceName]
         */
        val encryptedResourceContent: InputStream
        val encryptedSymKey: EncryptedSymKey
        when (enforcement) {
            EnforcementType.TRADITIONAL -> {
                encryptedResourceContent = resourceContent
                encryptedSymKey = EncryptedSymKey("null".toByteArray())
            }
            EnforcementType.COMBINED -> {
                val symKey = cryptoSKE.generateSymKey()

                /** Encrypt the [resourceContent] of the [resourceName] */
                encryptedResourceContent = cryptoSKE.encryptStream(
                    encryptingKey = symKey,
                    stream = resourceContent
                )

                /**
                 * Encrypt the symmetric key with the
                 * admin's asymmetric encrypting public key
                 */
                val adminAsymEncPublicKeyBytes = mm.getPublicKey(
                    token = ADMIN,
                    elementType = RBACUnitElementTypeWithKeys.USER,
                    asymKeyType = AsymKeysType.ENC,
                )
                val adminAsymEncPublicKey = cryptoPKE.recreateAsymPublicKey(
                    asymPublicKeyBytes = adminAsymEncPublicKeyBytes!!,
                    type = AsymKeysType.ENC
                )
                encryptedSymKey = cryptoPKE.encryptSymKey(
                    encryptingKey = adminAsymEncPublicKey,
                    symKey = symKey
                )
            }
        }
        val newResource = Resource(
            name = resourceName,
            enforcement = enforcement
        )

        /** Give read and write permission to the admin */
        val adminPermissionTuple = PermissionTuple(
            roleName = ADMIN,
            resourceName = resourceName,
            roleToken = ADMIN,
            resourceToken = newResource.token,
            permission = PermissionType.READWRITE,
            encryptingSymKey = encryptedSymKey,
            decryptingSymKey = encryptedSymKey,
        )
        val permissionTupleSignature = cryptoPKE.createSignature(
            bytes = adminPermissionTuple.getBytesForSignature(),
            signingKey = asymSigKeyPair.private
        )
        adminPermissionTuple.updateSignature(
            newSignature = permissionTupleSignature,
            newSigner = user.token,
        )

        /** Add the resource in the MM */
        code = mm.addResource(newResource)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the permission tuples in the MM */
        code = mm.addPermissionTuples(hashSetOf(adminPermissionTuple))
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the resource in the AC */
        code = ac?.addResource(resourceName)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin-RW-resource PA assignment in the AC */
        code = ac?.assignPermissionToRole(
            roleName = ADMIN,
            permission = PermissionType.READWRITE,
            resourceName = resourceName
        ) ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the resource in the DM */
        return endOfMethod(
            dm.addResource(
                newResource = newResource,
                content = encryptedResourceContent
            )
        )
    }

    /**
     * Delete the resource with the matching [resourceName] from
     * the policy, and delete all the related permissions.
     * Finally, return the outcome code
     */
    override fun deleteResource(
        resourceName: String
    ): OutcomeCode {
        logger.info { "Deleting resource $resourceName" }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * Delete the permission tuples matching
         * the [resourceName] from the MM
         */
        code = mm.deletePermissionTuples(resourceName = resourceName)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /**
         * Delete the resource matching
         * the [resourceName] from the MM
         */
        code = mm.deleteResource(resourceName = resourceName)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Delete the resource from the AC */
        code = ac?.deleteResource(resourceName = resourceName)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Delete the resource from the DM */
        return endOfMethod(dm.deleteResource(resourceName))
    }

    /**
     * Assigns the user [username] to the role [roleName]
     * in the policy. Finally, return the outcome code
     */
    override fun assignUserToRole(
        username: String, 
        roleName: String
    ): OutcomeCode {
        logger.info { "Assigning user $username to role $roleName" }

        /** Guard clauses */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "Username or role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot assign users to the $ADMIN role" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Get the RoleTuple of the admin */
        val adminRoleTuple = mm.getRoleTuples(
            username = ADMIN,
            roleName = roleName,
            offset = 0,
            limit = 1,
        ).firstOrNull()
        if (adminRoleTuple == null) {
            logger.warn {
                "Admin role tuple for role $roleName not" +
                " found. Probably the role does not exist"
            }
            return endOfMethod(
                code = CODE_005_ROLE_NOT_FOUND,
                dmLocked = false
            )
        }
        verifyTupleSignature(adminRoleTuple)

        /** Get the asymmetric encryption private keys of the [roleName] */
        val asymEncKeys = cryptoPKE.decryptAsymEncKeys(
            encryptingKey = asymEncKeyPair.public,
            decryptingKey = asymEncKeyPair.private,
            encryptedAsymEncKeys = EncryptedAsymKeys(
                private = adminRoleTuple.encryptedAsymEncKeys!!.private,
                public = adminRoleTuple.encryptedAsymEncKeys.public,
                keyType = AsymKeysType.ENC,
            )
        )
        val asymSigKeys = cryptoPKE.decryptAsymSigKeys(
            encryptingKey = asymEncKeyPair.public,
            decryptingKey = asymEncKeyPair.private,
            encryptedAsymSigKeys = EncryptedAsymKeys(
                private = adminRoleTuple.encryptedAsymSigKeys!!.private,
                public = adminRoleTuple.encryptedAsymSigKeys.public,
                keyType = AsymKeysType.SIG,
            )
        )

        /** Create the new RoleTuple binding the [username] and the [roleName] */
        val userAsymEncPublicKeyBytes = mm.getPublicKey(
            name = username,
            elementType = RBACUnitElementTypeWithKeys.USER,
            asymKeyType = AsymKeysType.ENC
        )

        /**
         * If we did not find the user's key, it means
         * that the user does not exist
         */
        if (userAsymEncPublicKeyBytes == null) {
            logger.warn { "User's key not found. Checking the user's status" }
            val status = mm.getStatus(
                name = username,
                type = RBACUnitElementTypeWithStatus.USER
            )
            return if (status != null) {
                logger.warn { "User's status is $status" }
                when (status) {
                    UnitElementStatus.INCOMPLETE -> endOfMethod(
                        code = CODE_053_USER_IS_INCOMPLETE,
                        dmLocked = false
                    )
                    UnitElementStatus.OPERATIONAL -> {
                        val message = "User's $username key not found but user is operational"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    UnitElementStatus.DELETED -> endOfMethod(
                        code = CODE_013_USER_WAS_DELETED,
                        dmLocked = false
                    )
                }
            } else {
                endOfMethod(
                    code =CODE_004_USER_NOT_FOUND,
                    dmLocked = false
                )
            }
        }

        val userAsymEncPublicKey = cryptoPKE.recreateAsymPublicKey(
            asymPublicKeyBytes = userAsymEncPublicKeyBytes,
            type = AsymKeysType.ENC
        )
        val encryptedAsymEncKeys = cryptoPKE.encryptAsymKeys(
            encryptingKey = userAsymEncPublicKey,
            asymKeys = asymEncKeys,
            type = AsymKeysType.ENC
        )
        val encryptedAsymSigKeys = cryptoPKE.encryptAsymKeys(
            encryptingKey = userAsymEncPublicKey,
            asymKeys = asymSigKeys,
            type = AsymKeysType.SIG
        )
        val newRoleTuple = RoleTuple(
            username = username,
            roleName = roleName,
            roleVersionNumber = adminRoleTuple.roleVersionNumber,
            encryptedAsymEncKeys = encryptedAsymEncKeys,
            encryptedAsymSigKeys = encryptedAsymSigKeys,
        )
        val newRoleTupleSignature = cryptoPKE.createSignature(
            bytes = newRoleTuple.getBytesForSignature(),
            signingKey = asymSigKeyPair.private
        )
        newRoleTuple.updateSignature(
            newSignature = newRoleTupleSignature,
            newSigner = ADMIN,
        )

        code = mm.addRoleTuples(hashSetOf(newRoleTuple))
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Add the user-role UR assignment in the AC */
        return endOfMethod(
            code = ac?.assignUserToRole(
                username = newRoleTuple.username,
                roleName = newRoleTuple.roleName
            ) ?: CODE_000_SUCCESS,
            dmLocked = false
        )
    }

    /**
     * Revoke the user [username] from the 
     * role [roleName] from the policy.
     * Finally, return the outcome code
     */
    override fun revokeUserFromRole(
        username: String, 
        roleName: String
    ): OutcomeCode {
        logger.info { "Revoking user $username from role $roleName" }

        /** Guard clauses */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "Username or role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (username == ADMIN || roleName == ADMIN) {
            logger.warn { "Cannot revoke the $ADMIN user or role" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        val roleObject = mm.getRoles(
            roleName = roleName,
            status = UnitElementStatus.OPERATIONAL,
            offset = 0,
            limit = 1
        ).firstOrNull() ?: return endOfMethod(
            code = CODE_005_ROLE_NOT_FOUND,
            dmLocked = false
        )

        /** Get the RoleTuples of [roleName] */
        val roleRoleTuples = mm.getRoleTuples(
            roleName = roleName,
            offset = 0,
            limit = NO_LIMIT
        )

        /** Check whether the role tuple to delete exists */
        if (!roleRoleTuples.any { it.username == username }) {
            logger.warn { "Role tuple of user $username and role $roleName not found" }
            return endOfMethod(
                code = CODE_007_ROLETUPLE_NOT_FOUND,
                dmLocked = false
            )
        }

        /**
         * Get the role tuple of the admin and [roleName]
         * so we can get the role's old asymmetric encryption
         * keys, which we need later on.
         * We verify the signature of the admin role tuple in
         * the for loop below
         */
        val adminRoleTuple = roleRoleTuples.first { it.username == ADMIN }
        verifyTupleSignature(adminRoleTuple)

        /** Get the (now old) asymmetric encryption private keys of the [roleName] */
        val oldAsymEncKeys = cryptoPKE.decryptAsymEncKeys(
            encryptingKey = asymEncKeyPair.public,
            decryptingKey = asymEncKeyPair.private,
            encryptedAsymEncKeys = EncryptedAsymKeys(
                private = adminRoleTuple.encryptedAsymEncKeys!!.private,
                public = adminRoleTuple.encryptedAsymEncKeys.public,
                keyType = AsymKeysType.ENC,
            )
        )


        /**
         * Update the version number and provide new keys
         * for the RoleTuples (except for [username]'s one)
         */
        logger.debug { "Updating role tuples with new keys and version number" }
        val newAsymEncKeys = cryptoPKE.generateAsymEncKeys()
        val newAsymSigKeys = cryptoPKE.generateAsymSigKeys()
        val newRoleTuples = HashSet<RoleTuple>()
        val oldRoleVersionNumber = roleObject.versionNumber
        val newRoleVersionNumber = oldRoleVersionNumber + 1
        for (currentRoleTuple in roleRoleTuples.filter { it.username != username }) {

            /** Verify the signature of the current RoleTuple */
            verifyTupleSignature(currentRoleTuple)

            /**
             * Get the public encryption key of
             * the user of the current RoleTuple
             */
            val userAsymEncPublicKeyBytes = mm.getPublicKey(
                name = currentRoleTuple.username,
                elementType = RBACUnitElementTypeWithKeys.USER,
                asymKeyType = AsymKeysType.ENC
            )
            val userAsymEncPublicKey = cryptoPKE.recreateAsymPublicKey(
                asymPublicKeyBytes = userAsymEncPublicKeyBytes!!,
                type = AsymKeysType.ENC
            )

            /**
             * Encrypt the role's new keys
             * with the public key of the user
             */
            val encryptedAsymEncKeys = cryptoPKE.encryptAsymKeys(
                encryptingKey = userAsymEncPublicKey,
                asymKeys = newAsymEncKeys,
                type = AsymKeysType.ENC
            )
            val encryptedAsymSigKeys = cryptoPKE.encryptAsymKeys(
                encryptingKey = userAsymEncPublicKey,
                asymKeys = newAsymSigKeys,
                type = AsymKeysType.SIG
            )
            val newRoleTuple = RoleTuple(
                username = currentRoleTuple.username,
                roleName = roleName,
                roleVersionNumber = newRoleVersionNumber,
                encryptedAsymEncKeys = encryptedAsymEncKeys,
                encryptedAsymSigKeys = encryptedAsymSigKeys
            )
            val newRoleTupleSignature = cryptoPKE.createSignature(
                bytes = newRoleTuple.getBytesForSignature(),
                signingKey = asymSigKeyPair.private
            )
            newRoleTuple.updateSignature(
                newSignature = newRoleTupleSignature,
                newSigner = ADMIN,
            )
            newRoleTuples.add(newRoleTuple)
        }

        /** Delete the old role tuples of [roleName] */
        logger.debug { "Deleting the outdated role tuples" }
        code = mm.deleteRoleTuples(roleName)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Delete the user-role UR assignment from the AC */
        code = ac?.revokeUserFromRole(
            username = username,
            roleName = roleName
        ) ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Add the new role tuples of [roleName] */
        logger.debug { "Adding the new role tuples" }
        code = mm.addRoleTuples(newRoleTuples)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Generate here the new role token */
        val newRoleToken = UnitElement.generateRandomTokenForAdmin(
            name = roleName
        )

        /**
         * Currently, there can be one permission
         * tuple only for each role-resource pair
         */
        logger.debug { "Getting the permissions tuples to update" }
        val permissionTuples = mm.getPermissionTuples(
            roleName = roleName,
            offset = 0,
            limit = NO_LIMIT
        )
        val permissionTuplesToAdd = HashSet<PermissionTuple>()
        if (permissionTuples.isNotEmpty()) {

            /**
             * For each resource the revoked [username]
             * had access through [roleName]
             */
            val newPermissionTuples = HashSet<PermissionTuple>()
            for (currentPermissionTuple in permissionTuples) {
                verifyTupleSignature(currentPermissionTuple)

                val resourceName = currentPermissionTuple.resourceName
                val resource = mm.getResources(
                    resourceName = resourceName
                ).first()
                val resourceToken = resource.token
                val latestResourceVersionNumber = resource.symEncKeyVersionNumber

                /** Consistency checks on resource token */
                if (resourceToken != currentPermissionTuple.resourceToken) {
                    val message = "Resource tokens are inconsistent " +
                            "(resource is $resourceToken, permission" +
                            "tuple is ${currentPermissionTuple.resourceToken}"
                    logger.error { message }
                    throw IllegalStateException(message)
                }

                /** Consistency checks on resource version number */
                if (latestResourceVersionNumber != currentPermissionTuple.symKeyVersionNumber) {
                    val message = "Version numbers are inconsistent " +
                            "(resource is $latestResourceVersionNumber, permission" +
                            "tuple is ${currentPermissionTuple.symKeyVersionNumber}"
                    logger.error { message }
                    throw IllegalStateException(message)
                }

                val newSymKey: SymmetricKeyCryptoAC?
                val newEncryptingSymKey: EncryptedSymKey
                val newDecryptingSymKey: EncryptedSymKey

                /** Do cryptographic operations only if the enforcement is cryptographic */
                when (resource.enforcement) {
                    EnforcementType.TRADITIONAL -> {
                        newSymKey = null
                        newEncryptingSymKey = EncryptedSymKey("null".toByteArray())
                        newDecryptingSymKey = EncryptedSymKey("null".toByteArray())
                    }
                    EnforcementType.COMBINED -> {
                        newSymKey = cryptoSKE.generateSymKey()
                        newEncryptingSymKey = cryptoPKE.encryptSymKey(
                            encryptingKey = newAsymEncKeys.public,
                            symKey = newSymKey
                        )
                        /**
                         * Which one is the symmetric key to use to decrypt the resource
                         * later on? If the decryption and encryption version numbers
                         * are the same, then there are two possibilities:
                         * - the decryption and encryption symmetric keys are the same
                         * as well (e.g., the resource was just created). In this case,
                         * pick any of the two keys as the decryption key.
                         * - the decryption and encryption symmetric keys are different,
                         * even though they should be equal (as the version numbers are
                         * the same). In this case, the decryption key should be the
                         * encryption key.
                         *
                         * If the decryption and encryption version numbers are different,
                         * it means that, previously, the admin renewed the key and no
                         * user wrote on the resource since (otherwise, the version numbers
                         * would be the same). In this case, pick the decryption key
                         */
                        val newEncryptedDecryptingSymKey =
                            if (resource.symDecKeyVersionNumber == resource.symEncKeyVersionNumber) {
                                currentPermissionTuple.encryptingSymKey
                            } else {
                                currentPermissionTuple.decryptingSymKey
                            }

                        newDecryptingSymKey = cryptoPKE.encryptSymKey(
                            encryptingKey = newAsymEncKeys.public,
                            symKey = cryptoPKE.decryptSymKey(
                                encryptingKey = oldAsymEncKeys.public,
                                decryptingKey = oldAsymEncKeys.private,
                                encryptedSymKey = newEncryptedDecryptingSymKey!!
                            )
                        )
                    }
                }

                /** Update the PermissionTuples of the [roleName] */
                val newResourceToken = UnitElement.generateRandomToken()
                val newResourceEncKeyVersionNumber = currentPermissionTuple.symKeyVersionNumber + 1
                val newRolePermissionTuple = PermissionTuple(
                    roleName = roleName,
                    roleToken = newRoleToken,
                    resourceName = resourceName,
                    resourceToken = newResourceToken,
                    roleVersionNumber = newRoleVersionNumber,
                    symKeyVersionNumber = newResourceEncKeyVersionNumber,
                    permission = currentPermissionTuple.permission,
                    encryptingSymKey = newEncryptingSymKey,
                    decryptingSymKey = newDecryptingSymKey,
                )
                val roleSignature = cryptoPKE.createSignature(
                    bytes = newRolePermissionTuple.getBytesForSignature(),
                    signingKey = asymSigKeyPair.private
                )
                newRolePermissionTuple.updateSignature(
                    newSignature = roleSignature,
                    newSigner = ADMIN,
                )
                newPermissionTuples.add(newRolePermissionTuple)


                /**
                 * Update the PermissionTuples of other
                 * roles that can access the current resource
                 */
                val othersPermissionTuples = mm.getPermissionTuples(
                    resourceName = resourceName,
                    offset = 0,
                    limit = NO_LIMIT
                )
                othersPermissionTuples.retainAll {
                    (it.roleName != roleName)
                }



                for (currentOtherRolePermissionTuple in othersPermissionTuples) {
                    verifyTupleSignature(currentOtherRolePermissionTuple)

                    val roleAsymEncPublicKeyBytes = mm.getPublicKey(
                        name = currentOtherRolePermissionTuple.roleName,
                        elementType = RBACUnitElementTypeWithKeys.ROLE,
                        asymKeyType = AsymKeysType.ENC
                    )
                    val roleAsymEncPublicKey = cryptoPKE.recreateAsymPublicKey(
                        asymPublicKeyBytes = roleAsymEncPublicKeyBytes!!,
                        type = AsymKeysType.ENC
                    )

                    /** Do cryptographic operations only if the enforcement is cryptographic */
                    val newEncryptingSymKeyOtherRole: EncryptedSymKey = when (resource.enforcement) {
                        EnforcementType.COMBINED -> {
                            cryptoPKE.encryptSymKey(
                                encryptingKey = roleAsymEncPublicKey,
                                symKey = newSymKey!!
                            )
                        }

                        EnforcementType.TRADITIONAL -> {
                            EncryptedSymKey("null".toByteArray())
                        }
                    }

                    /**
                     * Which one is the symmetric key to use to decrypt the resource
                     * later on? If the decryption and encryption version numbers
                     * are the same, then there are two possibilities:
                     * - the decryption and encryption symmetric keys are the same
                     * as well (e.g., the resource was just created). In this case,
                     * pick any of the two keys as the decryption key.
                     * - the decryption and encryption symmetric keys are different,
                     * even though they should be equal (as the version numbers are
                     * the same). In this case, the decryption key should be the
                     * encryption key.
                     *
                     * If the decryption and encryption version numbers are different,
                     * it means that, previously, the admin renewed the key and no
                     * user wrote on the resource since (otherwise, the version numbers
                     * would be the same). In this case, pick the decryption key
                     */
                    val newDecryptingSymKeyOtherRole = if (resource.symDecKeyVersionNumber == resource.symEncKeyVersionNumber) {
                        currentOtherRolePermissionTuple.encryptingSymKey
                    } else {
                        currentOtherRolePermissionTuple.decryptingSymKey
                    }

                    val newPermissionTuple = PermissionTuple(
                        roleName = currentOtherRolePermissionTuple.roleName,
                        resourceName = resourceName,
                        roleToken = currentOtherRolePermissionTuple.roleToken,
                        resourceToken = newResourceToken,
                        roleVersionNumber = currentOtherRolePermissionTuple.roleVersionNumber,
                        symKeyVersionNumber = latestResourceVersionNumber + 1,
                        permission = currentOtherRolePermissionTuple.permission,
                        encryptingSymKey = newEncryptingSymKeyOtherRole,
                        decryptingSymKey = newDecryptingSymKeyOtherRole
                    )
                    val signature = cryptoPKE.createSignature(
                        bytes = newPermissionTuple.getBytesForSignature(),
                        signingKey = asymSigKeyPair.private
                    )
                    newPermissionTuple.updateSignature(
                        newSignature = signature,
                        newSigner = ADMIN,
                    )
                    newPermissionTuples.add(newPermissionTuple)
                }

                /**
                 * Update the token of the resource
                 * and the encryption version number
                 */
                code = mm.updateResourceTokenAndVersionNumber(
                    resourceName = resourceName,
                    oldResourceToken = resourceToken,
                    newResourceToken = newResourceToken,
                    newSymEncKeyVersionNumber = newResourceEncKeyVersionNumber
                )
                if (code != CODE_000_SUCCESS) {
                    return endOfMethod(
                        code = code,
                        dmLocked = false
                    )
                }

                code = mm.deletePermissionTuples(
                    resourceName = resourceName
                )
                if (code != CODE_000_SUCCESS) {
                    return endOfMethod(
                        code = code,
                        dmLocked = false
                    )
                }
            }

            permissionTuplesToAdd.addAll(newPermissionTuples)
        }


        /** Update the token of [roleName] */
        logger.debug { "Updating token of $roleName" }
        code = mm.updateRoleTokenAndVersionNumberAndAsymKeys(
            roleName = roleName,
            oldRoleVersionNumber = oldRoleVersionNumber,
            oldRoleToken = roleObject.token,
            newRoleToken = newRoleToken,
            newAsymEncPublicKey = newAsymEncKeys.public,
            newAsymSigPublicKey = newAsymSigKeys.public
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Add the permission tuples */
        return endOfMethod(
            code = mm.addPermissionTuples(permissionTuplesToAdd),
            dmLocked = false,
        )
    }

    /**
     * Assigns the [permission] to the role [roleName]
     * over the resource [resourceName] in the policy.
     * Finally, return the outcome code
     */
    override fun assignPermissionToRole(
        roleName: String,
        resourceName: String,
        permission: PermissionType
    ): OutcomeCode {
        logger.info {
            "Assigning permission $permission to " +
            "role $roleName over resource $resourceName"
        }

        /** Guard clauses */
        if (roleName.isBlank() || resourceName.isBlank()) {
            logger.warn { "Role or resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (permission != PermissionType.READ && permission != PermissionType.READWRITE) {
            logger.warn {
                "Invalid permission, must be either " +
                "${PermissionType.READ} or ${PermissionType.READWRITE}"
            }
            return CODE_016_INVALID_PERMISSION
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Get the PermissionTuple of the admin over [resourceName] */
        logger.debug { "Getting the permission tuple of the admin over $resourceName" }
        val adminPermissionTuple = mm.getPermissionTuples(
            roleName = ADMIN,
            resourceName = resourceName,
            offset = 0,
            limit = 1
        ).firstOrNull()
        if (adminPermissionTuple == null) {
            logger.warn {
                "Admin permission tuple for resource $resourceName " +
                "not found. Probably the resource does not exist"
            }
            return endOfMethod(
                code = CODE_006_RESOURCE_NOT_FOUND,
                dmLocked = false
            )
        }
        verifyTupleSignature(adminPermissionTuple)

        logger.debug { "Getting the role version number of $roleName" }
        val latestRolePermissionNumber = mm.getVersionNumber(
            name = roleName,
            elementType = RBACUnitElementTypeWithVN.ROLE
        )
        if (latestRolePermissionNumber == null) {
            logger.warn {
                "Role version number for role $roleName " +
                "not found. Probably the role does not exist"
            }
            return endOfMethod(
                code = CODE_005_ROLE_NOT_FOUND,
                dmLocked = false
            )
        }

        /**
         * Either the role already has a permission over the
         * resource or it doesn't. In the first case, we just
         * have to update the existing permission tuple with
         * the new permission. Otherwise, we need to create a
         * new permission tuple
         */
        logger.debug {
            "Getting previous permission tuple of " +
            "role $roleName over resource $resourceName"
        }
        val previousPermissionOfRoleOverResource = mm.getPermissionTuples(
            roleName = roleName,
            resourceName = resourceName,
            offset = 0,
            limit = 1
        ).firstOrNull()

        if (previousPermissionOfRoleOverResource != null) {
            logger.debug {
                "Previous permission tuple exists for " +
                "role $roleName over resource $resourceName"
            }

            verifyTupleSignature(previousPermissionOfRoleOverResource)

            if (permission == PermissionType.READ &&
                (previousPermissionOfRoleOverResource.permission == PermissionType.READWRITE ||
                 previousPermissionOfRoleOverResource.permission == PermissionType.READ)
            ) {
                logger.warn { "Role already has ${PermissionType.READ} permission" }
                return endOfMethod(
                    code = CODE_016_INVALID_PERMISSION,
                    dmLocked = false
                )
            }

            if (permission == previousPermissionOfRoleOverResource.permission) {
                logger.warn {
                    "Assigning $permission permission to role " +
                    "having the same $permission permission"
                }
                return endOfMethod(
                    code = CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS,
                    dmLocked = false
                )
            }

            logger.debug { "Upgrading previous permission tuple" }
            val upgradedPermissionTuple = PermissionTuple(
                roleName = roleName,
                resourceName = resourceName,
                permission = permission,
                roleVersionNumber = previousPermissionOfRoleOverResource.roleVersionNumber,
                roleToken = previousPermissionOfRoleOverResource.roleToken,
                resourceToken = previousPermissionOfRoleOverResource.resourceToken,
                encryptingSymKey = previousPermissionOfRoleOverResource.encryptingSymKey,
                decryptingSymKey = previousPermissionOfRoleOverResource.decryptingSymKey,
                symKeyVersionNumber = previousPermissionOfRoleOverResource.symKeyVersionNumber,
            )
            val signature = cryptoPKE.createSignature(
                bytes = upgradedPermissionTuple.getBytesForSignature(),
                signingKey = asymSigKeyPair.private
            )
            upgradedPermissionTuple.updateSignature(
                newSignature = signature,
                newSigner = ADMIN,
            )

            code = mm.updatePermissionTuple(upgradedPermissionTuple)
            if (code != CODE_000_SUCCESS) {
                return endOfMethod(
                    code = code,
                    dmLocked = false
                )
            }

            /** Update the role-permission-resource PA assignment in the AC */
            code = ac?.updatePermissionToRole(
                roleName = upgradedPermissionTuple.roleName,
                permission = upgradedPermissionTuple.permission,
                resourceName = upgradedPermissionTuple.resourceName
            ) ?: CODE_000_SUCCESS
            if (code != CODE_000_SUCCESS) {
                return endOfMethod(
                    code = code,
                    dmLocked = false
                )
            }
        } else {
            logger.debug {
                "Previous permission tuple does not exist" +
                 " for role $roleName over resource $resourceName"
            }

            /** Check the enforcement type */
            val resource = mm.getResources(
                resourceName = resourceName,
            ).first()
            val encryptingKey: EncryptedSymKey?
            val decryptingKey: EncryptedSymKey?
            when (resource.enforcement) {
                EnforcementType.COMBINED -> {
                    logger.debug { "Enforcement for resource $resourceName is combined" }
                    val roleAsymEncPublicKeyBytes = mm.getPublicKey(
                        name = roleName,
                        elementType = RBACUnitElementTypeWithKeys.ROLE,
                        asymKeyType = AsymKeysType.ENC
                    )
                    val roleAsymEncPublicKey = cryptoPKE.recreateAsymPublicKey(
                        asymPublicKeyBytes = roleAsymEncPublicKeyBytes!!,
                        type = AsymKeysType.ENC
                    )

                    val decryptedEncryptingKey = cryptoPKE.decryptSymKey(
                        encryptingKey = asymEncKeyPair.public,
                        decryptingKey = asymEncKeyPair.private,
                        encryptedSymKey = adminPermissionTuple.encryptingSymKey!!
                    )
                    encryptingKey = cryptoPKE.encryptSymKey(
                        encryptingKey = roleAsymEncPublicKey,
                        symKey = decryptedEncryptingKey
                    )
                    val decryptedDecryptingKey = cryptoPKE.decryptSymKey(
                        encryptingKey = asymEncKeyPair.public,
                        decryptingKey = asymEncKeyPair.private,
                        encryptedSymKey = adminPermissionTuple.decryptingSymKey!!
                    )
                    decryptingKey = cryptoPKE.encryptSymKey(
                        encryptingKey = roleAsymEncPublicKey,
                        symKey = decryptedDecryptingKey
                    )
                }
                EnforcementType.TRADITIONAL -> {
                    logger.debug { "Enforcement for resource $resourceName is traditional" }
                    encryptingKey = adminPermissionTuple.encryptingSymKey
                    decryptingKey = adminPermissionTuple.decryptingSymKey
                }
            }

            logger.debug { "Creating new permission tuple" }
            val newPermissionTuple = PermissionTuple(
                roleName = roleName,
                resourceName = resourceName,
                permission = permission,
                roleVersionNumber = latestRolePermissionNumber,
                roleToken = mm.getToken(
                    name = roleName,
                    type = RBACUnitElementTypeWithStatus.ROLE
                )!!,
                resourceToken = adminPermissionTuple.resourceToken,
                encryptingSymKey = encryptingKey,
                decryptingSymKey = decryptingKey,
                symKeyVersionNumber = adminPermissionTuple.symKeyVersionNumber,
            )
            val signature = cryptoPKE.createSignature(
                bytes = newPermissionTuple.getBytesForSignature(),
                signingKey = asymSigKeyPair.private
            )
            newPermissionTuple.updateSignature(
                newSignature = signature,
                newSigner = ADMIN,
            )

            code = mm.addPermissionTuples(hashSetOf(newPermissionTuple))
            if (code != CODE_000_SUCCESS) {
                return endOfMethod(
                    code = code,
                    dmLocked = false
                )
            }

            /** Add the role-permission-resource PA assignment to the AC */
            code = ac?.assignPermissionToRole(
                roleName = newPermissionTuple.roleName,
                permission = newPermissionTuple.permission,
                resourceName = newPermissionTuple.resourceName
            ) ?: CODE_000_SUCCESS
            if (code != CODE_000_SUCCESS) {
                return endOfMethod(
                    code = code,
                    dmLocked = false
                )
            }
        }
        return endOfMethod(
            code = CODE_000_SUCCESS,
            dmLocked = false
        )
    }

    /**
     * Revoke the [permission] from the role [roleName] over
     * the resource [resourceName] in the policy. Finally,
     * return the outcome code
     */
    override fun revokePermissionFromRole(
        roleName: String,
        resourceName: String,
        permission: PermissionType
    ): OutcomeCode {
        logger.info {
            "Revoking permission $permission from role " +
            "$roleName over resource $resourceName"
        }

        /** Guard clauses */
        if (roleName.isBlank() || resourceName.isBlank()) {
            logger.warn { "Role or resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            logger.warn { "Cannot revoke the $ADMIN role" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        when (permission) {
            PermissionType.READ -> {
                logger.warn { "Permission $permission is invalid to revoke" }
                return endOfMethod(
                    code = CODE_016_INVALID_PERMISSION,
                    dmLocked = false
                )
            }
            PermissionType.WRITE -> {
                logger.debug {
                    "Getting permission tuples to update " +
                    "for role $roleName over resource $resourceName"
                }
                val permissionTupleToUpdate = mm.getPermissionTuples(
                    roleName = roleName,
                    resourceName = resourceName,
                    offset = 0,
                    limit = NO_LIMIT
                ).firstOrNull()

                if (permissionTupleToUpdate == null) {
                    logger.warn { "Permission tuple of role $roleName and resource $resourceName not found" }
                    return endOfMethod(
                        code = CODE_008_PERMISSIONTUPLE_NOT_FOUND,
                        dmLocked = false
                    )
                }
                verifyTupleSignature(permissionTupleToUpdate)

                if (permissionTupleToUpdate.permission == PermissionType.READ) {
                    logger.warn { "Role already has read permission only" }
                    return endOfMethod(
                        code = CODE_016_INVALID_PERMISSION,
                        dmLocked = false
                    )
                }

                logger.debug {
                    "Creating new permission tuple for key version number " +
                    "${permissionTupleToUpdate.symKeyVersionNumber}"
                }
                val newPermissionTuple = PermissionTuple(
                    roleName = roleName,
                    resourceName = resourceName,
                    roleVersionNumber = permissionTupleToUpdate.roleVersionNumber,
                    permission = PermissionType.READ,
                    encryptingSymKey = permissionTupleToUpdate.encryptingSymKey,
                    decryptingSymKey = permissionTupleToUpdate.decryptingSymKey,
                    symKeyVersionNumber = permissionTupleToUpdate.symKeyVersionNumber,
                    roleToken = permissionTupleToUpdate.roleToken,
                    resourceToken = permissionTupleToUpdate.resourceToken
                )
                val signature = cryptoPKE.createSignature(
                    bytes = newPermissionTuple.getBytesForSignature(),
                    signingKey = asymSigKeyPair.private
                )
                newPermissionTuple.updateSignature(
                    newSignature = signature,
                    newSigner = ADMIN,
                )

                code = mm.updatePermissionTuple(newPermissionTuple)
                if (code != CODE_000_SUCCESS) {
                    return endOfMethod(
                        code = code,
                        dmLocked = false
                    )
                }

                /** Update the role-permission-resource PA assignment in the AC */
                code = ac?.updatePermissionToRole(
                    roleName = newPermissionTuple.roleName,
                    permission = newPermissionTuple.permission,
                    resourceName = newPermissionTuple.resourceName
                ) ?: CODE_000_SUCCESS
                if (code != CODE_000_SUCCESS) {
                    return endOfMethod(
                        code = code,
                        dmLocked = false
                    )
                }
            }
            PermissionType.READWRITE -> {

                val resource = mm.getResources(
                    resourceName = resourceName,
                    status = UnitElementStatus.OPERATIONAL,
                    isAdmin = user.isAdmin,
                    offset = 0,
                    limit = 1,
                ).firstOrNull() ?: return endOfMethod(
                        code = CODE_006_RESOURCE_NOT_FOUND,
                        dmLocked = false
                    )
                val resourceToken = resource.token
                val resourceEncVersionNumber = resource.symEncKeyVersionNumber

                val roleResourcePermissionTuple = mm.getPermissionTuples(
                    roleName = roleName,
                    resourceName = resourceName,
                ).firstOrNull()
                if (roleResourcePermissionTuple == null) {
                    logger.warn {
                        "Role $roleName does not have any " +
                        "permission over resource $resourceName"
                    }
                    return endOfMethod(
                        code = CODE_008_PERMISSIONTUPLE_NOT_FOUND,
                        dmLocked = false
                    )
                }

                logger.debug {
                    "Getting the permission tuple " +
                    "of the admin over $resourceName"
                }

                val adminPermissionTuple = mm.getPermissionTuples(
                    roleName = ADMIN,
                    resourceName = resourceName,
                ).first()
                verifyTupleSignature(adminPermissionTuple)

                val newResourceEncKeyVersionNumber = adminPermissionTuple.symKeyVersionNumber + 1

                /** Consistency checks on resource token */
                if (resourceToken != adminPermissionTuple.resourceToken) {
                    val message = "Resource tokens are inconsistent " +
                            "(resource is $resourceToken, permission" +
                            "tuple is ${adminPermissionTuple.resourceToken}"
                    logger.error { message }
                    throw IllegalStateException(message)
                }

                /** Consistency checks on resource version number */
                if (resourceEncVersionNumber != adminPermissionTuple.symKeyVersionNumber) {
                    val message = "Version numbers are inconsistent " +
                            "(resource is $resourceEncVersionNumber, permission" +
                            "tuple is ${adminPermissionTuple.symKeyVersionNumber}"
                    logger.error { message }
                    throw IllegalStateException(message)
                }

                /** Do cryptographic operations only if the enforcement is cryptographic */
                val newSymKey: SymmetricKeyCryptoAC? = when (resource.enforcement) {
                    EnforcementType.TRADITIONAL -> {
                        null
                    }
                    EnforcementType.COMBINED -> {
                        logger.debug { "Generating new key for resource $resourceName" }
                        cryptoSKE.generateSymKey()
                    }
                }

                logger.debug { "Generating new token for resource $resourceName" }
                val newResourceToken = UnitElement.generateRandomToken()

                logger.debug { "Updating permission tuples of other roles over resource $resourceName" }
                val permissionTuplesOfOtherRoles = mm.getPermissionTuples(
                    resourceName = resourceName,
                    offset = 0,
                    limit = NO_LIMIT
                )
                permissionTuplesOfOtherRoles.retainAll {
                    (it.roleName != roleName)
                }

                val newPermissionTuples = HashSet<PermissionTuple>()
                for (permissionTupleOfOtherRole in permissionTuplesOfOtherRoles) {
                    verifyTupleSignature(permissionTupleOfOtherRole)

                    /** Do cryptographic operations only if the enforcement is cryptographic */
                    val newEncryptingSymKeyOtherRole = when (resource.enforcement) {
                        EnforcementType.TRADITIONAL -> {
                            EncryptedSymKey("null".toByteArray())
                        }
                        EnforcementType.COMBINED -> {
                            val roleEncPublicKeyBytes = mm.getPublicKey(
                                name = permissionTupleOfOtherRole.roleName,
                                elementType = RBACUnitElementTypeWithKeys.ROLE,
                                asymKeyType = AsymKeysType.ENC
                            )
                            val roleEncPublicKey = cryptoPKE.recreateAsymPublicKey(
                                asymPublicKeyBytes = roleEncPublicKeyBytes!!,
                                type = AsymKeysType.ENC
                            )
                            cryptoPKE.encryptSymKey(
                                encryptingKey = roleEncPublicKey,
                                symKey = newSymKey!!
                            )
                        }
                    }

                    /**
                     * Which one is the symmetric key to use to decrypt the resource
                     * later on? If the decryption and encryption version numbers
                     * are the same, then there are two possibilities:
                     * - the decryption and encryption symmetric keys are the same
                     * as well (e.g., the resource was just created). In this case,
                     * pick any of the two keys as the decryption key.
                     * - the decryption and encryption symmetric keys are different,
                     * even though they should be equal (as the version numbers are
                     * the same). In this case, the decryption key should be the
                     * encryption key.
                     *
                     * If the decryption and encryption version numbers are different,
                     * it means that, previously, the admin renewed the key and no
                     * user wrote on the resource since (otherwise, the version numbers
                     * would be the same). In this case, pick the decryption key
                     */
                    val newDecryptingSymKeyOtherRole = if (resource.symDecKeyVersionNumber == resource.symEncKeyVersionNumber) {
                        permissionTupleOfOtherRole.encryptingSymKey
                    } else {
                        permissionTupleOfOtherRole.decryptingSymKey
                    }

                    logger.debug { "Creating new permission tuple for role ${permissionTupleOfOtherRole.roleName}" }
                    val newPermissionTuple = PermissionTuple(
                        roleName = permissionTupleOfOtherRole.roleName,
                        roleToken = permissionTupleOfOtherRole.roleToken,
                        resourceName = resourceName,
                        resourceToken = newResourceToken,
                        roleVersionNumber = permissionTupleOfOtherRole.roleVersionNumber,
                        symKeyVersionNumber = permissionTupleOfOtherRole.symKeyVersionNumber + 1,
                        permission = permissionTupleOfOtherRole.permission,
                        encryptingSymKey = newEncryptingSymKeyOtherRole,
                        decryptingSymKey = newDecryptingSymKeyOtherRole,
                    )
                    val signature = cryptoPKE.createSignature(
                        bytes = newPermissionTuple.getBytesForSignature(),
                        signingKey = asymSigKeyPair.private
                    )
                    newPermissionTuple.updateSignature(
                        newSignature = signature,
                        newSigner = ADMIN,
                    )

                    /**
                     * No need to update or change the
                     * role-permission-resource PA assignment
                     * in the AC of the other roles
                     */
                    newPermissionTuples.add(newPermissionTuple)
                }

                logger.debug {
                    "Deleting all permission tuples for " +
                    "role $roleName over resource $resourceName"
                }
                code = mm.deletePermissionTuples(
                    resourceName = resourceName
                )
                if (code != CODE_000_SUCCESS) {
                    return endOfMethod(
                        code = code,
                        dmLocked = false
                    )
                }

                /**
                 * Update the token of the resource
                 * and the encryption version number
                 */
                code = mm.updateResourceTokenAndVersionNumber(
                    resourceName = resourceName,
                    oldResourceToken = resourceToken,
                    newResourceToken = newResourceToken,
                    newSymEncKeyVersionNumber = newResourceEncKeyVersionNumber
                )
                if (code != CODE_000_SUCCESS) {
                    return endOfMethod(
                        code = code,
                        dmLocked = false
                    )
                }

                code = mm.addPermissionTuples(newPermissionTuples)
                if (code != CODE_000_SUCCESS) {
                    return endOfMethod(
                        code = code,
                        dmLocked = false
                    )
                }

                /** Delete the role-*-resource PA assignment from the AC */
                code = ac?.revokePermissionFromRole(
                    roleName = roleName,
                    resourceName = resourceName
                ) ?: CODE_000_SUCCESS
                if (code != CODE_000_SUCCESS) {
                    return endOfMethod(
                        code = code,
                        dmLocked = false
                    )
                }
            }
        }

        return endOfMethod(
            code = CODE_000_SUCCESS,
            dmLocked = false
        )
    }

    /**
     * Download, decrypt and check the signature of
     * the content of the resource [resourceName]
     * and return it along with the outcome code (if an
     * error occurred, the content of the resource will
     * be null)
     */
    override fun readResource(
        resourceName: String
    ): CodeResource {
        logger.info { "Reading resource $resourceName by user ${user.name}" }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CodeResource(CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the services */
        val code = startOfMethod(acLock = false)
        if (code != CODE_000_SUCCESS) {
            return CodeResource(code)
        }

        val resource = mm.getResources(
            resourceName = resourceName,
            isAdmin = user.isAdmin,
            offset = 0,
            limit = 1,
        ).firstOrNull()
        if (resource == null) {
            logger.warn {
                "Resource not found. Either user ${user.name} does not have " +
                "access to resource $resourceName or resource does not exist"
            }
            return CodeResource(
                code = endOfMethod(
                    code = CODE_006_RESOURCE_NOT_FOUND,
                    acLocked = false
                ))
        }

        val resourceToReadResult = dm.readResource(resourceName)
        if (resourceToReadResult.code != CODE_000_SUCCESS) {
            return CodeResource(
                code = endOfMethod(
                    code = resourceToReadResult.code,
                    acLocked = false
                ))
        }
        var resourceStream = resourceToReadResult.stream!!

        when (resource.enforcement) {
            /** Do nothing */
            EnforcementType.TRADITIONAL -> { }
            /** We need the symmetric key to decrypt the resource */
            EnforcementType.COMBINED -> {
                val symKeyCode = getDecSymmetricKey(resource)
                if (symKeyCode.code != CODE_000_SUCCESS) {
                    return CodeResource(
                        code = endOfMethod(
                            code = symKeyCode.code,
                            acLocked = false
                        ))
                }

                resourceStream = cryptoSKE.decryptStream(
                    decryptingKey = symKeyCode.key!!,
                    stream = resourceStream
                )
            }
        }

        return CodeResource(
            code = endOfMethod(
                code = CODE_000_SUCCESS,
                acLocked = false
            ),
            stream = resourceStream
        )
    }

    /**
     * Encrypt, sign and upload the new [resourceContent]
     * for the resource [resourceName]. Finally, return
     * the outcome code
     */
    abstract override fun writeResource(
        resourceName: String,
        resourceContent: InputStream
    ): OutcomeCode



    /**
     * Return the set of users, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
     */
    override fun getUsers(): CodeUsers {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting users" }

        /** Lock the status of the services */
        val code = startOfMethod(
            dmLock = false,
            acLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodeUsers(code)
        } else {
            val users = mm.getUsers()
            CodeUsers(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    dmLocked = false,
                    acLocked = false
                ),
                users = users
            )
        }
    }

    /**
     * Return the set of roles, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
     */
    override fun getRoles(): CodeRoles {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting roles" }

        /** Lock the status of the services */
        val code = startOfMethod(
            dmLock = false,
            acLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodeRoles(code)
        } else {
            val roles = mm.getRoles()
            CodeRoles(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    dmLocked = false,
                    acLocked = false
                ),
                roles = roles
            )
        }
    }

    /**
     * Return the set of resources, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
     */
    override fun getResources(): CodeResources {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting resources" }

        /** Lock the status of the services */
        val code = startOfMethod(
            dmLock = false,
            acLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodeResources(code)
        } else {
            val resources = mm.getResources()
            CodeResources(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    dmLocked = false,
                    acLocked = false
                ),
                resources = resources
            )
        }
    }

    /**
     * Return the user-role assignments filtering
     * by the [username] and [roleName], if given,
     * along with the outcome code (if an error
     * occurred, the set of users will be null)
     */
    override fun getAssignments(
        username: String?,
        roleName: String?
    ): CodeRoleTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting role tuples" }

        /** Lock the status of the services */
        val code = startOfMethod(
            dmLock = false,
            acLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodeRoleTuples(code)
        } else {
            val roleTuples = mm.getRoleTuples(
                username = username,
                roleName = roleName,
                isAdmin = user.isAdmin,
                offset = 0, limit = NO_LIMIT,
            ).onEach {
                verifyTupleSignature(it)
            }

            CodeRoleTuples(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    dmLocked = false,
                    acLocked = false
                ),
                roleTuples = roleTuples
            )
        }
    }

    /**
     * Return the role-resource permissions filtering
     * by the [username], [roleName] and [resourceName],
     * if given, along with the outcome code (if an error
     * occurred, the set of users will be null)
     */
    override fun getPermissions(
        username: String?,
        roleName: String?,
        resourceName: String?
    ): CodePermissionTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting permission tuples" }

        /** Lock the status of the services */
        val code = startOfMethod(
            acLock = false,
            dmLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodePermissionTuples(code)
        } else {
            val permissionTuples = HashSet<PermissionTuple>()
            mm.getRoleTuples(
                username = username,
                roleName = roleName,
                isAdmin = user.isAdmin,
                offset = 0,
                limit = NO_LIMIT
            ).forEach { roleTuple ->
                verifyTupleSignature(roleTuple)
                permissionTuples.addAll(
                    mm.getPermissionTuples(
                        roleName = roleTuple.roleName,
                        resourceName = resourceName,
                        isAdmin = user.isAdmin,
                        offset = 0,
                        limit = NO_LIMIT,
                    ).apply {
                        forEach {
                            verifyTupleSignature(it)
                        }
                    }
                )
            }
            CodePermissionTuples(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    acLocked = false,
                    dmLocked = false
                ),
                permissionTuples = permissionTuples
            )
        }
    }



    /**
     * Get the symmetric key to encrypt the [resource]
     * Finally, return the key along with an outcome code
     */
    protected fun getEncSymmetricKey(
        resource: Resource
    ): CodeSymmetricKeyRBAC {
        return getSymmetricKey(
            resource = resource,
            encryptingKey = true
        )
    }

    /**
     * Get the symmetric key to decrypt the [resource]
     * Finally, return the key along with an outcome code
     */
    private fun getDecSymmetricKey(
        resource: Resource
    ): CodeSymmetricKeyRBAC {
        return getSymmetricKey(
            resource = resource,
            encryptingKey = false
        )
    }

    /**
     * Get the symmetric key related to the [resource],
     * either the encrypting key (if [encryptingKey])
     * or the decrypting key
     * Finally, return the key along with an outcome code
     */
    // TODO == BELOW == added for DBSEC EXP, remove
    // TODO => make "getSymmetricKey" a private function again
    // TODO == ABOVE == added for DBSEC EXP, remove
    public fun getSymmetricKey(
        resource: Resource,
        encryptingKey: Boolean,
    ): CodeSymmetricKeyRBAC {
        logger.info {"Getting the symmetric key for resource ${resource.name}"}

        val assignedRoleTuples = mm.getRoleTuples(
            username = user.name,
            isAdmin = user.isAdmin,
            offset = 0, limit = 1,
        )

        if (assignedRoleTuples.isEmpty()) {
            return (CodeSymmetricKeyRBAC(
                code = CODE_006_RESOURCE_NOT_FOUND
            ))
        }

        var roleTupleOfResource: RoleTuple? = null
        var permissionTupleOfResource: PermissionTuple? = null

        run found@{
            assignedRoleTuples.forEach { currentRoleTuple ->
                verifyTupleSignature(currentRoleTuple)
                permissionTupleOfResource = mm.getPermissionTuples(
                    roleName = currentRoleTuple.roleName,
                    resourceName = resource.name,
                    isAdmin = user.isAdmin,
                    offset = 0,
                    limit = 1
                ).firstOrNull()

                if (permissionTupleOfResource != null) {
                    verifyTupleSignature(permissionTupleOfResource!!)
                    roleTupleOfResource = currentRoleTuple
                    return@found
                }
            }
        }

        if (permissionTupleOfResource == null || roleTupleOfResource == null) {
            return (CodeSymmetricKeyRBAC(
                code = CODE_006_RESOURCE_NOT_FOUND
            ))
        }

        val roleAsymEncKeys = cryptoPKE.decryptAsymEncKeys(
            encryptingKey = asymEncKeyPair.public,
            decryptingKey = asymEncKeyPair.private,
            encryptedAsymEncKeys = roleTupleOfResource!!.encryptedAsymEncKeys!!
        )
        val symKeyToDecrypt = if (encryptingKey) {
            permissionTupleOfResource!!.encryptingSymKey!!
        } else {
            if (resource.symDecKeyVersionNumber == resource.symEncKeyVersionNumber) {
                permissionTupleOfResource!!.encryptingSymKey!!
            } else {
                permissionTupleOfResource!!.decryptingSymKey!!
            }
        }
        return CodeSymmetricKeyRBAC(
            key = cryptoPKE.decryptSymKey(
                encryptingKey = roleAsymEncKeys.public,
                decryptingKey = roleAsymEncKeys.private,
                encryptedSymKey = symKeyToDecrypt
            ),
            role = roleTupleOfResource!!.roleName
        )
    }

    /**
     * Verify the signature of the given [tuple]. If the
     * signature is invalid, a SignatureException will be thrown
     */
    private fun verifyTupleSignature(
        tuple: Tuple
    ) {
        // TODO is it the name or the token? should this be "user.token"? And then, are we sure
        //  that the token in "user.token" corresponds to the user's token (or it was just generated
        //  anew when creating the class instance)?
        if (tuple.signer == user.name) {
            cryptoPKE.verifySignature(
                signature = tuple.signature!!,
                bytes = tuple.getBytesForSignature(),
                verifyingKey = asymSigKeyPair.public
            )
        } else {
            val asymSigPublicKeyBytes = mm.getPublicKey(
                token = tuple.signer,
                elementType = RBACUnitElementTypeWithKeys.USER,
                asymKeyType = AsymKeysType.SIG,
            )
            val asymSigPublicKey = cryptoPKE.recreateAsymPublicKey(
                asymPublicKeyBytes = asymSigPublicKeyBytes!!,
                type = AsymKeysType.SIG
            )
            cryptoPKE.verifySignature(
                signature = tuple.signature!!,
                bytes = tuple.getBytesForSignature(),
                verifyingKey = asymSigPublicKey
            )
        }
    }
}
