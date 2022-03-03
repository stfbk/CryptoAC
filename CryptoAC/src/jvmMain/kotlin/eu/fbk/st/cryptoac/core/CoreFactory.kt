package eu.fbk.st.cryptoac.core

import development
import eu.fbk.st.cryptoac.crypto.CryptoFactory
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Factory for creating Core objects */
class CoreFactory {

    companion object {
        /**
         * Return a Core object configured
         * with the given [coreParameters]
         */
        fun getCore(coreParameters: CoreParameters): Core {
            val coreType = coreParameters.coreType
            val cryptoType = coreParameters.cryptoType
            logger.debug { "Creating core of type $coreType, crypto " +
                    "$cryptoType for user ${coreParameters.user.name}" }
            val cryptoObject = CryptoFactory.getCrypto(cryptoType)
            return when (coreType) {
                CoreType.RBAC_CLOUD -> {
                    if (coreParameters is CoreParametersCLOUD) {
                        CoreRBACCLOUD(
                            crypto = cryptoObject,
                            coreParameters = coreParameters,
                        )
                    } else {
                        val message = "Received wrong parameters for core type ${CoreType.RBAC_CLOUD}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                CoreType.RBAC_MQTT -> {
                    if (coreParameters is CoreParametersMQTT) {
                        CoreRBACMQTT(
                            crypto = cryptoObject,
                            coreParameters = coreParameters,
                        )
                    } else {
                        val message = "Received wrong parameters for core type ${CoreType.RBAC_MQTT}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                CoreType.RBAC_MOCK -> if (development) {
                    if (coreParameters is CoreParametersMOCK) {
                        CoreRBACMOCK(
                            crypto = cryptoObject,
                            coreParameters = coreParameters,
                        )
                    } else {
                        val message = "Received wrong parameters for core type ${CoreType.RBAC_MOCK}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                } else {
                    val message = "Using MOCK core when not in development mode"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
            }
        }
    }
}