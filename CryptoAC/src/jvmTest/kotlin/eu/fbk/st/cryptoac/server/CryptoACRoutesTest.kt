package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters.adminCoreRBACMQTTParameters
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.inputStream
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.runCommand
import eu.fbk.st.cryptoac.server.CryptoACUtilities.Companion.initAdmin
import io.ktor.http.*
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class CryptoACRoutesTest {

    private var processDocker: Process? = null

    @BeforeAll
    fun setUpAll() {
        "./cleanAllAndBuild.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_redis cryptoac_proxy cryptoac_mosquitto_dynsec\"".runCommand(dir, hashSetOf(
            "Started ServerConnector",
            "Server initialized",
            "mosquitto version 2.0.14 running",
        ))
    }

    @BeforeEach
    fun setUp() {
        initAdmin(adminCoreRBACMQTTParameters)
    }

    @AfterEach
    fun tearDown() {
        TestUtilities.resetACServiceRBACDynSEC()
        TestUtilities.resetDMServiceRBACMQTT()
        TestUtilities.resetMMServiceRBACRedis()
        CryptoACUtilities.deleteProfile(ADMIN)
    }

    @AfterAll
    fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./cleanAll.sh".runCommand(dir, hashSetOf("clean_all_end_of_script"))
    }



    /** Profile routing testing */
    @Test
    fun `create profile of user as user or user as admin works`() {
        /** create profile of user as user */
        run {
            val parameters = CryptoACUtilities.addUser(username = "alice")
            CryptoACUtilities.initUser(parameters!!, loggedUser = "alice")
        }

        /** create profile of user as admin */
        run {
            val parameters = CryptoACUtilities.addUser("bob")
            CryptoACUtilities.initUser(parameters!!, loggedUser = ADMIN)
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("alice")
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("alice")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `create profile of user as another user or while not logged-in fails`() {
        val aliceParameters = CryptoACUtilities.addUser("alice")
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(aliceParameters!!)
        CryptoACUtilities.initUser(bobParameters!!)

        /** create profile of user as another user */
        runBlocking {
            CryptoACUtilities.initUser(bobParameters, OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden, loggedUser = "alice")
        }
        /** create profile of user while not logged-in */
        runBlocking {
            CryptoACUtilities.initUser(bobParameters, OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("alice")
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("alice")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `get profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = CryptoACUtilities.addUser("alice")
        CryptoACUtilities.initUser(aliceParameters!!)

        /** get profile of admin as admin */
        run {
            val getAdminParameters = CryptoACUtilities.getProfile(ADMIN)
            assert(adminCoreRBACMQTTParameters.user.isAdmin == getAdminParameters!!.user.isAdmin)
            assert(adminCoreRBACMQTTParameters.coreType == getAdminParameters.coreType)
            assert(adminCoreRBACMQTTParameters.user.name == getAdminParameters.user.name)
        }

        /** get profile of user as user */
        run {
            val getAliceParameters = CryptoACUtilities.getProfile("alice", loggedUser = "alice")
            assert(aliceParameters.user.isAdmin == getAliceParameters!!.user.isAdmin)
            assert(aliceParameters.coreType == getAliceParameters.coreType)
            assert(aliceParameters.user.name == getAliceParameters.user.name)
        }

        /** get profile of user as admin */
        run {
            val getAliceParameters = CryptoACUtilities.getProfile("alice")
            assert(aliceParameters.user.isAdmin == getAliceParameters!!.user.isAdmin)
            assert(aliceParameters.coreType == getAliceParameters.coreType)
            assert(aliceParameters.user.name == getAliceParameters.user.name)
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("alice")
        CryptoACUtilities.deleteUser("alice")
    }

    @Test
    fun `get profile of user as another user or while not logged-in fails`() {

        val aliceParameters = CryptoACUtilities.addUser("alice")
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(aliceParameters!!)
        CryptoACUtilities.initUser(bobParameters!!)

        /** get profile of user as another user */
        run {
            CryptoACUtilities.getProfile("alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden)
        }

        /** get profile of user while not logged-in */
        run {
            CryptoACUtilities.getProfile("alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("alice")
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("alice")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `delete profile of user as admin or user as user works`() {
        val aliceParameters = CryptoACUtilities.addUser("alice")
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(aliceParameters!!)
        CryptoACUtilities.initUser(bobParameters!!)

        /** delete profile of user as admin */
        run {
            CryptoACUtilities.deleteProfile("alice")
        }

        /** delete profile of user as user */
        run {
            CryptoACUtilities.deleteProfile("bob", loggedUser = "bob")
        }
        
        /** cleanup */
        CryptoACUtilities.deleteUser("alice")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `delete profile of user as another user or while not logged-in fails`() {
        val aliceParameters = CryptoACUtilities.addUser("alice")
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(aliceParameters!!)
        CryptoACUtilities.initUser(bobParameters!!)

        /** delete profile of user as another user */
        run {
            CryptoACUtilities.deleteProfile(
                "alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
            )
        }

        /** delete profile of user while not logged */
        run {
            CryptoACUtilities.deleteProfile("alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("alice")
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("alice")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `update profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = CryptoACUtilities.addUser("alice")
        CryptoACUtilities.initUser(aliceParameters!!)

        /** update profile of admin as admin */
        run {
            CryptoACUtilities.updateProfile(adminCoreRBACMQTTParameters)
        }

        /** update profile of user as user */
        run {
            CryptoACUtilities.updateProfile(aliceParameters, loggedUser = "alice")
        }

        /** get profile of user as admin */
        run {
            CryptoACUtilities.updateProfile(aliceParameters)
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("alice")
        CryptoACUtilities.deleteUser("alice")
    }

    @Test
    fun `update profile of user as another user or while not logged-in fails`() {
        val aliceParameters = CryptoACUtilities.addUser("alice")
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(aliceParameters!!)
        CryptoACUtilities.initUser(bobParameters!!)

        /** update profile of user as another user */
        run {
            CryptoACUtilities.updateProfile(aliceParameters,
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden)
        }

        /** update profile of user while not logged-in */
        run {
            CryptoACUtilities.updateProfile(aliceParameters,
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("alice")
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("alice")
        CryptoACUtilities.deleteUser("bob")
    }






    /** Admin routing testing */
    @Test
    fun `add user works`() {
        /** add user */
        run {
            CryptoACUtilities.addUser(
                username = "alice",
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteUser("alice")
    }

    @Test
    fun `add user not logged-in, not logged as admin, with no username or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** add user not logged-in */
        run {
            CryptoACUtilities.addUser(
                username = "alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** add user not logged as admin */
        run {
            CryptoACUtilities.addUser(
                username = "alice",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** add user with no username */
        run {
            CryptoACUtilities.addUser(
                username = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add user with wrong profile */
        run {
            CryptoACUtilities.addUser(
                username = "alice",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addUser(
                username = "alice",
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `delete user works`() {
        val aliceParameters = CryptoACUtilities.addUser("alice")
        CryptoACUtilities.initUser(aliceParameters!!)
        CryptoACUtilities.deleteProfile("alice")

        /** delete user */
        run {
            CryptoACUtilities.deleteUser(
                username = "alice",
            )
        }
    }

    @Test
    fun `delete user not logged-in, not logged as admin or wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** delete user not logged-in */
        run {
            CryptoACUtilities.deleteUser(
                username = "alice",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete user not logged as admin */
        run {
            CryptoACUtilities.deleteUser(
                username = "alice",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** delete user with wrong profile */
        run {
            CryptoACUtilities.deleteUser(
                username = "alice",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addUser(
                username = "alice",
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `add role works`() {
        /** add role */
        run {
            CryptoACUtilities.addRole(
                roleName = "employee",
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteRole("employee")
    }

    @Test
    fun `add role not logged-in, not logged as admin, with no role name or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** add role not logged-in */
        run {
            CryptoACUtilities.addRole(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** add role not logged as admin */
        run {
            CryptoACUtilities.addRole(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** add role with no role name */
        run {
            CryptoACUtilities.addRole(
                roleName = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add role with wrong profile */
        run {
            CryptoACUtilities.addRole(
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addUser(
                username = "alice",
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `delete role works`() {
        CryptoACUtilities.addRole(
            roleName = "employee",
        )

        /** delete role */
        run {
            CryptoACUtilities.deleteRole(
                roleName = "employee",
            )
        }
    }

    @Test
    fun `delete role not logged-in, not logged as admin or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** delete role not logged-in */
        run {
            CryptoACUtilities.deleteRole(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete role not logged as admin */
        run {
            CryptoACUtilities.deleteRole(
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** delete role with wrong profile */
        run {
            CryptoACUtilities.deleteRole(
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.deleteRole(
                roleName = "employee",
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `delete resource works`() {
        CryptoACUtilities.addResourceForm(
            resourceName = "test",
            enforcementType = EnforcementType.COMBINED.toString(),
        )

        /** delete resource */
        run {
            CryptoACUtilities.deleteResource(
                resourceName = "test",
            )
        }
    }

    @Test
    fun `delete resource not logged-in, not logged as admin or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** delete resource not logged-in */
        run {
            CryptoACUtilities.deleteResource(
                resourceName = "test",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** delete resource not logged as admin */
        run {
            CryptoACUtilities.deleteResource(
                resourceName = "test",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** delete resource with wrong profile */
        run {
            CryptoACUtilities.deleteResource(
                resourceName = "test",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.deleteResource(
                resourceName = "test",
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }
        
        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `assign user to role works`() {
        val aliceParameters = CryptoACUtilities.addUser("alice")
        CryptoACUtilities.initUser(aliceParameters!!)
        CryptoACUtilities.addRole(
            roleName = "employee",
        )

        /** assign user to role */
        run {
            CryptoACUtilities.assignUserToRole(
                username = "alice",
                roleName = "employee",
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteRole("employee")
        CryptoACUtilities.deleteProfile("alice")
        CryptoACUtilities.deleteUser("alice")
    }

    @Test
    fun `assign user to role not logged-in, not logged as admin, with no username or role name or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** assign user to role not logged-in */
        run {
            CryptoACUtilities.assignUserToRole(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** assign user to role not logged as admin */
        run {
            CryptoACUtilities.assignUserToRole(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** assign user to role with no username */
        run {
            CryptoACUtilities.assignUserToRole(
                username = null,
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign user to role with no role name */
        run {
            CryptoACUtilities.assignUserToRole(
                username = "alice",
                roleName = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign user to role with wrong profile */
        run {
            CryptoACUtilities.assignUserToRole(
                username = "alice",
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignUserToRole(
                username = "alice",
                roleName = "employee",
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `revoke user from role works`() {
        val aliceParameters = CryptoACUtilities.addUser("alice")
        CryptoACUtilities.initUser(aliceParameters!!)
        CryptoACUtilities.addRole(
            roleName = "employee",
        )
        CryptoACUtilities.assignUserToRole(
            username = "alice",
            roleName = "employee",
        )

        /** revoke user from role */
        run {
            CryptoACUtilities.revokeUserFromRole(
                username = "alice",
                roleName = "employee",
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteRole("employee")
        CryptoACUtilities.deleteProfile("alice")
        CryptoACUtilities.deleteUser("alice")
    }

    @Test
    fun `revoke user from role not logged-in, not logged as admin or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** revoke user to role not logged-in */
        run {
            CryptoACUtilities.revokeUserFromRole(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** revoke user to role not logged as admin */
        run {
            CryptoACUtilities.revokeUserFromRole(
                username = "alice",
                roleName = "employee",
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob"
            )
        }

        /** revoke user to role with wrong profile */
        run {
            CryptoACUtilities.revokeUserFromRole(
                username = "alice",
                roleName = "employee",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.revokeUserFromRole(
                username = "alice",
                roleName = "employee",
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `assign read or read-write permissions to role over resource works`() {
        CryptoACUtilities.addRole(
            roleName = "employee",
        )
        CryptoACUtilities.addResourceForm(
            resourceName = "test",
            enforcementType = EnforcementType.COMBINED.toString(),
        )

        /** assign read permission to role over resource */
        run {
            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READ.toString(),
            )
        }

        /** assign read-write permission to role over resource */
        run {
            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteResource("test")
        CryptoACUtilities.deleteRole("employee")
    }

    @Test
    fun `assign read or write or both permissions to role over resource not logged-in, not logged as admin, with no role name or resource name or null or wrong permission or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** assign permission to role over resource not logged-in */
        run {
            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** assign permission to role over resource not logged as admin */
        run {
            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )
        }

        /** assign permission to role over resource with no role name */
        run {
            CryptoACUtilities.assignPermissionToRole(
                roleName = null,
                resourceName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = null,
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = null,
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign permission to role over resource with no resource name */
        run {
            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = null,
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = null,
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = null,
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign permission to role over resource with null or wrong permission */
        run {
            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** assign permission to role over resource with wrong profile */
        run {
            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READ.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READ.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.assignPermissionToRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `revoke write or read-write permissions from role over resource works`() {
        CryptoACUtilities.addRole(
            roleName = "employee",
        )
        CryptoACUtilities.addResourceForm(
            resourceName = "test",
            enforcementType = EnforcementType.COMBINED.toString(),
        )
        CryptoACUtilities.assignPermissionToRole(
            roleName = "employee",
            resourceName = "test",
            permission = PermissionType.READWRITE.toString(),
        )

        /** revoke write permission from role over resource */
        run {
            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
            )
        }

        /** revoke read-write permission from role over resource */
        run {
            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteResource("test")
        CryptoACUtilities.deleteRole("employee")
    }

    @Test
    fun `revoke read or write or both permissions from role over resource not logged-in, not logged as admin, with wrong permission or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** revoke permission to role over resource not logged-in */
        run {
            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )

            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            )
        }

        /** revoke permission to role over resource not logged as admin */
        run {
            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READ.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )

            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            )
        }

        /** revoke permission to role over resource with wrong permission */
        run {
            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** revoke permission to role over resource with wrong profile */
        run {
            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READ.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READ.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.WRITE.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.revokePermissionFromRole(
                roleName = "employee",
                resourceName = "test",
                permission = PermissionType.READWRITE.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `get users works`() {
        /** get users */
        run {
            assert(CryptoACUtilities.getUsers(loggedUser = ADMIN)!!.first().name == ADMIN)
        }
    }

    @Test
    fun `get users not logged-in, not logged as admin or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

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

        /** get users with wrong profile */
        run {
            assert(CryptoACUtilities.getUsers(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getUsers(
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `get roles works`() {
        /** get roles */
        run {
            assert(CryptoACUtilities.getRoles(loggedUser = ADMIN)!!.first().name == ADMIN)
        }
    }

    @Test
    fun `get roles not logged-in, not logged as admin or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

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

        /** get roles with wrong profile */
        run {
            assert(CryptoACUtilities.getRoles(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getRoles(
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }

    @Test
    fun `get resources works`() {
        /** get resources */
        run {
            assert(CryptoACUtilities.getResources(loggedUser = ADMIN)!!.isEmpty())
        }
    }

    @Test
    fun `get resources not logged-in, not logged as admin or with wrong profile fails`() {
        val bobParameters = CryptoACUtilities.addUser("bob")
        CryptoACUtilities.initUser(bobParameters!!)

        /** get resources not logged-in */
        run {
            assert(CryptoACUtilities.getResources(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get resources not logged as admin */
        run {
            assert(CryptoACUtilities.getResources(
                expectedCode = OutcomeCode.CODE_037_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden,
                loggedUser = "bob",
            ) == null)
        }

        /** get resources with wrong profile */
        run {
            assert(CryptoACUtilities.getResources(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getResources(
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            ) == null)
        }

        /** cleanup */
        CryptoACUtilities.deleteProfile("bob")
        CryptoACUtilities.deleteUser("bob")
    }



    /** User routing testing */
    @Test
    fun `add combined or traditional resource form or binary works`() {
        /** add resource form */
        run {
            CryptoACUtilities.addResourceForm(
                resourceName = "test1",
                enforcementType = EnforcementType.COMBINED.toString(),
            )

            CryptoACUtilities.addResourceForm(
                resourceName = "test2",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
            )
        }

        /** add resource binary */
        run {
            CryptoACUtilities.addResourceBinary(
                resourceName = "test3",
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
            )

            CryptoACUtilities.addResourceBinary(
                resourceName = "test4",
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteResource(
            resourceName = "test1",
        )
        CryptoACUtilities.deleteResource(
            resourceName = "test2",
        )
        CryptoACUtilities.deleteResource(
            resourceName = "test3",
        )
        CryptoACUtilities.deleteResource(
            resourceName = "test4",
        )
    }

    @Test
    fun `add combined or traditional resource form or binary not logged-in, with no resource name or content, null or wrong enforcement type or or with wrong profile fails`() {
        /** add resource form not logged-in */
        run {
            CryptoACUtilities.addResourceForm(
                resourceName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )

            CryptoACUtilities.addResourceForm(
                resourceName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** add resource form with no resource name */
        run {
            CryptoACUtilities.addResourceForm(
                resourceName = null,
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addResourceForm(
                resourceName = null,
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** addResourceFormUrlEncodedInRBAC_MOCK does not have content */

        /** add resource form with null or wrong enforcement type */
        run {
            CryptoACUtilities.addResourceForm(
                resourceName = "test",
                enforcementType = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addResourceForm(
                resourceName = "test",
                enforcementType = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }


        /** add resource form with wrong profile */
        run {

            CryptoACUtilities.addResourceForm(
                resourceName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addResourceForm(
                resourceName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addResourceForm(
                resourceName = "test",
                enforcementType = EnforcementType.COMBINED.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.addResourceForm(
                resourceName = "test",
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }


        /** add resource binary not logged-in */
        run {
            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )

            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** add resource binary with no resource name */
        run {
            CryptoACUtilities.addResourceBinary(
                resourceName = null,
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addResourceBinary(
                resourceName = null,
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add resource binary with no content */
        run {
            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = null,
                enforcementType = EnforcementType.COMBINED.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = null,
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add resource binary with null or wrong enforcement type */
        run {
            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                enforcementType = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                enforcementType = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** add resource binary with wrong profile */
        run {
            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.COMBINED.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )

            CryptoACUtilities.addResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                enforcementType = EnforcementType.TRADITIONAL.toString(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }
    }

    @Test
    fun `read resource works`() {
        CryptoACUtilities.addResourceForm(
            resourceName = "test",
            enforcementType = EnforcementType.COMBINED.toString(),
        )

        /** read resource */
        run {
            CryptoACUtilities.readResource(
                resourceName = "test",
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteResource(
            resourceName = "test",
        )
    }

    @Test
    fun `read resource not logged-in or with wrong profile fails`() {
        /** read resource not logged-in */
        run {
            CryptoACUtilities.readResource(
                resourceName = "test",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** read resource with wrong profile */
        run {
            CryptoACUtilities.readResource(
                resourceName = "test",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.readResource(
                resourceName = "test",
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }

    }

    @Test
    fun `write resource form or binary works`() {
        CryptoACUtilities.addResourceForm(
            resourceName = "test1",
            enforcementType = EnforcementType.COMBINED.toString(),
        )
        CryptoACUtilities.addResourceBinary(
            resourceName = "test2",
            resourceContent = "content".inputStream(),
            enforcementType = EnforcementType.TRADITIONAL.toString(),
        )

        /** write resource form */
        run {
            CryptoACUtilities.writeResourceForm(
                resourceName = "test1",
                resourceContent = "content",
            )
        }

        /** write resource binary */
        run {
            CryptoACUtilities.writeResourceBinary(
                resourceName = "test2",
                resourceContent = "content".inputStream(),
            )
        }

        /** cleanup */
        CryptoACUtilities.deleteResource(
            resourceName = "test1",
        )
        CryptoACUtilities.deleteResource(
            resourceName = "test2",
        )
    }

    @Test
    fun `write combined or traditional resource form or binary not logged-in, with no resource name or content or with wrong profile fails`() {
        /** write resource form not logged-in */
        run {
            CryptoACUtilities.writeResourceForm(
                resourceName = "test",
                resourceContent = "content",
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** write resource form with no resource name */
        run {
            CryptoACUtilities.writeResourceForm(
                resourceName = null,
                resourceContent = "content",
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write resource form with no content */
        run {
            CryptoACUtilities.writeResourceForm(
                resourceName = "test",
                resourceContent = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write resource form with wrong profile */
        run {
            CryptoACUtilities.writeResourceForm(
                resourceName = "test",
                resourceContent = "content",
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.writeResourceForm(
                resourceName = "test",
                resourceContent = "content",
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }


        /** write resource binary not logged-in */
        run {
            CryptoACUtilities.writeResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false
            )
        }

        /** write resource binary with no resource name */
        run {
            CryptoACUtilities.writeResourceBinary(
                resourceName = null,
                resourceContent = "content".inputStream(),
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write resource binary with no content */
        run {
            CryptoACUtilities.writeResourceBinary(
                resourceName = "test",
                resourceContent = null,
                expectedCode = OutcomeCode.CODE_019_MISSING_PARAMETERS,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )
        }

        /** write resource binary with wrong profile */
        run {
            CryptoACUtilities.writeResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            )

            CryptoACUtilities.writeResourceBinary(
                resourceName = "test",
                resourceContent = "content".inputStream(),
                core = CoreType.RBAC_AT_REST.toString(),
                expectedCode = OutcomeCode.CODE_039_PROFILE_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound,
            )
        }
    }

    @Test
    fun `get assignments works`() {
        /** get assignments */
        run {
            assert(CryptoACUtilities.getAssignments(loggedUser = ADMIN)!!.first().username == ADMIN)
        }
    }

    @Test
    fun `get assignments not logged-in or with wrong profile fails`() {
        /** get assignments not logged-in */
        run {
            assert(CryptoACUtilities.getAssignments(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get assignments with wrong profile */
        run {
            assert(CryptoACUtilities.getAssignments(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getAssignments(
                core = CoreType.RBAC_AT_REST.toString(),
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
    fun `get permissions not logged-in or with wrong profile fails`() {
        /** get permissions not logged-in */
        run {
            assert(CryptoACUtilities.getPermissions(
                expectedCode = OutcomeCode.CODE_038_UNAUTHORIZED,
                expectedStatus = HttpStatusCode.Unauthorized,
                login = false,
            ) == null)
        }

        /** get permissions with wrong profile */
        run {
            assert(CryptoACUtilities.getPermissions(
                core = "this_is_wrong",
                expectedCode = OutcomeCode.CODE_020_INVALID_PARAMETER,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
            ) == null)

            assert(CryptoACUtilities.getPermissions(
                core = CoreType.RBAC_AT_REST.toString(),
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


