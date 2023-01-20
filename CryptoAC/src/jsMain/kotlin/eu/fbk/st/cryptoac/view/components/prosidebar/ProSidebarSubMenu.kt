@file:JsModule("react-pro-sidebar")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.prosidebar

import react.*

/** See https://github.com/azouaoui-med/react-pro-sidebar */
@JsName("SubMenu")
external val proSidebarSubMenu: ComponentClass<SubMenuProps>

external interface SubMenuProps : Props {
    /** Title for the submenu */
    var title: String

    /** Icon for submenu */
    var icon: ReactElement<Props>
}
