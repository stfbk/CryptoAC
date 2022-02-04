@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import org.w3c.dom.events.Event
import react.*

@JsName("TableRow")
external val tableRow: ComponentClass<TableRowProps>

external interface TableRowProps : Props {
    var hover: Boolean
    var onClick: (Event) -> Unit
    var role: Boolean
    var tabIndex: Int
    var selected: Boolean
}