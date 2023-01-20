package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import java.io.InputStream

/** Wrapper for the outcome [code] and the [stream] */
data class CodeResource(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val stream: InputStream? = null
)
