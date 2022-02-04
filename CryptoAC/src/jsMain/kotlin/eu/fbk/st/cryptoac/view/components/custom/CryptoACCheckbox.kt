package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.checkbox
import eu.fbk.st.cryptoac.view.components.materialui.formControlLabel
import react.*

external interface CryptoACCheckboxProps : Props {
    /** Default value for the input */
    var defaultValue: String

    /** The label/placeholder for this field */
    var label: String
}

external interface CryptoACCheckboxState : State {
    /** The value of the checkbox */
    var value: String

    /** Whether to render the value on change by user */
    var changedByUser: Boolean

    /** Whether the component was just mounted */
    var justMounted: Boolean
}

/** A custom component for a radio group */
class CryptoACCheckbox: RComponent<CryptoACCheckboxProps, CryptoACCheckboxState>() {
    override fun RBuilder.render() {

        formControlLabel {
            attrs {
                control = createElement {
                    checkbox {
                        attrs {
                            value = state.value
                            checked = state.value.split("_")[0].toBoolean()
                            onChange = {
                                setState {
                                    changedByUser = true
                                    value = if (state.value == "true_${props.label}")
                                        "false_${props.label}"
                                    else
                                        "true_${props.label}"
                                }
                            }
                        }
                    }
                }!!
                label = props.label
                value = props.label
                labelPlacement = "start"
            }
        }
    }

    override fun CryptoACCheckboxState.init() {
        justMounted = true
        changedByUser = false

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACCheckbox::class.js.asDynamic().getDerivedStateFromProps = {
                props: CryptoACCheckboxProps, state: CryptoACCheckboxState ->
            if (state.justMounted || !state.changedByUser) {
                state.value = "${props.defaultValue}_${props.label}"
            }
            state.changedByUser = false
            state.justMounted = false
        }
    }

}

/** Extend RBuilder for easier use of this React component */
fun cryptoACCheckbox(handler: CryptoACCheckboxProps.() -> Unit): ReactElement {
    return createElement {
        child(CryptoACCheckbox::class) {
            this.attrs(handler)
        }
    }!!
}