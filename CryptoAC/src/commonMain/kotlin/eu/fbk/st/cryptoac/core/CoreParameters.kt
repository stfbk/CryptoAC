package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.SafeRegex
import kotlinx.serialization.Serializable
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * Base parameters for configuring the core object. We need to know parameters such as
 * the [username], whether the user [isAdmin] or not, the [asymEncPublicKeyBase64],
 * [asymEncPrivateKeyBase64], [asymSigPublicKeyBase64] and [asymSigPrivateKeyBase64]
 * (keys are base64-encoded).
 */
@Serializable
abstract class CoreParameters {
    abstract var username: String
    abstract var isAdmin: Boolean
    abstract var asymEncPublicKeyBase64: String
    abstract var asymEncPrivateKeyBase64: String
    abstract var asymSigPublicKeyBase64: String
    abstract var asymSigPrivateKeyBase64: String
    abstract val coreType: CoreType

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise. */
    open fun checkParameters(): Boolean =
        if (!SafeRegex.TEXT.matches(username)) {
            logger.warn { "Username $username does not respect TEXT regex" }
            false
        } else if (
            !SafeRegex.BASE64.matches(asymEncPublicKeyBase64) ||
            !SafeRegex.BASE64.matches(asymEncPrivateKeyBase64) ||
            !SafeRegex.BASE64.matches(asymSigPublicKeyBase64) ||
            !SafeRegex.BASE64.matches(asymSigPrivateKeyBase64)
        ) {
            logger.warn { "Keys does not respect BASE64 regex" }
            false
        } else {
            true
        }

    /** Update updatable fields. */
    abstract fun update(updatedParameters: CoreParameters)

    /** Obscure (e.g., overwrite values of) sensitive fields. */
    open fun obscureSensitiveFields() {
        asymEncPrivateKeyBase64 = "***"
        asymSigPrivateKeyBase64 = "***"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as CoreParameters

        if (username != other.username) return false
        if (isAdmin != other.isAdmin) return false
        if (asymEncPublicKeyBase64 != other.asymEncPublicKeyBase64) return false
        if (asymEncPrivateKeyBase64 != other.asymEncPrivateKeyBase64) return false
        if (asymSigPublicKeyBase64 != other.asymSigPublicKeyBase64) return false
        if (asymSigPrivateKeyBase64 != other.asymSigPrivateKeyBase64) return false
        if (coreType != other.coreType) return false

        return true
    }

    override fun hashCode(): Int {
        var result = username.hashCode()
        result = 31 * result + isAdmin.hashCode()
        result = 31 * result + asymEncPublicKeyBase64.hashCode()
        result = 31 * result + asymEncPrivateKeyBase64.hashCode()
        result = 31 * result + asymSigPublicKeyBase64.hashCode()
        result = 31 * result + asymSigPrivateKeyBase64.hashCode()
        result = 31 * result + coreType.hashCode()
        return result
    }
}


/**
 * A core interface can be implemented by:
 * - RBAC_CLOUD: implementation of a role-based CAC for Cloud scenarios with microservice containers.
 * - RBAC_MQTT: implementation of a role-based CAC for MQTT scenarios with microservice containers.
 */
enum class CoreType {
    RBAC_CLOUD,
    RBAC_MQTT
}