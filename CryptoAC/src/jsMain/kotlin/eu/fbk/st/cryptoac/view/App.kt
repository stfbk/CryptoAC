package eu.fbk.st.cryptoac.view

import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.Themes.concreteColor
import eu.fbk.st.cryptoac.Themes.greyColor
import eu.fbk.st.cryptoac.Themes.lightGreyColor
import eu.fbk.st.cryptoac.Themes.wetAsphaltColor
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.implementation.dm.DMType
import eu.fbk.st.cryptoac.implementation.mm.MMType
import eu.fbk.st.cryptoac.implementation.rm.RMType
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.icons.*
import eu.fbk.st.cryptoac.view.components.materialui.*
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebar
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarFooter
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarHeader
import eu.fbk.st.cryptoac.view.content.dashboard.dashboard
import eu.fbk.st.cryptoac.view.content.modules.modules
import eu.fbk.st.cryptoac.view.content.tradeoffboard.*
import eu.fbk.st.cryptoac.view.sidebar.actions
import eu.fbk.st.cryptoac.view.sidebar.empty
import eu.fbk.st.cryptoac.view.sidebar.configuration
import eu.fbk.st.cryptoac.view.sidebar.evaluation
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.features.*
import io.ktor.client.features.cookies.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.features.websocket.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.css.properties.TextDecoration
import mu.KotlinLogging
import react.*
import react.dom.div
import styled.*

private val logger = KotlinLogging.logger {}

/**
 * State should only ever be modified from within
 * the "setState" lambda or in the "init" function
 */
external interface AppState : State {
    /** Whether the user is logged-in */
    var userIsLogged: Boolean

    /** Whether the user has a profile */
    var userHasProfile: Boolean

    /** Whether the currently logged user (if any) is an administrator */
    var userIsAdmin: Boolean

    /** The name of the user, if logged-in, null otherwise */
    var username: String?

    /** The HTTPS/WSS client to interact with the proxy */
    var httpClient: HttpClient

    /** The core type, i.e., the chosen (implementation of the) CAC scheme */
    var coreType: CoreType

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

    /** The current UI to display */
    var uiType: UIType

    /** Whether the sidebar is collapsed */
    var sidebarIsCollapsed: Boolean

    /** The currently selected scenario */
    var scenario: Scenario

    /** The currently selected algorithm */
    var algorithm: Algorithm

    /** The currently selected metric */
    var metric: Metric

    /** The value to display as progress indicator */
    var circularProgressValue: Int

    /** The selected RM type */
    var rmType: RMType

    /** The selected MM type */
    var mmType: MMType

    /** The selected DM type */
    var dmType: DMType

    /**
     * The options for the RM implementation
     * based on the selected core type
     */
    var availableRMImplementations: List<String>

    /**
     * The options for the MM implementation
     * based on the selected core type
     */
    var availableMMImplementations: List<String>

    /**
     * The options for the DM implementation
     * based on the selected core type
     */
    var availableDMImplementations: List<String>
}


