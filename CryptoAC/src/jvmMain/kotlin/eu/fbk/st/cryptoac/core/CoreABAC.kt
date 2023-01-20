package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.ac.ACServiceABAC
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.dm.DMServiceABAC
import eu.fbk.st.cryptoac.mm.MMServiceABAC
import eu.fbk.st.cryptoac.model.*
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.rm.RMServiceABAC
import java.io.InputStream

/**
 * The CoreABAC extends the [Core] class by implementing an
 * attribute-based cryptographic access control scheme.
 * It receives the [coreParameters] and uses the [cryptoPKE] and
 * [cryptoSKE] objects to perform cryptographic computations,
 * and the [cryptoABE] for ABE cryptographic computations
 */
abstract class CoreABAC(
    override val cryptoPKE: CryptoPKE,
    override val cryptoSKE: CryptoSKE,
    open val cryptoABE: CryptoABE,
    override val coreParameters: CoreParameters,
) : Core(cryptoPKE, cryptoSKE, coreParameters) {

    /** The MM service */
    abstract override val mm: MMServiceABAC

    /** The RM service */
    abstract override val rm: RMServiceABAC?

    /** The DM service */
    abstract override val dm: DMServiceABAC

    /** The AC service */
    abstract override val ac: ACServiceABAC?



    /**
     * Add a new attribute with the given
     * [attributeName] (specifying an optional
     * [attributeToken] to the policy and
     * assign the admin to the new attribute
     * with the (optional) [attributeAdminValue].
     * If the attribute is a new one, set
     * the version number to 1. If the
     * attribute was previously deleted
     * (and it is thus being restored), set
     * the version number to the old version
     * number plus 1. Finally, return the
     * outcome code
     */
    abstract fun addAttribute(
        attributeName: String,
        attributeToken: String? = null,
        attributeAdminValue: String? = null
    ): OutcomeCode

    /**
     * Delete the [attribute] from the metadata and from
     * all ABE keys and access structures, refreshing ABE
     * and symmetric keys. If all the attributes of the
     * access structure of a resource are deleted (i.e.,
     * if the access structure would be empty), return
     * an error code. Finally, return the outcome code
     */
    abstract fun deleteAttributes(
        attribute: String
    ): OutcomeCode

    /**
     * Delete the [attributes] from the metadata and from
     * all ABE keys and access structures, refreshing ABE
     * and symmetric keys. If all the attributes of the
     * access structure of a resource are deleted (i.e.,
     * if the access structure would be empty), return
     * an error code. Finally, return the outcome code
     */
    abstract fun deleteAttributes(
        attributes: HashSet<String>
    ): OutcomeCode

    /**
     * Add a new resource with the given name [resourceName],
     * [resourceContent] and [enforcement] type to the policy.
     * Also, assign an [accessStructure] giving [permission]
     * over the resource. The [accessStructure] is assumed
     * not to embed version numbers yet. Encrypt and sign,
     * and upload the new [resourceContent] for the resource
     * [resourceName]. Finally, return the outcome code
     */
    abstract fun addResource(
        resourceName: String,
        resourceContent: InputStream,
        accessStructure: String,
        permission: PermissionType,
        enforcement: EnforcementType
    ): OutcomeCode

    /**
     * Delete the resource with the matching [resourceName] from
     * the policy, and delete all the related access structures
     * Finally, return the outcome code
     */
    abstract fun deleteResource(
        resourceName: String
    ): OutcomeCode

    /**
     * Assign the [attributeName] to the [username]
     * in the policy with the optional [attributeValue]
     * and refresh the [username]'s ABE key. Finally,
     * return the outcome code
     */
    abstract fun assignUserToAttributes(
        username: String,
        attributeName: String,
        attributeValue: String? = null
    ): OutcomeCode

    /**
     * Assign the [attributes] (key-value pairs)
     * to the [username] in the policy and refresh
     * the [username]'s ABE key. Finally, return
     * the outcome code
     */
    abstract fun assignUserToAttributes(
        username: String,
        attributes: HashMap<String, String?>
    ): OutcomeCode

    /**
     * Revoke the [attributeName] from the [username] in
     * the policy and refresh the [username]'s ABE key.
     * Refresh also symmetric keys to which the user
     * does not have access anymore, updating the
     * [attributeName]' version numbers. Finally,
     * return the outcome code
     */
    abstract fun revokeAttributesFromUser(
        username: String,
        attributeName: String
    ): OutcomeCode

    /**
     * Revoke the [attributes] from the [username] in
     * the policy and refresh the [username]'s ABE key.
     * Refresh also symmetric keys to which the user
     * does not have access anymore, updating each of
     * the [attributes]' version numbers. Finally,
     * return the outcome code
     */
    abstract fun revokeAttributesFromUser(
        username: String,
        attributes: HashSet<String>
    ): OutcomeCode

    /**
     * Add an [accessStructure] giving [permission]
     * over [resourceName]. The default behaviour
     * is to assign the same decrypting and encrypting
     * keys to all access structures of a given
     * resource (although it is possible to modify it
     * so to assign different keys or, e.g., tokens,
     * to different access structures). Finally,
     * return the outcome code
     */
    abstract fun assignAccessStructure(
        resourceName: String,
        accessStructure: String,
        permission: PermissionType,
    ): OutcomeCode

    /**
     * Update the token and increase by 1 the encryption
     * version number of the [resourceName]. Also, update
     * the access structures related to [resourceName]
     * with the [newAccessStructuresByPermission] (key is the
     * permission, value is the new access structure), the
     * new resource token, the new version number and also
     * generate new encryption keys (intuitively, keep the
     * old decryption keys, according to the lazy re-encryption
     * approach. The new access structures can either already
     * embed the version number of attributes or not, depending
     * on flag set by [newAccessStructuresEmbedVersionNumbers].
     * Finally, return the outcome code
     */
    abstract fun updateResourceAndAccessStructures(
        resourceName: String,
        newAccessStructuresByPermission: HashMap<PermissionType, String>,
        newAccessStructuresEmbedVersionNumbers: Boolean,
    ): OutcomeCode

    /**
     * Revoke the access structure giving [permission]
     * over the [resourceName] in the policy, refreshing
     * also the symmetric key of the [resourceName] in
     * remaining access structures. At least one access
     * structure should remain to avoid losing the symmetric
     * keys. If an invocation to this method would delete
     * the last access structure, return an error. Finally,
     * return the outcome code
     */
    abstract fun revokeAccessStructure(
        resourceName: String,
        permission: PermissionType,
    ): OutcomeCode

    /**
     * Refresh the ABE key of [username] according
     * to the assigned attributes. Finally, return
     * the outcome code
     */
    abstract fun generateUserABEKey(
        username: String,
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
     * Return the set of attributes, along with the
     * outcome code (if an error occurred, the
     * set of attributes will be null)
     */
    abstract fun getAttributes(): CodeAttributes

    /**
     * Return the set of resources, along with the
     * outcome code (if an error occurred, the
     * set of resources will be null)
     */
    abstract fun getResources(): CodeResources

    /**
     * Return the user-attribute assignments filtering
     * by the [username] and [attributeName], if given,
     * along with the outcome code (if an error
     * occurred, the set of attribute assignments will be
     * null)
     */
    abstract fun getAttributeAssignments(
        username: String? = null,
        attributeName: String? = null
    ): CodeAttributeTuples

    /**
     * Return the resource-access structure assignments
     * filtering by the [resourceName], if given, along
     * with the outcome code (if an error occurred, the
     * set of access structures will be null)
     */
    abstract fun getAccessStructures(
        resourceName: String? = null
    ): CodeAccessStructureTuples
}
