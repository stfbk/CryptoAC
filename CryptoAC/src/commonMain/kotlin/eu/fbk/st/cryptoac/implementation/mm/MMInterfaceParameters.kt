package eu.fbk.st.cryptoac.implementation.mm

/** Parameters for configuring the MM */
interface MMInterfaceParameters {

    /** The type of this interface */
    val mmType: MMType

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    fun checkParameters(): Boolean

    /** Update updatable fields */
    fun update(updatedParameters: MMInterfaceParameters)

    /** Obscure (e.g., overwrite values of) sensitive fields */
    fun obscureSensitiveFields()
}

/**
 * Parameters ([username], [password], [port] and [url])
 * for configuring an MM compatible with the RBAC MQTT core
 */
interface MMInterfaceRBACMQTTParameters : MMInterfaceParameters {
    /** The username for authentication */
    var username: String

    /** The password for authentication */
    var password: String

    /** The port of the MM */
    var port: Int

    /** The url of the MM */
    var url: String
}

/**
 * Parameters ([username], [password], [port] and [url])
 * for configuring an MM compatible with the RBAC CLOUD core
 */
interface MMInterfaceRBACCLOUDParameters : MMInterfaceParameters {
    /** The username for authentication */
    var username: String

    /** The password for authentication */
    var password: String

    /** The port of the MM */
    var port: Int

    /** The url of the MM */
    var url: String
}

/**
 * An MM interface can be implemented by:
 * - MYSQL: MySQL8+ Docker container,
 * - REDIS: Redis Docker container;
 */
enum class MMType {
    MYSQL,
    REDIS,
}