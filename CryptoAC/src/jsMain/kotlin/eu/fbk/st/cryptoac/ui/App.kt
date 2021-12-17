package eu.fbk.st.cryptoac.ui

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.ui.components.custom.CryptoACAlertSeverity
import eu.fbk.st.cryptoac.ui.components.custom.cryptoACAlert
import eu.fbk.st.cryptoac.ui.components.materialui.core.backdrop
import eu.fbk.st.cryptoac.ui.components.materialui.core.circularProgress
import eu.fbk.st.cryptoac.ui.components.materialui.core.container
import eu.fbk.st.cryptoac.ui.content.content
import eu.fbk.st.cryptoac.ui.content.login
import eu.fbk.st.cryptoac.ui.sidebar.sidebar
import eu.fbk.st.cryptoac.ui.content.tradeoffboard.tradeOffBoard
import io.ktor.client.*
import io.ktor.client.features.cookies.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.features.websocket.*
import kotlinx.css.*
import mu.KotlinLogging
import react.*
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

/**
 * State should only ever be modified from within
 * the "setState" lambda or in the "init" function
 */
external interface AppState : State {
    /** Whether the sidebar is collapsed */
    var sidebarIsCollapsed: Boolean

    /** Whether the user is logged-in */
    var userIsLogged: Boolean

    /** Whether the user has a profile */
    var userHasProfile: Boolean

    /** The HTTPS/WSS client to invoke the APIs of the proxy */
    var httpClient: HttpClient

    /** The core type, i.e., the chosen (implementation of the) CAC scheme */
    var coreType: CoreType

    /** Whether the currently logged user (if any) is an administrator */
    var userIsAdmin: Boolean

    /** The name of the user, if logged-in, null otherwise */
    var username: String?

    /** Whether the backdrop (i.e., the loading screen) is open */
    var backdropIsOpen: Boolean

    /** Message of the alert component */
    var alertMessage: String

    /** Severity of the alert component */
    var alertSeverity: CryptoACAlertSeverity

    /** Whether the alert component is open */
    var alertIsOpen: Boolean

    /** Additional tables to show in the content (e.g., for MQTT topics) */
    var tables: MutableList<String>

    /** Whether to show or not the TradeOffBoard component */
    var showTradeOffBoard: Boolean
}

/**
 * The App React component, consisting of:
 * 1. The backdrop component (loading overlay);
 * 2. The CryptoAC alert component (for alerts to the user);
 * 3. The main container for both the content (3.1) and the sidebar (3.2)
 */
@JsExport
class App : RComponent<Props, AppState>() {

    override fun RBuilder.render() {

        /** 1. The backdrop component is a dimmed layer with circular progress loading */
        styledDiv {
            css {
                zIndex = 10
                position = Position.relative
            }
            backdrop {
                attrs.open = state.backdropIsOpen
                circularProgress { }
            }
        }

        /** 2. The CryptoAC alert component for displaying alerts to the user */
        child(cryptoACAlert {
            severity = state.alertSeverity
            message = state.alertMessage
            open = state.alertIsOpen
            handleClose = { setState { alertIsOpen = false } }
        })

        /** 3. The container for both the content and the sidebar */
        styledDiv {
            css {
                display = Display.flex
                position = Position.relative
                height = 100.pct
            }

            /** 3.1 First, the content */
            styledDiv {
                css {
                    marginLeft = if (state.sidebarIsCollapsed) { 80.px } else { 300.px }
                    width = 100.pct
                    height = 100.pct
                }
                container {

                    /** Show the TradeOffBoard, if requested */
                    if (state.showTradeOffBoard) {
                        child(tradeOffBoard { })
                    }
                    /** Otherwise, show either the login form (if the user is not logged) or the content */
                    else {
                        if (!state.userIsLogged) {
                            child(login {
                                handleChangeBackdropIsOpen = { backdropIsOpen: Boolean -> changeBackdropIsOpen(backdropIsOpen) }
                                handleChangeUserIsLogged = { userIsLogged: Boolean -> changeUserIsLogged(userIsLogged) }
                                handleChangeUsername = { username: String? -> changeUsername(username) }
                                handleDisplayAlert = { code: OutcomeCode, severity: CryptoACAlertSeverity -> displayAlert(code, severity) }
                                httpClient = state.httpClient
                                coreType = state.coreType
                            })
                        } else {
                            child(content {
                                handleChangeUserHasProfile = { userHasProfile: Boolean -> changeUserHasProfile(userHasProfile) }
                                handleChangeBackdropIsOpen = { backdropIsOpen: Boolean -> changeBackdropIsOpen(backdropIsOpen) }
                                handleChangeUserIsLogged = { userIsLogged: Boolean -> changeUserIsLogged(userIsLogged) }
                                handleChangeUserIsAdmin = { userIsAdmin: Boolean -> changeUserIsAdmin(userIsAdmin) }
                                handleChangeUsername = { username: String? -> changeUsername(username) }
                                handleDisplayAlert = { code: OutcomeCode, severity: CryptoACAlertSeverity -> displayAlert(code, severity) }
                                userHasProfile = state.userHasProfile
                                userIsLogged = state.userIsLogged
                                userIsAdmin = state.userIsAdmin
                                httpClient = state.httpClient
                                coreType = state.coreType
                                username = state.username
                                tables = state.tables
                            })
                        }
                    }
                }
            }

            /** 3.2. Then, the sidebar (rendered after the content to overlay it) */
            styledDiv {
                css {
                    position = Position.fixed
                    height = 100.pct
                }
                child(sidebar {
                    handleToggleShowTradeOffBoard = { toggleShowTradeOffBoard() }
                    handleChangeBackdropIsOpen = { backdropIsOpen: Boolean -> changeBackdropIsOpen(backdropIsOpen) }
                    handleAddTableInContent = { topic: String -> addTableInContent(topic) }
                    handleChangeCoreType = { coreType -> changeCoreType(coreType) }
                    handleToggleSidebar = { toggleSidebarIsCollapsed() }
                    handleDisplayAlert = { code: OutcomeCode, severity: CryptoACAlertSeverity -> displayAlert(code, severity) }
                    sidebarIsCollapsed = state.sidebarIsCollapsed
                    showTradeOffBoard = state.showTradeOffBoard
                    userHasProfile = state.userHasProfile
                    userIsLogged = state.userIsLogged
                    userIsAdmin = state.userIsAdmin
                    httpClient = state.httpClient
                    coreType = state.coreType
                    collapsedWidth = 80.px
                    breakpoint = "md"
                    image = "bg3.jpg"
                    width = 300.px
                })
            }
        }
    }


