@file:JsModule("react-pro-sidebar")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.sidebar.prosidebar

import react.*

/** See https://github.com/azouaoui-med/react-pro-sidebar. */
@JsName("Menu")
external val proSidebarMenu: RClass<ProSidebarMenuProps>

external interface ProSidebarMenuProps : RProps {
    /** Shape of the menu icons (one among square|round|circle). */
    var iconShape: String
}
