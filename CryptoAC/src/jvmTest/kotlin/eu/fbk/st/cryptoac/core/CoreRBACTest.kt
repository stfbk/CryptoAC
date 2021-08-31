package eu.fbk.st.cryptoac.core

import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

/** Test class for class "CoreRBAC". */
internal abstract class CoreRBACTest : CoreTest() {

    @BeforeEach
    abstract fun setUp()

    @AfterEach
    abstract fun tearDown()

    @Test
    fun addUser() {
        `add user of non-existing user works`()
        `add user of blank, admin, existing (incomplete or operational) or deleted user fails`()
    }

    @Test
    fun deleteUser() {
        `delete user of existing (incomplete or operational) user works`()
        `delete user of blank, admin, non-existing or deleted user fails`()
    }

    @Test
    fun addRole() {
        `add role of non-existing role works`()
        `add role of blank, admin, operational or deleted role fails`()
    }

    @Test
    fun deleteRole() {
        `delete role of operational role works`()
        `delete role of blank, admin, non-existing or deleted role fails`()
    }

    @Test
    fun addFile() {
        `add file of non-existing file works`()
        `add file of blank, operational or deleted file fails`()
    }

    @Test
    fun deleteFile() {
        `delete file of operational file works`()
        `delete file of blank, non-existing or deleted file fails`()
    }

    @Test
    fun assignUserToRole() {
        `assign operational user to operational role works`()
        `assign blank, non-existing, incomplete or deleted user to blank, non-existing or deleted role fails`()
        `assign operational user to admin role fails`()
        `assign operational user to operational role twice fails`()
    }

    @Test
    fun revokeUserFromRole() {
        `revoke user from assigned role works`()
        `revoke blank, non-existing, incomplete or deleted user from blank, non-existing or deleted role fails`()
        `revoke admin user from admin or assigned role fails`()
        `revoke user to assigned role twice fails`()
    }

    @Test
    fun assignPermissionToRole() {
        `assign permission over operational file to operational role works`()
        `assign read permission over operational file to operational role with already read or read write permission fails`()
        `assign blank, non-existing or deleted role to blank, non-existing or deleted file fails`()
        `assign operational role to operational file twice fails`()
        `assign read permission to operational role with already write permission over operational file fails`()
    }

    @Test
    fun revokePermissionFromRole() {
        `revoke assigned permission from role over file works`()
        `revoke read or write permission of blank, non-existing or deleted role from blank, non-existing or deleted file fails`()
        `revoke admin role permission over assigned file fails`()
        `revoke assigned permission from role over file twice fails`()
        `revoke assigned permission and reassign lower permission works`()
    }

    @Test
    fun readFile() {
        `admin or user read file having permission over file works`()
        `not assigned or revoked user read file fails`()
    }

    @Test
    fun writeFile() {
        `admin or user write file having permission over file works`()
        `not assigned or revoked user write file fails`()
    }

    @Test
    fun getUsers() {
        TODO("come initUser")
    }

    @Test
    fun getRoles() {
        TODO("come initUser")
    }

    @Test
    fun getFiles() {
        TODO("come initUser")
    }

    @Test
    fun getAssignments() {
        TODO("come initUser")
    }

    @Test
    fun getPermissions() {
        TODO("come initUser")
    }



    abstract fun `add user of non-existing user works`()
    abstract fun `add user of blank, admin, existing (incomplete or operational) or deleted user fails`()

    abstract fun `delete user of existing (incomplete or operational) user works`()
    abstract fun `delete user of blank, admin, non-existing or deleted user fails`()

    abstract fun `add role of non-existing role works`()
    abstract fun `add role of blank, admin, operational or deleted role fails`()

    abstract fun `delete role of operational role works`()
    abstract fun `delete role of blank, admin, non-existing or deleted role fails`()

    abstract fun `add file of non-existing file works`()
    abstract fun `add file of blank, operational or deleted file fails`()

    abstract fun `delete file of operational file works`()
    abstract fun `delete file of blank, non-existing or deleted file fails`()

    abstract fun `assign operational user to operational role works`()
    abstract fun `assign blank, non-existing, incomplete or deleted user to blank, non-existing or deleted role fails`()
    abstract fun `assign operational user to admin role fails`()
    abstract fun `assign operational user to operational role twice fails`()

    abstract fun `revoke user from assigned role works`()
    abstract fun `revoke blank, non-existing, incomplete or deleted user from blank, non-existing or deleted role fails`()
    abstract fun `revoke admin user from admin or assigned role fails`()
    abstract fun `revoke user to assigned role twice fails`()

    abstract fun `assign permission over operational file to operational role works`()
    abstract fun `assign read permission over operational file to operational role with already read or read write permission fails`()
    abstract fun `assign blank, non-existing or deleted role to blank, non-existing or deleted file fails`()
    abstract fun `assign operational role to operational file twice fails`()
    abstract fun `assign read permission to operational role with already write permission over operational file fails`()

    abstract fun `revoke assigned permission from role over file works`()
    abstract fun `revoke read or write permission of blank, non-existing or deleted role from blank, non-existing or deleted file fails`()
    abstract fun `revoke admin role permission over assigned file fails`()
    abstract fun `revoke assigned permission from role over file twice fails`()
    abstract fun `revoke assigned permission and reassign lower permission works`()

    abstract fun `admin or user read file having permission over file works`()
    abstract fun `not assigned or revoked user read file fails`()

    abstract fun `admin or user write file having permission over file works`()
    abstract fun `not assigned or revoked user write file fails`()
}