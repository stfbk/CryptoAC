package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.Themes.greyColor
import eu.fbk.st.cryptoac.view.Themes.purpleLinearGradient
import kotlinx.css.*
import org.w3c.dom.events.Event
import react.*
import styled.css
import styled.styledSpan

external interface CryptoACButtonAndIconProps : Props {
    /** The icon for this button */
    var icon: ReactElement<Props>

    /** The text of the button */
    var text: String

    /** Whether to show the text of the button */
    var showText: Boolean

    /** The function to invoke on click */
    var onClick: (Event) -> Unit

    /** Whether this button should be highlighted or not */
    var highlighted: Boolean
}

/** A custom component for a button and icon element */
class CryptoACButtonAndIcon : RComponent<CryptoACButtonAndIconProps, State>() {
    override fun RBuilder.render() {

        eu.fbk.st.cryptoac.view.components.materialui.button {
            attrs {
                variant = "text"
                style = JSON.parse(
                    """{
                    "margin": "5px",
                    ${if (props.showText) """ "width": "90%", """ else "" }
                    ${if (props.highlighted) """ "backgroundImage": "$purpleLinearGradient", """ else "" }
                    "color": "${ if (props.highlighted) "white" else greyColor }"
                }""".trimMargin()
                )
                onClick = { it -> props.onClick(it) }
            }

            child(props.icon)

            if (props.showText) {
                +props.text
                styledSpan {
                    css {
                        marginLeft = LinearDimension.auto
                    }
                    +""
                }
            }
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACButtonAndIcon(handler: CryptoACButtonAndIconProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(CryptoACButtonAndIcon::class) {
            attrs(handler)
        }
    }!!
}

/** Data defining a CryptoACButtonAndIcon react element */
data class CryptoACButtonAndIconData(
    var icon: ReactElement<Props>,
    var text: String,
    var showText: Boolean,
    var onClick: (Event) -> Unit
)
