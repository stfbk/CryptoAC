package eu.fbk.st.cryptoac.implementation.opa

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities.Companion.resetOPACloud
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.runCommand
import mu.KotlinLogging
import org.junit.jupiter.api.*

import org.junit.jupiter.api.Assertions.*
import java.io.File
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class OPAInterfaceTest {

    private val opa = OPAInterface(Parameters.opaInterfaceParameters)

    // TODO do not use "processBuild.waitFor", instead read
    //  the output until you find a specific string that
    //  indicates that the process terminated

    private var processDocker: Process? = null

    @BeforeAll
    fun setUpAll() {
        val processBuild = "./buildAll.sh".runCommand(File("../Documentation/Installation/"))
        processBuild.waitFor(10, TimeUnit.SECONDS)
        processDocker = "./startCryptoAC_CLOUD.sh \"cryptoac_opa\"".runCommand(File("../Documentation/Installation/"))
        processDocker!!.waitFor(5, TimeUnit.SECONDS)
    }

    @BeforeEach
    fun setUp() {
        assert(opa.lock() == OutcomeCode.CODE_000_SUCCESS)
        assert(opa.configure() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    fun tearDown() {
        assert(opa.unlock() == OutcomeCode.CODE_000_SUCCESS)
        resetOPACloud()
    }

    @AfterAll
    fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        val cleanProcess = "./clean.sh".runCommand(File("../Documentation/Installation/"))
        cleanProcess.waitFor(5, TimeUnit.SECONDS)
    }



    @Test
    fun getOpaBaseAPI() {
        // TODO
    }

    @Test
    fun configure() {
        // TODO
    }

   
    @Test
    fun getOPADocument() {
        // TODO
    }

    @Test
    fun lock() {
        // TODO
    }

    @Test
    fun unlock() {
        // TODO
    }


    @Test
    fun `add UR assignment works`() {
        /** add UR assignment */
        run {
            assert(opa.addURAssignment(UR("alice", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result!!.ur
            assert(opaDocument.size == 1)
            assert(opaDocument["alice"]!!.size == 1)
            assert(opaDocument["alice"]!!.first().roleName == "employee")
        }
    }

    @Test
    fun `add PA assignment works`() {
        /** add PA assignment */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result!!.pa
            assert(opaDocument.size == 1)
            assert(opaDocument["employee"]!!.size == 1)
            assert(opaDocument["employee"]!!.first().fileName == "exam")
            assert(opaDocument["employee"]!!.first().permission == PermissionType.READ)
        }
    }

    @Test
    fun `delete one or multiple UR assignments by username or-and role name work`() {
        /** delete one role UR assignment by role name */
        run {
            assert(opa.addURAssignment(UR("alice", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deleteURAssignments(roleName = "employee") == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.getOPADocument().opaDocument!!.result!!.ur["alice"]!!.isEmpty())
        }

        /** delete one UR assignment by username */
        run {
            assert(opa.addURAssignment(UR("alice", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deleteURAssignments(username = "alice") == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.getOPADocument().opaDocument!!.result!!.ur.isEmpty())
        }

        /** delete multiple UR assignments by role name */
        run {
            assert(opa.addURAssignment(UR("bob", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addURAssignment(UR("carl", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addURAssignment(UR("carl", "head")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deleteURAssignments(roleName = "employee") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result!!.ur
            assert(opaDocument.size == 2)
            assert(opaDocument["bob"]!!.size == 0)
            assert(opaDocument["carl"]!!.size == 1)
            assert(opaDocument["carl"]!!.filter { it.roleName == "head" }.size == 1)
        }

        /** delete multiple UR assignments by username */
        run {
            assert(opa.addURAssignment(UR("carl", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addURAssignment(UR("carl", "head")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deleteURAssignments(username = "carl") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result!!.ur
            assert(opaDocument.size == 1)
            assert(opaDocument["bob"]!!.size == 0)
        }

        /** delete multiple UR assignments by username and role name */
        run {
            assert(opa.addURAssignment(UR("bob", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addURAssignment(UR("bob", "head")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deleteURAssignments(username = "bob", roleName = "employee") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result!!.ur
            assert(opaDocument.size == 1)
            assert(opaDocument["bob"]!!.filter { it.roleName == "head" }.size == 1)
        }
    }

    @Test
    fun `delete non-existing UR assignments by username or-and role name fails`() {
        /** delete non-existing UR assignments by username */
        run {
            assert(opa.deleteURAssignments(username = "non-existing") == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** delete non-existing UR assignments by role name */
        run {
            assert(opa.deleteURAssignments(roleName = "non-existing") == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** delete non-existing UR assignments by username and role name */
        run {
            assert(opa.deleteURAssignments(username = "non-existing", roleName = "non-existing") == OutcomeCode.CODE_040_UR_ASSIGNMENTS_NOT_FOUND)
        }
    }

    @Test
    fun `delete UR assignments with no arguments fails`() {
        /** delete UR assignments with no arguments */
        run {
            assertThrows(IllegalArgumentException::class.java) { opa.deleteURAssignments() }
        }
    }

    @Test
    fun `delete one or multiple PA assignments by role name or-and file name work`() {
        /** delete one PA assignment by file name */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deletePAAssignments(fileName = "exam") == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.getOPADocument().opaDocument!!.result!!.pa["employee"]!!.isEmpty())
        }

        /** delete one PA assignments by role name */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deletePAAssignments(roleName = "employee") == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.getOPADocument().opaDocument!!.result!!.pa.isEmpty())
        }

        /** delete multiple PA assignments by file name */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addPAAssignment(PA("head", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addPAAssignment(PA("head", "salary", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deletePAAssignments(fileName = "exam") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result!!.pa
            assert(opaDocument.size == 2)
            assert(opaDocument["employee"]!!.size == 0)
            assert(opaDocument["head"]!!.size == 1)
            assert(opaDocument["head"]!!.filter { it.fileName == "salary" }.size == 1)
        }

        /** delete multiple PA assignments by role name */
        run {
            assert(opa.addPAAssignment(PA("head", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addPAAssignment(PA("head", "salary", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deletePAAssignments(roleName = "head") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result!!.pa
            assert(opaDocument.size == 1)
            assert(opaDocument["employee"]!!.size == 0)
        }

        /** delete multiple PA assignments by role name and file name */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addPAAssignment(PA("employee", "salary", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deletePAAssignments(roleName = "employee", fileName = "exam") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result!!.pa
            assert(opaDocument.size == 1)
            assert(opaDocument["employee"]!!.filter { it.fileName == "salary" }.size == 1)
        }
    }

    @Test
    fun `delete non-existing PA assignments by role name or-and file name fails`() {
        /** delete non-existing PA assignments by role name */
        run {
            assert(opa.deletePAAssignments(roleName = "non-existing") == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** delete non-existing PA assignments by file name */
        run {
            assert(opa.deletePAAssignments(fileName = "non-existing") == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** delete non-existing PA assignments by role name and file name */
        run {
            assert(opa.deletePAAssignments(roleName = "non-existing", fileName = "non-existing") == OutcomeCode.CODE_041_PA_ASSIGNMENTS_NOT_FOUND)
        }
    }

    @Test
    fun `delete PA assignments with no arguments fails`() {
        /** delete PA assignments with no arguments */
        run {
            assertThrows(IllegalArgumentException::class.java) { opa.deletePAAssignments() }
        }
    }

    @Test
    fun `update PA assignment works`() {
        /** update PA assignment */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocumentBefore = opa.getOPADocument().opaDocument!!.result!!.pa
            assert(opaDocumentBefore.size == 1)
            assert(opaDocumentBefore["employee"]!!.size == 1)
            assert(opaDocumentBefore["employee"]!!.first().fileName == "exam")
            assert(opaDocumentBefore["employee"]!!.first().permission == PermissionType.READ)
            assert(opa.updatePAAssignment(PA("employee", "exam", PermissionType.READWRITE)) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocumentAfter = opa.getOPADocument().opaDocument!!.result!!.pa
            assert(opaDocumentAfter.size == 1)
            assert(opaDocumentAfter["employee"]!!.size == 1)
            assert(opaDocumentAfter["employee"]!!.first().fileName == "exam")
            assert(opaDocumentAfter["employee"]!!.first().permission == PermissionType.READWRITE)
        }
    }

    @Test
    fun `update non-existing PA assignment fails`() {
        /** update non-existing PA assignment */
        run {
            assert(opa.updatePAAssignment(PA("non-existing", "non-existing", PermissionType.READ)) == OutcomeCode.CODE_041_PA_ASSIGNMENTS_NOT_FOUND)
        }
    }

    @Test
    fun `lock and rollback once or multiple times works`() {
        /** lock and rollback once */
        run {
            assert(opa.addURAssignment(UR("alice", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocumentBefore = opa.getOPADocument().opaDocument!!.result!!.ur
            assert(opaDocumentBefore.size == 1)
            assert(opaDocumentBefore["alice"]!!.size == 1)
            assert(opaDocumentBefore["alice"]!!.first().roleName == "employee")
            assert(opa.rollback() == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.lock() == OutcomeCode.CODE_000_SUCCESS)
            val opaDocumentAfter = opa.getOPADocument().opaDocument!!.result
            assert(opaDocumentAfter == null)
        }
    }
}