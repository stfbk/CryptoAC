package eu.fbk.st.cryptoac.core

import org.junit.jupiter.api.*

/** Test class for class "Core" */
internal abstract class CoreTest {

    abstract val core: Core


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
}