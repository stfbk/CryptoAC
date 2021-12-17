package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.SafeRegex
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import kotlinx.serialization.Serializable
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
 * A core interface can be implemented by:
 * - RBAC_CLOUD: implementation of a role-based CAC scheme for Cloud scenarios with microservice Docker containers;
 * - RBAC_MQTT: implementation of a role-based CAC scheme for MQTT scenarios with microservice containers;
 * - RBAC_MOCK: mock implementation of a role-based CAC scheme.
 */
enum class CoreType {
    RBAC_CLOUD,
    RBAC_MQTT,
    RBAC_MOCK,
}