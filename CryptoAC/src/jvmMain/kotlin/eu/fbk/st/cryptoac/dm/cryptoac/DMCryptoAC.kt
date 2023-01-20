package eu.fbk.st.cryptoac.dm.cryptoac

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.API.DM
import eu.fbk.st.cryptoac.API.RESOURCES
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.ok
import eu.fbk.st.cryptoac.ac.ACFactory
import eu.fbk.st.cryptoac.ac.ACService
import eu.fbk.st.cryptoac.ac.ACServiceParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.server.FileSaveMode
import eu.fbk.st.cryptoac.server.FileSystemManager
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import mu.KotlinLogging
import java.io.File
import java.io.InputStream
import java.util.*
import kotlin.collections.HashMap

private val logger = KotlinLogging.logger {}

/** The objects to interact with the AC based on the core */
private var acMap: HashMap<CoreType, ACService?> = hashMapOf()

/**
 * To handle concurrent requests to the DM, we have a
 * hashmap mapping the name of files which are currently
 * being operated on by a coroutine (i.e., created, read,
 * updated or deleted) with a dedicated mutex. Whenever a
 * coroutine needs to access a file, it (creates and)
 * locks the corresponding mutex, unlocking (and removing) 
 * the mutex after the end of the operation
 * // TODO can this be improved?
 */
val resourcesBeingModified = LinkedHashMap<String, MutexAndNumberOfLockers>()

/**
 * A mutex to synchronize accesses to 
 * the [resourcesBeingModified] hash map
 */
private val mapMutex = Mutex()

// TODO remove this, think of something better (see notes on VSCODE)
private val TEMPLOCKTOREMOVE = Mutex()

/**
 * Routes related to resources; upload (post),
 * download (get), write (put), delete
 * (delete), move (patch)
 */
