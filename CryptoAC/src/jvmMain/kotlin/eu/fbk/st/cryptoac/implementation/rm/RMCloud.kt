package eu.fbk.st.cryptoac.implementation.rm

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.core.tuples.FileTuple
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.Crypto
import eu.fbk.st.cryptoac.crypto.CryptoFactory
import eu.fbk.st.cryptoac.API.FILES
import eu.fbk.st.cryptoac.API.RM
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithVersionNumber
import eu.fbk.st.cryptoac.implementation.ds.DSInterfaceCloud
import eu.fbk.st.cryptoac.implementation.ds.DSInterfaceCloudParameters
import eu.fbk.st.cryptoac.implementation.ms.MSInterfaceMySQL
import eu.fbk.st.cryptoac.implementation.ms.MSInterfaceMySQLParameters
import eu.fbk.st.cryptoac.implementation.opa.OPAInterface
import eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters
import eu.fbk.st.cryptoac.implementation.opa.PA
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import java.lang.IllegalStateException
import kotlin.collections.HashSet

private val logger = KotlinLogging.logger {}

/** The object to interact with the MS. */
private var ms: MSInterfaceMySQL? = null

/** The object to interact with the DS. */
private var dsInterface: DSInterfaceCloud? = null

/** The object to interact with the OPA. */
private var opaInterface: OPAInterface? = null

/** The cryptographic object. */
private var crypto: Crypto? = null

