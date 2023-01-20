package eu.fbk.st.cryptoac.ac.dynsec

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.ac.ACServiceParameters
import eu.fbk.st.cryptoac.ac.ACType
import eu.fbk.st.cryptoac.parameters.ServiceParameters
import eu.fbk.st.cryptoac.parameters.RemoteServiceParameters
import eu.fbk.st.cryptoac.parameters.UPServiceParameters
import kotlinx.serialization.Serializable

/**
 * Parameters ([username], [password], [port], [url] and [tls])
 * for configuring the AC as the DynSec plugin of a Mosquitto broker
 */
@Serializable
class ACServiceRBACDynSecParameters(
    override var username: String,
    override var password: String,
    override var port: Int,
    override var url: String,
    var tls: Boolean
) : UPServiceParameters,
    RemoteServiceParameters,
    ACServiceParameters {

    /** The type of this service */
    override val acType: ACType = ACType.RBAC_DYNSEC

    companion object {
        /**
         * Create a ACServiceRBACDynSecParameters object from the given map of
         * [parameters]. Missing values will cause the return object to be null
         */
        fun fromMap(parameters: HashMap<String, String>): ACServiceRBACDynSecParameters {
            return ACServiceRBACDynSecParameters(
                username = parameters[SERVER.USERNAME]!!,
                port = parameters[SERVER.AC_PORT]!!.toInt(),
                url = parameters[SERVER.AC_URL]!!,
                password = parameters[SERVER.AC_PASSWORD]!!,
                tls = parameters[SERVER.AC_TLS]!!.toBooleanStrict()
            )
        }

        /**
         * Create a list of CryptoAC form
         * fields from the given [parameters]
         */
        fun toMap(parameters: ACServiceRBACDynSecParameters? = null) = listOf(
            listOf(
                CryptoACFormField(
                    SERVER.AC_URL,
                    SERVER.AC_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.url
                ),
                CryptoACFormField(
                    SERVER.AC_PASSWORD,
                    SERVER.AC_PASSWORD.replace("_", " "),
                    InputType.password,
                    className = "darkTextField",
                    defaultValue = parameters?.password
                ),
                CryptoACFormField(
                    SERVER.AC_PORT,
                    SERVER.AC_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.port.toString()
                ),
                CryptoACFormField(
                    SERVER.AC_TLS,
                    SERVER.AC_TLS,
                    InputType.checkBox,
                    className = "darkTextField",
                    defaultValue = parameters?.tls.toString()
                ),
            )
        )
    }

    /**
     * Check the parameters are valid through regular
     * expressions and return true if they are, false otherwise
     */
    override fun checkParameters(): Boolean =
        (super<UPServiceParameters>.checkParameters()
            &&
        super<RemoteServiceParameters>.checkParameters())

    /** Update updatable fields */
    override fun update(updatedParameters: ServiceParameters) {
        super<UPServiceParameters>.update(updatedParameters)
        super<RemoteServiceParameters>.update(updatedParameters)
    }

    /** Obscure (e.g., delete values of) sensitive fields */
    override fun obscureSensitiveFields() {
        super<UPServiceParameters>.obscureSensitiveFields()
        super<RemoteServiceParameters>.obscureSensitiveFields()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as ACServiceRBACDynSecParameters

        if (username != other.username) return false
        if (password != other.password) return false
        if (port != other.port) return false
        if (url != other.url) return false
        if (tls != other.tls) return false
        if (acType != other.acType) return false

        return true
    }

    override fun hashCode(): Int {
        var result = username.hashCode()
        result = 31 * result + password.hashCode()
        result = 31 * result + port
        result = 31 * result + url.hashCode()
        result = 31 * result + tls.hashCode()
        result = 31 * result + acType.hashCode()
        return result
    }
}
