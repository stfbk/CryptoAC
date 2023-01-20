package eu.fbk.st.cryptoac.view.components.custom

import kotlinx.css.*
import react.*
import styled.css
import styled.styledDiv

external interface CryptoACDividerProps : Props {
    /** The width of this divider */
    var width: LinearDimension

    /** The padding at the top of this divider */
    var marginTop: LinearDimension

    /** The margin at the bottom of this divider */
    var marginBottom: LinearDimension
}

/** A custom component for a divider (a single pixel solid line) */
class CryptoACDivider : RComponent<CryptoACDividerProps, State>() {
    override fun RBuilder.render() {

        styledDiv {
            css {
                width = props.width
                marginTop = props.marginTop
                marginBottom = props.marginBottom
                marginLeft = LinearDimension.auto
                marginRight = LinearDimension.auto
                borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
            }
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACDivider(handler: CryptoACDividerProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(CryptoACDivider::class) {
            attrs(handler)
        }
    }!!
}
