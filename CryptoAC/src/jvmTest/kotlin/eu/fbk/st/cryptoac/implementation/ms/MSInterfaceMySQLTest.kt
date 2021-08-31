package eu.fbk.st.cryptoac.implementation.ms

import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.Parameters.MS_PORT
import eu.fbk.st.cryptoac.Parameters.MS_URL
import eu.fbk.st.cryptoac.Parameters.cryptoObject
import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.implementation.StorageUtilities
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import java.sql.SQLException

internal class MSInterfaceMySQLTest: MSInterfaceTest() {
    
    private val ms = MSInterfaceMySQL(Parameters.msInterfaceMySQLParameters)
    private val aliceEncKeys = cryptoObject.generateAsymEncKeys()
    private val aliceSigKeys = cryptoObject.generateAsymSigKeys()
    val alice = User(
        name = "alice",
        asymEncKeys = AsymKeys(private = aliceEncKeys.private.encoded, public = aliceEncKeys.private.encoded, AsymKeysType.ENC),
        asymSigKeys = AsymKeys(private = aliceSigKeys.private.encoded, public = aliceSigKeys.private.encoded, AsymKeysType.SIG),
    )
    private val bobEncKeys = cryptoObject.generateAsymEncKeys()
    private val bobSigKeys = cryptoObject.generateAsymSigKeys()
    private val bob = User(
        name = "bob",
        asymEncKeys = AsymKeys(private = bobEncKeys.private.encoded, public = bobEncKeys.private.encoded, AsymKeysType.ENC),
        asymSigKeys = AsymKeys(private = bobSigKeys.private.encoded, public = bobSigKeys.private.encoded, AsymKeysType.SIG),
    )
    private val carlEncKeys = cryptoObject.generateAsymEncKeys()
    private val carlSigKeys = cryptoObject.generateAsymSigKeys()
    private val carl = User(
        name = "carl",
        asymEncKeys = AsymKeys(private = carlEncKeys.private.encoded, public = carlEncKeys.private.encoded, AsymKeysType.ENC),
        asymSigKeys = AsymKeys(private = carlSigKeys.private.encoded, public = carlSigKeys.private.encoded, AsymKeysType.SIG),
    )
    private val deniseEncKeys = cryptoObject.generateAsymEncKeys()
    private val deniseSigKeys = cryptoObject.generateAsymSigKeys()
    private val denise = User(
        name = "denise",
        asymEncKeys = AsymKeys(private = deniseEncKeys.private.encoded, public = deniseEncKeys.private.encoded, AsymKeysType.ENC),
        asymSigKeys = AsymKeys(private = deniseSigKeys.private.encoded, public = deniseSigKeys.private.encoded, AsymKeysType.SIG),
    )
    
    
    @BeforeEach
    override fun setUp() {
        // TODO
    }

    @AfterEach
    override fun tearDown() {
        // TODO
    }



