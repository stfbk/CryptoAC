package eu.fbk.st.cryptoac.implementation.ds

import eu.fbk.st.cryptoac.SafeRegex
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** Parameters, [port], [url] and [password] for configuring the DS as a MQTT broker. */
@Serializable
class DSInterfaceMQTTParameters(var port: Int, var url: String, var password: String) : DSInterfaceParameters() {

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise. */
    override fun checkParameters(): Boolean =
        if (!SafeRegex.TEXT.matches(password)) {
            logger.warn { "Password does not respect TEXT regex" }
            false
        } else if (!SafeRegex.URL_OR_IPV4.matches(url)) {
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
        if (updatedParameters is DSInterfaceMQTTParameters) {
            port = updatedParameters.port
            url = updatedParameters.url
            password = updatedParameters.password
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

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as DSInterfaceMQTTParameters

        if (port != other.port) return false
        if (url != other.url) return false
        if (password != other.password) return false

        return true
    }

    override fun hashCode(): Int {
        var result = port
        result = 31 * result + url.hashCode()
        result = 31 * result + password.hashCode()
        return result
    }
}

/** The possible ACL types Mosquitto supports in the dynamic security plugin. */
enum class AclType {
    publishClientSend, publishClientReceive, subscribeLiteral, subscribePattern, unsubscribeLiteral, unsubscribePattern
}