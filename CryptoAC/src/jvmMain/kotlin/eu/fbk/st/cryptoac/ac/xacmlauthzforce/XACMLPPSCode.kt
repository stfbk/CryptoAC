package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import eu.fbk.st.cryptoac.OutcomeCode

/** Wrapper for the outcome [code] and a [xacmlPPS] */
data class XACMLPPSCode(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val xacmlPPS: XACMLPPS? = null,
)
