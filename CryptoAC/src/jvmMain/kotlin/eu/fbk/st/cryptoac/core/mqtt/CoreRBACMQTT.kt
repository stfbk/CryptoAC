package eu.fbk.st.cryptoac.core.mqtt

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.ac.ACFactory
import eu.fbk.st.cryptoac.ac.dynsec.ACServiceRBACDynSec
import eu.fbk.st.cryptoac.ac.dynsec.ACServiceRBACDynSecParameters
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.mqtt.model.SymmetricKeysAndCachedMessages
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.dm.*
import eu.fbk.st.cryptoac.dm.mqtt.DMServiceMQTTParameters
import eu.fbk.st.cryptoac.dm.mqtt.DMServiceMQTT
import eu.fbk.st.cryptoac.mm.MMFactory
import eu.fbk.st.cryptoac.mm.MMServiceRBAC
import eu.fbk.st.cryptoac.model.CodeResource
import eu.fbk.st.cryptoac.model.CodeSymmetricKeyRBAC
import eu.fbk.st.cryptoac.rm.RMServiceRBAC
import io.ktor.websocket.*
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.client.*
import org.eclipse.paho.mqttv5.common.MqttException
import org.eclipse.paho.mqttv5.common.MqttMessage
import org.eclipse.paho.mqttv5.common.packet.MqttProperties
import java.io.InputStream
import kotlin.text.String

private val logger = KotlinLogging.logger {}

/**
 * The CoreRBACMQTT implements a role-based CAC scheme
 * with hybrid cryptography for IoT (MQTT) scenarios.
 * It requires an MM and a DM service, while AC is optional
 * It receives the [coreParameters] and uses the [cryptoPKE] and
 * [cryptoSKE] objects to perform cryptographic computations
 */
