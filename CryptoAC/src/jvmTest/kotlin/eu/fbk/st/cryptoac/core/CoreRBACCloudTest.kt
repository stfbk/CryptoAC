package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import org.junit.jupiter.api.AfterEach

import org.junit.jupiter.api.BeforeEach

internal class CoreRBACCloudTest: CoreRBACTest() {
    
    private val coreRBACCloud = CoreFactory.getCore(Parameters.adminCoreRBACCloudParameters, Parameters.adminUser) as CoreRBACCloud
    
    @BeforeEach
    override fun setUp() {
        TestUtilities.startCloud()
        TestUtilities.initAdminFromCore()
    }
    
    @AfterEach
    override fun tearDown() {
        TestUtilities.stopCloud()
        TestUtilities.resetDSCloud()
        TestUtilities.resetMetadataStorageMySQL()
        TestUtilities.resetOPACloud()
    }

    override fun `init admin once works`() {
        /** init admin once works */
        run {
            /*   /** the initialisation of the admin is already done in the @BeforeEach */
               coreObjectAdmin.storageDAO.lock()
               val users = coreObjectAdmin.storageDAO.getUsers(username = ADMIN)
               assert(users.size == 1)
               assert(users.filter { it.name == ADMIN }.size == 1)
               val adminUser = users.first { it.name == ADMIN }
               assert(adminUser.isAdmin)
               assert(adminUser.status == ElementStatus.OPERATIONAL)
               assert(adminUser.type == ElementType.USER)
               assert(adminUser.token == ADMIN)
               coreObjectAdmin.storageDAO.unlock()*/
        }
    }
    override fun `init admin twice fails`() {
        /** init admin twice */
        run {
            assert(coreRBACCloud.initAdmin() == OutcomeCode.CODE_034_ADMIN_ALREADY_INITIALIZED)
        }
    }
    
    override fun `init user of existing user works`() {
        /** init user of existing user */
        run {
            TestUtilities.addAndInitUser("alice")
        }
    }
    override fun `init user of non-existing, operational or deleted user fails`() {
        /** init user of non-existing user */
        run {
            assert(Parameters.coreObjectAlice.initUser() == OutcomeCode.CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED)
        }

        /** init user of operational user */
        run {
            TestUtilities.addAndInitUser("bob")
        }

        /** init user of deleted user */
        run {
            val carlCore = TestUtilities.addAndInitUser("carl")
            assert(coreRBACCloud.deleteUser("carl") == OutcomeCode.CODE_000_SUCCESS)
            assert(carlCore.initUser() == OutcomeCode.CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED)
        }
    }

