package eu.fbk.st.cryptoac.mm.mysql

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnlock
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.TestUtilities.Companion.resetMMServiceABACMySQL
import eu.fbk.st.cryptoac.mm.*
import eu.fbk.st.cryptoac.mm.MMServiceABACTest
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.runCommand
import org.junit.jupiter.api.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class MMServiceABACMySQLTest : MMServiceABACTest() {

    override val mm = MMFactory.getMM(
        Parameters.mmServiceABACMySQLParameters
    ) as MMServiceABAC

    private var processDocker: Process? = null



    @BeforeAll
    override fun setUpAll() {
        "./cleanAllAndBuild.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_mysql\"".runCommand(
            workingDir = dir,
            endStrings = hashSetOf("port: 3306  MySQL Community Server - GPL")
        )
    }

    @BeforeEach
    override fun setUp() {
        super.setUp()
    }

    @AfterEach
    override fun tearDown() {
        super.tearDown()
        resetMMServiceABACMySQL()
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
        val userMM = MMServiceABACMySQL(addUserResult.parameters as MMServiceABACMySQLParameters)
        assertLock(userMM)
        userMM.initUser(user)
        assertUnlock(userMM)
        return userMM
    }
}