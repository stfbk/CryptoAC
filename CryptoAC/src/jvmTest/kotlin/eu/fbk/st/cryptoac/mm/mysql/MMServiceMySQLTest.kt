package eu.fbk.st.cryptoac.mm.mysql

import eu.fbk.st.cryptoac.Parameters.mmServiceRBACMySQLParameters
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.runCommand
import org.junit.jupiter.api.*
import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException
import java.util.*
import kotlin.collections.ArrayList
import kotlin.collections.LinkedHashMap

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class MMServiceMySQLTest : MMServiceMySQL {

    private var connection: Connection? = null

    private var processDocker: Process? = null

    @BeforeAll
    fun setUpAll() {
        "./cleanAllAndBuild.sh".runCommand(TestUtilities.dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_mysql\"".runCommand(
            workingDir = TestUtilities.dir,
            endStrings = hashSetOf("port: 3306  MySQL Community Server - GPL")
        )
        val connectionProperties = Properties()
        connectionProperties.setProperty("user", mmServiceRBACMySQLParameters.username)
        connectionProperties.setProperty("password", mmServiceRBACMySQLParameters.password)
        connectionProperties.setProperty("useSSL", "true")
        connection = DriverManager.getConnection(
            "jdbc:mysql://${mmServiceRBACMySQLParameters.url}:${mmServiceRBACMySQLParameters.port}",
            connectionProperties
        )
    }

    @AfterAll
    fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./cleanAll.sh".runCommand(
            workingDir = TestUtilities.dir,
            endStrings = hashSetOf("clean_all_end_of_script")
        )
    }



    @Test
    fun `insert values in statement with right, less of no values works`() {

        /** insert values in statement with right number of values */
        run {
            val statement = connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = arrayListOf<Any?>("value1", 2)
            assert(insertValuesInStatement(statement, 1, parameters) == 3)
        }

        /** insert values in statement with empty list of values */
        run {
            val statement = connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = ArrayList<Any?>()
            assert(insertValuesInStatement(statement, 1, parameters) == 1)
        }

        /** insert values in statement with less values */
        run {
            val statement = connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = arrayListOf<Any?>("value1")
            assert(insertValuesInStatement(statement, 1, parameters) == 2)
        }
    }

    @Test
    fun `insert values in statement with more values fails`() {

        /** insert values in statement with more values */
        run {
            val statement = connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = arrayListOf<Any?>("value1", 2, null)
            assertThrows<SQLException> { insertValuesInStatement(statement, 1, parameters) }
        }
    }

    @Test
    fun `create insert statement with one or multiple rows works`() {

        /** create insert statement with one row */
        run {
            val values = arrayListOf(
                arrayListOf<Any?>("value11", "value12")
            )
            val insert = createInsertStatement("table", values, connection!!)
            val expected =
                "com.mysql.cj.jdbc.ClientPreparedStatement: INSERT IGNORE INTO table VALUES ('value11','value12');"
            assert(insert.toString() == expected)
        }

        /** create insert statement with multiple rows */
        run {
            val values = arrayListOf(
                arrayListOf<Any?>("value11", "value12"),
                arrayListOf<Any?>("value21", "value22"),
                arrayListOf<Any?>("value31", "value32")
            )
            val insert = createInsertStatement("table", values, connection!!)
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: INSERT IGNORE INTO " +
                "table VALUES ('value11','value12'),('value21','value22'),('value31','value32');"
            assert(insert.toString() == expected)
        }
    }

    @Test
    fun `create insert statement with no rows or multiple rows but different size fails`() {

        /** create insert statement with no rows */
        run {
            val values = ArrayList<ArrayList<Any?>>()
            assertThrows<SQLException> { createInsertStatement("table", values, connection!!) }
        }

        /** create insert statement with multiple rows but different size */
        run {
            val values = arrayListOf(
                arrayListOf<Any?>("value11", "value12"),
                arrayListOf<Any?>("value21")
            )
            assertThrows<SQLException> { createInsertStatement("table", values, connection!!) }
        }
    }

    @Test
    fun `create select statement with or without selected columns, where and where not parameters works`() {
        val selectedColumns = arrayListOf("column1")
        val whereParameters = linkedMapOf<String, Any?>("column1" to "where")
        val whereNotParameters = linkedMapOf<String, Any?>("column2" to "whereNot")

        /** create select statement with selected columns and both where and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT column1 FROM table " +
                "WHERE (column1='where') AND (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = false,
                connection = connection!!
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with selected columns and where parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT column1 FROM table " +
                "WHERE (column1='where') ORDER BY 1 LIMIT 3,4"
            val selectStatement = createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereParameters = whereParameters,
                offset = 3, limit = 4,
                justTheCount = false,
                connection = connection!!
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with selected columns and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT column1 FROM table " +
                "WHERE (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = false,
                connection = connection!!
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with no selected columns and both where and where not parameters works */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT * FROM table " +
                "WHERE (column1='where') AND (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = createSelectStatement(
                table = "table",
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = false,
                connection = connection!!
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with no selected columns nor where nor where not parameters works */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT * FROM table " +
                "ORDER BY 1 LIMIT 3,4"
            val selectStatement = createSelectStatement(
                table = "table",
                offset = 3, limit = 4,
                justTheCount = false,
                connection = connection!!
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with just the count of selected columns and both where and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT COUNT(DISTINCT column1) FROM table " +
                "WHERE (column1='where') AND (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = true,
                connection = connection!!
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with just the count of no selected columns nor where nor where not parameters works */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT COUNT(DISTINCT *) FROM table " +
                "ORDER BY 1 LIMIT 3,4"
            val selectStatement = createSelectStatement(
                table = "table",
                offset = 3, limit = 4,
                justTheCount = true,
                connection = connection!!
            )
            assert(expected == selectStatement.toString())
        }
    }

    @Test
    fun `create update statement with or without values, where and where not parameter works`() {
        val values = linkedMapOf<String, Any>("column1" to "value1")
        val whereParameters = linkedMapOf<String, Any?>("column1" to "where")
        val whereNotParameters = linkedMapOf<String, Any?>("column2" to "whereNot")

        /** create update statement with values and both where and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: UPDATE table SET column1='value1' " +
                "WHERE (column1='where') AND (column2<>'whereNot')"
            val updateStatement = createUpdateStatement(
                table = "table",
                values = values,
                whereParameters = whereParameters,
                whereNotParameters = whereNotParameters,
                connection = connection!!
            )
            assert(expected == updateStatement.toString())
        }

        /** create update statement with values and where parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: UPDATE table SET column1='value1' " +
                "WHERE (column1='where')"
            val updateStatement = createUpdateStatement(
                table = "table",
                values = values,
                whereParameters = whereParameters,
                connection = connection!!
            )
            assert(expected == updateStatement.toString())
        }

        /** create update statement with values and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: UPDATE table SET column1='value1' " +
                "WHERE (column2<>'whereNot')"
            val updateStatement = createUpdateStatement(
                table = "table",
                values = values,
                whereNotParameters = whereNotParameters,
                connection = connection!!
            )
            assert(expected == updateStatement.toString())
        }
    }

    @Test
    fun `create update statement with no values and both where and where not parameters fails`() {

        /** create update statement with no values and both where and where not parameters */
        run {
            val values = linkedMapOf<String, Any>()
            val whereParameters = linkedMapOf<String, Any?>("column1" to "where")
            val whereNotParameters = linkedMapOf<String, Any?>("column2" to "whereNot")
            assertThrows<SQLException> {
                createUpdateStatement(
                    table = "table",
                    values = values,
                    whereParameters = whereParameters,
                    whereNotParameters = whereNotParameters,
                    connection = connection!!
                )
            }
        }
    }

    @Test
    fun `create delete statement with one or multiple parameters works`() {

        /** create delete statement with one parameter */
        run {
            val whereParameters = linkedMapOf<String, Any?>("column1" to "where")
            val statement = createDeleteStatement(
                table = "table",
                whereParameters = whereParameters,
                connection = connection!!
            )
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: DELETE FROM table WHERE (column1='where')"
            assert(expected == statement.toString())
        }

        /** create delete statement with multiple parameters */
        run {
            val whereParameters = linkedMapOf<String, Any?>(
                "column1" to "where",
                "column3" to "where3"
            )
            val whereNotParameters = linkedMapOf<String, Any?>("column2" to "whereNot")
            val statement = createDeleteStatement(
                table = "table",
                whereParameters = whereParameters,
                whereNotParameters = whereNotParameters,
                connection = connection!!
            )
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: DELETE FROM table WHERE (column1='where') " +
                "AND (column3='where3') AND (column2<>'whereNot')"
            assert(expected == statement.toString())
        }
    }

    @Test
    fun `create delete statement with neither where nor where not parameters fails`() {

        /** create delete statement with neither where nor where not parameters */
        run {
            assertThrows<SQLException> { createDeleteStatement(
                table = "table",
                connection = connection!!
            ) }
        }
    }

    @Test
    fun `create where string with or without where and not where parameters works`() {
        val whereParameters = linkedMapOf<String, Any?>("column1" to "where")
        val whereNotParameters = linkedMapOf<String, Any?>("column2" to "whereNot")

        /** create where string with both where and not where parameters */
        run {
            val expected = " WHERE (column1=?) AND (column2<>?)"
            assert(createWhereString(whereParameters, whereNotParameters) == expected)
        }

        /** create where string with where parameters only */
        run {
            val expected = " WHERE (column1=?)"
            assert(createWhereString(whereParameters, null) == expected)
        }

        /** create where string with where not parameters only */
        run {
            val expected = " WHERE (column2<>?)"
            assert(createWhereString(null, whereNotParameters) == expected)
        }

        /** create where string with no parameters */
        run {
            val expected = ""
            assert(createWhereString(null, null) == expected)
        }

        /** create where string with empty parameters */
        run {
            val expected = ""
            assert(createWhereString(LinkedHashMap(), LinkedHashMap()) == expected)
        }

        /** create where string with more where parameters */
        run {
            val expected = " WHERE (column1=?) AND (column2=?)"
            whereParameters["column2"] = "where2"
            assert(createWhereString(whereParameters, LinkedHashMap()) == expected)
        }

        /** create where string with more where not parameters */
        run {
            val expected = " WHERE (column2<>?) AND (column3<>?)"
            whereNotParameters["column3"] = "where3"
            assert(createWhereString(LinkedHashMap(), whereNotParameters) == expected)
        }

        /** create where string with more where and where not parameters */
        run {
            val expected = " WHERE (column1=?) AND (column2=?) AND (column2<>?) AND (column3<>?)"
            assert(createWhereString(whereParameters, whereNotParameters) == expected)
        }
    }
}
