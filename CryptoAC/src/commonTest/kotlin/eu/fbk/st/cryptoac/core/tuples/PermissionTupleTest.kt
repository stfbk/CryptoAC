package eu.fbk.st.cryptoac.core.tuples

import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import kotlin.test.Test
import kotlin.test.assertFails

internal class PermissionTupleTest {

    private val signature = ByteArray(10)
    private val permissionTuple = PermissionTuple(
        roleName = "employee", fileName = "document",
        roleToken = "roleToken", fileToken = "fileToken",
        permission = PermissionType.READ,
        encryptedSymKey = EncryptedSymKey(ByteArray(10))
    )

    @Test
    fun `user type signer is accepted`() {
        permissionTuple.updateSignature(signature, permissionTuple.roleToken, ElementTypeWithKey.USER)
    }

    @Test
    fun `role type signer is not accepted`() {
        assertFails {
            permissionTuple.updateSignature(signature, permissionTuple.roleToken, ElementTypeWithKey.ROLE)
        }
    }
}