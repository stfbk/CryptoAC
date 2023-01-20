package eu.fbk.st.cryptoac.view.content.dashboard

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.custom.table.*
import eu.fbk.st.cryptoac.view.components.materialui.grid
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import mu.KotlinLogging
import react.*
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface RBACCryptoACDashboardProps : RBACDashboardProps

external interface RBACCryptoACDashboardState : RBACDashboardState

/**
 * The RBACCryptoACDashboard React component, consisting of:
 * 1. The table of the users (admin only);
 * 2. The table of the roles (admin only);
 * 3. The table of the resources (admin only);
 * 4. The table of the user-role assignments;
 * 5. The table of the role-resource permissions
 */
class RBACCryptoACDashboard : RBACDashboard<RBACCryptoACDashboardProps, RBACCryptoACDashboardState>() {

    override fun RBuilder.render() {
        s
        styledDiv {
            css {
                marginTop = 10.px
                marginBottom = 10.px
                maxHeight = 500.px
            }

            /** Show the users, roles and resources tables only to the admin */
            if (props.userIsAdmin) {
                grid {
                    attrs {
                        container = true
                        spacing = 1
                    }
                    /** 1. The table of the users (admin only) */
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 4
                        }
                        child(
                            cryptoACTable {
                                attrs {
                                    elements = state.users
                                    tableColumns = userColumns
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
                        )
                    }
                    /** 2. The table of the roles (admin only) */
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 4
                        }
                        child(
                            cryptoACTable {
                                attrs {
                                    elements = state.roles
                                    tableColumns = roleColumns
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
                        )
                    }
                    /** 3. The table of the resources (admin only) */
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 4
                        }
                        child(
                            cryptoACTable {
                                attrs {
                                    elements = state.resources
                                    tableColumns = resourceColumns
                                    title = "Files"
                                    onRefresh = {
                                        MainScope().launch {
                                            val fetchedResources = getResources()
                                            if (fetchedResources != null) {
                                                setState {
                                                    resources = fetchedResources
                                                }
                                            }
                                        }
                                    }
                                    onElementClick = {
                                        MainScope().launch {
                                            val resourceName = it.first()
                                            val permissions = getPermissions(resourceName = resourceName)
                                            if (permissions != null && permissions.isNotEmpty()) {
                                                setState {
                                                    openedTables.add(
                                                        CryptoACTableData(
                                                            elements = permissions,
                                                            columns = permissionColumns,
                                                            title = "Permissions for resource $resourceName",
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
                        )
                    }
                }
            }
            /** Show the user-role assignments and role-resource permissions */
            grid {
                attrs {
                    container = true
                    spacing = 1
                }
                /** 4. The table of the user-role assignments */
                grid {
                    attrs {
                        item = true
                        xs = 12
                        sm = 6
                    }
                    child(
                        cryptoACTable {
                            attrs {
                                elements = state.assignments
                                tableColumns = assignmentColumns
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
                                    props.handleDisplayAlert(OutcomeCode.CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION, CryptoACAlertSeverity.INFO)
                                }
                            }
                        }
                    )
                }
                /** 5. The table of the role-resource permissions */
                grid {
                    attrs {
                        item = true
                        xs = 12
                        sm = 6
                    }
                    child(
                        cryptoACTable {
                            attrs {
                                elements = state.permissions
                                tableColumns = permissionColumns
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
                                    props.handleDisplayAlert(OutcomeCode.CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION, CryptoACAlertSeverity.INFO)
                                }
                            }
                        }
                    )
                }
            }

            getColumnsForTables(state.openedTables.size).forEach {
                grid {
                    attrs {
                        container = true
                        spacing = 1
                    }
                    val numberOfTables = getNumberOfItemsFromSpan(it)
                    for (i in 0 until numberOfTables) {
                        val cryptoACTableData = state.openedTables[i]
                        grid {
                            attrs {
                                item = true
                                xs = it
                                sm = it
                            }
                            child(
                                cryptoACTable {
                                    attrs {
                                        elements = cryptoACTableData.elements
                                        tableColumns = cryptoACTableData.columns
                                        title = cryptoACTableData.title
                                        onClose = {
                                            setState {
                                                openedTables.remove(cryptoACTableData)
                                            }
                                        }
                                    }
                                }
                            )
                        }
                    }
                }
            }
        }
    }

    /**
     * Init by retrieving the lists of users and roles and
     * resources (admin only), assignments and permissions
     */
    override fun RBACCryptoACDashboardState.init() {
        logger.info { "Initializing the state of the RBACCryptoACDashboard component" }
        users = listOf()
        roles = listOf()
        resources = listOf()
        assignments = listOf()
        permissions = listOf()
        openedTables = mutableListOf()

        MainScope().launch {
            var fetchedUsers: List<Array<String>>? = listOf()
            var fetchedRoles: List<Array<String>>? = listOf()
            var fetchedResources: List<Array<String>>? = listOf()
            var fetchedPermissions: List<Array<String>>? = listOf()
            val fetchedAssignments: List<Array<String>>? = getAssignments()
            if (fetchedAssignments != null) {
                fetchedPermissions = getPermissions()
                if (fetchedPermissions != null && props.userIsAdmin) {
                    fetchedUsers = getUsers()
                    if (fetchedUsers != null) {
                        fetchedRoles = getRoles()
                        if (fetchedRoles != null) {
                            fetchedResources = getResources()
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
                if (props.userIsAdmin && fetchedResources != null) {
                    resources = fetchedResources
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
}

fun rbacCryptoACDashboard(handler: RBACCryptoACDashboardProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(RBACCryptoACDashboard::class) {
            this.attrs(handler)
        }
    }!!
}
