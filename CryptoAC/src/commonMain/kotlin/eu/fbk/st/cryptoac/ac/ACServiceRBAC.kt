package eu.fbk.st.cryptoac.ac

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.tuple.PermissionType

/**
 * Interface defining the
 * methods to interact with
 * a traditional AC enforcement
 * mechanism for an RBAC scenario
 */
interface ACServiceRBAC : ACService {

    /**
     * U: set of users
     * R: set of roles
     * P: set of resources
     * UR: set of user-role assignments
     * PA: set of role-permission assignments
     */

    /** Add [roleName] to R */
    fun addRole(
        roleName: String
    ): OutcomeCode

    /**
     * Delete [roleName] from R and
     * [roleName]'s assignments from
     * UR and PA
     */
    fun deleteRole(
        roleName: String
    ): OutcomeCode

    /** Add [resourceName] to P */
    fun addResource(
        resourceName: String
    ): OutcomeCode

    /**
     * Delete [resourceName] from P and
     * [resourceName]'s assignments from PA
     */
    fun deleteResource(
        resourceName: String
    ): OutcomeCode

    /** Add ([username], [roleName]) to UR */
    fun assignUserToRole(
        username: String,
        roleName: String
    ): OutcomeCode

    /** Delete ([username], [roleName]) from UR */
    fun revokeUserFromRole(
        username: String,
        roleName: String
    ): OutcomeCode

    /**
     * Add ([roleName], ([permission],
     * [resourceName])) to PA.
     */
    fun assignPermissionToRole(
        roleName: String,
        permission: PermissionType,
        resourceName: String
    ): OutcomeCode

    /** Delete ([roleName], (-, [resourceName])) from PA */
    fun revokePermissionFromRole(
        roleName: String,
        resourceName: String,
    ): OutcomeCode

    /**
     * Replace ([roleName], (-, [resourceName])) with
     * ([roleName], ([permission], [resourceName]))
     * in PA
     */
    fun updatePermissionToRole(
        roleName: String,
        permission: PermissionType,
        resourceName: String
    ): OutcomeCode

    /**
     * Check whether the [username] has
     * [permission] over [resourceName]
     * through role [roleName] (if given,
     * otherwise it is up to the AC service
     * to find a suitable role) and
     * return either CODE_000_SUCCESS
     * (if the user is authorized) or
     * CODE_037_FORBIDDEN (if the user is
     * not authorized). [permission] can
     * be either READ or WRITE
     */
    fun isUserAllowed(
        username: String,
        roleName: String? = null,
        permission: PermissionType,
        resourceName: String,
    ): OutcomeCode
}
