package eu.fbk.st.cryptoac.view.content.dashboard

import csstype.px
import emotion.react.css
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.custom.table.*
import eu.fbk.st.cryptoac.view.components.materialui.grid
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import mu.KotlinLogging
import react.*
import react.dom.html.ReactHTML.div

private val logger = KotlinLogging.logger {}

external interface RBACCryptoACDashboardProps : RBACDashboardProps

// TODO doc
data class RBACCryptoACDashboardState(
    /** Whether the component was just mounted */
    var justMountedState: Boolean = true,

    override var usersState: List<Array<String>> = listOf(),
    override var rolesState: List<Array<String>> = listOf(),
    override var resourcesState: List<Array<String>> = listOf(),
    override var assignmentsState: List<Array<String>> = listOf(),
    override var permissionsState: List<Array<String>> = listOf(),
    override var openedTablesState: MutableList<CryptoACTableData> = mutableListOf()
) : RBACDashboardState


/**
 * The RBACCryptoACDashboard React component, consisting of:
 * 1. The table of the users (admin only);
 * 2. The table of the roles (admin only);
 * 3. The table of the resources (admin only);
 * 4. The table of the user-role assignments;
 * 5. The table of the role-resource permissions
 */
val RBACCryptoACDashboard = FC<RBACCryptoACDashboardProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [RBACCryptoACDashboardState] for details
     */
    var state by useState(RBACCryptoACDashboardState())

    MainScope().launch {
        if (state.justMountedState) {
            state.justMountedState = false
            var fetchedUsers: List<Array<String>>? = listOf()
            var fetchedRoles: List<Array<String>>? = listOf()
            var fetchedResources: List<Array<String>>? = listOf()
            var fetchedPermissions: List<Array<String>>? = listOf()
            val fetchedAssignments: List<Array<String>>? = getAssignments(props)
            if (fetchedAssignments != null) {
                fetchedPermissions = getPermissions(props)
                if (fetchedPermissions != null && props.userIsAdminProp) {
                    fetchedUsers = getUsers(props)
                    if (fetchedUsers != null) {
                        fetchedRoles = getRoles(props)
                        if (fetchedRoles != null) {
                            fetchedResources = getResources(props)
                        }
                    }
                }
            }
            if (props.userIsAdminProp && fetchedUsers != null) {
                state.usersState = fetchedUsers
            }
            if (props.userIsAdminProp && fetchedRoles != null) {
                state.rolesState = fetchedRoles
            }
            if (props.userIsAdminProp && fetchedResources != null) {
                state.resourcesState = fetchedResources
            }
            if (fetchedAssignments != null) {
                state.assignmentsState = fetchedAssignments
            }
            if (fetchedPermissions != null) {
                state.permissionsState = fetchedPermissions
            }
            state = state.copy()
        }
    }


    div {
        css {
            marginTop = 10.px
            marginBottom = 10.px
            maxHeight = 500.px
        }

        /** Show the users, roles and resources tables only to the admin */
        if (props.userIsAdminProp) {
            grid {
                container = true
                spacing = 1
                /** 1. The table of the users (admin only) */
                grid {
                    item = true
                    xs = 12
                    sm = 4
                    CryptoACTable {
                        elementsProp = state.usersState
                        tableColumnsProp = userColumns
                        titleProp = "Users"
                        onRefreshProp = {
                            MainScope().launch {
                                val fetchedUsers = getUsers(props = props)
                                if (fetchedUsers != null) {
                                    state = state.copy(usersState = fetchedUsers)
                                }
                            }
                        }
                        onElementClickProp = {
                            MainScope().launch {
                                val username = it.first()
                                val result = getAssignments(props = props, username = username)
                                if (!result.isNullOrEmpty()) {
                                    state.openedTablesState.add(
                                        CryptoACTableData(
                                            elements = result,
                                            columns = assignmentColumns,
                                            title = "Assignments of user $username",
                                        )
                                    )
                                    state = state.copy()
                                } else {
                                    props.handleDisplayAlertProp(OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND, CryptoACAlertSeverity.INFO)
                                }
                            }
                        }
                    }
                }
                /** 2. The table of the roles (admin only) */
                grid {
                    item = true
                    xs = 12
                    sm = 4
                    CryptoACTable {
                        elementsProp = state.rolesState
                        tableColumnsProp = roleColumns
                        titleProp = "Roles"
                        onRefreshProp = {
                            MainScope().launch {
                                val fetchedRoles = getRoles(props = props)
                                if (fetchedRoles != null) {
                                    state = state.copy(rolesState = fetchedRoles)
                                }
                            }
                        }
                        onElementClickProp = {
                            MainScope().launch {
                                val roleName = it.first()
                                val assignments = getAssignments(props = props, roleName = roleName)
                                val permissions = getPermissions(props = props, roleName = roleName)
                                if (assignments != null && assignments.isNotEmpty()) {
                                    state.openedTablesState.add(
                                        CryptoACTableData(
                                            elements = assignments,
                                            columns = assignmentColumns,
                                            title = "Assignments of role $roleName",
                                        )
                                    )
                                    state = state.copy()
                                } else {
                                    props.handleDisplayAlertProp(OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND, CryptoACAlertSeverity.INFO)
                                }
                                if (permissions != null && permissions.isNotEmpty()) {
                                    state.openedTablesState.add(
                                        CryptoACTableData(
                                            elements = permissions,
                                            columns = permissionColumns,
                                            title = "Permissions of role $roleName",
                                        )
                                    )
                                    state = state.copy()
                                } else {
                                    props.handleDisplayAlertProp(OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND, CryptoACAlertSeverity.INFO)
                                }
                            }
                        }
                    }
                }
                /** 3. The table of the resources (admin only) */
                grid {
                    item = true
                    xs = 12
                    sm = 4
                    CryptoACTable {
                        elementsProp = state.resourcesState
                        tableColumnsProp = resourceColumns
                        titleProp = "Files"
                        onRefreshProp = {
                            MainScope().launch {
                                val fetchedResources = getResources(props = props)
                                if (fetchedResources != null) {
                                    state = state.copy(resourcesState = fetchedResources)
                                }
                            }
                        }
                        onElementClickProp = {
                            MainScope().launch {
                                val resourceName = it.first()
                                val permissions = getPermissions(props = props, resourceName = resourceName)
                                if (permissions != null && permissions.isNotEmpty()) {
                                    state.openedTablesState.add(
                                        CryptoACTableData(
                                            elements = permissions,
                                            columns = permissionColumns,
                                            title = "Permissions for resource $resourceName",
                                        )
                                    )
                                    state = state.copy()
                                } else {
                                    props.handleDisplayAlertProp(OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND, CryptoACAlertSeverity.INFO)
                                }
                            }
                        }
                    }
                }
            }
        }
        /** Show the user-role assignments and role-resource permissions */
        grid {
            container = true
            spacing = 1
            /** 4. The table of the user-role assignments */
            grid {
                item = true
                xs = 12
                sm = 6
                CryptoACTable {
                    elementsProp = state.assignmentsState
                    tableColumnsProp = assignmentColumns
                    titleProp = "User-Role Assignments"
                    onRefreshProp = {
                        MainScope().launch {
                            val fetchedAssignments = getAssignments(props = props)
                            if (fetchedAssignments != null) {
                                state = state.copy(assignmentsState = fetchedAssignments)
                            }
                        }
                    }
                    onElementClickProp = {
                        props.handleDisplayAlertProp(OutcomeCode.CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION, CryptoACAlertSeverity.INFO)
                    }
                }
            }
            /** 5. The table of the role-resource permissions */
            grid {
                item = true
                xs = 12
                sm = 6
                CryptoACTable {
                    elementsProp = state.permissionsState
                    tableColumnsProp = permissionColumns
                    titleProp = "Role-File Permissions"
                    onRefreshProp = {
                        MainScope().launch {
                            val fetchedPermissions = getPermissions(props = props)
                            if (fetchedPermissions != null) {
                                state = state.copy(permissionsState = fetchedPermissions)
                            }
                        }
                    }
                    onElementClickProp = {
                        props.handleDisplayAlertProp(OutcomeCode.CODE_050_FUNCTIONALITY_UNDER_CONSTRUCTION, CryptoACAlertSeverity.INFO)
                    }
                }
            }
        }

        getColumnsForTables(state.openedTablesState.size).forEach {
            grid {
                container = true
                spacing = 1
                val numberOfTables = getNumberOfItemsFromSpan(it)
                for (i in 0 until numberOfTables) {
                    val cryptoACTableData = state.openedTablesState[i]
                    grid {
                        item = true
                        xs = it
                        sm = it
                        CryptoACTable {
                            elementsProp = cryptoACTableData.elements
                            tableColumnsProp = cryptoACTableData.columns
                            titleProp = cryptoACTableData.title
                            onCloseProp = {
                                state.openedTablesState.remove(cryptoACTableData)
                                state = state.copy()
                            }
                        }
                    }
                }
            }
        }
    }
}
