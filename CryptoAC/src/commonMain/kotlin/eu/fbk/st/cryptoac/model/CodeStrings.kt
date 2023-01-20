package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode

/** Wrapper for the outcome [code] and a set of [strings] */
data class CodeStrings(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val strings: HashSet<String>? = null
)
