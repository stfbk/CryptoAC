package eu.fbk.st.cryptoac.crypto

import eu.fbk.st.cryptoac.crypto.openabe.CryptoOpenABE
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Factory for creating ABE Crypto objects */
class CryptoABEFactory {

    companion object {
        /** Return an ABE Crypto object of the given [type] */
        fun getCrypto(type: CryptoABEType): CryptoABE {
            logger.debug { "Creating ABE crypto object of type $type" }
            return when (type) {
                CryptoABEType.OPENABE -> CryptoOpenABE()
            }
        }
    }
}
