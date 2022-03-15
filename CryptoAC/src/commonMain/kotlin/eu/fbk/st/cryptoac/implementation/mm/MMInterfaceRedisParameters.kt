package eu.fbk.st.cryptoac.implementation.mm

import eu.fbk.st.cryptoac.CryptoACFormField
import eu.fbk.st.cryptoac.InputType
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.SafeRegex
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters ([username], [token], [password], [port]
 * and [url]) for configuring the MM as a Redis database.
 */
@Serializable
class MMInterfaceRedisParameters(
    override var username: String, override var password: String,
    override var port: Int, override var url: String,
    var token: String,
) : MMInterfaceRBACMQTTParameters {

    /** The type of this interface */
    override val mmType: MMType = MMType.REDIS

    companion object {
        /**
         * Create a MMInterfaceRedisParameters object from the given map of
         * [parameters]. Missing values will cause the return object to be null
         */
        fun fromMap(parameters: HashMap<String, String>): MMInterfaceRedisParameters {
            return MMInterfaceRedisParameters(
                username = parameters[SERVER.USERNAME]!!, port = parameters[SERVER.MM_PORT]!!.toInt(),
                url = parameters[SERVER.MM_URL]!!, password = parameters[SERVER.MM_PASSWORD]!!,
                token = parameters[SERVER.MM_TOKEN]!!
            )
        }

        /**
         * Create a list of CryptoAC form
         * fields from the given [parameters]
         */
        fun toMap(parameters: MMInterfaceRedisParameters? = null): List<List<CryptoACFormField>> = listOf(
            listOf(
                CryptoACFormField(
                    SERVER.MM_URL,
                    SERVER.MM_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.url
                ),
                CryptoACFormField(
                    SERVER.MM_TOKEN,
                    SERVER.MM_TOKEN.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.token
                ),
                CryptoACFormField(
                    SERVER.MM_PASSWORD,
                    SERVER.MM_PASSWORD.replace("_", " "),
                    InputType.password,
                    className = "darkTextField",
                    defaultValue = parameters?.password
                ),
                CryptoACFormField(
                    SERVER.MM_PORT,
                    SERVER.MM_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.port.toString()
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
        } else if (!SafeRegex.TEXT.matches(password)) {
            logger.warn { "Password does not respect TEXT regex" }
            false
        } else if (port <= 0 || port >= 65535) {
            logger.warn { "Port number $port is inconsistent" }
            false
        } else if (!SafeRegex.TEXT.matches(token)) {
            logger.warn { "Token ${token.toByteArray()} does not respect BASE64 regex" }
            false
        } else {
            true
        }

    /** Update updatable fields */
    override fun update(updatedParameters: MMInterfaceParameters) {
        if (updatedParameters is MMInterfaceRedisParameters) {
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
        password = "***"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as MMInterfaceRedisParameters

        if (username != other.username) return false
        if (password != other.password) return false
        if (port != other.port) return false
        if (url != other.url) return false
        if (token != other.token) return false
        if (mmType != other.mmType) return false

        return true
    }

    override fun hashCode(): Int {
        var result = username.hashCode()
        result = 31 * result + password.hashCode()
        result = 31 * result + port
        result = 31 * result + url.hashCode()
        result = 31 * result + token.hashCode()
        result = 31 * result + mmType.hashCode()
        return result
    }

}