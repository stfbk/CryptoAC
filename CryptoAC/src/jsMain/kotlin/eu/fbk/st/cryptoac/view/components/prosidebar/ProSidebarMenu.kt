@file:JsModule("react-pro-sidebar")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.prosidebar

import react.*

/** See https://github.com/azouaoui-med/react-pro-sidebar */
@JsName("Menu")
external val proSidebarMenu: ComponentClass<ProSidebarMenuProps>

external interface ProSidebarMenuProps : Props {
    /** Shape of the menu icons (one among square|round|circle) */
    var iconShape: String
}
