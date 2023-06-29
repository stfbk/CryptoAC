package eu.fbk.st.cryptoac.view.components.custom.table

import csstype.*
import emotion.react.css
import eu.fbk.st.cryptoac.view.components.icons.*
import eu.fbk.st.cryptoac.view.components.materialui.*
import web.dom.document
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import org.w3c.dom.events.Event

external interface CryptoACTableProps : Props {
    // TODO e doc
    var elementsProp: List<Array<String>>
    var tableColumnsProp: Array<CryptoACTableColumn>
    var titleProp: String
    var onRefreshProp: (Event) -> Unit
    var onCloseProp: (Event) -> Unit
    var onElementClickProp: (Array<String>) -> Unit
}

data class CryptoACTableState(
    // TODO e doc
    var rowsPerPageState: Int = 10,
    var pageState: Int = 0
) : State

fun fromIndex(rowsPerPageState: Int, pageState: Int, elementsPropSize: Int): Int {
    val fromIndex = rowsPerPageState * (pageState)
    return if (fromIndex >= elementsPropSize) {
        elementsPropSize
    } else {
        if (fromIndex < 0) {
            0
        } else {
            fromIndex
        }
    }
}

fun toIndex(rowsPerPageState: Int, pageState: Int, elementsPropSize: Int): Int {
    val toIndex = fromIndex(rowsPerPageState, pageState, elementsPropSize) + rowsPerPageState
    return if (toIndex >= elementsPropSize) {
        elementsPropSize
    } else {
        toIndex
    }
}

/** A table component */
val CryptoACTable = FC<CryptoACTableProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACTableState] for details
     */
    var state by useState(CryptoACTableState())

    paper {
        toolbar {
            typography {
                variant = "h6"
                id = "tableTitle"
                component = "div"
                +props.titleProp
            }

            div {
                css {
                    marginLeft = Auto.auto
                    marginRight = 0.px
                }
                if (props.onCloseProp != undefined) {
                    div {
                        css {
                            marginLeft = 5.px
                            float = Float.left
                        }
                        tooltip {
                            title = "Close"
                            iconButton {
                                size = "small"
                                label = "close"
                                onClick = { event: Event -> props.onCloseProp(event) }
                                faTimes { }
                            }
                        }
                    }
                }
                div {
                    css {
                        marginLeft = 5.px
                        float = Float.left
                    }
                    tooltip {
                        title = "Download as CSV"
                        iconButton {
                            size = "small"
                            label = "download data"
                            onClick = {
                                val csv = StringBuilder()
                                var prefix = ""
                                props.tableColumnsProp.forEach {
                                    csv.append(prefix)
                                    prefix = ","
                                    csv.append(it.field)
                                }
                                /** "%0A" is "\n" */
                                csv.append("%0A")
                                props.elementsProp.forEach { array ->
                                    prefix = ""
                                    array.forEach {
                                        csv.append(prefix)
                                        prefix = ","
                                        csv.append(it)
                                    }
                                    /** "%0A" is "\n" */
                                    csv.append("%0A")
                                }
                                val element = document.createElement("a")
                                // TODO this may not work with > 2KB of data (?)
                                element.setAttribute("href", "data:text/csv;charset=utf-8,$csv")
                                element.setAttribute("download", "${props.titleProp}.csv")
                                element.setAttribute("display", "none")
                                document.body.appendChild(element)
                                element.asDynamic().click()
                                document.body.removeChild(element)
                            }
                            faDownload { }
                        }
                    }
                }
                div {
                    css {
                        marginLeft = 5.px
                        float = csstype.Float.left
                    }
                    tooltip {
                        title = "Refresh"
                        iconButton {
                                size = "small"
                                label = "refresh"
                                onClick = { event: Event -> props.onRefreshProp(event) }
                            faUndoAlt { }
                        }
                    }
                }
            }
        }
        div {
            css {
                height = 330.px
                paddingLeft = 5.px
                paddingRight = 5.px
            }
            tableContainer {
                if (props.elementsProp.isEmpty()) {
                    div {
                        css {
                            backgroundImage = url("blackhole.svg")
                            backgroundRepeat = BackgroundRepeat.noRepeat
                            backgroundPositionX = BackgroundPositionX.center
                            backgroundPositionY = BackgroundPositionY.center
                            backgroundSize = 150.px
                            lineHeight = 75.px
                            textAlign = TextAlign.center
                            height = 90.pct
                        }
                        p {
                            +"No items in this table yet"
                        }
                    }
                } else {
                    table {
                        tableHead {
                            tableRow {
                                props.tableColumnsProp.forEach {
                                    tableCell {
                                        key = it.field
                                        align = "center"
                                        +it.headerName
                                    }
                                }
                            }
                        }
                        tableBody {
                            props.elementsProp.subList(fromIndex(
                                rowsPerPageState = state.rowsPerPageState,
                                pageState = state.pageState,
                                elementsPropSize = props.elementsProp.size,
                            ), toIndex(
                                rowsPerPageState = state.rowsPerPageState,
                                pageState = state.pageState,
                                elementsPropSize = props.elementsProp.size,
                            )).forEach {
                                tableRow {
                                    key = it.joinToString("")
                                    hover = true
                                    selected = false
                                    onClick = { _ : Event -> props.onElementClickProp(it) }
                                    it.forEach {
                                        tableCell {
                                            align = "center"
                                            +it
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        tablePagination {
            rowsPerPageOptions = arrayOf(5, 10, 25, 50)
            component = "div"
            count = props.elementsProp.size
            rowsPerPage = state.rowsPerPageState
            page = state.pageState
            labelRowsPerPage = "Rows:"
            onPageChange = { _: Event, newPage: Int ->
                state = state.copy(pageState = newPage)
            }
            onRowsPerPageChange = { event: Event ->
                state = state.copy(
                    pageState = 0,
                    rowsPerPageState = event.target.asDynamic().value as Int
                )
            }
        }
    }
}
