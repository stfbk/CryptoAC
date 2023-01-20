package eu.fbk.st.cryptoac.dm

import eu.fbk.st.cryptoac.core.mqtt.CryptoACMQTTClient
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceCryptoACParameters
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceRBACCryptoAC
import eu.fbk.st.cryptoac.dm.mqtt.DMServiceMQTTParameters
import eu.fbk.st.cryptoac.dm.mqtt.DMServiceMQTT
import eu.fbk.st.cryptoac.generateRandomString
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.client.persist.MemoryPersistence

private val logger = KotlinLogging.logger {}

/** Factory for creating DM objects */
class DMFactory {

    companion object {
        /** Return a DM service configured with the given [dmParameters] */
        fun getDM(dmParameters: DMServiceParameters): DMService {
            logger.debug { "Creating DM object of type ${dmParameters.dmType}" }
            return when (dmParameters.dmType) {
                DMType.CRYPTOAC -> {
                    if (dmParameters is DMServiceCryptoACParameters) {
                        DMServiceRBACCryptoAC(dmParameters)
                    } else {
                        val message = "Received wrong parameters for DM type ${DMType.CRYPTOAC}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                DMType.MQTT -> {
                    if (dmParameters is DMServiceMQTTParameters) {
                        val brokerBaseAPI = if (dmParameters.tls) {
                            "ssl"
                        } else {
                            "tcp"
                        } + "://${dmParameters.url}:${dmParameters.port}"
                        val client = CryptoACMQTTClient(
                            serverURI = brokerBaseAPI,
                            clientId = generateRandomString(),
                            persistence = MemoryPersistence(),
                            tls = dmParameters.tls,
                            username = dmParameters.username,
                            password = dmParameters.password,
                        )
                        DMServiceMQTT(dmParameters, client)
                    } else {
                        val message = "Received wrong parameters for DM type ${DMType.MQTT}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            }
        }
    }
}
