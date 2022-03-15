package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.API.HTTPS
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple
import eu.fbk.st.cryptoac.core.tuples.RoleTuple
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Parameters.cryptoACBaseAPI
import eu.fbk.st.cryptoac.SERVER.ENFORCEMENT
import eu.fbk.st.cryptoac.SERVER.FILE_CONTENT
import eu.fbk.st.cryptoac.SERVER.FILE_NAME
import eu.fbk.st.cryptoac.SERVER.PERMISSION
import eu.fbk.st.cryptoac.SERVER.ROLE_NAME
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.core.elements.Role
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.http.Parameters
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import org.junit.Assert.assertEquals
import org.junit.jupiter.api.Assertions
import java.io.InputStream
import kotlin.io.use

class CryptoACUtilities {

    companion object {

        fun initAdminInRBAC_MOCK(
            coreParameters: CoreParameters, 
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, ADMIN)
                    val response = it.post {
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/")
                        contentType(ContentType.Application.Json)
                        setBody(coreParameters)
                    }
                    Assertions.assertEquals(HttpStatusCode.OK, response.status)
                    Assertions.assertEquals(OutcomeCode.CODE_000_SUCCESS, myJson.decodeFromString<OutcomeCode>(response.bodyAsText()))
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
                    val response = it.post {
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/")
                        contentType(ContentType.Application.Json)
                        setBody(coreParameters)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode != OutcomeCode.CODE_000_SUCCESS) {
                        assertEquals(expectedCode, myJson.decodeFromString<OutcomeCode>(response.bodyAsText()))
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
                    val response = it.submitForm(
                        formParameters = Parameters.build {
                            username?.let { it1 -> append(USERNAME, it1) }
                        }) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}users/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        coreParameters = myJson.decodeFromString<CoreParameters>(response.bodyAsText()).apply {
                            assertEquals(CoreType.RBAC_MOCK, coreType)
                            assertEquals(username, this.user.name)
                        }
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}users/${core}/${username}")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.submitForm(
                        formParameters = Parameters.build {
                            roleName?.let { it1 -> append(ROLE_NAME, it1) }
                        }) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}roles/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}roles/${core}/${roleName}")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.submitFormWithBinaryData(
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
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun addFileFormInRBAC_MOCK(
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
                    val response = it.submitForm(
                        formParameters = Parameters.build {
                            fileName?.let { it1 -> append(FILE_NAME, it1) }
                            enforcementType?.let { it1 -> append(ENFORCEMENT, it1) }
                        }) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/${fileName}")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    it.prepareGet(
                        "$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/${fileName}"
                    ).execute { response ->

                        assertEquals(expectedStatus, response.status)
                        if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                            inputStream = response.body<String>().inputStream()
                        } else {
                            myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                                assertEquals(expectedCode, this)
                            }
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


                    val response = it.submitFormWithBinaryData(
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
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun writeFileFormInRBAC_MOCK(
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
                    val response = it.submitFormPatch(
                        formParameters = Parameters.build {
                            fileName?.let { it1 -> append(FILE_NAME, it1) }
                            fileContent?.let { it1 -> append(FILE_CONTENT, it1) }
                        }) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.submitForm(
                        formParameters = Parameters.build {
                            username?.let { it1 -> append(USERNAME, it1) }
                            roleName?.let { it1 -> append(ROLE_NAME, it1) }
                        }) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}assignments/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}assignments/${core}/${username}/${roleName}")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.submitForm(
                        formParameters = Parameters.build {
                            roleName?.let { it1 -> append(ROLE_NAME, it1) }
                            fileName?.let { it1 -> append(FILE_NAME, it1) }
                            permission?.let { it1 -> append(PERMISSION, it1) }
                        }) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}permissions/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}permissions/${core}/${roleName}/${fileName}/${permission}")
                    }
                    assertEquals(expectedStatus, response.status)
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.get {
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/$username")
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        coreParameters = myJson.decodeFromString<CoreParameters>(response.bodyAsText()).apply {
                            assertEquals(CoreType.RBAC_MOCK, coreType)
                            assertEquals(username, this.user.name)
                        }
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/$username")
                    }
                    assertEquals(expectedStatus, response.status)
                    assertEquals(expectedCode, myJson.decodeFromString<OutcomeCode>(response.bodyAsText()))
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
                    val response = it.patch {
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/${CoreType.RBAC_MOCK}/")
                        contentType(ContentType.Application.Json)
                        setBody(coreParameters)
                    }
                    assertEquals(expectedStatus, response.status)
                    assertEquals(expectedCode, myJson.decodeFromString<OutcomeCode>(response.bodyAsText()))
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
                    val response = it.get {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}users/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        users = myJson.decodeFromString<HashSet<User>>(response.bodyAsText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.get {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}roles/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        roles = myJson.decodeFromString<HashSet<Role>>(response.bodyAsText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.get {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}files/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        files = myJson.decodeFromString<HashSet<File>>(response.bodyAsText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.get {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}assignments/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        roleTuples = myJson.decodeFromString<HashSet<RoleTuple>>(response.bodyAsText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
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
                    val response = it.get {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}permissions/${core}/")
                    }
                    assertEquals(expectedStatus, response.status)
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        permissionTuples = myJson.decodeFromString<HashSet<PermissionTuple>>(response.bodyAsText())
                    }
                    else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return permissionTuples
        }

        private suspend fun loginCryptoAC(client: HttpClient, username: String = ADMIN) {
            val response = client.submitForm(
                formParameters = Parameters.build {
                    append(USERNAME, username)
                }) {
                url("$HTTPS$cryptoACBaseAPI${API.LOGIN}")
            }
            assertEquals(HttpStatusCode.OK, response.status)
        }
        private suspend fun logoutCryptoAC(client: HttpClient) {
            val response = client.delete {
                url("$HTTPS$cryptoACBaseAPI${API.LOGOUT}")
            }
            assertEquals(HttpStatusCode.OK, response.status)
        }
    }
}