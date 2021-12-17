package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.core.elements.Role
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.RoleTuple
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceCloudParameters
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceMQTTParameters
import eu.fbk.st.cryptoac.implementation.mm.MMInterfaceMySQLParameters
import eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceCloudParameters

/**
 * This object contains test parameters. Change the implementation of the cryptoObject
 * and coreObject to test different implementations of the DAO interfaces
 */
object Parameters {

    /** Change these parameters to test different combinations */
    val cryptoType = CryptoType.JAVA
    val coreType = CoreType.RBAC_CLOUD

    private const val proxyURL = "0.0.0.0"
    private const val proxyPORT = "8443"
    const val proxyBaseAPI = "$proxyURL:$proxyPORT"

    val cryptoObject = CryptoFactory.getCrypto(cryptoType)
    val adminAsymEncKeys = cryptoObject.generateAsymEncKeys()
    val adminAsymSigKeys = cryptoObject.generateAsymSigKeys()
    val adminUser = User(
        ADMIN, isAdmin = true,
        asymEncKeys = AsymKeys(
            private = adminAsymEncKeys.private.encoded.encodeBase64(),
            public = adminAsymEncKeys.public.encoded.encodeBase64(),
            AsymKeysType.ENC
        ),
        asymSigKeys = AsymKeys(
            private = adminAsymSigKeys.private.encoded.encodeBase64(),
            public = adminAsymSigKeys.public.encoded.encodeBase64(),
            AsymKeysType.SIG
        ),
    )
    val adminRole = Role(
        ADMIN,
        asymEncKeys = AsymKeys(
            private = adminAsymEncKeys.private.encoded.encodeBase64(),
            public = adminAsymEncKeys.public.encoded.encodeBase64(),
            AsymKeysType.ENC
        ),
        asymSigKeys = AsymKeys(
            private = adminAsymSigKeys.private.encoded.encodeBase64(),
            public = adminAsymSigKeys.public.encoded.encodeBase64(),
            AsymKeysType.SIG
        ),
    )
    val adminRoleTuple = RoleTuple(
        username = ADMIN,
        roleName = ADMIN,
        encryptedAsymEncKeys = cryptoObject.encryptAsymKeys(
            encryptingKey = adminAsymEncKeys.public,
            asymKeys = adminAsymEncKeys,
            type = AsymKeysType.ENC
        ),
        encryptedAsymSigKeys = cryptoObject.encryptAsymKeys(
            encryptingKey = adminAsymEncKeys.public,
            asymKeys = adminAsymSigKeys,
            type = AsymKeysType.SIG
        )
    ).apply {
        updateSignature(
            newSignature = cryptoObject.createSignature(
                bytes = getBytesForSignature(),
                signingKey = adminAsymSigKeys.private
            ),
            newSigner = ADMIN,
            newSignerType = ElementTypeWithKey.USER,
        )
    }



    /** CLOUD Parameters */
    val dmInterfaceCloudParameters = DMInterfaceCloudParameters(
        port = 8443, url = "10.1.0.7"
    )
    val rmInterfaceCloudParameters = RMInterfaceCloudParameters(
        port = 8443, url = "10.1.0.6"
    )
    val MMInterfaceMySQLParameters = MMInterfaceMySQLParameters(
        port = 3306, url = "10.1.0.5", password = "password", username = "admin"
    )
    val opaInterfaceParameters = OPAInterfaceParameters(
        port = 8181, url = "10.1.0.8"
    )
    val adminCoreRBACCLOUDParameters = CoreParametersCLOUD(
        User(
            name = ADMIN,
            isAdmin = true,
            asymEncKeys = AsymKeys(
                public = adminAsymEncKeys.public.encoded.encodeBase64(),
                private = adminAsymEncKeys.private.encoded.encodeBase64(),
                type = AsymKeysType.ENC
            ),
            asymSigKeys = AsymKeys(
                public = adminAsymSigKeys.public.encoded.encodeBase64(),
                private = adminAsymSigKeys.private.encoded.encodeBase64(),
                type = AsymKeysType.SIG
            )
        ),
        cryptoType = cryptoType,
        mmMySQLInterfaceParameters = MMInterfaceMySQLParameters,
        rmCloudInterfaceParameters = rmInterfaceCloudParameters,
        dmCloudInterfaceParameters = dmInterfaceCloudParameters,
        opaInterfaceParameters = opaInterfaceParameters
    )



