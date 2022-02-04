package eu.fbk.st.cryptoac.view.components.custom

import mu.KotlinLogging
import react.*
import react.dom.div

private val logger = KotlinLogging.logger {}

external interface CryptoACButtonAndIconGroupProps : Props {
    /** The default selected button (0-indexed) */
    var defaultSelectedButton: Int

    /** The list of button and icon elements of this group */
    var buttons: List<CryptoACButtonAndIconData>
}

external interface CryptoACButtonAndIconGroupState : State {
    /** The current selected button (0-indexed) */
    var selectedButton: Int
}

/** A custom component for a group of button and icon elements */
class CryptoACButtonAndIconGroup: RComponent<CryptoACButtonAndIconGroupProps, CryptoACButtonAndIconGroupState>() {
    override fun RBuilder.render() {

        div {
            props.buttons.forEachIndexed { index, it ->

                key = it.text

                child(cryptoACButtonAndIcon {
                    icon = it.icon
                    text = it.text
                    showText = it.showText
                    onClick = { event ->
                        changeSelectedButton(index)
                        it.onClick(event)
                    }
                    highlighted = if (state.selectedButton == undefined) {
                        props.defaultSelectedButton == index
                    } else {
                        state.selectedButton == index
                    }
                })
            }
        }
    }

    /**
     * Change the value of the 'selectedButton'
     * state to the [newSelectedButton]
     */
    private fun changeSelectedButton(newSelectedButton: Int) {
        logger.info { "Setting the 'selectedButton' state to $newSelectedButton" }
        setState { selectedButton = newSelectedButton }
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACButtonAndIconGroup(handler: CryptoACButtonAndIconGroupProps.() -> Unit): ReactElement {
    return createElement {
        child(CryptoACButtonAndIconGroup::class) {
            attrs(handler)
        }
    }!!
}


