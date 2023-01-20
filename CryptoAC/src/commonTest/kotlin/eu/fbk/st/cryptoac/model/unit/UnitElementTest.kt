package eu.fbk.st.cryptoac.model.unit

import kotlin.test.Test
import kotlin.test.assertFails
import kotlin.test.assertTrue

internal class UnitElementTest {

    @Test
    fun token_creation_for_positive_values_works() {
        assertTrue(UnitElement.generateRandomToken(1).length == 1)
    }

    @Test
    fun token_creation_with_zero_or_negative_values_fails() {
        assertFails { UnitElement.generateRandomToken(0) }
        assertFails { UnitElement.generateRandomToken(-1) }
    }
}
