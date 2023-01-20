package eu.fbk.st.cryptoac.mm.mysql

import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.mm.DEFAULT_LIMIT
import eu.fbk.st.cryptoac.mm.DEFAULT_OFFSET
import mu.KotlinLogging
import org.owasp.encoder.Encode
import java.sql.*
import java.sql.Types.NULL
import kotlin.collections.ArrayList
import kotlin.collections.LinkedHashMap

private val logger = KotlinLogging.logger {}

/**
 * Utility methods for implementing
 * MM interfaces toward MySQL databases
 */
interface MMServiceMySQL {

    /**
     * Create and return a prepared statement for the [connection]
     * to insert the [values] in the [table]. Each list in the [values]
     * is a list of all values for all columns (i.e., each list is a row
     * of the column). A value can be a string, a boolean, an integer
     * or an ElementType
     */
    fun createInsertStatement(
        table: String,
        values: ArrayList<ArrayList<Any?>>,
        connection: Connection
    ): PreparedStatement {
        logger.debug { "Creating insert statement for table $table" }

        /**
         * We set the IGNORE flag to avoid an
         * exception and handle duplicated IDs locally
         */
        val insertBuilder = StringBuilder("INSERT IGNORE INTO $table VALUES ")

        /** A question mark for each value to insert */
        return if (values.isNotEmpty()) {
            val rowsNumber = values.size
            val columnsNumber = values[0].size
            val valuesPlaceholders = StringBuilder("(")
            valuesPlaceholders.append("?,".repeat(columnsNumber))
            valuesPlaceholders.delete(
                valuesPlaceholders.length - 1,
                valuesPlaceholders.length
            ).append("),")
            val placeHolders = valuesPlaceholders.toString()
            insertBuilder.append(placeHolders.repeat(values.size))
            insertBuilder.delete(
                insertBuilder.length - 1,
                insertBuilder.length
            ).append(";")

            val insertStatement = connection.prepareStatement(insertBuilder.toString())
            var index = 1

            /** Insert the values in the prepared statement */
            values.forEach { row ->
                index = insertValuesInStatement(insertStatement, index, row)
            }

            if (index - 1 != rowsNumber * columnsNumber) {
                val message = "Not all rows were given all parameters for all columns"
                logger.warn { message }
                throw SQLException(message)
            }

            /** Do not log the statement, could leak sensitive data */
            insertStatement
        } else {
            val message = "Asked to create an insert statement but no value was given"
            logger.warn { message }
            throw SQLException(message)
        }
    }

    /**
     * Create and return a prepared statement for the [connection]
     * to retrieve the [selectedColumns] from the [table] matching
     * the [whereParameters] and not matching the [whereNotParameters].
     * Start retrieving rows from the [offset] until the [limit]. If
     * [limit] is negative, no limit will be applied. If [justTheCount]
     * is asked, then select the (distinct) count of rows and not the columns.
     * If [selectedColumns] is null or empty, select all columns. The
     * columns inside the COUNT() SQL function are those specified in the
     * [selectedColumns]
     */
    fun createSelectStatement(
        table: String,
        selectedColumns: ArrayList<String>? = null,
        whereParameters: LinkedHashMap<String, Any?>? = null,
        whereNotParameters: LinkedHashMap<String, Any?>? = null,
        offset: Int = DEFAULT_OFFSET,
        limit: Int = DEFAULT_LIMIT,
        justTheCount: Boolean = false,
        connection: Connection
    ): PreparedStatement {
        logger.debug { "Creating select statement for table $table" }

        val selectBuilder = StringBuilder("SELECT ")
        if (justTheCount) {
            selectBuilder.append("COUNT(DISTINCT ")
        }

        if (selectedColumns.isNullOrEmpty()) {
            selectBuilder.append("*")
        } else {
            selectedColumns.forEach {
                selectBuilder.append(it).append(", ")
            }
            selectBuilder.delete(selectBuilder.length - 2, selectBuilder.length)
        }

        if (justTheCount) {
            selectBuilder.append(")")
        }

        selectBuilder.append(" FROM ").append(table)
        selectBuilder.append(createWhereString(whereParameters, whereNotParameters))

        /**
         * Always order by the first column. Actually, we
         * do not need it for ordering, but instead for
         * guaranteeing that pagination works correctly
         */
        /** TODO replace offset with seek method? */
        selectBuilder.append(" ORDER BY 1")

        if (limit > 0)
            selectBuilder.append(" LIMIT ?,?")

        /** Insert the parameters in the statement */
        val selectStatement = connection.prepareStatement(selectBuilder.toString())

        var index = 1
        if (!whereParameters.isNullOrEmpty()) {
            index = insertValuesInStatement(
                statement = selectStatement,
                startingIndex = index,
                values = ArrayList(whereParameters.values)
            )
        }
        if (!whereNotParameters.isNullOrEmpty()) {
            index = insertValuesInStatement(
                statement = selectStatement,
                startingIndex = index,
                values = ArrayList(whereNotParameters.values)
            )
        }

        if (limit > 0) {
            selectStatement.setInt(index, offset)
            selectStatement.setInt(index + 1, limit)
        }

        /** Do not log the statement, could leak sensitive data */
        return selectStatement
    }

