package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.CryptoACFormField
import eu.fbk.st.cryptoac.InputType
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.SafeRegex
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters ([username], [password], [port], [url] and [tls])
 * for configuring the DM as a MQTT Mosquitto broker
 */
@Serializable
class DMInterfaceMosquittoParameters(
    override var username: String, override var password: ByteArray,
    override var port: Int, override var url: String,
    override var tls: Boolean
) : DMInterfaceRBACMQTTParameters {

    /** The type of this interface */
    override val dmType: DMType = DMType.MOSQUITTO

    companion object {
        /**
         * Create a DMInterfaceMosquittoParameters object from the given map of
         * [parameters]. Missing values will cause the return object to be null
         */
        fun fromMap(parameters: HashMap<String, String>): DMInterfaceMosquittoParameters {
            return DMInterfaceMosquittoParameters(
                username = parameters[SERVER.USERNAME]!!, port = parameters[SERVER.DM_PORT]!!.toInt(),
                url = parameters[SERVER.DM_URL]!!, password = parameters[SERVER.DM_PASSWORD]!!.toByteArray(),
                tls = parameters[SERVER.DM_TLS]!!.toBooleanStrict()
            )
        }

        /**
         * Create a list of CryptoAC form
         * fields from the given [parameters]
         */
        fun toMap(parameters: DMInterfaceMosquittoParameters? = null): List<List<CryptoACFormField>> = listOf(
            listOf(
                CryptoACFormField(
                    SERVER.DM_URL,
                    SERVER.DM_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.url
                ),
                CryptoACFormField(
                    SERVER.DM_PASSWORD,
                    SERVER.DM_PASSWORD.replace("_", " "),
                    InputType.password,
                    className = "darkTextField",
                    defaultValue = parameters?.password?.let { String(it) }
                ),
                CryptoACFormField(
                    SERVER.DM_PORT,
                    SERVER.DM_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.port.toString()
                ),
                CryptoACFormField(
                    SERVER.DM_TLS,
                    SERVER.DM_TLS,
                    InputType.checkBox,
                    className = "darkTextField",
                    defaultValue = parameters?.tls.toString()
                ),
            )
        )
    }

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
        if (updatedParameters is DMInterfaceMosquittoParameters) {
            port = updatedParameters.port
            // password = updatedParameters.password
            // tls = updatedParameters.tls
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

        other as DMInterfaceMosquittoParameters

        if (username != other.username) return false
        if (!password.contentEquals(other.password)) return false
        if (port != other.port) return false
        if (url != other.url) return false
        if (tls != other.tls) return false
        if (dmType != other.dmType) return false

        return true
    }

    override fun hashCode(): Int {
        var result = username.hashCode()
        result = 31 * result + password.contentHashCode()
        result = 31 * result + port
        result = 31 * result + url.hashCode()
        result = 31 * result + tls.hashCode()
        result = 31 * result + dmType.hashCode()
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