package eu.fbk.st.cryptoac.view.sidebar

import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarContent
import react.*

/**
 * The React component containing the
 * forms for invoking CryptoAC APIs;
 */
class Empty : RComponent<Props, State>() {
    override fun RBuilder.render() {
        proSidebarContent { }
    }
}

/** Extend RBuilder for easier use of this React component */
fun empty(handler: Props.() -> Unit): ReactElement<Props> {
    return createElement {
        child(Empty::class) {
            this.attrs(handler)
        }
    }!!
}
