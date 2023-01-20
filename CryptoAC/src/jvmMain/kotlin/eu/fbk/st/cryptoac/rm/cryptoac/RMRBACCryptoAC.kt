package eu.fbk.st.cryptoac.rm.cryptoac

import eu.fbk.st.cryptoac.API.RESOURCES
import eu.fbk.st.cryptoac.API.RM
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.ResponseRoutes
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.internalError
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.ok
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.serviceUnavailable
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.unprocessableEntity
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.ServiceType
import eu.fbk.st.cryptoac.ac.ACFactory
import eu.fbk.st.cryptoac.ac.opa.ACServiceRBACOPA
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.dm.DMFactory
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceRBACCryptoAC
import eu.fbk.st.cryptoac.mm.MMFactory
import eu.fbk.st.cryptoac.mm.MMServiceRBAC
import eu.fbk.st.cryptoac.model.RBACUnitElementTypeWithKeys
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.Resource
import eu.fbk.st.cryptoac.rm.model.AddResourceRBACRequest
import eu.fbk.st.cryptoac.rm.model.WriteResourceRBACRequest
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.routing.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** The objects to interact with the MM based on the core */
private var mmMap: HashMap<CoreType, MMServiceRBAC> = hashMapOf()

/** The objects to interact with the DM based on the core */
private var dmMap: HashMap<CoreType, DMServiceRBACCryptoAC> = hashMapOf()

/** The objects to interact with the OPA based on the core */
private var acMap: HashMap<CoreType, ACServiceRBACOPA?> = hashMapOf()

/** The PKE cryptographic objects based on the core */
private var cryptoPKEMap: HashMap<CoreType, CryptoPKE?> = hashMapOf()

/** A mutex to handle concurrent requests to the DM */
// TODO however, this means that the RM can serve
//  one user only at a time; can we improve this?
//  Is the mutex really necessary?
private val mutex = Mutex()

