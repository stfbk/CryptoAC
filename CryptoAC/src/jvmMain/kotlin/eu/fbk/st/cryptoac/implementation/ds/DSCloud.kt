package eu.fbk.st.cryptoac.implementation.ds

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.API.DS
import eu.fbk.st.cryptoac.API.FILES
import eu.fbk.st.cryptoac.proxy.FileSaveMode
import eu.fbk.st.cryptoac.proxy.FileSystemManager
import eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import java.io.File
import java.io.InputStream

// TODO periodically delete files from the upload folder (e.g., after 10 minutes a file was uploaded, delete it)

private val logger = KotlinLogging.logger {}

/** The OPA parameters. */
var opaInterfaceParameters: OPAInterfaceParameters? = null

/** Routes related to files; upload (post), download (get), write (put), delete (delete), move (patch). */
fun Route.filesRouting() {

    /** Wrap all routes related to the DS. */
    route(DS) {

        route(FILES) {

            /** Upload a file in the DS. */
            post {
                // TODO authenticate user (login as in the proxy?)

                var newFileName: String? = null
                var stream: InputStream? = null

                call.receiveMultipart().forEachPart { part ->
                    when (part) {
                        is PartData.FormItem -> {
                            logger.warn { "Received not expected form item multipart parameter ${part.name}" }
                        }
                        is PartData.FileItem -> {
                            newFileName = part.originalFileName as String
                            stream = part.streamProvider()
                        }
                        is PartData.BinaryItem -> {
                            logger.warn { "Received not expected binary item multipart parameter ${part.name}" }
                        }
                    }
                }

                if (newFileName == null) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "Missing ${SERVER.FILE_NAME} parameter",
                        OutcomeCode.CODE_020_INVALID_PARAMETER)
                }
                if (stream == null) {
                    return@post ResponseRoutes.unprocessableEntity(call,
                        "Missing ${SERVER.FILE_CONTENT} parameter",
                        OutcomeCode.CODE_020_INVALID_PARAMETER)
                }
                logger.info { "User is asking to upload file $newFileName" } // TODO add username in log

                val coreParam = call.parameters[SERVER.CORE] ?: return@post ResponseRoutes.unprocessableEntity(
                    call,
                    "Missing ${SERVER.CORE} parameter",
                    OutcomeCode.CODE_020_INVALID_PARAMETER)
                val core: CoreType = CoreType.valueOf(coreParam)


                /** Upload the new file, ensuring that no other file with the same name is present. */
                try {
                    FileSystemManager.saveFile(
                        path = "${UPLOAD_DIRECTORY.absolutePath}/${FileSystemManager.getFileKey(newFileName!!, core)}",
                        content = stream!!,
                        saveMode = FileSaveMode.THROW_EXCEPTION,
                    )
                } catch (e: FileAlreadyExistsException) {
                    return@post ResponseRoutes.conflict(call,
                        "File with name $newFileName already exists in the upload folder",
                        OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
                }
                ResponseRoutes.ok(call)
            }

            /** Download a file from the DS. */
            get("{${SERVER.FILE_NAME}}") {
                // TODO authenticate user (login as in the proxy?)
                // TODO ask OPA if user can read file

                val fileNameToGet =
                    call.parameters[SERVER.FILE_NAME] ?: return@get ResponseRoutes.unprocessableEntity(call,
                        "Missing ${SERVER.FILE_NAME} parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                logger.info { "User is asking to download file $fileNameToGet" } // TODO add username in log

                val coreParam =
                    call.parameters[SERVER.CORE] ?: return@get ResponseRoutes.unprocessableEntity(call,
                        "Missing ${SERVER.CORE} parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                val core: CoreType = CoreType.valueOf(coreParam)

                /** Get the file. */
                val file = File(
                    "${DOWNLOAD_DIRECTORY.absolutePath}/${FileSystemManager.getFileKey(fileNameToGet, core)}"
                )

                if (!file.exists()) {
                    return@get ResponseRoutes.notFound(call,
                        "File $fileNameToGet not found", OutcomeCode.CODE_006_FILE_NOT_FOUND)
                } else {
                    call.response.header("Content-Disposition", "attachment; filename=\"$fileNameToGet\"")
                    val contentType = ContentType.fromFileExtension(File(fileNameToGet).extension).firstOrNull()
                        ?: ContentType.Application.OctetStream

                    call.respondOutputStream(contentType, HttpStatusCode.OK) {
                        file.inputStream().copyTo(this)
                    }
                }
            }

            /** Move a file from the upload folder to the download folder in the DS. */
            put("{${SERVER.FILE_NAME}}") {
                // TODO check that the RM is the one actually submitting the request

                val fileName = call.parameters[SERVER.FILE_NAME] ?: return@put ResponseRoutes.unprocessableEntity(call,
                    "Missing ${SERVER.FILE_NAME} parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                logger.info { "The RM is asking to move file $fileName" } // TODO add username in log

                val coreParam = call.parameters[SERVER.CORE] ?: return@put ResponseRoutes.unprocessableEntity(
                    call, "Missing ${SERVER.CORE} parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                val core: CoreType = CoreType.valueOf(coreParam)

                /** Move the file. */
                val newFile =
                    File("${UPLOAD_DIRECTORY.absolutePath}/${FileSystemManager.getFileKey(fileName, core)}")
                val oldFile =
                    File("${DOWNLOAD_DIRECTORY.absolutePath}/${FileSystemManager.getFileKey(fileName, core)}")

                if (!newFile.exists()) {
                    return@put ResponseRoutes.notFound(call,
                        "New content of file $fileName not found", OutcomeCode.CODE_006_FILE_NOT_FOUND)
                } else {
                    if (!oldFile.exists()) {
                        logger.info { "This is an add file operation" }
                        if (!newFile.renameTo(oldFile)) {
                            return@put ResponseRoutes.internalError(call,
                                "Error while moving file $fileName from upload to download folder",
                                OutcomeCode.CODE_025_FILE_RENAMING)
                        }
                    } else {
                        logger.info { "This is a write file operation" }
                        // TODO ask OPA if user can write file
                        newFile.copyTo(oldFile, overwrite = true)
                        if (!newFile.delete()) {
                            logger.error { "Error while deleting file ${newFile.absolutePath}, do it yourself" }
                            // TODO handle the error better
                        }
                    }
                }
                ResponseRoutes.ok(call)
            }

            /** Delete a file from the DS. */
            delete("{${SERVER.FILE_NAME}}") {
                // TODO authenticate the user (login as in the proxy?), which has to be the admin

                val fileName = call.parameters[SERVER.FILE_NAME] ?: return@delete ResponseRoutes.unprocessableEntity(call,
                    "Missing ${SERVER.FILE_NAME} parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                logger.info { "The admin is asking to delete file $fileName" }

                val coreParam = call.parameters[SERVER.CORE] ?: return@delete ResponseRoutes.unprocessableEntity(
                    call, "Missing ${SERVER.CORE} parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                val core: CoreType = CoreType.valueOf(coreParam)

                /** Delete the file. */
                val fileToDelete =
                    File("${DOWNLOAD_DIRECTORY.absolutePath}/${FileSystemManager.getFileKey(fileName, core)}")

                if (!fileToDelete.exists()) {
                    return@delete ResponseRoutes.notFound(call,
                        "File $fileName not found", OutcomeCode.CODE_006_FILE_NOT_FOUND)
                } else {
                    if (!fileToDelete.delete()) {
                        return@delete ResponseRoutes.internalError(call,
                            "Error while deleting file $fileName", OutcomeCode.CODE_024_FILE_DELETE)
                    }
                }
                ResponseRoutes.ok(call)
            }
        }
    }
}

/** Routes related to configuration; configure (post). */
fun Route.configureRouting() {

    /** Configure the DS. */
    route(DS) {

        post {

            // TODO authenticate user (login as in the proxy?)
            // TODO logs

            /** Get the core parameters from the request. */
            // TODO this should be "val opaParametersCloud = call.receive<opaParametersCloudString>()",
            //  but a bug in kotlinx serialization library prevents it. Therefore, receive as string and then serialize.
            //  When a new version of the kotlinx serialization library is provided, try again
            val opaParametersCloudString = call.receive<String>()
            opaInterfaceParameters = Json.decodeFromString(opaParametersCloudString)

            ResponseRoutes.ok(call)
        }
    }
}

/** Register the routes for the DS. */
fun Application.registerDSRoutes() {
    logger.info { "Registering DS routes" }
    routing {
        filesRouting()
        configureRouting()
    }
}