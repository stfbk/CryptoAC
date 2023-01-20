package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * A pair of asymmetric cryptographic keys can be for:
 * - ENC: encryption and decryption of data;
 * - SIG: signatures and verifications of data.
 */
@Serializable
enum class AsymKeysType {
    ENC, SIG
}