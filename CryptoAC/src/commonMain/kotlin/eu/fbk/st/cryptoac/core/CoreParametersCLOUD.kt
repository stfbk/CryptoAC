package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceRBACCLOUDParameters
import eu.fbk.st.cryptoac.implementation.mm.MMInterfaceRBACCLOUDParameters
import eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceRBACCLOUDParameters
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters for configuring the core object
 * for the Cloud scenario. Besides base parameters,
 * we need to know the parameters to configure the
 * interfaces, i.e., [rmInterfaceParameters],
 * [mmInterfaceParameters], [dmInterfaceParameters]
 * and [opaInterfaceParameters]
 */
@Serializable
class CoreParametersCLOUD(
    override var user: User,
    override val coreType: CoreType = CoreType.RBAC_CLOUD,
    override val cryptoType: CryptoType,
    override val versionNumber: Int = 1,
    val rmInterfaceParameters: RMInterfaceRBACCLOUDParameters,
    val mmInterfaceParameters: MMInterfaceRBACCLOUDParameters,
    val dmInterfaceParameters: DMInterfaceRBACCLOUDParameters,
    val opaInterfaceParameters: OPAInterfaceParameters
) : CoreParameters() {

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    override fun checkParameters(): Boolean =
        if (!super.checkParameters()) {
            false
        } else {
            rmInterfaceParameters.checkParameters() &&
            mmInterfaceParameters.checkParameters() &&
            dmInterfaceParameters.checkParameters() &&
            opaInterfaceParameters.checkParameters()
        }

    /** Update updatable fields */
    override fun update(updatedParameters: CoreParameters) {
        if (updatedParameters is CoreParametersCLOUD) {
            rmInterfaceParameters.update(updatedParameters.rmInterfaceParameters)
            mmInterfaceParameters.update(updatedParameters.mmInterfaceParameters)
            dmInterfaceParameters.update(updatedParameters.dmInterfaceParameters)
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
        rmInterfaceParameters.obscureSensitiveFields()
        mmInterfaceParameters.obscureSensitiveFields()
        dmInterfaceParameters.obscureSensitiveFields()
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
        if (rmInterfaceParameters != other.rmInterfaceParameters) return false
        if (mmInterfaceParameters != other.mmInterfaceParameters) return false
        if (dmInterfaceParameters != other.dmInterfaceParameters) return false
        if (opaInterfaceParameters != other.opaInterfaceParameters) return false

        return true
    }

    override fun hashCode(): Int {
        var result = user.hashCode()
        result = 31 * result + coreType.hashCode()
        result = 31 * result + cryptoType.hashCode()
        result = 31 * result + versionNumber
        result = 31 * result + rmInterfaceParameters.hashCode()
        result = 31 * result + mmInterfaceParameters.hashCode()
        result = 31 * result + dmInterfaceParameters.hashCode()
        result = 31 * result + opaInterfaceParameters.hashCode()
        return result
    }

}