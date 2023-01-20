package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.tuple.RoleTuple

/** Wrapper for the outcome [code] and the [roleTuples] */
data class CodeRoleTuples(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val roleTuples: HashSet<RoleTuple>? = null
)
