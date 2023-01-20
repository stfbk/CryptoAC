package eu.fbk.st.cryptoac.crypto

import eu.fbk.st.cryptoac.crypto.java.CryptoJava
import eu.fbk.st.cryptoac.crypto.openabe.CryptoOpenABE
import eu.fbk.st.cryptoac.crypto.sodium.CryptoSodium
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Factory for creating PKE Crypto objects */
class CryptoPKEFactory {

    companion object {
        /** Return a Crypto PKE object of the given [type] */
        fun getCrypto(type: CryptoType): CryptoPKE {
            logger.debug { "Creating PKE crypto object of type $type" }
            return when (type) {
                CryptoType.JAVA -> CryptoJava()
                CryptoType.SODIUM -> CryptoSodium()
                CryptoType.OPENABE -> CryptoOpenABE()
            }
        }
    }
}
