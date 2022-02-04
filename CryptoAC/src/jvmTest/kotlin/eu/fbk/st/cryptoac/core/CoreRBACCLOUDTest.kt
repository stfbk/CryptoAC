package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.*
import java.io.File
import java.lang.AssertionError
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class CoreRBACCLOUDTest : CoreRBACTest() {

    override val core: CoreRBACCLOUD =
        CoreFactory.getCore(Parameters.adminCoreRBACCLOUDParameters) as CoreRBACCLOUD
    private var processDocker: Process? = null

    // TODO do not use "processBuild.waitFor", instead read
    //  the output until you find a specific string that
    //  indicates that the process terminated

    // TODO replicate relevant tests for both combined and traditional enforcement (I know, it's a lot of work...)

    @BeforeAll
    override fun setUpAll() {
        val processBuild = "./buildAll.sh".runCommand(File("../Documentation/Installation/"))
        processBuild.waitFor(10, TimeUnit.SECONDS)
        processDocker = "./startCryptoAC_CLOUD.sh".runCommand(File("../Documentation/Installation/"))
        processDocker!!.waitFor(20, TimeUnit.SECONDS)
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
        val cleanProcess = "./clean.sh".runCommand(File("../Documentation/Installation/"))
        cleanProcess.waitFor(5, TimeUnit.SECONDS)
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