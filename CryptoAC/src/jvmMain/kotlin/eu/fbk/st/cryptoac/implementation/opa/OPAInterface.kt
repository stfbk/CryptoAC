package eu.fbk.st.cryptoac.implementation.opa

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.core.tuples.RoleTuple
import eu.fbk.st.cryptoac.API
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import java.io.BufferedReader
import java.io.FileNotFoundException
import java.io.InputStreamReader
import java.util.*

private val logger = KotlinLogging.logger {}

/** The file containing REGO commands to initialize the OPA */
const val INIT_REGO_CODE = "/cryptoac/rbac.rego"

/** The key in the OPA RBAC document for the user-role (UR) relationship */
const val UR_KEY = "ur"

/** The key in the OPA RBAC document for the role-file (PA) relationship */
const val PA_KEY = "pa"

// TODO Integrate JWT in OPA?

// TODO OPA Docker should stay with DM Docker. But what about hybrid solutions?
//  Do we duplicate OPA? In general, CryptoAC does not currently account for
//  hybrid solutions. We should change the UI so to allow to add multiple {URL, Port}
//  pairs for each entity (i.e., DM, MS). To do so, creates a "plus" button to the
//  side of each row (i.e., DM, RM, MS) that creates another row. Change also behaviour in back-end.

/**
 * Implementation of the methods to interface with the open policy
 * agent server configured with the given [opaInterfaceParameters]
 */
class OPAInterface(private val opaInterfaceParameters: OPAInterfaceParameters) {

    /** The number of locks on the OPA document for the lock-rollback-unlock mechanism */
    private var locks = 0

    /** The OPA document at the beginning of a transaction */
    private var initialOPADocument: OPADocumentRBAC? = null

    /** The base API path (url + port) of OPA */
    private val opaBaseAPI = "${opaInterfaceParameters.url}:${opaInterfaceParameters.port}"

    /** The Ktor Http client */
    private var client: HttpClient? = null

    /** Configure the OPA and return the outcome code */
    fun configure(): OutcomeCode {
        val regoFile = OPAInterface::class.java.getResourceAsStream(INIT_REGO_CODE)
        if (regoFile == null) {
            val message = "Initialization Rego file $INIT_REGO_CODE not found"
            logger.error { message }
            throw FileNotFoundException(message)
        }
        val rbacPolicyOPA: String
        BufferedReader(InputStreamReader(regoFile)).use { reader ->
            rbacPolicyOPA = reader.readText()
        }

        // TODO better handle exceptions and refused connections
        var code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val opaURL = "${API.HTTP}${opaBaseAPI}${API.OPA_RBAC_POLICY}"
            logger.info { "Creating the OPA RBAC policy sending a PUT request to $opaURL" }
            val opaResponse = client!!.put<HttpResponse>(opaURL) {
                body = rbacPolicyOPA
            }
            logger.debug { "Received response from the OPA" }
            if (opaResponse.status != HttpStatusCode.OK) {
                logger.warn { "Received error code from the OPA (status: ${opaResponse.status})" }
                code = OutcomeCode.CODE_028_OPA_POLICY_CREATION
            }
        }
        if (code != OutcomeCode.CODE_000_SUCCESS) {
            return code
        }

