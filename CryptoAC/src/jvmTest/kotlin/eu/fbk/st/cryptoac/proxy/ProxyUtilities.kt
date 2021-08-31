package eu.fbk.st.cryptoac.proxy

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.core.tuples.RoleTuple
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.SERVER.ENFORCEMENT
import eu.fbk.st.cryptoac.SERVER.FILE_NAME
import eu.fbk.st.cryptoac.SERVER.PERMISSION
import eu.fbk.st.cryptoac.SERVER.ROLE_NAME
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.core.CoreParametersCloud
import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.utils.io.jvm.javaio.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.Assertions
import java.io.InputStream

class ProxyUtilities {

    companion object {

        suspend fun loginProxy(client: HttpClient, user: String = ADMIN) {
            val response = client.post<HttpResponse>("https://127.0.0.1:8443${API.LOGIN}") {
                contentType(ContentType.Application.FormUrlEncoded)
                body = listOf(USERNAME to user).formUrlEncode()
            }
            Assertions.assertEquals(HttpStatusCode.OK, response.status)
        }
        suspend fun logoutProxy(client: HttpClient) {
            val response = client.delete<HttpResponse>("https://127.0.0.1:8443${API.LOGOUT}")
            Assertions.assertEquals(HttpStatusCode.OK, response.status)
        }


        fun `initialize user`(
            coreParameters: CoreParameters,
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = coreParameters.username
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, loggedUser)
                    val response = it.post<HttpResponse>("https://127.0.0.1:8443${API.PROFILES.replace("{${SERVER.CORE}}", "${coreParameters.coreType}")}") {
                        contentType(ContentType.Application.Json)
                        body = Json.encodeToString(coreParameters as CoreParametersCloud)
                    }
                    Assertions.assertEquals(expectedStatus, response.status)
                    Assertions.assertEquals(expectedCode, Json.decodeFromString<OutcomeCode>(response.readText()))
                    logoutProxy(it)
                }
            }
        }



        fun `add user`(username: String, expectedCode: OutcomeCode): CoreParameters? {
            var coreParameters: CoreParameters? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.post<HttpResponse>("https://127.0.0.1:8443${API.PROXY}users/${CoreType.RBAC_CLOUD}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                        body = listOf(USERNAME to username).formUrlEncode()
                    }
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        Assertions.assertEquals(HttpStatusCode.OK, response.status)
                        coreParameters = Json.decodeFromString<CoreParametersCloud>(response.readText()).apply {
                            Assertions.assertEquals(CoreType.RBAC_CLOUD, coreType)
                            Assertions.assertEquals(username, this.username)
                        }
                    }
                    else {
                        Assertions.assertEquals(HttpStatusCode.InternalServerError, response.status)
                        Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                            Assertions.assertEquals(expectedCode, this)
                        }
                    }
                    logoutProxy(it)
                }
            }
            return coreParameters
        }
        fun `delete user`(username: String, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.delete<HttpResponse>("https://127.0.0.1:8443${API.PROXY}users/${CoreType.RBAC_CLOUD}/${username}")
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        Assertions.assertEquals(HttpStatusCode.OK, response.status)
                    }
                    else {
                        Assertions.assertEquals(HttpStatusCode.InternalServerError, response.status)
                    }
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }

        fun `add role`(roleName: String, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.post<HttpResponse>("https://127.0.0.1:8443${API.PROXY}roles/${CoreType.RBAC_CLOUD}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                        body = listOf(ROLE_NAME to roleName).formUrlEncode()
                    }
                    Assertions.assertEquals(
                        if (expectedCode == OutcomeCode.CODE_000_SUCCESS)
                            HttpStatusCode.OK
                        else HttpStatusCode.InternalServerError,
                        response.status)
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }
        fun `delete role`(roleName: String, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.delete<HttpResponse>("https://127.0.0.1:8443${API.PROXY}roles/${CoreType.RBAC_CLOUD}/${roleName}")
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        Assertions.assertEquals(HttpStatusCode.OK, response.status)
                    }
                    else {
                        Assertions.assertEquals(HttpStatusCode.InternalServerError, response.status)
                    }
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }
        fun `add file`(fileName: String, fileContent: InputStream, enforcementType: EnforcementType, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.submitFormWithBinaryData<HttpResponse>(
                        url = "https://127.0.0.1:8443${API.PROXY}files/${CoreType.RBAC_CLOUD}/",
                        formData = formData {
                            append(
                                key = ENFORCEMENT,
                                value = enforcementType.toString()
                            )
                            append(key = FILE_NAME, value = fileContent.readAllBytes(), Headers.build {
                                append(HttpHeaders.ContentDisposition, "filename=$fileName")
                            })
                        }
                    )
                    Assertions.assertEquals(
                        if (expectedCode == OutcomeCode.CODE_000_SUCCESS)
                            HttpStatusCode.OK
                        else HttpStatusCode.InternalServerError,
                        response.status)
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }
        fun `delete file`(fileName: String, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.delete<HttpResponse>("https://127.0.0.1:8443${API.PROXY}files/${CoreType.RBAC_CLOUD}/${fileName}")
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        Assertions.assertEquals(HttpStatusCode.OK, response.status)
                    }
                    else {
                        Assertions.assertEquals(HttpStatusCode.InternalServerError, response.status)
                    }
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }

        fun `read file`(fileName: String, expectedCode: OutcomeCode): InputStream? {
            var inputStream: InputStream? = null

            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.get<HttpResponse>("https://127.0.0.1:8443${API.PROXY}files/${CoreType.RBAC_CLOUD}/${fileName}")
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        Assertions.assertEquals(HttpStatusCode.OK, response.status)
                        inputStream = response.content.toInputStream().readAllBytes().inputStream() // TODO fix
                    }
                    else {
                        Assertions.assertEquals(HttpStatusCode.InternalServerError, response.status)
                        Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                            Assertions.assertEquals(expectedCode, this)
                        }
                    }
                    logoutProxy(it)
                }
            }
            return inputStream
        }
        fun `write file`(fileName: String, fileContent: InputStream, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.submitFormWithBinaryData<HttpResponse>(
                        url = "https://127.0.0.1:8443${API.PROXY}files/${CoreType.RBAC_CLOUD}/",
                        formData = formData {
                            append(key = FILE_NAME, value = fileContent.readAllBytes(), Headers.build { // TODO fix this
                                append(HttpHeaders.ContentDisposition, "filename=$fileName")
                            })
                        }
                    ) {
                        method = HttpMethod.Patch
                    }
                    Assertions.assertEquals(
                        if (expectedCode == OutcomeCode.CODE_000_SUCCESS)
                            HttpStatusCode.OK
                        else HttpStatusCode.InternalServerError,
                        response.status)
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }

        fun `assign user to role`(username: String, roleName: String, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.post<HttpResponse>("https://127.0.0.1:8443${API.PROXY}assignments/${CoreType.RBAC_CLOUD}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                        body = listOf(USERNAME to username, ROLE_NAME to roleName).formUrlEncode()
                    }
                    Assertions.assertEquals(
                        if (expectedCode == OutcomeCode.CODE_000_SUCCESS)
                            HttpStatusCode.OK
                        else HttpStatusCode.InternalServerError,
                        response.status)
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }
        fun `revoke user from role`(username: String, roleName: String, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.delete<HttpResponse>("https://127.0.0.1:8443${API.PROXY}assignments/${CoreType.RBAC_CLOUD}/${username}/${roleName}")
                    Assertions.assertEquals(
                        if (expectedCode == OutcomeCode.CODE_000_SUCCESS)
                            HttpStatusCode.OK
                        else HttpStatusCode.InternalServerError,
                        response.status)
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }

        fun `assign permission to role over file`(roleName: String, fileName: String, permission: PermissionType, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.post<HttpResponse>("https://127.0.0.1:8443${API.PROXY}permissions/${CoreType.RBAC_CLOUD}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                        body = listOf(ROLE_NAME to roleName, FILE_NAME to fileName, PERMISSION to permission.toString()).formUrlEncode()
                    }
                    Assertions.assertEquals(
                        if (expectedCode == OutcomeCode.CODE_000_SUCCESS)
                            HttpStatusCode.OK
                        else HttpStatusCode.InternalServerError,
                        response.status)
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }
        fun `revoke permission from role`(roleName: String, fileName: String, permission: PermissionType, expectedCode: OutcomeCode) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, ADMIN)
                    val response = it.delete<HttpResponse>("https://127.0.0.1:8443${API.PROXY}permissions/${CoreType.RBAC_CLOUD}/${roleName}/${fileName}/${permission}")
                    Assertions.assertEquals(
                        if (expectedCode == OutcomeCode.CODE_000_SUCCESS)
                            HttpStatusCode.OK
                        else HttpStatusCode.InternalServerError,
                        response.status)
                    Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                        Assertions.assertEquals(expectedCode, this)
                    }
                    logoutProxy(it)
                }
            }
        }

        fun `get profile`(
            username: String,
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
        ): CoreParameters? {
            var coreParameters: CoreParameters? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, loggedUser)
                    val response = it.get<HttpResponse>("https://127.0.0.1:8443${API.PROFILES.replace("{${SERVER.CORE}}", "${CoreType.RBAC_CLOUD}")}?$USERNAME=$username")

                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        Assertions.assertEquals(expectedStatus, response.status)
                        coreParameters = Json.decodeFromString<CoreParametersCloud>(response.readText()).apply {
                            Assertions.assertEquals(CoreType.RBAC_CLOUD, coreType)
                            Assertions.assertEquals(username, this.username)
                        }
                    }
                    else {
                        Assertions.assertEquals(expectedStatus, response.status)
                        Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                            Assertions.assertEquals(expectedCode, this)
                        }
                    }
                    logoutProxy(it)
                }
            }
            return coreParameters
        }
        fun `delete profile`(
            username: String,
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, loggedUser)
                    val response = it.delete<HttpResponse>("https://127.0.0.1:8443${API.PROFILES.replace("{${SERVER.CORE}}", "${CoreType.RBAC_CLOUD}")}$username")
                    Assertions.assertEquals(expectedStatus, response.status)
                    Assertions.assertEquals(expectedCode, Json.decodeFromString<OutcomeCode>(response.readText()))
                    logoutProxy(it)
                }
            }
        }
        fun `update profile`(
            coreParameters: CoreParameters,
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = coreParameters.username
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, loggedUser)
                    val response = it.patch<HttpResponse>("https://127.0.0.1:8443${API.PROFILES.replace("{${SERVER.CORE}}", "${coreParameters.coreType}")}") {
                        contentType(ContentType.Application.Json)
                        body = Json.encodeToString(coreParameters as CoreParametersCloud)
                    }
                    Assertions.assertEquals(expectedStatus, response.status)
                    Assertions.assertEquals(expectedCode, Json.decodeFromString<OutcomeCode>(response.readText()))
                    logoutProxy(it)
                }
            }
        }

        fun `get users`(expectedCode: OutcomeCode, loggedUser: String = ADMIN): HashSet<User>? {
            var users: HashSet<User>? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, loggedUser)
                    val response = it.get<HttpResponse>("https://127.0.0.1:8443${API.PROXY}users/${CoreType.RBAC_CLOUD}/")
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        Assertions.assertEquals(HttpStatusCode.OK, response.status)
                        users = Json.decodeFromString<HashSet<User>>(response.readText())
                    }
                    else {
                        Assertions.assertEquals(HttpStatusCode.InternalServerError, response.status)
                        Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                            Assertions.assertEquals(expectedCode, this)
                        }
                    }
                    logoutProxy(it)
                }
            }
            return users
        }
        fun `get assignments`(expectedCode: OutcomeCode, loggedUser: String = ADMIN): HashSet<RoleTuple>? {
            var roleTuples: HashSet<RoleTuple>? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, loggedUser)
                    val response = it.get<HttpResponse>("https://127.0.0.1:8443${API.PROXY}assignments/${CoreType.RBAC_CLOUD}/")
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        Assertions.assertEquals(HttpStatusCode.OK, response.status)
                        roleTuples = Json.decodeFromString<HashSet<RoleTuple>>(response.readText())
                    }
                    else {
                        Assertions.assertEquals(HttpStatusCode.InternalServerError, response.status)
                        Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                            Assertions.assertEquals(expectedCode, this)
                        }
                    }
                    logoutProxy(it)
                }
            }
            return roleTuples
        }
        fun `get permissions`(expectedCode: OutcomeCode, loggedUser: String = ADMIN): HashSet<PermissionTuple>? {
            var permissionTuples: HashSet<PermissionTuple>? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    loginProxy(it, loggedUser)
                    val response = it.get<HttpResponse>("https://127.0.0.1:8443${API.PROXY}permissions/${CoreType.RBAC_CLOUD}/")
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        Assertions.assertEquals(HttpStatusCode.OK, response.status)
                        permissionTuples = Json.decodeFromString<HashSet<PermissionTuple>>(response.readText())
                    }
                    else {
                        Assertions.assertEquals(HttpStatusCode.InternalServerError, response.status)
                        Json.decodeFromString<OutcomeCode>(response.readText()).apply {
                            Assertions.assertEquals(expectedCode, this)
                        }
                    }
                    logoutProxy(it)
                }
            }
            return permissionTuples
        }
    }
}