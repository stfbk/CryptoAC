package eu.fbk.st.cryptoac.view.content.newProfile

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
import kotlinx.css.*
import mu.KotlinLogging
import org.w3c.dom.HTMLInputElement
import react.*
import react.dom.br
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface NewProfileState : State {

    /** The list of core type options */
    var listOfCores: MutableList<CryptoACRadioOption>

    /** The core type for the new profile */
    var coreType: CoreType

    /** The selected RM type */
    var rmType: RMType

    /** The selected MM type */
    var mmType: MMType

    /** The selected DM type */
    var dmType: DMType

    /** The selected AC type */
    var acType: ACType

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

    /**
     * The options for the AC implementation
     * based on the selected core type
     */
    var availableACImplementations: List<String>

    /** Whether to render the value on change by user */
    var changedByUser: Boolean

    /** Whether the component was just mounted */
    var justMounted: Boolean
}

external interface NewProfileProps : Props {
    var handleDisplayAlert: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var handleProfileWasCreatedOrModified: (CoreType) -> Unit
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var httpClient: HttpClient

    /**
     * The core types for which the
     * user already has a profile
     */
    var excludedCoreTypes: Set<CoreType>
}

/**
 * The NewProfile React component allowing
 * the user to create a new profile for CryptoAC
 */
class NewProfile : RComponent<NewProfileProps, NewProfileState>() {

    override fun RBuilder.render() {

        styledDiv {
            css {
                textAlign = TextAlign.center
                paddingTop = 10.px
                paddingBottom = 10.px
            }

            /** The paper collecting the available options for the core type */
            child(
                cryptoACPaper {
                    titleStyle = plainPaperTitleStyle
                    titleText = "Select the Core Type"
                    titleVariant = "subtitle1"
                    setDivider = true
                    dividerWidth = 95.pct
                    child = createElement {
                        grid {
                            attrs {
                                item = true
                                xs = 12
                                sm = 12
                            }
                            styledDiv {
                                css {
                                    display = Display.inlineFlex
                                }
                                /** Radio group for selecting the core type */
                                child(
                                    cryptoACRadioGroup {
                                        name = "CoreType"
                                        disabled = false
                                        row = true
                                        options = state.listOfCores
                                        defaultValue = state.coreType.toString()
                                        onChange = { event ->
                                            changeCoreType(CoreType.valueOf((event.target as HTMLInputElement).value))
                                            true
                                        }
                                    }
                                )
                            }
                        }
                    }!!
                }
            )

            if (state.listOfCores.isNotEmpty()) {

                br { }

                /** The edit profile form */
                child(
                    cryptoACEditProfileForm {
                        handleProfileWasCreatedOrModified = { coreType: CoreType ->
                            props.handleProfileWasCreatedOrModified(coreType)
                        }
                        handleChangeCoreType = { newCoreType: CoreType ->
                            changeCoreType(newCoreType)
                        }
                        handleChangeRMType = { newRMType: RMType ->
                            changeRMType(newRMType)
                        }
                        handleChangeMMType = { newMMType: MMType ->
                            changeMMType(newMMType)
                        }
                        handleChangeDMType = { newDMType: DMType ->
                            changeDMType(newDMType)
                        }
                        handleChangeACType = { newACType: ACType ->
                            changeACType(newACType)
                        }
                        handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                        handleDisplayAlert = props.handleDisplayAlert
                        httpClient = props.httpClient
                        coreType = state.coreType
                        rmType = state.rmType
                        mmType = state.mmType
                        dmType = state.dmType
                        acType = state.acType
                        isCreatingNewProfile = true
                        coreParameters = null
                        username = null
                    }
                )

                br { }

                grid {
                    attrs {
                        container = true
                        spacing = 1
                    }
                    grid {
                        attrs {
                            item = true
                            sm = 12
                            md = 6
                        }
                        child(
                            moduleItem {
                                name = SERVER.RM
                                title = "Select the Reference Monitor"
                                defaultValue = state.rmType.toString()
                                options = state.availableRMImplementations
                                handleChangeChoice = { newChoice -> changeRMType(RMType.valueOf(newChoice)) }
                            }
                        )
                    }
                    grid {
                        attrs {
                            item = true
                            sm = 12
                            md = 6
                        }
                        child(
                            moduleItem {
                                name = SERVER.MM
                                title = "Select the Metadata Manager"
                                defaultValue = state.mmType.toString()
                                options = state.availableMMImplementations
                                handleChangeChoice = { newChoice -> changeMMType(MMType.valueOf(newChoice)) }
                            }
                        )
                    }
                    grid {
                        attrs {
                            item = true
                            sm = 12
                            md = 6
                        }
                        child(
                            moduleItem {
                                name = SERVER.DM
                                title = "Select the Data Manager"
                                defaultValue = state.dmType.toString()
                                options = state.availableDMImplementations
                                handleChangeChoice = { newChoice -> changeDMType(DMType.valueOf(newChoice)) }
                            }
                        )
                    }
                    grid {
                        attrs {
                            item = true
                            sm = 12
                            md = 6
                        }
                        child(
                            moduleItem {
                                name = SERVER.AC
                                title = "Select the traditional AC"
                                defaultValue = state.acType.toString()
                                options = state.availableACImplementations
                                handleChangeChoice = { newChoice -> changeACType(ACType.valueOf(newChoice)) }
                            }
                        )
                    }
                }
            }

            // todo here select the modules, should have a separate item for each entity
            //  and a "score" card. Add also option for OPA as additional modules or something
        }
    }

