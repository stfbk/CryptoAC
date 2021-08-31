package eu.fbk.st.cryptoac.ui.content

import eu.fbk.st.cryptoac.API.ASSIGNMENTS
import eu.fbk.st.cryptoac.API.FILES
import eu.fbk.st.cryptoac.API.PERMISSIONS
import eu.fbk.st.cryptoac.API.PROXY
import eu.fbk.st.cryptoac.API.ROLES
import eu.fbk.st.cryptoac.API.USERS
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.elements.ElementType
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.core.elements.Role
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple
import eu.fbk.st.cryptoac.core.tuples.RoleTuple
import eu.fbk.st.cryptoac.ui.baseURL
import eu.fbk.st.cryptoac.ui.components.custom.*
import eu.fbk.st.cryptoac.ui.components.custom.table.*
import eu.fbk.st.cryptoac.ui.components.materialui.core.*
import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import react.*
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface CloudContentProps : RProps {
    var httpClient: HttpClient
    var userIsAdmin: Boolean
    var coreType: CoreType
    var handleChangeBackdropOpen: (Boolean) -> Unit
    var handleDisplayAlert : (OutcomeCode, CryptoACAlertSeverity) -> Unit
}

external interface CloudContentState : RState {
    /** The list of users. */
    var users: List<Array<String>>

    /** The list of roles. */
    var roles: List<Array<String>>

    /** The list of files. */
    var files: List<Array<String>>

    /** The list of assignments. */
    var assignments: List<Array<String>>

    /** The list of permissions. */
    var permissions: List<Array<String>>

    /** The list of tables opened by the user by clicking on table elements. */
    var openedTables: MutableList<CryptoACTableData>
}

/**
 * The CloudContent React component, consisting of:
 * 1. The table of the users (admin only);
 * 2. The table of the roles (admin only);
 * 3. The table of the files (admin only);
 * 4. The table of the user-role assignments;
 * 5. The table of the role-file permissions.
 */
