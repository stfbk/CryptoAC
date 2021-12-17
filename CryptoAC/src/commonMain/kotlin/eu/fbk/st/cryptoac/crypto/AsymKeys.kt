package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * An asymmetric key pair of the given [type] composed o
 * the (encoded and base-64 encoded) [private] and [public] keys
 */
@Serializable
data class AsymKeys(var private: String, var public: String, val type: AsymKeysType)

/**
 * A pair of asymmetric cryptographic keys can be for:
 * - ENC: encryption and decryption of data;
 * - SIG: signatures and verifications of data
 */
@Serializable
enum class AsymKeysType {
    ENC, SIG
}