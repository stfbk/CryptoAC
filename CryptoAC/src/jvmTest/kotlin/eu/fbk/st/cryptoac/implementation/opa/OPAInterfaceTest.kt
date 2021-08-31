package eu.fbk.st.cryptoac.implementation.opa

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach

internal class OPAInterfaceTest {

    private val opa = OPAInterface(Parameters.opaInterfaceParameters)
    
    @BeforeEach
    fun setUp() {
        // TODO
        assert(opa.configure() == OutcomeCode.CODE_000_SUCCESS)
        assert(opa.lock() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    fun tearDown() {
        // TODO
        assert(opa.unlock() == OutcomeCode.CODE_000_SUCCESS)
        TestUtilities.resetOPACloud()
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
    fun addURAssignment() {
        `add UR assignment works`()
    }

    @Test
    fun addPAAssignment() {
        `add PA assignment works`()
    }

    @Test
    fun deleteURAssignments() {
        `delete one or multiple UR assignments by username or-and role name work`()
        `delete non-existing UR assignments by username or-and role name fails`()
        `delete UR assignments with no arguments fails`()
    }

    @Test
    fun deletePAAssignments() {
        `delete one or multiple PA assignments by role name or-and file name work`()
        `delete non-existing PA assignments by role name or-and file name fails`()
        `delete PA assignments with no arguments fails`()
    }

    @Test
    fun updatePAAssignment() {
        `update PA assignment works`()
        `update non-existing PA assignment fails`()
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
    fun rollback() {
        `lock and rollback once or multiple times works`()
    }

    @Test
    fun unlock() {
        // TODO
    }


    private fun `add UR assignment works`() {
        /** add UR assignment */
        run {
            assert(opa.addURAssignment(UR("alice", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result.ur
            assert(opaDocument.size == 1)
            assert(opaDocument["alice"]!!.size == 1)
            assert(opaDocument["alice"]!!.first().roleName == "employee")
        }
    }
    private fun `add PA assignment works`() {
        /** add PA assignment */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result.pa
            assert(opaDocument.size == 1)
            assert(opaDocument["employee"]!!.size == 1)
            assert(opaDocument["employee"]!!.first().fileName == "exam")
            assert(opaDocument["employee"]!!.first().permission == PermissionType.READ)
        }
    }

    private fun `delete one or multiple UR assignments by username or-and role name work`() {
        /** delete one role UR assignment by role name */
        run {
            assert(opa.addURAssignment(UR("alice", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deleteURAssignments(roleName = "employee") == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.getOPADocument().opaDocument!!.result.ur["alice"]!!.isEmpty())
        }

        /** delete one UR assignment by username */
        run {
            assert(opa.addURAssignment(UR("alice", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deleteURAssignments(username = "alice") == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.getOPADocument().opaDocument!!.result.ur.isEmpty())
        }

        /** delete multiple UR assignments by role name */
        run {
            assert(opa.addURAssignment(UR("bob", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addURAssignment(UR("carl", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addURAssignment(UR("carl", "head")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deleteURAssignments(roleName = "employee") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result.ur
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
            val opaDocument = opa.getOPADocument().opaDocument!!.result.ur
            assert(opaDocument.size == 1)
            assert(opaDocument["bob"]!!.size == 0)
        }

        /** delete multiple UR assignments by username and role name */
        run {
            assert(opa.addURAssignment(UR("bob", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addURAssignment(UR("bob", "head")) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deleteURAssignments(username = "bob", roleName = "employee") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result.ur
            assert(opaDocument.size == 1)
            assert(opaDocument["bob"]!!.filter { it.roleName == "head" }.size == 1)
        }
    }
    private fun `delete non-existing UR assignments by username or-and role name fails`() {
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
    private fun `delete UR assignments with no arguments fails`() {
        /** delete UR assignments with no arguments */
        run {
            assertThrows(IllegalArgumentException::class.java) { opa.deleteURAssignments() }
        }
    }

    private fun `delete one or multiple PA assignments by role name or-and file name work`() {
        /** delete one PA assignment by file name */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deletePAAssignments(fileName = "exam") == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.getOPADocument().opaDocument!!.result.pa["employee"]!!.isEmpty())
        }

        /** delete one PA assignments by role name */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deletePAAssignments(roleName = "employee") == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.getOPADocument().opaDocument!!.result.pa.isEmpty())
        }

        /** delete multiple PA assignments by file name */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addPAAssignment(PA("head", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addPAAssignment(PA("head", "salary", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deletePAAssignments(fileName = "exam") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result.pa
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
            val opaDocument = opa.getOPADocument().opaDocument!!.result.pa
            assert(opaDocument.size == 1)
            assert(opaDocument["employee"]!!.size == 0)
        }

        /** delete multiple PA assignments by role name and file name */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.addPAAssignment(PA("employee", "salary", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            assert(opa.deletePAAssignments(roleName = "employee", fileName = "exam") == OutcomeCode.CODE_000_SUCCESS)
            val opaDocument = opa.getOPADocument().opaDocument!!.result.pa
            assert(opaDocument.size == 1)
            assert(opaDocument["employee"]!!.filter { it.fileName == "salary" }.size == 1)
        }
    }
    private fun `delete non-existing PA assignments by role name or-and file name fails`() {
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
    private fun `delete PA assignments with no arguments fails`() {
        /** delete PA assignments with no arguments */
        run {
            assertThrows(IllegalArgumentException::class.java) { opa.deletePAAssignments() }
        }
    }

    private fun `update PA assignment works`() {
        /** update PA assignment */
        run {
            assert(opa.addPAAssignment(PA("employee", "exam", PermissionType.READ)) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocumentBefore = opa.getOPADocument().opaDocument!!.result.pa
            assert(opaDocumentBefore.size == 1)
            assert(opaDocumentBefore["employee"]!!.size == 1)
            assert(opaDocumentBefore["employee"]!!.first().fileName == "exam")
            assert(opaDocumentBefore["employee"]!!.first().permission == PermissionType.READ)
            assert(opa.updatePAAssignment(PA("employee", "exam", PermissionType.READWRITE)) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocumentAfter = opa.getOPADocument().opaDocument!!.result.pa
            assert(opaDocumentAfter.size == 1)
            assert(opaDocumentAfter["employee"]!!.size == 1)
            assert(opaDocumentAfter["employee"]!!.first().fileName == "exam")
            assert(opaDocumentAfter["employee"]!!.first().permission == PermissionType.READWRITE)
        }
    }
    private fun `update non-existing PA assignment fails`() {
        /** update non-existing PA assignment */
        run {
            assert(opa.updatePAAssignment(PA("non-existing", "non-existing", PermissionType.READ)) == OutcomeCode.CODE_041_PA_ASSIGNMENTS_NOT_FOUND)
        }
    }

    private fun `lock and rollback once or multiple times works`() {
        /** lock and rollback once */
        run {
            assert(opa.addURAssignment(UR("alice", "employee")) == OutcomeCode.CODE_000_SUCCESS)
            val opaDocumentBefore = opa.getOPADocument().opaDocument!!.result.ur
            assert(opaDocumentBefore.size == 1)
            assert(opaDocumentBefore["alice"]!!.size == 1)
            assert(opaDocumentBefore["alice"]!!.first().roleName == "employee")
            assert(opa.rollback() == OutcomeCode.CODE_000_SUCCESS)
            val opaDocumentAfter = opa.getOPADocument().opaDocument!!.result.ur
            assert(opaDocumentAfter.size == 0)
        }
    }
}