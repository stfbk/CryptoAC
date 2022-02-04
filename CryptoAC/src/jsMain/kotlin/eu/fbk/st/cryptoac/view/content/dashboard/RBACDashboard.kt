package eu.fbk.st.cryptoac.view.content.dashboard

import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.elements.ElementType
import eu.fbk.st.cryptoac.core.elements.Role
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple
import eu.fbk.st.cryptoac.core.tuples.RoleTuple
import eu.fbk.st.cryptoac.view.baseURL
import eu.fbk.st.cryptoac.view.components.custom.CryptoACAlertSeverity
import eu.fbk.st.cryptoac.view.components.custom.table.*
import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import react.*

private val logger = KotlinLogging.logger {}

external interface RBACDashboardProps : Props {
    var httpClient: HttpClient
    var coreType: CoreType
    var userIsAdmin: Boolean
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var handleDisplayAlert : (OutcomeCode, CryptoACAlertSeverity) -> Unit
}
external interface RBACDashboardState : State {
    /** The list of users */
    var users: List<Array<String>>

    /** The list of roles */
    var roles: List<Array<String>>

    /** The list of files */
    var files: List<Array<String>>

    /** The list of assignments */
    var assignments: List<Array<String>>

    /** The list of permissions */
    var permissions: List<Array<String>>

    /** The list of tables opened by the user by clicking on table elements */
    var openedTables: MutableList<CryptoACTableData>
}

abstract class RBACDashboard<P : RBACDashboardProps, S : RBACDashboardState> : RComponent<P, S>() {

    /** Get the list of users */
    suspend fun getUsers(): List<Array<String>>? {
        val actualEndpoint = "$baseURL${API.PROXY}${API.USERS.replace("{Core}", props.coreType.toString())}"
        return getElements(actualEndpoint, OutcomeCode.CODE_004_USER_NOT_FOUND, ElementType.USER)
    }

    /** Get the list of roles */
    suspend fun getRoles(): List<Array<String>>? {
        val actualEndpoint = "$baseURL${API.PROXY}${API.ROLES.replace("{Core}", props.coreType.toString())}"
        return getElements(actualEndpoint, OutcomeCode.CODE_005_ROLE_NOT_FOUND, ElementType.ROLE)
    }

    /** Get the list of files */
    suspend fun getFiles(): List<Array<String>>? {
        val actualEndpoint = "$baseURL${API.PROXY}${API.FILES.replace("{Core}", props.coreType.toString())}"
        return getElements(actualEndpoint, OutcomeCode.CODE_006_FILE_NOT_FOUND, ElementType.FILE)
    }

    /** Get the list of assignments filtering, if given, by [username] and [roleName] */
    suspend fun getAssignments(username: String? = null, roleName: String? = null) : List<Array<String>>? {
        val actualEndpoint =
            "$baseURL${API.PROXY}${API.ASSIGNMENTS.replace("{Core}", props.coreType.toString())}?" +
                    if (username != null) "${SERVER.USERNAME}=$username" else "" +
                            if (roleName != null) "${SERVER.ROLE_NAME}=$roleName" else ""
        return getElements(actualEndpoint, OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND, ElementType.ASSIGNMENT)
    }

    /** Get the list of permissions filtering, if given, by [roleName] and [fileName] */
    suspend fun getPermissions(roleName: String? = null, fileName: String? = null): List<Array<String>>? {
        val actualEndpoint = "$baseURL${API.PROXY}${API.PERMISSIONS.replace("{Core}", props.coreType.toString())}?" +
                if (roleName != null) "${SERVER.ROLE_NAME}=$roleName" else "" +
                        if (fileName != null) "${SERVER.FILE_NAME}=$fileName" else ""
        return getElements(actualEndpoint, OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND, ElementType.PERMISSION)
    }

    // TODO refactor this function
    /**
     * Get the list of elements of the given [type] at the specified [endpoint],
     * comparing the [endpoint] response with the provided [errorCode] for when
     * no elements are available
     */
    suspend fun getElements(endpoint: String, errorCode: OutcomeCode, type: ElementType): List<Array<String>>? {
        logger.info { "Getting the list of elements of type $type" }

        logger.info { "Sending get request to $endpoint" }
        props.handleChangeBackdropIsOpen(true)
        val httpResponse: HttpResponse? = try {
            props.httpClient.get(endpoint)
        } catch (e: Error) {
            if (e.message == "Fail to fetch") {
                logger.error { "Proxy is unreachable" }
                props.handleDisplayAlert(OutcomeCode.CODE_045_PROXY_CONNECTION_TIMEOUT, CryptoACAlertSeverity.ERROR)
            } else {
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_047_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
            null
        } finally {
            /** Close the backdrop loading screen */
            props.handleChangeBackdropIsOpen(false)
        }
        return if (httpResponse != null) {
            if (httpResponse.status == HttpStatusCode.OK) {
                when (type) {
                    ElementType.USER ->  {
                        val users: HashSet<User> = myJson.decodeFromString(httpResponse.readText())
                        users.map { it.toArray() }
                    }
                    ElementType.ROLE -> {
                        val roles: HashSet<Role> = myJson.decodeFromString(httpResponse.readText())
                        roles.map { it.toArray() }
                    }
                    ElementType.FILE -> {
                        val files: HashSet<eu.fbk.st.cryptoac.core.elements.File> = myJson.decodeFromString(httpResponse.readText())
                        files.map { it.toArray() }
                    }
                    ElementType.ASSIGNMENT -> {
                        val assignments: HashSet<RoleTuple> = myJson.decodeFromString(httpResponse.readText())
                        assignments.map { it.toArray() }
                    }
                    ElementType.PERMISSION -> {
                        val permissions: HashSet<PermissionTuple> = myJson.decodeFromString(httpResponse.readText())
                        permissions.map { it.toArray() }
                    }
                }
            } else {
                val text = httpResponse.readText()
                val outcomeCode: OutcomeCode = myJson.decodeFromString(text)
                if (outcomeCode == errorCode) {
                    logger.info { "Got 0 elements of type $type" }
                    listOf()
                } else {
                    logger.warn { "Error while getting elements of type $type: $outcomeCode" }
                    props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
                    null
                }
            }
        } else {
            null
        }
    }

    /**
     * Compute the list of columns spans (in the 12-columns grid reference system)
     * depending on the given [numberOfTables]. For instance, the input 8 returns
     * the list <4, 4, 6> (i.e., in the first row three tables spanning 4 columns,
     * in the second row three tables spanning 4 columns and in the last row two
     * tables spanning 6 columns)
     */
    fun getColumnsForTables(numberOfTables: Int): MutableList<Int> {
        var tablesLeft = numberOfTables
        val columnsForRow = mutableListOf<Int>()
        while(tablesLeft > 0) {
            tablesLeft = when (tablesLeft) {
                1 ->  {
                    columnsForRow.add(12)
                    0
                }
                2 -> {
                    columnsForRow.add(6)
                    0
                }
                else -> {
                    columnsForRow.add(4)
                    tablesLeft - 3
                }
            }
        }
        return columnsForRow
    }

    /** Get the number of items in a row depending on the column span */
    fun getNumberOfItemsFromSpan(span: Int) = when (span) {
        12 -> 1
        6 -> 2
        else -> 3
    }
}
