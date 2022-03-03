package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreParametersCLOUD
import eu.fbk.st.cryptoac.core.myJson
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.jetty.*
import io.ktor.client.features.cookies.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.utils.io.*
import io.ktor.utils.io.jvm.javaio.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import java.io.InputStream
import java.lang.IllegalArgumentException
import java.net.ConnectException

private val logger = KotlinLogging.logger {}

/**
 * Implementation of the methods to interface with
 * the DM as a microservice container configured
 * with the given [interfaceParameters]
 */
class DMInterfaceRBACCryptoAC(
    private val interfaceParameters: DMInterfaceCryptoACParameters,
) : DMInterfaceRBACCLOUD {

    /** The base API path (url + port) of the DM */
    private val dmBaseAPI = "${interfaceParameters.url}:${interfaceParameters.port}"

    /** The Http client */
    private var client: HttpClient? = null

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    override var locks = 0

    /**
     * Configure the DM with relevant [parameters]
     * and return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     */
    override fun configure(parameters: CoreParameters): OutcomeCode {

        /** Guard clauses */
        if (parameters !is CoreParametersCLOUD) {
            val message = "Given wrong parameters for update"
            logger.error { message }
            throw IllegalArgumentException(message)
        }


        var code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val dmURL = "${API.HTTPS}${dmBaseAPI}${API.DM}"
            logger.info { "Configuring the DM sending a POST request to $dmURL" }
            try {
                val dmResponse = client!!.post<HttpResponse>(dmURL) {
                    contentType(ContentType.Application.Json)
                    body = myJson.encodeToString(parameters.opaInterfaceParameters)
                }
                logger.debug { "Received response from the DM" }
                if (dmResponse.status != HttpStatusCode.OK) {
                    code = myJson.decodeFromString(dmResponse.readText())
                    logger.warn {
                        "Received error code from the DM (code: $code, status: ${dmResponse.status})"
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * Add the [content] of the [newFile]
     * in the DM and return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_003_FILE_ALREADY_EXISTS
     * - CODE_020_INVALID_PARAMETER
     * - CODE_043_DM_CONNECTION_TIMEOUT
     */
    override fun addFile(newFile: File, content: InputStream): OutcomeCode {

        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val dmURL = "${API.HTTPS}$dmBaseAPI${API.DM}files/${CoreType.RBAC_CLOUD}/"
            logger.info("Uploading the file ${newFile.name} in the DM sending a post request to $dmURL")
            try {
                val dmResponse: HttpResponse = client!!.submitFormWithBinaryData(
                    url = dmURL,
                    formData = formData {
                        // TODO find better method to send file without loading the stream into memory
                        append(SERVER.FILE_NAME, content.readBytes(), Headers.build {
                            append(HttpHeaders.ContentType, "application/octet-stream")
                            append(HttpHeaders.ContentDisposition, "filename=${newFile.name}")
                        })
                    }) {
                    method = HttpMethod.Post
                }
                logger.debug { "Received response from the DM" }
                if (dmResponse.status != HttpStatusCode.OK) {
                    code = myJson.decodeFromString(dmResponse.readText())
                    logger.warn {
                        "Received error code from the DM (code: $code, status: ${dmResponse.status})"
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * Download the content of the file matching
     * the given [fileName] from the DM and return
     * it along with the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_020_INVALID_PARAMETER
     * - CODE_043_DM_CONNECTION_TIMEOUT
     */
    override fun readFile(fileName: String): WrappedInputStream {

        var code = OutcomeCode.CODE_000_SUCCESS
        var stream: InputStream? = null
        runBlocking {
            val dmURL = "${API.HTTPS}$dmBaseAPI${API.DM}files/${CoreType.RBAC_CLOUD}/$fileName"
            logger.info("Downloading the file $fileName from the DM sending a get request to $dmURL")
            try {
                client!!.get<HttpStatement>(dmURL).execute { response: HttpResponse ->
                    logger.debug { "Received response from the DM" }
                    if (response.status != HttpStatusCode.OK) {
                        code = myJson.decodeFromString(response.readText())
                        logger.warn {
                            "Received error code from the DM (code: $code, status: ${response.status})"
                        }
                    } else {
                        // TODO this is extremely inefficient, as we read the whole file into memory and
                        //  then create an ad-hoc stream. It would be better to directly stream the response
                        //  from the DM. However, how to do it?
                        stream = response.receive<ByteReadChannel>().toInputStream().readAllBytes().inputStream()
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return WrappedInputStream(code, stream)
    }

    /**
     * Overwrite the [content] of the [updatedFile]
     * in the DM and return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_020_INVALID_PARAMETER
     * - CODE_025_FILE_RENAMING
     * - CODE_043_DM_CONNECTION_TIMEOUT
     *
     * In this implementation, ask the DM to move the
     * new file from the upload folder to the download
     * folder. The [content] argument is not used.
     */
    override fun writeFile(updatedFile: File, content: InputStream): OutcomeCode {

        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val dmURL = "${API.HTTPS}$dmBaseAPI${API.DM}files/${CoreType.RBAC_CLOUD}/${updatedFile.name}"
            logger.info("Overwriting the file ${updatedFile.name} in the DM sending a put request to $dmURL")
            try {
                val dmResponse: HttpResponse = client!!.put(dmURL)
                logger.debug { "Received response from the DM" }
                if (dmResponse.status != HttpStatusCode.OK) {
                    code = myJson.decodeFromString(dmResponse.readText())
                    logger.warn {
                        "Received error code from the DM (code: $code, status: ${dmResponse.status})"
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * Delete the [fileName] from the data
     * storage and return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_020_INVALID_PARAMETER
     * - CODE_043_DM_CONNECTION_TIMEOUT
     */
    override fun deleteFile(fileName: String): OutcomeCode {

        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val dmURL = "${API.HTTPS}$dmBaseAPI${API.DM}files/${CoreType.RBAC_CLOUD}/$fileName"
            logger.info("Delete the file $fileName from the DM sending a delete request to $dmURL")
            try {
                val dmResponse = client!!.delete<HttpResponse>(dmURL)
                logger.debug { "Received response from the DM" }
                if (dmResponse.status != HttpStatusCode.OK) {
                    code = myJson.decodeFromString(dmResponse.readText())
                    logger.warn {
                        "Received error code from the DM (code: $code, status: ${dmResponse.status})"
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }


    // TODO refactor this
    /**
     * Delete the [fileName] from the temporary
     * storage and return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_020_INVALID_PARAMETER
     * - CODE_024_FILE_DELETE
     * - CODE_043_DM_CONNECTION_TIMEOUT
     */
    override fun deleteTemporaryFile(fileName: String): OutcomeCode {

        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val dmURL = "${API.HTTPS}$dmBaseAPI${API.DM}temporaryFiles/${CoreType.RBAC_CLOUD}/$fileName"
            logger.info("Delete the temporary file $fileName from the DM sending a delete request to $dmURL")
            try {
                val dmResponse = client!!.delete<HttpResponse>(dmURL)
                logger.debug { "Received response from the DM" }
                if (dmResponse.status != HttpStatusCode.OK) {
                    code = myJson.decodeFromString(dmResponse.readText())
                    logger.warn {
                        "Received error code from the DM (code: $code, status: ${dmResponse.status})"
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0. Finally, return
     * the outcome code:
     * - CODE_000_SUCCESS
     *
     * In this implementation, the lock-unlock-rollback mechanism is not needed,
     * as the RM is the entity which validates users' operations. However, to keep
     * streaming when downloading files (and avoid the "Channel has been cancelled"
     * exception), we need to store a reference to the server and the HTTP response
     */
    override fun lock(): OutcomeCode {
        if (locks == 0) {
            logger.info { "Locking the status of the DM" }
            client = HttpClient(Jetty) {
                expectSuccess = false
                install(HttpCookies) /** To accept all cookies */
                // TODO configure this, as for now the client accepts all certificates
                engine {
                    sslContextFactory.isTrustAll = true
                }
            }
        }
        else {
            locks++
            logger.debug { "Increment lock number to $locks" }
        }
        return OutcomeCode.CODE_000_SUCCESS
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0.
     * Finally, return the outcome code:
     * - CODE_000_SUCCESS
     *
     * In this implementation, close the Http client
     */
    override fun rollback(): OutcomeCode {
        if (locks == 1) {
            logger.info { "Rollback the status of the DM" }
            locks--
            client!!.close()
        } else if (locks > 0) {
            logger.debug { "Decrement lock number to ${locks - 1}" }
            locks--
        }
        return OutcomeCode.CODE_000_SUCCESS
    }

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0. Finally, return the
     * outcome code:
     * - CODE_000_SUCCESS
     *
     * In this implementation, close the Http client
     */
    override fun unlock(): OutcomeCode {
        if (locks == 1) {
            logger.info { "Unlock the status of the DM" }
            locks--
            client!!.close()
        } else if (locks > 0) {
            logger.debug { "Decrement lock number to ${locks - 1}" }
            locks--
        }
        return OutcomeCode.CODE_000_SUCCESS
    }
}