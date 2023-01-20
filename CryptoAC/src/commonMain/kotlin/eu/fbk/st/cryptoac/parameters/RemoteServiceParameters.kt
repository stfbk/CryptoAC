package eu.fbk.st.cryptoac.parameters

import eu.fbk.st.cryptoac.SafeRegex
import io.ktor.utils.io.core.*
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Interface defining the methods
 * for handling service parameters
 * toward a remote service, i.e.,
 * with a URL and a port
 */
interface RemoteServiceParameters : ServiceParameters {

    /** The URL of this interface */
    var url: String

    /** The port of this interface */
    var port: Int

    /**
     * Check the parameters are valid through regular
     * expressions and return true if they are, false otherwise
     */
    override fun checkParameters(): Boolean =
        if (!SafeRegex.URL_OR_IPV4.matches(url)) {
            logger.warn { "URL ${url.toByteArray()} does not respect URL_OR_IPV4 regex" }
            false
        } else if (port <= 0 || port >= 65535) {
            logger.warn { "Port number $port is not between 0 and 65535" }
            false
        } else {
            true
        }

    /** Update updatable fields */
    override fun update(updatedParameters: ServiceParameters) {
        if (updatedParameters is RemoteServiceParameters) {
            port = updatedParameters.port
            url = updatedParameters.url
        } else {
            val message = "Given a non-subclass of ${this::class} for update"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }

    /** Obscure (e.g., delete values of) sensitive fields */
    override fun obscureSensitiveFields() {
        /** No sensitive fields to obscure */
    }
}