/**
 * The App React component, consisting of:
 * 1. The backdrop component (i.e., the loading overlay);
 * 2. The CryptoAC alert component for showing brief messages to the user;
 * 3. The main container for both the main content and the sidebar content
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
                circularProgress {
                    attrs {
                        if (state.circularProgressValue != 0) {
                            value = state.circularProgressValue
                        }
                    }
                }
            }
        }

        /** 2. The CryptoAC alert component for showing brief messages to the user */
        child(cryptoACAlert {
            severity = state.alertSeverity
            message = state.alertMessage
            open = state.alertIsOpen
            handleClose = { setState { alertIsOpen = false } }
        })

        /** 3. If the user is logged, show the dashboard, otherwise the login form */
        if (state.userIsLogged) {

            /** 3a. The container for both the main content and the sidebar content */
            styledDiv {
                css {
                    display = Display.flex
                    position = Position.relative
                    height = 100.pct
                }

                /** 3.1a. The div of the main content */
                styledDiv {
                    css {
                        backgroundColor = Color(lightGreyColor)
                        marginLeft = (if (state.sidebarIsCollapsed) 80 else 300).px
                        width = 100.pct
                        height = 100.pct
                    }
                    container {

                        /** 3.1.1a. The navbar containing the username and the logout button */
                        styledDiv {
                            css {
                                display = Display.flex
                                padding = "13.75px 0px"
                            }

                            /** Username */
                            styledSpan {
                                css {
                                    marginTop = LinearDimension.auto
                                }
                                +"Hello, ${state.username}"
                            }

                            /** logout button */
                            tooltip {
                                attrs.title = "Logout"
                                iconButton {
                                    attrs {
                                        size = "small"
                                        label = "logout"
                                        style = JSON.parse("""{
                                             "marginLeft": "auto"
                                         }""".trimMargin())
                                        onClick = { submitLogout() }
                                    }
                                    child(createElement { faDoorOpen { } }!!)
                                }
                            }
                        }

                        /** 3.1.2a. A divider between the navbar and the main content */
                        child(cryptoACDivider {
                            width = 100.pct
                            marginBottom = 10.px
                            marginTop = 0.px
                        })

                        /** 3.1.3a. The main content, set based on the current 'uiType' state value */
                        child(when (state.uiType) {
                            /** "modules" allows to choose the implementation of entities in CryptoAC */
                            UIType.Modules -> modules {
                                handleChangeCoreType = { core: CoreType -> changeCoreType(core) }
                                handleChangeRMType = { rmType: RMType -> changeRMType(rmType) }
                                handleChangeMMType = { mmType: MMType -> changeMMType(mmType) }
                                handleChangeDMType = { dmType: DMType -> changeDMType(dmType) }
                                coreType = state.coreType
                                rmType = state.rmType
                                mmType = state.mmType
                                dmType = state.dmType
                                availableRMImplementations = state.availableRMImplementations
                                availableMMImplementations = state.availableMMImplementations
                                availableDMImplementations = state.availableDMImplementations
                            }

                            /** "dashboard" shows the elements (e.g., users, files) of the currently selected core type */
                            UIType.Dashboard -> dashboard {
                                handleChangeUserHasProfile = { userHasProfile: Boolean -> changeUserHasProfile(userHasProfile) }
                                handleChangeBackdropIsOpen = { backdropIsOpen: Boolean -> changeBackdropIsOpen(backdropIsOpen) }
                                handleChangeUserIsAdmin = { userIsAdmin: Boolean -> changeUserIsAdmin(userIsAdmin) }
                                handleDisplayAlert = { code: OutcomeCode, severity: CryptoACAlertSeverity -> displayAlert(code, severity) }
                                handleChangeRMType = { rmType: RMType -> changeRMType(rmType) }
                                handleChangeMMType = { mmType: MMType -> changeMMType(mmType) }
                                handleChangeDMType = { dmType: DMType -> changeDMType(dmType) }
                                userHasProfile = state.userHasProfile
                                userIsLogged = state.userIsLogged
                                userIsAdmin = state.userIsAdmin
                                httpClient = state.httpClient
                                coreType = state.coreType
                                rmType = state.rmType
                                mmType = state.mmType
                                dmType = state.dmType
                                username = state.username
                                tables = state.tables
                            }

                            /** "tradeOffBoard" shows the web dashboard for the trade-off analysis of CAC architectures */
                            UIType.TradeOffBoard -> tradeOffBoard {
                                handleChangeCircularProgressValue = { circularProgressValue: Int -> changeCircularProgressValue(circularProgressValue) }
                                handleChangeBackdropIsOpen = { backdropIsOpen: Boolean -> changeBackdropIsOpen(backdropIsOpen) }
                                scenario = state.scenario
                                algorithm = state.algorithm
                                metric = state.metric
                            }
                        })
                    }
                }

                /** 3.2a. Then, the sidebar (rendered after the content to overlay it) */
                styledDiv {
                    css {
                        position = Position.fixed
                        height = 100.pct
                        classes.add("sidebarShadow")
                    }
                    /** We create here the structure of the sidebar, i.e., header, content and footer */
                    proSidebar {
                        attrs {
                            collapsed = state.sidebarIsCollapsed
                            collapsedWidth = 80.px
                            width = 300.px
                            image = "bg4.jpg"
                        }

                        /** 3.2.1a. The header, containing the title and the buttons to select the UI type */
                        proSidebarHeader {
                            styledDiv {
                                css {
                                    textAlign = TextAlign.center
                                    fontWeight = FontWeight.bold
                                    letterSpacing = 2.px
                                    padding( if (!state.sidebarIsCollapsed) 20.px else 0.px)
                                }

                                /** The title in the header of the sidebar */
                                div {
                                    if (!state.sidebarIsCollapsed) {
                                        styledDiv {
                                            button {
                                                attrs {
                                                    style = JSON.parse("""{
                                                        "width": "100%",
                                                        "maxHeight": "20px",
                                                        "padding": "0"
                                                    }""".trimMargin())
                                                    variant = "text"
                                                    onClick = { toggleSidebarIsCollapsed() }
                                                }
                                                styledSpan {
                                                    css {
                                                        fontSize = 18.px
                                                        display = Display.inline
                                                        color = Color(concreteColor)
                                                    }
                                                    +"CryptoAC"
                                                }
                                            }
                                        }
                                    } else {
                                        styledDiv {
                                            css {
                                                marginTop = 10.px
                                            }
                                            tooltip {
                                                attrs.title = "Expand"
                                                iconButton {
                                                    attrs {
                                                        size = "small"
                                                        label = "expand"
                                                        onClick = { toggleSidebarIsCollapsed() }
                                                    }
                                                    child(createElement { faStream { } }!!)
                                                }
                                            }
                                        }
                                    }
                                }

                                child(cryptoACDivider {
                                    width = 100.pct
                                    marginTop = 10.px
                                    marginBottom = 10.px
                                })

                                /** The buttons to select the UI type */
                                child(cryptoACButtonAndIconGroup {
                                    defaultSelectedButton = 0
                                    buttons = listOf(
                                        CryptoACButtonAndIconData(
                                            icon = createElement { faBoxes { attrs { style = JSON.parse("""{"marginRight": "${ if (state.sidebarIsCollapsed) "unset" else "auto" } "}""".trimMargin()) }}}!!,
                                            text = "Modules",
                                            showText = !state.sidebarIsCollapsed,
                                            onClick = { changeUIType(UIType.Modules) },
                                        ),
                                        CryptoACButtonAndIconData(
                                            icon = createElement { faBullseye { attrs { style = JSON.parse("""{"marginRight": "${ if (state.sidebarIsCollapsed) "unset" else "auto" } "}""".trimMargin()) }}}!!,
                                            text = "Dashboard",
                                            showText = !state.sidebarIsCollapsed,
                                            onClick = { changeUIType(UIType.Dashboard) }
                                        ),
                                        CryptoACButtonAndIconData(
                                            icon = createElement { faVials { attrs { style = JSON.parse("""{"marginRight": "${ if (state.sidebarIsCollapsed) "unset" else "auto" } "}""".trimMargin()) }}}!!,
                                            text = "TradeOffBoard",
                                            showText = !state.sidebarIsCollapsed,
                                            onClick = { changeUIType(UIType.TradeOffBoard) }
                                        )
                                    )
                                })
                            }
                        }


                        /** 3.2.2a. The sidebar content, set based on the current 'uiType' state value */
                        child(if (state.sidebarIsCollapsed) {
                            empty { }
                        } else {
                            when (state.uiType) {
                                /** "empty" is an empty content */
                                UIType.TradeOffBoard -> configuration {
                                    handleChangeScenario = { newScenario -> changeScenario(newScenario) }
                                    handleChangeAlgorithm = { newAlgorithm -> changeAlgorithm(newAlgorithm) }
                                    handleChangeMetric = { newMetric -> changeMetric(newMetric) }
                                    currentScenario = state.scenario
                                    currentAlgorithm = state.algorithm
                                    currentMetric = state.metric
                                }

                                /** "actions" are the form actions to manage CAC policies */
                                UIType.Dashboard -> actions {
                                    handleChangeBackdropIsOpen =
                                        { backdropIsOpen -> changeBackdropIsOpen(backdropIsOpen) }
                                    handleAddTableInContent = { topic -> addTableInContent(topic) }
                                    handleDisplayAlert = { code, severity -> displayAlert(code, severity) }
                                    userHasProfile = state.userHasProfile
                                    userIsLogged = state.userIsLogged
                                    userIsAdmin = state.userIsAdmin
                                    httpClient = state.httpClient
                                    coreType = state.coreType
                                }
                                /** "evaluation" summarizes the characteristics of the chosen modules */
                                UIType.Modules -> evaluation { }
                            }
                        })

                        /** 3.2.3a. The footer, containing a GitHub link to the source code */
                        proSidebarFooter {
                            styledDiv {
                                css {
                                    padding(20.px, 24.px)
                                }
                                styledA(
                                    href = "https://github.com/stfbk/CryptoAC",
                                    target = "_blank",
                                ) {
                                    css {
                                        color = Color(greyColor)
                                        textDecoration = TextDecoration.none
                                        display = Display.flex
                                        alignItems = Align.center
                                        justifyContent = JustifyContent.center
                                        textOverflow = TextOverflow.ellipsis
                                        overflow = Overflow.hidden
                                        hover {
                                            color = Color(wetAsphaltColor)
                                        }
                                    }
                                    faGithub { }
                                    if (!state.sidebarIsCollapsed) {
                                        styledSpan {
                                            css {
                                                marginLeft = 5.px
                                                fontSize = 13.px
                                            }
                                            +"View source"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {

            /** 3b. The login form */
            child(login {
                httpClient = state.httpClient
                handleChangeBackdropIsOpen = { backdropIsOpen: Boolean -> changeBackdropIsOpen(backdropIsOpen) }
                handleChangeUserIsLogged = { userIsLogged: Boolean -> changeUserIsLogged(userIsLogged) }
                handleChangeUsername = { username: String? -> changeUsername(username) }
                handleDisplayAlert = { code: OutcomeCode, severity: CryptoACAlertSeverity ->
                    displayAlert(code, severity)
                }
            })
        }
    }

    /**
     * Init the state with default values. Remember that:
     * - "props" is still undefined here;
     * - you cannot refer to external or
     *  class-local variables which are
     *  still undefined
     */
    override fun AppState.init() {
        logger.info { "Initializing the state of the App component" }
        coreType = CoreType.RBAC_CLOUD
        uiType = UIType.Modules
        sidebarIsCollapsed = false
        backdropIsOpen = false
        userHasProfile = false
        userIsLogged = false
        userIsAdmin = false
        alertIsOpen = false

        alertMessage = ""
        tables = mutableListOf()
        alertSeverity = CryptoACAlertSeverity.SUCCESS
        httpClient = HttpClient { // TODO check configuration
            expectSuccess = false
            install(WebSockets)
            install(HttpCookies)
            install(JsonFeature) {
                serializer = KotlinxSerializer(json = myJson)
            }
        }

        metric = Metric.Goals
        scenario = Scenario.CLOUD
        algorithm = Algorithm.Best
        rmType = RMType.CRYPTOAC
        mmType = MMType.MYSQL
        dmType = DMType.CRYPTOAC
        availableRMImplementations = getRMImplementations(CoreType.RBAC_CLOUD)
        availableMMImplementations = getMMImplementations(CoreType.RBAC_CLOUD)
        availableDMImplementations = getDMImplementations(CoreType.RBAC_CLOUD)

        circularProgressValue = 0
    }

    /** Submit and handle the callback for the logout action */
    private fun submitLogout() {

        logger.info { "Submitting CryptoAC logout form" }
        changeBackdropIsOpen(true)

        MainScope().launch {
            try {
                val response: HttpResponse = state.httpClient.delete("$baseURL${API.LOGOUT}") { }
                val code: OutcomeCode = response.receive()
                val status = response.status

                if (status == HttpStatusCode.OK) {
                    logger.info { "Response status is ${status}, code is $code" }
                    changeUserIsLogged(false)
                    changeUsername(null)
                } else {
                    logger.warn { "Response status is ${status}, code is $code" }
                    displayAlert(code, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Error) {
                logger.error { "Error during login (${e.message}), see console log for details" }
                console.log(e)
                displayAlert(OutcomeCode.CODE_047_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            } finally {
                changeBackdropIsOpen(false)
            }
        }
    }

    /**
     * Display the alert component based
     * on the given [code] and [severity]
     */
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

    /**
     * Change the value of the 'uiType'
     * state to the [newUIType], if possible,
     * and return whether the UI changed or not
     */
    private fun changeUIType(newUIType: UIType): Boolean {
        logger.info { "Asking to change the 'uiType' state to $newUIType" }
        setState {
            logger.info { "Setting the 'uiType' state to $newUIType" }
            uiType = newUIType
        }
        return true
    }

    /**
     * Change the value of the 'backdropIsOpen'
     * state to the [newBackdropIsOpen]
     */
    private fun changeBackdropIsOpen(newBackdropIsOpen: Boolean) {
        logger.info { "Setting the 'backdropIsOpen' state to $newBackdropIsOpen" }
        if (!newBackdropIsOpen) {
            changeCircularProgressValue(0)
        }
        setState { backdropIsOpen = newBackdropIsOpen }
    }

    /**
     * Change the value of the 'circularProgressValue'
     * state to the [newCircularProgressValue]
     */
    private fun changeCircularProgressValue(newCircularProgressValue: Int) {
        logger.info { "Setting the 'circularProgressValue' state to $newCircularProgressValue" }
        setState { circularProgressValue = newCircularProgressValue }
    }

    /**
     * Change the value of the 'userIsLogged'
     * state to the [newUserIsLogged]
     */
    private fun changeUserIsLogged(newUserIsLogged: Boolean) {
        logger.info { "Setting the 'userIsLogged' state to $newUserIsLogged" }
        setState { userIsLogged = newUserIsLogged }
    }

    /**
     * Change the value of the 'userHasProfile'
     * state to the [newUserHasProfile]
     */
    private fun changeUserHasProfile(newUserHasProfile: Boolean) {
        logger.info { "Changing the 'newHasProfile' state to $newUserHasProfile" }
        setState { userHasProfile = newUserHasProfile }
    }

    /**
     * Change the value of the 'username'
     * state to the [newUsername]
     */
    private fun changeUsername(newUsername: String?) {
        logger.info { "Changing the 'username' state to $newUsername" }
        setState { username = newUsername }
    }

    /**
     * Change the value of the 'userIsAdmin'
     * state to the [newUserIsAdmin]
     */
    private fun changeUserIsAdmin(newUserIsAdmin: Boolean) {
        logger.info { "Changing the 'userIsAdmin' state to $newUserIsAdmin" }
        setState { userIsAdmin = newUserIsAdmin }
    }

    /**
     * Change the value of the 'coreType'
     * state to the [newCoreType]
     */
    private fun changeCoreType(newCoreType: CoreType) {
        logger.info { "Changing the 'coreType' state to $newCoreType" }
        setState {
            coreType = newCoreType
            userHasProfile = false
            userIsAdmin = false
            availableRMImplementations = getRMImplementations(newCoreType)
            availableMMImplementations = getMMImplementations(newCoreType)
            availableDMImplementations = getDMImplementations(newCoreType)
            if (rmType.toString() !in availableRMImplementations) {
                rmType = RMType.valueOf(availableRMImplementations.first())
            }
            if (mmType.toString() !in availableMMImplementations) {
                mmType = MMType.valueOf(availableMMImplementations.first())
            }
            if (dmType.toString() !in availableDMImplementations) {
                dmType = DMType.valueOf(availableDMImplementations.first())
            }
        }
    }

    /**
     * Change the value of the 'algorithm'
     * state to the [newAlgorithm]
     */
    private fun changeAlgorithm(newAlgorithm: Algorithm) {
        logger.info { "Changing the 'algorithm' state to $newAlgorithm" }
        setState {
            algorithm = newAlgorithm
        }
    }

    /**
     * Change the value of the 'metric'
     * state to the [newMetric]
     */
    private fun changeMetric(newMetric: Metric) {
        logger.info { "Changing the 'metric' state to $newMetric" }
        setState {
            metric = newMetric
        }
    }

    /**
     * Change the value of the 'scenario'
     * state to the [newScenario]
     */
    private fun changeScenario(newScenario: Scenario) {
        logger.info { "Changing the 'scenario' state to $newScenario" }
        setState {
            scenario = newScenario
        }
    }

    /**
     * Change the value of the 'rmType'
     * state to the [newRMType]
     */
    private fun changeRMType(newRMType: RMType) {
        logger.info { "Setting the 'rmType' state to $newRMType" }
        setState {
            rmType = newRMType
            // TODO compute and update score
        }
    }

    /**
     * Change the value of the 'mmType'
     * state to the [newMMType]
     */
    private fun changeMMType(newMMType: MMType) {
        logger.info { "Setting the 'mmType' state to $newMMType" }
        setState {
            mmType = newMMType
            // TODO compute and update score
        }
    }

    /**
     * Change the value of the 'dmType'
     * state to the [newDMType]
     */
    private fun changeDMType(newDMType: DMType) {
        logger.info { "Setting the 'dmType' state to $newDMType" }
        setState {
            dmType = newDMType
            // TODO compute and update score
        }
    }
    
    /**
     * Toggle the value of the
     * 'sidebarIsCollapsed' state
     */
    private fun toggleSidebarIsCollapsed() {
        val collapsed = !state.sidebarIsCollapsed
        logger.info { "Setting the 'sidebarIsCollapsed' state to $collapsed" }
        setState { sidebarIsCollapsed = collapsed }
    }

    /**
     * Get the available implementations for the
     * DM entity based on the core type selected
     */
    private fun getDMImplementations(coreType: CoreType) = when (coreType) {
        CoreType.RBAC_CLOUD -> listOf(DMType.CRYPTOAC.toString())
        CoreType.RBAC_MQTT -> listOf(DMType.MOSQUITTO.toString())
        CoreType.RBAC_MOCK -> listOf()
    }

    /**
     * Get the available implementations for the
     * MM entity based on the core type selected
     */
    private fun getMMImplementations(coreType: CoreType) = when (coreType) {
        CoreType.RBAC_CLOUD -> listOf(
            MMType.MYSQL.toString(),
            MMType.REDIS.toString(),
        )
        CoreType.RBAC_MQTT -> listOf(
            MMType.MYSQL.toString(),
            MMType.REDIS.toString(),
        )
        CoreType.RBAC_MOCK -> listOf()
    }

    /**
     * Get the available implementations for the
     * RM entity based on the core type selected
     */
    private fun getRMImplementations(coreType: CoreType) = when (coreType) {
        CoreType.RBAC_CLOUD -> listOf(RMType.CRYPTOAC.toString())
        CoreType.RBAC_MQTT -> listOf(RMType.NONE.toString())
        CoreType.RBAC_MOCK -> listOf()
    }
}

/** Possible UI to display */
enum class UIType {
    Modules, Dashboard, TradeOffBoard
}