package eu.fbk.st.cryptoac.model.unit

import kotlinx.serialization.Serializable

/**
 * An attribute is an UnitElement representing an attribute
 * in an ABAC policy. An attribute is defined by a positive
 * [versionNumber]
 */
@Serializable
class Attribute(
    override val name: String,
    override val status: UnitElementStatus = UnitElementStatus.OPERATIONAL,
    val versionNumber: Int = 1,
) : UnitElement() {

    override var token = generateRandomTokenForAdmin(name)

    init {
        requirePositiveNumber(versionNumber)
    }

    /**
     * Return a String array of the
     * significant fields of this resource
     */
    override fun toArray(): Array<String> = arrayOf(
        name,
        status.toString(),
        versionNumber.toString(),
        token
    )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Attribute) return false
        if (!super.equals(other)) return false

        if (name != other.name) return false
        if (status != other.status) return false
        if (versionNumber != other.versionNumber) return false
        if (token != other.token) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + name.hashCode()
        result = 31 * result + status.hashCode()
        result = 31 * result + versionNumber
        result = 31 * result + token.hashCode()
        return result
    }
}
