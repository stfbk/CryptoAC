package eu.fbk.st.cryptoac.implementation.rm

/** Parameters for configuring the RM */
interface RMInterfaceParameters {

    /** The type of this interface */
    val rmType: RMType

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    fun checkParameters(): Boolean

    /** Update updatable fields */
    fun update(updatedParameters: RMInterfaceParameters)

    /** Obscure (e.g., overwrite values of) sensitive fields */
    fun obscureSensitiveFields()
}

/**
 * Parameters ([port] and [url]) for configuring
 * an RM compatible with the RBAC MQTT core
 */
interface RMInterfaceRBACCLOUDParameters : RMInterfaceParameters {
    /** The port of the RM */
    var port: Int

    /** The url of the RM */
    var url: String
}

/**
 * An RM interface can be implemented by:
 * - CRYPTOAC: CryptoAC Docker container;
 * - NONE: No RM chosen
 */
enum class RMType {
    CRYPTOAC,
    NONE,
}