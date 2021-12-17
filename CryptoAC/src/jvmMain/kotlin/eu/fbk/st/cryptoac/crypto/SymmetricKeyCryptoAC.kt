package eu.fbk.st.cryptoac.crypto

import javax.crypto.SecretKey

/** A symmetric cryptographic [secretKey] */
open class SymmetricKeyCryptoAC(
    open val secretKey: SecretKeyCryptoAC,
)

/** Extend a generic secret key */
interface SecretKeyCryptoAC : SecretKey
