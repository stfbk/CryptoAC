package eu.fbk.st.cryptoac.mm.mysql

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.ac.ACType
import eu.fbk.st.cryptoac.mm.MMServiceRemoteUPParameters
import eu.fbk.st.cryptoac.mm.MMType
import kotlinx.serialization.Serializable
// TODO duplication with MMServiceRBACMySQLParameters?
/**
 * Parameters ([username], [password], [port] and [url])
 * for configuring the MM as a MySQL database for ABAC.
 */
@Serializable
class MMServiceABACMySQLParameters(
    override var username: String,
    override var password: String,
    override var port: Int,
    override var url: String
) : MMServiceRemoteUPParameters {

    /** The type of this service */
    override val mmType: MMType = MMType.ABAC_MYSQL

    companion object {

        /**
         * Create a MMServiceABACMySQLParameters object from the given map of
         * [parameters]. Missing values will cause a NPE // TODO improve behaviour
         */
        fun fromMap(
            parameters: HashMap<String, String>
        ): MMServiceABACMySQLParameters {
            return MMServiceABACMySQLParameters(
                username = parameters[SERVER.USERNAME]!!,
                port = parameters[SERVER.MM_PORT]!!.toInt(),
                url = parameters[SERVER.MM_URL]!!,
                password = parameters[SERVER.MM_PASSWORD]!!,
            )
        }

        /**
         * Create a list of CryptoAC form
         * fields from the given [parameters]
         */
        fun toMap(parameters: MMServiceABACMySQLParameters? = null) = listOf(
            listOf(
                CryptoACFormField(
                    SERVER.MM_URL,
                    SERVER.MM_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.url
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

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is MMServiceABACMySQLParameters) return false

        if (username != other.username) return false
        if (password != other.password) return false
        if (port != other.port) return false
        if (url != other.url) return false
        if (mmType != other.mmType) return false

        return true
    }

    override fun hashCode(): Int {
        var result = username.hashCode()
        result = 31 * result + password.hashCode()
        result = 31 * result + port
        result = 31 * result + url.hashCode()
        result = 31 * result + mmType.hashCode()
        return result
    }
}
