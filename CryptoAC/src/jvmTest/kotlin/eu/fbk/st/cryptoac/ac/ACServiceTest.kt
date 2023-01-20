package eu.fbk.st.cryptoac.ac

import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.ServiceTest
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.User
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.*

internal abstract class ACServiceTest : ServiceTest() {

    abstract val ac: ACService



    @BeforeEach
    override fun setUp() {
        assert(ac.lock() == CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        assert(ac.unlock() == CODE_000_SUCCESS)
    }



    @Test
    open fun add_admin_works() {
        /** add admin */
        run {
            assert(ac.addAdmin(
                newAdmin = Parameters.adminUser
            ) == CODE_000_SUCCESS)
        }
    }

    @Test
    open fun add_admin_with_wrong_name_or_twice_fails() {
        /** add admin twice */
        run {
            assert(ac.addAdmin(
                newAdmin = Parameters.adminUser
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(ac)

            assert(ac.addAdmin(
                newAdmin = Parameters.adminUser
            ) == CODE_035_ADMIN_ALREADY_INITIALIZED)
        }

        /** add admin with wrong name */
        run {
            assert(ac.addAdmin(
                newAdmin = User(
                    name = "notAdmin",
                    isAdmin = true,
                )
            ) == CODE_036_ADMIN_NAME)

            assert(ac.addAdmin(
                newAdmin = User(
                    name = "",
                    isAdmin = true,
                )
            ) == CODE_036_ADMIN_NAME)
        }
    }

    @Test
    open fun init_user_works() {
        /** init user */
        run {
            assert(ac.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_000_SUCCESS)

            assert(ac.initUser(
                user = Parameters.aliceUser
            ) == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(ac.deleteUser(
            username = Parameters.aliceUser.name
        ) == CODE_000_SUCCESS)
    }

    @Test
    open fun init_user_not_existing_or_already_initialized_or_deleted_fail() {
        /** init user not existing */
        run {
            assert(ac.initUser(
                user = Parameters.aliceUser
            ) == CODE_004_USER_NOT_FOUND)
        }

        /** init user already initialized */
        run {
            assert(ac.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_000_SUCCESS)

            assert(ac.initUser(
                user = Parameters.aliceUser
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(ac)

            assert(ac.initUser(
                user = Parameters.aliceUser
            ) == CODE_052_USER_ALREADY_INITIALIZED)
        }

        /** init user deleted */
        run {
            assert(ac.deleteUser(
                username = Parameters.aliceUser.name
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(ac)

            assert(ac.initUser(
                user = Parameters.aliceUser
            ) in listOf(CODE_004_USER_NOT_FOUND, CODE_013_USER_WAS_DELETED))
        }
    }

    @Test
    open fun add_user_works() {
        /** add user */
        run {
            assert(ac.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(ac.deleteUser(
            username = Parameters.aliceUser.name
        ) == CODE_000_SUCCESS)
    }

    @Test
    open fun add_user_twice_or_with_blank_username_fail() {
        /** add user twice */
        run {
            assert(ac.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_000_SUCCESS)
            assertUnLockAndLock(ac)

            assert(ac.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with blank username */
        runBlocking {
            assert(ac.addUser(
                newUser = User(" ")
            ).code == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(ac.deleteUser(
            username = Parameters.aliceUser.name
        ) == CODE_000_SUCCESS)
    }

    @Test
    open fun delete_user_works() {
        /** delete user */
        run {
            assert(ac.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_000_SUCCESS)

            assert(ac.deleteUser(
                username = Parameters.aliceUser.name
            ) == CODE_000_SUCCESS)
        }
    }

    @Test
    open fun delete_user_twice_or_not_existing_or_with_blank_username_fail() {
        /** delete user twice */
        run {
            assert(ac.addUser(
                newUser = Parameters.aliceUser
            ).code == CODE_000_SUCCESS)

            assert(ac.deleteUser(
                username = Parameters.aliceUser.name
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(ac)

            assert(ac.deleteUser(
                username = Parameters.aliceUser.name
            ) in listOf(CODE_004_USER_NOT_FOUND, CODE_013_USER_WAS_DELETED))
        }

        /** delete user not existing */
        run {
            assert(ac.deleteUser(
                username = Parameters.aliceUser.name
            ) == CODE_004_USER_NOT_FOUND)
        }

        /** delete user with blank username */
        runBlocking {
            assert(ac.deleteUser(
                username = " "
            ) == CODE_020_INVALID_PARAMETER)
        }
    }



    @Test
    abstract fun check_allowed_user_is_authorized_works()

    @Test
    abstract fun check_not_authorized_user_gets_denied_works()

    
    
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
}