package eu.fbk.st.cryptoac.view.components.custom.table

data class CryptoACTableData(
    /** List of rows, where each row is an array of strings */
    val elements: List<Array<String>>,

    /** List of columns */
    val columns: Array<CryptoACTableColumn>,

    /** The title of the table data */
    val title: String
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is CryptoACTableData) return false

        if (elements != other.elements) return false
        if (!columns.contentEquals(other.columns)) return false
        return title == other.title
    }

    override fun hashCode(): Int {
        var result = elements.hashCode()
        result = 31 * result + columns.contentHashCode()
        result = 31 * result + title.hashCode()
        return result
    }
}
