@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("TablePagination")
external val tablePagination: RClass<TablePaginationProps>

external interface TablePaginationProps : RProps {
    var rowsPerPageOptions: Array<Int>
    var component: String
    var count: Int
    var rowsPerPage: Int
    var page: Int
    var onChangePage: (Event, Int) -> Unit
    var onChangeRowsPerPage: (Event) -> Unit
    var labelRowsPerPage: String
}