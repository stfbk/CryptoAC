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
 * Parameters ([port] and [url]) for configuring
 * the MM as a CryptAC instance in a container
 */
@Serializable
class DMInterfaceCryptoACParameters(
    override var port: Int,
    override var url: String,
) : DMInterfaceRBACCLOUDParameters {

    /** The type of this interface */
    override val dmType: DMType = DMType.CRYPTOAC

    companion object {
        /**
         * Create a DMInterfaceCryptoACParameters object from the given map of
         * [parameters]. Missing values will cause the return object to be null
         */
        fun fromMap(parameters: HashMap<String, String>): DMInterfaceCryptoACParameters {
            return DMInterfaceCryptoACParameters(
                url = parameters[SERVER.DM_URL]!!, port = parameters[SERVER.DM_PORT]!!.toInt(),
            )
        }

        /**
         * Create a list of CryptoAC form
         * fields from the given [parameters]
         */
        fun toMap(parameters: DMInterfaceCryptoACParameters? = null): List<List<CryptoACFormField>> = listOf(
            listOf(
                CryptoACFormField(
                    SERVER.DM_URL,
                    SERVER.DM_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.url
                ),
                CryptoACFormField(
                    SERVER.DM_PORT,
                    SERVER.DM_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.port.toString()
                ),
            )
        )
    }


    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
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

    /** Update updatable fields */
    override fun update(updatedParameters: DMInterfaceParameters) {
        if (updatedParameters is DMInterfaceCryptoACParameters) {
            port = updatedParameters.port
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
        /** No sensitive fields to obscure */
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as DMInterfaceCryptoACParameters

        if (port != other.port) return false
        if (url != other.url) return false

        return true
    }

    override fun hashCode(): Int {
        var result = port
        result = 31 * result + url.hashCode()
        return result
    }
}