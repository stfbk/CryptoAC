package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.unit.Role

/** Wrapper for the outcome [code] and the [roles] */
data class CodeRoles(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val roles: HashSet<Role>? = null
)
