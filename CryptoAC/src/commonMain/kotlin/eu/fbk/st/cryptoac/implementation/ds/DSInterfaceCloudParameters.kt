package eu.fbk.st.cryptoac.implementation.ds

import eu.fbk.st.cryptoac.SafeRegex
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Parameters, [port] and [url], for configuring the DS as a microservice container. */
@Serializable
class DSInterfaceCloudParameters(var port: Int, var url: String) : DSInterfaceParameters() {

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise. */
    override fun checkParameters(): Boolean =
        if (!SafeRegex.URL_OR_IPV4.matches(url)) {
            logger.warn { "URL ${url.toByteArray()} does not respect URL_OR_IPV4 regex" }
            false
        } else if (port <= 0 || port >= 65535) {
            logger.warn { "Port number $port is inconsistent" }
            false
        } else {
            true
        }

    /** Update updatable fields. */
    override fun update(updatedParameters: DSInterfaceParameters) {
        if (updatedParameters is DSInterfaceCloudParameters) {
            port = updatedParameters.port
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
        /** No sensitive fields to obscure. */
    }
}