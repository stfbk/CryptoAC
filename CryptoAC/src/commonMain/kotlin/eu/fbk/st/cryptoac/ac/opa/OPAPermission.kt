package eu.fbk.st.cryptoac.ac.opa

import eu.fbk.st.cryptoac.model.tuple.PermissionType
import kotlinx.serialization.Serializable

/**
 * Describe an OPA permission:
 * - [resource] the name of the resource;
 * - [permission] the permission.
 */
@Serializable
data class OPAPermission(
    val resource: String,
    val permission: PermissionType,
)