package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.implementation.ds.DSInterfaceCloudParameters
import eu.fbk.st.cryptoac.implementation.ms.MSInterfaceMySQLParameters
import eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceCloudParameters
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters for configuring the core object for the Cloud implementation.
 * Besides base parameters, we need to know the parameters to configure the interfaces, 
 * i.e., [rmCloudInterfaceParameters], [msMySQLInterfaceParameters],
 * [dsCloudInterfaceParameters] and [opaInterfaceParameters].
 */
@Serializable
class CoreParametersCloud(
    override var username: String, override var isAdmin: Boolean,
    override var asymEncPublicKeyBase64: String, override var asymEncPrivateKeyBase64: String,
    override var asymSigPublicKeyBase64: String, override var asymSigPrivateKeyBase64: String,
    override val coreType: CoreType = CoreType.RBAC_CLOUD,
    val rmCloudInterfaceParameters: RMInterfaceCloudParameters,
    val msMySQLInterfaceParameters: MSInterfaceMySQLParameters,
    val dsCloudInterfaceParameters: DSInterfaceCloudParameters,
    val opaInterfaceParameters: OPAInterfaceParameters
) : CoreParameters() {

    companion object {
        /**
         * Create a CoreParametersCloud object from the given map of [parameters].
         * Missing parameters will cause the return value to be null.
         * */
        fun fromMap(parameters: HashMap<String, String>): CoreParametersCloud? {
            return try {
                CoreParametersCloud(
                    username = parameters[SERVER.USERNAME]!!, isAdmin = parameters[SERVER.IS_ADMIN].toBoolean(),
                    asymEncPublicKeyBase64 = "mock", asymEncPrivateKeyBase64 = "mock",
                    asymSigPublicKeyBase64 = "mock", asymSigPrivateKeyBase64 = "mock",
                    coreType = CoreType.RBAC_CLOUD,
                    rmCloudInterfaceParameters = RMInterfaceCloudParameters(
                        port = parameters[SERVER.RM_PORT]!!.toInt(), url = parameters[SERVER.RM_URL]!!
                    ),
                    msMySQLInterfaceParameters = MSInterfaceMySQLParameters(
                        username = parameters[SERVER.USERNAME]!!, port = parameters[SERVER.MS_PORT]!!.toInt(),
                        url = parameters[SERVER.MS_URL]!!, password = parameters[SERVER.MS_PASSWORD]!!
                    ),
                    dsCloudInterfaceParameters = DSInterfaceCloudParameters(
                        port = parameters[SERVER.DS_PORT]!!.toInt(), url = parameters[SERVER.DS_URL]!!
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
    }

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise. */
    override fun checkParameters(): Boolean =
        if (!super.checkParameters()) {
            false
        } else {
            rmCloudInterfaceParameters.checkParameters() &&
                    msMySQLInterfaceParameters.checkParameters() &&
                    dsCloudInterfaceParameters.checkParameters() &&
                    opaInterfaceParameters.checkParameters()
        }

    /** Update updatable fields. */
    override fun update(updatedParameters: CoreParameters) {
        if (updatedParameters is CoreParametersCloud) {
            rmCloudInterfaceParameters.update(updatedParameters.rmCloudInterfaceParameters)
            msMySQLInterfaceParameters.update(updatedParameters.msMySQLInterfaceParameters)
            dsCloudInterfaceParameters.update(updatedParameters.dsCloudInterfaceParameters)
            opaInterfaceParameters.update(updatedParameters.opaInterfaceParameters)
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
        rmCloudInterfaceParameters.obscureSensitiveFields()
        msMySQLInterfaceParameters.obscureSensitiveFields()
        dsCloudInterfaceParameters.obscureSensitiveFields()
        opaInterfaceParameters.obscureSensitiveFields()
    }
}