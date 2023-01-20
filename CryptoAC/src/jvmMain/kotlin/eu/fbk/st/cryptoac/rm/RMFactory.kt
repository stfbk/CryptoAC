package eu.fbk.st.cryptoac.rm

import eu.fbk.st.cryptoac.rm.cryptoac.RMServiceRBACCryptoAC
import eu.fbk.st.cryptoac.rm.cryptoac.RMServiceRBACCryptoACParameters
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Factory for creating RM objects */
class RMFactory {

    companion object {
        /** Return an RM service configured with the given [rmParameters] */
        fun getRM(rmParameters: RMServiceParameters): RMService? {
            logger.debug { "Creating RM object of type ${rmParameters.rmType}" }
            return when (rmParameters.rmType) {
                RMType.RBAC_CRYPTOAC -> {
                    if (rmParameters is RMServiceRBACCryptoACParameters) {
                        RMServiceRBACCryptoAC(rmParameters)
                    } else {
                        val message = "Received wrong parameters for RM type ${RMType.RBAC_CRYPTOAC}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                RMType.NONE -> null
            }
        }
    }
}
