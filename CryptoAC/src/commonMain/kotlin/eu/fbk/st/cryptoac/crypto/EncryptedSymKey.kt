package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/** An encrypted symmetric [key]. */
@Serializable
data class EncryptedSymKey(val key: ByteArray)