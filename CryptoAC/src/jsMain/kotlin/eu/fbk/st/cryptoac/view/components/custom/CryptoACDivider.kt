package eu.fbk.st.cryptoac.view.components.custom

import csstype.*
import emotion.react.css
import react.*
import react.dom.html.ReactHTML.div

external interface CryptoACDividerProps : Props {
    /** The width of this divider */
    var widthProp: Width

    /** The padding at the top of this divider */
    var marginTopProp: MarginTop

    /** The margin at the bottom of this divider */
    var marginBottomProp: MarginBottom
}

/** A custom component for a divider (a single pixel solid line) */
val CryptoACDivider = FC<CryptoACDividerProps> { props ->

    div {
        css {
            width = props.widthProp
            marginTop = props.marginTopProp
            marginBottom = props.marginBottomProp
            marginLeft = Auto.auto
            marginRight = Auto.auto
            borderBottomColor = Color("rgba(173, 173, 173, 0.2)")
            borderBottomWidth = 1.px
            borderBottomStyle = LineStyle.solid
        }
    }
}
