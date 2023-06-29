package eu.fbk.st.cryptoac.view

import csstype.*
import csstype.None.Companion.none
import emotion.react.css
import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.view.Themes.concreteColor
import eu.fbk.st.cryptoac.view.Themes.greyColor
import eu.fbk.st.cryptoac.view.Themes.lightGreyColor
import eu.fbk.st.cryptoac.view.Themes.wetAsphaltColor
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.icons.*
import eu.fbk.st.cryptoac.view.components.materialui.*
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebar
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarProvider
import eu.fbk.st.cryptoac.view.content.dashboard.Dashboard
import eu.fbk.st.cryptoac.view.content.newProfile.NewProfile
import eu.fbk.st.cryptoac.view.content.tradeoffboard.*
import eu.fbk.st.cryptoac.view.sidebar.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.plugins.cookies.*
import io.ktor.client.plugins.websocket.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import js.core.Object
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.serialization.decodeFromString
import mu.KotlinLogging
import react.*
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.span
import web.window.WindowTarget

private val logger = KotlinLogging.logger {}

/**
 * State should only ever be modified from within
 * the "setState" lambda or in the "init" function
 */
data class AppState(

    /** Whether the user is logged-in */
    var userIsLoggedState: Boolean = false,

    /** The name of the user, if logged-in, null otherwise */
    var usernameState: String = "",

    /** The HTTPS/WSS client to interact with CryptoAC */
    var httpClientState: HttpClient = HttpClient { // TODO check configuration
        expectSuccess = false
        install(WebSockets)
        install(HttpCookies)
        install(ContentNegotiation) {
            json(json = myJson)
        }
    },

    /** The currently chosen core type */
    var coreTypeState: CoreType = CoreType.RBAC_AT_REST,

    /**
     * For each core type the user has
     * a profile for, the core parameters
     */
    var userProfilesState: HashMap<CoreType, CoreParameters> = hashMapOf(),

    /**
     * The list of core types we display on the
     * sidedar for which the user has a profile
     */
    var sidebarButtonsForCoreTypesState: List<CoreType> = listOf(),

    /** The index of the sidebar button (to highlight) */
    var sidebarButtonIndexState: Int = 0,

    /** Whether the backdrop (i.e., the loading screen) is open */
    var backdropIsOpenState: Boolean = false,

    /** Message of the alert component */
    var alertMessageState: String = "",

    /** Severity of the alert component */
    var alertSeverityState: CryptoACAlertSeverity = CryptoACAlertSeverity.SUCCESS,

    /** Whether the alert component is open */
    var alertIsOpenState: Boolean = false,

    /** Additional tables to show in the content */
    var tablesState: MutableList<String> = mutableListOf(),

    /** The current UI to display in the App */
    var uiTypeState: UIType = UIType.NewProfile,

    /** Whether the sidebar is collapsed */
    var sidebarIsCollapsedState: Boolean = false,

    /** The value to display as progress indicator */
    var circularProgressValueState: Int = 0,

    /**
     * The currently selected
     * scenario for TradeOffBoard
     */
    var tradeOffBoardScenarioState: Scenario = Scenario.Generic,

    /**
     * The currently selected
     * algorithm for TradeOffBoard
     */
    var tradeOffBoardAlgorithmState: Algorithm = Algorithm.MOCOP,

    /**
     * The currently selected
     * objective for TradeOffBoard
     */
    var tradeOffBoardObjectiveState: Objective = Objective.Performance,
) : State

/**
 * Fetch the parameters for the [newCoreType] and
 * update both the userProfiles and uiType value
 */
private suspend fun profileWasCreatedOrModified(
    state: AppState, 
    newCoreType: CoreType
) {
    logger.info { "A profile for core $newCoreType was created or modified " }
    logger.info { "Fetching profile for core $newCoreType " }
    getProfileFromCryptoAC(
        state = state,
        coreType = newCoreType
    )?.let {
        state.userProfilesState[newCoreType] = it
        changeCoreType(
            state = state,
            newCoreType = newCoreType
        )
        computeSidebarButtonsAndIndex(
            state = state,
            state.userProfilesState
        )
        changeUIType(
            state = state,
            newUIType = UIType.CoreType
        )
    }
}

/**
 * Reset the state of the App, probably due to
 * the fact that the user logout from CryptoAC
 */
