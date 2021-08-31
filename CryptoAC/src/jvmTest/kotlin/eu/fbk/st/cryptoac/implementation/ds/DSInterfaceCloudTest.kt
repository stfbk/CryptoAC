package eu.fbk.st.cryptoac.implementation.ds

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.core.elements.File
import org.junit.jupiter.api.Assertions.*

internal class DSInterfaceCloudTest : DSInterfaceTest() {

    private val ds = DSInterfaceCloud(Parameters.dsInterfaceCloudParameters)
    
    override fun setUp() {
        TODO("Not yet implemented")
    }

    override fun tearDown() {
        TODO("Not yet implemented")
    }

    override fun `add file once or empty or deleted file works`() {
        val newFile = File(name = "exam")

        /** add file once */
        run {
            assert(ds.addFile(newFile, "exam content".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add empty file */
        run {
            assert(ds.addFile(File("empty"), "".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add delete file */
        run {
            assert(ds.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ds.addFile(newFile, "another exam content".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }
    }
    override fun `add file twice fails`() {
        /** add file twice */
        run {
            val newFile = File(name = "exam")
            assert(ds.addFile(newFile, "exam content".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(ds.addFile(newFile, "second exam content".toByteArray().inputStream()) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }
    }

    override fun `read file works`() {
        val fileContent = "exam content"
        val newFile = File(name = "exam")
        assert(ds.addFile(newFile, fileContent.toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)

        /** read file */
        run {
            ds.readFile(newFile.name).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals(fileContent.toByteArray()))
            }
        }
    }
    override fun `read non-existing or deleted file fail`() {
        /** read non-existing file */
        run {
            ds.readFile("non-existing").apply {
                assert(code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
                assert(stream == null)
            }
        }

        /** read deleted file */
        run {
            val newFile = File(name = "exam")
            assert(ds.addFile(newFile, "exam content".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(ds.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            ds.readFile("non-existing").apply {
                assert(code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
                assert(stream == null)
            }
        }
    }

    override fun `write file once or empty works`() {
        val newFile = File(name = "exam")

        /** write file once */
        run {
            assert(ds.addFile(newFile, "exam content".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(ds.writeFile(newFile, "updated exam content".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** write empty file */
        run {
            assert(ds.writeFile(newFile, "".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }
    }
    override fun `write non-existing or deleted file fail`() {
        /** write non-existing file */
        run {
            val nonExisting = File(name = "non-existing")
            assert(ds.writeFile(nonExisting, "non-existing".toByteArray().inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** write deleted file */
        run {
            val newFile = File(name = "exam")
            assert(ds.addFile(newFile, "exam content".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(ds.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ds.writeFile(newFile, "updated exam content".toByteArray().inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    override fun `delete file once works`() {
        /** delete file once */
        run {
            val newFile = File(name = "exam")
            assert(ds.addFile(newFile, "exam content".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(ds.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
        }
    }
    override fun `delete non-existing or deleted file fail`() {
        /** delete non-existing file */
        run {
            assert(ds.deleteFile("non-existing") == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** delete non-existing file */
        run {
            val newFile = File(name = "exam")
            assert(ds.addFile(newFile, "exam content".toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(ds.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ds.deleteFile(newFile.name) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }
}