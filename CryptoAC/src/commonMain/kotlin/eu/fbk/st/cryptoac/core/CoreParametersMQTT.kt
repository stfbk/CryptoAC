package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceRBACMQTTParameters
import eu.fbk.st.cryptoac.implementation.mm.MMInterfaceRBACMQTTParameters
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Parameters for configuring the core object
 * for the MQTT scenario. Besides base parameters,
 * we need to know the parameters to configure the
 * interfaces, i.e., [mmInterfaceParameters]
 * and [dmInterfaceParameters]
 */
@Serializable
class CoreParametersMQTT(
    override var user: User,
    override val coreType: CoreType = CoreType.RBAC_MQTT,
    override val cryptoType: CryptoType,
    override val versionNumber: Int = 1,
    val mmInterfaceParameters: MMInterfaceRBACMQTTParameters,
    val dmInterfaceParameters: DMInterfaceRBACMQTTParameters,
) : CoreParameters() {

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    override fun checkParameters(): Boolean =
        if (!super.checkParameters()) {
            false
        } else {
            mmInterfaceParameters.checkParameters() && dmInterfaceParameters.checkParameters()
        }

    /** Update updatable fields */
    override fun update(updatedParameters: CoreParameters) {
        if (updatedParameters is CoreParametersMQTT) {
            mmInterfaceParameters.update(updatedParameters.mmInterfaceParameters)
            dmInterfaceParameters.update(updatedParameters.dmInterfaceParameters)
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
        mmInterfaceParameters.obscureSensitiveFields()
        dmInterfaceParameters.obscureSensitiveFields()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as CoreParametersMQTT

        if (user != other.user) return false
        if (coreType != other.coreType) return false
        if (cryptoType != other.cryptoType) return false
        if (versionNumber != other.versionNumber) return false
        if (mmInterfaceParameters != other.mmInterfaceParameters) return false
        if (dmInterfaceParameters != other.dmInterfaceParameters) return false

        return true
    }

    override fun hashCode(): Int {
        var result = user.hashCode()
        result = 31 * result + coreType.hashCode()
        result = 31 * result + cryptoType.hashCode()
        result = 31 * result + versionNumber
        result = 31 * result + mmInterfaceParameters.hashCode()
        result = 31 * result + dmInterfaceParameters.hashCode()
        return result
    }


}