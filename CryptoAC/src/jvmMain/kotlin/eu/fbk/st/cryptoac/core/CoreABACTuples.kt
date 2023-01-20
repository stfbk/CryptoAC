package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.ac.ACServiceParameters
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.crypto.CryptoABE.Companion.attributeAndValueDelimiter
import eu.fbk.st.cryptoac.crypto.CryptoABE.Companion.attributeSequenceDelimiter
import eu.fbk.st.cryptoac.crypto.CryptoABE.Companion.nameAndVersionNumberDelimiter
import eu.fbk.st.cryptoac.crypto.openabe.*
import eu.fbk.st.cryptoac.dm.DMServiceParameters
import eu.fbk.st.cryptoac.mm.MMServiceParameters
import eu.fbk.st.cryptoac.mm.MMServiceRemoteUPParameters
import eu.fbk.st.cryptoac.mm.NO_LIMIT
import eu.fbk.st.cryptoac.model.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.model.tuple.Condition.Companion.parseAccessStructure
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.rm.RMServiceParameters
import it.stefanoberlato.oabe.OpenABECryptoContextDecrypt
import mu.KotlinLogging
import java.io.InputStream

private val logger = KotlinLogging.logger {}

/**
 * The CoreABACTuples extends the [CoreABAC] class by implementing
 * the basic functions for an attribute-based CAC scheme based on tuples.
 * It receives the [coreParameters] and uses the [cryptoPKE] and
 * [cryptoSKE] objects to perform cryptographic computations,
 * and the [cryptoABE] for ABE cryptographic computations.
 */
