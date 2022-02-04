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

    /** The number of locks on the database for the lock-rollback-unlock mechanism */
    var locks = 0

    /**
     * Initialize the admin by adding in the metadata the
     * [admin] as both user and role and the [adminRoleTuple]
     * and return the outcome code
     */
    abstract fun initAdmin(admin: User, adminRoleTuple: RoleTuple): OutcomeCode

    /**
     * Initialize the user by adding in the metadata the
     * public keys and token of the [user], updating also
     * the status flag, and return the outcome code
     */
    abstract fun initUser(user: User): OutcomeCode

    /**
     * Return whether the user with the given [username]
     * is an admin user or not
     */
    abstract fun isUserAdmin(username: String): WrappedBoolean



    /**
     * Add the [newUser] in the metadata. The user's asymmetric encryption
     * and signing public keys and token will be set by the user him/herself
     * later on (initUser function). Finally, return the outcome code together
     * with user's MM configuration parameters
     */
    abstract fun addUser(newUser: User): WrapperMMParameters

    /**
     * Add the [newRole] in the metadata
     * and return the outcome code
     */
    abstract fun addRole(newRole: Role): OutcomeCode

    /**
     * Add the [newFile] in the metadata
     * and return the outcome code
     */
    abstract fun addFile(newFile: File): OutcomeCode



    /**
     * Add the [newRoleTuples] in the metadata and
     * return the outcome code
     */
    abstract fun addRoleTuples(newRoleTuples: HashSet<RoleTuple>): OutcomeCode

    /**
     * Add the [newPermissionTuples] in the metadata and
     * return the outcome code
     */
    abstract fun addPermissionTuples(newPermissionTuples: HashSet<PermissionTuple>): OutcomeCode

    /**
     * Add the [newFileTuples] in the metadata and
     * return the outcome code
     */
    abstract fun addFileTuples(newFileTuples: HashSet<FileTuple>): OutcomeCode



    /**
     * Retrieve data of the users matching the specified [username]
     * and [status], if given, starting from the [offset] limiting
     * the number of users to return to the given [limit]
     */
    abstract fun getUsers(
        username: String? = null,
        status: ElementStatus? = null,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<User>

    /**
     * Retrieve data of the roles matching the specified [roleName]
     * and [status], if given, starting from the [offset] limiting
     * the number of roles to return to the given [limit]
     */
    abstract fun getRoles(
        roleName: String? = null,
        status: ElementStatus? = null,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<Role>

    /**
     * Retrieve data of the files matching the specified [fileName]
     * and [status], if given, starting from the [offset] limiting
     * the number of files to return to the given [limit] and with
     * the (possibly) relevant information of whether the user
     * invoking this function [isAdmin]
     */
    abstract fun getFiles(
        fileName: String? = null,
        status: ElementStatus? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<File>


    /**
     * Retrieve the role tuples matching the [username] and/or the [roleName],
     * starting from the [offset] limiting the number of tuples to return to
     * the given [limit] and with the (possibly) relevant information of
     * whether the user invoking this function [isAdmin]
     */
    abstract fun getRoleTuples(
        username: String? = null, roleName: String? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<RoleTuple>

    /**
     * Retrieve the permission tuples matching the [roleName] and/or
     * the [fileName], further filtering by [roleToken], [fileToken],
     * [permission], [roleVersionNumber] and [symKeyVersionNumber] and
     * not matching the [roleNameToExclude], if given, starting from
     * the [offset] limiting the number of tuples to return to the given
     * [limit] and with the (possibly) relevant information of whether
     * the user invoking this function [isAdmin]
     */
    abstract fun getPermissionTuples(
        roleName: String? = null, fileName: String? = null,
        roleToken: String? = null, fileToken: String? = null,
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
     * information of whether the user invoking this function [isAdmin]
     */
    abstract fun getFileTuples(
        fileName: String,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
    ): HashSet<FileTuple>


    /**
     * Retrieve the public asymmetric key of the given [asymKeyType] belonging
     * to the element of the specified [elementType] by matching the [name] or
     * the [token] (at least one required). Note that only operational elements
     * are considered, and files do not have public keys
     */
    abstract fun getPublicKey(
        name: String? = null, token: String? = null, elementType: ElementTypeWithKey, asymKeyType: AsymKeysType,
    ): ByteArray?

    /**
     * Retrieve the version number belonging to the element of the specified
     * [elementType] by matching the [name] or [token] (at least one required).
     * Note that only operational elements are considered, and users do not
     * have version numbers. Note also that only encryption files version
     * numbers are considered
     */
    abstract fun getVersionNumber(
        name: String? = null, token: String? = null, elementType: ElementTypeWithVersionNumber
    ): Int?

    /**
     * Retrieve the token of the element of the given [type] matching
     * the [name], if given. Only operational elements are considered
     */
    abstract fun getToken(name: String, type: ElementTypeWithStatus): String?

    /**
     * Retrieve the status of the element of the
     * given [type] matching the given [name]
     */
    abstract fun getStatus(name: String, type: ElementTypeWithStatus): ElementStatus?


    /**
     * Delete the [username] but keep at least the public key,
     * so to verify digital signatures signed by the user and
     * return the outcome code.
     *
     * In this implementation, move the [username] in the deleted
     * users table and delete the user at database level
     */
    abstract fun deleteUser(username: String): OutcomeCode

    /**
     * Delete the [roleName] and return the outcome code.
     *
     * In this implementation, move the [roleName] in the
     * deleted roles table
     */
    abstract fun deleteRole(roleName: String): OutcomeCode

    /**
     * Delete the [fileName] and return the outcome code.
     *
     * In this implementation, move the [fileName] in the
     * deleted files table
     */
    abstract fun deleteFile(fileName: String): OutcomeCode



    /**
     * Delete the role tuple matching the given
     * [roleName] and return the outcome code
     */
    abstract fun deleteRoleTuples(roleName: String): OutcomeCode

    /**
     * Delete the permission tuples matching the [roleName] and/or
     * the [fileName] (at least one required), further filtering by
     * [roleVersionNumber], if given. Finally, return the outcome code
     */
    abstract fun deletePermissionTuples(roleName: String? = null, fileName: String? = null, roleVersionNumber: Int? = null): OutcomeCode

    /**
     * Delete the file tuple matching the given
     * [fileName] and return the outcome code
     */
    abstract fun deleteFileTuples(fileName: String): OutcomeCode



    /**
     * Increment the symmetric encryption version number
     * of the [fileName] by 1 and return the outcome code
     */
    abstract fun incrementSymEncVersionNumberByOne(fileName: String): OutcomeCode



    /**
     * Update the asymmetric encryption and signing public keys
     * of the given [roleName] with the new [newAsymEncPublicKey]
     * and [newAsymSigPublicKey] and return the outcome code
     */
    abstract fun updateRoleAsymKeys(roleName: String, newAsymEncPublicKey: PublicKey, newAsymSigPublicKey: PublicKey): OutcomeCode



    /**
     * Update the permission, signature and signer token of the
     * given [updatedPermissionTuple] and return the outcome code
     */
    abstract fun updatePermissionTuple(updatedPermissionTuple: PermissionTuple): OutcomeCode



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0
     */
    abstract fun lock(): OutcomeCode

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0
     */
    abstract fun rollback(): OutcomeCode

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0
     */
    abstract fun unlock(): OutcomeCode
}



/** Wrapper for the outcome [code] and a [boolean] value */
data class WrappedBoolean(val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, val boolean: Boolean? = null)

/** Wrapper for the outcome [code] and eventual [parameters] */
@Serializable
data class WrapperMMParameters(val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, val parameters: MMInterfaceParameters? = null)