package eu.fbk.st.cryptoac.rm.model

import eu.fbk.st.cryptoac.model.unit.Resource
import kotlinx.serialization.Serializable

/**
 * A wrapper for a write resource request, which has
 * the update [resource], the [username] performing
 * the requests, the [roleName] used to write
 * over the resource and the [symKeyVersionNumber]
 */
@Serializable
data class WriteResourceRBACRequest(
    val username: String,
    val roleName: String,
    val resource: Resource,
    val symKeyVersionNumber: Int,
)
