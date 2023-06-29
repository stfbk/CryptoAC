package eu.fbk.st.cryptoac.core.dataatrest

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.dm.DMFactory
import eu.fbk.st.cryptoac.ac.*
import eu.fbk.st.cryptoac.core.CoreParametersRBAC
import eu.fbk.st.cryptoac.core.CoreRBACTuples
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceRBACCryptoAC
import eu.fbk.st.cryptoac.rm.RMFactory
import eu.fbk.st.cryptoac.mm.MMFactory
import eu.fbk.st.cryptoac.mm.MMServiceRBAC
import eu.fbk.st.cryptoac.model.RBACUnitElementTypeWithKeys
import eu.fbk.st.cryptoac.rm.RMServiceRBAC
import mu.KotlinLogging
import java.io.InputStream

private val logger = KotlinLogging.logger {}

// TODO implementa la possibilità di dare WRITE permissions
//  only anche nel cloud? Però attenti che il CSP può colludere

/**
 * The CoreRBACCryptoAC implements a role-based CAC scheme
 * with hybrid cryptography for the base CryptoAC scenario.
 * It requires an MM, an RM and a DM service, while AC is optional
 * It receives the [coreParameters] and uses the [cryptoPKE] and
 * [cryptoSKE] objects to perform cryptographic computations
 */
