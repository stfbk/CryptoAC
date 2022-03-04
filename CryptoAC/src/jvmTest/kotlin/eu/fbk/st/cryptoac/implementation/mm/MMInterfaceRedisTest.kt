package eu.fbk.st.cryptoac.implementation.mm

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.resetMMRedis
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.RoleTuple
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.EncryptedAsymKeys
import eu.fbk.st.cryptoac.runCommand
import org.junit.jupiter.api.*
import java.io.File
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class MMInterfaceRedisTest: MMInterfaceTest() {

    override val mm: MMInterface =
        MMInterfaceRedis(Parameters.mmInterfaceRedisParameters)

    // TODO do not use "processBuild.waitFor", instead read
    //  the output until you find a specific string that
    //  indicates that the process terminated

    private var processDocker: Process? = null

    @BeforeAll
    override fun setUpAll() {
        val processBuild = "./buildAll.sh".runCommand(File("../Documentation/Installation/"))
        processBuild.waitFor(5, TimeUnit.SECONDS)
        processDocker = "./startCryptoAC_MQTT.sh \"cryptoac_redis\"".runCommand(File("../Documentation/Installation/"))
        processDocker!!.waitFor(3, TimeUnit.SECONDS)
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
        val cleanProcess = "./clean.sh".runCommand(File("../Documentation/Installation/"))
        cleanProcess.waitFor(5, TimeUnit.SECONDS)
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
}
