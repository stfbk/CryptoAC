package eu.fbk.st.cryptoac

import com.typesafe.config.ConfigFactory
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Parameters.adminRoleTuple
import eu.fbk.st.cryptoac.Parameters.coreObjectAdmin
import eu.fbk.st.cryptoac.Parameters.ms
import eu.fbk.st.cryptoac.core.CoreFactory
import eu.fbk.st.cryptoac.core.CoreParametersCloud
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.CoreRBACCloud
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.proxy.*
import eu.fbk.st.cryptoac.proxy.ProxyUtilities
import eu.fbk.st.cryptoac.implementation.*
import eu.fbk.st.cryptoac.implementation.ms.*
import eu.fbk.st.cryptoac.implementation.rm.AddFileRequest
import eu.fbk.st.cryptoac.implementation.rm.WriteFileRequest
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.cookies.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.config.*
import io.ktor.http.*
import io.ktor.server.engine.*
import io.ktor.server.jetty.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.Assertions
import java.io.File
import java.io.InputStream
import java.security.KeyStore
import java.util.*
import kotlin.collections.HashSet


class TestUtilities {
    companion object {

        private var currentServer: JettyApplicationEngine? = null


        fun initAdminFromProxy() {
            runBlocking {
                getKtorClientJetty().use {
                    ProxyUtilities.loginProxy(it, ADMIN)
                    val response = it.post<HttpResponse>("https://127.0.0.1:8443${API.PROFILES.replace("{${SERVER.CORE}}", "${Parameters.adminCoreParameters.coreType}")}") {
                        contentType(ContentType.Application.Json)
                        body = Json.encodeToString(Parameters.adminCoreParameters)
                    }
                    Assertions.assertEquals(HttpStatusCode.OK, response.status)
                    Assertions.assertEquals(OutcomeCode.CODE_000_SUCCESS, Json.decodeFromString<OutcomeCode>(response.readText()))
                    ProxyUtilities.logoutProxy(it)
                }
            }
        }

        fun initAdminFromMetadataStorage() {
            assert(ms.initAdmin(Parameters.adminUser, adminRoleTuple) == OutcomeCode.CODE_000_SUCCESS)
        }

        fun initAdminFromCore() {
            assert(coreObjectAdmin.initAdmin() == OutcomeCode.CODE_000_SUCCESS)
        }



        fun startCloud() {
            currentServer = embeddedServer(Jetty, environment = applicationEngineEnvironment {
                config = HoconApplicationConfig(ConfigFactory.load())

                sslConnector(
                    keyStore = KeyStore.getInstance(File("server/temporary.jks"), "password".toCharArray()),
                    keyAlias = "alias",
                    keyStorePassword = { "password".toCharArray() },
                    privateKeyPassword = { "password".toCharArray() },
                ) {
                    port = config.property("ktor.deployment.port").getString().toInt()
                    host = "127.0.0.1"
                }
            })
            currentServer!!.start(wait = false)
        }

        fun stopCloud() {
            currentServer!!.stop(1000, 1000)
        }



        fun resetProxy() {
            File(USERS_PROFILE_DIRECTORY_PATH).deleteRecursively()
        }

        fun resetDSCloud() {
            File(DOWNLOAD_DIRECTORY.absolutePath).deleteRecursively()
            File(UPLOAD_DIRECTORY.absolutePath).deleteRecursively()
        }

        fun resetOPACloud() {
            runBlocking {
                getKtorClientCIO().use {
                    assert(
                        it.delete<HttpResponse>("${API.HTTP}${Parameters.opaInterface.opaBaseAPI}${API.OPA_RBAC_POLICY}").status ==
                                HttpStatusCode.OK
                    )
                    assert(
                        it.delete<HttpResponse>("${API.HTTP}${Parameters.opaInterface.opaBaseAPI}${API.OPA_RBAC_DATA}").status ==
                                HttpStatusCode.NoContent
                    )
                }
            }
        }

        fun resetMetadataStorageMySQL() {
            assert(ms.lock() == OutcomeCode.CODE_000_SUCCESS)

            val users = HashSet<String>()
            ms.connection!!.prepareStatement(
                "SELECT $usernameColumn FROM $usersTable"
            ).use {
                val usernames = it.executeQuery()
                while (usernames.next()) {
                    users.add(usernames.getString(1))
                }
                users.remove(ADMIN)
            }

            val deleteFrom = "DELETE FROM"
            ms.connection!!.prepareStatement("$deleteFrom $permissionTuplesTable")
                .use { it.executeUpdate() }
            ms.connection!!.prepareStatement("$deleteFrom $roleTuplesTable")
                .use { it.executeUpdate() }
            ms.connection!!.prepareStatement("$deleteFrom $fileTuplesTable")
                .use { it.executeUpdate() }
            ms.connection!!.prepareStatement("$deleteFrom $usersTable")
                .use { it.executeUpdate() }
            ms.connection!!.prepareStatement("$deleteFrom $deletedUsersTable")
                .use { it.executeUpdate() }
            ms.connection!!.prepareStatement("$deleteFrom $rolesTable")
                .use { it.executeUpdate() }
            ms.connection!!.prepareStatement("$deleteFrom $deletedRolesTable")
                .use { it.executeUpdate() }
            ms.connection!!.prepareStatement("$deleteFrom $filesTable")
                .use { it.executeUpdate() }

            if (users.isNotEmpty()) {
                val u = StringBuilder("DROP USER IF EXISTS ")
                users.forEach { u.append("'").append(it).append("', ") }
                u.delete(u.length - 2, u.length)
                ms.connection!!.prepareStatement(u.toString()).use { it.executeUpdate() }
            }

            assert(ms.unlock() == OutcomeCode.CODE_000_SUCCESS)
        }



        fun createAddFileRequest(fileName: String, roleName: String): AddFileRequest {
            val role = StorageUtilities.createRole(roleName = roleName)
            val file = StorageUtilities.createFile(fileName = fileName)
            val permissionTuple =
                StorageUtilities.createPermissionTuple(role, file, permission = PermissionType.READWRITE)
            val fileTuple = StorageUtilities.createFileTuple(file)
            return AddFileRequest(fileTuple, permissionTuple, 1)
        }

        fun createWriteFileRequest(fileName: String, fileToken: String, symKeyVersionNumber: Int): WriteFileRequest {
            val file = StorageUtilities.createFile(fileName = fileName, symEncKeyVersionNumber = symKeyVersionNumber)
            file.token = fileToken
            val fileTuple = StorageUtilities.createFileTuple(file)
            return WriteFileRequest(fileTuple, symKeyVersionNumber)
        }



        fun addFileInDSCloud(newFile: eu.fbk.st.cryptoac.core.elements.File, content: InputStream) {
            FileSystemManager.saveFile(
                path = "${UPLOAD_DIRECTORY.absolutePath}/${FileSystemManager.getFileKey(newFile.name, CoreType.RBAC_CLOUD)}",
                content = content,
                saveMode = FileSaveMode.THROW_EXCEPTION,
            )
        }

        fun deleteFileFromDSCloud(name: String) {
            File("${UPLOAD_DIRECTORY.absolutePath}/${
                FileSystemManager.getFileKey(name,
                    CoreType.RBAC_CLOUD)
            }").delete()
        }


        fun addUser(username: String): CoreRBACCloud {
            val addUserResult = coreObjectAdmin.addUser(username)
            assert(addUserResult.code == OutcomeCode.CODE_000_SUCCESS)
            val asymEncKeys = Parameters.cryptoObject.generateAsymEncKeys()
            val asymSigKeys = Parameters.cryptoObject.generateAsymSigKeys()
            return CoreFactory.getCore(
                coreParameters = CoreParametersCloud(
                    username = username, isAdmin = false,
                    asymEncPublicKeyBase64 = Base64.getEncoder().encodeToString(asymEncKeys.public.encoded),
                    asymEncPrivateKeyBase64 = Base64.getEncoder().encodeToString(asymEncKeys.private.encoded),
                    asymSigPublicKeyBase64 = Base64.getEncoder().encodeToString(asymSigKeys.public.encoded),
                    asymSigPrivateKeyBase64 = Base64.getEncoder().encodeToString(asymSigKeys.private.encoded),
                    coreType = CoreType.RBAC_CLOUD,
                    msMySQLInterfaceParameters = (addUserResult.parameters!! as CoreParametersCloud).msMySQLInterfaceParameters,
                    rmCloudInterfaceParameters = Parameters.rmParametersCloud,
                    dsCloudInterfaceParameters = Parameters.dsParametersCloud,
                    opaInterfaceParameters = Parameters.opaInterfaceParameters,
                ),
            ) as CoreRBACCloud
        }
        fun addAndInitUser(username: String): CoreRBACCloud {
            val userCore = addUser(username)
            assert(userCore.initUser() == OutcomeCode.CODE_000_SUCCESS)
            return userCore
        }
        fun getKtorClientJetty(): HttpClient {
            return HttpClient(io.ktor.client.engine.jetty.Jetty) {
                expectSuccess = false
                install(HttpCookies) /** To accept all cookies. */
                // TODO configure this, as for now the client accepts all certificates
                engine {
                    sslContextFactory.isTrustAll = true
                }
            }
        }
        fun getKtorClientCIO(): HttpClient {
            return HttpClient(CIO) {
                expectSuccess = false
                // TODO configure this
            }
        }
    }
}