@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import react.*

@JsName("TableCell")
external val tableCell: RClass<TableCellProps>

external interface TableCellProps : RProps {
    var align: String
    var padding: String
    var sortDirection: String
}