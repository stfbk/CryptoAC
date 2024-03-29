package eu.fbk.st.cryptoac.model.unit

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.model.Element
import kotlinx.serialization.Serializable
import kotlin.random.Random

/**
 * A UnitElement is a single Element involved in an AC policy.
 * A UnitElement is defined by a (unique) [name] and a [status].
 * A UnitElement has a [token] acting as an identifier for anonymization.
 * The token should be either random or computed from secret values
 */
@Serializable
abstract class UnitElement : Element() {
    abstract val name: String
    abstract val status: UnitElementStatus
    abstract var token: String

    companion object {
        /**
         * Generate a random token (string) with the given
         * strictly positive [length] or the default value
         */
        fun generateRandomToken(length: Int = 20): String {
            requirePositiveNumber(length)
            val charPool: List<Char> = ('a'..'z') + ('A'..'Z') + ('0'..'9')
            return (1..length)
                .map { Random.nextInt(0, charPool.size) }
                .map(charPool::get)
                .joinToString("")
        }

        /**
         * Generate a random token (string) with the given
         * strictly positive [length] or the default value.
         * If the [name] is [ADMIN], return [ADMIN] as token
         */
        fun generateRandomTokenForAdmin(name: String, length: Int = 20): String {
            return if (name == ADMIN) {
                ADMIN
            } else {
                generateRandomToken(length)
            }
        }
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as UnitElement

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
