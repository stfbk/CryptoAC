package eu.fbk.st.cryptoac.ac.dynsec

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.ac.ACFactory
import eu.fbk.st.cryptoac.ac.ACService
import eu.fbk.st.cryptoac.ac.ACServiceRBAC
import eu.fbk.st.cryptoac.ac.ACServiceRBACTest
import eu.fbk.st.cryptoac.core.mqtt.CryptoACMQTTClient
import eu.fbk.st.cryptoac.dm.mqtt.DMServiceMQTT
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.User
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import mu.KotlinLogging
import org.eclipse.paho.mqttv5.client.IMqttToken
import org.eclipse.paho.mqttv5.client.MqttCallback
import org.eclipse.paho.mqttv5.client.MqttDisconnectResponse
import org.eclipse.paho.mqttv5.client.persist.MemoryPersistence
import org.eclipse.paho.mqttv5.common.MqttException
import org.eclipse.paho.mqttv5.common.MqttMessage
import org.eclipse.paho.mqttv5.common.packet.MqttProperties
import org.junit.jupiter.api.*

private val logger = KotlinLogging.logger {}

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class ACServiceRBACDynSecTest : ACServiceRBACTest(), MqttCallback {

    override lateinit var acRBAC: ACServiceRBACDynSec
    override lateinit var ac: ACService
    private var client: CryptoACMQTTClient? = null

    private var processDocker: Process? = null

    /** Mutex to synchronize the message arrived procedure */
    private val messageArrivedMutex = Mutex()



    @BeforeAll
    override fun setUpAll() {
        "./cleanAllAndBuild.sh".runCommand(TestUtilities.dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_mosquitto_dynsec\"".runCommand(
            workingDir = TestUtilities.dir,
            endStrings = hashSetOf("mosquitto version 2.0.14 running")
        )

        val brokerBaseAPI = "tcp://${Parameters.acServiceRBACDynSecParameters.url}:${Parameters.acServiceRBACDynSecParameters.port}"
        val persistence = MemoryPersistence()
        client = CryptoACMQTTClient(
            serverURI = brokerBaseAPI,
            clientId = generateRandomString(),
            persistence = persistence,
            tls = Parameters.acServiceRBACDynSecParameters.tls,
            username = Parameters.acServiceRBACDynSecParameters.username,
            password = Parameters.acServiceRBACDynSecParameters.password,
        )
        client!!.setCallback(this)
        acRBAC = ACServiceRBACDynSec(Parameters.acServiceRBACDynSecParameters, client!!)
        acRBAC.init()
        ac = acRBAC
    }

    @BeforeEach
    override fun setUp() {
        assert(acRBAC.lock() == CODE_000_SUCCESS)
        assert(acRBAC.configure() == CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        assert(acRBAC.unlock() == CODE_000_SUCCESS)
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./cleanAll.sh".runCommand(
            workingDir = TestUtilities.dir,
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
    override fun add_user_twice_or_with_blank_username_fail() {
        /** add user twice */
        run {
            assert(acRBAC.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(acRBAC.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with blank username */
        runBlocking {
            assert(acRBAC.addUser(
                newUser = User(" ")
            ).code == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(ac.deleteUser(
            username = Parameters.aliceUser.name
        ) == CODE_000_SUCCESS)
    }

    @Test
    override fun delete_user_twice_or_not_existing_or_with_blank_username_fail() {

        /** delete user twice */
        run {
            assert(acRBAC.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_000_SUCCESS)

            assert(acRBAC.deleteUser(
                username = Parameters.aliceUser.name
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(acRBAC.deleteUser(
                username = Parameters.aliceUser.name
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_004_USER_NOT_FOUND)
        }

        /** delete user not existing */
        run {
            assert(acRBAC.deleteUser(
                username = Parameters.aliceUser.name
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_004_USER_NOT_FOUND)
        }

        /** delete user with blank username */
        runBlocking {
            assert(ac.deleteUser(
                username = " "
            ) == CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    override fun add_role_twice_or_with_blank_name_fail() {
        val roleName = "roleTest1"

        /** add role twice */
        runBlocking {
            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with blank name */
        runBlocking {
            assert(
                acRBAC.addRole(
                    roleName = ""
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)
    }

    @Test
    override fun delete_role_twice_or_with_blank_role_name_fail() {
        val roleName = "roleTest1"

        /** delete role twice */
        runBlocking {
            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.deleteRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.deleteRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_005_ROLE_NOT_FOUND)
        }

        /** delete role with blank name */
        runBlocking {
            assert(
                acRBAC.deleteRole(
                    roleName = ""
                ) == CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    override fun add_resource_works() {
        /** Add resource is not implemented */
    }

    @Test
    override fun add_resource_twice_or_with_blank_name_fail() {
        /** Add resource is not implemented */
    }

    @Test
    override fun delete_resource_works() {
        /** Add resource (thus, delete resource) is not implemented */
    }

    @Test
    override fun delete_resource_twice_or_with_blank_resource_name_fail() {
        /** Add resource (thus, delete resource) is not implemented */
    }

    @Test
    override fun assign_user_to_role_twice_or_non_existing_user_to_role_or_non_existing_role_or_blank_name_fail() {
        val username = "userTest1"
        val roleName = "roleTest1"

        /** assign user to role twice */
        runBlocking {
            assert(acRBAC.addUser(
                newUser = User(username)
            ).code == CODE_000_SUCCESS)

            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignUserToRole(
                    username = username,
                    roleName = roleName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.assignUserToRole(
                    username = username,
                    roleName = roleName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_062_UR_ASSIGNMENTS_ALREADY_EXISTS)
        }

        /** assign user to non-existing role */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                    username = username,
                    roleName = "non-existing-role"
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_005_ROLE_NOT_FOUND)
        }

        /** assign non-existing user to role */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                    username = "non-existing-user",
                    roleName = roleName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_004_USER_NOT_FOUND)
        }

        /** assign user to role with blank name */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                    username = username,
                    roleName = " "
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** assign user with blank name to role */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                    username = " ",
                    roleName = roleName
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteUser(
                username = username
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)
    }

    @Test
    override fun assign_permission_to_role_twice_or_non_existing_role_or_non_existing_resource_or_blank_name_fail() {
        val roleName = "roleTest1"
        val resourceName = "resourceTest1"

        /** assign permission to role twice */
        runBlocking {
            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignPermissionToRole(
                    roleName = roleName,
                    permission = PermissionType.READWRITE,
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.assignPermissionToRole(
                    roleName = roleName,
                    permission = PermissionType.READWRITE,
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_063_PA_ASSIGNMENTS_ALREADY_EXISTS)
        }

        /** assign permission to role on non-existing resource */
        runBlocking {
            /** As DynSec does not have state of resources (i.e., topics), this works */
        }

        /** assign permission to non-existing role on resource */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                    roleName = "non-existing-role",
                    permission = PermissionType.READWRITE,
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC, unlockCode = CODE_005_ROLE_NOT_FOUND)
        }

        /** assign permission to role with blank name on resource */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                    roleName = " ",
                    permission = PermissionType.READWRITE,
                    resourceName = resourceName
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** assign permission to role on resource with blank name */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                    roleName = roleName,
                    permission = PermissionType.READWRITE,
                    resourceName = " "
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteResource(
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
    }

    @Test
    override fun check_allowed_user_is_authorized_works() {
        /** Is user allowed is not implemented */
    }

    @Test
    override fun check_not_authorized_user_gets_denied_works() {
        /** Is user allowed is not implemented */
    }






    override fun messageArrived(topic: String, message: MqttMessage) {
        runBlocking {
            messageArrivedMutex.withLock {
                val messagePayload = String(message.payload)
                logger.info { "TEST: MQTT message arrived, topic $topic, payload $messagePayload" }
                if (messagePayload.isNotBlank()) {
                    acRBAC.responsesReceivedFromDynSec.add(String(message.payload))
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