private suspend fun resetAppState(state: AppState) {
    changeBackdropIsOpen(
        state = state,
        newBackdropIsOpen = false
    )
    changeUserIsLogged(
        state = state,
        newUserIsLogged = false
    )
    changeUsername(
        state = state,
        newUsername = ""
    )
    changeUIType(
        state = state,
        newUIType = UIType.NewProfile
    )
    state.userProfilesState = hashMapOf()
    state.tablesState = mutableListOf()
}

/**
 * Submit and handle the callback for the login form.
 * It receives as input the http [method], the [endpoint]
 * (URL) and the [values] to add to the request
 */
private suspend fun submitLogin(
    state: AppState, 
    method: HttpMethod, 
    endpoint: String, 
    values: HashMap<String, String>
) {

    logger.info { "Submitting CryptoAC login form, method $method, endpoint $endpoint" }
    changeBackdropIsOpen(
        state = state,
        newBackdropIsOpen = true
    )

    try {
        val response = state.httpClientState.submitForm(
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
            logger.info { "Response status is $status, code is $code" }
            changeBackdropIsOpen(
                state = state,
                newBackdropIsOpen = false
            )
            changeUsername(
                state = state,
                newUsername = values[SERVER.USERNAME]!!
            )
            changeUserIsLogged(
                state = state,
                newUserIsLogged = true
            )
            displayAlert(
                state = state,
                code = OutcomeCode.CODE_000_SUCCESS,
                severity = CryptoACAlertSeverity.SUCCESS
            )
        } else {
            logger.warn { "Response status is $status, code is $code" }
            resetAppState(state)
            displayAlert(
                state = state,
                code = code,
                severity = CryptoACAlertSeverity.ERROR
            )
        }
    } catch (e: Throwable) {
        resetAppState(state)
        logger.error { "Error during login (${e.message}), see console log for details" }
        console.log(e)
        displayAlert(
            state = state,
            code = OutcomeCode.CODE_049_UNEXPECTED,
            severity = CryptoACAlertSeverity.ERROR
        )
    }
}

/** Submit and handle the callback for the logout action */
private suspend fun submitLogout(state: AppState) {
    logger.info { "Submitting CryptoAC logout form" }
    changeBackdropIsOpen(
        state = state, 
        newBackdropIsOpen = true
    )

    try {
        val response: HttpResponse = state.httpClientState.delete {
            url("$baseURL${API.LOGOUT}")
        }
        val code: OutcomeCode = response.body()
        val status = response.status

        if (status == HttpStatusCode.OK) {
            logger.info { "Response status is $status, code is $code" }
        } else {
            logger.warn { "Response status is $status, code is $code" }
            displayAlert(
                state = state,
                code = code,
                severity = CryptoACAlertSeverity.ERROR
            )
        }
    } catch (e: Error) {
        logger.error { "Error during logout (${e.message}), see console log for details" }
        console.log(e)
        displayAlert(
            state = state,
            code = OutcomeCode.CODE_049_UNEXPECTED,
            severity = CryptoACAlertSeverity.ERROR
        )
    } finally {
        resetAppState(state)
    }
}

/**
 * Display the alert component based
 * on the given [code] and [severity]
 */
private fun displayAlert(
    state: AppState, 
    code: OutcomeCode, 
    severity: CryptoACAlertSeverity
) {
    logger.info { "Displaying the alert with code $code and severity $severity" }
    state.alertIsOpenState = true
    state.alertMessageState = "${code.getMessage()}${" (Code ${code.getNumber()})"}"
    state.alertSeverityState = severity
}

/**
 * Add a new table in the content with,
 * as title, the given [tableName]
 */
private fun addTableInContent(
    state: AppState, 
    tableName: String
) {
    logger.info { "Adding table $tableName to content" }
    state.tablesState.add(tableName)
}

/**
 * Change the value of the 'uiType'
 * state to the [newUIType]
 */
private fun changeUIType(
    state: AppState, 
    newUIType: UIType
) {
    logger.info { "Setting the 'uiType' state to $newUIType" }
    state.uiTypeState = newUIType
}

/**
 * Change the value of the 'coreType'
 * state to the [newCoreType]
 */
private fun changeCoreType(
    state: AppState, 
    newCoreType: CoreType
) {
    logger.info { "Setting the 'coreType' state to $newCoreType" }
    state.coreTypeState = newCoreType
}

