package eu.fbk.st.cryptoac.dm

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.ServiceTest
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnlock
import eu.fbk.st.cryptoac.model.unit.Resource
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.model.unit.User
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.*

internal abstract class DMServiceTest : ServiceTest() {

    abstract val dm: DMService



    @BeforeEach
    override fun setUp() {
        assertLock(dm)
        assert(dm.configure() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        assertUnlock(dm)
    }



    @Test
    open fun add_admin_works() {
        /** add admin */
        run {
            assert(dm.addAdmin(
                newAdmin = Parameters.adminUser
            ) == OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    open fun add_admin_with_wrong_name_or_twice_fails() {
        /** add admin twice */
        run {
            assert(dm.addAdmin(
                newAdmin = Parameters.adminUser
            ) == OutcomeCode.CODE_000_SUCCESS
            )
            TestUtilities.assertUnLockAndLock(dm)

            assert(dm.addAdmin(
                newAdmin = Parameters.adminUser
            ) == OutcomeCode.CODE_035_ADMIN_ALREADY_INITIALIZED
            )
        }

        /** add admin with wrong name */
        run {
            assert(dm.addAdmin(
                newAdmin = User(
                    name = "notAdmin",
                    isAdmin = true,
                )
            ) == OutcomeCode.CODE_036_ADMIN_NAME
            )

            assert(dm.addAdmin(
                newAdmin = User(
                    name = "",
                    isAdmin = true,
                )
            ) == OutcomeCode.CODE_036_ADMIN_NAME
            )
        }
    }

    @Test
    open fun init_user_works() {
        /** init user */
        run {
            assert(dm.addUser(
                newUser = Parameters.aliceUser
            ).code == OutcomeCode.CODE_000_SUCCESS)

            assert(dm.initUser(
                user = Parameters.aliceUser
            ) == OutcomeCode.CODE_000_SUCCESS
            )
        }

        /** Cleanup */
        assert(dm.deleteUser(
            username = Parameters.aliceUser.name
        ) == OutcomeCode.CODE_000_SUCCESS
        )
    }

    @Test
    open fun init_user_not_existing_or_already_initialized_or_deleted_fail() {
        /** init user not existing */
        run {
            assert(dm.initUser(
                user = Parameters.aliceUser
            ) == OutcomeCode.CODE_004_USER_NOT_FOUND
            )
        }

        /** init user already initialized */
        run {
            assert(dm.addUser(
                newUser = Parameters.aliceUser
            ).code == OutcomeCode.CODE_000_SUCCESS)

            assert(dm.initUser(
                user = Parameters.aliceUser
            ) == OutcomeCode.CODE_000_SUCCESS
            )
            TestUtilities.assertUnLockAndLock(dm)

            assert(dm.initUser(
                user = Parameters.aliceUser
            ) == OutcomeCode.CODE_052_USER_ALREADY_INITIALIZED
            )
        }

        /** init user deleted */
        run {
            assert(dm.deleteUser(
                username = Parameters.aliceUser.name
            ) == OutcomeCode.CODE_000_SUCCESS
            )
            TestUtilities.assertUnLockAndLock(dm)

            assert(dm.initUser(
                user = Parameters.aliceUser
            ) in listOf(OutcomeCode.CODE_004_USER_NOT_FOUND, OutcomeCode.CODE_013_USER_WAS_DELETED))
        }
    }

    @Test
    open fun add_user_works() {
        /** add user */
        run {
            assert(dm.addUser(
                newUser = Parameters.aliceUser
            ).code == OutcomeCode.CODE_000_SUCCESS)
        }

        assert(dm.deleteUser(
            username = Parameters.aliceUser.name
        ) == OutcomeCode.CODE_000_SUCCESS
        )
    }

    @Test
    open fun add_user_twice_or_with_blank_username_fail() {
        /** add user twice */
        run {
            assert(dm.addUser(
                newUser = Parameters.aliceUser
            ).code == OutcomeCode.CODE_000_SUCCESS)
            TestUtilities.assertUnLockAndLock(dm)

            assert(dm.addUser(
                newUser = Parameters.aliceUser
            ).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with blank username */
        runBlocking {
            assert(dm.addUser(
                newUser = User(name = " ")
            ).code == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        assert(dm.deleteUser(
            username = Parameters.aliceUser.name
        ) == OutcomeCode.CODE_000_SUCCESS
        )
    }

    @Test
    open fun delete_user_works() {
        /** delete user */
        run {
            assert(dm.addUser(
                newUser = Parameters.aliceUser
            ).code == OutcomeCode.CODE_000_SUCCESS)

            assert(dm.deleteUser(
                username = Parameters.aliceUser.name
            ) == OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    open fun delete_user_twice_or_not_existing_or_with_blank_username_fail() {
        /** delete user twice */
        run {
            assert(dm.addUser(
                newUser = Parameters.aliceUser
            ).code == OutcomeCode.CODE_000_SUCCESS)

            assert(dm.deleteUser(
                username = Parameters.aliceUser.name
            ) == OutcomeCode.CODE_000_SUCCESS
            )
            TestUtilities.assertUnLockAndLock(dm)

            assert(dm.deleteUser(
                username = Parameters.aliceUser.name
            ) in listOf(OutcomeCode.CODE_004_USER_NOT_FOUND, OutcomeCode.CODE_013_USER_WAS_DELETED))
        }

        /** delete user not existing */
        run {
            assert(dm.deleteUser(
                username = Parameters.aliceUser.name
            ) == OutcomeCode.CODE_004_USER_NOT_FOUND
            )
        }

        /** delete user with blank username */
        runBlocking {
            assert(dm.deleteUser(
                username = " "
            ) == OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }



    @Test
    open fun add_resource_works() {
        val emptyResource = Resource(
            name = "empty",
            enforcement = EnforcementType.COMBINED
        )
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val newResourceContent = "exam content"

        /** add resource */
        run {
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = newResourceContent.inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)

            assert(
                dm.addResource(
                    newResource = emptyResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)

            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "another exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            dm.deleteResource(
                resourceName = newResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)

        assert(
            dm.deleteResource(
                resourceName = emptyResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    open fun add_resource_twice_or_with_blank_name_fail() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val blankResource = Resource(
            name = "",
            enforcement = EnforcementType.COMBINED
        )
        val newResourceContent1 = "exam content"
        val newResourceContent2 = "second exam content"

        /** add resource twice */
        run {
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = newResourceContent1.inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = newResourceContent2.inputStream()
                ) == OutcomeCode.CODE_003_RESOURCE_ALREADY_EXISTS)
        }

        /** add resource with blank name */
        runBlocking {
            assert(
                dm.addResource(
                    newResource = blankResource,
                    content = newResourceContent1.inputStream()
                ) == OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** Cleanup */
        assert(
            dm.deleteResource(
                resourceName = newResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    open fun read_resource_works() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val resourceContent = "exam content"

        /** read resource */
        run {
            assert(dm
                .addResource(
                    newResource = newResource,
                    content = resourceContent.inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            dm.readResource(
                resourceName = newResource.name
            ).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals(resourceContent.toByteArray()))
            }
        }

        /** Cleanup */
        assert(
            dm.deleteResource(
                resourceName = newResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    open fun read_non_existing_or_deleted_resource_or_with_blank_name_fail() {
        /** read non-existing resource */
        run {
            dm.readResource(
                resourceName = "non-existing"
            ).apply {
                assert(code == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
                assert(stream == null)
            }
        }

        /** read deleted resource */
        run {
            val newResource = Resource(
                name = "exam",
                enforcement = EnforcementType.COMBINED
            )

            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)

            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)

            dm.readResource(
                resourceName = "non-existing"
            ).apply {
                assert(code == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
                assert(stream == null)
            }
        }

        /** read resource with blank name */
        runBlocking {
            assert(
                dm.readResource(
                    resourceName = " "
                ).code == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    open fun write_resource_works() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val otherNewResource = Resource(
            name = "test",
            enforcement = EnforcementType.COMBINED
        )

        /** write resource */
        run {
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "updated resource content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            dm.readResource(
                resourceName = newResource.name
            ).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals("updated resource content".toByteArray()))
            }

            assert(
                dm.addResource(
                    newResource = otherNewResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = otherNewResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            dm.readResource(
                resourceName = otherNewResource.name
            ).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals("".toByteArray()))
            }
        }

        /** Cleanup */
        assert(
            dm.deleteResource(
                resourceName = newResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)

        assert(
            dm.deleteResource(
                resourceName = otherNewResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    open fun write_non_existing_or_deleted_resource_or_with_blank_name_fail() {
        /** write non-existing resource */
        run {
            val nonExisting = Resource(
                name = "non-existing",
                enforcement = EnforcementType.COMBINED
            )
            assert(
                dm.writeResource(
                    updatedResource = nonExisting,
                    content = "non-existing".inputStream()
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** write deleted resource */
        run {
            val newResource = Resource(
                name = "exam",
                enforcement = EnforcementType.COMBINED
            )
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "updated exam content".inputStream()
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** write resource with blank name */
        runBlocking {
            val emptyResource = Resource(
                name = "",
                enforcement = EnforcementType.COMBINED
            )

            assert(
                dm.writeResource(
                    updatedResource = emptyResource,
                    content = "empty resource content".inputStream()
                ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    open fun delete_resource_works() {
        /** delete resource */
        run {
            val newResource = Resource(
                name = "exam",
                enforcement = EnforcementType.COMBINED
            )
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun delete_non_existing_or_deleted_resource_or_with_blank_name_fail() {
        /** delete non-existing resource */
        run {
            assert(
                dm.deleteResource(
                    resourceName = "non-existing"
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** delete non-existing resource */
        run {
            val newResource = Resource(
                name = "exam",
                enforcement = EnforcementType.COMBINED
            )
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** delete resource with blank name */
        runBlocking {
            assert(
                dm.deleteResource(
                    resourceName = " "
                ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
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
}
