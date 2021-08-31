package eu.fbk.st.cryptoac.proxy

import eu.fbk.st.cryptoac.TestUtilities
import io.ktor.util.*
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

/** Test class for proxy routes for login. */
internal class ProxyLoginRoutesTest {

    @BeforeEach
    fun setUp() {
        TestUtilities.startCloud()
    }

    @AfterEach
    fun tearDown() {
        TestUtilities.stopCloud()
    }



    @Test
    fun `login and logout with correct credentials works`() {
        /** correct login and logout with correct credentials */
        run {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    ProxyUtilities.loginProxy(it, "alice")
                    ProxyUtilities.logoutProxy(it)
                }
            }
        }
    }

    @Test
    fun `logout without login works`() {
        /** logout without login */
        run {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    ProxyUtilities.logoutProxy(it)
                }
            }
        }
    }

    @Test
    fun `double login works`() {
        /** double login */
        run {
            runBlocking {
                TestUtilities.getKtorClientJetty().use {
                    ProxyUtilities.loginProxy(it, "alice")
                    ProxyUtilities.loginProxy(it, "alice")
                }
            }
        }
    }

    @Test
    fun `login with no or incorrect credentials fails`() {
        /** login with no credentials */
        run {
            // TODO
        }

        /** login with incorrect credentials */
        run {
            // TODO
        }
    }
}