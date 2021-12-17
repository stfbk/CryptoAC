package eu.fbk.st.cryptoac.core

import kotlin.test.Test
import kotlin.test.assertFails


internal class CryptoACObjectTest {

    @Test
    fun `enforcing positive numbers positive values works`() {
        CryptoACObject.requirePositiveNumber(1)
    }

    @Test
    fun `enforcing positive numbers with zero or negative values throws exception`() {
        assertFails { CryptoACObject.requirePositiveNumber(0) }
        assertFails { CryptoACObject.requirePositiveNumber(-1) }
    }
}