package eu.fbk.st.cryptoac.core.elements

import kotlin.test.Test
import kotlin.test.assertFails
import kotlin.test.assertTrue

internal class ElementTest {

    @Test
    fun `token creation for positive values works`() {
        assertTrue(ElementStub("Stub").generateToken(1).length == 1)
    }

    @Test
    fun `token creation with zero or negative values fails`() {
        assertFails { ElementStub("Stub").generateToken(0) }
        assertFails { ElementStub("Stub").generateToken(-1) }
    }
}


class ElementStub(
    override val name: String, override val status: ElementStatus = ElementStatus.DELETED
): Element() {
    override var token: String = generateToken()
    override fun toArray(): Array<String> = arrayOf()
}