    override fun `add user of non-existing user works`() {
        /** add user of non-existing user */
        run {
            val alice = "alice"
            assert(coreRBACCloud.addUser(alice).code == OutcomeCode.CODE_000_SUCCESS)
/*
            coreObjectAdmin.storageDAO.lock()
            val users = coreObjectAdmin.storageDAO.getUsers(username = alice)
            assert(users.size == 1)
            assert(users.filter { it.name == alice }.size == 1)
            val aliceUser = users.first { it.name == alice }
            assert(!aliceUser.isAdmin)
            assert(aliceUser.status == ElementStatus.INCOMPLETE)
            assert(aliceUser.type == ElementType.USER)
            assert(aliceUser.token == alice)
            coreObjectAdmin.storageDAO.unlock()*/
        }
    }
    override fun `add user of blank, admin, existing (incomplete or operational) or deleted user fails`() {
        /** add user with blank username */
        run {
            assert(coreRBACCloud.addUser("").code == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBACCloud.addUser("    ").code == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** add user with admin username */
        run {
            assert(coreRBACCloud.addUser(Constants.ADMIN).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user of existing (incomplete) user */
        run {
            assert(coreRBACCloud.addUser("alice").code == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.addUser("alice").code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user of existing (operational) user */
        run {
            TestUtilities.addAndInitUser("bob")
            assert(coreRBACCloud.addUser("bob").code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user of deleted user */
        run {
            TestUtilities.addAndInitUser("carl")
            assert(coreRBACCloud.deleteUser("carl") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.addUser("carl").code == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }

    override fun `delete user of existing (incomplete or operational) user works`() {
        /** delete user of existing (incomplete) user */
        run {
            assert(coreRBACCloud.addUser("alice").code == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteUser("alice") == OutcomeCode.CODE_000_SUCCESS)
        }

        /** delete user of existing (operational) user */
        run {
            TestUtilities.addAndInitUser("bob")
            assert(coreRBACCloud.deleteUser("bob") == OutcomeCode.CODE_000_SUCCESS)
        }
    }
    override fun `delete user of blank, admin, non-existing or deleted user fails`() {
        /** delete user of blank user */
        run {
            assert(coreRBACCloud.deleteUser("") == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBACCloud.deleteUser("   ") == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** delete user of admin user */
        run {
            assert(coreRBACCloud.deleteUser(Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** delete user of non-existing user */
        run {
            assert(coreRBACCloud.deleteUser("alice") == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** delete user of deleted user */
        run {
            TestUtilities.addAndInitUser("alice")
            assert(coreRBACCloud.deleteUser("alice") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteUser("alice") == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }
    }

    override fun `add role of non-existing role works`() {
        /** add role of non-existing role */
        run {
            val student = "student"
            assert(coreRBACCloud.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            val adminRoles = coreRBACCloud.getAssignments(username = Constants.ADMIN)
            assert(adminRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(adminRoles.roleTuples!!.size == 2)
            assert(adminRoles.roleTuples!!.filter { it.username == Constants.ADMIN && it.roleName == Constants.ADMIN }.size == 1)
            assert(adminRoles.roleTuples!!.filter { it.username == Constants.ADMIN && it.roleName == student }.size == 1)
/*
            coreObjectAdmin.storageDAO.lock()
            val roles = coreObjectAdmin.storageDAO.getRoles(roleName = student)
            assert(roles.size == 1)
            assert(roles.filter { it.name == student }.size == 1)
            val studentRole = roles.first { it.name == student }
            assert(studentRole.versionNumber == 1)
            assert(studentRole.status == ElementStatus.OPERATIONAL)
            assert(studentRole.type == ElementType.ROLE)
            coreObjectAdmin.storageDAO.unlock()*/
        }
    }
    override fun `add role of blank, admin, operational or deleted role fails`() {
        /** add role with blank role name */
        run {
            assert(coreRBACCloud.addRole("") == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBACCloud.addRole("    ") == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** add role with admin role name */
        run {
            assert(coreRBACCloud.addRole(Constants.ADMIN) == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role of operational role */
        run {
            assert(coreRBACCloud.addRole("alice") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.addRole("alice") == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role of deleted role */
        run {
            val studentName = "student"
            assert(coreRBACCloud.addRole(studentName) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteRole(studentName) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.addRole(studentName) == OutcomeCode.CODE_014_ROLE_WAS_DELETED)
        }
    }

    override fun `delete role of operational role works`() {
        /** delete role operational role */
        run {
            val studentName = "student"
            assert(coreRBACCloud.addRole(studentName) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteRole(studentName) == OutcomeCode.CODE_000_SUCCESS)
            val studentTuples = coreRBACCloud.getAssignments(studentName)
            assert(studentTuples.code == OutcomeCode.CODE_000_SUCCESS)
            assert(studentTuples.roleTuples!!.size == 0)
        }
    }
    override fun `delete role of blank, admin, non-existing or deleted role fails`() {
        /** delete role of blank role */
        run {
            assert(coreRBACCloud.deleteRole("") == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBACCloud.deleteRole("   ") == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** delete role of admin role */
        run {
            assert(coreRBACCloud.deleteRole(Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** delete role of non-existing role */
        run {
            assert(coreRBACCloud.deleteRole("student") == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** delete role of deleted role */
        run {
            assert(coreRBACCloud.addRole("student") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteRole("student") == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteRole("student") == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
    }

    override fun `add file of non-existing file works`() {
        /** add file of non-existing file */
        val testFile = "testFile"
        run {
            assert(
                coreRBACCloud.addFile(testFile, testFile.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                        OutcomeCode.CODE_000_SUCCESS
            )

            val adminPermissions = coreRBACCloud.getPermissions(username = Constants.ADMIN)
            assert(adminPermissions.code == OutcomeCode.CODE_000_SUCCESS)
            assert(adminPermissions.permissionTuples!!.size == 1)
            assert(adminPermissions.permissionTuples!!.filter { it.roleName == Constants.ADMIN && it.fileName == testFile }.size == 1)
            val permissionTuple = adminPermissions.permissionTuples!!.first { it.roleName == Constants.ADMIN && it.fileName == testFile }
            assert(permissionTuple.permission == PermissionType.READWRITE)
            assert(permissionTuple.symKeyVersionNumber == 1)
            assert(permissionTuple.roleVersionNumber == 1)
/*
            coreObjectAdmin.storageDAO.lock()
            val files = coreObjectAdmin.storageDAO.getFiles(fileName = testFile)
            assert(files.size == 1)
            assert(files.filter { it.name == testFile }.size == 1)
            val file = files.first { it.name == testFile }
            assert(file.symEncKeyVersionNumber == 1)
            assert(file.type == ElementType.FILE)
            assert(file.status == ElementStatus.OPERATIONAL)

            val fileTuples = coreObjectAdmin.storageDAO.getFileTuples(fileName = testFile)
            assert(fileTuples.size == 1)
            assert(fileTuples.filter { it.fileName == testFile }.size == 1)
            coreObjectAdmin.storageDAO.unlock()*/
        }
    }
    override fun `add file of blank, operational or deleted file fails`() {
        val content = "content".toByteArray().inputStream()

        /** add file with blank file name */
        run {
            assert(coreRBACCloud.addFile("", content, EnforcementType.COMBINED) == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBACCloud.addFile("    ", content, EnforcementType.COMBINED) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** add file of operational file */
        run {
            assert(coreRBACCloud.addFile("alice", content, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.addFile("alice", content, EnforcementType.COMBINED) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }

        /** add file of deleted file */
        run {
            val exam = "exam"
            assert(coreRBACCloud.addFile(exam, content, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteFile(exam) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.addFile(exam, content, EnforcementType.COMBINED) == OutcomeCode.CODE_015_FILE_WAS_DELETED)
        }
    }

    override fun `delete file of operational file works`() {
        /** delete file of operational file */
        run {
            val exam = "exam"
            val examContent = "exam".toByteArray().inputStream()
            assert(coreRBACCloud.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteFile(exam) == OutcomeCode.CODE_000_SUCCESS)
            val examTuples = coreRBACCloud.getPermissions(fileName = exam)
            assert(examTuples.code == OutcomeCode.CODE_000_SUCCESS)
            assert(examTuples.permissionTuples!!.size == 0)
/*
            coreObjectAdmin.storageDAO.lock()
            val files = coreObjectAdmin.storageDAO.getFiles(fileName = exam)
            assert(files.size == 0)

            val fileTuples = coreObjectAdmin.storageDAO.getFileTuples(fileName = exam)
            assert(fileTuples.size == 0)
            coreObjectAdmin.storageDAO.unlock()*/
        }
    }
    override fun `delete file of blank, non-existing or deleted file fails`() {
        /** delete file of blank file */
        run {
            assert(coreRBACCloud.deleteFile("") == OutcomeCode.CODE_020_INVALID_PARAMETER)
            assert(coreRBACCloud.deleteFile("   ") == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }

        /** delete file of non-existing file */
        run {
            assert(coreRBACCloud.deleteFile("exam") == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** delete file of deleted file */
        run {
            val exam = "exam"
            val examContent = "exam".toByteArray().inputStream()
            assert(coreRBACCloud.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteFile(exam) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.deleteFile(exam) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    override fun `assign operational user to operational role works`() {
        val alice = "alice"
        val employee = "employee"
        TestUtilities.addAndInitUser(alice)
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        /** assign operational user to operational role */
        run {
            assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)

            val aliceRoles = coreRBACCloud.getAssignments(alice)
            assert(aliceRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceRoles.roleTuples!!.size == 1)
            assert(aliceRoles.roleTuples!!.filter { it.username == alice && it.roleName == employee }.size == 1)
            val aliceRoleTuple = aliceRoles.roleTuples!!.first { it.username == alice && it.roleName == employee }
            assert(aliceRoleTuple.roleVersionNumber == 1)
        }
    }
    override fun `assign blank, non-existing, incomplete or deleted user to blank, non-existing or deleted role fails`() {
        val userNonExisting = "userNonExisting"
        val userIncomplete = "userIncomplete"
        assert(coreRBACCloud.addUser(userIncomplete).code == OutcomeCode.CODE_000_SUCCESS)
        val userOperational = "userOperational"
        TestUtilities.addAndInitUser(userOperational)
        val userDeleted = "userDeleted"
        assert(coreRBACCloud.addUser(userDeleted).code == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.deleteUser(userDeleted) == OutcomeCode.CODE_000_SUCCESS)

        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBACCloud.addRole(roleOperational) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBACCloud.addRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.deleteRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)

        /** assign non-existing user to non-existing role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userNonExisting, roleNonExisting) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign non-existing user to operational role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userNonExisting, roleOperational) ==
                    OutcomeCode.CODE_004_USER_NOT_FOUND
            )
        }

        /** assign non-existing user to deleted role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userNonExisting, roleDeleted) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign incomplete user to non-existing role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userIncomplete, roleNonExisting) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign incomplete user to operational role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userIncomplete, roleOperational) ==
                    OutcomeCode.CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED
            )
        }

        /** assign incomplete user to deleted role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userIncomplete, roleDeleted) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign operational user to non-existing role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userOperational, roleNonExisting) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign operational user to deleted role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userOperational, roleDeleted) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign deleted user to non-existing role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userDeleted, roleNonExisting) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign deleted user to operational role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userDeleted, roleOperational) ==
                    OutcomeCode.CODE_013_USER_WAS_DELETED
            )
        }

        /** assign deleted user to deleted role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userDeleted, roleDeleted) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign blank user to operational role */
        run {
            assert(
                coreRBACCloud.assignUserToRole("  ", roleOperational) ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** assign operational user to blank role */
        run {
            assert(
                coreRBACCloud.assignUserToRole(userOperational, "  ") ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }
    override fun `assign operational user to admin role fails`() {
        /** assign operational user to admin role */
        run {
            val alice = "alice"
            TestUtilities.addAndInitUser(alice)
            assert(coreRBACCloud.assignUserToRole(alice, Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }
    override fun `assign operational user to operational role twice fails`() {
        val alice = "alice"
        val employee = "employee"
        TestUtilities.addAndInitUser(alice)
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        /** assign operational user to operational role twice */
        run {
            assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS)
        }
    }

    override fun `revoke user from assigned role works`() {
        val alice = "alice"
        val employee = "employee"
        val excel = "excel"
        TestUtilities.addAndInitUser(alice)
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            coreRBACCloud.addFile(excel,
            excel.toByteArray().inputStream(),
            EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.assignPermissionToRole(employee, excel, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
/*
        /** revoke user from assigned role */
        run {
            /** get the role and the role/permission tuples before the revoke operation */
            coreObjectAdmin.storageDAO.lock()
            val beforeEmployeeRole = coreObjectAdmin.storageDAO.getRoles(employee).first()
            coreObjectAdmin.storageDAO.unlock()
            val beforeAdminRoles = coreObjectAdmin.getAssignments(ADMIN)
            assert(beforeAdminRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(beforeAdminRoles.roleTuples!!.size == 2)
            assert(beforeAdminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == employee }.size == 1)
            val beforeAdminRoleTuple =
                beforeAdminRoles.roleTuples!!.first { it.username == ADMIN && it.roleName == employee }
            assert(beforeAdminRoleTuple.roleVersionNumber == 1)
            val beforePermissionTuples = coreObjectAdmin.getPermissions(fileName = excel)
            assert(beforePermissionTuples.code == OutcomeCode.CODE_000_SUCCESS)
            assert(beforePermissionTuples.permissionTuples!!.size == 2)
            beforePermissionTuples.permissionTuples!!.filter { it.roleName == employee }.apply {
                assert(size == 1)
                assert(first().symKeyVersionNumber == 1)
            }

            /** revoke operation */
            assert(coreObjectAdmin.revokeUserFromRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            val aliceRoles = coreObjectAdmin.getAssignments(alice)
            assert(aliceRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceRoles.roleTuples!!.size == 0)

            /** get the role and the role/permission tuples after the revoke operation */
            coreObjectAdmin.storageDAO.lock()
            val afterEmployeeRole = coreObjectAdmin.storageDAO.getRoles(employee).first()
            coreObjectAdmin.storageDAO.unlock()
            val afterAdminRoles = coreObjectAdmin.getAssignments(ADMIN)
            assert(afterAdminRoles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(afterAdminRoles.roleTuples!!.size == 2)
            assert(afterAdminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == employee }.size == 1)
            val afterAdminRoleTuple =
                afterAdminRoles.roleTuples!!.first { it.username == ADMIN && it.roleName == employee }
            assert(afterAdminRoleTuple.roleVersionNumber == 2)
            val afterPermissionTuples = coreObjectAdmin.getPermissions(fileName = excel)
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
        }*/
    }
    override fun `revoke blank, non-existing, incomplete or deleted user from blank, non-existing or deleted role fails`() {
        val userNonExisting = "userNonExisting"
        val userIncomplete = "userIncomplete"
        assert(coreRBACCloud.addUser(userIncomplete).code == OutcomeCode.CODE_000_SUCCESS)
        val userOperational = "userOperational"
        TestUtilities.addAndInitUser(userOperational)
        val userDeleted = "userDeleted"
        assert(coreRBACCloud.addUser(userDeleted).code == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.deleteUser(userDeleted) == OutcomeCode.CODE_000_SUCCESS)

        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBACCloud.addRole(roleOperational) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBACCloud.addRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.deleteRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke non-existing user from non-existing role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userNonExisting, roleNonExisting) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke non-existing user from operational role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userNonExisting, roleOperational) ==
                    OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
            )
        }

        /** revoke non-existing user from deleted role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userNonExisting, roleDeleted) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from non-existing role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userIncomplete, roleNonExisting) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from operational role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userIncomplete, roleOperational) ==
                    OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from deleted role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userIncomplete, roleDeleted) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke operational user from non-existing role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userOperational, roleNonExisting) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke operational user from deleted role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userOperational, roleDeleted) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke deleted user from non-existing role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userDeleted, roleNonExisting) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke deleted user from operational role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userDeleted, roleOperational) ==
                    OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
            )
        }

        /** revoke deleted user from deleted role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userDeleted, roleDeleted) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke blank user from operational role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole("  ", roleOperational) ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** revoke operational user from blank role */
        run {
            assert(
                coreRBACCloud.revokeUserFromRole(userOperational, "  ") ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }
    override fun `revoke admin user from admin or assigned role fails`() {
        /** revoke user from admin role */
        run {
            val alice = "alice"
            TestUtilities.addAndInitUser(alice)
            assert(coreRBACCloud.revokeUserFromRole(alice, Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** revoke admin user from admin role */
        run {
            assert(coreRBACCloud.revokeUserFromRole(Constants.ADMIN, Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** revoke admin user from assigned role */
        run {
            val student = "student"
            assert(coreRBACCloud.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.revokeUserFromRole(Constants.ADMIN, student) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }
    override fun `revoke user to assigned role twice fails`() {
        val alice = "alice"
        val employee = "employee"
        TestUtilities.addAndInitUser(alice)
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke user to assigned role twice */
        run {
            assert(coreRBACCloud.revokeUserFromRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.revokeUserFromRole(alice, employee) == OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND)
        }
    }

    override fun `assign permission over operational file to operational role works`() {
        val employee = "employee"
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".toByteArray().inputStream()
        assert(coreRBACCloud.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** assign read permission over operational file to operational role */
        run {
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)

            val employeeFiles = coreRBACCloud.getPermissions(roleName = employee)
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
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

            val employeeFiles = coreRBACCloud.getPermissions(roleName = employee)
            assert(employeeFiles.code == OutcomeCode.CODE_000_SUCCESS)
            val employeePermissionTuple = employeeFiles.permissionTuples!!.first { it.roleName == employee && it.fileName == exam }
            assert(employeePermissionTuple.permission == PermissionType.READWRITE)
        }

        /** assign read and write permission over operational file to operational role */
        run {
            val student = "student"
            assert(coreRBACCloud.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(student, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

            val studentFiles = coreRBACCloud.getPermissions(roleName = student)
            assert(studentFiles.code == OutcomeCode.CODE_000_SUCCESS)
            val studentPermissionTuple = studentFiles.permissionTuples!!.first { it.roleName == student && it.fileName == exam }
            assert(studentPermissionTuple.permission == PermissionType.READWRITE)
        }
    }
    override fun `assign read permission over operational file to operational role with already read or read write permission fails`() {
        val exam = "exam"
        val examContent = "exam content".toByteArray().inputStream()
        assert(coreRBACCloud.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** assign read permission over operational file to operational role with already read permission */
        run {
            val employee = "employee"
            assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_016_INVALID_PERMISSION)
        }

        /** adding write permission to operational role already having read permission */
        run {
            val student = "student"
            assert(coreRBACCloud.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(student, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(student, exam, PermissionType.READ) == OutcomeCode.CODE_016_INVALID_PERMISSION)
        }
    }
    override fun `assign blank, non-existing or deleted role to blank, non-existing or deleted file fails`() {
        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBACCloud.addRole(roleOperational) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBACCloud.addRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.deleteRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)

        val fileNonExisting = "fileNonExisting"
        val fileOperational = "fileOperational"
        assert(
            coreRBACCloud.addFile(
            fileOperational, fileOperational.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                OutcomeCode.CODE_000_SUCCESS
        )
        val fileDeleted = "fileDeleted"
        assert(
            coreRBACCloud.addFile(
            fileDeleted, fileDeleted.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                OutcomeCode.CODE_000_SUCCESS
        )
        assert(coreRBACCloud.deleteFile(fileDeleted) == OutcomeCode.CODE_000_SUCCESS)

        /** assign non-existing role to non-existing file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole(roleNonExisting, fileNonExisting, PermissionType.READ) ==
                    OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign non-existing role to operational file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole(roleNonExisting, fileOperational, PermissionType.READ) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign non-existing role to deleted file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole(roleNonExisting, fileDeleted, PermissionType.READ) ==
                    OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign operational role to non-existing file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole(roleOperational, fileNonExisting, PermissionType.READ) ==
                    OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign operational role to deleted file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole(roleOperational, fileDeleted, PermissionType.READ) ==
                    OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign deleted role to non-existing file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole(roleDeleted, fileNonExisting, PermissionType.READ) ==
                    OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign deleted role to operational file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole(roleDeleted, fileOperational, PermissionType.READ) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign deleted role to deleted file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole(roleDeleted, fileDeleted, PermissionType.READ) ==
                    OutcomeCode.CODE_006_FILE_NOT_FOUND
            )
        }

        /** assign blank role to operational file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole("  ", fileOperational, PermissionType.READ) ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** assign operational role to blank file */
        run {
            assert(
                coreRBACCloud.assignPermissionToRole(roleOperational, "  ", PermissionType.READ) ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }
    override fun `assign operational role to operational file twice fails`() {
        val employee = "employee"
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".toByteArray().inputStream()
        assert(coreRBACCloud.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** assign operational role to operational file twice */
        run {
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_016_INVALID_PERMISSION)
        }
    }
    override fun `assign read permission to operational role with already write permission over operational file fails`() {
        val employee = "employee"
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".toByteArray().inputStream()
        assert(coreRBACCloud.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** assign operational role to operational file twice */
        run {
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_016_INVALID_PERMISSION)
        }
    }

    override fun `revoke assigned permission from role over file works`() {
        val employee = "employee"
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".toByteArray().inputStream()
        assert(coreRBACCloud.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke write permission from role over file */
        run {
            assert(coreRBACCloud.revokePermissionFromRole(employee, exam, PermissionType.WRITE) == OutcomeCode.CODE_000_SUCCESS)
            val employeeFiles = coreRBACCloud.getPermissions(roleName = employee)
            assert(employeeFiles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(employeeFiles.permissionTuples!!.size == 1)
            assert(employeeFiles.permissionTuples!!.filter { it.roleName == employee && it.fileName == exam }.size == 1)
            val employeePermissionTuple = employeeFiles.permissionTuples!!.first { it.roleName == employee && it.fileName == exam }
            assert(employeePermissionTuple.roleVersionNumber == 1)
            assert(employeePermissionTuple.symKeyVersionNumber == 1)
            assert(employeePermissionTuple.permission == PermissionType.READ)
        }
/*
        /** revoke read permission from role over file */
        run {
            /** get the file and the permission tuple before the revoke operation */
            coreObjectAdmin.storageDAO.lock()
            val beforeExamFile = coreObjectAdmin.storageDAO.getFiles(exam).first()
            coreObjectAdmin.storageDAO.unlock()
            val beforeAdminFiles = coreObjectAdmin.getPermissions(roleName = ADMIN)
            assert(beforeAdminFiles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(beforeAdminFiles.permissionTuples!!.size == 1)
            assert(beforeAdminFiles.permissionTuples!!.filter { it.roleName == ADMIN && it.fileName == exam }.size == 1)
            val beforeAdminPermissionTuple = beforeAdminFiles.permissionTuples!!.first { it.roleName == ADMIN && it.fileName == exam }
            assert(beforeAdminPermissionTuple.symKeyVersionNumber == 1)

            /** revoke operation */
            assert(coreObjectAdmin.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            val employeeFiles = coreObjectAdmin.getPermissions(roleName = employee)
            assert(employeeFiles.code == OutcomeCode.CODE_000_SUCCESS)
            assert(employeeFiles.permissionTuples!!.size == 0)

            /** get the file and the permission tuple after the revoke operation */
            coreObjectAdmin.storageDAO.lock()
            val afterExamFile = coreObjectAdmin.storageDAO.getFiles(exam).first()
            coreObjectAdmin.storageDAO.unlock()
            val afterAdminFiles = coreObjectAdmin.getPermissions(roleName = ADMIN)
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
    */
    }
    override fun `revoke read or write permission of blank, non-existing or deleted role from blank, non-existing or deleted file fails`() {
        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBACCloud.addRole(roleOperational) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBACCloud.addRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)
        assert(coreRBACCloud.deleteRole(roleDeleted) == OutcomeCode.CODE_000_SUCCESS)

        val fileNonExisting = "fileNonExisting"
        val fileOperational = "fileOperational"
        assert(
            coreRBACCloud.addFile(
            fileOperational, fileOperational.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                OutcomeCode.CODE_000_SUCCESS
        )
        val fileDeleted = "fileDeleted"
        assert(
            coreRBACCloud.addFile(
            fileDeleted, fileDeleted.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                OutcomeCode.CODE_000_SUCCESS
        )
        assert(coreRBACCloud.deleteFile(fileDeleted) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke non-existing role from non-existing file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(roleNonExisting, fileNonExisting, PermissionType.WRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(roleNonExisting, fileNonExisting, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke non-existing role from operational file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(roleNonExisting, fileOperational, PermissionType.WRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(roleNonExisting, fileOperational, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke non-existing role from deleted file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(roleNonExisting, fileDeleted, PermissionType.WRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(roleNonExisting, fileDeleted, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke operational role from non-existing file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(roleOperational, fileNonExisting, PermissionType.WRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(roleOperational, fileNonExisting, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke operational role from deleted file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(roleOperational, fileDeleted, PermissionType.WRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(roleOperational, fileDeleted, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke deleted role from non-existing file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(roleDeleted, fileNonExisting, PermissionType.WRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(roleDeleted, fileNonExisting, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke deleted role from operational file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(roleDeleted, fileOperational, PermissionType.WRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(roleDeleted, fileOperational, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke deleted role from deleted file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(roleDeleted, fileDeleted, PermissionType.WRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(roleDeleted, fileDeleted, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke blank role from operational file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole("   ", fileOperational, PermissionType.WRITE) ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
            assert(
                coreRBACCloud.revokePermissionFromRole("   ", fileOperational, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** revoke operational role from blank file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(roleOperational, "   ", PermissionType.WRITE) ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(roleOperational, "   ", PermissionType.READWRITE) ==
                    OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }
    }
    override fun `revoke admin role permission over assigned file fails`() {
        val exam = "exam"
        val examContent = "exam content".toByteArray().inputStream()
        assert(coreRBACCloud.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke admin role permission over assigned file */
        run {
            assert(
                coreRBACCloud.revokePermissionFromRole(Constants.ADMIN, exam, PermissionType.WRITE) ==
                    OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(Constants.ADMIN, exam, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
            )
        }
    }
    override fun `revoke assigned permission from role over file twice fails`() {
        val exam = "exam"
        val examContent = "exam content".toByteArray().inputStream()
        assert(coreRBACCloud.addFile(exam, examContent, EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)

        /** revoke read-write assigned permission from role over file twice */
        run {
            val employee = "employee"
            assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                coreRBACCloud.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_000_SUCCESS
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) ==
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke write assigned permission from role over file twice */
        run {
            val student = "student"
            assert(coreRBACCloud.addRole(student) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(student, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                coreRBACCloud.revokePermissionFromRole(student, exam, PermissionType.WRITE) ==
                    OutcomeCode.CODE_000_SUCCESS
            )
            assert(
                coreRBACCloud.revokePermissionFromRole(student, exam, PermissionType.WRITE) ==
                    OutcomeCode.CODE_016_INVALID_PERMISSION
            )
        }
    }
    override fun `revoke assigned permission and reassign lower permission works`() {
        val alice = "alice"
        val aliceCore = TestUtilities.addAndInitUser(alice)

        val employee = "employee"
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBACCloud.addFile(exam, examContent.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )

        /** revoke assigned permission and reassign lower permission */
        run {
            assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.revokePermissionFromRole(employee, exam, PermissionType.WRITE) == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = aliceCore.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == examContent)
        }
    }

    override fun `admin or user read file having permission over file works`() {
        val alice = "alice"
        val aliceCore = TestUtilities.addAndInitUser(alice)

        val employee = "employee"
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBACCloud.addFile(exam, examContent.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )

        /** admin read file having permission over file */
        run {
            val downloadedFileResult = coreRBACCloud.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == examContent)
        }

        /** user read file having permission over file */
        run {
            assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = aliceCore.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == examContent)
        }
    }
    override fun `not assigned or revoked user read file fails`() {
        val alice = "alice"
        val aliceCore = TestUtilities.addAndInitUser(alice)

        val employee = "employee"
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBACCloud.addFile(exam, examContent.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )

        /** not assigned user read file */
        run {
            assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.readFile(exam).code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** revoked user read file */
        run {
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = aliceCore.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == examContent)

            assert(coreRBACCloud.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.readFile(exam).code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    override fun `admin or user write file having permission over file works`() {

        val alice = "alice"
        val aliceCore = TestUtilities.addAndInitUser(alice)
        val employee = "employee"
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBACCloud.addFile(exam, examContent.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )

        /** admin write file having permission over file */
        run {
            val updatedExamContent = "updated exam content by admin"
            val updateFileCode = coreRBACCloud.writeFile(exam, updatedExamContent.toByteArray().inputStream())
            assert(updateFileCode == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = coreRBACCloud.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == updatedExamContent)
        }

        /** user write file having permission over file */
        run {
            assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            val updatedExamContent = "updated exam content by user"
            val updateFileCode = aliceCore.writeFile(exam, updatedExamContent.toByteArray().inputStream())
            assert(updateFileCode == OutcomeCode.CODE_000_SUCCESS)
            val downloadedFileResult = aliceCore.readFile(exam)
            assert(downloadedFileResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(String(downloadedFileResult.stream!!.readAllBytes()) == updatedExamContent)
        }
    }
    override fun `not assigned or revoked user write file fails`() {
        val alice = "alice"
        val aliceCore = TestUtilities.addAndInitUser(alice)

        val employee = "employee"
        assert(coreRBACCloud.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBACCloud.addFile(exam, examContent.toByteArray().inputStream(), EnforcementType.COMBINED) ==
                    OutcomeCode.CODE_000_SUCCESS
        )

        /** not assigned user write file */
        run {
            assert(coreRBACCloud.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(exam, exam.toByteArray().inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** revoked user write file */
        run {
            assert(coreRBACCloud.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(exam, exam.toByteArray().inputStream()) == OutcomeCode.CODE_000_SUCCESS)
            assert(coreRBACCloud.revokePermissionFromRole(employee, exam, PermissionType.WRITE) == OutcomeCode.CODE_000_SUCCESS)
            assert(aliceCore.writeFile(exam, exam.toByteArray().inputStream()) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }
}