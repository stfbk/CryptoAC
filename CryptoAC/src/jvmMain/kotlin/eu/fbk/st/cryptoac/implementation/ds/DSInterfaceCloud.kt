package eu.fbk.st.cryptoac.implementation.ds

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreParametersCloud
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
import java.lang.IllegalStateException
import java.net.ConnectException

private val logger = KotlinLogging.logger {}

/**
 * Implementation of the methods to interface with the DS
 * as a microservice container configured with the given [interfaceParameters].
 */
class DSInterfaceCloud(private val interfaceParameters: DSInterfaceCloudParameters) : DSInterface() {

    /** The base API path (url + port) of the DS. */
    private val dsBaseAPI = "${interfaceParameters.url}:${interfaceParameters.port}"

    /** The Http client. */
    private var client: HttpClient? = null



    /**
     * Configure the DS with relevant
     * [parameters] and return the outcome code.
     */
    override fun configure(parameters: CoreParameters): OutcomeCode {

        /** Guard clauses. */
        if (parameters !is CoreParametersCloud) {
            val message = "Given wrong parameters for update"
            logger.error { message }
            throw IllegalStateException(message)
        }


        var code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val dsURL = "${API.HTTPS}${dsBaseAPI}${API.DS}"
            logger.info { "Configuring the DS sending a POST request to $dsURL" }
            try {
                val dsResponse = client!!.post<HttpResponse>(dsURL) {
                    contentType(ContentType.Application.Json)
                    body = Json.encodeToString(parameters.opaInterfaceParameters)
                }
                logger.debug { "Received response from the DS" }
                if (dsResponse.status != HttpStatusCode.OK) {
                    code = Json.decodeFromString(dsResponse.readText())
                    logger.warn {
                        "Received error code from the DS (code: $code, status: ${dsResponse.status})"
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DS_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * Add the [content] of the [newFile]
     * in the DS and return the outcome code.
     */
    override fun addFile(newFile: File, content: InputStream): OutcomeCode {

        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val dsURL = "${API.HTTPS}$dsBaseAPI${API.DS}files/${CoreType.RBAC_CLOUD}/"
            logger.info("Uploading the file ${newFile.name} in the DS sending a post request to $dsURL")
            try {
                val dsResponse: HttpResponse = client!!.submitFormWithBinaryData(
                    url = dsURL,
                    formData = formData {
                        // TODO find better method to send file without loading the stream into memory
                        append(SERVER.FILE_NAME, content.readBytes(), Headers.build {
                            append(HttpHeaders.ContentType, "application/octet-stream")
                            append(HttpHeaders.ContentDisposition, "filename=${newFile.name}")
                        })
                    }) {
                    method = HttpMethod.Post
                }
                logger.debug { "Received response from the DS" }
                if (dsResponse.status != HttpStatusCode.OK) {
                    code = Json.decodeFromString(dsResponse.readText())
                    logger.warn {
                        "Received error code from the DS (code: $code, status: ${dsResponse.status})"
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DS_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * Download the content of the file matching
     * the given [fileName] from the DS.
     */
    override fun readFile(fileName: String): WrappedInputStream {

        var code = OutcomeCode.CODE_000_SUCCESS
        var stream: InputStream? = null
        runBlocking {
            val dsURL = "${API.HTTPS}$dsBaseAPI${API.DS}files/${CoreType.RBAC_CLOUD}/$fileName"
            logger.info("Downloading the file $fileName from the DS sending a get request to $dsURL")
            try {
                client!!.get<HttpStatement>(dsURL).execute { response: HttpResponse ->
                    logger.debug { "Received response from the DS" }
                    if (response.status != HttpStatusCode.OK) {
                        code = Json.decodeFromString(response.readText())
                        logger.warn {
                            "Received error code from the DS (code: $code, status: ${response.status})"
                        }
                    } else {
                        // TODO this is extremely inefficient, as we read the whole file into memory and
                        //  then create an ad-hoc stream. It would be better to directly stream the response
                        //  from the DS. However, how to do it?
                        stream = response.receive<ByteReadChannel>().toInputStream().readAllBytes().inputStream()
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DS_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return WrappedInputStream(code, stream)
    }

    /**
     * Overwrite the [content] of the [updatedFile]
     * in the DS and return the outcome code.
     *
     * In this implementation, ask the DS to move the
     * new file from the upload folder to the download folder.
     */
    override fun writeFile(updatedFile: File, content: InputStream): OutcomeCode {

        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val dsURL = "${API.HTTPS}$dsBaseAPI${API.DS}files/${CoreType.RBAC_CLOUD}/${updatedFile.name}"
            logger.info("Overwriting the file ${updatedFile.name} in the DS sending a put request to $dsURL")
            try {
                val dsResponse: HttpResponse = client!!.put(dsURL)
                logger.debug { "Received response from the DS" }
                if (dsResponse.status != HttpStatusCode.OK) {
                    code = Json.decodeFromString(dsResponse.readText())
                    logger.warn {
                        "Received error code from the DS (code: $code, status: ${dsResponse.status})"
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DS_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * Delete the [fileName] from the data
     * storage and return the outcome code.
     */
    override fun deleteFile(fileName: String): OutcomeCode {

        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val dsURL = "${API.HTTPS}$dsBaseAPI${API.DS}files/${CoreType.RBAC_CLOUD}/$fileName"
            logger.info("Delete the file $fileName from the DS sending a delete request to $dsURL")
            try {
                val dsResponse = client!!.delete<HttpResponse>(dsURL)
                logger.debug { "Received response from the DS" }
                if (dsResponse.status != HttpStatusCode.OK) {
                    code = Json.decodeFromString(dsResponse.readText())
                    logger.warn {
                        "Received error code from the DS (code: $code, status: ${dsResponse.status})"
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_DS_CONNECTION_TIMEOUT
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
     * starting a new transaction only when [lock] is 0.
     *
     * In this implementation, the lock-unlock-rollback mechanism is not needed,
     * as the RM is the entity which validates users' operations. However, to keep
     * streaming when downloading files (and avoid the "Channel has been cancelled"
     * exception), we need to store a reference to the server and the HTTP response.
     */
    override fun lock(): OutcomeCode {
        if (locks == 0) {
            logger.info { "Locking the status of the DS" }
            client = HttpClient(Jetty) {
                expectSuccess = false
                install(HttpCookies) /** To accept all cookies. */
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
     * rollbacking to the previous status only when [lock] becomes 0.
     *
     * In this implementation, close the Http client and clear the responses.
     */
    override fun rollback(): OutcomeCode {
        if (locks == 1) {
            logger.info { "Rollback the status of the DS" }
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
     * the transaction only when [lock] becomes 0.
     *
     * In this implementation, close the Http client and clear the responses.
     */
    override fun unlock(): OutcomeCode {
        if (locks == 1) {
            logger.info { "Unlock the status of the DS" }
            locks--
            client!!.close()
        } else if (locks > 0) {
            logger.debug { "Decrement lock number to ${locks - 1}" }
            locks--
        }
        return OutcomeCode.CODE_000_SUCCESS
    }
}