package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.SafeRegex
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters ([username], [password], [port] and [url])
 * for configuring the DM as a MQTT Mosquitto broker.
 * */
@Serializable
class DMInterfaceMQTTParameters(
    var username: String, var password: ByteArray,
    var port: Int, var url: String,
) : DMInterfaceParameters() {

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    override fun checkParameters(): Boolean =
        if (!SafeRegex.TEXT.matches(username)) {
            logger.warn { "Username ${username.toByteArray()} does not respect TEXT regex" }
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

    /** Update updatable fields */
    override fun update(updatedParameters: DMInterfaceParameters) {
        if (updatedParameters is DMInterfaceMQTTParameters) {
            port = updatedParameters.port
            // password = updatedParameters.password
            url = updatedParameters.url
        }
        else {
            val message = "Given a non-subclass of ${this::class} for update"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }

    /** Obscure (e.g., overwrite values of) sensitive fields */
    override fun obscureSensitiveFields() {
        password = "***".toByteArray()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as DMInterfaceMQTTParameters

        if (username != other.username) return false
        if (!password.contentEquals(other.password)) return false
        if (port != other.port) return false
        if (url != other.url) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + username.hashCode()
        result = 31 * result + password.contentHashCode()
        result = 31 * result + port
        result = 31 * result + url.hashCode()
        return result
    }


}

/** The possible ACL types Mosquitto supports in the dynamic security plugin */
enum class AclType {
    publishClientSend, publishClientReceive, subscribeLiteral, subscribePattern, unsubscribeLiteral, unsubscribePattern
}


/**
 * A class representing an MQTT message
 * consisting of a [message] in a [topic]
 * and whether the message is an [error]
 */
@Serializable
data class MQTTMessage(val message: String, val topic: String, val error: Boolean)