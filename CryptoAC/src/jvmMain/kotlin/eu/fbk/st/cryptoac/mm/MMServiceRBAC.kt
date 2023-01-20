package eu.fbk.st.cryptoac.mm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.model.RBACUnitElementTypeWithKeys
import eu.fbk.st.cryptoac.model.RBACUnitElementTypeWithStatus
import eu.fbk.st.cryptoac.model.RBACUnitElementTypeWithVN
import java.security.PublicKey

/**
 * Interface defining the methods to
 * interact with the MM for an RBAC
 * scenario
 */
interface MMServiceRBAC : MMService {

    /**
     * Add the [newRole] in the metadata and
     * return the outcome code. Check that the
     * role does not already exist or was deleted
     */
    fun addRole(
        newRole: Role
    ): OutcomeCode

    /**
     * Add the [newResource] in the metadata and
     * return the outcome code. Check that the
     * resource does not already exist or was deleted
     */
    fun addResource(
        newResource: Resource
    ): OutcomeCode

    /**
     * Add the [newRoleTuples] in the metadata and
     * return the outcome code. Check that involved
     * users exist, are not incomplete or were not
     * deleted, and that involved roles exist and
     * were not deleted. Also check whether a role
     * tuple already exists
     */
    fun addRoleTuples(
        newRoleTuples: HashSet<RoleTuple>
    ): OutcomeCode

    /**
     * Add the [newPermissionTuples] in the metadata
     * and return the outcome code. Check that involved
     * roles exist and were not deleted and that involved
     * resources exist and were not deleted. Also check whether
     * a permission tuple already exists
     */
    fun addPermissionTuples(
        newPermissionTuples: HashSet<PermissionTuple>
    ): OutcomeCode

    /**
     * Retrieve data of the roles matching the specified
     * [roleName] and [status], if given, starting from
     * the [offset] limiting the number of roles to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no roles are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    fun getRoles(
        roleName: String? = null,
        status: UnitElementStatus? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET,
        limit: Int = DEFAULT_LIMIT,
    ): HashSet<Role>

    /**
     * Retrieve data of the resources matching the specified
     * [resourceName] and [status], if given, starting from
     * the [offset] limiting the number of resources to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no resources are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    fun getResources(
        resourceName: String? = null,
        status: UnitElementStatus? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET,
        limit: Int = DEFAULT_LIMIT,
    ): HashSet<Resource>

    /**
     * Retrieve the role tuples matching the [username]
     * and/or the [roleName], if given, starting from th
     * [offset] limiting the number of tuples to return
     * to the given [limit] and with the (possibly)
     * relevant information of whether the user invoking
     * this function [isAdmin]. If no role tuples are found,
     * return an empty set. This method should
     * support invocations by non-admin users
     */
    fun getRoleTuples(
        username: String? = null,
        roleName: String? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET,
        limit: Int = DEFAULT_LIMIT,
    ): HashSet<RoleTuple>

    /**
     * Retrieve the permission tuples matching the [roleName] and/or
     * the [resourceName] and not matching the [roleNameToExclude], if
     * given, starting from the [offset] limiting the number of tuples
     * to return to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function [isAdmin].
     * If no permission tuples are found, return an empty set. This
     * method should support invocations by non-admin users
     */
    // TODO remove the limitation that at least one is required
    fun getPermissionTuples(
        roleName: String? = null,
        resourceName: String? = null,
        roleNameToExclude: String? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET,
        limit: Int = DEFAULT_LIMIT,
    ): HashSet<PermissionTuple>

