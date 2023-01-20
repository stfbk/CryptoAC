package eu.fbk.st.cryptoac.model.unit

import eu.fbk.st.cryptoac.Constants.ADMIN
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

internal class UnitElementWithKeysTest {

    @Test
    fun the_admin_token_is_the_name_of_the_admin() {
        assertEquals(User(ADMIN).token, ADMIN)
        assertEquals(Role(ADMIN).token, ADMIN)
    }

    @Test
    fun the_token_of_an_active_element_is_not_the_name_of_the_admin() {
        assertTrue(User("Alice").token != ADMIN)
        assertTrue(Role("Student").token != ADMIN)
    }
}
