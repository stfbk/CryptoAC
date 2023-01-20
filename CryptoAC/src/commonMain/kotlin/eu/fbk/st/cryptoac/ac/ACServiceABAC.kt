package eu.fbk.st.cryptoac.ac

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.tuple.PermissionType

/**
 * Interface defining the
 * methods to interact with
 * a traditional AC enforcement
 * mechanism for an ABAC scenario
 */
interface ACServiceABAC : ACService {

    /**
     * U: set of users
     * A: set of attributes
     * P: set of resources
     * UA: set of users-attributes assignments
     * PA: set of resources-access structure-permission assignments
     */

    /**
     * Add [attributeName] to A
     */
    fun addAttribute(
        attributeName: String
    ): OutcomeCode?

    /**
     * Delete [attributeName] from
     * all set of attributes in UA
     * and access structures in PA
     */
    fun deleteAttribute(
        attributeName: String
    ): OutcomeCode?

    /** Add [resourceName] to P */
    fun addResource(
        resourceName: String
    ): OutcomeCode

    /**
     * Delete [resourceName] from P
     * and all assignments of
     * [resourceName] from PA
     */
    fun deleteResource(
        resourceName: String
    ): OutcomeCode?

    /**
     * Assign the [accessStructure]-[permission]
     * pair to [resourceName] in PA
     */
    fun assignAccessStructure(
        resourceName: String,
        accessStructure: String,
        permission: PermissionType
    ): OutcomeCode

    /** Delete ([accessStructure], (-, [resourceName])) from PA */
    fun revokeAccessStructure(
        resourceName: String,
        accessStructure: String,
    ): OutcomeCode

    /**
     * Assign the set of [attributes]
     * to [username] in UA (replace the
     * previous set of attributes)
     */
    fun assignUserToAttributes(
        username: String,
        attributes: HashSet<String>
    ): OutcomeCode

    /**
     * Remove the set of [attributes]
     * from [username] in UA (replace the
     * previous set of attributes)
     */
    fun revokeUserFromAttributes(
        username: String,
        attributes: HashSet<String>
    ): OutcomeCode

    /**
     * Update the set of attributes
     * to [username] in UA by adding
     * the new [attributes] (append
     * to the previous set of attributes)
     */
    fun updateAttributes(
        username: String,
        attributes: HashMap<String, String?>
    ): OutcomeCode

    /**
     * Update the access structure with
     * [newAccessStructure] of [resourceName]
     */
    fun updateAccessStructure(
        resourceName: String,
        newAccessStructure: String
    ): OutcomeCode?
}
