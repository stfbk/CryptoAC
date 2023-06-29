package eu.fbk.st.cryptoac.view.components.custom

import csstype.Padding
import csstype.px
import emotion.react.css
import eu.fbk.st.cryptoac.view.components.materialui.slider
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemProps
import eu.fbk.st.cryptoac.view.content.newProfile.ModuleItemState
import org.w3c.dom.events.Event
import react.*
import react.dom.div
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import styled.css

external interface CryptoACSliderProps : Props {
    /** Label to add above the slider */
    var labelProps: String

    /** minimum value of the slider */
    var minProps: Int

    /** maximum value of the slider */
    var maxProps: Int

    /** "primary" or "secondary" color */
    var colorProps: String

    /** the default value of the slider (if single value) */
    var defaultValueProps: Int

    /** the default values of the slider (if range values) */
    var defaultValuesProps: Array<Int>

    /** Whether the slider is a range selection */
    var rangeProps: Boolean

    /** Invoked when the slider changes value */
    var onChangeProps: (Any) -> Unit
}

data class CryptoACSliderState(
    /** The value of the slider (if single value) */
    var valueState: Int = 0,

    /** The value of the slider (if range values) */
    var valuesState: Array<Int> = arrayOf(),

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true
) : State {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is CryptoACSliderState) return false

        if (valueState != other.valueState) return false
        if (!valuesState.contentEquals(other.valuesState)) return false
        return justMountedState == other.justMountedState
    }

    override fun hashCode(): Int {
        var result = valueState
        result = 31 * result + valuesState.contentHashCode()
        result = 31 * result + justMountedState.hashCode()
        return result
    }
}

// TODO doc
fun getStateFromProps(
    props: CryptoACSliderProps,
    oldState: CryptoACSliderState = CryptoACSliderState(),
): CryptoACSliderState {
    var copy = false
    if (oldState.justMountedState) {
        if (props.rangeProps) {
            oldState.valuesState = props.defaultValuesProps
        }
        if (!props.rangeProps) {
            oldState.valueState = props.defaultValueProps
        }
        copy = true
    }
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}

/** A custom component for a radio group */
val CryptoACSlider = FC<CryptoACSliderProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACSliderState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    div {
        if (props.labelProps != undefined) {
            p {
                +props.labelProps
            }
        }
        div {
            css {
                padding = Padding(20.px, 20.px)
            }

            slider {
                min = props.minProps
                max = props.maxProps
                value = if (props.rangeProps) { state.valuesState } else { state.valueState }
                color = props.colorProps
                valueLabelDisplay = "auto"
                onChange = { _: Event, newValue ->
                    state = if (props.rangeProps) {
                        state.copy(
                            valuesState = newValue as Array<Int>
                        )
                    } else {
                        state.copy(
                            valueState = newValue as Int
                        )
                    }

                    if (props.onChangeProps != undefined) {
                        props.onChangeProps(newValue)
                    }
                }
            }
        }
    }
}
