package eu.fbk.st.cryptoac.crypto

import java.security.PrivateKey
import java.security.PublicKey

/**
 * A pair of cryptographic keys composed of
 * a [public] key, a [private] key and a
 * [keyType]
 */
open class KeyPairCryptoAC(
    open val public: PublicKeyCryptoAC,
    open val private: PrivateKeyCryptoAC,
    open val keyType: AsymKeysType
)

/** Extend a generic public key with a [keyID] */
interface PublicKeyCryptoAC : PublicKey {
    val keyID: String?
}

/** Extend a generic private key with a [keyID] */
interface PrivateKeyCryptoAC : PrivateKey {
    var keyID: String?
}
