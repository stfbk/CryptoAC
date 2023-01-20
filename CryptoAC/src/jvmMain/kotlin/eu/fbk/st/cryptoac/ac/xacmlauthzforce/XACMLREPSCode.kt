package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import eu.fbk.st.cryptoac.OutcomeCode

/** Wrapper for the outcome [code] and a [xacmlREPS] */
data class XACMLREPSCode(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val xacmlREPS: XACMLREPS? = null,
)
