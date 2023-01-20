package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import eu.fbk.st.cryptoac.OutcomeCode

/** Wrapper for the outcome [code] and a set of [policySetsLinks] */
data class XACMLPolicySetLinksCode(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val policySetsLinks: List<XACMLPolicySetLink>? = null,
)
