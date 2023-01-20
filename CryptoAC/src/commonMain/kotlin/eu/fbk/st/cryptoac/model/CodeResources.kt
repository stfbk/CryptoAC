package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.unit.Resource

/** Wrapper for the outcome [code] and the [resources] */
data class CodeResources(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val resources: HashSet<Resource>? = null
)
