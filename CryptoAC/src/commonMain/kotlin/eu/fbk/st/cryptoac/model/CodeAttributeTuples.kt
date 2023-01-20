package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.tuple.AttributeTuple

/** Wrapper for the outcome [code] and the [attributeTuples] */
data class CodeAttributeTuples(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val attributeTuples: HashSet<AttributeTuple>? = null
)
