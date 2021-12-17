package eu.fbk.st.cryptoac.crypto.sodium

import com.ionspin.kotlin.crypto.box.BoxKeyPair
import com.ionspin.kotlin.crypto.signature.SignatureKeyPair
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.KeyPairCryptoAC
import eu.fbk.st.cryptoac.crypto.PrivateKeyCryptoAC
import eu.fbk.st.cryptoac.crypto.PublicKeyCryptoAC

/**
 * A pair of cryptographic keys composed of
 * a [public] key, a [private] key and a [type]
 * for the Sodium library
 */
class KeyPairSodium(
    override val public: PublicKeySodium,
    override val private: PrivateKeySodium,
    override val type: AsymKeysType,
): KeyPairCryptoAC(public, private, type)

/** A public cryptographic key for the Sodium library */
class PublicKeySodium(val public: UByteArray) : PublicKeyCryptoAC {
    override fun getAlgorithm() = "Sodium"
    override fun getFormat() = "Sodium"
    override fun getEncoded() = public.toByteArray()
}

/** A private cryptographic key for the Sodium library */
class PrivateKeySodium(val private: UByteArray) : PrivateKeyCryptoAC {
    override fun getAlgorithm() = "Sodium"
    override fun getFormat() = "Sodium"
    override fun getEncoded() = private.toByteArray()
}

/** Extension function to convert a BoxKeyPair to a KeyPairSodium */
fun BoxKeyPair.toKeyPairSodium(): KeyPairSodium = KeyPairSodium(
    public = PublicKeySodium(this.publicKey),
    private = PrivateKeySodium(this.secretKey),
    type = AsymKeysType.ENC,
)

/** Extension function to convert a SignatureKeyPair to a KeyPairSodium */
fun SignatureKeyPair.toKeyPairSodium(): KeyPairSodium = KeyPairSodium(
    public = PublicKeySodium(this.publicKey),
    private = PrivateKeySodium(this.secretKey),
    type = AsymKeysType.SIG,
)

