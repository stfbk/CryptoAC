package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.core.CoreFactory
import eu.fbk.st.cryptoac.core.CoreParametersCloud
import eu.fbk.st.cryptoac.core.CoreRBAC
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.core.elements.Role
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.RoleTuple
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.implementation.ds.DSInterfaceCloudParameters
import eu.fbk.st.cryptoac.implementation.ds.DSInterfaceMQTTParameters
import eu.fbk.st.cryptoac.implementation.ms.MSInterfaceMySQL
import eu.fbk.st.cryptoac.implementation.ms.MSInterfaceMySQLParameters
import eu.fbk.st.cryptoac.implementation.opa.OPAInterface
import eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceCloudParameters
import java.util.*

/**
 * This object contains test parameters. Change the implementation of the cryptoObject
 * and coreObject to test different implementations of the DAO interfaces.
 */
object Parameters {


    /** Change these parameters depending on your deployment. */
    private const val LOCALHOST = "127.0.0.1" /** "berlatostefano-cryptoac-ms" if GitLab CI */
    private const val adminMySQLPassword = "password"
    const val MS_URL = "10.1.0.47"
    private const val MQTT_BROKER_PASSWORD = "password"
    private const val DS_URL = LOCALHOST
    private const val RM_URL = LOCALHOST
    private const val OPA_URL = "10.1.0.57"
    const val MS_PORT = 3306
    const val DEFAULT_PORT = 8443
    private const val DS_PORT = DEFAULT_PORT
    private const val RM_PORT = DEFAULT_PORT
    private const val OPA_PORT = 8181
    private val coreObjectType = CoreType.RBAC_CLOUD
    private val cryptoObjectType = CryptoType.JAVA
    val cryptoObject = CryptoFactory.getCrypto(cryptoObjectType)
    val adminAsymEncKeys = cryptoObject.generateAsymEncKeys()
    val adminAsymSigKeys = cryptoObject.generateAsymSigKeys()
    private val adminMSParametersMySQL = MSInterfaceMySQLParameters(username = ADMIN, port = MS_PORT, password = adminMySQLPassword, url = MS_URL)
    val rmParametersCloud = RMInterfaceCloudParameters(port = RM_PORT, url = RM_URL)
    val dsParametersCloud = DSInterfaceCloudParameters(port = DS_PORT, url = DS_URL)





    val dsInterfaceCloudParameters = DSInterfaceCloudParameters(
        port = DS_PORT, url = DS_URL
    )
    val rmInterfaceCloudParameters = RMInterfaceCloudParameters(
        port = RM_PORT, url = RM_URL
    )
    val dsInterfaceMQTTParameters = DSInterfaceMQTTParameters(
        port = DS_PORT, url = DS_URL, password = MQTT_BROKER_PASSWORD
    )
    val msInterfaceMySQLParameters = MSInterfaceMySQLParameters(
        port = MS_PORT, url = MS_URL, password = "password", username = "admin"
    )
    val opaInterfaceParameters = OPAInterfaceParameters(
        port = OPA_PORT, url = OPA_URL
    )



    val opaInterface = OPAInterface(opaInterfaceParameters)
    val ms = MSInterfaceMySQL(adminMSParametersMySQL)

    val adminCoreRBACCloudParameters = CoreParametersCloud(
        username = ADMIN, isAdmin = true,
        asymEncPublicKeyBase64 = Base64.getEncoder().encodeToString(adminAsymEncKeys.public.encoded),
        asymEncPrivateKeyBase64 = Base64.getEncoder().encodeToString(adminAsymEncKeys.private.encoded),
        asymSigPublicKeyBase64 = Base64.getEncoder().encodeToString(adminAsymSigKeys.public.encoded),
        asymSigPrivateKeyBase64 = Base64.getEncoder().encodeToString(adminAsymSigKeys.private.encoded),
        coreType = CoreType.RBAC_CLOUD,
        msMySQLInterfaceParameters = adminMSParametersMySQL,
        rmCloudInterfaceParameters = rmParametersCloud,
        dsCloudInterfaceParameters = dsParametersCloud,
        opaInterfaceParameters = opaInterfaceParameters
    )
    val adminCoreParameters = when (coreObjectType) {
        CoreType.RBAC_CLOUD -> adminCoreRBACCloudParameters
        CoreType.RBAC_MQTT -> adminCoreRBACCloudParameters // TODO change
    }


