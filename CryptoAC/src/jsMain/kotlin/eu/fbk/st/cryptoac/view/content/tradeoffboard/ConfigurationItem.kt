package eu.fbk.st.cryptoac.view.content.tradeoffboard

import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.materialui.grid
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import org.w3c.dom.HTMLInputElement
import react.*
import styled.css
import styled.styledDiv

external interface ConfigurationItemProps : Props {
    /** The name of this configuration item */
    var name : String

    /** Whether the item should be disabled */
    var disabled : Boolean

    /** Whether the radio options should be in the same row */
    var optionsInRow : Boolean

    /** The values for this configuration item */
    var values : List<String>

    /** The default value for this configuration item */
    var defaultValue : String

    /** Change configuration for this item */
    var handleChangeChoice : (String) -> Unit
}

external interface ConfigurationItemState : State {
    /** The current choice for this item */
    var currentChoice: String
}

/** A configuration item component with a radio group */
class ConfigurationItem: RComponent<ConfigurationItemProps, ConfigurationItemState>() {
    override fun RBuilder.render() {

        grid {

            attrs {
                item = true
                xs = 12
                sm = 4
            }
            styledDiv {
                css {
                    display = Display.inlineFlex
                }
                child(cryptoACRadioGroup {
                    name = props.name
                    disabled = props.disabled
                    row = props.optionsInRow
                    defaultValue = props.defaultValue
                    onChange = { event ->
                        props.handleChangeChoice((event.target as HTMLInputElement).value)
                        true
                    }
                    options = props.values.map {
                        CryptoACRadioOption(
                            label = it,
                            name = it,
                            color = "primary"
                        )
                    }
                })
            }
        }
    }

    override fun ConfigurationItemState.init() {
        MainScope().launch {
            setState {
                currentChoice = props.defaultValue
            }
        }
    }

    /** Re-render only if the default value is different from the previous default value */
    override fun shouldComponentUpdate(nextProps: ConfigurationItemProps, nextState: ConfigurationItemState): Boolean {
        return (nextProps.defaultValue != props.defaultValue)
    }
}

/** Extend RBuilder for easier use of this React component */
fun configurationItem(handler: ConfigurationItemProps.() -> Unit): ReactElement {
    return createElement {
        child(ConfigurationItem::class) {
            this.attrs(handler)
        }
    }!!
}