package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.parameters.ServiceParameters
import kotlinx.serialization.Serializable

/**
 * Wrapper for the outcome [code]
 * and eventual service [parameters]
 */
@Serializable
data class CodeServiceParameters(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val parameters: ServiceParameters? = null
)