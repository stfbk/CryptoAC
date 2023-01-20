package eu.fbk.st.cryptoac.model

import kotlin.test.Test
import kotlin.test.assertFails

internal class CryptoACObjectTest {

    @Test
    fun enforcing_positive_numbers_positive_values_works() {
        Element.requirePositiveNumber(1)
    }

    @Test
    fun enforcing_positive_numbers_with_zero_or_negative_values_throws_exception() {
        assertFails { Element.requirePositiveNumber(0) }
        assertFails { Element.requirePositiveNumber(-1) }
    }
}
