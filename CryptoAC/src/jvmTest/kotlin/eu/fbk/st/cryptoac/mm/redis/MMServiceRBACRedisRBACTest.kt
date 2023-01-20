package eu.fbk.st.cryptoac.mm.redis

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnlock
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.TestUtilities.Companion.resetMMServiceRBACRedis
import eu.fbk.st.cryptoac.mm.MMFactory
import eu.fbk.st.cryptoac.mm.MMService
import eu.fbk.st.cryptoac.mm.MMServiceRBAC
import eu.fbk.st.cryptoac.mm.MMServiceRBACTest
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.runCommand
import org.junit.jupiter.api.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class MMServiceRBACRedisRBACTest : MMServiceRBACTest() {

    override val mm = MMFactory.getMM(
        Parameters.mmServiceRBACRedisParameters
    ) as MMServiceRBAC

    private var processDocker: Process? = null



    @BeforeAll
    override fun setUpAll() {
        "./cleanAllAndBuild.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_redis\"".runCommand(
            workingDir = dir,
            endStrings = hashSetOf("Server initialized")
        )
    }

    @BeforeEach
    override fun setUp() {
        super.setUp()
        assert(mm.addRole(Parameters.adminRole) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.addRoleTuples(hashSetOf(Parameters.adminRoleTuple)) == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        super.tearDown()
        resetMMServiceRBACRedis()
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



    override fun addAndInitUser(user: User): MMService {
        val addUserResult = mm.addUser(user)
        assert(addUserResult.code == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        val userMM = MMServiceRBACRedis(addUserResult.parameters as MMServiceRedisParameters)
        assertLock(userMM)
        userMM.initUser(user)
        assertUnlock(userMM)
        assertUnLockAndLock(mm)
        return userMM
    }
}
