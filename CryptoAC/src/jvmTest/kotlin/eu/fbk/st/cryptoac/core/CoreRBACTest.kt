package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.elements.ElementStatus
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.inputStream
import org.junit.jupiter.api.*

/** Test class for class "CoreRBAC" */
internal abstract class CoreRBACTest : CoreTest() {

    private val coreRBAC: CoreRBAC by lazy { core as CoreRBAC }

    
    @Test
    fun `add user of non-existing user works`() {
        /** add user of non-existing user */
        run {
            val alice = "alice"
            assert(coreRBAC.addUser(alice).code == OutcomeCode.CODE_000_SUCCESS)

            val users = coreRBAC.getUsers().users!!.filter { it.name == alice }
            assert(users.size == 1)
            assert(users.filter { it.name == alice }.size == 1)
            val aliceUser = users.first { it.name == alice }
            assert(!aliceUser.isAdmin)
            assert(aliceUser.status == ElementStatus.INCOMPLETE)
            assert(aliceUser.token == alice)
        }
    }

    @Test
    fun `add user of blank, admin, existing (incomplete or operational) or deleted user fails`() {
        /** add user with blank username */
        run {
            assert(coreRBAC.addUser("").code == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.addUser("    ").code == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** add user with admin username */
        run {
            assert(coreRBAC.addUser(ADMIN).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user of existing (incomplete) user */
        run {
            assert(coreRBAC.addUser("alice").code == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.addUser("alice").code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user of existing (operational) user */
        run {
            TestUtilities.addAndInitUser(coreRBAC, "bob")
            assert(coreRBAC.addUser("bob").code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user of deleted user */
        run {
            TestUtilities.addAndInitUser(coreRBAC, "carl")
            assert(coreRBAC.deleteUser("carl") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.addUser("carl").code == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }

    @Test
    fun `delete user of existing (incomplete or operational) user works`() {
        /** delete user of existing (incomplete) user */
        run {
            assert(coreRBAC.addUser("alice").code == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteUser("alice") == OutcomeCode.CODE_000_SUCCESS)
        }

        /** delete user of existing (operational) user */
        run {
            TestUtilities.addAndInitUser(coreRBAC, "bob")
            assert(coreRBAC.deleteUser("bob") == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `delete user of blank, admin, non-existing or deleted user fails`() {
        /** delete user of blank user */
        run {
            assert(coreRBAC.deleteUser("") == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.deleteUser("   ") == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** delete user of admin user */
        run {
            assert(coreRBAC.deleteUser(ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** delete user of non-existing user */
        run {
            assert(coreRBAC.deleteUser("alice") == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** delete user of deleted user */
        run {
            TestUtilities.addAndInitUser(coreRBAC, "alice")
            assert(coreRBAC.deleteUser("alice") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteUser("alice") == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }
    }

    @Test
    fun `add role of non-existing role works`() {
        /** add role of non-existing role */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            val adminRoles = coreRBAC.getAssignments(username = ADMIN)
            assert(adminRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(adminRoles.roleTuples!!.size == 2)
            assert(adminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == ADMIN }.size == 1)
            assert(adminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == student }.size == 1)

            val roles = coreRBAC.getRoles().roles!!.filter { it.name == student }
            assert(roles.size == 1)
            assert(roles.filter { it.name == student }.size == 1)
            val studentRole = roles.first { it.name == student }
            assert(studentRole.versionNumber == 1)
            assert(studentRole.status == ElementStatus.OPERATIONAL)
        }
    }

    @Test
    fun `add role of blank, admin, operational or deleted role fails`() {
        /** add role with blank role name */
        run {
            assert(coreRBAC.addRole("") == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.addRole("    ") == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** add role with admin role name */
        run {
            assert(coreRBAC.addRole(ADMIN) == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role of operational role */
        run {
            assert(coreRBAC.addRole("alice") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.addRole("alice") == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role of deleted role */
        run {
            val studentName = "student"
            assert(coreRBAC.addRole(studentName) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteRole(studentName) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.addRole(studentName) == OutcomeCode.CODE_014_ROLE_WAS_DELETED)
        }
    }

    @Test
    fun `delete role of operational role works`() {
        /** delete role operational role */
        run {
            val studentName = "student"
            assert(coreRBAC.addRole(studentName) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteRole(studentName) == OutcomeCode.CODE_000_SUCCESS)
            val studentTuples = coreRBAC.getAssignments(studentName)
            assert(studentTuples.code == OutcomeCode.CODE_000_SUCCESS)
            assert(studentTuples.roleTuples!!.size == 0)
        }
    }

    @Test
    fun `delete role of blank, admin, non-existing or deleted role fails`() {
        /** delete role of blank role */
        run {
            assert(coreRBAC.deleteRole("") == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.deleteRole("   ") == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** delete role of admin role */
        run {
            assert(coreRBAC.deleteRole(ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** delete role of non-existing role */
        run {
            assert(coreRBAC.deleteRole("student") == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** delete role of deleted role */
        run {
            assert(coreRBAC.addRole("student") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteRole("student") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteRole("student") == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
    }

    @Test
    fun `add file of non-existing file works`() {
        /** add file of non-existing file */
        val testFile = "testFile"
        run {
            assert(
                coreRBAC.addFile(testFile, testFile.inputStream(), EnforcementType.COMBINED) ==
                        OutcomeCode.CODE_000_SUCCESS
            )

            val adminPermissions = coreRBAC.getPermissions(username = ADMIN)
            assert(adminPermissions.code == OutcomeCode.CODE_000_SUCCESS)
            assert(adminPermissions.permissionTuples!!.size == 1)
            assert(adminPermissions.permissionTuples!!.filter { it.roleName == ADMIN && it.fileName == testFile }.size == 1)
            val permissionTuple = adminPermissions.permissionTuples!!.first { it.roleName == ADMIN && it.fileName == testFile }
            assert(permissionTuple.permission == PermissionType.READWRITE)
            assert(permissionTuple.symKeyVersionNumber == 1)
            assert(permissionTuple.roleVersionNumber == 1)
            
            val files = coreRBAC.getFiles().files!!.filter { it.name == testFile }
            assert(files.size == 1)
            assert(files.filter { it.name == testFile }.size == 1)
            val file = files.first { it.name == testFile }
            assert(file.symEncKeyVersionNumber == 1)
            assert(file.status == ElementStatus.OPERATIONAL)
        }
    }

    @Test
    fun `add file of blank, operational or deleted file fails`() {
        val content = "content".inputStream()

        /** add file with blank file name */
        run {
            assert(coreRBAC.addFile("", content, EnforcementType.COMBINED) == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.addFile("    ", content, EnforcementType.COMBINED) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** add file of operational file */
        run {
            assert(coreRBAC.addFile("alice", content, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.addFile("alice", content, EnforcementType.COMBINED) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }

        /** add file of deleted file */
        run {
            val exam = "exam"
            assert(coreRBAC.addFile(exam, content, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteFile(exam) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.addFile(exam, content, EnforcementType.COMBINED) == OutcomeCode.CODE_015_FILE_WAS_DELETED)
        }
    }

    @Test
    fun `delete file of operational file works`() {
        /** delete file of operational file */
        run {
            val exam = "exam"
            val examContent = "exam".inputStream()
            assert(coreRBAC.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteFile(exam) == OutcomeCode.CODE_000_SUCCESS)
            val examTuples = coreRBAC.getPermissions(fileName = exam)
            assert(examTuples.code == OutcomeCode.CODE_000_SUCCESS)
            assert(examTuples.permissionTuples!!.size == 0)

            val files = coreRBAC.getFiles().files
            assert(files!!.size == 0)
        }
    }

    @Test
    fun `delete file of blank, non-existing or deleted file fails`() {
        /** delete file of blank file */
        run {
            assert(coreRBAC.deleteFile("") == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.deleteFile("   ") == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** delete file of non-existing file */
        run {
            assert(coreRBAC.deleteFile("exam") == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** delete file of deleted file */
        run {
            val exam = "exam"
            val examContent = "exam".inputStream()
            assert(coreRBAC.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteFile(exam) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.deleteFile(exam) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    @Test
    fun `assign operational user to operational role works`() {
        val alice = "alice"
        val employee = "employee"
        TestUtilities.addAndInitUser(coreRBAC, alice)
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        /** assign operational user to operational role */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)

            val aliceRoles = coreRBAC.getAssignments(alice)
            assert(aliceRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceRoles.roleTuples!!.size == 1)
            assert(aliceRoles.roleTuples!!.filter { it.username == alice && it.roleName == employee }.size == 1)
            val aliceRoleTuple = aliceRoles.roleTuples!!.first { it.username == alice && it.roleName == employee }
            assert(aliceRoleTuple.roleVersionNumber == 1)
        }
    }

    @Test
    fun `assign blank, non-existing, incomplete or deleted user to blank, non-existing or deleted role fails`() {
        val userNonExisting = "userNonExisting"
        val userIncomplete = "userIncomplete"
        assert(coreRBAC.addUser(userIncomplete).code == OutcomeCode.CODE_000_SUCCESS)
        val userOperational = "userOperational"
        TestUtilities.addAndInitUser(coreRBAC, userOperational)
        val userDeleted = "userDeleted"
        assert(coreRBAC.addUser(userDeleted).code == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.deleteUser(userDeleted) == OutcomeCode.CODE_000_SUCCESS)

        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBAC.addRole(roleOperational) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBAC.addRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)

        /** assign non-existing user to non-existing role */
        run {
            assert(
                coreRBAC.assignUserToRole(userNonExisting, roleNonExisting) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign non-existing user to operational role */
        run {
            assert(
                coreRBAC.assignUserToRole(userNonExisting, roleOperational) ==
                        OutcomeCode.CODE_004_USER_NOT_FOUND
            )
        }

        /** assign non-existing user to deleted role */
        run {
            assert(
                coreRBAC.assignUserToRole(userNonExisting, roleDeleted) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign incomplete user to non-existing role */
        run {
            assert(
                coreRBAC.assignUserToRole(userIncomplete, roleNonExisting) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign incomplete user to operational role */
        run {
            assert(
                coreRBAC.assignUserToRole(userIncomplete, roleOperational) ==
                        OutcomeCode.CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED
            )
        }

        /** assign incomplete user to deleted role */
        run {
            assert(
                coreRBAC.assignUserToRole(userIncomplete, roleDeleted) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign operational user to non-existing role */
        run {
            assert(
                coreRBAC.assignUserToRole(userOperational, roleNonExisting) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign operational user to deleted role */
        run {
            assert(
                coreRBAC.assignUserToRole(userOperational, roleDeleted) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign deleted user to non-existing role */
        run {
            assert(
                coreRBAC.assignUserToRole(userDeleted, roleNonExisting) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign deleted user to operational role */
        run {
            assert(
                coreRBAC.assignUserToRole(userDeleted, roleOperational) ==
                        OutcomeCode.CODE_013_USER_WAS_DELETED
            )
        }

        /** assign deleted user to deleted role */
        run {
            assert(
                coreRBAC.assignUserToRole(userDeleted, roleDeleted) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign blank user to operational role */
        run {
            assert(
                coreRBAC.assignUserToRole("  ", roleOperational) ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** assign operational user to blank role */
        run {
            assert(
                coreRBAC.assignUserToRole(userOperational, "  ") ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `assign operational user to admin role fails`() {
        /** assign operational user to admin role */
        run {
            val alice = "alice"
            TestUtilities.addAndInitUser(coreRBAC, alice)
            assert(coreRBAC.assignUserToRole(alice, ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    @Test
    fun `assign operational user to operational role twice fails`() {
        val alice = "alice"
        val employee = "employee"
        TestUtilities.addAndInitUser(coreRBAC, alice)
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        /** assign operational user to operational role twice */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS)
        }
    }

    @Test
    fun `revoke user from assigned role works`() {
        val alice = "alice"
        val employee = "employee"
        val excel = "excel"
        TestUtilities.addAndInitUser(coreRBAC, alice)
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            coreRBAC.addFile(excel,
                excel.inputStream(),
                EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.assignPermissionToRole(employee, excel, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke user from assigned role */
        run {
            /** get the role and the role/permission tuples before the revoke operation */
            val beforeEmployeeRole = coreRBAC.getRoles().roles!!.first { it.name == employee }
            val beforeAdminRoles = coreRBAC.getAssignments(username = ADMIN)
            assert(beforeAdminRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(beforeAdminRoles.roleTuples!!.size == 2)
            assert(beforeAdminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == employee }.size == 1)
            val beforeAdminRoleTuple =
                beforeAdminRoles.roleTuples!!.first { it.username == ADMIN && it.roleName == employee }
            assert(beforeAdminRoleTuple.roleVersionNumber == 1)
            val beforePermissionTuples = coreRBAC.getPermissions(fileName = excel)
            assert(beforePermissionTuples.code == OutcomeCode.CODE_000_SUCCESS)
            assert(beforePermissionTuples.permissionTuples!!.size == 2)
            beforePermissionTuples.permissionTuples!!.filter { it.roleName == employee }.apply {
                assert(size == 1)
                assert(first().symKeyVersionNumber == 1)
            }

            /** revoke operation */
            assert(coreRBAC.revokeUserFromRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            val aliceRoles = coreRBAC.getAssignments(alice)
            assert(aliceRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceRoles.roleTuples!!.size == 0)

            /** get the role and the role/permission tuples after the revoke operation */
            val afterEmployeeRole = coreRBAC.getRoles().roles!!.first { it.name == employee }
            val afterAdminRoles = coreRBAC.getAssignments(ADMIN)
            assert(afterAdminRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(afterAdminRoles.roleTuples!!.size == 2)
            assert(afterAdminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == employee }.size == 1)
            val afterAdminRoleTuple =
                afterAdminRoles.roleTuples!!.first { it.username == ADMIN && it.roleName == employee }
            assert(afterAdminRoleTuple.roleVersionNumber == 2)
            val afterPermissionTuples = coreRBAC.getPermissions(fileName = excel)
            assert(afterPermissionTuples.code == OutcomeCode.CODE_000_SUCCESS)
            println(afterPermissionTuples.permissionTuples!!.size)
            assert(afterPermissionTuples.permissionTuples!!.size == 3)
            afterPermissionTuples.permissionTuples!!.filter { it.roleName == employee && it.symKeyVersionNumber == 2 }.apply {
                assert(size == 1)
                assert(first().symKeyVersionNumber == 2)
            }

            /** check the difference between the role and the role/permission tuples before and after the revoke operation */
            assert(beforeEmployeeRole.versionNumber == 1)
            assert(afterEmployeeRole.versionNumber == 2)
            assert(!beforeAdminRoleTuple.encryptedAsymEncKeys!!.private.contentEquals(afterAdminRoleTuple.encryptedAsymEncKeys!!.private))
            assert(!beforeAdminRoleTuple.encryptedAsymEncKeys!!.public.contentEquals(afterAdminRoleTuple.encryptedAsymEncKeys!!.public))
            assert(!beforeAdminRoleTuple.encryptedAsymSigKeys!!.private.contentEquals(afterAdminRoleTuple.encryptedAsymSigKeys!!.private))
            assert(!beforeAdminRoleTuple.encryptedAsymSigKeys!!.public.contentEquals(afterAdminRoleTuple.encryptedAsymSigKeys!!.public))
            assert(!beforePermissionTuples.permissionTuples!!.first { it.roleName == employee }.encryptedSymKey!!.key.contentEquals(
                afterPermissionTuples.permissionTuples!!.first { it.roleName == employee }.encryptedSymKey!!.key))
        }
    }

    @Test
    fun `revoke blank, non-existing, incomplete or deleted user from blank, non-existing or deleted role fails`() {
        val userNonExisting = "userNonExisting"
        val userIncomplete = "userIncomplete"
        assert(coreRBAC.addUser(userIncomplete).code == OutcomeCode.CODE_000_SUCCESS)
        val userOperational = "userOperational"
        TestUtilities.addAndInitUser(coreRBAC, userOperational)
        val userDeleted = "userDeleted"
        assert(coreRBAC.addUser(userDeleted).code == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.deleteUser(userDeleted) == OutcomeCode.CODE_000_SUCCESS)

        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBAC.addRole(roleOperational) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBAC.addRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke non-existing user from non-existing role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userNonExisting, roleNonExisting) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke non-existing user from operational role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userNonExisting, roleOperational) ==
                        OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
            )
        }

        /** revoke non-existing user from deleted role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userNonExisting, roleDeleted) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from non-existing role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userIncomplete, roleNonExisting) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from operational role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userIncomplete, roleOperational) ==
                        OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from deleted role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userIncomplete, roleDeleted) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke operational user from non-existing role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userOperational, roleNonExisting) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke operational user from deleted role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userOperational, roleDeleted) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke deleted user from non-existing role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userDeleted, roleNonExisting) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke deleted user from operational role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userDeleted, roleOperational) ==
                        OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
            )
        }

        /** revoke deleted user from deleted role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userDeleted, roleDeleted) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke blank user from operational role */
        run {
            assert(
                coreRBAC.revokeUserFromRole("  ", roleOperational) ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** revoke operational user from blank role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userOperational, "  ") ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `revoke admin user from admin or assigned role fails`() {
        /** revoke user from admin role */
        run {
            val alice = "alice"
            TestUtilities.addAndInitUser(coreRBAC, alice)
            assert(coreRBAC.revokeUserFromRole(alice, ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** revoke admin user from admin role */
        run {
            assert(coreRBAC.revokeUserFromRole(ADMIN, ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** revoke admin user from assigned role */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.revokeUserFromRole(ADMIN, student) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    @Test
    fun `revoke user to assigned role twice fails`() {
        val alice = "alice"
        val employee = "employee"
        TestUtilities.addAndInitUser(coreRBAC, alice)
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke user to assigned role twice */
        run {
            assert(coreRBAC.revokeUserFromRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.revokeUserFromRole(alice, employee) == OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND)
        }
    }

    @Test
    fun `assign permission over operational file to operational role works`() {
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** assign read permission over operational file to operational role */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)

            val employeeFiles = coreRBAC.getPermissions(roleName = employee)
            assert(employeeFiles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(employeeFiles.permissionTuples!!.size == 1)
            assert(employeeFiles.permissionTuples!!.filter { it.roleName == employee && it.fileName == exam }.size == 1)
            val employeePermissionTuple = employeeFiles.permissionTuples!!.first { it.roleName == employee && it.fileName == exam }
            assert(employeePermissionTuple.roleVersionNumber == 1)
            assert(employeePermissionTuple.symKeyVersionNumber == 1)
            assert(employeePermissionTuple.permission == PermissionType.READ)
        }

        /** adding write permission to operational role already having read permission */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

            val employeeFiles = coreRBAC.getPermissions(roleName = employee)
            assert(employeeFiles.code == OutcomeCode.CODE_000_SUCCESS)
            val employeePermissionTuple = employeeFiles.permissionTuples!!.first { it.roleName == employee && it.fileName == exam }
            assert(employeePermissionTuple.permission == PermissionType.READWRITE)
        }

        /** assign read and write permission over operational file to operational role */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(student, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

            val studentFiles = coreRBAC.getPermissions(roleName = student)
            assert(studentFiles.code == OutcomeCode.CODE_000_SUCCESS)
            val studentPermissionTuple = studentFiles.permissionTuples!!.first { it.roleName == student && it.fileName == exam }
            assert(studentPermissionTuple.permission == PermissionType.READWRITE)
        }
    }

    @Test
    fun `assign read permission over operational file to operational role with already read or read write permission fails`() {
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** assign read permission over operational file to operational role with already read permission */
        run {
            val employee = "employee"
            assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_016_INVALID_PERMISSION)
        }

        /** adding write permission to operational role already having read permission */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(student, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(student, exam, PermissionType.READ) == OutcomeCode.CODE_016_INVALID_PERMISSION)
        }
    }

    @Test
    fun `assign blank, non-existing or deleted role to blank, non-existing or deleted file fails`() {
        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBAC.addRole(roleOperational) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBAC.addRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)

        val fileNonExisting = "fileNonExisting"
        val fileOperational = "fileOperational"
        assert(
            coreRBAC.addFile(
                fileOperational, fileOperational.inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )
        val fileDeleted = "fileDeleted"
        assert(
            coreRBAC.addFile(
                fileDeleted, fileDeleted.inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )
        assert(coreRBAC.deleteFile(fileDeleted) == OutcomeCode.CODE_000_SUCCESS)

        /** assign non-existing role to non-existing file */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleNonExisting, fileNonExisting, PermissionType.READ) ==
                        OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign non-existing role to operational file */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleNonExisting, fileOperational, PermissionType.READ) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign non-existing role to deleted file */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleNonExisting, fileDeleted, PermissionType.READ) ==
                        OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign operational role to non-existing file */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleOperational, fileNonExisting, PermissionType.READ) ==
                        OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign operational role to deleted file */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleOperational, fileDeleted, PermissionType.READ) ==
                        OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign deleted role to non-existing file */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleDeleted, fileNonExisting, PermissionType.READ) ==
                        OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign deleted role to operational file */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleDeleted, fileOperational, PermissionType.READ) ==
                        OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign deleted role to deleted file */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleDeleted, fileDeleted, PermissionType.READ) ==
                        OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign blank role to operational file */
        run {
            assert(
                coreRBAC.assignPermissionToRole("  ", fileOperational, PermissionType.READ) ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** assign operational role to blank file */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleOperational, "  ", PermissionType.READ) ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `assign operational role to operational file twice fails`() {
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** assign operational role to operational file twice */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_016_INVALID_PERMISSION)
        }
    }

    @Test
    fun `assign read permission to operational role with already write permission over operational file fails`() {
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** assign operational role to operational file twice */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_016_INVALID_PERMISSION)
        }
    }

    @Test
    fun `revoke assigned permission from role over file works`() {
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke write permission from role over file */
        run {
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.WRITE) == OutcomeCode.CODE_000_SUCCESS)
            val employeeFiles = coreRBAC.getPermissions(roleName = employee)
            assert(employeeFiles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(employeeFiles.permissionTuples!!.size == 1)
            assert(employeeFiles.permissionTuples!!.filter { it.roleName == employee && it.fileName == exam }.size == 1)
            val employeePermissionTuple = employeeFiles.permissionTuples!!.first { it.roleName == employee && it.fileName == exam }
            assert(employeePermissionTuple.roleVersionNumber == 1)
            assert(employeePermissionTuple.symKeyVersionNumber == 1)
            assert(employeePermissionTuple.permission == PermissionType.READ)
        }

        /** revoke read permission from role over file */
        run {
            /** get the file and the permission tuple before the revoke operation */
            val beforeExamFile = coreRBAC.getFiles().files!!.first { it.name == exam }
            val beforeAdminFiles = coreRBAC.getPermissions(roleName = ADMIN)
            assert(beforeAdminFiles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(beforeAdminFiles.permissionTuples!!.size == 1)
            assert(beforeAdminFiles.permissionTuples!!.filter { it.roleName == ADMIN && it.fileName == exam }.size == 1)
            val beforeAdminPermissionTuple = beforeAdminFiles.permissionTuples!!.first { it.roleName == ADMIN && it.fileName == exam }
            assert(beforeAdminPermissionTuple.symKeyVersionNumber == 1)

            /** revoke operation */
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            val employeeFiles = coreRBAC.getPermissions(roleName = employee)
            assert(employeeFiles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(employeeFiles.permissionTuples!!.size == 0)

            /** get the file and the permission tuple after the revoke operation */
            val afterExamFile = coreRBAC.getFiles().files!!.first { it.name == exam }
            val afterAdminFiles = coreRBAC.getPermissions(roleName = ADMIN)
            assert(afterAdminFiles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(afterAdminFiles.permissionTuples!!.size == 2)
            assert(afterAdminFiles.permissionTuples!!.filter { it.roleName == ADMIN && it.fileName == exam }.size == 2)
            val afterAdminPermissionTuple = afterAdminFiles.permissionTuples!!.first { it.roleName == ADMIN && it.fileName == exam && it.symKeyVersionNumber == 2 }
            assert(afterAdminPermissionTuple.symKeyVersionNumber == 2)

            /** check the difference between the file and permission tuples before and after the revoke operation */
            assert(beforeExamFile.symEncKeyVersionNumber == 1)
            assert(afterExamFile.symEncKeyVersionNumber == 2)
            assert(!beforeAdminPermissionTuple.encryptedSymKey!!.key.contentEquals(afterAdminPermissionTuple.encryptedSymKey!!.key))
        }
    }

    @Test
    fun `revoke read or write permission of blank, non-existing or deleted role from blank, non-existing or deleted file fails`() {
        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBAC.addRole(roleOperational) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBAC.addRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)

        val fileNonExisting = "fileNonExisting"
        val fileOperational = "fileOperational"
        assert(
            coreRBAC.addFile(
                fileOperational, fileOperational.inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )
        val fileDeleted = "fileDeleted"
        assert(
            coreRBAC.addFile(
                fileDeleted, fileDeleted.inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )
        assert(coreRBAC.deleteFile(fileDeleted) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke non-existing role from non-existing file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, fileNonExisting, PermissionType.WRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, fileNonExisting, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke non-existing role from operational file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, fileOperational, PermissionType.WRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, fileOperational, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke non-existing role from deleted file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, fileDeleted, PermissionType.WRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, fileDeleted, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke operational role from non-existing file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, fileNonExisting, PermissionType.WRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, fileNonExisting, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke operational role from deleted file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, fileDeleted, PermissionType.WRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, fileDeleted, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke deleted role from non-existing file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, fileNonExisting, PermissionType.WRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, fileNonExisting, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke deleted role from operational file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, fileOperational, PermissionType.WRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, fileOperational, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke deleted role from deleted file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, fileDeleted, PermissionType.WRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, fileDeleted, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke blank role from operational file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole("   ", fileOperational, PermissionType.WRITE) ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
            assert(
                coreRBAC.revokePermissionFromRole("   ", fileOperational, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** revoke operational role from blank file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, "   ", PermissionType.WRITE) ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, "   ", PermissionType.READWRITE) ==
                        OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `revoke admin role permission over assigned file fails`() {
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke admin role permission over assigned file */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(ADMIN, exam, PermissionType.WRITE) ==
                        OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
            )
            assert(
                coreRBAC.revokePermissionFromRole(ADMIN, exam, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
            )
        }
    }

    @Test
    fun `revoke assigned permission from role over file twice fails`() {
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke read-write assigned permission from role over file twice */
        run {
            val employee = "employee"
            assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_000_SUCCESS
            )
            assert(
                coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) ==
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke write assigned permission from role over file twice */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(student, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                coreRBAC.revokePermissionFromRole(student, exam, PermissionType.WRITE) ==
                        OutcomeCode.CODE_000_SUCCESS
            )
            assert(
                coreRBAC.revokePermissionFromRole(student, exam, PermissionType.WRITE) ==
                        OutcomeCode.CODE_016_INVALID_PERMISSION
            )
        }
    }

    @Test
    open fun `revoke assigned permission and reassign lower permission works`() {
        val alice = "alice"
        val aliceCoreRBAC = TestUtilities.addAndInitUser(coreRBAC, alice)

        val employee = "employee"
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addFile(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )

        /** revoke assigned permission and reassign lower permission */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.WRITE) == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = aliceCoreRBAC.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == examContent)
        }
    }

    @Test
    open fun `admin or user read file having permission over file works`() {
        val alice = "alice"
        val aliceCoreRBAC = TestUtilities.addAndInitUser(coreRBAC, alice)

        val employee = "employee"
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addFile(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )

        /** admin read file having permission over file */
        run {
            val downloadedFileResult = coreRBAC.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == examContent)
        }

        /** user read file having permission over file */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = aliceCoreRBAC.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == examContent)
        }
    }

    @Test
    open fun `not assigned or revoked user read file fails`() {
        val alice = "alice"
        val aliceCoreRBAC = TestUtilities.addAndInitUser(coreRBAC, alice)

        val employee = "employee"
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addFile(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )

        /** not assigned user read file */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCoreRBAC.readFile(exam).code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** revoked user read file */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = aliceCoreRBAC.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == examContent)

            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCoreRBAC.readFile(exam).code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    @Test
    open fun `admin or user write file having permission over file works`() {

        val alice = "alice"
        val aliceCoreRBAC = TestUtilities.addAndInitUser(coreRBAC, alice)
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addFile(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )
        val readFileResult = coreRBAC.readFile(exam)
        assert(String(readFileResult.stream!!.readAllBytes()) == examContent)

        /** admin write file having permission over file */
        run {
            val updatedExamContent = "updated exam content by admin"
            val updateFileCode = coreRBAC.writeFile(exam, updatedExamContent.inputStream())
            assert(updateFileCode == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = coreRBAC.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == updatedExamContent)
        }

        /** user write file having permission over file */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            val updatedExamContent = "updated exam content by user"
            val updateFileCode = aliceCoreRBAC.writeFile(exam, updatedExamContent.inputStream())
            assert(updateFileCode == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = aliceCoreRBAC.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == updatedExamContent)
        }
    }

    @Test
    open fun `not assigned or revoked user write file fails`() {
        val alice = "alice"
        val aliceCoreRBAC = TestUtilities.addAndInitUser(coreRBAC, alice)

        val employee = "employee"
        assert(coreRBAC.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addFile(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )

        /** not assigned user write file */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCoreRBAC.writeFile(exam, exam.inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** revoked user write file */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCoreRBAC.writeFile(exam, exam.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.WRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCoreRBAC.writeFile(exam, exam.inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    @Test
    fun `get user of incomplete or operational user works`() {
        assert(coreRBAC.addUser("incomplete").code == OutcomeCode.CODE_000_SUCCESS)
        TestUtilities.addAndInitUser(coreRBAC, "operational")

        /** get user of incomplete user */
        run {
            assert(coreRBAC.getUsers().users!!.filter { it.name == "incomplete" }.size == 1)
        }

        /** get user of operational user */
        run {
            assert(coreRBAC.getUsers().users!!.filter { it.name == "operational" }.size == 1)
        }
    }

    @Test
    fun `get user of non-existing or deleted user fails`() {
        TestUtilities.addAndInitUser(coreRBAC, "deleted")
        assert(coreRBAC.deleteUser("deleted") == OutcomeCode.CODE_000_SUCCESS)

        /** get user of non-existing user */
        run {
            assert(coreRBAC.getUsers().users!!.none { it.name == "not-existing" })
        }

        /** get user of deleted user */
        run {
            assert(coreRBAC.getUsers().users!!.none { it.name == "deleted" })
        }
    }

    @Test
    fun `get role of operational role works`() {
        assert(coreRBAC.addRole("operational") == OutcomeCode.CODE_000_SUCCESS)

        /** get role of operational role */
        run {
            assert(coreRBAC.getRoles().roles!!.filter { it.name == "operational" }.size == 1)
        }
    }

    @Test
    fun `get role of non-existing or deleted role fails`() {
        assert(coreRBAC.addRole("deleted") == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole("deleted") == OutcomeCode.CODE_000_SUCCESS)

        /** get role of non-existing role */
        run {
            assert(coreRBAC.getRoles().roles!!.none { it.name == "not-existing" })
        }

        /** get role of deleted role */
        run {
            assert(coreRBAC.getRoles().roles!!.none { it.name == "deleted" })
        }
    }

    @Test
    fun `get file of operational file works`() {
        assert(
            coreRBAC.addFile(
                "operational", "operational".inputStream(), EnforcementType.COMBINED
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        /** get file of operational file */
        run {
            assert(coreRBAC.getFiles().files!!.filter { it.name == "operational" }.size == 1)
        }
    }

    @Test
    fun `get file of non-existing or deleted file fails`() {
        assert(
            coreRBAC.addFile(
                "deleted", "deleted".inputStream(), EnforcementType.COMBINED
            ) == OutcomeCode.CODE_000_SUCCESS
        )
        assert(coreRBAC.deleteFile("deleted") == OutcomeCode.CODE_000_SUCCESS)

        /** get file of non-existing file */
        run {
            assert(coreRBAC.getFiles().files!!.none { it.name == "not-existing" })
        }

        /** get file of deleted file */
        run {
            assert(coreRBAC.getFiles().files!!.none { it.name == "deleted" })
        }
    }

    @Test
    fun `get existing assignment specifying any combination of username and role name works`() {
        TestUtilities.addAndInitUser(coreRBAC, "alice")
        assert(coreRBAC.addRole("student") == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBAC.assignUserToRole("alice", "student") == OutcomeCode.CODE_000_SUCCESS)

        /** get existing assignment specifying the username */
        run {
            assert(coreRBAC.getAssignments(username = "alice").roleTuples!!.filter { it.roleName == "student" }.size == 1)
        }

        /** get existing assignment specifying the role name */
        run {
            assert(coreRBAC.getAssignments(roleName = "student").roleTuples!!.filter { it.username == "alice" }.size == 1)

        }

        /** get existing assignment specifying both the username and the role name */
        run {
            assert(coreRBAC.getAssignments(username = "alice", roleName = "student").roleTuples!!.size == 1)
        }
    }

    @Test
    fun `get non-existing or deleted assignment fails`() {

        /** get non-existing assignment */
        run {
            assert(coreRBAC.getAssignments(username = "alice").roleTuples!!.none { it.roleName == "student" })
            assert(coreRBAC.getAssignments(roleName = "student").roleTuples!!.none { it.username == "alice" })
            assert(coreRBAC.getAssignments(username = "alice", roleName = "student").roleTuples!!.isEmpty())
        }

        /** get deleted assignment */
        run {
            TestUtilities.addAndInitUser(coreRBAC, "alice")
            assert(coreRBAC.addRole("student") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.assignUserToRole("alice", "student") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBAC.revokeUserFromRole("alice", "student") == OutcomeCode.CODE_000_SUCCESS)

            assert(coreRBAC.getAssignments(username = "alice").roleTuples!!.none { it.roleName == "student" })
            assert(coreRBAC.getAssignments(roleName = "student").roleTuples!!.none { it.username == "alice" })
            assert(coreRBAC.getAssignments(username = "alice", roleName = "student").roleTuples!!.isEmpty())
        }
    }

    @Test
    fun `get existing permission specifying any combination of username, role name and file name works`() {
        TestUtilities.addAndInitUser(coreRBAC, "alice")
        assert(coreRBAC.addRole("student") == OutcomeCode.CODE_000_SUCCESS)
        assert(
            coreRBAC.addFile(
                "exam", "exam".inputStream(), EnforcementType.COMBINED
            ) == OutcomeCode.CODE_000_SUCCESS
        )
        assert(coreRBAC.assignUserToRole("alice", "student") == OutcomeCode.CODE_000_SUCCESS)
        assert(
            coreRBAC.assignPermissionToRole("student", "exam", PermissionType.READWRITE)
                    == OutcomeCode.CODE_000_SUCCESS
        )

        /** get existing permission specifying the username */
        run {
            assert(coreRBAC.getPermissions(username = "alice").permissionTuples!!.filter {
                it.roleName == "student" && it.fileName == "exam"
            }.size == 1)
        }

        /** get existing permission specifying the role name */
        run {
            assert(coreRBAC.getPermissions(roleName = "student").permissionTuples!!.filter {
               it.fileName == "exam"
            }.size == 1)
        }

        /** get existing permission specifying the file name */
        run {
            assert(coreRBAC.getPermissions(fileName = "exam").permissionTuples!!.filter {
                it.roleName == "student"
            }.size == 1)
        }

        /** get existing assignment specifying the username, the role and the file name */
        run {
            assert(coreRBAC.getPermissions(username = "alice", roleName = "student", fileName = "exam").permissionTuples!!.filter {
                it.roleName == "student"
            }.size == 1)
        }
    }

    @Test
    fun `get non-existing or deleted permission fails`() {

        /** get non-existing permission */
        run {
            assert(coreRBAC.getPermissions(username = "alice").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(roleName = "student").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(fileName = "exam").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(username = "alice", roleName = "student", fileName = "exam").permissionTuples!!.isEmpty())
        }

        /** get deleted permission */
        run {
            TestUtilities.addAndInitUser(coreRBAC, "alice")
            assert(coreRBAC.addRole("student") == OutcomeCode.CODE_000_SUCCESS)
            assert(
                coreRBAC.addFile(
                    "exam", "exam".inputStream(), EnforcementType.COMBINED
                ) == OutcomeCode.CODE_000_SUCCESS
            )
            assert(coreRBAC.assignUserToRole("alice", "student") == OutcomeCode.CODE_000_SUCCESS)
            assert(
                coreRBAC.assignPermissionToRole("student", "exam", PermissionType.READWRITE)
                        == OutcomeCode.CODE_000_SUCCESS
            )
            assert(coreRBAC.revokePermissionFromRole("student", "exam", PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

            assert(coreRBAC.getPermissions(username = "alice").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(roleName = "student").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(fileName = "exam").permissionTuples!!.filter { it.roleName == "student" }.isEmpty())
            assert(coreRBAC.getPermissions(username = "alice", roleName = "student", fileName = "exam").permissionTuples!!.isEmpty())
        }
    }


    @Test
    override fun `init admin once works`() {
        /** Admin is already initialized in the setUp function */
    }

    @Test
    override fun `init admin twice fails`() {
        assert(coreRBAC.initAdmin() == OutcomeCode.CODE_034_ADMIN_ALREADY_INITIALIZED)
    }

    @Test
    override fun `init user of existing user works`() {
        val aliceCore = TestUtilities.addUser(coreRBAC, "alice")
        assert(aliceCore.initUser() == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun `init user twice fails`() {
        val bobCore = TestUtilities.addUser(coreRBAC, "bob")
        assert(bobCore.initUser() == OutcomeCode.CODE_000_SUCCESS)
        assert(bobCore.initUser() == OutcomeCode.CODE_004_USER_NOT_FOUND)
    }
}