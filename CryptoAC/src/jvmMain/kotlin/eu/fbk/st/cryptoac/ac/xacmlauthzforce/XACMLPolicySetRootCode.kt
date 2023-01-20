package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import eu.fbk.st.cryptoac.OutcomeCode

/** Wrapper for the outcome [code] and a [xacmlPolicySetRoot] */
data class XACMLPolicySetRootCode(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val xacmlPolicySetRoot: XACMLPolicySetRoot? = null,
)