/**
 * Change the value of the 'backdropIsOpen'
 * state to the [newBackdropIsOpen]
 */
private fun changeBackdropIsOpen(
    state: AppState, 
    newBackdropIsOpen: Boolean
) {
    logger.info { "Setting the 'backdropIsOpen' state to $newBackdropIsOpen" }
    if (!newBackdropIsOpen) {
        changeCircularProgressValue(
            state = state,
            newCircularProgressValue = 0
        )
    }
    state.backdropIsOpenState = newBackdropIsOpen
}

/**
 * Change the value of the 'circularProgressValue'
 * state to the [newCircularProgressValue]
 */
private fun changeCircularProgressValue(
    state: AppState, 
    newCircularProgressValue: Int
) {
    logger.info { "Setting the 'circularProgressValue' state to $newCircularProgressValue" }
    state.circularProgressValueState = newCircularProgressValue
}

/**
 * Change the value of the 'userIsLogged'
 * state to the [newUserIsLogged]
 */
private suspend fun changeUserIsLogged(
    state: AppState,
    newUserIsLogged: Boolean
) {
    logger.info { "Setting the 'userIsLogged' state to $newUserIsLogged" }
    state.userIsLoggedState = newUserIsLogged

    /**
     * We get all profiles that the logged user
     * has on the server. For each profile, we
     * show in the sidebar a dedicated button.
     */
    if (newUserIsLogged) {
        val newUserProfiles = hashMapOf<CoreType, CoreParameters>()
        CoreType.values().forEach { coreType ->
            logger.info { "Checking if profile for core $coreType exists" }
            getProfileFromCryptoAC(
                state = state,
                coreType = coreType
            )?.let {
                logger.info { "The profile exists, adding it to the user's profiles" }
                newUserProfiles[coreType] = it
            }
        }
        if (newUserProfiles.isNotEmpty()) {
            state.userProfilesState = newUserProfiles
            changeCoreType(
                state = state,
                newCoreType = newUserProfiles.keys.first()
            )
            computeSidebarButtonsAndIndex(
                state = state,
                profiles = newUserProfiles
            )
            changeUIType(
                state = state,
                newUIType = UIType.CoreType
            )
        }
    } else {
        state.userProfilesState = hashMapOf()
        state.sidebarButtonsForCoreTypesState = listOf()
    }
}

private fun computeSidebarButtonsAndIndex(
    state: AppState, 
    profiles: HashMap<CoreType, CoreParameters>
) {
    logger.info { "Computing sidebar buttons and index" }
    val listOfCoreTypes = mutableListOf<CoreType>()
    var loopCount = 2
    var indexButton = loopCount
    profiles.forEach { entry ->
        val newCoreType = entry.key
        if (newCoreType == state.coreTypeState) {
            indexButton = loopCount
        }
        loopCount += 1
        listOfCoreTypes.add(newCoreType)
    }
    logger.info { "Number of buttons computed is ${listOfCoreTypes.size}" }
    logger.info { "Sidebar index is $indexButton" }
    state.sidebarButtonsForCoreTypesState = listOfCoreTypes
    state.sidebarButtonIndexState = indexButton
}

/**
 * Return an icon representative
 * of the given [coreType]
 */
private fun getIconByCoreType(
    state: AppState, 
    coreType: CoreType
): ReactElement<*> {
    val jsonStyle: Object = JSON.parse(
        """{"marginRight": "${if (state.sidebarIsCollapsedState) "unset" else "auto"} "}""".trimMargin()
    )
    return FC<Props> {
        when (coreType) {
            CoreType.RBAC_AT_REST -> faCloud { style = jsonStyle }
            CoreType.RBAC_MQTT -> faWifi { style = jsonStyle }
            CoreType.ABAC_AT_REST -> faCloudMeatball { style = jsonStyle }
            CoreType.ABAC_MQTT -> faWater { style = jsonStyle }
        }
    }.create()
}

/**
 * Change the value of the 'username'
 * state to the [newUsername]
 */
private fun changeUsername(
    state: AppState, 
    newUsername: String
) {
    logger.info { "Setting the 'username' state to $newUsername" }
    state.usernameState = newUsername
}

/**
 * Change the value of the 'algorithm'
 * state to the [newTradeOffBoardAlgorithm]
 */
