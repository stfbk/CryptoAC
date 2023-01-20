package eu.fbk.st.cryptoac.mm.redis

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.mm.MMServiceRemoteUPParameters
import eu.fbk.st.cryptoac.mm.MMType
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters ([username], [token], [password], [port]
 * and [url]) for configuring the MM as a Redis database.
 */
@Serializable
class MMServiceRedisParameters(
    override var username: String,
    override var password: String,
    override var port: Int,
    override var url: String,
    override val mmType: MMType,
    var token: String,
) : MMServiceRemoteUPParameters {

    companion object {
        /**
         * Create a MMServiceRedisParameters object of
         * type [mmType] from the given map of [parameters].
         * Missing values will cause a NPE // TODO improve behaviour
         */
        fun fromMap(
            parameters: HashMap<String, String>,
            mmType: MMType
        ): MMServiceRedisParameters {
            return MMServiceRedisParameters(
                username = parameters[SERVER.USERNAME]!!,
                port = parameters[SERVER.MM_PORT]!!.toInt(),
                url = parameters[SERVER.MM_URL]!!,
                password = parameters[SERVER.MM_PASSWORD]!!,
                token = parameters[SERVER.MM_TOKEN]!!,
                mmType = mmType
            )
        }

        /**
         * Create a list of CryptoAC form
         * fields from the given [parameters]
         */
        fun toMap(parameters: MMServiceRedisParameters? = null) = listOf(
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
                    defaultValue = parameters?.token,
                    disabled = true,
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

    /**
     * Check the parameters are valid through regular
     * expressions and return true if they are, false otherwise
     */
    override fun checkParameters(): Boolean =
        if (!SafeRegex.TEXT.matches(token)) {
            logger.warn { "Token ${token.toByteArray()} does not respect BASE64 regex" }
            false
        } else {
            super.checkParameters()
        }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is MMServiceRedisParameters) return false

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
