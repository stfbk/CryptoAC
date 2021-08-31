package eu.fbk.st.cryptoac.implementation.rm

import kotlinx.serialization.Serializable

/** Parameters for configuring the RM. */
@Serializable
sealed class RMInterfaceParameters {

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise. */
    abstract fun checkParameters(): Boolean

    /** Update updatable fields. */
    abstract fun update(updatedParameters: RMInterfaceParameters)

    /** Obscure (e.g., overwrite values of) sensitive fields. */
    abstract fun obscureSensitiveFields()
}