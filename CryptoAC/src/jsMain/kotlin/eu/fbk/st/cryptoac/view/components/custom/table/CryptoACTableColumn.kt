package eu.fbk.st.cryptoac.view.components.custom.table

data class CryptoACTableColumn(
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

val userColumns = arrayOf(
    CryptoACTableColumn("name", "Name", "The name of the user"),
    CryptoACTableColumn("status", "Status", "The current status of the user (INCOMPLETE, OPERATIONAL or DELETED)"),
    CryptoACTableColumn("isAdmin", "Admin", "Whether the user has administrative privileges", "boolean"),
    CryptoACTableColumn("token", "Token", "The token of the user"),
)

val roleColumns = arrayOf(
    CryptoACTableColumn("name", "Name", "The name of the role"),
    CryptoACTableColumn("status", "Status", "The current status of the role (OPERATIONAL or DELETED)"),
    CryptoACTableColumn("token", "Token", "The token of the role"),
)

val fileColumns = arrayOf(
    CryptoACTableColumn("name", "Name", "The name of the file"),
    CryptoACTableColumn("status", "Status", "The current status of the file (OPERATIONAL or DELETED)"),
    CryptoACTableColumn("versionNumber", "#", "The version number of the file", "number"),
    CryptoACTableColumn("token", "Token", "The token of the file"),
)

val assignmentColumns = arrayOf(
    CryptoACTableColumn("username", "Username", "The name of the user"),
    CryptoACTableColumn("role name", "Role Name", "The name of the role"),
    CryptoACTableColumn("versionNumber", "#", "The version number of the role", "number"),
)

val permissionColumns = arrayOf(
    CryptoACTableColumn("role name", "Role Name", "The name of the role"),
    CryptoACTableColumn("file name", "File Name", "The name of the file"),
    CryptoACTableColumn("fileVersionNumber", "#", "The version number of the key", "number"),
    CryptoACTableColumn("permission", "Permission", "The permission assigned (either Read or ReadWrite)"),
)

val mqttMessagesColumns = arrayOf(
    CryptoACTableColumn("message", "Message", "A message sent in the topic"),
)