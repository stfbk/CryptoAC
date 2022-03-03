package eu.fbk.st.cryptoac.implementation.dm

/** Parameters for configuring the DM */
interface DMInterfaceParameters {

    /** The type of this interface */
    val dmType: DMType

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    fun checkParameters(): Boolean

    /** Update updatable fields */
    fun update(updatedParameters: DMInterfaceParameters)

    /** Obscure (e.g., overwrite values of) sensitive fields */
    fun obscureSensitiveFields()
}

/**
 * Parameters ([username], [password], [port] and [url])
 * for configuring a DM compatible with the RBAC MQTT core
 */
interface DMInterfaceRBACMQTTParameters : DMInterfaceParameters {
    /** The username for authentication */
    var username: String

    /** The password for authentication */
    var password: ByteArray

    /** The port of the DM */
    var port: Int

    /** The url of the DM */
    var url: String

    /** Whether to use TLS or not */
    var tls: Boolean
}

/**
 * Parameters ([port] and [url]) for configuring
 * a DM compatible with the RBAC CLOUD core
 */
interface DMInterfaceRBACCLOUDParameters : DMInterfaceParameters {
    /** The port of the DM */
    var port: Int

    /** The url of the DM */
    var url: String
}

/**
 * A DM interface can be implemented by:
 * - CRYPTOAC: CryptoAC Docker container,
 * - MOSQUITTO: Mosquitto Docker container;
 */
enum class DMType {
    CRYPTOAC,
    MOSQUITTO,
}