package eu.fbk.st.cryptoac.ac

import eu.fbk.st.cryptoac.parameters.ServiceParameters

/** Parameters for configuring the AC */
interface ACServiceParameters : ServiceParameters {

    /** The type of this service */
    val acType: ACType
}
