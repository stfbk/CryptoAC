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
}