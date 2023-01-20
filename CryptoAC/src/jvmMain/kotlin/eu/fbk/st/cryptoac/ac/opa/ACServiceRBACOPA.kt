package eu.fbk.st.cryptoac.ac.opa

import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.ac.ACServiceRBAC
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.ACServiceRBACXACMLAuthzForceParameters
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.generateRandomString
import eu.fbk.st.cryptoac.model.CodeBoolean
import eu.fbk.st.cryptoac.model.CodeServiceParameters
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.User
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.plugins.cookies.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import mu.KotlinLogging
import java.io.BufferedReader
import java.io.FileNotFoundException
import java.io.InputStreamReader
import java.net.NoRouteToHostException
import java.security.cert.X509Certificate
import javax.net.ssl.X509TrustManager

private val logger = KotlinLogging.logger {}

// TODO Integrate JWT in OPA?
// TODO secure OPA: https://www.openpolicyagent.org/docs/latest/security/

/**
 * Implementation of the methods to interface with
 * OPA configured with the given [acServiceParameters]
 *
 * Currently, each modification to the CAC policy is reflected into the
 * OPA document directly, i.e., a new OPA document is created (and replaces
 * the old document) each time the CAC policy is modified. Intuitively, this
 * is not optimal.
 * OPA could also work with JSON Patch (https://tools.ietf.org/html/rfc6902)
 * that is based on the JSON pointer RFC (https://tools.ietf.org/html/rfc6901).
 * However, currently there is no way to select an element from an array by
 * some property except by index. A possible revision to the JSON-Patch format
 * is being discussed (last update Nov 2019), which may support value-based array
 * operations. Check https://github.com/json-patch/json-patch2 and especially
 * https://github.com/json-patch/json-patch2/issues/18
 */
