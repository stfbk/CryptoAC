package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.Parameters.adminUser
import eu.fbk.st.cryptoac.Parameters.cryptoPKEObject
import eu.fbk.st.cryptoac.Parameters.cryptoSKEObject
import eu.fbk.st.cryptoac.Parameters.dmServiceCryptoACParameters
import eu.fbk.st.cryptoac.Parameters.mmServiceABACMySQLParameters
import eu.fbk.st.cryptoac.Parameters.mmServiceRBACMySQLParameters
import eu.fbk.st.cryptoac.Parameters.mmServiceRBACRedisParameters
import eu.fbk.st.cryptoac.Parameters.opaBaseAPI
import eu.fbk.st.cryptoac.Parameters.xacmlAuthzForceBaseAPI
import eu.fbk.st.cryptoac.ac.ACFactory
import eu.fbk.st.cryptoac.ac.dynsec.ACServiceRBACDynSec
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.ACServiceRBACXACMLAuthzForce
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.getRoleNameFromPolicySetID
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.CoreType.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.PrivateKeyCryptoAC
import eu.fbk.st.cryptoac.dm.DMFactory.Companion.getDM
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceRBACCryptoAC
import eu.fbk.st.cryptoac.dm.mqtt.DMServiceMQTT
import eu.fbk.st.cryptoac.mm.MMFactory.Companion.getMM
import eu.fbk.st.cryptoac.mm.MMServiceABAC
import eu.fbk.st.cryptoac.mm.mysql.*
import eu.fbk.st.cryptoac.mm.mysql.MMServiceABACMySQL.Companion.accessStructureTuplesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceABACMySQL.Companion.attributeTuplesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceABACMySQL.Companion.attributesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceABACMySQL.Companion.deletedAttributesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceABACMySQL.Companion.masterPublicKeyTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.deletedResourcesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.deletedRolesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.deletedUsersTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.permissionTuplesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.resourceNameColumn
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.resourcesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.roleTuplesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.rolesTable
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.usernameColumn
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQL.Companion.usersTable
import eu.fbk.st.cryptoac.mm.redis.MMServiceRBACRedis
import eu.fbk.st.cryptoac.model.unit.*
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.plugins.cookies.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.serialization.kotlinx.xml.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.encodeToString
import mu.KotlinLogging
import nl.adaptivity.xmlutil.serialization.XML
import redis.clients.jedis.JedisPool
import redis.clients.jedis.JedisPoolConfig
import java.io.*
import java.security.cert.X509Certificate
import javax.net.ssl.X509TrustManager

private val logger = KotlinLogging.logger {}

