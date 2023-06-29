package eu.fbk.st.cryptoac.rm.cryptoac

import eu.fbk.st.cryptoac.ac.ACServiceParameters
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceCryptoACParameters
import eu.fbk.st.cryptoac.mm.MMServiceParameters
import kotlinx.serialization.Serializable

/**
 * Wrapper for [crypto], [mmServiceParameters],
 * [ACServiceParameters] and [dmServiceCryptoACParameters],
 * if given
 */
@Serializable
data class RMRBACCryptoACParameters(
    val crypto: CryptoType,
    val mmServiceParameters: MMServiceParameters,
    val acServiceParameters: ACServiceParameters? = null,
    val dmServiceCryptoACParameters: DMServiceCryptoACParameters,
)
