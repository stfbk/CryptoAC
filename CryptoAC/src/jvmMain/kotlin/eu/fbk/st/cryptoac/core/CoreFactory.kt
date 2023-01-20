package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.core.dataatrest.CoreRBACryptoAC
import eu.fbk.st.cryptoac.core.mqtt.CoreABACMQTT
import eu.fbk.st.cryptoac.core.mqtt.CoreRBACMQTT
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.crypto.openabe.PrivateKeyOpenABE
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Factory for creating Core objects */
class CoreFactory {

    companion object {
        /**
         * Return a Core object configured
         * with the given [coreParameters]
         * and [cryptoPKE], [cryptoSKE] and
         * [cryptoABE] objects, if given
         */
        fun getCore(
            coreParameters: CoreParameters,
            cryptoPKE: CryptoPKE? = null,
            cryptoSKE: CryptoSKE? = null,
            cryptoABE: CryptoABE? = null
        ): Core {
            val coreType = coreParameters.coreType
            val cryptoType = coreParameters.cryptoType
            logger.debug {
                "Creating core of type $coreType, crypto " +
                "$cryptoType for user ${coreParameters.user.name}"
            }
            val cryptoPKEObject = cryptoPKE ?: CryptoPKEFactory.getCrypto(cryptoType)
            val cryptoSKEObject = cryptoSKE ?: CryptoSKEFactory.getCrypto(cryptoType)
            return when (coreType) {
                CoreType.RBAC_AT_REST -> {
                    if (coreParameters is CoreParametersRBAC) {
                        CoreRBACryptoAC(
                            cryptoPKE = cryptoPKEObject,
                            cryptoSKE = cryptoSKEObject,
                            coreParameters = coreParameters,
                        )
                    } else {
                        val message = "Received wrong parameters for core type ${CoreType.RBAC_AT_REST}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                CoreType.RBAC_MQTT -> {
                    if (coreParameters is CoreParametersRBAC) {
                        CoreRBACMQTT(
                            cryptoPKE = cryptoPKEObject,
                            cryptoSKE = cryptoSKEObject,
                            coreParameters = coreParameters,
                        )
                    } else {
                        val message = "Received wrong parameters for core type ${CoreType.RBAC_MQTT}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                CoreType.ABAC_AT_REST -> {
                    TODO()
//                    if (coreParameters is CoreParametersABAC) {
//                        CoreABACryptoAC(
//                            crypto = cryptoObject as CryptoABE,
//                            coreParameters = coreParameters,
//                        )
//                    } else {
//                        val message = "Received wrong parameters for core type ${CoreType.ABAC_AT_REST}"
//                        logger.error { message }
//                        throw IllegalArgumentException(message)
//                    }
                }
                CoreType.ABAC_MQTT -> {
                    if (coreParameters is CoreParametersABAC) {
                        val cryptoABEType = coreParameters.cryptoABEType
                        logger.debug { "Crypto ABE is $cryptoABEType" }

                        val cryptoABEObject = cryptoABE ?: CryptoABEFactory.getCrypto(cryptoABEType)
                        cryptoABEObject.importABEPublicParams(coreParameters.abePublicParameters)
                        coreParameters.abeMSK?.let { cryptoABEObject.importABEUserKey(PrivateKeyOpenABE(
                            private = it,
                            keyID = coreParameters.user.name,
                        )) }
                        CoreABACMQTT(
                            cryptoPKE = cryptoPKEObject,
                            cryptoSKE = cryptoSKEObject,
                            cryptoABE = cryptoABEObject,
                            coreParameters = coreParameters,
                        )
                    } else {
                        val message = "Received wrong parameters for core type ${CoreType.ABAC_MQTT}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            }
        }
    }
}
