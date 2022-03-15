package eu.fbk.st.cryptoac.core

import kotlinx.coroutines.CoroutineScope
import org.junit.jupiter.api.*

/** Test class for class "Core" */
internal abstract class CoreTest {

    abstract val core: Core

    // TODO find a way to test core objects with all supported interfaces
    //  e.g., test CoreMQTT with MySQL and CoreCloud with Redis. Remember
    //  that JUnit5 does not have easy support for parametrized test classes

    @BeforeAll
    abstract fun setUpAll()

    @BeforeEach
    abstract fun setUp()

    @AfterEach
    abstract fun tearDown()

    @AfterAll
    abstract fun tearDownAll()


    @Test
    abstract fun `init admin once works`()

    @Test
    abstract fun `init admin twice fails`()

    @Test
    abstract fun `init user of existing user works`()

    @Test
    abstract fun `init user twice fails`()

    abstract fun myRun(coreRBAC: CoreRBAC? = null, block: () -> Unit)
    abstract fun myRunBlocking(coreRBAC: CoreRBAC? = null, block: suspend CoroutineScope.() -> Unit)
}