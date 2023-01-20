package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import eu.fbk.st.cryptoac.OutcomeCode

/** Wrapper for the outcome [code] and a [xacmlRPS] */
data class XACMLRPSCode(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val xacmlRPS: XACMLRPS? = null,
)
