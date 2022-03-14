package eu.fbk.st.cryptoac.implementation.rm

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.implementation.dm.DMInterface
import eu.fbk.st.cryptoac.inputStream
import org.junit.jupiter.api.*

internal abstract class RMInterfaceTest {

    abstract val rm: RMInterface?
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
    fun configure() {
        // TODO
    }



    @Test
    open fun `check add file once works`() {
        /** check add file once */
        run {
            val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm!!.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            val addFileRequest = createAddFileRequest(newFile.name, Constants.ADMIN)
            assert(
                rm!!.checkAddFile(
                    addFileRequest.fileTuple, addFileRequest.permissionTuple
                ) == OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    open fun `check add file twice, non-existing or deleted file fail`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val addFileRequest = createAddFileRequest(newFile.name, Constants.ADMIN)

        /** check add file twice */
        run {
            assert(dm!!.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm!!.checkAddFile(
                    addFileRequest.fileTuple, addFileRequest.permissionTuple
                ) == OutcomeCode.CODE_000_SUCCESS
            )
            assert(
                rm!!.checkAddFile(
                    addFileRequest.fileTuple, addFileRequest.permissionTuple
                ) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS
            )
        }

        /** check non-existing file */
        run {
            val nonExistingFileRequest = createAddFileRequest("non-existing", Constants.ADMIN)
            assert(
                rm!!.checkAddFile(nonExistingFileRequest.fileTuple,
                    nonExistingFileRequest.permissionTuple) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** check deleted file */
        run {
            assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm!!.checkAddFile(addFileRequest.fileTuple,
                    addFileRequest.permissionTuple) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }
    }

    @Test
    open fun `check write file once works`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val addFileRequest = createAddFileRequest(newFile.name, Constants.ADMIN)
        assert(dm!!.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            rm!!.checkAddFile(
                addFileRequest.fileTuple, addFileRequest.permissionTuple
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        /** check write file once */
        run {
            val updatedFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm!!.addFile(updatedFile, "updated exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            val writeFileRequest = createWriteFileRequest(
                newFile.name, addFileRequest.fileTuple.fileToken, 1
            )
            assert(
                rm!!.checkWriteFile(
                    Constants.ADMIN,
                    writeFileRequest.symKeyVersionNumber,
                    writeFileRequest.fileTuple,
                ) == OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    open fun `check write file twice, non-existing or deleted file fail`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val addFileRequest = createAddFileRequest(newFile.name, Constants.ADMIN)
        assert(dm!!.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            rm!!.checkAddFile(
                addFileRequest.fileTuple, addFileRequest.permissionTuple
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        val updatedFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        assert(dm!!.addFile(updatedFile, "updated exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        val writeFileRequest = createWriteFileRequest(newFile.name, addFileRequest.fileTuple.fileToken, 1)
        assert(
            rm!!.checkWriteFile(
                Constants.ADMIN,
                writeFileRequest.symKeyVersionNumber,
                writeFileRequest.fileTuple,
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        /** check write file twice */
        run {
            assert(
                rm!!.checkWriteFile(
                    Constants.ADMIN,
                    writeFileRequest.symKeyVersionNumber,
                    writeFileRequest.fileTuple,
                ) == OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** check write non-existing file */
        run {
            val nonExistingWriteFileRequest = createWriteFileRequest("non-existing", "non-existing", 1)
            assert(
                rm!!.checkWriteFile(
                    Constants.ADMIN,
                    nonExistingWriteFileRequest.symKeyVersionNumber,
                    nonExistingWriteFileRequest.fileTuple,
                ) == OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** check write deleted file */
        run {
            assert(dm!!.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm!!.checkWriteFile(
                    Constants.ADMIN,
                    writeFileRequest.symKeyVersionNumber,
                    writeFileRequest.fileTuple,
                ) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }



    fun createAddFileRequest(fileName: String, roleName: String): AddFileRequest {
        val role = TestUtilities.createRole(roleName = roleName)
        val file = TestUtilities.createFile(fileName = fileName, enforcement = EnforcementType.COMBINED)
        val permissionTuple =
            TestUtilities.createPermissionTuple(role, file, permission = PermissionType.READWRITE)
        val fileTuple = TestUtilities.createFileTuple(file)
        return AddFileRequest(fileTuple, permissionTuple, 1)
    }

    fun createWriteFileRequest(fileName: String, fileToken: String, symKeyVersionNumber: Int): WriteFileRequest {
        val file = TestUtilities.createFile(fileName = fileName, symEncKeyVersionNumber = symKeyVersionNumber, enforcement = EnforcementType.COMBINED)
        file.token = fileToken
        val fileTuple = TestUtilities.createFileTuple(file)
        return WriteFileRequest(
            Constants.ADMIN,
            fileTuple,
            symKeyVersionNumber,
        )
    }
}