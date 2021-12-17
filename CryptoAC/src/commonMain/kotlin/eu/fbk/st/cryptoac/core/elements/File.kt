package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import kotlinx.serialization.Serializable

/**
 * A File is an Element representing an encrypted file.
 * A File is defined by a positive [symEncKeyVersionNumber]
 * and an [enforcement] type
 */
@Serializable
class File(
    override val name: String,
    override val status: ElementStatus = ElementStatus.OPERATIONAL,
    val symEncKeyVersionNumber: Int = 1,
    val enforcement: EnforcementType,
) : Element() {

    override var token = generateToken()

    /** Return a String array of the significant fields of this file */
    override fun toArray(): Array<String> = arrayOf(
        name, status.toString(), symEncKeyVersionNumber.toString(), token, enforcement.toString()
    )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as File

        if (name != other.name) return false
        if (status != other.status) return false
        if (symEncKeyVersionNumber != other.symEncKeyVersionNumber) return false
        if (enforcement != other.enforcement) return false
        if (token != other.token) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + name.hashCode()
        result = 31 * result + status.hashCode()
        result = 31 * result + symEncKeyVersionNumber
        result = 31 * result + enforcement.hashCode()
        result = 31 * result + token.hashCode()
        return result
    }


}