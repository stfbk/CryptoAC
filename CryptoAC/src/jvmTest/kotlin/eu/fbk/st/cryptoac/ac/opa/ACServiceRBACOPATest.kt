package eu.fbk.st.cryptoac.ac.opa

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnlock
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.TestUtilities.Companion.resetACServiceRBCAOPA
import eu.fbk.st.cryptoac.ac.ACFactory
import eu.fbk.st.cryptoac.ac.ACServiceRBACTest
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.runCommand
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class ACServiceRBACOPATest : ACServiceRBACTest() {

    override val acRBAC = ACFactory.getAC(
        Parameters.acServiceRBACOPAParameters
    )!! as ACServiceRBACOPA
    override val ac = acRBAC

    private var processDocker: Process? = null



    @BeforeAll
    override fun setUpAll() {
        "./cleanAllAndBuild.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_opa\"".runCommand(
            workingDir = dir,
            endStrings = hashSetOf("This will be made the default in later OPA releases.")
        )
    }

    @BeforeEach
    override fun setUp() {
        assertLock(acRBAC)
        assert(acRBAC.configure() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        assertUnlock(acRBAC)
        resetACServiceRBCAOPA()
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



    @Test
    override fun add_admin_works() {
        /** Add admin is not implemented */
    }

    @Test
    override fun add_admin_with_wrong_name_or_twice_fails() {
        /** Add admin is not implemented */
    }

    @Test
    override fun init_user_works() {
        /** Init user is not implemented */
    }

    @Test
    override fun init_user_not_existing_or_already_initialized_or_deleted_fail() {
        /** Init user is not implemented */
    }

    @Test
    override fun add_user_works() {
        /** Add user is not implemented */
    }

    @Test
    override fun add_user_twice_or_with_blank_username_fail() {
        /** Add user is not implemented */
    }

    @Test
    override fun delete_user_works() {
        /** Delete user is not implemented */
    }

    @Test
    override fun delete_user_twice_or_not_existing_or_with_blank_username_fail() {
        /** Delete user is not implemented */
    }

    @Test
    override fun add_role_works() {
        /** Add role is not implemented */
    }

    @Test
    override fun add_role_twice_or_with_blank_name_fail() {
        /** Add role is not implemented */
    }

    @Test
    override fun delete_role_works() {
        /** Delete role is not implemented */
    }

    @Test
    override fun delete_role_twice_or_with_blank_role_name_fail() {
        /** Delete role is not implemented */
    }

    @Test
    override fun add_resource_works() {
        /** Add resource is not implemented */
    }

    @Test
    override fun add_resource_twice_or_with_blank_name_fail() {
        /** Add resource is not implemented */
    }

    @Test
    override fun delete_resource_works() {
        /** Delete resource is not implemented */
    }

    @Test
    override fun delete_resource_twice_or_with_blank_resource_name_fail() {
        /** Delete resource is not implemented */
    }

    @Test
    override fun assign_user_to_role_twice_or_non_existing_user_to_role_or_non_existing_role_or_blank_name_fail() {
        val username = "userTest1"
        val roleName = "roleTest1"

        /** assign user to role twice */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = roleName
            ) == OutcomeCode.CODE_000_SUCCESS)

            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = roleName
            ) == OutcomeCode.CODE_062_UR_ASSIGNMENTS_ALREADY_EXISTS)
        }

        /** assign user to non-existing role */
        runBlocking {
            /** In OPA, there is no list of roles */
        }

        /** assign non-existing user to role */
        runBlocking {
            /** In OPA, there is no list of users */
        }

        /** assign user to role with blank name */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = " "
            ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** assign user with blank name to role */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                username = " ",
                roleName = roleName
            ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteUser(
            username = username
        ) == OutcomeCode.CODE_000_SUCCESS)
        TestUtilities.assertUnLockAndLock(ac)

        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun assign_permission_to_role_twice_or_non_existing_role_or_non_existing_resource_or_blank_name_fail() {
        val roleName = "roleTest1"
        val topicName = "topicTest1"

        /** assign permission to role twice */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READWRITE,
                resourceName = topicName
            ) == OutcomeCode.CODE_000_SUCCESS)

            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READWRITE,
                resourceName = topicName
            ) == OutcomeCode.CODE_063_PA_ASSIGNMENTS_ALREADY_EXISTS)
        }

        /** assign permission to role on non-existing resource */
        runBlocking {
            /** In OPA, there is no list of roles */
        }

        /** assign permission to non-existing role on resource */
        runBlocking {
            /** In OPA, there is no list of resources */
        }

        /** assign permission to role with blank name on resource */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                roleName = " ",
                permission = PermissionType.READWRITE,
                resourceName = topicName
            ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** assign permission to role on resource with blank name */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READWRITE,
                resourceName = " "
            ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == OutcomeCode.CODE_000_SUCCESS)
    }
}
