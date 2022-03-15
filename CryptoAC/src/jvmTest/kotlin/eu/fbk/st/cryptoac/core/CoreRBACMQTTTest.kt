package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.runBlocking
import mu.KotlinLogging
import org.junit.jupiter.api.*
import kotlin.test.assertFalse


private val logger = KotlinLogging.logger {}

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal open class CoreRBACMQTTTest : CoreRBACTest() {

    override val core: CoreRBACMQTT =
        CoreFactory.getCore(Parameters.adminCoreRBACMQTTParameters) as CoreRBACMQTT
    private var processDocker: Process? = null

    @BeforeAll
    override fun setUpAll() {
        "./buildAll.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_MQTT.sh".runCommand(dir, hashSetOf(
            "Started ServerConnector",
            "Server initialized",
            "mosquitto version 2.0.14 running",
        ))
    }

    @BeforeEach
    override fun setUp() {
        assert(core.initAdmin() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        core.subscribedTopicsKeysAndMessages.clear()
        TestUtilities.resetDMMQTT(core.dm)
        TestUtilities.resetMMRedis()
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./clean.sh".runCommand(dir, hashSetOf("clean_all_end_of_script"))
    }

    /**
     * Important note: Mosquitto does not return any error if a client
     * tries to subscribe to a topic she does not have access to; This
     * behaviour is adopted on purpose as a security mechanism. Therefore,
     * this test is implemented differently with respect to the super
     * class. In detail, this method checks that the client cannot receive
     * messages from denied topics.
     */
    @Test
    // TODO do for both combined and traditional enforcement
    override fun `not assigned or revoked user read file fails`() {
        val alice = "alice"
        val aliceCore = addAndInitUser(core, alice) as CoreRBACMQTT

        val employee = "employee"
        assert(core.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(core.addFile(exam, examContent.inputStream(), EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        val firstMessage = "first message"
        val secondMessage = "second message"
        val thirdMessage = "third message"

        /** not assigned user read file */
        runBlocking {
            assert(core.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(core.readFile(exam).code == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.readFile(exam).code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.writeFile(exam, firstMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)

            assert(waitForCondition { (core.subscribedTopicsKeysAndMessages[exam]?.messages?.size ?: -1) == 1 })
            assert(core.subscribedTopicsKeysAndMessages[exam]!!.messages.first().message == firstMessage)
            assert(aliceCore.subscribedTopicsKeysAndMessages[exam] == null)
        }

        /** revoked user read file */
        runBlocking {
            assert(core.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.readFile(exam).code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.writeFile(exam, secondMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)

            assert(waitForCondition { (core.subscribedTopicsKeysAndMessages[exam]?.messages?.size ?: -1) == 2 })
            assert(core.subscribedTopicsKeysAndMessages[exam]!!.messages.filter { it.message == secondMessage }.size == 1)
            assert(waitForCondition { (aliceCore.subscribedTopicsKeysAndMessages[exam]?.messages?.size ?: -1) == 1 })
            assert(aliceCore.subscribedTopicsKeysAndMessages[exam]!!.messages.first().message == secondMessage)

            assert(core.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(core.writeFile(exam, thirdMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)

            assert(waitForCondition { (core.subscribedTopicsKeysAndMessages[exam]?.messages?.size ?: -1) == 3 })
            assert(core.subscribedTopicsKeysAndMessages[exam]!!.messages.filter { it.message == thirdMessage }.size == 1)
            assert(waitForCondition { (aliceCore.subscribedTopicsKeysAndMessages[exam]?.messages?.size ?: -1) == 1 })
            assert(aliceCore.subscribedTopicsKeysAndMessages[exam]!!.messages.first().message == secondMessage)
        }
    }

    /**
     * Important note: Mosquitto does not return any error if a client
     * tries to publish to a topic she does not have access to; This
     * behaviour is adopted on purpose as a security mechanism. Therefore,
     * this test is implemented differently with respect to the super
     * class. In detail, this method checks that the client cannot publish
     * messages to denied topics (both with traditional and combined AC
     * enforcement).
     */
    @Test
    override fun `not assigned or revoked user write file fails`() {
        val alice = "alice"
        val aliceCore = addAndInitUser(core, alice) as CoreRBACMQTT

        val employee = "employee"
        assert(core.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val examCombined = "examCombined"
        val examCombinedContent = "exam combined content"
        val examTraditional = "examTraditional"
        val examTraditionalContent = "exam traditional content"
        assert(core.addFile(examCombined, examCombinedContent.inputStream(), EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(core.addFile(examTraditional, examTraditionalContent.inputStream(), EnforcementType.TRADITIONAL) == OutcomeCode.CODE_000_SUCCESS)

        val firstMessage = "first message"
        val secondMessage = "second message"

        /** not assigned user write file */
        runBlocking {
            assert(core.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)

            /** combined AC enforcement */
            assert(core.readFile(examCombined).code == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(examCombined, firstMessage.inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)

            /** traditional AC enforcement */
            assert(core.readFile(examTraditional).code == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(examTraditional, firstMessage.inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** revoked user write file */
        runBlocking {

            /** combined AC enforcement */
            assert(core.assignPermissionToRole(employee, examCombined, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(examCombined, secondMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (core.subscribedTopicsKeysAndMessages[examCombined]?.messages?.size ?: -1) == 1 })
            assert(core.subscribedTopicsKeysAndMessages[examCombined]!!.messages.first().message == secondMessage)

            assert(core.revokePermissionFromRole(employee, examCombined, PermissionType.WRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(examCombined, firstMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assertFalse(waitForCondition {
                (core.subscribedTopicsKeysAndMessages[examCombined]?.messages?.size ?: -1) == 2
            })


            /** traditional AC enforcement */
            assert(core.assignPermissionToRole(employee, examTraditional, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(examTraditional, secondMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition {
                (core.subscribedTopicsKeysAndMessages[examTraditional]?.messages?.size ?: -1) == 1
            })
            assert(core.subscribedTopicsKeysAndMessages[examTraditional]!!.messages.first().message == secondMessage)

            assert(core.revokePermissionFromRole(employee, examTraditional, PermissionType.WRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(examTraditional, firstMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assertFalse(waitForCondition {
                (core.subscribedTopicsKeysAndMessages[examTraditional]?.messages?.size ?: -1) == 2
            })
        }
    }

    /**
     * Override just because the publishing of an MQTT message
     * is not synchronous with its reception (i.e., we have to
     * wait for the message to be delivered)
     */
    @Test
    override fun `admin or user read file having permission over file works`() {
        val alice = "alice"
        val aliceCore = addAndInitUser(core, alice) as CoreRBACMQTT

        val employee = "employee"
        assert(core.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val examCombined = "examCombined"
        val examCombinedContent = "exam combined content"
        val examTraditional = "examTraditional"
        val examTraditionalContent = "exam traditional content"
        assert(core.addFile(examCombined, examCombinedContent.inputStream(), EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(core.addFile(examTraditional, examTraditionalContent.inputStream(), EnforcementType.TRADITIONAL) == OutcomeCode.CODE_000_SUCCESS)

        assert(core.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(core.assignPermissionToRole(employee, examCombined, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
        assert(core.assignPermissionToRole(employee, examTraditional, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)

        /** admin read file having permission over file */
        runBlocking {
            val firstMessage = "first message"

            /** combined AC enforcement */
            assert(core.readFile(examCombined).code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.writeFile(examCombined, firstMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (core.subscribedTopicsKeysAndMessages[examCombined]?.messages?.size ?: -1) == 1 })
            assert(core.subscribedTopicsKeysAndMessages[examCombined]!!.messages.first().message == firstMessage)

            /** traditional AC enforcement */
            assert(core.readFile(examTraditional).code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.writeFile(examTraditional, firstMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition {
                (core.subscribedTopicsKeysAndMessages[examTraditional]?.messages?.size ?: -1) == 1
            })
            assert(core.subscribedTopicsKeysAndMessages[examTraditional]!!.messages.first().message == firstMessage)
        }

        /** user read file having permission over file */
        runBlocking {
            val secondMessage = "second message"

            /** combined AC enforcement */
            assert(aliceCore.readFile(examCombined).code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.writeFile(examCombined, secondMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition {
                (aliceCore.subscribedTopicsKeysAndMessages[examCombined]?.messages?.size ?: -1) == 1
            })
            assert(aliceCore.subscribedTopicsKeysAndMessages[examCombined]!!.messages.first().message == secondMessage)

            /** traditional AC enforcement */
            assert(aliceCore.readFile(examTraditional).code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.writeFile(examTraditional, secondMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition {
                (aliceCore.subscribedTopicsKeysAndMessages[examTraditional]?.messages?.size ?: -1) == 1
            })
            assert(aliceCore.subscribedTopicsKeysAndMessages[examTraditional]!!.messages.first().message == secondMessage)
        }
    }

    /**
     * Override just because the publishing of an MQTT message
     * is not synchronous with its reception (i.e., we have to
     * wait for the message to be delivered)
     */
    @Test
    override fun `admin or user write file having permission over file works`() {
        val alice = "alice"
        val aliceCore = addAndInitUser(core, alice) as CoreRBACMQTT

        val employee = "employee"
        assert(core.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val examCombined = "examCombined"
        val examCombinedContent = "exam combined content"
        val examTraditional = "examTraditional"
        val examTraditionalContent = "exam traditional content"
        assert(core.addFile(examCombined, examCombinedContent.inputStream(), EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(core.addFile(examTraditional, examTraditionalContent.inputStream(), EnforcementType.TRADITIONAL) == OutcomeCode.CODE_000_SUCCESS)

        assert(core.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(core.assignPermissionToRole(employee, examCombined, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
        assert(core.assignPermissionToRole(employee, examTraditional, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

        /** admin write file having permission over file */
        runBlocking {
            val firstMessage = "first message"

            /** combined AC enforcement */
            assert(core.readFile(examCombined).code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.writeFile(examCombined, firstMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition { (core.subscribedTopicsKeysAndMessages[examCombined]?.messages?.size ?: -1) == 1 })
            assert(core.subscribedTopicsKeysAndMessages[examCombined]!!.messages.first().message == firstMessage)

            /** traditional AC enforcement */
            assert(core.readFile(examTraditional).code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.writeFile(examTraditional, firstMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition {
                (core.subscribedTopicsKeysAndMessages[examTraditional]?.messages?.size ?: -1) == 1
            })
            assert(core.subscribedTopicsKeysAndMessages[examTraditional]!!.messages.first().message == firstMessage)
        }

        /** user write file having permission over file */
        runBlocking {
            val secondMessage = "second message"

            /** combined AC enforcement */
            assert(aliceCore.readFile(examCombined).code == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(examCombined, secondMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition {
                (aliceCore.subscribedTopicsKeysAndMessages[examCombined]?.messages?.size ?: -1) == 1
            })
            assert(aliceCore.subscribedTopicsKeysAndMessages[examCombined]!!.messages.first().message == secondMessage)

            /** traditional AC enforcement */
            assert(aliceCore.readFile(examTraditional).code == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(examTraditional, secondMessage.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(waitForCondition {
                (aliceCore.subscribedTopicsKeysAndMessages[examTraditional]?.messages?.size ?: -1) == 1
            })
            assert(aliceCore.subscribedTopicsKeysAndMessages[examTraditional]!!.messages.first().message == secondMessage)
        }
    }

    /**
     * Important note: Mosquitto does not return any error if a client
     * tries to publish to a topic she does not have access to; This
     * behaviour is adopted on purpose as a security mechanism. Therefore,
     * this test is implemented differently with respect to the super
     * class. In detail, this method checks that the client cannot publish
     * messages anymore in denied topics.
     */
    @Test
    override fun `revoke assigned permission and reassign lower permission works`() {
        logger.warn { "Mosquitto does not tell the client if it tried to subscribe" +
                "to a topic it does not have access to; it will just silently drop the message. " +
                "This is done on purpose as a security mechanism  " }
    }

    /** Before executing each block, commit the MM status */
    override fun myRun(coreRBAC: CoreRBAC?, block: () -> Unit) {
        val mmInterface = coreRBAC?.let {(coreRBAC as CoreRBACMQTT).mm } ?: core.mm
        assertUnLockAndLock(mmInterface)
        try {
            block.invoke()
        } catch (e: AssertionError) {
            e.printStackTrace()
        }
        assertUnLockAndLock(mmInterface)
    }

    /** Before executing each blocking block, commit the MM status */
    override fun myRunBlocking(coreRBAC: CoreRBAC?, block: suspend CoroutineScope.() -> Unit) {
        val mmInterface = coreRBAC?.let {(coreRBAC as CoreRBACMQTT).mm } ?: core.mm
        assertUnLockAndLock(mmInterface)
        try {
            runBlocking {
                block.invoke(this)
            }
        } catch (e: AssertionError) {
            e.printStackTrace()
        }
        assertUnLockAndLock(mmInterface)
    }
}