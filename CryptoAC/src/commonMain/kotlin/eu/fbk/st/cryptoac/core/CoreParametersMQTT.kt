package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.implementation.ds.DSInterfaceMQTTParameters
import eu.fbk.st.cryptoac.implementation.ms.MSInterfaceMySQLParameters
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters for configuring the core object for the MQTT implementation.
 * Besides base parameters, we need to know the parameters to configure the interfaces,
 * i.e., [msMySQLInterfaceParameters] and [dsMQTTInterfaceParameters].
 */
@Serializable
class CoreParametersMQTT(
    override var username: String, override var isAdmin: Boolean,
    override var asymEncPublicKeyBase64: String, override var asymEncPrivateKeyBase64: String,
    override var asymSigPublicKeyBase64: String, override var asymSigPrivateKeyBase64: String,
    override val coreType: CoreType = CoreType.RBAC_MQTT,
    val msMySQLInterfaceParameters: MSInterfaceMySQLParameters,
    val dsMQTTInterfaceParameters: DSInterfaceMQTTParameters,
) : CoreParameters() {

    companion object {
        /**
         * Create a CoreParametersMQTT object from the given map of [parameters].
         * Missing parameters will cause the return value to be null.
         * */
        fun fromMap(parameters: HashMap<String, String>): CoreParametersMQTT? {
            return try {
                CoreParametersMQTT(
                    username = parameters[SERVER.USERNAME]!!, isAdmin = parameters[SERVER.IS_ADMIN].toBoolean(),
                    asymEncPublicKeyBase64 = "mock", asymEncPrivateKeyBase64 = "mock",
                    asymSigPublicKeyBase64 = "mock", asymSigPrivateKeyBase64 = "mock",
                    coreType = CoreType.RBAC_MQTT,
                    msMySQLInterfaceParameters = MSInterfaceMySQLParameters(
                        username = parameters[SERVER.USERNAME]!!, port = parameters[SERVER.MS_PORT]!!.toInt(),
                        url = parameters[SERVER.MS_URL]!!, password = parameters[SERVER.MS_PASSWORD]!!
                    ),
                    dsMQTTInterfaceParameters = DSInterfaceMQTTParameters(
                        port = parameters[SERVER.DS_PORT]!!.toInt(), url = parameters[SERVER.DS_URL]!!,
                        password = parameters[SERVER.DS_PASSWORD]!!
                    ),
                )
            } catch (e: NullPointerException) {
                logger.warn { "Not all parameters were provided" }
                null
            }
        }

    }

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise. */
    override fun checkParameters(): Boolean =
        if (!super.checkParameters()) {
            false
        } else {
            msMySQLInterfaceParameters.checkParameters() && dsMQTTInterfaceParameters.checkParameters()
        }

    /** Update updatable fields. */
    override fun update(updatedParameters: CoreParameters) {
        if (updatedParameters is CoreParametersMQTT) {
            msMySQLInterfaceParameters.update(updatedParameters.msMySQLInterfaceParameters)
            dsMQTTInterfaceParameters.update(updatedParameters.dsMQTTInterfaceParameters)
        }
        else {
            val message = "Given a non-subclass of ${this::class} for update"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }

    /** Obscure (e.g., overwrite values of) sensitive fields. */
    override fun obscureSensitiveFields() {
        super.obscureSensitiveFields()
        msMySQLInterfaceParameters.obscureSensitiveFields()
        dsMQTTInterfaceParameters.obscureSensitiveFields()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        if (!super.equals(other)) return false

        other as CoreParametersMQTT

        if (username != other.username) return false
        if (isAdmin != other.isAdmin) return false
        if (asymEncPublicKeyBase64 != other.asymEncPublicKeyBase64) return false
        if (asymEncPrivateKeyBase64 != other.asymEncPrivateKeyBase64) return false
        if (asymSigPublicKeyBase64 != other.asymSigPublicKeyBase64) return false
        if (asymSigPrivateKeyBase64 != other.asymSigPrivateKeyBase64) return false
        if (coreType != other.coreType) return false
        if (msMySQLInterfaceParameters != other.msMySQLInterfaceParameters) return false
        if (dsMQTTInterfaceParameters != other.dsMQTTInterfaceParameters) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + username.hashCode()
        result = 31 * result + isAdmin.hashCode()
        result = 31 * result + asymEncPublicKeyBase64.hashCode()
        result = 31 * result + asymEncPrivateKeyBase64.hashCode()
        result = 31 * result + asymSigPublicKeyBase64.hashCode()
        result = 31 * result + asymSigPrivateKeyBase64.hashCode()
        result = 31 * result + coreType.hashCode()
        result = 31 * result + msMySQLInterfaceParameters.hashCode()
        result = 31 * result + dsMQTTInterfaceParameters.hashCode()
        return result
    }
}