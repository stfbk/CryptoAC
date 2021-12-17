package eu.fbk.st.cryptoac.crypto

import java.security.PrivateKey
import java.security.PublicKey

/**
 * A pair of cryptographic keys composed of
 * a [public] key, a [private] key and a [type]
 */
open class KeyPairCryptoAC(
    open val public: PublicKeyCryptoAC,
    open val private: PrivateKeyCryptoAC,
    open val type: AsymKeysType,
)

/** Extend a generic public key */
interface PublicKeyCryptoAC : PublicKey

/** Extend a generic private key */
interface PrivateKeyCryptoAC : PrivateKey