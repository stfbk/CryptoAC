package eu.fbk.st.cryptoac.view.content.newProfile

import csstype.Display
import csstype.TextAlign
import csstype.pct
import csstype.px
import emotion.react.css
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.ac.ACType
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.dm.DMType
import eu.fbk.st.cryptoac.mm.MMType
import eu.fbk.st.cryptoac.rm.RMType
import eu.fbk.st.cryptoac.view.Themes.plainPaperTitleStyle
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.materialui.grid
import io.ktor.client.*
import mu.KotlinLogging
import org.w3c.dom.HTMLInputElement
import react.*
import react.dom.br
import react.dom.html.ReactHTML.br
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p

private val logger = KotlinLogging.logger {}

// TODO doc
external interface NewProfileProps : Props {
    var handleDisplayAlertProp: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var handleProfileWasCreatedOrModifiedProp: (CoreType) -> Unit
    var handleChangeBackdropIsOpenProp: (Boolean) -> Unit
    var httpClientProp: HttpClient

    /**
     * The core types for which the
     * user already has a profile
     */
    var excludedCoreTypesProp: Set<CoreType>
}
data class NewProfileState(

    /** The list of core type options */
    var listOfCoresState: MutableList<CryptoACRadioOption> = mutableListOf(),

    /** The core type for the new profile */
    var coreTypeState: CoreType = CoreType.RBAC_AT_REST,

    /** The selected RM type */
    var rmTypeState: RMType = RMType.RBAC_CRYPTOAC,

    /** The selected MM type */
    var mmTypeState: MMType = MMType.RBAC_MYSQL,

    /** The selected DM type */
    var dmTypeState: DMType = DMType.CRYPTOAC,

    /** The selected AC type */
    var acTypeState: ACType = ACType.RBAC_OPA,

    /**
     * The options for the RM implementation
     * based on the selected core type
     */
    var availableRMImplementationsState: List<String> = getRMImplementations(CoreType.RBAC_AT_REST),

    /**
     * The options for the MM implementation
     * based on the selected core type
     */
    var availableMMImplementationsState: List<String> = getMMImplementations(CoreType.RBAC_AT_REST),

    /**
     * The options for the DM implementation
     * based on the selected core type
     */
    var availableDMImplementationsState: List<String> = getDMImplementations(CoreType.RBAC_AT_REST),

    /**
     * The options for the AC implementation
     * based on the selected core type
     */
    var availableACImplementationsState: List<String> = getACImplementations(CoreType.RBAC_AT_REST),

    /** Whether to render the value on change by user */
    var changedByUserState: Boolean = false,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true
) : State

/**
 * Change the value of the 'rmType'
 * state to the [newRMType]
 */
private fun changeRMType(state: NewProfileState, newRMType: RMType) {
    logger.info { "Setting the 'rmType' state to $newRMType" }
    state.rmTypeState = newRMType
    // TODO compute and update score
}

/**
 * Change the value of the 'mmType'
 * state to the [newMMType]
 */
private fun changeMMType(state: NewProfileState, newMMType: MMType) {
    logger.info { "Setting the 'mmType' state to $newMMType" }
    state.mmTypeState = newMMType
    // TODO compute and update score
}

/**
 * Change the value of the 'dmType'
 * state to the [newDMType]
 */
private fun changeDMType(state: NewProfileState, newDMType: DMType) {
    logger.info { "Setting the 'dmType' state to $newDMType" }
    state.dmTypeState = newDMType
    // TODO compute and update score
}

/**
 * Change the value of the 'acType'
 * state to the [newACType]
 */
private fun changeACType(state: NewProfileState, newACType: ACType) {
    logger.info { "Setting the 'acType' state to $newACType" }
    state.acTypeState = newACType
    // TODO compute and update score
}

/**
 * Get the available implementations for the
 * DM entity based on the core type selected
 */
private fun getDMImplementations(coreType: CoreType) = when (coreType) {
    CoreType.RBAC_AT_REST -> listOf(DMType.CRYPTOAC.toString())
    CoreType.RBAC_MQTT -> listOf(DMType.MQTT.toString())
    CoreType.ABAC_AT_REST -> listOf(DMType.CRYPTOAC.toString())
    CoreType.ABAC_MQTT -> listOf(DMType.MQTT.toString())
}

/**
 * Get the available implementations for the
 * MM entity based on the core type selected
 */
