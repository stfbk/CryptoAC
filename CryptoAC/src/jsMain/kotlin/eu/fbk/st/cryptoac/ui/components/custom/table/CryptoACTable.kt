package eu.fbk.st.cryptoac.ui.components.custom.table

import eu.fbk.st.cryptoac.ui.components.icons.*
import eu.fbk.st.cryptoac.ui.components.materialui.core.*
import kotlinx.browser.document
import kotlinx.css.*
import org.w3c.dom.events.Event
import react.*
import styled.css
import styled.styledDiv

external interface CryptoACTableProps : RProps {
    // TODO e doc
    var elements: List<Array<String>>
    var columns: Array<CryptoACTableColumn>
    var title: String
    var onRefresh: (Event) -> Unit
    var onClose: (Event) -> Unit
    var onElementClick: (Array<String>) -> Unit
}

external interface CryptoACTableState : RState {
    // TODO e doc
    var rowsPerPage: Int
    var page: Int
}


/** A table component. */
class CryptoACTable: RComponent<CryptoACTableProps, CryptoACTableState>() {
    override fun RBuilder.render() {

        var faUndoAltIcon: ReactElement? = null
        var faTimesIcon: ReactElement? = null
        var faDownloadIcon: ReactElement? = null
        styledDiv {
            css {
                display = Display.none
            }
            faUndoAltIcon = faUndoAlt { }
            faTimesIcon = faTimes { }
            faDownloadIcon = faDownload { }
        }

        paper {
            toolbar {
                typography {
                    attrs {
                        variant = "h6"
                        id = "tableTitle"
                        component = "div"
                    }
                    +props.title
                }

                styledDiv {
                    css {
                        marginLeft = LinearDimension.auto
                        marginRight = 0.px
                    }
                    if (props.onClose != undefined) {
                        styledDiv {
                            css {
                                marginLeft = 5.px
                                float = Float.left
                            }
                            tooltip {
                                attrs.title = "Close"
                                iconButton {
                                    attrs {
                                        size = "small"
                                        label = "close"
                                        children = faTimesIcon!!
                                        onClick = { event -> props.onClose(event) }
                                    }
                                }
                            }
                        }
                    }
                    styledDiv {
                        css {
                            marginLeft = 5.px
                            float = Float.left
                        }
                        tooltip {
                            attrs.title = "Download as CSV"
                            iconButton {
                                attrs {
                                    size = "small"
                                    label = "download data"
                                    children = faDownloadIcon!!
                                    onClick = {
                                        val csv = StringBuilder()
                                        var prefix = ""
                                        props.columns.forEach {
                                            csv.append(prefix)
                                            prefix = ","
                                            csv.append(it.field)
                                        }
                                        /** "%0A" is "\n". */
                                        csv.append("%0A")
                                        props.elements.forEach { array ->
                                            prefix = ""
                                            array.forEach {
                                                csv.append(prefix)
                                                prefix = ","
                                                csv.append(it)
                                            }
                                            /** "%0A" is "\n". */
                                            csv.append("%0A")
                                        }
                                        val element = document.createElement("a")
                                        // TODO this may not work with > 2KB of data (?)
                                        element.setAttribute("href", "data:text/csv;charset=utf-8,$csv")
                                        element.setAttribute("download", "${props.title}.csv")
                                        element.setAttribute("display", "none")
                                        document.body!!.appendChild(element)
                                        element.asDynamic().click()
                                        document.body!!.removeChild(element)
                                    }
                                }
                            }
                        }
                    }
                    styledDiv {
                        css {
                            marginLeft = 5.px
                            float = Float.left
                        }
                        tooltip {
                            attrs.title = "Refresh"
                            iconButton {
                                attrs {
                                    size = "small"
                                    label = "refresh"
                                    children = faUndoAltIcon!!
                                    onClick = { event -> props.onRefresh(event) }
                                }
                            }
                        }
                    }
                }
            }
            styledDiv {
                css {
                    paddingLeft = 5.px
                    paddingRight = 5.px
                }
                tableContainer {
                    table {
                        tableHead {
                            tableRow {
                                props.columns.forEach {
                                    tableCell {
                                        key = it.field
                                        attrs {
                                            align = "center"
                                        }
                                        +it.headerName
                                    }
                                }
                            }
                        }
                        tableBody {
                            props.elements.subList(fromIndex(), toIndex()).forEach {
                                tableRow {
                                    key = it.joinToString("")
                                    attrs {
                                        hover = true
                                        selected = false
                                        onClick = { _ -> props.onElementClick(it) }
                                    }
                                    it.forEach {
                                        tableCell {
                                            attrs.align = "center"
                                            +it
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            tablePagination {
                attrs {
                    rowsPerPageOptions = arrayOf(5, 10, 25, 50)
                    component = "div"
                    count = props.elements.size
                    rowsPerPage = state.rowsPerPage
                    page = state.page
                    labelRowsPerPage = "Rows:"
                    onChangePage = { _: Event, newPage: Int ->
                        setState {
                            page = newPage
                        }
                    }
                    onChangeRowsPerPage = { event: Event ->
                        setState {
                            rowsPerPage = event.target.asDynamic().value as Int
                            page = 0
                        }
                    }
                }
            }
        }
    }

    private fun toIndex(): Int {
        val toIndex = fromIndex() + state.rowsPerPage
        val maxIndex = props.elements.size
        return if (toIndex >= maxIndex) {
            maxIndex
        } else {
            toIndex
        }
    }
    private fun fromIndex(): Int {
        val fromIndex = state.rowsPerPage * (state.page)
        val maxIndex = props.elements.size
        return if (fromIndex >= maxIndex) {
            maxIndex
        } else {
            if (fromIndex < 0) {
                0
            }
            else {
                fromIndex
            }
        }
    }

    override fun CryptoACTableState.init() {
        page = 0
        rowsPerPage = 10
    }
}

/** Extend RBuilder for easier use of this React component. */
fun RBuilder.cryptoACTable(handler: CryptoACTableProps.() -> Unit): ReactElement {
    return child(CryptoACTable::class) {
        this.attrs(handler)
    }
}