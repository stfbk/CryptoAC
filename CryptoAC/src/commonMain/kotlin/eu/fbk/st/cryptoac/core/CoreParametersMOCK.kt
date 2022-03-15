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
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as CoreParametersMOCK

        if (user != other.user) return false
        if (coreType != other.coreType) return false
        if (cryptoType != other.cryptoType) return false
        if (versionNumber != other.versionNumber) return false

        return true
    }

    override fun hashCode(): Int {
        var result = user.hashCode()
        result = 31 * result + coreType.hashCode()
        result = 31 * result + cryptoType.hashCode()
        result = 31 * result + versionNumber
        return result
    }


}