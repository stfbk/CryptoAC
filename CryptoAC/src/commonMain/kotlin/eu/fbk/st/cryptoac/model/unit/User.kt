package eu.fbk.st.cryptoac.model.unit

import eu.fbk.st.cryptoac.crypto.AsymKeys
import kotlinx.serialization.Serializable

/**
 * A User is a UnitElementWithKeys representing a user.
 * A User is defined by a boolean [isAdmin] flag
 */
@Serializable
class User(
    override val name: String,
    override val status: UnitElementStatus = UnitElementStatus.INCOMPLETE,
    override val asymEncKeys: AsymKeys? = null, // TODO should this be @Transient?
    override val asymSigKeys: AsymKeys? = null, // TODO should this be @Transient?
    val isAdmin: Boolean = false,
) : UnitElementWithKeys() {

    override var token: String = generateRandomTokenForAdmin(name)

    /** Return a String array of the significant fields of this user */
    override fun toArray(): Array<String> = arrayOf(
        name,
        status.toString(),
        isAdmin.toString(),
        token
    )

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
        return token == other.token
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
