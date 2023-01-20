package eu.fbk.st.cryptoac.rm

import eu.fbk.st.cryptoac.parameters.ServiceParameters

/** Parameters for configuring the RM */
interface RMServiceParameters : ServiceParameters {

    /** The type of this service */
    val rmType: RMType
}