    /** MQTT Parameters */
    val dmInterfaceMQTTParameters = DMInterfaceMQTTParameters(
        port = 1883, url = "0.0.0.0", password = "password".toByteArray(), username = ADMIN
    )
    val adminCoreRBACMQTTParameters = CoreParametersMQTT(
        User(
            name = ADMIN,
            isAdmin = true,
            asymEncKeys = AsymKeys(
                public = adminAsymEncKeys.public.encoded.encodeBase64(),
                private = adminAsymEncKeys.private.encoded.encodeBase64(),
                type = AsymKeysType.ENC
            ),
            asymSigKeys = AsymKeys(
                public = adminAsymSigKeys.public.encoded.encodeBase64(),
                private = adminAsymSigKeys.private.encoded.encodeBase64(),
                type = AsymKeysType.SIG
            )
        ),
        cryptoType = cryptoType,
        mmMySQLInterfaceParameters = MMInterfaceMySQLParameters,
        dmMQTTInterfaceParameters = dmInterfaceMQTTParameters
    )
    val adminCoreRBACMOCKParameters = CoreParametersMOCK(
        user = adminUser,
        cryptoType = cryptoType,
    )


    val opaBaseAPI = "${opaInterfaceParameters.url}:${opaInterfaceParameters.port}"
    private val aliceAsymEncKeys = cryptoObject.generateAsymEncKeys()
    private val aliceAsymSigKeys = cryptoObject.generateAsymSigKeys()
    private const val aliceName = "alice"
    val aliceUser = User(
        name = aliceName,
        isAdmin = false,
        asymEncKeys = AsymKeys(
            public = aliceAsymEncKeys.public.encoded.encodeBase64(),
            private = aliceAsymEncKeys.private.encoded.encodeBase64(),
            type = AsymKeysType.ENC
        ),
        asymSigKeys = AsymKeys(
            public = aliceAsymSigKeys.public.encoded.encodeBase64(),
            private = aliceAsymSigKeys.private.encoded.encodeBase64(),
            type = AsymKeysType.SIG
        )
    )
    private val aliceCoreRBACCLOUDParameters = CoreParametersCLOUD(
        user = aliceUser,
        mmMySQLInterfaceParameters = MMInterfaceMySQLParameters(
            port = MMInterfaceMySQLParameters.port,
            url = MMInterfaceMySQLParameters.url,
            username = aliceName,
            password = aliceName,
        ),
        cryptoType = cryptoType,
        rmCloudInterfaceParameters = rmInterfaceCloudParameters,
        dmCloudInterfaceParameters = dmInterfaceCloudParameters,
        opaInterfaceParameters = opaInterfaceParameters
    )
    private val aliceCoreRBACMQTTParameters = CoreParametersMQTT(
        user = aliceUser,
        cryptoType = cryptoType,
        mmMySQLInterfaceParameters = MMInterfaceMySQLParameters(
            port = MMInterfaceMySQLParameters.port,
            url = MMInterfaceMySQLParameters.url,
            username = aliceName,
            password = aliceName,
        ),
        dmMQTTInterfaceParameters = DMInterfaceMQTTParameters(
            port = 1883,
            url = "0.0.0.0",
            password = aliceName.toByteArray(),
            username = aliceName,
        ),
    )
    private val aliceCoreRBACMOCKParameters = CoreParametersMOCK(
        user = aliceUser,
        cryptoType = cryptoType,
    )
    val aliceCoreParameters = when (coreType) {
        CoreType.RBAC_CLOUD -> aliceCoreRBACCLOUDParameters
        CoreType.RBAC_MQTT -> aliceCoreRBACMQTTParameters
        CoreType.RBAC_MOCK -> aliceCoreRBACMOCKParameters
    }


