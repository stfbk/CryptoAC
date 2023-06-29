package eu.fbk.st.cryptoac.dm.mqtt

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.mqtt.CryptoACMQTTClient
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.dm.DMServiceABAC
import eu.fbk.st.cryptoac.dm.DMServiceRBAC
import eu.fbk.st.cryptoac.dm.model.CodeInputStream
import eu.fbk.st.cryptoac.model.CodeBoolean
import eu.fbk.st.cryptoac.model.CodeServiceParameters
import eu.fbk.st.cryptoac.model.unit.Resource
import eu.fbk.st.cryptoac.model.unit.User
import kotlinx.serialization.encodeToString
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.common.MqttException
import org.eclipse.paho.mqttv5.common.MqttMessage
import java.io.InputStream

private val logger = KotlinLogging.logger {}

/**
 * Implementation of the methods to interface with
 * the DM as an MQTT broker configured with the
 * given [dmServiceParameters]
 */
class DMServiceMQTT(
    private val dmServiceParameters: DMServiceMQTTParameters,
    var client: CryptoACMQTTClient
) : DMServiceRBAC, DMServiceABAC {

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    override var locks = 0



    /**
     * Check whether the service was
     * already configured (at least once)
     */
    override fun alreadyConfigured(): CodeBoolean {
        // TODO to implement
        return CodeBoolean()
    }

    /**
     * This function is invoked when initializing the
     * admin (after the 'init' function), and it should
     * configure the service with the given [parameters]
     * and return the outcome code. When implementing this
     * function, remember to decide how to handle (e.g.,
     * reject or allow) subsequent invocations
     *
     * In this implementation, no configuration is needed,
     * therefore subsequent invocations are allowed
     */
    override fun configure(
        parameters: CoreParameters?
    ): OutcomeCode {
        logger.info { "No configuration needed for DM MQTT" }
        return CODE_000_SUCCESS
    }

    /**
     * This function is invoked each time the service
     * is initialized, and it should contain the code to
     * initialize the interface (e.g., possibly connect to
     * remote services like MQTT brokers, databases, etc.)
     */
    override fun init() {
        logger.info { "No action required to initialize the DM MQTT service" }
    }

    /**
     * This function is invoked each time the (interface toward
     * the) service is destroyed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     *
     * In this implementation, unsubscribe to all topics
     * and disconnect from the MQTT broker
     */
    override fun deinit() {
        try {
            if (client.isConnected) {
                client.unsubscribe("#")
                client.disconnect()
            }
        } catch (e: MqttException) {
            logger.warn { "Exception while de-initializing MQTT client (${e.message})" }
            logger.warn { e }
            client.disconnectForcibly()
        }
    }



    /**
     * Add (and initialize) the [newAdmin] in the
     * service and return the outcome code. Check that
     * the name of the admin is the expected one and
     * that the admin was not already added (or initialized)
     */
    override fun addAdmin(
        newAdmin: User
    ): OutcomeCode {
        /** Guard clauses */
        if (newAdmin.name != Constants.ADMIN) {
            logger.warn {
                "Admin user has name ${newAdmin.name}" +
                ", but admin name should be ${Constants.ADMIN}"
            }
            return CODE_036_ADMIN_NAME
        }

        logger.info { "No action required to add the admin" }
        return CODE_000_SUCCESS
    }

    /**
     * Initialize the [user] in the service and
     * return the outcome code. Check that the user
     * is present and was not already initialized or
     * deleted. This method should support invocations
     * by non-admin users
     */
    override fun initUser(
        user: User
    ): OutcomeCode {
        logger.info { "No action required to initialize user" }
        return CODE_000_SUCCESS
    }

    /**
     * Add the [newUser] in the service by, e.g.,
     * creating an account for the user. Check that 
     * the user was not already added. Finally,
     * return the user's configuration parameters
     * together with the outcome code
     *
     * In this implementation, just return success.
     * In fact, it is possible to add users to the
     * Mosquitto broker only when using the DynSec
     * plugin, hence when using the same broker as
     * AC (in other words, the user is added to the
     * DynSec plugin of the broker by the AC service)
     */
    override fun addUser(
        newUser: User
    ): CodeServiceParameters {
        val username = newUser.name

        /** Guard clauses */
        if (username.isBlank() ) {
            logger.warn { "Username is blank" }
            return CodeServiceParameters(CODE_020_INVALID_PARAMETER)
        }

        logger.info { "No action required to add user" }

        return CodeServiceParameters(
            parameters = DMServiceMQTTParameters(
                username = username,
                password = "noPasswordForMQTTAsDM",
                port = dmServiceParameters.port,
                url = dmServiceParameters.url,
                tls = dmServiceParameters.tls,
            )
        )
    }

    /**
     * Delete [username] from the service. Check
     * that the user exists, and she is not the admin
     *
     * In this implementation, just return success.
     * In fact, it is possible to delete users from
     * the Mosquitto broker only when using the DynSec
     * plugin, hence when using the same broker as
     * AC (in other words, the user is deleted from the
     * DynSec plugin of the broker by the AC service)
     */
    override fun deleteUser(
        username: String
    ): OutcomeCode {
        logger.info { "No action required to delete user" }
        return CODE_000_SUCCESS
    }



    /**
     * Create a new resource [newResource], possibly
     * initializing it with the given [content]
     * in the DM and return the outcome code
     *
     * In this implementation, create a topic with
     * the name of the [newResource], serialize the [newResource]
     * and send it as a retained message, and finally
     * send the [content] as a normal MQTT message
     */
    override fun addResource(
        newResource: Resource,
        content: InputStream
    ): OutcomeCode {

        /** Guard clauses */
        if (newResource.name.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        logger.info {"Creating a topic with name ${newResource.name} in the MQTT broker"}

        /** Publish the retained message */
        val retainedMessage = MqttMessage(myJson.encodeToString(newResource).toByteArray())
        retainedMessage.qos = 2
        retainedMessage.isRetained = true
        val code = client.myPublish(
            topic = newResource.name,
            message = retainedMessage,
            isTheDM = true
        )
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Publish the (optional) message */
        val optionalMessage = content.readAllBytes()
        return if (optionalMessage.isNotEmpty()) {
            val message = MqttMessage(optionalMessage)
            // TODO allow to select the QoS
            message.qos = 1
            message.isRetained = false
            // TODO if this second publish fails, how to rollback?
            client.myPublish(
                topic = newResource.name,
                message = message,
                isTheDM = true,
            )
        } else {
            CODE_000_SUCCESS
        }
    }

    /**
     * Require read access to the resource [resourceName],
     * possibly returning an input stream from the DM
     * along with the outcome code
     *
     * In this implementation, subscribe to the
     * topic with name [resourceName]
     */
    override fun readResource(
        resourceName: String
    ): CodeInputStream {

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CodeInputStream(CODE_020_INVALID_PARAMETER)
        }

        logger.info { "Subscribing to the topic $resourceName" }
        return CodeInputStream(code = client.mySubscribe(
            topicFilter = resourceName,
            qos = 2,
            isTheDM = true,
        ))
    }

    /**
     * Require write access to the resource [updatedResource],
     * possibly using the [content] in the DM and return
     * the outcome code
     *
     * In this implementation, send the [content] as a
     * message in the topic with the name of the [updatedResource]
     */
    override fun writeResource(
        updatedResource: Resource,
        content: InputStream
    ): OutcomeCode {

        /** Guard clauses */
        if (updatedResource.name.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        logger.info {(
            "Sending a message in the topic with name "
            + "${updatedResource.name} in the MQTT broker"
        )}

        val message = MqttMessage(content.readAllBytes())
        message.qos = 1
        // TODO allow to select the QoS
        return client.myPublish(
            topic = updatedResource.name,
            message = message,
            isTheDM = true,
        )
    }

    /**
     * Delete the resource [resourceName] from the DM
     * and return the outcome code
     *
     * In this implementation, remove the
     * retained message from the topic
     * with name [resourceName]
     */
    override fun deleteResource(resourceName: String): OutcomeCode {

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        logger.info { "Deleting topic $resourceName from the MQTT broker" }

        val message = MqttMessage(byteArrayOf())
        message.qos = 2
        message.isRetained = true
        return client.myPublish(
            topic = resourceName,
            message = message,
            isTheDM = true
        )
    }



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollback the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0. Finally, return
     * the outcome code
     *
     * In this implementation, check whether the MQTT client is already
     * connected. If not, check whether the MQTT client is already connecting
     * (because, e.g., it was disconnected from the broker). If so, block
     * until the client gets connected. Otherwise, simply connect the client.
     * Remember that "client.connect()" is a blocking method that returns
     * once connect completes
     */
    override fun lock(): OutcomeCode {
        return if (locks == 0) {
            logger.info { "Locking the status of the DM" }
            try {
                client.connectSync()
                locks++
                CODE_000_SUCCESS
            } catch (e: MqttException) {
                if (e.message?.contains("Not authorized") == true) {
                    logger.warn { "DM MQTT - access denied for user" }
                    CODE_059_ACCESS_DENIED_TO_DM
                } else if (e.message?.contains("Unable to connect to server") == true) {
                    logger.warn { "DM MQTT - connection timeout" }
                    CODE_044_DM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        } else if (locks > 0) {
            locks++
            logger.debug { "Increment lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "Lock number is negative ($locks)" }
            CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
        }
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollback to the previous status only when [locks] becomes 0. Finally,
     * return the outcome code
     *
     * In this implementation, TODO
     */
    override fun rollback(): OutcomeCode {
        return if (locks == 1) {
            logger.info { "Rollback the status of the DM" }
            locks--
            // TODO
            CODE_000_SUCCESS
        } else if (locks > 1) {
            locks--
            logger.debug { "Decrement lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "DM rollback number is zero or negative ($locks)" }
            CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
        }
    }

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0. Finally, return the
     * outcome code
     *
     * In this implementation, TODO
     */
    override fun unlock(): OutcomeCode {
        return if (locks == 1) {
            logger.info { "Unlock the status of the DM" }
            locks--
            // TODO
            CODE_000_SUCCESS
        } else if (locks > 1) {
            locks--
            logger.debug { "Decrement lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "DM unlock number is zero or negative ($locks)" }
            CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
        }
    }
}
