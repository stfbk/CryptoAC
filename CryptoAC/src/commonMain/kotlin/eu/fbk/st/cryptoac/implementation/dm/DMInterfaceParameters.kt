package eu.fbk.st.cryptoac.implementation.dm

import kotlinx.serialization.Serializable

/** Parameters for configuring the DM */
@Serializable
sealed class DMInterfaceParameters {

    /** Check the parameters are valid through regular expressions and return true if they are, false otherwise */
    abstract fun checkParameters(): Boolean

    /** Update updatable fields */
    abstract fun update(updatedParameters: DMInterfaceParameters)

    /** Obscure (e.g., overwrite values of) sensitive fields */
    abstract fun obscureSensitiveFields()

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        return true
    }

    override fun hashCode(): Int {
        return this::class.hashCode()
    }
}
