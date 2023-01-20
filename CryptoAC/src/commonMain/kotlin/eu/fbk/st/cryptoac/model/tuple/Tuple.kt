package eu.fbk.st.cryptoac.model.tuple

import eu.fbk.st.cryptoac.model.Element
import kotlinx.serialization.Serializable

/**
 * A Tuple links two or more UnitElements with additional metadata.
 * A Tuple has a (digital) [signature] and a [signer]
 */
@Serializable
sealed class Tuple : Element() {
    var signature: ByteArray? = null
    var signer: String? = null

    /**
     * Return the concatenation of all identifying
     * fields of the tuple for computing the digital signature
     */
    abstract fun getBytesForSignature(): ByteArray

    /** Update the [newSignature] and the user [newSigner] */
    open fun updateSignature(
        newSignature: ByteArray,
        newSigner: String,
    ) {
        signature = newSignature
        signer = newSigner
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as Tuple

        if (signature != null) {
            if (other.signature == null) return false
            if (!signature.contentEquals(other.signature)) return false
        } else if (other.signature != null) return false
        if (signer != other.signer) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + (signature?.contentHashCode() ?: 0)
        result = 31 * result + (signer?.hashCode() ?: 0)
        return result
    }
}
