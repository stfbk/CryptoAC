package eu.fbk.st.cryptoac.implementation.ms

import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.BeforeEach

internal abstract class MSInterfaceTest {

    @BeforeEach
    abstract fun setUp()

    @AfterEach
    abstract fun tearDown()

    @Test
    fun initAdmin() {
        // TODO
    }

    @Test
    fun initUser() {
        `init user of existing user works`()
        `init user of non-existing or already initialized user fails`()
    }

    @Test
    fun isUserAdmin() {
        `is admin of admin user is true, while is admin of other users, non-existing or deleted is false or fails`()
    }

    @Test
    fun addUser() {
        `add user once works`()
        `add user twice or with admin name or with same name as previously deleted user fails`()
    }

    @Test
    fun addRole() {
        `add role once works`()
        `add role twice or with admin name or same name as previously deleted role fails`()
    }

    @Test
    fun addFile() {
        `add file once works`()
        `add file twice or with same name as previously deleted file fails`()
    }

    @Test
    fun addRoleTuples() {
        `add no, one or multiple role tuples work`()
        `add role tuple twice fails`()
        `add role tuple with non-existing or deleted user or role fails`()
    }

    @Test
    fun addPermissionTuples() {
        `add no, one or multiple permission tuples work`()
        `add permission tuple twice fails`()
        `add permission tuple with non-existing or deleted role or file fails`()
    }

    @Test
    fun addFileTuples() {
        `add no, one or multiple file tuples work`()
        `add file tuple twice fails`()
        `add file tuple with non-existing or deleted file fails`()
    }

    @Test
    fun getUsers() {
        `get not-existing, incomplete, operational and deleted user by name or token works`()
        `get all users works`()
    }

    @Test
    fun getRoles() {
        `get not-existing, operational and deleted role by name or token works`()
        `get all roles works`()
    }

    @Test
    fun getFiles() {
        `get not-existing, operational and deleted file by name or token works`()
        `get all files works`()
    }

    @Test
    fun getRoleTuples() {
        `get role tuples of the administrator or of users by username or role name works`()

    }

    @Test
    fun getPermissionTuples() {
        `get permission tuples by role or file name or excluding role name or role or file version number works`()
    }

    @Test
    fun getFileTuples() {
        `get file tuples by file name works`()
    }

    @Test
    fun getPublicKey() {
        `get public key of non-existing, incomplete, operational and deleted users and roles by name or token works`()
    }

    @Test
    fun getVersionNumber() {
        `get version number of non-existing, operational and deleted roles and files by name or token works`()
    }

    @Test
    fun getToken() {
        `get token of non-existing, operational and deleted roles and files by name works`()
    }

    @Test
    fun getStatus() {
        `get element status with existing, deleted and non-existing elements works`()
    }

    @Test
    fun deleteUser() {
        `delete incomplete and operational users by name works`()
        `delete non-existing and deleted user by name fails`()
        `delete the administrator user by name fails`()
    }

    @Test
    fun deleteRole() {
        `delete operational roles by name works`()
        `delete non-existing and deleted roles by name fails`()
        `delete the administrator role by name fails`()
    }

    @Test
    fun deleteFile() {
        `delete operational files by name works`()
        `delete non-existing and deleted files by name fails`()
    }

    @Test
    fun deleteRoleTuples() {
        `delete existing role tuples by role name works`()
        `delete non-existing or the admin's role tuples by role name fails`()
    }

    @Test
    fun deletePermissionTuples() {
        `delete existing permission tuples by role or file name or role version number works`()
        `delete non-existing or the admin's permission tuples by role name fails`()
    }

    @Test
    fun deleteFileTuples() {
        `delete existing file tuples by file name works`()
        `delete non-existing file tuples by file name fails`()
    }

    @Test
    fun incrementSymEncVersionNumberByOne() {
        `increment symmetric encryption key version number for operational file works`()
        `increment symmetric encryption key version number for non-existing or deleted file fails`()
    }

    @Test
    fun updateRoleAsymKeys() {
        `update public keys of operational roles by name works`()
        `update public keys of deleted roles by name works`()
    }

    @Test
    fun updatePermissionTuple() {
        `update existing permission tuple works`()
        `update non-existing permission tuple works`()
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



    abstract fun `init user of existing user works`()
    abstract fun `init user of non-existing or already initialized user fails`()

    abstract fun `is admin of admin user is true, while is admin of other users, non-existing or deleted is false or fails`()

    abstract fun `add user once works`()
    abstract fun `add user twice or with admin name or with same name as previously deleted user fails`()

    abstract fun `add role once works`()
    abstract fun `add role twice or with admin name or same name as previously deleted role fails`()

    abstract fun `add file once works`()
    abstract fun `add file twice or with same name as previously deleted file fails`()

    abstract fun `add no, one or multiple role tuples work`()
    abstract fun `add role tuple twice fails`()
    abstract fun `add role tuple with non-existing or deleted user or role fails`()

    abstract fun `add no, one or multiple permission tuples work`()
    abstract fun `add permission tuple twice fails`()
    abstract fun `add permission tuple with non-existing or deleted role or file fails`()

    abstract fun `add no, one or multiple file tuples work`()
    abstract fun `add file tuple twice fails`()
    abstract fun `add file tuple with non-existing or deleted file fails`()

    abstract fun `get not-existing, incomplete, operational and deleted user by name or token works`()
    abstract fun `get all users works`()

    abstract fun `get not-existing, operational and deleted role by name or token works`()
    abstract fun `get all roles works`()

    abstract fun `get not-existing, operational and deleted file by name or token works`()
    abstract fun `get all files works`()

    abstract fun `get role tuples of the administrator or of users by username or role name works`()
    abstract fun `get permission tuples by role or file name or excluding role name or role or file version number works`()
    abstract fun `get file tuples by file name works`()

    abstract fun `get public key of non-existing, incomplete, operational and deleted users and roles by name or token works`()
    abstract fun `get version number of non-existing, operational and deleted roles and files by name or token works`()
    abstract fun `get token of non-existing, operational and deleted roles and files by name works`()
    abstract fun `get element status with existing, deleted and non-existing elements works`()

    abstract fun `delete incomplete and operational users by name works`()
    abstract fun `delete non-existing and deleted user by name fails`()
    abstract fun `delete the administrator user by name fails`()

    abstract fun `delete operational roles by name works`()
    abstract fun `delete non-existing and deleted roles by name fails`()
    abstract fun `delete the administrator role by name fails`()

    abstract fun `delete operational files by name works`()
    abstract fun `delete non-existing and deleted files by name fails`()

    abstract fun `delete existing role tuples by role name works`()
    abstract fun `delete non-existing or the admin's role tuples by role name fails`()

    abstract fun `delete existing permission tuples by role or file name or role version number works`()
    abstract fun `delete non-existing or the admin's permission tuples by role name fails`()

    abstract fun `delete existing file tuples by file name works`()
    abstract fun `delete non-existing file tuples by file name fails`()

    abstract fun `increment symmetric encryption key version number for operational file works`()
    abstract fun `increment symmetric encryption key version number for non-existing or deleted file fails`()

    abstract fun `update public keys of operational roles by name works`()
    abstract fun `update public keys of deleted roles by name works`()

    abstract fun `update existing permission tuple works`()
    abstract fun `update non-existing permission tuple works`()

    // TODO test paginazione (limit e offset)
}