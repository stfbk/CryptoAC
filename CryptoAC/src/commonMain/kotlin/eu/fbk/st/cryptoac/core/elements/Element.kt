package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.core.CryptoACObject
import kotlinx.serialization.Serializable
import kotlin.random.Random

/**
 * An Element is that involved in the access control policy.
 * An Element is defined by a (unique) [name] and a [status].
 * An Element has a [token] acting as an identifier for anonymization.
 * The token should be either random or computed from secret values.
 */
@Serializable
abstract class Element : CryptoACObject() {
    abstract val name: String
    abstract val status: ElementStatus
    abstract var token: String

    /**
     * Generate a random token (string) with the given
     * strictly positive [length] or the default value.
     */
    open fun generateToken(length: Int = 20): String {
        requirePositiveNumber(length) // TODO refactor with @range annotation?
        val charPool : List<Char> = ('a'..'z') + ('A'..'Z') + ('0'..'9')
        return (1..length)
            .map { Random.nextInt(0, charPool.size) }
            .map(charPool::get)
            .joinToString("")
    }
}