package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.CryptoACFormField
import eu.fbk.st.cryptoac.InputType
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceCloudParameters
import eu.fbk.st.cryptoac.implementation.mm.MMInterfaceMySQLParameters
import eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceCloudParameters
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters for configuring the core object
 * for the Cloud scenario. Besides base parameters,
 * we need to know the parameters to configure the
 * interfaces, i.e., [rmCloudInterfaceParameters],
 * [mmMySQLInterfaceParameters], [dmCloudInterfaceParameters]
 * and [opaInterfaceParameters]
 */
@Serializable
class CoreParametersCLOUD(
    override var user: User,
    override val coreType: CoreType = CoreType.RBAC_CLOUD,
    override val cryptoType: CryptoType,
    override val versionNumber: Int = 1,
    val rmCloudInterfaceParameters: RMInterfaceCloudParameters,
    val mmMySQLInterfaceParameters: MMInterfaceMySQLParameters,
    val dmCloudInterfaceParameters: DMInterfaceCloudParameters,
    val opaInterfaceParameters: OPAInterfaceParameters
) : CoreParameters() {

    companion object {
        /**
         * Create a CoreParametersCLOUD object from the given map of [parameters].
         * Missing parameters will cause the return value to be null
         */
        fun fromMap(parameters: HashMap<String, String>): CoreParametersCLOUD? {
            return try {
                CoreParametersCLOUD(
                    user = User(
                        name = parameters[SERVER.USERNAME]!!,
                        isAdmin = parameters[SERVER.IS_ADMIN].toBoolean(),
                    ),
                    coreType = CoreType.RBAC_CLOUD,
                    cryptoType = CryptoType.valueOf(parameters[SERVER.CRYPTO]!!),
                    versionNumber = 1,
                    rmCloudInterfaceParameters = RMInterfaceCloudParameters(
                        port = parameters[SERVER.RM_PORT]!!.toInt(), url = parameters[SERVER.RM_URL]!!
                    ),
                    mmMySQLInterfaceParameters = MMInterfaceMySQLParameters(
                        username = parameters[SERVER.USERNAME]!!, port = parameters[SERVER.MS_PORT]!!.toInt(),
                        url = parameters[SERVER.MS_URL]!!, password = parameters[SERVER.MS_PASSWORD]!!
                    ),
                    dmCloudInterfaceParameters = DMInterfaceCloudParameters(
                        port = parameters[SERVER.DM_PORT]!!.toInt(), url = parameters[SERVER.DM_URL]!!
                    ),
                    opaInterfaceParameters = OPAInterfaceParameters(
                        port = parameters[SERVER.OPA_PORT]!!.toInt(), url = parameters[SERVER.OPA_URL]!!
                    ),
                )
            } catch (e: NullPointerException) {
                logger.warn { "Not all parameters were provided" }
                null
            }
        }

        /** Create a list of CryptoAC form fields from the given [parameters] */
        fun toMap(parameters: CoreParametersCLOUD? = null): List<List<CryptoACFormField>> = listOf(
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
                    SERVER.RM_URL,
                    SERVER.RM_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.rmCloudInterfaceParameters?.url
                ),
                CryptoACFormField(
                    SERVER.RM_PORT,
                    SERVER.RM_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.rmCloudInterfaceParameters?.port.toString()
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
                ),
            ), listOf(
                CryptoACFormField(
                    SERVER.DM_URL,
                    SERVER.DM_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.dmCloudInterfaceParameters?.url
                ),
                CryptoACFormField(
                    SERVER.DM_PORT,
                    SERVER.DM_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.dmCloudInterfaceParameters?.port.toString()
                ),
            ), listOf(
                CryptoACFormField(
                    SERVER.OPA_URL,
                    SERVER.OPA_URL.replace("_", " "),
                    InputType.text,
                    className = "darkTextField",
                    defaultValue = parameters?.opaInterfaceParameters?.url
                ),
                CryptoACFormField(
                    SERVER.OPA_PORT,
                    SERVER.OPA_PORT.replace("_", " "),
                    InputType.number,
                    className = "darkTextField",
                    defaultValue = parameters?.opaInterfaceParameters?.port.toString()
                ),
            )
        )
    }

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    override fun checkParameters(): Boolean =
        if (!super.checkParameters()) {
            false
        } else {
            rmCloudInterfaceParameters.checkParameters() &&
            mmMySQLInterfaceParameters.checkParameters() &&
            dmCloudInterfaceParameters.checkParameters() &&
            opaInterfaceParameters.checkParameters()
        }

    /** Update updatable fields */
    override fun update(updatedParameters: CoreParameters) {
        if (updatedParameters is CoreParametersCLOUD) {
            rmCloudInterfaceParameters.update(updatedParameters.rmCloudInterfaceParameters)
            mmMySQLInterfaceParameters.update(updatedParameters.mmMySQLInterfaceParameters)
            dmCloudInterfaceParameters.update(updatedParameters.dmCloudInterfaceParameters)
            opaInterfaceParameters.update(updatedParameters.opaInterfaceParameters)
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
        rmCloudInterfaceParameters.obscureSensitiveFields()
        mmMySQLInterfaceParameters.obscureSensitiveFields()
        dmCloudInterfaceParameters.obscureSensitiveFields()
        opaInterfaceParameters.obscureSensitiveFields()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as CoreParametersCLOUD

        if (user != other.user) return false
        if (coreType != other.coreType) return false
        if (cryptoType != other.cryptoType) return false
        if (versionNumber != other.versionNumber) return false
        if (rmCloudInterfaceParameters != other.rmCloudInterfaceParameters) return false
        if (mmMySQLInterfaceParameters != other.mmMySQLInterfaceParameters) return false
        if (dmCloudInterfaceParameters != other.dmCloudInterfaceParameters) return false
        if (opaInterfaceParameters != other.opaInterfaceParameters) return false

        return true
    }

    override fun hashCode(): Int {
        var result = user.hashCode()
        result = 31 * result + coreType.hashCode()
        result = 31 * result + cryptoType.hashCode()
        result = 31 * result + versionNumber
        result = 31 * result + rmCloudInterfaceParameters.hashCode()
        result = 31 * result + mmMySQLInterfaceParameters.hashCode()
        result = 31 * result + dmCloudInterfaceParameters.hashCode()
        result = 31 * result + opaInterfaceParameters.hashCode()
        return result
    }


}