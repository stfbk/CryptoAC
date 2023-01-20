package eu.fbk.st.cryptoac.parameters

/**
 * Interface defining the methods
 * for handling service parameters
 */
interface ServiceParameters {

    /**
     * Check the parameters are valid through regular
     * expressions and return true if they are, false otherwise
     */
    fun checkParameters(): Boolean

    /** Update updatable fields */
    fun update(updatedParameters: ServiceParameters)

    /** Obscure (e.g., delete values of) sensitive fields */
    fun obscureSensitiveFields()
}



