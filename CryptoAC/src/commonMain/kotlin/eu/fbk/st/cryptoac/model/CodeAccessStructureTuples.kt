package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.tuple.AccessStructureTuple

/** Wrapper for the outcome [code] and the [accessStructureTuples] */
data class CodeAccessStructureTuples(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val accessStructureTuples: HashSet<AccessStructureTuple>? = null
)
