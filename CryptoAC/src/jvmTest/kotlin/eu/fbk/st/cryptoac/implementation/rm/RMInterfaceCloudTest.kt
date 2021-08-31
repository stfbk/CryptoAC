package eu.fbk.st.cryptoac.implementation.rm

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.elements.File
import org.junit.jupiter.api.AfterEach

import org.junit.jupiter.api.BeforeEach

internal class RMInterfaceCloudTest : RMInterfaceTest() {
    
    private val rm = RMInterfaceCloud(Parameters.rmInterfaceCloudParameters)

    @BeforeEach
    override fun setUp() {
        // TODO
    }

    @AfterEach
    override fun tearDown() {
        // TODO
    }

    override fun `check add file once works`() {
        /** check add file once */
        run {
            val newFile = File(name = "exam")
            TestUtilities.addFileInDSCloud(newFile, "exam content".toByteArray().inputStream())
            val addFileRequest = TestUtilities.createAddFileRequest(newFile.name, Constants.ADMIN)
            assert(
                rm.checkAddFile(addFileRequest.fileTuple,
                addFileRequest.permissionTuple) == OutcomeCode.CODE_000_SUCCESS)
        }
    }
    override fun `check add file twice, non-existing or deleted file fail`() {
        val newFile = File(name = "exam")
        val addFileRequest = TestUtilities.createAddFileRequest(newFile.name, Constants.ADMIN)

        /** check add file twice */
        run {
            TestUtilities.addFileInDSCloud(newFile, "exam content".toByteArray().inputStream())
            assert(
                rm.checkAddFile(addFileRequest.fileTuple,
                addFileRequest.permissionTuple) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm.checkAddFile(addFileRequest.fileTuple,
                addFileRequest.permissionTuple) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }

        /** check non-existing file */
        run {
            val nonExistingFileRequest = TestUtilities.createAddFileRequest("non-existing", Constants.ADMIN)
            assert(
                rm.checkAddFile(nonExistingFileRequest.fileTuple,
                nonExistingFileRequest.permissionTuple) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** check deleted file */
        run {
            TestUtilities.deleteFileFromDSCloud(newFile.name)
            assert(
                rm.checkAddFile(addFileRequest.fileTuple,
                addFileRequest.permissionTuple) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }
    }

    override fun `check write file once works`() {
        val newFile = File(name = "exam")
        val addFileRequest = TestUtilities.createAddFileRequest(newFile.name, Constants.ADMIN)
        TestUtilities.addFileInDSCloud(newFile, "exam content".toByteArray().inputStream())
        assert(
            rm.checkAddFile(addFileRequest.fileTuple,
            addFileRequest.permissionTuple) == OutcomeCode.CODE_000_SUCCESS)

        /** check write file once */
        run {
            val updatedFile = File(name = "exam")
            TestUtilities.addFileInDSCloud(updatedFile, "new exam content".toByteArray().inputStream())
            val writeFileRequest =
                TestUtilities.createWriteFileRequest(newFile.name, addFileRequest.fileTuple.fileToken, 1)
            assert(
                rm.checkWriteFile(writeFileRequest.symKeyVersionNumber,
                writeFileRequest.fileTuple) == OutcomeCode.CODE_000_SUCCESS)
        }
    }
    override fun `check write file twice, non-existing or deleted file fail`() {
        val newFile = File(name = "exam")
        val addFileRequest = TestUtilities.createAddFileRequest(newFile.name, Constants.ADMIN)
        TestUtilities.addFileInDSCloud(newFile, "exam content".toByteArray().inputStream())
        assert(
            rm.checkAddFile(addFileRequest.fileTuple,
            addFileRequest.permissionTuple) == OutcomeCode.CODE_000_SUCCESS)

        val updatedFile = File(name = "exam")
        TestUtilities.addFileInDSCloud(updatedFile, "new exam content".toByteArray().inputStream())
        val writeFileRequest = TestUtilities.createWriteFileRequest(newFile.name, addFileRequest.fileTuple.fileToken, 1)
        assert(
            rm.checkWriteFile(writeFileRequest.symKeyVersionNumber,
            writeFileRequest.fileTuple) == OutcomeCode.CODE_000_SUCCESS)

        /** check write file twice */
        run {
            assert(
                rm.checkWriteFile(writeFileRequest.symKeyVersionNumber,
                writeFileRequest.fileTuple) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** check write non-existing file */
        run {
            val nonExistingWriteFileRequest = TestUtilities.createWriteFileRequest("non-existing", "non-existing", 1)
            assert(
                rm.checkWriteFile(nonExistingWriteFileRequest.symKeyVersionNumber,
                nonExistingWriteFileRequest.fileTuple) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** check write deleted file */
        run {
            TestUtilities.deleteFileFromDSCloud(newFile.name)
            assert(
                rm.checkWriteFile(writeFileRequest.symKeyVersionNumber,
                writeFileRequest.fileTuple) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }
}