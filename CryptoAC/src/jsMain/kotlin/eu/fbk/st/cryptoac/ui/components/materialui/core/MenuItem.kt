@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("MenuItem")
external val menuItem: ComponentClass<MenuItemProps>

external interface MenuItemProps : Props {
    var value: String
}