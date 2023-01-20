package eu.fbk.st.cryptoac.ac.opa

import eu.fbk.st.cryptoac.model.tuple.PermissionType
import kotlinx.serialization.Serializable

/**
 * Describe the RBAC document for OPA:
 * - [allow] the evaluation of the "allow"
 *   policy
 * - [randomID] a random string acting as ID
 * - [ur] is the list of UR assignments for
 *   each user. The key is the name of the user,
 *   the value is the list of roles assigned to
 *   the user;
 * - [pa] is the list of PA assignments for
 *   each role. The key is the name of the role,
 *   the value is the list of permissions assigned to
 *   the role
 */
@Serializable
data class OPADocumentRBAC(
    var allow: Boolean? = null,
    val randomID: String? = null,
    val ur: HashMap<String, HashSet<String>>,
    val pa: HashMap<String, HashSet<OPAPermission>>,
) {
    /**
     * Remove user [username] from the
     * UR set in the RBAC policy
     */
    fun removeUser(username: String) {
        ur.remove(username)
    }

    /**
     * Remove role [roleName] from the
     * UR and PA sets in the RBAC policy
     */
    fun removeRole(roleName: String) {
        ur.forEach {
            it.value.remove(roleName)
        }
        pa.remove(roleName)
    }

    /**
     * Remove resource [resourceName] from the
     * PA set in the RBAC policy
     */
    fun removeResource(resourceName: String) {
        pa.forEach {
            it.value.removeAll { permission ->
                permission.resource == resourceName
            }
        }
    }

    /**
     * Return the set of users assigned to role [roleName]
     */
    fun getUsersAssignedToRole(roleName: String): HashSet<String> {
        val users = hashSetOf<String>()
        ur.forEach {
            if (it.value.contains(roleName)) {
                users.add(it.key)
            }
        }
        return users
    }

    /**
     * Add [roleName] to the roles assigned to [username] in
     * the UR set in the RBAC policy
     */
    fun assignUserToRole(
        username: String,
        roleName: String
    ) {
        ur.getOrPut(username) {
            hashSetOf()
        }.add(roleName)
    }

    /**
     * Remove [roleName] from the roles assigned to [username] in
     * the UR set in the RBAC policy
     */
    fun revokeUserFromRole(
        username: String,
        roleName: String
    ) {
        ur[username]?.remove(roleName)
    }

    /**
     * Return the permissions assigned to role [roleName]
     * in a map with key resource name and value list of
     * permissions
     */
    fun getPermissionsAssignedToRole(
        roleName: String
    ): HashMap<String, HashSet<PermissionType>> {
        val permissionsByResource = HashMap<String, HashSet<PermissionType>>()
        pa[roleName]?.forEach {
            permissionsByResource.getOrPut(
                it.resource
            ){
                hashSetOf()
            }.add(it.permission)
        }
        return permissionsByResource
    }

    /**
     * Add [resourceName]-[permission] to the permissions
     * assigned to [roleName] in the PA set in the RBAC policy
     */
    fun addPermissionToRole(
        roleName: String,
        resourceName: String,
        permission: PermissionType
    ) {
        pa.getOrPut(roleName) {
            hashSetOf()
        }.add(
            OPAPermission(
                resource = resourceName,
                permission = permission
            ))
    }

    /**
     * Remove [resourceName]-[*] from the permissions
     * assigned to [roleName] in the PA set in the RBAC policy
     */
    fun revokePermissionFromRole(
        roleName: String,
        resourceName: String
    ) {
        pa[roleName]?.removeAll {
            it.resource == resourceName
        }
    }
}