        runBlocking {
            val opaURL = "${API.HTTP}${opaBaseAPI}${API.OPA_RBAC_DATA}"
            logger.info { "Creating the OPA RBAC data sending a PUT request to $opaURL" }
            val opaResponse = client!!.put<HttpResponse>(opaURL) {
                contentType(ContentType.Application.Json)
                body = "{\"$UR_KEY\":{}, \"$PA_KEY\":{}}"
            }
            logger.debug { "Received response from the OPA" }
            /** Success is 204, see https://www.openpolicyagent.org/docs/latest/rest-api/ */
            if (opaResponse.status != HttpStatusCode.NoContent) {
                logger.warn { "Received error code from the OPA (status: ${opaResponse.status})" }
                code = OutcomeCode.CODE_028_OPA_POLICY_CREATION
            }
        }
        return code
    }



    /**
     * Update the RBAC data in the OPA with
     * the [assignment] and return the outcome code
     */
    fun addURAssignment(assignment: UR): OutcomeCode {

        val storageOPADocument = getOPADocument()
        if (storageOPADocument.code != OutcomeCode.CODE_000_SUCCESS) {
            return storageOPADocument.code
        }
        val urAssignments = storageOPADocument.opaDocument!!.result!!.ur

        val jsonPatch = StringBuilder("[")
        val username = assignment.username
        val roleName = assignment.roleName
        val assignmentsCount = urAssignments[username]?.size ?: 0

        logger.info { "Updating the OPA document with the new UR assignment (user $username, role $roleName)" }
        jsonPatch.append(createJsonPatchAddOperation(UR_KEY, username, assignmentsCount, Json.encodeToString(assignment)))
        jsonPatch.setLength(jsonPatch.length - 2)
        jsonPatch.append("]")

        return updateOPADocument(jsonPatch.toString())
    }

    /**
     * Update the RBAC data in the OPA with
     * the [assignment] and return the outcome code
     */
    fun addPAAssignment(assignment: PA): OutcomeCode {

        val storageOPADocument = getOPADocument()
        if (storageOPADocument.code != OutcomeCode.CODE_000_SUCCESS) {
            return storageOPADocument.code
        }
        val paAssignments = storageOPADocument.opaDocument!!.result!!.pa

        val jsonPatch = StringBuilder("[")
        val roleName = assignment.roleName
        val fileName = assignment.fileName
        val assignmentsCount = paAssignments[roleName]?.size ?: 0

        logger.info { "Updating the OPA document with the new PA assignment (role $roleName, file $fileName)" }
        jsonPatch.append(createJsonPatchAddOperation(PA_KEY, roleName, assignmentsCount, Json.encodeToString(assignment)))
        jsonPatch.setLength(jsonPatch.length - 2)
        jsonPatch.append("]")

        return updateOPADocument(jsonPatch.toString())
    }


    /**
     * Update the RBAC data in the OPA by deleting the
     * assignments matching the given [username] and [roleName]
     * and return the outcome code. If a parameter was not given,
     * ignore it. At least one parameters has to be provided
     */
    fun deleteURAssignments(username: String? = null, roleName: String? = null): OutcomeCode {

        logger.info {
            "Deleting UR assignments " +
            if (username != null) "for user $username " else "" +
            if (roleName != null) "for role $roleName " else ""
        }

        /**
         * At least one parameter has to be specified, otherwise
         * the delete operation would delete all assignments
         */
        if (username == null && roleName == null) {
            val message = "No arguments were provided for delete operation"
            logger.error { message }
            throw IllegalArgumentException(message)
        }

        /**
         * JSON Patch (https://tools.ietf.org/html/rfc6902) is based on the JSON
         * pointer RFC (https://tools.ietf.org/html/rfc6901) in which there is no
         * way to select an element from an array by some property except by index
         *
         * Therefore, to remove the assignments from the OPA document policy, we
         * have to download the whole OPA document to find the right indexes.
         * Only then, we can apply the JSON patch.
         *
         * TODO A possible revision to the JSON-Patch format is being discussed (last update Nov 2019),
         * which may support value-based array operations. Check https://github.com/json-patch/json-patch2
         * and especially https://github.com/json-patch/json-patch2/issues/18
         */
        /** TODO cache the OPA document? */
        val storageOPADocument = getOPADocument()
        if (storageOPADocument.code != OutcomeCode.CODE_000_SUCCESS) {
            return storageOPADocument.code
        }
        val opaDocument = storageOPADocument.opaDocument
        val urAssignments = opaDocument!!.result!!.ur


        /** Build a single update request */
        val jsonPatch = StringBuilder("[")
        urAssignments.keys.forEach {
            if (it == username && roleName == null) {
                jsonPatch
                    .append("{ \"op\": \"remove\", \"path\": \"/$UR_KEY/")
                    .append(it)
                    .append("\" }, ")
                return@forEach
            } else if (username == null || it == username) {
                val currentURAssignments = urAssignments[it]

                /**
                 * We use a reverse loop as we need to remove the last elements of the
                 * array first (otherwise, if we were to remove the first elements, the others
                 * would shift position and we should recompute all indexes).
                 */
                for (i in currentURAssignments!!.size - 1 downTo 0) {

                    val currentURAssignment = currentURAssignments[i]
                    if (currentURAssignment.roleName == roleName) {
                        jsonPatch
                            .append("{ \"op\": \"remove\", \"path\": \"/$UR_KEY/")
                            .append(it)
                            .append("/")
                            .append(i)
                            .append("\" }, ")
                    }
                }
            }
        }

        /** If no assignment has been found, return the error code */
        return if (jsonPatch.length == 1) {
            logger.warn { "No UR assignments has been found" }
            if (roleName != null && username != null) {
                OutcomeCode.CODE_040_UR_ASSIGNMENTS_NOT_FOUND
            } else if (roleName != null) {
                OutcomeCode.CODE_005_ROLE_NOT_FOUND
            } else {
                OutcomeCode.CODE_004_USER_NOT_FOUND
            }
        }
        else {
            jsonPatch.setLength(jsonPatch.length - 2)
            jsonPatch.append("]")
            logger.info { "Deleting UR assignments from the OPA" }
            updateOPADocument(jsonPatch.toString())
        }
    }


    /**
     * Update the RBAC data in the OPA by deleting the
     * assignments matching the given [roleName] and [fileName]
     * and return the outcome code. If a parameter was not given,
     * ignore it. At least one parameters has to be provided
     */
    fun deletePAAssignments(roleName: String? = null, fileName: String? = null): OutcomeCode {

        logger.info { "Deleting PA assignments " +
                if (roleName != null) "for role $roleName " else "" +
                        if (fileName != null) "for file $fileName " else ""
        }

        /**
         * At least one parameter has to be specified, otherwise
         * the delete operation would delete all assignments
         */
        if (roleName == null && fileName == null) {
            val message = "No arguments were provided for delete operation"
            logger.error { message }
            throw IllegalArgumentException(message)
        }

        /**
         * JSON Patch (https://tools.ietf.org/html/rfc6902) is based on the JSON
         * pointer RFC (https://tools.ietf.org/html/rfc6901) in which there is no
         * way to select an element from an array by some property except by index
         *
         * Therefore, to remove the assignments from the OPA document policy, we
         * have to download the whole OPA document to find the right indexes.
         * Only then, we can apply the JSON patch.
         *
         * TODO A possible revision to the JSON-Patch format is being discussed (last update Nov 2019),
         * which may support value-based array operations. Check https://github.com/json-patch/json-patch2
         * and especially https://github.com/json-patch/json-patch2/issues/18
         */

        val storageOPADocument = getOPADocument()
        if (storageOPADocument.code != OutcomeCode.CODE_000_SUCCESS) {
            return storageOPADocument.code
        }
        val opaDocument = storageOPADocument.opaDocument
        val paAssignments = opaDocument!!.result!!.pa


        /** Build a single update request */
        val jsonPatch = StringBuilder("[")
        paAssignments.keys.forEach {
            if (it == roleName && fileName == null) {
                jsonPatch
                    .append("{ \"op\": \"remove\", \"path\": \"/$PA_KEY/")
                    .append(it)
                    .append("\" }, ")
                return@forEach
            } else if (roleName == null || it == roleName) {
                val currentAssignments = paAssignments[it]

                /**
                 * We use a reverse loop as we need to remove the last elements of the
                 * array first (otherwise, if we were to remove the first elements, the others
                 * would shift position and we should recompute all indexes).
                 */
                for (i in currentAssignments!!.size - 1 downTo 0) {

                    val currentPAAssignment = currentAssignments[i]
                    if (currentPAAssignment.fileName == fileName) {
                        jsonPatch
                            .append("{ \"op\": \"remove\", \"path\": \"/$PA_KEY/")
                            .append(it)
                            .append("/")
                            .append(i)
                            .append("\" }, ")
                    }
                }
            }
        }

        /** If no assignment has been found, return the error code */
        return if (jsonPatch.length == 1) {
            logger.warn { "No PA assignments has been found" }
            if (fileName != null && roleName != null) {
                OutcomeCode.CODE_041_PA_ASSIGNMENTS_NOT_FOUND
            } else if (fileName != null) {
                OutcomeCode.CODE_006_FILE_NOT_FOUND
            } else {
                OutcomeCode.CODE_005_ROLE_NOT_FOUND
            }
        }
        else {
            jsonPatch.setLength(jsonPatch.length - 2)
            jsonPatch.append("]")
            logger.info { "Deleting PA assignments from the OPA" }
            updateOPADocument(jsonPatch.toString())
        }
    }

    /**
     * Update the RBAC data in the OPA with the
     * [updatedAssignment] and return the outcome code
     */
    fun updatePAAssignment(updatedAssignment: PA): OutcomeCode {

        /**
         * JSON Patch (https://tools.ietf.org/html/rfc6902) is based on the JSON
         * pointer RFC (https://tools.ietf.org/html/rfc6901) in which there is no
         * way to select an element from an array by some property except by index
         *
         * Therefore, to update the assignment in the OPA document policy, we
         * have to download the whole OPA document to find the right indexes.
         * Only then, we can apply the JSON patch.
         *
         * TODO A possible revision to the JSON-Patch format is being discussed (last update Nov 2019),
         * which may support value-based array operations. Check https://github.com/json-patch/json-patch2
         * and especially https://github.com/json-patch/json-patch2/issues/18
         */

        val storageOPADocument = getOPADocument()
        if (storageOPADocument.code != OutcomeCode.CODE_000_SUCCESS) {
            return storageOPADocument.code
        }
        val opaDocument = storageOPADocument.opaDocument
        val paAssignments = opaDocument!!.result!!.pa
        val roleName = updatedAssignment.roleName
        val rolePAAssignments = paAssignments[roleName]

        val jsonPatch = StringBuilder("[")
        rolePAAssignments?.forEachIndexed { index, it ->
            if (it.fileName == updatedAssignment.fileName) {
                jsonPatch
                    .append("{\"op\": \"replace\", \"path\": \"/")
                    .append(PA_KEY)
                    .append("/")
                    .append(roleName)
                    .append("/")
                    .append(index)
                    .append("/permission\",\"value\": \"")
                    .append(updatedAssignment.permission.toString())
                    .append("\"}, ")
                return@forEachIndexed
            }
        }

        /** If no assignment has been found, return the error code */
        return if (jsonPatch.length == 1) {
            logger.warn { "No PA assignments has been found" }
            OutcomeCode.CODE_041_PA_ASSIGNMENTS_NOT_FOUND
        }
        else {
            jsonPatch.setLength(jsonPatch.length - 2)
            jsonPatch.append("]")
            logger.info { "Updating PA assignment in the OPA" }
            updateOPADocument(jsonPatch.toString())
        }
    }


    /** Get the OPA RBAC document from the OPA */
    fun getOPADocument(): StorageOPADocument {

        // TODO better handle exceptions and refused connections
        var storageOPADocument: StorageOPADocument
        runBlocking {
            val opaURL = "${API.HTTP}$opaBaseAPI${API.OPA_RBAC_DATA}"
            logger.info { "Getting the OPA data sending a GET request to $opaURL" }
            val opaResponse = client!!.get<HttpResponse>(opaURL)
            logger.debug { "Received response from the OPA" }
            storageOPADocument = if (opaResponse.status != HttpStatusCode.OK) {
                logger.warn { "Received error code from the OPA (status: ${opaResponse.status})" }
                StorageOPADocument(OutcomeCode.CODE_030_OPA_DOCUMENT_DOWNLOAD)
            } else {
                val opaDocumentString = opaResponse.readText()
                logger.debug { "The current OPA data is $opaDocumentString" }
                StorageOPADocument(opaDocument = Json.decodeFromString<OPADocument>(opaDocumentString))
            }
        }
        return storageOPADocument
    }


    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0.
     *
     * In this implementation, create an HTTP client and get the current
     * OPA document, if present
     */
    fun lock(): OutcomeCode {
        return if (locks == 0) {
            logger.info { "Locking the status of the OPA document" }
            client = HttpClient(CIO) {
                expectSuccess = false
                // TODO configure this, as for now the client accepts all certificates
            }
            val storageOPADocument = getOPADocument()
            if (storageOPADocument.code != OutcomeCode.CODE_000_SUCCESS) {
                storageOPADocument.code
            }
            else {
                initialOPADocument = storageOPADocument.opaDocument!!.result
                locks++
                OutcomeCode.CODE_000_SUCCESS
            }
        }
        else {
            locks++
            logger.debug { "Increment lock number to $locks" }
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0.
     *
     * In this implementation, restore the previous OPA document and close the client
     */
    fun rollback(): OutcomeCode {
        return when {
            locks == 1 -> {
                logger.info { "Rollback the status of the OPA document" }
                locks--
                var code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS
                runBlocking {
                    val opaURL = "${API.HTTP}${opaBaseAPI}${API.OPA_RBAC_DATA}"
                    logger.info { "Restore the RBAC data sending a PUT request to $opaURL" }
                    val opaResponse = client!!.put<HttpResponse>(opaURL) {
                        contentType(ContentType.Application.Json)
                        body = Json.encodeToString(initialOPADocument)
                    }
                    logger.debug { "Received response from the OPA" }
                    /** Success is 204, see https://www.openpolicyagent.org/docs/latest/rest-api/ */
                    if (opaResponse.status != HttpStatusCode.NoContent) {
                        logger.warn { "Received error code from the OPA (status: ${opaResponse.status})" }
                        code = OutcomeCode.CODE_028_OPA_POLICY_CREATION
                    }
                    client!!.close()
                    client = null
                }
                initialOPADocument = null
                code
            }
            locks > 0 -> {
                logger.debug { "Decrement lock number to ${locks-1}" }
                locks--
                OutcomeCode.CODE_000_SUCCESS
            }
            else -> {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0.
     *
     * In this implementation, just close the client
     */
    fun unlock(): OutcomeCode {
        return when {
            locks == 1 -> {
                logger.info { "Unlocking the status of the OPA document" }
                locks--
                initialOPADocument = null
                client!!.close()
                client = null
                OutcomeCode.CODE_000_SUCCESS
            }
            locks > 0 -> {
                logger.debug { "Decrement lock number to ${locks-1}" }
                locks--
                OutcomeCode.CODE_000_SUCCESS
            }
            else -> {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }


    /**
     * Send a request to update the RBAC document in the OPA
     * according to the [jsonPatch] document (as specified in RFC6902)
     * and return the outcome code
     */
    private fun updateOPADocument(
        jsonPatch: String,
    ): OutcomeCode {

        // TODO better handle exceptions and refused connections
        var code = OutcomeCode.CODE_000_SUCCESS
        runBlocking {
            val opaURL = "${API.HTTP}$opaBaseAPI${API.OPA_RBAC_DATA}"
            logger.info { "Updating the OPA data sending a PATCH request to $opaURL" }
            val opaResponse = client!!.patch<HttpResponse>(opaURL) {
                contentType(ContentType.parse("application/json-patch+json"))
                body = jsonPatch
            }
            logger.debug { "Received response from the OPA" }
            /** Success is 204, see https://www.openpolicyagent.org/docs/latest/rest-api/ */
            if (opaResponse.status != HttpStatusCode.NoContent) {
                val errorMessage = opaResponse.readText() // TODO se vuoi puoi serializzare questo, creando una classe apposita
                logger.warn { "Received error code from the OPA (status: ${opaResponse.status}, error: $errorMessage)" }
                code = OutcomeCode.CODE_029_OPA_DOCUMENT_UPDATE
            }
        }

        return code
    }

    /**
     * Build and return a Json patch request for the given
     * [urORpa] assignment, [elementName], [count] and [assignment]
     */
    private fun createJsonPatchAddOperation(
        urORpa: String,
        elementName: String,
        count: Int,
        assignment: String,
    ): String {
        val jsonPatchBuilder = StringBuilder()
        jsonPatchBuilder
            .append("{ \"op\": \"add\", \"path\": \"/")
            .append(urORpa)
            .append("/")
            .append(elementName)

        logger.debug { "count fpr $elementName ($urORpa) is $count" }

        /** To account for indexing starting from 0 */
        val counter = count -1

        if (counter >= 0) {
            jsonPatchBuilder.append("/").append(counter)
        }

        jsonPatchBuilder.append("\", \"value\":")

        if (counter < 0)
            jsonPatchBuilder.append("[")

        jsonPatchBuilder.append(assignment)

        if (counter < 0) {
            jsonPatchBuilder.append("]")
        }

        jsonPatchBuilder.append("}, ")
        val jsonPatch = jsonPatchBuilder.toString()

        logger.debug { "json patch is $jsonPatch" }
        return jsonPatch
    }
}


/**
 * Describe the document received when querying OPA APIs:
 * - if decision logging was enabled in OPA, [decision_id] contains a string that uniquely identifies the decision/query;
 * - [result] is the base or virtual document referred to in the API request. If the path is undefined, this key will be omitted;
 * - if query metrics were enabled in OPA, [metrics] contains query performance metrics collected during the parse, compile, and evaluation steps
 */
@Serializable
data class OPADocument(
    val decision_id: String,
    val result: OPADocumentRBAC? = null,
    val metrics: HashMap<String, Int>? = null
)



/**
 * Describe the Role-Based Access Control (RBAC) document for the Open Policy Agent (OPA):
 * - [ur] is the list of UR assignments for each user. The key is the name of the user;
 * - [pa] is the list of PA assignments for each role. The key is the name of the role;
 */
@Serializable
data class OPADocumentRBAC(
    val ur: HashMap<String, ArrayList<UR>>,
    val pa: HashMap<String, ArrayList<PA>>,
)



@Serializable
/** An assignment between a [username] and a [roleName] */
data class UR(val username: String, val roleName: String) {
    companion object {
        /** Extract a UR assignment from the [roleTuple] */
        fun extractUR(roleTuple: RoleTuple): UR =
            UR(roleTuple.username, roleTuple.roleName)
    }
}



@Serializable
/** An assignment between a [roleName] and a [fileName] */
data class PA(val roleName: String, val fileName: String, val permission: PermissionType) {
    companion object {
        /** Extract a PA assignment from the [permissionTuple] */
        fun extractPA(permissionTuple: PermissionTuple): PA =
            PA(permissionTuple.roleName, permissionTuple.fileName, permissionTuple.permission, )
    }
}



/** Wrapper for the outcome [code] and a [opaDocument] */
data class StorageOPADocument(
    val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS,
    val opaDocument: OPADocument? = null
)
