package eu.fbk.st.cryptoac.rm

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.ServiceTest
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnlock
import eu.fbk.st.cryptoac.dm.DMService
import eu.fbk.st.cryptoac.model.unit.User
import org.junit.jupiter.api.*
import java.lang.IllegalArgumentException

internal abstract class RMServiceTest : ServiceTest() {

    abstract val rm: RMService
    abstract val dm: DMService?



    @BeforeEach
    override fun setUp() {
        if (dm != null) {
            assertLock(dm!!)
            assert(dm!!.configure(
                Parameters.adminCoreRBACCryptoACParametersWithOPA
            ) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.addAdmin(
                Parameters.adminUser
            ) == OutcomeCode.CODE_000_SUCCESS)
        }
        assert(rm.configure(
            Parameters.adminCoreRBACCryptoACParametersWithOPA
        ) == OutcomeCode.CODE_000_SUCCESS)
        assert(rm.addAdmin(
            Parameters.adminUser
        ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        dm?.let { assertUnlock(it) }
    }


    
    @Test
    open fun add_admin_works() {
        /** Already done during the 'setUp()' function */
    }

    @Test
    open fun add_admin_with_different_name_or_twice_fails() {
        /** add admin with different name */
        run {
            assert(rm.addAdmin(User(name = "notAdmin")) == OutcomeCode.CODE_036_ADMIN_NAME)
        }

        /** add admin twice fails */
        run {
            assert(rm.addAdmin(Parameters.adminUser) == OutcomeCode.CODE_035_ADMIN_ALREADY_INITIALIZED)
        }
    }

    @Test
    open fun init_user_works() {
        /** init user of existing user */
        run {
            addAndInitUser(Parameters.aliceUser)
        }
    }

    @Test
    open fun init_user_not_existing_or_already_initialized_or_deleted_fail() {

        /** init user of non-existing user */
        run {
            // TODO test init user of non-existing user
        }

        /** init user of operational user */
        run {
            val bobRM = addAndInitUser(Parameters.bobUser)
            assert(bobRM.initUser(Parameters.bobUser) == OutcomeCode.CODE_052_USER_ALREADY_INITIALIZED)
        }

        /** init user of deleted user */
        run {
            // TODO test init user of deleted user
        }

    }

    @Test
    open fun add_user_works() {
        /** add user once */
        run {
            assert(rm.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun add_user_twice_or_with_admin_or_blank_username_or_previously_deleted_fail() {

        /** add user twice */
        run {
            assert(rm.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
            assert(rm.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with admin or blank name */
        run {
            assert(rm.addUser(
                Parameters.adminUser
            ).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
            assert(rm.addUser(
                User(
                name = " "
            )
            ).code == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** add user previously deleted */
        run {
            addAndInitUser(Parameters.bobUser)
            assert(rm.deleteUser(Parameters.bobUser.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(rm.addUser(Parameters.bobUser).code == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }

    @Test
    open fun delete_incomplete_and_operational_user_by_name_works() {
        val incompleteUser = Parameters.aliceUser
        rm.addUser(incompleteUser)
        val operationalUser = Parameters.bobUser
        addAndInitUser(operationalUser)

        /** delete incomplete users */
        run {
            assert(rm.deleteUser(incompleteUser.name) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** delete operational users */
        run {
            assert(rm.deleteUser(operationalUser.name) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun delete_user_twice_or_not_existing_or_with_blank_username_by_name_fail() {
        val nonExistingUser = Parameters.aliceUser
        val deletedUser = Parameters.bobUser
        addAndInitUser(deletedUser)
        assert(rm.deleteUser(deletedUser.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete user twice */
        run {
            assert(rm.deleteUser(deletedUser.name) == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }

        /** delete non-existing users */
        run {
            assert(rm.deleteUser(nonExistingUser.name) == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** delete user with blank username */
        run {
            assertThrows<IllegalArgumentException> {
                rm.deleteUser(" ")
            }
        }
    }

    @Test
    open fun delete_the_admin_user_by_name_fails() {
        /** delete the admin user */
        run {
            assert(rm.deleteUser(Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    
    
    @Test
    open fun single_and_multiple_lock_and_unlock_works() {
        // TODO method of Lockable interface
    }

    @Test
    open fun single_and_multiple_lock_and_rollback_works() {
        // TODO method of Lockable interface
    }

    @Test
    open fun unlock_without_locking_fails() {
        // TODO method of Lockable interface
    }

    @Test
    open fun rollback_without_locking_fails() {
        // TODO method of Lockable interface
    }



    /** Add a user in the RM and return an instance of the service */
    protected abstract fun addAndInitUser(user: User): RMService
}
