package eu.fbk.st.cryptoac.ui.components.custom

import eu.fbk.st.cryptoac.ui.components.materialui.core.formControlLabel
import eu.fbk.st.cryptoac.ui.components.materialui.core.radio
import eu.fbk.st.cryptoac.ui.components.materialui.core.radioGroup
import kotlinx.css.Display
import kotlinx.css.display
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import react.*
import styled.css
import styled.styledDiv

external interface CryptoACRadioGroupProps : RProps {
    /** The name of the radio group */
    var name: String

    /** Whether to display the radio options in a single row. */
    var row: Boolean

    /** The default value of the radio group. */
    var defaultValue: String

    /** Handle on change values. */
    var onChange: (Event) -> Unit

    /** The list of radio options. */
    var options: List<CryptoACRadioOption>
}

external interface CryptoACRadioGroupState : RState {
    /** The value of the CryptoAC radio group. */
    var value: String

    /** Whether the component has to set to the new state or not. */
    var hasToSetValue: Boolean
}

/** A custom component for a radio group. */
class CryptoACRadioGroup: RComponent<CryptoACRadioGroupProps, CryptoACRadioGroupState>() {
    override fun RBuilder.render() {
        radioGroup {
            attrs {
                value = state.value
                name = props.name
                row = props.row
                onChange = { event ->
                    setState {
                        hasToSetValue = true
                        value = (event.target as HTMLInputElement).value
                    }
                    if (props.onChange != undefined) {
                        props.onChange(event)
                    }
                }
            }
            props.options.forEach {

                /**
                 * Very much ugly, but the problem is that the "menuItem" component needs a
                 * ReactElement as its icon. However, the only way I found to create a ReactElement
                 * is to render it. Unfortunately, rendering an element makes it appear on the
                 * HTML page automatically. Then, when we give the element as icon to the "menuItem"
                 * component, it gets rendered again. As a result, the icon appears in the HTML page twice.
                 * To fix this problem, I create the element in a hidden div, then re-use the
                 * element for the "menuItem" component. Of course, we have to TODO find a better way.
                 */
                var radioElement: ReactElement? = null
                styledDiv {
                    css {
                        display = Display.none
                    }
                    radioElement = radio {
                        attrs {
                            color = it.color
                            /** check the radio element only if the current value is the same as the name of the element. */
                            checked = state.value == it.name
                        }
                    }
                }

                formControlLabel {
                    attrs {
                        label = it.label
                        value = it.name
                        control = radioElement!!
                    }
                }
            }
        }
    }

    override fun CryptoACRadioGroupState.init() {
        hasToSetValue = false

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACRadioGroup::class.js.asDynamic().getDerivedStateFromProps = {
                props: CryptoACRadioGroupProps, state: CryptoACRadioGroupState ->
            if (!state.hasToSetValue) {
                state.value = if (props.defaultValue == undefined) "" else props.defaultValue
            }
            state.hasToSetValue = false
        }
    }
}

/** Extend RBuilder for easier use of this React component. */
fun RBuilder.cryptoACRadioGroup(handler: CryptoACRadioGroupProps.() -> Unit): ReactElement {
    return child(CryptoACRadioGroup::class) {
        this.attrs(handler)
    }
}

/** Represents an option for a radio group. */
data class CryptoACRadioOption(val label: String, val name: String, val color: String)