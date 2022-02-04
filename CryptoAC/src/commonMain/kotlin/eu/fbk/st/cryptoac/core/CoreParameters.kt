package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.SafeRegex
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.implementation.dm.*
import eu.fbk.st.cryptoac.implementation.mm.*
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceCryptoACParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceRBACCLOUDParameters
import kotlinx.serialization.Serializable
import kotlinx.serialization.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.*
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Base parameters for configuring the core
 * object, i.e., the [user], the [coreType],
 * the [cryptoType] and the [versionNumber]
 * of the parameters
 */
@Serializable
abstract class CoreParameters {
    abstract var user: User
    abstract val coreType: CoreType
    abstract val cryptoType: CryptoType
    abstract val versionNumber: Int

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    open fun checkParameters(): Boolean =
        if (!SafeRegex.TEXT.matches(user.name)) {
            logger.warn { "Username ${user.name} does not respect TEXT regex" }
            false
        } else if (
            user.asymEncKeys != null && (
            !SafeRegex.BASE64.matches(user.asymEncKeys!!.public) ||
            !SafeRegex.BASE64.matches(user.asymEncKeys!!.private))
        ) {
            logger.warn { "Encryption keys does not respect BASE64 regex" }
            false
        } else if (
            user.asymSigKeys != null && (
            !SafeRegex.BASE64.matches(user.asymSigKeys!!.public) ||
            !SafeRegex.BASE64.matches(user.asymSigKeys!!.private))
        ) {
            logger.warn { "Signing keys does not respect BASE64 regex" }
            false
        } else if (versionNumber !in 1..1) {
            logger.warn { "Parameters version is not supported (version" +
                    " number is $versionNumber, supported are 1..1" }
            false
        } else {
            true
        }

    /** Update updatable fields */
    abstract fun update(updatedParameters: CoreParameters)

    /** Obscure (e.g., overwrite values of) sensitive fields */
    open fun obscureSensitiveFields() {
        user.asymEncKeys?.private = "***"
        user.asymSigKeys?.private = "***"
    }
}


/**
 * A core interface (whose name is composed of the policy model and the scenario) can be implemented by:
 * - RBAC_CLOUD: RB-CAC scheme for Cloud scenarios with microservice containers;
 * - RBAC_MQTT: RB-CAC scheme for MQTT scenarios with microservice containers;
 * - RBAC_MOCK: mock implementation of a role-based CAC scheme.
 */
enum class CoreType {
    RBAC_CLOUD,
    RBAC_MQTT,
    RBAC_MOCK;

    /** Return a pretty representation of the core type */
    fun toPrettyString(): String = when(this) {
        RBAC_CLOUD -> "RBAC for the Cloud"
        RBAC_MQTT -> "RBAC for MQTT"
        RBAC_MOCK -> "RBAC for testing"
    }
}


val module = SerializersModule {
    polymorphic(MMInterfaceRBACCLOUDParameters::class) {
        subclass(MMInterfaceMySQLParameters::class)
    }
    polymorphic(MMInterfaceRBACMQTTParameters::class) {
        subclass(MMInterfaceRedisParameters::class)
    }
    polymorphic(MMInterfaceParameters::class) {
        subclass(MMInterfaceMySQLParameters::class)
        subclass(MMInterfaceRedisParameters::class)
    }
    polymorphic(DMInterfaceRBACCLOUDParameters::class) {
        subclass(DMInterfaceCryptoACParameters::class)
    }
    polymorphic(DMInterfaceRBACMQTTParameters::class) {
        subclass(DMInterfaceMosquittoParameters::class)
    }
    polymorphic(DMInterfaceParameters::class) {
        subclass(DMInterfaceCryptoACParameters::class)
        subclass(DMInterfaceMosquittoParameters::class)
    }
    polymorphic(RMInterfaceRBACCLOUDParameters::class) {
        subclass(RMInterfaceCryptoACParameters::class)
    }
    polymorphic(CoreParameters::class) {
        subclass(CoreParametersMQTT::class)
        subclass(CoreParametersCLOUD::class)
        subclass(CoreParametersMOCK::class)
    }
}

val myJson = Json {
    encodeDefaults = true
    serializersModule = module
}

