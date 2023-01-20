package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.ac.ACServiceParameters
import eu.fbk.st.cryptoac.ac.ACType
import eu.fbk.st.cryptoac.parameters.RemoteServiceParameters
import kotlinx.serialization.Serializable

/**
 * Parameters ([port] and [url]) for configuring the
 * AC as the AuthzForce XACML Server for RBAC
 */
@Serializable
class ACServiceRBACXACMLAuthzForceParameters(
    override var port: Int,
    override var url: String,
) : RemoteServiceParameters,
    ACServiceParameters {

    /** The type of this service */
    override val acType: ACType = ACType.RBAC_XACML_AUTHZFORCE

    companion object {
        /**
         * Create a ACServiceRBACXACMLAuthzForceParameters object from the given map of
         * [parameters]. Missing values will cause the return object to be null
         */
        fun fromMap(parameters: HashMap<String, String>): ACServiceRBACXACMLAuthzForceParameters {
            return ACServiceRBACXACMLAuthzForceParameters(
                url = parameters[SERVER.AC_URL]!!,
                port = parameters[SERVER.AC_PORT]!!.toInt()
            )
        }

        /**
         * Create a list of CryptoAC form
         * fields from the given [parameters]
         */
        fun toMap(parameters: ACServiceRBACXACMLAuthzForceParameters? = null) = listOf(
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

        other as ACServiceRBACXACMLAuthzForceParameters

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
