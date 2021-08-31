package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * An asymmetric key pair of the given
 * [type] composed of [private] and [public].
 */
@Serializable
data class AsymKeys(val private: ByteArray, val public: ByteArray, val type: AsymKeysType)

/**
 * A pair of asymmetric cryptographic keys can be for:
 * - ENC: encryption and decryption of data;
 * - SIG: signatures and verifications of data.
 */
@Serializable
enum class AsymKeysType {
    ENC, SIG
}