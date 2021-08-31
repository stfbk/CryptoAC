package eu.fbk.st.cryptoac.implementation.rm

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.elements.File
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*

internal abstract class RMInterfaceTest {

    @BeforeEach
    abstract fun setUp()

    @AfterEach
    abstract fun tearDown()

    @Test
    fun configure() {
        // TODO
    }

    @Test
    fun checkAddFile() {
        `check add file once works`()
        `check add file twice, non-existing or deleted file fail`()
    }

    @Test
    fun checkWriteFile() {
        `check write file once works`()
        `check write file twice, non-existing or deleted file fail`()
    }


    abstract fun `check add file once works`()
    abstract fun `check add file twice, non-existing or deleted file fail`()

    abstract fun `check write file once works`()
    abstract fun `check write file twice, non-existing or deleted file fail`()
}