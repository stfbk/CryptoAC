package eu.fbk.st.cryptoac.implementation.rm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.tuples.FileTuple
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple
import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.API.HTTPS
import eu.fbk.st.cryptoac.core.CoreParametersCLOUD
import eu.fbk.st.cryptoac.core.myJson
import io.ktor.client.*
import io.ktor.client.engine.jetty.*
import io.ktor.client.features.cookies.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import mu.KotlinLogging
import java.lang.IllegalStateException
import java.net.ConnectException

private val logger = KotlinLogging.logger {}

/**
 * Implementation of the methods to interface with
 * the RM as a microservice container configured
 * with the given [interfaceParameters]
 */
class RMInterfaceCryptoAC(
    private val interfaceParameters: RMInterfaceCryptoACParameters,
) : RMInterface() {

    /** The base API path (url + port) of the RM */
    private val rmBaseAPI = "${interfaceParameters.url}:${interfaceParameters.port}"

    /**
     * If necessary, configure the RM with relevant
     * [parameters] and return the outcome code
     */
    override fun configure(parameters: CoreParameters): OutcomeCode {

        /** Guard clauses */
        if (parameters !is CoreParametersCLOUD) {
            val message = "Given wrong parameters for update"
            logger.error { message }
            throw IllegalStateException(message)
        }


        var code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val rmURL = "$HTTPS${rmBaseAPI}${API.RM}"
            logger.info { "Configuring the RM sending a POST request to $rmURL" }
            try {
                getKtorClient().use {
                    val rmResponse = it.post<HttpResponse>(rmURL) {
                        contentType(ContentType.Application.Json)
                        body = myJson.encodeToString(RMCloudParameters(
                            parameters.cryptoType,
                            parameters.mmInterfaceParameters,
                            parameters.dmInterfaceParameters,
                            parameters.opaInterfaceParameters
                        ))
                    }
                    logger.debug { "Received response from the RM" }
                    if (rmResponse.status != HttpStatusCode.OK) {
                        code = myJson.decodeFromString(rmResponse.readText())
                        logger.warn {
                            "Received error code from the RM (code: $code, status: ${rmResponse.status})"
                        }
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_042_RM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * Invoke the RM to validate the creation of
     * a new resource involving the given
     * [newFileTuple] and [adminPermissionTuple]
     * and return the outcome code
     */
    override fun checkAddFile(newFileTuple: FileTuple, adminPermissionTuple: PermissionTuple): OutcomeCode {

        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val rmURL = "$HTTPS$rmBaseAPI${API.RM}files/${CoreType.RBAC_CLOUD}/"
            logger.info { "Asking the RM to check an add file operation sending a POST request to $rmURL" }
            val addFileRequest = AddFileRequest(
                fileTuple = newFileTuple,
                permissionTuple = adminPermissionTuple,
                symKeyVersionNumber = newFileTuple.symDecKeyVersionNumber,
            )
            try {
                getKtorClient().use {
                    val rmResponse = it.post<HttpResponse>(rmURL) {
                        contentType(ContentType.Application.Json)
                        body = myJson.encodeToString(addFileRequest)
                    }
                    logger.debug { "Received response from the RM" }
                    if (rmResponse.status != HttpStatusCode.OK) {
                        code = myJson.decodeFromString(rmResponse.readText())
                        logger.warn {
                            "Received error code from the RM (code: $code, status: ${rmResponse.status})"
                        }
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_042_RM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * Invoke the RM to validate the update of
     * a resource involving the given [newFileTuple]
     * and [symEncKeyVersionNumber], and return the
     * outcome code
     */
    override fun checkWriteFile(symEncKeyVersionNumber: Int, newFileTuple: FileTuple): OutcomeCode {

        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val rmURL = "$HTTPS$rmBaseAPI${API.RM}files/${CoreType.RBAC_CLOUD}/"
            logger.info { "Asking the RM to check a write file operation sending a PATCH request to $rmURL" }
            val writeFileRequest = WriteFileRequest(
                fileTuple = newFileTuple,
                symKeyVersionNumber = symEncKeyVersionNumber,
            )
            try {
                getKtorClient().use {
                    val rmResponse = it.patch<HttpResponse>(rmURL) {
                        contentType(ContentType.Application.Json)
                        body = myJson.encodeToString(writeFileRequest)
                    }
                    logger.debug { "Received response from the RM" }
                    if (rmResponse.status != HttpStatusCode.OK) {
                        code = myJson.decodeFromString(rmResponse.readText())
                        logger.warn {
                            "Received error code from the RM (code: $code, status: ${rmResponse.status})"
                        }
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_042_RM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /** Return the Ktor Http client */
    private fun getKtorClient(): HttpClient = HttpClient(Jetty) {
        expectSuccess = false
        install(HttpCookies) /** To accept all cookies */
        // TODO configure this, as for now the client accepts all certificates
        engine {
            sslContextFactory.isTrustAll = true
        }
    }
}


/**
 * A wrapper for an add file request, which has a file tuple,
 * a permission tuple and a symmetric key version number
 */
@Serializable
data class AddFileRequest(val fileTuple: FileTuple, val permissionTuple: PermissionTuple, val symKeyVersionNumber: Int)

/**
 * A wrapper for an add file request, which has a file tuple,
 * a permission tuple and a symmetric key version number
 */
@Serializable
data class WriteFileRequest(val fileTuple: FileTuple, val symKeyVersionNumber: Int)
