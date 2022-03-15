package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.crypto.AsymKeys
import kotlinx.serialization.Serializable

/**
 * An ActiveElement is an Element equipped with cryptographic keys.
 * An ActiveElement is defined by a pair of [asymEncKeys] and [asymSigKeys]
 */
@Serializable
abstract class ActiveElement : Element() {
    abstract val asymEncKeys: AsymKeys?
    abstract val asymSigKeys: AsymKeys?

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as ActiveElement

        if (asymEncKeys != other.asymEncKeys) return false
        if (asymSigKeys != other.asymSigKeys) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + (asymEncKeys?.hashCode() ?: 0)
        result = 31 * result + (asymSigKeys?.hashCode() ?: 0)
        return result
    }
}