fun Route.resourcesRouting() {

    // TODO Add Docker Volumes for DM

    // TODO Authenticate users and modules (CryptoAC, DM, RM, AC) to each other (PKI, JWT)

    // TODO enforce a limit on the number (or size) of resources a user can up/download

    // TODO thinks about cyclically deleting resources from the temporary folder

    // TODO - [DM] When a user creates a resource, what if another resource with the same name already exists? Do
    //  we return 403 or 404? What if we use the token of the resource as primary key?

    /** Wrap all routes related to the DM */
    route(DM) {

        route(RESOURCES) {

            /**
             * Upload a resource in the DM
             */
            post {
                val coreParam = call.parameters[SERVER.CORE]
                    ?: return@post ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.CORE} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )
                val core: CoreType = CoreType.valueOf(coreParam)

                /** If the DM was not configured yet */
                if (!acMap.contains(core)) {
                    return@post ResponseRoutes.serviceUnavailable(
                        call = call,
                        message = "This DM was not configured for core $core",
                        code = CODE_075_DM_CONFIGURATION
                    )
                }

                var newResourceName: String? = null
                var stream: InputStream? = null

                call.receiveMultipart().forEachPart { part ->
                    when (part) {
                        is PartData.FormItem -> {
                            logger.warn { "Received unexpected form item ${part.name}" }
                        }
                        is PartData.FileItem -> {
                            newResourceName = part.originalFileName as String
                            stream = part.streamProvider()
                        }
                        is PartData.BinaryItem -> {
                            logger.warn { "Received unexpected binary item ${part.name}" }
                        }
                        is PartData.BinaryChannelItem -> {
                            logger.warn { "Received unexpected binary channel item ${part.name}" }
                        }
                    }
                }

                if (newResourceName == null) {
                    return@post ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.RESOURCE_NAME} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )
                }
                if (stream == null) {
                    return@post ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.RESOURCE_CONTENT} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )
                }
                logger.info { "User is asking to upload resource $newResourceName" } // TODO add username in log


                /**
                 * Synchronize the operation of the DM
                 * by locking on the mutex of the resource
                 */
                startMutexOnResource(newResourceName!!)
                val returnCode = resourcesBeingModified[newResourceName]!!.mutex.withLock {
                    logger.debug { "Gained lock of mutex for resource $newResourceName"}

                    /**
                     * Upload the new resource, ensuring that no
                     * other resource with the same name is present
                     */
                    try {
                        FileSystemManager.saveFile(
                            path = "${UPLOAD_DIRECTORY.absolutePath}/${
                                FileSystemManager.getFileKey(
                                    fileName = newResourceName!!,
                                    core = core
                                )
                            }",
                            content = stream!!,
                            saveMode = FileSaveMode.THROW_EXCEPTION,
                        )
                        CODE_000_SUCCESS
                    } catch (e: FileAlreadyExistsException) {
                        logger.warn {
                            "Resource with name $newResourceName " +
                            "already exists in the upload folder"
                        }
                        CODE_003_RESOURCE_ALREADY_EXISTS
                    }
                }
                endMutexOnResource(newResourceName!!)

                when (returnCode) {
                    CODE_000_SUCCESS -> ok(call)
                    CODE_003_RESOURCE_ALREADY_EXISTS -> return@post ResponseRoutes.conflict(
                        call = call,
                        message = "Resource already exists in the upload folder",
                        code = returnCode
                    )
                    else -> return@post ResponseRoutes.internalError(
                        call = call,
                        message = "Error during upload resource operation ($returnCode)",
                        code = returnCode
                    )
                }
            }

            /**
             * Download a resource from the DM
             */
            get("{${SERVER.RESOURCE_NAME}}") {
                val coreParam = call.parameters[SERVER.CORE]
                    ?: return@get ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.CORE} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )
                val core: CoreType = CoreType.valueOf(coreParam)

                /** If the DM was not configured yet */
                if (!acMap.contains(core)) {
                    return@get ResponseRoutes.serviceUnavailable(
                        call = call,
                        message = "This DM was not configured for core $core",
                        code = CODE_075_DM_CONFIGURATION
                    )
                }
                
                // TODO authenticate user (login as in the CryptoAC?)

                /**
                 * TODO this query parameter code is here just because we need to
                 *  know the name of the user to ask the AC service if the user can read the resource.
                 *  In the future, this should be replaced by the login/authentication
                 *  method used by the DM
                 */
                val username = call.request.queryParameters[SERVER.USERNAME]
                    ?: return@get ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.USERNAME} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )

                val resourceName = call.parameters[SERVER.RESOURCE_NAME]
                    ?: return@get ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.RESOURCE_NAME} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )


                logger.info { "The user $username is asking to download resource $resourceName" }

                /** Get the resource */
                val resource = File(
                "${DOWNLOAD_DIRECTORY.absolutePath}/" +
                    FileSystemManager.getFileKey(resourceName, core)
                )

                /**
                 * Synchronize the operation of the DM
                 * by locking on the mutex of the resource
                 */
                startMutexOnResource(resourceName)
                val returnCode = resourcesBeingModified[resourceName]!!.mutex.withLock {
                    logger.debug { "Gained lock of mutex for resource $resourceName"}

                    if (!resource.exists()) {
                        logger.warn { "Resource $resourceName not found" }
                        CODE_006_RESOURCE_NOT_FOUND
                    } else {

                        /**
                         * If the AC service was configured, check that the user
                         * is authorized to read over the given file
                         */
                        val acCode = if (acMap[core] != null) {
                            var code = TEMPLOCKTOREMOVE.withLock { startOfMethod(core) }
                            if (code != CODE_000_SUCCESS) {
                                logger.warn { "Error while locking ac service ($code)" }
                                code
                            } else {
                                code = acMap[core]!!.isUserAllowed(
                                    username = username,
                                    permission = PermissionType.READ,
                                    resourceName = resourceName
                                )
                                code = when (code) {
                                    CODE_037_FORBIDDEN -> {
                                        /** Return a 404 to avoid information leakage */
                                        logger.warn {
                                            "Unauthorized user $username tried " +
                                            "to read resource $resourceName"
                                        }
                                        CODE_006_RESOURCE_NOT_FOUND
                                    }

                                    CODE_000_SUCCESS -> {
                                        logger.debug { "User is authorized" }
                                        CODE_000_SUCCESS
                                    }

                                    else -> {
                                        logger.warn { "Error during request to the AC service" }
                                        code
                                    }
                                }
                                TEMPLOCKTOREMOVE.withLock { endOfMethod(code, core) }
                            }
                        } else {
                            CODE_000_SUCCESS
                        }

                        if (acCode != CODE_000_SUCCESS) {
                            logger.warn { "Error during read resource operation ($acCode)" }
                            acCode
                        } else {
                            call.response.header(
                                HttpHeaders.ContentDisposition,
                                ContentDisposition.Attachment.withParameter(
                                    ContentDisposition.Parameters.FileName, resourceName
                                ).toString()
                            )
                            // call.response.header("Content-Disposition", "attachment; filename=\"$fileNameToGet\"")
                            val contentType = ContentType.fromFileExtension(File(resourceName).extension).firstOrNull()
                                ?: ContentType.Application.OctetStream

                            call.respondOutputStream(contentType, HttpStatusCode.OK) {
                                resource.inputStream().copyTo(this)
                            }
                            CODE_000_SUCCESS
                        }
                    }
                }
                endMutexOnResource(resourceName)

                when (returnCode) {
                    CODE_000_SUCCESS -> ok(call)
                    CODE_006_RESOURCE_NOT_FOUND -> return@get ResponseRoutes.notFound(
                        call = call,
                        message = "Resource not found",
                        code = returnCode
                    )
                    else -> return@get ResponseRoutes.internalError(
                        call = call,
                        message = "Error during get resource operation ($returnCode)",
                        code = returnCode
                    )
                }
            }

            /**
             * Move a resource from the upload folder.
             * to the download folder in the DM
             */
            put("{${SERVER.RESOURCE_NAME}}") {
                val coreParam = call.parameters[SERVER.CORE]
                    ?: return@put ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.CORE} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )
                val core: CoreType = CoreType.valueOf(coreParam)

                /** If the DM was not configured yet */
                if (!acMap.contains(core)) {
                    return@put ResponseRoutes.serviceUnavailable(
                        call = call,
                        message = "This DM was not configured for core $core",
                        code = CODE_075_DM_CONFIGURATION
                    )
                }

                // TODO check that the RM is the one actually submitting the request. However,
                //  if you want to support TRADITIONAL only enforcement, perhaps also users
                //  should be able to invoke this API (the RM is useless if the enforcement
                //  is traditional)

                /**
                 * TODO this receive parameters code is here just because we need to
                 *  know the name of the user to ask the AC service if the user can write the resource.
                 *  In the future, this should be replaced by the login/authentication
                 *  method used by the DM
                 */
                val username = call.request.queryParameters[SERVER.USERNAME]
                    ?: return@put ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.USERNAME} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )

                val resourceName = call.parameters[SERVER.RESOURCE_NAME]
                    ?: return@put ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.RESOURCE_NAME} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )

                /**
                 * TODO of course, the check should be more robust, but it will
                 *  depend on the login/authentication method used by the DM
                 */
                if (acMap[core] == null && username != ADMIN) {
                    logger.warn {
                        "AC module is not present and not admin user " +
                        "$username asking to move resource, reject"
                    }
                    return@put ResponseRoutes.forbidden(
                        call = call,
                        message = "Cannot write resource $resourceName",
                        code = CODE_037_FORBIDDEN
                    )
                }

                logger.info { "The user $username is asking to move resource $resourceName" }

                val newResource = File(
                    "${UPLOAD_DIRECTORY.absolutePath}/" +
                            FileSystemManager.getFileKey(resourceName, core)
                )
                val oldResource = File(
                    "${DOWNLOAD_DIRECTORY.absolutePath}/" +
                            FileSystemManager.getFileKey(resourceName, core)
                )

                /**
                 * Synchronize the operation of the DM
                 * by locking on the mutex of the resource
                 */
                startMutexOnResource(resourceName)
                val returnCode = resourcesBeingModified[resourceName]!!.mutex.withLock {

                    if (!newResource.exists()) {
                        logger.warn { "New content of resource $resourceName not found" }
                        CODE_006_RESOURCE_NOT_FOUND
                    } else {
                        if (!oldResource.exists()) {
                            logger.info { "This is an add resource operation" }
                            if (!newResource.renameTo(oldResource)) {
                                logger.warn {
                                    "Error while moving resource $resourceName" +
                                    " from upload to download folder"
                                }
                                CODE_025_RESOURCE_WRITE
                            } else {
                                CODE_000_SUCCESS
                            }
                        } else {
                            logger.info { "This is a write resource operation" }

                            /**
                             * If the AC service was configured, check that the user
                             * is authorized to write over the given file
                             */
                            val acCode = if (acMap[core] != null) {
                                var code = TEMPLOCKTOREMOVE.withLock { startOfMethod(core) }
                                if (code != CODE_000_SUCCESS) {
                                    logger.warn { "Error while locking ac service ($code)" }
                                    code
                                } else {
                                    code = acMap[core]!!.isUserAllowed(
                                        username = username,
                                        permission = PermissionType.WRITE,
                                        resourceName = resourceName
                                    )
                                    code = when (code) {
                                        CODE_037_FORBIDDEN -> {
                                            /** Return a 404 to avoid information leakage */
                                            logger.warn {
                                                "Unauthorized user $username tried " +
                                                "to write over resource $resourceName"
                                            }
                                            CODE_006_RESOURCE_NOT_FOUND
                                        }
                                        CODE_000_SUCCESS -> {
                                            logger.debug { "User is authorized" }
                                            CODE_000_SUCCESS
                                        }
                                        else -> {
                                            logger.warn { "Error during request to the AC service" }
                                            code
                                        }
                                    }
                                    TEMPLOCKTOREMOVE.withLock { endOfMethod(code, core) }
                                }
                            } else {
                                CODE_000_SUCCESS
                            }

                            if (acCode != CODE_000_SUCCESS) {
                                logger.warn { "Error during write resource operation ($acCode)" }
                                acCode
                            } else {
                                newResource.copyTo(oldResource, overwrite = true)
                                if (!newResource.delete()) {
                                    logger.warn { "Error while deleting resource ${newResource.absolutePath}, do it yourself" }
                                    CODE_058_INCONSISTENT_STATUS_DELETE_TEMPORARY_RESOURCE_IN_DM
                                    // TODO handle the error better
                                } else {
                                    CODE_000_SUCCESS
                                }
                            }
                        }
                    }
                }
                endMutexOnResource(resourceName)

                when (returnCode) {
                    CODE_000_SUCCESS -> ok(call)
                    CODE_006_RESOURCE_NOT_FOUND -> return@put ResponseRoutes.notFound(
                        call = call,
                        message = "Resource not found",
                        code = returnCode
                    )
                    else -> return@put ResponseRoutes.internalError(
                        call = call,
                        message = "Error during write resource operation ($returnCode)",
                        code = returnCode
                    )
                }
            }

            /**
             * Delete a resource
             * from the DM
             */
            delete("{${SERVER.RESOURCE_NAME}}") {
                val coreParam = call.parameters[SERVER.CORE]
                    ?: return@delete ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.CORE} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )
                val core: CoreType = CoreType.valueOf(coreParam)

                /** If the DM was not configured yet */
                if (!acMap.contains(core)) {
                    return@delete ResponseRoutes.serviceUnavailable(
                        call = call,
                        message = "This DM was not configured for core $core",
                        code = CODE_075_DM_CONFIGURATION
                    )
                }

                // TODO authenticate the user (login as in the CryptoAC?), which has to be the admin
                /**
                 * TODO this receive parameters code is here just because we need to
                 *  know the name of the user to ask the AC service if the user can write the resource.
                 *  In the future, this should be replaced by the login/authentication
                 *  method used by the DM
                 */
                val username = call.request.queryParameters[SERVER.USERNAME]
                    ?: return@delete ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.USERNAME} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )

                val resourceName = call.parameters[SERVER.RESOURCE_NAME]
                    ?: return@delete ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.RESOURCE_NAME} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )

                /**
                 * TODO of course, the check should be more robust, but it will
                 *  depend on the login/authentication method used by the DM
                 */
                if (username != ADMIN) {
                    logger.warn { "Not admin user $username asking to move resource, reject" }
                    return@delete ResponseRoutes.forbidden(
                        call = call,
                        message = "Cannot delete resource $resourceName",
                        code = CODE_037_FORBIDDEN
                    )
                }
                logger.info { "The admin is asking to delete resource $resourceName" }

                val resourceToDelete = File(
                    "${DOWNLOAD_DIRECTORY.absolutePath}/" +
                        FileSystemManager.getFileKey(resourceName, core)
                )

                /**
                 * Synchronize the operation of the DM
                 * by locking on the mutex of the resource
                 */
                startMutexOnResource(resourceName)
                val returnCode = resourcesBeingModified[resourceName]!!.mutex.withLock {

                    /** Delete the resource */
                    if (!resourceToDelete.exists()) {
                        logger.warn { "Resource $resourceName not found" }
                        CODE_006_RESOURCE_NOT_FOUND
                    } else {
                        if (!resourceToDelete.delete()) {
                            logger.warn { "Error while deleting resource $resourceName" }
                            CODE_024_RESOURCE_DELETE
                        } else {
                            CODE_000_SUCCESS
                        }
                    }
                }
                endMutexOnResource(resourceName)

                when (returnCode) {
                    CODE_000_SUCCESS -> ok(call)
                    CODE_006_RESOURCE_NOT_FOUND -> return@delete ResponseRoutes.notFound(
                        call = call,
                        message = "Resource not found",
                        code = returnCode
                    )
                    else -> return@delete ResponseRoutes.internalError(
                        call = call,
                        message = "Error during delete resource operation ($returnCode)",
                        code = returnCode
                    )
                }
            }
        }

        route("temporaryResources/{${SERVER.CORE}}/") {

            /**
             * Delete a temporary resource from the temporary
             * storage. Check that the resource exists
             */
            delete("{${SERVER.RESOURCE_NAME}}") {
                val coreParam = call.parameters[SERVER.CORE]
                    ?: return@delete ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.CORE} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )
                val core: CoreType = CoreType.valueOf(coreParam)

                /** If the DM was not configured yet */
                if (!acMap.contains(core)) {
                    return@delete ResponseRoutes.serviceUnavailable(
                        call = call,
                        message = "This DM was not configured for core $core",
                        code = CODE_075_DM_CONFIGURATION
                    )
                }

                // TODO authenticate the user (login as in the CryptoAC?), which has to be the admin
                /**
                 * TODO this receive parameters code is here just because we need to
                 *  know the name of the user to ask the AC service if the user can write the resource.
                 *  In the future, this should be replaced by the login/authentication
                 *  method used by the DM
                 */
                val username = call.request.queryParameters[SERVER.USERNAME]
                    ?: return@delete ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.USERNAME} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )

                val resourceName = call.parameters[SERVER.RESOURCE_NAME]
                    ?: return@delete ResponseRoutes.unprocessableEntity(
                        call,
                        "Missing ${SERVER.RESOURCE_NAME} parameter",
                        CODE_019_MISSING_PARAMETERS
                    )

                /**
                 * TODO of course, the check should be more robust, but it will
                 *  depend on the login/authentication method used by the DM
                 */
                /** TODO decomment below, only the admin and the RM should be able to delete temporary resources */
