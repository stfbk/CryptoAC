package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.*
import java.lang.AssertionError

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class CoreRBACCLOUDTest : CoreRBACTest() {

    override val core: CoreRBACCLOUD =
        CoreFactory.getCore(Parameters.adminCoreRBACCLOUDParameters) as CoreRBACCLOUD
    private var processDocker: Process? = null

    // TODO replicate relevant tests for both combined and traditional enforcement (I know, it's a lot of work...)

    @BeforeAll
    override fun setUpAll() {
        "./buildAll.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_CLOUD.sh".runCommand(dir, hashSetOf(
            "port: 3306  MySQL Community Server - GPL",
            "Started ServerConnector",
            "release_notes"
        ))
    }

    @BeforeEach
    override fun setUp() {
        assert(core.initAdmin() == OutcomeCode.CODE_000_SUCCESS)
    }
    
    @AfterEach
    override fun tearDown() {
        TestUtilities.resetDMCloud()
        TestUtilities.resetMMMySQL()
        TestUtilities.resetOPACloud()
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./clean.sh".runCommand(dir, hashSetOf("clean_all_end_of_script"))
    }


    /** Before executing each block, commit the MM status */
    override fun myRun(coreRBAC: CoreRBAC?, block: () -> Unit) {
        val mmInterface = coreRBAC?.let {(coreRBAC as CoreRBACMQTT).mm } ?: core.mm
        TestUtilities.assertUnLockAndLock(mmInterface)
        try {
            block.invoke()
        } catch (e: AssertionError) {
            e.printStackTrace()
        }
        TestUtilities.assertUnLockAndLock(mmInterface)
    }

    /** Before executing each blocking block, commit the MM status */
    override fun myRunBlocking(coreRBAC: CoreRBAC?, block: suspend CoroutineScope.() -> Unit) {
        val mmInterface = coreRBAC?.let {(coreRBAC as CoreRBACMQTT).mm } ?: core.mm
        TestUtilities.assertUnLockAndLock(mmInterface)
        try {
            runBlocking {
                block.invoke(this)
            }
        } catch (e: AssertionError) {
            e.printStackTrace()
        }
        TestUtilities.assertUnLockAndLock(mmInterface)
    }
}