class TestUtilities {
    companion object {

        val dir = File("../Documentation/Installation/")

        fun deleteLocalCryptoACUsersProfiles() {
            logger.warn { "Resetting Local CryptoAC" }
            File(USERS_PROFILE_DIRECTORY_PATH).deleteRecursively()
        }

        fun resetDMServiceRBACCryptoAC() {
            logger.warn { "Resetting DM Service RBAC CryptoAC" }

            val mm = MMServiceRBACMySQL(mmServiceRBACMySQLParameters)
            assert(mm.lock() == CODE_000_SUCCESS)
            val resources = HashSet<String>()
            mm.connection!!.prepareStatement(
                "SELECT $resourceNameColumn FROM $resourcesTable"
            ).use {
                val resourceNames = it.executeQuery()
                while (resourceNames.next()) {
                    resources.add(resourceNames.getString(1))
                }
            }
            assert(mm.unlock() == CODE_000_SUCCESS)

            val dm = DMServiceRBACCryptoAC(dmServiceCryptoACParameters)
            assert(dm.lock() == CODE_000_SUCCESS)
            resources.forEach {
                logger.warn { "Deleting resource $it from the DM" }
                assert(dm.deleteResource(it) == CODE_000_SUCCESS)
            }
            assert(dm.unlock() == CODE_000_SUCCESS)
        }

        fun resetDMServiceABACCryptoAC() {
//            logger.warn { "Resetting DM Service ABAC CryptoAC" }
//
//            val mm = MMServiceABACMySQL(mmServiceABACMySQLParameters)
//            assert(mm.lock() == OutcomeCode.CODE_000_SUCCESS)
//            val resources = HashSet<String>()
//            mm.connection!!.prepareStatement(
//                "SELECT $resourceNameColumn FROM $resourcesTable"
//            ).use {
//                val resourceNames = it.executeQuery()
//                while (resourceNames.next()) {
//                    resources.add(resourceNames.getString(1))
//                }
//            }
//            assert(mm.unlock() == OutcomeCode.CODE_000_SUCCESS)
//
//            val dm = DMServiceABACCryptoAC(dmServiceCryptoACParameters)
//            assert(dm.lock() == OutcomeCode.CODE_000_SUCCESS)
//            resources.forEach {
//                logger.warn { "Deleting resource $it from the DM" }
//                assert(dm.deleteResource(it) == OutcomeCode.CODE_000_SUCCESS)
//            }
//            assert(dm.unlock() == OutcomeCode.CODE_000_SUCCESS)
        }

        fun resetACServiceRBACDynSEC(
            ac: ACServiceRBACDynSec? = ACFactory.getAC(
                acParameters = Parameters.acServiceRBACDynSecParameters
            ) as ACServiceRBACDynSec
        ) {
            logger.warn { "Resetting AC Service RBAC DynSec" }
            ac as ACServiceRBACDynSec

            val mm = MMServiceRBACRedis(mmServiceRBACRedisParameters)
            assert(mm.lock() == CODE_000_SUCCESS)
            val users = mm.getUsers(
                status = UnitElementStatus.OPERATIONAL
            ).apply {
                addAll(mm.getUsers(
                    status = UnitElementStatus.INCOMPLETE
                ))
            }
            val roles = mm.getRoles(
                status = UnitElementStatus.OPERATIONAL
            ).apply {
                addAll(mm.getRoles(
                    status = UnitElementStatus.INCOMPLETE
                ))
            }
            assert(mm.unlock() == CODE_000_SUCCESS)

            assert(ac.lock() == CODE_000_SUCCESS)
            roles.forEach {
                val currentRoleName = it.name
                if (currentRoleName != ADMIN) {
                    logger.warn { "Deleting role $currentRoleName from the AC" }
                    ac.deleteRole(currentRoleName)
                }
            }

            users.forEach {
                val currentUsername = it.name
                if (currentUsername != ADMIN) {
                    logger.warn { "Deleting user $currentUsername from the AC" }
                    ac.deleteUser(currentUsername)
                }
            }
            assert(ac.unlock() == CODE_000_SUCCESS)
        }

        fun resetDMServiceRBACMQTT(
            dm: DMServiceMQTT? = getDM(
                dmParameters = Parameters.dmServiceMQTTParameters
            ) as DMServiceMQTT,
        ) {
            logger.warn { "Resetting DM Service RBAC MQTT" }
            dm as DMServiceMQTT

            val mm = MMServiceRBACRedis(mmServiceRBACRedisParameters)
            assert(mm.lock() == CODE_000_SUCCESS)
            val resources = mm.getResources().filter { it.name != ADMIN }.map { it.name }
            assert(mm.unlock() == CODE_000_SUCCESS)

            assert(dm.lock() == CODE_000_SUCCESS)
            resources.forEach {
                logger.warn { "Deleting resource $it from the DM" }
                assert(dm.deleteResource(it) == CODE_000_SUCCESS)
            }
            assert(dm.unlock() == CODE_000_SUCCESS)
        }


        fun resetDMServiceABACMQTT(
            dm: DMServiceMQTT? = getDM(
                dmParameters = Parameters.dmServiceMQTTParameters
            ) as DMServiceMQTT,
            mm: MMServiceABAC = getMM(
                mmParameters = mmServiceABACMySQLParameters
            ) as MMServiceABAC
        ) {
            logger.warn { "Resetting DM Service ABAC MQTT" }
            dm as DMServiceMQTT

            assert(mm.lock() == CODE_000_SUCCESS)
            val resources = mm.getResources().filter { it.name != ADMIN }.map { it.name }
            assert(mm.unlock() == CODE_000_SUCCESS)

            assert(dm.lock() == CODE_000_SUCCESS)
            resources.forEach {
                logger.warn { "Deleting resource $it from the DM" }
                assert(dm.deleteResource(it) == CODE_000_SUCCESS)
            }
            assert(dm.unlock() == CODE_000_SUCCESS)
        }

        fun resetACServiceRBCAOPA() {
            logger.warn { "Resetting OPA" }

            runBlocking {

                HttpClient(CIO) {
                    // TODO configure this, as for now the client accepts all certificates
                    engine {
                        https {
                            trustManager = object: X509TrustManager {
                                override fun checkClientTrusted(p0: Array<out X509Certificate>?, p1: String?) { }
                                override fun checkServerTrusted(p0: Array<out X509Certificate>?, p1: String?) { }
                                override fun getAcceptedIssuers(): Array<X509Certificate>? = null
                            }
                        }
                    }
                    install(ContentNegotiation) {
                        json(json = myJson)
                    }
                    expectSuccess = false
                    /** To accept all cookies */
                    install(HttpCookies)
                }.use {
                    assert(it.delete {
                        url("${API.HTTPS}${opaBaseAPI}${API.OPA_RBAC_POLICY}")
                    }.status == HttpStatusCode.OK)
                    assert(
                        it.delete {
                            url("${API.HTTPS}${opaBaseAPI}${API.OPA_RBAC_DATA}")
                        }.status ==
                            HttpStatusCode.NoContent
                    )
                }
            }
        }

        fun resetACServiceRBCAXACMLAuthzForce() {
            logger.warn { "Resetting AuthzForce XACML Server" }

            val ac = ACServiceRBACXACMLAuthzForce(Parameters.acServiceRBACXACMLAuthzForceParameters)
            assert(ac.lock() == CODE_000_SUCCESS)
            assert(ac.getDomainCryptoACID().code == CODE_000_SUCCESS)

            val policySetRootCode = ac.getRootPolicySet()
            assert(policySetRootCode.code == CODE_000_SUCCESS)
            val policySetRoot = policySetRootCode.xacmlPolicySetRoot!!

            val policySetsCode = ac.getPolicySetsInDomain()
            assert(policySetsCode.code == CODE_000_SUCCESS)

            policySetsCode.policySetsLinks!!.forEach {
                if (it.href != XACMLPolicySet.rootDefaultPolicySetId && it.href != XACMLPolicySet.rootPolicySetIdCryptoAC) {
                    policySetRoot.removeRPSandREPS(
                        roleName = getRoleNameFromPolicySetID(it.href)
                    )
                }
            }
            policySetRoot.updatePolicySetVersionNumber()
            assert(ac.addOrUpdatePolicySet(
                policySet = XML{ }.encodeToString(policySetRoot)
            ) == CODE_000_SUCCESS)


            policySetsCode.policySetsLinks!!.forEach {
                if (it.href != XACMLPolicySet.rootDefaultPolicySetId && it.href != XACMLPolicySet.rootPolicySetIdCryptoAC) {
                    ac.deletePolicySetByID(it.href)
                }
            }

            runBlocking {
                HttpClient(CIO) {
                    // TODO configure this, as for now the client accepts all certificates
                    engine {
                        https {
                            trustManager = object : X509TrustManager {
                                override fun checkClientTrusted(p0: Array<out X509Certificate>?, p1: String?) {}
                                override fun checkServerTrusted(p0: Array<out X509Certificate>?, p1: String?) {}
                                override fun getAcceptedIssuers(): Array<X509Certificate>? = null
                            }
                        }
                    }
                    install(ContentNegotiation) {
                        xml(format = XML { })
                    }
                    expectSuccess = false
                    /** To accept all cookies */
                    install(HttpCookies)
                }.use {
                    val xacmlDomainsURL = "${API.HTTPS}${xacmlAuthzForceBaseAPI}${API.XACML_AUTHZFORCE}${ac.getDomainCryptoACID().string}"
                    val xacmlResponse = it.delete {
                        header("Accept", "application/xml")
                        header("Content-Type", "application/xml;charset=UTF-8")
                        url(xacmlDomainsURL)
                    }
                    assert(xacmlResponse.status == HttpStatusCode.OK)
                }
            }

            assert(ac.lock() == CODE_000_SUCCESS)
        }

        fun resetMMServiceRBACMySQL() {
            logger.warn { "Resetting MM Service RBAC MySQL" }

            val mm = MMServiceRBACMySQL(mmServiceRBACMySQLParameters)
            assert(mm.lock() == CODE_000_SUCCESS)

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
            mm.connection!!.prepareStatement("$deleteFrom $usersTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $deletedUsersTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $rolesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $deletedRolesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $resourcesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $deletedResourcesTable")
                .use { it.executeUpdate() }

            if (users.isNotEmpty()) {
                val u = StringBuilder("DROP USER IF EXISTS ")
                users.forEach { u.append("'").append(it).append("', ") }
                u.delete(u.length - 2, u.length)
                mm.connection!!.prepareStatement(u.toString()).use { it.executeUpdate() }
            }

            assert(mm.unlock() == CODE_000_SUCCESS)
        }

        fun resetMMServiceABACMySQL() {
            logger.warn { "Resetting MM Service ABAC MySQL" }

            val mm = MMServiceABACMySQL(mmServiceABACMySQLParameters)
            assert(mm.lock() == CODE_000_SUCCESS)

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
            mm.connection!!.prepareStatement("$deleteFrom $masterPublicKeyTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $accessStructureTuplesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $attributeTuplesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $usersTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $deletedUsersTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $attributesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $deletedAttributesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $resourcesTable")
                .use { it.executeUpdate() }
            mm.connection!!.prepareStatement("$deleteFrom $deletedResourcesTable")
                .use { it.executeUpdate() }

            if (users.isNotEmpty()) {
                val u = StringBuilder("DROP USER IF EXISTS ")
                users.forEach { u.append("'").append(it).append("', ") }
                u.delete(u.length - 2, u.length)
                mm.connection!!.prepareStatement(u.toString()).use { it.executeUpdate() }
            }

            assert(mm.unlock() == CODE_000_SUCCESS)
        }

        fun resetMMServiceRBACRedis() {
            logger.warn { "Resetting MM Service RBAC Redis" }
            val pool = JedisPool(JedisPoolConfig(), mmServiceRBACRedisParameters.url, mmServiceRBACRedisParameters.port)
            pool.resource.use { jedis ->
                jedis.auth("default", mmServiceRBACRedisParameters.password)
                jedis.keys("*").forEach {
                    jedis.del(it)
                }
            }
        }

        fun addUser(core: Core, username: String): Core {
            val addUserResult = core.addUser(username)
            assert(addUserResult.code == CODE_000_SUCCESS)
            val userParameters = addUserResult.parameters!!
            val asymEncKeys = cryptoPKEObject.generateAsymEncKeys(
                keyID = "${username}PKE" // TODO check this ID is fine
            )
            val asymSigKeys = cryptoPKEObject.generateAsymSigKeys(
                keyID = "${username}PKSIG" // TODO check this ID is fine
            )
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
                RBAC_AT_REST -> CoreFactory.getCore(
                    coreParameters = CoreParametersRBAC(
                        user = user,
                        coreType = RBAC_AT_REST,
                        cryptoType = Parameters.cryptoType,
                        mmServiceParameters = userParameters.mmServiceParameters,
                        rmServiceParameters = userParameters.rmServiceParameters,
                        dmServiceParameters = userParameters.dmServiceParameters,
                        acServiceParameters = userParameters.acServiceParameters,
                    ),
                )
                RBAC_MQTT -> CoreFactory.getCore(
                    coreParameters = CoreParametersRBAC(
                        user = user,
                        coreType = RBAC_MQTT,
                        cryptoType = Parameters.cryptoType,
                        mmServiceParameters = userParameters.mmServiceParameters,
                        dmServiceParameters = userParameters.dmServiceParameters,
                        rmServiceParameters = null,
                        acServiceParameters = userParameters.acServiceParameters,
                    ),
                )
                ABAC_AT_REST -> CoreFactory.getCore(
                    coreParameters = CoreParametersABAC(
                        user = user,
                        coreType = ABAC_AT_REST,
                        cryptoType = Parameters.cryptoType,
                        cryptoABEType = Parameters.cryptoABEType,
                        rmServiceParameters = userParameters.rmServiceParameters,
                        mmServiceParameters = userParameters.mmServiceParameters,
                        dmServiceParameters = userParameters.dmServiceParameters,
                        acServiceParameters = userParameters.acServiceParameters,
                        abePublicParameters = Parameters.abePublicParameters
                    ),
                )
                ABAC_MQTT -> CoreFactory.getCore(
                    coreParameters = CoreParametersABAC(
                        user = user,
                        coreType = ABAC_MQTT,
                        cryptoType = Parameters.cryptoType,
                        cryptoABEType = Parameters.cryptoABEType,
                        rmServiceParameters = null,
                        mmServiceParameters = userParameters.mmServiceParameters,
                        dmServiceParameters = userParameters.dmServiceParameters,
                        acServiceParameters = userParameters.acServiceParameters,
                        abePublicParameters = Parameters.abePublicParameters
                    ),
                )
            }
            return userCore
        }

