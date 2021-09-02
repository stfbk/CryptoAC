package eu.fbk.st.cryptoac.core.tuples

import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable

/**
 * A FileTuple links a File with other metadata.
 * A FileTuple is defined by a [fileName], the [fileToken], the [roleToken]
 * of the role that was used to create the tuple, an [enforcement] type and
 * a positive [symDecKeyVersionNumber].
 */
@Serializable
class FileTuple(
    val fileName: String, val fileToken: String,
    val roleToken: String,
    val enforcement: EnforcementType,
    val symDecKeyVersionNumber: Int = 1,
) : Tuple() {

    init {
        requirePositiveNumber(symDecKeyVersionNumber)
    }

    override fun getBytesForSignature(): ByteArray =
        "$fileName$fileToken$roleToken$symDecKeyVersionNumber$enforcement".toByteArray()

    /** Check that [newSignerType] is a User, then invoke superclass method. */
    override fun updateSignature(newSignature: ByteArray, newSigner: String, newSignerType: ElementTypeWithKey) {
        when (newSignerType) {
            ElementTypeWithKey.USER -> super.updateSignature(newSignature, newSigner, newSignerType)
            else -> throw IllegalArgumentException("Signed must be a User")
        }
    }

    /** Return a String array of the significant fields of this tuple. */
    override fun toArray(): Array<String> = arrayOf(fileName, symDecKeyVersionNumber.toString(), enforcement.toString())

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as FileTuple

        if (fileName != other.fileName) return false
        if (fileToken != other.fileToken) return false
        if (roleToken != other.roleToken) return false
        if (enforcement != other.enforcement) return false
        if (symDecKeyVersionNumber != other.symDecKeyVersionNumber) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + fileName.hashCode()
        result = 31 * result + fileToken.hashCode()
        result = 31 * result + roleToken.hashCode()
        result = 31 * result + enforcement.hashCode()
        result = 31 * result + symDecKeyVersionNumber
        return result
    }
}