package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.textField
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemProps
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemState
import kotlinext.js.asJsObject
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import react.*

external interface CryptoACTextFieldProps : Props {
    /** Additional CCS class name */
    var classNameProp: String

    /** The name of the radio group */
    var nameProp: String

    /** The type of input to be provided */
    var typeProp: String

    /** Whether the field is disabled */
    var disabledProp: Boolean

    /** The label/placeholder for this field */
    var labelProp: String

    /** Text field variant among "standard", "filled" and "outlined" */
    var variantProp: String

    /** Default value for the input */
    var defaultValueProp: String

    /** "primary" or "secondary" color */
    var colorProp: String

    /** Invoked when the field changes value */
    var onChangeProp: (String) -> Unit
}


data class CryptoACTextFieldState(
    /** The value of the text field */
    var valueState: String = "",

    /** Whether to render the value on change by user */
    var changedByUserState: Boolean = false,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true
) : State

// TODO doc
fun getStateFromProps(
    props: CryptoACTextFieldProps,
    oldState: CryptoACTextFieldState = CryptoACTextFieldState(),
): CryptoACTextFieldState {
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
val CryptoACTextField = FC<CryptoACTextFieldProps> {props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACTextFieldState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    textField {
        className = props.classNameProp
        value = state.valueState
        name = props.nameProp
        label = props.labelProp
        type = props.typeProp
        variant = props.variantProp
        color = props.colorProp
        autoComplete = "off"
        required = true
        disabled = props.disabledProp
        onChange = { event: Event ->
            val newValue = (event.target as HTMLInputElement).value
            if (props.onChangeProp != undefined) {
                props.onChangeProp(newValue)
            }
            state = state.copy(
                changedByUserState = true,
                valueState = newValue
            )
        }
    }
}