    /**
     * Retrieve the public asymmetric key of the given
     * [asymKeyType] belonging to the element of the
     * specified [elementType] by matching the [name] or
     * the [token] (at least one required). Note that
     * only operational or deleted elements are considered,
     * and resources do not have public keys. If the key was
     * not found, return null. This method should support
     * invocations by non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    fun getPublicKey(
        name: String? = null,
        token: String? = null,
        elementType: RBACUnitElementTypeWithKeys,
        asymKeyType: AsymKeysType,
    ): ByteArray?

    /**
     * Retrieve the version number belonging to the element
     * of the specified [elementType] by matching the [name]
     * or [token] (at least one required). Note that only
     * operational elements are considered, and users do not
     * have version numbers. Note also that only the latest
     * version number of resources (i.e., the one used for encryption
     * are considered). If the version number was not found,
     * return null. This method should support invocations by
     * non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    fun getVersionNumber(
        name: String? = null,
        token: String? = null,
        elementType: RBACUnitElementTypeWithVN
    ): Int?

    /**
     * Retrieve the token of the element of
     * the given [type] matching the [name].
     * If the token was not found, return null.
     * Note that only operational and deleted
     * elements are considered.
     * This method should support invocations
     * by non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    fun getToken(
        name: String,
        type: RBACUnitElementTypeWithStatus
    ): String?

    /**
     * Retrieve the status of the element of the
     * given [type] by matching the [name]
     * or [token] (at least one required).
     * If the status was not found, return null.
     * This method should support invocations by
     * non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    fun getStatus(
        name: String? = null,
        token: String? = null,
        type: RBACUnitElementTypeWithStatus
    ): UnitElementStatus?

    /**
     * Delete the [roleName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a role (e.g., the public key to verify digital
     * signatures). Finally, return the outcome code.
     * Check that the role exists and was not already
     * deleted. Check that [roleName] is not the admin
     */
    fun deleteRole(roleName: String): OutcomeCode

    /**
     * Delete the [resourceName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a resource. Finally, return the outcome code.
     * Check that the resource exists and was not already
     * deleted
     */
    fun deleteResource(resourceName: String): OutcomeCode

    /**
     * Delete the role tuples matching the given
     * [roleName] and return the outcome code.
     * Check that [roleName] is not the admin.
     * Also check that at least one role tuple
     * is deleted, and if not check whether the
     * [roleName] exists and was not deleted
     */
    fun deleteRoleTuples(roleName: String): OutcomeCode

    /**
     * Delete the permission tuples matching the [roleName]
     * and/or the [resourceName] (at least one required). Finally,
     * return the outcome code. Check that [roleName] is not
     * the admin. Also check that at least one permission tuple
     * is deleted, and if not check whether the [roleName] and
     * the [resourceName] exist and were not deleted
     */
    fun deletePermissionTuples(
        roleName: String? = null,
        resourceName: String? = null,
    ): OutcomeCode

    /**
     * Update the token of [roleName] with the [newRoleToken],
     * the asymmetric encryption and signing public keys with
     * the new [newAsymEncPublicKey] and [newAsymSigPublicKey]
     * and increase by 1 the [oldRoleVersionNumber]. Check that
     * the role exists and was not deleted
     */
    fun updateRoleTokenAndVersionNumberAndAsymKeys(
        roleName: String,
        oldRoleVersionNumber: Int,
        oldRoleToken: String,
        newRoleToken: String,
        newAsymEncPublicKey: PublicKey,
        newAsymSigPublicKey: PublicKey
    ): OutcomeCode

    /**
     * Update the version numbers of the [updatedResource]
     * and return the outcome code. Check that the resource
     * exists
     * TODO also check that the resource was not deleted (perhaps this check is already implemented in overriding method)
     */
    fun updateResourceVersionNumber(updatedResource: Resource): OutcomeCode

    /**
     * Update the token of the [resourceName] with the
     * [newResourceToken] and the encryption version
     * number with the [newSymEncKeyVersionNumber].
     * Check that the resource exists
     * TODO also check that the resource was not deleted (perhaps this check is already implemented in overriding method)
     */
    fun updateResourceTokenAndVersionNumber(
        resourceName: String,
        oldResourceToken: String,
        newResourceToken: String,
        newSymEncKeyVersionNumber: Int,
    ): OutcomeCode

    /**
     * Update all fields (except role and resource name) of the
     * given [updatedPermissionTuple] and return the outcome code.
     * Check that the permission tuple exists
     */
    fun updatePermissionTuple(
        updatedPermissionTuple: PermissionTuple
    ): OutcomeCode
}
