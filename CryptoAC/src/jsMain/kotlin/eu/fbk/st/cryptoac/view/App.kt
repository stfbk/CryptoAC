package eu.fbk.st.cryptoac.view

import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.view.Themes.concreteColor
import eu.fbk.st.cryptoac.view.Themes.greyColor
import eu.fbk.st.cryptoac.view.Themes.lightGreyColor
import eu.fbk.st.cryptoac.view.Themes.wetAsphaltColor
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.icons.*
import eu.fbk.st.cryptoac.view.components.materialui.*
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebar
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarFooter
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarHeader
import eu.fbk.st.cryptoac.view.content.dashboard.dashboard
import eu.fbk.st.cryptoac.view.content.newProfile.newProfile
import eu.fbk.st.cryptoac.view.content.tradeoffboard.*
import eu.fbk.st.cryptoac.view.sidebar.actions
import eu.fbk.st.cryptoac.view.sidebar.empty
import eu.fbk.st.cryptoac.view.sidebar.configuration
import eu.fbk.st.cryptoac.view.sidebar.evaluation
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.plugins.cookies.*
import io.ktor.client.plugins.websocket.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.css.properties.TextDecoration
import kotlinx.serialization.decodeFromString
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

    /** The name of the user, if logged-in, null otherwise */
    var username: String?

    /** The HTTPS/WSS client to interact with CryptoAC */
    var httpClient: HttpClient

    /** The currently chosen core type */
    var coreType: CoreType

    /**
     * For each core type the user has
     * a profile for, the core parameters
     */
    var userProfiles: HashMap<CoreType, CoreParameters>


    /** The buttons on the sidebar */
    var sidebarButtons: List<CryptoACButtonAndIconData>

    /** The index of the sidebar button (to highlight) */
    var sidebarButtonIndex: Int

    /** Whether the backdrop (i.e., the loading screen) is open */
    var backdropIsOpen: Boolean

    /** Message of the alert component */
    var alertMessage: String

    /** Severity of the alert component */
    var alertSeverity: CryptoACAlertSeverity

    /** Whether the alert component is open */
    var alertIsOpen: Boolean

    /** Additional tables to show in the content */
    var tables: MutableList<String>

    /** The current UI to display in the App */
    var uiType: UIType

    /** Whether the sidebar is collapsed */
    var sidebarIsCollapsed: Boolean

    /** The value to display as progress indicator */
    var circularProgressValue: Int



    /**
     * The currently selected
     * scenario for TradeOffBoard
     */
    var tradeOffBoardScenario: Scenario

    /**
     * The currently selected
     * algorithm for TradeOffBoard
     */
    var tradeOffBoardAlgorithm: Algorithm

    /**
     * The currently selected
     * metric for TradeOffBoard
     */
    var tradeOffBoardMetric: Metric
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
                            /**
                             * "tradeOffBoard" shows the web dashboard for
                             * the trade-off analysis of CAC architectures
                             */
                            UIType.TradeOffBoard -> tradeOffBoard {
                                handleChangeCircularProgressValue = { circularProgressValue: Int -> changeCircularProgressValue(circularProgressValue) }
                                handleChangeBackdropIsOpen = { backdropIsOpen: Boolean -> changeBackdropIsOpen(backdropIsOpen) }
                                scenario = state.tradeOffBoardScenario
                                algorithm = state.tradeOffBoardAlgorithm
                                metric = state.tradeOffBoardMetric
                            }

                            /**
                             * "newProfile" allows creating a new
                             * profile for a core type in CryptoAC
                             */
                            UIType.NewProfile -> newProfile {
                                handleProfileWasCreatedOrModified = {
                                        coreType: CoreType -> profileWasCreatedOrModified(coreType)
                                }
                                handleChangeBackdropIsOpen = {
                                        backdropIsOpen: Boolean -> changeBackdropIsOpen(backdropIsOpen)
                                }
                                handleDisplayAlert = {
                                        code: OutcomeCode, severity: CryptoACAlertSeverity -> displayAlert(code, severity)
                                }
                                httpClient = state.httpClient
                                excludedCoreTypes = state.userProfiles.keys
                            }

                            /**
                             * "dashboard" shows the dashboard
                             * for the selected core type
                             */
                            UIType.CoreType -> dashboard {
                                handleProfileWasCreatedOrModified = {
                                        coreType: CoreType -> profileWasCreatedOrModified(coreType)
                                }
                                handleChangeBackdropIsOpen = {
                                        backdropIsOpen: Boolean -> changeBackdropIsOpen(backdropIsOpen)
                                }
                                handleDisplayAlert = {
                                        code: OutcomeCode, severity: CryptoACAlertSeverity -> displayAlert(code, severity)
                                }
                                coreParameters = state.userProfiles[state.coreType]!!
                                userIsLogged = state.userIsLogged
                                httpClient = state.httpClient
                                coreType = state.coreType
                                username = state.username
                                tables = state.tables
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

                                child(cryptoACButtonAndIconGroup {
                                    defaultSelectedButton = state.sidebarButtonIndex
                                    buttons = mutableListOf(
                                        CryptoACButtonAndIconData(
                                            icon = createElement { faBoxes { attrs { style = JSON.parse("""{"marginRight": "${ if (state.sidebarIsCollapsed) "unset" else "auto" } "}""".trimMargin()) }}}!!,
                                            text = "New profile",
                                            showText = !state.sidebarIsCollapsed,
                                            onClick = { changeUIType(UIType.NewProfile) },
                                        ),
                                        CryptoACButtonAndIconData(
                                            icon = createElement { faVials { attrs { style = JSON.parse("""{"marginRight": "${ if (state.sidebarIsCollapsed) "unset" else "auto" } "}""".trimMargin()) }}}!!,
                                            text = "TradeOffBoard",
                                            showText = !state.sidebarIsCollapsed,
                                            onClick = { changeUIType(UIType.TradeOffBoard) }
                                        )
                                    ).apply {
                                        addAll(state.sidebarButtons)
                                    }
                                })
                            }
                        }


                        /** 3.2.2a. The sidebar content, set based on the current 'uiType' state value */
                        child(if (state.sidebarIsCollapsed) {
                            empty { }
                        } else {
                            when (state.uiType) {
                                /**
                                 * "configuration" allows configuring
                                 *  parameters for TradeOffBoard
                                 */
                                UIType.TradeOffBoard -> configuration {
                                    handleChangeAlgorithm = {
                                            newAlgorithm -> changeTradeOffBoardAlgorithm(newAlgorithm)
                                    }
                                    handleChangeScenario = {
                                            newScenario -> changeTradeOffBoardScenario(newScenario)
                                    }
                                    handleChangeMetric = {
                                            newMetric -> changeTradeOffBoardMetric(newMetric)
                                    }
                                    currentScenario = state.tradeOffBoardScenario
                                    currentAlgorithm = state.tradeOffBoardAlgorithm
                                    currentMetric = state.tradeOffBoardMetric
                                }

                                /**
                                 * "actions" are the form actions
                                 * to interact with the CAC scheme
                                 */
                                UIType.CoreType -> actions {
                                    handleChangeBackdropIsOpen = {
                                            backdropIsOpen -> changeBackdropIsOpen(backdropIsOpen)
                                    }
                                    handleAddTableInContent = {
                                            topic -> addTableInContent(topic)
                                    }
                                    handleDisplayAlert = {
                                            code, severity -> displayAlert(code, severity)
                                    }
                                    userIsAdmin = state.userProfiles[state.coreType]!!.user.isAdmin
                                    httpClient = state.httpClient
                                    coreType = state.coreType
                                }

                                /**
                                 * "evaluation" summarizes the characteristics
                                 * of the chosen modules for the new profile
                                 */
                                UIType.NewProfile -> evaluation { }
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
                handleDisplayAlert = { code: OutcomeCode, severity: CryptoACAlertSeverity ->
                    displayAlert(code, severity)
                }
                handleSubmitLogin = { method: HttpMethod, endpoint: String, values: HashMap<String, String> ->
                    submitLogin(method, endpoint, values)
                }
                httpClient = state.httpClient
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

        httpClient = HttpClient { // TODO check configuration
            expectSuccess = false
            install(WebSockets)
            install(HttpCookies)
            install(ContentNegotiation) {
                json(json = myJson)
            }
        }

        sidebarButtons = listOf()
        sidebarButtonIndex = 0
        coreType = CoreType.RBAC_CLOUD
        uiType = UIType.NewProfile
        sidebarIsCollapsed = false
        backdropIsOpen = false
        userIsLogged = false
        alertIsOpen = false
        alertMessage = ""
        tables = mutableListOf()
        userProfiles = hashMapOf()
        alertSeverity = CryptoACAlertSeverity.SUCCESS
        circularProgressValue = 0

        tradeOffBoardMetric = Metric.Goals
        tradeOffBoardScenario = Scenario.CLOUD
        tradeOffBoardAlgorithm = Algorithm.Best

    }

    /**
     * Fetch the parameters for the [newCoreType] and
     * update both the userProfiles and uiType value
     */
    private fun profileWasCreatedOrModified(newCoreType: CoreType) {
        logger.info { "A profile for core $newCoreType was created or modified " }
        MainScope().launch {
            logger.info { "Fetching profile for core $newCoreType " }
            getProfileFromCryptoAC(coreType = newCoreType)?.let {
                setState {
                    userProfiles[newCoreType] = it
                }
                changeCoreType(newCoreType)
                computeSidebarButtonsAndIndex(state.userProfiles)
                changeUIType(UIType.CoreType)
            }
        }
    }

    /**
     * Reset the state of the App, probably due to
     * the fact that the user logout from CryptoAC
     */
    private fun resetAppState() {
        changeBackdropIsOpen(false)
        changeUserIsLogged(false)
        changeUsername(null)
        changeUIType(UIType.NewProfile)
        setState {
            userProfiles = hashMapOf()
            tables = mutableListOf()
        }
    }

    /**
     * Submit and handle the callback for the login form.
     * It receives as input the http [method], the [endpoint]
     * (URL) and the [values] to add to the request
     */
    private fun submitLogin(method: HttpMethod, endpoint: String, values: HashMap<String, String>) {

        logger.info { "Submitting CryptoAC login form, method $method, endpoint $endpoint" }
        changeBackdropIsOpen(true)

        MainScope().launch {

            try {
                val response = state.httpClient.submitForm(
                    formParameters = Parameters.build {
                        values.forEach {
                            append(it.key, it.value)
                        }
                    }
                ) {
                    url(endpoint)
                }

                val code: OutcomeCode = response.body()
                val status = response.status

                if (status == HttpStatusCode.OK) {
                    logger.info { "Response status is ${status}, code is $code" }
                    changeBackdropIsOpen(false)
                    changeUsername(values[SERVER.USERNAME]!!)
                    changeUserIsLogged(true)
                    displayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                } else {
                    logger.warn { "Response status is ${status}, code is $code" }
                    resetAppState()
                    displayAlert(code, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Throwable) {
                resetAppState()
                logger.error { "Error during login (${e.message}), see console log for details" }
                console.log(e)
                displayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /** Submit and handle the callback for the logout action */
    private fun submitLogout() {
        logger.info { "Submitting CryptoAC logout form" }
        changeBackdropIsOpen(true)

        MainScope().launch {
            try {
                val response: HttpResponse = state.httpClient.delete {
                    url("$baseURL${API.LOGOUT}")
                }
                val code: OutcomeCode = response.body()
                val status = response.status

                if (status == HttpStatusCode.OK) {
                    logger.info { "Response status is ${status}, code is $code" }
                } else {
                    logger.warn { "Response status is ${status}, code is $code" }
                    displayAlert(code, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Error) {
                logger.error { "Error during logout (${e.message}), see console log for details" }
                console.log(e)
                displayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            } finally {
                resetAppState()
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
     * state to the [newUIType]
     */
    private fun changeUIType(newUIType: UIType) {
        logger.info { "Setting the 'uiType' state to $newUIType" }
        setState {
            uiType = newUIType
        }
    }

    /**
     * Change the value of the 'coreType'
     * state to the [newCoreType]
     */
    private fun changeCoreType(newCoreType: CoreType) {
        logger.info { "Setting the 'coreType' state to $newCoreType" }
        setState {
            coreType = newCoreType
        }
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

        /**
         * We get all profiles that the logged user
         * has on the server. For each profile, we
         * show in the sidebar a dedicated button.
         */
        if (newUserIsLogged) {
            val newUserProfiles = hashMapOf<CoreType, CoreParameters>()
            MainScope().launch {
                CoreType.values().forEach { coreType ->
                    logger.info { "Checking if profile for core $coreType exists" }
                    getProfileFromCryptoAC(coreType = coreType)?.let {
                        logger.info { "The profile exists, adding it to the user's profiles" }
                        newUserProfiles[coreType] = it
                    }
                }
                if (newUserProfiles.isNotEmpty()) {
                    setState {
                        userProfiles = newUserProfiles
                    }
                    changeCoreType(newUserProfiles.keys.first())
                    computeSidebarButtonsAndIndex(newUserProfiles)
                    changeUIType(UIType.CoreType)
                }
            }
        } else {
            setState {
                userProfiles = hashMapOf()
                sidebarButtons = listOf()
            }
        }
    }

    private fun computeSidebarButtonsAndIndex(profiles: HashMap<CoreType, CoreParameters>) {
        logger.info { "Computing sidebar buttons and index" }
        val listOfButtons = mutableListOf<CryptoACButtonAndIconData>()
        var loopCount = 2
        var indexButton = loopCount
        profiles.forEach { entry ->
            val newCoreType = entry.key
            if (newCoreType == state.coreType) {
                indexButton = loopCount
            }
            loopCount += 1
            listOfButtons.add(
                CryptoACButtonAndIconData(
                    icon = createElement {
                        faBoxes {
                            attrs {
                                style =
                                    JSON.parse("""{"marginRight": "${if (state.sidebarIsCollapsed) "unset" else "auto"} "}""".trimMargin())
                            }
                        }
                    }!!,
                    text = entry.key.toPrettyString(),
                    showText = !state.sidebarIsCollapsed,
                    onClick = {
                        changeCoreType(newCoreType)
                        changeUIType(UIType.CoreType)
                    },
                )
            )
        }
        logger.info { "Number of buttons computed is ${listOfButtons.size}" }
        logger.info { "Sidebar index is $indexButton" }
        setState {
            sidebarButtons = listOfButtons
            sidebarButtonIndex = indexButton
        }
    }

    /**
     * Change the value of the 'username'
     * state to the [newUsername]
     */
    private fun changeUsername(newUsername: String?) {
        logger.info { "Setting the 'username' state to $newUsername" }
        setState { username = newUsername }
    }

    /**
     * Change the value of the 'algorithm'
     * state to the [newTradeOffBoardAlgorithm]
     */
    private fun changeTradeOffBoardAlgorithm(newTradeOffBoardAlgorithm: Algorithm) {
        logger.info { "Setting the 'algorithm' state to $newTradeOffBoardAlgorithm" }
        setState {
            tradeOffBoardAlgorithm = newTradeOffBoardAlgorithm
        }
    }

    /**
     * Change the value of the 'metric'
     * state to the [newTradeOffBoardMetric]
     */
    private fun changeTradeOffBoardMetric(newTradeOffBoardMetric: Metric) {
        logger.info { "Setting the 'metric' state to $newTradeOffBoardMetric" }
        setState {
            tradeOffBoardMetric = newTradeOffBoardMetric
        }
    }

    /**
     * Change the value of the 'scenario'
     * state to the [newTradeOffBoardScenario]
     */
    private fun changeTradeOffBoardScenario(newTradeOffBoardScenario: Scenario) {
        logger.info { "Setting the 'scenario' state to $newTradeOffBoardScenario" }
        setState {
            tradeOffBoardScenario = newTradeOffBoardScenario
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

    /** Get the profile of the [username] for the current coreType */
    private suspend fun getProfileFromCryptoAC(
        username: String? = state.username,
        coreType: CoreType? = state.coreType,
    ): CoreParameters? {
        val actualEndpoint = "$baseURL${API.PROFILES.replace("{Core}", coreType.toString())}$username"
        logger.info { "Getting the profile for user $username and core $coreType" }
        val httpResponse = state.httpClient.get { url(actualEndpoint) }

        val status = httpResponse.status
        return if (status == HttpStatusCode.OK) {
            logger.info { "Response status is $status" }
            val profileAsString = httpResponse.bodyAsText()
            myJson.decodeFromString<CoreParameters>(profileAsString)
        } else {
            val text = httpResponse.bodyAsText()
            val outcomeCode: OutcomeCode = myJson.decodeFromString(text)
            logger.warn { "Response status is ${status}, code is $outcomeCode" }
            if (outcomeCode != OutcomeCode.CODE_039_PROFILE_NOT_FOUND) {
                displayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            }
            null
        }
    }
}

/** Possible UI to display */
enum class UIType {
    NewProfile, TradeOffBoard, CoreType
}