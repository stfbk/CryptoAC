package eu.fbk.st.cryptoac.mm

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Parameters.aliceUser
import eu.fbk.st.cryptoac.Parameters.bobUser
import eu.fbk.st.cryptoac.Parameters.carlUser
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.model.RBACUnitElementTypeWithKeys
import eu.fbk.st.cryptoac.model.RBACUnitElementTypeWithStatus
import eu.fbk.st.cryptoac.model.RBACUnitElementTypeWithVN
import org.junit.jupiter.api.*

internal abstract class MMServiceRBACTest : MMServiceTest() {

    abstract override val mm: MMServiceRBAC

    @Test
    open fun `add role once works`() {
        /** add role once */
        myRun {
            addRole("employee")
        }
    }

    @Test
    open fun `add role twice or with admin name or same name as previously deleted role fails`() {
        val studentRole = addRole("student")

        /** add role twice */
        myRun {
            assert(mm.addRole(studentRole) == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with admin name */
        myRun {
            assert(mm.addRole(Parameters.adminRole) == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with same name as previously deleted role */
        myRun {
            assert(mm.deleteRoleTuples(roleName = studentRole.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.deleteRole(studentRole.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.addRole(studentRole) == OutcomeCode.CODE_014_ROLE_WAS_DELETED)
        }
    }

    @Test
    open fun `add resource once works`() {
        /** add resource once */
        myRun {
            addResource("exam")
        }
    }

    @Test
    open fun `add resource twice or with same name as previously deleted resource fails`() {
        val exam = addResource("exam")

        /** add resource twice */
        myRun {
            assert(mm.addResource(exam) == OutcomeCode.CODE_003_RESOURCE_ALREADY_EXISTS)
        }

        /** add resource with same name as previously deleted resource */
        myRun {
            assert(mm.deleteResource(exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.addResource(exam) == OutcomeCode.CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    open fun `add no, one or multiple role tuples work`() {
        addAndInitUser(aliceUser)
        addAndInitUser(bobUser)
        addAndInitUser(carlUser)
        val roleEmployee = addRole("employee")

        /** add no role tuples */
        myRun {
            assert(mm.addRoleTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one role tuple */
        myRun {
            addRoleTuple(aliceUser.name, roleEmployee)
        }

        /** add multiple role tuples */
        myRun {
            val bobRoleTuple = TestUtilities.createRoleTuple(bobUser.name, roleEmployee)
            val carlRoleTuple = TestUtilities.createRoleTuple(carlUser.name, roleEmployee)
            assert(
                mm.addRoleTuples(hashSetOf(
                    bobRoleTuple,
                    carlRoleTuple
                )) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun `add role tuple twice fails`() {
        addAndInitUser(aliceUser)
        val roleEmployee = addRole("employee")

        /** add role tuple twice */
        myRun {
            val aliceRoleTuple = addRoleTuple(aliceUser.name, roleEmployee)
            assert(
                mm.addRoleTuples(hashSetOf(aliceRoleTuple)) ==
                    OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS
            )
        }
    }

    @Test
    open fun `add role tuple with non-existing or deleted user or role fails`() {
        addAndInitUser(aliceUser)
        val userDeleted = bobUser
        addAndInitUser(userDeleted)
        assert(mm.deleteUser(userDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = addRole("role")
        assert(mm.deleteRoleTuples(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        val roleEmployee = addRole("employee")
        val roleNonExisting = TestUtilities.createRole("non-existing")

        /** add role tuple with non-existing user */
        myRun {
            val nonExistingUserRoleTuple = TestUtilities.createRoleTuple("non-existing", roleEmployee)
            assert(
                mm.addRoleTuples(hashSetOf(nonExistingUserRoleTuple)) ==
                    OutcomeCode.CODE_004_USER_NOT_FOUND
            )
        }

        /** add role tuple with deleted user */
        myRun {
            val deleteUserRoleTuple = TestUtilities.createRoleTuple(userDeleted.name, roleEmployee)
            assert(
                mm.addRoleTuples(hashSetOf(deleteUserRoleTuple)) ==
                    OutcomeCode.CODE_013_USER_WAS_DELETED
            )
        }

        /** add role tuple with non-existing role */
        myRun {
            val nonExistingRoleRoleTuple = TestUtilities.createRoleTuple(aliceUser.name, roleNonExisting)
            assert(
                mm.addRoleTuples(hashSetOf(nonExistingRoleRoleTuple)) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** add role tuple with deleted role */
        myRun {
            val userDeletedRoleTuple = TestUtilities.createRoleTuple(aliceUser.name, roleDeleted)
            assert(
                mm.addRoleTuples(hashSetOf(userDeletedRoleTuple)) ==
                    OutcomeCode.CODE_014_ROLE_WAS_DELETED
            )
        }
    }

    @Test
    open fun `add no, one or multiple permission tuples work`() {
        val roleEmployee = addRole("employee")
        val roleStudent = addRole("student")
        val roleDirector = addRole("director")

        val resourceExam = addResource("exam")

        /** add no permission tuples */
        myRun {
            assert(mm.addPermissionTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one permission tuple */
        myRun {
            addPermissionTuple(roleEmployee, resourceExam)
        }

        /** add multiple permission tuples */
        myRun {
            val studentPermissionTuple = TestUtilities.createPermissionTuple(roleStudent, resourceExam)
            val directoryPermissionTuple = TestUtilities.createPermissionTuple(roleDirector, resourceExam)
            assert(
                mm.addPermissionTuples(hashSetOf(
                    studentPermissionTuple,
                    directoryPermissionTuple
                )) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun `add permission tuple twice fails`() {
        val roleEmployee = addRole("employee")
        val resourceExam = addResource("exam")

        /** add permission tuple twice */
        myRun {
            val employeePermissionTuple = addPermissionTuple(roleEmployee, resourceExam)
            assert(
                mm.addPermissionTuples(hashSetOf(employeePermissionTuple)) ==
                    OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }
    }

    @Test
    open fun `add permission tuple with non-existing or deleted role or resource fails`() {
        val roleEmployee = addRole("employee")
        val roleDeleted = addRole("role-deleted")
        assert(mm.deleteRoleTuples(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        val roleNonExisting = TestUtilities.createRole("non-existing-role")

        val resourceExam = addResource("exam")
        val resourceNonExisting = TestUtilities.createResource(
            resourceName = "non-existing-resource",
            enforcement = EnforcementType.COMBINED
        )
        val resourceDeleted = addResource("resource-deleted")
        assert(mm.deleteResource(resourceDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** add permission tuple with non-existing role */
        myRun {
            val nonExistingRolePermissionTuple = TestUtilities.createPermissionTuple(roleNonExisting, resourceExam)
            assert(
                mm.addPermissionTuples(hashSetOf(nonExistingRolePermissionTuple)) ==
                    OutcomeCode.CODE_005_ROLE_NOT_FOUND
            )
        }

        /** add permission tuple with deleted role */
        myRun {
            val deletedRolePermissionTuple = TestUtilities.createPermissionTuple(roleDeleted, resourceExam)
            assert(
                mm.addPermissionTuples(hashSetOf(deletedRolePermissionTuple)) ==
                    OutcomeCode.CODE_014_ROLE_WAS_DELETED
            )
        }

        /** add permission tuple with non-existing resource */
        myRun {
            val nonExistingResourcePermissionTuple =
                TestUtilities.createPermissionTuple(roleEmployee, resourceNonExisting)
            assert(
                mm.addPermissionTuples(hashSetOf(nonExistingResourcePermissionTuple)) ==
                    OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** add permission tuple with deleted resource */
        myRun {
            val deletedResourcePermissionTuple = TestUtilities.createPermissionTuple(roleEmployee, resourceDeleted)
            assert(
                mm.addPermissionTuples(hashSetOf(deletedResourcePermissionTuple)) ==
                    OutcomeCode.CODE_015_RESOURCE_WAS_DELETED
            )
        }
    }

    @Test
    open fun `get not-existing, operational and deleted role by name works`() {
        val operational = addRole("operational")
        val deleted = addRole("deleted")
        assert(mm.deleteRoleTuples(deleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.deleteRole(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing role by name */
        myRun {
            assert(mm.getRoles(roleName = "non-existing").isEmpty())
        }

        /** get operational role by name */
        myRun {
            val operationalRoleByName = mm.getRoles(roleName = operational.name)
            assert(operationalRoleByName.size == 1)
            assert(operationalRoleByName.firstOrNull()!!.token == operational.token)
        }

        /** get deleted role by name */
        myRun {
            val deletedRoleByName = mm.getRoles(roleName = deleted.name, status = UnitElementStatus.DELETED)
            assert(deletedRoleByName.size == 1)
            assert(deletedRoleByName.firstOrNull()!!.name == deleted.name)
        }
    }

    @Test
    open fun `get all roles works`() {
        val student = addRole("student")
        val employee = addRole("employee")
        val director = addRole("director")

        /** get all roles */
        myRun {
            val allRoles = mm.getRoles()
            /** there is also the admin */
            assert(allRoles.size == 4)
            assert(allRoles.filter { it.name == student.name }.size == 1)
            assert(allRoles.filter { it.name == employee.name }.size == 1)
            assert(allRoles.filter { it.name == director.name }.size == 1)
            assert(allRoles.filter { it.name == ADMIN }.size == 1)
        }
    }

    @Test
    open fun `get not-existing, operational and deleted resource by name works`() {
        val operational = addResource("operational")
        val deleted = addResource("deleted")
        assertUnLockAndLock(mm)
        assert(mm.deleteResource(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing resource by name */
        myRun {
            assert(mm.getResources(resourceName = "non-existing").isEmpty())
        }

        /** get operational resource by name */
        myRun {
            val operationalResourceByName = mm.getResources(resourceName = operational.name)
            assert(operationalResourceByName.size == 1)
            assert(operationalResourceByName.firstOrNull()!!.token == operational.token)
        }

        /** get deleted resource by name */
        myRun {
            val deletedResourceByName = mm.getResources(resourceName = deleted.name, status = UnitElementStatus.DELETED)
            assert(deletedResourceByName.size == 1)
            assert(deletedResourceByName.firstOrNull()!!.token == deleted.token)
        }
    }

    @Test
    open fun `get all resources works`() {
        val exam = addResource("exam")
        val document = addResource("document")
        val excel = addResource("excel")

        /** get all resources */
        myRun {
            val allResources = mm.getResources()
            assert(allResources.size == 3)
            assert(allResources.filter { it.name == exam.name }.size == 1)
            assert(allResources.filter { it.name == document.name }.size == 1)
            assert(allResources.filter { it.name == excel.name }.size == 1)
        }
    }

    @Test
    open fun `get role tuples of the admin or of users by username or role name works`() {
        addAndInitUser(aliceUser)
        val student = addRole("student")
        addRoleTuple("alice", student)

        /** get role tuple of the admin by username or role name */
        myRun {
            val adminRoleTuplesByUsername = mm.getRoleTuples(username = ADMIN)
            assert(adminRoleTuplesByUsername.size == 2)
            assert(adminRoleTuplesByUsername.filter { it.roleName == ADMIN }.size == 1)
            assert(adminRoleTuplesByUsername.filter { it.roleName == student.name }.size == 1)

            val adminRoleTuplesByRoleName = mm.getRoleTuples(roleName = ADMIN)
            assert(adminRoleTuplesByRoleName.size == 1)
            assert(adminRoleTuplesByRoleName.firstOrNull()!!.username == ADMIN)
        }

        /** get role tuples of users by username or role name */
        myRun {
            val aliceRoleTuplesByUsername = mm.getRoleTuples(username = aliceUser.name)
            assert(aliceRoleTuplesByUsername.size == 1)
            assert(aliceRoleTuplesByUsername.filter { it.roleName == student.name }.size == 1)

            val studentRoleTuplesByRoleName = mm.getRoleTuples(roleName = student.name)
            assert(studentRoleTuplesByRoleName.size == 2)
            assert(studentRoleTuplesByRoleName.filter { it.username == ADMIN }.size == 1)
            assert(studentRoleTuplesByRoleName.filter { it.username == aliceUser.name }.size == 1)
        }
    }

    @Test
    open fun `get permission tuples by role or resource name or excluding role name works`() {
        val roleEmployee = addRole("employee")
        val roleStudent = addRole("student")

        val resourceExam = addResource("exam")

        addPermissionTuple(roleEmployee, resourceExam)
        addPermissionTuple(roleStudent, resourceExam)

        /** get permission tuples by role or resource name */
        myRun {
            val examPermissionTuplesByName = mm.getPermissionTuples(resourceName = resourceExam.name)
            assert(examPermissionTuplesByName.size == 2)
            assert(examPermissionTuplesByName.filter { it.roleName == roleEmployee.name }.size == 1)
            assert(examPermissionTuplesByName.filter { it.roleName == roleStudent.name }.size == 1)
        }

        /** get permission tuples excluding role name */
        myRun {
            val examPermissionTuplesByName = mm.getPermissionTuples(
                resourceName = resourceExam.name, roleNameToExclude = roleStudent.name
            )
            assert(examPermissionTuplesByName.size == 1)
            assert(examPermissionTuplesByName.filter { it.roleName == roleEmployee.name }.size == 1)
        }
    }

    @Test
    open fun `get public key of non-existing, incomplete, operational and deleted users and roles by name or token works`() {
        val nonExistingUser = aliceUser
        val incompleteUser = bobUser
        val operationalUser = carlUser
        val deleteUser = Parameters.deniseUser
        assert(mm.addUser(incompleteUser).code == OutcomeCode.CODE_000_SUCCESS)
        addAndInitUser(operationalUser)
        addAndInitUser(deleteUser)
        assert(mm.deleteUser(deleteUser.name) == OutcomeCode.CODE_000_SUCCESS)

        val nonExistingRole = Role("nonExistingRole")
        val operationalRole = addRole("operationalRole")
        val deletedRole = addRole("deletedRole")
        assert(mm.deleteRoleTuples(roleName = deletedRole.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.deleteRole(deletedRole.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get public key of non-existing users by name or token */
        myRun {
            assert(
                mm.getPublicKey(
                    name = nonExistingUser.name, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getPublicKey(
                    token = nonExistingUser.token, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getPublicKey(
                    name = nonExistingUser.name, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.SIG
                ) == null
            )
            assert(
                mm.getPublicKey(
                    token = nonExistingUser.token, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.SIG
                ) == null
            )
        }

        /** get public key of incomplete users by name or token */
        myRun {
            assert(
                mm.getPublicKey(
                    name = incompleteUser.name, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getPublicKey(
                    token = incompleteUser.token, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getPublicKey(
                    name = incompleteUser.name, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.SIG
                ) == null
            )
            assert(
                mm.getPublicKey(
                    token = incompleteUser.token, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.SIG
                ) == null
            )
        }

        /** get public key of operational users by name or token */
        myRun {
            val asymEncKeysBytesByName = mm.getPublicKey(
                name = operationalUser.name, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(operationalUser.asymEncKeys!!.public.decodeBase64()))

            val asymEncKeysBytesByToken = mm.getPublicKey(
                token = operationalUser.token, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByToken != null)
            assert(asymEncKeysBytesByToken.contentEquals(operationalUser.asymEncKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByName = mm.getPublicKey(
                name = operationalUser.name, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(operationalUser.asymSigKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByToken = mm.getPublicKey(
                token = operationalUser.token, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByToken != null)
            assert(asymSigKeysBytesByToken.contentEquals(operationalUser.asymSigKeys!!.public.decodeBase64()))
        }

        /** get public key of deleted users by name or token */
        myRun {
            mm.getPublicKey(
                name = deleteUser.name, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.ENC
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deleteUser.asymEncKeys!!.public.decodeBase64()))
            }
            mm.getPublicKey(
                token = deleteUser.token, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.ENC
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deleteUser.asymEncKeys!!.public.decodeBase64()))
            }
            mm.getPublicKey(
                name = deleteUser.name, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.SIG
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deleteUser.asymSigKeys!!.public.decodeBase64()))
            }
            mm.getPublicKey(
                token = deleteUser.token, elementType = RBACUnitElementTypeWithKeys.USER, asymKeyType = AsymKeysType.SIG
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deleteUser.asymSigKeys!!.public.decodeBase64()))
            }
        }

        /** get public key of non-existing roles by name or token */
        myRun {
            assert(
                mm.getPublicKey(
                    name = nonExistingRole.name, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getPublicKey(
                    token = nonExistingRole.token, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null
            )
            assert(
                mm.getPublicKey(
                    name = nonExistingRole.name, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null
            )
            assert(
                mm.getPublicKey(
                    token = nonExistingRole.token, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null
            )
        }

        /** get public key of operational roles by name or token */
        myRun {
            val asymEncKeysBytesByName = mm.getPublicKey(
                name = operationalRole.name, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(operationalRole.asymEncKeys!!.public.decodeBase64()))

            val asymEncKeysBytesByToken = mm.getPublicKey(
                token = operationalRole.token, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByToken != null)
            assert(asymEncKeysBytesByToken.contentEquals(operationalRole.asymEncKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByName = mm.getPublicKey(
                name = operationalRole.name, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(operationalRole.asymSigKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByToken = mm.getPublicKey(
                token = operationalRole.token, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByToken != null)
            assert(asymSigKeysBytesByToken.contentEquals(operationalRole.asymSigKeys!!.public.decodeBase64()))
        }

        /** get public key of deleted roles by name or token */
        myRun {
            mm.getPublicKey(
                name = deletedRole.name, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.ENC
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deletedRole.asymEncKeys!!.public.decodeBase64()))
            }
            mm.getPublicKey(
                token = deletedRole.token, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.ENC
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deletedRole.asymEncKeys!!.public.decodeBase64()))
            }
            mm.getPublicKey(
                name = deletedRole.name, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.SIG
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deletedRole.asymSigKeys!!.public.decodeBase64()))
            }
            mm.getPublicKey(
                token = deletedRole.token, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.SIG
            ).apply {
                assert(this != null)
                assert(this.contentEquals(deletedRole.asymSigKeys!!.public.decodeBase64()))
            }
        }
    }

    @Test
    open fun `get version number of non-existing, operational and deleted roles and resources by name or token works`() {
        val roleNonExisting = Role("roleNonExisting")
        val roleOperational = addRole("roleOperational", 2)
        val roleDeleted = addRole("roleDeleted")
        assert(mm.deleteRoleTuples(roleName = roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        val resourceNonExisting = Resource(
            name = "resourceNonExisting",
            enforcement = EnforcementType.COMBINED
        )
        val resourceOperational = addResource("resourceOperational", 3)
        val resourceDeleted = addResource("resourceDeleted")
        assert(mm.deleteResource(resourceDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get version number of non-existing roles by name or token */
        myRun {
            assert(
                mm.getVersionNumber(
                    name = roleNonExisting.name, elementType = RBACUnitElementTypeWithVN.ROLE,
                ) == null
            )
            assert(
                mm.getVersionNumber(
                    token = roleNonExisting.token, elementType = RBACUnitElementTypeWithVN.ROLE,
                ) == null
            )
        }

        /** get version number of operational roles by name or token */
        myRun {
            val versionNumbersByName = mm.getVersionNumber(
                name = roleOperational.name, elementType = RBACUnitElementTypeWithVN.ROLE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == roleOperational.versionNumber)

            val versionNumbersByToken = mm.getVersionNumber(
                token = roleOperational.token, elementType = RBACUnitElementTypeWithVN.ROLE
            )
            assert(versionNumbersByToken != null)
            assert(versionNumbersByToken == roleOperational.versionNumber)
        }

        /** get version number of deleted roles by name or token */
        myRun {
            assert(
                mm.getVersionNumber(
                    name = roleDeleted.name, elementType = RBACUnitElementTypeWithVN.ROLE,
                ) == null
            )
            assert(
                mm.getVersionNumber(
                    token = roleDeleted.token, elementType = RBACUnitElementTypeWithVN.ROLE,
                ) == null
            )
        }

        /** get version number of non-existing resources by name or token */
        myRun {
            assert(
                mm.getVersionNumber(
                    name = resourceNonExisting.name, elementType = RBACUnitElementTypeWithVN.RESOURCE,
                ) == null
            )
            assert(
                mm.getVersionNumber(
                    token = resourceNonExisting.token, elementType = RBACUnitElementTypeWithVN.RESOURCE,
                ) == null
            )
        }

        /** get version number of operational resources by name or token */
        myRun {
            val versionNumbersByName = mm.getVersionNumber(
                name = resourceOperational.name, elementType = RBACUnitElementTypeWithVN.RESOURCE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == resourceOperational.symEncKeyVersionNumber)

            val versionNumbersByToken = mm.getVersionNumber(
                token = resourceOperational.token, elementType = RBACUnitElementTypeWithVN.RESOURCE
            )
            assert(versionNumbersByToken != null)
            assert(versionNumbersByToken == resourceOperational.symEncKeyVersionNumber)
        }

        /** get version number of deleted resources by name or token */
        myRun {
            assert(
                mm.getVersionNumber(
                    name = resourceDeleted.name, elementType = RBACUnitElementTypeWithVN.RESOURCE,
                ) == null
            )
            assert(
                mm.getVersionNumber(
                    token = resourceDeleted.token, elementType = RBACUnitElementTypeWithVN.RESOURCE,
                ) == null
            )
        }
    }

    @Test
    open fun `get token of non-existing, operational and deleted roles and resources by name works`() {
        val roleNonExisting = Role("roleNonExisting")
        val roleOperational = addRole("roleOperational", 2)
        val roleDeleted = addRole("roleDeleted")
        assert(mm.deleteRoleTuples(roleName = roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        val resourceNonExisting = Resource(
            name = "resourceNonExisting",
            enforcement = EnforcementType.COMBINED
        )
        val resourceOperational = addResource("resourceOperational", 3)
        val resourceDeleted = addResource("resourceDeleted")
        assert(mm.deleteResource(resourceDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get token of non-existing roles by name */
        myRun {
            assert(
                mm.getToken(
                    name = roleNonExisting.name, type = RBACUnitElementTypeWithStatus.ROLE,
                ) == null
            )
        }

        /** get token of operational roles by name */
        myRun {
            val operationalRoleToken = mm.getToken(
                name = roleOperational.name, type = RBACUnitElementTypeWithStatus.ROLE
            )
            assert(operationalRoleToken != null)
            assert(operationalRoleToken == roleOperational.token)
        }

        /** get token of deleted roles by name */
        myRun {
            val deletedRoleToken = mm.getToken(
                name = roleDeleted.name, type = RBACUnitElementTypeWithStatus.ROLE,
            )
            assert(deletedRoleToken != null)
            assert(deletedRoleToken == roleDeleted.token)
        }

        /** get token of non-existing resources by name */
        myRun {
            assert(
                mm.getToken(
                    name = resourceNonExisting.name, type = RBACUnitElementTypeWithStatus.RESOURCE,
                ) == null
            )
        }

        /** get token of operational resources by name */
        myRun {
            val operationalResourceToken = mm.getToken(
                name = resourceOperational.name, type = RBACUnitElementTypeWithStatus.RESOURCE
            )
            assert(operationalResourceToken != null)
            assert(operationalResourceToken == resourceOperational.token)
        }

        /** get token of deleted resources by name */
        myRun {
            val deletedResourceToken = mm.getToken(
                name = resourceDeleted.name, type = RBACUnitElementTypeWithStatus.RESOURCE
            )
            assert(deletedResourceToken != null)
            assert(deletedResourceToken == resourceDeleted.token)
        }
    }

    @Test
    open fun `get element status with existing, deleted and non-existing elements by name or token works`() {

        /** get status of admin user by name or token */
        myRun {
            val statusByName = mm.getStatus(name = ADMIN, type = RBACUnitElementTypeWithStatus.USER)
            assert(statusByName == UnitElementStatus.OPERATIONAL)
            val statusByToken = mm.getStatus(token = ADMIN, type = RBACUnitElementTypeWithStatus.USER)
            assert(statusByToken == UnitElementStatus.OPERATIONAL)
        }

        /** get status of admin role by name or token */
        myRun {
            val statusByName = mm.getStatus(name = ADMIN, type = RBACUnitElementTypeWithStatus.ROLE)
            assert(statusByName == UnitElementStatus.OPERATIONAL)
            val statusByToken = mm.getStatus(token = ADMIN, type = RBACUnitElementTypeWithStatus.ROLE)
            assert(statusByToken == UnitElementStatus.OPERATIONAL)
        }

        /** get status of non-existing user by name or token */
        myRun {
            val statusByName = mm.getStatus(name = "not-existing", type = RBACUnitElementTypeWithStatus.USER)
            assert(statusByName == null)
            val statusByToken = mm.getStatus(token = "not-existing", type = RBACUnitElementTypeWithStatus.USER)
            assert(statusByToken == null)
        }

        /** get status of existing but incomplete user by name (not by token, as incomplete users still lack a token) */
        myRun {
            assert(mm.addUser(aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
            val aliceName = aliceUser.name
            val statusByName = mm.getStatus(name = aliceName, type = RBACUnitElementTypeWithStatus.USER)
            assert(statusByName == UnitElementStatus.INCOMPLETE)
        }

        /** get status of operational user by name or token */
        myRun {
            addAndInitUser(bobUser)
            val bobName = bobUser.name
            val bobToken = bobUser.token
            val statusByName = mm.getStatus(name = bobName, type = RBACUnitElementTypeWithStatus.USER)
            assert(statusByName == UnitElementStatus.OPERATIONAL)
            val statusByToken = mm.getStatus(token = bobToken, type = RBACUnitElementTypeWithStatus.USER)
            assert(statusByToken == UnitElementStatus.OPERATIONAL)
        }

        /** get status of deleted user by name or token */
        myRun {
            addAndInitUser(carlUser)
            val carlName = carlUser.name
            val carlToken = carlUser.token
            assert(mm.deleteUser(carlName) == OutcomeCode.CODE_000_SUCCESS)
            val statusByName = mm.getStatus(name = carlName, type = RBACUnitElementTypeWithStatus.USER)
            assert(statusByName == UnitElementStatus.DELETED)
            val statusByToken = mm.getStatus(token = carlToken, type = RBACUnitElementTypeWithStatus.USER)
            assert(statusByToken == UnitElementStatus.DELETED)
        }

        /** get status of non-existing role by name or token */
        myRun {
            val statusByName = mm.getStatus(name = "not-existing", type = RBACUnitElementTypeWithStatus.ROLE)
            assert(statusByName == null)
            val statusByToken = mm.getStatus(token = "not-existing", type = RBACUnitElementTypeWithStatus.ROLE)
            assert(statusByToken == null)
        }

        /** get status of operational role by name or token */
        myRun {
            val roleOperational = addRole("roleOperational")
            val roleName = roleOperational.name
            val roleToken = roleOperational.token
            val statusByName = mm.getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)
            assert(statusByName == UnitElementStatus.OPERATIONAL)
            val statusByToken = mm.getStatus(token = roleToken, type = RBACUnitElementTypeWithStatus.ROLE)
            assert(statusByToken == UnitElementStatus.OPERATIONAL)
        }

        /** get status of deleted role by name or token */
        myRun {
            val roleDeleted = addRole("roleDeleted")
            assert(mm.deleteRoleTuples(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            val roleName = roleDeleted.name
            val roleToken = roleDeleted.token
            val statusByName = mm.getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)
            assert(statusByName == UnitElementStatus.DELETED)
            val statusByToken = mm.getStatus(token = roleToken, type = RBACUnitElementTypeWithStatus.ROLE)
            assert(statusByToken == UnitElementStatus.DELETED)
        }

        /** get status of non-existing resource by name or token */
        myRun {
            val statusByName = mm.getStatus(name = "not-existing", type = RBACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByName == null)
            val statusByToken = mm.getStatus(token = "not-existing", type = RBACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByToken == null)
        }

        /** get status of operational resource by name or token */
        myRun {
            val resourceOperational = addResource("resourceOperational")
            val resourceName = resourceOperational.name
            val resourceToken = resourceOperational.token
            val statusByName = mm.getStatus(name = resourceName, type = RBACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByName == UnitElementStatus.OPERATIONAL)
            val statusByToken = mm.getStatus(token = resourceToken, type = RBACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByToken == UnitElementStatus.OPERATIONAL)
        }

        /** get status of deleted resource by name or token */
        myRun {
            val resourceDeleted = addResource("resourceDeleted")
            assert(mm.deleteResource(resourceDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            val resourceName = resourceDeleted.name
            val resourceToken = resourceDeleted.token
            val statusByName = mm.getStatus(name = resourceName, type = RBACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByName == UnitElementStatus.DELETED)
            val statusByToken = mm.getStatus(token = resourceToken, type = RBACUnitElementTypeWithStatus.RESOURCE)
            assert(statusByToken == UnitElementStatus.DELETED)
        }
    }

    @Test
    open fun `delete operational roles by name works`() {
        val operational = addRole("operational")

        /** delete operational roles */
        myRun {
            assert(mm.deleteRoleTuples(roleName = operational.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.deleteRole(operational.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteRoles = mm.getRoles(roleName = operational.name, status = UnitElementStatus.DELETED)
            assert(deleteRoles.size == 1)
            assert(deleteRoles.firstOrNull()!!.name == operational.name)
        }
    }

    @Test
    open fun `delete non-existing and deleted roles by name fails`() {
        val nonExisting = Role("nonExisting")
        val deleted = addRole("operational")
        assert(mm.deleteRoleTuples(roleName = deleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.deleteRole(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing roles */
        myRun {
            assert(mm.deleteRole(nonExisting.name) == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** delete deleted roles */
        myRun {
            assert(mm.deleteRole(deleted.name) == OutcomeCode.CODE_014_ROLE_WAS_DELETED)
        }
    }

    @Test
    open fun `delete the admin role by name fails`() {
        /** delete the admin role */
        myRun {
            assert(mm.deleteRole(ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    @Test
    open fun `delete operational resources by name works`() {
        val operational = addResource("operational")

        /** delete operational resources */
        myRun {
            assert(mm.deleteResource(operational.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteResources = mm.getResources(resourceName = operational.name, status = UnitElementStatus.DELETED)
            assert(deleteResources.size == 1)
            assert(deleteResources.firstOrNull()!!.name == operational.name)
        }
    }

    @Test
    open fun `delete non-existing and deleted resources by name fails`() {
        val nonExisting = Resource(
            name = "nonExisting",
            enforcement = EnforcementType.COMBINED
        )
        val deleted = addResource("operational")
        assert(mm.deleteResource(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing resources */
        myRun {
            assert(mm.deleteResource(nonExisting.name) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** delete deleted resources */
        myRun {
            assert(mm.deleteResource(deleted.name) == OutcomeCode.CODE_015_RESOURCE_WAS_DELETED)
        }
    }

    @Test
    open fun `delete existing role tuples by role name works`() {
        addAndInitUser(aliceUser)
        addAndInitUser(bobUser)
        val student = addRole("student")
        addRoleTuple(aliceUser.name, student)
        addRoleTuple(bobUser.name, student)

        /** delete existing role tuples by role name */
        myRun {
            assert(mm.getRoleTuples(roleName = student.name).size == 3)
            assert(mm.deleteRoleTuples(roleName = student.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm.getRoleTuples(roleName = student.name).size == 0)
        }
    }

    @Test
    open fun `delete non-existing or the admin's role tuples by role name fails`() {

        /** delete non-existing role tuples */
        myRun {
            assert(mm.deleteRoleTuples(roleName = "non-existing") == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** delete the admin's role tuples */
        myRun {
            assert(mm.deleteRoleTuples(roleName = ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    @Test
    open fun `delete existing permission tuples by role or resource name works`() {
        val student = addRole("student", 1)
        val director = addRole("director", 1)
        val exam = addResource("exam")
        addPermissionTuple(student, exam)
        addPermissionTuple(director, exam)

        /** delete existing permission tuples by role name */
        myRun {
            assert(mm.getPermissionTuples(resourceName = exam.name).size == 2)
            assert(mm.deletePermissionTuples(roleName = student.name) == OutcomeCode.CODE_000_SUCCESS)
        }
        assert(mm.getPermissionTuples(resourceName = exam.name).size == 1)

        /** delete existing permission tuples by resource name */
        myRun {
            assert(mm.deletePermissionTuples(resourceName = exam.name) == OutcomeCode.CODE_000_SUCCESS)
        }
        assert(mm.getPermissionTuples(resourceName = exam.name).size == 0)
    }

    @Test
    open fun `delete non-existing or the admin's permission tuples by role or resource name fails`() {

        /** delete non-existing permission tuples by role or resource name */
        myRun {
            assert(mm.deletePermissionTuples(roleName = "non-existing") == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
            assert(mm.deletePermissionTuples(resourceName = "non-existing") == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** delete the admin's role tuples */
        val exam = addResource("exam")
        addPermissionTuple(Parameters.adminRole, exam)
        myRun {
            assert(mm.deletePermissionTuples(roleName = ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    @Test
    open fun `update symmetric encryption key version number and token for operational resource works`() {
        val exam = addResource("exam", 1)
        val examToken = exam.token

        /** update symmetric encryption key version number and token for operational resource */
        myRun {
            assert(
                mm.getVersionNumber(name = exam.name, elementType = RBACUnitElementTypeWithVN.RESOURCE) == 1
            )
            assert(
                mm.getToken(name = exam.name, type = RBACUnitElementTypeWithStatus.RESOURCE) == examToken
            )

            val newExamToken = UnitElement.generateRandomToken()
            assert(mm.updateResourceTokenAndVersionNumber(
                resourceName = exam.name,
                oldResourceToken = examToken,
                newResourceToken = newExamToken,
                newSymEncKeyVersionNumber = 2
            ) == OutcomeCode.CODE_000_SUCCESS)

            /**
             * We should also update the resource's token in
             * the resource's permission tuples (but here it
             * would be useless)
             */

            assert(
                mm.getVersionNumber(name = exam.name, elementType = RBACUnitElementTypeWithVN.RESOURCE) == 2
            )
            assert(
                mm.getToken(name = exam.name, type = RBACUnitElementTypeWithStatus.RESOURCE) == newExamToken
            )
        }
    }

    @Test
    open fun `update symmetric encryption key version number and token for non-existing or deleted resource fails`() {
        val exam = addResource("exam", 1)
        val examToken = exam.token
        assert(mm.deleteResource(exam.name) == OutcomeCode.CODE_000_SUCCESS)

        /** update symmetric encryption key version number and token for non-existing resource */
        myRun {
            assert(mm.updateResourceTokenAndVersionNumber(
                resourceName = "non-existing",
                oldResourceToken = "non-existing-token",
                newResourceToken = "newExamToken",
                newSymEncKeyVersionNumber = 2
            ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)

            /**
             * We should also update the resource's token in
             * the resource's permission tuples (but here it
             * would be useless)
             */
        }

        /** update symmetric encryption key version number and token for deleted resource */
        myRun {
            assert(mm.updateResourceTokenAndVersionNumber(
                resourceName = exam.name,
                oldResourceToken = examToken,
                newResourceToken = "newExamToken",
                newSymEncKeyVersionNumber = 2
            ) == OutcomeCode.CODE_015_RESOURCE_WAS_DELETED)

            /**
             * We should also update the resource's token in
             * the resource's permission tuples (but here it
             * would be useless)
             */
        }
    }

    @Test
    open fun `update public keys and token and version number of operational roles by name works`() {
        val roleOperational = addRole("roleOperational")
        val roleToken = roleOperational.token

        /** update public keys and token and version number of operational roles by name */
        myRun {
            val asymEncKeysBytesByName = mm.getPublicKey(
                name = roleOperational.name, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(roleOperational.asymEncKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByName = mm.getPublicKey(
                name = roleOperational.name, elementType = RBACUnitElementTypeWithKeys.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(roleOperational.asymSigKeys!!.public.decodeBase64()))

            val newRoleToken = UnitElement.generateRandomToken()
            val newAsymEncKeys = Parameters.cryptoPKEObject.generateAsymEncKeys()
            val newAsymSigKeys = Parameters.cryptoPKEObject.generateAsymSigKeys()
            assert(
                mm.updateRoleTokenAndVersionNumberAndAsymKeys(
                    roleName = roleOperational.name,
                    oldRoleVersionNumber = 1,
                    oldRoleToken = roleToken,
                    newRoleToken = newRoleToken,
                    newAsymEncPublicKey = newAsymEncKeys.public,
                    newAsymSigPublicKey = newAsymSigKeys.public
                ) == OutcomeCode.CODE_000_SUCCESS
            )

            /**
             * We should also update the role's token in
             * the role's permission tuples (but here it
             * would be useless)
             */

            val newAsymEncKeysBytesByName = mm.getPublicKey(
                name = roleOperational.name,
                elementType = RBACUnitElementTypeWithKeys.ROLE,
                asymKeyType = AsymKeysType.ENC
            )
            assert(newAsymEncKeysBytesByName != null)
            assert(newAsymEncKeysBytesByName.contentEquals(newAsymEncKeys.public.encoded))

            val newAsymSigKeysBytesByName = mm.getPublicKey(
                name = roleOperational.name,
                elementType = RBACUnitElementTypeWithKeys.ROLE,
                asymKeyType = AsymKeysType.SIG
            )
            assert(newAsymSigKeysBytesByName != null)
            assert(newAsymSigKeysBytesByName.contentEquals(newAsymSigKeys.public.encoded))

            assert(
                mm.getToken(
                    name = roleOperational.name,
                    type = RBACUnitElementTypeWithStatus.ROLE
                ) == newRoleToken
            )
        }
    }

    @Test
    open fun `update public keys and token and version number of deleted roles by name fails`() {
        val roleDeleted = addRole("roleDeleted")
        val roleDeletedToken = roleDeleted.token
        assert(mm.deleteRoleTuples(roleName = roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** update public keys and token and version number of deleted roles by name */
        myRun {
            val newRoleToken = UnitElement.generateRandomToken()
            val newAsymEncKeys = Parameters.cryptoPKEObject.generateAsymEncKeys()
            val newAsymSigKeys = Parameters.cryptoPKEObject.generateAsymSigKeys()

            assert(
                mm.updateRoleTokenAndVersionNumberAndAsymKeys(
                    roleName = roleDeleted.name,
                    oldRoleVersionNumber = 2,
                    oldRoleToken = roleDeletedToken,
                    newRoleToken = newRoleToken,
                    newAsymEncPublicKey = newAsymEncKeys.public,
                    newAsymSigPublicKey = newAsymSigKeys.public,
                ) == OutcomeCode.CODE_014_ROLE_WAS_DELETED
            )

            /**
             * We should also update the role's token in
             * the role's permission tuples (but here it
             * would be useless)
             */
        }
    }

    @Test
    open fun `update existing permission tuple works`() {
        val student = addRole("student")
        val exam = addResource("exam")
        val studentExamPermissionTuple = addPermissionTuple(student, exam, PermissionType.READ)

        /** update existing permission tuple */
        myRun {
            val getBefore = mm.getPermissionTuples(roleName = student.name, resourceName = exam.name)
            assert(getBefore.filter { it.roleName == student.name }.size == 1)
            assert(getBefore.firstOrNull { it.roleName == student.name }!!.permission == PermissionType.READ)

            val newPermissionTuple = PermissionTuple(
                roleName = student.name,
                resourceName = exam.name,
                roleToken = student.token,
                resourceToken = exam.token,
                permission = PermissionType.READWRITE,
                roleVersionNumber = student.versionNumber,
                symKeyVersionNumber = exam.symEncKeyVersionNumber,
                encryptingSymKey = studentExamPermissionTuple.encryptingSymKey,
                decryptingSymKey = studentExamPermissionTuple.decryptingSymKey
            )
            val signature = Parameters.cryptoPKEObject.createSignature(
                bytes = newPermissionTuple.getBytesForSignature(),
                signingKey = Parameters.adminAsymSigKeys.private
            )
            newPermissionTuple.updateSignature(
                newSignature = signature,
                newSigner = ADMIN
            )
            assert(mm.updatePermissionTuple(newPermissionTuple) == OutcomeCode.CODE_000_SUCCESS)

            val getAfter = mm.getPermissionTuples(roleName = student.name, resourceName = exam.name)
            assert(getAfter.filter { it.roleName == student.name }.size == 1)
            assert(getAfter.firstOrNull { it.roleName == student.name }!!.permission == PermissionType.READWRITE)
        }
    }

    @Test
    open fun `update non-existing permission tuple fails`() {
        /** update non-existing permission tuple */
        myRun {
            val roleNonExisting = TestUtilities.createRole("non-existing-role")
            val resourceNonExisting = TestUtilities.createResource("non-existing-resource", enforcement = EnforcementType.COMBINED)
            val nonExistingPermissionTuple =
                TestUtilities.createPermissionTuple(roleNonExisting, resourceNonExisting)
            assert(mm.updatePermissionTuple(nonExistingPermissionTuple) == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }
    }

    // TODO test:
    //  - updateRoleTokenAndVersionNumberAndAsymKeys
    //  - updateResourceVersionNumber
    //  - updateResourceTokenAndVersionNumber
    // TODO test paginazione (limit e offset)



    private fun addRole(
        roleName: String,
        roleVersionNumber: Int = 1
    ): Role {
        val newRole = TestUtilities.createRole(roleName, roleVersionNumber)
        val newRoleTuple = TestUtilities.createRoleTuple(ADMIN, newRole)
        assert(mm.addRole(newRole) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.addRoleTuples(hashSetOf(newRoleTuple)) == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        return newRole
    }

    private fun addResource(
        resourceName: String,
        symEncKeyVersionNumber: Int = 1
    ): Resource {
        val newResource = TestUtilities.createResource(resourceName, symEncKeyVersionNumber, enforcement = EnforcementType.COMBINED)
        assert(mm.addResource(newResource) == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        return newResource
    }

    private fun addRoleTuple(
        username: String,
        role: Role
    ): RoleTuple {
        val roleTuple = TestUtilities.createRoleTuple(username, role)
        assert(mm.addRoleTuples(hashSetOf(roleTuple)) == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        return roleTuple
    }

    private fun addPermissionTuple(
        role: Role,
        resource: Resource,
        permission: PermissionType = PermissionType.READ
    ): PermissionTuple {
        val permissionTuple = TestUtilities.createPermissionTuple(role, resource, permission)
        assert(mm.addPermissionTuples(hashSetOf(permissionTuple)) == OutcomeCode.CODE_000_SUCCESS)
        assertUnLockAndLock(mm)
        return permissionTuple
    }
}
