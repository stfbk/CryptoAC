package eu.fbk.st.cryptoac.core.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.File

/** Wrapper for the outcome [code] and the [files] */
data class CodeFiles(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val files: HashSet<File>? = null
)