        fun getKtorClientJetty(): HttpClient {
            return HttpClient(io.ktor.client.engine.jetty.Jetty) {
                expectSuccess = false
                install(HttpCookies) /** To accept all cookies */
                install(ContentNegotiation) {
                    json(json = myJson)
                }
                engine {
                    sslContextFactory.isTrustAll = true
                }
            }
        }

        fun createUser(
            username: String,
            status: UnitElementStatus = UnitElementStatus.INCOMPLETE,
            isAdmin: Boolean = false
        ): User {
            val asymEncKeys = cryptoPKEObject.generateAsymEncKeys(
                keyID = "${username}PKE" // TODO check this ID is fine
            )
            val asymSigKeys = cryptoPKEObject.generateAsymSigKeys(
                keyID = "${username}PKSIG" // TODO check this ID is fine
            )
            return User(
                name = username,
                status = status,
                isAdmin = isAdmin,
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
            )
        }

        fun createRole(roleName: String, roleVersionNumber: Int = 1): Role {
            val asymEncKeys = cryptoPKEObject.generateAsymEncKeys(
                keyID = "${roleName}PKE" // TODO check this ID is fine
            )
            val asymSigKeys = cryptoPKEObject.generateAsymSigKeys(
                keyID = "${roleName}PKE" // TODO check this ID is fine
            )
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

        fun createAttribute(
            attributeName: String,
            attributeVersionNumber: Int = 1,
            status: UnitElementStatus = UnitElementStatus.OPERATIONAL,
        ): Attribute {
            return Attribute(
                name = attributeName,
                versionNumber = attributeVersionNumber,
                status = status
            )
        }

        fun createResource(
            resourceName: String,
            symEncKeyVersionNumber: Int = 1,
            enforcement: EnforcementType = EnforcementType.COMBINED,
        ): Resource {
            return Resource(
                name = resourceName,
                symEncKeyVersionNumber = symEncKeyVersionNumber,
                enforcement = enforcement
            )
        }

        fun createRoleTuple(username: String, role: Role): RoleTuple {
            val roleTuple = RoleTuple(
                username = username, roleName = role.name,
                encryptedAsymEncKeys = cryptoPKEObject.encryptAsymKeys(
                    Parameters.adminAsymEncKeys.public,
                    cryptoPKEObject.recreateAsymKeyPair(
                        asymPublicKeyBytes = role.asymEncKeys!!.public.decodeBase64(),
                        asymPrivateKeyBytes = role.asymEncKeys!!.private.decodeBase64(),
                        AsymKeysType.ENC
                    ),
                    AsymKeysType.ENC
                ),
                encryptedAsymSigKeys = cryptoPKEObject.encryptAsymKeys(
                    Parameters.adminAsymEncKeys.public,
                    cryptoPKEObject.recreateAsymKeyPair(
                        asymPublicKeyBytes = role.asymSigKeys!!.public.decodeBase64(),
                        asymPrivateKeyBytes = role.asymSigKeys!!.private.decodeBase64(),
                        AsymKeysType.SIG
                    ),
                    AsymKeysType.SIG
                ),
            )
            val signature = cryptoPKEObject.createSignature(
                bytes = roleTuple.getBytesForSignature(),
                signingKey = Parameters.adminAsymSigKeys.private
            )
            roleTuple.updateSignature(
                newSignature = signature,
                newSigner = ADMIN
            )
            return roleTuple
        }

        fun createPermissionTuple(
            role: Role,
            resource: Resource,
            permission: PermissionType = PermissionType.READ,
            signingKey: PrivateKeyCryptoAC = Parameters.adminAsymSigKeys.private
        ): PermissionTuple {
            val encryptedSymKey = cryptoPKEObject.encryptSymKey(
                cryptoPKEObject.recreateAsymPublicKey(
                    asymPublicKeyBytes = role.asymEncKeys!!.public.decodeBase64(),
                    type = AsymKeysType.ENC
                ),
                cryptoSKEObject.generateSymKey()
            )
            val permissionTuple = PermissionTuple(
                roleName = role.name,
                resourceName = resource.name,
                roleToken = role.token,
                resourceToken = resource.token,
                permission = permission,
                roleVersionNumber = role.versionNumber,
                symKeyVersionNumber = resource.symEncKeyVersionNumber,
                encryptingSymKey = encryptedSymKey,
                decryptingSymKey = encryptedSymKey
            )
            val signature =
                cryptoPKEObject.createSignature(
                    bytes = permissionTuple.getBytesForSignature(),
                    signingKey = signingKey
                )
            permissionTuple.updateSignature(
                newSignature = signature,
                newSigner = ADMIN
            )
            return permissionTuple
        }

        fun createAttributeTuple(
            username: String,
            attributeName: String,
            attributeValue: String? = null,
            signingKey: PrivateKeyCryptoAC = Parameters.adminAsymSigKeys.private
        ): AttributeTuple {
            val attributeTuple = AttributeTuple(
                username = username,
                attributeName = attributeName,
                attributeValue = attributeValue,
            )
            val signature =
                cryptoPKEObject.createSignature(
                    bytes = attributeTuple.getBytesForSignature(),
                    signingKey = signingKey
                )
            attributeTuple.updateSignature(
                newSignature = signature,
                newSigner = ADMIN
            )
            return attributeTuple
        }

        fun createAccessStructureTuple(
            accessStructure: String,
            resource: Resource,
            permission: PermissionType = PermissionType.READ,
            signingKey: PrivateKeyCryptoAC = Parameters.adminAsymSigKeys.private
        ): AccessStructureTuple {
            val encryptedSymKey = cryptoPKEObject.encryptSymKey(
                cryptoPKEObject.recreateAsymPublicKey(
                    asymPublicKeyBytes = adminUser.asymEncKeys!!.public.decodeBase64(),
                    type = AsymKeysType.ENC
                ),
                cryptoSKEObject.generateSymKey()
            )
            val accessStructureTuple = AccessStructureTuple(
                resourceName = resource.name,
                resourceToken = resource.token,
                accessStructure = accessStructure,
                permission = permission,
                symKeyVersionNumber = resource.symEncKeyVersionNumber,
                encryptingSymKey = encryptedSymKey,
                decryptingSymKey = encryptedSymKey
            )
            val signature =
                cryptoPKEObject.createSignature(
                    bytes = accessStructureTuple.getBytesForSignature(),
                    signingKey = signingKey
                )
            accessStructureTuple.updateSignature(
                newSignature = signature,
                newSigner = ADMIN
            )
            return accessStructureTuple
        }

        fun assertRollbackAndLock(service: Lockable) {
            assertRollback(service)
            assertLock(service)
        }

        fun assertUnLockAndLock(
            service: Lockable,
            lockCode: OutcomeCode = CODE_000_SUCCESS,
            unlockCode: OutcomeCode = CODE_000_SUCCESS
        ) {
            assertUnlock(service, unlockCode)
            assertLock(service, lockCode)
        }

        fun assertLock(
            service: Lockable,
            lockCode: OutcomeCode = CODE_000_SUCCESS
        ) {
            assert(service.lock() == lockCode)
        }

        fun assertUnlock(
            service: Lockable,
            unlockCode: OutcomeCode = CODE_000_SUCCESS
        ) {
            assert(service.unlock() == unlockCode)
        }

        fun assertRollback(service: Lockable) {
            assert(service.rollback() == CODE_000_SUCCESS)
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
        (inputStream.readLine()?.also { output = it } != null
        || errorStream.readLine()?.also { error = it } != null
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
