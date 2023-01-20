package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.model.unit.UnitElementStatus
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.inputStream
import org.junit.jupiter.api.*

internal abstract class CoreRBACTest : CoreTest() {

    private val coreRBAC: CoreRBAC by lazy { core as CoreRBAC }

    // TODO test that, when revoking a user from a role, the tokens
    //  of the role and the involved files change. Similarly, test
    //  that, when revoking a role from a file, the token of the file
    //  changes

    @Test
    fun `add role of non-existing role works`() {
        /** add role of non-existing role */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == CODE_000_SUCCESS)
            val adminRoles = coreRBAC.getAssignments(username = ADMIN)
            assert(adminRoles.code == CODE_000_SUCCESS)
            assert(adminRoles.roleTuples!!.size == 2)
            assert(adminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == ADMIN }.size == 1)
            assert(adminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == student }.size == 1)

            val roles = coreRBAC.getRoles().roles!!.filter { it.name == student }
            assert(roles.size == 1)
            assert(roles.filter { it.name == student }.size == 1)
            val studentRole = roles.first { it.name == student }
            assert(studentRole.versionNumber == 1)
            assert(studentRole.status == UnitElementStatus.OPERATIONAL)
        }
    }

    @Test
    fun `add role of blank, admin, operational or deleted role fails`() {
        /** add role with blank name */
        run {
            assert(coreRBAC.addRole("") == CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.addRole("    ") == CODE_020_INVALID_PARAMETER)
        }

        /** add role with admin role name */
        run {
            assert(coreRBAC.addRole(ADMIN) == CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role of operational role */
        run {
            assert(coreRBAC.addRole("alice") == CODE_000_SUCCESS)
            assert(coreRBAC.addRole("alice") == CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role of deleted role */
        run {
            val studentName = "student"
            assert(coreRBAC.addRole(studentName) == CODE_000_SUCCESS)
            assert(coreRBAC.deleteRole(studentName) == CODE_000_SUCCESS)
            assert(coreRBAC.addRole(studentName) == CODE_014_ROLE_WAS_DELETED)
        }
    }

    @Test
    fun `delete role of operational role works`() {
        /** delete role operational role */
        run {
            val studentName = "student"
            assert(coreRBAC.addRole(studentName) == CODE_000_SUCCESS)
            assert(coreRBAC.deleteRole(studentName) == CODE_000_SUCCESS)
            val studentTuples = coreRBAC.getAssignments(studentName)
            assert(studentTuples.code == CODE_000_SUCCESS)
            assert(studentTuples.roleTuples!!.size == 0)
        }
    }

    @Test
    fun `delete role of blank, admin, non-existing or deleted role fails`() {
        /** delete role of blank role */
        run {
            assert(coreRBAC.deleteRole("") == CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.deleteRole("   ") == CODE_020_INVALID_PARAMETER)
        }

        /** delete role of admin role */
        run {
            assert(coreRBAC.deleteRole(ADMIN) == CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** delete role of non-existing role */
        run {
            assert(coreRBAC.deleteRole("student") == CODE_005_ROLE_NOT_FOUND)
        }

        /** delete role of deleted role */
        run {
            assert(coreRBAC.addRole("student") == CODE_000_SUCCESS)
            assert(coreRBAC.deleteRole("student") == CODE_000_SUCCESS)
            assert(coreRBAC.deleteRole("student") == CODE_014_ROLE_WAS_DELETED)
        }
    }

    @Test
    fun `add resource of non-existing resource works`() {
        /** add resource of non-existing resource */
        val testResource = "testResource"
        run {
            assert(
                coreRBAC.addResource(
                    resourceName = testResource,
                    resourceContent = testResource.inputStream(),
                    enforcement = EnforcementType.COMBINED
                ) ==
                    CODE_000_SUCCESS
            )

            val adminPermissions = coreRBAC.getPermissions(username = ADMIN)
            assert(adminPermissions.code == CODE_000_SUCCESS)
            assert(adminPermissions.permissionTuples!!.size == 1)
            assert(adminPermissions.permissionTuples!!.filter { it.roleName == ADMIN && it.resourceName == testResource }.size == 1)
            val permissionTuple = adminPermissions.permissionTuples!!.first { it.roleName == ADMIN && it.resourceName == testResource }
            assert(permissionTuple.permission == PermissionType.READWRITE)
            assert(permissionTuple.symKeyVersionNumber == 1)
            assert(permissionTuple.roleVersionNumber == 1)

            val resources = coreRBAC.getResources().resources!!.filter { it.name == testResource }
            assert(resources.size == 1)
            assert(resources.filter { it.name == testResource }.size == 1)
            val resource = resources.first { it.name == testResource }
            assert(resource.symEncKeyVersionNumber == 1)
            assert(resource.symDecKeyVersionNumber == 1)
            assert(resource.status == UnitElementStatus.OPERATIONAL)
        }
    }

    @Test
    fun `add resource of blank, operational or deleted resource fails`() {
        val content = "content".inputStream()

        /** add resource with blank name */
        run {
            assert(coreRBAC.addResource("", content, EnforcementType.COMBINED) == CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.addResource("    ", content, EnforcementType.COMBINED) == CODE_020_INVALID_PARAMETER)
        }

        /** add resource of operational resource */
        run {
            assert(coreRBAC.addResource("alice", content, EnforcementType.COMBINED) == CODE_000_SUCCESS)
            assert(coreRBAC.addResource("alice", content, EnforcementType.COMBINED) == CODE_003_RESOURCE_ALREADY_EXISTS)
        }

        /** add resource of deleted resource */
        run {
            val exam = "exam"
            assert(coreRBAC.addResource(exam, content, EnforcementType.COMBINED) == CODE_000_SUCCESS)
            assert(coreRBAC.deleteResource(exam) == CODE_000_SUCCESS)
            assert(coreRBAC.addResource(exam, content, EnforcementType.COMBINED) == CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    fun `delete resource of operational resource works`() {

        /** delete resource of operational resource */
        run {
            val exam = "exam"
            val examContent = "exam".inputStream()
            assert(coreRBAC.addResource(exam, examContent, EnforcementType.COMBINED) == CODE_000_SUCCESS)
            assert(coreRBAC.deleteResource(exam) == CODE_000_SUCCESS)
            val examTuples = coreRBAC.getPermissions(resourceName = exam)
            assert(examTuples.code == CODE_000_SUCCESS)
            assert(examTuples.permissionTuples!!.size == 0)
            assert(coreRBAC.getResources().resources!!.first { it.status == UnitElementStatus.DELETED }.name == exam)
        }
    }

    @Test
    fun `delete resource of blank, non-existing or deleted resource fails`() {
        /** delete resource of blank resource */
        run {
            assert(coreRBAC.deleteResource("") == CODE_020_INVALID_PARAMETER)
            assert(coreRBAC.deleteResource("   ") == CODE_020_INVALID_PARAMETER)
        }

        /** delete resource of non-existing resource */
        run {
            assert(coreRBAC.deleteResource("exam") == CODE_006_RESOURCE_NOT_FOUND)
        }

        /** delete resource of deleted resource */
        run {
            val exam = "exam"
            val examContent = "exam".inputStream()
            assert(coreRBAC.addResource(exam, examContent, EnforcementType.COMBINED) == CODE_000_SUCCESS)
            assert(coreRBAC.deleteResource(exam) == CODE_000_SUCCESS)
            assert(coreRBAC.deleteResource(exam) == CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    fun `assign operational user to operational role works`() {
        val alice = "alice"
        val employee = "employee"
        addAndInitUser(coreRBAC, alice)
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)

        /** assign operational user to operational role */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == CODE_000_SUCCESS)

            val aliceRoles = coreRBAC.getAssignments(alice)
            assert(aliceRoles.code == CODE_000_SUCCESS)
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
        assert(coreRBAC.addUser(userIncomplete).code == CODE_000_SUCCESS)
        val userOperational = "userOperational"
        addAndInitUser(coreRBAC, userOperational)
        val userDeleted = "userDeleted"
        assert(coreRBAC.addUser(userDeleted).code == CODE_000_SUCCESS)
        assert(coreRBAC.deleteUser(userDeleted) == CODE_000_SUCCESS)

        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBAC.addRole(roleOperational) == CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBAC.addRole(roleDeleted) == CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole(roleDeleted) == CODE_000_SUCCESS)

        /** assign non-existing user to non-existing role */
        run {
            assert(
                coreRBAC.assignUserToRole(userNonExisting, roleNonExisting) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign non-existing user to operational role */
        run {
            assert(
                coreRBAC.assignUserToRole(userNonExisting, roleOperational) ==
                    CODE_004_USER_NOT_FOUND
            )
        }

        /** assign non-existing user to deleted role */
        run {
            assert(
                coreRBAC.assignUserToRole(userNonExisting, roleDeleted) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign incomplete user to non-existing role */
        run {
            assert(
                coreRBAC.assignUserToRole(userIncomplete, roleNonExisting) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign incomplete user to operational role */
        run {
            assert(
                coreRBAC.assignUserToRole(userIncomplete, roleOperational) ==
                    CODE_053_USER_IS_INCOMPLETE
            )
        }

        /** assign incomplete user to deleted role */
        run {
            assert(
                coreRBAC.assignUserToRole(userIncomplete, roleDeleted) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign operational user to non-existing role */
        run {
            assert(
                coreRBAC.assignUserToRole(userOperational, roleNonExisting) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign operational user to deleted role */
        run {
            assert(
                coreRBAC.assignUserToRole(userOperational, roleDeleted) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign deleted user to non-existing role */
        run {
            assert(
                coreRBAC.assignUserToRole(userDeleted, roleNonExisting) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign deleted user to operational role */
        run {
            assert(
                coreRBAC.assignUserToRole(userDeleted, roleOperational) ==
                    CODE_013_USER_WAS_DELETED
            )
        }

        /** assign deleted user to deleted role */
        run {
            assert(
                coreRBAC.assignUserToRole(userDeleted, roleDeleted) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign blank user to operational role */
        run {
            assert(
                coreRBAC.assignUserToRole("  ", roleOperational) ==
                    CODE_020_INVALID_PARAMETER
            )
        }

        /** assign operational user to blank role */
        run {
            assert(
                coreRBAC.assignUserToRole(userOperational, "  ") ==
                    CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `assign operational user to admin role fails`() {
        /** assign operational user to admin role */
        run {
            val alice = "alice"
            addAndInitUser(coreRBAC, alice)
            assert(coreRBAC.assignUserToRole(alice, ADMIN) == CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    @Test
    fun `assign operational user to operational role twice fails`() {
        val alice = "alice"
        val employee = "employee"
        addAndInitUser(coreRBAC, alice)
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)

        /** assign operational user to operational role twice */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == CODE_000_SUCCESS)
            assert(coreRBAC.assignUserToRole(alice, employee) == CODE_010_ROLETUPLE_ALREADY_EXISTS)
        }
    }

    @Test
    fun `revoke user from assigned role works`() {
        val alice = "alice"
        val employee = "employee"
        val excel = "excel"
        addAndInitUser(coreRBAC, alice)
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)
        assert(coreRBAC.assignUserToRole(alice, employee) == CODE_000_SUCCESS)
        assert(
            coreRBAC.addResource(
                excel,
                excel.inputStream(),
                EnforcementType.COMBINED
            ) == CODE_000_SUCCESS
        )
        assert(coreRBAC.assignPermissionToRole(employee, excel, PermissionType.READ) == CODE_000_SUCCESS)

        /** revoke user from assigned role */
        run {
            /** get the role and the role/permission tuples before the revoke operation */
            val beforeEmployeeRole = coreRBAC.getRoles().roles!!.first { it.name == employee }
            val beforeAdminRoles = coreRBAC.getAssignments(username = ADMIN)
            assert(beforeAdminRoles.code == CODE_000_SUCCESS)
            assert(beforeAdminRoles.roleTuples!!.size == 2)
            assert(beforeAdminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == employee }.size == 1)
            val beforeAdminRoleTuple =
                beforeAdminRoles.roleTuples!!.first { it.username == ADMIN && it.roleName == employee }
            assert(beforeAdminRoleTuple.roleVersionNumber == 1)
            val beforePermissionTuples = coreRBAC.getPermissions(resourceName = excel)
            assert(beforePermissionTuples.code == CODE_000_SUCCESS)
            assert(beforePermissionTuples.permissionTuples!!.size == 2)
            beforePermissionTuples.permissionTuples!!.filter { it.roleName == employee }.apply {
                assert(size == 1)
                assert(first().symKeyVersionNumber == 1)
            }

            /** revoke operation */
            assert(coreRBAC.revokeUserFromRole(alice, employee) == CODE_000_SUCCESS)
            val aliceRoles = coreRBAC.getAssignments(alice)
            assert(aliceRoles.code == CODE_000_SUCCESS)
            assert(aliceRoles.roleTuples!!.size == 0)

            /** get the role and the role/permission tuples after the revoke operation */
            val afterEmployeeRole = coreRBAC.getRoles().roles!!.first { it.name == employee }
            val afterAdminRoles = coreRBAC.getAssignments(ADMIN)
            assert(afterAdminRoles.code == CODE_000_SUCCESS)
            assert(afterAdminRoles.roleTuples!!.size == 2)
            assert(afterAdminRoles.roleTuples!!.filter { it.username == ADMIN && it.roleName == employee }.size == 1)
            val afterAdminRoleTuple =
                afterAdminRoles.roleTuples!!.first { it.username == ADMIN && it.roleName == employee }
            assert(afterAdminRoleTuple.roleVersionNumber == 2)
            val afterPermissionTuples = coreRBAC.getPermissions(resourceName = excel)
            assert(afterPermissionTuples.code == CODE_000_SUCCESS)
            assert(afterPermissionTuples.permissionTuples!!.size == 2)
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
            assert(
                !beforePermissionTuples.permissionTuples!!.first { it.roleName == employee }.encryptingSymKey!!.key.contentEquals(
                    afterPermissionTuples.permissionTuples!!.first { it.roleName == employee }.encryptingSymKey!!.key
                )
            )
        }
    }

    @Test
    fun `revoke blank, non-existing, incomplete or deleted user from blank, non-existing or deleted role fails`() {
        val userNonExisting = "userNonExisting"
        val userIncomplete = "userIncomplete"
        assert(coreRBAC.addUser(userIncomplete).code == CODE_000_SUCCESS)
        val userOperational = "userOperational"
        addAndInitUser(coreRBAC, userOperational)
        val userDeleted = "userDeleted"
        assert(coreRBAC.addUser(userDeleted).code == CODE_000_SUCCESS)
        assert(coreRBAC.deleteUser(userDeleted) == CODE_000_SUCCESS)

        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBAC.addRole(roleOperational) == CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBAC.addRole(roleDeleted) == CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole(roleDeleted) == CODE_000_SUCCESS)

        /** revoke non-existing user from non-existing role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userNonExisting, roleNonExisting) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke non-existing user from operational role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userNonExisting, roleOperational) ==
                    CODE_007_ROLETUPLE_NOT_FOUND
            )
        }

        /** revoke non-existing user from deleted role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userNonExisting, roleDeleted) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from non-existing role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userIncomplete, roleNonExisting) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from operational role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userIncomplete, roleOperational) ==
                    CODE_007_ROLETUPLE_NOT_FOUND
            )
        }

        /** revoke incomplete user from deleted role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userIncomplete, roleDeleted) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke operational user from non-existing role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userOperational, roleNonExisting) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke operational user from deleted role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userOperational, roleDeleted) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke deleted user from non-existing role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userDeleted, roleNonExisting) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke deleted user from operational role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userDeleted, roleOperational) ==
                    CODE_007_ROLETUPLE_NOT_FOUND
            )
        }

        /** revoke deleted user from deleted role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userDeleted, roleDeleted) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** revoke blank user from operational role */
        run {
            assert(
                coreRBAC.revokeUserFromRole("  ", roleOperational) ==
                    CODE_020_INVALID_PARAMETER
            )
        }

        /** revoke operational user from blank role */
        run {
            assert(
                coreRBAC.revokeUserFromRole(userOperational, "  ") ==
                    CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `revoke admin user from admin or assigned role fails`() {
        /** revoke user from admin role */
        run {
            val alice = "alice"
            addAndInitUser(coreRBAC, alice)
            assert(coreRBAC.revokeUserFromRole(alice, ADMIN) == CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** revoke admin user from admin role */
        run {
            assert(coreRBAC.revokeUserFromRole(ADMIN, ADMIN) == CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** revoke admin user from assigned role */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == CODE_000_SUCCESS)
            assert(coreRBAC.revokeUserFromRole(ADMIN, student) == CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    @Test
    fun `revoke user to assigned role twice fails`() {
        val alice = "alice"
        val employee = "employee"
        addAndInitUser(coreRBAC, alice)
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)
        assert(coreRBAC.assignUserToRole(alice, employee) == CODE_000_SUCCESS)

        /** revoke user to assigned role twice */
        run {
            assert(coreRBAC.revokeUserFromRole(alice, employee) == CODE_000_SUCCESS)
            assert(coreRBAC.revokeUserFromRole(alice, employee) == CODE_007_ROLETUPLE_NOT_FOUND)
        }
    }

    @Test
    fun `assign permission over operational resource to operational role works`() {
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addResource(exam, examContent, EnforcementType.COMBINED) == CODE_000_SUCCESS)

        /** assign read permission over operational resource to operational role */
        run {
            assert(coreRBAC.assignPermissionToRole(
                roleName = employee,
                resourceName = exam,
                permission = PermissionType.READ
            ) == CODE_000_SUCCESS)

            val employeeResources = coreRBAC.getPermissions(roleName = employee)
            assert(employeeResources.code == CODE_000_SUCCESS)
            assert(employeeResources.permissionTuples!!.size == 1)
            assert(employeeResources.permissionTuples!!.filter { it.roleName == employee && it.resourceName == exam }.size == 1)
            val employeePermissionTuple = employeeResources.permissionTuples!!.first { it.roleName == employee && it.resourceName == exam }
            assert(employeePermissionTuple.roleVersionNumber == 1)
            assert(employeePermissionTuple.symKeyVersionNumber == 1)
            assert(employeePermissionTuple.permission == PermissionType.READ)
        }

        /** adding write permission to operational role already having read permission */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)

            val employeeResources = coreRBAC.getPermissions(roleName = employee)
            assert(employeeResources.code == CODE_000_SUCCESS)
            val employeePermissionTuple = employeeResources.permissionTuples!!.first { it.roleName == employee && it.resourceName == exam }
            assert(employeePermissionTuple.permission == PermissionType.READWRITE)
        }

        /** assign read and write permission over operational resource to operational role */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(student, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)

            val studentResources = coreRBAC.getPermissions(roleName = student)
            assert(studentResources.code == CODE_000_SUCCESS)
            val studentPermissionTuple = studentResources.permissionTuples!!.first { it.roleName == student && it.resourceName == exam }
            assert(studentPermissionTuple.permission == PermissionType.READWRITE)
        }
    }

    @Test
    fun `assign read permission over operational resource to operational role with already read or read write permission fails`() {
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addResource(exam, examContent, EnforcementType.COMBINED) == CODE_000_SUCCESS)

        /** assign read permission over operational resource to operational role with already read permission */
        run {
            val employee = "employee"
            assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == CODE_016_INVALID_PERMISSION)
        }

        /** adding write permission to operational role already having read permission */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(student, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(student, exam, PermissionType.READ) == CODE_016_INVALID_PERMISSION)
        }
    }

    @Test
    fun `assign blank, non-existing or deleted role to blank, non-existing or deleted resource fails`() {
        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBAC.addRole(roleOperational) == CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBAC.addRole(roleDeleted) == CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole(roleDeleted) == CODE_000_SUCCESS)

        val resourceNonExisting = "resourceNonExisting"
        val resourceOperational = "resourceOperational"
        assert(
            coreRBAC.addResource(
                resourceOperational, resourceOperational.inputStream(), EnforcementType.COMBINED
            ) ==
                CODE_000_SUCCESS
        )
        val resourceDeleted = "resourceDeleted"
        assert(
            coreRBAC.addResource(
                resourceDeleted, resourceDeleted.inputStream(), EnforcementType.COMBINED
            ) ==
                CODE_000_SUCCESS
        )
        assert(coreRBAC.deleteResource(resourceDeleted) == CODE_000_SUCCESS)

        /** assign non-existing role to non-existing resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleNonExisting, resourceNonExisting, PermissionType.READ) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** assign non-existing role to operational resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleNonExisting, resourceOperational, PermissionType.READ) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign non-existing role to deleted resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleNonExisting, resourceDeleted, PermissionType.READ) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** assign operational role to non-existing resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleOperational, resourceNonExisting, PermissionType.READ) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** assign operational role to deleted resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleOperational, resourceDeleted, PermissionType.READ) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** assign deleted role to non-existing resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleDeleted, resourceNonExisting, PermissionType.READ) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** assign deleted role to operational resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleDeleted, resourceOperational, PermissionType.READ) ==
                    CODE_005_ROLE_NOT_FOUND
            )
        }

        /** assign deleted role to deleted resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleDeleted, resourceDeleted, PermissionType.READ) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** assign blank role to operational resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole("  ", resourceOperational, PermissionType.READ) ==
                    CODE_020_INVALID_PARAMETER
            )
        }

        /** assign operational role to blank resource */
        run {
            assert(
                coreRBAC.assignPermissionToRole(roleOperational, "  ", PermissionType.READ) ==
                    CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `assign operational role to operational resource twice fails`() {
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addResource(exam, examContent, EnforcementType.COMBINED) == CODE_000_SUCCESS)

        /** assign operational role to operational resource twice */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == CODE_016_INVALID_PERMISSION)
        }
    }

    @Test
    fun `assign read permission to operational role with already write permission over operational resource fails`() {
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addResource(exam, examContent, EnforcementType.COMBINED) == CODE_000_SUCCESS)

        /** assign operational role to operational resource twice */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == CODE_016_INVALID_PERMISSION)
        }
    }

    @Test
    fun `revoke assigned permission from role over resource works`() {
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addResource(exam, examContent, EnforcementType.COMBINED) == CODE_000_SUCCESS)
        assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)

        /** revoke write permission from role over resource */
        run {
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.WRITE) == CODE_000_SUCCESS)
            val employeeResources = coreRBAC.getPermissions(roleName = employee)
            assert(employeeResources.code == CODE_000_SUCCESS)
            assert(employeeResources.permissionTuples!!.size == 1)
            assert(employeeResources.permissionTuples!!.filter { it.roleName == employee && it.resourceName == exam }.size == 1)
            val employeePermissionTuple = employeeResources.permissionTuples!!.first { it.roleName == employee && it.resourceName == exam }
            assert(employeePermissionTuple.roleVersionNumber == 1)
            assert(employeePermissionTuple.symKeyVersionNumber == 1)
            assert(employeePermissionTuple.permission == PermissionType.READ)
        }

        /** revoke read permission from role over resource */
        run {
            /** get the resource and the permission tuple before the revoke operation */
            val beforeExamResource = coreRBAC.getResources().resources!!.first { it.name == exam }
            val beforeAdminResources = coreRBAC.getPermissions(roleName = ADMIN)
            assert(beforeAdminResources.code == CODE_000_SUCCESS)
            assert(beforeAdminResources.permissionTuples!!.size == 1)
            assert(beforeAdminResources.permissionTuples!!.filter { it.roleName == ADMIN && it.resourceName == exam }.size == 1)
            val beforeAdminPermissionTuple = beforeAdminResources.permissionTuples!!.first { it.roleName == ADMIN && it.resourceName == exam }
            assert(beforeAdminPermissionTuple.symKeyVersionNumber == 1)

            /** revoke operation */
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) ==
                    CODE_000_SUCCESS
            )
            val employeeResources = coreRBAC.getPermissions(roleName = employee)
            assert(employeeResources.code == CODE_000_SUCCESS)
            assert(employeeResources.permissionTuples!!.size == 0)

            val afterAdminResources = coreRBAC.getPermissions(roleName = ADMIN)
            /** get the resource and the permission tuple after the revoke operation */
            val afterExamResource = coreRBAC.getResources().resources!!.first { it.name == exam }
            assert(afterAdminResources.code == CODE_000_SUCCESS)
            assert(afterAdminResources.permissionTuples!!.size == 1)
            assert(afterAdminResources.permissionTuples!!.filter { it.roleName == ADMIN && it.resourceName == exam }.size == 1)
            val afterAdminPermissionTuple = afterAdminResources.permissionTuples!!.first { it.roleName == ADMIN && it.resourceName == exam && it.symKeyVersionNumber == 2 }
            assert(afterAdminPermissionTuple.symKeyVersionNumber == 2)

            /** check the difference between the resource and permission tuples before and after the revoke operation */
            assert(beforeExamResource.symEncKeyVersionNumber == 1)
            assert(beforeExamResource.symDecKeyVersionNumber == 1)
            assert(afterExamResource.symEncKeyVersionNumber == 2)
            assert(afterExamResource.symDecKeyVersionNumber == 1)
            assert(!beforeAdminPermissionTuple.encryptingSymKey!!.key.contentEquals(afterAdminPermissionTuple.encryptingSymKey!!.key))
        }
    }

    @Test
    fun `revoke read or write permission of blank, non-existing or deleted role from blank, non-existing or deleted resource fails`() {
        val roleNonExisting = "roleNonExisting"
        val roleOperational = "roleOperational"
        assert(coreRBAC.addRole(roleOperational) == CODE_000_SUCCESS)
        val roleDeleted = "roleDeleted"
        assert(coreRBAC.addRole(roleDeleted) == CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole(roleDeleted) == CODE_000_SUCCESS)

        val resourceNonExisting = "resourceNonExisting"
        val resourceOperational = "resourceOperational"
        assert(
            coreRBAC.addResource(
                resourceOperational, resourceOperational.inputStream(), EnforcementType.COMBINED
            ) ==
                CODE_000_SUCCESS
        )
        val resourceDeleted = "resourceDeleted"
        assert(
            coreRBAC.addResource(
                resourceDeleted, resourceDeleted.inputStream(), EnforcementType.COMBINED
            ) ==
                CODE_000_SUCCESS
        )
        assert(coreRBAC.deleteResource(resourceDeleted) == CODE_000_SUCCESS)

        /** revoke non-existing role from non-existing resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, resourceNonExisting, PermissionType.WRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, resourceNonExisting, PermissionType.READWRITE) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** revoke non-existing role from operational resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, resourceOperational, PermissionType.WRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, resourceOperational, PermissionType.READWRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke non-existing role from deleted resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, resourceDeleted, PermissionType.WRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleNonExisting, resourceDeleted, PermissionType.READWRITE) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** revoke operational role from non-existing resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, resourceNonExisting, PermissionType.WRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, resourceNonExisting, PermissionType.READWRITE) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** revoke operational role from deleted resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, resourceDeleted, PermissionType.WRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, resourceDeleted, PermissionType.READWRITE) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** revoke deleted role from non-existing resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, resourceNonExisting, PermissionType.WRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, resourceNonExisting, PermissionType.READWRITE) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** revoke deleted role from operational resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, resourceOperational, PermissionType.WRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, resourceOperational, PermissionType.READWRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke deleted role from deleted resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, resourceDeleted, PermissionType.WRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleDeleted, resourceDeleted, PermissionType.READWRITE) ==
                    CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** revoke blank role from operational resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole("   ", resourceOperational, PermissionType.WRITE) ==
                    CODE_020_INVALID_PARAMETER
            )
            assert(
                coreRBAC.revokePermissionFromRole("   ", resourceOperational, PermissionType.READWRITE) ==
                    CODE_020_INVALID_PARAMETER
            )
        }

        /** revoke operational role from blank resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, "   ", PermissionType.WRITE) ==
                    CODE_020_INVALID_PARAMETER
            )
            assert(
                coreRBAC.revokePermissionFromRole(roleOperational, "   ", PermissionType.READWRITE) ==
                    CODE_020_INVALID_PARAMETER
            )
        }
    }

    @Test
    fun `revoke admin role permission over assigned resource fails`() {
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addResource(
            resourceName = exam,
            resourceContent = examContent,
            enforcement = EnforcementType.COMBINED
        ) == CODE_000_SUCCESS)

        /** revoke admin role permission over assigned resource */
        run {
            assert(
                coreRBAC.revokePermissionFromRole(ADMIN, exam, PermissionType.WRITE) ==
                    CODE_022_ADMIN_CANNOT_BE_MODIFIED
            )
            assert(
                coreRBAC.revokePermissionFromRole(ADMIN, exam, PermissionType.READWRITE) ==
                    CODE_022_ADMIN_CANNOT_BE_MODIFIED
            )
        }
    }

    @Test
    fun `revoke assigned permission from role over resource twice fails`() {
        val exam = "exam"
        val examContent = "exam content".inputStream()
        assert(coreRBAC.addResource(exam, examContent, EnforcementType.COMBINED) == CODE_000_SUCCESS)

        /** revoke read-write assigned permission from role over resource twice */
        run {
            val employee = "employee"
            assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) ==
                    CODE_000_SUCCESS
            )
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) ==
                    CODE_000_SUCCESS
            )
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) ==
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
            )
        }

        /** revoke write assigned permission from role over resource twice */
        run {
            val student = "student"
            assert(coreRBAC.addRole(student) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(student, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)
            assert(
                coreRBAC.revokePermissionFromRole(student, exam, PermissionType.WRITE) ==
                    CODE_000_SUCCESS
            )
            assert(
                coreRBAC.revokePermissionFromRole(student, exam, PermissionType.WRITE) ==
                    CODE_016_INVALID_PERMISSION
            )
        }
    }

    @Test
    open fun `revoke assigned permission and reassign lower permission works`() {
        val alice = "alice"
        val aliceCoreRBAC = addAndInitUser(coreRBAC, alice)

        val employee = "employee"
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addResource(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                CODE_000_SUCCESS
        )

        /** revoke assigned permission and reassign lower permission */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.WRITE) == CODE_000_SUCCESS)
            val downloadedResourceResult = aliceCoreRBAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == examContent)
        }
    }

    @Test
    open fun `admin or user read resource having permission over resource works`() {
        val alice = "alice"
        val aliceCoreRBAC = addAndInitUser(coreRBAC, alice)

        val employee = "employee"
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addResource(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                CODE_000_SUCCESS
        )

        /** admin read resource having permission over resource */
        run {
            val downloadedResourceResult = coreRBAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == examContent)
        }

        /** user read resource having permission over resource */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == CODE_000_SUCCESS)
            val downloadedResourceResult = aliceCoreRBAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == examContent)
        }
    }

    @Test
    open fun `not assigned or revoked user read resource fails`() {
        val alice = "alice"
        val aliceCoreRBAC = addAndInitUser(coreRBAC, alice)

        val employee = "employee"
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addResource(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                CODE_000_SUCCESS
        )

        /** not assigned user read resource */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == CODE_000_SUCCESS)
            assert(aliceCoreRBAC.readResource(exam).code == CODE_006_RESOURCE_NOT_FOUND)
        }

        /** revoked user read resource */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READ) == CODE_000_SUCCESS)
            val downloadedResourceResult = aliceCoreRBAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == examContent)

            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)
            assert(aliceCoreRBAC.readResource(exam).code == CODE_006_RESOURCE_NOT_FOUND)
        }
    }

    @Test
    open fun `admin or user write resource having permission over resource works`() {

        val alice = "alice"
        val aliceCoreRBAC = addAndInitUser(coreRBAC, alice)
        val employee = "employee"
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)
        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addResource(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                CODE_000_SUCCESS
        )
        val readResourceResult = coreRBAC.readResource(exam)
        assert(String(readResourceResult.stream!!.readAllBytes()) == examContent)

        /** admin write resource having permission over resource */
        run {
            val updatedExamContent = "updated exam content by admin"
            val updateResourceCode = coreRBAC.writeResource(exam, updatedExamContent.inputStream())
            assert(updateResourceCode == CODE_000_SUCCESS)
            val downloadedResourceResult = coreRBAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == updatedExamContent)
        }

        /** user write resource having permission over resource */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == CODE_000_SUCCESS)
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)
            val updatedExamContent = "updated exam content by user"
            val updateResourceCode = aliceCoreRBAC.writeResource(exam, updatedExamContent.inputStream())
            assert(updateResourceCode == CODE_000_SUCCESS)
            val downloadedResourceResult = aliceCoreRBAC.readResource(exam)
            assert(downloadedResourceResult.code == CODE_000_SUCCESS)
            assert(String(downloadedResourceResult.stream!!.readAllBytes()) == updatedExamContent)
        }
    }

    @Test
    open fun `not assigned or revoked user write resource fails`() {
        val alice = "alice"
        val aliceCoreRBAC = addAndInitUser(coreRBAC, alice)

        val employee = "employee"
        assert(coreRBAC.addRole(employee) == CODE_000_SUCCESS)

        val exam = "exam"
        val examContent = "exam content"
        assert(
            coreRBAC.addResource(exam, examContent.inputStream(), EnforcementType.COMBINED) ==
                CODE_000_SUCCESS
        )

        /** not assigned user write resource */
        run {
            assert(coreRBAC.assignUserToRole(alice, employee) == CODE_000_SUCCESS)
            assert(aliceCoreRBAC.writeResource(exam, exam.inputStream()) == CODE_006_RESOURCE_NOT_FOUND)
        }

        /** revoked user write resource */
        run {
            assert(coreRBAC.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == CODE_000_SUCCESS)
            assert(aliceCoreRBAC.writeResource(exam, exam.inputStream()) == CODE_000_SUCCESS)
            assert(coreRBAC.revokePermissionFromRole(employee, exam, PermissionType.WRITE) == CODE_000_SUCCESS)
            assert(aliceCoreRBAC.writeResource(exam, exam.inputStream()) == CODE_006_RESOURCE_NOT_FOUND)
        }
    }



    @Test
    fun `get role of operational or deleted role works`() {
        assert(coreRBAC.addRole("operational") == CODE_000_SUCCESS)
        assert(coreRBAC.addRole("deleted") == CODE_000_SUCCESS)
        assert(coreRBAC.deleteRole("deleted") == CODE_000_SUCCESS)

        /** get role of operational role */
        run {
            assert(coreRBAC.getRoles().roles!!.filter { it.name == "operational" }.size == 1)
        }

        /** get role of deleted role */
        run {
            assert(coreRBAC.getRoles().roles!!.first { it.status == UnitElementStatus.DELETED }.name == "deleted")
        }
    }

    @Test
    fun `get role of non-existing fails`() {

        /** get role of non-existing role */
        run {
            assert(coreRBAC.getRoles().roles!!.none { it.name == "not-existing" })
        }
    }

    @Test
    fun `get resource of operational or deleted resource works`() {
        assert(
            coreRBAC.addResource(
                "operational", "operational".inputStream(), EnforcementType.COMBINED
            ) == CODE_000_SUCCESS
        )
        assert(
            coreRBAC.addResource(
                "deleted", "deleted".inputStream(), EnforcementType.COMBINED
            ) == CODE_000_SUCCESS
        )
        assert(coreRBAC.deleteResource("deleted") == CODE_000_SUCCESS)

        /** get resource of operational resource */
        run {
            assert(coreRBAC.getResources().resources!!.first { it.status == UnitElementStatus.OPERATIONAL }.name == "operational")
        }

        /** get resource of deleted resource */
        run {
            assert(coreRBAC.getResources().resources!!.first { it.status == UnitElementStatus.DELETED }.name == "deleted")
        }
    }

    @Test
    fun `get resource of non-existing or deleted resource fails`() {

        /** get resource of non-existing resource */
        run {
            assert(coreRBAC.getResources().resources!!.none { it.name == "not-existing" })
        }
    }

    @Test
    fun `get existing assignment specifying any combination of username and role name works`() {
        addAndInitUser(coreRBAC, "alice")
        assert(coreRBAC.addRole("student") == CODE_000_SUCCESS)
        assert(coreRBAC.assignUserToRole("alice", "student") == CODE_000_SUCCESS)

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
            addAndInitUser(coreRBAC, "alice")
            assert(coreRBAC.addRole("student") == CODE_000_SUCCESS)
            assert(coreRBAC.assignUserToRole("alice", "student") == CODE_000_SUCCESS)
            assert(coreRBAC.revokeUserFromRole("alice", "student") == CODE_000_SUCCESS)

            assert(coreRBAC.getAssignments(username = "alice").roleTuples!!.none { it.roleName == "student" })
            assert(coreRBAC.getAssignments(roleName = "student").roleTuples!!.none { it.username == "alice" })
            assert(coreRBAC.getAssignments(username = "alice", roleName = "student").roleTuples!!.isEmpty())
        }
    }

    @Test
    fun `get existing permission specifying any combination of username, role name and resource name works`() {
        addAndInitUser(coreRBAC, "alice")
        assert(coreRBAC.addRole("student") == CODE_000_SUCCESS)
        assert(
            coreRBAC.addResource(
                "exam", "exam".inputStream(), EnforcementType.COMBINED
            ) == CODE_000_SUCCESS
        )
        assert(coreRBAC.assignUserToRole("alice", "student") == CODE_000_SUCCESS)
        assert(
            coreRBAC.assignPermissionToRole("student", "exam", PermissionType.READWRITE)
                == CODE_000_SUCCESS
        )

        /** get existing permission specifying the username */
        run {
            assert(
                coreRBAC.getPermissions(username = "alice").permissionTuples!!.filter {
                    it.roleName == "student" && it.resourceName == "exam"
                }.size == 1
            )
        }

        /** get existing permission specifying the role name */
        run {
            assert(
                coreRBAC.getPermissions(roleName = "student").permissionTuples!!.filter {
                    it.resourceName == "exam"
                }.size == 1
            )
        }

        /** get existing permission specifying the resource name */
        run {
            assert(
                coreRBAC.getPermissions(resourceName = "exam").permissionTuples!!.filter {
                    it.roleName == "student"
                }.size == 1
            )
        }

        /** get existing assignment specifying the username, the role and the resource name */
        run {
            assert(
                coreRBAC.getPermissions(username = "alice", roleName = "student", resourceName = "exam").permissionTuples!!.filter {
                    it.roleName == "student"
                }.size == 1
            )
        }
    }

    @Test
    fun `get non-existing or deleted permission fails`() {

        /** get non-existing permission */
        run {
            assert(coreRBAC.getPermissions(username = "alice").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(roleName = "student").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(resourceName = "exam").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(username = "alice", roleName = "student", resourceName = "exam").permissionTuples!!.isEmpty())
        }

        /** get deleted permission */
        run {
            addAndInitUser(coreRBAC, "alice")
            assert(coreRBAC.addRole("student") == CODE_000_SUCCESS)
            assert(
                coreRBAC.addResource(
                    "exam", "exam".inputStream(), EnforcementType.COMBINED
                ) == CODE_000_SUCCESS)
            assert(coreRBAC.assignUserToRole("alice", "student") == CODE_000_SUCCESS)
            assert(
                coreRBAC.assignPermissionToRole("student", "exam", PermissionType.READWRITE)
                    == CODE_000_SUCCESS
            )
            assert(coreRBAC.revokePermissionFromRole("student", "exam", PermissionType.READWRITE)
                    == CODE_000_SUCCESS
            )

            assert(coreRBAC.getPermissions(username = "alice").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(roleName = "student").permissionTuples!!.isEmpty())
            assert(coreRBAC.getPermissions(resourceName = "exam").permissionTuples!!.none { it.roleName == "student" })
            assert(coreRBAC.getPermissions(
                username = "alice",
                roleName = "student",
                resourceName = "exam"
            ).permissionTuples!!.isEmpty())
        }
    }



    override fun addAndInitUser(core: Core, username: String): CoreRBAC {
        return super.addAndInitUser(core, username) as CoreRBAC
    }
}
