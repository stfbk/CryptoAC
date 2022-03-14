package eu.fbk.st.cryptoac.implementation.mm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import kotlinx.serialization.Serializable
import java.security.PublicKey

/** The default offset for rows in queries */
const val DEFAULT_OFFSET = 0

/** The default limit for rows in queries */
const val DEFAULT_LIMIT = 100

// TODO check the usage of the "NO_LIMIT" variable, it breaks pagination
/** The unlimited value for rows in queries */
const val NO_LIMIT = -1

/** Interface defining the methods to interact with the MM */
abstract class MMInterface {

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    var locks = 0

    /**
     * Initialize the admin by adding in the metadata the
     * [admin] as both user and role and the [adminRoleTuple]
     * and return the outcome code. Check that the name of
     * the admin is the expected one (in both the user object
     * and the role tuple) and that the admin was not already
     * initialized
     */
    abstract fun initAdmin(admin: User, adminRoleTuple: RoleTuple): OutcomeCode

    /**
     * Initialize the user by adding in the metadata the
     * public keys and token of the [user], updating also
     * the status flag, and return the outcome code. Check
     * that the user is not already present, was not already
     * initialized and was not already deleted. This method
     * should support invocations by non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    abstract fun initUser(user: User): OutcomeCode



    /**
     * Add the [newUser] in the metadata. The user's
     * asymmetric encryption and signing public keys
     * and token will be set by the user him/herself
     * later on (initUser function). Finally, return
     * the user's configuration parameters together
     * with the outcome code. Check that the user was
     * not previously deleted or already exists
     */
    abstract fun addUser(newUser: User): WrapperMMParameters

    /**
     * Add the [newRole] in the metadata and
     * return the outcome code. Check that the
     * role does not already exist or was deleted
     */
    abstract fun addRole(newRole: Role): OutcomeCode

    /**
     * Add the [newFile] in the metadata and
     * return the outcome code. Check that the
     * file does not already exist or was deleted
     */
    abstract fun addFile(newFile: File): OutcomeCode



    /**
     * Add the [newRoleTuples] in the metadata and
     * return the outcome code. Check that involved
     * users exist, are not incomplete or were not
     * deleted, and that involved roles exist and
     * were not deleted. Also check whether a role
     * tuple already exists
     */
    abstract fun addRoleTuples(newRoleTuples: HashSet<RoleTuple>): OutcomeCode

    /**
     * Add the [newPermissionTuples] in the metadata
     * and return the outcome code. Check that involved
     * roles exist and were not deleted and that involved
     * files exist and were not deleted. Also check whether
     * a permission tuple already exists
     */
    abstract fun addPermissionTuples(newPermissionTuples: HashSet<PermissionTuple>): OutcomeCode

    /**
     * Add the [newFileTuples] in the metadata and
     * return the outcome code. Check that involved
     * files exist and were not deleted. Also check
     * whether a file tuple already exists
     */
    abstract fun addFileTuples(newFileTuples: HashSet<FileTuple>): OutcomeCode