class ACServiceRBACOPA(
    private val acServiceParameters: ACServiceRBACOPAParameters
): ACServiceRBAC {

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    override var locks = 0

    /**
     * The file containing REGO code to
     * initialize OPA for an RBAC policy
     */
    private val initRegoRBAC = "/cryptoac/OPA/rbac.rego"

    /** The OPA document at the beginning of a transaction */
    private var backupOPADocument: String? = null

    /** The base API path (url + port) of OPA */
    private val opaBaseAPI = "${acServiceParameters.url}:${acServiceParameters.port}"

    /** The Ktor Http client */
    private var client: HttpClient? = null

    /** The OPA RBAC policy during the transaction */
    private var currentOPADocument: OPADocumentRBAC? = null

    /** Whether the OPA RBAC policy was modified during the transaction */
    private var opaDocumentIsToUpdate = false



    /**
     * Check whether the service was
     * already configured (at least once)
     *
     * In this implementation, get the OPA
     * document. If it exists, it means that
     * we already configured the OPA
     */
    override fun alreadyConfigured(): CodeBoolean {
        logger.info { "Checking whether the RBAC OPA is already configured" }

        val opaCode = getOPADocument()
        return if (opaCode.code == CODE_000_SUCCESS) {
            if (opaCode.opaDocument!!.result!!.ur.isEmpty()) {
                CodeBoolean(
                    boolean = false
                )
            } else {
                CodeBoolean()
            }
        } else {
            CodeBoolean(
                code = opaCode.code
            )
        }
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

        logger.info { "Initializing the RBAC OPA" }

        val serviceStatus = alreadyConfigured()
        if (serviceStatus.code != CODE_000_SUCCESS) {
            return serviceStatus.code
        } else if (serviceStatus.boolean) {
            logger.warn { "The RBAC OPA was already initialized" }
            return CODE_077_SERVICE_ALREADY_CONFIGURED
        }

        val regoFile = ACServiceRBACOPA::class.java.getResourceAsStream(initRegoRBAC)
        if (regoFile == null) {
            val message = "Initialization Rego file $initRegoRBAC not found"
            logger.error { message }
            throw FileNotFoundException(message)
        }
        val rbacPolicyOPA: String
        BufferedReader(InputStreamReader(regoFile)).use { reader ->
            rbacPolicyOPA = reader.readText()
        }

        var code: OutcomeCode = CODE_000_SUCCESS
        runBlocking {
            val opaURL = "${API.HTTPS}${opaBaseAPI}${API.OPA_RBAC_POLICY}"
            logger.info { "Creating the OPA RBAC policy sending a PUT request to $opaURL" }
            val opaResponse = client!!.put {
                url(opaURL)
                setBody(rbacPolicyOPA)
            }
            logger.debug { "Received response from the OPA" }
            if (opaResponse.status != HttpStatusCode.OK) {
                logger.warn { "Received error code from the OPA (status: ${opaResponse.status})" }
                code = CODE_028_OPA_POLICY_CREATION
            }
        }
        if (code != CODE_000_SUCCESS) {
            return code
        }

        currentOPADocument = OPADocumentRBAC(
            ur = hashMapOf(),
            pa = hashMapOf(),
        )
        backupOPADocument = myJson.encodeToString(currentOPADocument)
        return putOPADocument(
            opaPolicy = currentOPADocument!!
        )
    }

    /**
     * This function is invoked each time the service
     * is initialized, and it should contain the code to
     * initialize the interface (e.g., possibly connect to
     * remote services like MQTT brokers, databases, etc.)
     */
    override fun init() {
        logger.info { "No action required to initialize the AC RBAC OPA service" }
    }

    /**
     * This function is invoked each time the (interface toward
     * the) service is destroyed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    override fun deinit() {
        logger.info { "No action required to de-initialize the AC RBAC OPA service" }
    }

    /**
     * Add (and initialize) the [newAdmin] in the
     * service and return the outcome code. Check that
     * the name of the admin is the expected one and
     * that the admin was not already added (or initialized)
     *
     * In this implementation, just check that
     * the admin name is the expected one; the
     * OPA does not have the U and R sets, but
     * only the UR and PA sets
     */
    override fun addAdmin(
        newAdmin: User
    ): OutcomeCode {
        /** Guard clauses */
        if (newAdmin.name != ADMIN) {
            logger.warn {
                "Admin user has name ${newAdmin.name}" +
                ", but admin name should be $ADMIN"
            }
            return CODE_036_ADMIN_NAME
        }

        return CODE_000_SUCCESS
    }

    /**
     * Initialize the [user] in the service and
     * return the outcome code. Check that the user
     * is present and was not already initialized or
     * deleted. This method should support invocations
     * by non-admin users
     */
    override fun initUser(
        user: User
    ): OutcomeCode {
        logger.info { "No action required to initialize user" }
        return CODE_000_SUCCESS
    }

    /**
     * Add the [newUser] in the service by, e.g.,
     * creating an account for the user. Check that 
     * the user was not already added. Finally,
     * return the user's configuration parameters
     * together with the outcome code
     *
     * In this implementation, there is no set U
     * to which add the [newUser]
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

        // TODO to implement when we will have login with users

        return CodeServiceParameters(
            parameters = ACServiceRBACOPAParameters(
                port = acServiceParameters.port,
                url = acServiceParameters.url,
            )
        )
    }

    /**
     * Delete [username] from the service. Check
     * that the user exists, and she is not the admin
     *
     * In this implementation, we delete
     * [username]'s assignments from UR
     * but there is no need to delete
     * [username] from U
     */
    override fun deleteUser(
        username: String
    ): OutcomeCode {

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        opaDocumentIsToUpdate = true
        logger.info {
            "Updating the U set by removing user " +
                    username
        }
        currentOPADocument!!.removeUser(
            username = username
        )
        return CODE_000_SUCCESS
    }



    /**
     * Add [roleName] to R
     *
     * In this implementation, there is no
     * need to add [roleName] to R
     */
    override fun addRole(
        roleName: String
    ): OutcomeCode {
        return CODE_000_SUCCESS
    }

    /**
     * Delete [roleName] from R and
     * [roleName]'s assignments from
     * UR and PA
     *
     * In this implementation, we delete
     * [roleName]'s assignments from UR
     * and PA but there is no need to
     * delete [roleName] from R
     */
    override fun deleteRole(
        roleName: String
    ): OutcomeCode {

        /** Guard clauses */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        opaDocumentIsToUpdate = true
        logger.info {
            "Updating the R set by removing role " +
            roleName
        }
        currentOPADocument!!.removeRole(
            roleName = roleName
        )
        return CODE_000_SUCCESS
    }

    /**
     * Add [resourceName] to P
     *
     * In this implementation, there is no
     * need to add [resourceName] to P
     */
    override fun addResource(
        resourceName: String
    ): OutcomeCode {
        return CODE_000_SUCCESS
    }

    /**
     * Delete [resourceName] from P and
     * [resourceName]'s assignments from PA
     *
     * In this implementation, we delete
     * [resourceName]'s assignments from
     * PA but there is no need to
     * delete [resourceName] from P
     */
    override fun deleteResource(
        resourceName: String
    ): OutcomeCode {

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        opaDocumentIsToUpdate = true
        logger.info {
            "Updating the P set by removing resource " +
            resourceName
        }
        currentOPADocument!!.removeResource(
            resourceName = resourceName
        )
        return CODE_000_SUCCESS
    }

    /** Add ([username], [roleName]) to UR */
    override fun assignUserToRole(
        username: String,
        roleName: String
    ): OutcomeCode {
        logger.info { "Adding UR assignment $username-$roleName" }

        /** Guard clauses */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "User or role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /**
         * Check whether [username] is already
         * assigned to [roleName]
         */
        if (currentOPADocument!!.getUsersAssignedToRole(
                roleName = roleName
            ).contains(username)) {
            logger.warn {
                "UR assignment between user $username " +
                "and role $roleName already exists"
            }
            return CODE_062_UR_ASSIGNMENTS_ALREADY_EXISTS
        }

        opaDocumentIsToUpdate = true
        logger.info {
            "Updating the UR set with the new " + 
            "assignment (user $username, role $roleName)"
        }
        currentOPADocument!!.assignUserToRole(
            username = username,
            roleName = roleName
        )
        return CODE_000_SUCCESS
    }

    /** Delete ([username], [roleName]) from UR */
    override fun revokeUserFromRole(
        username: String,
        roleName: String
    ): OutcomeCode {

        /** Guard clauses */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "User or role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }


        /**
         * Check whether [username] is
         * assigned to [roleName]
         */
        if (!currentOPADocument!!.getUsersAssignedToRole(
                roleName = roleName
            ).contains(username)) {
            logger.warn {
                "UR assignment between user $username " +
                "and role $roleName does not exist"
            }
            return CODE_041_UR_ASSIGNMENTS_NOT_FOUND
        }

        opaDocumentIsToUpdate = true
        logger.info {
            "Updating the UR set by removing the " +
            "assignment (user $username, role $roleName)"
        }
        currentOPADocument!!.revokeUserFromRole(
            username = username,
            roleName = roleName
        )
        return CODE_000_SUCCESS
    }

    /**
     * Add ([roleName], ([permission],
     * [resourceName])) to PA
     */
    override fun assignPermissionToRole(
        roleName: String,
        permission: PermissionType,
        resourceName: String
    ): OutcomeCode {
        logger.info { "Adding PA assignment $roleName-$permission-$resourceName" }

        /** Guard clauses */
        if (roleName.isBlank() || resourceName.isBlank()) {
            logger.warn { "Role or resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        opaDocumentIsToUpdate = true
        return when (permission) {
            PermissionType.READ -> assignROrWPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READ,
                resourceName = resourceName
            )
            PermissionType.WRITE -> assignROrWPermissionToRole(
                roleName = roleName,
                permission = PermissionType.WRITE,
                resourceName = resourceName
            )
            PermissionType.READWRITE -> {
                val code = assignROrWPermissionToRole(
                    roleName = roleName,
                    permission = PermissionType.READ,
                    resourceName = resourceName
                )
                if (code == CODE_000_SUCCESS) {
                    assignROrWPermissionToRole(
                        roleName = roleName,
                        permission = PermissionType.WRITE,
                        resourceName = resourceName
                    )
                } else {
                    code
                }
            }
        }
    }

    /** Delete ([roleName], (-, [resourceName])) from PA */
    override fun revokePermissionFromRole(
        roleName: String,
        resourceName: String
    ): OutcomeCode {

        /** Guard clauses */
        if (roleName.isBlank() || resourceName.isBlank()) {
            logger.warn { "Role or resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        /**
         * Check whether [roleName] has
         * permission over [resourceName]
         */
        if (!currentOPADocument!!.getPermissionsAssignedToRole(
                roleName = roleName
            ).contains(resourceName)) {
            logger.warn {
                "PA assignment between role $roleName " +
                "and resource $resourceName does not exist"
            }
            return CODE_042_PA_ASSIGNMENTS_NOT_FOUND
        }

        opaDocumentIsToUpdate = true
        logger.info {
            "Updating the PA set by removing the " +
            "assignment (role $roleName, resource $resourceName)"
        }
        currentOPADocument!!.revokePermissionFromRole(
            roleName = roleName,
            resourceName = resourceName,
        )
        return CODE_000_SUCCESS
    }

    /**
     * Replace ([roleName], (-, [resourceName])) with
     * ([roleName], ([permission], [resourceName]))
     * in PA
     */
    override fun updatePermissionToRole(
        roleName: String,
        permission: PermissionType,
        resourceName: String
    ): OutcomeCode {
        logger.info { "Update PA assignment $roleName-$permission-$resourceName" }

        opaDocumentIsToUpdate = true
        val code = revokePermissionFromRole(
            roleName = roleName,
            resourceName = resourceName
        )
        return if (code == CODE_000_SUCCESS) {
            assignPermissionToRole(
                roleName = roleName,
                permission = permission,
                resourceName = resourceName
            )
        } else {
            code
        }
    }

    /**
     * Check whether the [username] has
     * [permission] over [resourceName] and
     * return either CODE_000_SUCCESS
     * (if the user is authorized) or
     * CODE_037_FORBIDDEN (if the user is
     * not authorized). [permission] can
     * be either READ or WRITE
     */
    override fun isUserAllowed(
        username: String,
        permission: PermissionType,
        resourceName: String
    ): OutcomeCode = isUserAllowed(
        username = username,
        roleName = null,
        permission = permission,
        resourceName = resourceName
    )

    /**
     * Check whether the [username] has
     * [permission] over [resourceName]
     * through role [roleName] (if given,
     * otherwise it is up to the AC service
     * to find a suitable role) and
     * return either CODE_000_SUCCESS
     * (if the user is authorized) or
     * CODE_037_FORBIDDEN (if the user is
     * not authorized). [permission] can
     * be either READ or WRITE
     */
    override fun isUserAllowed(
        username: String,
        roleName: String?,
        permission: PermissionType,
        resourceName: String,
    ): OutcomeCode {

        /** Guard clauses */
        if (permission != PermissionType.READ && permission != PermissionType.WRITE) {
            logger.warn { "Permission should be either ${PermissionType.READ} or ${PermissionType.WRITE}" }
            return CODE_020_INVALID_PARAMETER
        }

        // TODO use the roleName parameter when given? if so, remember to update the documentation
        var code = CODE_000_SUCCESS
        runBlocking {
            val opaURL = "${API.HTTPS}$opaBaseAPI${API.OPA_RBAC_QUERY}"
            logger.info {
                "Querying whether the user $username has permission " +
                "$permission over the resource $resourceName" }
            val opaResponse = client!!.post {
                url(opaURL)
                contentType(ContentType.Application.Json)
                setBody(myJson.parseToJsonElement(
                    string = """
                        {"input":{
                            "username":"$username", 
                            "resource":"$resourceName", 
                            "permission":"$permission"
                        }}""".trimIndent()
                ))
            }
            logger.debug { "Received response from the OPA" }
            code = if (opaResponse.status == HttpStatusCode.OK) {
                val opaDocumentString = opaResponse.bodyAsText()
                val result = myJson.decodeFromString<OPAEval>(opaDocumentString).result
                if (result) {
                    logger.debug { "User is authorized" }
                    CODE_000_SUCCESS
                } else {
                    logger.info { "User is not authorized" }
                    CODE_037_FORBIDDEN
                }
            } else {
                val errorMessage = opaResponse.bodyAsText()
                logger.warn { "Received error code from the OPA (status: ${opaResponse.status}, error: $errorMessage)" }
                CODE_076_OPA_POLICY_EVAL
            }
        }

        return code
    }



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollback the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0
     *
     * In this implementation, create an HTTP client and get the current
     * OPA document, if present. Finally, return the outcome code
     */
    override fun lock(): OutcomeCode {
        return if (locks == 0) {
            logger.info { "Locking the status of the OPA document" }
            client = HttpClient(CIO) {
                // TODO configure this, as for now the client accepts all certificates
                engine {
                    https {
                        trustManager = object: X509TrustManager {
                            override fun checkClientTrusted(p0: Array<out X509Certificate>?, p1: String?) { }
                            override fun checkServerTrusted(p0: Array<out X509Certificate>?, p1: String?) { }
                            override fun getAcceptedIssuers(): Array<X509Certificate>? = null
                        }
                    }
                }
                install(ContentNegotiation) {
                    json(json = myJson)
                }
                expectSuccess = false
                /** To accept all cookies */
                install(HttpCookies)
            }
            try {
                val storageOPADocument = getOPADocument()
                if (storageOPADocument.code != CODE_000_SUCCESS) {
                    storageOPADocument.code
                } else {
                    /** If null, set the OPA document to the default (empty) one */
                    currentOPADocument = storageOPADocument.opaDocument!!.result!!
                    backupOPADocument = myJson.encodeToString(currentOPADocument)
                    opaDocumentIsToUpdate = false
                    locks++
                    CODE_000_SUCCESS
                }
            } catch (e: NoRouteToHostException) {
                if ((e.message ?: "").contains("No route to host")) {
                    logger.warn { "OPA - connection timeout" }
                    CODE_047_AC_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
        } else if (locks > 0) {
            locks++
            logger.debug { "Increment lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "Lock number is negative ($locks)" }
            CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
        }
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollback to the previous status only when [locks] becomes 0
     *
     * In this implementation, just do not update the OPA document
     */
    override fun rollback(): OutcomeCode {
        return when {
            locks == 1 -> {
                logger.info { "Rollback the status of the OPA document" }
                opaDocumentIsToUpdate = false
                locks--
                client!!.close()
                client = null
                backupOPADocument = null
                currentOPADocument = null
                CODE_000_SUCCESS
            }
            locks > 1 -> {
                locks--
                logger.debug { "Decrement lock number to $locks" }
                CODE_000_SUCCESS
            }
            else -> {
                logger.warn { "AC rollback number is zero or negative ($locks)" }
                CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
            }
        }
    }

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0
     *
     * In this implementation, update the OPA document, close the client
     * and return the outcome code
     */
    override fun unlock(): OutcomeCode {
        return when {
            locks == 1 -> {
                logger.info { "Unlocking the status of the OPA document" }
                locks--
                val code = if (opaDocumentIsToUpdate) {
                    opaDocumentIsToUpdate = false
                    putOPADocument(currentOPADocument!!)
                } else {
                    CODE_000_SUCCESS
                }
                backupOPADocument = null
                currentOPADocument = null
                client!!.close()
                client = null
                code
            }

            locks > 1 -> {
                locks--
                logger.debug { "Decrement lock number to $locks" }
                CODE_000_SUCCESS
            }

            else -> {
                logger.warn { "AC unlock number is zero or negative ($locks)" }
                CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
            }
        }
    }



    /**
     * Get the OPA RBAC document from the OPA
     * and return it along with the outcome code
     */
    private fun getOPADocument(): OPAStorageDocument {

        var opaStorageDocument: OPAStorageDocument
        runBlocking {
            val opaURL = "${API.HTTPS}$opaBaseAPI${API.OPA_RBAC_DATA}"
            logger.info { "Getting the OPA data sending a GET request to $opaURL" }
            val opaResponse = client!!.get {
                url(opaURL)
            }
            logger.debug { "Received response from the OPA" }
            opaStorageDocument = if (opaResponse.status != HttpStatusCode.OK) {
                logger.warn { "Received error code from the OPA (status: ${opaResponse.status})" }
                OPAStorageDocument(CODE_030_OPA_DOCUMENT_DOWNLOAD)
            } else {
                val opaDocumentString = opaResponse.bodyAsText()
                logger.debug { "The current OPA data is $opaDocumentString" }
                val receivedOPADocument = OPAStorageDocument(
                    opaDocument = myJson.decodeFromString<OPADocument>(opaDocumentString)
                )
                if (receivedOPADocument.opaDocument?.result == null) {
                    OPAStorageDocument(
                        opaDocument = OPADocument(
                        result = OPADocumentRBAC(
                                ur = HashMap(),
                                pa = HashMap()
                            )
                        )
                    )
                } else {
                    receivedOPADocument
                }
            }
        }
        return opaStorageDocument
    }

    /**
     * Put the [opaPolicy] document in the OPA
     * and return the outcome code
     */
    private fun putOPADocument(
        opaPolicy: OPADocumentRBAC
    ): OutcomeCode {

        var code = CODE_000_SUCCESS
        runBlocking {
            val opaURL = "${API.HTTPS}${opaBaseAPI}${API.OPA_RBAC_DATA}"
            logger.info { "Putting the OPA RBAC data sending a PUT request to $opaURL" }
            val opaResponse = client!!.put {
                url(opaURL)
                contentType(ContentType.Application.Json)
                setBody("""
                    {
                        "randomID":"${generateRandomString(10)}",
                        "ur": ${myJson.encodeToString(opaPolicy.ur)},
                        "pa": ${myJson.encodeToString(opaPolicy.pa)}
                    }""".trimIndent()
                )
            }

            /** Success is 204, see https://www.openpolicyagent.org/docs/latest/rest-api/ */
            if (opaResponse.status != HttpStatusCode.NoContent) {
                logger.warn { "Received error code from the OPA (status: ${opaResponse.status})" }
                code = CODE_029_OPA_POLICY_UPDATE
            }
        }
        return code
    }

    private fun assignROrWPermissionToRole(
        roleName: String,
        permission: PermissionType,
        resourceName: String
    ): OutcomeCode {
        /**
         * Check whether [roleName] already
         * has permission over [resourceName]
         */
        val rolePermissions = currentOPADocument!!.getPermissionsAssignedToRole(
            roleName = roleName
        )
        if (rolePermissions[resourceName]?.contains(permission) == true) {
            logger.warn {
                "PA assignment between role $roleName " +
                "and resource $resourceName for permission" +
                " $permission already exists"
            }
            return CODE_063_PA_ASSIGNMENTS_ALREADY_EXISTS
        }

        logger.info {
            "Updating the PA set with the new assignment assignment " +
            "(permission $permission, resource $resourceName)"
        }
        currentOPADocument!!.addPermissionToRole(
            roleName = roleName,
            resourceName = resourceName,
            permission = permission
        )
        return CODE_000_SUCCESS
    }
}