    /**
     * Init the state with default values. Remember that:
     * - "props" is still undefined here;
     * - you cannot refer to external or
     *   class-local variables which here
     *   are still undefined
     */
    override fun AppState.init() {
        logger.info { "Initializing the state of the App component" }
        coreType = CoreType.RBAC_CLOUD
        sidebarIsCollapsed = false
        showTradeOffBoard = false
        userHasProfile = false
        userIsLogged = false
        backdropIsOpen = false
        userIsAdmin = false
        alertIsOpen = false
        alertMessage = ""
        tables = mutableListOf()
        alertSeverity = CryptoACAlertSeverity.SUCCESS
        httpClient = HttpClient { // TODO check configuration
            expectSuccess = false
            install(JsonFeature) {
                serializer = KotlinxSerializer()
            }
            install(WebSockets)
            install(HttpCookies)
        }
    }

    /** Display the alert component based on the given [code] and [severity] */
    private fun displayAlert(code: OutcomeCode, severity: CryptoACAlertSeverity) {
        logger.info { "Displaying the alert with code $code and severity $severity" }
        setState {
            alertIsOpen = true
            alertMessage = "${code.getMessage()}${" (Code ${code.getNumber()})"}"
            alertSeverity = severity
        }
    }

    /**
     * Add a new table in the content with,
     * as title, the given [tableName]
     */
    private fun addTableInContent(tableName: String) {
        logger.info { "Adding table $tableName to content" }
        setState { tables.add(tableName) }
    }

    /** Toggle the value of the 'sidebarIsCollapsed' state */
    private fun toggleSidebarIsCollapsed() {
        val collapse = !state.sidebarIsCollapsed
        logger.info { "Setting the 'sidebarIsCollapsed' state to $collapse" }
        setState { sidebarIsCollapsed = collapse }
    }

    /** Toggle the value of the 'showTradeOffBoard' state */
    private fun toggleShowTradeOffBoard() {
        val shown = !state.showTradeOffBoard
        logger.info { "Setting the 'showTradeOffBoard' state to $shown" }
        setState { showTradeOffBoard = shown }
    }

    /** Change the value of the 'backdropIsOpen' state to the [newBackdropIsOpen] */
    private fun changeBackdropIsOpen(newBackdropIsOpen: Boolean) {
        logger.info { "Setting the 'backdropIsOpen' state to $newBackdropIsOpen" }
        setState { backdropIsOpen = newBackdropIsOpen }
    }

    /** Change the value of the 'userIsLogged' state to the [newUserIsLogged] */
    private fun changeUserIsLogged(newUserIsLogged: Boolean) {
        logger.info { "Setting the 'userIsLogged' state to $newUserIsLogged" }
        setState { userIsLogged = newUserIsLogged }
    }

    /** Change the value of the 'userHasProfile' state to the [newUserHasProfile] */
    private fun changeUserHasProfile(newUserHasProfile: Boolean) {
        logger.info { "Changing the 'newHasProfile' state to $newUserHasProfile" }
        setState { userHasProfile = newUserHasProfile }
    }

    /** Change the value of the 'username' state to the [newUsername] */
    private fun changeUsername(newUsername: String?) {
        logger.info { "Changing the 'username' state to $newUsername" }
        setState { username = newUsername }
    }

    /** Change the value of the 'userIsAdmin' state to the [newUserIsAdmin] */
    private fun changeUserIsAdmin(newUserIsAdmin: Boolean) {
        logger.info { "Changing the 'userIsAdmin' state to $newUserIsAdmin" }
        setState { userIsAdmin = newUserIsAdmin }
    }

    /** Change the value of the 'coreType' state to the [newCoreType] */
    private fun changeCoreType(newCoreType: CoreType) {
        logger.info { "Changing the 'coreType' state to $newCoreType" }
        setState {
            coreType = newCoreType
            userHasProfile = false
            userIsAdmin = false
            userIsLogged = false
            username = null
        }
    }
}