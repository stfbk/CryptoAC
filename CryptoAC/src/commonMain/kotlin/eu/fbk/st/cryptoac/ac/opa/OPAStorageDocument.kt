package eu.fbk.st.cryptoac.ac.opa

import eu.fbk.st.cryptoac.OutcomeCode

/** Wrapper for the outcome [code] and a [opaDocument] */
data class OPAStorageDocument(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val opaDocument: OPADocument? = null,
)
