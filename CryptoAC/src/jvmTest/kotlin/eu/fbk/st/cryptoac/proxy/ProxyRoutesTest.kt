package eu.fbk.st.cryptoac.proxy

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Parameters.adminCoreRBACMOCKParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import io.ktor.http.*
import org.junit.jupiter.api.*
import java.io.File
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class ProxyRoutesTest {

    // TODO do not use "processBuild.waitFor", instead read
    //  the output until you find a specific string that
    //  indicates that the process terminated

    private var processDocker: Process? = null

    @BeforeAll
    fun setUpAll() {
        val processBuild = "./buildAll.sh".runCommand(File("../Documentation/Installation/"))
        processBuild.waitFor(10, TimeUnit.SECONDS)
        processDocker = "./startCryptoAC_proxy.sh \"cryptoac_proxy\"".runCommand(File("../Documentation/Installation/"))
        processDocker!!.waitFor(5, TimeUnit.SECONDS)

        ProxyUtilities.initAdminInRBAC_MOCK(adminCoreRBACMOCKParameters)
    }

    @AfterAll
    fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        val cleanProcess = "./clean.sh".runCommand(File("../Documentation/Installation/"))
        cleanProcess.waitFor(5, TimeUnit.SECONDS)
    }





    @Test
    fun `add user works`() {
        /** add user */
        run {
            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `add user not logged-in, not logged as admin, with no username or with wrong core parameter fails`() {
        /** add user not logged-in */
        run {
            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** add user not logged as admin */
        run {
            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** add user with no username */
        run {
            ProxyUtilities.addUserInRBAC_MOCK(
                username = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add user with wrong core parameter */
        run {
            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

    }

    @Test
    fun `delete user works`() {
        /** delete user */
        run {
            ProxyUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `delete user not logged-in, not logged as admin or wrong core parameter fails`() {
        /** delete user not logged-in */
        run {
            ProxyUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete user not logged as admin */
        run {
            ProxyUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** delete user with wrong core parameter */
        run {
            ProxyUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    @Test
    fun `add role works`() {
        /** add role */
        run {
            ProxyUtilities.addRoleInRBAC_MOCK(
                roleName = "alice",
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `add role not logged-in, not logged as admin, with no role name or with wrong core parameter fails`() {
        /** add role not logged-in */
        run {
            ProxyUtilities.addRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** add role not logged as admin */
        run {
            ProxyUtilities.addRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** add role with no role name */
        run {
            ProxyUtilities.addRoleInRBAC_MOCK(
                roleName = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add role with wrong core parameter */
        run {
            ProxyUtilities.addRoleInRBAC_MOCK(
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    @Test
    fun `delete role works`() {
        /** delete role */
        run {
            ProxyUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `delete role not logged-in, not logged as admin or with wrong core parameter fails`() {
        /** delete role not logged-in */
        run {
            ProxyUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete role not logged as admin */
        run {
            ProxyUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** delete role with wrong core parameter */
        run {
            ProxyUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    @Test
    fun `delete file works`() {
        /** delete file */
        run {
            ProxyUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `delete file not logged-in, not logged as admin or with wrong core parameter fails`() {
        /** delete file not logged-in */
        run {
            ProxyUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete file not logged as admin */
        run {
            ProxyUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** delete file with wrong core parameter */
        run {
            ProxyUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    @Test
    fun `assign user to role works`() {
        /** assign user to role */
        run {
            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `assign user to role not logged-in, not logged as admin, with no username or role name or with wrong core parameter fails`() {
        /** assign user to role not logged-in */
        run {
            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** assign user to role not logged as admin */
        run {
            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** assign user to role with no username */
        run {
            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = null,
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign user to role with no role name */
        run {
            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign user to role with wrong core parameter */
        run {
            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    @Test
    fun `revoke user from role works`() {
        /** revoke user from role */
        run {
            ProxyUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `revoke user from role not logged-in, not logged as admin or with wrong core parameter fails`() {
        /** revoke user to role not logged-in */
        run {
            ProxyUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** revoke user to role not logged as admin */
        run {
            ProxyUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** revoke user to role with wrong core parameter */
        run {
            ProxyUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    @Test
    fun `assign read or write or both permissions to role over file works`() {
        /** assign read permission to role over file */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }

        /** assign write permission to role over file */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }

        /** assign read-write permission to role over file */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `assign read or write or both permissions to role over file not logged-in, not logged as admin, with no role name or file name or null or wrong permission or with wrong core parameter fails`() {

        /** assign permission to role over file not logged-in */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** assign permission to role over file not logged as admin */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )
        }

        /** assign permission to role over file with no role name */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = null,
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = null,
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = null,
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign permission to role over file with no file name */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = null,
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = null,
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = null,
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign permission to role over file with null or wrong permission */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign permission to role over file with wrong core parameter */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    @Test
    fun `revoke read or write or both permissions from role over file works`() {
        /** assign read permission to role over file */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }

        /** assign write permission to role over file */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }

        /** assign read-write permission to role over file */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `revoke read or write or both permissions from role over file not logged-in, not logged as admin, with wrong permission or with wrong core parameter fails`() {

        /** revoke permission to role over file not logged-in */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** revoke permission to role over file not logged as admin */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )
        }

        /** revoke permission to role over file with wrong permission */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** revoke permission to role over file with wrong core parameter */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }




    @Test
    fun `add combined or traditional file form or binary works`() {
        /** add file form */
        run {
            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }

        /** add file binary */
        run {
            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }



    @Test
    fun `add combined or traditional file form or binary not logged-in, with no file name or content, null or wrong enforcement type or or with wrong core parameter fails`() {
        /** add file form not logged-in */
        run {
            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** add file form with no file name */
        run {
            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = null,
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = null,
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** addFileFormUrlEncodedInRBAC_MOCK does not have content */

        /** add file form with null or wrong enforcement type */
        run {
            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }


        /** add file form with wrong core parameter */
        run {

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }


        /** add file binary not logged-in */
        run {
            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** add file binary with no file name */
        run {
            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = null,
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = null,
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add file binary with no content */
        run {
            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = null,
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = null,
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add file binary with null or wrong enforcement type */
        run {
            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add file binary with wrong core parameter */
        run {
            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }


    }

    @Test
    fun `read file works`() {
        /** read file */
        run {
            ProxyUtilities.readFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `read file not logged-in or with wrong core parameter fails`() {
        /** read file not logged-in */
        run {
            ProxyUtilities.readFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** read file with wrong core parameter */
        run {
            ProxyUtilities.readFileInRBAC_MOCK(
                fileName = "test",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.readFileInRBAC_MOCK(
                fileName = "test",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

    }

    @Test
    fun `write file form or binary works`() {
        /** write file form */
        run {
            ProxyUtilities.writeFileFormUrlEncodedInRBAC_MOCK (
                fileName = "test",
                fileContent = "content",
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }

        /** write file binary */
        run {
            ProxyUtilities.writeFileBinaryInRBAC_MOCK (
                fileName = "test",
                fileContent = "content".inputStream(),
                expectedCode = OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    fun `write combined or traditional file form or binary not logged-in, with no file name or content or with wrong core parameter fails`() {
        /** write file form not logged-in */
        run {
            ProxyUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                fileContent = "content",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** write file form with no file name */
        run {
            ProxyUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = null,
                fileContent = "content",
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write file form with no content */
        run {
            ProxyUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                fileContent = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write file form with wrong core parameter */
        run {
            ProxyUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                fileContent = "content",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                fileContent = "content",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }


        /** write file binary not logged-in */
        run {
            ProxyUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** write file binary with no file name */
        run {
            ProxyUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = null,
                fileContent = "content".inputStream(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write file binary with no content */
        run {
            ProxyUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write file binary with wrong core parameter */
        run {
            ProxyUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            ProxyUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }


    // TODO login testing

/*




    @Test
    fun `get users as admin or as user works`() {
        /** get users as admin */
        run {
            ProxyUtilities.getUsers(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 1)
                assert(first().name == Constants.ADMIN)
            }

            val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.getUsers(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 2)
                (filter { it.name == "alice" }).apply {
                    assert(!first().isAdmin)
                    assert(first().status == ElementStatus.INCOMPLETE)
                }
            }

            ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.getUsers(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 2)
                (filter { it.name == "alice" }).apply {
                    assert(first().status == ElementStatus.OPERATIONAL)
                }
            }
        }

        /** get users as user */
        run {
            ProxyUtilities.getUsers(OutcomeCode.CODE_000_SUCCESS, "alice").apply {
                assert(this!!.first().name == "alice")
            }
        }
    }

    @Test
    fun `get assignments as admin or as user works`() {
        /** get assignments as admin */
        run {
            ProxyUtilities.getAssignments(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 1)
                first().apply {
                    assert(username == Constants.ADMIN)
                    assert(roleName == Constants.ADMIN)
                }
            }

            ProxyUtilities.addRole("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.getAssignments(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 2)
                first { roleTuple -> roleTuple.roleName == "employee" }.apply {
                    assert(username == Constants.ADMIN)
                }
            }

            val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)

        }

        /** get assignments as user */
        run {
            ProxyUtilities.assignUserToRole("alice", "employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.getAssignments(OutcomeCode.CODE_000_SUCCESS, "alice").apply {
                assert(this!!.first().roleName == "employee")
            }
        }
    }

    @Test
    fun `get permissions as admin or as user works`() {
        /** get permissions as admin */
        run {
            ProxyUtilities.addFile("document",
                "content".inputStream(),
                EnforcementType.COMBINED.toString(),
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.addFile("excel",
                "content".inputStream(),
                EnforcementType.COMBINED.toString(),
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.getPermissions(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 2)
            }
        }

        /** get permissions as user */
        run {
            val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.addRole("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.assignUserToRole("alice", "employee", OutcomeCode.CODE_000_SUCCESS)

            ProxyUtilities.getPermissions(OutcomeCode.CODE_000_SUCCESS, "alice").apply {
                assert(this!!.size == 0)
            }
            ProxyUtilities.assignPermissionToRole("employee",
                "excel",
                PermissionType.READ,
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.getPermissions(OutcomeCode.CODE_000_SUCCESS, "alice").apply {
                assert(this!!.first().fileName == "excel")
            }
        }
    }*/







/*
    @Test
    fun `create profile of user as user or user as admin works`() {
        /** create profile of user as user */
        run {
            val parameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.initUserInRBAC_MOCK(parameters!!, OutcomeCode.CODE_000_SUCCESS, loggedUser = "alice")
        }

        /** create profile of user as admin */
        run {
            val parameters = ProxyUtilities.addUserInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.initUserInRBAC_MOCK(parameters!!, OutcomeCode.CODE_000_SUCCESS, loggedUser = Constants.ADMIN)
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    fun `create profile of user as another user or while not logged-in fails`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** create profile of user as another user */
        runBlocking {
            ProxyUtilities.initUserInRBAC_MOCK(bobParameters, OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden, loggedUser = "alice")
        }
        /** create profile of user while not logged-in */
        runBlocking {
            ProxyUtilities.initUserInRBAC_MOCK(bobParameters, OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    fun `get profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)

        /** get profile of admin as admin */
        run {
            val getAdminParameters = ProxyUtilities.getProfileInRBAC_MOCK(Constants.ADMIN)
            assert(adminCoreRBACMOCKParameters.user.isAdmin == getAdminParameters!!.user.isAdmin)
            assert(adminCoreRBACMOCKParameters.coreType == getAdminParameters.coreType)
            assert(adminCoreRBACMOCKParameters.user.name == getAdminParameters.user.name)
        }

        /** get profile of user as user */
        run {
            val getAliceParameters = ProxyUtilities.getProfileInRBAC_MOCK("alice", loggedUser = "alice")
            assert(aliceParameters.user.isAdmin == getAliceParameters!!.user.isAdmin)
            assert(aliceParameters.coreType == getAliceParameters.coreType)
            assert(aliceParameters.user.name == getAliceParameters.user.name)
        }

        /** get profile of user as admin */
        run {
            val getAliceParameters = ProxyUtilities.getProfileInRBAC_MOCK("alice")
            assert(aliceParameters.user.isAdmin == getAliceParameters!!.user.isAdmin)
            assert(aliceParameters.coreType == getAliceParameters.coreType)
            assert(aliceParameters.user.name == getAliceParameters.user.name)
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    fun `get profile of user as another user or while not logged-in fails`() {

        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** get profile of user as another user */
        run {
            ProxyUtilities.getProfileInRBAC_MOCK("alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_004_USER_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound)
        }

        /** get profile of user while not logged-in */
        run {
            ProxyUtilities.getProfileInRBAC_MOCK("alice",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    fun `delete profile of user as admin works`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)

        /** delete profile of user as admin */
        run {
            ProxyUtilities.deleteProfileInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `delete profile of admin as admin, user as user, user as another user or while not logged-in fails`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete of admin as admin */
        run {
            ProxyUtilities.deleteProfileInRBAC_MOCK(
                Constants.ADMIN,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
                expectedCode = OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** delete profile of user as user */
        run {
            ProxyUtilities.deleteProfileInRBAC_MOCK("alice",
                loggedUser = "alice",
                expectedCode = OutcomeCode.CODE_023_USER_CANNOT_BE_MODIFIED,
                expectedStatus = HttpStatusCode.UnprocessableEntity)
        }

        /** delete profile of user as another user */
        run {
            ProxyUtilities.deleteProfileInRBAC_MOCK("alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_004_USER_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** delete profile of user while not logged */
        run {
            ProxyUtilities.deleteProfileInRBAC_MOCK("alice",
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    fun `update profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)

        /** update profile of admin as admin */
        run {
            ProxyUtilities.updateProfileInRBAC_MOCK(adminCoreRBACMOCKParameters)
        }

        /** update profile of user as user */
        run {
            ProxyUtilities.updateProfileInRBAC_MOCK(aliceParameters, loggedUser = "alice")
        }

        /** get profile of user as admin */
        run {
            ProxyUtilities.updateProfileInRBAC_MOCK(aliceParameters)
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    fun `update profile of user as another user or while not logged-in fails`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** update profile of user as another user */
        run {
            ProxyUtilities.updateProfileInRBAC_MOCK(aliceParameters,
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden)
        }

        /** update profile of user while not logged-in */
        run {
            ProxyUtilities.updateProfileInRBAC_MOCK(aliceParameters,
                expectedCode = OutcomeCode.CODE_036_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized)
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob", OutcomeCode.CODE_000_SUCCESS)
    }
*/
}

