package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.CryptoACFormField
import eu.fbk.st.cryptoac.InputType
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceMQTTParameters
import eu.fbk.st.cryptoac.implementation.mm.MMInterfaceMySQLParameters
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters for configuring the core object
 * for the MQTT scenario. Besides base parameters,
 * we need to know the parameters to configure the
 * interfaces, i.e., [mmMySQLInterfaceParameters]
 * and [dmMQTTInterfaceParameters]
 */
@Serializable
class CoreParametersMQTT(
    override var user: User,
    override val coreType: CoreType = CoreType.RBAC_MQTT,
    override val cryptoType: CryptoType,
    override val versionNumber: Int = 1,
    val mmMySQLInterfaceParameters: MMInterfaceMySQLParameters,
    val dmMQTTInterfaceParameters: DMInterfaceMQTTParameters,
) : CoreParameters() {

    companion object {
        /**
         * Create a CoreParametersMQTT object from the given map of [parameters].
         * Missing parameters will cause the return value to be null
         */
        fun fromMap(parameters: HashMap<String, String>): CoreParametersMQTT? {
            return try {
                CoreParametersMQTT(
                    user = User(
                        name = parameters[SERVER.USERNAME]!!,
                        isAdmin = parameters[SERVER.IS_ADMIN].toBoolean(),
                    ),
                    coreType = CoreType.RBAC_MQTT,
                    cryptoType = CryptoType.valueOf(parameters[SERVER.CRYPTO]!!),
                    versionNumber = 1,
                    mmMySQLInterfaceParameters = MMInterfaceMySQLParameters(
                        username = parameters[SERVER.USERNAME]!!, port = parameters[SERVER.MS_PORT]!!.toInt(),
                        url = parameters[SERVER.MS_URL]!!, password = parameters[SERVER.MS_PASSWORD]!!
                    ),
                    dmMQTTInterfaceParameters = DMInterfaceMQTTParameters(
                        port = parameters[SERVER.DM_PORT]!!.toInt(), url = parameters[SERVER.DM_URL]!!,
                        password = parameters[SERVER.DM_PASSWORD]!!.toByteArray(), username = parameters[SERVER.USERNAME]!!
                    ),
                )
            } catch (e: NullPointerException) {
                logger.warn { "Not all parameters were provided" }
                null
            }
        }

        /** Create a list of CryptoAC form fields from the given [parameters] */
        fun toMap(parameters: CoreParametersMQTT? = null): List<List<CryptoACFormField>> = listOf(
            listOf(
                CryptoACFormField(
                    SERVER.USERNAME,
                    SERVER.USERNAME,
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.user?.name
                ),
                CryptoACFormField(
                    SERVER.IS_ADMIN,
                    SERVER.IS_ADMIN.replace("_", " "),
                    InputType.checkBox,
                    className = "darkTextField",
                    defaultValue = parameters?.user?.isAdmin.toString()
                ),
                CryptoACFormField(
                    SERVER.CRYPTO,
                    SERVER.CRYPTO,
                    InputType.select,
                    options = CryptoType.values().map { it.toString() },
                    className = "darkTextField",
                    defaultValue = parameters?.cryptoType.toString()
                ),
            ), listOf(
                CryptoACFormField(
                    SERVER.DM_URL,
                    "Broker URL",
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.dmMQTTInterfaceParameters?.url
                ),
                CryptoACFormField(
                    SERVER.DM_PASSWORD,
                    "Broker Password",
                    InputType.password,
                    className = "darkTextField",
                    defaultValue = parameters?.dmMQTTInterfaceParameters?.password?.let { String(it) }
                ),
                CryptoACFormField(
                    SERVER.DM_PORT,
                    "Broker Port",
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.dmMQTTInterfaceParameters?.port.toString()
                ),
            ), listOf(
                CryptoACFormField(
                    SERVER.MS_URL,
                    SERVER.MS_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.mmMySQLInterfaceParameters?.url
                ),
                CryptoACFormField(
                    SERVER.MS_PASSWORD,
                    SERVER.MS_PASSWORD.replace("_", " "),
                    InputType.password,
                    className = "darkTextField",
                    defaultValue = parameters?.mmMySQLInterfaceParameters?.password
                ),
                CryptoACFormField(
                    SERVER.MS_PORT,
                    SERVER.MS_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.mmMySQLInterfaceParameters?.port.toString()
                )
            )
        )
    }

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    override fun checkParameters(): Boolean =
        if (!super.checkParameters()) {
            false
        } else {
            mmMySQLInterfaceParameters.checkParameters() && dmMQTTInterfaceParameters.checkParameters()
        }

    /** Update updatable fields */
    override fun update(updatedParameters: CoreParameters) {
        if (updatedParameters is CoreParametersMQTT) {
            mmMySQLInterfaceParameters.update(updatedParameters.mmMySQLInterfaceParameters)
            dmMQTTInterfaceParameters.update(updatedParameters.dmMQTTInterfaceParameters)
        }
        else {
            val message = "Given a non-subclass of ${this::class} for update"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }

    /** Obscure (e.g., overwrite values of) sensitive fields */
    override fun obscureSensitiveFields() {
        super.obscureSensitiveFields()
        mmMySQLInterfaceParameters.obscureSensitiveFields()
        dmMQTTInterfaceParameters.obscureSensitiveFields()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as CoreParametersMQTT

        if (user != other.user) return false
        if (coreType != other.coreType) return false
        if (cryptoType != other.cryptoType) return false
        if (versionNumber != other.versionNumber) return false
        if (mmMySQLInterfaceParameters != other.mmMySQLInterfaceParameters) return false
        if (dmMQTTInterfaceParameters != other.dmMQTTInterfaceParameters) return false

        return true
    }

    override fun hashCode(): Int {
        var result = user.hashCode()
        result = 31 * result + coreType.hashCode()
        result = 31 * result + cryptoType.hashCode()
        result = 31 * result + versionNumber
        result = 31 * result + mmMySQLInterfaceParameters.hashCode()
        result = 31 * result + dmMQTTInterfaceParameters.hashCode()
        return result
    }

}