package eu.fbk.st.cryptoac.rm.cryptoac

import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.API.HTTPS
import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.ac.opa.ACServiceRBACOPAParameters
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreParametersRBAC
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceCryptoACParameters
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.model.CodeBoolean
import eu.fbk.st.cryptoac.model.CodeServiceParameters
import eu.fbk.st.cryptoac.model.unit.Resource
import eu.fbk.st.cryptoac.model.tuple.PermissionTuple
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.rm.RMServiceRBAC
import eu.fbk.st.cryptoac.rm.model.AddResourceRBACRequest
import eu.fbk.st.cryptoac.rm.model.WriteResourceRBACRequest
import io.ktor.client.*
import io.ktor.client.engine.jetty.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.plugins.cookies.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import mu.KotlinLogging
import java.lang.IllegalStateException
import java.net.ConnectException
import java.util.*

private val logger = KotlinLogging.logger {}

/**
 * Implementation of the methods to interface with
 * the RM for CryptoAC as a microservice container 
 * configured with the given [rmServiceParameters]
 */
class RMServiceRBACCryptoAC(
    private val rmServiceParameters: RMServiceRBACCryptoACParameters,
) : RMServiceRBAC {

    /** The base API path (url + port) of the RM */
    private val rmBaseAPI = "${rmServiceParameters.url}:${rmServiceParameters.port}"



    /**
     * Check whether the service was
     * already configured (at least once)
     */
    override fun alreadyConfigured(): CodeBoolean {
        // TODO to implement
        return CodeBoolean(boolean = false)
    }

    /**
     * This function is invoked when initializing the
     * admin (after the 'init' function), and it should
     * configure the service with the given [parameters]
     * and return the outcome code. When implementing this
     * function, remember to decide how to handle (e.g.,
     * reject or allow) subsequent invocations
     *
     * In this implementation, deny subsequent invocations
     */
    override fun configure(
        parameters: CoreParameters?
    ): OutcomeCode {

        /** Guard clauses */
        if (parameters !is CoreParametersRBAC) {
            val message = "Given wrong parameters for update"
            logger.error { message }
            throw IllegalStateException(message)
        }

        logger.info { "Initializing the RM" }

        val serviceStatus = alreadyConfigured()
        if (serviceStatus.code != CODE_000_SUCCESS) {
            return serviceStatus.code
        } else if (serviceStatus.boolean) {
            logger.warn { "The RM was already initialized" }
            return OutcomeCode.CODE_077_SERVICE_ALREADY_CONFIGURED
        }

        var code: OutcomeCode = CODE_000_SUCCESS
        runBlocking {
            val rmURL = "$HTTPS${rmBaseAPI}${API.RM}${CoreType.RBAC_AT_REST}/"
            logger.info { "Configuring the RM sending a POST request to $rmURL" }
            try {
                getKtorClient().use {
                    val rmResponse = it.post {
                        url(rmURL)
                        contentType(ContentType.Application.Json)
                        setBody(
                            RMRBACCryptoACParameters(
                                crypto = parameters.cryptoType,
                                mmServiceParameters = parameters.mmServiceParameters,
                                acServiceParameters = parameters.acServiceParameters as ACServiceRBACOPAParameters?,
                                dmServiceCryptoACParameters = parameters.dmServiceParameters as DMServiceCryptoACParameters
                            )
                        )
                    }
                    logger.debug { "Received response from the RM" }
                    if (rmResponse.status != HttpStatusCode.OK) {
                        code = myJson.decodeFromString(rmResponse.bodyAsText())
                        logger.warn {(
                            "Received error code from the RM (code:"
                            + " $code, status: ${rmResponse.status})"
                        )}
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_RM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * This function is invoked each time the service
     * is initialized, and it should contain the code to
     * initialize the interface (e.g., possibly connect to
     * remote services like MQTT brokers, databases, etc.)
     */
    override fun init() {
        logger.info { "No action required to initialize the RM RBAC CryptoAC service" }
    }

    /**
     * This function is invoked each time the (interface toward
     * the) service is destroyed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    override fun deinit() {
        logger.info { "No action required to de-initialize the RM RBAC CryptoAC service" }
    }

    /**
     * Add (and initialize) the [newAdmin] in the
     * service and return the outcome code. Check that
     * the name of the admin is the expected one and
     * that the admin was not already added (or initialized)
     */
    override fun addAdmin(
        newAdmin: User
    ): OutcomeCode {
        // TODO to implement when we will have login with users
        /** Guard clauses */
        if (newAdmin.name != Constants.ADMIN) {
            logger.warn {
                "Admin user has name ${newAdmin.name}" +
                ", but admin name should be ${Constants.ADMIN}"
            }
            return CODE_036_ADMIN_NAME
        }

        return CODE_000_SUCCESS
    }

    /**
    * Initialize the [user] in the service and
    * return the outcome code. Check that the user
    * is present and was not already initialized.
    * This method should support invocations by
    * non-admin users
    */
    override fun initUser(
        user: User
    ): OutcomeCode {
        // TODO to implement when we will have login with users
        return CODE_000_SUCCESS
    }

    /**
     * Add the [newUser] in the service by, e.g.,
     * creating an account for the user. Check that 
     * the user was not already added. Finally,
     * return the user's configuration parameters
     * together with the outcome code
     */
    override fun addUser(
        newUser: User
    ): CodeServiceParameters {
        val username = newUser.name

        /** Guard clauses */
        if (username.isBlank() ) {
            logger.warn { "Username is blank" }
            return CodeServiceParameters(CODE_020_INVALID_PARAMETER)
        }

        /** TODO check password generation */
        val passwordBytes = ByteArray(20)
        Random().nextBytes(passwordBytes)
        val newPassword = passwordBytes.encodeBase64()

        // TODO to implement when we will have login with users

        return CodeServiceParameters(
            parameters = RMServiceRBACCryptoACParameters(
                username = username,
                password = newPassword,
                port = rmServiceParameters.port,
                url = rmServiceParameters.url,
            )
        )
    }

    /**
     * Delete [username] from the service. Check
     * that the user exists, and she is not the admin
     */
    override fun deleteUser(
        username: String
    ): OutcomeCode {
        // TODO to implement when we will have login with users
        return CODE_000_SUCCESS
    }



    /**
     * Invoke the RM to validate the creation of
     * a new resource involving the given
     * [newResource] and [adminPermissionTuple]
     * and return the outcome code
     */
    override fun checkAddResource(
        newResource: Resource,
        adminPermissionTuple: PermissionTuple
    ): OutcomeCode {

        var code = CODE_000_SUCCESS
        runBlocking {
            val rmURL = "$HTTPS$rmBaseAPI${API.RM}resources/${CoreType.RBAC_AT_REST}/"
            logger.info {(
                "Asking the RM to check an add resource "
                + "operation sending a POST request to $rmURL"
            )}
            val addResourceRBACRequest = AddResourceRBACRequest(
                resource = newResource,
                permissionTuple = adminPermissionTuple,
                symKeyVersionNumber = newResource.symDecKeyVersionNumber,
            )
            try {
                getKtorClient().use {
                    val rmResponse = it.post {
                        url(rmURL)
                        contentType(ContentType.Application.Json)
                        setBody(addResourceRBACRequest)
                    }
                    logger.debug { "Received response from the RM" }
                    if (rmResponse.status != HttpStatusCode.OK) {
                        code = myJson.decodeFromString(rmResponse.bodyAsText())
                        logger.warn {(
                            "Received error code from the RM (code: "
                            + "$code, status: ${rmResponse.status})"
                        )}
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = OutcomeCode.CODE_043_RM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        }
        return code
    }

    /**
     * Invoke the RM to validate the update of
     * a resource using the given [roleName] and
     * involving the given [newResource] and
     * [symEncKeyVersionNumber], and return the
     * outcome code
     */
    override fun checkWriteResource(
        roleName: String,
        symEncKeyVersionNumber: Int,
        newResource: Resource
    ): OutcomeCode {

        var code = CODE_000_SUCCESS
        runBlocking {
            val rmURL = "$HTTPS$rmBaseAPI${API.RM}resources/${CoreType.RBAC_AT_REST}/"
            logger.info {(
                "Asking the RM to check a write resource "
                + "operation sending a PATCH request to $rmURL"
            )}
            val writeResourceRBACRequest = WriteResourceRBACRequest(
                username = rmServiceParameters.username,
                roleName = roleName,
                resource = newResource,
                symKeyVersionNumber = symEncKeyVersionNumber,
            )
            try {
                getKtorClient().use {
                    val rmResponse = it.patch {
                        url(rmURL)
                        contentType(ContentType.Application.Json)
                        setBody(writeResourceRBACRequest)
                    }
                    logger.debug { "Received response from the RM" }
                    if (rmResponse.status != HttpStatusCode.OK) {
                        code = myJson.decodeFromString(rmResponse.bodyAsText())
                        logger.warn {(
                            "Received error code from the RM (code: "
                            + "$code, status: ${rmResponse.status})"
                        )}
                    }
                }
            } catch (e: ConnectException) {
                if (e.message == "Connection refused") {
                    logger.warn { "The connection was refused" }
                    code = CODE_043_RM_CONNECTION_TIMEOUT
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
        install(ContentNegotiation) {
            json(json = myJson)
        }
        // TODO configure this, as for now the client accepts all certificates
        engine {
            sslContextFactory.isTrustAll = true
        }
    }
}