//                if (username != ADMIN) {
//                    logger.warn { "Not admin user $username asking to move resource, reject" }
//                    return@delete ResponseRoutes.forbidden(
//                        call = call,
//                        message = "Cannot delete resource $resourceName",
//                        code = CODE_037_FORBIDDEN
//                    )
//                }
//                logger.info { "The admin is asking to delete temporary resource $resourceName" }
                logger.info { "The user $username is asking to delete temporary resource $resourceName" }

                /**
                 * Synchronize the operation of the DM
                 * by locking on the mutex of the resource
                 */
                startMutexOnResource(resourceName)
                val returnCode = resourcesBeingModified[resourceName]!!.mutex.withLock {

                    /** Delete the resource */
                    val resourceToDelete = File(
                "${UPLOAD_DIRECTORY.absolutePath}/" +
                        FileSystemManager.getFileKey(resourceName, core)
                    )

                    if (!resourceToDelete.exists()) {
                        logger.warn { "Temporary resource $resourceName not found" }
                        return@withLock CODE_006_RESOURCE_NOT_FOUND
                    } else {
                        if (!resourceToDelete.delete()) {
                            logger.warn { "Error while deleting temporary resource $resourceName" }
                            return@withLock CODE_024_RESOURCE_DELETE
                        } else {
                            CODE_000_SUCCESS
                        }
                    }
                }
                endMutexOnResource(resourceName)

                when (returnCode) {
                    CODE_000_SUCCESS -> ok(call)
                    CODE_006_RESOURCE_NOT_FOUND -> return@delete ResponseRoutes.notFound(
                        call = call,
                        message = "Resource not found",
                        code = returnCode
                    )
                    else -> return@delete ResponseRoutes.internalError(
                        call = call,
                        message = "Error during delete temporary resource operation ($returnCode)",
                        code = returnCode
                    )
                }
            }
        }
    }
}