class CoreRBACryptoAC(
    override val cryptoPKE: CryptoPKE,
    override val cryptoSKE: CryptoSKE,
    override val coreParameters: CoreParametersRBAC
) : CoreRBACTuples(cryptoPKE, cryptoSKE, coreParameters) {

    /** The MM service */
    override val mm: MMServiceRBAC = MMFactory.getMM(
        mmParameters = coreParameters.mmServiceParameters
    ) as MMServiceRBAC

    /** The DM service */
    override val dm: DMServiceRBACCryptoAC = DMFactory.getDM(
        dmParameters = coreParameters.dmServiceParameters
    ) as DMServiceRBACCryptoAC

    /** The RM service */
    override val rm: RMServiceRBAC = RMFactory.getRM(
        rmParameters = coreParameters.rmServiceParameters!!
    ) as RMServiceRBAC

    /** The AC service */
    override val ac: ACServiceRBAC? = coreParameters.acServiceParameters?.let {
        ACFactory.getAC(acParameters = it)
    } as ACServiceRBAC?

    /** The user in the [coreParameters] */
    override val user: User = coreParameters.user

    /** Asymmetric encryption key pair */
    override val asymEncKeyPair: KeyPairCryptoAC = cryptoPKE.recreateAsymKeyPair(
        asymPublicKeyBytes = user.asymEncKeys?.public?.decodeBase64()!!,
        asymPrivateKeyBytes = user.asymEncKeys.private.decodeBase64(),
        type = AsymKeysType.ENC
    )

    /** Asymmetric signature key pair */
    override val asymSigKeyPair: KeyPairCryptoAC = cryptoPKE.recreateAsymKeyPair(
        asymPublicKeyBytes = user.asymSigKeys?.public?.decodeBase64()!!,
        asymPrivateKeyBytes = user.asymSigKeys.private.decodeBase64(),
        type = AsymKeysType.SIG
    )



    /**
     * Add a new resource with the given name [resourceName],
     * [resourceContent], [enforcement] type to the policy.
     * Encrypt, sign and upload the new [resourceContent]
     * for the resource [resourceName]. Also, assign all
     * permissions to the admin over the resource. Finally,
     * return the outcome code
     *
     * In this implementation, the user cannot upload
     * the resource by herself, but she has instead to ask
     * the RM
     */
    // TODO implementa per il CoreRBAC il versioning (i.e., senza RM)
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
        var code = startOfMethod(acLock = false)
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

        /**
         * Below, do not add the resource as it is, but
         * instead invoke the RM to validate the operation
         */

        /** Add the resource in the DM */
        code = dm.addResource(
            newResource = newResource,
            content = encryptedResourceContent
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                acLocked = false
            )
        }

        /** Ask the RM to add the resource */
        code = rm.checkAddResource(
            newResource = newResource,
            adminPermissionTuple = adminPermissionTuple
        )
        return if (code != CODE_000_SUCCESS) {
            /** TODO can a user invoke this function? The RM should do it */
            val deleteTempResourceCode = dm.deleteTemporaryResource(newResource.name)
            if (deleteTempResourceCode != CODE_000_SUCCESS) {
                logger.error {
                    "Added resource in the DM, the RM could not check it and " +
                    "we were not able to delete the (temporary) resource from" +
                    " the DM; contact the system administrator"
                }
                endOfMethod(
                    code = CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_RESOURCE_IN_DM,
                    acLocked = false
                )
            } else
                endOfMethod(
                    code = code,
                    acLocked = false
                )
        } else {
            endOfMethod(
                code = code,
                acLocked = false
            )
        }
    }


    /**
     * Encrypt, sign and upload the new [resourceContent]
     * for the resource [resourceName]. Finally, return
     * the outcome code
     *
     * In this implementation, the user cannot overwrite
     * the resource by herself, but she has instead to
     * upload the resource in the DM and then ask the RM
     * to validate the operation
     */
    override fun writeResource(
        resourceName: String,
        resourceContent: InputStream
    ): OutcomeCode {
        logger.info { "Writing resource $resourceName by user ${user.name}" }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        var code = startOfMethod(acLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        val resourceObject = mm.getResources(
            resourceName = resourceName,
            isAdmin = user.isAdmin,
            offset = 0,
            limit = 1
        ).firstOrNull()
        if (resourceObject == null) {
            logger.warn {
                "Resource not found. Either user ${user.name} does not have " +
                "access to resource $resourceName or resource does not exist"
            }
            return endOfMethod(
                code = CODE_006_RESOURCE_NOT_FOUND,
                acLocked = false
            )
        }

        val resourceStream: InputStream
        val latestResourceVersionNumber = resourceObject.symEncKeyVersionNumber
        val roleAssumed: String

        when (resourceObject.enforcement) {
            EnforcementType.COMBINED -> {
                val symKeyCode = getEncSymmetricKey(resourceObject)
                if (symKeyCode.code != CODE_000_SUCCESS) {
                    return endOfMethod(
                        code = symKeyCode.code,
                        acLocked = false
                    )
                }

                roleAssumed = symKeyCode.role!!
                resourceStream = cryptoSKE.encryptStream(
                    encryptingKey = symKeyCode.key!!,
                    stream = resourceContent
                )
            }
            EnforcementType.TRADITIONAL -> {
                roleAssumed = TODO()
                resourceStream = resourceContent
            }
        }

        val newResource = Resource(
            name = resourceName,
            symDecKeyVersionNumber = latestResourceVersionNumber,
            symEncKeyVersionNumber = latestResourceVersionNumber,
            enforcement = resourceObject.enforcement
        )
        newResource.token = resourceObject.token

        code = dm.addResource(
            newResource = newResource,
            content = resourceStream
        )
        return if (code != CODE_000_SUCCESS) {
            endOfMethod(
                code = code,
                acLocked = false
            )
        } else {
            code = rm.checkWriteResource(
                roleName = roleAssumed,
                symEncKeyVersionNumber = newResource.symEncKeyVersionNumber,
                newResource = newResource,
            )
            if (code != CODE_000_SUCCESS) {
                /** TODO can a user invoke this function? The RM should do it */
                val deleteTempResourceCode = dm.deleteTemporaryResource(newResource.name)
                if (deleteTempResourceCode != CODE_000_SUCCESS) {
                    logger.error {
                        "Added resource in the DM, the RM could not check it and " +
                        "we were not able to delete the (temporary) resource from" +
                        " the DM; contact the system administrator"
                    }
                    endOfMethod(
                        code = CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_RESOURCE_IN_DM,
                        acLocked = false
                    )
                } else {
                    endOfMethod(
                        code = code,
                        acLocked = false
                    )
                }
            } else {
                endOfMethod(
                    code = code,
                    acLocked = false
                )
            }
        }
    }
}
