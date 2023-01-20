package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * An asymmetric key pair of the given [keysType] composed o
 * the (encoded and base-64 encoded) [private] and [public] keys
 */
@Serializable
data class AsymKeys(
    var private: String,
    var public: String,
    val keysType: AsymKeysType
)
