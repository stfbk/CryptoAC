package eu.fbk.st.cryptoac.proxy

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Parameters.adminCoreParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreParametersCloud
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

/** Test class for proxy routes for profiles. */
internal class ProxyProfilesRoutesTest {

    @BeforeEach
    fun setUp() {
        TestUtilities.startCloud()
        TestUtilities.initAdminFromProxy()
    }

    @AfterEach
    fun tearDown() {
        TestUtilities.stopCloud()
        TestUtilities.resetDSCloud()
        TestUtilities.resetMetadataStorageMySQL()
        TestUtilities.resetOPACloud()
        TestUtilities.resetProxy()
    }



    @Test
    fun `create profile of user as user or user as admin works`() {
        /** create profile of user as user */
        run {
            val parameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`initialize user`(parameters!!, OutcomeCode.CODE_000_SUCCESS, loggedUser = "alice")
        }

        /** create profile of user as admin */
        run {
            val parameters = ProxyUtilities.`add user`("bob", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`initialize user`(parameters!!, OutcomeCode.CODE_000_SUCCESS, loggedUser = ADMIN)
        }
    }

    @Test
    fun `create profile of user as another user or while not logged in fails`() {
        val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
        val bobParameters = ProxyUtilities.`add user`("bob", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`initialize user`(aliceParameters!!)

        /** create profile of user as another user */
        run {
            ProxyUtilities.`initialize user`(bobParameters!!, OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden, loggedUser = "alice")
        }
        /** create profile of user while not logged in */
        run {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    val response = it.post<HttpResponse>("https://127.0.0.1:8443${API.PROFILES}?${SERVER.CORE}=${bobParameters!!.coreType}") {
                        contentType(ContentType.Application.Json)
                        body = Json.encodeToString(bobParameters as CoreParametersCloud)
                    }
                    Assertions.assertEquals(HttpStatusCode.Unauthorized, response.status)
                    Assertions.assertEquals(OutcomeCode.CODE_036_UNAUTHORIZED, Json.decodeFromString<OutcomeCode>(response.readText()))
                }
            }
        }
    }



    @Test
    fun `get profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`initialize user`(aliceParameters!!)

        /** get profile of admin as admin */
        run {
            val getAdminParameters = ProxyUtilities.`get profile`(ADMIN)
            assert(adminCoreParameters.isAdmin == getAdminParameters!!.isAdmin)
            assert(adminCoreParameters.coreType == getAdminParameters.coreType)
            assert(adminCoreParameters.username == getAdminParameters.username)
        }

        /** get profile of user as user */
        run {
            val getAliceParameters = ProxyUtilities.`get profile`("alice", loggedUser = "alice")
            assert(aliceParameters.isAdmin == getAliceParameters!!.isAdmin)
            assert(aliceParameters.coreType == getAliceParameters.coreType)
            assert(aliceParameters.username == getAliceParameters.username)
        }

        /** get profile of user as admin */
        run {
            val getAliceParameters = ProxyUtilities.`get profile`("alice")
            assert(aliceParameters.isAdmin == getAliceParameters!!.isAdmin)
            assert(aliceParameters.coreType == getAliceParameters.coreType)
            assert(aliceParameters.username == getAliceParameters.username)
        }
    }

    @Test
    fun `get profile of user as another user or while not logged in fails`() {

        val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
        val bobParameters = ProxyUtilities.`add user`("bob", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`initialize user`(aliceParameters!!)
        ProxyUtilities.`initialize user`(bobParameters!!)

        /** get profile of user as another user */
        run {
            ProxyUtilities.`get profile`("alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_004_USER_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound)
        }

        /** get profile of user while not logged in */
        run {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    val response = it.get<HttpResponse>("https://127.0.0.1:8443${API.PROFILES.replace("{${SERVER.CORE}}", "${CoreType.RBAC_CLOUD}")}?${SERVER.USERNAME}=alice")
                    Assertions.assertEquals(HttpStatusCode.Unauthorized, response.status)
                    Assertions.assertEquals(OutcomeCode.CODE_036_UNAUTHORIZED, Json.decodeFromString<OutcomeCode>(response.readText()))
                }
            }
        }
    }



    @Test
    fun `delete profile of user as admin works`() {
        val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`initialize user`(aliceParameters!!)

        /** delete profile of user as admin */
        run {
            ProxyUtilities.`delete profile`("alice")
        }
    }

    @Test
    fun `delete profile of admin as admin, user as user, user as another user or while not logged in fails`() {
        val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
        val bobParameters = ProxyUtilities.`add user`("bob", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`initialize user`(aliceParameters!!)
        ProxyUtilities.`initialize user`(bobParameters!!)

        /** delete of admin as admin */
        run {
            ProxyUtilities.`delete profile`(ADMIN,
                expectedStatus = HttpStatusCode.UnprocessableEntity,
                expectedCode = OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** delete profile of user as user */
        run {
            ProxyUtilities.`delete profile`("alice",
                loggedUser = "alice",
                expectedCode = OutcomeCode.CODE_023_USER_CANNOT_BE_MODIFIED,
                expectedStatus = HttpStatusCode.UnprocessableEntity)
        }

        /** delete profile of user as another user */
        run {
            ProxyUtilities.`delete profile`("alice",
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_004_USER_NOT_FOUND,
                expectedStatus = HttpStatusCode.NotFound)
        }

        /** delete profile of user while not logged */
        run {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    val response = it.delete<HttpResponse>("https://127.0.0.1:8443${API.PROFILES.replace("{${SERVER.CORE}}", "${CoreType.RBAC_CLOUD}")}alice")
                    Assertions.assertEquals(HttpStatusCode.Unauthorized, response.status)
                    Assertions.assertEquals(OutcomeCode.CODE_036_UNAUTHORIZED, Json.decodeFromString<OutcomeCode>(response.readText()))
                }
            }
        }

    }



    @Test
    fun `update profile of admin as admin, user as user or user as admin works`() {
        val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`initialize user`(aliceParameters!!)

        /** update profile of admin as admin */
        run {
            ProxyUtilities.`update profile`(adminCoreParameters)
        }

        /** update profile of user as user */
        run {
            ProxyUtilities.`update profile`(aliceParameters, loggedUser = "alice")
        }

        /** get profile of user as admin */
        run {
            ProxyUtilities.`update profile`(aliceParameters)
        }
    }

    @Test
    fun `update profile of user as another user or while not logged in fails`() {
        val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
        val bobParameters = ProxyUtilities.`add user`("bob", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`initialize user`(aliceParameters!!)
        ProxyUtilities.`initialize user`(bobParameters!!)

        /** update profile of user as another user */
        run {
            ProxyUtilities.`update profile`(aliceParameters,
                loggedUser = "bob",
                expectedCode = OutcomeCode.CODE_035_FORBIDDEN,
                expectedStatus = HttpStatusCode.Forbidden)
        }

        /** update profile of user while not logged in */
        run {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    val response = it.post<HttpResponse>("https://127.0.0.1:8443${API.PROFILES.replace("{${SERVER.CORE}}", "${aliceParameters.coreType}")}") {
                        contentType(ContentType.Application.Json)
                        body = Json.encodeToString(aliceParameters as CoreParametersCloud)
                    }
                    Assertions.assertEquals(HttpStatusCode.Unauthorized, response.status)
                    Assertions.assertEquals(OutcomeCode.CODE_036_UNAUTHORIZED, Json.decodeFromString<OutcomeCode>(response.readText()))
                }
            }
        }
    }
}