    override fun NewProfileState.init() {
        logger.info { "Initializing the state of the NewProfile component" }

        justMounted = true
        changedByUser = false

        listOfCores = mutableListOf()
        rmType = RMType.RBAC_CRYPTOAC
        mmType = MMType.RBAC_MYSQL
        dmType = DMType.CRYPTOAC
        acType = ACType.RBAC_OPA
        coreType = CoreType.RBAC_AT_REST
        availableRMImplementations = getRMImplementations(CoreType.RBAC_AT_REST)
        availableMMImplementations = getMMImplementations(CoreType.RBAC_AT_REST)
        availableDMImplementations = getDMImplementations(CoreType.RBAC_AT_REST)
        availableACImplementations = getACImplementations(CoreType.RBAC_AT_REST)

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        NewProfile::class.js.asDynamic().getDerivedStateFromProps = {
            props: NewProfileProps, state: NewProfileState ->
            if (state.justMounted || !state.changedByUser) {
                state.listOfCores = mutableListOf()
                CoreType.values().forEach {
                    // TODO when ABAC cores are completed and functioning,
                    //  decomment "if" below. that removes the possibility
                    //  of having ABAC cores
                    if (it != CoreType.ABAC_AT_REST && it != CoreType.ABAC_MQTT) {
                        if (!props.excludedCoreTypes.contains(it)) {
                            state.listOfCores.add(
                                CryptoACRadioOption(
                                    label = it.toPrettyString(),
                                    name = it.toString(),
                                    color = "primary"
                                )
                            )
                        }
                    }
                }
                if (state.listOfCores.firstOrNull { it.name == state.coreType.toString() } == null) {
                    state.listOfCores.firstOrNull()?.let {
                        changeCoreType(CoreType.valueOf(it.name))
                    }
                }
            }
            state.changedByUser = false
            state.justMounted = false
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
     * Change the value of the 'acType'
     * state to the [newACType]
     */
    private fun changeACType(newACType: ACType) {
        logger.info { "Setting the 'acType' state to $newACType" }
        setState {
            acType = newACType
            // TODO compute and update score
        }
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
    private fun changeCoreType(newCoreType: CoreType) {
        logger.info { "Changing the 'coreType' state to $newCoreType" }
        setState {
            coreType = newCoreType
            availableRMImplementations = getRMImplementations(newCoreType)
            availableMMImplementations = getMMImplementations(newCoreType)
            availableDMImplementations = getDMImplementations(newCoreType)
            availableACImplementations = getACImplementations(newCoreType)
            if (rmType.toString() !in availableRMImplementations) {
                rmType = RMType.valueOf(availableRMImplementations.first())
            }
            if (mmType.toString() !in availableMMImplementations) {
                mmType = MMType.valueOf(availableMMImplementations.first())
            }
            if (dmType.toString() !in availableDMImplementations) {
                dmType = DMType.valueOf(availableDMImplementations.first())
            }
            if (acType.toString() !in availableACImplementations) {
                acType = ACType.valueOf(availableACImplementations.first())
            }
        }
    }
}

fun newProfile(handler: NewProfileProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(NewProfile::class) {
            attrs(handler)
        }
    }!!
}
