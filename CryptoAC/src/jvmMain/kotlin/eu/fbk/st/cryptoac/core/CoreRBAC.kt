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
     * configuration parameters will be null):
     * - CODE_000_SUCCESS
     * - CODE_001_USER_ALREADY_EXISTS
     * - CODE_013_USER_WAS_DELETED
     * - CODE_019_MISSING_PARAMETERS
     * - CODE_020_INVALID_PARAMETER
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     * - CODE_062_CREATE_USER_MM
     */
    abstract fun addUser(username: String): CodeCoreParameters

    /**
     * Delete the user with the matching [username] from
     * the policy and revoke the user from all assigned roles.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_004_USER_NOT_FOUND
     * - CODE_005_ROLE_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_007_ROLETUPLE_NOT_FOUND
     * - CODE_008_PERMISSIONTUPLE_NOT_FOUND
     * - CODE_010_ROLETUPLE_ALREADY_EXISTS
     * - CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
     * - CODE_013_USER_WAS_DELETED
     * - CODE_014_ROLE_WAS_DELETED
     * - CODE_015_FILE_WAS_DELETED
     * - CODE_019_MISSING_PARAMETERS
     * - CODE_020_INVALID_PARAMETER
     * - CODE_022_ADMIN_CANNOT_BE_MODIFIED
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_040_UR_ASSIGNMENTS_NOT_FOUND
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun deleteUser(username: String): OutcomeCode

    /**
     * Add a new role with the given [roleName] to the policy
     * and assign the admin to the new role.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_002_ROLE_ALREADY_EXISTS
     * - CODE_010_ROLETUPLE_ALREADY_EXISTS
     * - CODE_014_ROLE_WAS_DELETED
     * - CODE_019_MISSING_PARAMETERS
     * - CODE_020_INVALID_PARAMETER
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun addRole(roleName: String): OutcomeCode

    /**
     * Delete the role with the matching [roleName] from
     * the policy and revoke all users and permissions
     * from the role.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_004_USER_NOT_FOUND
     * - CODE_005_ROLE_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_007_ROLETUPLE_NOT_FOUND
     * - CODE_008_PERMISSIONTUPLE_NOT_FOUND
     * - CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
     * - CODE_014_ROLE_WAS_DELETED
     * - CODE_015_FILE_WAS_DELETED
     * - CODE_016_INVALID_PERMISSION
     * - CODE_019_MISSING_PARAMETERS
     * - CODE_020_INVALID_PARAMETER
     * - CODE_022_ADMIN_CANNOT_BE_MODIFIED
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_041_PA_ASSIGNMENTS_NOT_FOUND
     * - CODE_040_UR_ASSIGNMENTS_NOT_FOUND
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun deleteRole(roleName: String): OutcomeCode

    /**
     * Add a new file with the given name [fileName],
     * [fileContent], [enforcement] type to the policy.
     * Encrypt and sign, if necessary, and upload the
     * new [fileContent] for the file [fileName].
     * Also, assign all permissions to the admin over
     * the file.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_003_FILE_ALREADY_EXISTS
     * - CODE_004_USER_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
     * - CODE_015_FILE_WAS_DELETED
     * - CODE_016_INVALID_PERMISSION
     * - CODE_017_INVALID_VERSION_NUMBER
     * - CODE_020_INVALID_PARAMETER
     * - CODE_021_RM_CONFIGURATION
     * - CODE_024_FILE_DELETE
     * - CODE_025_FILE_RENAMING
     * - CODE_026_TUPLE_FORMAT
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_042_RM_CONNECTION_TIMEOUT
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     * - CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM
     */
    abstract fun addFile(
        fileName: String,
        fileContent: InputStream,
        enforcement: EnforcementType
    ): OutcomeCode

    /**
     * Delete the file with the matching [fileName] from
     * the policy, and delete all the related permissions.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_005_ROLE_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_008_PERMISSIONTUPLE_NOT_FOUND
     * - CODE_009_FILETUPLE_NOT_FOUND
     * - CODE_015_FILE_WAS_DELETED
     * - CODE_020_INVALID_PARAMETER
     * - CODE_022_ADMIN_CANNOT_BE_MODIFIED
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_041_PA_ASSIGNMENTS_NOT_FOUND
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun deleteFile(fileName: String): OutcomeCode

    /**
     * Assign the user [username] to the role [roleName]
     * in the policy.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_004_USER_NOT_FOUND
     * - CODE_005_ROLE_NOT_FOUND
     * - CODE_010_ROLETUPLE_ALREADY_EXISTS
     * - CODE_013_USER_WAS_DELETED
     * - CODE_019_MISSING_PARAMETERS
     * - CODE_020_INVALID_PARAMETER
     * - CODE_022_ADMIN_CANNOT_BE_MODIFIED
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun assignUserToRole(
        username: String,
        roleName: String
    ): OutcomeCode

    /**
     * Revoke the user [username] from the role [roleName]
     * from the policy.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_004_USER_NOT_FOUND
     * - CODE_005_ROLE_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_007_ROLETUPLE_NOT_FOUND
     * - CODE_008_PERMISSIONTUPLE_NOT_FOUND
     * - CODE_010_ROLETUPLE_ALREADY_EXISTS
     * - CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
     * - CODE_014_ROLE_WAS_DELETED
     * - CODE_015_FILE_WAS_DELETED
     * - CODE_019_MISSING_PARAMETERS
     * - CODE_020_INVALID_PARAMETER
     * - CODE_022_ADMIN_CANNOT_BE_MODIFIED
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_040_UR_ASSIGNMENTS_NOT_FOUND
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun revokeUserFromRole(
        username: String,
        roleName: String
    ): OutcomeCode

    /**
     * Assigns the [permission] to the role [roleName] over
     * the file [fileName] in the policy.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_005_ROLE_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_008_PERMISSIONTUPLE_NOT_FOUND
     * - CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
     * - CODE_016_INVALID_PERMISSION
     * - CODE_019_MISSING_PARAMETERS
     * - CODE_020_INVALID_PARAMETER
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_041_PA_ASSIGNMENTS_NOT_FOUND
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun assignPermissionToRole(
        roleName: String,
        fileName: String,
        permission: PermissionType
    ): OutcomeCode

    /**
     * Revoke the [permission] from the role [roleName] over
     * the file [fileName] in the policy.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_005_ROLE_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_008_PERMISSIONTUPLE_NOT_FOUND
     * - CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
     * - CODE_015_FILE_WAS_DELETED
     * - CODE_016_INVALID_PERMISSION
     * - CODE_019_MISSING_PARAMETERS
     * - CODE_020_INVALID_PARAMETER
     * - CODE_022_ADMIN_CANNOT_BE_MODIFIED
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_041_PA_ASSIGNMENTS_NOT_FOUND
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
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
     * be null):
     * - CODE_000_SUCCESS
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_020_INVALID_PARAMETER
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun readFile(fileName: String): CodeFile

    /**
     * Encrypt and sign, if necessary, and upload the
     * new [fileContent] for the file [fileName].
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_003_FILE_ALREADY_EXISTS
     * - CODE_004_USER_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_009_FILETUPLE_NOT_FOUND
     * - CODE_015_FILE_WAS_DELETED
     * - CODE_017_INVALID_VERSION_NUMBER
     * - CODE_020_INVALID_PARAMETER
     * - CODE_021_RM_CONFIGURATION
     * - CODE_024_FILE_DELETE
     * - CODE_025_FILE_RENAMING
     * - CODE_027_AC_ENFORCEMENT_INCONSISTENT
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_042_RM_CONNECTION_TIMEOUT
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     * - CODE_053_INCONSISTENT_STATUS_DELETE_TEMPORARY_FILE_IN_DM
     */
    abstract fun writeFile(fileName: String, fileContent: InputStream): OutcomeCode



    /**
     * Return the set of users, along with the
     * outcome code (if an error occurred, the
     * set of users will be null):
     * - CODE_000_SUCCESS
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun getUsers(): CodeUsers

    /**
     * Return the set of roles, along with the
     * outcome code (if an error occurred, the
     * set of users will be null):
     * - CODE_000_SUCCESS
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun getRoles(): CodeRoles

    /**
     * Return the set of files, along with the
     * outcome code (if an error occurred, the
     * set of users will be null):
     * - CODE_000_SUCCESS
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun getFiles(): CodeFiles

    /**
     * Return the user-role assignments filtering
     * by the [username] and [roleName], if given,
     * along with the outcome code (if an error
     * occurred, the set of users will be null):
     * - CODE_000_SUCCESS
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun getAssignments(
        username: String? = null,
        roleName: String? = null
    ): CodeRoleTuples

    /**
     * Return the role-file permissions filtering
     * by the [username], [roleName] and [fileName],
     * if given, along with the outcome code (if an error
     * occurred, the set of users will be null):
     * - CODE_000_SUCCESS
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     */
    abstract fun getPermissions(
        username: String? = null,
        roleName: String? = null,
        fileName: String? = null
    ): CodePermissionTuples
}