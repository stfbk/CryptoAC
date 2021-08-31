package eu.fbk.st.cryptoac.core.tuples

import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.crypto.EncryptedAsymKeys
import io.ktor.utils.io.core.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient

/**
 * A RoleTuple links a User with a Role.
 * A RoleTuple is defined by a [username], a [roleName], a positive [roleVersionNumber] and
 * 2 encrypted key pairs: [encryptedAsymEncKeys] and [encryptedAsymSigKeys].
 */
@Serializable
class RoleTuple(
    val username: String, val roleName: String,
    val roleVersionNumber: Int = 1,
    @Transient val encryptedAsymEncKeys: EncryptedAsymKeys? = null,
    @Transient val encryptedAsymSigKeys: EncryptedAsymKeys? = null
) : Tuple() {

    init {
        requirePositiveNumber(roleVersionNumber)
    }

    override fun getBytesForSignature(): ByteArray = ("$username$roleName$roleVersionNumber" +
            "$encryptedAsymEncKeys$encryptedAsymSigKeys").toByteArray()

    /** Check that [newSignerType] is a User, then invoke superclass method. */
    override fun updateSignature(newSignature: ByteArray, newSigner: String, newSignerType: ElementTypeWithKey) {
        when (newSignerType) {
            ElementTypeWithKey.USER -> super.updateSignature(newSignature, newSigner, newSignerType)
            else -> throw IllegalArgumentException("Signed must be a User")
        }
    }

    /** Return a String array of the significant fields of this tuple. */
    override fun toArray(): Array<String> = arrayOf(username, roleName, roleVersionNumber.toString())
}