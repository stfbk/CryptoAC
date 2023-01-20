package eu.fbk.st.cryptoac.ac.dynsec

import kotlinx.serialization.Serializable

/**
 * Describe the response received when sending
 * the 'getRole' command to DynSec
 */
@Serializable
data class DynSecGetRoleResponse(
    val responses: ArrayList<DynSecGetRoleDataResponse>
)

@Serializable
data class DynSecGetRoleDataResponse(
    val command: String,
    val data: DynSecRoleData? = null,
    val error: String? = null
)

@Serializable
data class DynSecRoleData(
    val role: DynSecRoleDetailData
)

@Serializable
data class DynSecRoleDetailData(
    val rolename: String,
    val acls: ArrayList<DynSecACLData>
)

@Serializable
data class DynSecACLData(
    val acltype: String,
    val topic: String,
    val priority: Int,
    val allow: Boolean
)
