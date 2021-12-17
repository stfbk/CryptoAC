package eu.fbk.st.cryptoac.core.elements

import eu.fbk.st.cryptoac.Constants.ADMIN
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

internal class ActiveElementTest {

    @Test
    fun `the admin token is the name of the admin` () {
        assertEquals(User(ADMIN).token, ADMIN)
        assertEquals(Role(ADMIN).token, ADMIN)
    }

    @Test
    fun `the token of an active element is not the name of the admin` () {
        assertTrue(User("Alice").token != ADMIN)
        assertTrue(Role("Student").token != ADMIN)
    }
}