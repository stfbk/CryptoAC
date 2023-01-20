package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.ac.ACServiceParameters
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.dm.DMServiceParameters
import eu.fbk.st.cryptoac.mm.MMServiceParameters
import eu.fbk.st.cryptoac.mm.MMServiceRemoteUPParameters
import eu.fbk.st.cryptoac.rm.RMServiceParameters
import kotlinx.serialization.Serializable

/**
 * Parameters for configuring a core object
 * for a role-based CAC scheme.
 */
@Serializable
open class CoreParametersRBAC(
    override var user: User,
    override val coreType: CoreType,
    override val cryptoType: CryptoType,
    override val versionNumber: Int = 1,
    override val rmServiceParameters: RMServiceParameters?,
    override val mmServiceParameters: MMServiceParameters,
    override val dmServiceParameters: DMServiceParameters,
    override val acServiceParameters: ACServiceParameters?
) : CoreParameters()