class CoreRBACMQTT(
    override val cryptoPKE: CryptoPKE,
    override val cryptoSKE: CryptoSKE,
    override val coreParameters: CoreParametersRBAC,
) : CoreRBACTuples(cryptoPKE, cryptoSKE, coreParameters), MqttCallback {

    /** The MM service */
    override val mm: MMServiceRBAC = MMFactory.getMM(
        mmParameters = coreParameters.mmServiceParameters
    ) as MMServiceRBAC

    /** The DM service */
    override val dm: DMServiceMQTT = DMFactory.getDM(
        dmParameters = coreParameters.dmServiceParameters
    ) as DMServiceMQTT

    /** The RM service (not needed for MQTT) */
    override val rm: RMServiceRBAC? = null

    /** The AC service */
    override val ac: ACServiceRBACDynSec? = coreParameters.acServiceParameters?.let {
        ACFactory.getAC(acParameters = it)
    } as ACServiceRBACDynSec?

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

    /** The web socket for sending MQTT messages */
    var wss: DefaultWebSocketSession? = null

    /** Mutex to synchronize the message pub/sub procedure */
    private val messageMutex = Mutex()

    /** A map of subscribed topics with the cached key and messages to send to the client */
    val subscribedTopicsKeysAndMessages = hashMapOf<String, SymmetricKeysAndCachedMessages?>()

    init {
        val acParameters = coreParameters.acServiceParameters as ACServiceRBACDynSecParameters?
        if (acParameters != null) {
            val dmParameters = coreParameters.dmServiceParameters as DMServiceMQTTParameters
            require(((acParameters.tls == dmParameters.tls)
                    || (acParameters.url == dmParameters.url)
                    || (acParameters.port == dmParameters.port)
                    || (acParameters.username == dmParameters.username)
                    )
            ) { "The same Mosquitto MQTT broker must be used as both DM and AC" }
            ac!!.client.setCallback(this)
            dm.client = ac.client
        } else {
            dm.client.setCallback(this)
        }
    }

    /**
     * This function is invoked each time the core object
     * is destroyed, and it should contain the code to
     * de-initialize the core (e.g., possibly disconnect
     * remote services like MQTT brokers, databases, wipe
     * cryptographic secrets, etc.)
     *
     * In this implementation, also flush and close the wss
     */
    override fun deinitCore() {
        super.deinitCore()
        runBlocking {
            wss?.flush()
            wss?.close()
        }
    }



    /**
     * Delete the resource with the matching [resourceName] from
     * the policy, and delete all the related permissions. Finally,
     * return the outcome code
     *
     * In this implementation, invoke the super method and
     * then unsubscribe from the topic
     */
    override fun deleteResource(
        resourceName: String
    ): OutcomeCode {

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Invoke the super method */
        code = super.deleteResource(resourceName)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Unsubscribe from the topic */
        dm.client.unsubscribe(resourceName)
        return endOfMethod(code = CODE_000_SUCCESS)
    }

    /**
     * Download, decrypt and check the signature of
     * the content of the resource [resourceName]
     * and return it along with the outcome code (if an
     * error occurred, the content of the resource will
     * be null)
     *
     * In this implementation, just subscribe to the topic
     * with the given [resourceName]
     */
    override fun readResource(resourceName: String): CodeResource {
        logger.info { "User ${user.name} is asking to subscribe to topic $resourceName" }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Topic name is blank" }
            return CodeResource(CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the services */
        val code = startOfMethod(mmLock = false, acLock = false)
        if (code != CODE_000_SUCCESS) {
            return CodeResource(code)
        }

        /** Send anyway the subscribe request in case of policy updates */
        dm.readResource(resourceName)
        return CodeResource(
            code = endOfMethod(
                code = CODE_000_SUCCESS,
                mmLocked = false,
                acLocked = false
            ),
            stream = null
        )
    }

    /**
     * Encrypt, sign and upload the new [resourceContent]
     * for the resource [resourceName]. Finally, return
     * the outcome code
     *
     * In this implementation, check whether the client
     * is subscribed to the topic with name [resourceName].
     * If so, check the enforcement type and eventually
     * use the cached key to encrypt the message, then
     * publish. Otherwise, fetch the enforcement type
     * and eventually the key from the MM.
     */
    override fun writeResource(
        resourceName: String,
        resourceContent: InputStream
    ): OutcomeCode {
        /**
         * Synchronize to avoid interference with
         * the messageArrived callback function
         */
        return runBlocking {
            messageMutex.withLock {

                logger.info { "Publishing a message in topic $resourceName by user ${user.name}" }

                /** Guard clauses */
                if (resourceName.isBlank()) {
                    logger.warn { "Topic name is blank" }
                    return@withLock CODE_020_INVALID_PARAMETER
                }

                /** Lock the status of the services */
                val code = startOfMethod(acLock = false)
                if (code != CODE_000_SUCCESS) {
                    return@withLock code
                }

                val resource = mm.getResources(
                    resourceName = resourceName,
                    isAdmin = user.isAdmin
                ).firstOrNull()
                if (resource == null) {
                    logger.warn {
                        "Resource not found. Either user ${user.name} does not have " +
                        "access to topic $resourceName or topic does not exist"
                    }
                    return@withLock endOfMethod(
                        code = CODE_006_RESOURCE_NOT_FOUND,
                        acLocked = false
                    )
                }

                val enforcement = if (subscribedTopicsKeysAndMessages.containsKey(resourceName)) {
                    /**
                     * It means that we are publishing to a topic while
                     * being subscribed. Therefore, we are sure that the
                     * key and the enforcement type of the topic are always
                     * up-to-date (because the admin publishes
                     * retained messages for distributing updates)
                     */
                    logger.debug { "Getting enforcement from cache" }
                    subscribedTopicsKeysAndMessages[resourceName]!!.enforcement
                } else {

                    /**
                     * It means that we are publishing to a topic without
                     * being subscribed. Therefore, we have to check
                     * every time whether the key of the topic is still
                     * up-to-date
                     */
                    logger.debug { "Getting enforcement from MM" }
                    resource.enforcement
                }

                return@withLock when (enforcement) {
                    /** MQTT messages should not be encrypted, i.e., just publish it */
                    EnforcementType.TRADITIONAL -> {
                        logger.debug { "Enforcement is TRADITIONAL, no need to encrypt" }
                        endOfMethod(
                            code = dm.writeResource(
                                updatedResource = Resource(
                                    name = resourceName,
                                    enforcement = enforcement
                                ),
                                content = resourceContent
                            ),
                            acLocked = false
                        )
                    }
                    /** MQTT messages should be encrypted, i.e., get the key to do it */
                    EnforcementType.COMBINED -> {
                        logger.debug { "Enforcement is COMBINED, encrypt the message" }
                        val codeAndKey = if (subscribedTopicsKeysAndMessages.containsKey(resourceName)) {
                            logger.debug { "Getting key from cache" }
                            CodeSymmetricKeyRBAC(
                                key = subscribedTopicsKeysAndMessages[resourceName]!!.key,
                                role = subscribedTopicsKeysAndMessages[resourceName]!!.role
                            )
                        } else {
                            logger.debug { "Getting key from MM" }
                            getEncSymmetricKey(resource = resource)
                        }

                        if (codeAndKey.code != CODE_000_SUCCESS) {
                            endOfMethod(
                                code = codeAndKey.code,
                                acLocked = false
                            )
                        } else {
                            val messageStream = cryptoSKE.encryptStream(
                                encryptingKey = codeAndKey.key!!,
                                stream = resourceContent
                            )
                            endOfMethod(
                                code = dm.writeResource(
                                    updatedResource = Resource(
                                        name = resourceName,
                                        enforcement = enforcement
                                    ),
                                    content = messageStream
                                ),
                                acLocked = false
                            )
                        }
                    }
                }
            }
        }
    }



    /**
     * Given an MQTT [message] for a given [topic], send it to
     * the client through WSS. If the client is not connected
     * to the WSS, cache the message to send it later.
     */
    private fun cacheOrSendMessage(topic: String, message: MQTTMessage) {
        if (wss == null) {
            logger.info {(
                "User ${user.name} is not connected "
                + "through WSS, caching the message"
            )}
            subscribedTopicsKeysAndMessages[topic]!!.messages.add(message)
            // TODO we cached the message, now check for reconnection
            //  from the WSS to then send to it the messages
        } else {
            runBlocking {
                logger.info { "Sending the message to the client through WSS" }
                wss!!.send(myJson.encodeToString(message))
            }
        }
    }



    // TODO log doc refactor
    /**
     * This method is called when a [message] arrives from the server in the [topic]
     *
     * This method is invoked synchronously by the MQTT client. An acknowledgment is
     * not sent back to the server until this method returns cleanly
     *
     * If an implementation of this method throws an `Exception`, then
     * the client will be shut down. When the client is next re-connected, any QoS 1
     * or 2 messages will be redelivered by the server
     *
     * Any additional messages which arrive while an implementation of this method
     * is running, will build up in memory, and will then back up on the network
     *
     * If an application needs to persist data, then it should ensure the data is
     * persisted prior to returning from this method, as after returning from this
     * method, the [message] is considered to have been delivered, and will not be
     * reproducible
     *
     * It is possible to send a new message within an implementation of this
     * callback (for example, a response to this [message]), but the implementation
     * must not disconnect the client, as it will be impossible to send an
     * acknowledgment for the [message] being processed, and a deadlock will occur
     *
     * In this implementation, TODO
     */
    override fun messageArrived(
        topic: String,
        message: MqttMessage
    ) {
        /**
         * Synchronize to avoid interference
         * with the writeResource function
         */
        runBlocking {
            messageMutex.withLock {

                try {
                    logger.info { "Topic $topic (user ${user.name}): new message" }

                    if (topic == ACServiceRBACDynSec.dynsecTopicResponse) {
                        ac?.responsesReceivedFromDynSec?.add(String(message.payload))
                    } else {

                        /**
                         * The message is from the admin, and it contains
                         * the (latest) version number of the symmetric key
                         */
                        if (message.isRetained) {
                            logger.debug { "The message is retained" }

                            // TODO verify the signature of the message and that the admin sent it
                            if (message.payload.isEmpty()) {
                                logger.info { "The payload is empty (perhaps the topic is being deleted?)" }
                                dm.client.unsubscribe(topic)
                            } else {
                                val resource = myJson.decodeFromString<Resource>(String(message.payload))
                                val versionNumber = resource.symEncKeyVersionNumber
                                val enforcement = resource.enforcement
                                logger.info {
                                    "Retained message (versionNumber " +
                                            "$versionNumber, enforcement $enforcement)"
                                }

                                when (enforcement) {
                                    EnforcementType.COMBINED -> {
                                        logger.info { "Enforcement is combined" }

                                        /**
                                         * This is not the first retained message for this
                                         * topic that the user receives. Probably, it is
                                         * an update of the symmetric key. We check that
                                         * the enforcement type is the same as before (i.e.,
                                         * [EnforcementType.COMBINED] and that the version
                                         * number is greater than the previous one.
                                         */
                                        if (subscribedTopicsKeysAndMessages.containsKey(topic)) {
                                            logger.info { "Update of cached key" }

                                            val topicEnforcement = subscribedTopicsKeysAndMessages[topic]!!.enforcement
                                            val topicVersionNumber =
                                                subscribedTopicsKeysAndMessages[topic]!!.versionNumber
                                            if (topicEnforcement != EnforcementType.COMBINED) {
                                                // TODO this is wrong, unless we allow the admin to dynamically
                                                //  change the security level of a topic
                                                logger.error {
                                                    """
                                            this is wrong, unless we allow the admin to dynamically
                                            change the security level of a topic
                                            """.trimIndent()
                                                }
                                                throw java.lang.Exception("asdfg")
                                                // TODO decide what to do (in any case, stop here the execution)
                                            }

                                            if (topicVersionNumber > versionNumber) {
                                                // TODO this is wrong
                                                logger.error {
                                                    """
                                            this is wrong
                                            """.trimIndent()
                                                }
                                                throw java.lang.Exception("asdfghjntr")
                                                // TODO decide what to do (in any case, stop here the execution)
                                            }

                                            if (topicVersionNumber == versionNumber) {
                                                // TODO this is warning (perhaps reconnect?)
                                                logger.error {
                                                    """
                                            this is warning (perhaps reconnect)
                                            """.trimIndent()
                                                }
                                                throw java.lang.Exception("aqwertgjtrs")
                                                // TODO decide what to do (in any case, stop here the execution)
                                            }

                                            logger.info { "Notification of a new symmetric key" }
                                        }
                                        /**
                                         * Probably, the user just subscribed to the topic. As
                                         * such, add the topic in the [subscribedTopicsKeysAndMessages]
                                         * variable and proceed to get the symmetric key
                                         */
                                        else {
                                            logger.info { "Probably just subscribed, fetch the key" }
                                            subscribedTopicsKeysAndMessages[topic] = SymmetricKeysAndCachedMessages(
                                                key = null,
                                                role = null,
                                                versionNumber = versionNumber,
                                                enforcement = enforcement
                                            )
                                        }

                                        /**
                                         * Lock the MM. If an error occurs, send an
                                         * error message with the code to the client
                                         * TODO do what with the key or eventual new messages?
                                         */
                                        val lockCode = startOfMethod(
                                            dmLock = false,
                                            acLock = false
                                        )
                                        if (lockCode != CODE_000_SUCCESS) {
                                            logger.warn { "Could not lock ($lockCode)" }
                                            val lockMessage = MQTTMessage(
                                                message = lockCode.toString(),
                                                topic = topic,
                                                error = true
                                            )
                                            cacheOrSendMessage(
                                                topic = topic,
                                                message = lockMessage
                                            )
                                        }

                                        /**
                                         * Get the key. If an error occurs, send an
                                         * error message with the code to the client
                                         * Note that, even for decrypting messages
                                         * received from the topic, we use the encryption
                                         * key, as in the MQTT core scheme there is
                                         * always one key
                                         * TODO do what with the key or eventual new messages?
                                         */
                                        val symKey = getEncSymmetricKey(
                                            resource = resource
                                        )
                                        if (symKey.code != CODE_000_SUCCESS) {
                                            logger.warn { "Error while retrieving the key (${symKey.code})" }
                                            subscribedTopicsKeysAndMessages[topic]!!.key = null
                                            val errorMessage = MQTTMessage(
                                                message = symKey.code.toString(),
                                                topic = topic,
                                                error = true
                                            )
                                            cacheOrSendMessage(
                                                topic = topic,
                                                message = errorMessage
                                            )
                                        } else {
                                            subscribedTopicsKeysAndMessages[topic]!!.key = symKey.key
                                        }

                                        /**
                                         * Unlock the mm. If an error occurs, send an
                                         * error message with the code to the client
                                         * TODO do what with the key or eventual new messages?
                                         */
                                        val unlockCode = endOfMethod(
                                            code = symKey.code,
                                            dmLocked = false,
                                            acLocked = false
                                        )
                                        if (unlockCode != CODE_000_SUCCESS) {
                                            val unlockMessage = MQTTMessage(
                                                message = unlockCode.toString(),
                                                topic = topic,
                                                error = true
                                            )
                                            cacheOrSendMessage(
                                                topic = topic,
                                                message = unlockMessage
                                            )
                                        } else {
                                            // TODO delete this else
                                        }
                                    }

                                    EnforcementType.TRADITIONAL -> {
                                        logger.info { "Enforcement is traditional" }

                                        /**
                                         * This is not the first retained message for this
                                         * topic that the user receives. In a topic with
                                         * no cryptographic protection, this should not happen
                                         * TODO not unless we allow the admin to dynamically
                                         *  change the security level of a topic
                                         */
                                        if (subscribedTopicsKeysAndMessages.containsKey(topic)) {
                                            logger.error {
                                                """
                                        This is not the first retained message for this
                                        topic that the user receives. In a topic with
                                        no cryptographic protection, this should not happen
                                        """.trimIndent()
                                            }
                                        }
                                        /** Probably, the user just subscribed to the topic */
                                        else {
                                            subscribedTopicsKeysAndMessages[topic] = SymmetricKeysAndCachedMessages(
                                                key = null,
                                                role = null,
                                                versionNumber = -1,
                                                enforcement = enforcement,
                                            )
                                        }
                                    }
                                }
                            }
                        } else {
                            logger.debug { "The message is not retained" }
                            if (subscribedTopicsKeysAndMessages.containsKey(topic)) {

                                val topicKey = subscribedTopicsKeysAndMessages[topic]!!

                                val messageContent = when (topicKey.enforcement) {
                                    EnforcementType.TRADITIONAL -> {
                                        logger.debug { "The message is not encrypted" }
                                        message.payload
                                    }

                                    EnforcementType.COMBINED -> {
                                        logger.debug { "The message is encrypted" }
                                        if (topicKey.key == null) {
                                            // TODO key retrieval (see below)
                                            throw java.lang.Exception(
                                                """
                                        it means that the last retrieval of the 
                                        key went wrong, but in the meantime a message
                                        arrived. what to do? I'd say either cache it 
                                        and try to get the key again OR send it to
                                        the user even if encrypted
                                        """.trimIndent()
                                            )
                                        } else {
                                            cryptoSKE.decryptStream(
                                                decryptingKey = topicKey.key!!,
                                                stream = message.payload.inputStream()
                                            ).readAllBytes()
                                        }
                                    }
                                }
                                val receivedMessage = MQTTMessage(
                                    message = String(messageContent),
                                    topic = topic,
                                    error = false
                                )
                                cacheOrSendMessage(
                                    topic = topic,
                                    message = receivedMessage
                                )
                            } else {
                                // TODO it means that the user subscribed, but no retained
                                //  message was delivered by the broker... send error to the client
                            }
                        }
                    }
                } catch (e: Exception) {
                    logger.error { "Exception in messageArrived MQTT callback function: ${e.localizedMessage}" }
                    logger.error { e } // TODO delete
                    val exceptionMessage = MQTTMessage(
                        message = CODE_049_UNEXPECTED.toString(),
                        topic = topic,
                        error = true
                    )
                    cacheOrSendMessage(
                        topic = topic,
                        message = exceptionMessage
                    )
                } // TODO do try catch also in the other functions of the callbacks
            }
        }
    }

    /**
     * This method is called when the server gracefully disconnects
     * from the client by sending a [disconnectResponse] packet, or
     * when the TCP connection is lost due to a network issue or if
     * the client encounters an error
     *
     * In this implementation, try to reconnect to the broker only
     * if the error code is TODO
     */
    override fun disconnected(disconnectResponse: MqttDisconnectResponse?) {
        logger.warn {
            "MQTT client for ${user.name} was disconnected: " +
            disconnectResponse.toString()
        }
    }

    /**
     * Called when an AUTH packet is received by the client. The [reasonCode]
     * can be Success (0), Continue authentication (24) or Re-authenticate (25),
     * while the [properties] are the MqttProperties to be sent, containing the
     * Authentication Method, Authentication Data and any required User
     * Defined Properties
     *
     * In this implementation, just log the event
     */
    override fun authPacketArrived(reasonCode: Int, properties: MqttProperties?) {
        logger.debug { "authPacketArrived" }
    }

    /**
     * Called when the connection to the server is completed successfully.
     * The [reconnect] value is true if the connection was the result of
     * automatic reconnect. The [serverURI] is the URI of the server that
     * the connection was made to
     *
     * In this implementation, just log the event
     */
    override fun connectComplete(reconnect: Boolean, serverURI: String?) {
        logger.debug { "connectComplete (reconnect $reconnect, serverURI $serverURI)" }
    }

    /**
     * Called when delivery for a message has been completed, and all
     * acknowledgments have been received. For QoS 0 messages it is called once the
     * message has been handed to the network for delivery. For QoS 1 it is called
     * when PUBACK is received and for QoS 2 when PUBCOMP is received. The [token]
     * will be the same [token] as that returned when the message was published
     *
     * In this implementation, just log the event
     */
    override fun deliveryComplete(token: IMqttToken?) {
        logger.debug { "deliveryComplete" }
    }

    /**
     * This method is called when an [exception] is thrown within the MQTT client. The
     * reasons for this may vary, from malformed packets, to protocol errors or even
     * bugs within the MQTT client itself. This callback surfaces those errors to
     * the application so that it may decide how best to deal with them
     *
     * For example, The MQTT server may have sent a publish message with an invalid
     * topic alias, the MQTTv5 specification suggests that the client should
     * disconnect from the broker with the appropriate return code, however this is
     * completely up to the application itself
     *
     * In this implementation, just log the event
     */
    override fun mqttErrorOccurred(exception: MqttException?) {
        logger.warn { "mqttErrorOccurred: $exception" }
    }
}
