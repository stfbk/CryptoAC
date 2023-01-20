package eu.fbk.st.cryptoac.crypto.java

import eu.fbk.st.cryptoac.crypto.*
import javax.crypto.SecretKey

/**
 * A symmetric cryptographic key
 * composed of a [secretKey] for the JCA
 */
class SymmetricKeyJava(override val secretKey: SecretKeyJava) : SymmetricKeyCryptoAC(secretKey)

/** A secret cryptographic key for the JCA */
class SecretKeyJava(private val secretKey: SecretKey) : SecretKeyCryptoAC {
    override fun getAlgorithm() = secretKey.algorithm ?: "Algorithm is missing"
    override fun getFormat() = secretKey.format ?: "Format is missing"
    override fun getEncoded() = secretKey.encoded!!
}

/** Extension function to convert a SecretKey to a SymmetricKeyJava */
fun SecretKey.toSymmetricKeyJava(): SymmetricKeyJava = SymmetricKeyJava(
    SecretKeyJava(this)
)