private fun getMMImplementations(coreType: CoreType) = when (coreType) {
    CoreType.RBAC_AT_REST -> listOf(
        MMType.RBAC_MYSQL.toString(),
        MMType.RBAC_REDIS.toString(),
    )
    CoreType.RBAC_MQTT -> listOf(
        MMType.RBAC_MYSQL.toString(),
        MMType.RBAC_REDIS.toString(),
    )
    CoreType.ABAC_AT_REST -> listOf(
        MMType.ABAC_MYSQL.toString(),
    )
    CoreType.ABAC_MQTT -> listOf(
        MMType.ABAC_MYSQL.toString(),
    )
}

/**
 * Get the available implementations for the
 * RM entity based on the core type selected
 */
private fun getRMImplementations(coreType: CoreType) = when (coreType) {
    CoreType.RBAC_AT_REST -> listOf(RMType.RBAC_CRYPTOAC.toString())
    CoreType.RBAC_MQTT -> listOf(RMType.NONE.toString())
    CoreType.ABAC_AT_REST -> listOf(RMType.RBAC_CRYPTOAC.toString()) // TODO even though RMType.CryptoAC is not ready yet
    CoreType.ABAC_MQTT -> listOf(RMType.NONE.toString())
}
/**
 * Get the available implementations for the
 * AC entity based on the core type selected
 */
private fun getACImplementations(coreType: CoreType) = when (coreType) {
    CoreType.RBAC_AT_REST -> listOf(
        ACType.RBAC_OPA.toString(),
        ACType.RBAC_XACML_AUTHZFORCE.toString(),
        ACType.NONE.toString()
    )
    CoreType.RBAC_MQTT -> listOf(
        ACType.RBAC_DYNSEC.toString(),
        ACType.NONE.toString()
    )
    CoreType.ABAC_AT_REST -> listOf( // TODO even though RMType.RBAC_OPA is not ready yet
        ACType.RBAC_OPA.toString(),
        ACType.NONE.toString()
    )
    CoreType.ABAC_MQTT -> listOf(
        ACType.NONE.toString()
    )
}

/**
 * Change the value of the 'coreType'
 * state to the [newCoreType]
 */
private fun changeCoreType(state: NewProfileState, newCoreType: CoreType) {
    logger.info { "Changing the 'coreType' state to $newCoreType" }
    state.coreTypeState = newCoreType
    state.availableRMImplementationsState = getRMImplementations(newCoreType)
    state.availableMMImplementationsState = getMMImplementations(newCoreType)
    state.availableDMImplementationsState = getDMImplementations(newCoreType)
    state.availableACImplementationsState = getACImplementations(newCoreType)
    if (state.rmTypeState.toString() !in state.availableRMImplementationsState) {
        state.rmTypeState = RMType.valueOf(state.availableRMImplementationsState.first())
    }
    if (state.mmTypeState.toString() !in state.availableMMImplementationsState) {
        state.mmTypeState = MMType.valueOf(state.availableMMImplementationsState.first())
    }
    if (state.dmTypeState.toString() !in state.availableDMImplementationsState) {
        state.dmTypeState = DMType.valueOf(state.availableDMImplementationsState.first())
    }
    if (state.acTypeState.toString() !in state.availableACImplementationsState) {
        state.acTypeState = ACType.valueOf(state.availableACImplementationsState.first())
    }
}

// TODO doc
fun getStateFromProps(
    props: NewProfileProps,
    oldState: NewProfileState = NewProfileState(),
): NewProfileState {
    var copy = false
    if (oldState.justMountedState || !oldState.changedByUserState) {
        oldState.listOfCoresState = (enumValues<CoreType>()
            .filter { !props.excludedCoreTypesProp.contains(it) }
            .map { CryptoACRadioOption(
                label = it.toPrettyString(),
                name = it.toString(),
                color = "primary"
            ) }).toMutableList()
        if (oldState.listOfCoresState.firstOrNull { it.name == oldState.coreTypeState.toString() } == null) {
            oldState.listOfCoresState.firstOrNull()?.let {
                changeCoreType(
                    state = oldState,
                    newCoreType = CoreType.valueOf(it.name)
                )
            }
        }
        copy = true
    }
    oldState.changedByUserState = false
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}


/**
 * The NewProfile React component allowing
 * the user to create a new profile for CryptoAC
 */
