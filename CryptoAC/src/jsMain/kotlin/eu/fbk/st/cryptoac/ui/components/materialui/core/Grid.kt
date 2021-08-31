@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("Grid")
external val grid: RClass<GridProps>

external interface GridProps : RProps {
    var container: Boolean
    var item: Boolean
    var xs: Int
    var sm: Int
    var spacing: Int
}