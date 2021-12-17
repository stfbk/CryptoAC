package eu.fbk.st.cryptoac.implementation.mm

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import org.junit.jupiter.api.*

internal abstract class MMInterfaceTest {

    abstract val mm: MMInterface?

    @BeforeAll
    abstract fun setUpAll()

    @BeforeEach
    open fun setUp() {
        assert(mm!!.lock() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    open fun tearDown() {
        assert(mm!!.unlock() == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterAll
    abstract fun tearDownAll()
    
    
    
    @Test
    fun initAdmin() {
        // TODO
    }



    @Test
    open fun `init user of existing user works`() {
        /** init user of existing user */
        run {
            addAndInitUser(Parameters.aliceUser)
        }
    }

    @Test
    open fun `init user of non-existing or already initialized user fails`() {

        /** init user of non-existing user */
        run {
            val MMInterfaceMySQLParameters = MMInterfaceMySQLParameters(
                username = "non-existing", password = "password",
                port = Parameters.MMInterfaceMySQLParameters.port,
                url = Parameters.MMInterfaceMySQLParameters.url,
            )
            val nonExistingUserMetadataStorage = MMInterfaceMySQL(MMInterfaceMySQLParameters)
            assert(nonExistingUserMetadataStorage.lock() == OutcomeCode.CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED)
        }

        /** init user of already initialized user */
        run {
            val bobMetadataStorageMySQL = addAndInitUser(Parameters.bobUser)
            assert(bobMetadataStorageMySQL.lock() == OutcomeCode.CODE_000_SUCCESS)
            assert(bobMetadataStorageMySQL.initUser(Parameters.bobUser) == OutcomeCode.CODE_004_USER_NOT_FOUND)
            assert(bobMetadataStorageMySQL.unlock() == OutcomeCode.CODE_000_SUCCESS)
        }
    }



    @Test
    open fun `is admin of admin user is true, while is admin of other users, non-existing or deleted is false or fails`() {
        /** is admin of admin user */
        run {
            val isAdminResult = mm!!.isUserAdmin(Constants.ADMIN)
            assert(isAdminResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(isAdminResult.boolean!!)
        }

        /** is admin of other user */
        run {
            assert(mm!!.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
            val isAdminResult = mm!!.isUserAdmin(Parameters.aliceUser.name)
            assert(isAdminResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(!isAdminResult.boolean!!)
        }

        /** is admin of non-existing user */
        run {
            val isAdminResult = mm!!.isUserAdmin("bob")
            assert(isAdminResult.code == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** is admin of deleted user */
        run {
            assert(mm!!.deleteUser(Parameters.aliceUser.name) == OutcomeCode.CODE_000_SUCCESS)
            val isAdminResult = mm!!.isUserAdmin(Parameters.aliceUser.name)
            assert(isAdminResult.code == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }
    }



    @Test
    open fun `add user once works`() {
        /** add user once */
        run {
            assert(mm!!.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    open fun `add user twice or with admin name or with same name as previously deleted user fails`() {

        /** add user twice */
        run {
            assert(mm!!.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with admin name */
        run {
            assert(mm!!.addUser(Parameters.adminUser).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with same name as previously deleted user */
        run {
            addAndInitUser(Parameters.bobUser)
            assert(mm!!.deleteUser(Parameters.bobUser.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.addUser(Parameters.bobUser).code == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }



    @Test
    open fun `add role once works`() {
        /** add role once */
        run {
            addRole("employee")
        }
    }

    @Test
    open fun `add role twice or with admin name or same name as previously deleted role fails`() {
        val studentRole = addRole("student")

        /** add role twice */
        run {
            assert(mm!!.addRole(studentRole) == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with admin name */
        run {
            assert(mm!!.addRole(Parameters.adminRole) == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with same name as previously deleted role */
        run {
            assert(mm!!.deleteRoleTuples(roleName = studentRole.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.deleteRole(studentRole.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.addRole(studentRole) == OutcomeCode.CODE_014_ROLE_WAS_DELETED)
        }
    }



    @Test
    open fun `add file once works`() {
        /** add file once */
        run {
            addFile("exam")
        }
    }

    @Test
    open fun `add file twice or with same name as previously deleted file fails`() {
        val exam = addFile("exam")

        /** add file twice */
        run {
            assert(mm!!.addFile(exam) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }

        /** add file with same name as previously deleted file */
        run {
            assert(mm!!.deleteFile(exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.addFile(exam) == OutcomeCode.CODE_015_FILE_WAS_DELETED)
        }
    }



    @Test
    open fun `add no, one or multiple role tuples work`() {
        assert(mm!!.addUser(User("Alice")).code == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.addUser(User("Bob")).code == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.addUser(User("Carl")).code == OutcomeCode.CODE_000_SUCCESS)
        val roleEmployee = addRole("employee")

        /** add no role tuples */
        run {
            assert(mm!!.addRoleTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one role tuple */
        run {
            addRoleTuple("Alice", roleEmployee)
        }

        /** add multiple role tuples */
        run {
            val bobRoleTuple = TestUtilities.createRoleTuple("Bob", roleEmployee)
            val carlRoleTuple = TestUtilities.createRoleTuple("Carl", roleEmployee)
            assert(
                mm!!.addRoleTuples(HashSet<RoleTuple>().apply { add(bobRoleTuple) }.apply { add(carlRoleTuple) }) ==
                        OutcomeCode.CODE_000_SUCCESS
            )
        }

    }

    @Test
    open fun `add role tuple twice fails`() {
        assert(mm!!.addUser(User("Alice")).code == OutcomeCode.CODE_000_SUCCESS)
        val roleEmployee = addRole("employee")

        /** add role tuple twice */
        run {
            val aliceRoleTuple = addRoleTuple("Alice", roleEmployee)
            assert(
                mm!!.addRoleTuples(HashSet<RoleTuple>().apply { add(aliceRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }
    }

    @Test
    open fun `add role tuple with non-existing or deleted user or role fails`() {
        addAndInitUser(Parameters.aliceUser)
        val userDeleted = Parameters.bobUser
        addAndInitUser(userDeleted)
        assert(mm!!.deleteUser(userDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = addRole("role")
        assert(mm!!.deleteRoleTuples(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        val roleEmployee = addRole("employee")
        val roleNonExisting = TestUtilities.createRole("non-existing")

        /** add role tuple with non-existing user */
        run {
            val nonExistingUserRoleTuple = TestUtilities.createRoleTuple("non-existing", roleEmployee)
            assert(
                mm!!.addRoleTuples(HashSet<RoleTuple>().apply { add(nonExistingUserRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }

        /** add role tuple with deleted user */
        run {
            val deleteUserRoleTuple = TestUtilities.createRoleTuple(userDeleted.name, roleEmployee)
            assert(
                mm!!.addRoleTuples(HashSet<RoleTuple>().apply { add(deleteUserRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }

        /** add role tuple with non-existing role */
        run {
            val nonExistingRoleRoleTuple = TestUtilities.createRoleTuple(Parameters.aliceUser.name, roleNonExisting)
            assert(
                mm!!.addRoleTuples(HashSet<RoleTuple>().apply { add(nonExistingRoleRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }

        /** add role tuple with deleted role */
        run {
            val userDeletedRoleTuple = TestUtilities.createRoleTuple(Parameters.aliceUser.name, roleDeleted)
            assert(
                mm!!.addRoleTuples(HashSet<RoleTuple>().apply { add(userDeletedRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }
    }



    @Test
    open fun `add no, one or multiple permission tuples work`() {
        val roleEmployee = addRole("employee")
        val roleStudent = addRole("student")
        val roleDirector = addRole("director")

        val fileExam = addFile("exam")

        /** add no permission tuples */
        run {
            assert(mm!!.addPermissionTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one permission tuple */
        run {
            addPermissionTuple(roleEmployee, fileExam)
        }

        /** add multiple permission tuples */
        run {
            val studentPermissionTuple = TestUtilities.createPermissionTuple(roleStudent, fileExam)
            val directoryPermissionTuple = TestUtilities.createPermissionTuple(roleDirector, fileExam)
            assert(
                mm!!.addPermissionTuples(HashSet<PermissionTuple>()
                    .apply { add(studentPermissionTuple) }
                    .apply { add(directoryPermissionTuple) }) == OutcomeCode.CODE_000_SUCCESS
            )
        }
    }

    @Test
    open fun `add permission tuple twice fails`() {
        val roleEmployee = addRole("employee")
        val fileExam = addFile("exam")

        /** add permission tuple twice */
        run {
            val employeePermissionTuple = addPermissionTuple(roleEmployee, fileExam)
            assert(
                mm!!.addPermissionTuples(HashSet<PermissionTuple>().apply { add(employeePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }
    }

    @Test
    open fun `add permission tuple with non-existing or deleted role or file fails`() {
        val roleEmployee = addRole("employee")
        val roleDeleted = addRole("role-deleted")
        assert(mm!!.deleteRoleTuples(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        val roleNonExisting = TestUtilities.createRole("non-existing-role")

        val fileExam = addFile("exam")
        val fileNonExisting = TestUtilities.createFile("non-existing-file", enforcement = EnforcementType.COMBINED)
        val fileDeleted = addFile("file-deleted")
        assert(mm!!.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** add permission tuple with non-existing role */
        run {
            val nonExistingRolePermissionTuple = TestUtilities.createPermissionTuple(roleNonExisting, fileExam)
            assert(
                mm!!.addPermissionTuples(HashSet<PermissionTuple>().apply { add(nonExistingRolePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }

        /** add permission tuple with deleted role */
        run {
            val deletedRolePermissionTuple = TestUtilities.createPermissionTuple(roleNonExisting, fileExam)
            assert(
                mm!!.addPermissionTuples(HashSet<PermissionTuple>().apply { add(deletedRolePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }

        /** add permission tuple with non-existing file */
        run {
            val nonExistingFilePermissionTuple =
                TestUtilities.createPermissionTuple(roleEmployee, fileNonExisting)
            assert(
                mm!!.addPermissionTuples(HashSet<PermissionTuple>().apply { add(nonExistingFilePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }

        /** add permission tuple with deleted file */
        run {
            val deletedFilePermissionTuple = TestUtilities.createPermissionTuple(roleEmployee, fileDeleted)
            assert(
                mm!!.addPermissionTuples(HashSet<PermissionTuple>().apply { add(deletedFilePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }
    }



    @Test
    open fun `add no, one or multiple file tuples work`() {
        val fileExam = addFile("exam")
        val fileDocument = addFile("document")
        val fileExcel = addFile("excel")


        /** add no file tuples */
        run {
            assert(mm!!.addFileTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one file tuple */
        run {
            addFileTuple(fileExam)
        }

        /** add multiple file tuples */
        run {
            val documentFileTuple = TestUtilities.createFileTuple(fileDocument)
            val excelFileTuple = TestUtilities.createFileTuple(fileExcel)
            assert(
                mm!!.addFileTuples(HashSet<FileTuple>()
                    .apply { add(documentFileTuple) }.apply { add(excelFileTuple) }) == OutcomeCode.CODE_000_SUCCESS
            )
        }

    }

    @Test
    open fun `add file tuple twice fails`() {
        val fileExam = addFile("exam")

        /** add file tuple twice */
        run {
            val examFileTuple = addFileTuple(fileExam)
            assert(
                mm!!.addFileTuples(HashSet<FileTuple>().apply { add(examFileTuple) }) ==
                        OutcomeCode.CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS
            )
        }
    }

    @Test
    open fun `add file tuple with non-existing or deleted file fails`() {
        addFile("exam")
        val fileNonExisting = TestUtilities.createFile("non-existing-file", enforcement = EnforcementType.COMBINED)
        val fileDeleted = addFile("deleted-file")
        assert(mm!!.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** add file tuple with non-existing file */
        run {
            val nonExistingFileFileTuple = TestUtilities.createFileTuple(fileNonExisting)
            assert(
                mm!!.addFileTuples(HashSet<FileTuple>().apply { add(nonExistingFileFileTuple) }) ==
                        OutcomeCode.CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS
            )
        }

        /** add file tuple with deleted file */
        run {
            val deletedFileFileTuple = TestUtilities.createFileTuple(fileDeleted)
            assert(
                mm!!.addFileTuples(HashSet<FileTuple>().apply { add(deletedFileFileTuple) }) ==
                        OutcomeCode.CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS
            )
        }
    }



    @Test
    open fun `get not-existing, incomplete, operational and deleted user by name or token works`() {
        val incompleteUser = Parameters.aliceUser
        mm!!.addUser(incompleteUser)
        val operationalUser = Parameters.bobUser
        addAndInitUser(operationalUser)
        val deletedUser = Parameters.carlUser
        addAndInitUser(deletedUser)
        assert(mm!!.deleteUser(deletedUser.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing user by name or token */
        run {
            assert(mm!!.getUsers(username = "non-existing").isEmpty())
            assert(mm!!.getUsers(userToken = "non-existing").isEmpty())
        }

        /** get incomplete user by name or token */
        run {
            val incompleteUserByName = mm!!.getUsers(username = incompleteUser.name)
            assert(incompleteUserByName.size == 1)
            /** if the user was not initialized, the token is equal to the name */
            assert(incompleteUserByName.firstOrNull()!!.token == incompleteUser.name)

            val incompleteUserByToken = mm!!.getUsers(userToken = incompleteUser.name)
            assert(incompleteUserByToken.size == 1)
            assert(incompleteUserByToken.firstOrNull()!!.name == incompleteUser.name)
        }

        /** get operational user by name or token */
        run {
            val operationalUserByName = mm!!.getUsers(username = operationalUser.name)
            assert(operationalUserByName.size == 1)
            assert(operationalUserByName.firstOrNull()!!.token == operationalUser.token)

            val operationalUserByToken = mm!!.getUsers(userToken = operationalUser.token)
            assert(operationalUserByToken.size == 1)
            assert(operationalUserByToken.firstOrNull()!!.name == operationalUser.name)
        }

        /** get deleted user by name or token */
        run {
            assert(mm!!.getUsers(username = deletedUser.name).size == 0)
            assert(mm!!.getUsers(userToken = deletedUser.token).size == 0)

            val deletedUserByToken = mm!!.getUsers(userToken = deletedUser.token, status = ElementStatus.DELETED)
            assert(deletedUserByToken.size == 1)
            assert(deletedUserByToken.firstOrNull()!!.name == deletedUser.name)
            val deletedUserByName = mm!!.getUsers(username = deletedUser.name, status = ElementStatus.DELETED)
            assert(deletedUserByName.size == 1)
            assert(deletedUserByName.firstOrNull()!!.name == deletedUser.name)
        }
    }

    @Test
    open fun `get all users works`() {
        /** get all users */
        run {
            addAndInitUser(Parameters.aliceUser)
            addAndInitUser(Parameters.bobUser)
            addAndInitUser(Parameters.carlUser)

            val allUsers = mm!!.getUsers()
            assert(allUsers.size == 4)
            assert(allUsers.filter { it.name == Parameters.aliceUser.name }.size == 1)
            assert(allUsers.filter { it.name == Parameters.bobUser.name }.size == 1)
            assert(allUsers.filter { it.name == Parameters.carlUser.name }.size == 1)
            assert(allUsers.filter { it.name == Constants.ADMIN }.size == 1)
        }
    }



    @Test
    open fun `get not-existing, operational and deleted role by name or token works`() {
        val operational = addRole("operational")
        val deleted = addRole("deleted")
        assert(mm!!.deleteRoleTuples(deleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.deleteRole(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing role by name or token */
        run {
            assert(mm!!.getRoles(roleName = "non-existing").isEmpty())
            assert(mm!!.getRoles(roleToken = "non-existing").isEmpty())
        }

        /** get operational role by name or token */
        run {
            val operationalRoleByName = mm!!.getRoles(roleName = operational.name)
            assert(operationalRoleByName.size == 1)
            assert(operationalRoleByName.firstOrNull()!!.token == operational.token)

            val operationalRoleByToken = mm!!.getRoles(roleToken = operational.token)
            assert(operationalRoleByToken.size == 1)
            assert(operationalRoleByToken.firstOrNull()!!.name == operational.name)
        }

        /** get deleted role by name or token */
        run {
            assert(mm!!.getRoles(roleName = deleted.name).size == 0)
            assert(mm!!.getRoles(roleToken = deleted.token).size == 0)

            val deletedRoleByToken = mm!!.getRoles(roleToken = deleted.token, status = ElementStatus.DELETED)
            assert(deletedRoleByToken.size == 1)
            assert(deletedRoleByToken.firstOrNull()!!.name == deleted.name)
            val deletedRoleByName = mm!!.getRoles(roleName = deleted.name, status = ElementStatus.DELETED)
            assert(deletedRoleByName.size == 1)
            assert(deletedRoleByName.firstOrNull()!!.name == deleted.name)
        }
    }

    @Test
    open fun `get all roles works`() {
        val student = addRole("student")
        val employee  = addRole("employee")
        val director = addRole("director")

        /** get all roles */
        run {
            val allRoles = mm!!.getRoles()
            /** there is also the admin */
            assert(allRoles.size == 4)
            assert(allRoles.filter { it.name == student.name }.size == 1)
            assert(allRoles.filter { it.name == employee.name }.size == 1)
            assert(allRoles.filter { it.name == director.name }.size == 1)
            assert(allRoles.filter { it.name == Constants.ADMIN }.size == 1)
        }
    }



    @Test
    open fun `get not-existing, operational and deleted file by name or token works`() {
        val operational = addFile("operational")
        val deleted = addFile("deleted")
        assert(mm!!.deleteFile(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing file by name or token */
        run {
            assert(mm!!.getFiles(fileName = "non-existing").isEmpty())
            assert(mm!!.getFiles(fileToken = "non-existing").isEmpty())
        }

        /** get operational file by name or token */
        run {
            val operationalFileByName = mm!!.getFiles(fileName = operational.name)
            assert(operationalFileByName.size == 1)
            assert(operationalFileByName.firstOrNull()!!.token == operational.token)

            val operationalFileByToken = mm!!.getFiles(fileToken = operational.token)
            assert(operationalFileByToken.size == 1)
            assert(operationalFileByToken.firstOrNull()!!.name == operational.name)
        }

        /** get deleted file by name or token */
        run {
            assert(mm!!.getFiles(fileName = deleted.name).isEmpty())
            assert(mm!!.getFiles(fileToken = deleted.token).isEmpty())

            val deletedFileByName = mm!!.getFiles(fileName = deleted.name, status = ElementStatus.DELETED)
            assert(deletedFileByName.size == 1)
            assert(deletedFileByName.firstOrNull()!!.token == deleted.token)
            val deletedFileByToken = mm!!.getFiles(fileToken = deleted.token, status = ElementStatus.DELETED)
            assert(deletedFileByToken.size == 1)
            assert(deletedFileByToken.firstOrNull()!!.name == deleted.name)
        }
    }

    @Test
    open fun `get all files works`() {
        val exam = addFile("exam")
        val document  = addFile("document")
        val excel = addFile("excel")

        /** get all files */
        run {
            val allFiles = mm!!.getFiles()
            assert(allFiles.size == 3)
            assert(allFiles.filter { it.name == exam.name }.size == 1)
            assert(allFiles.filter { it.name == document.name }.size == 1)
            assert(allFiles.filter { it.name == excel.name }.size == 1)
        }
    }



    @Test
    open fun `get role tuples of the administrator or of users by username or role name works`() {
        addAndInitUser(Parameters.aliceUser)
        val student = addRole("student")
        addRoleTuple("alice", student)

        /** get role tuple of the administrator by username or role name */
        run {
            val adminRoleTuplesByUsername = mm!!.getRoleTuples(username = Constants.ADMIN)
            assert(adminRoleTuplesByUsername.size == 2)
            assert(adminRoleTuplesByUsername.filter { it.roleName == Constants.ADMIN }.size == 1)
            assert(adminRoleTuplesByUsername.filter { it.roleName == student.name }.size == 1)

            val adminRoleTuplesByRoleName = mm!!.getRoleTuples(roleName = Constants.ADMIN)
            assert(adminRoleTuplesByRoleName.size == 1)
            assert(adminRoleTuplesByRoleName.firstOrNull()!!.username == Constants.ADMIN)
        }

        /** get role tuples of users by username or role name */
        run {
            val aliceRoleTuplesByUsername = mm!!.getRoleTuples(username = Parameters.aliceUser.name)
            assert(aliceRoleTuplesByUsername.size == 1)
            assert(aliceRoleTuplesByUsername.filter { it.roleName == student.name }.size == 1)

            val studentRoleTuplesByRoleName = mm!!.getRoleTuples(roleName = student.name)
            assert(studentRoleTuplesByRoleName.size == 2)
            assert(studentRoleTuplesByRoleName.filter { it.username == Constants.ADMIN }.size == 1)
            assert(studentRoleTuplesByRoleName.filter { it.username == Parameters.aliceUser.name }.size == 1)
        }
    }

    @Test
    open fun `get permission tuples by role or file name or excluding role name or role or file version number works`() {
        val roleEmployee = addRole("employee")
        val roleStudent = addRole("student")

        val fileExam = addFile("exam")

        addPermissionTuple(roleEmployee, fileExam)
        addPermissionTuple(roleStudent, fileExam)

        /** get permission tuples by role or file name */
        run {
            val examPermissionTuplesByName = mm!!.getPermissionTuples(fileName = fileExam.name)
            assert(examPermissionTuplesByName.size == 2)
            assert(examPermissionTuplesByName.filter { it.roleName == roleEmployee.name }.size == 1)
            assert(examPermissionTuplesByName.filter { it.roleName == roleStudent.name }.size == 1)
        }

        /** get permission tuples excluding role name */
        run {
            val examPermissionTuplesByName = mm!!.getPermissionTuples(
                fileName = fileExam.name, roleNameToExclude = roleStudent.name
            )
            assert(examPermissionTuplesByName.size == 1)
            assert(examPermissionTuplesByName.filter { it.roleName == roleEmployee.name }.size == 1)
        }

        /** get permission tuples by role or file version number */
        run {
            assert(mm!!.getPermissionTuples(roleVersionNumber = 1).size == 2)
            assert(mm!!.getPermissionTuples(symKeyVersionNumber = 1).size == 2)
        }
    }



    @Test
    open fun `get file tuples by file name works`() {
        val exam = addFile("exam")
        val document  = addFile("document")
        addFileTuple(exam)
        addFileTuple(document)

        /** get file tuple by file name */
        run {
            val examFileTupleByName = mm!!.getFileTuples(fileName = exam.name)
            assert(examFileTupleByName.size == 1)
            assert(examFileTupleByName.firstOrNull()!!.fileName == exam.name)

            val documentFileTupleByName = mm!!.getFileTuples(fileName = document.name)
            assert(documentFileTupleByName.size == 1)
            assert(documentFileTupleByName.firstOrNull()!!.fileName == document.name)

            val allFileTuples = mm!!.getFileTuples()
            assert(allFileTuples.size == 2)
            assert(allFileTuples.filter { it.fileName == exam.name }.size == 1)
            assert(allFileTuples.filter { it.fileName == document.name }.size == 1)
        }
    }



    @Test
    open fun `get public key of non-existing, incomplete, operational and deleted users and roles by name or token works`() {
        val nonExistingUser = Parameters.aliceUser
        val incompleteUser = Parameters.bobUser
        val operationalUser = Parameters.carlUser
        val deleteUser = Parameters.deniseUser
        assert(mm!!.addUser(incompleteUser).code == OutcomeCode.CODE_000_SUCCESS)
        addAndInitUser(operationalUser)
        addAndInitUser(deleteUser)
        assert(mm!!.deleteUser(deleteUser.name) == OutcomeCode.CODE_000_SUCCESS)

        val nonExistingRole = Role("nonExistingRole")
        val operationalRole = addRole("operationalRole")
        val deletedRole = addRole("deletedRole")
        assert(mm!!.deleteRoleTuples(roleName = deletedRole.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.deleteRole(deletedRole.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get public key of non-existing users by name or token */
        run {
            assert(
                mm!!.getPublicKey(
                    name = nonExistingUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = nonExistingUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    name = nonExistingUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = nonExistingUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
        }

        /** get public key of incomplete users by name or token */
        run {
            assert(
                mm!!.getPublicKey(
                    name = incompleteUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = incompleteUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    name = incompleteUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = incompleteUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
        }

        /** get public key of operational users by name or token */
        run {
            val asymEncKeysBytesByName = mm!!.getPublicKey(
                name = operationalUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(operationalUser.asymEncKeys!!.public.decodeBase64()))

            val asymEncKeysBytesByToken = mm!!.getPublicKey(
                token = operationalUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByToken != null)
            assert(asymEncKeysBytesByToken.contentEquals(operationalUser.asymEncKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByName = mm!!.getPublicKey(
                name = operationalUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(operationalUser.asymSigKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByToken = mm!!.getPublicKey(
                token = operationalUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByToken != null)
            assert(asymSigKeysBytesByToken.contentEquals(operationalUser.asymSigKeys!!.public.decodeBase64()))
        }

        /** get public key of deleted users by name or token */
        run {
            assert(
                mm!!.getPublicKey(
                    name = deleteUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = deleteUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    name = deleteUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = deleteUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
        }

        /** get public key of non-existing roles by name or token */
        run {
            assert(
                mm!!.getPublicKey(
                    name = nonExistingRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = nonExistingRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    name = nonExistingRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = nonExistingRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null)
        }

        /** get public key of operational roles by name or token */
        run {
            val asymEncKeysBytesByName = mm!!.getPublicKey(
                name = operationalRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(operationalRole.asymEncKeys!!.public.decodeBase64()))

            val asymEncKeysBytesByToken = mm!!.getPublicKey(
                token = operationalRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByToken != null)
            assert(asymEncKeysBytesByToken.contentEquals(operationalRole.asymEncKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByName = mm!!.getPublicKey(
                name = operationalRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(operationalRole.asymSigKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByToken = mm!!.getPublicKey(
                token = operationalRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByToken != null)
            assert(asymSigKeysBytesByToken.contentEquals(operationalRole.asymSigKeys!!.public.decodeBase64()))
        }

        /** get public key of deleted roles by name or token */
        run {
            assert(
                mm!!.getPublicKey(
                    name = deletedRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = deletedRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                mm!!.getPublicKey(
                    name = deletedRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                mm!!.getPublicKey(
                    token = deletedRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null)
        }
    }

    @Test
    open fun `get version number of non-existing, operational and deleted roles and files by name or token works`() {
        val roleNonExisting = Role("roleNonExisting")
        val roleOperational = addRole("roleOperational", 2)
        val roleDeleted = addRole("roleDeleted")
        assert(mm!!.deleteRoleTuples(roleName = roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        val fileNonExisting = File("fileNonExisting", enforcement = EnforcementType.COMBINED)
        val fileOperational = addFile("fileOperational", 3)
        val fileDeleted = addFile("fileDeleted")
        assert(mm!!.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get version number of non-existing roles by name or token */
        run {
            assert(
                mm!!.getVersionNumber(
                    name = roleNonExisting.name, elementType = ElementTypeWithVersionNumber.ROLE,
                ) == null)
            assert(
                mm!!.getVersionNumber(
                    token = roleNonExisting.token, elementType = ElementTypeWithVersionNumber.ROLE,
                ) == null)
        }

        /** get version number of operational roles by name or token */
        run {
            val versionNumbersByName = mm!!.getVersionNumber(
                name = roleOperational.name, elementType = ElementTypeWithVersionNumber.ROLE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == roleOperational.versionNumber)

            val versionNumbersByToken = mm!!.getVersionNumber(
                token = roleOperational.token, elementType = ElementTypeWithVersionNumber.ROLE
            )
            assert(versionNumbersByToken != null)
            assert(versionNumbersByToken == roleOperational.versionNumber)
        }

        /** get version number of deleted roles by name or token */
        run {
            assert(
                mm!!.getVersionNumber(
                    name = roleDeleted.name, elementType = ElementTypeWithVersionNumber.ROLE,
                ) == null)
            assert(
                mm!!.getVersionNumber(
                    token = roleDeleted.token, elementType = ElementTypeWithVersionNumber.ROLE,
                ) == null)
        }

        /** get version number of non-existing files by name or token */
        run {
            assert(
                mm!!.getVersionNumber(
                    name = fileNonExisting.name, elementType = ElementTypeWithVersionNumber.FILE,
                ) == null)
            assert(
                mm!!.getVersionNumber(
                    token = fileNonExisting.token, elementType = ElementTypeWithVersionNumber.FILE,
                ) == null)
        }

        /** get version number of operational files by name or token */
        run {
            val versionNumbersByName = mm!!.getVersionNumber(
                name = fileOperational.name, elementType = ElementTypeWithVersionNumber.FILE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == fileOperational.symEncKeyVersionNumber)

            val versionNumbersByToken = mm!!.getVersionNumber(
                token = fileOperational.token, elementType = ElementTypeWithVersionNumber.FILE
            )
            assert(versionNumbersByToken != null)
            assert(versionNumbersByToken == fileOperational.symEncKeyVersionNumber)
        }

        /** get version number of deleted files by name or token */
        run {
            assert(
                mm!!.getVersionNumber(
                    name = fileDeleted.name, elementType = ElementTypeWithVersionNumber.FILE,
                ) == null)
            assert(
                mm!!.getVersionNumber(
                    token = fileDeleted.token, elementType = ElementTypeWithVersionNumber.FILE,
                ) == null)
        }

    }

    @Test
    open fun `get token of non-existing, operational and deleted roles and files by name works`() {
        val roleNonExisting = Role("roleNonExisting")
        val roleOperational = addRole("roleOperational", 2)
        val roleDeleted = addRole("roleDeleted")
        assert(mm!!.deleteRoleTuples(roleName = roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        val fileNonExisting = File("fileNonExisting", enforcement = EnforcementType.COMBINED)
        val fileOperational = addFile("fileOperational", 3)
        val fileDeleted = addFile("fileDeleted")
        assert(mm!!.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get token of non-existing roles by name */
        run {
            assert(
                mm!!.getToken(
                    name = roleNonExisting.name, type = ElementTypeWithStatus.ROLE,
                ) == null)
        }

        /** get token of operational roles by name */
        run {
            val versionNumbersByName = mm!!.getToken(
                name = roleOperational.name, type = ElementTypeWithStatus.ROLE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == roleOperational.token)
        }

        /** get token of deleted roles by name */
        run {
            assert(
                mm!!.getToken(
                    name = roleDeleted.name, type = ElementTypeWithStatus.ROLE,
                ) == null)
        }

        /** get token of non-existing files by name */
        run {
            assert(
                mm!!.getToken(
                    name = fileNonExisting.name, type = ElementTypeWithStatus.FILE,
                ) == null)
        }

        /** get token of operational files by name */
        run {
            val versionNumbersByName = mm!!.getToken(
                name = fileOperational.name, type = ElementTypeWithStatus.FILE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == fileOperational.token)
        }

        /** get token of deleted files by name */
        run {
            assert(
                mm!!.getToken(
                    name = fileDeleted.name, type = ElementTypeWithStatus.FILE,
                ) == null)
        }

    }

    @Test
    open fun `get element status with existing, deleted and non-existing elements works`() {

        /** get status of administrator user */
        run {
            val statusResult = mm!!.getStatus(Constants.ADMIN, ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of administrator role */
        run {
            val statusResult = mm!!.getStatus(Constants.ADMIN, ElementTypeWithStatus.ROLE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of non-existing user */
        run {
            val statusResult = mm!!.getStatus("not-existing", ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** get status of existing but incomplete user */
        run {
            assert(mm!!.addUser(Parameters.aliceUser).code == OutcomeCode.CODE_000_SUCCESS)
            val statusResult = mm!!.getStatus(Parameters.aliceUser.name, ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.INCOMPLETE)
        }

        /** get status of operational user */
        run {
            addAndInitUser(Parameters.bobUser)
            val statusResult = mm!!.getStatus(Parameters.bobUser.name, ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of deleted user */
        run {
            addAndInitUser(Parameters.carlUser)
            assert(mm!!.deleteUser(Parameters.carlUser.name) == OutcomeCode.CODE_000_SUCCESS)
            val statusResult = mm!!.getStatus(Parameters.carlUser.name, ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.DELETED)
        }

        /** get status of non-existing role */
        run {
            val statusResult = mm!!.getStatus("not-existing", ElementTypeWithStatus.ROLE)
            assert(statusResult.code == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** get status of operational role */
        run {
            val roleOperational = addRole("roleOperational")
            val statusResult = mm!!.getStatus(roleOperational.name, ElementTypeWithStatus.ROLE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of deleted role */
        run {
            val roleDeleted = addRole("roleDeleted")
            assert(mm!!.deleteRoleTuples(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            val statusResult = mm!!.getStatus(roleDeleted.name, ElementTypeWithStatus.ROLE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.DELETED)
        }

        /** get status of non-existing file */
        run {
            val statusResult = mm!!.getStatus("not-existing", ElementTypeWithStatus.FILE)
            assert(statusResult.code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** get status of operational file */
        run {
            val fileOperational = addFile("fileOperational")
            val statusResult = mm!!.getStatus(fileOperational.name, ElementTypeWithStatus.FILE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of deleted file */
        run {
            val fileDeleted = addFile("fileDeleted")
            assert(mm!!.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            val statusResult = mm!!.getStatus(fileDeleted.name, ElementTypeWithStatus.FILE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.DELETED)
        }
    }


    @Test
    open fun `delete incomplete and operational users by name works`() {
        val incompleteUser = Parameters.aliceUser
        mm!!.addUser(incompleteUser)
        val operationalUser = Parameters.bobUser
        addAndInitUser(operationalUser)

        /** delete incomplete users */
        run {
            assert(mm!!.deleteUser(incompleteUser.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteUsers = mm!!.getUsers(username = incompleteUser.name, status = ElementStatus.DELETED)
            assert(deleteUsers.size == 1)
            assert(deleteUsers.firstOrNull()!!.name == incompleteUser.name)
        }

        /** delete operational users */
        run {
            assert(mm!!.deleteUser(operationalUser.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteUsers = mm!!.getUsers(username = operationalUser.name, status = ElementStatus.DELETED)
            assert(deleteUsers.size == 1)
            assert(deleteUsers.firstOrNull()!!.name == operationalUser.name)
        }
    }

    @Test
    open fun `delete non-existing and deleted user by name fails`() {
        val nonExistingUser = Parameters.aliceUser
        val deletedUser = Parameters.bobUser
        addAndInitUser(deletedUser)
        assert(mm!!.deleteUser(deletedUser.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing users */
        run {
            assert(mm!!.deleteUser(nonExistingUser.name) == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** delete deleted users */
        run {
            assert(mm!!.deleteUser(deletedUser.name) == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }
    }

    @Test
    open fun `delete the administrator user by name fails`() {
        /** delete the administrator user */
        run {
            assert(mm!!.deleteUser(Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }



    @Test
    open fun `delete operational roles by name works`() {
        val operational = addRole("operational")

        /** delete operational roles */
        run {
            assert(mm!!.deleteRoleTuples(roleName= operational.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.deleteRole(operational.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteRoles = mm!!.getRoles(roleName = operational.name, status = ElementStatus.DELETED)
            assert(deleteRoles.size == 1)
            assert(deleteRoles.firstOrNull()!!.name == operational.name)
        }
    }

    @Test
    open fun `delete non-existing and deleted roles by name fails`() {
        val nonExisting = Role("nonExisting")
        val deleted = addRole("operational")
        assert(mm!!.deleteRoleTuples(roleName= deleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.deleteRole(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing roles */
        run {
            assert(mm!!.deleteRole(nonExisting.name) == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** delete deleted roles */
        run {
            assert(mm!!.deleteRole(deleted.name) == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
    }

    @Test
    open fun `delete the administrator role by name fails`() {
        /** delete the administrator role */
        run {
            assert(mm!!.deleteRole(Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }



    @Test
    open fun `delete operational files by name works`() {
        val operational = addFile("operational")

        /** delete operational files */
        run {
            assert(mm!!.deleteFile(operational.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteFiles = mm!!.getFiles(fileName = operational.name, status = ElementStatus.DELETED)
            assert(deleteFiles.size == 1)
            assert(deleteFiles.firstOrNull()!!.name == operational.name)
        }
    }

    @Test
    open fun `delete non-existing and deleted files by name fails`() {
        val nonExisting = File("nonExisting", enforcement = EnforcementType.COMBINED)
        val deleted = addFile("operational")
        assert(mm!!.deleteFile(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing files */
        run {
            assert(mm!!.deleteFile(nonExisting.name) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** delete deleted files */
        run {
            assert(mm!!.deleteFile(deleted.name) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }



    @Test
    open fun `delete existing role tuples by role name works`() {
        addAndInitUser(Parameters.aliceUser)
        addAndInitUser(Parameters.bobUser)
        val student = addRole("student")
        addRoleTuple(Parameters.aliceUser.name, student)
        addRoleTuple(Parameters.bobUser.name, student)

        /** delete existing role tuples */
        run {
            assert(mm!!.getRoleTuples(roleName = student.name).size == 3)
            assert(mm!!.deleteRoleTuples(roleName = student.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.getRoleTuples(roleName = student.name).size == 0)
        }
    }

    @Test
    open fun `delete non-existing or the admin's role tuples by role name fails`() {

        /** delete non-existing role tuples */
        run {
            assert(mm!!.deleteRoleTuples(roleName = "non-existing") == OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND)
        }

        /** delete the admin's role tuples */
        run {
            assert(mm!!.deleteRoleTuples(roleName = Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }



    @Test
    open fun `delete existing permission tuples by role or file name or role version number works`() {
        val student = addRole("student", 1)
        val director = addRole("director", 1)
        val employee = addRole("employee", 2)
        val exam = addFile("exam")
        addPermissionTuple(student, exam)
        addPermissionTuple(director, exam)
        addPermissionTuple(employee, exam)

        /** delete existing permission tuples by role name */
        run {
            assert(mm!!.getPermissionTuples(fileName = exam.name).size == 3)
            assert(mm!!.deletePermissionTuples(roleName = student.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.getPermissionTuples(fileName = exam.name).size == 2)
        }

        /** delete existing permission tuples by version number */
        run {
            assert(mm!!.deletePermissionTuples(roleVersionNumber = 1) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.getPermissionTuples(fileName = exam.name).size == 1)
        }


        /** delete existing permission tuples by file name */
        run {
            assert(mm!!.deletePermissionTuples(fileName = exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.getPermissionTuples(fileName = exam.name).size == 0)
        }
    }

    @Test
    open fun `delete non-existing or the admin's permission tuples by role name fails`() {

        /** delete non-existing permission tuples */
        run {
            assert(mm!!.deletePermissionTuples(roleName = "non-existing") == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
            assert(mm!!.deletePermissionTuples(roleVersionNumber = 1) == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
            assert(mm!!.deletePermissionTuples(fileName = "non-existing") == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }

        /** delete the admin's role tuples */
        run {
            val exam = addFile("exam")
            addPermissionTuple(Parameters.adminRole, exam)
            assert(mm!!.deletePermissionTuples(roleName = Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }



    @Test
    open fun `delete existing file tuples by file name works`() {
        val exam = addFile("exam")
        addFileTuple(exam)

        /** delete existing file tuples */
        run {
            assert(mm!!.getFileTuples(fileName = exam.name).size == 1)
            assert(mm!!.deleteFileTuples(fileName = exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(mm!!.getFileTuples(fileName = exam.name).size == 0)
        }
    }

    @Test
    open fun `delete non-existing file tuples by file name fails`() {

        /** delete non-existing file tuples */
        run {
            assert(mm!!.deleteFileTuples(fileName = "non-existing") == OutcomeCode.CODE_009_FILETUPLE_NOT_FOUND)
        }
    }



    @Test
    open fun `increment symmetric encryption key version number for operational file works`() {
        val exam = addFile("exam", 1)

        /** increment symmetric encryption key version number for operational file */
        run {
            assert(
                mm!!.getVersionNumber(name = exam.name, elementType = ElementTypeWithVersionNumber.FILE) == 1
            )
            assert(mm!!.incrementSymEncVersionNumberByOne(exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                mm!!.getVersionNumber(name = exam.name, elementType = ElementTypeWithVersionNumber.FILE) == 2
            )
        }
    }

    @Test
    open fun `increment symmetric encryption key version number for non-existing or deleted file fails`() {
        val exam = addFile("exam", 1)
        assert(mm!!.deleteFile(exam.name) == OutcomeCode.CODE_000_SUCCESS)

        /** increment symmetric encryption key version number for non-existing file */
        run {
            assert(mm!!.incrementSymEncVersionNumberByOne("non-existing") == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** increment symmetric encryption key version number for deleted file */
        run {
            assert(mm!!.incrementSymEncVersionNumberByOne(exam.name) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }



    @Test
    open fun `update public keys of operational roles by name works`() {
        val roleOperational = addRole("roleOperational")

        /** update public keys of operational roles by name */
        run {
            val asymEncKeysBytesByName = mm!!.getPublicKey(
                name = roleOperational.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(roleOperational.asymEncKeys!!.public.decodeBase64()))

            val asymSigKeysBytesByName = mm!!.getPublicKey(
                name = roleOperational.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(roleOperational.asymSigKeys!!.public.decodeBase64()))

            val newAsymEncKeys = Parameters.cryptoObject.generateAsymEncKeys()
            val newAsymSigKeys = Parameters.cryptoObject.generateAsymSigKeys()
            assert(
                mm!!.updateRoleAsymKeys(roleOperational.name, newAsymEncKeys.public, newAsymSigKeys.public) ==
                        OutcomeCode.CODE_000_SUCCESS
            )

            val newAsymEncKeysBytesByName = mm!!.getPublicKey(
                name = roleOperational.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(newAsymEncKeysBytesByName != null)
            assert(newAsymEncKeysBytesByName.contentEquals(newAsymEncKeys.public.encoded))

            val newAsymSigKeysBytesByName = mm!!.getPublicKey(
                name = roleOperational.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(newAsymSigKeysBytesByName != null)
            assert(newAsymSigKeysBytesByName.contentEquals(newAsymSigKeys.public.encoded))
        }
    }

    @Test
    open fun `update public keys of deleted roles by name works`() {
        val roleDeleted = addRole("roleDeleted")
        assert(mm!!.deleteRoleTuples(roleName = roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** update public keys of deleted roles by name */
        run {
            val newAsymEncKeys = Parameters.cryptoObject.generateAsymEncKeys()
            val newAsymSigKeys = Parameters.cryptoObject.generateAsymSigKeys()

            assert(
                mm!!.updateRoleAsymKeys(
                    roleName = roleDeleted.name,
                    newAsymEncPublicKey = newAsymEncKeys.public, newAsymSigPublicKey = newAsymSigKeys.public,
                ) == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
    }

    @Test
    open fun `update existing permission tuple works`() {
        val student = addRole("student")
        val exam = addFile("exam")
        val studentExamPermissionTuple = addPermissionTuple(student, exam, PermissionType.READ)

        /** update existing permission tuple */
        run {
            val getBefore = mm!!.getPermissionTuples(roleName = student.name, fileName = exam.name)
            assert(getBefore.filter { it.roleName == student.name }.size == 1)
            assert(getBefore.firstOrNull { it.roleName == student.name }!!.permission == PermissionType.READ)

            val newPermissionTuple = PermissionTuple(
                roleName = student.name, fileName = exam.name,
                roleToken = student.token, fileToken = exam.token,
                permission = PermissionType.READWRITE,
                roleVersionNumber = student.versionNumber, symKeyVersionNumber = exam.symEncKeyVersionNumber,
                encryptedSymKey = studentExamPermissionTuple.encryptedSymKey
            )
            val signature = Parameters.cryptoObject.createSignature(newPermissionTuple.getBytesForSignature(), Parameters.adminAsymSigKeys.private)
            newPermissionTuple.updateSignature(signature, Constants.ADMIN, ElementTypeWithKey.USER)
            assert(mm!!.updatePermissionTuple(newPermissionTuple) == OutcomeCode.CODE_000_SUCCESS)

            val getAfter = mm!!.getPermissionTuples(roleName = student.name, fileName = exam.name)
            assert(getAfter.filter { it.roleName == student.name }.size == 1)
            assert(getAfter.firstOrNull { it.roleName == student.name }!!.permission == PermissionType.READWRITE)
        }
    }

    @Test
    open fun `update non-existing permission tuple works`() {
        /** update non-existing permission tuple */
        run {
            val roleNonExisting = TestUtilities.createRole("non-existing-role")
            val fileNonExisting = TestUtilities.createFile("non-existing-file", enforcement = EnforcementType.COMBINED)
            val nonExistingPermissionTuple =
                TestUtilities.createPermissionTuple(roleNonExisting, fileNonExisting)
            assert(mm!!.updatePermissionTuple(nonExistingPermissionTuple) == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }
    }



    @Test
    fun lock() {
        // TODO
    }

    @Test
    fun rollback() {
        // TODO
    }

    @Test
    fun unlock() {
        // TODO
    }



    private fun addRole(roleName: String, roleVersionNumber: Int = 1): Role {
        val newRole = TestUtilities.createRole(roleName, roleVersionNumber)
        val newRoleTuple = TestUtilities.createRoleTuple(Constants.ADMIN, newRole)
        assert(mm!!.addRole(newRole) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm!!.addRoleTuples(HashSet<RoleTuple>().apply { add(newRoleTuple) }) == OutcomeCode.CODE_000_SUCCESS)
        return newRole
    }

    private fun addFile(fileName: String, symEncKeyVersionNumber: Int = 1): File {
        val newFile = TestUtilities.createFile(fileName, symEncKeyVersionNumber, enforcement = EnforcementType.COMBINED)
        assert(mm!!.addFile(newFile) == OutcomeCode.CODE_000_SUCCESS)
        return newFile
    }

    private fun addRoleTuple(username: String, role: Role): RoleTuple {
        val roleTuple = TestUtilities.createRoleTuple(username, role)
        assert(mm!!.addRoleTuples(HashSet<RoleTuple>().apply { add(roleTuple) }) == OutcomeCode.CODE_000_SUCCESS)
        return roleTuple
    }

    private fun addPermissionTuple(role: Role, file: File, permission: PermissionType = PermissionType.READ): PermissionTuple {
        val permissionTuple = TestUtilities.createPermissionTuple(role, file, permission)
        assert(mm!!.addPermissionTuples(HashSet<PermissionTuple>().apply { add(permissionTuple) }) == OutcomeCode.CODE_000_SUCCESS)
        return permissionTuple
    }

    private fun addFileTuple(file: File, enforcementType: EnforcementType = EnforcementType.COMBINED): FileTuple {
        val fileTuple = TestUtilities.createFileTuple(file, enforcementType)
        assert(mm!!.addFileTuples(HashSet<FileTuple>().apply { add(fileTuple) }) == OutcomeCode.CODE_000_SUCCESS)
        return fileTuple
    }

    private fun addAndInitUser(user: User): MMInterface {
        val addUserResult = mm!!.addUser(user)
        assert(addUserResult.code == OutcomeCode.CODE_000_SUCCESS)
        val userMetadataStorage = MMInterfaceMySQL(addUserResult.parameters as MMInterfaceMySQLParameters)
        assert(userMetadataStorage.lock() == OutcomeCode.CODE_000_SUCCESS)
        userMetadataStorage.initUser(user)
        assert(userMetadataStorage.unlock() == OutcomeCode.CODE_000_SUCCESS)
        return userMetadataStorage
    }

    // TODO test paginazione (limit e offset)
}