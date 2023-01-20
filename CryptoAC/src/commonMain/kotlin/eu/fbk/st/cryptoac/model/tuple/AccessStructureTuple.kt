package eu.fbk.st.cryptoac.model.tuple

import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable

/**
 * An AccessStructureTuple links a Resource with a permission
 * over an Access Structure. An AccessStructureTuple is defined
 * by a [resourceName], a [resourceToken], an [accessStructure],
 * a [permission], an [encryptingSymKey], a [decryptingSymKey]
 * and a [symKeyVersionNumber]
 */
//@Serializable TODO decomment (this caused a weird error at compile-time, check whether the error is still there or was resolved (e.g., with an update)
class AccessStructureTuple(
    val resourceName: String,
    val resourceToken: String,
    val accessStructure: String,
    val permission: PermissionType,
    val encryptingSymKey: EncryptedSymKey? = null,
    val decryptingSymKey: EncryptedSymKey? = null,
    val symKeyVersionNumber: Int = 1,
) : Tuple() {

    /**
     * Return the concatenation of all identifying
     * fields of the tuple for computing the digital signature
     */
    override fun getBytesForSignature(): ByteArray =
        ("$resourceName$resourceToken$accessStructure" +
         "$permission$symKeyVersionNumber" +
         encryptingSymKey?.key.contentToString() +
         decryptingSymKey?.key.contentToString()).toByteArray()

    /** Return a String array of the significant fields of this tuple */
    override fun toArray(): Array<String> = arrayOf(
        resourceName,
        accessStructure,
        permission.toString(),
        symKeyVersionNumber.toString()
    )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is AccessStructureTuple) return false
        if (!super.equals(other)) return false

        if (resourceName != other.resourceName) return false
        if (resourceToken != other.resourceToken) return false
        if (accessStructure != other.accessStructure) return false
        if (permission != other.permission) return false
        if (encryptingSymKey != other.encryptingSymKey) return false
        if (decryptingSymKey != other.decryptingSymKey) return false
        if (symKeyVersionNumber != other.symKeyVersionNumber) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + resourceName.hashCode()
        result = 31 * result + resourceToken.hashCode()
        result = 31 * result + accessStructure.hashCode()
        result = 31 * result + permission.hashCode()
        result = 31 * result + (encryptingSymKey?.hashCode() ?: 0)
        result = 31 * result + (decryptingSymKey?.hashCode() ?: 0)
        result = 31 * result + symKeyVersionNumber
        return result
    }
}
