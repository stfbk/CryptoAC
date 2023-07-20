package eu.fbk.st.cryptoac.dm.mqtt

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.core.mqtt.CryptoACMQTTClient
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.dm.DMFactory
import eu.fbk.st.cryptoac.dm.DMServiceRBACTest
import eu.fbk.st.cryptoac.dm.DMServiceTest
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceRBACCryptoAC
import eu.fbk.st.cryptoac.model.unit.Resource
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.serialization.encodeToString
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.client.*
import org.eclipse.paho.mqttv5.client.persist.MemoryPersistence
import org.eclipse.paho.mqttv5.common.MqttException
import org.eclipse.paho.mqttv5.common.MqttMessage
import org.eclipse.paho.mqttv5.common.packet.MqttProperties
import org.junit.jupiter.api.*

private val logger = KotlinLogging.logger {}

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class DMServiceMQTTTest : DMServiceTest(), MqttCallback {

    override lateinit var dm: DMServiceMQTT
    private var client: CryptoACMQTTClient? = null

    private var processDocker: Process? = null

    /** A map of subscribed topics with the messages */
    private val topicsAndMessages: HashMap<String, MutableList<String>> = hashMapOf()

    /** Mutex to synchronize the message arrived procedure */
    private val messageArrivedMutex = Mutex()



    @BeforeAll
    override fun setUpAll() {
        "./cleanAllAndBuild.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_mosquitto_dynsec\"".runCommand(
            workingDir = dir,
            endStrings = hashSetOf("mosquitto version 2.0.14 running")
        )

        val brokerBaseAPI = "tcp://${Parameters.dmServiceMQTTNoACParameters.url}:${Parameters.dmServiceMQTTNoACParameters.port}"
        val persistence = MemoryPersistence()
        client = CryptoACMQTTClient(
            serverURI = brokerBaseAPI,
            clientId = generateRandomString(),
            persistence = persistence,
            tls = Parameters.dmServiceMQTTNoACParameters.tls,
            username = Parameters.dmServiceMQTTNoACParameters.username,
            password = Parameters.dmServiceMQTTNoACParameters.password,
        )
        client!!.setCallback(this)
        dm = DMServiceMQTT(Parameters.dmServiceMQTTNoACParameters, client!!)
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./cleanAll.sh".runCommand(
            workingDir = dir,
            endStrings = hashSetOf("clean_all_end_of_script")
        )
    }



    override fun add_admin_works() {
        /** Add admin is not implemented */
    }

    @Test
    override fun add_admin_with_wrong_name_or_twice_fails() {
        /** Add admin is not implemented */
    }

    @Test
    override fun init_user_works() {
        /** Init user is not implemented */
    }

    @Test
    override fun init_user_not_existing_or_already_initialized_or_deleted_fail() {
        /** Init user is not implemented */
    }

    @Test
    override fun add_user_works() {
        /** Add user is not implemented */
    }

    @Test
    override fun add_user_twice_or_with_blank_username_fail() {
        /** Add user is not implemented */
    }

    @Test
    override fun delete_user_works() {
        /** Delete user is not implemented */
    }

    @Test
    override fun delete_user_twice_or_not_existing_or_with_blank_username_fail() {
        /** Delete user is not implemented */
    }

    @Test
    override fun add_resource_works() {
        val newTopic = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val emptyTopic = Resource(
            name = "empty",
            enforcement = EnforcementType.COMBINED
        )

        /** add resource once */
        runBlocking {
            assert(
                dm.addResource(
                    newResource = newTopic,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.readResource(
                    resourceName = newTopic.name
                ).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == myJson.encodeToString(newTopic))
            topicsAndMessages[newTopic.name]!!.clear()

            /** Remember that there cannot be retained empty messages */
            assert(dm.addResource(
                newResource = emptyTopic,
                content = "".inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.readResource(
                resourceName = emptyTopic.name
            ).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[emptyTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[emptyTopic.name]!!.first() == myJson.encodeToString(emptyTopic))
            topicsAndMessages[emptyTopic.name]!!.clear()

            assert(dm.deleteResource(
                resourceName = newTopic.name
            ) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            topicsAndMessages[newTopic.name]!!.clear()
            assert(dm.addResource(
                newResource = newTopic,
                content = "".inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == myJson.encodeToString(newTopic))
            topicsAndMessages[newTopic.name]!!.clear()
        }

        /** Cleanup */
        runBlocking {
            assert(
                    dm.deleteResource(
                    resourceName = newTopic.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                    dm.deleteResource(
                    resourceName = emptyTopic.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(waitForCondition { (topicsAndMessages[emptyTopic.name]?.size ?: 0) == 1 })
            topicsAndMessages[newTopic.name]!!.clear()
            topicsAndMessages[emptyTopic.name]!!.clear()
            topicsAndMessages[emptyTopic.name]!!.clear()
            assertDoesNotThrow {
                client!!.unsubscribe(newTopic.name)
                client!!.unsubscribe(emptyTopic.name)
            }
        }
    }

    @Test
    override fun add_resource_twice_or_with_blank_name_fail() {
        val blankResource = Resource(
            name = "",
            enforcement = EnforcementType.COMBINED
        )
        val newResourceContent1 = "exam content"

        /** add resource twice */
        run {
            /**
             * Creating a topic twice is fine (it
             * just sends a retained message twice)
             */
        }

        /** add resource with blank name */
        runBlocking {
            assert(
                dm.addResource(
                    newResource = blankResource,
                    content = newResourceContent1.inputStream()
                ) == OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    override fun read_resource_works() {
        val newTopic = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )

        /** read resource */
        runBlocking {
            val newTopicContent = "retained message for topic ${newTopic.name}"
            assert(dm.addResource(
                newResource = newTopic,
                content = newTopicContent.inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.readResource(
                resourceName = newTopic.name
            ).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == myJson.encodeToString(newTopic))
            topicsAndMessages[newTopic.name]!!.clear()
        }

        /** Cleanup */
        runBlocking {
            assert(
                dm.deleteResource(
                    resourceName = newTopic.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            topicsAndMessages[newTopic.name]!!.clear()
            assertDoesNotThrow {
                client!!.unsubscribe(newTopic.name)
            }
        }
    }

    @Test
    override fun read_non_existing_or_deleted_resource_or_with_blank_name_fail() {
        /** read non-existing resource */
        run {
            /**
             * MQTT clients can subscribe to non-existing or deleted
             * topics (the broker will just create the given topic)
             */
        }

        /** read deleted resource */
        run {
            /**
             * MQTT clients can subscribe to non-existing or deleted
             * topics (the broker will just create the given topic)
             */
        }

        /** read resource with blank name */
        runBlocking {
            assert(
                dm.readResource(
                    resourceName = " "
                ).code == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    override fun write_resource_works() {
        val emptyTopic = Resource(
            name = "empty",
            enforcement = EnforcementType.COMBINED
        )
        val newTopic = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )

        /** write resource once */
        runBlocking {
            val newTopicContent = "retained message for topic ${newTopic.name}"
            assert(
                dm.addResource(
                    newResource = newTopic,
                    content = newTopicContent.inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.readResource(
                    resourceName = newTopic.name
                ).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == myJson.encodeToString(newTopic))
            topicsAndMessages[newTopic.name]!!.clear()

            val newTopicContentWrite = "write new message for topic ${newTopic.name}"
            assert(
                dm.writeResource(
                    updatedResource = Resource(
                        name = newTopic.name,
                        enforcement = EnforcementType.COMBINED
                    ),
                    content = newTopicContentWrite.inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == newTopicContentWrite)
            topicsAndMessages[newTopic.name]!!.clear()
        }

        /** write empty resource */
        runBlocking {
            /** Remember that there cannot be retained empty messages */
            assert(
                dm.addResource(
                    newResource = emptyTopic,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.readResource(
                    resourceName = emptyTopic.name
                ).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[emptyTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[emptyTopic.name]!!.first() == myJson.encodeToString(emptyTopic))
            topicsAndMessages[emptyTopic.name]!!.clear()

            assert(waitForCondition { (topicsAndMessages[emptyTopic.name]?.size ?: 0) == 0 })
            val emptyTopicContentWrite = ""
            assert(dm.writeResource(
                updatedResource = Resource(
                    name = emptyTopic.name,
                    enforcement = EnforcementType.COMBINED
                ),
                content = emptyTopicContentWrite.inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[emptyTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[emptyTopic.name]!!.first() == emptyTopicContentWrite)
            topicsAndMessages[emptyTopic.name]!!.clear()
        }

        /** Cleanup */
        runBlocking {
            assert(
                dm.deleteResource(
                    resourceName = newTopic.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = emptyTopic.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(waitForCondition { (topicsAndMessages[emptyTopic.name]?.size ?: 0) == 1 })
            topicsAndMessages[newTopic.name]!!.clear()
            topicsAndMessages[emptyTopic.name]!!.clear()
            assertDoesNotThrow {
                client!!.unsubscribe(newTopic.name)
                client!!.unsubscribe(emptyTopic.name)
            }
        }
    }

    @Test
    override fun write_non_existing_or_deleted_resource_or_with_blank_name_fail() {
        /** write non-existing resource */
        run {
            /**
             * MQTT clients can publish to non-existing or deleted
             * topics (the broker will just create the given topic)
             */
        }

        /** write deleted resource */
        run {
            /**
             * MQTT clients can publish to non-existing or deleted
             * topics (the broker will just create the given topic)
             */
        }

        /** write resource with blank name */
        runBlocking {
            val emptyResource = Resource(
                name = "",
                enforcement = EnforcementType.COMBINED
            )

            assert(
                dm.writeResource(
                    updatedResource = emptyResource,
                    content = "empty resource content".inputStream()
                ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    override fun delete_resource_works() {
        val newTopic = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )

        /** delete resource once */
        runBlocking {
            val newTopicContent = "retained message for topic ${newTopic.name}"
            assert(
                dm.addResource(
                    newResource = newTopic,
                    content = newTopicContent.inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.readResource(
                    resourceName = newTopic.name
                ).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == myJson.encodeToString(newTopic))
            topicsAndMessages[newTopic.name]!!.clear()
            assert(
                dm.deleteResource(
                    resourceName = newTopic.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            topicsAndMessages[newTopic.name]!!.clear()
        }

        assertDoesNotThrow {
            client!!.unsubscribe(newTopic.name)
        }
    }

    @Test
    override fun delete_non_existing_or_deleted_resource_or_with_blank_name_fail() {
        /** delete non-existing resource */
        run {
            /**
             * The lifecycle of topics is determined by
             * retained messages and subscribed users
             */
        }

        /** delete non-existing resource */
        run {
            /**
             * The lifecycle of topics is determined by
             * retained messages and subscribed users
             */
        }

        /** delete resource with blank name */
        runBlocking {
            assert(
                dm.deleteResource(
                    resourceName = " "
                ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }
    }



    override fun messageArrived(topic: String, message: MqttMessage) {
        runBlocking {
            messageArrivedMutex.withLock {
                topicsAndMessages.putIfAbsent(topic, mutableListOf())
                val messagePayload = String(message.payload)
                logger.info { "TEST: MQTT message arrived, topic $topic, payload $messagePayload" }
                if (messagePayload.isBlank()) {
                    topicsAndMessages[topic]!!.add("")
                } else {
                    topicsAndMessages[topic]!!.add(messagePayload)
                }
            }
        }
    }

    override fun disconnected(disconnectResponse: MqttDisconnectResponse?) {
        logger.info { "MQTT client was disconnected: ${disconnectResponse.toString()}" }
    }

    override fun authPacketArrived(reasonCode: Int, properties: MqttProperties?) {
        logger.info { "TEST: authPacketArrived" }
    }

    override fun connectComplete(reconnect: Boolean, serverURI: String?) {
        logger.info { "TEST: connectComplete" }
    }

    override fun deliveryComplete(token: IMqttToken?) {
        logger.info { "TEST: deliveryComplete" }
    }

    override fun mqttErrorOccurred(exception: MqttException?) {
        logger.info { "TEST: mqttErrorOccurred" }
    }
}
