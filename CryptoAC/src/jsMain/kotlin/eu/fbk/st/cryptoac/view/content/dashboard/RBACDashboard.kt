package eu.fbk.st.cryptoac.view.content.dashboard

import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.model.unit.Role
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.model.RBACElementType
import eu.fbk.st.cryptoac.model.tuple.PermissionTuple
import eu.fbk.st.cryptoac.model.tuple.RoleTuple
import eu.fbk.st.cryptoac.view.baseURL
import eu.fbk.st.cryptoac.view.components.custom.CryptoACAlertSeverity
import eu.fbk.st.cryptoac.view.components.custom.table.*
import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.serialization.decodeFromString
import mu.KotlinLogging
import react.*

private val logger = KotlinLogging.logger {}

external interface RBACDashboardProps : Props {
    var httpClient: HttpClient
    var coreType: CoreType
    var userIsAdmin: Boolean
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var handleDisplayAlert: (OutcomeCode, CryptoACAlertSeverity) -> Unit
}
external interface RBACDashboardState : State {
    /** The list of users */
    var users: List<Array<String>>

    /** The list of roles */
    var roles: List<Array<String>>

    /** The list of resources */
    var resources: List<Array<String>>

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
        val actualEndpoint = "$baseURL${API.CRYPTOAC}${API.USERS.replace("{Core}", props.coreType.toString())}"
        return getElements(actualEndpoint, OutcomeCode.CODE_004_USER_NOT_FOUND, RBACElementType.USER)
    }

    /** Get the list of roles */
    suspend fun getRoles(): List<Array<String>>? {
        val actualEndpoint = "$baseURL${API.CRYPTOAC}${API.ROLES.replace("{Core}", props.coreType.toString())}"
        return getElements(actualEndpoint, OutcomeCode.CODE_005_ROLE_NOT_FOUND, RBACElementType.ROLE)
    }

    /** Get the list of resources */
    suspend fun getResources(): List<Array<String>>? {
        val actualEndpoint = "$baseURL${API.CRYPTOAC}${API.RESOURCES.replace("{Core}", props.coreType.toString())}"
        return getElements(actualEndpoint, OutcomeCode.CODE_006_RESOURCE_NOT_FOUND, RBACElementType.RESOURCE)
    }

    /** Get the list of assignments filtering, if given, by [username] and [roleName] */
    suspend fun getAssignments(username: String? = null, roleName: String? = null): List<Array<String>>? {
        val actualEndpoint =
            "$baseURL${API.CRYPTOAC}${API.ASSIGNMENTS.replace("{Core}", props.coreType.toString())}?" +
            (if (username != null) "${SERVER.USERNAME}=$username" else "") +
            if (roleName != null) "${SERVER.ROLE_NAME}=$roleName" else ""
        return getElements(actualEndpoint, OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND, RBACElementType.ROLETUPLE)
    }

    /** Get the list of permissions filtering, if given, by [roleName] and [resourceName] */
    suspend fun getPermissions(roleName: String? = null, resourceName: String? = null): List<Array<String>>? {
        val actualEndpoint =
            "$baseURL${API.CRYPTOAC}${API.PERMISSIONS.replace("{Core}", props.coreType.toString())}?" +
            (if (roleName != null) "${SERVER.ROLE_NAME}=$roleName" else "") +
            if (resourceName != null) "${SERVER.RESOURCE_NAME}=$resourceName" else ""
        return getElements(actualEndpoint, OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND, RBACElementType.PERMISSIONTUPLE)
    }

    // TODO refactor this function
    /**
     * Get the list of elements of the given [type] at the specified [endpoint],
     * comparing the [endpoint] response with the provided [errorCode] for when
     * no elements are available
     */
    private suspend fun getElements(endpoint: String, errorCode: OutcomeCode, type: RBACElementType): List<Array<String>>? {
        logger.info { "Getting the list of elements of type $type" }

        logger.info { "Sending get request to $endpoint" }
        props.handleChangeBackdropIsOpen(true)
        val httpResponse: HttpResponse? = try {
            props.httpClient.get {
                url(endpoint)
            }
        } catch (e: Error) {
            if (e.message == "Fail to fetch") {
                logger.error { "CryptoAC is unreachable" }
                props.handleDisplayAlert(OutcomeCode.CODE_046_CRYPTOAC_CONNECTION_TIMEOUT, CryptoACAlertSeverity.ERROR)
            } else {
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
            null
        } finally {
            /** Close the backdrop loading screen */
            props.handleChangeBackdropIsOpen(false)
        }
        return if (httpResponse != null) {
            if (httpResponse.status == HttpStatusCode.OK) {
                when (type) {
                    RBACElementType.USER -> {
                        val users: HashSet<User> = myJson.decodeFromString(httpResponse.bodyAsText())
                        users.map { it.toArray() }
                    }
                    RBACElementType.ROLE -> {
                        val roles: HashSet<Role> = myJson.decodeFromString(httpResponse.bodyAsText())
                        roles.map { it.toArray() }
                    }
                    RBACElementType.RESOURCE -> {
                        val resources: HashSet<eu.fbk.st.cryptoac.model.unit.Resource> = myJson.decodeFromString(httpResponse.bodyAsText())
                        resources.map { it.toArray() }
                    }
                    RBACElementType.ROLETUPLE -> {
                        val assignments: HashSet<RoleTuple> = myJson.decodeFromString(httpResponse.bodyAsText())
                        assignments.map { it.toArray() }
                    }
                    RBACElementType.PERMISSIONTUPLE -> {
                        val permissions: HashSet<PermissionTuple> = myJson.decodeFromString(httpResponse.bodyAsText())
                        permissions.map { it.toArray() }
                    }
                }
            } else {
                val text = httpResponse.bodyAsText()
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
        while (tablesLeft > 0) {
            tablesLeft = when (tablesLeft) {
                1 -> {
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
