package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.ac.ACServiceRBAC
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.dm.DMServiceRBAC
import eu.fbk.st.cryptoac.mm.MMServiceRBAC
import eu.fbk.st.cryptoac.model.*
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.rm.RMServiceRBAC
import java.io.InputStream

/**
 * The CoreRBAC extends the [Core] class by implementing a
 * role-based cryptographic access control scheme.
 * It receives the [coreParameters] and uses the [cryptoPKE] and
 * [cryptoSKE] objects to perform cryptographic computations
 */
abstract class CoreRBAC(
    override val cryptoPKE: CryptoPKE,
    override val cryptoSKE: CryptoSKE,
    override val coreParameters: CoreParameters
) : Core(cryptoPKE, cryptoSKE, coreParameters) {

    /** The MM service */
    abstract override val mm: MMServiceRBAC

    /** The RM service */
    abstract override val rm: RMServiceRBAC?

    /** The DM service */
    abstract override val dm: DMServiceRBAC

    /** The AC service */
    abstract override val ac: ACServiceRBAC?



    /**
     * Add a new role with the given [roleName]
     * to the policy and assign the admin to
     * the new role. Finally, return the outcome
     * code
     */
    abstract fun addRole(
        roleName: String
    ): OutcomeCode

    /**
     * Delete the role with the matching [roleName] from
     * the policy and revoke all users and permissions
     * from the role. Finally, return the outcome code
     */
    abstract fun deleteRole(
        roleName: String
    ): OutcomeCode

    /**
     * Add a new resource with the given name [resourceName],
     * [resourceContent], [enforcement] type to the policy.
     * Encrypt, sign and upload the new [resourceContent]
     * for the resource [resourceName]. Also, assign all
     * permissions to the admin over the resource. Finally,
     * return the outcome code
     */
    abstract fun addResource(
        resourceName: String,
        resourceContent: InputStream,
        enforcement: EnforcementType
    ): OutcomeCode

    /**
     * Delete the resource with the matching [resourceName] from
     * the policy, and delete all the related permissions.Finally,
     * return the outcome code
     */
    abstract fun deleteResource(
        resourceName: String
    ): OutcomeCode

    /**
     * Assign the user [username] to the role [roleName]
     * in the policy. Finally, return the outcome code
     */
    abstract fun assignUserToRole(
        username: String,
        roleName: String
    ): OutcomeCode

    /**
     * Revoke the user [username] from the role [roleName]
     * from the policy. Finally, return the outcome code
     */
    abstract fun revokeUserFromRole(
        username: String,
        roleName: String
    ): OutcomeCode

    /**
     * Assigns the [permission] to the role [roleName] over
     * the resource [resourceName] in the policy. Finally,
     * return the outcome code
     */
    abstract fun assignPermissionToRole(
        roleName: String,
        resourceName: String,
        permission: PermissionType
    ): OutcomeCode

    /**
     * Revoke the [permission] from the role [roleName] over
     * the resource [resourceName] in the policy. Finally,
     * return the outcome code
     */
    abstract fun revokePermissionFromRole(
        roleName: String,
        resourceName: String,
        permission: PermissionType
    ): OutcomeCode



    /**
     * Download, decrypt and check the signature of
     * the content of the resource [resourceName]
     * and return it along with the outcome code (if an
     * error occurred, the content of the resource will
     * be null)
     */
    abstract fun readResource(
        resourceName: String
    ): CodeResource

    /**
     * Encrypt, sign and upload the new [resourceContent]
     * for the resource [resourceName]. Finally, return
     * the outcome code
     */
    abstract fun writeResource(
        resourceName: String,
        resourceContent: InputStream
    ): OutcomeCode



    /**
     * Return the set of roles, along with the
     * outcome code (if an error occurred, the
     * set of roles will be null)
     */
    abstract fun getRoles(): CodeRoles

    /**
     * Return the set of resources, along with the
     * outcome code (if an error occurred, the
     * set of resources will be null)
     */
    abstract fun getResources(): CodeResources

    /**
     * Return the user-role assignments filtering
     * by the [username] and [roleName], if given,
     * along with the outcome code (if an error
     * occurred, the set of role tuples will be
     * null)
     */
    abstract fun getAssignments(
        username: String? = null,
        roleName: String? = null
    ): CodeRoleTuples

    /**
     * Return the role-resource permissions filtering
     * by the [username], [roleName] and [resourceName],
     * if given, along with the outcome code (if an error
     * occurred, the set of permission tuples will be null)
     */
    abstract fun getPermissions(
        username: String? = null,
        roleName: String? = null,
        resourceName: String? = null
    ): CodePermissionTuples
}