private fun changeTradeOffBoardAlgorithm(
    state: AppState, 
    newTradeOffBoardAlgorithm: Algorithm
) {
    logger.info { "Setting the 'algorithm' state to $newTradeOffBoardAlgorithm" }
    state.tradeOffBoardAlgorithmState = newTradeOffBoardAlgorithm
}

/**
 * Change the value of the 'objective'
 * state to the [newTradeOffBoardObjective]
 */
private fun changeTradeOffBoardObjective(
    state: AppState,
    newTradeOffBoardObjective: Objective
) {
    logger.info { "Setting the 'objective' state to $newTradeOffBoardObjective" }
    state.tradeOffBoardObjectiveState = newTradeOffBoardObjective
}

/**
 * Change the value of the 'scenario'
 * state to the [newTradeOffBoardScenario]
 */
private fun changeTradeOffBoardScenario(
    state: AppState, 
    newTradeOffBoardScenario: Scenario
) {
    logger.info { "Setting the 'scenario' state to $newTradeOffBoardScenario" }
    state.tradeOffBoardScenarioState = newTradeOffBoardScenario
}

/**
 * Toggle the value of the
 * 'sidebarIsCollapsed' state
 */
private fun toggleSidebarIsCollapsed(state: AppState) {
    val collapsed = !state.sidebarIsCollapsedState
    logger.info { "Setting the 'sidebarIsCollapsed' state to $collapsed" }
    state.sidebarIsCollapsedState = collapsed
}

/** Get the profile of the [username] for the current coreType */
private suspend fun getProfileFromCryptoAC(
    state: AppState,
    username: String? = state.usernameState,
    coreType: CoreType? = state.coreTypeState,
): CoreParameters? {
    val actualEndpoint = "$baseURL${API.PROFILES.replace("{Core}", coreType.toString())}$username"
    logger.info { "Getting the profile for user $username and core $coreType" }
    val httpResponse = state.httpClientState.get { url(actualEndpoint) }

    val status = httpResponse.status
    return if (status == HttpStatusCode.OK) {
        logger.info { "Response status is $status" }
        val profileAsString = httpResponse.bodyAsText()
        myJson.decodeFromString<CoreParameters>(profileAsString)
    } else {
        val text = httpResponse.bodyAsText()
        val outcomeCode: OutcomeCode = myJson.decodeFromString(text)
        logger.warn { "Response status is $status, code is $outcomeCode" }
        if (outcomeCode != OutcomeCode.CODE_039_PROFILE_NOT_FOUND) {
            displayAlert(
                state = state, 
                code = outcomeCode, 
                severity = CryptoACAlertSeverity.ERROR
            )
        }
        null
    }
}

/**
 * The App React component, consisting of:
 * 1. The backdrop component (i.e., the loading overlay);
 * 2. The CryptoAC alert component for showing brief messages to the user;
 * 3. The main container for both the main content and the sidebar content
 */
