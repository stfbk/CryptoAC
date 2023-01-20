package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode

/** Wrapper for the outcome [code] and a [boolean] value */
data class CodeBoolean(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val boolean: Boolean = true
)
