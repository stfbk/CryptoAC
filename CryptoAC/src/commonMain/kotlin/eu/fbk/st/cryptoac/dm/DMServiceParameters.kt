package eu.fbk.st.cryptoac.dm

import eu.fbk.st.cryptoac.parameters.ServiceParameters

/** Parameters for configuring the DM */
interface DMServiceParameters : ServiceParameters {

    /** The type of this service */
    val dmType: DMType
}