package eu.fbk.st.cryptoac.implementation.ms

import eu.fbk.st.cryptoac.SafeRegex
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Parameters ([username], [password], [port] and [url]) for configuring the MS as a MySQL database. */
@Serializable
class MSInterfaceMySQLParameters(var username: String, var port: Int, var password: String, var url: String) : MSInterfaceParameters() {

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise. */
    override fun checkParameters(): Boolean =
        if (!SafeRegex.TEXT.matches(username)) {
            logger.warn { "Username ${username.toByteArray()} does not respect TEXT regex" }
            false
        } else if (!SafeRegex.URL_OR_IPV4.matches(url)) {
            logger.warn { "URL ${url.toByteArray()} does not respect URL_OR_IPV4 regex" }
            false
        } else if (!SafeRegex.TEXT.matches(password)) {
            logger.warn { "Password does not respect TEXT regex" }
            false
        } else if (port <= 0 || port >= 65535) {
            logger.warn { "Port number $port is inconsistent" }
            false
        } else {
            true
        }

    /** Update updatable fields. */
    override fun update(updatedParameters: MSInterfaceParameters) {
        if (updatedParameters is MSInterfaceMySQLParameters) {
            port = updatedParameters.port
            password = updatedParameters.password
            url = updatedParameters.url
        }
        else {
            val message = "Given a non-subclass of ${this::class} for update"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }


    /** Obscure (e.g., overwrite values of) sensitive fields. */
    override fun obscureSensitiveFields() {
        password = "***"
    }
}