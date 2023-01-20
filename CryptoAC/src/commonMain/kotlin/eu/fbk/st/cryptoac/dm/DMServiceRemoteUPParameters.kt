package eu.fbk.st.cryptoac.dm

import eu.fbk.st.cryptoac.parameters.RemoteServiceParameters
import eu.fbk.st.cryptoac.parameters.ServiceParameters
import eu.fbk.st.cryptoac.parameters.UPServiceParameters

/**
 * Parameters for configuring the DM as a
 * remote service requiring username and
 * password
 */
interface DMServiceRemoteUPParameters : DMServiceParameters,
    RemoteServiceParameters,
    UPServiceParameters {

    /**
     * Check the parameters are valid through regular
     * expressions and return true if they are, false otherwise
     */
    override fun checkParameters(): Boolean =
        (super<UPServiceParameters>.checkParameters()
        &&
        super<RemoteServiceParameters>.checkParameters())

    /** Update updatable fields */
    override fun update(updatedParameters: ServiceParameters) {
        super<UPServiceParameters>.update(updatedParameters)
        super<RemoteServiceParameters>.update(updatedParameters)
    }

    /** Obscure (e.g., delete values of) sensitive fields */
    override fun obscureSensitiveFields() {
        super<UPServiceParameters>.obscureSensitiveFields()
        super<RemoteServiceParameters>.obscureSensitiveFields()
    }
}
