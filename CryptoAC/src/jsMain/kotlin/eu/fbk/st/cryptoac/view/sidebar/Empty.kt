package eu.fbk.st.cryptoac.view.sidebar

import csstype.FlexGrow
import csstype.number
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.div


/**
 * The React component containing the
 * forms for invoking CryptoAC APIs;
 */
val Empty = FC<Props> {
    div {
        css {
            flex = number(1.0)
            flexGrow = number(1.0)
        }
    }
}
