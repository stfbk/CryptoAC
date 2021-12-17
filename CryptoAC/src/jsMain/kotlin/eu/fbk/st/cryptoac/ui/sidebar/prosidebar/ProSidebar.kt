@file:JsModule("react-pro-sidebar")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.sidebar.prosidebar

import kotlinx.css.LinearDimension
import react.*

/** See https://github.com/azouaoui-med/react-pro-sidebar */
@JsName("ProSidebar")
external val proSidebar: ComponentClass<ProSidebarProps>

external interface ProSidebarProps : Props {
    /** Collapsed status of the sidebar */
    var collapsed: Boolean

    /** Width of the sidebar on collapsed state */
    var collapsedWidth: LinearDimension

    /** Width of the sidebar */
    var width: LinearDimension

    /** Url of the image to use in the sidebar background */
    var image: String

    /** Set break point to specify when the sidebar should be responsive (one among xs|sm|md|lg|xl) */
    var breakpoint: String
}
