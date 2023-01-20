package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode

/** Wrapper for the outcome [code] and a [string] */
data class CodeString(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val string: String? = null
)
