package eu.fbk.st.cryptoac.ui

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.implementation.ds.DSMQTTMessage
import eu.fbk.st.cryptoac.ui.components.custom.CryptoACAlertSeverity
import eu.fbk.st.cryptoac.ui.components.custom.cryptoACAlert
import eu.fbk.st.cryptoac.ui.components.materialui.core.backdrop
import eu.fbk.st.cryptoac.ui.components.materialui.core.circularProgress
import eu.fbk.st.cryptoac.ui.components.materialui.core.container
import eu.fbk.st.cryptoac.ui.content.content
import eu.fbk.st.cryptoac.ui.content.login.login
import eu.fbk.st.cryptoac.ui.sidebar.proSidebarWrapper
import io.ktor.client.*
import io.ktor.client.features.cookies.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import kotlinx.css.*
import mu.KotlinLogging
import react.*
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

/**
 * State should only ever be modified from within
 * the "setState" lambda or in the "init" function.
 */
external interface AppState : RState {
    /** Whether the pro sidebar is collapsed. */
    var proSidebarCollapsed: Boolean

    /** Whether the user is logged in the proxy. */
    var userIsLogged: Boolean

    /** Whether the user has a profile to display. */
    var userHasProfile: Boolean

    /** The client for sending HTTPS requests and invoke proxy APIs. */
    var httpClient: HttpClient

    /** The core type, i.e., the chosen (implementation of the) CAC scheme. */
    var coreType: CoreType

    /** Whether the currently logged user (if any) is an administrator. */
    var userIsAdmin: Boolean

    /** The name of the user, if logged in. */
    var username: String?

    /** Whether the backdrop is open. */
    var backdropOpen: Boolean

    /** Message of the alert component. */
    var alertMessage: String

    /** Severity of the alert component. */
    var alertSeverity: CryptoACAlertSeverity

    /** Whether the alert component is open. */
    var alertOpen: Boolean

    /** Messages to show in the content. */
    var contentMessages: HashMap<String, MutableList<DSMQTTMessage>>
}

/**
 * The App React component, consisting of:
 * 1. The backdrop component (loading overlay);
 * 2. The CryptoAC alert component (for messages);
 * 3. The sidebar for actions (e.g., add user, revoke permission);
 * 4. The content to display forms (e.g., login, edit profile) and data (e.g., list of users, permissions).
 */
@JsExport
class App : RComponent<RProps, AppState>() {

    override fun RBuilder.render() {

        /** 1. The backdrop component is a dimmed layer with a circular progress loading. */
        styledDiv {
            css {
                zIndex = 10
                position = Position.relative
            }
            backdrop {
                attrs.open = state.backdropOpen
                circularProgress { }
            }
        }

        /** 2. The CryptoAC alert component for displaying the outcome of user's operations. */
        cryptoACAlert {
            severity = state.alertSeverity
            message = state.alertMessage
            open = state.alertOpen
            handleClose = { setState { alertOpen = false } }
        }

        /** The main container for both the sidebar and the content. */
        styledDiv {
            css {
                display = Display.flex
                position = Position.relative
                height = 100.pct
            }

            /** 3. First, the content. */
            styledDiv {
                css {
                    /** Dynamically change the margins depending on the sidebar state. */
                    marginLeft = if (state.proSidebarCollapsed) { 80.px } else { 300.px }
                    width = 100.pct
                    height = 100.pct
                }
                /** If the user is not logged, render the login form; otherwise, the content. */
                container {
                    if (!state.userIsLogged) {
                        login {
                            handleDisplayAlert = { code: OutcomeCode, severity: CryptoACAlertSeverity -> displayAlert(code, severity) }
                            handleChangeUserIsLogged = { userIsLogged: Boolean -> changeUserIsLogged(userIsLogged) }
                            handleChangeBackdropOpen = { backdropOpen: Boolean -> changeBackdropOpen(backdropOpen) }
                            handleChangeUsername = { username: String? -> changeUsername(username) }
                            httpClient = state.httpClient
                            coreType = state.coreType
                        }
                    } else {
                        content {
                            handleDisplayAlert = { code: OutcomeCode, severity: CryptoACAlertSeverity -> displayAlert(code, severity) }
                            handleChangeUserIsLogged = { userIsLogged: Boolean -> changeUserIsLogged(userIsLogged) }
                            handleChangeBackdropOpen = { backdropOpen: Boolean -> changeBackdropOpen(backdropOpen) }
                            handleChangeUsername = { username: String? -> changeUsername(username) }
                            handleChangeUserHasProfile = { userHasProfile: Boolean -> changeUserHasProfile(userHasProfile) }
                            handleChangeUserIsAdmin = { userIsAdmin: Boolean -> changeUserIsAdmin(userIsAdmin) }
                            userHasProfile = state.userHasProfile
                            userIsLogged = state.userIsLogged
                            userIsAdmin = state.userIsAdmin
                            coreType = state.coreType
                            username = state.username
                            httpClient = state.httpClient
                            contentMessages = state.contentMessages
                        }
                    }
                }
            }

            /** 4. Then, the proSidebar (rendered after the content to overlay it). */
            styledDiv {
                css {
                    /** The position is fixed, so the sidebar does not scroll alongside the content. */
                    position = Position.fixed
                    height = 100.pct
                }
                proSidebarWrapper {
                    handleAddMessagesToDisplayInContent = { file: String, messages: MutableList<DSMQTTMessage> -> setContentMessages(file, messages) }
                    handleDisplayAlert = { code: OutcomeCode, severity: CryptoACAlertSeverity -> displayAlert(code, severity) }
                    handleChangeBackdropOpen = { backdropOpen: Boolean -> changeBackdropOpen(backdropOpen) }
                    handleChangeCoreType = { coreType -> changeCoreType(coreType) }
                    handleToggleSidebar = { toggleProSidebarCollapsed() }
                    proSidebarCollapsed = state.proSidebarCollapsed
                    userHasProfile = state.userHasProfile
                    userIsLogged = state.userIsLogged
                    userIsAdmin = state.userIsAdmin
                    coreType = state.coreType
                    httpClient = state.httpClient
                    collapsedWidth = 80.px
                    width = 300.px
                    image = "bg3.jpg"
                    breakpoint = "md"
                }
            }
        }
    }


