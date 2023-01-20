package eu.fbk.st.cryptoac.ac.dynsec

import kotlinx.serialization.Serializable

/**
 * Describe a generic response received
 * from the DynSec plugin
 */
@Serializable
data class DynSecGenericResponse(
    val responses: ArrayList<DynSecGenericDataResponse>
)

@Serializable
data class DynSecGenericDataResponse(
    val command: String,
    val error: String? = null
)