/** Routes related to configuration; configure (post) */
fun Route.configureRouting() {

    /** Configure the DM */
    route(DM) {

        post("{${SERVER.CORE}}/") {

            // TODO authenticate user (login as in the CryptoAC?)

            // TODO logging

            // TODO check that received parameters are ok, i.e., the AC service is
            //  running at the specified url and port. if not, return an error code:
            //  CODE_018_INTERFACE_CONFIGURATION_PARAMETERS (this return code is
            //  already documented in the swagger API)

            val coreParam = call.parameters[SERVER.CORE]
                ?: return@post ResponseRoutes.unprocessableEntity(
                    call,
                    "Missing ${SERVER.CORE} parameter",
                    CODE_019_MISSING_PARAMETERS
                )
            val core: CoreType = CoreType.valueOf(coreParam)

            /** Get the storage parameters from the request */
            val parameters: ACServiceParameters? = call.receiveNullable()
            acMap[core] = parameters?.let { it1 -> ACFactory.getAC(it1) }

            var code = startOfMethod(core)
            if (code != CODE_000_SUCCESS) {
                return@post ResponseRoutes.internalError(
                    call = call,
                    message = "Error during locking of interfaces ($code)",
                    code = code
                )
            }
            acMap[core]?.init()

            code = endOfMethod(code, core)
            if (code != CODE_000_SUCCESS) {
                return@post ResponseRoutes.internalError(
                    call = call,
                    message = "Error during unlocking of interfaces ($code)",
                    code = code
                )
            }

            ok(call)
        }
    }
}

