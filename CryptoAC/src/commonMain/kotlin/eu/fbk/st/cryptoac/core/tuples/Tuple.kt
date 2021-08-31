package eu.fbk.st.cryptoac.core.tuples

import eu.fbk.st.cryptoac.core.CryptoACObject
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import kotlinx.serialization.Serializable

/**
 * A Tuple links an Element with related metadata (e.g., other Elements).
 * A Tuple has a (digital) [signature], a [signer] and the [signerType].
 */
@Serializable
sealed class Tuple : CryptoACObject() {
    var signature: ByteArray? = null
    var signer: String? = null
    var signerType: ElementTypeWithKey? = null

    /** Return the concatenation of all identifying fields of the tuple for computing the digital signature. */
    abstract fun getBytesForSignature(): ByteArray

    /** Update [newSignature], [newSigner] and [newSignerType]. */
    open fun updateSignature(newSignature: ByteArray, newSigner: String, newSignerType: ElementTypeWithKey) {
        signature = newSignature
        signer = newSigner
        signerType = newSignerType
    }
}