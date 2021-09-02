package eu.fbk.st.cryptoac.core.elements

import kotlinx.serialization.Serializable

/**
 * A File is an Element representing an encrypted file.
 * A File is defined by a positive [symEncKeyVersionNumber].
 */
@Serializable
class File(
    override val name: String,
    override val status: ElementStatus = ElementStatus.OPERATIONAL,
    val symEncKeyVersionNumber: Int = 1) : Element() {

    override var token = this.generateToken()

    /** Return a String array of the significant fields of this file. */
    override fun toArray(): Array<String> = arrayOf(name, status.toString(), symEncKeyVersionNumber.toString(), token)

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as File

        if (name != other.name) return false
        if (status != other.status) return false
        if (symEncKeyVersionNumber != other.symEncKeyVersionNumber) return false
        if (token != other.token) return false

        return true
    }

    override fun hashCode(): Int {
        var result = name.hashCode()
        result = 31 * result + status.hashCode()
        result = 31 * result + symEncKeyVersionNumber
        result = 31 * result + token.hashCode()
        return result
    }
}