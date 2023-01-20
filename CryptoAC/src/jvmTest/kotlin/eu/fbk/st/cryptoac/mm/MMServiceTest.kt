package eu.fbk.st.cryptoac.mm

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertRollbackAndLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnlock
import eu.fbk.st.cryptoac.model.unit.UnitElementStatus
import eu.fbk.st.cryptoac.model.unit.User
import org.junit.jupiter.api.*
import java.lang.AssertionError
import java.lang.IllegalArgumentException

internal abstract class MMServiceTest : ServiceTest() {

    abstract val mm: MMService



    @BeforeEach
    override fun setUp() {
        assertLock(mm)
        assert(mm.configure() == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.addAdmin(Parameters.adminUser) == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        assertUnlock(mm)
    }



    @Test
    open fun add_admin_works() {
        /** Already done during the 'setUp()' function */
    }

    @Test
    open fun add_admin_with_different_name_or_twice_fails() {
        /** add admin with different name */
        myRun {
            assert(mm.addAdmin(User(name = "notAdmin")) == OutcomeCode.CODE_036_ADMIN_NAME)
        }

        /** add admin twice fails */
        myRun {
            assert(mm.addAdmin(Parameters.adminUser) == OutcomeCode.CODE_035_ADMIN_ALREADY_INITIALIZED)
        }
    }

    @Test
    open fun init_user_works() {
        /** init user of existing user */
        myRun {
            addAndInitUser(Parameters.aliceUser)
        }
    }

    @Test
    open fun init_user_not_existing_or_already_initialized_or_deleted_fail() {

        /** init user of non-existing user */
        myRun {
            // TODO test init user of non-existing user
        }

        /** init user of operational user */
        myRun {
            val bobMM = addAndInitUser(Parameters.bobUser)
            assertLock(bobMM)
            assert(bobMM.initUser(Parameters.bobUser) == OutcomeCode.CODE_052_USER_ALREADY_INITIALIZED)
            assertUnlock(bobMM)
        }

        /** init user of deleted user */
        myRun {
            // TODO test init user of deleted user
        }

    }

    @Test
    open fun add_user_works() {
        /** add user once */
        myRun {
            assert(mm.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun add_user_twice_or_with_admin_or_blank_username_or_previously_deleted_fail() {

        /** add user twice */
        myRun {
            assert(mm.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with admin or blank name */
        myRun {
            assert(mm.addUser(
                Parameters.adminUser
            ).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
            assert(mm.addUser(User(
                name = " "
            )).code == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** add user previously deleted */
        myRun {
            addAndInitUser(Parameters.bobUser)
            assert(mm.deleteUser(Parameters.bobUser.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.addUser(Parameters.bobUser).code == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }

    @Test
    open fun delete_incomplete_and_operational_user_by_name_works() {
        val incompleteUser = Parameters.aliceUser
        mm.addUser(incompleteUser)
        val operationalUser = Parameters.bobUser
        addAndInitUser(operationalUser)

        /** delete incomplete users */
        myRun {
            assert(mm.deleteUser(incompleteUser.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteUsers = mm.getUsers(username = incompleteUser.name, status = UnitElementStatus.DELETED)
            assert(deleteUsers.size == 1)
            assert(deleteUsers.firstOrNull()!!.name == incompleteUser.name)
        }

        /** delete operational users */
        myRun {
            assert(mm.deleteUser(operationalUser.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteUsers = mm.getUsers(username = operationalUser.name, status = UnitElementStatus.DELETED)
            assert(deleteUsers.size == 1)
            assert(deleteUsers.firstOrNull()!!.name == operationalUser.name)
        }
    }

    @Test
    open fun delete_user_twice_or_not_existing_or_with_blank_username_by_name_fail() {
        val nonExistingUser = Parameters.aliceUser
        val deletedUser = Parameters.bobUser
        addAndInitUser(deletedUser)
        assert(mm.deleteUser(deletedUser.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete user twice */
        myRun {
            assert(mm.deleteUser(deletedUser.name) == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }

        /** delete non-existing users */
        myRun {
            assert(mm.deleteUser(nonExistingUser.name) == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** delete user with blank username */
        myRun {
            assertThrows<IllegalArgumentException> {
                mm.deleteUser(" ")
            }
        }
    }

    @Test
    open fun delete_the_admin_user_by_name_fails() {
        /** delete the admin user */
        myRun {
            assert(mm.deleteUser(Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }




    @Test
    open fun get_not_existing_incomplete_operational_and_deleted_user_by_name_works() {
        val incompleteUser = Parameters.aliceUser
        mm.addUser(incompleteUser)
        val operationalUser = Parameters.bobUser
        addAndInitUser(operationalUser)
        val deletedUser = Parameters.carlUser
        addAndInitUser(deletedUser)
        assert(mm.deleteUser(deletedUser.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing user by name */
        myRun {
            assert(mm.getUsers(username = "non-existing").isEmpty())
        }

        /** get incomplete user by name */
        myRun {
            val incompleteUserByName = mm.getUsers(username = incompleteUser.name)
            assert(incompleteUserByName.size == 1)
        }

        /** get operational user by name */
        myRun {
            val operationalUserByName = mm.getUsers(username = operationalUser.name)
            assert(operationalUserByName.size == 1)
            assert(operationalUserByName.firstOrNull()!!.token == operationalUser.token)
        }

        /** get deleted user by name */
        myRun {
            val deletedUserByName = mm.getUsers(username = deletedUser.name, status = UnitElementStatus.DELETED)
            assert(deletedUserByName.size == 1)
            assert(deletedUserByName.firstOrNull()!!.name == deletedUser.name)
        }
    }

    @Test
    open fun get_all_users_works() {
        /** get all users */
        myRun {
            addAndInitUser(Parameters.aliceUser)
            addAndInitUser(Parameters.bobUser)
            addAndInitUser(Parameters.carlUser)

            val allUsers = mm.getUsers()
            assert(allUsers.size == 4)
            assert(allUsers.filter { it.name == Parameters.aliceUser.name }.size == 1)
            assert(allUsers.filter { it.name == Parameters.bobUser.name }.size == 1)
            assert(allUsers.filter { it.name == Parameters.carlUser.name }.size == 1)
            assert(allUsers.filter { it.name == Constants.ADMIN }.size == 1)
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



    /** Add a user in the MM and return an instance of the service */
    protected abstract fun addAndInitUser(user: User): MMService

    /** Before executing each block, commit the MM status */
    protected fun myRun(block: () -> Unit) {
        assertUnLockAndLock(mm)
        try {
            block.invoke()
            assertUnLockAndLock(mm)
        } catch (e: AssertionError) {
            assertRollbackAndLock(mm)
            e.printStackTrace()
            throw e
        }
    }
}
