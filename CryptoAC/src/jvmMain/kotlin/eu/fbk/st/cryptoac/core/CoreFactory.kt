package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.CryptoFactory
import eu.fbk.st.cryptoac.cryptoImplementation
import mu.KotlinLogging
import java.util.*

private val logger = KotlinLogging.logger {}

/** Factory for creating Core objects. */
class CoreFactory {

    companion object {
        /**
         * Return a Core object configured with the given [coreParameters].
         * If the [user] is specified, use it instead of the keys, name and
         * admin flag in the [coreParameters].
         */
        fun getCore(coreParameters: CoreParameters, user: User? = null): Core {
            logger.debug { "Creating core object of type ${coreParameters.coreType}" }
            val cryptoObject = CryptoFactory.getCrypto(cryptoImplementation)
            val coreUser = user ?: User(coreParameters.username,
                    asymEncKeys = AsymKeys(
                        public = Base64.getDecoder().decode(coreParameters.asymEncPublicKeyBase64),
                        private = Base64.getDecoder().decode(coreParameters.asymEncPrivateKeyBase64),
                        type = AsymKeysType.ENC
                    ),
                    asymSigKeys = AsymKeys(
                        public = Base64.getDecoder().decode(coreParameters.asymSigPublicKeyBase64),
                        private = Base64.getDecoder().decode(coreParameters.asymSigPrivateKeyBase64),
                        type = AsymKeysType.SIG
                    ),
                    isAdmin = coreParameters.isAdmin)
            return when (coreParameters.coreType) {
                CoreType.RBAC_CLOUD -> {
                    if (coreParameters is CoreParametersCloud) {
                        CoreRBACCloud(
                            user = coreUser,
                            crypto = cryptoObject,
                            coreParametersCloud = coreParameters,
                        )
                    } else {
                        val message = "Received wrong parameters for core type ${CoreType.RBAC_CLOUD}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
                CoreType.RBAC_MQTT -> {
                    if (coreParameters is CoreParametersMQTT) {
                        CoreRBACMQTT(
                            user = coreUser,
                            crypto = cryptoObject,
                            coreParametersMQTT = coreParameters,
                        )
                    } else {
                        val message = "Received wrong parameters for core type ${CoreType.RBAC_MQTT}"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            }
        }
    }
}