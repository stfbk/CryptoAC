@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("TableRow")
external val tableRow: RClass<TableRowProps>

external interface TableRowProps : RProps {
    var hover: Boolean
    var onClick: (Event) -> Unit
    var role: Boolean
    var tabIndex: Int
    var selected: Boolean
}