    /**
     * Retrieve data of the users matching the specified
     * [username] and [status], if given, starting from
     * the [offset] limiting the number of users to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no users are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    abstract fun getUsers(
        username: String? = null,
        status: ElementStatus? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<User>

    /**
     * Retrieve data of the roles matching the specified
     * [roleName] and [status], if given, starting from
     * the [offset] limiting the number of roles to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no roles are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    abstract fun getRoles(
        roleName: String? = null,
        status: ElementStatus? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<Role>

    /**
     * Retrieve data of the files matching the specified
     * [fileName] and [status], if given, starting from
     * the [offset] limiting the number of files to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no files are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    abstract fun getFiles(
        fileName: String? = null,
        status: ElementStatus? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<File>


    /**
     * Retrieve the role tuples matching the [username]
     * and/or the [roleName] (at least one required),
     * starting from the [offset] limiting the number
     * of tuples to return to the given [limit] and
     * with the (possibly) relevant information of
     * whether the user invoking this function
     * [isAdmin]. If no role tuples are found,
     * return an empty set. This method should
     * support invocations by non-admin users
     */
    abstract fun getRoleTuples(
        username: String? = null, roleName: String? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<RoleTuple>

    /**
     * Retrieve the permission tuples matching the [roleName] and/or
     * the [fileName], further filtering by [roleVersionNumber],
     * [permission] and [symKeyVersionNumber], and not matching the
     * [roleNameToExclude], if given, starting from the [offset]
     * limiting the number of tuples to return to the given [limit]
     * and with the (possibly) relevant information of whether the
     * user invoking this function [isAdmin]. If no permission tuples
     * are found, return an empty set. This method should support
     * invocations by non-admin users
     */
    abstract fun getPermissionTuples(
        roleName: String? = null, fileName: String? = null,
        permission: PermissionType? = null,
        roleNameToExclude: String? = null,
        roleVersionNumber: Int? = null, symKeyVersionNumber: Int? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<PermissionTuple>

    /**
     * Retrieve the file tuples matching the [fileName] starting
     * from the [offset] limiting the number of tuples to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no file tuples are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    abstract fun getFileTuples(
        fileName: String,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<FileTuple>


    /**
     * Retrieve the public asymmetric key of the given
     * [asymKeyType] belonging to the element of the
     * specified [elementType] by matching the [name] or
     * the [token] (at least one required). Note that
     * only operational or deleted elements are considered,
     * and files do not have public keys. If the key was
     * not found, return null. This method should support
     * invocations by non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    abstract fun getPublicKey(
        name: String? = null,
        token: String? = null,
        elementType: ElementTypeWithKey,
        asymKeyType: AsymKeysType,
    ): ByteArray?

    /**
     * Retrieve the version number belonging to the element
     * of the specified [elementType] by matching the [name]
     * or [token] (at least one required). Note that only
     * operational elements are considered, and users do not
     * have version numbers. Note also that only the latest
     * version number of files (i.e., the one used for encryption
     * are considered). If the version number was not found,
     * return null. This method should support invocations by
     * non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    abstract fun getVersionNumber(
        name: String? = null,
        token: String? = null,
        elementType: ElementTypeWithVersionNumber
    ): Int?

    /**
     * Retrieve the token of the element of
     * the given [type] matching the [name].
     * If the token was not found, return null.
     * This method should support invocations
     * by non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    abstract fun getToken(name: String, type: ElementTypeWithStatus): String?

    /**
     * Retrieve the status of the element of the
     * given [type] by matching the [name]
     * or [token] (at least one required).
     * If the status was not found, return null.
     * This method should support invocations by
     * non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    abstract fun getStatus(
        name: String? = null,
        token: String? = null,
        type: ElementTypeWithStatus
    ): ElementStatus?


    /**
     * Delete the [username] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a user (e.g., the public key to verify digital
     * signatures). Finally, return the outcome code.
     * Check that the user exists and was not already
     * deleted. Check that [username] is not the admin
     */
    abstract fun deleteUser(username: String): OutcomeCode

    /**
     * Delete the [roleName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a role (e.g., the public key to verify digital
     * signatures). Finally, return the outcome code.
     * Check that the role exists and was not already
     * deleted. Check that [roleName] is not the admin
     */
    abstract fun deleteRole(roleName: String): OutcomeCode

    /**
     * Delete the [fileName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a file. Finally, return the outcome code.
     * Check that the file exists and was not already
     * deleted
     */
    abstract fun deleteFile(fileName: String): OutcomeCode



    /**
     * Delete the role tuples matching the given
     * [roleName] and return the outcome code.
     * Check that [roleName] is not the admin.
     * Also check that at least one role tuple
     * is deleted, and if not check whether the
     * [roleName] exists and was not deleted
     */
    abstract fun deleteRoleTuples(roleName: String): OutcomeCode

    /**
     * Delete the permission tuples matching the [roleName]
     * and/or the [fileName] (at least one required). Finally,
     * return the outcome code. Check that [roleName] is not
     * the admin. Also check that at least one permission tuple
     * is deleted, and if not check whether the [roleName] and
     * the [fileName] exist and were not deleted
     */
    abstract fun deletePermissionTuples(
        roleName: String? = null,
        fileName: String? = null,
    ): OutcomeCode

    /**
     * Delete the file tuples matching the given
     * [fileName] and return the outcome code.
     * Check that at least one file tuple is
     * deleted, and if not check whether the
     * [fileName] exists and was not deleted
     */
    abstract fun deleteFileTuples(fileName: String): OutcomeCode



    /**
     * Increment the symmetric encryption version number
     * of the [fileName] by 1 and return the outcome code.
     * Check that the file exists and was not deleted
     */
    abstract fun incrementSymEncVersionNumberByOne(fileName: String): OutcomeCode



    /**
     * Update the asymmetric encryption and signing public keys
     * of the given [roleName] with the new [newAsymEncPublicKey]
     * and [newAsymSigPublicKey], and return the outcome code.
     * Check that the role exists and was not deleted
     */
    abstract fun updateRoleAsymKeys(
        roleName: String,
        newAsymEncPublicKey: PublicKey,
        newAsymSigPublicKey: PublicKey
    ): OutcomeCode



    /**
     * Update the permission, signature and signer token of the
     * given [updatedPermissionTuple] and return the outcome code.
     * Check that the permission tuple exists
     */
    abstract fun updatePermissionTuple(updatedPermissionTuple: PermissionTuple): OutcomeCode



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0. Finally, return
     * the outcome code
     */
    abstract fun lock(): OutcomeCode

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0.
     * Finally, return the outcome code
     */
    abstract fun rollback(): OutcomeCode

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0. Finally, return the
     * outcome code
     */
    abstract fun unlock(): OutcomeCode

    /**
     * This function is invoked whenever the interface
     * is dismissed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    abstract fun deinit()
}


/** Wrapper for the outcome [code] and eventual [parameters] */
@Serializable
data class WrapperMMParameters(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val parameters: MMInterfaceParameters? = null
)