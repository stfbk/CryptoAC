package eu.fbk.st.cryptoac.ac.opa

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.ac.ACServiceParameters
import eu.fbk.st.cryptoac.ac.ACType
import eu.fbk.st.cryptoac.parameters.RemoteServiceParameters
import kotlinx.serialization.Serializable

/**
 * Parameters ([port] and [url])
 * for configuring OPA as AC
 */
@Serializable
class ACServiceRBACOPAParameters(
    override var port: Int,
    override var url: String,
) : RemoteServiceParameters,
    ACServiceParameters {

    /** The type of this service */
    override val acType: ACType = ACType.RBAC_OPA

    companion object {
        /**
         * Create a ACServiceOPAParameters object from the given map of
         * [parameters]. Missing values will cause the return object to be null
         */
        fun fromMap(parameters: HashMap<String, String>): ACServiceRBACOPAParameters {
            return ACServiceRBACOPAParameters(
                url = parameters[SERVER.AC_URL]!!,
                port = parameters[SERVER.AC_PORT]!!.toInt()
            )
        }

        /**
         * Create a list of CryptoAC form
         * fields from the given [parameters]
         */
        fun toMap(parameters: ACServiceRBACOPAParameters? = null) = listOf(
            listOf(
                CryptoACFormField(
                    SERVER.AC_URL,
                    SERVER.AC_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.url
                ),
                CryptoACFormField(
                    SERVER.AC_PORT,
                    SERVER.AC_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.port.toString()
                ),
            )
        )
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as ACServiceRBACOPAParameters

        if (port != other.port) return false
        if (url != other.url) return false
        if (acType != other.acType) return false

        return true
    }

    override fun hashCode(): Int {
        var result = port
        result = 31 * result + url.hashCode()
        result = 31 * result + acType.hashCode()
        return result
    }
}
