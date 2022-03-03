package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.core.CryptoACMqttClient
import eu.fbk.st.cryptoac.generateRandomString
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.client.persist.MemoryPersistence

private val logger = KotlinLogging.logger {}

/** Factory for creating DM objects */
class DMFactory {

    companion object {
        /** Return a DM interface configured with the given [dmParameters] */
        fun getDM(dmParameters: DMInterfaceParameters): DMInterface {
            logger.debug { "Creating DM object of type ${dmParameters.dmType}" }
            return when (dmParameters.dmType) {
                DMType.CRYPTOAC -> {
                    if (dmParameters is DMInterfaceCryptoACParameters) {
                        DMInterfaceRBACCryptoAC(dmParameters)
                    } else {
                        val message = "Received wrong parameters for DM type ${DMType.CRYPTOAC}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                DMType.MOSQUITTO -> {
                    if (dmParameters is DMInterfaceMosquittoParameters) {
                        val brokerBaseAPI = "${if (dmParameters.tls) "ssl" else "tcp"}://${dmParameters.url}:${dmParameters.port}"
                        val client = CryptoACMqttClient(brokerBaseAPI, generateRandomString(), MemoryPersistence()) // TODO check configuration is ok
                        DMInterfaceMosquitto(dmParameters, client)
                    } else {
                        val message = "Received wrong parameters for DM type ${DMType.MOSQUITTO}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            }
        }
    }
}