package eu.fbk.st.cryptoac.model.tuple

import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable

/**
 * A PermissionTuple links a Role with a PermissionType over a Resource.
 * A PermissionTuple is defined by a [roleName], a [resourceName], a [roleToken],
 * a [resourceToken], a [permission] type, two positive version numbers ([roleVersionNumber],
 * [symKeyVersionNumber]) and two encrypted symmetric keys ([encryptingSymKey] and
 * [decryptingSymKey])
 */
@Serializable
class PermissionTuple(
    val roleName: String,
    val resourceName: String,
    val roleToken: String,
    val resourceToken: String,
    val permission: PermissionType,
    val encryptingSymKey: EncryptedSymKey? = null,
    val decryptingSymKey: EncryptedSymKey? = null,
    val roleVersionNumber: Int = 1,
    val symKeyVersionNumber: Int = 1,
) : Tuple() {

    // TODO PERCHE QUI ABBIAMO LA ENCRYPTING E LA DECRYPTING KEY INSIEME?
    //    E' PERCHE' ABBIAMO UNA SOLA PERMISSION TUPLE PER OGNI RISORSA?
    //        E' UNA COSA BUONA?'
    //        NON PUO ESSERE CHE ABBIAMO BISOGNO DI MANTENERE PIU CHIAVI VECCHIE, COME FACCIAMO PER ABE?
    //    E IL "symKeyVersionNumber" A COSA FA RIFERIMENTO ALLORA? MEGLIO RINOMINARLO PER ESSERE PIU' CHIARI?'

    init {
        requirePositiveNumber(roleVersionNumber)
        requirePositiveNumber(symKeyVersionNumber)
    }

    /**
     * Return the concatenation of all identifying
     * fields of the tuple for computing the digital signature
     */
    override fun getBytesForSignature(): ByteArray =
        ("$roleName$resourceName$roleToken$resourceToken" +
         "$permission$roleVersionNumber$symKeyVersionNumber" +
         encryptingSymKey?.key.contentToString() +
         decryptingSymKey?.key.contentToString()).toByteArray()

    /** Return a String array of the significant fields of this tuple */
    override fun toArray(): Array<String> = arrayOf(
        roleName,
        resourceName,
        symKeyVersionNumber.toString(),
        permission.toString()
    )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is PermissionTuple) return false
        if (!super.equals(other)) return false

        if (roleName != other.roleName) return false
        if (resourceName != other.resourceName) return false
        if (roleToken != other.roleToken) return false
        if (resourceToken != other.resourceToken) return false
        if (permission != other.permission) return false
        if (encryptingSymKey != other.encryptingSymKey) return false
        if (decryptingSymKey != other.decryptingSymKey) return false
        if (roleVersionNumber != other.roleVersionNumber) return false
        if (symKeyVersionNumber != other.symKeyVersionNumber) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + roleName.hashCode()
        result = 31 * result + resourceName.hashCode()
        result = 31 * result + roleToken.hashCode()
        result = 31 * result + resourceToken.hashCode()
        result = 31 * result + permission.hashCode()
        result = 31 * result + (encryptingSymKey?.hashCode() ?: 0)
        result = 31 * result + (decryptingSymKey?.hashCode() ?: 0)
        result = 31 * result + roleVersionNumber
        result = 31 * result + symKeyVersionNumber
        return result
    }
}
