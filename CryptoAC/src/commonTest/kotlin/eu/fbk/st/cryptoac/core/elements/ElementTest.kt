package eu.fbk.st.cryptoac.core.elements

import kotlin.test.Test
import kotlin.test.assertFails
import kotlin.test.assertTrue

internal class ElementTest {

    @Test
    fun `token creation for positive values works`() {
        assertTrue(Element.generateRandomToken(1).length == 1)
    }

    @Test
    fun `token creation with zero or negative values fails`() {
        assertFails { Element.generateRandomToken(0) }
        assertFails { Element.generateRandomToken(-1) }
    }
}