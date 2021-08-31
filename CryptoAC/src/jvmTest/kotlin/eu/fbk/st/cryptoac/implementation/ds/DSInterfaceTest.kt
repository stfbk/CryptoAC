package eu.fbk.st.cryptoac.implementation.ds

import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal abstract class DSInterfaceTest {

    @BeforeEach
    abstract fun setUp()

    @AfterEach
    abstract fun tearDown()

    @Test
    fun configure() {
        // TODO
    }

    @Test
    fun addFile() {
        `add file once or empty or deleted file works`()
        `add file twice fails`()
    }

    @Test
    fun readFile() {
        `read file works`()
        `read non-existing or deleted file fail`()
    }

    @Test
    fun writeFile() {
        `write file once or empty works`()
        `write non-existing or deleted file fail`()
    }

    @Test
    fun deleteFile() {
        `delete file once works`()
        `delete non-existing or deleted file fail`()
    }

    @Test
    fun lock() {
        // TODO
    }

    @Test
    fun rollback() {
        // TODO
    }

    @Test
    fun unlock() {
        // TODO
    }


    abstract fun `add file once or empty or deleted file works`()
    abstract fun `add file twice fails`()
    abstract fun `read file works`()
    abstract fun `read non-existing or deleted file fail`()
    abstract fun `write file once or empty works`()
    abstract fun `write non-existing or deleted file fail`()
    abstract fun `delete file once works`()
    abstract fun `delete non-existing or deleted file fail`()
}