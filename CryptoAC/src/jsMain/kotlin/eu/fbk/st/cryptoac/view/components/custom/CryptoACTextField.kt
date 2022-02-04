package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.textField
import org.w3c.dom.HTMLInputElement
import react.*

external interface CryptoACTextFieldProps : Props {
    /** Additional CCS class name */
    var className: String

    /** The name of the radio group */
    var name: String

    /** The type of input to be provided */
    var type: String

    /** Whether the field is disabled */
    var disabled: Boolean

    /** The label/placeholder for this field */
    var label: String

    /** Text field variant among "standard", "filled" and "outlined" */
    var variant: String

    /** Default value for the input */
    var defaultValue: String

    /** "primary" or "secondary" color */
    var color: String

    /** Invoked when the field changes value */
    var onChange: (String) -> Unit
}

external interface CryptoACTextFieldState : State {
    /** The value of the text field */
    var value: String

    /** Whether to render the value on change by user */
    var changedByUser: Boolean

    /** Whether the component was just mounted */
    var justMounted: Boolean
}

/** A custom component for a radio group */
class CryptoACTextField: RComponent<CryptoACTextFieldProps, CryptoACTextFieldState>() {
    override fun RBuilder.render() {

        textField {
            attrs {
                className = props.className
                value = state.value
                name = props.name
                label = props.label
                type = props.type
                variant = props.variant
                color = props.color
                autoComplete = "off"
                required = true
                disabled = props.disabled
                onChange = { event ->
                    val newValue = (event.target as HTMLInputElement).value
                    if (props.onChange != undefined) {
                        props.onChange(newValue)
                    }
                    setState {
                        changedByUser = true
                        value = newValue
                    }
                }
            }
        }
    }

    override fun CryptoACTextFieldState.init() {
        justMounted = true
        changedByUser = false

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACTextField::class.js.asDynamic().getDerivedStateFromProps = {
                props: CryptoACTextFieldProps, state: CryptoACTextFieldState ->
            if (state.justMounted || !state.changedByUser) {
                state.value = props.defaultValue
            }
            state.changedByUser = false
            state.justMounted = false
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACTextField(handler: CryptoACTextFieldProps.() -> Unit): ReactElement {
    return createElement {
        child(CryptoACTextField::class) {
            attrs(handler)
        }
    }!!
}