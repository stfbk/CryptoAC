package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Parameters.adminCoreRBACCLOUDParameters
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import org.junit.jupiter.api.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class DMInterfaceCryptoACTest : DMInterfaceTest() {

    override val dm: DMInterface =
        DMInterfaceRBACCryptoAC(Parameters.dmInterfaceCryptoACParameters)

    private var processDocker: Process? = null

    @BeforeAll
    override fun setUpAll() {
        "./buildAll.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_CLOUD.sh \"cryptoac_dm cryptoac_opa\"".runCommand(dir, hashSetOf(
            "Started ServerConnector",
            "release_notes"
        ))
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./clean.sh".runCommand(dir, hashSetOf("clean_all_end_of_script"))
    }

    @Test
    override fun `configure once works`() {

        /** configure once */
        run {
            assert(dm.configure(adminCoreRBACCLOUDParameters) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    override fun `configure twice works`() {

        /** configure twice */
        run {
            assert(dm.configure(adminCoreRBACCLOUDParameters) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.configure(adminCoreRBACCLOUDParameters) == OutcomeCode.CODE_000_SUCCESS)
        }
    }




    @Test
    override fun `add file once or empty or deleted file works`() {
        val emptyFile = eu.fbk.st.cryptoac.core.elements.File(name = "empty", enforcement = EnforcementType.COMBINED)
        val newFile = eu.fbk.st.cryptoac.core.elements.File(name = "exam", enforcement = EnforcementType.COMBINED)
        val newFileContent = "exam content"

        /** add file once */
        run {
            assert(dm.addFile(newFile, newFileContent.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add empty file */
        run {
            assert(dm.addFile(emptyFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(emptyFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add deleted file */
        run {
            assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.addFile(newFile, "another exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(dm.deleteFile(emptyFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun `add file twice fails`() {
        val newFile = eu.fbk.st.cryptoac.core.elements.File(name = "exam", enforcement = EnforcementType.COMBINED)
        val newFileContent1 = "exam content"
        val newFileContent2 = "second exam content"

        /** add file twice */
        run {
            assert(dm.addFile(newFile, newFileContent1.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.addFile(newFile, newFileContent2.inputStream()) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }

        /** Cleanup */
        assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
        assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun `read file works`() {
        val newFile = eu.fbk.st.cryptoac.core.elements.File(name = "exam", enforcement = EnforcementType.COMBINED)
        val fileContent = "exam content"

        /** read file */
        run {
            assert(dm.addFile(newFile, fileContent.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            dm.readFile(newFile.name).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals(fileContent.toByteArray()))
            }
        }

        /** Cleanup */
        assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun `read non-existing or deleted file fail`() {
        /** read non-existing file */
        run {
            dm.readFile("non-existing").apply {
                assert(code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
                assert(stream == null)
            }
        }

        /** read deleted file */
        run {
            val newFile = eu.fbk.st.cryptoac.core.elements.File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            dm.readFile("non-existing").apply {
                assert(code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
                assert(stream == null)
            }
        }
    }

    @Test
    override fun `write file once or empty works`() {
        val newFile = eu.fbk.st.cryptoac.core.elements.File(name = "exam", enforcement = EnforcementType.COMBINED)
        val otherNewFile = eu.fbk.st.cryptoac.core.elements.File(name = "test", enforcement = EnforcementType.COMBINED)

        /** write file once */
        run {
            assert(dm.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)

            assert(dm.addFile(newFile, "updated file content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            dm.readFile(newFile.name).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals("updated file content".toByteArray()))
            }
        }

        /** write empty file */
        run {
            assert(dm.addFile(otherNewFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(otherNewFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            dm.readFile(otherNewFile.name).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals("".toByteArray()))
            }
        }

        /** Cleanup */
        assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(dm.deleteFile(otherNewFile.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun `write non-existing or deleted file fail`() {
        /** write non-existing file */
        run {
            val nonExisting = eu.fbk.st.cryptoac.core.elements.File(name = "non-existing", enforcement = EnforcementType.COMBINED)
            assert(dm.writeFile(nonExisting, "non-existing".inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** write deleted file */
        run {
            val newFile = eu.fbk.st.cryptoac.core.elements.File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "updated exam content".inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    @Test
    override fun `delete file once works`() {
        /** delete file once */
        run {
            val newFile = eu.fbk.st.cryptoac.core.elements.File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    override fun `delete non-existing or deleted file fail`() {
        /** delete non-existing file */
        run {
            assert(dm.deleteFile("non-existing") == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** delete non-existing file */
        run {
            val newFile = eu.fbk.st.cryptoac.core.elements.File(name = "exam", enforcement = EnforcementType.COMBINED)
            assert(dm.addFile(newFile, "exam content".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.writeFile(newFile, "".inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(dm.deleteFile(newFile.name) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }
    

    @Test
    override fun `single and multiple lock and unlock works`() {
        /** Lock/Unlock/Rollback not supported by this module */
    }

    @Test
    override fun `single and multiple lock and rollback works`() {
        /** Lock/Unlock/Rollback not supported by this module */
    }

    @Test
    override fun `unlock without locking fails`() {
        /** Lock/Unlock/Rollback not supported by this module */
    }

    @Test
    override fun `rollback without locking fails`() {
        /** Lock/Unlock/Rollback not supported by this module */
    }
}