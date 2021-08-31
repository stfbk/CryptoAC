package eu.fbk.st.cryptoac.ui.components.custom

import eu.fbk.st.cryptoac.ui.components.materialui.core.textField
import org.w3c.dom.HTMLInputElement
import react.*

external interface CryptoACTextFieldProps : RProps {
    /** Additional CCS class name. */
    var className: String

    /** The name of the radio group. */
    var name: String

    /** The type of input to be provided. */
    var type: String

    /** The label/placeholder for this field. */
    var label: String

    /** Text field variant among "standard", "filled" and "outlined" */
    var variant: String

    /** Default value for the input. */
    var defaultValue: String

    /** "primary" or "secondary" color. */
    var color: String
}

external interface CryptoACTextFieldState : RState {
    /** The value of the text field. */
    var value: String

    /** Whether the component has to set to the new state or not. */
    var hasToSetValue: Boolean
}

/** A custom component for a radio group. */
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
                onChange = { event ->
                    setState {
                        hasToSetValue = true
                        value = (event.target as HTMLInputElement).value
                    }
                }
            }
        }
    }

    override fun CryptoACTextFieldState.init() {
        hasToSetValue = false

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACTextField::class.js.asDynamic().getDerivedStateFromProps = {
                props: CryptoACTextFieldProps, state: CryptoACTextFieldState ->
            if (!state.hasToSetValue) {
                state.value = if (props.defaultValue == undefined) "" else props.defaultValue
            }
            state.hasToSetValue = false
        }
    }
}

/** Extend RBuilder for easier use of this React component. */
fun RBuilder.cryptoACTextField(handler: CryptoACTextFieldProps.() -> Unit): ReactElement {
    return child(CryptoACTextField::class) {
        this.attrs(handler)
    }
}