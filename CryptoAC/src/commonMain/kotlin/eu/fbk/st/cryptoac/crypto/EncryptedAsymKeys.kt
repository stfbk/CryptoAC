package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * An encrypted asymmetric key pair of the given
 * [type] composed of [private] and [public] (not
 * empty) keys
 */
@Serializable
data class EncryptedAsymKeys(val private: ByteArray, val public: ByteArray, val type: AsymKeysType) {

    init {
        require(private.isNotEmpty()) { "No encrypted asymmetric private key was given" }
        require(public.isNotEmpty()) { "No encrypted asymmetric public key was given" }
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as EncryptedAsymKeys

        if (!private.contentEquals(other.private)) return false
        if (!public.contentEquals(other.public)) return false
        if (type != other.type) return false

        return true
    }

    override fun hashCode(): Int {
        var result = private.contentHashCode()
        result = 31 * result + public.contentHashCode()
        result = 31 * result + type.hashCode()
        return result
    }
}