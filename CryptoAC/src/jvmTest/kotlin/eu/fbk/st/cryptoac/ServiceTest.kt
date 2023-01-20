package eu.fbk.st.cryptoac

import org.junit.jupiter.api.*

internal abstract class ServiceTest {



    @BeforeAll
    abstract fun setUpAll()

    @BeforeEach
    abstract fun setUp()

    @AfterEach
    abstract fun tearDown()

    @AfterAll
    abstract fun tearDownAll()



    @Test
    open fun alreadyConfigured() {
        // TODO method of Service interface
    }

    @Test
    open fun configure() {
        // TODO method of Service interface
    }

    @Test
    open fun init() {
        // TODO method of Service interface
    }

    @Test
    open fun deinit() {
        // TODO method of Service interface
    }
}