    private val aliceAsymEncKeys = cryptoObject.generateAsymEncKeys()
    private val aliceAsymSigKeys = cryptoObject.generateAsymSigKeys()
    val aliceUser = User(
        name = "alice",
        asymEncKeys = AsymKeys(private = aliceAsymEncKeys.private.encoded, public = aliceAsymEncKeys.private.encoded, AsymKeysType.ENC),
        asymSigKeys = AsymKeys(private = aliceAsymSigKeys.private.encoded, public = aliceAsymSigKeys.private.encoded, AsymKeysType.SIG),
    )
    private val aliceMSParametersMySQL = MSInterfaceMySQLParameters(
        username = aliceUser.name, port = MS_PORT, password = aliceUser.name, url = MS_URL
    )
    val aliceCoreRBACCloudParameters = CoreParametersCloud(
        username = aliceUser.name, isAdmin = aliceUser.isAdmin,
        asymEncPublicKeyBase64 = Base64.getEncoder().encodeToString(aliceAsymEncKeys.public.encoded),
        asymEncPrivateKeyBase64 = Base64.getEncoder().encodeToString(aliceAsymEncKeys.private.encoded),
        asymSigPublicKeyBase64 = Base64.getEncoder().encodeToString(aliceAsymSigKeys.public.encoded),
        asymSigPrivateKeyBase64 = Base64.getEncoder().encodeToString(aliceAsymSigKeys.private.encoded),
        coreType = CoreType.RBAC_CLOUD,
        msMySQLInterfaceParameters = aliceMSParametersMySQL,
        rmCloudInterfaceParameters = rmParametersCloud,
        dsCloudInterfaceParameters= dsParametersCloud,
        opaInterfaceParameters = opaInterfaceParameters
    )
    val coreObjectAlice = when (coreObjectType) {
        CoreType.RBAC_CLOUD -> CoreFactory.getCore(aliceCoreRBACCloudParameters, aliceUser)
        CoreType.RBAC_MQTT -> CoreFactory.getCore(aliceCoreRBACCloudParameters, aliceUser) // TODO change this
    }


    val adminUser = User(
        ADMIN, isAdmin = true,
        asymEncKeys = AsymKeys(private = adminAsymEncKeys.private.encoded, public = adminAsymEncKeys.private.encoded, AsymKeysType.ENC),
        asymSigKeys = AsymKeys(private = adminAsymSigKeys.private.encoded, public = adminAsymSigKeys.private.encoded, AsymKeysType.SIG),
    )
    val adminRole = Role(
        ADMIN,
        asymEncKeys = AsymKeys(private = adminAsymEncKeys.private.encoded, public = adminAsymEncKeys.private.encoded, AsymKeysType.ENC),
        asymSigKeys = AsymKeys(private = adminAsymSigKeys.private.encoded, public = adminAsymSigKeys.private.encoded, AsymKeysType.SIG),
    )
    val adminRoleTuple = RoleTuple(
        username = ADMIN, roleName = ADMIN,
        encryptedAsymEncKeys = cryptoObject.encryptAsymKeys(adminAsymEncKeys.public, adminAsymEncKeys, AsymKeysType.ENC),
        encryptedAsymSigKeys = cryptoObject.encryptAsymKeys(adminAsymEncKeys.public, adminAsymSigKeys, AsymKeysType.SIG),
    ).apply {
        val adminRoleTupleSignature = cryptoObject.createSignature(getBytesForSignature(), cryptoObject.recreateAsymKeys(asymPrivateKeyBytes = adminUser.asymSigKeys!!.private, type = AsymKeysType.SIG).private)
        updateSignature(adminRoleTupleSignature, ADMIN, ElementTypeWithKey.USER)
    }
    val coreObjectAdmin: CoreRBAC = when (coreObjectType) {
        CoreType.RBAC_CLOUD -> CoreFactory.getCore(adminCoreRBACCloudParameters, adminUser) as CoreRBAC
        CoreType.RBAC_MQTT -> CoreFactory.getCore(adminCoreRBACCloudParameters, adminUser) as CoreRBAC // TODO change this
    }

}

