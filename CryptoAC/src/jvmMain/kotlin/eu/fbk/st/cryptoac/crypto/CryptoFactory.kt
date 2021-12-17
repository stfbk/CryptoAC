package eu.fbk.st.cryptoac.crypto

import eu.fbk.st.cryptoac.crypto.java.CryptoJava
import eu.fbk.st.cryptoac.crypto.openssl.CryptoOpenSSL
import eu.fbk.st.cryptoac.crypto.sodium.CryptoSodium
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Factory for creating Crypto objects */
class CryptoFactory {

    companion object {
        /** Return a Crypto object of the given [type] configured with the given [parameters] */
        fun getCrypto(type: CryptoType, parameters: CryptoParameters? = null): Crypto {
            logger.debug { "Creating crypto object of type $type" }
            return when (type) {
                CryptoType.JAVA -> CryptoJava(parameters)
                CryptoType.SODIUM -> CryptoSodium(parameters)
            }
        }
    }
}