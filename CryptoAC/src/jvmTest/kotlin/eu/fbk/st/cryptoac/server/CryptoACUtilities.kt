package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.API.HTTPS
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple
import eu.fbk.st.cryptoac.core.tuples.RoleTuple
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Parameters.cryptoACBaseAPI
import eu.fbk.st.cryptoac.SERVER.ENFORCEMENT
import eu.fbk.st.cryptoac.SERVER.FILE_NAME
import eu.fbk.st.cryptoac.SERVER.PERMISSION
import eu.fbk.st.cryptoac.SERVER.ROLE_NAME
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.core.elements.Role
import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.utils.io.jvm.javaio.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import org.junit.Assert.assertEquals
import org.junit.jupiter.api.Assertions
import java.io.InputStream

class CryptoACUtilities {

    companion object {

        fun initAdminInRBAC_MOCK(
            coreParameters: CoreParameters, 
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, ADMIN)
                    val response = it.post<HttpResponse>("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/") {
                        contentType(ContentType.Application.Json)
                        body = myJson.encodeToString(coreParameters)
                    }
                    Assertions.assertEquals(HttpStatusCode.OK, response.status)
                    Assertions.assertEquals(OutcomeCode.CODE_000_SUCCESS, myJson.decodeFromString<OutcomeCode>(response.readText()))
                    if (login) logoutCryptoAC(it)
                }
            }
        }
        
        fun initUserInRBAC_MOCK(
            coreParameters: CoreParameters, 
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK, 
            loggedUser: String = coreParameters.user.name, 
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.post<HttpResponse>("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/") {
                        contentType(ContentType.Application.Json)
                        body = myJson.encodeToString(coreParameters)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode != OutcomeCode.CODE_000_SUCCESS) {
                        assertEquals(expectedCode, myJson.decodeFromString<OutcomeCode>(response.readText()))
                    } else {
                        /** We do not care about mock core parameters */
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }
        
        fun addUserInRBAC_MOCK(
            username: String?,
            core: String? = CoreType.RBAC_MOCK.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ): CoreParameters? {
            var coreParameters: CoreParameters? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.post<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}users/${core}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                            body = listOf(USERNAME to username).formUrlEncode()
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        coreParameters = myJson.decodeFromString<CoreParameters>(response.readText()).apply {
                            assertEquals(CoreType.RBAC_MOCK, coreType)
                            assertEquals(username, this.user.name)
                        }
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return coreParameters
        }

       fun deleteUserInRBAC_MOCK(
           username: String?,
           core: String? = CoreType.RBAC_MOCK.toString(),
           expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
           expectedStatus: HttpStatusCode = HttpStatusCode.OK,
           loggedUser: String = ADMIN,
           login: Boolean = true,
       ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}users/${core}/${username}")
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }
        
        fun addRoleInRBAC_MOCK(
            roleName: String?,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.post<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}roles/${core}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                        body = listOf(ROLE_NAME to roleName).formUrlEncode()
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }
        
        fun deleteRoleInRBAC_MOCK(
            roleName: String,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}roles/${core}/${roleName}")
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun addFileBinaryInRBAC_MOCK(
            fileName: String?,
            fileContent: InputStream?,
            core: String? = CoreType.RBAC_MOCK.toString(),
            enforcementType: String?,
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.submitFormWithBinaryData<HttpResponse>(
                        url = "$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/",
                        formData = formData {
                            enforcementType?.let { it1 ->
                                append(
                                    key = ENFORCEMENT,
                                    value = it1
                                )
                            }
                            fileContent?.let { it1 ->
                                append(key = FILE_NAME, value = it1.readAllBytes(), Headers.build {
                                    if (fileName != null) {
                                        append(HttpHeaders.ContentDisposition, "filename=$fileName")
                                    }
                                })
                            }
                        }
                    )
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun addFileFormUrlEncodedInRBAC_MOCK(
            fileName: String?,
            core: String? = CoreType.RBAC_MOCK.toString(),
            enforcementType: String?,
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.post<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                        body = listOf(FILE_NAME to fileName, ENFORCEMENT to enforcementType).formUrlEncode()
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun deleteFileInRBAC_MOCK(
            fileName: String,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/${fileName}")
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }
        
        fun readFileInRBAC_MOCK(
            fileName: String,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ): InputStream? {
            var inputStream: InputStream? = null

            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.get<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/${fileName}")
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        inputStream = response.content.toInputStream().readAllBytes().inputStream()
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return inputStream
        }
        
        fun writeFileBinaryInRBAC_MOCK(
            fileName: String?,
            fileContent: InputStream?,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)


                    val response = it.submitFormWithBinaryData<HttpResponse>(
                        url = "$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/",
                        formData = formData {
                            fileContent?.let { it1 ->
                                append(key = FILE_NAME, value = it1.readAllBytes(), Headers.build {
                                    if (fileName != null) {
                                        append(HttpHeaders.ContentDisposition, "filename=$fileName")
                                    }
                                })
                            }
                        }
                    ) {
                        method = HttpMethod.Patch
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun writeFileFormUrlEncodedInRBAC_MOCK(
            fileName: String?,
            fileContent: String?,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.patch<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                        body = listOf(FILE_NAME to fileName, SERVER.FILE_CONTENT to fileContent).formUrlEncode()
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }


        fun assignUserToRoleInRBAC_MOCK(
            username: String?,
            roleName: String?,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.post<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}assignments/${core}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                        body = listOf(USERNAME to username, ROLE_NAME to roleName).formUrlEncode()
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }
        
        fun revokeUserFromRoleInRBAC_MOCK(
            username: String, 
            roleName: String,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}assignments/${core}/${username}/${roleName}")
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }
        
        fun assignPermissionToRoleInRBAC_MOCK(
            roleName: String?,
            fileName: String?,
            permission: String?,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.post<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}permissions/${core}/") {
                        contentType(ContentType.Application.FormUrlEncoded)
                        body = listOf(ROLE_NAME to roleName, FILE_NAME to fileName, PERMISSION to permission).formUrlEncode()
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }
        
        fun revokePermissionFromRoleInRBAC_MOCK(
            roleName: String, 
            fileName: String, 
            permission: String,
            core: String? = CoreType.RBAC_MOCK.toString(),
             expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, 
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}permissions/${core}/${roleName}/${fileName}/${permission}")
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun getProfileInRBAC_MOCK(
            username: String,
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ): CoreParameters? {
            var coreParameters: CoreParameters? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.get<HttpResponse>("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/$username")
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        coreParameters = myJson.decodeFromString<CoreParameters>(response.readText()).apply {
                            assertEquals(CoreType.RBAC_MOCK, coreType)
                            assertEquals(username, this.user.name)
                        }
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return coreParameters
        }
        
        fun deleteProfileInRBAC_MOCK(
            username: String,
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete<HttpResponse>("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/$username")
                    assertEquals(expectedStatus, response.status)
                    assertEquals(expectedCode, myJson.decodeFromString<OutcomeCode>(response.readText()))
                    if (login) logoutCryptoAC(it)
                }
            }
        }
        
        fun updateProfileInRBAC_MOCK(
            coreParameters: CoreParameters,
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = coreParameters.user.name,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.patch<HttpResponse>("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/") {
                        contentType(ContentType.Application.Json)
                        body = myJson.encodeToString(coreParameters)
                    }
                    assertEquals(expectedStatus, response.status)
                    assertEquals(expectedCode, myJson.decodeFromString<OutcomeCode>(response.readText()))
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun getUsers(
            core: String? = CoreType.RBAC_MOCK.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ): HashSet<User>? {
            var users: HashSet<User>? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.get<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}users/${core}/")
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        users = myJson.decodeFromString<HashSet<User>>(response.readText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return users
        }

        fun getRoles(
            core: String? = CoreType.RBAC_MOCK.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ): HashSet<Role>? {
            var roles: HashSet<Role>? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.get<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}roles/${core}/")
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        roles = myJson.decodeFromString<HashSet<Role>>(response.readText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return roles
        }

        fun getFiles(
            core: String? = CoreType.RBAC_MOCK.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ): HashSet<File>? {
            var files: HashSet<File>? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.get<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/")
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        files = myJson.decodeFromString<HashSet<File>>(response.readText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return files
        }
        
        fun getAssignments(
            core: String? = CoreType.RBAC_MOCK.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ): HashSet<RoleTuple>? {
            var roleTuples: HashSet<RoleTuple>? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.get<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}assignments/${core}/")
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        roleTuples = myJson.decodeFromString<HashSet<RoleTuple>>(response.readText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return roleTuples
        }
        
        fun getPermissions(
            core: String? = CoreType.RBAC_MOCK.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ): HashSet<PermissionTuple>? {
            var permissionTuples: HashSet<PermissionTuple>? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.get<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}permissions/${core}/")
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        permissionTuples = myJson.decodeFromString<HashSet<PermissionTuple>>(response.readText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.readText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return permissionTuples
        }

        private suspend fun loginCryptoAC(client: HttpClient, user: String = ADMIN) {
            val response = client.post<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.LOGIN}") {
                contentType(ContentType.Application.FormUrlEncoded)
                body = listOf(USERNAME to user).formUrlEncode()
            }
            assertEquals(HttpStatusCode.OK, response.status)
        }
        private suspend fun logoutCryptoAC(client: HttpClient) {
            val response = client.delete<HttpResponse>("$HTTPS$cryptoACBaseAPI${API.LOGOUT}")
            assertEquals(HttpStatusCode.OK, response.status)
        }
    }
}