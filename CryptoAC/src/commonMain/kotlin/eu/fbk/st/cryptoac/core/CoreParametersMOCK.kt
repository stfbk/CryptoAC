package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import kotlinx.serialization.Serializable

/** Parameters for mock implementation of CoreRBAC. Use only during testing and development */
@Serializable
class CoreParametersMOCK(
    override var user: User,
    override val coreType: CoreType = CoreType.RBAC_MOCK,
    override val cryptoType: CryptoType,
    override val versionNumber: Int = 1,
) : CoreParameters() {

    override fun update(updatedParameters: CoreParameters) {}
}