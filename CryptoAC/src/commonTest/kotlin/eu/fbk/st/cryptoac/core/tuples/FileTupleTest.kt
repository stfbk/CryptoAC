package eu.fbk.st.cryptoac.core.tuples

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import kotlin.test.Test
import kotlin.test.assertFails


internal class FileTupleTest {

    private val signature = ByteArray(10)
    private val fileTuple = FileTuple(
        fileName = "document", fileToken = "token",
        roleToken = ADMIN,
        enforcement = EnforcementType.TRADITIONAL,
    )

    @Test
    fun `user type signer is accepted`() {
        fileTuple.updateSignature(signature, fileTuple.roleToken, ElementTypeWithKey.USER)
    }

    @Test
    fun `role type signer is not accepted`() {
        assertFails {
            fileTuple.updateSignature(signature, fileTuple.roleToken, ElementTypeWithKey.ROLE)
        }
    }
}