val App = FC<Props> {

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [AppState] for details
     */
    var state by useState(AppState())

    /** 1. The backdrop component is a dimmed layer with circular progress loading */
    div {
        css {
            zIndex = integer(10)
            position = Position.relative
        }
        backdrop {
            open = state.backdropIsOpenState
            circularProgress {
                if (state.circularProgressValueState != 0) {
                    value = state.circularProgressValueState
                }
            }
        }
    }

    /** 2. The CryptoAC alert component for showing brief messages to the user */
    CryptoACAlert {
        severityProp = state.alertSeverityState
        messageProp = state.alertMessageState
        openProp = state.alertIsOpenState
        handleCloseProp = {
            state = state.copy(alertIsOpenState = false)
        }
    }

    /** 3. If the user is logged, show the dashboard, otherwise the login form */
    if (state.userIsLoggedState) {

        /** 3a. The container for both the main content and the sidebar content */
        div {
            css {
                display = Display.flex
                position = Position.relative
                height = 100.pct
            }

            /** 3.1a. The div of the main content */
            div {
                css {
                    backgroundColor = Color(lightGreyColor)
                    marginLeft = (if (state.sidebarIsCollapsedState) 80 else 300).px
                    width = 100.pct
                    height = 100.pct
                }
                container {

                    /** 3.1.1a. The navbar containing the username and the logout button */
                    div {
                        css {
                            display = Display.flex
                            padding = Padding(13.75.px, 0.px)
                        }

                        /** Username */
                        span {
                            css {
                                marginTop = Auto.auto
                            }
                            +"Hello, ${state.usernameState}"
                        }

                        /** logout button */
                        tooltip {
                            title = "Logout"
                            iconButton {
                                size = "small"
                                label = "logout"
                                style = JSON.parse(
                                    """{
                                     "marginLeft": "auto"
                                 }""".trimMargin()
                                )
                                onClick = {
                                    MainScope().launch {
                                        submitLogout(state)
                                        state = state.copy()
                                    }
                                }
                                faDoorOpen { }
                            }
                        }
                    }

                    /** 3.1.2a. A divider between the navbar and the main content */
                    CryptoACDivider {
                        widthProp = 100.pct
                        marginBottomProp = 10.px
                        marginTopProp = 0.px
                    }

                    /** 3.1.3a. The main content, set based on the current 'uiType' state value */
                    when (state.uiTypeState) {
                        /**
                         * "tradeOffBoard" shows the web dashboard for
                         * the trade-off analysis of CAC architectures
                         */
                        UIType.TradeOffBoard -> TradeOffBoard {
                            handleChangeCircularProgressValueProp = { circularProgressValue: Int ->
                                changeCircularProgressValue(
                                    state = state,
                                    newCircularProgressValue = circularProgressValue
                                )
                                state = state.copy()
                            }
                            handleChangeBackdropIsOpenProp = { backdropIsOpen: Boolean ->
                                changeBackdropIsOpen(
                                    state = state,
                                    newBackdropIsOpen = backdropIsOpen
                                )
                                state = state.copy()
                            }
                            scenarioProp = state.tradeOffBoardScenarioState
                            algorithmProp = state.tradeOffBoardAlgorithmState
                            objectiveProp = state.tradeOffBoardObjectiveState
                        }

                        /**
                         * "newProfile" allows creating a new
                         * profile for a core type in CryptoAC
                         */
                        UIType.NewProfile -> NewProfile {
                            handleProfileWasCreatedOrModifiedProp = {
                                coreType: CoreType ->
                                MainScope().launch {
                                    profileWasCreatedOrModified(
                                        state = state,
                                        newCoreType = coreType
                                    )
                                    state = state.copy()
                                }
                            }
                            handleChangeBackdropIsOpenProp = {
                                backdropIsOpen: Boolean ->
                                changeBackdropIsOpen(
                                    state = state,
                                    newBackdropIsOpen = backdropIsOpen
                                )
                                state = state.copy()
                            }
                            handleDisplayAlertProp = {
                                code: OutcomeCode, severity: CryptoACAlertSeverity ->
                                displayAlert(
                                    state = state,
                                    code = code,
                                    severity = severity
                                )
                                state = state.copy()
                            }
                            httpClientProp = state.httpClientState
                            excludedCoreTypesProp = state.userProfilesState.keys
                        }

                        /**
                         * "dashboard" shows the dashboard
                         * for the selected core type
                         */
                        UIType.CoreType -> Dashboard {
                            handleProfileWasCreatedOrModifiedProp = {
                                coreType: CoreType ->
                                MainScope().launch {
                                    profileWasCreatedOrModified(
                                        state = state,
                                        newCoreType = coreType
                                    )
                                    state = state.copy()
                                }
                            }
                            handleChangeBackdropIsOpenProp = {
                                backdropIsOpen: Boolean ->
                                changeBackdropIsOpen(
                                    state = state, 
                                    newBackdropIsOpen = backdropIsOpen
                                )
                                state = state.copy()
                            }
                            handleDisplayAlertProp = {
                                code: OutcomeCode, severity: CryptoACAlertSeverity ->
                                displayAlert(
                                    state = state, 
                                    code = code, 
                                    severity = severity
                                )
                                state = state.copy()
                            }
                            coreParametersProp = state.userProfilesState[state.coreTypeState]!!
                            userIsLoggedProp = state.userIsLoggedState
                            httpClientProp = state.httpClientState
                            coreTypeProp = state.coreTypeState
                            usernameProp = state.usernameState
                            tablesProp = state.tablesState
                        }
                    }
                }
            }

            /** 3.2a. Then, the sidebar (rendered after the content to overlay it) */
            div {
                css {
                    position = Position.fixed
                    height = 100.pct
                    // TODO unsure whether this is the way to add multiple shadows
                    boxShadow = BoxShadow(
                        0.px,
                        19.px,
                        38.px,
                        rgba(0, 0, 0, 30.0)
                    )
                    boxShadow = BoxShadow(
                        0.px,
                        15.px,
                        12.px,
                        rgba(0, 0, 0, 22.0)
                    )
                }
                /** We create here the structure of the sidebar, i.e., header, content and footer */
                proSidebarProvider {
                    proSidebar {
                        collapsed = state.sidebarIsCollapsedState
                        collapsedWidth = 80.px
                        width = if (!state.sidebarIsCollapsedState) 300.px else 80.px
                        image = "bg4.jpg"
                        breakpoint = "md"
                        transitionDuration = 300

                        // see https://github.com/azouaoui-med/react-pro-sidebar/issues/127
                        div {
                            css {
                                height = 100.pct
                                display = Display.flex
                                flexDirection = FlexDirection.column
                            }

                            /** 3.2.1a. The header, containing the title and the buttons to select the UI type */
                            div {
                                className = ClassName("pro-sidebar-header")
                                css {
                                    textAlign = TextAlign.center
                                    fontWeight = FontWeight.bold
                                    letterSpacing = 2.px
                                    padding = if (!state.sidebarIsCollapsedState) {
                                        Padding(20.px, 20.px)
                                    } else {
                                        Padding(0.px, 0.px)
                                    }
                                }

                                /** The title in the header of the sidebar */
                                div {
                                    if (!state.sidebarIsCollapsedState) {
                                        div {
                                            button {
                                                style = JSON.parse(
                                                        """{
                                                    "width": "100%",
                                                    "maxHeight": "20px",
                                                    "padding": "0"
                                                }""".trimMargin()
                                                )
                                                variant = "text"
                                                onClick = {
                                                    toggleSidebarIsCollapsed(state)
                                                    state = state.copy()
                                                }
                                                span {
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
                                        div {
                                            css {
                                                marginTop = 10.px
                                            }
                                            tooltip {
                                                title = "Expand"
                                                iconButton {
                                                    size = "small"
                                                    label = "expand"
                                                    onClick = {
                                                        toggleSidebarIsCollapsed(state)
                                                        state = state.copy()
                                                    }
                                                    faStream { }
                                                }
                                            }
                                        }
                                    }
                                }

                                CryptoACDivider {
                                    widthProp = 100.pct
                                    marginTopProp = 10.px
                                    marginBottomProp = 10.px
                                }

                                CryptoACButtonAndIconGroup {
                                    defaultSelectedButtonProp = state.sidebarButtonIndexState
                                    buttonsProp = mutableListOf(
                                        CryptoACButtonAndIconData(
                                            icon = FC<Props> {
                                                faBoxes {
                                                    style =
                                                        JSON.parse("""{"marginRight": "${if (state.sidebarIsCollapsedState) "unset" else "auto"} "}""".trimMargin())
                                                }
                                            }.create(),
                                            text = "New profile",
                                            showText = !state.sidebarIsCollapsedState,
                                            onClick = {
                                                changeUIType(
                                                    state = state,
                                                    newUIType = UIType.NewProfile
                                                )
                                                state = state.copy()
                                            },
                                        ),
                                        CryptoACButtonAndIconData(
                                            icon = FC<Props> {
                                                faVials {
                                                    style =
                                                        JSON.parse("""{"marginRight": "${if (state.sidebarIsCollapsedState) "unset" else "auto"} "}""".trimMargin())
                                                }
                                            }.create(),
                                            text = "TradeOffBoard",
                                            showText = !state.sidebarIsCollapsedState,
                                            onClick = {
                                                changeUIType(
                                                    state = state,
                                                    newUIType = UIType.TradeOffBoard
                                                )
                                                state = state.copy()
                                            }
                                        )
                                    ).apply {
                                        state.sidebarButtonsForCoreTypesState.forEach { coreType ->
                                            add(
                                                CryptoACButtonAndIconData(
                                                    icon = getIconByCoreType(
                                                        state = state,
                                                        coreType = coreType
                                                    ),
                                                    text = coreType.toPrettyString(),
                                                    showText = !state.sidebarIsCollapsedState,
                                                    onClick = {
                                                        changeCoreType(
                                                            state = state,
                                                            newCoreType = coreType
                                                        )
                                                        changeUIType(
                                                            state = state,
                                                            newUIType = UIType.CoreType
                                                        )
                                                        state = state.copy()
                                                    },
                                                )
                                            )
                                        }
                                    }
                                }
                            }

                            /** 3.2.2a. The sidebar content, set based on the current 'uiType' state value */
                            if (state.sidebarIsCollapsedState) {
                                Empty { }
                            } else {
                                when (state.uiTypeState) {
                                    /**
                                     * "configuration" allows configuring
                                     *  parameters for TradeOffBoard
                                     */
                                    UIType.TradeOffBoard -> Configuration {
                                        handleChangeAlgorithmProp = { newAlgorithm ->
                                            changeTradeOffBoardAlgorithm(
                                                state = state,
                                                newTradeOffBoardAlgorithm = newAlgorithm
                                            )
                                            state = state.copy()
                                        }
                                        handleChangeScenarioProp = { newScenario ->
                                            changeTradeOffBoardScenario(
                                                state = state,
                                                newTradeOffBoardScenario = newScenario
                                            )
                                            state = state.copy()
                                        }
                                        handleChangeObjectiveProp = { newObjective ->
                                            changeTradeOffBoardObjective(
                                                state = state,
                                                newTradeOffBoardObjective = newObjective
                                            )
                                            state = state.copy()
                                        }
                                        currentScenarioProp = state.tradeOffBoardScenarioState
                                        currentAlgorithmProp = state.tradeOffBoardAlgorithmState
                                        currentObjectiveProp = state.tradeOffBoardObjectiveState
                                    }

                                    /**
                                     * "actions" are the form actions
                                     * to interact with the CAC scheme
                                     */
                                    UIType.CoreType -> Actions {
                                        handleChangeBackdropIsOpenProp = { backdropIsOpen ->
                                            changeBackdropIsOpen(
                                                state = state,
                                                newBackdropIsOpen = backdropIsOpen
                                            )
                                            state = state.copy()
                                        }
                                        handleAddTableInContentProp = { topic ->
                                            addTableInContent(
                                                state = state,
                                                tableName = topic
                                            )
                                            state = state.copy()
                                        }
                                        handleDisplayAlertProp = { code, severity ->
                                            displayAlert(
                                                state = state,
                                                code = code,
                                                severity = severity
                                            )
                                            state = state.copy()
                                        }
                                        userIsAdminProp = state.userProfilesState[state.coreTypeState]!!.user.isAdmin
                                        httpClientProp = state.httpClientState
                                        coreTypeProp = state.coreTypeState
                                    }

                                    /**
                                     * "evaluation" summarizes the characteristics
                                     * of the chosen modules for the new profile
                                     */
                                    UIType.NewProfile -> Evaluation { }
                                }
                            }

                            /** 3.2.3a. The footer, containing a GitHub link to the source code */
                            div {
                                className = ClassName("pro-sidebar-footer")
                                css {
                                    padding = Padding(20.px, 24.px)
                                }
                                a {
                                    href = "https://github.com/stfbk/CryptoAC"
                                    target = WindowTarget._blank
                                    css {
                                        color = Color(greyColor)
                                        textDecoration = none
                                        display = Display.flex
                                        alignItems = AlignItems.center
                                        justifyContent = JustifyContent.center
                                        textOverflow = TextOverflow.ellipsis
                                        overflow = Overflow.hidden
                                        hover {
                                            color = Color(wetAsphaltColor)
                                        }
                                    }
                                    faGithub { }
                                    if (!state.sidebarIsCollapsedState) {
                                        span {
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
        }
    } else {

        /** 3b. The login form */
        Login {
            handleDisplayAlertProp = { code: OutcomeCode, severity: CryptoACAlertSeverity ->
                displayAlert(
                    state = state,
                    code = code,
                    severity = severity
                )
                state = state.copy()
            }
            handleSubmitLoginProp = { method: HttpMethod, endpoint: String, values: HashMap<String, String> ->
                MainScope().launch {
                    submitLogin(
                        state = state,
                        method = method,
                        endpoint = endpoint,
                        values = values
                    )
                    state = state.copy()
                }
            }
            httpClientProp = state.httpClientState
        }
    }
}

/** Possible UI to display */
enum class UIType {
    NewProfile, TradeOffBoard, CoreType
}
