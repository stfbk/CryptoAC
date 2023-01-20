package eu.fbk.st.cryptoac.parameters

import eu.fbk.st.cryptoac.SafeRegex
import io.ktor.utils.io.core.*
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Interface defining the methods
 * for handling service parameters
 * toward an interface requiring
 * username and password
 */
interface UPServiceParameters : ServiceParameters {

    /** The username */
    var username: String

    /** The password */
    var password: String

    /**
     * Check the parameters are valid through regular
     * expressions and return true if they are, false otherwise
     */
    override fun checkParameters(): Boolean =
        if (!SafeRegex.TEXT.matches(username)) {
            logger.warn {
                "Username ${username.toByteArray()} " +
                "does not respect TEXT regex"
            }
            false
        } else if (!SafeRegex.TEXT.matches(password)) {
            logger.warn { "Password does not respect TEXT regex" }
            false
        } else {
            true
        }

    /** Update updatable fields */
    override fun update(updatedParameters: ServiceParameters) {
        if (updatedParameters is UPServiceParameters) {
            // password = updatedParameters.password TODO decide whether to update or not the password
        } else {
            val message = "Given a non-subclass of ${this::class} for update"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }

    /** Obscure (e.g., delete values of) sensitive fields */
    override fun obscureSensitiveFields() {
        password = "***"
    }
}