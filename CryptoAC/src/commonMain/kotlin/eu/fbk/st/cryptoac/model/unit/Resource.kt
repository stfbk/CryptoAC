package eu.fbk.st.cryptoac.model.unit

import kotlinx.serialization.Serializable

/**
 * A Resource is an UnitElement representing a resource (e.g.,
 * file, MQTT topic).
 * A Resource is defined by a positive [symEncKeyVersionNumber],
 * a positive [symDecKeyVersionNumber] (which is minor than
 * or equal to [symEncKeyVersionNumber] and an [enforcement] type
 */
@Serializable
class Resource(
    override val name: String,
    override val status: UnitElementStatus = UnitElementStatus.OPERATIONAL,
    val symEncKeyVersionNumber: Int = 1,
    val symDecKeyVersionNumber: Int = 1,
    val enforcement: EnforcementType,
) : UnitElement() {

    override var token = generateRandomToken()

    init {
        requirePositiveNumber(symEncKeyVersionNumber)
        requirePositiveNumber(symDecKeyVersionNumber)
        if (symDecKeyVersionNumber > symEncKeyVersionNumber) {
            throw IllegalArgumentException(
                "The decrypting version number cannot be " +
                "greater than the encrypting version number"
            )
        }
    }

    /**
     * Return a String array of the
     * significant fields of this resource
     */
    override fun toArray(): Array<String> = arrayOf(
        name,
        status.toString(),
        symEncKeyVersionNumber.toString(),
        symDecKeyVersionNumber.toString(),
        token,
        enforcement.toString(),
    )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Resource) return false
        if (!super.equals(other)) return false

        if (name != other.name) return false
        if (status != other.status) return false
        if (symEncKeyVersionNumber != other.symEncKeyVersionNumber) return false
        if (symDecKeyVersionNumber != other.symDecKeyVersionNumber) return false
        if (enforcement != other.enforcement) return false
        if (token != other.token) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + name.hashCode()
        result = 31 * result + status.hashCode()
        result = 31 * result + symEncKeyVersionNumber
        result = 31 * result + symDecKeyVersionNumber
        result = 31 * result + enforcement.hashCode()
        result = 31 * result + token.hashCode()
        return result
    }
}