class CloudContent: RComponent<CloudContentProps, CloudContentState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                marginTop = 10.px
                marginBottom = 10.px
                maxHeight = 500.px
            }

            /** Show the users, roles and files tables only to the admin. */
            if (props.userIsAdmin) {
                grid {
                    attrs {
                        container = true
                        spacing = 1
                    }
                    /** 1. The table of the users (admin only). */
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 4
                          }
                        cryptoACTable {
                            attrs {
                                elements = state.users
                                columns = userColumns
                                title = "Users"
                                onRefresh = {
                                    MainScope().launch {
                                        val fetchedUsers = getUsers()
                                        if (fetchedUsers != null) {
                                            setState {
                                                users = fetchedUsers
                                            }
                                        }
                                    }
                                }
                                onElementClick = {
                                    MainScope().launch {
                                        val username = it.first()
                                        val result = getAssignments(username = username)
                                        if (result != null && result.isNotEmpty()) {
                                            setState {
                                                openedTables.add(
                                                    CryptoACTableData(
                                                        elements = result,
                                                        columns = assignmentColumns,
                                                        title = "Assignments of user $username",
                                                    )
                                                )
                                            }
                                        } else {
                                            props.handleDisplayAlert(OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND, CryptoACAlertSeverity.INFO)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    /** 2. The table of the roles (admin only). */
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 4
                        }
                        cryptoACTable {
                            attrs {
                                elements = state.roles
                                columns = roleColumns
                                title = "Roles"
                                onRefresh = {
                                    MainScope().launch {
                                        val fetchedRoles = getRoles()
                                        if (fetchedRoles != null) {
                                            setState {
                                                roles = fetchedRoles
                                            }
                                        }
                                    }
                                }
                                onElementClick = {
                                    MainScope().launch {
                                        val roleName = it.first()
                                        val assignments = getAssignments(roleName = roleName)
                                        val permissions = getPermissions(roleName = roleName)
                                        if (assignments != null && assignments.isNotEmpty()) {
                                            setState {
                                                openedTables.add(
                                                    CryptoACTableData(
                                                        elements = assignments,
                                                        columns = assignmentColumns,
                                                        title = "Assignments of role $roleName",
                                                    )
                                                )
                                            }
                                        } else {
                                            props.handleDisplayAlert(OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND, CryptoACAlertSeverity.INFO)
                                        }
                                        if (permissions != null && permissions.isNotEmpty()) {
                                            setState {
                                                openedTables.add(
                                                    CryptoACTableData(
                                                        elements = permissions,
                                                        columns = permissionColumns,
                                                        title = "Permissions of role $roleName",
                                                    )
                                                )
                                            }
                                        } else {
                                            props.handleDisplayAlert(OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND, CryptoACAlertSeverity.INFO)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    /** 3. The table of the files (admin only). */
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 4
                        }
                        cryptoACTable {
                            attrs {
                                elements = state.files
                                columns = fileColumns
                                title = "Files"
                                onRefresh = {
                                    MainScope().launch {
                                        val fetchedFiles = getFiles()
                                        if (fetchedFiles != null) {
                                            setState {
                                                files = fetchedFiles
                                            }
                                        }
                                    }
                                }
                                onElementClick = {
                                    MainScope().launch {
                                        val fileName = it.first()
                                        val permissions = getPermissions(fileName = fileName)
                                        if (permissions != null && permissions.isNotEmpty()) {
                                            setState {
                                                openedTables.add(
                                                    CryptoACTableData(
                                                        elements = permissions,
                                                        columns = permissionColumns,
                                                        title = "Permissions for file $fileName",
                                                    )
                                                )
                                            }
                                        } else {
                                            props.handleDisplayAlert(OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND, CryptoACAlertSeverity.INFO)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            /** Show the user-role assignments and role-file permissions. */
            grid {
                attrs {
                    container = true
                    spacing = 1
                }
                /** 4. The table of the user-role assignments. */
                grid {
                    attrs {
                        item = true
                        xs = 12
                        sm = 6
                    }
                    cryptoACTable {
                        attrs {
                            elements = state.assignments
                            columns = assignmentColumns
                            title = "User-Role Assignments"
                            onRefresh = {
                                MainScope().launch {
                                    val fetchedAssignments = getAssignments()
                                    if (fetchedAssignments != null) {
                                        setState {
                                            assignments = fetchedAssignments
                                        }
                                    }
                                }
                            }
                            onElementClick = {
                                props.handleDisplayAlert(OutcomeCode.CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION, CryptoACAlertSeverity.INFO)
                            }
                        }
                    }
                }
                /** 5. The table of the role-file permissions. */
                grid {
                    attrs {
                        item = true
                        xs = 12
                        sm = 6
                    }
                    cryptoACTable {
                        attrs {
                            elements = state.permissions
                            columns = permissionColumns
                            title = "Role-File Permissions"
                            onRefresh = {
                                MainScope().launch {
                                    val fetchedPermissions = getPermissions()
                                    if (fetchedPermissions != null) {
                                        setState {
                                            permissions = fetchedPermissions
                                        }
                                    }
                                }
                            }
                            onElementClick = {
                                props.handleDisplayAlert(OutcomeCode.CODE_052_FUNCTIONALITY_UNDER_CONSTRUCTION, CryptoACAlertSeverity.INFO)
                            }
                        }
                    }
                }
            }

            state.openedTables.forEach { cryptoACTableData ->
                // TODO put tables in row, if possible, of max 3 tables
                // TODO todo the CLOSE button to close the table
                grid {
                    attrs {
                        container = true
                        spacing = 1
                    }
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 12
                        }
                        cryptoACTable {
                            attrs {
                                elements = cryptoACTableData.elements
                                columns = cryptoACTableData.columns
                                title = cryptoACTableData.title
                                onClose = {
                                    setState {
                                        openedTables.remove(cryptoACTableData)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /** Init by retrieving the lists of users and roles and files (admin only), assignments and permissions. */
    override fun CloudContentState.init() {
        logger.info { "Initializing the state of the CloudContent component" }
        users = listOf()
        roles = listOf()
        files = listOf()
        assignments = listOf()
        permissions = listOf()
        openedTables = mutableListOf()


        MainScope().launch {
            var fetchedUsers: List<Array<String>>? = listOf()
            var fetchedRoles: List<Array<String>>? = listOf()
            var fetchedFiles: List<Array<String>>? = listOf()
            var fetchedPermissions: List<Array<String>>? = listOf()
            val fetchedAssignments: List<Array<String>>? = getAssignments()
            if (fetchedAssignments != null) {
                fetchedPermissions = getPermissions()
                if (fetchedPermissions != null && props.userIsAdmin) {
                    fetchedUsers = getUsers()
                    if (fetchedUsers != null) {
                        fetchedRoles = getRoles()
                        if (fetchedRoles != null) {
                            fetchedFiles = getFiles()
                        }
                    }
                }
            }
            setState {
                if (props.userIsAdmin && fetchedUsers != null) {
                    users = fetchedUsers
                }
                if (props.userIsAdmin && fetchedRoles != null) {
                    roles = fetchedRoles
                }
                if (props.userIsAdmin && fetchedFiles != null) {
                    files = fetchedFiles
                }
                if (fetchedAssignments != null) {
                    assignments = fetchedAssignments
                }
                if (fetchedPermissions != null) {
                    permissions = fetchedPermissions
                }
            }
        }
    }

    /** Get the list of users. */
    private suspend fun getUsers(): List<Array<String>>? {
        val actualEndpoint = "$baseURL$PROXY${USERS.replace("{Core}", props.coreType.toString())}"
        return getElements(actualEndpoint, OutcomeCode.CODE_004_USER_NOT_FOUND, ElementType.USER)
    }

    /** Get the list of roles. */
    private suspend fun getRoles(): List<Array<String>>? {
        val actualEndpoint = "$baseURL$PROXY${ROLES.replace("{Core}", props.coreType.toString())}"
        return getElements(actualEndpoint, OutcomeCode.CODE_005_ROLE_NOT_FOUND, ElementType.ROLE)
    }

    /** Get the list of files. */
    private suspend fun getFiles(): List<Array<String>>? {
        val actualEndpoint = "$baseURL$PROXY${FILES.replace("{Core}", props.coreType.toString())}"
        return getElements(actualEndpoint, OutcomeCode.CODE_006_FILE_NOT_FOUND, ElementType.FILE)
    }



    /** Get the list of assignments filtering, if given, by [username] and [roleName]. */
    private suspend fun getAssignments(username: String? = null, roleName: String? = null) : List<Array<String>>? {
        val actualEndpoint =
            "$baseURL$PROXY${ASSIGNMENTS.replace("{Core}", props.coreType.toString())}?" +
                if (username != null) "${SERVER.USERNAME}=$username" else "" +
                if (roleName != null) "${SERVER.ROLE_NAME}=$roleName" else ""
        return getElements(actualEndpoint, OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND, ElementType.ASSIGNMENT)
    }

    /** Get the list of permissions filtering, if given, by [roleName] and [fileName]. */
    private suspend fun getPermissions(roleName: String? = null, fileName: String? = null): List<Array<String>>? {
        val actualEndpoint = "$baseURL$PROXY${PERMISSIONS.replace("{Core}", props.coreType.toString())}?" +
                if (roleName != null) "${SERVER.ROLE_NAME}=$roleName" else "" +
                        if (fileName != null) "${SERVER.FILE_NAME}=$fileName" else ""
        return getElements(actualEndpoint, OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND, ElementType.PERMISSION)
    }


    // TODO refactor this function
    /**
     * Get the list of elements of the given [type] at the specified [endpoint],
     * using the provided [errorCode] if no elements are available.
     */
    private suspend fun getElements(endpoint: String, errorCode: OutcomeCode, type: ElementType): List<Array<String>>? {
        logger.info { "Getting the list of elements of type $type" }

        logger.info { "Sending get request to $endpoint" }
        props.handleChangeBackdropOpen(true)
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
            /** Close the backdrop loading screen. */
            props.handleChangeBackdropOpen(false)
        }
        return if (httpResponse != null) {
            if (httpResponse.status == HttpStatusCode.OK) {
                when (type) {
                    ElementType.USER ->  {
                        val users: HashSet<User> = Json.decodeFromString(httpResponse.readText())
                        users.map { it.toArray() }
                    }
                    ElementType.ROLE -> {
                        val roles: HashSet<Role> = Json.decodeFromString(httpResponse.readText())
                        roles.map { it.toArray() }
                    }
                    ElementType.FILE -> {
                        val files: HashSet<File> = Json.decodeFromString(httpResponse.readText())
                        files.map { it.toArray() }
                    }
                    ElementType.ASSIGNMENT -> {
                        val assignments: HashSet<RoleTuple> = Json.decodeFromString(httpResponse.readText())
                        assignments.map { it.toArray() }
                    }
                    ElementType.PERMISSION -> {
                        val permissions: HashSet<PermissionTuple> = Json.decodeFromString(httpResponse.readText())
                        permissions.map { it.toArray() }
                    }
                }
            } else {
                val text = httpResponse.readText()
                val outcomeCode: OutcomeCode = Json.decodeFromString(text)
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
}

fun RBuilder.cloudContent(handler: CloudContentProps.() -> Unit): ReactElement {
    return child(CloudContent::class) {
        this.attrs(handler)
    }
}