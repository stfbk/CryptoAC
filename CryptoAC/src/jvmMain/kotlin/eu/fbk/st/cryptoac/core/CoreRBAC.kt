package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.model.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.*
import java.io.InputStream

/**
 * The CoreRBAC extends the [Core] class by implementing a
 * role-based based cryptographic access control scheme.
 * It receives the [coreParameters] and uses the [crypto]
 * object for performing cryptographic computations
 */
abstract class CoreRBAC(
    override val crypto: Crypto,
    override val coreParameters: CoreParameters
) : Core(crypto, coreParameters) {

    /**
     * Add a user with the given [username] to the policy
     * and return eventual configuration parameters along
     * with the outcome code (if an error occurred, the
     * configuration parameters will be null)
     */
    abstract fun addUser(username: String): CodeCoreParameters

    /**
     * Delete the user with the matching [username] from
     * the policy and revoke the user from all assigned roles.
     * Finally, return the outcome code
     */
    abstract fun deleteUser(username: String): OutcomeCode

    /**
     * Add a new role with the given [roleName] to the policy
     * and assign the admin to the new role.
     * Finally, return the outcome code
     */
    abstract fun addRole(roleName: String): OutcomeCode

    /**
     * Delete the role with the matching [roleName] from
     * the policy and revoke all users and permissions
     * from the role.
     * Finally, return the outcome code
     */
    abstract fun deleteRole(roleName: String): OutcomeCode

    /**
     * Add a new file with the given name [fileName],
     * [fileContent], [enforcement] type to the policy.
     * Encrypt and sign, if necessary, and upload the
     * new [fileContent] for the file [fileName].
     * Also, assign all permissions to the admin over
     * the file.
     * Finally, return the outcome code
     */
    abstract fun addFile(
        fileName: String,
        fileContent: InputStream,
        enforcement: EnforcementType
    ): OutcomeCode

    /**
     * Delete the file with the matching [fileName] from
     * the policy, and delete all the related permissions.
     * Finally, return the outcome code
     */
    abstract fun deleteFile(fileName: String): OutcomeCode

    /**
     * Assign the user [username] to the role [roleName]
     * in the policy.
     * Finally, return the outcome code
     */
    abstract fun assignUserToRole(
        username: String,
        roleName: String
    ): OutcomeCode

    /**
     * Revoke the user [username] from the role [roleName]
     * from the policy.
     * Finally, return the outcome code
     */
    abstract fun revokeUserFromRole(
        username: String,
        roleName: String
    ): OutcomeCode

    /**
     * Assigns the [permission] to the role [roleName] over
     * the file [fileName] in the policy.
     * Finally, return the outcome code
     */
    abstract fun assignPermissionToRole(
        roleName: String,
        fileName: String,
        permission: PermissionType
    ): OutcomeCode

    /**
     * Revoke the [permission] from the role [roleName] over
     * the file [fileName] in the policy.
     * Finally, return the outcome code
     */
    abstract fun revokePermissionFromRole(
        roleName: String,
        fileName: String,
        permission: PermissionType
    ): OutcomeCode

    /**
     * Download, decrypt and check the signature of,
     * if necessary, the content of the file [fileName]
     * and return it along with the outcome code (if an
     * error occurred, the content of the file will
     * be null)
     */
    abstract fun readFile(fileName: String): CodeFile

    /**
     * Encrypt and sign, if necessary, and upload the
     * new [fileContent] for the file [fileName].
     * Finally, return the outcome code
     */
    abstract fun writeFile(fileName: String, fileContent: InputStream): OutcomeCode



    /**
     * Return the set of users, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
     */
    abstract fun getUsers(): CodeUsers

    /**
     * Return the set of roles, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
     */
    abstract fun getRoles(): CodeRoles

    /**
     * Return the set of files, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
     */
    abstract fun getFiles(): CodeFiles

    /**
     * Return the user-role assignments filtering
     * by the [username] and [roleName], if given,
     * along with the outcome code (if an error
     * occurred, the set of users will be null)
     */
    abstract fun getAssignments(
        username: String? = null,
        roleName: String? = null
    ): CodeRoleTuples

    /**
     * Return the role-file permissions filtering
     * by the [username], [roleName] and [fileName],
     * if given, along with the outcome code (if an error
     * occurred, the set of users will be null)
     */
    abstract fun getPermissions(
        username: String? = null,
        roleName: String? = null,
        fileName: String? = null
    ): CodePermissionTuples
}