package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CryptoACMqttClient
import eu.fbk.st.cryptoac.core.elements.File
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.common.MqttMessage
import java.io.InputStream
import java.lang.StringBuilder

private val logger = KotlinLogging.logger {}


/**
 * Implementation of the methods to interface with the DM
 * as a MQTT broker configured with the given [interfaceParameters]
 */
class DMInterfaceMQTT(
    private val interfaceParameters: DMInterfaceMQTTParameters, private val client: CryptoACMqttClient
    ) : DMInterface() {

    // TODO logs, docs, refactor

    private val dynsecTopic = "\$CONTROL/dynamic-security/v1"


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

    fun getDeleteClientCommand(username: String): String {
        logger.info("Deleting client $username from the MQTT Mosquitto broker")
        return """
            {
                "command": "deleteClient", 
                "username": "$username"
            }     
        """.trimIndent()
    }

    fun getCreateRoleCommand(roleName: String): String {
        logger.info("Creating role $roleName in the MQTT Mosquitto broker")
        return """
            {
                "command": "createRole",
                "rolename": "$roleName"
            }
        """.trimIndent()
    }

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

    fun getDeleteRoleCommand(roleName: String): String {
        logger.info("Deleting role $roleName from the MQTT Mosquitto broker")
        return """
            {
                "command": "deleteRole",
                "rolename": "$roleName"
            }
        """.trimIndent()
    }

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

    fun getAddRoleACLCommand(roleName: String, aclType: AclType, topic: String): String {
        logger.info("Adding to role $roleName ACL $aclType for topic $topic in the MQTT Mosquitto broker")
        return """
            {
                "command": "addRoleACL",
                "rolename": "$roleName",
                "acltype": "$aclType",
                "topic": "$topic",
                "priority": -1,
                "allow": true
            }
        """.trimIndent()
    }

    fun getRemoveRoleACLCommand(roleName: String, aclType: AclType, topic: String): String {
        logger.info("Removing rom role $roleName ACL $aclType for topic $topic in the MQTT Mosquitto broker")
        return """
            {
                "command": "removeRoleACL",
                "rolename": "$roleName",
                "acltype": "$aclType",
                "topic": "$topic"
            }
        """.trimIndent()
    }

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
                client.publish(dynsecTopic, messageMQTT)
                OutcomeCode.CODE_000_SUCCESS
            }

        } else {
            logger.info("Asked to send dynsec commands to the MQTT Mosquitto broker but no commands were given")
            OutcomeCode.CODE_000_SUCCESS
        }
    }


    /**
     * Configure the DM with relevant
     * [parameters] and return the outcome code.
     *
     * In this implementation, no configuration is needed
     */
    override fun configure(parameters: CoreParameters): OutcomeCode {
        logger.info { "No configuration needed for DM MQTT" }
        return OutcomeCode.CODE_000_SUCCESS
    }

    /**
     * Add the [content] of the [newFile]
     * in the DM and return the outcome code.
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
        client.publish(newFile.name, message)
        return OutcomeCode.CODE_000_SUCCESS
    }

    /**
     * Download the content of the file matching
     * the given [fileName] from the DM.
     *
     * In this implementation, subscribe to the
     * topic with name [fileName]
     */
    override fun readFile(fileName: String): WrappedInputStream {
        logger.info("Subscribing to the topic $fileName")
        try { // TODO catch mqtt exception (no denied, but like network issues)
            client.subscribe(fileName, 1)
        } catch (e: Exception) {
            logger.error { "AAAAA" }
            logger.error { e }
        }
        return WrappedInputStream(OutcomeCode.CODE_000_SUCCESS)
    }

    /**
     * Overwrite the [content] of the [updatedFile]
     * in the DM and return the outcome code.
     *
     * In this implementation, send the [content] as a
     * message in the topic with the name of the [updatedFile]
     */
    override fun writeFile(updatedFile: File, content: InputStream): OutcomeCode {
        logger.info("Sending a message in the topic with name ${updatedFile.name} in the MQTT Mosquitto broker")
        val message = MqttMessage(content.readAllBytes())
        message.qos = 1
        client.publish(updatedFile.name, message) // TODO catch mqtt exception (no denied, but like network issues)
        return OutcomeCode.CODE_000_SUCCESS
    }

    /**
     * Delete the [fileName] from the data
     * storage and return the outcome code.
     *
     * In this implementation, remove the
     * retained message from the topic
     * with name [fileName]
     */
    override fun deleteFile(fileName: String): OutcomeCode {
        logger.info("Deleting topic $fileName from the MQTT Mosquitto broker")
        val message = MqttMessage(byteArrayOf())
        message.qos = 1
        message.isRetained = true
        client.publish(fileName, message) // TODO catch mqtt exception (no denied, but like network issues)
        return OutcomeCode.CODE_000_SUCCESS
    }


    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0.
     *
     * In this implementation, check whether the MQTT client is already
     * connected. If not, check whether the MQTT client is already connecting
     * (because, e.g., it was disconnected from the broker). If so, block
     * until the client gets connected. Otherwise, simply connect the client.
     * Remember that "client.connect()" is a blocking method that returns
     * once connect completes
     */
    override fun lock(): OutcomeCode {
        if (locks == 0) {
            logger.info { "Locking the status of the DM" }
            client.connectSync(false, interfaceParameters.username, interfaceParameters.password)
        }
        else {
            logger.debug { "Increment lock number to $locks" }
        }
        locks++
        return OutcomeCode.CODE_000_SUCCESS
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0.
     *
     * In this implementation, TODO
     */
    override fun rollback(): OutcomeCode {
        if (locks == 1) {
            logger.info { "Rollback the status of the DM" }
            locks--
            // TODO
        } else if (locks > 0) {
            logger.debug { "Decrement lock number to ${locks - 1}" }
            locks--
        }
        return OutcomeCode.CODE_000_SUCCESS
    }

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0.
     *
     * In this implementation, TODO
     */
    override fun unlock(): OutcomeCode {
        if (locks == 1) {
            logger.info { "Unlock the status of the DM" }
            locks--
            // TODO
        } else if (locks > 0) {
            logger.debug { "Decrement lock number to ${locks - 1}" }
            locks--
        }
        return OutcomeCode.CODE_000_SUCCESS
    }
}