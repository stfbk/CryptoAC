package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.crypto.AsymKeys
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

/**
 * A Role is an ActiveElement representing a role.
 * A Role is defined by a positive [versionNumber]
 */
@Serializable
class Role(
    override val name: String,
    override val status: ElementStatus = ElementStatus.OPERATIONAL,
    @Transient override val asymEncKeys: AsymKeys? = null, @Transient override val asymSigKeys: AsymKeys? = null,
    val versionNumber: Int = 1,
) : ActiveElement() {

    init {
        requirePositiveNumber(versionNumber)
    }

    override var token: String = generateRandomTokenForAdmin(name)

    /** Return a String array of the significant fields of this role */
    override fun toArray(): Array<String> = arrayOf(name, status.toString(), token)

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as Role

        if (name != other.name) return false
        if (status != other.status) return false
        if (asymEncKeys != other.asymEncKeys) return false
        if (asymSigKeys != other.asymSigKeys) return false
        if (versionNumber != other.versionNumber) return false
        if (token != other.token) return false

        return true
    }

    override fun hashCode(): Int {
        var result = name.hashCode()
        result = 31 * result + status.hashCode()
        result = 31 * result + (asymEncKeys?.hashCode() ?: 0)
        result = 31 * result + (asymSigKeys?.hashCode() ?: 0)
        result = 31 * result + versionNumber
        result = 31 * result + token.hashCode()
        return result
    }
}
