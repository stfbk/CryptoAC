package eu.fbk.st.cryptoac.core.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple

/** Wrapper for the outcome [code] and the [permissionTuples] */
data class CodePermissionTuples(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val permissionTuples: HashSet<PermissionTuple>? = null
)