/** Routes related to resources; add (post), write (patch) */
fun Route.resourcesRouting() {

    // TODO Authenticate modules (proxy, rm, dm) to
    //  each other (and the user) (PKI, JWT)

    // TODO To counter malicious users who keep adding useless files
    //  to exhaust resources (e.g., storage space), we can implement
    //  a mechanism to limit the number (or size) of files each user
    //  can upload. Similarly, to counter malicious users and DoS
    //  attacks, we can implement a mechanism to limit the number of
    //  files a user can upload or send a warning to the admin.

    /** Wrap all routes related to the RM */
    route(RM) {

        route(RESOURCES) {

            /**
             * Check an add
             * resource operation
             */
            post {
                val coreParam = call.parameters[SERVER.CORE]
                    ?: return@post unprocessableEntity(
                        call,
                        "Missing ${SERVER.CORE} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )
                val core: CoreType = CoreType.valueOf(coreParam)
                
                /** If the RM was not configured yet */
                if (
                    !acMap.contains(core) || 
                    !dmMap.contains(core) || 
                    !mmMap.contains(core) || 
                    !cryptoPKEMap.contains(core)
                ) {
                    return@post serviceUnavailable(
                        call = call,
                        message = "This RM was not configured",
                        code = CODE_021_RM_CONFIGURATION
                    )
                }

                logger.debug { "Retrieving the add resource request" }
                val addResourceRBACRequest = call.receive<AddResourceRBACRequest>()
                val resource = addResourceRBACRequest.resource
                val resourceName = resource.name
                val resourceToken = resource.token
                val symDecKeyVersionNumber = resource.symDecKeyVersionNumber
                val symEncKeyVersionNumber = resource.symEncKeyVersionNumber
                val permissionTuple = addResourceRBACRequest.permissionTuple
                val symKeyVersionNumber = permissionTuple.symKeyVersionNumber
                val permissionTupleSignature = permissionTuple.signature

                logger.info {
                    "User is asking to add a resource with " +
                    "name $resourceName for core $core"
                } // TODO add username (first you need to authenticate users)

                /**
                 * The RM has to check that:
                 * 1. permission tuple's signature is correct;
                 * 2. the resource version numbers of the resource are equal to 1;
                 * 3. the permission tuple gives permission over the resource to the admin;
                 * 4. the resource and the permission tuple are consistent;
                 */

                logger.debug { "Checking signature was given" }
                if (permissionTupleSignature == null) {
                    return@post unprocessableEntity(
                        call = call,
                        message = "Missing permission tuple digital signature",
                        code = CODE_019_MISSING_PARAMETERS
                    )
                }

                logger.debug { "Checking resource version numbers are 1" }
                if (symDecKeyVersionNumber != 1 || symKeyVersionNumber != 1 || symEncKeyVersionNumber != 1) {
                    return@post unprocessableEntity(
                        call = call,
                        message = "Version numbers are not 1 (" +
                                "sym dec is $symDecKeyVersionNumber," +
                                "sym enc is $symEncKeyVersionNumber," +
                                " and sym is $symKeyVersionNumber)",
                        code = CODE_017_INVALID_VERSION_NUMBER
                    )
                }

                logger.debug { "Checking role version number is 1" }
                if (permissionTuple.roleVersionNumber != 1) {
                    return@post unprocessableEntity(
                        call = call,
                        message = "Admin role version number is not 1 " +
                                "(it is ${permissionTuple.roleVersionNumber})",
                        code = CODE_017_INVALID_VERSION_NUMBER
                    )
                }

                logger.debug { "Checking resource name across resource and tuple is the same" }
                if (resourceName != permissionTuple.resourceName) {
                    return@post unprocessableEntity(
                        call = call,
                        message = "Resource name is not the same across resource and " +
                                "permission tuple (resource is $resourceName " +
                                "and permission tuple is ${permissionTuple.resourceName})",
                        code = CODE_026_TUPLE_FORMAT
                    )
                }

                logger.debug { "Checking resource token across resource and tuple is the same" }
                if (resourceToken != permissionTuple.resourceToken) {
                    return@post unprocessableEntity(
                        call = call,
                        message = "Resource token is not the same across resource and " +
                                "permission tuple (resource is $resourceToken " +
                                "and permission tuple is ${permissionTuple.resourceToken})",
                        code = CODE_026_TUPLE_FORMAT
                    )
                }

                logger.debug { "Checking permission is ${PermissionType.READWRITE}" }
                if (permissionTuple.permission != PermissionType.READWRITE) {
                    return@post unprocessableEntity(
                        call = call,
                        message = "Permission is not ${PermissionType.READWRITE} " +
                                "(it is ${permissionTuple.permission})",
                        code = CODE_016_INVALID_PERMISSION
                    )
                }

                logger.debug { "Checking the role assigned to the resource is the admin $ADMIN" }
                if (permissionTuple.roleName != ADMIN || permissionTuple.roleToken != ADMIN) {
                    return@post unprocessableEntity(
                        call = call,
                        message = "Role name or token is not $ADMIN in permission tuple " +
                                "(name is ${permissionTuple.roleName} and token is " +
                                "${permissionTuple.roleToken})",
                        code = CODE_026_TUPLE_FORMAT
                    )
                }

                /** Synchronize the RM */
                val returnCode = mutex.withLock {

                    /** Lock the status of the services */
                    var code = startOfMethod(core)
                    if (code != CODE_000_SUCCESS) {
                        logger.warn { "Error while locking services ($code)" }
                        return@withLock code
                    }

                    logger.debug {
                        "Retrieving the signer's public key" +
                        " to check digital signature"
                    }
                    val permissionTupleSigner = permissionTuple.signer
                    val asymSigPubKeyBytes = mmMap[core]!!.getPublicKey(
                        token = permissionTupleSigner,
                        elementType = RBACUnitElementTypeWithKeys.USER,
                        asymKeyType = AsymKeysType.SIG,
                    )
                    if (asymSigPubKeyBytes == null) {
                        logger.warn { "Signer user not found (token is $permissionTupleSigner)" }
                        return@withLock endOfMethod(CODE_004_USER_NOT_FOUND, core)
                    }

                    val asymSigPubKey = cryptoPKEMap[core]!!.recreateAsymPublicKey(
                        asymPublicKeyBytes = asymSigPubKeyBytes,
                        type = AsymKeysType.SIG,
                    )

                    logger.debug { "Checking digital signatures" }
                    cryptoPKEMap[core]!!.verifySignature(
                        signature = permissionTupleSignature,
                        bytes = permissionTuple.getBytesForSignature(),
                        verifyingKey = asymSigPubKey
                    )

                    logger.debug { "Adding resource in the MM" }
                    code = mmMap[core]!!.addResource(resource)
                    if (code != CODE_000_SUCCESS) {
                        logger.warn { "Error while adding the resource in the MM ($code)" }
                        return@withLock endOfMethod(code, core)
                    }

                    code = acMap[core]?.addResource(
                        resourceName = permissionTuple.resourceName,
                    ) ?: CODE_000_SUCCESS
                    if (code != CODE_000_SUCCESS) {
                        logger.warn { "Error while adding the resource in the AC ($code)" }
                        return@withLock endOfMethod(code, core)
                    }

                    code = acMap[core]?.assignPermissionToRole(
                        roleName = permissionTuple.roleName,
                        resourceName = permissionTuple.resourceName,
                        permission = permissionTuple.permission
                    ) ?: CODE_000_SUCCESS
                    if (code != CODE_000_SUCCESS) {
                        logger.warn { "Error while adding PA assignments in the AC ($code)" }
                        return@withLock endOfMethod(code, core)
                    }

                    code = mmMap[core]!!.addPermissionTuples(hashSetOf(permissionTuple))
                    if (code != CODE_000_SUCCESS) {
                        logger.warn { "Error while adding the permission tuple in the MM ($code)" }
                        return@withLock endOfMethod(code, core)
                    }

                    logger.debug { "Ask the DM to move the resource in the download folder" }
                    code = dmMap[core]!!.writeResource(
                        updatedResource = Resource(
                            name = resourceName,
                            enforcement = resource.enforcement
                        ),
                        content = byteArrayOf().inputStream()
                    )
                    if (code == CODE_000_SUCCESS) {
                        logger.info {
                            "Add request for resource with name " +
                            "$resourceName for core $core was completed"
                        }
                    } else {
                        logger.warn { "DM returned error code ($code)" }
                    }
                    return@withLock endOfMethod(code, core)
                }

                when (returnCode) {
                    CODE_000_SUCCESS -> ok(call)
                    CODE_004_USER_NOT_FOUND -> return@post ResponseRoutes.notFound(
                        call = call,
                        message = "Signer user not found",
                        code = returnCode
                    )
                    else -> return@post internalError(
                        call = call,
                        message = "Error during add resource operation ($returnCode)",
                        code = returnCode
                    )
                }
            }

            // TODO perhaps the resource name should be a path parameter?
            /**
             * Check a write
             * resource operation
             */
            patch {
                val coreParam = call.parameters[SERVER.CORE]
                    ?: return@patch unprocessableEntity(
                        call,
                        "Missing ${SERVER.CORE} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )
                val core: CoreType = CoreType.valueOf(coreParam)

                /** If the RM was not configured yet */
                if (
                    !acMap.contains(core) ||
                    !dmMap.contains(core) ||
                    !mmMap.contains(core) ||
                    !cryptoPKEMap.contains(core)
                ) {
                    return@patch serviceUnavailable(
                        call = call,
                        message = "This RM was not configured",
                        code = CODE_021_RM_CONFIGURATION
                    )
                }

                logger.debug { "Retrieving the write resource request" }
                val writeResourceRBACRequest = call.receive<WriteResourceRBACRequest>()
                val roleName = writeResourceRBACRequest.roleName
                val resource = writeResourceRBACRequest.resource
                val resourceName = resource.name
                val symDecKeyVersionNumber = resource.symDecKeyVersionNumber
                val symEncKeyVersionNumber = resource.symEncKeyVersionNumber

                /**
                 * TODO we take the username from the write resource request
                 *  just because we need to know the name of the user to ask OPA
                 *  if the user can write the resource. In the future, this should
                 *  be replaced/integrated by the login/authentication method used by the RM
                 */
                val username = writeResourceRBACRequest.username

                logger.info {
                    "The user $username is asking to write resource " +
                    " $resourceName as role $roleName for core $core"
                }


                /** Synchronize the RM */
                val returnCode = mutex.withLock {

                    /** Lock the status of the services */
                    var code = startOfMethod(core)
                    if (code != CODE_000_SUCCESS) {
                        logger.warn { "Error while locking services ($code)" }
                        return@withLock code
                    }

                    /**
                     * If OPA was configured, check that the user
                     * is authorized to write over the given file
                     */
                    if (acMap[core] != null) {
                        code = acMap[core]!!.isUserAllowed(
                            username = username,
                            roleName = roleName,
                            permission = PermissionType.WRITE,
                            resourceName = resourceName
                        )
                        when (code) {
                            CODE_037_FORBIDDEN -> {
                                /** Return a 404 to avoid information leakage */
                                logger.warn {
                                    "Unauthorized user $username tried " +
                                    "to write over resource $resourceName"
                                }
                                return@withLock endOfMethod(CODE_006_RESOURCE_NOT_FOUND, core)
                            }
                            CODE_000_SUCCESS -> {
                                logger.debug { "User is authorized" }
                            }
                            else -> {
                                logger.warn { "Error during request to OPA" }
                                return@withLock endOfMethod(code, core)
                            }
                        }
                    }

                    /** Get the resource to overwrite */
                    val oldResource = mmMap[core]!!.getResources(
                        resourceName = resourceName,
                        offset = 0, limit = 1,
                    ).firstOrNull()
                    if (oldResource == null) {
                        logger.warn { "Resource $resourceName was not found" }
                        return@withLock endOfMethod(CODE_006_RESOURCE_NOT_FOUND, core)
                    }

                    // TODO shouldn't we do what we do below only if the enforcement includes cryptography?
                    /**
                     * The RM has to check that:
                     * 1. tuple's signature is correct;
                     * 2. the resource version number is the latest one;
                     * 3. the role used to write the resource has '*WRITE' permission over the resource;
                     * 4. the specified enforcement is the same as the old one.
                     */

                    logger.debug { "Checking enforcement is the same as old one" }
                    if (resource.enforcement != oldResource.enforcement) {
                        logger.warn {
                            "Specified enforcement (${resource.enforcement}) does " +
                            "not correspond to the old one (${oldResource.enforcement})"
                        }
                        return@withLock endOfMethod(CODE_027_AC_ENFORCEMENT_INCONSISTENT, core)
                    }

                    logger.debug {
                        "Checking that the resource version number is the latest" +
                        " (i.e., the resource was encrypted with the latest key)"
                    }
                    val oldSymEncKeyVersionNumber = oldResource.symEncKeyVersionNumber
                    if (symDecKeyVersionNumber != oldSymEncKeyVersionNumber) {
                        logger.warn {
                            "Specified symmetric key version number ($symDecKeyVersionNumber) " +
                            "does not correspond to the latest one ($oldSymEncKeyVersionNumber)"
                        }
                        return@withLock endOfMethod(CODE_017_INVALID_VERSION_NUMBER, core)
                    }

                    logger.debug { "Checking encryption and decryption resource version numbers are the same" }
                    if (symDecKeyVersionNumber != symEncKeyVersionNumber) {
                        logger.warn {
                            "Encryption version number ($symEncKeyVersionNumber) is not " +
                            "the same as decryption version number ($symDecKeyVersionNumber)"
                        }
                        return@withLock endOfMethod(CODE_017_INVALID_VERSION_NUMBER, core)
                    }

                    logger.debug { "Checking that the role has WRITE permission over the resource" }
                    val permissionTuple = mmMap[core]!!.getPermissionTuples(
                        resourceName = resourceName,
                        roleName = roleName
                    ).firstOrNull {
                        it.permission == PermissionType.READWRITE
                    }

                    /** Return a 404 instead of a 403 to avoid information leakage */
                    if (permissionTuple == null) {
                        logger.warn { "The role $roleName does not have WRITE permission over  $resourceName" }
                        return@withLock endOfMethod(CODE_006_RESOURCE_NOT_FOUND, core)
                    }

                    if (permissionTuple.roleName != roleName) {
                        logger.warn { "Given role token does not match across tuples" }
                        return@withLock endOfMethod(CODE_026_TUPLE_FORMAT, core)
                    }

                    logger.debug {
                        "Retrieving the permission tuple signer's " +
                        "public key to check the digital signature"
                    }
                    val adminAsymSigPubKeyBytes = mmMap[core]!!.getPublicKey(
                        token = permissionTuple.signer,
                        elementType = RBACUnitElementTypeWithKeys.USER,
                        asymKeyType = AsymKeysType.SIG,
                    )
                    if (adminAsymSigPubKeyBytes == null) {
                        logger.warn {
                            "Signer user for permission tuple " +
                            "not found (token is $permissionTuple.signer)"
                        }
                        return@withLock endOfMethod(CODE_004_USER_NOT_FOUND, core)
                    }


                    val adminAsymSigPubKey = cryptoPKEMap[core]!!.recreateAsymPublicKey(
                        asymPublicKeyBytes = adminAsymSigPubKeyBytes,
                        type = AsymKeysType.SIG,
                    )

                    logger.debug { "Checking digital signature of the permission tuple" }
                    cryptoPKEMap[core]!!.verifySignature(
                        signature = permissionTuple.signature!!,
                        bytes = permissionTuple.getBytesForSignature(),
                        verifyingKey = adminAsymSigPubKey
                    )

                    logger.debug { "Replace the resource in the MM" }
                    code = mmMap[core]!!.updateResourceVersionNumber(resource)
                    if (code != CODE_000_SUCCESS) {
                        logger.warn { "Error while updating the resource version numbers ($code)" }
                        return@withLock endOfMethod(code, core)
                    }

                    logger.debug { "Ask the DM to overwrite the resource in the download folder" }
                    code = dmMap[core]!!.writeResource(
                        updatedResource = Resource(
                            name = resourceName,
                            enforcement = resource.enforcement
                        ),
                        content = byteArrayOf().inputStream()
                    )

                    if (code == CODE_000_SUCCESS) {
                        logger.info {
                            "Write request for resource with name " +
                            "$resourceName for core $core was completed"
                        }
                    } else {
                        logger.warn { "DM returned error code ($code)" }
                    }
                    return@withLock endOfMethod(code, core)
                }

                when (returnCode) {
                    CODE_000_SUCCESS -> ok(call)
                    CODE_004_USER_NOT_FOUND -> return@patch ResponseRoutes.notFound(
                        call = call,
                        message = "Signer user not found",
                        code = returnCode
                    )
                    CODE_006_RESOURCE_NOT_FOUND -> return@patch ResponseRoutes.notFound(
                        call = call,
                        message = "Resource user not found",
                        code = returnCode
                    )
                    CODE_017_INVALID_VERSION_NUMBER -> return@patch unprocessableEntity(
                        call = call,
                        message = "Version numbers do not correspond to the previous ones",
                        code = returnCode
                    )
                    CODE_026_TUPLE_FORMAT -> return@patch unprocessableEntity(
                        call = call,
                        message = "Given role token does not match across tuples",
                        code = returnCode
                    )
                    CODE_027_AC_ENFORCEMENT_INCONSISTENT -> return@patch unprocessableEntity(
                        call = call,
                        message = "Specified enforcement does not correspond to the previous one",
                        code = returnCode
                    )
                    else -> return@patch internalError(
                        call = call,
                        message = "Error during write resource operation ($returnCode)",
                        code = returnCode
                    )
                }
            }
        }
    }
}

/** Routes related to configuration; configure (post) */
fun Route.configureRouting() {

    /** Configure the RM */
    route(RM) {

        post("{${SERVER.CORE}}/") {

            // TODO authenticate user (login as in the CryptoacMap[core]?)

            // TODO logging

            // TODO check that received parameters are ok, e.g., OPA server is
            //  running at the specified url and port. etc. if not, return an error code:
            //  OutcomeCode.CODE_018_INTERFACE_CONFIGURATION_PARAMETERS

            val coreParam = call.parameters[SERVER.CORE]
                ?: return@post unprocessableEntity(
                    call,
                    "Missing ${SERVER.CORE} parameter",
                    CODE_019_MISSING_PARAMETERS
                )
            val core: CoreType = CoreType.valueOf(coreParam)

            /** Get the storage parameters from the request */
            val parameters: RMRBACCryptoACParameters = call.receive()

            mmMap[core] = MMFactory.getMM(parameters.mmServiceParameters) as MMServiceRBAC
            dmMap[core] = DMFactory.getDM(parameters.dmServiceCryptoACParameters) as DMServiceRBACCryptoAC
            acMap[core] = parameters.acServiceParameters?.let { it1 -> ACFactory.getAC(it1) } as ACServiceRBACOPA?
            cryptoPKEMap[core] = CryptoPKEFactory.getCrypto(parameters.crypto)

            var code = startOfMethod(core)
            if (code != CODE_000_SUCCESS) {
                return@post internalError(
                    call = call,
                    message = "Error during locking of interfaces ($code)",
                    code = code
                )
            }
            mmMap[core]!!.init()
            dmMap[core]!!.init()
            acMap[core]?.init()
            cryptoPKEMap[core]!!.init()

            code = endOfMethod(code, core)
            if (code != CODE_000_SUCCESS) {
                return@post internalError(
                    call = call,
                    message = "Error during unlocking of interfaces ($code)",
                    code = code
                )
            }

            ok(call)
        }
    }
}

/** Register the routes for the RM */
fun Application.registerRMRoutes() {
    logger.info { "Registering RM routes" }
    routing {
        resourcesRouting()
        configureRouting()
    }
}



/**
 * Lock the required services
 * and return the outcome code
 */
private fun startOfMethod(core: CoreType): OutcomeCode {
    val mmLockCode = mmMap[core]!!.lock()
    return if (mmLockCode == CODE_000_SUCCESS) {
        val opaLockCode = acMap[core]?.lock()
            ?: CODE_000_SUCCESS
        if (opaLockCode == CODE_000_SUCCESS) {
            val dmLockCode = dmMap[core]!!.lock()
            if (dmLockCode == CODE_000_SUCCESS) {
                CODE_000_SUCCESS
            } else {
                logger.warn { "DM lock failed, code is $dmLockCode" }
                unlockOrRollbackService(ServiceType.AC, core)
                unlockOrRollbackService(ServiceType.MM, core)
                dmLockCode
            }
        } else {
            logger.warn { "AC lock failed, code is $opaLockCode" }
            unlockOrRollbackService(ServiceType.MM, core)
            opaLockCode
        }
    } else {
        logger.warn { "MM lock failed, code is $mmLockCode" }
        mmLockCode
    }
}

/**
 * If the [code] is a success, unlock the service
 * (i.e., commit the changes). Otherwise, rollback
 * to the previous status. In both cases, return
 * the outcome code
 */
private fun endOfMethod(code: OutcomeCode, core: CoreType): OutcomeCode {
    if (code == CODE_000_SUCCESS) {
        unlockOrRollbackService(ServiceType.MM, core)
        unlockOrRollbackService(ServiceType.AC, core)
        unlockOrRollbackService(ServiceType.DM, core)
    } else {
        unlockOrRollbackService(ServiceType.MM, core, true)
        unlockOrRollbackService(ServiceType.AC, core, true)
        unlockOrRollbackService(ServiceType.DM, core, true)
    }
    return code
}

/**
 * Unlock or rollback the specified [serviceType],
 * depending on the [rollback] flag
 */
private fun unlockOrRollbackService(serviceType: ServiceType, core: CoreType, rollback: Boolean = false) {
    val code = when (serviceType) {
        ServiceType.MM -> if (rollback) mmMap[core]!!.rollback() else mmMap[core]!!.unlock()
        ServiceType.DM -> if (rollback) dmMap[core]!!.rollback() else dmMap[core]!!.unlock()
        ServiceType.AC -> if (rollback) acMap[core]?.rollback()
                ?: CODE_000_SUCCESS
            else acMap[core]?.unlock()
                ?: CODE_000_SUCCESS
        ServiceType.RM -> {
            val message = "${ServiceType.RM} is not lockable"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }
    if (code != CODE_000_SUCCESS) {
        val message = ("$serviceType lock was fine but "
            + (if (rollback) "rollback" else "unlock")
            + " failed, code is $code")
        logger.error { message }
        throw IllegalStateException(message)
    }
}