/** Routes related to files; add (post), write (patch). */
fun Route.filesRouting() {

    /** Wrap all routes related to the RM. */
    route(RM) {

        route(FILES) {

            /** Check an add file operation. */
            post {
                // TODO authenticate user (login as in the proxy?)

                /** If the RM was not configured yet. */
                if (ms == null || opaInterface == null || dsInterface == null || crypto == null) {
                    return@post ResponseRoutes.serviceUnavailable(
                        call, "This RM was not configured",
                        OutcomeCode.CODE_021_RM_CONFIGURATION)
                }

                // TODO the core parameter is not needed, this is the cloud implementation? or do we need it?
                logger.debug { "Retrieving the core parameter" }
                val coreParam = call.parameters[SERVER.CORE] ?: return@post ResponseRoutes.unprocessableEntity(
                    call,
                    "Missing ${SERVER.CORE} parameter",
                    OutcomeCode.CODE_020_INVALID_PARAMETER)
                val core: CoreType = CoreType.valueOf(coreParam)

                logger.debug { "Retrieving the add file request" }
                val addFileRequest = call.receive<AddFileRequest>()
                val fileTuple = addFileRequest.fileTuple
                val fileTupleName = fileTuple.fileName
                val fileTupleToken = fileTuple.fileToken
                val fileTupleSigner = fileTuple.signer
                val symDecKeyVersionNumber = fileTuple.symDecKeyVersionNumber
                val fileTupleSignature = fileTuple.signature
                val permissionTuple = addFileRequest.permissionTuple
                val symKeyVersionNumber = permissionTuple.symKeyVersionNumber
                val permissionTupleSignature = permissionTuple.signature

                logger.info { "User is asking to add a file with name $fileTupleName for core $core" } // TODO add username

                val file = File(name = fileTupleName, symEncKeyVersionNumber = addFileRequest.symKeyVersionNumber)
                file.token = fileTupleToken

                /**
                 * The RM has to check that:
                 * 1. tuples' signatures are correct and signed by the same user;
                 * 2. the file version numbers of the file are equal to 1;
                 * 3. the permission tuple gives permission over the file to the administrator;
                 * 4. the file and permission tuples are consistent (i.e., file name and token is the same).
                 */

                logger.debug { "Checking signatures were given" }
                if (fileTupleSignature == null || permissionTupleSignature == null) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "Missing digital signatures", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                logger.debug { "Checking file version numbers are both 1" }
                if (symDecKeyVersionNumber != 1 || symKeyVersionNumber != 1) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "Version numbers are not 1 " +
                                "(sym dec is $symDecKeyVersionNumber and sym is $symKeyVersionNumber)",
                        OutcomeCode.CODE_017_INVALID_VERSION_NUMBER)
                }

                logger.debug { "Checking role version number is 1" }
                if (permissionTuple.roleVersionNumber != 1) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "Admin role version number is not 1 " +
                                "(it is ${permissionTuple.roleVersionNumber})",
                        OutcomeCode.CODE_017_INVALID_VERSION_NUMBER)
                }

                logger.debug { "Checking file name across tuples is the same" }
                if (fileTupleName != permissionTuple.fileName) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "File name is not the same across file and permission tuples " +
                                "(file tuple is $fileTupleName and permission tuple is ${permissionTuple.fileName})",
                        OutcomeCode.CODE_026_TUPLE_FORMAT)
                }

                logger.debug { "Checking file token across tuples is the same" }
                if (fileTupleToken != permissionTuple.fileToken) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "File token is not the same across file and permission tuples " +
                                "(file tuple is $fileTupleToken and permission tuple is ${permissionTuple.fileToken})",
                        OutcomeCode.CODE_026_TUPLE_FORMAT)
                }

                logger.debug { "Checking signer across tuples is the same" }
                if (fileTupleSigner != permissionTuple.signer) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "Signer is not the same across file and permission tuples " +
                                "(file tuple is $fileTupleSigner and permission tuple is ${permissionTuple.signer})",
                        OutcomeCode.CODE_026_TUPLE_FORMAT)
                }

                logger.debug { "Checking permission is ${PermissionType.READWRITE}" }
                if (permissionTuple.permission != PermissionType.READWRITE) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "Permission is not ${PermissionType.READWRITE} " +
                                "(it is ${permissionTuple.permission})",
                        OutcomeCode.CODE_016_INVALID_PERMISSION)
                }

                logger.debug { "Checking the role assigned to the file is the admin $ADMIN" }
                if (permissionTuple.roleName != ADMIN || permissionTuple.roleToken != ADMIN) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "Role name or token is not $ADMIN in permission tuple " +
                                "(name is ${permissionTuple.roleName} and token is ${permissionTuple.roleToken})",
                        OutcomeCode.CODE_026_TUPLE_FORMAT)
                }


                /** Lock the status of the interfaces. */
                var code = startOfMethod()
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@post ResponseRoutes.internalError(
                        call, "Error while locking interfaces ($code)",
                        code
                    )
                }

                logger.debug { "Retrieving the signer's public key to check digital signatures" }
                val asymSigPubKeyBytes = ms!!.getPublicKey(
                    token = fileTupleSigner,
                    elementType = ElementTypeWithKey.USER,
                    asymKeyType = AsymKeysType.SIG,
                ) ?: return@post ResponseRoutes.notFound(call,
                    "Signer user not found (token is $fileTupleSigner)",
                    endOfMethod(OutcomeCode.CODE_004_USER_NOT_FOUND))

                val asymSigPubKey = crypto!!.recreateAsymKeys(
                    asymPublicKeyBytes = asymSigPubKeyBytes,
                    type = AsymKeysType.SIG,
                ).public

                logger.debug { "Checking digital signatures" }
                crypto!!.verifySignature(fileTupleSignature, fileTuple.getBytesForSignature(), asymSigPubKey)
                crypto!!.verifySignature(permissionTupleSignature, permissionTuple.getBytesForSignature(), asymSigPubKey)


                logger.debug { "Adding file in the MS" }
                code = ms!!.addFile(file)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@post ResponseRoutes.internalError(
                        call, "Error while adding the file ($code)",
                        endOfMethod(code)
                    )
                }

                logger.debug { "Adding file tuple in the MS" }
                code = ms!!.addFileTuples(HashSet<FileTuple>().apply { add(fileTuple) })
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@post ResponseRoutes.internalError(
                        call, "Error while adding the file tuple ($code)",
                        endOfMethod(code)
                    )
                }

                code = opaInterface!!.addPAAssignment(PA.extractPA(permissionTuple))
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@post ResponseRoutes.internalError(
                        call, "Error while adding PA assignments ($code)",
                        endOfMethod(code)
                    )
                }

                code = ms!!.addPermissionTuples(HashSet<PermissionTuple>().apply { add(permissionTuple) })
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@post ResponseRoutes.internalError(
                        call, "Error while adding the permission tuple ($code)",
                        endOfMethod(code)
                    )
                }

                logger.debug { "Ask the DS to move the file in the download folder" }
                code = endOfMethod(dsInterface!!.writeFile(File(fileTupleName), byteArrayOf().inputStream()))
                return@post if (code == OutcomeCode.CODE_000_SUCCESS) {
                    ResponseRoutes.ok(call)
                } else {
                    call.response.status(HttpStatusCode.InternalServerError)
                    call.respond(code)
                }
            }


            // TODO perhaps the file name should be a path parameter?
            /** Check a write file operation. */
            patch {
                // TODO authenticate user (login as in the proxy?)

                /** If the RM was not configured yet. */
                if (ms == null || opaInterface == null || dsInterface == null || crypto == null) {
                    return@patch ResponseRoutes.serviceUnavailable(
                        call, "This RM was not configured",
                        OutcomeCode.CODE_021_RM_CONFIGURATION)
                }

                logger.debug { "Retrieving the core parameter" }
                val coreParam = call.parameters[SERVER.CORE] ?: return@patch ResponseRoutes.unprocessableEntity(
                    call,
                    "Missing ${SERVER.CORE} parameter",
                    OutcomeCode.CODE_020_INVALID_PARAMETER)
                val core: CoreType = CoreType.valueOf(coreParam)

                logger.debug { "Retrieving the write file request" }
                val writeFileRequest = call.receive<WriteFileRequest>()
                val fileTuple = writeFileRequest.fileTuple
                val fileTupleName = fileTuple.fileName
                val fileTupleToken = fileTuple.fileToken
                val fileTupleSigner = fileTuple.signer
                val symDecKeyVersionNumber = fileTuple.symDecKeyVersionNumber
                val fileTupleSignature = fileTuple.signature
                val roleToken = fileTuple.roleToken

                logger.info { "User is asking to write file with name $fileTupleName for cory $core" } // TODO add username

                val file = File(name = fileTupleName, symEncKeyVersionNumber = writeFileRequest.symKeyVersionNumber)
                file.token = fileTupleToken


                /** Lock the status of the interfaces. */
                var code = startOfMethod()
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@patch ResponseRoutes.internalError(
                        call, "Error while locking interfaces ($code)",
                        code
                    )
                }

                /** Get the file tuple of the file to overwrite. */
                /** Get the file tuple of the file to overwrite. */
                val oldFileTuple = ms!!.getFileTuples(
                    fileName = fileTupleName,
                    fileToken = fileTupleToken,
                    offset = 0, limit = 1,
                ).firstOrNull() ?: return@patch ResponseRoutes.notFound(call,
                        "File $fileTupleName was not found",
                        endOfMethod(OutcomeCode.CODE_006_FILE_NOT_FOUND))

                /**
                 * The RM has to check that:
                 * 1. tuples' signatures are correct and signed by the same user;
                 * 2. the file version number is the latest one;
                 * 3. the role used to write the file has write permission over the file;
                 * 4. the specified enforcement is the same as the old one.
                 */

                logger.debug { "Checking signature was given" }
                if (fileTupleSignature == null) {
                    return@patch ResponseRoutes.unprocessableEntity(call,
                        "Missing digital signature",
                        endOfMethod(OutcomeCode.CODE_020_INVALID_PARAMETER))
                }

                logger.debug { "Checking enforcement is the same as old one" }
                if (fileTuple.enforcement != oldFileTuple.enforcement) {
                    return@patch ResponseRoutes.unprocessableEntity(call,
                        "Specified enforcement (${fileTuple.enforcement}) does not correspond to the old one (${oldFileTuple.enforcement})",
                        endOfMethod(OutcomeCode.CODE_027_AC_ENFORCEMENT_INCONSISTENT))
                }

                logger.debug { "Checking that the file version number is the latest one (i.e., the file was encrypted with the latest key)" }
                val oldSymDecKeyVersionNumber = ms!!.getVersionNumber(
                    name = fileTupleName, elementType = ElementTypeWithVersionNumber.FILE
                )
                if (symDecKeyVersionNumber != oldSymDecKeyVersionNumber) {
                    return@patch ResponseRoutes.unprocessableEntity(call,
                        "Specified symmetric key version number ($symDecKeyVersionNumber) does not correspond to the latest one ($oldSymDecKeyVersionNumber)",
                        endOfMethod(OutcomeCode.CODE_017_INVALID_VERSION_NUMBER))
                }

                logger.debug { "Retrieving the file tuple signer's public key to check the digital signature" }
                val asymSigPubKeyBytes = ms!!.getPublicKey(
                    token = fileTupleSigner,
                    elementType = ElementTypeWithKey.USER,
                    asymKeyType = AsymKeysType.SIG,
                ) ?: return@patch ResponseRoutes.notFound(call,
                        "Signer user not found (token is $fileTupleSigner)",
                        endOfMethod(OutcomeCode.CODE_004_USER_NOT_FOUND))

                val asymSigPubKey = crypto!!.recreateAsymKeys(
                    asymPublicKeyBytes = asymSigPubKeyBytes,
                    type = AsymKeysType.SIG,
                ).public

                logger.debug { "Checking digital signature of the file tuple" }
                crypto!!.verifySignature(fileTupleSignature, fileTuple.getBytesForSignature(), asymSigPubKey)

                logger.debug { "Checking that the role has WRITE permission over the file" }
                val permissionTuple = ms!!.getPermissionTuples(
                    fileName = fileTupleName,
                    roleToken = roleToken,
                    symKeyVersionNumber = symDecKeyVersionNumber,
                    permission = PermissionType.READWRITE
                ).firstOrNull() ?:
                    /** Return a 404 instead of a 403 to avoid information leakage. */
                    return@patch ResponseRoutes.notFound(call,
                        "File $fileTupleName was not found",
                        endOfMethod(OutcomeCode.CODE_006_FILE_NOT_FOUND))


                logger.debug { "Retrieving the permission tuple signer's public key to check the digital signature" }
                val adminAsymSigPubKeyBytes = ms!!.getPublicKey(
                    token = permissionTuple.signer,
                    elementType = ElementTypeWithKey.USER,
                    asymKeyType = AsymKeysType.SIG,
                ) ?: return@patch ResponseRoutes.notFound(call,
                        "Signer user for permission tuple not found (token is $permissionTuple.signer)",
                        endOfMethod(OutcomeCode.CODE_004_USER_NOT_FOUND))

                val adminAsymSigPubKey = crypto!!.recreateAsymKeys(
                    asymPublicKeyBytes = adminAsymSigPubKeyBytes,
                    type = AsymKeysType.SIG,
                ).public

                logger.debug { "Checking digital signature of the permission tuple" }
                crypto!!.verifySignature(permissionTuple.signature!!,
                    permissionTuple.getBytesForSignature(),
                    adminAsymSigPubKey)



                logger.debug { "Replace the file tuple in the MS" }
                code = ms!!.deleteFileTuples(fileTupleName)
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@patch ResponseRoutes.internalError(
                        call, "Error while deleting the file tuple ($code)",
                        endOfMethod(code)
                    )
                }

                code = ms!!.addFileTuples(HashSet<FileTuple>().apply { add(fileTuple) })
                if (code != OutcomeCode.CODE_000_SUCCESS) {
                    return@patch ResponseRoutes.internalError(
                        call, "Error while adding the file tuple ($code)",
                        endOfMethod(code)
                    )
                }

                logger.debug { "Ask the DS to overwrite the file in the download folder" }
                code = endOfMethod(dsInterface!!.writeFile(File(fileTupleName), byteArrayOf().inputStream()))
                return@patch if (code == OutcomeCode.CODE_000_SUCCESS) {
                    ResponseRoutes.ok(call)
                } else {
                    call.response.status(HttpStatusCode.InternalServerError)
                    call.respond(code)
                }
            }
        }
    }
}

