@file:JsModule("react-pro-sidebar")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.prosidebar

import csstype.Width
import react.*

/** See https://github.com/azouaoui-med/react-pro-sidebar */
@JsName("Sidebar")
external val proSidebar: ComponentClass<ProSidebarProps>

external interface ProSidebarProps : Props {
    /** Collapsed status of the sidebar */
    var collapsed: Boolean

    /** Width of the sidebar on collapsed state */
    var collapsedWidth: Width

    /** Width of the sidebar */
    var width: Width

    /** Url of the image to use in the sidebar background */
    var image: String

    /** Set break point to specify when the sidebar should be responsive (one among xs|sm|md|lg|xl) */
    var breakpoint: String

    /** Duration for the transition in milliseconds to be used in collapse and toggle behavior */
    var transitionDuration: Int
}
