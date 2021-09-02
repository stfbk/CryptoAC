package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/** An encrypted symmetric [key]. */
@Serializable
data class EncryptedSymKey(val key: ByteArray) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as EncryptedSymKey

        if (!key.contentEquals(other.key)) return false

        return true
    }

    override fun hashCode(): Int {
        return key.contentHashCode()
    }
}