/** Register the routes for the DM */
fun Application.registerDMRoutes() {
    logger.info { "Registering DM routes" }
    routing {
        resourcesRouting()
        configureRouting()
    }
}



/**
 * Check if mutex exists for [resourceName]. If so, increase
 * the number of lockers. Otherwise, create the mutex
 */
suspend fun startMutexOnResource(resourceName: String) {
    mapMutex.withLock {
        logger.debug { "Synchronizing the DM on resource $resourceName"}
        if (!resourcesBeingModified.keys.contains(resourceName)) {
            logger.debug { "Creating mutex for resource $resourceName"}
            resourcesBeingModified[resourceName] = MutexAndNumberOfLockers(Mutex(), 1)
        } else {
            logger.debug { "Increasing lockers of mutex for resource $resourceName"}
            resourcesBeingModified[resourceName]!!.lockers += 1
        }
    }
}

/**
 * Check if mutex can be deleted for [resourceName]. If so,
 * delete it. Otherwise, decrease the number of lockers.
 */
suspend fun endMutexOnResource(resourceName: String) {
    /** Check if mutex is to delete for resource */
    mapMutex.withLock {
        logger.debug { "Released lock of mutex for resource $resourceName"}
        if (resourcesBeingModified[resourceName]!!.lockers <= 1) {
            logger.debug { "Deleting mutex for resource $resourceName"}
            resourcesBeingModified.remove(resourceName)
        } else {
            logger.debug { "Decreasing lockers of mutex for resource $resourceName"}
            resourcesBeingModified[resourceName]!!.lockers -= 1
        }
    }
}

