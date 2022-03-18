package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CryptoACMqttClient
import eu.fbk.st.cryptoac.core.elements.File
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.common.MqttException
import org.eclipse.paho.mqttv5.common.MqttMessage
import java.io.InputStream
import java.lang.StringBuilder

private val logger = KotlinLogging.logger {}


/**
 * Implementation of the methods to interface with
 * the DM as a Mosquitto MQTT broker configured with
 * the given [interfaceParameters]
 */
class DMInterfaceMosquitto(private val interfaceParameters: DMInterfaceMosquittoParameters,
                           override val client: CryptoACMqttClient
) : DMInterfaceRBACMQTT {

    /**
     * The topic to interact with
     * the dynsec plugin
     */
    private val dynsecTopic = "\$CONTROL/dynamic-security/v1"

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    override var locks = 0

    /**
     * If necessary, configure the DM with relevant
     * [parameters] and return the outcome code
     *
     * In this implementation, no configuration is needed
     */
    override fun configure(parameters: CoreParameters): OutcomeCode {
        logger.info { "No configuration needed for DM MQTT" }
        return OutcomeCode.CODE_000_SUCCESS
    }

    /**
     * Create a new resource [newFile], possibly
     * initializing it with the given [content]
     * in the DM and return the outcome code
     *
     * In this implementation, create a topic with
     * the name of the [newFile] and send the [content]
     * as a retained message
     */
    override fun addFile(newFile: File, content: InputStream): OutcomeCode {
        logger.info("Creating a topic with name ${newFile.name} in the MQTT Mosquitto " +
                "broker by sending a retained message with the last key version number")
        val message = MqttMessage(content.readAllBytes())
        message.qos = 1
        message.isRetained = true
        return client.myPublish(newFile.name, message)
    }

    /**
     * Require read access to the resource [fileName],
     * possibly returning an input stream from the DM
     * along with the outcome code
     *
     * In this implementation, subscribe to the
     * topic with name [fileName]
     */
    override fun readFile(fileName: String): WrappedInputStream {
        logger.info("Subscribing to the topic $fileName")
        // TODO allow to select the QoS
        return WrappedInputStream(client.mySubscribe(fileName, 1))
    }

    /**
     * Require write access to the resource [updatedFile],
     * possibly using the [content] in the DM and return
     * the outcome code
     *
     * In this implementation, send the [content] as a
     * message in the topic with the name of the [updatedFile]
     */
    override fun writeFile(updatedFile: File, content: InputStream): OutcomeCode {
        logger.info("Sending a message in the topic with name ${updatedFile.name} in the MQTT Mosquitto broker")
        val message = MqttMessage(content.readAllBytes())
        message.qos = 1
        // TODO allow to select the QoS
        return client.myPublish(updatedFile.name, message)
    }

    /**
     * Delete the resource [fileName] from the DM
     * and return the outcome code
     *
     * In this implementation, remove the
     * retained message from the topic
     * with name [fileName]
     */
    override fun deleteFile(fileName: String): OutcomeCode {
        logger.info("Deleting topic $fileName from the MQTT Mosquitto broker")
        val message = MqttMessage(byteArrayOf())
        // TODO allow to select the QoS
        message.qos = 1
        message.isRetained = true
        return client.myPublish(fileName, message)
    }

    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
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
                OutcomeCode.CODE_000_SUCCESS
            } catch (e: MqttException) {
                if (e.message?.contains("Not authorized") == true) {
                    logger.warn { "DM Mosquitto - access denied for user" }
                    OutcomeCode.CODE_059_ACCESS_DENIED_TO_DM
                } else if (e.message?.contains("Unable to connect to server") == true) {
                    logger.warn { "DM Mosquitto - connection timeout" }
                    OutcomeCode.CODE_044_DM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        else {
            locks++
            logger.debug { "Increment lock number to $locks" }
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0.
     * Finally, return the outcome code
     *
     * In this implementation, TODO
     */
    override fun rollback(): OutcomeCode {
        if (locks == 1) {
            logger.info { "Rollback the status of the DM" }
            locks--
            // TODO
        } else if (locks > 0) {
            locks--
            logger.debug { "Decrement lock number to $locks" }
        }
        return OutcomeCode.CODE_000_SUCCESS
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
        if (locks == 1) {
            logger.info { "Unlock the status of the DM" }
            locks--
            // TODO
        } else if (locks > 0) {
            locks--
            logger.debug { "Decrement lock number to $locks" }
        }
        return OutcomeCode.CODE_000_SUCCESS
    }

    /**
     * This function is invoked whenever the interface
     * is dismissed, and it should contain the code to
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
     * Return the command for creating a client
     * with the given [username] and [password]
     */
    fun getCreateClientCommand(username: String, password: String): String {
        logger.info("Creating client $username in the MQTT Mosquitto broker")

        return """
            {
                "command": "createClient", 
                "username": "$username", 
                "password": "$password" 
            }     
        """.trimIndent()
    }

    /**
     * Return the command for deleting the client
     * with the given [username]
     */
    fun getDeleteClientCommand(username: String): String {
        logger.info("Deleting client $username from the MQTT Mosquitto broker")
        return """
            {
                "command": "deleteClient", 
                "username": "$username"
            }     
        """.trimIndent()
    }

    /**
     * Return the command for creating a role
     * with the given [roleName]
     */
    fun getCreateRoleCommand(roleName: String): String {
        logger.info("Creating role $roleName in the MQTT Mosquitto broker")
        return """
            {
                "command": "createRole",
                "rolename": "$roleName"
            }
        """.trimIndent()
    }

    /**
     * Return the command for adding the client
     * [username] to the role [roleName]
     */
    fun getAddClientRoleCommand(username: String, roleName: String): String {
        logger.info("Adding client $username to role $roleName in the MQTT Mosquitto broker")
        return """
            {
                "command": "addClientRole",
                "username": "$username",
                "rolename": "$roleName"
            }
        """.trimIndent()
    }

    /**
     * Return the command for deleting the role
     * with the given [roleName]
     */
    fun getDeleteRoleCommand(roleName: String): String {
        logger.info("Deleting role $roleName from the MQTT Mosquitto broker")
        return """
            {
                "command": "deleteRole",
                "rolename": "$roleName"
            }
        """.trimIndent()
    }

    /**
     * Return the command for removing the client
     * [username] form the role [roleName]
     */
    fun getRemoveClientRoleCommand(username: String, roleName: String): String {
        logger.info("Removing client $username from role $roleName in the MQTT Mosquitto broker")
        return """
            {
                "command": "removeClientRole",
                "username": "$username",
                "rolename": "$roleName"
            }
        """.trimIndent()
    }

    /**
     * Return the command for adding the [aclType]
     * permission to the role [roleName] over the
     * topic [topicName]
     */
    fun getAddRoleACLCommand(roleName: String, aclType: AclType, topicName: String): String {
        logger.info("Adding to role $roleName ACL $aclType for topic $topicName in the MQTT Mosquitto broker")
        return """
            {
                "command": "addRoleACL",
                "rolename": "$roleName",
                "acltype": "$aclType",
                "topic": "$topicName",
                "priority": -1,
                "allow": true
            }
        """.trimIndent()
    }

    /**
     * Return the command for removing the [aclType]
     * permission from the role [roleName] over the
     * topic [topicName]
     */
    fun getRemoveRoleACLCommand(roleName: String, aclType: AclType, topicName: String): String {
        logger.info("Removing rom role $roleName ACL $aclType for topic $topicName in the MQTT Mosquitto broker")
        return """
            {
                "command": "removeRoleACL",
                "rolename": "$roleName",
                "acltype": "$aclType",
                "topic": "$topicName"
            }
        """.trimIndent()
    }

    /**
     * Send the list of [commands] to the DYNSEC plugin
     * and return the outcome code. Remember that DYNSEC
     * disconnects all MQTT clients involved in an update
     * of the AC policy. For instance, if you assign a
     * client to a role, that client will be disconnected
     * with an administrative action (RC 152).
     * Related issues:
     * - [CLOSED] https://github.com/eclipse/mosquitto/issues/2474
     */
    fun sendDynsecCommand(commands: HashSet<String>): OutcomeCode {
        return if (commands.isNotEmpty()) {
            logger.info("Sending ${commands.size} dynsec commands to the MQTT Mosquitto broker")
            val commandsBuilder = StringBuilder("""{ "commands": [""")
            var prefix = ""
            commands.forEach {
                commandsBuilder.append(prefix).append(it)
                prefix = ","
            }
            commandsBuilder.append("""] }""")
            logger.debug { "Sending to the MQTT Mosquitto broker command: $commandsBuilder " }
            val message = commandsBuilder.toString()
            if (message.contains("\"\"")) {
                OutcomeCode.CODE_019_MISSING_PARAMETERS
            } else {
                val messageMQTT = MqttMessage(message.toByteArray())
                messageMQTT.qos = 1

                try {
                    client.myPublish(dynsecTopic, messageMQTT)
                } catch (e: MqttException) {
                    if (e.message?.contains("Disconnect RC: 152") == true) {
                        logger.info { "The broker disconnected the client after DYNSEC update" }
                        OutcomeCode.CODE_000_SUCCESS
                    } else {
                        throw e
                    }
                }
            }

        } else {
            logger.warn(
                "Asked to send dynsec commands to the MQTT " +
                "Mosquitto broker but no commands were given"
            )
            OutcomeCode.CODE_000_SUCCESS
        }
    }
}