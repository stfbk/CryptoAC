package eu.fbk.st.cryptoac.model.tuple

import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable

/**
 * An AttributeTuple links a User with an Attribute.
 * An AttributeTuple is defined by a [username] and
 * an [attributeName] with an optional [attributeValue]
 */
//@Serializable TODO decomment (this caused a weird error at compile-time, check whether the error is still there or was resolved (e.g., with an update)
class AttributeTuple(
    val username: String,
    val attributeName: String,
    val attributeValue: String? = null,
) : Tuple() {

    /**
     * Return the concatenation of all identifying
     * fields of the tuple for computing the digital signature
     */
    override fun getBytesForSignature(): ByteArray = (
            "$username$attributeName${attributeValue ?: ""}"
            ).toByteArray()

    /** Return a String array of the significant fields of this tuple */
    override fun toArray(): Array<String> = arrayOf(
        username,
        attributeName,
        attributeValue ?: ""
    )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is AttributeTuple) return false
        if (!super.equals(other)) return false

        if (username != other.username) return false
        if (attributeName != other.attributeName) return false
        if (attributeValue != other.attributeValue) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + username.hashCode()
        result = 31 * result + attributeName.hashCode()
        result = 31 * result + (attributeValue?.hashCode() ?: 0)
        return result
    }
}
