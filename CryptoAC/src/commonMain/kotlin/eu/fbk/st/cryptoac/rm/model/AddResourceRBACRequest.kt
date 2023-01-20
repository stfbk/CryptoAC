package eu.fbk.st.cryptoac.rm.model

import eu.fbk.st.cryptoac.model.unit.Resource
import eu.fbk.st.cryptoac.model.tuple.PermissionTuple
import kotlinx.serialization.Serializable

/**
 * A wrapper for an add resource request, which has
 * the new [resource], the new [permissionTuple]
 * giving the admin access to the resource and the
 * [symKeyVersionNumber]
 */
@Serializable
data class AddResourceRBACRequest(
    val resource: Resource,
    val permissionTuple: PermissionTuple,
    val symKeyVersionNumber: Int,
)