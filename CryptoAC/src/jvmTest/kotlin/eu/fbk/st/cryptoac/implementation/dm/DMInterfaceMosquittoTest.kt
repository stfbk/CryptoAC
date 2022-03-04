package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.core.CryptoACMqttClient
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import kotlinx.coroutines.runBlocking
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.client.*
import org.eclipse.paho.mqttv5.client.persist.MemoryPersistence
import org.eclipse.paho.mqttv5.common.MqttException
import org.eclipse.paho.mqttv5.common.MqttMessage
import org.eclipse.paho.mqttv5.common.packet.MqttProperties
import org.junit.jupiter.api.*
import java.util.concurrent.TimeUnit

import kotlin.random.Random

private val logger = KotlinLogging.logger {}

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class DMInterfaceMosquittoTest : DMInterfaceTest(), MqttCallback {

    private val dynsecTopicResponse = "\$CONTROL/dynamic-security/v1/response"



    override var dm: DMInterface? = null
    private var client: CryptoACMqttClient? = null

    // TODO do not use "processBuild.waitFor", instead read
    //  the output until you find a specific string that
    //  indicates that the process terminated

    private var processDocker: Process? = null

    /** A map of subscribed topics with the messages */
    private val topicsAndMessages: HashMap<String, MutableList<String>> = hashMapOf()

    @BeforeAll
    override fun setUpAll() {
        val processBuild = "./buildAll.sh".runCommand(java.io.File("../Documentation/Installation/"))
        processBuild.waitFor(10, TimeUnit.SECONDS)
        processDocker = "./startCryptoAC_MQTT.sh \"cryptoac_mosquitto\"".runCommand(java.io.File("../Documentation/Installation/"))
        processDocker!!.waitFor(3, TimeUnit.SECONDS)

        val brokerBaseAPI = "tcp://${Parameters.dmInterfaceMosquittoParameters.url}:${Parameters.dmInterfaceMosquittoParameters.port}"
        val persistence = MemoryPersistence()
        client = CryptoACMqttClient(brokerBaseAPI, generateRandomClientId(), persistence)
        client!!.setCallback(this)
        dm = DMInterfaceMosquitto(Parameters.dmInterfaceMosquittoParameters, client!!)
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        val cleanProcess = "./clean.sh".runCommand(java.io.File("../Documentation/Installation/"))
        cleanProcess.waitFor(5, TimeUnit.SECONDS)
    }

    @Test
    override fun `configure once works`() {
        /** No configuration needed for DM MQTT */
    }

    @Test
    override fun `configure twice works`() {
        /** No configuration needed for DM MQTT */
    }


    @Test
    override fun `add file once or empty or deleted file works`() {
        val emptyTopic = File(name = "empty", enforcement = EnforcementType.COMBINED)
        val newTopic = File(name = "exam", enforcement = EnforcementType.COMBINED)

        /** add file once */
        runBlocking {
            val newTopicContent = "retained message for topic ${newTopic.name}"
            assert(dm!!.addFile(newTopic, newTopicContent.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.readFile(newTopic.name).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == newTopicContent)
            topicsAndMessages[newTopic.name]!!.clear()
        }

        /** add empty file */
        runBlocking {
            /** Remember that there cannot be retained empty messages */
            assert(dm!!.addFile(emptyTopic, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.readFile(emptyTopic.name).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[emptyTopic.name]?.size ?: 0) == 0 })
        }

        /** add deleted file */
        runBlocking {
            val newTopicContent2 = "second retained message for topic ${newTopic.name}"
            assert(dm!!.deleteFile(newTopic.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            topicsAndMessages[newTopic.name]!!.clear()
            assert(dm!!.addFile(newTopic, newTopicContent2.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == newTopicContent2)
            topicsAndMessages[newTopic.name]!!.clear()
        }

        /** Cleanup */
        runBlocking {
            assert(dm!!.deleteFile(newTopic.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.deleteFile(emptyTopic.name) == OutcomeCode.CODE_000_SUCCESS)
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
    override fun `add file twice fails`() {
        /**
         * Creating a topic twice is fine (it
         * just sends a retained message twice)
         */
    }

    @Test
    override fun `read file works`() {
        val newTopic = File(name = "exam", enforcement = EnforcementType.COMBINED)

        /** read file */
        runBlocking {
            val newTopicContent = "retained message for topic ${newTopic.name}"
            assert(dm!!.addFile(newTopic, newTopicContent.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.readFile(newTopic.name).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == newTopicContent)
            topicsAndMessages[newTopic.name]!!.clear()
        }

        /** Cleanup */
        runBlocking {
            assert(dm!!.deleteFile(newTopic.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            topicsAndMessages[newTopic.name]!!.clear()
            assertDoesNotThrow {
                client!!.unsubscribe(newTopic.name)
            }
        }
    }

    @Test
    override fun `read non-existing or deleted file fail`() {
        /**
         * MQTT clients can subscribe to non-existing or deleted
         * topics (the broker will just create the given topic)
         */
    }

    @Test
    override fun `write file once or empty works`() {
        val emptyTopic = File(name = "empty", enforcement = EnforcementType.COMBINED)
        val newTopic = File(name = "exam", enforcement = EnforcementType.COMBINED)

        /** write file once */
        runBlocking {
            val newTopicContent = "retained message for topic ${newTopic.name}"
            assert(dm!!.addFile(newTopic, newTopicContent.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.readFile(newTopic.name).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == newTopicContent)
            topicsAndMessages[newTopic.name]!!.clear()

            val newTopicContentWrite = "write new message for topic ${newTopic.name}"
            assert(dm!!.writeFile(File(newTopic.name, enforcement = EnforcementType.COMBINED), newTopicContentWrite.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == newTopicContentWrite)
            topicsAndMessages[newTopic.name]!!.clear()
        }

        /** write empty file */
        runBlocking {
            /** Remember that there cannot be retained empty messages */
            assert(dm!!.addFile(emptyTopic, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.readFile(emptyTopic.name).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[emptyTopic.name]?.size ?: 0) == 0 })
            val emptyTopicContentWrite = ""
            assert(dm!!.writeFile(File(emptyTopic.name, enforcement = EnforcementType.COMBINED), emptyTopicContentWrite.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[emptyTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[emptyTopic.name]!!.first() == emptyTopicContentWrite)
            topicsAndMessages[emptyTopic.name]!!.clear()
        }

        /** Cleanup */
        runBlocking {
            assert(dm!!.deleteFile(newTopic.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.deleteFile(emptyTopic.name) == OutcomeCode.CODE_000_SUCCESS)
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
    override fun `write non-existing or deleted file fail`() {
        /**
         * MQTT clients can publish to non-existing or deleted
         * topics (the broker will just create the given topic)
         */
    }

    @Test
    override fun `delete file once works`() {
        val newTopic = File(name = "exam", enforcement = EnforcementType.COMBINED)

        /** delete file once */
        runBlocking {
            val newTopicContent = "retained message for topic ${newTopic.name}"
            assert(dm!!.addFile(newTopic, newTopicContent.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.readFile(newTopic.name).code == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            assert(topicsAndMessages[newTopic.name]!!.first() == newTopicContent)
            topicsAndMessages[newTopic.name]!!.clear()
            assert(dm!!.deleteFile(newTopic.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[newTopic.name]?.size ?: 0) == 1 })
            topicsAndMessages[newTopic.name]!!.clear()
        }

        assertDoesNotThrow {
            client!!.unsubscribe(newTopic.name)
        }
    }

    @Test
    override fun `delete non-existing or deleted file fail`() {
        /**
         * The lifecycle of topics is determined by retained
         * messages and subscribed users
         */
    }




    @Test
    override fun `single and multiple lock and unlock works`() {
        /** Lock/Unlock/Rollback not supported by this module */
    }

    @Test
    override fun `single and multiple lock and rollback works`() {
        /** Lock/Unlock/Rollback not supported by this module */
    }

    @Test
    override fun `unlock without locking fails`() {
        /** Lock/Unlock/Rollback not supported by this module */
    }

    @Test
    override fun `rollback without locking fails`() {
        /** Lock/Unlock/Rollback not supported by this module */
    }



    @Test
    fun `create a client once works`() {
        val username = "userTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** create a client once */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateClientCommand(
                username,
                "passwordUserTest1"
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createClient"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        client!!.unsubscribe(dynsecTopicResponse)
        val clearCommand = (dm as DMInterfaceMosquitto).getDeleteClientCommand(username)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                OutcomeCode.CODE_000_SUCCESS
        )
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `create a client twice or with blank username or blank password fail`() {
        val username = "userTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** create a client twice */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateClientCommand(
                username,
                "passwordUserTest1"
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createClient"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createClient","error":"Client already exists"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** create a client with no username */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateClientCommand(
                "",
                "passwordUserTest2"
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }

        /** create a client with no password */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateClientCommand(
                "userTest2",
                ""
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }

        client!!.unsubscribe(dynsecTopicResponse)
        val clearCommand = (dm as DMInterfaceMosquitto).getDeleteClientCommand(username)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                OutcomeCode.CODE_000_SUCCESS
        )
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `delete a client once works`() {
        val username = "userTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** create a client once */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateClientCommand(
                username,
                "passwordUserTest1"
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createClient"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            val clearCommand = (dm as DMInterfaceMosquitto).getDeleteClientCommand(username)
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                    OutcomeCode.CODE_000_SUCCESS
            )
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"deleteClient"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        client!!.unsubscribe(dynsecTopicResponse)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `delete a client twice or with blank username fail`() {
        val username = "userTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** delete a client twice */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateClientCommand(
                username,
                "passwordUserTest1"
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createClient"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            val clearCommand = (dm as DMInterfaceMosquitto).getDeleteClientCommand(username)
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                    OutcomeCode.CODE_000_SUCCESS
            )
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"deleteClient"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                    OutcomeCode.CODE_000_SUCCESS
            )
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"deleteClient","error":"Client not found"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** delete a client with no username */
        runBlocking {
            val clearCommand = (dm as DMInterfaceMosquitto).getDeleteClientCommand("")
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }

        client!!.unsubscribe(dynsecTopicResponse)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }



    @Test
    fun `create a role once works`() {
        val roleName = "roleTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** create a role once */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                roleName,
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        client!!.unsubscribe(dynsecTopicResponse)
        val clearCommand = (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                OutcomeCode.CODE_000_SUCCESS
        )
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `create a role twice or with blank role name fail`() {
        val roleName = "roleTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** create a role twice */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                roleName,
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createRole","error":"Role already exists"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** create a role with no role name */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                "",
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }

        client!!.unsubscribe(dynsecTopicResponse)
        val clearCommand = (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                OutcomeCode.CODE_000_SUCCESS
        )
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `delete a role once works`() {
        val roleName = "roleTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** create a role once */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                roleName,
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            val clearCommand = (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                    OutcomeCode.CODE_000_SUCCESS
            )
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"deleteRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        client!!.unsubscribe(dynsecTopicResponse)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `delete a role twice or with blank role name fail`() {
        val roleName = "roleTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** delete a role twice */
        runBlocking {
            val command = (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                roleName,
            )
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(command)) ==
                    OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"createRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            val clearCommand = (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                    OutcomeCode.CODE_000_SUCCESS
            )
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"deleteRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                    OutcomeCode.CODE_000_SUCCESS
            )
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"deleteRole","error":"Role not found"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** delete a role with no role name */
        runBlocking {
            val clearCommand = (dm as DMInterfaceMosquitto).getDeleteRoleCommand("")
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(clearCommand)) ==
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }

        client!!.unsubscribe(dynsecTopicResponse)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }



    @Test
    fun `assign a client to a role once works`() {
        val username = "userTest1"
        val roleName = "roleTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** assign a client to a role once */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateClientCommand(
                    username,
                    "passwordUserTest1"
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 2 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddClientRoleCommand(
                    username,
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addClientRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        client!!.unsubscribe(dynsecTopicResponse)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteClientCommand(username)
        )) == OutcomeCode.CODE_000_SUCCESS)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        )) == OutcomeCode.CODE_000_SUCCESS)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `assign a client to a role twice or non-existing client to role or non-existing role or blank name fail`() {
        val username = "userTest1"
        val roleName = "roleTest1"
        dm!!.readFile(dynsecTopicResponse)


        /** assign a client to a role twice */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateClientCommand(
                    username,
                    "passwordUserTest1"
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 2 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddClientRoleCommand(
                    username,
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addClientRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddClientRoleCommand(
                    username,
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addClientRole","error":"Internal error"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** assign a client to a non-existing role */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddClientRoleCommand(
                    username,
                    "non-existing-role",
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            logger.error { topicsAndMessages[dynsecTopicResponse]!!.first() }
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addClientRole","error":"Role not found"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** assign a non-existing client to a role */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddClientRoleCommand(
                    "non-existing-role",
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            logger.error { topicsAndMessages[dynsecTopicResponse]!!.first() }
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addClientRole","error":"Client not found"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** assign a client to a role with blank name */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddClientRoleCommand(
                    username,
                    "",
                )
            )) == OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }

        /** assign a client with blank name to a role */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddClientRoleCommand(
                    "",
                    roleName,
                )
            )) == OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }


        client!!.unsubscribe(dynsecTopicResponse)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteClientCommand(username)
        )) == OutcomeCode.CODE_000_SUCCESS)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        )) == OutcomeCode.CODE_000_SUCCESS)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `remove a client from a role once works`() {
        val username = "userTest1"
        val roleName = "roleTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** remove a client from a role once */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateClientCommand(
                    username,
                    "passwordUserTest1"
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 2 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddClientRoleCommand(
                    username,
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addClientRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()


            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveClientRoleCommand(
                    username,
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"removeClientRole"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        client!!.unsubscribe(dynsecTopicResponse)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteClientCommand(username)
        )) == OutcomeCode.CODE_000_SUCCESS)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        )) == OutcomeCode.CODE_000_SUCCESS)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `remove a client from a role twice or non-existing client from role or non-existing role or blank name fail`() {
        val username = "userTest1"
        val roleName = "roleTest1"
        dm!!.readFile(dynsecTopicResponse)

        runBlocking {
            assert(
                (dm as DMInterfaceMosquitto).sendDynsecCommand(
                    hashSetOf(
                        (dm as DMInterfaceMosquitto).getCreateClientCommand(
                            username,
                            "passwordUserTest1"
                        )
                    )
                ) == OutcomeCode.CODE_000_SUCCESS
            )
            assert(
                (dm as DMInterfaceMosquitto).sendDynsecCommand(
                    hashSetOf(
                        (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                            roleName,
                        )
                    )
                ) == OutcomeCode.CODE_000_SUCCESS
            )
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 2 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** remove a client from a role twice */
        runBlocking {
            /** The Mosquitto MQTT broker does not return errors in this case */
        }

        /** remove non-existing client from role */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveClientRoleCommand(
                    "non-existing-client",
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"removeClientRole","error":"Client not found"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** remove client from non-existing role */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveClientRoleCommand(
                    username,
                    "non-existing-role",
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"removeClientRole","error":"Role not found"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** remove a client from a role with blank name */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveClientRoleCommand(
                    username,
                    "",
                )
            )) == OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }

        /** remove a client with blank name from a role */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveClientRoleCommand(
                    "",
                    roleName,
                )
            )) == OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }


        client!!.unsubscribe(dynsecTopicResponse)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteClientCommand(username)
        )) == OutcomeCode.CODE_000_SUCCESS)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        )) == OutcomeCode.CODE_000_SUCCESS)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }



    @Test
    fun `assign a role to a topic once works`() {
        val roleName = "roleTest1"
        val topicName = "topicTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** assign a role to a topic once */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addRoleACL"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        client!!.unsubscribe(dynsecTopicResponse)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        )) == OutcomeCode.CODE_000_SUCCESS)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `assign a role to a topic twice or non-existing role to topic or non-existing topic or blank name fail`() {
        val roleName = "roleTest1"
        val topicName = "topicTest1"
        dm!!.readFile(dynsecTopicResponse)


        /** assign a role to a topic twice */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            logger.info { topicsAndMessages[dynsecTopicResponse]!!.first() }
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addRoleACL","error":"ACL with this topic already exists"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** assign a role to a non-existing topic */
        runBlocking {
            /** This is allowed */
        }

        /** assign a non-existing role to a topic */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddRoleACLCommand(
                    "non-existing-role",
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            logger.info { topicsAndMessages[dynsecTopicResponse]!!.first() }
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addRoleACL","error":"Role not found"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** assign a role to a topic with blank name */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddRoleACLCommand(
                    "",
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }

        /** assign a role with blank name to a topic */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    "",
                )
            )) == OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }


        client!!.unsubscribe(dynsecTopicResponse)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        )) == OutcomeCode.CODE_000_SUCCESS)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `remove a role from a topic once works`() {
        val roleName = "roleTest1"
        val topicName = "topicTest1"
        dm!!.readFile(dynsecTopicResponse)

        /** remove a role from a topic once */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addRoleACL"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"removeRoleACL"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        client!!.unsubscribe(dynsecTopicResponse)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        )) == OutcomeCode.CODE_000_SUCCESS)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }

    @Test
    fun `remove a role from a topic twice or non-existing role from topic or non-existing topic or blank name fail`() {
        val roleName = "roleTest1"
        val topicName = "topicTest1"
        dm!!.readFile(dynsecTopicResponse)


        /** remove a role from a topic twice */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getCreateRoleCommand(
                    roleName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getAddRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"addRoleACL"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            topicsAndMessages[dynsecTopicResponse]!!.clear()

            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"removeRoleACL","error":"ACL not found"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** remove a role from a non-existing topic */
        runBlocking {
            /**
             * Since the presence of a topic is not necessary, this is already
             * covered in the "remove a role from a topic twice" case
             */
        }

        /** remove a non-existing role from a topic */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveRoleACLCommand(
                    "non-existing-role",
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (topicsAndMessages[dynsecTopicResponse]?.size ?: 0) == 1 })
            logger.info { topicsAndMessages[dynsecTopicResponse]!!.first() }
            assert(topicsAndMessages[dynsecTopicResponse]!!.first() == """{"responses":[{"command":"removeRoleACL","error":"Role not found"}]}""")
            topicsAndMessages[dynsecTopicResponse]!!.clear()
        }

        /** remove a role from a topic with blank name */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveRoleACLCommand(
                    "",
                    AclType.publishClientSend,
                    topicName,
                )
            )) == OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }

        /** remove a role with blank name from a topic */
        runBlocking {
            assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
                (dm as DMInterfaceMosquitto).getRemoveRoleACLCommand(
                    roleName,
                    AclType.publishClientSend,
                    "",
                )
            )) == OutcomeCode.CODE_019_MISSING_PARAMETERS)
        }


        client!!.unsubscribe(dynsecTopicResponse)
        assert((dm as DMInterfaceMosquitto).sendDynsecCommand(hashSetOf(
            (dm as DMInterfaceMosquitto).getDeleteRoleCommand(roleName)
        )) == OutcomeCode.CODE_000_SUCCESS)
        topicsAndMessages[dynsecTopicResponse]!!.clear()
    }


    // TODO refactor, there is code duplication
    /** Generate a random string as Client ID for the MQTT client */
    private fun generateRandomClientId(): String {
        val charPool: List<Char> = ('a'..'z') + ('A'..'Z') + ('0'..'9')
        return (1..20)
            .map { Random.nextInt(0, charPool.size) }
            .map(charPool::get)
            .joinToString("")
    }


    override fun messageArrived(topic: String, message: MqttMessage) {
        synchronized(topicsAndMessages) {
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

    override fun disconnected(disconnectResponse: MqttDisconnectResponse?) {
        logger.info { "TEST: disconnected" }
        client!!.connectSync(reconnecting = true, Parameters.dmInterfaceMosquittoParameters.tls)
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