/** Routes related to configuration; configure (post). */
fun Route.configureRouting() {

    /** Configure the RM. */
    route(RM) {

        post {

            // TODO authenticate user (login as in the proxy?)
            // TODO logging

            /** Get the storage parameters from the request. */
            // TODO this should be "val parameters = call.receive<ReferenceMonitorCloudConfigureParameters>()",
            //  but a bug in kotlinx serialization library prevents it. Therefore, receive as string and then serialize.
            //  When a new version of the kotlinx serialization library is provided, try again
            val parametersString = call.receive<String>()
            val parameters: RMCloudParameters = Json.decodeFromString(parametersString)
            ms = MSInterfaceMySQL(parameters.msMySQLInterfaceParameters)
            dsInterface = DSInterfaceCloud(parameters.dsCloudInterfaceParameters)
            opaInterface = OPAInterface(parameters.opaInterfaceParameters)

            // TODO get crypto parameters from request
            crypto = CryptoFactory.getCrypto(cryptoImplementation)

            ResponseRoutes.ok(call)
        }
    }
}

/** Register the routes for the RM. */
fun Application.registerRMRoutes() {
    logger.info { "Registering RM routes" }
    routing {
        filesRouting()
        configureRouting()
    }
}

/**
 * Lock the specified interfaces
 * and return the outcome code.
 */
