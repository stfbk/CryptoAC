package eu.fbk.st.cryptoac.model.tuple

import eu.fbk.st.cryptoac.crypto.EncryptedAsymKeys
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

/**
 * A RoleTuple links a User with a Role.
 * A RoleTuple is defined by a [username],
 * a [roleName], a positive [roleVersionNumber]
 * and 2 encrypted key pairs, [encryptedAsymEncKeys]
 * and [encryptedAsymSigKeys]
 */
@Serializable
class RoleTuple(
    val username: String,
    val roleName: String,
    val roleVersionNumber: Int = 1,
    @Transient val encryptedAsymEncKeys: EncryptedAsymKeys? = null,
    @Transient val encryptedAsymSigKeys: EncryptedAsymKeys? = null
) : Tuple() {

    init {
        requirePositiveNumber(roleVersionNumber)
    }

    /**
     * Return the concatenation of all identifying
     * fields of the tuple for computing the digital signature
     */
    override fun getBytesForSignature(): ByteArray = (
        "$username$roleName$roleVersionNumber" +
            "$encryptedAsymEncKeys$encryptedAsymSigKeys"
        ).toByteArray()

    /** Return a String array of the significant fields of this tuple */
    override fun toArray(): Array<String> = arrayOf(
        username,
        roleName,
        roleVersionNumber.toString()
    )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as RoleTuple

        if (username != other.username) return false
        if (roleName != other.roleName) return false
        if (roleVersionNumber != other.roleVersionNumber) return false
        if (encryptedAsymEncKeys != other.encryptedAsymEncKeys) return false
        if (encryptedAsymSigKeys != other.encryptedAsymSigKeys) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + username.hashCode()
        result = 31 * result + roleName.hashCode()
        result = 31 * result + roleVersionNumber
        result = 31 * result + (encryptedAsymEncKeys?.hashCode() ?: 0)
        result = 31 * result + (encryptedAsymSigKeys?.hashCode() ?: 0)
        return result
    }
}
