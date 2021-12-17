package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Parameters.cryptoObject
import eu.fbk.st.cryptoac.Parameters.dmInterfaceCloudParameters
import eu.fbk.st.cryptoac.Parameters.MMInterfaceMySQLParameters
import eu.fbk.st.cryptoac.Parameters.opaBaseAPI
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.core.elements.Role
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.PrivateKeyCryptoAC
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceCloud
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceMQTT
import eu.fbk.st.cryptoac.implementation.mm.*
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.cookies.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.runBlocking
import mu.KotlinLogging
import java.io.File

private val logger = KotlinLogging.logger {}

class TestUtilities {
    companion object {




        fun resetLocalProxy() {
            logger.warn { "Resetting (local) proxy" }
            File(USERS_PROFILE_DIRECTORY_PATH).deleteRecursively()
        }

        fun resetProxy() {
            logger.warn { "Resetting proxy" }
            // todo delete all users and profiles
        }


        fun resetDMCloud() {
            logger.warn { "Resetting Cloud DM" }

            val mm = MMInterfaceMySQL(MMInterfaceMySQLParameters)
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

            val dm = DMInterfaceCloud(dmInterfaceCloudParameters)
            assert(dm.lock() == OutcomeCode.CODE_000_SUCCESS)
            files.forEach {
                logger.warn { "Deleting file $it from the DM" }
                assert(dm.deleteFile(it) == OutcomeCode.CODE_000_SUCCESS)
            }
            assert(dm.unlock() == OutcomeCode.CODE_000_SUCCESS)
        }

        fun resetDMMQTT(dm: DMInterfaceMQTT) {
            logger.warn { "Resetting MQTT DM" }

            val mm = MMInterfaceMySQL(MMInterfaceMySQLParameters)
            assert(mm.lock() == OutcomeCode.CODE_000_SUCCESS)


            val users = HashSet<String>()
            mm.connection!!.prepareStatement(
                "SELECT $usernameColumn FROM $usersTable WHERE ($usernameColumn<>\"$ADMIN\")"
            ).use {
                val usernames = it.executeQuery()
                while (usernames.next()) {
                    users.add(usernames.getString(1))
                }
            }

            val roles = HashSet<String>()
            mm.connection!!.prepareStatement(
                "SELECT $roleNameColumn FROM $rolesTable WHERE ($roleNameColumn<>\"$ADMIN\")"
            ).use {
                val roleNames = it.executeQuery()
                while (roleNames.next()) {
                    roles.add(roleNames.getString(1))
                }
            }

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
                    // TODO configure this
                }.use {
                    assert(
                        it.delete<HttpResponse>("${API.HTTP}${opaBaseAPI}${API.OPA_RBAC_POLICY}").status ==
                                HttpStatusCode.OK
                    )
                    assert(
                        it.delete<HttpResponse>("${API.HTTP}${opaBaseAPI}${API.OPA_RBAC_DATA}").status ==
                                HttpStatusCode.NoContent
                    )
                }
            }
        }

        fun resetMMMySQL() {
            logger.warn { "Resetting MySQL" }

            val mm = MMInterfaceMySQL(MMInterfaceMySQLParameters)
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
                    type = AsymKeysType.ENC
                ),
                asymSigKeys = AsymKeys(
                    public = asymSigKeys.public.encoded.encodeBase64(),
                    private = asymSigKeys.private.encoded.encodeBase64(),
                    type = AsymKeysType.SIG
                )
            )
            val userCore = when (core.coreParameters.coreType) {
                CoreType.RBAC_CLOUD -> CoreFactory.getCore(
                    coreParameters = CoreParametersCLOUD(
                        user = user,
                        cryptoType = Parameters.cryptoType,
                        mmMySQLInterfaceParameters = (userParameters as CoreParametersCLOUD).mmMySQLInterfaceParameters,
                        rmCloudInterfaceParameters = userParameters.rmCloudInterfaceParameters,
                        dmCloudInterfaceParameters = userParameters.dmCloudInterfaceParameters,
                        opaInterfaceParameters = userParameters.opaInterfaceParameters,
                    ),
                )
                CoreType.RBAC_MQTT -> CoreFactory.getCore(
                    coreParameters = CoreParametersMQTT(
                        user = user,
                        cryptoType = Parameters.cryptoType,
                        mmMySQLInterfaceParameters = (userParameters as CoreParametersMQTT).mmMySQLInterfaceParameters,
                        dmMQTTInterfaceParameters = userParameters.dmMQTTInterfaceParameters
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

        fun addAndInitUser(coreRBAC: CoreRBAC, username: String): CoreRBAC {
            val core = addUser(coreRBAC, username)
            assert(core.initUser() == OutcomeCode.CODE_000_SUCCESS)
            return core
        }

        fun getKtorClientJetty(): HttpClient {
            return HttpClient(io.ktor.client.engine.jetty.Jetty) {
                expectSuccess = false
                install(HttpCookies) /** To accept all cookies */
                // TODO configure this, as for now the client accepts all certificates
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
    }
}

fun String.runCommand(workingDir: File): Process {
    val arguments = this.split(Regex(" (?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)")).map {
        it.replace("\"", "")
    }.toTypedArray()
    return ProcessBuilder(*arguments)
        .directory(workingDir)
        .redirectOutput(ProcessBuilder.Redirect.INHERIT)
        .redirectError(ProcessBuilder.Redirect.INHERIT)
        .start()
}
