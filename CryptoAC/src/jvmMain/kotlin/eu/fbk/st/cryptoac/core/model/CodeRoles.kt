package eu.fbk.st.cryptoac.core.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.Role

/** Wrapper for the outcome [code] and the [roles] */
data class CodeRoles(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val roles: HashSet<Role>? = null
)