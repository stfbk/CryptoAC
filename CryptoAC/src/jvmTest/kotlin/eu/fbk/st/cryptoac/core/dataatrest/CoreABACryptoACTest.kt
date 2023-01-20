//package eu.fbk.st.cryptoac.core.cryptoac
//
//import eu.fbk.st.cryptoac.*
//import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
//import eu.fbk.st.cryptoac.core.Core
//import eu.fbk.st.cryptoac.core.CoreFactory
//import eu.fbk.st.cryptoac.core.CoreABACTest
//import kotlinx.coroutines.CoroutineScope
//import kotlinx.coroutines.runBlocking
//import org.junit.jupiter.api.*
//import java.lang.AssertionError
//
//@TestInstance(TestInstance.Lifecycle.PER_CLASS)
//internal class CoreABACryptoACTest : CoreABACTest() {
//
//    override val core: CoreABACryptoAC =
//        CoreFactory.getCore(Parameters.adminCoreABACCryptoACParametersWithOPA) as CoreABACryptoAC
//    private var processDocker: Process? = null
//
//    // TODO replicate relevant tests for both combined and traditional enforcement (I know, it's a lot of work...)
//
//    @BeforeAll
//    override fun setUpAll() {
//        "./cleanAllAndBuild.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
//        processDocker = "./startCryptoAC_ALL.sh".runCommand(
//            workingDir = dir,
//            endStrings = hashSetOf(
//                "port: 3306  MySQL Community Server - GPL",
//                "Started ServerConnector",
//                "This will be made the default in later OPA releases."
//            )
//        )
//        core.init()
//    }
//
//    @BeforeEach
//    override fun setUp() {
//        assert(core.initAdmin() == OutcomeCode.CODE_000_SUCCESS)
//    }
//
//    @AfterEach
//    override fun tearDown() {
//        TestUtilities.resetDMServiceABACCryptoAC()
//        TestUtilities.resetMMServiceABACMySQL()
//        TestUtilities.resetACServiceRBCAOPA()
//    }
//
//    @AfterAll
//    override fun tearDownAll() {
//        processDocker!!.destroy()
//        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
//        "./cleanAll.sh".runCommand(
//            workingDir = dir,
//            endStrings = hashSetOf("clean_all_end_of_script")
//        )
//    }
//
//    /** Before executing each block, commit the MM status */
//    override fun myRun(core: Core?, block: () -> Unit) {
//        val mmServiceABAC = core?.let { (core as CoreABACryptoAC).mm } ?: this.core.mm
//        TestUtilities.assertUnLockAndLock(mmServiceABAC)
//        try {
//            block.invoke()
//        } catch (e: AssertionError) {
//            e.printStackTrace()
//        }
//        TestUtilities.assertUnLockAndLock(mmServiceABAC)
//    }
//
//    /** Before executing each blocking block, commit the MM status */
//    override fun myRunBlocking(core: Core?, block: suspend CoroutineScope.() -> Unit) {
//        val mmServiceABAC = core?.let { (core as CoreABACryptoAC).mm } ?: this.core.mm
//        TestUtilities.assertUnLockAndLock(mmServiceABAC)
//        try {
//            runBlocking {
//                block.invoke(this)
//            }
//        } catch (e: AssertionError) {
//            e.printStackTrace()
//        }
//        TestUtilities.assertUnLockAndLock(mmServiceABAC)
//    }
//}