private fun startOfMethod(msLock: Boolean = true, opaLock: Boolean = true, dsLock: Boolean = true): OutcomeCode {
    logger.info {
        "Locking the following interfaces: " +
        if (msLock) "MS " else "" +
        if (opaLock) "OPA " else "" +
        if (dsLock) "DS " else ""
    }
    val msLockCode = if (msLock) ms!!.lock() else OutcomeCode.CODE_000_SUCCESS
    return if (msLockCode == OutcomeCode.CODE_000_SUCCESS) {
        val opaLockCode = if (opaLock) opaInterface!!.lock() else OutcomeCode.CODE_000_SUCCESS
        if (opaLockCode == OutcomeCode.CODE_000_SUCCESS) {
            val dsLockCode = if (dsLock) dsInterface!!.lock() else OutcomeCode.CODE_000_SUCCESS
            if (dsLockCode == OutcomeCode.CODE_000_SUCCESS) {
                OutcomeCode.CODE_000_SUCCESS
            } else {
                logger.warn { "DS lock failed, code is $dsLockCode" }
                if (opaLock) unlockOrRollbackInterface("OPA")
                if (msLock) unlockOrRollbackInterface("MS")
                dsLockCode
            }
        } else {
            logger.warn { "OPA lock failed, code is $opaLockCode" }
            if (msLock) unlockOrRollbackInterface("MS")
            opaLockCode
        }
    } else {
        logger.warn { "MS lock failed, code is $msLockCode" }
        msLockCode
    }
}

