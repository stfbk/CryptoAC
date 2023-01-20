package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.parameters.ServiceParameters
import eu.fbk.st.cryptoac.SafeRegex
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.ac.opa.ACServiceRBACOPAParameters
import eu.fbk.st.cryptoac.ac.ACServiceParameters
import eu.fbk.st.cryptoac.ac.dynsec.ACServiceRBACDynSecParameters
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.ACServiceRBACXACMLAuthzForceParameters
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceCryptoACParameters
import eu.fbk.st.cryptoac.dm.mqtt.DMServiceMQTTParameters
import eu.fbk.st.cryptoac.dm.DMServiceParameters
import eu.fbk.st.cryptoac.dm.DMServiceRemoteUPParameters
import eu.fbk.st.cryptoac.rm.cryptoac.RMServiceRBACCryptoACParameters
import eu.fbk.st.cryptoac.rm.RMServiceParameters
import eu.fbk.st.cryptoac.mm.MMServiceParameters
import eu.fbk.st.cryptoac.mm.redis.MMServiceRedisParameters
import eu.fbk.st.cryptoac.mm.MMServiceRemoteUPParameters
import eu.fbk.st.cryptoac.mm.mysql.MMServiceABACMySQLParameters
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQLParameters
import eu.fbk.st.cryptoac.rm.RMServiceRemoteUPParameters
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.*
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Base parameters for configuring the core
 * object, i.e., the [user], the [coreType],
 * the [cryptoType] and the [versionNumber]
 * of the parameters. Then, beside these base
 * parameters, we need to know the parameters
 * to configure the services, i.e.:
 * - [rmServiceParameters];
 * - [mmServiceParameters];
 * - [dmServiceParameters];
 * - [acServiceParameters].
 */
@Serializable
abstract class CoreParameters : ServiceParameters {
    abstract var user: User
    abstract val coreType: CoreType
    abstract val cryptoType: CryptoType
    abstract val versionNumber: Int
    abstract val rmServiceParameters: RMServiceParameters?
    abstract val mmServiceParameters: MMServiceParameters
    abstract val dmServiceParameters: DMServiceParameters
    abstract val acServiceParameters: ACServiceParameters?

    /**
     * Check the parameters are valid through regular
     * expressions and return true if they are, false otherwise
     */
    override fun checkParameters(): Boolean =
        if (!SafeRegex.TEXT.matches(user.name)) {
            logger.warn { "Username ${user.name} does not respect TEXT regex" }
            false
        } else if (
            user.asymEncKeys != null && (
                !SafeRegex.BASE64.matches(user.asymEncKeys!!.public) ||
                !SafeRegex.BASE64.matches(user.asymEncKeys!!.private)
            )
        ) {
            logger.warn { "Encryption keys does not respect BASE64 regex" }
            false
        } else if (
            user.asymSigKeys != null && (
                !SafeRegex.BASE64.matches(user.asymSigKeys!!.public) ||
                !SafeRegex.BASE64.matches(user.asymSigKeys!!.private)
            )
        ) {
            logger.warn { "Signing keys does not respect BASE64 regex" }
            false
        } else if (versionNumber !in 1..1) {
            logger.warn {
                "Parameters version is not supported (version" +
                    " number is $versionNumber, supported are 1..1"
            }
            false
        } else {
            rmServiceParameters?.checkParameters() ?: true &&
            mmServiceParameters.checkParameters() &&
            dmServiceParameters.checkParameters() &&
            acServiceParameters?.checkParameters() ?: true
        }

    /** Update updatable fields */
    override fun update(updatedParameters: ServiceParameters) {
        if (updatedParameters is CoreParameters) {
            updatedParameters.rmServiceParameters?.let { rmServiceParameters?.update(it) }
            mmServiceParameters.update(updatedParameters.mmServiceParameters)
            dmServiceParameters.update(updatedParameters.dmServiceParameters)
            updatedParameters.acServiceParameters?.let { acServiceParameters?.update(it) }
        } else {
            val message = "Given a non-subclass of ${this::class} for update"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }

    /** Obscure (e.g., delete values of) sensitive fields */
    override fun obscureSensitiveFields() {
        user.asymEncKeys?.private = "***"
        user.asymSigKeys?.private = "***"
        rmServiceParameters?.obscureSensitiveFields()
        mmServiceParameters.obscureSensitiveFields()
        dmServiceParameters.obscureSensitiveFields()
        acServiceParameters?.obscureSensitiveFields()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is CoreParameters) return false

        if (user != other.user) return false
        if (coreType != other.coreType) return false
        if (cryptoType != other.cryptoType) return false
        if (versionNumber != other.versionNumber) return false
        if (rmServiceParameters != other.rmServiceParameters) return false
        if (mmServiceParameters != other.mmServiceParameters) return false
        if (dmServiceParameters != other.dmServiceParameters) return false
        if (acServiceParameters != other.acServiceParameters) return false

        return true
    }

    override fun hashCode(): Int {
        var result = user.hashCode()
        result = 31 * result + coreType.hashCode()
        result = 31 * result + cryptoType.hashCode()
        result = 31 * result + versionNumber
        result = 31 * result + (rmServiceParameters?.hashCode() ?: 0)
        result = 31 * result + mmServiceParameters.hashCode()
        result = 31 * result + dmServiceParameters.hashCode()
        result = 31 * result + (acServiceParameters?.hashCode() ?: 0)
        return result
    }
}

val myJson = Json {
    encodeDefaults = true
    serializersModule = SerializersModule {
        /** AC */
        polymorphic(ACServiceParameters::class) {
            subclass(ACServiceRBACXACMLAuthzForceParameters::class)
            subclass(ACServiceRBACOPAParameters::class)
            subclass(ACServiceRBACDynSecParameters::class)
        }


        /** DM */
        polymorphic(DMServiceParameters::class) {
            subclass(DMServiceCryptoACParameters::class)
            subclass(DMServiceMQTTParameters::class)
        }

        polymorphic(DMServiceRemoteUPParameters::class) {
            subclass(DMServiceCryptoACParameters::class)
            subclass(DMServiceMQTTParameters::class)
        }


        /** MM */
        polymorphic(MMServiceParameters::class) {
            subclass(MMServiceABACMySQLParameters::class)
            subclass(MMServiceRBACMySQLParameters::class)
            subclass(MMServiceRedisParameters::class)
        }

        polymorphic(MMServiceRemoteUPParameters::class) {
            subclass(MMServiceABACMySQLParameters::class)
            subclass(MMServiceRBACMySQLParameters::class)
            subclass(MMServiceRedisParameters::class)
        }

        /** RM */
        polymorphic(RMServiceParameters::class) {
            subclass(RMServiceRBACCryptoACParameters::class)
        }

        polymorphic(RMServiceRemoteUPParameters::class) {
            subclass(RMServiceRBACCryptoACParameters::class)
        }

        /** Core */
        polymorphic(CoreParameters::class) {
            subclass(CoreParametersRBAC::class)
        }
    }
}