    override fun `init user of existing user works`() {
        /** init user of existing user */
        run {
            addAndInitUser(alice)
        }
    }
    override fun `init user of non-existing or already initialized user fails`() {

        /** init user of non-existing user */
        run {
            val nonExistingUserMetadataStorage = MSInterfaceMySQL(
                MSInterfaceMySQLParameters(
                    username = "non-existing", password = "password",
                    port = MS_PORT, url = MS_URL,
                )
            )
            assert(nonExistingUserMetadataStorage.lock() == OutcomeCode.CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED)
        }

        /** init user of already initialized user */
        run {
            val bobMetadataStorageMySQL = addAndInitUser(bob)
            assert(bobMetadataStorageMySQL.lock() == OutcomeCode.CODE_000_SUCCESS)
            assert(bobMetadataStorageMySQL.initUser(bob) == OutcomeCode.CODE_004_USER_NOT_FOUND)
            assert(bobMetadataStorageMySQL.unlock() == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    override fun `is admin of admin user is true, while is admin of other users, non-existing or deleted is false or fails`() {
        /** is admin of admin user */
        run {
            val isAdminResult = ms.isUserAdmin(Constants.ADMIN)
            assert(isAdminResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(isAdminResult.boolean!!)
        }

        /** is admin of other user */
        run {
            assert(ms.addUser(alice).code == OutcomeCode.CODE_000_SUCCESS)
            val isAdminResult = ms.isUserAdmin(alice.name)
            assert(isAdminResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(!isAdminResult.boolean!!)
        }

        /** is admin of non-existing user */
        run {
            val isAdminResult = ms.isUserAdmin("bob")
            assert(isAdminResult.code == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** is admin of deleted user */
        run {
            assert(ms.deleteUser(alice.name) == OutcomeCode.CODE_000_SUCCESS)
            val isAdminResult = ms.isUserAdmin(alice.name)
            assert(isAdminResult.code == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }
    }

    override fun `add user once works`() {
        /** add user once */
        run {
            assert(ms.addUser(alice).code == OutcomeCode.CODE_000_SUCCESS)
        }
    }
    override fun `add user twice or with admin name or with same name as previously deleted user fails`() {

        /** add user twice */
        run {
            assert(ms.addUser(alice).code == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.addUser(alice).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with admin name */
        run {
            assert(ms.addUser(Parameters.adminUser).code == OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with same name as previously deleted user */
        run {
            addAndInitUser(bob)
            assert(ms.deleteUser(bob.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.addUser(bob).code == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }

    override fun `add role once works`() {
        /** add role once */
        run {
            addRole("employee")
        }
    }
    override fun `add role twice or with admin name or same name as previously deleted role fails`() {
        val studentRole = addRole("student")

        /** add role twice */
        run {
            assert(ms.addRole(studentRole) == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with admin name */
        run {
            assert(ms.addRole(Parameters.adminRole) == OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with same name as previously deleted role */
        run {
            assert(ms.deleteRoleTuples(roleName = studentRole.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.deleteRole(studentRole.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.addRole(studentRole) == OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }

    override fun `add file once works`() {
        /** add file once */
        run {
            addFile("exam")
        }
    }
    override fun `add file twice or with same name as previously deleted file fails`() {
        val exam = addFile("exam")

        /** add file twice */
        run {
            assert(ms.addFile(exam) == OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
        }

        /** add file with same name as previously deleted file */
        run {
            assert(ms.deleteFile(exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.addFile(exam) == OutcomeCode.CODE_015_FILE_WAS_DELETED)
        }
    }

    override fun `add no, one or multiple role tuples work`() {
        assert(ms.addUser(User("Alice")).code == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.addUser(User("Bob")).code == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.addUser(User("Carl")).code == OutcomeCode.CODE_000_SUCCESS)
        val roleEmployee = addRole("employee")

        /** add no role tuples */
        run {
            assert(ms.addRoleTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one role tuple */
        run {
            addRoleTuple("Alice", roleEmployee)
        }

        /** add multiple role tuples */
        run {
            val bobRoleTuple = StorageUtilities.createRoleTuple("Bob", roleEmployee)
            val carlRoleTuple = StorageUtilities.createRoleTuple("Carl", roleEmployee)
            assert(
                ms.addRoleTuples(HashSet<RoleTuple>().apply { add(bobRoleTuple) }.apply { add(carlRoleTuple) }) ==
                        OutcomeCode.CODE_000_SUCCESS
            )
        }

    }
    override fun `add role tuple twice fails`() {
        assert(ms.addUser(User("Alice")).code == OutcomeCode.CODE_000_SUCCESS)
        val roleEmployee = addRole("employee")

        /** add role tuple twice */
        run {
            val aliceRoleTuple = addRoleTuple("Alice", roleEmployee)
            assert(
                ms.addRoleTuples(HashSet<RoleTuple>().apply { add(aliceRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }
    }
    override fun `add role tuple with non-existing or deleted user or role fails`() {
        addAndInitUser(alice)
        val userDeleted = bob
        addAndInitUser(userDeleted)
        assert(ms.deleteUser(userDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        val roleDeleted = addRole("role")
        assert(ms.deleteRoleTuples(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        val roleEmployee = addRole("employee")
        val roleNonExisting = StorageUtilities.createRole("non-existing")

        /** add role tuple with non-existing user */
        run {
            val nonExistingUserRoleTuple = StorageUtilities.createRoleTuple("non-existing", roleEmployee)
            assert(
                ms.addRoleTuples(HashSet<RoleTuple>().apply { add(nonExistingUserRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }

        /** add role tuple with deleted user */
        run {
            val deleteUserRoleTuple = StorageUtilities.createRoleTuple(userDeleted.name, roleEmployee)
            assert(
                ms.addRoleTuples(HashSet<RoleTuple>().apply { add(deleteUserRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }

        /** add role tuple with non-existing role */
        run {
            val nonExistingRoleRoleTuple = StorageUtilities.createRoleTuple(alice.name, roleNonExisting)
            assert(
                ms.addRoleTuples(HashSet<RoleTuple>().apply { add(nonExistingRoleRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }

        /** add role tuple with deleted role */
        run {
            val userDeletedRoleTuple = StorageUtilities.createRoleTuple(alice.name, roleDeleted)
            assert(
                ms.addRoleTuples(HashSet<RoleTuple>().apply { add(userDeletedRoleTuple) }) ==
                        OutcomeCode.CODE_048_USER_OR_ROLE_NOT_FOUND_OR_ROLETUPLE_ALREADY_EXISTS
            )
        }
    }

    override fun `add no, one or multiple permission tuples work`() {
        val roleEmployee = addRole("employee")
        val roleStudent = addRole("student")
        val roleDirector = addRole("director")

        val fileExam = addFile("exam")

        /** add no permission tuples */
        run {
            assert(ms.addPermissionTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one permission tuple */
        run {
            addPermissionTuple(roleEmployee, fileExam)
        }

        /** add multiple permission tuples */
        run {
            val studentPermissionTuple = StorageUtilities.createPermissionTuple(roleStudent, fileExam)
            val directoryPermissionTuple = StorageUtilities.createPermissionTuple(roleDirector, fileExam)
            assert(
                ms.addPermissionTuples(HashSet<PermissionTuple>()
                    .apply { add(studentPermissionTuple) }
                    .apply { add(directoryPermissionTuple) }) == OutcomeCode.CODE_000_SUCCESS
            )
        }
    }
    override fun `add permission tuple twice fails`() {
        val roleEmployee = addRole("employee")
        val fileExam = addFile("exam")

        /** add permission tuple twice */
        run {
            val employeePermissionTuple = addPermissionTuple(roleEmployee, fileExam)
            assert(
                ms.addPermissionTuples(HashSet<PermissionTuple>().apply { add(employeePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }
    }
    override fun `add permission tuple with non-existing or deleted role or file fails`() {
        val roleEmployee = addRole("employee")
        val roleDeleted = addRole("role-deleted")
        assert(ms.deleteRoleTuples(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        val roleNonExisting = StorageUtilities.createRole("non-existing-role")

        val fileExam = addFile("exam")
        val fileNonExisting = StorageUtilities.createFile("non-existing-file")
        val fileDeleted = addFile("file-deleted")
        assert(ms.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** add permission tuple with non-existing role */
        run {
            val nonExistingRolePermissionTuple = StorageUtilities.createPermissionTuple(roleNonExisting, fileExam)
            assert(
                ms.addPermissionTuples(HashSet<PermissionTuple>().apply { add(nonExistingRolePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }

        /** add permission tuple with deleted role */
        run {
            val deletedRolePermissionTuple = StorageUtilities.createPermissionTuple(roleNonExisting, fileExam)
            assert(
                ms.addPermissionTuples(HashSet<PermissionTuple>().apply { add(deletedRolePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }

        /** add permission tuple with non-existing file */
        run {
            val nonExistingFilePermissionTuple =
                StorageUtilities.createPermissionTuple(roleEmployee, fileNonExisting)
            assert(
                ms.addPermissionTuples(HashSet<PermissionTuple>().apply { add(nonExistingFilePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }

        /** add permission tuple with deleted file */
        run {
            val deletedFilePermissionTuple = StorageUtilities.createPermissionTuple(roleEmployee, fileDeleted)
            assert(
                ms.addPermissionTuples(HashSet<PermissionTuple>().apply { add(deletedFilePermissionTuple) }) ==
                        OutcomeCode.CODE_049_ROLE_OR_FILE_NOT_FOUND_OR_PERMISSIONTUPLE_ALREADY_EXISTS
            )
        }
    }

    override fun `add no, one or multiple file tuples work`() {
        val fileExam = addFile("exam")
        val fileDocument = addFile("document")
        val fileExcel = addFile("excel")


        /** add no file tuples */
        run {
            assert(ms.addFileTuples(HashSet()) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** add one file tuple */
        run {
            addFileTuple(fileExam)
        }

        /** add multiple file tuples */
        run {
            val documentFileTuple = StorageUtilities.createFileTuple(fileDocument)
            val excelFileTuple = StorageUtilities.createFileTuple(fileExcel)
            assert(
                ms.addFileTuples(HashSet<FileTuple>()
                    .apply { add(documentFileTuple) }.apply { add(excelFileTuple) }) == OutcomeCode.CODE_000_SUCCESS
            )
        }

    }
    override fun `add file tuple twice fails`() {
        val fileExam = addFile("exam")

        /** add file tuple twice */
        run {
            val examFileTuple = addFileTuple(fileExam)
            assert(
                ms.addFileTuples(HashSet<FileTuple>().apply { add(examFileTuple) }) ==
                        OutcomeCode.CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS
            )
        }
    }
    override fun `add file tuple with non-existing or deleted file fails`() {
        addFile("exam")
        val fileNonExisting = StorageUtilities.createFile("non-existing-file")
        val fileDeleted = addFile("deleted-file")
        assert(ms.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** add file tuple with non-existing file */
        run {
            val nonExistingFileFileTuple = StorageUtilities.createFileTuple(fileNonExisting)
            assert(
                ms.addFileTuples(HashSet<FileTuple>().apply { add(nonExistingFileFileTuple) }) ==
                        OutcomeCode.CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS
            )
        }

        /** add file tuple with deleted file */
        run {
            val deletedFileFileTuple = StorageUtilities.createFileTuple(fileDeleted)
            assert(
                ms.addFileTuples(HashSet<FileTuple>().apply { add(deletedFileFileTuple) }) ==
                        OutcomeCode.CODE_050_FILE_NOT_FOUND_OR_FILETUPLE_ALREADY_EXISTS
            )
        }
    }

    override fun `get not-existing, incomplete, operational and deleted user by name or token works`() {
        val incompleteUser = alice
        ms.addUser(incompleteUser)
        val operationalUser = bob
        addAndInitUser(operationalUser)
        val deletedUser = carl
        addAndInitUser(deletedUser)
        assert(ms.deleteUser(deletedUser.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing user by name or token */
        run {
            assert(ms.getUsers(username = "non-existing").isEmpty())
            assert(ms.getUsers(userToken = "non-existing").isEmpty())
        }

        /** get incomplete user by name or token */
        run {
            val incompleteUserByName = ms.getUsers(username = incompleteUser.name)
            assert(incompleteUserByName.size == 1)
            /** if the user was not initialized, the token is equal to the name */
            assert(incompleteUserByName.firstOrNull()!!.token == incompleteUser.name)

            val incompleteUserByToken = ms.getUsers(userToken = incompleteUser.name)
            assert(incompleteUserByToken.size == 1)
            assert(incompleteUserByToken.firstOrNull()!!.name == incompleteUser.name)
        }

        /** get operational user by name or token */
        run {
            val operationalUserByName = ms.getUsers(username = operationalUser.name)
            assert(operationalUserByName.size == 1)
            assert(operationalUserByName.firstOrNull()!!.token == operationalUser.token)

            val operationalUserByToken = ms.getUsers(userToken = operationalUser.token)
            assert(operationalUserByToken.size == 1)
            assert(operationalUserByToken.firstOrNull()!!.name == operationalUser.name)
        }

        /** get deleted user by name or token */
        run {
            assert(ms.getUsers(username = deletedUser.name).size == 0)
            assert(ms.getUsers(userToken = deletedUser.token).size == 0)

            val deletedUserByToken = ms.getUsers(userToken = deletedUser.token, status = ElementStatus.DELETED)
            assert(deletedUserByToken.size == 1)
            assert(deletedUserByToken.firstOrNull()!!.name == deletedUser.name)
            val deletedUserByName = ms.getUsers(username = deletedUser.name, status = ElementStatus.DELETED)
            assert(deletedUserByName.size == 1)
            assert(deletedUserByName.firstOrNull()!!.name == deletedUser.name)
        }
    }
    override fun `get all users works`() {
        /** get all users */
        run {
            addAndInitUser(alice)
            addAndInitUser(bob)
            addAndInitUser(carl)

            val allUsers = ms.getUsers()
            assert(allUsers.size == 4)
            assert(allUsers.filter { it.name == alice.name }.size == 1)
            assert(allUsers.filter { it.name == bob.name }.size == 1)
            assert(allUsers.filter { it.name == carl.name }.size == 1)
            assert(allUsers.filter { it.name == Constants.ADMIN }.size == 1)
        }
    }

    override fun `get not-existing, operational and deleted role by name or token works`() {
        val operational = addRole("operational")
        val deleted = addRole("deleted")
        assert(ms.deleteRoleTuples(deleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.deleteRole(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing role by name or token */
        run {
            assert(ms.getRoles(roleName = "non-existing").isEmpty())
            assert(ms.getRoles(roleToken = "non-existing").isEmpty())
        }

        /** get operational role by name or token */
        run {
            val operationalRoleByName = ms.getRoles(roleName = operational.name)
            assert(operationalRoleByName.size == 1)
            assert(operationalRoleByName.firstOrNull()!!.token == operational.token)

            val operationalRoleByToken = ms.getRoles(roleToken = operational.token)
            assert(operationalRoleByToken.size == 1)
            assert(operationalRoleByToken.firstOrNull()!!.name == operational.name)
        }

        /** get deleted role by name or token */
        run {
            assert(ms.getRoles(roleName = deleted.name).size == 0)
            assert(ms.getRoles(roleToken = deleted.token).size == 0)

            val deletedRoleByToken = ms.getRoles(roleToken = deleted.token, status = ElementStatus.DELETED)
            assert(deletedRoleByToken.size == 1)
            assert(deletedRoleByToken.firstOrNull()!!.name == deleted.name)
            val deletedRoleByName = ms.getRoles(roleName = deleted.name, status = ElementStatus.DELETED)
            assert(deletedRoleByName.size == 1)
            assert(deletedRoleByName.firstOrNull()!!.name == deleted.name)
        }
    }
    override fun `get all roles works`() {
        val student = addRole("student")
        val employee  = addRole("employee")
        val director = addRole("director")

        /** get all roles */
        run {
            val allRoles = ms.getRoles()
            /** there is also the admin */
            assert(allRoles.size == 4)
            assert(allRoles.filter { it.name == student.name }.size == 1)
            assert(allRoles.filter { it.name == employee.name }.size == 1)
            assert(allRoles.filter { it.name == director.name }.size == 1)
            assert(allRoles.filter { it.name == Constants.ADMIN }.size == 1)
        }
    }

    override fun `get not-existing, operational and deleted file by name or token works`() {
        val operational = addFile("operational")
        val deleted = addFile("deleted")
        assert(ms.deleteFile(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get not-existing file by name or token */
        run {
            assert(ms.getFiles(fileName = "non-existing").isEmpty())
            assert(ms.getFiles(fileToken = "non-existing").isEmpty())
        }

        /** get operational file by name or token */
        run {
            val operationalFileByName = ms.getFiles(fileName = operational.name)
            assert(operationalFileByName.size == 1)
            assert(operationalFileByName.firstOrNull()!!.token == operational.token)

            val operationalFileByToken = ms.getFiles(fileToken = operational.token)
            assert(operationalFileByToken.size == 1)
            assert(operationalFileByToken.firstOrNull()!!.name == operational.name)
        }

        /** get deleted file by name or token */
        run {
            assert(ms.getFiles(fileName = deleted.name).isEmpty())
            assert(ms.getFiles(fileToken = deleted.token).isEmpty())

            val deletedFileByName = ms.getFiles(fileName = deleted.name, status = ElementStatus.DELETED)
            assert(deletedFileByName.size == 1)
            assert(deletedFileByName.firstOrNull()!!.token == deleted.token)
            val deletedFileByToken = ms.getFiles(fileToken = deleted.token, status = ElementStatus.DELETED)
            assert(deletedFileByToken.size == 1)
            assert(deletedFileByToken.firstOrNull()!!.name == deleted.name)
        }
    }
    override fun `get all files works`() {
        val exam = addFile("exam")
        val document  = addFile("document")
        val excel = addFile("excel")

        /** get all files */
        run {
            val allFiles = ms.getFiles()
            assert(allFiles.size == 3)
            assert(allFiles.filter { it.name == exam.name }.size == 1)
            assert(allFiles.filter { it.name == document.name }.size == 1)
            assert(allFiles.filter { it.name == excel.name }.size == 1)
        }
    }

    override fun `get role tuples of the administrator or of users by username or role name works`() {
        addAndInitUser(alice)
        val student = addRole("student")
        addRoleTuple("alice", student)

        /** get role tuple of the administrator by username or role name */
        run {
            val adminRoleTuplesByUsername = ms.getRoleTuples(username = Constants.ADMIN)
            assert(adminRoleTuplesByUsername.size == 2)
            assert(adminRoleTuplesByUsername.filter { it.roleName == Constants.ADMIN }.size == 1)
            assert(adminRoleTuplesByUsername.filter { it.roleName == student.name }.size == 1)

            val adminRoleTuplesByRoleName = ms.getRoleTuples(roleName = Constants.ADMIN)
            assert(adminRoleTuplesByRoleName.size == 1)
            assert(adminRoleTuplesByRoleName.firstOrNull()!!.username == Constants.ADMIN)
        }

        /** get role tuples of users by username or role name */
        run {
            val aliceRoleTuplesByUsername = ms.getRoleTuples(username = alice.name)
            assert(aliceRoleTuplesByUsername.size == 1)
            assert(aliceRoleTuplesByUsername.filter { it.roleName == student.name }.size == 1)

            val studentRoleTuplesByRoleName = ms.getRoleTuples(roleName = student.name)
            assert(studentRoleTuplesByRoleName.size == 2)
            assert(studentRoleTuplesByRoleName.filter { it.username == Constants.ADMIN }.size == 1)
            assert(studentRoleTuplesByRoleName.filter { it.username == alice.name }.size == 1)
        }
    }
    override fun `get permission tuples by role or file name or excluding role name or role or file version number works`() {
        val roleEmployee = addRole("employee")
        val roleStudent = addRole("student")

        val fileExam = addFile("exam")

        addPermissionTuple(roleEmployee, fileExam)
        addPermissionTuple(roleStudent, fileExam)

        /** get permission tuples by role or file name */
        run {
            val examPermissionTuplesByName = ms.getPermissionTuples(fileName = fileExam.name)
            assert(examPermissionTuplesByName.size == 2)
            assert(examPermissionTuplesByName.filter { it.roleName == roleEmployee.name }.size == 1)
            assert(examPermissionTuplesByName.filter { it.roleName == roleStudent.name }.size == 1)
        }

        /** get permission tuples excluding role name */
        run {
            val examPermissionTuplesByName = ms.getPermissionTuples(
                fileName = fileExam.name, roleNameToExclude = roleStudent.name
            )
            assert(examPermissionTuplesByName.size == 1)
            assert(examPermissionTuplesByName.filter { it.roleName == roleEmployee.name }.size == 1)
        }

        /** get permission tuples by role or file version number */
        run {
            assert(ms.getPermissionTuples(roleVersionNumber = 1).size == 2)
            assert(ms.getPermissionTuples(symKeyVersionNumber = 1).size == 2)
        }
    }
    override fun `get file tuples by file name works`() {
        val exam = addFile("exam")
        val document  = addFile("document")
        addFileTuple(exam)
        addFileTuple(document)

        /** get file tuple by file name */
        run {
            val examFileTupleByName = ms.getFileTuples(fileName = exam.name)
            assert(examFileTupleByName.size == 1)
            assert(examFileTupleByName.firstOrNull()!!.fileName == exam.name)

            val documentFileTupleByName = ms.getFileTuples(fileName = document.name)
            assert(documentFileTupleByName.size == 1)
            assert(documentFileTupleByName.firstOrNull()!!.fileName == document.name)

            val allFileTuples = ms.getFileTuples()
            assert(allFileTuples.size == 2)
            assert(allFileTuples.filter { it.fileName == exam.name }.size == 1)
            assert(allFileTuples.filter { it.fileName == document.name }.size == 1)
        }
    }

    override fun `get public key of non-existing, incomplete, operational and deleted users and roles by name or token works`() {
        val nonExistingUser = alice
        val incompleteUser = bob
        val operationalUser = carl
        val deleteUser = denise
        assert(ms.addUser(incompleteUser).code == OutcomeCode.CODE_000_SUCCESS)
        addAndInitUser(operationalUser)
        addAndInitUser(deleteUser)
        assert(ms.deleteUser(deleteUser.name) == OutcomeCode.CODE_000_SUCCESS)

        val nonExistingRole = Role("nonExistingRole")
        val operationalRole = addRole("operationalRole")
        val deletedRole = addRole("deletedRole")
        assert(ms.deleteRoleTuples(roleName = deletedRole.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.deleteRole(deletedRole.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get public key of non-existing users by name or token */
        run {
            assert(
                ms.getPublicKey(
                    name = nonExistingUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    token = nonExistingUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    name = nonExistingUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                ms.getPublicKey(
                    token = nonExistingUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
        }

        /** get public key of incomplete users by name or token */
        run {
            assert(
                ms.getPublicKey(
                    name = incompleteUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    token = incompleteUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    name = incompleteUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                ms.getPublicKey(
                    token = incompleteUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
        }

        /** get public key of operational users by name or token */
        run {
            val asymEncKeysBytesByName = ms.getPublicKey(
                name = operationalUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(operationalUser.asymEncKeys!!.public))

            val asymEncKeysBytesByToken = ms.getPublicKey(
                token = operationalUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByToken != null)
            assert(asymEncKeysBytesByToken.contentEquals(operationalUser.asymEncKeys!!.public))

            val asymSigKeysBytesByName = ms.getPublicKey(
                name = operationalUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(operationalUser.asymSigKeys!!.public))

            val asymSigKeysBytesByToken = ms.getPublicKey(
                token = operationalUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByToken != null)
            assert(asymSigKeysBytesByToken.contentEquals(operationalUser.asymSigKeys!!.public))
        }

        /** get public key of deleted users by name or token */
        run {
            assert(
                ms.getPublicKey(
                    name = deleteUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    token = deleteUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    name = deleteUser.name, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                ms.getPublicKey(
                    token = deleteUser.token, elementType = ElementTypeWithKey.USER, asymKeyType = AsymKeysType.SIG
                ) == null)
        }

        /** get public key of non-existing roles by name or token */
        run {
            assert(
                ms.getPublicKey(
                    name = nonExistingRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    token = nonExistingRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    name = nonExistingRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                ms.getPublicKey(
                    token = nonExistingRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null)
        }

        /** get public key of operational roles by name or token */
        run {
            val asymEncKeysBytesByName = ms.getPublicKey(
                name = operationalRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(operationalRole.asymEncKeys!!.public))

            val asymEncKeysBytesByToken = ms.getPublicKey(
                token = operationalRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByToken != null)
            assert(asymEncKeysBytesByToken.contentEquals(operationalRole.asymEncKeys!!.public))

            val asymSigKeysBytesByName = ms.getPublicKey(
                name = operationalRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(operationalRole.asymSigKeys!!.public))

            val asymSigKeysBytesByToken = ms.getPublicKey(
                token = operationalRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByToken != null)
            assert(asymSigKeysBytesByToken.contentEquals(operationalRole.asymSigKeys!!.public))
        }

        /** get public key of deleted roles by name or token */
        run {
            assert(
                ms.getPublicKey(
                    name = deletedRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    token = deletedRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
                ) == null)
            assert(
                ms.getPublicKey(
                    name = deletedRole.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null)
            assert(
                ms.getPublicKey(
                    token = deletedRole.token, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
                ) == null)
        }
    }
    override fun `get version number of non-existing, operational and deleted roles and files by name or token works`() {
        val roleNonExisting = Role("roleNonExisting")
        val roleOperational = addRole("roleOperational", 2)
        val roleDeleted = addRole("roleDeleted")
        assert(ms.deleteRoleTuples(roleName = roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        val fileNonExisting = File("fileNonExisting")
        val fileOperational = addFile("fileOperational", 3)
        val fileDeleted = addFile("fileDeleted")
        assert(ms.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get version number of non-existing roles by name or token */
        run {
            assert(
                ms.getVersionNumber(
                    name = roleNonExisting.name, elementType = ElementTypeWithVersionNumber.ROLE,
                ) == null)
            assert(
                ms.getVersionNumber(
                    token = roleNonExisting.token, elementType = ElementTypeWithVersionNumber.ROLE,
                ) == null)
        }

        /** get version number of operational roles by name or token */
        run {
            val versionNumbersByName = ms.getVersionNumber(
                name = roleOperational.name, elementType = ElementTypeWithVersionNumber.ROLE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == roleOperational.versionNumber)

            val versionNumbersByToken = ms.getVersionNumber(
                token = roleOperational.token, elementType = ElementTypeWithVersionNumber.ROLE
            )
            assert(versionNumbersByToken != null)
            assert(versionNumbersByToken == roleOperational.versionNumber)
        }

        /** get version number of deleted roles by name or token */
        run {
            assert(
                ms.getVersionNumber(
                    name = roleDeleted.name, elementType = ElementTypeWithVersionNumber.ROLE,
                ) == null)
            assert(
                ms.getVersionNumber(
                    token = roleDeleted.token, elementType = ElementTypeWithVersionNumber.ROLE,
                ) == null)
        }

        /** get version number of non-existing files by name or token */
        run {
            assert(
                ms.getVersionNumber(
                    name = fileNonExisting.name, elementType = ElementTypeWithVersionNumber.FILE,
                ) == null)
            assert(
                ms.getVersionNumber(
                    token = fileNonExisting.token, elementType = ElementTypeWithVersionNumber.FILE,
                ) == null)
        }

        /** get version number of operational files by name or token */
        run {
            val versionNumbersByName = ms.getVersionNumber(
                name = fileOperational.name, elementType = ElementTypeWithVersionNumber.FILE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == fileOperational.symEncKeyVersionNumber)

            val versionNumbersByToken = ms.getVersionNumber(
                token = fileOperational.token, elementType = ElementTypeWithVersionNumber.FILE
            )
            assert(versionNumbersByToken != null)
            assert(versionNumbersByToken == fileOperational.symEncKeyVersionNumber)
        }

        /** get version number of deleted files by name or token */
        run {
            assert(
                ms.getVersionNumber(
                    name = fileDeleted.name, elementType = ElementTypeWithVersionNumber.FILE,
                ) == null)
            assert(
                ms.getVersionNumber(
                    token = fileDeleted.token, elementType = ElementTypeWithVersionNumber.FILE,
                ) == null)
        }

    }
    override fun `get token of non-existing, operational and deleted roles and files by name works`() {
        val roleNonExisting = Role("roleNonExisting")
        val roleOperational = addRole("roleOperational", 2)
        val roleDeleted = addRole("roleDeleted")
        assert(ms.deleteRoleTuples(roleName = roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        val fileNonExisting = File("fileNonExisting")
        val fileOperational = addFile("fileOperational", 3)
        val fileDeleted = addFile("fileDeleted")
        assert(ms.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** get token of non-existing roles by name */
        run {
            assert(
                ms.getToken(
                    name = roleNonExisting.name, type = ElementTypeWithStatus.ROLE,
                ) == null)
        }

        /** get token of operational roles by name */
        run {
            val versionNumbersByName = ms.getToken(
                name = roleOperational.name, type = ElementTypeWithStatus.ROLE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == roleOperational.token)
        }

        /** get token of deleted roles by name */
        run {
            assert(
                ms.getToken(
                    name = roleDeleted.name, type = ElementTypeWithStatus.ROLE,
                ) == null)
        }

        /** get token of non-existing files by name */
        run {
            assert(
                ms.getToken(
                    name = fileNonExisting.name, type = ElementTypeWithStatus.FILE,
                ) == null)
        }

        /** get token of operational files by name */
        run {
            val versionNumbersByName = ms.getToken(
                name = fileOperational.name, type = ElementTypeWithStatus.FILE
            )
            assert(versionNumbersByName != null)
            assert(versionNumbersByName == fileOperational.token)
        }

        /** get token of deleted files by name */
        run {
            assert(
                ms.getToken(
                    name = fileDeleted.name, type = ElementTypeWithStatus.FILE,
                ) == null)
        }

    }
    override fun `get element status with existing, deleted and non-existing elements works`() {

        /** get status of administrator user */
        run {
            val statusResult = ms.getStatus(Constants.ADMIN, ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of administrator role */
        run {
            val statusResult = ms.getStatus(Constants.ADMIN, ElementTypeWithStatus.ROLE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of non-existing user */
        run {
            val statusResult = ms.getStatus("not-existing", ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** get status of existing but incomplete user */
        run {
            assert(ms.addUser(alice).code == OutcomeCode.CODE_000_SUCCESS)
            val statusResult = ms.getStatus(alice.name, ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.INCOMPLETE)
        }

        /** get status of operational user */
        run {
            addAndInitUser(bob)
            val statusResult = ms.getStatus(bob.name, ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of deleted user */
        run {
            addAndInitUser(carl)
            assert(ms.deleteUser(carl.name) == OutcomeCode.CODE_000_SUCCESS)
            val statusResult = ms.getStatus(carl.name, ElementTypeWithStatus.USER)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.DELETED)
        }

        /** get status of non-existing role */
        run {
            val statusResult = ms.getStatus("not-existing", ElementTypeWithStatus.ROLE)
            assert(statusResult.code == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** get status of operational role */
        run {
            val roleOperational = addRole("roleOperational")
            val statusResult = ms.getStatus(roleOperational.name, ElementTypeWithStatus.ROLE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of deleted role */
        run {
            val roleDeleted = addRole("roleDeleted")
            assert(ms.deleteRoleTuples(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            val statusResult = ms.getStatus(roleDeleted.name, ElementTypeWithStatus.ROLE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.DELETED)
        }

        /** get status of non-existing file */
        run {
            val statusResult = ms.getStatus("not-existing", ElementTypeWithStatus.FILE)
            assert(statusResult.code == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** get status of operational file */
        run {
            val fileOperational = addFile("fileOperational")
            val statusResult = ms.getStatus(fileOperational.name, ElementTypeWithStatus.FILE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.OPERATIONAL)
        }

        /** get status of deleted file */
        run {
            val fileDeleted = addFile("fileDeleted")
            assert(ms.deleteFile(fileDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
            val statusResult = ms.getStatus(fileDeleted.name, ElementTypeWithStatus.FILE)
            assert(statusResult.code == OutcomeCode.CODE_000_SUCCESS)
            assert(statusResult.status == ElementStatus.DELETED)
        }
    }

    override fun `delete incomplete and operational users by name works`() {
        val incompleteUser = alice
        ms.addUser(incompleteUser)
        val operationalUser = bob
        addAndInitUser(operationalUser)

        /** delete incomplete users */
        run {
            assert(ms.deleteUser(incompleteUser.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteUsers = ms.getUsers(username = incompleteUser.name, status = ElementStatus.DELETED)
            assert(deleteUsers.size == 1)
            assert(deleteUsers.firstOrNull()!!.name == incompleteUser.name)
        }

        /** delete operational users */
        run {
            assert(ms.deleteUser(operationalUser.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteUsers = ms.getUsers(username = operationalUser.name, status = ElementStatus.DELETED)
            assert(deleteUsers.size == 1)
            assert(deleteUsers.firstOrNull()!!.name == operationalUser.name)
        }
    }
    override fun `delete non-existing and deleted user by name fails`() {
        val nonExistingUser = alice
        val deletedUser = bob
        addAndInitUser(deletedUser)
        assert(ms.deleteUser(deletedUser.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing users */
        run {
            assert(ms.deleteUser(nonExistingUser.name) == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** delete deleted users */
        run {
            assert(ms.deleteUser(deletedUser.name) == OutcomeCode.CODE_004_USER_NOT_FOUND)
        }
    }
    override fun `delete the administrator user by name fails`() {
        /** delete the administrator user */
        run {
            assert(ms.deleteUser(Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    override fun `delete operational roles by name works`() {
        val operational = addRole("operational")

        /** delete operational roles */
        run {
            assert(ms.deleteRoleTuples(roleName= operational.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.deleteRole(operational.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteRoles = ms.getRoles(roleName = operational.name, status = ElementStatus.DELETED)
            assert(deleteRoles.size == 1)
            assert(deleteRoles.firstOrNull()!!.name == operational.name)
        }
    }
    override fun `delete non-existing and deleted roles by name fails`() {
        val nonExisting = Role("nonExisting")
        val deleted = addRole("operational")
        assert(ms.deleteRoleTuples(roleName= deleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.deleteRole(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing roles */
        run {
            assert(ms.deleteRole(nonExisting.name) == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** delete deleted roles */
        run {
            assert(ms.deleteRole(deleted.name) == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
    }
    override fun `delete the administrator role by name fails`() {
        /** delete the administrator role */
        run {
            assert(ms.deleteRole(Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    override fun `delete operational files by name works`() {
        val operational = addFile("operational")

        /** delete operational files */
        run {
            assert(ms.deleteFile(operational.name) == OutcomeCode.CODE_000_SUCCESS)
            val deleteFiles = ms.getFiles(fileName = operational.name, status = ElementStatus.DELETED)
            assert(deleteFiles.size == 1)
            assert(deleteFiles.firstOrNull()!!.name == operational.name)
        }
    }
    override fun `delete non-existing and deleted files by name fails`() {
        val nonExisting = File("nonExisting")
        val deleted = addFile("operational")
        assert(ms.deleteFile(deleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** delete non-existing files */
        run {
            assert(ms.deleteFile(nonExisting.name) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** delete deleted files */
        run {
            assert(ms.deleteFile(deleted.name) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    override fun `delete existing role tuples by role name works`() {
        addAndInitUser(alice)
        addAndInitUser(bob)
        val student = addRole("student")
        addRoleTuple(alice.name, student)
        addRoleTuple(bob.name, student)

        /** delete existing role tuples */
        run {
            assert(ms.getRoleTuples(roleName = student.name).size == 3)
            assert(ms.deleteRoleTuples(roleName = student.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.getRoleTuples(roleName = student.name).size == 0)
        }
    }
    override fun `delete non-existing or the admin's role tuples by role name fails`() {

        /** delete non-existing role tuples */
        run {
            assert(ms.deleteRoleTuples(roleName = "non-existing") == OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND)
        }

        /** delete the admin's role tuples */
        run {
            assert(ms.deleteRoleTuples(roleName = Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    override fun `delete existing permission tuples by role or file name or role version number works`() {
        val student = addRole("student", 1)
        val director = addRole("director", 1)
        val employee = addRole("employee", 2)
        val exam = addFile("exam")
        addPermissionTuple(student, exam)
        addPermissionTuple(director, exam)
        addPermissionTuple(employee, exam)

        /** delete existing permission tuples by role name */
        run {
            assert(ms.getPermissionTuples(fileName = exam.name).size == 3)
            assert(ms.deletePermissionTuples(roleName = student.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.getPermissionTuples(fileName = exam.name).size == 2)
        }

        /** delete existing permission tuples by version number */
        run {
            assert(ms.deletePermissionTuples(roleVersionNumber = 1) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.getPermissionTuples(fileName = exam.name).size == 1)
        }


        /** delete existing permission tuples by file name */
        run {
            assert(ms.deletePermissionTuples(fileName = exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.getPermissionTuples(fileName = exam.name).size == 0)
        }
    }
    override fun `delete non-existing or the admin's permission tuples by role name fails`() {

        /** delete non-existing permission tuples */
        run {
            assert(ms.deletePermissionTuples(roleName = "non-existing") == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
            assert(ms.deletePermissionTuples(roleVersionNumber = 1) == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
            assert(ms.deletePermissionTuples(fileName = "non-existing") == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }

        /** delete the admin's role tuples */
        run {
            val exam = addFile("exam")
            addPermissionTuple(Parameters.adminRole, exam)
            assert(ms.deletePermissionTuples(roleName = Constants.ADMIN) == OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }

    override fun `delete existing file tuples by file name works`() {
        val exam = addFile("exam")
        addFileTuple(exam)

        /** delete existing file tuples */
        run {
            assert(ms.getFileTuples(fileName = exam.name).size == 1)
            assert(ms.deleteFileTuples(fileName = exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(ms.getFileTuples(fileName = exam.name).size == 0)
        }
    }
    override fun `delete non-existing file tuples by file name fails`() {

        /** delete non-existing file tuples */
        run {
            assert(ms.deleteFileTuples(fileName = "non-existing") == OutcomeCode.CODE_009_FILETUPLE_NOT_FOUND)
        }
    }

    override fun `increment symmetric encryption key version number for operational file works`() {
        val exam = addFile("exam", 1)

        /** increment symmetric encryption key version number for operational file */
        run {
            assert(
                ms.getVersionNumber(name = exam.name, elementType = ElementTypeWithVersionNumber.FILE) == 1
            )
            assert(ms.incrementSymEncVersionNumberByOne(exam.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                ms.getVersionNumber(name = exam.name, elementType = ElementTypeWithVersionNumber.FILE) == 2
            )
        }
    }
    override fun `increment symmetric encryption key version number for non-existing or deleted file fails`() {
        val exam = addFile("exam", 1)
        assert(ms.deleteFile(exam.name) == OutcomeCode.CODE_000_SUCCESS)

        /** increment symmetric encryption key version number for non-existing file */
        run {
            assert(ms.incrementSymEncVersionNumberByOne("non-existing") == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** increment symmetric encryption key version number for deleted file */
        run {
            assert(ms.incrementSymEncVersionNumberByOne(exam.name) == OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    override fun `update public keys of operational roles by name works`() {
        val roleOperational = addRole("roleOperational")

        /** update public keys of operational roles by name */
        run {
            val asymEncKeysBytesByName = ms.getPublicKey(
                name = roleOperational.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(asymEncKeysBytesByName != null)
            assert(asymEncKeysBytesByName.contentEquals(roleOperational.asymEncKeys!!.public))

            val asymSigKeysBytesByName = ms.getPublicKey(
                name = roleOperational.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(asymSigKeysBytesByName != null)
            assert(asymSigKeysBytesByName.contentEquals(roleOperational.asymSigKeys!!.public))

            val newAsymEncKeys = cryptoObject.generateAsymEncKeys()
            val newAsymSigKeys = cryptoObject.generateAsymSigKeys()
            assert(
                ms.updateRoleAsymKeys(roleOperational.name, newAsymEncKeys.public, newAsymSigKeys.public) ==
                        OutcomeCode.CODE_000_SUCCESS
            )

            val newAsymEncKeysBytesByName = ms.getPublicKey(
                name = roleOperational.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.ENC
            )
            assert(newAsymEncKeysBytesByName != null)
            assert(newAsymEncKeysBytesByName.contentEquals(newAsymEncKeys.public.encoded))

            val newAsymSigKeysBytesByName = ms.getPublicKey(
                name = roleOperational.name, elementType = ElementTypeWithKey.ROLE, asymKeyType = AsymKeysType.SIG
            )
            assert(newAsymSigKeysBytesByName != null)
            assert(newAsymSigKeysBytesByName.contentEquals(newAsymSigKeys.public.encoded))
        }
    }
    override fun `update public keys of deleted roles by name works`() {
        val roleDeleted = addRole("roleDeleted")
        assert(ms.deleteRoleTuples(roleName = roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.deleteRole(roleDeleted.name) == OutcomeCode.CODE_000_SUCCESS)

        /** update public keys of deleted roles by name */
        run {
            val newAsymEncKeys = cryptoObject.generateAsymEncKeys()
            val newAsymSigKeys = cryptoObject.generateAsymSigKeys()

            assert(
                ms.updateRoleAsymKeys(
                    roleName = roleDeleted.name,
                    newAsymEncPublicKey = newAsymEncKeys.public, newAsymSigPublicKey = newAsymSigKeys.public,
                ) == OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
    }

    override fun `update existing permission tuple works`() {
        val student = addRole("student")
        val exam = addFile("exam")
        val studentExamPermissionTuple = addPermissionTuple(student, exam, PermissionType.READ)

        /** update existing permission tuple */
        run {
            val getBefore = ms.getPermissionTuples(roleName = student.name, fileName = exam.name)
            assert(getBefore.filter { it.roleName == student.name }.size == 1)
            assert(getBefore.firstOrNull { it.roleName == student.name }!!.permission == PermissionType.READ)

            val newPermissionTuple = PermissionTuple(
                roleName = student.name, fileName = exam.name,
                roleToken = student.token, fileToken = exam.token,
                permission = PermissionType.READWRITE,
                roleVersionNumber = student.versionNumber, symKeyVersionNumber = exam.symEncKeyVersionNumber,
                encryptedSymKey = studentExamPermissionTuple.encryptedSymKey
            )
            val signature = cryptoObject.createSignature(newPermissionTuple.getBytesForSignature(), Parameters.adminAsymSigKeys.private)
            newPermissionTuple.updateSignature(signature, Constants.ADMIN, ElementTypeWithKey.USER)
            assert(ms.updatePermissionTuple(newPermissionTuple) == OutcomeCode.CODE_000_SUCCESS)

            val getAfter = ms.getPermissionTuples(roleName = student.name, fileName = exam.name)
            assert(getAfter.filter { it.roleName == student.name }.size == 1)
            assert(getAfter.firstOrNull { it.roleName == student.name }!!.permission == PermissionType.READWRITE)
        }
    }
    override fun `update non-existing permission tuple works`() {
        /** update non-existing permission tuple */
        run {
            val roleNonExisting = StorageUtilities.createRole("non-existing-role")
            val fileNonExisting = StorageUtilities.createFile("non-existing-file")
            val nonExistingPermissionTuple =
                StorageUtilities.createPermissionTuple(roleNonExisting, fileNonExisting)
            assert(ms.updatePermissionTuple(nonExistingPermissionTuple) == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }
    }



    private fun addRole(roleName: String, roleVersionNumber: Int = 1): Role {
        val newRole = StorageUtilities.createRole(roleName, roleVersionNumber)
        val newRoleTuple = StorageUtilities.createRoleTuple(Constants.ADMIN, newRole)
        assert(ms.addRole(newRole) == OutcomeCode.CODE_000_SUCCESS)
        assert(ms.addRoleTuples(HashSet<RoleTuple>().apply { add(newRoleTuple) }) == OutcomeCode.CODE_000_SUCCESS)
        return newRole
    }
    private fun addFile(fileName: String, symEncKeyVersionNumber: Int = 1): File {
        val newFile = StorageUtilities.createFile(fileName, symEncKeyVersionNumber)
        assert(ms.addFile(newFile) == OutcomeCode.CODE_000_SUCCESS)
        return newFile
    }
    private fun addRoleTuple(username: String, role: Role): RoleTuple {
        val roleTuple = StorageUtilities.createRoleTuple(username, role)
        assert(ms.addRoleTuples(HashSet<RoleTuple>().apply { add(roleTuple) }) == OutcomeCode.CODE_000_SUCCESS)
        return roleTuple
    }
    private fun addPermissionTuple(role: Role, file: File, permission: PermissionType = PermissionType.READ): PermissionTuple {
        val permissionTuple = StorageUtilities.createPermissionTuple(role, file, permission)
        assert(ms.addPermissionTuples(HashSet<PermissionTuple>().apply { add(permissionTuple) }) == OutcomeCode.CODE_000_SUCCESS)
        return permissionTuple
    }
    private fun addFileTuple(file: File, enforcementType: EnforcementType = EnforcementType.COMBINED): FileTuple {
        val fileTuple = StorageUtilities.createFileTuple(file, enforcementType)
        assert(ms.addFileTuples(HashSet<FileTuple>().apply { add(fileTuple) }) == OutcomeCode.CODE_000_SUCCESS)
        return fileTuple
    }
    private fun addAndInitUser(user: User): MSInterface {
        val addUserResult = ms.addUser(user)
        assert(addUserResult.code == OutcomeCode.CODE_000_SUCCESS)
        val userMetadataStorage = MSInterfaceMySQL(addUserResult.parameters as MSInterfaceMySQLParameters)
        assert(userMetadataStorage.lock() == OutcomeCode.CODE_000_SUCCESS)
        userMetadataStorage.initUser(user)
        assert(userMetadataStorage.unlock() == OutcomeCode.CODE_000_SUCCESS)
        return userMetadataStorage
    }



    @Test
    fun createInsertStatement() {
        `create insert statement with one or multiple rows works`()
        `create insert statement with no rows or multiple rows but different size fails`()
    }

    @Test
    fun createSelectStatement() {
        `create select statement with or without selected columns, where and where not parameters works`()
    }

    @Test
    fun createUpdateStatement() {
        `create update statement with or without values, where and where not parameter works`()
        `create update statement with no values and both where and where not parameters fails`()
    }

    @Test
    fun createDeleteStatement() {
        `create delete statement with one or multiple parameters works`()
        `create delete statement with neither where nor where not parameters fails`()
    }

    @Test
    fun insertValuesInStatement() {
        `insert values in statement with right, less of no values works`()
        `insert values in statement with more values fails`()
    }

    @Test
    fun createWhereString() {
        `create where string with or without where and not where parameters works`()
    }



    private fun `insert values in statement with right, less of no values works`() {

        /** insert values in statement with right number of values */
        run {
            val statement = ms.connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = ArrayList<Any?>().apply { add("value1") }.apply { add(2) }
            assert(ms.insertValuesInStatement(statement, 1, parameters) == 3)
        }

        /** insert values in statement with empty list of values */
        run {
            val statement = ms.connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = ArrayList<Any?>()
            assert(ms.insertValuesInStatement(statement, 1, parameters) == 1)
        }

        /** insert values in statement with less values */
        run {
            val statement = ms.connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = ArrayList<Any?>().apply { add("value1") }
            assert(ms.insertValuesInStatement(statement, 1, parameters) == 2)
        }
    }
    private fun `insert values in statement with more values fails`() {

        /** insert values in statement with more values */
        run {
            val statement = ms.connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = ArrayList<Any?>().apply { add("value1") }.apply { add(2) }.apply { add(null) }
            assertThrows<SQLException> { ms.insertValuesInStatement(statement, 1, parameters) }
        }
    }

    private fun `create insert statement with one or multiple rows works`() {

        /** create insert statement with one row */
        run {
            val values = ArrayList<ArrayList<Any?>>()
                .apply { add(ArrayList<Any?>().apply { add("value11") }.apply { add("value12") }) }
            val insert = ms.createInsertStatement("table", values)
            val expected =
                "com.mysql.cj.jdbc.ClientPreparedStatement: INSERT IGNORE INTO table VALUES ('value11','value12');"
            assert(insert.toString() == expected)
        }

        /** create insert statement with multiple rows */
        run {
            val values = ArrayList<ArrayList<Any?>>()
                .apply { add(ArrayList<Any?>().apply { add("value11") }.apply { add("value12") }) }
                .apply { add(ArrayList<Any?>().apply { add("value21") }.apply { add("value22") }) }
                .apply { add(ArrayList<Any?>().apply { add("value31") }.apply { add("value32") }) }
            val insert = ms.createInsertStatement("table", values)
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: INSERT IGNORE INTO " +
                    "table VALUES ('value11','value12'),('value21','value22'),('value31','value32');"
            assert(insert.toString() == expected)
        }
    }
    private fun `create insert statement with no rows or multiple rows but different size fails`() {

        /** create insert statement with no rows */
        run {
            val values = ArrayList<ArrayList<Any?>>()
            assertThrows<SQLException> { ms.createInsertStatement("table", values) }
        }

        /** create insert statement with multiple rows but different size */
        run {
            val values = ArrayList<ArrayList<Any?>>()
                .apply { add(ArrayList<Any?>().apply { add("value11") }.apply { add("value12") }) }
                .apply { add(ArrayList<Any?>().apply { add("value21") }) }
            assertThrows<SQLException> { ms.createInsertStatement("table", values) }
        }
    }

    private fun `create select statement with or without selected columns, where and where not parameters works`() {
        val selectedColumns = ArrayList<String>().apply { add("column1") }
        val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
        val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }

        /** create select statement with selected columns and both where and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT column1 FROM table " +
                    "WHERE (column1='where') AND (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = ms.createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with selected columns and where parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT column1 FROM table " +
                    "WHERE (column1='where') ORDER BY 1 LIMIT 3,4"
            val selectStatement = ms.createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereParameters = whereParameters,
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with selected columns and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT column1 FROM table " +
                    "WHERE (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = ms.createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with no selected columns and both where and where not parameters works */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT * FROM table " +
                    "WHERE (column1='where') AND (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = ms.createSelectStatement(
                table = "table",
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with no selected columns nor where nor where not parameters works */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT * FROM table " +
                    "ORDER BY 1 LIMIT 3,4"
            val selectStatement = ms.createSelectStatement(
                table = "table",
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with just the count of selected columns and both where and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT COUNT(DISTINCT column1) FROM table " +
                    "WHERE (column1='where') AND (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = ms.createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = true
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with just the count of no selected columns nor where nor where not parameters works */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT COUNT(DISTINCT *) FROM table " +
                    "ORDER BY 1 LIMIT 3,4"
            val selectStatement = ms.createSelectStatement(
                table = "table",
                offset = 3, limit = 4,
                justTheCount = true
            )
            assert(expected == selectStatement.toString())
        }
    }

    private fun `create update statement with or without values, where and where not parameter works`() {
        val values = LinkedHashMap<String, Any?>().apply { put("column1", "value1") }
        val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
        val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }

        /** create update statement with values and both where and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: UPDATE table SET column1='value1' " +
                    "WHERE (column1='where') AND (column2<>'whereNot')"
            val updateStatement = ms.createUpdateStatement(
                table = "table", values = values,
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
            )
            assert(expected == updateStatement.toString())
        }

        /** create update statement with values and where parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: UPDATE table SET column1='value1' " +
                    "WHERE (column1='where')"
            val updateStatement = ms.createUpdateStatement(
                table = "table", values = values,
                whereParameters = whereParameters,
            )
            assert(expected == updateStatement.toString())
        }

        /** create update statement with values and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: UPDATE table SET column1='value1' " +
                    "WHERE (column2<>'whereNot')"
            val updateStatement = ms.createUpdateStatement(
                table = "table", values = values,
                whereNotParameters = whereNotParameters,
            )
            assert(expected == updateStatement.toString())
        }
    }
    private fun `create update statement with no values and both where and where not parameters fails`() {

        /** create update statement with no values and both where and where not parameters */
        run {
            val values = LinkedHashMap<String, Any?>()
            val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
            val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }
            assertThrows<SQLException> {
                ms.createUpdateStatement(
                    table = "table", values = values,
                    whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                )
            }
        }
    }

    private fun `create delete statement with one or multiple parameters works`() {

        /** create delete statement with one parameter */
        run {
            val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
            val statement = ms.createDeleteStatement(
                table = "table",
                whereParameters = whereParameters,
            )
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: DELETE FROM table WHERE (column1='where')"
            assert(expected == statement.toString())
        }

        /** create delete statement with multiple parameters */
        run {
            val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }.apply { put("column3", "where3") }
            val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }
            val statement = ms.createDeleteStatement(
                table = "table",
                whereParameters = whereParameters,
                whereNotParameters = whereNotParameters,
            )
            println(statement.toString())
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: DELETE FROM table WHERE (column1='where') " +
                    "AND (column3='where3') AND (column2<>'whereNot')"
            assert(expected == statement.toString())
        }
    }
    private fun `create delete statement with neither where nor where not parameters fails`() {

        /** create delete statement with neither where nor where not parameters */
        run {
            assertThrows<SQLException> { ms.createDeleteStatement(table = "table") }
        }
    }

    private fun `create where string with or without where and not where parameters works`() {
        val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
        val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }

        /** create where string with both where and not where parameters */
        run {
            val expected = " WHERE (column1=?) AND (column2<>?)"
            assert(ms.createWhereString(whereParameters, whereNotParameters) == expected)
        }

        /** create where string with where parameters only */
        run {
            val expected = " WHERE (column1=?)"
            assert(ms.createWhereString(whereParameters, null) == expected)
        }

        /** create where string with where not parameters only */
        run {
            val expected = " WHERE (column2<>?)"
            assert(ms.createWhereString(null, whereNotParameters) == expected)
        }

        /** create where string with no parameters */
        run {
            val expected = ""
            assert(ms.createWhereString(null, null) == expected)
        }

        /** create where string with empty parameters */
        run {
            val expected = ""
            assert(ms.createWhereString(LinkedHashMap(), LinkedHashMap()) == expected)
        }

        /** create where string with more where parameters */
        run {
            val expected = " WHERE (column1=?) AND (column2=?)"
            whereParameters.apply { put("column2", "where2") }
            assert(ms.createWhereString(whereParameters, LinkedHashMap()) == expected)
        }

        /** create where string with more where not parameters */
        run {
            val expected = " WHERE (column2<>?) AND (column3<>?)"
            whereNotParameters.apply { put("column3", "where3") }
            assert(ms.createWhereString(LinkedHashMap(), whereNotParameters) == expected)
        }

        /** create where string with more where and where not parameters */
        run {
            val expected = " WHERE (column1=?) AND (column2=?) AND (column2<>?) AND (column3<>?)"
            assert(ms.createWhereString(whereParameters, whereNotParameters) == expected)
        }
    }
}
