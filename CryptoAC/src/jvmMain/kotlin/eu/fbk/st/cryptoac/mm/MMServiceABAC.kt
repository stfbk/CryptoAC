package eu.fbk.st.cryptoac.mm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.model.ABACUnitElementTypeWithStatus
import eu.fbk.st.cryptoac.model.ABACUnitElementTypeWithVN

/**
 * Interface defining the methods to
 * interact with the MM for an ABAC
 * scenario
 */
interface MMServiceABAC : MMService {

    /**
     * Set the ABE master public key
     * ([mpk]) in the metadata
     */
    fun setMPK(mpk: String): OutcomeCode

    /**
     * Get the ABE MPK from the metadata.
     * Return null if the ABE MPK was not
     * found
     */
    fun getMPK(): String?

    /**
     * Add the [newAttribute] in the metadata and
     * return the outcome code. Check that the
     * [newAttribute] does not already exist or
     * was deleted. If the attribute was deleted
     * and [restoreIfDeleted] was set, restore
     * the operational status of the attribute
     */
    fun addAttribute(
        newAttribute: Attribute,
        restoreIfDeleted: Boolean
    ): OutcomeCode

    /**
     * Add the [newResource] in the metadata and
     * return the outcome code. Check that the
     * [newResource] does not already exist or
     * was deleted
     */
    fun addResource(
        newResource: Resource
    ): OutcomeCode

    /**
     * Add the [newAttributeTuples] in the metadata and
     * return the outcome code. Check that involved
     * users exist, are not incomplete or were not
     * deleted. Also check whether an attribute tuple
     * already exists
     */
    fun addAttributeTuples(
        newAttributeTuples: HashSet<AttributeTuple>
    ): OutcomeCode

    /**
     * Add the [newAccessStructureTuples] in the metadata
     * and return the outcome code. Check that involved
     * resources exist and were not deleted. Also check
     * whether an access structure tuple already exists
     */
    fun addAccessStructureTuples(
        newAccessStructureTuples: HashSet<AccessStructureTuple>
    ): OutcomeCode

    /**
     * Retrieve data of the attributes matching the specified
     * [attributeName] and [status], if given, starting from
     * the [offset] limiting the number of attributes to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no attributes are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    fun getAttributes(
        attributeName: String? = null,
        status: UnitElementStatus? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET,
        limit: Int = DEFAULT_LIMIT,
    ): HashSet<Attribute>

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
     * Retrieve the attribute tuples matching the [username]
     * and/or the [attributeName] (at least one required),
     * starting from the [offset] limiting the number of
     * tuples to return to the given [limit] and with the
     * (possibly) relevant information of whether the
     * user invoking this function [isAdmin]. If no
     * attribute tuples are found, return an empty set.
     * This method should support invocations by non-admin
     * users
     */
    fun getAttributeTuples(
        username: String? = null,
        attributeName: String? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET,
        limit: Int = DEFAULT_LIMIT,
    ): HashSet<AttributeTuple>

    /**
     * Retrieve the access structure tuples matching the
     * [resourceName], if given, starting from the [offset]
     * limiting the number of tuples to return to the given
     * [limit] and with the (possibly) relevant information
     * of whether the user invoking this function [isAdmin].
     * If no permission tuples are found, return an empty set.
     * This method should support invocations by non-admin
     * users
     */
    fun getAccessStructureTuples(
        resourceName: String? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET,
        limit: Int = DEFAULT_LIMIT,
    ): HashSet<AccessStructureTuple>

    /**
     * Retrieve the public asymmetric key of the given
     * [asymKeyType] belonging to the [name] or the
     * [token] (at least one required). Note that
     * only operational or deleted users are considered.
     * If the key was not found, return null. This method
     * should support invocations by non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    fun getUserPublicKey(
        name: String? = null,
        token: String? = null,
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
     */
    fun getVersionNumber(
        name: String? = null,
        token: String? = null,
        elementType: ABACUnitElementTypeWithVN,
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
        type: ABACUnitElementTypeWithStatus
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
        type: ABACUnitElementTypeWithStatus
    ): UnitElementStatus?

    /**
     * Delete the [attributeName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * an attribute (e.g., the version number, in case
     * the attribute gets restored). Finally, return the
     * outcome code. Check that the attribute exists and
     * was not already deleted.
     */
    fun deleteAttribute(
        attributeName: String
    ): OutcomeCode

    /**
     * Delete the [resourceName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a resource. Finally, return the outcome code.
     * Check that the resource exists and was not already
     * deleted
     */
    fun deleteResource(
        resourceName: String
    ): OutcomeCode

    /**
     * Delete the attribute tuples matching the [username]
     * and/or the [attributeName] (at least one required).
     * Finally, return the outcome code. Check that at
     * least one attribute tuple is deleted, and if not check
     * whether the [username] or the [attributeName] exists
     * and was not deleted
     */
    fun deleteAttributeTuples(
        username: String? = null,
        attributeName: String? = null,
    ): OutcomeCode

    /**
     * Delete the access structure tuples matching
     * the [resourceName] and the [permission], if
     * given. Finally, return the outcome code. Check
     * that exactly one access structure tuple is deleted,
     * and if not check whether the [resourceName]
     * exists and was not deleted, or that the access
     * structure tuple actually exists
     */
    fun deleteAccessStructureTuples(
        resourceName: String,
        permission: PermissionType? = null
    ): OutcomeCode

    /**
     * Update the token of the [resourceName] with the
     * [newResourceToken] and the encryption version
     * number with the [newSymEncKeyVersionNumber].
     * This method should also update the resource's token
     * across all metadata. Check that the resource exists
     * and was not deleted
     */
//    NO, QUESTO METODO NON DEVE "update the resource's token across all metadata"
//    PERCHE' LE TUPLE VANNO FIRMATE DIGITALMENTE UNA PER UNA
    fun updateResourceTokenAndVersionNumber(
        resourceName: String,
        oldResourceToken: String,
        newResourceToken: String,
        newSymEncKeyVersionNumber: Int,
    ): OutcomeCode

    /**
     * Update the token, access structure, encrypting and
     * decrypting key and encryption version number of the access
     * structure with the given [updatedAccessStructureTuple]
     */
    fun updateAccessStructureTuple(
        updatedAccessStructureTuple: AccessStructureTuple
    ): OutcomeCode

    /**
     * Replace the ABE key for [username] with
     * the given [newEncryptedUserABEKey]. Only
     * operational users are considered
     */
    fun updateUserABEKey(
        username: String,
        newEncryptedUserABEKey: ByteArray?
    ): OutcomeCode

    /**
     * Get the [username]'s ABE key. Only
     * operational users are considered.
     * If the key was not found, return
     * null
     */
    fun getUserABEKey(
        username: String,
    ): ByteArray?

    /**
     * Update the token of the [attributeName] with the
     * [newAttributeToken] and the version number with
     * the [newVersionNumber]. This method should also
     * update the attribute's token across all metadata.
     * Check that the attribute exists and was not deleted
     */
//    TODO NO, QUESTO METODO NON DEVE "update the attribute's token across all metadata"
//     PERCHE' LE TUPLE VANNO FIRMATE DIGITALMENTE UNA PER UNA
    fun updateAttributeTokenAndVersionNumber(
        attributeName: String,
        oldAttributeToken: String,
        newAttributeToken: String,
        newVersionNumber: Int
    ): OutcomeCode
}