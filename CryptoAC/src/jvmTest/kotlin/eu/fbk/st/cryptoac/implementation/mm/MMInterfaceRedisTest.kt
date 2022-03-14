package eu.fbk.st.cryptoac.implementation.mm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.TestUtilities.Companion.resetMMRedis
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.runCommand
import org.junit.jupiter.api.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class MMInterfaceRedisTest: MMInterfaceTest() {

    override val mm: MMInterface =
        MMInterfaceRedis(Parameters.mmInterfaceRedisParameters)

    private var processDocker: Process? = null

    @BeforeAll
    override fun setUpAll() {
        "./buildAll.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_MQTT.sh \"cryptoac_redis\"".runCommand(dir, hashSetOf("Server initialized"))
    }

    @BeforeEach
    override fun setUp() {
        super.setUp()
        assert(mm.initAdmin(Parameters.adminUser, Parameters.adminRoleTuple) == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        super.tearDown()
        resetMMRedis()
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./clean.sh".runCommand(dir, hashSetOf("clean_all_end_of_script"))
    }

    /** Add a user in the MM and return an instance of the interface */
    override fun addAndInitUser(user: User): MMInterface {
        val addUserResult = mm.addUser(user)
        assert(addUserResult.code == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        val userMM = MMInterfaceRedis(addUserResult.parameters as MMInterfaceRedisParameters)
        assert(userMM.lock() == OutcomeCode.CODE_000_SUCCESS)
        userMM.initUser(user)
        assert(userMM.unlock() == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        return userMM
    }

    @Test
    override fun initAdmin() {
        /** Already done during the setup */
    }
}
