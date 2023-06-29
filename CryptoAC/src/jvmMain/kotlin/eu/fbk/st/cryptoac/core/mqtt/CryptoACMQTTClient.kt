package eu.fbk.st.cryptoac.core.mqtt

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.waitForCondition
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.client.MqttClient
import org.eclipse.paho.mqttv5.client.MqttClientPersistence
import org.eclipse.paho.mqttv5.client.MqttConnectionOptions
import org.eclipse.paho.mqttv5.common.MqttMessage
import java.io.FileInputStream
import java.io.FileNotFoundException
import java.io.InputStream
import java.security.KeyStore
import javax.net.SocketFactory
import javax.net.ssl.SSLContext
import javax.net.ssl.TrustManagerFactory

private val logger = KotlinLogging.logger {}

/**
 * Extension of MqttClient to provide synchronized
 * methods for connection. Furthermore, specify
 * whether to enable [tls] and the [username]
 * and [password] to use
 */
class CryptoACMQTTClient(
    serverURI: String,
    clientId: String,
    persistence: MqttClientPersistence,
    private val tls: Boolean,
    private val username: String,
    private val password: String
) : MqttClient(serverURI, clientId, persistence) {

    // TODO check MQTT client configuration

    /**
     * Whether the MQTT client already
     * connected once to the broker
     */
    private var alreadyConnectedOnce: Boolean = false

    /**
     * Whether the MQTT client is already
     * reconnecting to the broker
     */
    private var connecting: Boolean = false

    /** Lock to synchronize the connection procedure */
    private val connectMutex = Mutex()

    /**
     * Synchronously connect to the MQTT broker. Return
     * true if the client is connected, false otherwise
     */
    fun connectSync(): Boolean {
        val client = this
        /**
         * Synchronize on the [connectMutex] mutex to avoid
         * multiple connection requests to the MQTT client
         * at the same time
         */
        return runBlocking {
            connectMutex.withLock {
                try {
                    logger.debug { "connectSync invoked (client ID $clientId)" }
                    if (!isConnected) {
                        logger.debug { "client is not connected" }
                        if (!connecting) {
                            connecting = true
                            if (alreadyConnectedOnce) {
                                logger.debug { "reconnecting" }
                                super.reconnect()
                            } else {
                                logger.debug { "connecting" }

                                val connOpts = MqttConnectionOptions()
                                connOpts.isCleanStart = false
                                connOpts.keepAliveInterval = 120
                                connOpts.isAutomaticReconnect = true
                                connOpts.userName = username
                                connOpts.password = password.toByteArray()
                                if (tls) {
                                    connOpts.socketFactory = getTruststoreFactory()
                                }
                                super.connect(connOpts)
                                alreadyConnectedOnce = true
                            }
                            connecting = false
                        } else {
                            logger.debug { "but it is already connecting" }
                        }
                        logger.debug { "waiting for client to be connected" }
                        waitForCondition { client.isConnected }
                    } else {
                        logger.debug { "client is already connected" }
                        true
                    }
                } catch (e: Exception) {
                    logger.error { "exception while connecting to MQTT broker" }
                    logger.error { e }
                    e.printStackTrace()
                    throw e
                }
            }
        }
    }

    /**
     * Ensure the client is connected, then invoke the
     * super function to publish the [message] in the
     * [topic]. Specify whether the client [isTheDM].
     * Finally, return a proper outcome code
     */
    fun myPublish(
        topic: String,
        message: MqttMessage,
        isTheDM: Boolean
    ): OutcomeCode {
        return if (connectSync()) {
            super.publish(topic, message)
            OutcomeCode.CODE_000_SUCCESS
        } else {
            if (isTheDM) {
                OutcomeCode.CODE_044_DM_CONNECTION_TIMEOUT
            } else {
                OutcomeCode.CODE_047_AC_CONNECTION_TIMEOUT
            }
        }
    }

    /**
     * Ensure the client is connected, then invoke the
     * super function to subscribe to the [topicFilter]
     * with the given [qos]. Specify whether the client [isTheDM].
     * Finally, return a proper outcome code
     */
    fun mySubscribe(
        topicFilter: String,
        qos: Int,
        isTheDM: Boolean,
    ): OutcomeCode {
        return if (connectSync()) {
            super.subscribe(topicFilter, qos)
            OutcomeCode.CODE_000_SUCCESS
        } else {
            if (isTheDM) {
                OutcomeCode.CODE_044_DM_CONNECTION_TIMEOUT
            } else {
                OutcomeCode.CODE_047_AC_CONNECTION_TIMEOUT
            }
        }
    }

    // TODO comment and todo
    private fun getTruststoreFactory(): SocketFactory? {
        val trustStore = KeyStore.getInstance("JKS")
        val myis: InputStream = try {
            FileInputStream("/mosquittoCACertificate.jks")
        } catch(e: FileNotFoundException) {
            CryptoACMQTTClient::class.java.classLoader.getResourceAsStream("cryptoac/Mosquitto/mosquittoCACertificate.jks")!!
        }
        trustStore.load(myis, "password".toCharArray())
        val tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm())
        tmf.init(trustStore)
        val sslCtx = SSLContext.getInstance("TLSv1.3")
        sslCtx.init(null, tmf.trustManagers, null)
        return sslCtx.socketFactory
    }

    // TODO sync method with a lock. you have two concurrency problems:
    //  user wants to write, but we still have to retrieve the key.
    //  => sync on method: if key was retrieved, simply write. Otherwise,
    //     store the "message" to send in a queue and make the mqtt callback
    //     function (i.e., the one that receives the key) to send all messages
    //     in the queue.
}
