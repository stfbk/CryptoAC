package eu.fbk.st.cryptoac.view.content.newProfile

import csstype.*
import emotion.react.css
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.view.Themes.plainPaperTitleStyle
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.materialui.grid
import mu.KotlinLogging
import react.*
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import kotlin.random.Random

private val logger = KotlinLogging.logger {}

external interface ModuleItemProps : Props {
    /** The title to display of this module item */
    var titleProp: String

    /** The name of this module item */
    var nameProp: String

    /** The default value for this module item */
    var defaultValueProp: String?

    /** The list of options for this module item */
    var optionsProp: List<String>

    /** Change selected value for this item */
    var handleChangeChoiceProp: (String) -> Unit
}

data class ModuleItemState(
    /** Whether to render the value on change by user */
    var changedByUserState: Boolean = false,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = false,

    /** The current choice for this item */
    var currentChoiceState: String = ""
) : State

// TODO doc
fun getStateFromProps(
    props: ModuleItemProps,
    oldState: ModuleItemState = ModuleItemState(),
): ModuleItemState {
    var copy = false
    if (oldState.justMountedState || !oldState.changedByUserState) {
        oldState.currentChoiceState = if (props.defaultValueProp != null) props.defaultValueProp!! else ""
        copy = true
    }
    oldState.changedByUserState = false
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}

/** A module item component with a single radio group */
val ModuleItem = FC<ModuleItemProps> {props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [ModuleItemState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    CryptoACPaper {
        titleStyleProp = plainPaperTitleStyle
        titleTextProp = props.titleProp
        titleVariantProp = "subtitle1"
        setDividerProp = true
        dividerWidthProp = 95.pct
        childProp = FC<Props> {
            if (props.optionsProp.isEmpty()) {
                p {
                    css {
                        marginTop = 35.pct
                    }
                    +"No option available"
                }
            } else {
                grid {
                    container = true
                    spacing = 1
                    grid {
                        item = true
                        xs = 4
                        grid {
                            container = true
                            spacing = 1
                            grid {
                                item = true
                                xs = 12
                                img {
                                    css {
                                        verticalAlign = VerticalAlign.middle
                                        padding = Padding(3.px, 3.px)
                                        marginTop = 25.pct
                                        maxWidth = 50.pct
                                        maxHeight = 50.pct
                                        width = Auto.auto
                                        height = Auto.auto
                                    }
                                    src = getImageFromModuleImplementation(state.currentChoiceState)
                                }
                            }
                            grid {
                                CryptoACSelect {
                                    nameProp = props.nameProp
                                    labelProp = "Label"
                                    defaultValueProp = state.currentChoiceState
                                    onChangeProp = { newChoice ->
                                        state = state.copy(
                                            changedByUserState = true,
                                            currentChoiceState = newChoice
                                        )
                                        props.handleChangeChoiceProp(newChoice)
                                    }
                                    optionsProp = props.optionsProp
                                }
                                item = true
                                xs = 12
                            }
                        }
                    }
                    grid {
                        // TODO implement the evaluation
                    item = true
                    xs = 8
                    CryptoACScore {
                        labelProp = "Throughput"
                        minProp = 0
                        maxProp = 100
                        valueProp = Random.nextInt(0, 100)
                    }

                    CryptoACScore {
                        labelProp = "Scalability"
                        minProp = 0
                        maxProp = 100
                        valueProp = Random.nextInt(0, 100)
                    }

                    CryptoACScore {
                        labelProp = "Reliability"
                        minProp = 0
                        maxProp = 100
                        valueProp = Random.nextInt(0, 100)
                    }

                    CryptoACScore {
                        labelProp = "Redundancy"
                        minProp = 0
                        maxProp = 100
                        valueProp = Random.nextInt(0, 100)
                    }

                    CryptoACScore {
                        labelProp = "Latency"
                        minProp = 0
                        maxProp = 100
                        valueProp = Random.nextInt(0, 100)
                    }

                    CryptoACScore {
                        labelProp = "CSP Lock-in"
                        minProp = 0
                        maxProp = 100
                        valueProp = Random.nextInt(0, 100)
                    }
                    }
                }
            }
        }.create()
    }
}

fun getImageFromModuleImplementation(choice: String) = when (choice) {
    "CRYPTOAC", "RBAC_CRYPTOAC" -> { "proxy.png" }
    "MOSQUITTO" -> { "mosquitto.png" }
    "RBAC_MYSQL", "ABAC_MYSQL" -> { "mysql.png" }
    "RBAC_REDIS" -> { "redis.png" }
    "NONE", "" -> { "none.png" }
    "MQTT" -> { "mqtt.png" }
    "RBAC_OPA" -> { "opa.png" }
    "RBAC_XACML_AUTHZFORCE" -> { "xacmlauthzforce.png" }
    "RBAC_DYNSEC" -> { "dynsec.png" }
    else -> {
        val message = "Given choice \"$choice\" not corresponding to any module implementation"
        logger.error { message }
        throw IllegalStateException(message)
    }
}
