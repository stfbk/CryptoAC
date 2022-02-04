package eu.fbk.st.cryptoac.implementation.rm

import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Factory for creating RM objects */
class RMFactory {

    companion object {
        /** Return an RM interface configured with the given [rmParameters] */
        fun getRM(rmParameters: RMInterfaceParameters): RMInterface? {
            logger.debug { "Creating RM object of type ${rmParameters.rmType}" }
            return when (rmParameters.rmType) {
                RMType.CRYPTOAC -> {
                    if (rmParameters is RMInterfaceCryptoACParameters) {
                        RMInterfaceCryptoAC(rmParameters)
                    } else {
                        val message = "Received wrong parameters for RM type ${RMType.CRYPTOAC}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                RMType.NONE -> null
            }
        }
    }
}