package eu.fbk.st.cryptoac.implementation.mm

import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Factory for creating MM objects */
class MMFactory {

    companion object {
        /** Return an MM interface configured with the given [mmParameters] */
        fun getMM(mmParameters: MMInterfaceParameters): MMInterface {
            logger.debug { "Creating MM object of type ${mmParameters.mmType}" }
            return when (mmParameters.mmType) {
                MMType.MYSQL -> {
                    if (mmParameters is MMInterfaceMySQLParameters) {
                        MMInterfaceMySQL(mmParameters)
                    } else {
                        val message = "Received wrong parameters for MM type ${MMType.MYSQL}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                MMType.REDIS -> {
                    if (mmParameters is MMInterfaceRedisParameters) {
                        MMInterfaceRedis(mmParameters)
                    } else {
                        val message = "Received wrong parameters for MM type ${MMType.REDIS}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            }
        }
    }
}