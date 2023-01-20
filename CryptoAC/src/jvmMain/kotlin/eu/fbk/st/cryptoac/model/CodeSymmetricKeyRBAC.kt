package eu.fbk.st.cryptoac.model

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.crypto.SymmetricKeyCryptoAC

/**
 * Wrapper for the outcome [code]
 * and a symmetric CryptoAC [key]
 * obtained through the [role]
 */
data class CodeSymmetricKeyRBAC(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val key: SymmetricKeyCryptoAC? = null,
    val role: String? = null
)
