package eu.fbk.st.cryptoac.crypto.sodium

import eu.fbk.st.cryptoac.crypto.*

/**
 * A symmetric cryptographic key composed
 *  of a [secretKey] for the Sodium library
 */
class SymmetricKeySodium(override val secretKey: SecretKeySodium): SymmetricKeyCryptoAC(secretKey)

/** A secret cryptographic key for the Sodium library */
class SecretKeySodium(private val secretKey: UByteArray) : SecretKeyCryptoAC {
    override fun getAlgorithm() = "Sodium"
    override fun getFormat() = "Sodium"
    override fun getEncoded() = secretKey.toByteArray()
}