package eu.fbk.st.cryptoac.core.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.crypto.SymmetricKeyCryptoAC

/** Wrapper for the outcome [code] and a symmetric CryptoAC [key] with the [versionNumber] */
data class CodeSymmetricKeyCryptoAC(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val key: SymmetricKeyCryptoAC? = null,
    val versionNumber: Int? = null
)