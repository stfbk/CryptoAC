package eu.fbk.st.cryptoac.ui.components.custom

import eu.fbk.st.cryptoac.ui.components.materialui.core.formControlLabel
import eu.fbk.st.cryptoac.ui.components.materialui.core.radio
import eu.fbk.st.cryptoac.ui.components.materialui.core.radioGroup
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import react.*

external interface CryptoACRadioGroupProps : Props {
    /** The name of the radio group */
    var name: String

    /** Whether the item should be disabled */
    var disabled : Boolean

    /** Whether to display the radio options in a single row */
    var row: Boolean

    /** The default value of the radio group */
    var defaultValue: String

    /** Handle on change values */
    var onChange: (Event) -> Unit

    /** The list of radio options */
    var options: List<CryptoACRadioOption>
}

external interface CryptoACRadioGroupState : State {
    /** The value of the CryptoAC radio group */
    var value: String

    /** Whether to render the value on change by user */
    var changedByUser: Boolean

    /** Whether the component was just mounted */
    var justMounted: Boolean
}

/** A custom component for a radio group */
class CryptoACRadioGroup: RComponent<CryptoACRadioGroupProps, CryptoACRadioGroupState>() {
    override fun RBuilder.render() {
        radioGroup {
            attrs {
                value = state.value
                name = props.name
                row = props.row
                onChange = { event ->
                    if (props.onChange != undefined) {
                        props.onChange(event)
                    }
                    setState {
                        changedByUser = true
                        value = (event.target as HTMLInputElement).value
                    }
                }
            }
            props.options.forEach {

                formControlLabel {
                    attrs {
                        label = it.label
                        value = it.name
                        control = createElement {
                            radio {
                                attrs {
                                    disabled = props.disabled
                                    color = it.color
                                    /** check the radio element only if the current value is the same as the name of the element */
                                    checked = state.value == it.name
                                    size = "small"
                                }
                            }
                        }!!
                    }
                }
            }
        }
    }

    override fun CryptoACRadioGroupState.init() {
        justMounted = true
        changedByUser = false

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACRadioGroup::class.js.asDynamic().getDerivedStateFromProps = {
                props: CryptoACRadioGroupProps, state: CryptoACRadioGroupState ->
            if (state.justMounted || !state.changedByUser) {
                state.value = props.defaultValue
            }
            state.changedByUser = false
            state.justMounted = false
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACRadioGroup(handler: CryptoACRadioGroupProps.() -> Unit): ReactElement {
    return createElement {
        child(CryptoACRadioGroup::class) {
            this.attrs(handler)
        }
    }!!
}

/** Represents an option for a radio group */
data class CryptoACRadioOption(val label: String, val name: String, val color: String)