package eu.fbk.st.cryptoac.core.model

import eu.fbk.st.cryptoac.OutcomeCode
import kotlinx.serialization.Serializable
import java.io.InputStream

/** Wrapper for the outcome [code] and the [stream] */
data class CodeFile(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val stream: InputStream? = null
)