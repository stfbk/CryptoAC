package eu.fbk.st.cryptoac.view.components.custom

import mu.KotlinLogging
import react.*
import react.dom.html.ReactHTML.div

private val logger = KotlinLogging.logger {}

external interface CryptoACButtonAndIconGroupProps : Props {
    /** The default selected button (0-indexed) */
    var defaultSelectedButtonProp: Int

    /** The list of button and icon elements of this group */
    var buttonsProp: List<CryptoACButtonAndIconData>
}
fun CryptoACButtonAndIconGroupProps.calculateHashCode(): Int {
    var result = defaultSelectedButtonProp.hashCode()
    buttonsProp.forEach {
        result = 31 * result + it.hashCode()
    }
    return result
}

data class CryptoACButtonAndIconGroupState(
    /** The current selected button (0-indexed) */
    var selectedButtonState: Int = 0,

    /** Whether the component was just mounted */
    var justMountedState: Boolean = true,

    /** Hash of last props received */
    var propsHashState: Int = 0
): State

// TODO doc
fun getStateFromProps(
    props: CryptoACButtonAndIconGroupProps,
    oldState: CryptoACButtonAndIconGroupState = CryptoACButtonAndIconGroupState(),
): CryptoACButtonAndIconGroupState {
    var copy = false
    val propsHash = props.calculateHashCode()
    if (oldState.justMountedState || oldState.propsHashState != propsHash) {
        oldState.propsHashState = propsHash
        oldState.selectedButtonState = props.defaultSelectedButtonProp
        copy = true
    }
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}

/** A custom component for a group of button and icon elements */
val CryptoACButtonAndIconGroup = FC<CryptoACButtonAndIconGroupProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACButtonAndIconGroupState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    div {
        props.buttonsProp.forEachIndexed { index, it ->
            key = it.text

            CryptoACButtonAndIcon {
                iconProp = it.icon
                textProp = it.text
                showTextProp = it.showText
                onClickProp = { event ->
                    logger.info { "Setting the 'selectedButton' state to $index" }
                    state = state.copy(
                        selectedButtonState = index
                    )
                    it.onClick(event)
                }
                highlightedProp = state.selectedButtonState == index
            }
        }
    }
}
