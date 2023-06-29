package eu.fbk.st.cryptoac.view.components.custom

import csstype.Auto
import emotion.react.css
import eu.fbk.st.cryptoac.view.Themes.greyColor
import eu.fbk.st.cryptoac.view.Themes.purpleLinearGradient
import org.w3c.dom.events.Event
import react.*
import react.dom.html.ReactHTML.span

external interface CryptoACButtonAndIconProps : Props {
    /** The icon for this button */
    var iconProp: ReactElement<*>

    /** The text of the button */
    var textProp: String

    /** Whether to show the text of the button */
    var showTextProp: Boolean

    /** The function to invoke on click */
    var onClickProp: (Event) -> Unit

    /** Whether this button should be highlighted or not */
    var highlightedProp: Boolean
}

/** A custom component for a button and icon element */
val CryptoACButtonAndIcon = FC<CryptoACButtonAndIconProps> { props ->

    eu.fbk.st.cryptoac.view.components.materialui.button {
        variant = "text"
        style = JSON.parse(
            """{
            "margin": "5px",
            ${if (props.showTextProp) """ "width": "90%", """ else "" }
            ${if (props.highlightedProp) """ "backgroundImage": "$purpleLinearGradient", """ else "" }
            "color": "${ if (props.highlightedProp) "white" else greyColor }"
        }""".trimMargin()
        )
        onClick = { event: Event -> props.onClickProp(event) }

        child(props.iconProp)

        if (props.showTextProp) {
            +props.textProp
            span {
                css {
                    marginLeft = Auto.auto
                }
                +""
            }
        }
    }
}

/** Data defining a CryptoACButtonAndIcon react element */
data class CryptoACButtonAndIconData(
    var icon: ReactElement<*>,
    var text: String,
    var showText: Boolean,
    var onClick: (Event) -> Unit
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is CryptoACButtonAndIconData) return false

        if (icon != other.icon) return false
        if (text != other.text) return false
        if (showText != other.showText) return false
        return onClick == other.onClick
    }

    override fun hashCode(): Int {
        var result = icon.key.hashCode()
        result = 31 * result + text.hashCode()
        result = 31 * result + showText.hashCode()
        return result
    }
}
