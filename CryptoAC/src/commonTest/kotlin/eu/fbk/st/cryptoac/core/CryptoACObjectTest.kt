package eu.fbk.st.cryptoac.core

import kotlin.test.Test
import kotlin.test.assertFails


internal class CryptoACObjectTest {

    private val stub = CryptoACObjectStub()

    @Test
    fun `enforcing positive numbers positive values works`() {
        stub.requirePositiveNumber(1)
    }

    @Test
    fun `enforcing positive numbers with zero or negative values throws exception`() {
        assertFails { stub.requirePositiveNumber(0) }
        assertFails { stub.requirePositiveNumber(-1) }
    }
}

class CryptoACObjectStub: CryptoACObject() {
    override fun toArray(): Array<String> = arrayOf()
}