    /**
     * Create and return a prepared statement for the [connection]
     * to update the [values] in the [table] where the row matches
     * the [whereParameters] and does not match the [whereNotParameters].
     * A value can be a string, a boolean or an integer
     */
    fun createUpdateStatement(
        table: String,
        values: LinkedHashMap<String, Any>,
        whereParameters: LinkedHashMap<String, Any?>? = null,
        whereNotParameters: LinkedHashMap<String, Any?>? = null,
        connection: Connection
    ): PreparedStatement {
        logger.debug { "Creating update statement for table $table" }

        val updateBuilder = StringBuilder("UPDATE $table SET ")

        if (values.isNotEmpty()) {
            values.forEach { (column, _) ->
                updateBuilder.append(column).append(
                    "=?, "
                )
            }
            updateBuilder.delete(updateBuilder.length - 2, updateBuilder.length)
        } else {
            val message = "Asked to create an update statement but no value was given"
            logger.warn { message }
            throw SQLException(message)
        }
        updateBuilder.append(createWhereString(
            whereParameters = whereParameters,
            whereNotParameters = whereNotParameters
        ))

        val updateStatement = connection.prepareStatement(updateBuilder.toString())

        var index = insertValuesInStatement(
            statement = updateStatement,
            startingIndex = 1,
            values = ArrayList(values.values)
        )
        if (!whereParameters.isNullOrEmpty()) {
            index = insertValuesInStatement(
                statement = updateStatement,
                startingIndex = index,
                values = ArrayList(whereParameters.values)
            )
        }
        if (!whereNotParameters.isNullOrEmpty()) {
            insertValuesInStatement(
                statement = updateStatement,
                startingIndex = index,
                values = ArrayList(whereNotParameters.values)
            )
        }

        /** Do not log the statement, could leak sensitive data */
        return updateStatement
    }

    /**
     * Create and return a prepared statement for the [connection]
     * to delete from the [table] the rows matching the
     * [whereParameters] and not matching the [whereNotParameters]
     */
    fun createDeleteStatement(
        table: String,
        whereParameters: LinkedHashMap<String, Any?>? = null,
        whereNotParameters: LinkedHashMap<String, Any?>? = null,
        connection: Connection
    ): PreparedStatement {
        logger.debug { "Creating delete statement for table $table" }

        if (whereParameters.isNullOrEmpty() && whereNotParameters.isNullOrEmpty()) {
            val message = "Asked to create delete statement but " +
                    "neither where not where not parameters were given"
            logger.warn { message }
            throw SQLException(message)
        }

        val deleteBuilder = StringBuilder("DELETE FROM ").append(table)
        deleteBuilder.append(createWhereString(
            whereParameters = whereParameters,
            whereNotParameters = whereNotParameters
        ))

        /** Insert the parameters in the statement */
        val deleteStatement = connection.prepareStatement(deleteBuilder.toString())

        var index = 1
        if (!whereParameters.isNullOrEmpty()) {
            index = insertValuesInStatement(
                statement = deleteStatement,
                startingIndex = index,
                values = ArrayList(whereParameters.values)
            )
        }
        if (!whereNotParameters.isNullOrEmpty()) {
            insertValuesInStatement(
                statement = deleteStatement,
                startingIndex = index,
                values = ArrayList(whereNotParameters.values)
            )
        }

        /** Do not log the statement, could leak sensitive data */
        return deleteStatement
    }

    /**
     * Insert the [values] in the [statement] starting from
     * the [startingIndex]. Finally, return the new index
     */
    fun insertValuesInStatement(
        statement: PreparedStatement,
        startingIndex: Int,
        values: ArrayList<Any?>
    ): Int {
        var index = startingIndex
        values.forEach { value ->
            if (value == null) {
                statement.setNull(index, NULL)
            } else {
                when (value) {
                    is String, is UnitElementStatus, is PermissionType, is EnforcementType -> {
                        statement.setString(index, value.toString())
                    }
                    is Boolean -> statement.setBoolean(index, value)
                    is Int -> statement.setInt(index, value)
                }
            }
            index++
        }
        return index
    }

    /**
     * Create and return the string representation of a WHERE prepared
     * statement with the [whereParameters] and the [whereNotParameters]
     */
    fun createWhereString(
        whereParameters: LinkedHashMap<String, Any?>?,
        whereNotParameters: LinkedHashMap<String, Any?>?,
    ): String {
        logger.debug { "Creating WHERE string for SQL query" }
        val whereBuilder = StringBuilder("")
        if (!whereParameters.isNullOrEmpty() || !whereNotParameters.isNullOrEmpty()) {
            whereBuilder.append(" WHERE ")

            whereParameters?.forEach { (column, value) ->
                if (value != null) {
                    whereBuilder.append("(").append(column).append("=?) AND ")
                }
            }

            whereNotParameters?.forEach { (column, value) ->
                if (value != null) {
                    whereBuilder.append("(").append(column).append("<>?) AND ")
                }
            }

            whereBuilder.delete(whereBuilder.length - 5, whereBuilder.length)
        }
        return whereBuilder.toString()
    }

    /**
     * Escape HTML characters from the given [string]
     * to prevent stored XSS attacks
     */
    fun sanitizeForHTML(string: String): String = Encode.forHtml(string)

    /**
     * Return the statement as a string
     */
    fun PreparedStatement.asString(): String {
        return this.toString().split(": ")[1]
    }
}
