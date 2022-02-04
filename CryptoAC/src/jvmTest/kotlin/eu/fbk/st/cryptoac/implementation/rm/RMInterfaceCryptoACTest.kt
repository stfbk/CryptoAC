package eu.fbk.st.cryptoac.implementation.rm

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Parameters.adminCoreRBACCLOUDParameters
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.implementation.dm.DMInterface
import eu.fbk.st.cryptoac.implementation.dm.DMInterfaceRBACCryptoAC
import eu.fbk.st.cryptoac.implementation.mm.MMInterfaceMySQL
import eu.fbk.st.cryptoac.implementation.opa.OPAInterface
import org.junit.jupiter.api.*

import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class RMInterfaceCryptoACTest : RMInterfaceTest() {

    override val rm: RMInterface =
        RMInterfaceCryptoAC(Parameters.rmInterfaceCryptoACParameters)
    override val dm: DMInterface =
        DMInterfaceRBACCryptoAC(Parameters.dmInterfaceCryptoACParameters)
    private val mm: MMInterfaceMySQL =
        MMInterfaceMySQL(Parameters.mmInterfaceMySQLParameters)
    private val opa: OPAInterface =
        OPAInterface(Parameters.opaInterfaceParameters)


    // TODO do not use "processBuild.waitFor", instead read
    //  the output until you find a specific string that
    //  indicates that the process terminated

    private var processDocker: Process? = null

    @BeforeAll
    override fun setUpAll() {
        val processBuild = "./buildAll.sh".runCommand(java.io.File("../Documentation/Installation/"))
        processBuild.waitFor(10, TimeUnit.SECONDS)
        processDocker = "./startCryptoAC_CLOUD.sh \"cryptoac_rm cryptoac_dm cryptoac_mysql cryptoac_opa\"".runCommand(java.io.File("../Documentation/Installation/"))
        processDocker!!.waitFor(15, TimeUnit.SECONDS)
    }

    @BeforeEach
    override fun setUp() {
        super.setUp()
        assert(rm.configure(adminCoreRBACCLOUDParameters) == OutcomeCode.CODE_000_SUCCESS)
        assert(opa.lock() == OutcomeCode.CODE_000_SUCCESS)
        assert(opa.configure() == OutcomeCode.CODE_000_SUCCESS)
        assert(opa.unlock() == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.lock() == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.initAdmin(Parameters.adminUser, Parameters.adminRoleTuple) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.unlock() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        super.tearDown()
        TestUtilities.resetMMMySQL()
        TestUtilities.resetOPACloud()
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        val cleanProcess = "./clean.sh".runCommand(java.io.File("../Documentation/Installation/"))
        cleanProcess.waitFor(5, TimeUnit.SECONDS)
    }


    @Test
    override fun `check add file once works`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)

        /** check add file once */
        run {
            assert(dm.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            val addFileRequest = createAddFileRequest(newFile.name, Constants.ADMIN)
            assert(
                rm.checkAddFile(
                    addFileRequest.fileTuple, addFileRequest.permissionTuple
                ) == OutcomeCode.CODE_000_SUCCESS
            )
        }

        /** Cleanup */
        assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun `check add file twice, non-existing or deleted file fail`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val addFileRequest = createAddFileRequest(newFile.name, Constants.ADMIN)

        /** check add file twice */
        run {
            assert(dm.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm.checkAddFile(
                    addFileRequest.fileTuple, addFileRequest.permissionTuple
                ) == OutcomeCode.CODE_000_SUCCESS
            )
            assert(
                rm.checkAddFile(
                    addFileRequest.fileTuple, addFileRequest.permissionTuple
                ) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS
            )
        }

        /** check non-existing file */
        run {
            val nonExistingFileRequest = createAddFileRequest("non-existing", Constants.ADMIN)
            assert(
                rm.checkAddFile(nonExistingFileRequest.fileTuple,
                    nonExistingFileRequest.permissionTuple) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** check deleted file */
        run {
            assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm.checkAddFile(addFileRequest.fileTuple,
                    addFileRequest.permissionTuple) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }
    }

    @Test
    override fun `check write file once works`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val addFileRequest = createAddFileRequest(newFile.name, Constants.ADMIN)
        assert(dm.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            rm.checkAddFile(
                addFileRequest.fileTuple, addFileRequest.permissionTuple
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        /** check write file once */
        run {
            val updatedFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm.addFile(updatedFile, "updated exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            val writeFileRequest = createWriteFileRequest(
                newFile.name, addFileRequest.fileTuple.fileToken, 1
            )
            assert(
                rm.checkWriteFile(
                    writeFileRequest.symKeyVersionNumber, writeFileRequest.fileTuple
                ) == OutcomeCode.CODE_000_SUCCESS
            )
        }

        /** Cleanup */
        assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun `check write file twice, non-existing or deleted file fail`() {
        val newFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        val addFileRequest = createAddFileRequest(newFile.name, Constants.ADMIN)
        assert(dm.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            rm.checkAddFile(
                addFileRequest.fileTuple, addFileRequest.permissionTuple
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        val updatedFile = File(name = "exam", enforcement = EnforcementType.COMBINED)
        assert(dm.addFile(updatedFile, "updated exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        val writeFileRequest = createWriteFileRequest(newFile.name, addFileRequest.fileTuple.fileToken, 1)
        assert(
            rm.checkWriteFile(
                writeFileRequest.symKeyVersionNumber, writeFileRequest.fileTuple
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        /** check write file twice */
        run {
            assert(
                rm.checkWriteFile(
                    writeFileRequest.symKeyVersionNumber, writeFileRequest.fileTuple
                ) == OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** check write non-existing file */
        run {
            val nonExistingWriteFileRequest = createWriteFileRequest("non-existing", "non-existing", 1)
            assert(
                rm.checkWriteFile(
                    nonExistingWriteFileRequest.symKeyVersionNumber, nonExistingWriteFileRequest.fileTuple
                ) == OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** check write deleted file */
        run {
            assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm.checkWriteFile(writeFileRequest.symKeyVersionNumber,
                    writeFileRequest.fileTuple) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }
}