abstract class CoreABACTuples(
    override val cryptoPKE: CryptoPKE,
    override val cryptoSKE: CryptoSKE,
    override val cryptoABE: CryptoABE,
    override val coreParameters: CoreParametersABAC,
) : CoreABAC(cryptoPKE, cryptoSKE, cryptoABE, coreParameters) {

    /** Asymmetric encryption key pair */
    protected abstract val asymEncKeyPair: KeyPairCryptoAC

    /** Asymmetric signature key pair */
    protected abstract val asymSigKeyPair: KeyPairCryptoAC

    /**
     * This function is invoked each time the core object
     * is destroyed, and it should contain the code to
     * de-initialize the core (e.g., possibly disconnect
     * remote services like MQTT brokers, databases, wipe
     * cryptographic secrets, etc.)
     *
     * In this implementation, also deinit the [cryptoABE]
     */
    override fun deinitCore() {
        super.deinitCore()
        cryptoABE.deinit()
    }

    /**
     * This function is invoked by the admin, and
     * it should configure the services, initialize
     * the admin's status in the various services,
     * set the value of relevant parameters and return
     * the outcome code. Ideally, this function should
     * be invoked only once. When implementing this
     * function, remember to decide how to handle (e.g.,
     * reject or allow) subsequent invocations
     *
     * In this implementation, add the ABE master public
     * key and the admin's (encrypting and verifying) public
     * keys in the metadata. Also, create an attribute [ADMIN]
     * that gives access to any ABE-encrypted ciphertext. This
     * is especially useful when the admin has to perform
     * administrative operations (such as, e.g., updating access
     * control tuples) and needs to decrypt old symmetric keys.
     * Then, add the admin user in the AC and assign the admin
     * to the admin attribute in the MM and AC. Finally, return
     * the outcome code
     */
    override fun configureServices(): OutcomeCode {

        logger.info { "Initializing admin's keys for admin ${user.name}" }

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Configure services (e.g., create tables in database) */
        code = mm.configure()
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = rm?.configure(coreParameters)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = dm.configure(coreParameters)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }
        code = ac?.configure()
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Set the MPK in the metadata */
        val masterPublicKey = cryptoABE.exportABEPublicParams()
        code = mm.setMPK(mpk = masterPublicKey)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin in the ac */
        code = ac?.addAdmin(newAdmin = user)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return if (code == CODE_035_ADMIN_ALREADY_INITIALIZED) {
                logger.warn { "Code was $code, replacing with $CODE_077_SERVICE_ALREADY_CONFIGURED" }
                endOfMethod(CODE_077_SERVICE_ALREADY_CONFIGURED)
            } else {
                endOfMethod(code)
            }
        }

        /** Add the admin attribute in the AC */
        code = ac?.addAttribute(attributeName = user.name)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin attribute assignment in the AC */
        code = ac?.assignUserToAttributes(
            username = user.name,
            attributes = hashSetOf(user.name)
        ) ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin in the MM */
        code = mm.addAdmin(newAdmin = user)
        if (code != CODE_000_SUCCESS) {
            return if (code == CODE_035_ADMIN_ALREADY_INITIALIZED) {
                logger.warn { "Code was $code, replacing with $CODE_077_SERVICE_ALREADY_CONFIGURED" }
                endOfMethod(CODE_077_SERVICE_ALREADY_CONFIGURED)
            } else {
                endOfMethod(code)
            }
        }

        /** Add the admin in the DM */
        code = dm.addAdmin(newAdmin = user)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the admin in the RM */
        code = rm?.addAdmin(newAdmin = user)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /**
         * Add the admin attribute (the function also
         * assigns the new attribute to the admin and
         * re-create the admin's ABE key)
         */
        return endOfMethod(addAttribute(
            attributeName = ADMIN,
            attributeToken = ADMIN
        ))
    }

    /**
     * Add a user with the given [username] to the
     * policy and return eventual configuration
     * parameters along with the outcome code
     * (if an error occurred, the configuration
     * parameters will be null). Note that users
     * cannot be assigned (to, e.g., attributes or
     * roles) until they invoke the initUser method
     */
    override fun addUser(
        username: String
    ): CodeCoreParameters {
        logger.info { "Adding user $username" }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CodeCoreParameters(CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the services */
        val lockCode = startOfMethod()
        if (lockCode != CODE_000_SUCCESS) {
            return CodeCoreParameters(lockCode)
        }

        /** Add the user in the MM */
        val userToAdd = User(username)
        val addMMResult = mm.addUser(
            newUser = userToAdd
        )
        if (addMMResult.code != CODE_000_SUCCESS) {
            return CodeCoreParameters(endOfMethod(
                code = addMMResult.code
            ))
        }

        /** Add the user in the RM */
        val addRMResult = rm?.addUser(
            newUser = userToAdd
        )
        if (addRMResult != null) {
            if (addRMResult.code != CODE_000_SUCCESS) {
                return CodeCoreParameters(endOfMethod(
                    code = addRMResult.code
                ))
            }
        }

        /** Add the user in the DM */
        val addDMResult = dm.addUser(
            newUser = userToAdd
        )
        if (addDMResult.code != CODE_000_SUCCESS) {
            return CodeCoreParameters(endOfMethod(
                code = addDMResult.code
            ))
        }

        /** Add the user in the AC */
        val addACResult = ac?.addUser(
            newUser = userToAdd
        )
        if (addACResult != null) {
            if (addACResult.code != CODE_000_SUCCESS) {
                return CodeCoreParameters(endOfMethod(
                    code = addACResult.code
                ))
            }
        }

        return CodeCoreParameters(
            code = endOfMethod(
                code = CODE_000_SUCCESS
            ),
            parameters = CoreParametersABAC(
                user = User(username),
                coreType = coreParameters.coreType,
                cryptoType = coreParameters.cryptoType,
                cryptoABEType = coreParameters.cryptoABEType,
                abePublicParameters = cryptoABE.exportABEPublicParams(),
                mmServiceParameters = addMMResult.parameters as MMServiceParameters,
                rmServiceParameters = addRMResult?.parameters as RMServiceParameters?,
                dmServiceParameters = addDMResult.parameters as DMServiceParameters,
                acServiceParameters = addACResult?.parameters as ACServiceParameters?,
            )
        )
    }

    /**
     * Delete the user with the matching [username] from
     * the policy and revoke the user from all assignments
     * (of, e.g., attributes or roles). Finally, return
     * the outcome code
     */
    override fun deleteUser(
        username: String
    ): OutcomeCode {
        logger.info { "Deleting user $username" }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (username == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN user" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Get all attributes assigned to the user */
        val attributeTuples = mm.getAttributeTuples(
            username = username,
            isAdmin = user.isAdmin
        )
        if (attributeTuples.isNotEmpty()) {
            val attributes = attributeTuples.map {
                verifyTupleSignature(it)
                it.attributeName
            }.toHashSet()

            /** Revoke all attributes from the user */
            code = revokeAttributesFromUser(
                username = username,
                attributes = attributes
            )
            if (code != CODE_000_SUCCESS) {
                return endOfMethod(
                    code = code
                )
            }
        }

        /** Delete the user from the MM */
        code = mm.deleteUser(username)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }

        /** Delete the user from the RM */
        code = rm?.deleteUser(username)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }

        /** Delete the user from the DM */
        code = dm.deleteUser(username)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }

        /** Delete the user from the AC */
        code = ac?.deleteUser(username)
            ?: CODE_000_SUCCESS
        return endOfMethod(
            code = code
        )
    }



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
    override fun addAttribute(
        attributeName: String,
        attributeToken: String?,
        attributeAdminValue: String?
    ): OutcomeCode{
        logger.info { "Adding attribute $attributeName" }

        /** Guard clauses */
        if (attributeName.isBlank()) {
            logger.warn { "Attribute name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * Check whether the attribute was
         * previously deleted or is a new one
         */
        val deletedAttribute = mm.getAttributes(
            attributeName = attributeName
        ).firstOrNull()
        val isAttributeANewOne = (deletedAttribute == null)
        val attributeVersionNumber: Int = if (isAttributeANewOne) {
            logger.debug { "The attribute $attributeName is a new one" }
            1
        } else {
            when (deletedAttribute!!.status) {
                UnitElementStatus.DELETED -> {
                    logger.warn { "The attribute $attributeName was deleted, restoring it" }
                    deletedAttribute.versionNumber + 1
                }
                UnitElementStatus.OPERATIONAL -> {
                    logger.info { "The attribute $attributeName already exists and it is operational" }
                    return endOfMethod(
                        code = CODE_065_ATTRIBUTE_ALREADY_EXISTS,
                        dmLocked = false
                    )
                }
                UnitElementStatus.INCOMPLETE -> {
                    val message = "Attributes cannot be incomplete"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
            }
        }

        /** Create the new Attribute object for the [attributeName] */
        val newAttribute = Attribute(
            name = attributeName,
            versionNumber = attributeVersionNumber
        ).apply {
            if (attributeToken != null) {
                token = attributeToken
            }
        }

        /** Add (or restore) the attribute in the MM */
        code = mm.addAttribute(
            newAttribute = newAttribute,
            restoreIfDeleted = !isAttributeANewOne
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Add the attribute to the AC */
        code = ac?.addAttribute(attributeName)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Assign the attribute to the admin */
        return endOfMethod(
            code = assignUserToAttributes(
                username = user.name,
                attributeName = attributeName,
                attributeValue = attributeAdminValue
            ),
            dmLocked = false
        )
    }

    /**
     * Delete the [attribute] from the metadata and from
     * all ABE keys and access structures, refreshing ABE
     * and symmetric keys. If all the attributes of the
     * access structure of a resource are deleted (i.e.,
     * if the access structure would be empty), return
     * an error code. Finally, return the outcome code
     */
    override fun deleteAttributes(
        attribute: String
    ): OutcomeCode {
        return deleteAttributes(hashSetOf(attribute))
    }

    /**
     * Delete the [attributes] from the metadata and from
     * all ABE keys and access structures, refreshing ABE
     * and symmetric keys. If all the attributes of the
     * access structure of a resource are deleted (i.e.,
     * if the access structure would be empty), return
     * an error code. Finally, return the outcome code
     */
    override fun deleteAttributes(
        attributes: HashSet<String>
    ): OutcomeCode {
        logger.info { "Deleting the following attributes (one per row below):" }
        attributes.forEachIndexed { index, attribute ->
            logger.info { "${index + 1}: attribute $attribute" }
        }

        /** Guard clauses */
        if (attributes.isEmpty()) {
            logger.warn { "Set of attributes to delete is empty" }
            return CODE_020_INVALID_PARAMETER
        }
        attributes.forEach {
            if (it.isBlank()) {
                logger.warn { "Attribute name is blank" }
                return CODE_020_INVALID_PARAMETER
            }
            if (it == ADMIN) { // TODO test that this behaviour works properly
                logger.warn { "Cannot delete the $ADMIN attribute" }
                return CODE_022_ADMIN_CANNOT_BE_MODIFIED
            }
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * For each attribute, get the attribute
         * version number (we will need the version
         * number when checking for the presence of
         * an attribute in an access structure).
         * Then, get all users that are assigned to
         * that attribute (these users are those for
         * which we will need to update the ABE secret
         * key), then delete all related users' attribute
         * tuples
         */
        val attributesWithVersionNumberCode = getAttributeVersionNumbers(
            attributes = attributes,
        )
        code = attributesWithVersionNumberCode.code
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        val usersToRenewKey = hashSetOf<String>()
        val attributesWithVersionNumberString = hashSetOf<String>()
        attributesWithVersionNumberCode.attributes!!.forEach { attribute ->
            val attributeName = attribute.name
            attributesWithVersionNumberString.add(concatenateAttributeNameAndVersionNumber(
                name = attributeName,
                versionNumber = attribute.versionNumber
            ))

            logger.debug { "Getting users assigned to attribute $attributeName" }
            mm.getAttributeTuples(
                attributeName = attributeName
            ).forEach { attributeTuple ->
                verifyTupleSignature(attributeTuple)
                usersToRenewKey.add(attributeTuple.username)
            }

            logger.debug { "Delete tuples of attribute $attributeName" }
            code = mm.deleteAttributeTuples(
                attributeName = attributeName
            )
            if (code != CODE_000_SUCCESS) {
                return@forEach
            }

            logger.debug { "Delete attribute $attributeName" }
            code = mm.deleteAttribute(
                attributeName = attributeName
            )
            if (code != CODE_000_SUCCESS) {
                return@forEach
            }

            /** Delete the attribute from the AC */
            code = ac?.deleteAttribute(
                attributeName = attributeName
            ) ?: CODE_000_SUCCESS
            if (code != CODE_000_SUCCESS) {
                return@forEach
            }
        }
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        logger.info { "Renewing ABE key of ${usersToRenewKey.size} users" }
        usersToRenewKey.forEach { username ->
            logger.debug { "Renewing ABE key of user $username" }
            code = generateUserABEKey(username)
            if (code != CODE_000_SUCCESS) {
                return@forEach
            }
        }


        /**
         * Get all access structures tuples from which
         * we will remove the deleted attributes. If
         * an access structure gets modified, simply
         * invoke the updateAccessStructure function
         * (we group access structure tuples that are
         * related to the same resource, as they need
         * to share the same symmetric keys, even though
         * encrypted under different access structures.
         * For this reason, if even a single access structure
         * tuple of a resource is updated, then we need to
         * update all access structure tuples of that resource)
         */
        val accessStructureTuples = mm.getAccessStructureTuples()
        val accessStructureTuplesByResource = hashMapOf<String, HashSet<AccessStructureTuple>>()
        accessStructureTuples.forEach { accessStructureTuple ->
            verifyTupleSignature(accessStructureTuple)
            val resourceName = accessStructureTuple.resourceName
            accessStructureTuplesByResource.getOrPut(resourceName) { hashSetOf() }.add(accessStructureTuple)
        }

        accessStructureTuplesByResource.forEach { (resourceName, accessStructureTuples) ->
            var needToUpdateResource = false
            accessStructureTuples.forEach { accessStructureTuple ->
                val currentAccessStructure = AccessStructure.parseAccessStructure(
                    policyTree = accessStructureTuple.accessStructure
                )
                if (currentAccessStructure.containsAtLeastOne(attributesWithVersionNumberString)) {
                    val oldCurrentAccessStructureString = currentAccessStructure.toString()
                    currentAccessStructure.remove(attributesWithVersionNumberString)

                    if (currentAccessStructure.isEmpty()) {
                        logger.warn {
                            "Access structure ($oldCurrentAccessStructureString) " +
                            "for resource ${accessStructureTuple.resourceName} " +
                            "would be empty after attributes deletion. The admin " +
                            "needs to delete the corresponding resource first"
                        }
                        return endOfMethod(
                            code = CODE_064_DELETE_ATTRIBUTES_CAUSES_EMPTY_ACCESS_STRUCTURE,
                            dmLocked = false
                        )
                    } else {
                        needToUpdateResource = true
                    }
                }
            }

            if (needToUpdateResource) {
                val accessStructureTuplesByPermission = hashMapOf<PermissionType, String>()
                accessStructureTuples.forEach { accessStructureTuple ->
                    accessStructureTuplesByPermission[
                        accessStructureTuple.permission
                    ] = accessStructureTuple.accessStructure
                }

                code = updateResourceAndAccessStructures(
                    resourceName = resourceName,
                    newAccessStructuresByPermission = accessStructureTuplesByPermission,
                    newAccessStructuresEmbedVersionNumbers = true,
                )
                if (code != CODE_000_SUCCESS) {
                    return@forEach
                }
            }
        }

        return endOfMethod(
            code = code,
            dmLocked = false
        )
    }

    /**
     * Add a new resource with the given name [resourceName],
     * [resourceContent] and [enforcement] type to the policy.
     * Also, assign an [accessStructure] giving [permission]
     * over the resource. The [accessStructure] is assumed
     * not to embed version numbers yet. Encrypt and sign,
     * and upload the new [resourceContent] for the resource
     * [resourceName]. Finally, return the outcome code
     */
    override fun addResource(
        resourceName: String,
        resourceContent: InputStream,
        accessStructure: String,
        permission: PermissionType,
        enforcement: EnforcementType
    ): OutcomeCode {
        logger.info {
            "Adding resource $resourceName with enforcement $enforcement"
        }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Topic name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * Embed the admin attribute and the version numbers
         * of all the attributes in the [accessStructure]
         */
        val accessStructureAndCode = embedAdminAttributeAndVersionNumbers(
            accessStructures = hashMapOf(
                permission to accessStructure
            )
        )
        if (accessStructureAndCode.code != CODE_000_SUCCESS) {
            return endOfMethod(accessStructureAndCode.code)
        }
        val accessStructureWithVersionNumbers = accessStructureAndCode.accessStructures!![permission]!!

        /**
         * Based on the [enforcement], encrypt or
         * not the [resourceContent] of the [resourceName]
         */
        val encryptedResourceContent: InputStream
        val encryptedSymKey: EncryptedSymKey
        when (enforcement) {
            EnforcementType.TRADITIONAL -> {
                encryptedResourceContent = resourceContent
                encryptedSymKey = EncryptedSymKey("null".toByteArray())
            }
            EnforcementType.COMBINED -> {
                val symKey = cryptoSKE.generateSymKey()

                /** Encrypt the [resourceContent] of the [resourceName] */
                encryptedResourceContent = cryptoSKE.encryptStream(
                    encryptingKey = symKey,
                    stream = resourceContent
                )

                /**
                 * Encrypt the symmetric key
                 * under the access structure
                 * embedding version numbers
                 */
                encryptedSymKey = EncryptedSymKey(
                    key = cryptoABE.encryptABE(
                        accessStructure = accessStructureWithVersionNumbers,
                        plaintext = symKey.secretKey.encoded.encodeBase64()
                    ).decodeBase64()
                )
            }
        }

        /** Add the resource in the MM */
        val newResource = Resource(
            name = resourceName,
            enforcement = enforcement
        )
        code = mm.addResource(
            newResource = newResource
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the access structure tuple in the MM */
        val accessStructureTuple = AccessStructureTuple(
            resourceName = resourceName,
            resourceToken = newResource.token,
            accessStructure = accessStructureWithVersionNumbers,
            permission = permission,
            encryptingSymKey = encryptedSymKey,
            decryptingSymKey = encryptedSymKey
        )
        val accessStructureSignature = cryptoPKE.createSignature(
            bytes = accessStructureTuple.getBytesForSignature(),
            signingKey = asymSigKeyPair.private
        )
        accessStructureTuple.updateSignature(
            newSignature = accessStructureSignature,
            newSigner = user.token,
        )
        code = mm.addAccessStructureTuples(
            newAccessStructureTuples = hashSetOf(accessStructureTuple)
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the resource in the AC */
        code = ac?.addResource(
            resourceName = resourceName
        ) ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /**
         * Add the resource-access structure-permission
         * assignment in the AC
         */
        code = ac?.assignAccessStructure(
            resourceName = resourceName,
            accessStructure = accessStructureWithVersionNumbers,
            permission = permission,
        ) ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Add the resource in the DM */
        return endOfMethod(
            dm.addResource(
                newResource = newResource,
                content = encryptedResourceContent
            )
        )
    }

    /**
     * Delete the resource with the matching [resourceName] from
     * the policy, and delete all the related access structures
     * Finally, return the outcome code
     */
    override fun deleteResource(
        resourceName: String
    ): OutcomeCode {
        logger.info { "Deleting resource $resourceName" }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * Delete the access structure tuples
         * matching the [resourceName] from the MM
         */
        code = mm.deleteAccessStructureTuples(
            resourceName = resourceName
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /**
         * Delete the resource matching
         * the [resourceName] from the MM
         */
        code = mm.deleteResource(
            resourceName = resourceName
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Delete the resource from the AC */
        code = ac?.deleteResource(
            resourceName = resourceName
        ) ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(code)
        }

        /** Delete the resource from the DM */
        return endOfMethod(dm.deleteResource(resourceName))
    }

    /**
     * Assign the [attributeName] to the [username]
     * in the policy with the optional [attributeValue]
     * and refresh the [username]'s ABE key. Finally,
     * return the outcome code
     */
    override fun assignUserToAttributes(
        username: String,
        attributeName: String,
        attributeValue: String?
    ): OutcomeCode {
        return assignUserToAttributes(
            username = username,
            attributes = hashMapOf(attributeName to attributeValue)
        )
    }

    /**
     * Assign the [attributes] (key-value pairs)
     * to the [username] in the policy and refresh
     * the [username]'s ABE key. Finally, return
     * the outcome code
     */
    override fun assignUserToAttributes(
        username: String,
        attributes: HashMap<String, String?>
    ): OutcomeCode {
        logger.info { "Assigning to user $username the following attributes (one per row below):" }
        var index = 0
        attributes.forEach { (key, value) ->
            logger.info { "${index + 1}: attribute $key (value is $value)" }
            index =+ 1
        }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (attributes.isEmpty()) {
            logger.warn { "Map of attributes to assign is empty" }
            return CODE_020_INVALID_PARAMETER
        }
        attributes.forEach {
            if (it.key.isBlank()) {
                logger.warn { "Attribute name is blank" }
                return CODE_020_INVALID_PARAMETER
            }
            if (it.key == ADMIN) { // TODO test that this behaviour works properly
                logger.warn { "Cannot assign users to the $ADMIN attribute" }
                return CODE_022_ADMIN_CANNOT_BE_MODIFIED
            }
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * Get the version number of all [attributes]
         * (which must be operational)
         */
        val attributesWithVersionNumberCode = getAttributeVersionNumbers(
            attributes = attributes.keys.toHashSet(),
        )
        code = attributesWithVersionNumberCode.code
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        val setOfAttributeTuplesToAdd = hashSetOf<AttributeTuple>()
        attributesWithVersionNumberCode.attributes!!.forEach { attribute ->
            val currentAttributeTuple = AttributeTuple(
                username = username,
                attributeName = attribute.name,
                attributeValue = attributes[attribute.name]
            )
            val accessStructureSignature = cryptoPKE.createSignature(
                bytes = currentAttributeTuple.getBytesForSignature(),
                signingKey = asymSigKeyPair.private
            )
            currentAttributeTuple.updateSignature(
                newSignature = accessStructureSignature,
                newSigner = user.token,
            )
            setOfAttributeTuplesToAdd.add(currentAttributeTuple)
        }

        code = mm.addAttributeTuples(
            newAttributeTuples = setOfAttributeTuplesToAdd
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Update the user-attributes assignments in the AC */
        code = ac?.updateAttributes(
            username = username,
            attributes = attributes
        ) ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /** Update the user ABE key */
        return endOfMethod(
            code = generateUserABEKey(
                username = username
            ),
            dmLocked = false
        )
    }

    /**
     * Revoke the [attributeName] from the [username] in
     * the policy and refresh the [username]'s ABE key.
     * Refresh also symmetric keys to which the user
     * does not have access anymore, updating the
     * [attributeName]' version numbers. Finally,
     * return the outcome code
     */
    override fun revokeAttributesFromUser(
        username: String,
        attributeName: String
    ): OutcomeCode {
        return revokeAttributesFromUser(
            username = username,
            attributes = hashSetOf(attributeName)
        )
    }

    /**
     * Revoke the [attributes] from the [username] in
     * the policy and refresh the [username]'s ABE key.
     * Refresh also symmetric keys to which the user
     * does not have access anymore, updating each of
     * the [attributes]' version numbers. Finally,
     * return the outcome code
     */
    override fun revokeAttributesFromUser(
        username: String,
        attributes: HashSet<String>
    ): OutcomeCode {
        logger.info {
            "Revoking from user $username the " +
            "following attributes (one per row below):"
        }
        attributes.forEachIndexed { index, attribute ->
            logger.info { "${index + 1}: attribute $attribute" }
        }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (attributes.isEmpty()) {
            logger.warn { "Set of attributes to revoke is empty" }
            return CODE_020_INVALID_PARAMETER
        }
        attributes.forEach {
            if (it.isBlank()) {
                logger.warn { "Attribute name is blank" }
                return CODE_020_INVALID_PARAMETER
            }
            if (it == ADMIN) { // TODO test that this behaviour works properly
                logger.warn { "Cannot revoke users from the $ADMIN attribute" }
                return CODE_022_ADMIN_CANNOT_BE_MODIFIED
            }
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Revoke the attributes from the user from AC */
        code = ac?.revokeUserFromAttributes(
            username = username,
            attributes = attributes
        ) ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /**
         * For each attribute, get the attribute
         * version number. Then, get all users
         * that are assigned to that attribute
         * (these users are those for which we
         * will need to update the ABE secret key),
         * then delete the [username]' attribute
         * tuples
         */
        logger.debug { "Getting the version numbers of the attributes to revoke" }
        val attributesWithVersionNumberCode = getAttributeVersionNumbers(
            attributes = attributes,
        )
        code = attributesWithVersionNumberCode.code
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        val usersToRenewKey = hashSetOf<String>()
        val attributesWithVersionNumberString = hashSetOf<String>()
        attributesWithVersionNumberCode.attributes!!.forEach { attribute ->
            val attributeName = attribute.name
            attributesWithVersionNumberString.add(concatenateAttributeNameAndVersionNumber(
                name = attributeName,
                versionNumber = attribute.versionNumber
            ))

            logger.debug { "Getting users assigned to attribute $attributeName" }
            var isUserAssignedToCurrentAttribute = false
            mm.getAttributeTuples(
                attributeName = attributeName
            ).forEach { attributeTuple ->
                verifyTupleSignature(attributeTuple)
                usersToRenewKey.add(attributeTuple.username)
                if (attributeTuple.username == username) {
                    isUserAssignedToCurrentAttribute = true
                }
            }
            /**
             * We need to ensure that the [username] is
             * indeed assigned to the current attribute
             */
            if (!isUserAssignedToCurrentAttribute) {
                logger.warn { "User $username is not assigned to attribute $attributeName" }
                return endOfMethod(
                    code = CODE_070_ATTRIBUTETUPLE_NOT_FOUND,
                    dmLocked = false
                )
            }

            logger.debug {
                "Updating the token and the version " +
                "number of the attribute $attributeName"
            }
            val newAttributeToken = UnitElement.generateRandomToken()
            mm.updateAttributeTokenAndVersionNumber(
                attributeName = attributeName,
                oldAttributeToken = attribute.token,
                newAttributeToken = newAttributeToken,
                newVersionNumber = attribute.versionNumber + 1
            )

            logger.debug {
                "Delete tuples of user $username " +
                "and attribute $attributeName"
            }
            code = mm.deleteAttributeTuples(
                username = username,
                attributeName = attributeName
            )
            if (code != CODE_000_SUCCESS) {
                return@forEach
            }
        }
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        require(usersToRenewKey.contains(username))
        logger.info { "Renewing ABE key of ${usersToRenewKey.size} users" }
        usersToRenewKey.forEach { userToRenewKey ->
            logger.debug { "Renewing ABE key of user $userToRenewKey" }
            code = generateUserABEKey(userToRenewKey)
            if (code != CODE_000_SUCCESS) {
                return@forEach
            }
        }

        /**
         * Get all access structures tuples in which we
         * will update the version number of the updated
         * attributes. If an access structure gets modified,
         * simply invoke the updateAccessStructure function
         * (we group access structure tuples that are
         * related to the same resource, as they need
         * to share the same symmetric keys, even though
         * encrypted under different access structures.
         * For this reason, if even a single access structure
         * tuple of a resource is updated, then we need to
         * update all access structure tuples of that resource)
         */
        val accessStructureTuples = mm.getAccessStructureTuples()
        val accessStructureTuplesForResource = hashMapOf<String, HashSet<AccessStructureTuple>>()
        accessStructureTuples.forEach { accessStructureTuple ->
            verifyTupleSignature(accessStructureTuple)
            val resourceName = accessStructureTuple.resourceName
            accessStructureTuplesForResource.getOrPut(resourceName) { hashSetOf() }.add(accessStructureTuple)
        }

        accessStructureTuplesForResource.forEach { (resourceName, accessStructureTuples) ->
            var needToUpdateResource = false
            accessStructureTuples.forEach { accessStructureTuple ->
                val currentAccessStructure = AccessStructure.parseAccessStructure(
                    policyTree = accessStructureTuple.accessStructure
                )
                if (currentAccessStructure.containsAtLeastOne(attributesWithVersionNumberString)) {
                    attributesWithVersionNumberString.forEach { attributeToUpdate ->
                        currentAccessStructure.replaceAttribute(
                            oldAttribute = attributeToUpdate,
                            newAttribute = incrementByOneVersionNumberInAttributeNameAndVersionNumber(
                                nameWithVersionNumber = attributeToUpdate
                            )
                        )
                    }
                    needToUpdateResource = true
                }
            }

            if (needToUpdateResource) {
                val accessStructureTuplesByPermission = hashMapOf<PermissionType, String>()
                accessStructureTuples.forEach { accessStructureTuple ->
                    accessStructureTuplesByPermission[
                            accessStructureTuple.permission
                    ] = accessStructureTuple.accessStructure
                }

                code = updateResourceAndAccessStructures(
                    resourceName = resourceName,
                    newAccessStructuresByPermission = accessStructureTuplesByPermission,
                    newAccessStructuresEmbedVersionNumbers = true,
                )
                if (code != CODE_000_SUCCESS) {
                    return@forEach
                }
            }
        }

        return endOfMethod(
            code = code,
            dmLocked = false
        )
    }

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
    override fun assignAccessStructure(
        resourceName: String,
        accessStructure: String,
        permission: PermissionType,
    ): OutcomeCode {
        logger.info {
            "Adding access structure giving permission $permission" +
            "over resource $resourceName, access structure is " +
            accessStructure
        }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        if (accessStructure.isBlank()) {
            logger.warn { "Access structure is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }



        /**
         * Embed the admin attribute and the version numbers
         * of all the attributes in the [accessStructure]
         */
        val accessStructureAndCode = embedAdminAttributeAndVersionNumbers(
            accessStructures = hashMapOf(
                permission to accessStructure
            )
        )
        if (accessStructureAndCode.code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = accessStructureAndCode.code,
                dmLocked = false
            )
        }
        val accessStructureWithVersionNumbers = accessStructureAndCode.accessStructures!![permission]!!



        val resource = mm.getResources(
            resourceName = resourceName
        ).firstOrNull() ?: return endOfMethod(
            code = CODE_006_RESOURCE_NOT_FOUND,
            dmLocked = false
        )
        if (resource.status == UnitElementStatus.DELETED) {
            return endOfMethod(
                code = CODE_015_RESOURCE_WAS_DELETED,
                dmLocked = false
            )
        }

        /** Get one of the old access structure tuples from the MM */
        val resourceAccessStructureTuple = mm.getAccessStructureTuples(
            resourceName = resourceName
        ).first()
        verifyTupleSignature(resourceAccessStructureTuple)

        // TODO you have the "abeSecretKey" class variable to fill and use
        // TODO we are retrieving the key from the MM, do we have to do it every time?
        code = getABEKey()
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        val encryptingSymKey = cryptoABE.encryptABE(
            accessStructure = accessStructureWithVersionNumbers,
            plaintext = cryptoABE.decryptABE(
                keyID = user.name, // TODO is this id fine?
                ciphertext = resourceAccessStructureTuple.encryptingSymKey!!.key.encodeBase64()
            )
        )
        val decryptingSymKey = cryptoABE.encryptABE(
            accessStructure = accessStructureWithVersionNumbers,
            plaintext = cryptoABE.decryptABE(
                keyID = user.name, // TODO is this id fine?
                ciphertext = resourceAccessStructureTuple.decryptingSymKey!!.key.encodeBase64()
            )
        )

        /** Add the new access structure tuple in the MM */
        val newAccessStructureTuple = AccessStructureTuple(
            resourceName = resourceName,
            resourceToken = resource.token,
            accessStructure = accessStructureWithVersionNumbers,
            permission = permission,
            encryptingSymKey = EncryptedSymKey(key = encryptingSymKey.decodeBase64()),
            decryptingSymKey = EncryptedSymKey(key = decryptingSymKey.decodeBase64()),
        )
        val accessStructureSignature = cryptoPKE.createSignature(
            bytes = newAccessStructureTuple.getBytesForSignature(),
            signingKey = asymSigKeyPair.private
        )
        newAccessStructureTuple.updateSignature(
            newSignature = accessStructureSignature,
            newSigner = user.token,
        )

        code = mm.addAccessStructureTuples(
            newAccessStructureTuples = hashSetOf(newAccessStructureTuple)
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /**
         * Update the access structure
         * of the resource in the AC
         */
        return endOfMethod(
            code = (ac?.assignAccessStructure(
                resourceName = resourceName,
                accessStructure = accessStructureWithVersionNumbers,
                permission = permission,
            ) ?: CODE_000_SUCCESS),
            dmLocked = false
        )
    }

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
    override fun updateResourceAndAccessStructures(
        resourceName: String,
        newAccessStructuresByPermission: HashMap<PermissionType, String>,
        newAccessStructuresEmbedVersionNumbers: Boolean
    ): OutcomeCode {

        logger.info {
            "Updating the resource $resourceName and the related " +
            "access structure tuples (one per row below):"
        }
        var index = 0
        newAccessStructuresByPermission.forEach { (permissionType, newAccessStructure) ->
            logger.info {
                "${index + 1}: permission $permissionType with " +
                "new access structure $newAccessStructure "
            }
            index += 1
        }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }
        newAccessStructuresByPermission.forEach { (permissionType, newAccessStructure) ->
            if (newAccessStructure.isBlank()) {
                logger.warn { "Access structure for permission $permissionType is blank" }
                return CODE_020_INVALID_PARAMETER
            }
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * Embed the version number of the
         * attributes in the new access
         * structures depending on the flag
         */
        val accessStructureWithVersionNumbers = if (newAccessStructuresEmbedVersionNumbers) {
            newAccessStructuresByPermission
        } else {
            val accessStructureAndCode = embedAdminAttributeAndVersionNumbers(
                accessStructures = newAccessStructuresByPermission
            )
            if (accessStructureAndCode.code != CODE_000_SUCCESS) {
                return endOfMethod(
                    code = accessStructureAndCode.code,
                    dmLocked = false
                )
            }
            accessStructureAndCode.accessStructures!!
        }

        val resource = mm.getResources(
            resourceName = resourceName
        ).firstOrNull() ?: return endOfMethod(
            code = CODE_006_RESOURCE_NOT_FOUND,
            dmLocked = false
        )
        val newResourceToken = UnitElement.generateRandomToken()
        val newSymEncKeyVersionNumber = resource.symEncKeyVersionNumber + 1

        /**
         * We need the old access structure tuples
         * to update the decrypting key (not the
         * decrypting key itself, but the encryption
         * of the decrypting key with the new access
         * structure). The encrypting key will instead
         * be renewed
         */
        val oldAccessStructureTuples = mm.getAccessStructureTuples(
            resourceName = resourceName,
            isAdmin = user.isAdmin
        )

        /**
         * Update the token and increase the
         * version number of the resource in the MM
         */
        code = mm.updateResourceTokenAndVersionNumber(
            resourceName = resourceName,
            oldResourceToken = resource.token,
            newResourceToken = newResourceToken,
            newSymEncKeyVersionNumber = newSymEncKeyVersionNumber
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        /**
         * Based on the enforcement, generate
         * or not a new encryption symmetric key
         */
        val newEncryptionSymmetricKey = when (resource.enforcement) {
            EnforcementType.TRADITIONAL -> {
                null
            }
            EnforcementType.COMBINED -> {
                cryptoSKE.generateSymKey()
            }
        }

        /**
         * Update the token, version number, access
         * structure and encrypting key of the access
         * structure tuples in the MM
         */
        accessStructureWithVersionNumbers.forEach { (permissionType, newAccessStructureWithVersionNumbers) ->

            val oldAccessStructureTuple = oldAccessStructureTuples.firstOrNull() {
                it.permission == permissionType
            }
            if (oldAccessStructureTuple == null) {
                logger.warn { "" +
                    "Access structure tuple for resource $resourceName " +
                    "and permission $permissionType was not found"
                }
                code = CODE_071_ACCESSSTRUCTURETUPLE_NOT_FOUND
                return@forEach
            }
            val oldDecryptingSymKey = oldAccessStructureTuple.decryptingSymKey!!.key.encodeBase64()

            /**
             * Encrypt the symmetric key
             * under the access structure
             * embedding version numbers
             */
            val newEncryptedSymKey = EncryptedSymKey(
                if (newEncryptionSymmetricKey == null) {
                    "null".toByteArray()
                } else {
                    cryptoABE.encryptABE(
                        accessStructure = newAccessStructureWithVersionNumbers,
                        plaintext = newEncryptionSymmetricKey.secretKey.encoded.encodeBase64()
                    ).decodeBase64()
                }
            )

            // TODO you have the "abeSecretKey" class variable to fill and use
            // TODO we are retrieving the key from the MM, do we have to do it every time?
            code = getABEKey()
            if (code != CODE_000_SUCCESS) {
                return@forEach
            }

            val newDecryptingSymKey = EncryptedSymKey(
                key = cryptoABE.encryptABE(
                    accessStructure = newAccessStructureWithVersionNumbers,
                    plaintext = cryptoABE.decryptABE(
                        keyID = user.name, // TODO is this ID fine?
                        ciphertext = oldDecryptingSymKey
                    )
                ).decodeBase64()
            )

            val updatedAccessStructureTuple = AccessStructureTuple(
                resourceName = resourceName,
                resourceToken = newResourceToken,
                accessStructure = newAccessStructureWithVersionNumbers,
                permission = permissionType,
                encryptingSymKey = newEncryptedSymKey,
                decryptingSymKey = newDecryptingSymKey,
                symKeyVersionNumber = newSymEncKeyVersionNumber
            )
            val accessStructureSignature = cryptoPKE.createSignature(
                bytes = updatedAccessStructureTuple.getBytesForSignature(),
                signingKey = asymSigKeyPair.private
            )
            updatedAccessStructureTuple.updateSignature(
                newSignature = accessStructureSignature,
                newSigner = user.token,
            )

            code = mm.updateAccessStructureTuple(
                updatedAccessStructureTuple = updatedAccessStructureTuple
            )
            if (code != CODE_000_SUCCESS) {
                return@forEach
            }

            /**
             * Update the access structure
             * of the resource in the AC
             */
            code = (ac?.updateAccessStructure(
                resourceName = resourceName,
                newAccessStructure = newAccessStructureWithVersionNumbers,
            ) ?: CODE_000_SUCCESS)
            if (code != CODE_000_SUCCESS) {
                return@forEach
            }
        }
        return endOfMethod(
            code = code,
            dmLocked = false
        )
    }

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
    override fun revokeAccessStructure(
        resourceName: String,
        permission: PermissionType,
    ): OutcomeCode {
        logger.info {
            "Revoking access structure giving permission " +
            "$permission over resource $resourceName"
        }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        var code = startOfMethod(dmLock = false)
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * Get all access structures tuples of the
         * [resourceName]. Delete the one with the
         * given [permission], generate a new symmetric
         * key and update the other tuples (as well
         * as the version number of the resource)
         */
        val accessStructureTuples = mm.getAccessStructureTuples(
            resourceName = resourceName
        )
        if (accessStructureTuples.size == 1) {
            return if (accessStructureTuples.first().permission == permission) {
                endOfMethod(
                    code = CODE_074_CANNOT_REVOKE_LAST_ACCESS_STRUCTURE_TUPLE,
                    dmLocked = false
                )
            } else {
                endOfMethod(
                    code = CODE_071_ACCESSSTRUCTURETUPLE_NOT_FOUND,
                    dmLocked = false
                )
            }
        }
        val accessStructureTuplesByPermission = hashMapOf<PermissionType, String>()
        accessStructureTuples.forEach { accessStructureTuple ->
            verifyTupleSignature(accessStructureTuple)
            if (accessStructureTuple.permission != permission) {
                accessStructureTuplesByPermission[
                        accessStructureTuple.permission
                ] = accessStructureTuple.accessStructure
            }
        }

        /** Delete the access structure tuple */
        code = mm.deleteAccessStructureTuples(
            resourceName = resourceName,
            permission = permission
        )
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code,
                dmLocked = false
            )
        }

        code = updateResourceAndAccessStructures(
            resourceName = resourceName,
            newAccessStructuresByPermission = accessStructureTuplesByPermission,
            newAccessStructuresEmbedVersionNumbers = true,
        )
        return endOfMethod(
            code = code,
            dmLocked = false
        )
    }

    /**
     * Refresh the ABE key of [username] according
     * to the assigned attributes. Finally, return
     * the outcome code
     */
    override fun generateUserABEKey(
        username: String,
    ): OutcomeCode {
        logger.info { "Generating secret ABE key for user $username" }

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /** Lock the status of the services */
        val code = startOfMethod(
            dmLock = false,
            acLock = false,
        )
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /**
         * Get all attributes of the user,
         * generate the new secret ABE key
         * and update the user in the metadata
         */
        val attributesAssignedToUser = hashSetOf<String>()
        mm.getAttributeTuples(
            username = username
        ).forEach { attributeTuple ->
            verifyTupleSignature(attributeTuple)
            val attributeName = attributeTuple.attributeName
            val attributeVersionNumber = mm.getAttributes(
                attributeName = attributeName,
                status = UnitElementStatus.OPERATIONAL,
                isAdmin = user.isAdmin
            ).first().versionNumber

            attributesAssignedToUser.add(concatenateAttributeAndValue(
                attribute = concatenateAttributeNameAndVersionNumber(
                    name = attributeName,
                    versionNumber = attributeVersionNumber
                ),
                value = attributeTuple.attributeValue
            ))
        }

        /** Generate the secret ABE key */
        val newABEUserKey = if (attributesAssignedToUser.isEmpty()) {
            null
        } else {
            cryptoABE.generateABEPrivateKey(
                attributes = concatenateAttributes(attributesAssignedToUser),
                keyID = username
            )
        }

        val encryptedNewABEUserKey = if (newABEUserKey != null) {

            val userAsymEncKeyBytes = mm.getUserPublicKey(
                name = username,
                asymKeyType = AsymKeysType.ENC
            )
            /**
             * If we did not find the user's key, it means
             * that the user does not exist
             */
            if (userAsymEncKeyBytes == null) {
                logger.warn { "User's key not found. Checking the user's status" }
                val status = mm.getStatus(
                    name = username,
                    type = ABACUnitElementTypeWithStatus.USER
                )
                return if (status != null) {
                    logger.warn { "User's status is $status" }
                    when (status) {
                        UnitElementStatus.INCOMPLETE -> endOfMethod(
                            code = CODE_053_USER_IS_INCOMPLETE,
                            dmLocked = false,
                            acLocked = false
                        )
                        UnitElementStatus.OPERATIONAL -> {
                            val message = "User's $username key not found but user is operational"
                            logger.error { message }
                            throw IllegalStateException(message)
                        }
                        UnitElementStatus.DELETED -> endOfMethod(
                            code = CODE_013_USER_WAS_DELETED,
                            dmLocked = false,
                            acLocked = false
                        )
                    }
                } else {
                    endOfMethod(
                        code = CODE_004_USER_NOT_FOUND,
                        dmLocked = false,
                        acLocked = false
                    )
                }
            }

            val userAsymEncPublicKey = cryptoPKE.recreateAsymPublicKey(
                asymPublicKeyBytes = userAsymEncKeyBytes,
                type = AsymKeysType.ENC
            )
            cryptoPKE.asymEncrypt(
                encryptingKey = userAsymEncPublicKey,
                bytes = newABEUserKey.encoded
            )
        } else {
            null
        }

        return endOfMethod(
            code = mm.updateUserABEKey(
                username = username,
                newEncryptedUserABEKey = encryptedNewABEUserKey
            ),
            dmLocked = false,
            acLocked = false
        )
    }

    /**
     * Download, decrypt and check the signature of
     * the content of the resource [resourceName]
     * and return it along with the outcome code (if an
     * error occurred, the content of the resource will
     * be null)
     */
    override fun readResource(
        resourceName: String
    ): CodeResource {
        logger.info { "Reading resource $resourceName by user ${user.name}" }

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CodeResource(CODE_020_INVALID_PARAMETER)
        }

        /** Lock the status of the services */
        val code = startOfMethod(acLock = false)
        if (code != CODE_000_SUCCESS) {
            return CodeResource(code)
        }

        val resource = mm.getResources(
            resourceName = resourceName,
            isAdmin = user.isAdmin,
            offset = 0,
            limit = 1,
        ).firstOrNull()
        if (resource == null) {
            logger.warn {
                "Resource not found. Either user ${user.name} does not have " +
                "access to resource $resourceName or resource does not exist"
            }
            return CodeResource(
                code = endOfMethod(
                    code = CODE_006_RESOURCE_NOT_FOUND,
                    acLocked = false
                ))
        }

        val resourceToReadResult = dm.readResource(resourceName)
        if (resourceToReadResult.code != CODE_000_SUCCESS) {
            return CodeResource(
                code = endOfMethod(
                    code = resourceToReadResult.code,
                    acLocked = false
                ))
        }
        var resourceStream = resourceToReadResult.stream!!

        when (resource.enforcement) {
            /** Do nothing */
            EnforcementType.TRADITIONAL -> { }
            /** We need the symmetric key to decrypt the resource */
            EnforcementType.COMBINED -> {
                val symKeyCode = getDecSymmetricKey(resource)
                if (symKeyCode.code != CODE_000_SUCCESS) {
                    return CodeResource(
                        code = endOfMethod(
                            code = symKeyCode.code,
                            acLocked = false
                        ))
                }

                resourceStream = cryptoSKE.decryptStream(
                    decryptingKey = symKeyCode.key!!,
                    stream = resourceStream
                )
            }
        }

        return CodeResource(
            code = endOfMethod(
                code = CODE_000_SUCCESS,
                acLocked = false
            ),
            stream = resourceStream
        )
    }

    /**
     * Encrypt, sign and upload the new [resourceContent]
     * for the resource [resourceName]. Finally, return
     * the outcome code
     */
    abstract override fun writeResource(
        resourceName: String,
        resourceContent: InputStream
    ): OutcomeCode



    /**
     * Return the set of users, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
     */
    override fun getUsers(): CodeUsers {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting users" }

        /** Lock the status of the services */
        val code = startOfMethod(
            dmLock = false,
            acLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodeUsers(code)
        } else {
            val users = mm.getUsers()
            CodeUsers(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    dmLocked = false,
                    acLocked = false
                ),
                users = users
            )
        }
    }

    /**
     * Return the set of attributes, along with the
     * outcome code (if an error occurred, the
     * set of attributes will be null)
     */
    override fun getAttributes(): CodeAttributes {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting attributes" }

        /** Lock the status of the services */
        val code = startOfMethod(
            dmLock = false,
            acLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodeAttributes(code)
        } else {
            val attributes = mm.getAttributes()
            CodeAttributes(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    dmLocked = false,
                    acLocked = false
                ),
                attributes = attributes
            )
        }
    }

    /**
     * Return the set of resources, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
     */
    override fun getResources(): CodeResources {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting topics" }

        /** Lock the status of the services */
        val code = startOfMethod(
            dmLock = false,
            acLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodeResources(code)
        } else {
            val resources = mm.getResources()
            CodeResources(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    dmLocked = false,
                    acLocked = false
                ),
                resources = resources
            )
        }
    }

    /**
     * Return the user-attribute assignments filtering
     * by the [username] and [attributeName], if given,
     * along with the outcome code (if an error
     * occurred, the set of attribute assignments will be
     * null)
     */
    override fun getAttributeAssignments(
        username: String?,
        attributeName: String?
    ): CodeAttributeTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting attribute tuples" }

        /** Lock the status of the services */
        val code = startOfMethod(
            dmLock = false,
            acLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodeAttributeTuples(code)
        } else {
            val attributeTuples = mm.getAttributeTuples(
                username = if (
                    !user.isAdmin ||
                    (username.isNullOrBlank() && attributeName.isNullOrBlank())
                ) {
                    user.name
                } else {
                    username
                },
                attributeName = attributeName,
                isAdmin = user.isAdmin,
                offset = 0, limit = NO_LIMIT,
            ).onEach {
                verifyTupleSignature(it)
            }

            CodeAttributeTuples(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    dmLocked = false,
                    acLocked = false
                ),
                attributeTuples = attributeTuples
            )
        }
    }

    /**
     * Return the resource-access structure assignments
     * filtering by the [resourceName], if given, along
     * with the outcome code (if an error occurred, the
     * set of access structures will be null)
     */
    override fun getAccessStructures(
        resourceName: String?
    ): CodeAccessStructureTuples {
        logger.info { "User ${user.name} (is admin = ${user.isAdmin}) is getting access structure tuples" }

        /** Lock the status of the services */
        val code = startOfMethod(
            acLock = false,
            dmLock = false
        )
        return if (code != CODE_000_SUCCESS) {
            CodeAccessStructureTuples(code)
        } else {
            val accessStructureTuples = mm.getAccessStructureTuples(
                resourceName = resourceName,
                isAdmin = user.isAdmin,
                offset = 0,
                limit = NO_LIMIT
            ).onEach {
                verifyTupleSignature(it)
            }

            CodeAccessStructureTuples(
                code = endOfMethod(
                    code = CODE_000_SUCCESS,
                    acLocked = false,
                    dmLocked = false
                ),
                accessStructureTuples = accessStructureTuples
            )
        }
    }



    /** Get the ABE key of this user */
    private fun getABEKey(): OutcomeCode {
        val encryptedABEKey = mm.getUserABEKey(
            username = user.name
        ) ?: return CODE_073_ABE_KEY_NOT_FOUND

        val decryptedABEKey = PrivateKeyOpenABE(
            private = cryptoPKE.asymDecrypt(
                encryptingKey = asymEncKeyPair.public,
                decryptingKey = asymEncKeyPair.private,
                encBytes = encryptedABEKey
            ).decodeToString(),
            keyID = user.name // TODO is this ID ok?
        )
        

        // TODO we are importing the key, but we do not need to do this everytime,
        //  but only the first time or when the ABE key changes. But how to do it?
        decryptedABEKey.keyID = user.name // TODO moreover, what ID should we assign to the key?
        cryptoABE.importABEUserKey(
            userKey = decryptedABEKey
        )
        return CODE_000_SUCCESS
    }

    /**
     * Get the symmetric key to encrypt the [resource]
     * Finally, return the key along with an outcome code
     */
    protected fun getEncSymmetricKey(
        resource: Resource
    ): CodeSymmetricKeyABAC {
        return getSymmetricKey(
            resource = resource,
            encryptingKey = true
        )
    }

    /**
     * Get the symmetric key to decrypt the [resource]
     * Finally, return the key along with an outcome code
     */
    private fun getDecSymmetricKey(
        resource: Resource
    ): CodeSymmetricKeyABAC {
        return getSymmetricKey(
            resource = resource,
            encryptingKey = false
        )
    }

    /**
     * Get the symmetric key related to the [resource],
     * either the encrypting key (if [encryptingKey])
     * or the decrypting key
     * Finally, return the key along with an outcome code
     */
    private fun getSymmetricKey(
        resource: Resource,
        encryptingKey: Boolean,
    ): CodeSymmetricKeyABAC {
        logger.info {"Getting the symmetric key for resource ${resource.name}"}

        // TODO we are retrieving the key from the MM, do we have to do it every time?
        val codeABE = getABEKey()
        if (codeABE != CODE_000_SUCCESS) {
            return CodeSymmetricKeyABAC(
                code = codeABE
            )
        }

        val accessStructureTuples = mm.getAccessStructureTuples(
            resourceName = resource.name,
            isAdmin = user.isAdmin,
            offset = 0,
            limit = 1,
        )
        if (accessStructureTuples.isEmpty()) {
            return CodeSymmetricKeyABAC(
                code = CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /**
         * Loop over the access structure tuples, trying to
         * find the one satisfied by the ABE key of the user
         */
        var decryptedKey: ByteArray? = null
        accessStructureTuples.forEach { accessStructureTuple ->
            verifyTupleSignature(accessStructureTuple)
            val symKeyToDecrypt = if (encryptingKey) {
                accessStructureTuple.encryptingSymKey!!
            } else {
                if (resource.symDecKeyVersionNumber == resource.symEncKeyVersionNumber) {
                    accessStructureTuple.encryptingSymKey!!
                } else {
                    accessStructureTuple.decryptingSymKey!!
                }
            }

            try {
                decryptedKey = cryptoABE.decryptABE(
                    keyID = user.name, // TODO is this ID fine?
                    ciphertext = symKeyToDecrypt.key.encodeBase64()
                ).decodeBase64()
            } catch (e: OpenABECryptoContextDecrypt) {
                logger.debug {
                    "User ABE key does not satisfy access structure" +
                    accessStructureTuple.accessStructure
                }
            }
        }

        return if (decryptedKey == null) {
            CodeSymmetricKeyABAC(
                code = CODE_006_RESOURCE_NOT_FOUND
            )
        } else {
            CodeSymmetricKeyABAC(
                key = SymmetricKeyCryptoAC(
                    SecretKeyOpenABE(
                        secretKey = decryptedKey!!
                    )
                )
            )
        }
    }

    /**
     * Verify the signature of the given [tuple]. If the
     * signature is invalid, a SignatureException will be thrown
     */
    private fun verifyTupleSignature(
        tuple: Tuple
    ) {
        // TODO is it the name or the token? should this be "user.token"? And then, are we sure
        //  that the token in "user.token" corresponds to the user's token (or it was just generated
        //  anew when creating the class instance)?
        if (tuple.signer == user.name) {
            cryptoPKE.verifySignature(
                signature = tuple.signature!!,
                bytes = tuple.getBytesForSignature(),
                verifyingKey = asymSigKeyPair.public
            )
        } else {
            val asymSigPublicKeyBytes = mm.getUserPublicKey(
                token = tuple.signer,
                asymKeyType = AsymKeysType.SIG
            )
            val asymSigPublicKey = cryptoPKE.recreateAsymPublicKey(
                asymPublicKeyBytes = asymSigPublicKeyBytes!!,
                type = AsymKeysType.SIG
            )
            cryptoPKE.verifySignature(
                signature = tuple.signature!!,
                bytes = tuple.getBytesForSignature(),
                verifyingKey = asymSigPublicKey
            )
        }
    }



    /**
     * Concatenate the given [name] and [versionNumber]
     * using the dedicated delimiter
     */
    private fun concatenateAttributeNameAndVersionNumber(
        name: String, versionNumber: Int
    ): String {
        return "$name$nameAndVersionNumberDelimiter$versionNumber"
    }

    /**
     * Obtain the name from the given [nameWithVersionNumber]
     * splitting by the dedicated delimiter
     */
    private fun getAttributeNameFromNameAndVersionNumber(
        nameWithVersionNumber: String
    ): String {
        return nameWithVersionNumber.substringBeforeLast(nameAndVersionNumberDelimiter)
    }

    /**
     * Obtain the version number from the given [nameWithVersionNumber]
     * splitting by the dedicated delimiter
     */
    private fun getVersionNumberFromNameAndVersionNumber(
        nameWithVersionNumber: String
    ): String {
        return nameWithVersionNumber.substringAfterLast(nameAndVersionNumberDelimiter)
    }

    /**
     * Increment by one the version number in the
     * given [nameWithVersionNumber] splitting and
     * then re-joining the name and the number with
     * the dedicated delimiter
     */
    private fun incrementByOneVersionNumberInAttributeNameAndVersionNumber(
        nameWithVersionNumber: String
    ): String {
        val attributeName = getAttributeNameFromNameAndVersionNumber(nameWithVersionNumber)
        val versionNumber = getVersionNumberFromNameAndVersionNumber(nameWithVersionNumber).toInt()
        return concatenateAttributeNameAndVersionNumber(
            name = attributeName,
            versionNumber = versionNumber
        )
    }

    /**
     * Concatenate the [attribute] with its [value],
     * if given, using the dedicated delimiter
     */
    private fun concatenateAttributeAndValue(
        attribute: String,
        value: String?
    ): String {
        return if (value.isNullOrBlank()) {
            attribute
        } else {
            "$attribute$attributeAndValueDelimiter$value"
        }
    }

    /**
     * Concatenate the [attributes] using
     * the dedicated delimiter
     */
    private fun concatenateAttributes(
        attributes: HashSet<String>
    ): String {
        return "$attributeSequenceDelimiter${attributes.joinToString(attributeSequenceDelimiter)}$attributeSequenceDelimiter"
    }

    /**
     * Ensure that the [accessStructure] starts
     * with the ADMIN attribute in an OR gate
     */
    private fun concatenateAccessStructureWithAdminAttribute( // TODO test that this behaviour works properly
        accessStructure: String
    ): String {
        return if (accessStructure.startsWith("$ADMIN or (")) {
            accessStructure
        } else if (accessStructure.isBlank()) {
            ADMIN
        } else {
            "$ADMIN or ($accessStructure)"
        }
    }

    /**
     * Embed version numbers in all access structures
     * of the given set of [accessStructures]
     */
    // TODO this should embed attribute's pseudonyms, not names; if you do this, remember that then
    //  also ABE keys should embed pseudonyms
    private fun embedAdminAttributeAndVersionNumbers(
        accessStructures: HashMap<PermissionType, String>
    ): CodeAccessStructures {


        val accessStructuresByPermission = hashMapOf<PermissionType, String>()
        val attributesVersionNumbers = hashMapOf<String, Int>()
        val cacheAttributesVersionNumbers = hashSetOf<String>()

        accessStructures.forEach { (permission, accessStructure) ->
            val accessStructureWithAdmin = concatenateAccessStructureWithAdminAttribute(
                accessStructure = accessStructure
            )
            val accessStructureObject = parseAccessStructure(accessStructureWithAdmin)
            val attributesInTheAccessStructure = accessStructureObject.getAttributes()
            val attributesWithVersionNumberCode = getAttributeVersionNumbers(
                attributes = (attributesInTheAccessStructure - cacheAttributesVersionNumbers).toHashSet()
            )
            if (attributesWithVersionNumberCode.code != CODE_000_SUCCESS) {
                return CodeAccessStructures(
                    code = attributesWithVersionNumberCode.code,
                )
            }

            cacheAttributesVersionNumbers.addAll(attributesInTheAccessStructure)
            attributesWithVersionNumberCode.attributes!!.forEach {
                if (attributesVersionNumbers.keys.contains(it.name)) {
                    throw java.lang.IllegalStateException("SHOULD NOT HAPPEN") // TODO
                } else {
                    attributesVersionNumbers[it.name] = it.versionNumber
                }
            }

            attributesInTheAccessStructure.forEach {
                val attributeWasReplaced = accessStructureObject.replaceAttribute(
                    oldAttribute = it,
                    newAttribute = concatenateAttributeNameAndVersionNumber(
                        name = it,
                        versionNumber = attributesVersionNumbers[it]!!
                    ),
                )
                if (!attributeWasReplaced) {
                    val message = "Attribute $it is in access structure but was not replaced"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
            }

            accessStructuresByPermission[permission] = accessStructureObject.toString()
        }

        return CodeAccessStructures(
            accessStructures = accessStructuresByPermission
        )
    }

    /**
     * For each attribute in the set of [attributes]:
     * - if the attribute already exists, fetch the version number
     * - if the attribute does not exist, return error
     * Finally, return the set of attributes together with their
     * version numbers
     */
    private fun getAttributeVersionNumbers(
        attributes: HashSet<String>,
    ): CodeAttributes {
        var code = CODE_000_SUCCESS
        val attributesWithVersionNumber: HashSet<Attribute> = hashSetOf()
        attributes.forEach { attributeName ->
            logger.debug {
                "Getting status and version " +
                "number of attribute $attributeName"
            }

            val attribute = mm.getAttributes(
                attributeName = attributeName
            ).firstOrNull()

            if (attribute != null) {
                when (attribute.status) {
                    UnitElementStatus.OPERATIONAL -> {
                        attributesWithVersionNumber.add(Attribute(
                            name = attributeName,
                            versionNumber = attribute.versionNumber
                        ).apply {
                            token = attribute.token
                        })
                    }
                    UnitElementStatus.DELETED -> {
                        logger.warn { "Attribute $attributeName was deleted" }
                        code = CODE_067_ATTRIBUTE_WAS_DELETED
                        return@forEach
                    }
                    UnitElementStatus.INCOMPLETE -> {
                        val message = "Attributes cannot be incomplete"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                }
            } else {
                logger.warn { "Attribute $attributeName was not found" }
                code = CODE_066_ATTRIBUTE_NOT_FOUND
                return@forEach
            }
        }
        return CodeAttributes(
            code = code,
            attributes = attributesWithVersionNumber
        )
    }
}



// TODO al momento, non usiamo i token degli attributi

// TODO DOC here and also somewhere else (latex tesi Colombo),
//  you have to explain how to append VNs to attributes somewhere
