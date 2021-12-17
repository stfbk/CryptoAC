package eu.fbk.st.cryptoac.core.tuples

import eu.fbk.st.cryptoac.core.CryptoACObject
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import kotlinx.serialization.Serializable

/**
 * A Tuple links an Element with related metadata (e.g., other Elements).
 * A Tuple has a (digital) [signature], a [signer] and the [signerType]
 */
@Serializable
sealed class Tuple : CryptoACObject() {
    var signature: ByteArray? = null
    var signer: String? = null
    var signerType: ElementTypeWithKey? = null

    /** Return the concatenation of all identifying fields of the tuple for computing the digital signature */
    abstract fun getBytesForSignature(): ByteArray

    /** Update [newSignature], [newSigner] and [newSignerType] */
    open fun updateSignature(newSignature: ByteArray, newSigner: String, newSignerType: ElementTypeWithKey) {
        signature = newSignature
        signer = newSigner
        signerType = newSignerType
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
        if (signerType != other.signerType) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + (signature?.contentHashCode() ?: 0)
        result = 31 * result + (signer?.hashCode() ?: 0)
        result = 31 * result + (signerType?.hashCode() ?: 0)
        return result
    }
}