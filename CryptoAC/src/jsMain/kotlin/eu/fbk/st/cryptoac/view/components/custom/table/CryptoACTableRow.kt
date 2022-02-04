package eu.fbk.st.cryptoac.view.components.custom.table

data class CryptoACTableRow(
    /** The column identifier. It's used to match fields of rows */
    val field: String,

    /** The title of the column rendered in the column header cell */
    val headerName: String,

    /** The description of the column rendered as tooltip if the column header name is not fully displayed */
    val description: String,

    /** One between 'string', 'number', 'date', 'dateTime' and 'boolean' */
    val type: String = "string",

    /** Column fluid width with respect to the total width of the table (or parent container) */
    val flex: Int = 1,

    /** Allows to resize the column by dragging the right portion of the column separator */
    val resizable: Boolean = false
)