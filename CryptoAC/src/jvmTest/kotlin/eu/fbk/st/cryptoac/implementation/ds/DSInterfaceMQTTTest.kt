package eu.fbk.st.cryptoac.implementation.ds

import eu.fbk.st.cryptoac.ADMIN_KEY
import eu.fbk.st.cryptoac.Parameters
import org.eclipse.paho.mqttv5.client.*
import org.eclipse.paho.mqttv5.client.persist.MemoryPersistence
import org.eclipse.paho.mqttv5.common.MqttException
import org.eclipse.paho.mqttv5.common.MqttMessage
import org.eclipse.paho.mqttv5.common.packet.MqttProperties
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

import kotlin.random.Random

internal class DSInterfaceMQTTTest : DSInterfaceTest(), MqttCallback {

    private val brokerBaseAPI = "tcp://${Parameters.dsInterfaceMQTTParameters.url}:${Parameters.dsInterfaceMQTTParameters.port}"
    private val persistence = MemoryPersistence()
    private val connOpts = MqttConnectionOptions().apply {
        isCleanStart = true
        password = Parameters.dsInterfaceMQTTParameters.password.toByteArray()
        userName = ADMIN_KEY
    }
    private var client: MqttClient? = null
    private var ds: DSInterfaceMQTT? = null

    // TODO before all?
    @BeforeEach
    override fun setUp() {
        client = MqttClient(brokerBaseAPI, generateRandomClientId(), persistence)
        client!!.setCallback(this)
        client!!.connect(connOpts)
        ds = DSInterfaceMQTT(Parameters.dsInterfaceMQTTParameters, client!!)
    }

    // TODO after all?
    @AfterEach
    override fun tearDown() {
        TODO("Not yet implemented")
    }

    @Test
    fun getDynsecTopic() {
        // TODO
    }

    @Test
    fun getCreateClientCommand() {
        // TODO
    }

    @Test
    fun getDeleteClientCommand() {
        // TODO
    }

    @Test
    fun getCreateRoleCommand() {
        // TODO
    }

    @Test
    fun getAddClientRoleCommand() {
        // TODO
    }

    @Test
    fun getDeleteRoleCommand() {
        // TODO
    }

    @Test
    fun getRemoveClientRoleCommand() {
        // TODO
    }

    @Test
    fun getAddRoleACLCommand() {
        // TODO
    }

    @Test
    fun getRemoveRoleACLCommand() {
        // TODO
    }

    @Test
    fun sendDynsecCommand() {
        // TODO
    }



    override fun `add file once or empty or deleted file works`() {
        TODO("Not yet implemented")
    }
    override fun `add file twice fails`() {
        TODO("Not yet implemented")
    }

    override fun `read file works`() {
        TODO("Not yet implemented")
    }
    override fun `read non-existing or deleted file fail`() {
        TODO("Not yet implemented")
    }

    override fun `write file once or empty works`() {
        TODO("Not yet implemented")
    }
    override fun `write non-existing or deleted file fail`() {
        TODO("Not yet implemented")
    }

    override fun `delete file once works`() {
        TODO("Not yet implemented")
    }
    override fun `delete non-existing or deleted file fail`() {
        TODO("Not yet implemented")
    }


    // TODO refactor, there is code duplication
    /** Generate a random string as Client ID for the MQTT client. */
    private fun generateRandomClientId(): String {
        val charPool: List<Char> = ('a'..'z') + ('A'..'Z') + ('0'..'9')
        return (1..20)
            .map { Random.nextInt(0, charPool.size) }
            .map(charPool::get)
            .joinToString("")
    }


    override fun disconnected(disconnectResponse: MqttDisconnectResponse?) {
        TODO("Not yet implemented")
    }


    override fun mqttErrorOccurred(exception: MqttException?) {
        TODO("Not yet implemented")
    }


    override fun messageArrived(topic: String?, message: MqttMessage?) {
        TODO("Not yet implemented")
    }


    override fun deliveryComplete(token: IMqttToken?) {
        TODO("Not yet implemented")
    }


    override fun connectComplete(reconnect: Boolean, serverURI: String?) {
        TODO("Not yet implemented")
    }


    override fun authPacketArrived(reasonCode: Int, properties: MqttProperties?) {
        TODO("Not yet implemented")
    }
}