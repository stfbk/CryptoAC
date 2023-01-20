package eu.fbk.st.cryptoac.ac.dynsec

import kotlinx.serialization.Serializable

/**
 * Describe the response received when sending
 * the 'listRoles' command to DynSec
 */
@Serializable
data class DynSecResponsesResponse(
    val responses: ArrayList<DynSecListRolesResponse>
)

@Serializable
data class DynSecListRolesResponse(
    val command: String,
    val data: DynSecRolesData
)

@Serializable
data class DynSecRolesData(
    val totalCount: Int,
    val roles: ArrayList<String>
)
