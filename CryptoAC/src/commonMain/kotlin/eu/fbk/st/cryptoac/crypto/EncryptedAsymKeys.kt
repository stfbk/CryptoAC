package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * An encrypted asymmetric key pair of the given
 * [keyType] composed of [private] and [public] (not
 * empty) keys with a [keyID]
 */
@Serializable
data class EncryptedAsymKeys(
    val private: ByteArray,
    val public: ByteArray,
    val keyType: AsymKeysType,
    val keyID: String? = null,
) {

    init {
        require(private.isNotEmpty()) { "No encrypted asymmetric private key was given" }
        require(public.isNotEmpty()) { "No encrypted asymmetric public key was given" }
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is EncryptedAsymKeys) return false

        if (!private.contentEquals(other.private)) return false
        if (!public.contentEquals(other.public)) return false
        if (keyType != other.keyType) return false
        if (keyID != other.keyID) return false

        return true
    }

    override fun hashCode(): Int {
        var result = private.contentHashCode()
        result = 31 * result + public.contentHashCode()
        result = 31 * result + keyType.hashCode()
        result = 31 * result + keyID.hashCode()
        return result
    }

}
