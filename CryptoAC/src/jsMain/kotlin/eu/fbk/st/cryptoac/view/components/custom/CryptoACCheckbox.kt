package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.checkbox
import eu.fbk.st.cryptoac.view.components.materialui.formControlLabel
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemProps
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemState
import react.*

// TODO document
const val divider = "4%&£$5"

external interface CryptoACCheckboxProps : Props {
    /** Whether the field is disabled */
    var disabledProp: Boolean

    /** Default value for the input */
    var defaultValueProp: String

    /** The label/placeholder for this field */
    var labelProp: String
}

data class CryptoACCheckboxState(
    /** The value of the checkbox */
    var valueState: String = "",

    /** Whether to render the value on change by user */
    var changedByUserState: Boolean = false,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true
) : State

// TODO doc
fun getStateFromProps(
    props: CryptoACCheckboxProps,
    oldState: CryptoACCheckboxState = CryptoACCheckboxState(),
): CryptoACCheckboxState {
    var copy = false
    if (oldState.justMountedState || !oldState.changedByUserState) {
        oldState.valueState = "${props.defaultValueProp}$divider${props.labelProp}"
        copy = true
    }
    oldState.changedByUserState = false
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}

/** A custom component for a radio group */
val CryptoACCheckbox = FC<CryptoACCheckboxProps> {props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACCheckboxState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    formControlLabel {
        control = createElement {
            checkbox {
                attrs {
                    disabled = props.disabledProp
                    value = state.valueState
                    checked = state.valueState.split(divider)[0].toBoolean()
                    onChange = {
                        state = state.copy(
                            changedByUserState = true,
                            valueState = if (state.valueState == "true$divider${props.labelProp}")
                                    "false$divider${props.labelProp}"
                                else
                                    "true$divider${props.labelProp}"
                        )
                    }
                }
            }
        }!!
        label = props.labelProp
        value = props.labelProp
        labelPlacement = "start"
    }
}
