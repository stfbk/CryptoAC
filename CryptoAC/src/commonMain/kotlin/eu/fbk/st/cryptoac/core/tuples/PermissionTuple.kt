package eu.fbk.st.cryptoac.core.tuples

import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable

/**
 * A PermissionTuple links a Role with a PermissionType over a File.
 * A PermissionTuple is defined by a [roleName], a [fileName], a [roleToken],
 * a [fileToken], a [permission] type, two positive version numbers ([roleVersionNumber],
 * [symKeyVersionNumber]) and an [encryptedSymKey].
 */
@Serializable
class PermissionTuple(
    val roleName: String, val fileName: String,
    val roleToken: String, val fileToken: String,
    val permission: PermissionType,
    val encryptedSymKey: EncryptedSymKey? = null,
    val roleVersionNumber: Int = 1, val symKeyVersionNumber: Int = 1,
) : Tuple() {

    init {
        requirePositiveNumber(roleVersionNumber)
        requirePositiveNumber(symKeyVersionNumber)
    }

    override fun getBytesForSignature(): ByteArray =
        ("$roleName$fileName$roleToken$fileToken$permission$roleVersionNumber" +
                "$symKeyVersionNumber$encryptedSymKey").toByteArray()

    /** Check that [newSignerType] is a User, then invoke superclass method */
    override fun updateSignature(newSignature: ByteArray, newSigner: String, newSignerType: ElementTypeWithKey) {
        when (newSignerType) {
            ElementTypeWithKey.USER -> super.updateSignature(newSignature, newSigner, newSignerType)
            else -> throw IllegalArgumentException("Signed must be either a User")
        }
    }

    /** Return a String array of the significant fields of this tuple. */
    override fun toArray(): Array<String> = arrayOf(roleName, fileName, symKeyVersionNumber.toString(), permission.toString())

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as PermissionTuple

        if (roleName != other.roleName) return false
        if (fileName != other.fileName) return false
        if (roleToken != other.roleToken) return false
        if (fileToken != other.fileToken) return false
        if (permission != other.permission) return false
        if (encryptedSymKey != other.encryptedSymKey) return false
        if (roleVersionNumber != other.roleVersionNumber) return false
        if (symKeyVersionNumber != other.symKeyVersionNumber) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + roleName.hashCode()
        result = 31 * result + fileName.hashCode()
        result = 31 * result + roleToken.hashCode()
        result = 31 * result + fileToken.hashCode()
        result = 31 * result + permission.hashCode()
        result = 31 * result + (encryptedSymKey?.hashCode() ?: 0)
        result = 31 * result + roleVersionNumber
        result = 31 * result + symKeyVersionNumber
        return result
    }
}

