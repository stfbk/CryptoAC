package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.model.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.*
import java.io.InputStream

/** The CoreRBAC implements a role-based cryptographic access control scheme */
abstract class CoreRBAC(
    override val crypto: Crypto,
    override val coreParameters: CoreParameters
) : Core(crypto, coreParameters) {

    /**
     * Add a user with the given [username] by accordingly updating the metadata and
     * returning the outcome code, along with eventual configuration parameters.
     * Note that other user's metadata (e.g., public keys) can be updated by the user
     * him/herself in the "initUser" function
     */
    abstract fun addUser(username: String): CodeCoreParameters

    /**
     * Delete the user with the matching [username] from the metadata and
     * revoking the user from all roles. Finally, return the outcome code
     */
    abstract fun deleteUser(username: String): OutcomeCode

    /**
     * Add a new role with the given [roleName] by creating the role's keys and
     * assigning the admin to the new role. Finally, return the outcome code
     */
    abstract fun addRole(roleName: String): OutcomeCode

    /**
     * Delete the role with the matching [roleName] from the metadata and
     * revoking all users and permissions from the role. Finally, return
     * the outcome code
     */
    abstract fun deleteRole (roleName: String): OutcomeCode

    /**
     * Add a new file with the given name [fileName] and [fileContent] and
     * apply the specified [enforcement]. Also, assign permission to the
     * admin over the file. Finally, return the outcome code
     */
    abstract fun addFile(fileName: String, fileContent: InputStream, enforcement: EnforcementType): OutcomeCode

    /**
     * Delete the file with the matching [fileName] from the metadata and
     * delete all the related file and permission tuples. Finally, return
     * the outcome code
     */
    abstract fun deleteFile(fileName: String): OutcomeCode

    /**
     * Assigns the user [username] to the role [roleName] by
     * creating a role tuple and then return the outcome code
     */
    abstract fun assignUserToRole(username: String, roleName: String): OutcomeCode

    /**
     * Revoke the user [username] from the role [roleName] by updating
     * role and permission tuples and then return the outcome code
     */
    abstract fun revokeUserFromRole(username: String, roleName: String): OutcomeCode

    /**
     * Assigns the permission [permission] to the role [roleName] over the file
     * [fileName] by creating a permission tuple and then return the outcome code
     */
    abstract fun assignPermissionToRole(roleName: String, fileName: String, permission: PermissionType): OutcomeCode

    /**
     * Revoke the [permission] from the [roleName] over the [fileName]
     * by updating permission tuples and then return the outcome code
     */
    abstract fun revokePermissionFromRole(roleName: String, fileName: String, permission: PermissionType): OutcomeCode

    /**
     * Read the file [fileName] by downloading and decrypting
     * its content, if possible, and return the outcome code
     */
    abstract fun readFile(fileName: String): CodeFile

    /**
     * Write the new [fileContent] for the file [fileName],
     * if possible, and return the outcome code
     */
    abstract fun writeFile(fileName: String, fileContent: InputStream): OutcomeCode



    /**
     * Retrieve and return the users that the
     * user can see, along with the outcome code
     */
    abstract fun getUsers(): CodeUsers

    /**
     * Retrieve and return the roles that the
     * user can see, along with the outcome code
     */
    abstract fun getRoles(): CodeRoles

    /**
     * Retrieve and return the files that the
     * user can see, along with the outcome code
     */
    abstract fun getFiles(): CodeFiles

    /**
     * Retrieve and return the role tuples of the [username] and
     * the [roleName], if given, along with the outcome code
     */
    abstract fun getAssignments(username: String? = null, roleName: String? = null): CodeRoleTuples

    /**
     * Retrieve and return the permission tuples of the [username],
     * [roleName] and [fileName], if given, along with the outcome code
     */
    abstract fun getPermissions(username: String? = null, roleName: String? = null, fileName: String? = null): CodePermissionTuples
}