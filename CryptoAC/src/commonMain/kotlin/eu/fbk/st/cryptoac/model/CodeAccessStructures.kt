package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.tuple.PermissionType

/**
 * Wrapper for the outcome [code] and a map of
 * [accessStructures] (key is the permission,
 * value is the access structure)
 */
data class CodeAccessStructures(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val accessStructures: HashMap<PermissionType, String>? = null
)