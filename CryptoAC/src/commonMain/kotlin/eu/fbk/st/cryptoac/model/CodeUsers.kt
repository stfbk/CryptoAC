package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.unit.User

/** Wrapper for the outcome [code] and the [users] */
data class CodeUsers(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val users: HashSet<User>? = null
)
