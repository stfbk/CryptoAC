package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.inputStream
import org.junit.jupiter.api.*

internal abstract class DMInterfaceTest {

    abstract val dm: DMInterface?

    @BeforeAll
    abstract fun setUpAll()

    @BeforeEach
    open fun setUp() {
        assert(dm!!.lock() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    open fun tearDown() {
        assert(dm!!.unlock() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterAll
    abstract fun tearDownAll()



    @Test
    abstract fun `configure once works`()

    @Test
    abstract fun `configure twice works`()

    @Test
    abstract fun `configure with wrong parameters fails`()



    @Test
    open fun `add file once or empty or deleted file works`() {
        val emptyFile = File(name = "empty", enforcement = EnforcementType.COMBINED)
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val newFileContent = "exam content"

        /** add file once */
        run {
            assert(dm!!.addFile(newFile, newFileContent.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add empty file */
        run {
            assert(dm!!.addFile(emptyFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add deleted file */
        run {
            assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.addFile(newFile, "another exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(dm!!.deleteFile(emptyFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    open fun `add file twice fails`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val newFileContent1 = "exam content"
        val newFileContent2 = "second exam content"

        /** add file twice */
        run {
            assert(dm!!.addFile(newFile, newFileContent1.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.addFile(newFile, newFileContent2.inputStream()) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }

        /** Cleanup */
        assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    open fun `read file works`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val fileContent = "exam content"

        /** read file */
        run {
            assert(dm!!.addFile(newFile, fileContent.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            dm!!.readFile(newFile.name).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals(fileContent.toByteArray()))
            }
        }

        /** Cleanup */
        assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    open fun `read non-existing or deleted file fail`() {
        /** read non-existing file */
        run {
            dm!!.readFile("non-existing").apply {
                assert(code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
                assert(stream == null)
            }
        }

        /** read deleted file */
        run {
            val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm!!.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            dm!!.readFile("non-existing").apply {
                assert(code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
                assert(stream == null)
            }
        }
    }

    @Test
    open fun `write file once or empty works`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val otherNewFile = File(name = "test", enforcement = EnforcementType.COMBINED)

        /** write file once */
        run {
            assert(dm!!.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.writeFile(newFile, "updated file content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            dm!!.readFile(newFile.name).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals("updated file content".toByteArray()))
            }
        }

        /** write empty file */
        run {
            assert(dm!!.addFile(otherNewFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.writeFile(otherNewFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            dm!!.readFile(otherNewFile.name).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals("".toByteArray()))
            }
        }

        /** Cleanup */
        assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(dm!!.deleteFile(otherNewFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    open fun `write non-existing or deleted file fail`() {
        /** write non-existing file */
        run {
            val nonExisting = File(name = "non-existing", enforcement = EnforcementType.COMBINED)
            assert(dm!!.writeFile(nonExisting, "non-existing".inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** write deleted file */
        run {
            val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm!!.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.writeFile(newFile, "updated exam content".inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    @Test
    open fun `delete file once works`() {
        /** delete file once */
        run {
            val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm!!.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun `delete non-existing or deleted file fail`() {
        /** delete non-existing file */
        run {
            assert(dm!!.deleteFile("non-existing") == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** delete non-existing file */
        run {
            val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm!!.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }



    @Test
    abstract fun `single and multiple lock and unlock works`()

    @Test
    abstract fun `single and multiple lock and rollback works`()

    @Test
    abstract fun `unlock without locking fails`()

    @Test
    abstract fun `rollback without locking fails`()
}