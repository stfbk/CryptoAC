@file:JsModule("react-pro-sidebar")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.sidebar.prosidebar

import react.*

/** See https://github.com/azouaoui-med/react-pro-sidebar. */
@JsName("SubMenu")
external val proSidebarSubMenu: RClass<SubMenuProps>

external interface SubMenuProps : RProps {
    /** Title for the submenu. */
    var title: String

    /** Icon for submenu. */
    var icon: ReactElement
}
