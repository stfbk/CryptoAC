package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * An encrypted asymmetric key pair of the given
 * [type] composed of [private] and [public].
 */
@Serializable
data class EncryptedAsymKeys(val private: ByteArray, val public: ByteArray, val type: AsymKeysType)