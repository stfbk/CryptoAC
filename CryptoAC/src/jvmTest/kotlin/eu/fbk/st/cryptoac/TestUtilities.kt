package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Parameters.cryptoObject
import eu.fbk.st.cryptoac.Parameters.dmInterfaceCryptoACParameters
import eu.fbk.st.cryptoac.Parameters.mmInterfaceMySQLParameters
import eu.fbk.st.cryptoac.Parameters.mmInterfaceRedisParameters
import eu.fbk.st.cryptoac.Parameters.opaBaseAPI
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.core.elements.Role
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.PrivateKeyCryptoAC
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceRBACCryptoAC
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceMosquitto
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceRBACMQTT
import eu.fbk.st.cryptoac.implementation.mm.*
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.*
import io.ktor.client.plugins.cookies.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.runBlocking
import mu.KotlinLogging
import redis.clients.jedis.JedisPool
import redis.clients.jedis.JedisPoolConfig
import java.io.*

private val logger = KotlinLogging.logger {}

class TestUtilities {
    companion object {

        val dir = File("../Documentation/Installation/")

        fun resetLocalCryptoAC() {
            logger.warn { "Resetting (local) CryptoAC" }
            File(USERS_PROFILE_DIRECTORY_PATH).deleteRecursively()
        }

        fun resetDMCloud() {
            logger.warn { "Resetting Cloud DM" }

            val mm = MMInterfaceMySQL(mmInterfaceMySQLParameters)
            assert(mm.lock() == OutcomeCode.CODE_000_SUCCESS)
            val files = HashSet<String>()
            mm.connection!!.prepareStatement(
                "SELECT $fileNameColumn FROM $filesTable"
            ).use {
                val fileNames = it.executeQuery()
                while (fileNames.next()) {
                    files.add(fileNames.getString(1))
                }
            }
            assert(mm.unlock() == OutcomeCode.CODE_000_SUCCESS)

            val dm = DMInterfaceRBACCryptoAC(dmInterfaceCryptoACParameters)
            assert(dm.lock() == OutcomeCode.CODE_000_SUCCESS)
            files.forEach {
                logger.warn { "Deleting file $it from the DM" }
                assert(dm.deleteFile(it) == OutcomeCode.CODE_000_SUCCESS)
            }
            assert(dm.unlock() == OutcomeCode.CODE_000_SUCCESS)
        }

        fun resetDMMQTT(dm: DMInterfaceRBACMQTT) {
            logger.warn { "Resetting MQTT DM" }
            dm as DMInterfaceMosquitto

            val mm = MMInterfaceRedis(mmInterfaceRedisParameters)
            assert(mm.lock() == OutcomeCode.CODE_000_SUCCESS)
            val users = mm.getUsers().filter { it.name != ADMIN }.map { it.name }
            val roles = mm.getRoles().filter { it.name != ADMIN }.map { it.name }
            val files = mm.getFiles().filter { it.name != ADMIN }.map { it.name }
            assert(mm.unlock() == OutcomeCode.CODE_000_SUCCESS)

            assert(dm.lock() == OutcomeCode.CODE_000_SUCCESS)

            files.forEach {
                logger.warn { "Deleting file $it from the DM" }
                assert(dm.deleteFile(it) == OutcomeCode.CODE_000_SUCCESS)
            }

            val rolesToDelete = hashSetOf<String>()
            roles.forEach {
                logger.warn { "Deleting role $it from the DM" }
                rolesToDelete.add(dm.getDeleteRoleCommand(it))
            }
            assert(dm.sendDynsecCommand(rolesToDelete) == OutcomeCode.CODE_000_SUCCESS)

            val usersToDelete = hashSetOf<String>()
            users.forEach {
                logger.warn { "Deleting user $it from the DM" }
                usersToDelete.add(dm.getDeleteClientCommand(it))
            }

            assert(dm.sendDynsecCommand(usersToDelete) == OutcomeCode.CODE_000_SUCCESS)

            assert(dm.unlock() == OutcomeCode.CODE_000_SUCCESS)
        }

        fun resetOPACloud() {
            logger.warn { "Resetting OPA" }

            runBlocking {
                HttpClient(CIO) {
                    expectSuccess = false
                    // TODO configure http client
                }.use {
                    assert(
                        it.delete {
                            url("${API.HTTP}${opaBaseAPI}${API.OPA_RBAC_POLICY}")
                        }.status ==
                                HttpStatusCode.OK
                    )
                    assert(
                        it.delete {
                            url("${API.HTTP}${opaBaseAPI}${API.OPA_RBAC_DATA}")
                        }.status ==
                                HttpStatusCode.NoContent
                    )
                }
            }
        }

        fun resetMMMySQL() {
            logger.warn { "Resetting MySQL" }

            val mm = MMInterfaceMySQL(mmInterfaceMySQLParameters)
            assert(mm.lock() == OutcomeCode.CODE_000_SUCCESS)

            val users = HashSet<String>()
            mm.connection!!.prepareStatement(
                "SELECT $usernameColumn FROM $usersTable"
            ).use {
                val usernames = it.executeQuery()
                while (usernames.next()) {
                    users.add(usernames.getString(1))
                }
                users.remove(ADMIN)
            }

            val deleteFrom = "DELETE FROM"
            mm.connection!!.prepareStatement("$deleteFrom $permissionTuplesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $roleTuplesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $fileTuplesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $usersTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $deletedUsersTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $rolesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $deletedRolesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $filesTable")
                .use { it.executeUpdate() }

            if (users.isNotEmpty()) {
                val u = StringBuilder("DROP USER IF EXISTS ")
                users.forEach { u.append("'").append(it).append("', ") }
                u.delete(u.length - 2, u.length)
                mm.connection!!.prepareStatement(u.toString()).use { it.executeUpdate() }
            }

            assert(mm.unlock() == OutcomeCode.CODE_000_SUCCESS)
        }

        fun resetMMRedis() {
            logger.warn { "Resetting Redis" }
            val pool = JedisPool(JedisPoolConfig(), mmInterfaceRedisParameters.url, mmInterfaceRedisParameters.port)
            pool.resource.use { jedis ->
                jedis.auth("default", mmInterfaceRedisParameters.password)
                jedis.keys("*").forEach {
                    jedis.del(it)
                }
            }
        }

        fun addUser(core: CoreRBAC, username: String): CoreRBAC {
            val addUserResult = core.addUser(username)
            assert(addUserResult.code == OutcomeCode.CODE_000_SUCCESS)
            val userParameters = addUserResult.parameters!!
            val asymEncKeys = cryptoObject.generateAsymEncKeys()
            val asymSigKeys = cryptoObject.generateAsymSigKeys()
            val user = User(
                name = username,
                isAdmin = false,
                asymEncKeys = AsymKeys(
                    public = asymEncKeys.public.encoded.encodeBase64(),
                    private = asymEncKeys.private.encoded.encodeBase64(),
                    keysType = AsymKeysType.ENC
                ),
                asymSigKeys = AsymKeys(
                    public = asymSigKeys.public.encoded.encodeBase64(),
                    private = asymSigKeys.private.encoded.encodeBase64(),
                    keysType = AsymKeysType.SIG
                )
            )
            val userCore = when (core.coreParameters.coreType) {
                CoreType.RBAC_CLOUD -> CoreFactory.getCore(
                    coreParameters = CoreParametersCLOUD(
                        user = user,
                        cryptoType = Parameters.cryptoType,
                        mmInterfaceParameters = (userParameters as CoreParametersCLOUD).mmInterfaceParameters,
                        rmInterfaceParameters = userParameters.rmInterfaceParameters,
                        dmInterfaceParameters = userParameters.dmInterfaceParameters,
                        opaInterfaceParameters = userParameters.opaInterfaceParameters,
                    ),
                )
                CoreType.RBAC_MQTT -> CoreFactory.getCore(
                    coreParameters = CoreParametersMQTT(
                        user = user,
                        cryptoType = Parameters.cryptoType,
                        mmInterfaceParameters = (userParameters as CoreParametersMQTT).mmInterfaceParameters,
                        dmInterfaceParameters = userParameters.dmInterfaceParameters
                    ),
                )
                CoreType.RBAC_MOCK -> CoreFactory.getCore(
                    coreParameters = CoreParametersMOCK(
                        user = user,
                        cryptoType = Parameters.cryptoType,
                    ),
                )
            } as CoreRBAC
            return userCore
        }

        fun getKtorClientJetty(): HttpClient {
            return HttpClient(io.ktor.client.engine.jetty.Jetty) {
                expectSuccess = false
                install(HttpCookies) /** To accept all cookies */
                install(ContentNegotiation) {
                    json(json = myJson)
                }
                // TODO configure http client, as for now the client accepts all certificates
                engine {
                    sslContextFactory.isTrustAll = true
                }
            }
        }

        fun createRole(roleName: String, roleVersionNumber: Int = 1): Role {
            val asymEncKeys = cryptoObject.generateAsymEncKeys()
            val asymSigKeys = cryptoObject.generateAsymSigKeys()
            return Role(
                name = roleName,
                asymEncKeys = AsymKeys(
                    private = asymEncKeys.private.encoded.encodeBase64(),
                    public = asymEncKeys.public.encoded.encodeBase64(),
                    AsymKeysType.ENC
                ),
                asymSigKeys = AsymKeys(
                    private = asymSigKeys.private.encoded.encodeBase64(),
                    public = asymSigKeys.public.encoded.encodeBase64(),
                    AsymKeysType.SIG
                ),
                versionNumber = roleVersionNumber,
            )
        }

        fun createFile(
            fileName: String,
            symEncKeyVersionNumber: Int = 1,
            enforcement: EnforcementType,
        ): eu.fbk.st.cryptoac.core.elements.File {
            return eu.fbk.st.cryptoac.core.elements.File(
                name = fileName,
                symEncKeyVersionNumber = symEncKeyVersionNumber,
                enforcement = enforcement
            )
        }

        fun createRoleTuple(username: String, role: Role): RoleTuple {
            val roleTuple = RoleTuple(
                username = username, roleName = role.name,
                encryptedAsymEncKeys = cryptoObject.encryptAsymKeys(Parameters.adminAsymEncKeys.public,
                    cryptoObject.recreateAsymKeyPair(
                        asymPublicKeyBytes = role.asymEncKeys!!.public.decodeBase64(),
                        asymPrivateKeyBytes = role.asymEncKeys!!.private.decodeBase64(),
                        AsymKeysType.ENC
                    ),
                    AsymKeysType.ENC),
                encryptedAsymSigKeys = cryptoObject.encryptAsymKeys(Parameters.adminAsymEncKeys.public,
                    cryptoObject.recreateAsymKeyPair(
                        asymPublicKeyBytes = role.asymSigKeys!!.public.decodeBase64(),
                        asymPrivateKeyBytes = role.asymSigKeys!!.private.decodeBase64(),
                        AsymKeysType.SIG
                    ),
                    AsymKeysType.SIG),
            )
            val signature = cryptoObject.createSignature(roleTuple.getBytesForSignature(), Parameters.adminAsymSigKeys.private)
            roleTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
            return roleTuple
        }

        fun createPermissionTuple(
            role: Role,
            file: eu.fbk.st.cryptoac.core.elements.File,
            permission: PermissionType = PermissionType.READ,
            signingKey: PrivateKeyCryptoAC = Parameters.adminAsymSigKeys.private
        ): PermissionTuple {
            val permissionTuple = PermissionTuple(
                roleName = role.name, fileName = file.name,
                roleToken = role.token, fileToken = file.token,
                permission = permission,
                roleVersionNumber = role.versionNumber, symKeyVersionNumber = file.symEncKeyVersionNumber,
                encryptedSymKey = cryptoObject.encryptSymKey(
                    cryptoObject.recreateAsymPublicKey(
                        asymPublicKeyBytes = role.asymEncKeys!!.public.decodeBase64(),
                        type = AsymKeysType.ENC
                    ),
                    cryptoObject.generateSymKey()
                )
            )
            val signature =
                cryptoObject.createSignature(permissionTuple.getBytesForSignature(), signingKey)
            permissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
            return permissionTuple
        }

        fun createFileTuple(
            file: eu.fbk.st.cryptoac.core.elements.File, enforcementType: EnforcementType = EnforcementType.COMBINED,
            signingKey: PrivateKeyCryptoAC = Parameters.adminAsymSigKeys.private
        ): FileTuple {
            val fileTuple = FileTuple(
                fileName = file.name, fileToken = file.token,
                roleToken = ADMIN,
                enforcement = enforcementType,
                symDecKeyVersionNumber = file.symEncKeyVersionNumber,
            )
            val signature = cryptoObject.createSignature(fileTuple.getBytesForSignature(), signingKey)
            fileTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
            return fileTuple
        }

        fun assertUnLockAndLock(mm: MMInterface) {
            assertUnlock(mm)
            assertLock(mm)
        }

        fun assertLock(mm: MMInterface) {
            assert(mm.lock() == OutcomeCode.CODE_000_SUCCESS)
        }

        fun assertUnlock(mm: MMInterface) {
            assert(mm.unlock() == OutcomeCode.CODE_000_SUCCESS)
        }

    }
}

/**
 * Execute the given string as a command for a ProcessBuilder,
 * setting the [workingDir] and waiting until the process sends
 * as output all strings contained in [endStrings]. For instance,
 * this is useful when you need to launch a command that takes some
 * time to execute, and you want to wait until its completion
 */
fun String.runCommand(workingDir: File, endStrings: HashSet<String>): Process {
    val arguments = this.split(Regex(" (?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)")).map {
        it.replace("\"", "")
    }.toTypedArray()
    val process = ProcessBuilder(*arguments)
        .directory(workingDir)
        .start()

    var output = ""
    var error = ""
    val inputStream = BufferedReader(InputStreamReader(process.inputStream))
    val errorStream = BufferedReader(InputStreamReader(process.errorStream))
    while (
        endStrings.isNotEmpty() &&
        (
            inputStream.readLine()?.also { output = it } != null ||
            errorStream.readLine()?.also { error = it } != null
        )
    ) {
        if (error != "") {
            println("runCommand [error]: $error")
            error = ""
        }
        if (output != "") {
            println("runCommand [output]: $output")
            endStrings.removeIf { output.contains(it) }
            output = ""
        }
    }
    inputStream.close()
    return process
}
