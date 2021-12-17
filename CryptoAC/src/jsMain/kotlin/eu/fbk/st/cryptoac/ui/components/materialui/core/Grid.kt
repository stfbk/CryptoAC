@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("Grid")
external val grid: ComponentClass<GridProps>

external interface GridProps : Props {
    var container: Boolean
    var item: Boolean
    var xs: Int
    var sm: Int
    var spacing: Int
}