package eu.fbk.st.cryptoac.view.content.tradeoffboard

import csstype.Display
import emotion.react.css
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.materialui.grid
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemProps
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemState
import org.w3c.dom.HTMLInputElement
import react.*
import react.dom.html.ReactHTML.div

external interface ConfigurationItemProps : Props {
    /** The name of this configuration item */
    var nameProp: String

    /** Whether the item should be disabled */
    var disabledProp: Boolean

    /** Whether the radio options should be in the same row */
    var optionsInRowProp: Boolean

    /** The values for this configuration item */
    var valuesProp: List<String>

    /** The default value for this configuration item */
    var defaultValueProp: String

    /** Change configuration for this item */
    var handleChangeChoiceProp: (String) -> Unit
}

data class ConfigurationItemState(
    /** The current choice for this item */
    var currentChoiceState: String
) : State

// TODO doc
fun getStateFromProps(
    props: ConfigurationItemProps,
    oldState: ConfigurationItemState = ConfigurationItemState(props.defaultValueProp),
): ConfigurationItemState {
    oldState.currentChoiceState = props.defaultValueProp
    val copy = true
    return if (copy) oldState.copy() else oldState
}

/** A configuration item component with a radio group */
val ConfigurationItem = FC<ConfigurationItemProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [ConfigurationItemState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    grid {
        item = true
        xs = 12
        sm = 4
        div {
            css {
                display = Display.inlineFlex
            }
            CryptoACRadioGroup {
                nameProp = props.nameProp
                disabledProp = props.disabledProp
                rowProp = props.optionsInRowProp
                defaultValueProp = props.defaultValueProp
                onChangeProp = { event ->
                    props.handleChangeChoiceProp((event.target as HTMLInputElement).value)
                    true
                }
                optionsProp = props.valuesProp.map {
                    CryptoACRadioOption(
                        label = it,
                        name = it,
                        color = "primary"
                    )
                }
            }
        }
    }
}