/**
 * If the [code] is a success, unlock the specified interfaces (i.e., commit the changes).
 * Otherwise, rollback to the previous status. In both cases, return the outcome code.
 */
private fun endOfMethod(code: OutcomeCode, msLocked: Boolean = true, opaLocked: Boolean = true, dsLocked: Boolean = true): OutcomeCode {
    if (code == OutcomeCode.CODE_000_SUCCESS) {
        logger.info {
            "Operation successful, unlocking the following interfaces: " +
            if (msLocked) "MS " else "" +
            if (opaLocked) "OPA " else "" +
            if (dsLocked) "DS " else ""
        }
        if (msLocked) unlockOrRollbackInterface("MS")
        if (opaLocked) unlockOrRollbackInterface("OPA")
        if (dsLocked) unlockOrRollbackInterface("DS")
    } else {
        logger.info {
            "Operation unsuccessful (code $code), rollbacking the following interfaces: " +
            if (msLocked) "MS " else "" +
            if (opaLocked) "OPA " else "" +
            if (dsLocked) "DS " else ""
        }
        if (msLocked) unlockOrRollbackInterface("MS", true)
        if (opaLocked) unlockOrRollbackInterface("OPA", true)
        if (dsLocked) unlockOrRollbackInterface("DS", true)
    }
    return code
}

/**
 * Unlock or rollback the specified [interfaze],
 * depending on the [rollback] flag.
 */
private fun unlockOrRollbackInterface(interfaze: String, rollback: Boolean = false) {
    val code = when (interfaze) {
        "MS" -> if (rollback) ms!!.rollback() else ms!!.unlock()
        "OPA" -> if (rollback) opaInterface!!.rollback() else opaInterface!!.unlock()
        "DS" -> if (rollback) dsInterface!!.rollback() else dsInterface!!.unlock()
        else -> {
            val message = "Interface not existing"
            logger.error { message }
            throw IllegalArgumentException(message)
        }
    }
    if (code != OutcomeCode.CODE_000_SUCCESS) {
        val message = "$interfaze lock was fine but ${if (rollback) "rollback" else "unlock"} failed, code is $code"
        logger.error { message }
        throw IllegalStateException(message)
    }
}

/** Wrapper for [msMySQLInterfaceParameters], [dsCloudInterfaceParameters] and [opaInterfaceParameters] */
@Serializable
data class RMCloudParameters(
    val msMySQLInterfaceParameters: MSInterfaceMySQLParameters,
    val dsCloudInterfaceParameters: DSInterfaceCloudParameters,
    val opaInterfaceParameters: OPAInterfaceParameters,
)