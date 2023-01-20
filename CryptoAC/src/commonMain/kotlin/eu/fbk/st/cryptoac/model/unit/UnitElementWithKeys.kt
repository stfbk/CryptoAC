package eu.fbk.st.cryptoac.model.unit

import eu.fbk.st.cryptoac.crypto.AsymKeys
import kotlinx.serialization.Serializable

/**
 * A UnitElementWithKeys is a UnitElement equipped with cryptographic keys.
 * A UnitElementWithKeys is defined by a pair of [asymEncKeys] and [asymSigKeys]
 */
@Serializable
abstract class UnitElementWithKeys : UnitElement() {
    abstract val asymEncKeys: AsymKeys?
    abstract val asymSigKeys: AsymKeys?

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as UnitElementWithKeys

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
