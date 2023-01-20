package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.API.HTTPS
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Parameters.cryptoACBaseAPI
import eu.fbk.st.cryptoac.SERVER.ENFORCEMENT
import eu.fbk.st.cryptoac.SERVER.RESOURCE_CONTENT
import eu.fbk.st.cryptoac.SERVER.RESOURCE_NAME
import eu.fbk.st.cryptoac.SERVER.PERMISSION
import eu.fbk.st.cryptoac.SERVER.ROLE_NAME
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.model.unit.Resource
import eu.fbk.st.cryptoac.model.unit.Role
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.model.tuple.PermissionTuple
import eu.fbk.st.cryptoac.model.tuple.RoleTuple
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.myJson
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

        fun initAdmin(
            coreParameters: CoreParameters,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, ADMIN)
                    val response = it.post {
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/${coreParameters.coreType}/")
                        contentType(ContentType.Application.Json)
                        setBody(coreParameters)
                    }
                    Assertions.assertEquals(HttpStatusCode.OK, response.status)
                    Assertions.assertEquals(OutcomeCode.CODE_000_SUCCESS, myJson.decodeFromString<OutcomeCode>(response.bodyAsText()))
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun initUser(
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
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/${coreParameters.coreType}/")
                        contentType(ContentType.Application.Json)
                        setBody(coreParameters)
                    }
                    if (expectedCode != OutcomeCode.CODE_000_SUCCESS) {
                        assertEquals(expectedCode, myJson.decodeFromString<OutcomeCode>(response.bodyAsText()))
                    } else {
                        /** We do not care about mock core parameters */
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun addUser(
            username: String?,
            core: String = CoreType.RBAC_MQTT.toString(),
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
                        }
                    ) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}users/$core/")
                    }
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        coreParameters = myJson.decodeFromString<CoreParameters>(response.bodyAsText()).apply {
                            assertEquals(core, coreType.toString())
                            assertEquals(username, this.user.name)
                        }
                    } else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
            return coreParameters
        }

        fun deleteUser(
            username: String?,
            core: String? = CoreType.RBAC_MQTT.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}users/$core/$username")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun addRole(
            roleName: String?,
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                        }
                    ) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}roles/$core/")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun deleteRole(
            roleName: String,
            core: String? = CoreType.RBAC_MQTT.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}roles/$core/$roleName")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun addResourceBinary(
            resourceName: String?,
            resourceContent: InputStream?,
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                        url = "$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}resources/$core/",
                        formData = formData {
                            enforcementType?.let { it1 ->
                                append(
                                    key = ENFORCEMENT,
                                    value = it1
                                )
                            }
                            resourceContent?.let { it1 ->
                                append(
                                    key = RESOURCE_NAME, value = it1.readAllBytes(),
                                    Headers.build {
                                        if (resourceName != null) {
                                            append(HttpHeaders.ContentDisposition, "filename=$resourceName")
                                        }
                                    }
                                )
                            }
                        }
                    )
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun addResourceForm(
            resourceName: String?,
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                            resourceName?.let { it1 -> append(RESOURCE_NAME, it1) }
                            enforcementType?.let { it1 -> append(ENFORCEMENT, it1) }
                        }
                    ) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}resources/$core/")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun deleteResource(
            resourceName: String,
            core: String? = CoreType.RBAC_MQTT.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}resources/$core/$resourceName")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun readResource(
            resourceName: String,
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                        "$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}resources/$core/$resourceName"
                    ).execute { response ->
                        if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                            inputStream = response.body<String>().inputStream()
                        } else {
                            myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                                assertEquals(expectedCode, this)
                            }
                        }
                        assertEquals(expectedStatus, response.status)
                    }
                    if (login) logoutCryptoAC(it)
                }
            }
            return inputStream
        }

        fun writeResourceBinary(
            resourceName: String?,
            resourceContent: InputStream?,
            core: String? = CoreType.RBAC_MQTT.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)

                    val response = it.submitFormWithBinaryData(
                        url = "$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}resources/$core/",
                        formData = formData {
                            resourceContent?.let { it1 ->
                                append(
                                    key = RESOURCE_NAME, value = it1.readAllBytes(),
                                    Headers.build {
                                        if (resourceName != null) {
                                            append(HttpHeaders.ContentDisposition, "filename=$resourceName")
                                        }
                                    }
                                )
                            }
                        }
                    ) {
                        method = HttpMethod.Patch
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun writeResourceForm(
            resourceName: String?,
            resourceContent: String?,
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                            resourceName?.let { it1 -> append(RESOURCE_NAME, it1) }
                            resourceContent?.let { it1 -> append(RESOURCE_CONTENT, it1) }
                        }
                    ) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}resources/$core/")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun assignUserToRole(
            username: String?,
            roleName: String?,
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                        }
                    ) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}assignments/$core/")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun revokeUserFromRole(
            username: String,
            roleName: String,
            core: String? = CoreType.RBAC_MQTT.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
                runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}assignments/$core/$username/$roleName")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun assignPermissionToRole(
            roleName: String?,
            resourceName: String?,
            permission: String?,
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                            resourceName?.let { it1 -> append(RESOURCE_NAME, it1) }
                            permission?.let { it1 -> append(PERMISSION, it1) }
                        }
                    ) {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}permissions/$core/")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun revokePermissionFromRole(
            roleName: String,
            resourceName: String,
            permission: String,
            core: String? = CoreType.RBAC_MQTT.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}permissions/$core/$roleName/$resourceName/$permission")
                    }
                    myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                        assertEquals(expectedCode, this)
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun getProfile(
            username: String,
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/$core/$username")
                    }
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        coreParameters = myJson.decodeFromString<CoreParameters>(response.bodyAsText()).apply {
                            assertEquals(core, coreType.toString())
                            assertEquals(username, this.user.name)
                        }
                    } else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
            return coreParameters
        }

        fun deleteProfile(
            username: String,
            core: String? = CoreType.RBAC_MQTT.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ) {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.delete {
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/$core/$username")
                    }
                    assertEquals(expectedCode, myJson.decodeFromString<OutcomeCode>(response.bodyAsText()))
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun updateProfile(
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
                        url("$HTTPS$cryptoACBaseAPI/v1/profile/${coreParameters.coreType}/")
                        contentType(ContentType.Application.Json)
                        setBody(coreParameters)
                    }
                    assertEquals(expectedCode, myJson.decodeFromString<OutcomeCode>(response.bodyAsText()))
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
        }

        fun getUsers(
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}users/$core/")
                    }
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        users = myJson.decodeFromString<HashSet<User>>(response.bodyAsText())
                    } else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
            return users
        }

        fun getRoles(
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}roles/$core/")
                    }
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        roles = myJson.decodeFromString<HashSet<Role>>(response.bodyAsText())
                    } else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
            return roles
        }

        fun getResources(
            core: String? = CoreType.RBAC_MQTT.toString(),
            expectedCode: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
            expectedStatus: HttpStatusCode = HttpStatusCode.OK,
            loggedUser: String = ADMIN,
            login: Boolean = true,
        ): HashSet<Resource>? {
            var resources: HashSet<Resource>? = null
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    if (login) loginCryptoAC(it, loggedUser)
                    val response = it.get {
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}resources/$core/")
                    }
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        resources = myJson.decodeFromString<HashSet<Resource>>(response.bodyAsText())
                    } else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
            return resources
        }

        fun getAssignments(
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}assignments/$core/")
                    }
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        roleTuples = myJson.decodeFromString<HashSet<RoleTuple>>(response.bodyAsText())
                    } else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
            return roleTuples
        }

        fun getPermissions(
            core: String? = CoreType.RBAC_MQTT.toString(),
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
                        url("$HTTPS$cryptoACBaseAPI${API.CRYPTOAC}permissions/$core/")
                    }
                    if (expectedCode == OutcomeCode.CODE_000_SUCCESS) {
                        permissionTuples = myJson.decodeFromString<HashSet<PermissionTuple>>(response.bodyAsText())
                    } else {
                        myJson.decodeFromString<OutcomeCode>(response.bodyAsText()).apply {
                            assertEquals(expectedCode, this)
                        }
                    }
                    assertEquals(expectedStatus, response.status)
                    if (login) logoutCryptoAC(it)
                }
            }
            return permissionTuples
        }

        private suspend fun loginCryptoAC(client: HttpClient, username: String = ADMIN) {
            val response = client.submitForm(
                formParameters = Parameters.build {
                    append(USERNAME, username)
                }
            ) {
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
