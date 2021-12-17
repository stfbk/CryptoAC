@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("TableCell")
external val tableCell: ComponentClass<TableCellProps>

external interface TableCellProps : Props {
    var align: String
    var padding: String
    var sortDirection: String
}