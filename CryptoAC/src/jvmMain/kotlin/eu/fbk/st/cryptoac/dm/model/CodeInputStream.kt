package eu.fbk.st.cryptoac.dm.model

import eu.fbk.st.cryptoac.OutcomeCode
import java.io.InputStream

/** Wrapper for the outcome [code] and a [stream] */
data class CodeInputStream(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val stream: InputStream? = null
)
