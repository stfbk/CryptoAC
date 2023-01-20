package eu.fbk.st.cryptoac.crypto.java

import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.KeyPairCryptoAC
import eu.fbk.st.cryptoac.crypto.PrivateKeyCryptoAC
import eu.fbk.st.cryptoac.crypto.PublicKeyCryptoAC
import java.security.KeyPair
import java.security.PrivateKey
import java.security.PublicKey

/**
 * A pair of cryptographic keys composed of
 * a [public] key, a [private] key and a [keyType]
 * for the JCA
 */
class KeyPairJava(
    override val public: PublicKeyJava,
    override val private: PrivateKeyJava,
    override val keyType: AsymKeysType,
) : KeyPairCryptoAC(public, private, keyType)

/** A public cryptographic key for the JCA */
class PublicKeyJava(
    val public: PublicKey,
    override val keyID: String? = null,
) : PublicKeyCryptoAC {
    override fun getAlgorithm() = public.algorithm ?: "Algorithm is missing"
    override fun getFormat() = public.format ?: "Format is missing"
    override fun getEncoded() = public.encoded!!
}

/** A private cryptographic key for the JCA */
class PrivateKeyJava(
    val private: PrivateKey,
    override var keyID: String? = null,
) : PrivateKeyCryptoAC {
    override fun getAlgorithm() = private.algorithm ?: "Algorithm is missing"
    override fun getFormat() = private.format ?: "Format is missing"
    override fun getEncoded() = private.encoded!!
}

/** Extension function to convert a KeyPair to a KeyPairJava */
fun KeyPair.toKeyPairJava(type: AsymKeysType): KeyPairJava = KeyPairJava(
    public = PublicKeyJava(this.public),
    private = PrivateKeyJava(this.private),
    keyType = type
)
