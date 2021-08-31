package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.crypto.AsymKeys
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

/**
 * A User is an ActiveElement representing a user.
 * A User is defined by a boolean [isAdmin] flag.
 */
@Serializable
class User(
    override val name: String,
    override val status: ElementStatus = ElementStatus.INCOMPLETE,
    @Transient override val asymEncKeys: AsymKeys? = null, @Transient override val asymSigKeys: AsymKeys? = null,
    val isAdmin: Boolean = false,
) : ActiveElement() {
    override var token: String = generateToken()

    /** Return a String array of the significant fields of this user. */
    override fun toArray(): Array<String> = arrayOf(name, status.toString(), isAdmin.toString(), token)
}