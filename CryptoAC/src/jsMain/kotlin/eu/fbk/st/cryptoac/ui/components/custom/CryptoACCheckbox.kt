package eu.fbk.st.cryptoac.ui.components.custom

import eu.fbk.st.cryptoac.ui.components.materialui.core.checkbox
import eu.fbk.st.cryptoac.ui.components.materialui.core.formControlLabel
import kotlinx.css.Display
import kotlinx.css.display
import react.*
import styled.css
import styled.styledDiv

external interface CryptoACCheckboxProps : RProps {
    /** Default value for the input. */
    var defaultValue: String

    /** The label/placeholder for this field. */
    var label: String
}

external interface CryptoACCheckboxState : RState {
    /** The value of the checkbox. */
    var value: String

    /** Whether the component has to set to the new state or not. */
    var hasToSetValue: Boolean
}

/** A custom component for a radio group. */
class CryptoACCheckbox: RComponent<CryptoACCheckboxProps, CryptoACCheckboxState>() {
    override fun RBuilder.render() {

        var checkboxElement: ReactElement? = null
        styledDiv {
            css {
                display = Display.none
            }
            /*input {
                attrs {
                    name = props.label
                    type = InputType.checkBox
                    value = state.value
                }
            }*/
            checkboxElement = checkbox {
                attrs {
                    value = state.value
                    checked = state.value.split("_")[0].toBoolean()
                    onChange = {
                        setState {
                            hasToSetValue = true
                            value = if (state.value == "true_${props.label}") "false_${props.label}" else "true_${props.label}"
                        }
                    }
                }
            }
        }

        formControlLabel {
            attrs {
                control = checkboxElement!!
                label = props.label
                value = props.label
                labelPlacement = "start"
            }
        }
    }

    override fun CryptoACCheckboxState.init() {
        hasToSetValue = false

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACCheckbox::class.js.asDynamic().getDerivedStateFromProps = {
                props: CryptoACCheckboxProps, state: CryptoACCheckboxState ->
            if (!state.hasToSetValue) {
                state.value = if (props.defaultValue == undefined) "false_${props.label}" else "${props.defaultValue}_${props.label}"
            }
            state.hasToSetValue = false
        }
    }
}

/** Extend RBuilder for easier use of this React component. */
fun RBuilder.cryptoACCheckbox(handler: CryptoACCheckboxProps.() -> Unit): ReactElement {
    return child(CryptoACCheckbox::class) {
        this.attrs(handler)
    }
}