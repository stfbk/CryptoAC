package eu.fbk.st.cryptoac.mm

import eu.fbk.st.cryptoac.parameters.ServiceParameters

/** Parameters for configuring the MM */
interface MMServiceParameters : ServiceParameters {

    /** The type of this service */
    val mmType: MMType
}