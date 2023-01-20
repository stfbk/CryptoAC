package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.slider
import kotlinx.css.padding
import org.w3c.dom.get
import react.*
import react.dom.div
import react.dom.html.ReactHTML.p
import styled.css
import styled.styledDiv

external interface CryptoACSliderProps : Props {
    /** Label to add above the slider */
    var label: String

    /** minimum value of the slider */
    var min: Int

    /** maximum value of the slider */
    var max: Int

    /** "primary" or "secondary" color */
    var color: String

    /** the default value of the slider (if single value) */
    var defaultValue: Int

    /** the default values of the slider (if range values) */
    var defaultValues: Array<Int>

    /** Whether the slider is a range selection */
    var range: Boolean

    /** Invoked when the slider changes value */
    var onChange: (Any) -> Unit
}

external interface CryptoACSliderState : State {
    /** The value of the slider (if single value) */
    var value: Int

    /** The value of the slider (if range values) */
    var values: Array<Int>

    /** Whether the component was just mounted */
    var justMounted: Boolean
}

/** A custom component for a radio group */
class CryptoACSlider : RComponent<CryptoACSliderProps, CryptoACSliderState>() {
    override fun RBuilder.render() {

        div {
            if (props.label != undefined) {
                p {
                    +props.label
                }
            }
            styledDiv {
                css {
                    padding = "20px"
                }

                slider {
                    attrs {
                        min = props.min
                        max = props.max
                        value = if (props.range) { state.values } else { state.value }
                        color = props.color
                        valueLabelDisplay = "auto"
                        onChange = { _, newValue ->
                            if (props.range) {
                                setState { values = newValue as Array<Int> }
                            } else {
                                setState { value = newValue as Int }
                            }

                            if (props.onChange != undefined) {
                                props.onChange(newValue)
                            }
                        }
                    }
                }
            }
        }
    }

    override fun CryptoACSliderState.init() {
        justMounted = true

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACSlider::class.js.asDynamic().getDerivedStateFromProps = {
            props: CryptoACSliderProps, state: CryptoACSliderState ->
            if (state.justMounted) {
                if (props.range) {
                    state.values = props.defaultValues
                } else {
                    state.value = props.defaultValue
                }
            }
            state.justMounted = false
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACSlider(handler: CryptoACSliderProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(CryptoACSlider::class) {
            attrs(handler)
        }
    }!!
}
