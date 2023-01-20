package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.model.unit.UnitElementStatus
import kotlinx.coroutines.CoroutineScope
import org.junit.jupiter.api.*

internal abstract class CoreTest {

    abstract val core: Core

    // TODO find a way to test core objects with all supported services
    //  e.g., test CoreMQTT with MySQL and CoreCloud with Redis. Remember
    //  that JUnit5 does not have easy support for parametrized test classes

    @BeforeAll
    abstract fun setUpAll()

    @BeforeEach
    abstract fun setUp()

    @AfterEach
    abstract fun tearDown()

    @AfterAll
    abstract fun tearDownAll()



    @Test
    fun `configure services once works`() {
        /** Services are already configured in the setUp function */
    }

    @Test
    fun `configure services twice fails`() {
        assert(core.configureServices() == OutcomeCode.CODE_077_SERVICE_ALREADY_CONFIGURED)
    }

    @Test
    fun `init user of existing user works`() {
        val aliceCore = TestUtilities.addUser(core, "alice")
        assert(aliceCore.initUser() == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    fun `init user twice fails`() {
        val bobCore = TestUtilities.addUser(core, "bob")
        assert(bobCore.initUser() == OutcomeCode.CODE_000_SUCCESS)
        assert(bobCore.initUser() == OutcomeCode.CODE_052_USER_ALREADY_INITIALIZED)
    }

    @Test
    fun `add user of non-existing user works`() {
        /** add user of non-existing user */
        run {
            val alice = "alice"
            assert(core.addUser(alice).code == OutcomeCode.CODE_000_SUCCESS)

            val users = core.getUsers().users!!.filter { it.name == alice }
            assert(users.size == 1)
            assert(users.filter { it.name == alice }.size == 1)
            val aliceUser = users.first { it.name == alice }
            assert(!aliceUser.isAdmin)
            assert(aliceUser.status == UnitElementStatus.INCOMPLETE)
        }
    }

    @Test
    fun `add user of blank, admin, existing (incomplete or operational) or deleted user fails`() {
        /** add user with blank username */
        run {
            assert(core.addUser("").code == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(core.addUser("    ").code == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** add user with admin username */
        run {
            assert(core.addUser(Constants.ADMIN).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user of existing (incomplete) user */
        run {
            assert(core.addUser("alice").code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.addUser("alice").code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user of existing (operational) user */
        run {
            addAndInitUser(core, "bob")
            assert(core.addUser("bob").code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user of deleted user */
        run {
            addAndInitUser(core, "carl")
            assert(core.deleteUser("carl") == OutcomeCode.CODE_000_SUCCESS)
            assert(core.addUser("carl").code == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }

    @Test
    fun `delete user of existing (incomplete or operational) user works`() {
        /** delete user of existing (incomplete) user */
        run {
            assert(core.addUser("alice").code == OutcomeCode.CODE_000_SUCCESS)
            assert(core.deleteUser("alice") == OutcomeCode.CODE_000_SUCCESS)
        }

        /** delete user of existing (operational) user */
        run {
            addAndInitUser(core, "bob")
            assert(core.deleteUser("bob") == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `delete user of blank, admin, non-existing or deleted user fails`() {
        /** delete user of blank user */
        run {
            assert(core.deleteUser("") == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(core.deleteUser("   ") == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** delete user of admin user */
        run {
            assert(core.deleteUser(Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** delete user of non-existing user */
        run {
            assert(core.deleteUser("alice") == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** delete user of deleted user */
        run {
            addAndInitUser(core, "alice")
            assert(core.deleteUser("alice") == OutcomeCode.CODE_000_SUCCESS)
            assert(core.deleteUser("alice") == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }

    @Test
    fun `get user of incomplete or operational or deleted user works`() {
        assert(core.addUser("incomplete").code == OutcomeCode.CODE_000_SUCCESS)
        addAndInitUser(core, "operational")
        addAndInitUser(core, "deleted")
        assert(core.deleteUser("deleted") == OutcomeCode.CODE_000_SUCCESS)

        /** get user of incomplete user */
        run {
            assert(core.getUsers().users!!.first { it.status == UnitElementStatus.INCOMPLETE }.name == "incomplete")
        }

        /** get user of operational user */
        run {
            assert(core.getUsers().users!!.filter { it.status == UnitElementStatus.OPERATIONAL }.size == 2)
        }

        /** get user of deleted user */
        run {
            assert(core.getUsers().users!!.first { it.status == UnitElementStatus.DELETED }.name == "deleted")
        }
    }

    @Test
    fun `get user of non-existing fails`() {

        /** get user of non-existing user */
        run {
            assert(core.getUsers().users!!.none { it.name == "not-existing" })
        }
    }



    open fun addAndInitUser(core: Core, username: String): Core {
        val userCore = TestUtilities.addUser(core, username)
        assert(userCore.initUser() == OutcomeCode.CODE_000_SUCCESS)
        return userCore
    }

    abstract fun myRun(core: Core? = null, block: () -> Unit)

    abstract fun myRunBlocking(core: Core? = null, block: suspend CoroutineScope.() -> Unit)
}
