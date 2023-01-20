package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.paper
import eu.fbk.st.cryptoac.view.components.materialui.typography
import kotlinx.css.*
import kotlinx.js.Object
import react.*

external interface CryptoACPaperProps : Props {
    /** CSS style for the title */
    var titleStyle: Object

    /** Text for the title of the paper */
    var titleText: String

    /** The variant for the title of the paper
     * (i.e., either "h1","h2","h3","h4","h5",
     * "h6","subtitle1","subtitle2","body1",
     * "body2","caption","button","overline",
     * "srOnly" or "inherit")
     */
    var titleVariant: String

    /** The content of the paper */
    var child: ReactElement<Props>

    /** Whether to add a divider between the title and the content */
    var setDivider: Boolean

    /** The CSS width property of the divider */
    var dividerWidth: LinearDimension

    /** Whether the paper is collapsable or not */
    var collapsable: Boolean
}

external interface CryptoACPaperState : State {
    /** Is the paper collapsed? */
    var collapsed: Boolean
}

/** A custom component for a paper */
class CryptoACPaper : RComponent<CryptoACPaperProps, CryptoACPaperState>() {
    override fun RBuilder.render() {

        paper {
            typography {
                attrs {
                    style = props.titleStyle
                    variant = props.titleVariant
                    id = "login"
                    component = "div"
                }
                +props.titleText
            }

            if (props.setDivider) {
                child(
                    cryptoACDivider {
                        width = props.dividerWidth
                        marginTop = 0.px
                        marginBottom = 0.px
                    }
                )
            }

            child(props.child)
        }
    }

    override fun CryptoACPaperState.init() {
        collapsed = false
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACPaper(handler: CryptoACPaperProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(CryptoACPaper::class) {
            attrs(handler)
        }
    }!!
}
