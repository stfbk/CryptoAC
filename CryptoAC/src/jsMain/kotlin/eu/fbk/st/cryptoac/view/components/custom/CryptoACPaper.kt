package eu.fbk.st.cryptoac.view.components.custom

import csstype.Width
import csstype.px
import eu.fbk.st.cryptoac.view.components.materialui.paper
import eu.fbk.st.cryptoac.view.components.materialui.typography
import js.core.Object
import react.*

external interface CryptoACPaperProps : Props {
    /** CSS style for the title */
    var titleStyleProp: Object

    /** Text for the title of the paper */
    var titleTextProp: String

    /** The variant for the title of the paper
     * (i.e., either "h1","h2","h3","h4","h5",
     * "h6","subtitle1","subtitle2","body1",
     * "body2","caption","button","overline",
     * "srOnly" or "inherit")
     */
    var titleVariantProp: String

    /** The content of the paper */
    var childProp: ReactElement<*>

    /** Whether to add a divider between the title and the content */
    var setDividerProp: Boolean

    /** The CSS width property of the divider */
    var dividerWidthProp: Width

    /** Whether the paper is collapsable or not */
    var collapsable: Boolean
}

data class CryptoACPaperState(
    /** Is the paper collapsed? */
    var collapsedState: Boolean = false
) : State

/** A custom component for a paper */
val CryptoACPaper = FC<CryptoACPaperProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACPaperState] for details
     */
    var state by useState(CryptoACPaperState())

    paper {
        typography {
            style = props.titleStyleProp
            variant = props.titleVariantProp
            id = "login"
            component = "div"
            +props.titleTextProp
        }

        if (props.setDividerProp) {
            CryptoACDivider {
                widthProp = props.dividerWidthProp
                marginTopProp = 0.px
                marginBottomProp = 0.px
            }
        }

        child(props.childProp)
    }
}
