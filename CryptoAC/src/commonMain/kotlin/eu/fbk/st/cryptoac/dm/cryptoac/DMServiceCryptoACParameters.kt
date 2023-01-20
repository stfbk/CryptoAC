package eu.fbk.st.cryptoac.dm.cryptoac

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.dm.DMServiceRemoteUPParameters
import eu.fbk.st.cryptoac.dm.DMType
import kotlinx.serialization.Serializable

/**
 * Parameters ([username], [password], [port], [url])
 * for configuring the DM as a CryptAC instance
 */
@Serializable
class DMServiceCryptoACParameters(
    override var username: String,
    override var password: String,
    override var port: Int,
    override var url: String,
) : DMServiceRemoteUPParameters {

    /** The type of this service */
    override val dmType: DMType = DMType.CRYPTOAC

    companion object {
        /**
         * Create a DMServiceCryptoACParameters object from the given map of
         * [parameters]. Missing values will cause the return object to be null
         */
        fun fromMap(parameters: HashMap<String, String>): DMServiceCryptoACParameters {
            return DMServiceCryptoACParameters(
                username = parameters[SERVER.USERNAME]!!,
                port = parameters[SERVER.DM_PORT]!!.toInt(),
                url = parameters[SERVER.DM_URL]!!,
                password = parameters[SERVER.DM_PASSWORD]!!,
            )
        }

        /**
         * Create a list of CryptoAC form
         * fields from the given [parameters]
         */
        fun toMap(parameters: DMServiceCryptoACParameters? = null) = listOf(
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
                    defaultValue = parameters?.password
                ),
                CryptoACFormField(
                    SERVER.DM_PORT,
                    SERVER.DM_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.port.toString()
                )
            )
        )
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is DMServiceCryptoACParameters) return false

        if (username != other.username) return false
        if (password != other.password) return false
        if (port != other.port) return false
        if (url != other.url) return false
        if (dmType != other.dmType) return false

        return true
    }

    override fun hashCode(): Int {
        var result = username.hashCode()
        result = 31 * result + password.hashCode()
        result = 31 * result + port
        result = 31 * result + url.hashCode()
        result = 31 * result + dmType.hashCode()
        return result
    }
}
