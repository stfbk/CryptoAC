package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.crypto.AsymKeys
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable

/**
 * An ActiveElement is an Element equipped with cryptographic keys.
 * An ActiveElement is defined by a pair of [asymEncKeys] and [asymSigKeys].
 */
@Serializable
abstract class ActiveElement : Element() {
    abstract val asymEncKeys: AsymKeys?
    abstract val asymSigKeys: AsymKeys?

    /**
     * If the element is the admin, return [ADMIN]. Otherwise,
     * return as a token the hash of the private keys of the
     * user, limiting the length to the given strictly positive
     * [length] or the default value.
     */
    override fun generateToken(length: Int): String {
        requirePositiveNumber(length)
        return if (name == ADMIN) {
            ADMIN
        } else {
            digest(
                "SHA-256",
                (asymEncKeys?.private ?: "not given".toByteArray()) + (asymSigKeys?.private ?: "not given".toByteArray())
            ).substring(0, length)
        }
    }
}

expect fun digest(algorithm: String, bytes: ByteArray): String