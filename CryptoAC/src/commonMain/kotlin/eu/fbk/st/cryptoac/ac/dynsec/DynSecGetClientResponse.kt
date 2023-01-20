package eu.fbk.st.cryptoac.ac.dynsec

import kotlinx.serialization.Serializable

/**
 * Describe the response received when sending
 * the 'getRole' command to DynSec
 */
@Serializable
data class DynSecGetClientResponse(
    val responses: ArrayList<DynSecGetClientDataResponse>
)

@Serializable
data class DynSecGetClientDataResponse(
    val command: String,
    val data: DynSecClientData? = null,
    val error: String? = null
)

@Serializable
data class DynSecClientData(
    val client: DynSecClientDetailData
)

@Serializable
data class DynSecClientDetailData(
    val username: String,
    val roles: ArrayList<DynSecClientRoleData>,
    val groups: ArrayList<DynSecClientGroupData>
)

@Serializable
data class DynSecClientRoleData(
    val rolename: String,
)
@Serializable
data class DynSecClientGroupData(
    val groupname: String,
)