    private val bobAsymEncKeys = cryptoObject.generateAsymEncKeys()
    private val bobAsymSigKeys = cryptoObject.generateAsymSigKeys()
    private const val bobName = "bob"
    val bobUser = User(
        name = bobName,
        isAdmin = false,
        asymEncKeys = AsymKeys(
            public = bobAsymEncKeys.public.encoded.encodeBase64(),
            private = bobAsymEncKeys.private.encoded.encodeBase64(),
            type = AsymKeysType.ENC
        ),
        asymSigKeys = AsymKeys(
            public = bobAsymSigKeys.public.encoded.encodeBase64(),
            private = bobAsymSigKeys.private.encoded.encodeBase64(),
            type = AsymKeysType.SIG
        )
    )
    private val bobCoreRBACCLOUDParameters = CoreParametersCLOUD(
        user = bobUser,
        mmMySQLInterfaceParameters = MMInterfaceMySQLParameters(
            port = MMInterfaceMySQLParameters.port,
            url = MMInterfaceMySQLParameters.url,
            username = bobName,
            password = bobName,
        ),
        cryptoType = cryptoType,
        rmCloudInterfaceParameters = rmInterfaceCloudParameters,
        dmCloudInterfaceParameters = dmInterfaceCloudParameters,
        opaInterfaceParameters = opaInterfaceParameters
    )
    private val bobCoreRBACMQTTParameters = CoreParametersMQTT(
        user = bobUser,
        cryptoType = cryptoType,
        mmMySQLInterfaceParameters = MMInterfaceMySQLParameters(
            port = MMInterfaceMySQLParameters.port,
            url = MMInterfaceMySQLParameters.url,
            username = bobName,
            password = bobName,
        ),
        dmMQTTInterfaceParameters = DMInterfaceMQTTParameters(
            port = 1883,
            url = "0.0.0.0",
            password = aliceName.toByteArray(),
            username = aliceName,
        ),
    )
    private val bobCoreRBACMOCKParameters = CoreParametersMOCK(
        user = bobUser,
        cryptoType = cryptoType,
    )
    val bobCoreParameters = when (coreType) {
        CoreType.RBAC_CLOUD -> bobCoreRBACCLOUDParameters
        CoreType.RBAC_MQTT -> bobCoreRBACMQTTParameters
        CoreType.RBAC_MOCK -> bobCoreRBACMOCKParameters
    }

    private val carlAsymEncKeys = cryptoObject.generateAsymEncKeys()
    private val carlAsymSigKeys = cryptoObject.generateAsymSigKeys()
    private const val carlName = "carl"
    val carlUser = User(
        name = carlName,
        isAdmin = false,
        asymEncKeys = AsymKeys(
            public = carlAsymEncKeys.public.encoded.encodeBase64(),
            private = carlAsymEncKeys.private.encoded.encodeBase64(),
            type = AsymKeysType.ENC
        ),
        asymSigKeys = AsymKeys(
            public = carlAsymSigKeys.public.encoded.encodeBase64(),
            private = carlAsymSigKeys.private.encoded.encodeBase64(),
            type = AsymKeysType.SIG
        )
    )
    private val deniseAsymEncKeys = cryptoObject.generateAsymEncKeys()
    private val deniseAsymSigKeys = cryptoObject.generateAsymSigKeys()
    private const val deniseName = "denise"
    val deniseUser = User(
        name = deniseName,
        isAdmin = false,
        asymEncKeys = AsymKeys(
            public = deniseAsymEncKeys.public.encoded.encodeBase64(),
            private = deniseAsymEncKeys.private.encoded.encodeBase64(),
            type = AsymKeysType.ENC
        ),
        asymSigKeys = AsymKeys(
            public = deniseAsymSigKeys.public.encoded.encodeBase64(),
            private = deniseAsymSigKeys.private.encoded.encodeBase64(),
            type = AsymKeysType.SIG
        )
    )
}

