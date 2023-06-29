package eu.fbk.st.cryptoac.view.components.custom

import csstype.Display
import csstype.pct
import emotion.react.css
import eu.fbk.st.cryptoac.view.components.materialui.formControlLabel
import eu.fbk.st.cryptoac.view.components.materialui.radio
import eu.fbk.st.cryptoac.view.components.materialui.radioGroup
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemProps
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemState
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import react.*
import react.dom.html.ReactHTML.div

external interface CryptoACRadioGroupProps : Props {
    /** The name of the radio group */
    var nameProp: String

    /** Whether the item should be disabled */
    var disabledProp: Boolean

    /** Whether to display the radio options in a single row */
    var rowProp: Boolean

    /** The default value of the radio group */
    var defaultValueProp: String

    /** Handle on change values */
    var onChangeProp: (Event) -> Boolean

    /** The list of radio options */
    var optionsProp: List<CryptoACRadioOption>
}

data class CryptoACRadioGroupState(
    /** The value of the CryptoAC radio group */
    var valueState: String = "",

    /** Whether to render the value on change by user */
    var changedByUserState: Boolean = false,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true
) : State

// TODO doc
fun getStateFromProps(
    props: CryptoACRadioGroupProps,
    oldState: CryptoACRadioGroupState = CryptoACRadioGroupState(),
): CryptoACRadioGroupState {
    var copy = false
    if (oldState.justMountedState || !oldState.changedByUserState) {
        oldState.valueState = props.defaultValueProp
        copy = true
    }
    oldState.changedByUserState = false
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}


/** A custom component for a radio group */
val CryptoACRadioGroup = FC<CryptoACRadioGroupProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACRadioGroupState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    radioGroup {
        value = state.valueState
        name = props.nameProp
        row = props.rowProp
        onChange = { event: Event ->
            var changeValue = false
            if (props.onChangeProp != undefined) {
                changeValue = props.onChangeProp(event)
            }
            if (changeValue) {
                state = state.copy(
                    changedByUserState = true,
                    valueState = (event.target as HTMLInputElement).value
                )
            }
        }
        div {
            css {
                display = Display.block
                width = 100.pct
            }
            props.optionsProp.forEach {

                formControlLabel {
                    label = it.label
                    value = it.name
                    control = createElement<Props> {
                        radio {
                            attrs {
                                disabled = props.disabledProp
                                color = it.color
                                /** check the radio element only if the current value is the same as the name of the element */
                                checked = state.valueState == it.name
                                size = "small"
                            }
                        }
                    }!!
                }
            }

            if (props.optionsProp.isEmpty()) {
                +"No option available"
            }
        }
    }
}

/** Represents an option for a radio group */
data class CryptoACRadioOption(
    val label: String,
    val name: String,
    val color: String
)