val NewProfile = FC<NewProfileProps> {props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [NewProfileState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    div {
        css {
            textAlign = TextAlign.center
            paddingTop = 10.px
            paddingBottom = 10.px
        }

        /** The paper collecting the available options for the core type */
        CryptoACPaper {
            titleStyleProp = plainPaperTitleStyle
            titleTextProp = "Select the Core Type"
            titleVariantProp = "subtitle1"
            setDividerProp = true
            dividerWidthProp = 95.pct
            childProp = FC<Props> {
                grid {
                    item = true
                    xs = 12
                    sm = 12
                    div {
                        css {
                            display = Display.inlineFlex
                        }
                        /** Radio group for selecting the core type */
                        CryptoACRadioGroup {
                            nameProp = "CoreType"
                            disabledProp = false
                            rowProp = true
                            optionsProp = state.listOfCoresState
                            defaultValueProp = state.coreTypeState.toString()
                            onChangeProp = { event ->
                                changeCoreType(
                                    state = state,
                                    newCoreType = CoreType.valueOf((event.target as HTMLInputElement).value)
                                )
                                state = state.copy()
                                true
                            }
                        }
                    }
                }
            }.create()
        }

        if (state.listOfCoresState.isNotEmpty()) {

            br { }

            /** The edit profile form */
            CryptoACEditProfileForm {
                handleProfileWasCreatedOrModifiedProp = { coreType: CoreType ->
                    props.handleProfileWasCreatedOrModifiedProp(coreType)
                }
                handleChangeCoreTypeProp = { newCoreType: CoreType ->
                    changeCoreType(
                        state = state,
                        newCoreType = newCoreType
                    )
                    state = state.copy()
                }
                handleChangeRMTypeProp = { newRMType: RMType ->
                    changeRMType(
                        state = state,
                        newRMType = newRMType
                    )
                    state = state.copy()
                }
                handleChangeMMTypeProp = { newMMType: MMType ->
                    changeMMType(
                        state = state,
                        newMMType = newMMType
                    )
                    state = state.copy()
                }
                handleChangeDMTypeProp = { newDMType: DMType ->
                    changeDMType(
                        state = state,
                        newDMType = newDMType
                    )
                    state = state.copy()
                }
                handleChangeACTypeProp = { newACType: ACType ->
                    changeACType(
                        state = state,
                        newACType = newACType
                    )
                    state = state.copy()
                }
                handleChangeBackdropIsOpenProp = props.handleChangeBackdropIsOpenProp
                handleDisplayAlertProp = props.handleDisplayAlertProp
                httpClientProp = props.httpClientProp
                coreTypeProp = state.coreTypeState
                rmTypeProp = state.rmTypeState
                mmTypeProp = state.mmTypeState
                dmTypeProp = state.dmTypeState
                acTypeProp = state.acTypeState
                isCreatingNewProfileProp = true
                coreParametersProp = null
                usernameProp = null
            }

            br { }

            grid {
                container = true
                spacing = 1
                grid {
                    item = true
                    sm = 12
                    md = 6
                    ModuleItem {
                        nameProp = SERVER.RM
                        titleProp = "Select the Reference Monitor"
                        defaultValueProp = state.rmTypeState.toString()
                        optionsProp = state.availableRMImplementationsState
                        handleChangeChoiceProp = { newChoice ->
                            changeRMType(
                                state = state,
                                newRMType = RMType.valueOf(newChoice)
                            )
                            state = state.copy()
                        }
                    }
                }
                grid {
                    item = true
                    sm = 12
                    md = 6
                    ModuleItem {
                        nameProp = SERVER.MM
                        titleProp = "Select the Metadata Manager"
                        defaultValueProp = state.mmTypeState.toString()
                        optionsProp = state.availableMMImplementationsState
                        handleChangeChoiceProp = { newChoice ->
                            changeMMType(
                                state = state,
                                newMMType = MMType.valueOf(newChoice)
                            )
                            state = state.copy()
                        }
                    }
                }
                grid {
                    item = true
                    sm = 12
                    md = 6
                    ModuleItem {
                        nameProp = SERVER.DM
                        titleProp = "Select the Data Manager"
                        defaultValueProp = state.dmTypeState.toString()
                        optionsProp = state.availableDMImplementationsState
                        handleChangeChoiceProp = { newChoice ->
                            changeDMType(
                                state = state,
                                newDMType = DMType.valueOf(newChoice)
                            )
                            state = state.copy()
                        }
                    }
                }
                grid {
                    item = true
                    sm = 12
                    md = 6
                    ModuleItem {
                        nameProp = SERVER.AC
                        titleProp = "Select the traditional AC"
                        defaultValueProp = state.acTypeState.toString()
                        optionsProp = state.availableACImplementationsState
                        handleChangeChoiceProp = { newChoice ->
                            changeACType(
                                state = state,
                                newACType = ACType.valueOf(newChoice)
                            )
                            state = state.copy()
                        }
                    }
                }
            }
        }

        // todo here select the modules, should have a separate item for each entity
        //  and a "score" card. Add also option for OPA as additional modules or something
    }
}