/**
 * Lock the ac service
 * and return the outcome code
 */
private fun startOfMethod(core: CoreType): OutcomeCode {
    val acLockCode = acMap[core]?.lock()
        ?: CODE_000_SUCCESS
    if (acLockCode != CODE_000_SUCCESS) {
        logger.warn { "The AC service lock failed, code is $acLockCode" }
    }
    return acLockCode
}

/**
 * If the [code] is a success, unlock the ac service
 * (i.e., commit the changes). Otherwise, rollback
 * to the previous status. In both cases, return
 * the outcome code
 */
private fun endOfMethod(code: OutcomeCode, core: CoreType): OutcomeCode {
    val acLockCode = if (code == CODE_000_SUCCESS) {
        acMap[core]?.unlock()
            ?: CODE_000_SUCCESS
    } else {
        acMap[core]?.rollback()
            ?: CODE_000_SUCCESS
    }
    if (acLockCode != CODE_000_SUCCESS) {
        val message = ("ac lock was fine but "
                + (if (code == CODE_000_SUCCESS) "unlock" else "rollback")
                + " failed, code is $acLockCode")
        logger.error { message }
        throw IllegalStateException(message)
    }
    return code
}

/** Hold a [mutex] and the number of [lockers] of the mutex */
data class MutexAndNumberOfLockers(val mutex: Mutex, var lockers: Int)
