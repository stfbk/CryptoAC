package eu.fbk.st.cryptoac.view.content.dashboard

import eu.fbk.st.cryptoac.API.FILES
import eu.fbk.st.cryptoac.API.CRYPTOAC
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.implementation.dm.MQTTMessage
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.custom.table.*
import eu.fbk.st.cryptoac.view.components.materialui.grid
import io.ktor.client.plugins.websocket.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.websocket.*
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.serialization.decodeFromString
import mu.KotlinLogging
import react.*
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface MQTTDashboardProps : RBACDashboardProps {
    var topics: MutableList<String>
}

external interface MQTTDashboardState : RBACDashboardState {
    /** The list of MQTT messages, sorted by topic */
    var mqttMessages: HashMap<String, MutableList<String>>

    /** The Web Socket Secure for communication with CryptoAC */
    var wss: DefaultClientWebSocketSession
}

/**
 * The RBACMQTTDashboard React component, consisting of:
 * 1. The table of the users (admin only);
 * 2. The table of the roles (admin only);
 * 3. The table of the files (admin only);
 * 4. The table of the user-role assignments;
 * 5. The table of the role-file permissions
 */
class MQTTDashboard: RBACDashboard<MQTTDashboardProps, MQTTDashboardState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                marginTop = 10.px
                marginBottom = 10.px
                maxHeight = 500.px
            }

            /** Show the users, roles and files tables only to the admin */
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
                        child(cryptoACTable {
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
                        })
                    }
                    /** 2. The table of the roles (admin only) */
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 4
                        }
                        child(cryptoACTable {
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
                        })
                    }
                    /** 3. The table of the files (admin only) */
                    grid {
                        attrs {
                            item = true
                            xs = 12
                            sm = 4
                        }
                        child(cryptoACTable {
                            attrs {
                                elements = state.files
                                tableColumns = fileColumns
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
                        })
                    }
                }
            }
            /** Show the user-role assignments and role-file permissions */
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
                    child(cryptoACTable {
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
                    })
                }
                /** 5. The table of the role-file permissions */
                grid {
                    attrs {
                        item = true
                        xs = 12
                        sm = 6
                    }
                    child(cryptoACTable {
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
                    })
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
                            child(cryptoACTable {
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
                            })
                        }
                    }
                }
            }

            getColumnsForTables(props.topics.size).forEach {
                grid {
                    attrs {
                        container = true
                        spacing = 1
                    }
                    val numberOfTables = getNumberOfItemsFromSpan(it)
                    for (i in 0 until numberOfTables) {
                        grid {
                            attrs {
                                item = true
                                xs = it
                                sm = it
                            }
                            child(cryptoACTable {
                                val topicName = props.topics[i]
                                val listOfMessages = mutableListOf<Array<String>>()
                                state.mqttMessages[topicName]?.forEach {
                                    listOfMessages.add(arrayOf(it))
                                }
                                attrs {
                                    elements = listOfMessages
                                    tableColumns = mqttMessagesColumns
                                    title = "Topic: $topicName"
                                    onClose = {
                                        setState {
                                            // props.topics.remove(topic)
                                            state.mqttMessages.remove(topicName)
                                        }
                                    }
                                }
                            })
                        }
                    }
                }
            }
        }
    }

    /**
     * Init by retrieving the lists of users, roles and
     * files (admin only), assignments and permissions.
     * Also, create a (secure) web socket to receive
     * MQTT messages from CryptoAC.
     */
    override fun MQTTDashboardState.init() {
        logger.info { "Initializing the state of the RBACMQTTDashboard component" }
        users = listOf()
        roles = listOf()
        files = listOf()
        assignments = listOf()
        permissions = listOf()
        openedTables = mutableListOf()
        mqttMessages = hashMapOf()

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


            /** Create the socket to receive MQTT messages from CryptoAC */
            val path = "$CRYPTOAC${FILES.replace("{Core}", props.coreType.toString())}"
            val tempWSS = props.httpClient.webSocketSession(
                method = HttpMethod.Get,
                host = window.location.hostname,
                port = window.location.port.toInt(),
                path = path,
            ) {
                url("wss", host, port, path)
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
                wss = tempWSS

                props.topics.forEach {
                    mqttMessages[it] = mutableListOf()
                }
            }

            while(true) {
                val serializedMQTTMessage = (state.wss.incoming.receive() as? Frame.Text)!!.readText() // TODO refactor !!
                val mqttMessage = myJson.decodeFromString<MQTTMessage>(serializedMQTTMessage)
                val message = mqttMessage.message
                val topic = mqttMessage.topic
                logger.warn { "RECEIVED MESSAGE $message in topic $topic" }

                setState {
                    mqttMessages.getOrPut(topic) { mutableListOf() }.add(message)
                }
            }
        }
    }
}

fun rbacMQTTDashboard(handler: MQTTDashboardProps.() -> Unit): ReactElement {
    return createElement {
        child(MQTTDashboard::class) {
            this.attrs(handler)
        }
    }!!
}


