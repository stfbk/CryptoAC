package eu.fbk.st.cryptoac.core

import org.junit.jupiter.api.Test

/** Test class for class "Core". */
internal abstract class CoreTest {

    @Test
    fun initAdmin() {
        `init admin once works`()
        `init admin twice fails`()
    }

    @Test
    fun initUser() {
        `init user of existing user works`()
        `init user of non-existing, operational or deleted user fails`()
    }

    abstract fun `init admin once works`()
    abstract fun `init admin twice fails`()

    abstract fun `init user of existing user works`()
    abstract fun `init user of non-existing, operational or deleted user fails`()
}