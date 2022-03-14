package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters.adminCoreRBACMOCKParameters
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.inputStream
import eu.fbk.st.cryptoac.runCommand
import io.ktor.http.*
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance


@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class CryptoACRoutesTest {

    private var processDocker: Process? = null

    @BeforeAll
    fun setUpAll() {
        "./buildAll.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_proxy.sh \"cryptoac_proxy\"".runCommand(dir, hashSetOf("Started ServerConnector"))
        CryptoACUtilities.initAdminInRBAC_MOCK(adminCoreRBACMOCKParameters)
    }

    @AfterAll
    fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./clean.sh".runCommand(dir, hashSetOf("clean_all_end_of_script"))
    }



    /** Profile routing testing */
    @Test
    fun `create profile of user as user or user as admin works`() {
        /** create profile of user as user */
        run {
            val parameters = CryptoACUtilities.addUserInRBAC_MOCK(username = "alice")
            CryptoACUtilities.initUserInRBAC_MOCK(parameters!!, loggedUser = "alice")
        }

        /** create profile of user as admin */
        run {
            val parameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
            CryptoACUtilities.initUserInRBAC_MOCK(parameters!!, loggedUser = ADMIN)
        }

        /** Cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("alice")
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `create profile of user as another user or while not logged-in fails`() {
        val aliceParameters = CryptoACUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** create profile of user as another user */
        runBlocking {
            CryptoACUtilities.initUserInRBAC_MOCK(bobParameters, OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden, loggedUser = "alice")
        }
        /** create profile of user while not logged-in */
        runBlocking {
            CryptoACUtilities.initUserInRBAC_MOCK(bobParameters, OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("alice")
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `get profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = CryptoACUtilities.addUserInRBAC_MOCK("alice")
        CryptoACUtilities.initUserInRBAC_MOCK(aliceParameters!!)

        /** get profile of admin as admin */
        run {
            val getAdminParameters = CryptoACUtilities.getProfileInRBAC_MOCK(ADMIN)
            assert(adminCoreRBACMOCKParameters.user.isAdmin == getAdminParameters!!.user.isAdmin)
            assert(adminCoreRBACMOCKParameters.coreType == getAdminParameters.coreType)
            assert(adminCoreRBACMOCKParameters.user.name == getAdminParameters.user.name)
        }

        /** get profile of user as user */
        run {
            val getAliceParameters = CryptoACUtilities.getProfileInRBAC_MOCK("alice", loggedUser = "alice")
            assert(aliceParameters.user.isAdmin == getAliceParameters!!.user.isAdmin)
            assert(aliceParameters.coreType == getAliceParameters.coreType)
            assert(aliceParameters.user.name == getAliceParameters.user.name)
        }

        /** get profile of user as admin */
        run {
            val getAliceParameters = CryptoACUtilities.getProfileInRBAC_MOCK("alice")
            assert(aliceParameters.user.isAdmin == getAliceParameters!!.user.isAdmin)
            assert(aliceParameters.coreType == getAliceParameters.coreType)
            assert(aliceParameters.user.name == getAliceParameters.user.name)
        }

        /** Cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("alice")
    }

    @Test
    fun `get profile of user as another user or while not logged-in fails`() {

        val aliceParameters = CryptoACUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** get profile of user as another user */
        run {
            CryptoACUtilities.getProfileInRBAC_MOCK("alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden)
        }

        /** get profile of user while not logged-in */
        run {
            CryptoACUtilities.getProfileInRBAC_MOCK("alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("alice")
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `delete profile of user as admin or user as user works`() {
        val aliceParameters = CryptoACUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete profile of user as admin */
        run {
            CryptoACUtilities.deleteProfileInRBAC_MOCK("alice")
        }

        /** delete profile of user as user */
        run {
            CryptoACUtilities.deleteProfileInRBAC_MOCK("bob", loggedUser = "bob")
        }
    }

    @Test
    fun `delete profile of user as another user or while not logged-in fails`() {
        val aliceParameters = CryptoACUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete profile of user as another user */
        run {
            CryptoACUtilities.deleteProfileInRBAC_MOCK(
                "alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
            )
        }

        /** delete profile of user while not logged */
        run {
            CryptoACUtilities.deleteProfileInRBAC_MOCK("alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("alice")
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `update profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = CryptoACUtilities.addUserInRBAC_MOCK("alice")
        CryptoACUtilities.initUserInRBAC_MOCK(aliceParameters!!)

        /** update profile of admin as admin */
        run {
            CryptoACUtilities.updateProfileInRBAC_MOCK(adminCoreRBACMOCKParameters)
        }

        /** update profile of user as user */
        run {
            CryptoACUtilities.updateProfileInRBAC_MOCK(aliceParameters, loggedUser = "alice")
        }

        /** get profile of user as admin */
        run {
            CryptoACUtilities.updateProfileInRBAC_MOCK(aliceParameters)
        }

        /** Cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("alice")
    }

    @Test
    fun `update profile of user as another user or while not logged-in fails`() {
        val aliceParameters = CryptoACUtilities.addUserInRBAC_MOCK("alice")
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(aliceParameters!!)
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** update profile of user as another user */
        run {
            CryptoACUtilities.updateProfileInRBAC_MOCK(aliceParameters,
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden)
        }

        /** update profile of user while not logged-in */
        run {
            CryptoACUtilities.updateProfileInRBAC_MOCK(aliceParameters,
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** Cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("alice")
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }






    /** Admin routing testing */
    @Test
    fun `add user works`() {
        /** add user */
        run {
            CryptoACUtilities.addUserInRBAC_MOCK(
                username = "alice",
            )
        }
    }

    @Test
    fun `add user not logged-in, not logged as admin, with no username or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** add user not logged-in */
        run {
            CryptoACUtilities.addUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** add user not logged as admin */
        run {
            CryptoACUtilities.addUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** add user with no username */
        run {
            CryptoACUtilities.addUserInRBAC_MOCK(
                username = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add user with wrong core parameter */
        run {
            CryptoACUtilities.addUserInRBAC_MOCK(
                username = "alice",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addUserInRBAC_MOCK(
                username = "alice",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `delete user works`() {
        /** delete user */
        run {
            CryptoACUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
            )
        }
    }

    @Test
    fun `delete user not logged-in, not logged as admin or wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete user not logged-in */
        run {
            CryptoACUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete user not logged as admin */
        run {
            CryptoACUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** delete user with wrong core parameter */
        run {
            CryptoACUtilities.deleteUserInRBAC_MOCK(
                username = "alice",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addUserInRBAC_MOCK(
                username = "alice",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `add role works`() {
        /** add role */
        run {
            CryptoACUtilities.addRoleInRBAC_MOCK(
                roleName = "alice",
            )
        }
    }

    @Test
    fun `add role not logged-in, not logged as admin, with no role name or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** add role not logged-in */
        run {
            CryptoACUtilities.addRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** add role not logged as admin */
        run {
            CryptoACUtilities.addRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** add role with no role name */
        run {
            CryptoACUtilities.addRoleInRBAC_MOCK(
                roleName = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add role with wrong core parameter */
        run {
            CryptoACUtilities.addRoleInRBAC_MOCK(
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addUserInRBAC_MOCK(
                username = "alice",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `delete role works`() {
        /** delete role */
        run {
            CryptoACUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
            )
        }
    }

    @Test
    fun `delete role not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete role not logged-in */
        run {
            CryptoACUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete role not logged as admin */
        run {
            CryptoACUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** delete role with wrong core parameter */
        run {
            CryptoACUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.deleteRoleInRBAC_MOCK(
                roleName = "employee",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `delete file works`() {
        /** delete file */
        run {
            CryptoACUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
            )
        }
    }

    @Test
    fun `delete file not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** delete file not logged-in */
        run {
            CryptoACUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete file not logged as admin */
        run {
            CryptoACUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** delete file with wrong core parameter */
        run {
            CryptoACUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.deleteFileInRBAC_MOCK(
                fileName = "test",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `assign user to role works`() {
        /** assign user to role */
        run {
            CryptoACUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
            )
        }
    }

    @Test
    fun `assign user to role not logged-in, not logged as admin, with no username or role name or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** assign user to role not logged-in */
        run {
            CryptoACUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** assign user to role not logged as admin */
        run {
            CryptoACUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** assign user to role with no username */
        run {
            CryptoACUtilities.assignUserToRoleInRBAC_MOCK(
                username = null,
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign user to role with no role name */
        run {
            CryptoACUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign user to role with wrong core parameter */
        run {
            CryptoACUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignUserToRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `revoke user from role works`() {
        /** revoke user from role */
        run {
            CryptoACUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
            )
        }
    }

    @Test
    fun `revoke user from role not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** revoke user to role not logged-in */
        run {
            CryptoACUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** revoke user to role not logged as admin */
        run {
            CryptoACUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** revoke user to role with wrong core parameter */
        run {
            CryptoACUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.revokeUserFromRoleInRBAC_MOCK(
                username = "alice",
                roleName = "employee",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `assign read or write or both permissions to role over file works`() {
        /** assign read permission to role over file */
        run {
            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
            )
        }

        /** assign write permission to role over file */
        run {
            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
            )
        }

        /** assign read-write permission to role over file */
        run {
            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
            )
        }
    }

    @Test
    fun `assign read or write or both permissions to role over file not logged-in, not logged as admin, with no role name or file name or null or wrong permission or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** assign permission to role over file not logged-in */
        run {
            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
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
            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
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
            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = null,
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = null,
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = null,
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign permission to role over file with no file name */
        run {
            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = null,
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = null,
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = null,
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign permission to role over file with null or wrong permission */
        run {
            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign permission to role over file with wrong core parameter */
        run {
            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.assignPermissionToRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `revoke read or write or both permissions from role over file works`() {
        /** assign read permission to role over file */
        run {
            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
            )
        }

        /** assign write permission to role over file */
        run {
            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
            )
        }

        /** assign read-write permission to role over file */
        run {
            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
            )
        }
    }

    @Test
    fun `revoke read or write or both permissions from role over file not logged-in, not logged as admin, with wrong permission or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** revoke permission to role over file not logged-in */
        run {
            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
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
            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
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
            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** revoke permission to role over file with wrong core parameter */
        run {
            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READ.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.WRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.revokePermissionFromRoleInRBAC_MOCK(
                roleName = "employee",
                fileName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `get users works`() {
        /** get users */
        run {
            assert(CryptoACUtilities.getUsers(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get users not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** get users not logged-in */
        run {
            assert(CryptoACUtilities.getUsers(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get users not logged as admin */
        run {
            assert(CryptoACUtilities.getUsers(
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
                ) == null)
        }

        /** get users with wrong core parameter */
        run {
            assert(CryptoACUtilities.getUsers(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getUsers(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `get roles works`() {
        /** get roles */
        run {
            assert(CryptoACUtilities.getRoles(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get roles not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** get roles not logged-in */
        run {
            assert(CryptoACUtilities.getRoles(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get roles not logged as admin */
        run {
            assert(CryptoACUtilities.getRoles(
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            ) == null)
        }

        /** get roles with wrong core parameter */
        run {
            assert(CryptoACUtilities.getRoles(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getRoles(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }

    @Test
    fun `get files works`() {
        /** get files */
        run {
            assert(CryptoACUtilities.getFiles(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get files not logged-in, not logged as admin or with wrong core parameter fails`() {
        val bobParameters = CryptoACUtilities.addUserInRBAC_MOCK("bob")
        CryptoACUtilities.initUserInRBAC_MOCK(bobParameters!!)

        /** get files not logged-in */
        run {
            assert(CryptoACUtilities.getFiles(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get files not logged as admin */
        run {
            assert(CryptoACUtilities.getFiles(
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            ) == null)
        }

        /** get files with wrong core parameter */
        run {
            assert(CryptoACUtilities.getFiles(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getFiles(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)
        }

        /** cleanup */
        CryptoACUtilities.deleteProfileInRBAC_MOCK("bob")
    }



    /** User routing testing */
    @Test
    fun `add combined or traditional file form or binary works`() {
        /** add file form */
        run {
            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                
            )

            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                
            )
        }

        /** add file binary */
        run {
            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                
            )

            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
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
            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )

            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** add file form with no file name */
        run {
            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = null,
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = null,
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** addFileFormUrlEncodedInRBAC_MOCK does not have content */

        /** add file form with null or wrong enforcement type */
        run {
            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }


        /** add file form with wrong core parameter */
        run {

            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.addFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }


        /** add file binary not logged-in */
        run {
            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )

            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
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
            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = null,
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = null,
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add file binary with no content */
        run {
            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = null,
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = null,
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add file binary with null or wrong enforcement type */
        run {
            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add file binary with wrong core parameter */
        run {
            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.addFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }


    }

    @Test
    fun `read file works`() {
        /** read file */
        run {
            CryptoACUtilities.readFileInRBAC_MOCK(
                fileName = "test",
                
            )
        }
    }

    @Test
    fun `read file not logged-in or with wrong core parameter fails`() {
        /** read file not logged-in */
        run {
            CryptoACUtilities.readFileInRBAC_MOCK(
                fileName = "test",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** read file with wrong core parameter */
        run {
            CryptoACUtilities.readFileInRBAC_MOCK(
                fileName = "test",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.readFileInRBAC_MOCK(
                fileName = "test",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

    }

    @Test
    fun `write file form or binary works`() {
        /** write file form */
        run {
            CryptoACUtilities.writeFileFormUrlEncodedInRBAC_MOCK (
                fileName = "test",
                fileContent = "content",
                
            )
        }

        /** write file binary */
        run {
            CryptoACUtilities.writeFileBinaryInRBAC_MOCK (
                fileName = "test",
                fileContent = "content".inputStream(),
                
            )
        }
    }

    @Test
    fun `write combined or traditional file form or binary not logged-in, with no file name or content or with wrong core parameter fails`() {
        /** write file form not logged-in */
        run {
            CryptoACUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                fileContent = "content",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** write file form with no file name */
        run {
            CryptoACUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = null,
                fileContent = "content",
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write file form with no content */
        run {
            CryptoACUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                fileContent = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write file form with wrong core parameter */
        run {
            CryptoACUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                fileContent = "content",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.writeFileFormUrlEncodedInRBAC_MOCK(
                fileName = "test",
                fileContent = "content",
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }


        /** write file binary not logged-in */
        run {
            CryptoACUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** write file binary with no file name */
        run {
            CryptoACUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = null,
                fileContent = "content".inputStream(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write file binary with no content */
        run {
            CryptoACUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write file binary with wrong core parameter */
        run {
            CryptoACUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.writeFileBinaryInRBAC_MOCK(
                fileName = "test",
                fileContent = "content".inputStream(),
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }
    }

    @Test
    fun `get assignments works`() {
        /** get assignments */
        run {
            assert(CryptoACUtilities.getAssignments(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get assignments not logged-in or with wrong core parameter fails`() {
        /** get assignments not logged-in */
        run {
            assert(CryptoACUtilities.getAssignments(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get assignments with wrong core parameter */
        run {
            assert(CryptoACUtilities.getAssignments(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getAssignments(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)
        }
    }

    @Test
    fun `get permissions works`() {
        /** get permissions */
        run {
            assert(CryptoACUtilities.getPermissions(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get permissions not logged-in or with wrong core parameter fails`() {
        /** get permissions not logged-in */
        run {
            assert(CryptoACUtilities.getPermissions(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get permissions with wrong core parameter */
        run {
            assert(CryptoACUtilities.getPermissions(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getPermissions(
                core = CoreType.RBAC_CLOUD.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)
        }
    }

    // TODO test
    //  - websocket mechanism
    //  - login procedures (after implementation)
    //  - routes for ABAC (after implementation)
}