    /**
     * Init the state with default values. Note that:
     * - "props" is still undefined here;
     * - you cannot initialize state properties with class local variables
     */
    override fun AppState.init() {
        logger.info { "Initializing the state of the App component" }
        coreType = CoreType.RBAC_CLOUD
        proSidebarCollapsed = false
        userHasProfile = false
        userIsLogged = false
        backdropOpen = false
        userIsAdmin = false
        alertOpen = false
        alertMessage = ""
        contentMessages = hashMapOf()
        alertSeverity = CryptoACAlertSeverity.SUCCESS
        httpClient = HttpClient { // TODO check configuration
            expectSuccess = false
            install(JsonFeature) {
                serializer = KotlinxSerializer()
            }
            install(HttpCookies)
        }
    }

    /** Add new messages to display in the content. */
    private fun setContentMessages(file: String, messages: MutableList<DSMQTTMessage>) {
        setState {
            (contentMessages.getOrPut(file) { mutableListOf() }).addAll(messages)
        }
    }

    /** Display the alert component based on the given [code] and [severity]. */
    private fun displayAlert(code: OutcomeCode, severity: CryptoACAlertSeverity) {
        logger.info { "Displaying the alert with code $code and severity $severity" }
        val splitCode = code.toString().split("_").toMutableList()
        val errorCode = splitCode[1]
        val errorMessage = splitCode.subList(2, splitCode.lastIndex+1).joinToString(separator = " ")
        setState {
            alertOpen = true
            alertMessage = "$errorMessage${" (Code $errorCode)"}"
            alertSeverity = if (code == OutcomeCode.CODE_038_PROFILE_NOT_FOUND) CryptoACAlertSeverity.INFO else severity
        }
    }

    /** Toggle the value of the 'proSidebarCollapsed' state. */
    private fun toggleProSidebarCollapsed() {
        val collapse = !state.proSidebarCollapsed
        logger.info { "Setting the 'proSidebarCollapsed' state to $collapse" }
        setState { proSidebarCollapsed = collapse }
    }

    /** Change the value of the 'backdropOpen' state to the [newBackdropOpen]. */
    private fun changeBackdropOpen(newBackdropOpen: Boolean) {
        logger.info { "Setting the 'backdropOpen' state to $newBackdropOpen" }
        setState { backdropOpen = newBackdropOpen }
    }

    /** Change the value of the 'userIsLogged' state to the [newUserIsLogged]. */
    private fun changeUserIsLogged(newUserIsLogged: Boolean) {
        logger.info { "Setting the 'userIsLogged' state to $newUserIsLogged" }
        setState { userIsLogged = newUserIsLogged }
    }

    /** Change the value of the 'userHasProfile' state to the [newUserHasProfile]. */
    private fun changeUserHasProfile(newUserHasProfile: Boolean) {
        logger.info { "Changing the 'newHasProfile' state to $newUserHasProfile" }
        setState { userHasProfile = newUserHasProfile }
    }

    /** Change the value of the 'username' state to the [newUsername]. */
    private fun changeUsername(newUsername: String?) {
        logger.info { "Changing the 'username' state to $newUsername" }
        setState { username = newUsername }
    }

    /** Change the value of the 'userIsAdmin' state to the [newUserIsAdmin]. */
    private fun changeUserIsAdmin(newUserIsAdmin: Boolean) {
        logger.info { "Changing the 'userIsAdmin' state to $newUserIsAdmin" }
        setState { userIsAdmin = newUserIsAdmin }
    }

    /** Change the value of the 'coreType' state to the [newCoreType]. */
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