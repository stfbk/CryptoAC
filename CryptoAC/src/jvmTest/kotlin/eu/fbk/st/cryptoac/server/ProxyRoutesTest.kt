package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Parameters.adminCoreRBACMOCKParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import io.ktor.http.*
import kotlinx.coroutines.runBlocking
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
        processBuild.waitFor(5, TimeUnit.SECONDS)
        processDocker = "./startCryptoAC_proxy.sh \"cryptoac_proxy\"".runCommand(File("../Documentation/Installation/"))
        processDocker!!.waitFor(3, TimeUnit.SECONDS)

        ProxyUtilities.initAdminInRBAC_MOCK(adminCoreRBACMOCKParameters)
    }

    @AfterAll
    fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        val cleanProcess = "./clean.sh".runCommand(File("../Documentation/Installation/"))
        cleanProcess.waitFor(5, TimeUnit.SECONDS)
    }



    /** Profile routing testing */
    @Test
    fun `create profile of user as user or user as admin works`() {
        /** create profile of user as user */
        run {
            val parameters = ProxyUtilities.addUserInRBAC_MOCK(username = "alice")
            ProxyUtilities.initUserInRBAC_MOCK(parameters!!, loggedUser = "alice")
        }

        /** create profile of user as admin */
        run {
            val parameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
            ProxyUtilities.initUserInRBAC_MOCK(parameters!!, loggedUser = ADMIN)
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice")
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `create profile of user as another user or while not logged-in fails`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** create profile of user as another user */
        runBlocking {
            ProxyUtilities.initUserInRBAC_MOCK(bobParameters, OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden, loggedUser = "alice")
        }
        /** create profile of user while not logged-in */
        runBlocking {
            ProxyUtilities.initUserInRBAC_MOCK(bobParameters, OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice")
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `get profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice")
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)

        /** get profile of admin as admin */
        run {
            val getAdminParameters = ProxyUtilities.getProfileInRBAC_MOCK(ADMIN)
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
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice")
    }

    @Test
    fun `get profile of user as another user or while not logged-in fails`() {

        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** get profile of user as another user */
        run {
            ProxyUtilities.getProfileInRBAC_MOCK("alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden)
        }

        /** get profile of user while not logged-in */
        run {
            ProxyUtilities.getProfileInRBAC_MOCK("alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice")
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `delete profile of user as admin or user as user works`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete profile of user as admin */
        run {
            ProxyUtilities.deleteProfileInRBAC_MOCK("alice")
        }

        /** delete profile of user as user */
        run {
            ProxyUtilities.deleteProfileInRBAC_MOCK("bob", loggedUser = "bob")
        }
    }

    @Test
    fun `delete profile of user as another user or while not logged-in fails`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete profile of user as another user */
        run {
            ProxyUtilities.deleteProfileInRBAC_MOCK("alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
            )
        }

        /** delete profile of user while not logged */
        run {
            ProxyUtilities.deleteProfileInRBAC_MOCK("alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice")
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `update profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice")
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
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice")
    }

    @Test
    fun `update profile of user as another user or while not logged-in fails`() {
        val aliceParameters = ProxyUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** update profile of user as another user */
        run {
            ProxyUtilities.updateProfileInRBAC_MOCK(aliceParameters,
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden)
        }

        /** update profile of user while not logged-in */
        run {
            ProxyUtilities.updateProfileInRBAC_MOCK(aliceParameters,
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("alice")
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }






    /** Admin routing testing */
    @Test
    fun `add user works`() {
        /** add user */
        run {
            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
            )
        }
    }

    @Test
    fun `add user not logged-in, not logged as admin, with no username or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** add user not logged-in */
        run {
            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** add user not logged as admin */
        run {
            ProxyUtilities.addUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `delete user works`() {
        /** delete user */
        run {
            ProxyUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
            )
        }
    }

    @Test
    fun `delete user not logged-in, not logged as admin or wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete user not logged-in */
        run {
            ProxyUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete user not logged as admin */
        run {
            ProxyUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `add role works`() {
        /** add role */
        run {
            ProxyUtilities.addRoleInRBAC_MOCK(
                roleName = "alice",
            )
        }
    }

    @Test
    fun `add role not logged-in, not logged as admin, with no role name or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** add role not logged-in */
        run {
            ProxyUtilities.addRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** add role not logged as admin */
        run {
            ProxyUtilities.addRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `delete role works`() {
        /** delete role */
        run {
            ProxyUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
            )
        }
    }

    @Test
    fun `delete role not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete role not logged-in */
        run {
            ProxyUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete role not logged as admin */
        run {
            ProxyUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `delete file works`() {
        /** delete file */
        run {
            ProxyUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
            )
        }
    }

    @Test
    fun `delete file not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete file not logged-in */
        run {
            ProxyUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete file not logged as admin */
        run {
            ProxyUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `assign user to role works`() {
        /** assign user to role */
        run {
            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
            )
        }
    }

    @Test
    fun `assign user to role not logged-in, not logged as admin, with no username or role name or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** assign user to role not logged-in */
        run {
            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** assign user to role not logged as admin */
        run {
            ProxyUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `revoke user from role works`() {
        /** revoke user from role */
        run {
            ProxyUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
            )
        }
    }

    @Test
    fun `revoke user from role not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** revoke user to role not logged-in */
        run {
            ProxyUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** revoke user to role not logged as admin */
        run {
            ProxyUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `assign read or write or both permissions to role over file works`() {
        /** assign read permission to role over file */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
            )
        }

        /** assign write permission to role over file */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
            )
        }

        /** assign read-write permission to role over file */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
            )
        }
    }

    @Test
    fun `assign read or write or both permissions to role over file not logged-in, not logged as admin, with no role name or file name or null or wrong permission or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** assign permission to role over file not logged-in */
        run {
            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
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
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `revoke read or write or both permissions from role over file works`() {
        /** assign read permission to role over file */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
            )
        }

        /** assign write permission to role over file */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
            )
        }

        /** assign read-write permission to role over file */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
            )
        }
    }

    @Test
    fun `revoke read or write or both permissions from role over file not logged-in, not logged as admin, with wrong permission or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** revoke permission to role over file not logged-in */
        run {
            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
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
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `get users works`() {
        /** get users */
        run {
            assert(ProxyUtilities.getUsers(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get users not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** get users not logged-in */
        run {
            assert(ProxyUtilities.getUsers(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get users not logged as admin */
        run {
            assert(ProxyUtilities.getUsers(
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
                ) == null)
        }

        /** get users with wrong core parameter */
        run {
            assert(ProxyUtilities.getUsers(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(ProxyUtilities.getUsers(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `get roles works`() {
        /** get roles */
        run {
            assert(ProxyUtilities.getRoles(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get roles not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** get roles not logged-in */
        run {
            assert(ProxyUtilities.getRoles(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get roles not logged as admin */
        run {
            assert(ProxyUtilities.getRoles(
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            ) == null)
        }

        /** get roles with wrong core parameter */
        run {
            assert(ProxyUtilities.getRoles(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(ProxyUtilities.getRoles(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `get files works`() {
        /** get files */
        run {
            assert(ProxyUtilities.getFiles(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get files not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = ProxyUtilities.addUserInRBAC_MOCK("bob")
        ProxyUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** get files not logged-in */
        run {
            assert(ProxyUtilities.getFiles(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get files not logged as admin */
        run {
            assert(ProxyUtilities.getFiles(
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            ) == null)
        }

        /** get files with wrong core parameter */
        run {
            assert(ProxyUtilities.getFiles(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(ProxyUtilities.getFiles(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }

        /** cleanup */
        ProxyUtilities.deleteProfileInRBAC_MOCK("bob")
    }



    /** User routing testing */
    @Test
    fun `add combined or traditional file form or binary works`() {
        /** add file form */
        run {
            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                
            )
        }

        /** add file binary */
        run {
            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                
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
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
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
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            ProxyUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
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
                
            )
        }
    }

    @Test
    fun `read file not logged-in or with wrong core parameter fails`() {
        /** read file not logged-in */
        run {
            ProxyUtilities.readFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
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
                
            )
        }

        /** write file binary */
        run {
            ProxyUtilities.writeFileBinaryInRBAC_MOCK (
                fileName = "test",
                fileContent = "content".inputStream(),
                
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
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }


        /** write file binary not logged-in */
        run {
            ProxyUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
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
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    @Test
    fun `get assignments works`() {
        /** get assignments */
        run {
            assert(ProxyUtilities.getAssignments(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get assignments not logged-in or with wrong core parameter fails`() {
        /** get assignments not logged-in */
        run {
            assert(ProxyUtilities.getAssignments(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get assignments with wrong core parameter */
        run {
            assert(ProxyUtilities.getAssignments(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(ProxyUtilities.getAssignments(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    @Test
    fun `get permissions works`() {
        /** get permissions */
        run {
            assert(ProxyUtilities.getPermissions(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get permissions not logged-in or with wrong core parameter fails`() {
        /** get permissions not logged-in */
        run {
            assert(ProxyUtilities.getPermissions(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get permissions with wrong core parameter */
        run {
            assert(ProxyUtilities.getPermissions(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(ProxyUtilities.getPermissions(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)

            // TODO test this by passing a non-RBAC core (e.g., ABAC core)
        }
    }

    // TODO test websocket mechanism
    // TODO test login procedures
}

