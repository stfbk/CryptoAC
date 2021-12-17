package eu.fbk.st.cryptoac.core.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import kotlinx.serialization.Serializable

/** Wrapper for the outcome [code] and eventual [parameters] */
@Serializable
data class CodeCoreParameters(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val parameters: CoreParameters? = null
)