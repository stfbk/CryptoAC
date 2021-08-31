package eu.fbk.st.cryptoac.implementation.ds

import kotlinx.serialization.Serializable

/** Parameters for configuring the DS. */
@Serializable
sealed class DSInterfaceParameters {

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise. */
    abstract fun checkParameters(): Boolean

    /** Update updatable fields. */
    abstract fun update(updatedParameters: DSInterfaceParameters)

    /** Obscure (e.g., overwrite values of) sensitive fields. */
    abstract fun obscureSensitiveFields()
}
