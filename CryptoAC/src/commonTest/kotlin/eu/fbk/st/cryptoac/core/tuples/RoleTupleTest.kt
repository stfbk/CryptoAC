package eu.fbk.st.cryptoac.core.tuples

import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.EncryptedAsymKeys
import kotlin.test.Test
import kotlin.test.assertFails

internal class RoleTupleTest {

    private val signature = ByteArray(10)
    private val roleTuple = RoleTuple(
        username = "alice",
        roleName = "employee",
        encryptedAsymEncKeys = EncryptedAsymKeys(signature, signature, AsymKeysType.ENC),
        encryptedAsymSigKeys = EncryptedAsymKeys(signature, signature, AsymKeysType.SIG),
    )

    @Test
    fun `user type signer is accepted`() {
        roleTuple.updateSignature(signature, roleTuple.roleName, ElementTypeWithKey.USER)
    }

    @Test
    fun `role type signer is not accepted`() {
        assertFails {
            roleTuple.updateSignature(signature, roleTuple.roleName, ElementTypeWithKey.ROLE)
        }
    }
}