package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.unit.Attribute

/** Wrapper for the outcome [code] and a set of [attributes] */
data class CodeAttributes(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val attributes: HashSet<Attribute>? = null
)