package eu.fbk.st.cryptoac.crypto.openabe

import eu.fbk.st.cryptoac.crypto.SecretKeyCryptoAC
import eu.fbk.st.cryptoac.crypto.SymmetricKeyCryptoAC

/**
 * A symmetric cryptographic key composed
 *  of a [secretKey] for the OpenABE library
 */
class SymmetricKeyOpenABE(override val secretKey: SecretKeyOpenABE) : SymmetricKeyCryptoAC(secretKey)

/** A secret cryptographic key for the OpenABE library */
class SecretKeyOpenABE(private val secretKey: ByteArray) : SecretKeyCryptoAC {
    override fun getAlgorithm() = "OpenABE"
    override fun getFormat() = "OpenABE"
    override fun getEncoded() = secretKey
}
