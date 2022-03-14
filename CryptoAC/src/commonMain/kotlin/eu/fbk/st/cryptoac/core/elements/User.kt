package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Utils.Companion.generateRandomString
import eu.fbk.st.cryptoac.crypto.AsymKeys
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

/**
 * A User is an ActiveElement representing a user.
 * A User is defined by a boolean [isAdmin] flag
 */
@Serializable
class User(
    override val name: String,
    override val status: ElementStatus = ElementStatus.INCOMPLETE,
    override val asymEncKeys: AsymKeys? = null, override val asymSigKeys: AsymKeys? = null,
    val isAdmin: Boolean = false,
) : ActiveElement() {
    override var token: String = if (name == ADMIN) {
        ADMIN
    } else {
        generateRandomString()
    }

    /** Return a String array of the significant fields of this user */
    override fun toArray(): Array<String> = arrayOf(name, status.toString(), isAdmin.toString(), token)

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as User

        if (name != other.name) return false
        if (status != other.status) return false
        if (asymEncKeys != other.asymEncKeys) return false
        if (asymSigKeys != other.asymSigKeys) return false
        if (isAdmin != other.isAdmin) return false
        if (token != other.token) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + name.hashCode()
        result = 31 * result + status.hashCode()
        result = 31 * result + (asymEncKeys?.hashCode() ?: 0)
        result = 31 * result + (asymSigKeys?.hashCode() ?: 0)
        result = 31 * result + isAdmin.hashCode()
        result = 31 * result + token.hashCode()
        return result
    }
}