package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.core.CryptoACObject
import kotlinx.serialization.Serializable
import kotlin.random.Random

/**
 * An Element is that involved in the access control policy.
 * An Element is defined by a (unique) [name] and a [status].
 * An Element has a [token] acting as an identifier for anonymization.
 * The token should be either random or computed from secret values
 */
@Serializable
abstract class Element : CryptoACObject() {
    abstract val name: String
    abstract val status: ElementStatus
    abstract var token: String

    companion object {
        /**
         * Generate a random token (string) with the given
         * strictly positive [length] or the default value
         */
        fun generateToken(length: Int = 20): String {
            requirePositiveNumber(length)
            val charPool: List<Char> = ('a'..'z') + ('A'..'Z') + ('0'..'9')
            return (1..length)
                .map { Random.nextInt(0, charPool.size) }
                .map(charPool::get)
                .joinToString("")
        }
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as Element

        if (name != other.name) return false
        if (status != other.status) return false
        if (token != other.token) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + name.hashCode()
        result = 31 * result + status.hashCode()
        result = 31 * result + token.hashCode()
        return result
    }
}