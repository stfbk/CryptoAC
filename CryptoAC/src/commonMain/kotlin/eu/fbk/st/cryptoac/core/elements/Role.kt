package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.crypto.AsymKeys
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

/**
 * A Role is an ActiveElement representing a role.
 * A Role is defined by a positive [versionNumber].
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
    override var token: String = generateToken()

    /** Return a String array of the significant fields of this role. */
    override fun toArray(): Array<String> = arrayOf(name, status.toString(), token)
}
