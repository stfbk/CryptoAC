package eu.fbk.st.cryptoac.implementation.mm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.TestUtilities.Companion.resetMMMySQL
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.runCommand
import org.junit.jupiter.api.*
import java.sql.SQLException
import java.util.concurrent.TimeUnit

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class MMInterfaceMySQLTest: MMInterfaceTest() {

    override val mm: MMInterface =
        MMInterfaceMySQL(Parameters.mmInterfaceMySQLParameters)

    private var processDocker: Process? = null

    @BeforeAll
    override fun setUpAll() {
        "./buildAll.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_CLOUD.sh \"cryptoac_mysql\"".runCommand(dir, hashSetOf("port: 3306  MySQL Community Server - GPL"))
    }

    @BeforeEach
    override fun setUp() {
        super.setUp()
        assert(mm.initAdmin(Parameters.adminUser, Parameters.adminRoleTuple) == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        super.tearDown()
        resetMMMySQL()
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./clean.sh".runCommand(dir, hashSetOf("clean_all_end_of_script"))
    }

    override fun addAndInitUser(user: User): MMInterface {
        val addUserResult = mm.addUser(user)
        assert(addUserResult.code == OutcomeCode.CODE_000_SUCCESS)
        val userMM = MMInterfaceMySQL(addUserResult.parameters as MMInterfaceMySQLParameters)
        assert(userMM.lock() == OutcomeCode.CODE_000_SUCCESS)
        userMM.initUser(user)
        assert(userMM.unlock() == OutcomeCode.CODE_000_SUCCESS)
        return userMM
    }

    @Test
    override fun initAdmin() {
        /** Already done during the setup */
    }

    @Test
    fun `insert values in statement with right, less of no values works`() {

        /** insert values in statement with right number of values */
        run {
            val statement = (mm as MMInterfaceMySQL).connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = ArrayList<Any?>().apply { add("value1") }.apply { add(2) }
            assert(mm.insertValuesInStatement(statement, 1, parameters) == 3)
        }

        /** insert values in statement with empty list of values */
        run {
            val statement = (mm as MMInterfaceMySQL).connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = ArrayList<Any?>()
            assert(mm.insertValuesInStatement(statement, 1, parameters) == 1)
        }

        /** insert values in statement with less values */
        run {
            val statement = (mm as MMInterfaceMySQL).connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = ArrayList<Any?>().apply { add("value1") }
            assert(mm.insertValuesInStatement(statement, 1, parameters) == 2)
        }
    }

    @Test
    fun `insert values in statement with more values fails`() {

        /** insert values in statement with more values */
        run {
            val statement = (mm as MMInterfaceMySQL).connection!!.prepareStatement("SELECT name FROM table WHERE param1=?, param2=?")
            val parameters = ArrayList<Any?>().apply { add("value1") }.apply { add(2) }.apply { add(null) }
            assertThrows<SQLException> { mm.insertValuesInStatement(statement, 1, parameters) }
        }
    }



    @Test
    fun `create insert statement with one or multiple rows works`() {

        /** create insert statement with one row */
        run {
            val values = ArrayList<ArrayList<Any?>>()
                .apply { add(ArrayList<Any?>().apply { add("value11") }.apply { add("value12") }) }
            val insert = (mm as MMInterfaceMySQL).createInsertStatement("table", values)
            val expected =
                "com.mysql.cj.jdbc.ClientPreparedStatement: INSERT IGNORE INTO table VALUES ('value11','value12');"
            assert(insert.toString() == expected)
        }

        /** create insert statement with multiple rows */
        run {
            val values = ArrayList<ArrayList<Any?>>()
                .apply { add(ArrayList<Any?>().apply { add("value11") }.apply { add("value12") }) }
                .apply { add(ArrayList<Any?>().apply { add("value21") }.apply { add("value22") }) }
                .apply { add(ArrayList<Any?>().apply { add("value31") }.apply { add("value32") }) }
            val insert = (mm as MMInterfaceMySQL).createInsertStatement("table", values)
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
            assertThrows<SQLException> { (mm as MMInterfaceMySQL).createInsertStatement("table", values) }
        }

        /** create insert statement with multiple rows but different size */
        run {
            val values = ArrayList<ArrayList<Any?>>()
                .apply { add(ArrayList<Any?>().apply { add("value11") }.apply { add("value12") }) }
                .apply { add(ArrayList<Any?>().apply { add("value21") }) }
            assertThrows<SQLException> { (mm as MMInterfaceMySQL).createInsertStatement("table", values) }
        }
    }

    @Test
    fun `create select statement with or without selected columns, where and where not parameters works`() {
        val selectedColumns = ArrayList<String>().apply { add("column1") }
        val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
        val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }

        /** create select statement with selected columns and both where and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT column1 FROM table " +
                    "WHERE (column1='where') AND (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = (mm as MMInterfaceMySQL).createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with selected columns and where parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT column1 FROM table " +
                    "WHERE (column1='where') ORDER BY 1 LIMIT 3,4"
            val selectStatement = (mm as MMInterfaceMySQL).createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereParameters = whereParameters,
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with selected columns and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT column1 FROM table " +
                    "WHERE (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = (mm as MMInterfaceMySQL).createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with no selected columns and both where and where not parameters works */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT * FROM table " +
                    "WHERE (column1='where') AND (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = (mm as MMInterfaceMySQL).createSelectStatement(
                table = "table",
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with no selected columns nor where nor where not parameters works */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT * FROM table " +
                    "ORDER BY 1 LIMIT 3,4"
            val selectStatement = (mm as MMInterfaceMySQL).createSelectStatement(
                table = "table",
                offset = 3, limit = 4,
                justTheCount = false
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with just the count of selected columns and both where and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT COUNT(DISTINCT column1) FROM table " +
                    "WHERE (column1='where') AND (column2<>'whereNot') ORDER BY 1 LIMIT 3,4"
            val selectStatement = (mm as MMInterfaceMySQL).createSelectStatement(
                table = "table", selectedColumns = selectedColumns,
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                offset = 3, limit = 4,
                justTheCount = true
            )
            assert(expected == selectStatement.toString())
        }

        /** create select statement with just the count of no selected columns nor where nor where not parameters works */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: SELECT COUNT(DISTINCT *) FROM table " +
                    "ORDER BY 1 LIMIT 3,4"
            val selectStatement = (mm as MMInterfaceMySQL).createSelectStatement(
                table = "table",
                offset = 3, limit = 4,
                justTheCount = true
            )
            assert(expected == selectStatement.toString())
        }
    }



    @Test
    fun `create update statement with or without values, where and where not parameter works`() {
        val values = LinkedHashMap<String, Any?>().apply { put("column1", "value1") }
        val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
        val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }

        /** create update statement with values and both where and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: UPDATE table SET column1='value1' " +
                    "WHERE (column1='where') AND (column2<>'whereNot')"
            val updateStatement = (mm as MMInterfaceMySQL).createUpdateStatement(
                table = "table", values = values,
                whereParameters = whereParameters, whereNotParameters = whereNotParameters,
            )
            assert(expected == updateStatement.toString())
        }

        /** create update statement with values and where parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: UPDATE table SET column1='value1' " +
                    "WHERE (column1='where')"
            val updateStatement = (mm as MMInterfaceMySQL).createUpdateStatement(
                table = "table", values = values,
                whereParameters = whereParameters,
            )
            assert(expected == updateStatement.toString())
        }

        /** create update statement with values and where not parameters */
        run {
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: UPDATE table SET column1='value1' " +
                    "WHERE (column2<>'whereNot')"
            val updateStatement = (mm as MMInterfaceMySQL).createUpdateStatement(
                table = "table", values = values,
                whereNotParameters = whereNotParameters,
            )
            assert(expected == updateStatement.toString())
        }
    }

    @Test
    fun `create update statement with no values and both where and where not parameters fails`() {

        /** create update statement with no values and both where and where not parameters */
        run {
            val values = LinkedHashMap<String, Any?>()
            val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
            val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }
            assertThrows<SQLException> {
                (mm as MMInterfaceMySQL).createUpdateStatement(
                    table = "table", values = values,
                    whereParameters = whereParameters, whereNotParameters = whereNotParameters,
                )
            }
        }
    }

    @Test
    fun `create delete statement with one or multiple parameters works`() {

        /** create delete statement with one parameter */
        run {
            val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
            val statement = (mm as MMInterfaceMySQL).createDeleteStatement(
                table = "table",
                whereParameters = whereParameters,
            )
            val expected = "com.mysql.cj.jdbc.ClientPreparedStatement: DELETE FROM table WHERE (column1='where')"
            assert(expected == statement.toString())
        }

        /** create delete statement with multiple parameters */
        run {
            val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }.apply { put("column3", "where3") }
            val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }
            val statement = (mm as MMInterfaceMySQL).createDeleteStatement(
                table = "table",
                whereParameters = whereParameters,
                whereNotParameters = whereNotParameters,
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
            assertThrows<SQLException> { (mm as MMInterfaceMySQL).createDeleteStatement(table = "table") }
        }
    }



    @Test
    fun `create where string with or without where and not where parameters works`() {
        val whereParameters = LinkedHashMap<String, Any?>().apply { put("column1", "where") }
        val whereNotParameters = LinkedHashMap<String, Any?>().apply { put("column2", "whereNot") }

        /** create where string with both where and not where parameters */
        run {
            val expected = " WHERE (column1=?) AND (column2<>?)"
            assert((mm as MMInterfaceMySQL).createWhereString(whereParameters, whereNotParameters) == expected)
        }

        /** create where string with where parameters only */
        run {
            val expected = " WHERE (column1=?)"
            assert((mm as MMInterfaceMySQL).createWhereString(whereParameters, null) == expected)
        }

        /** create where string with where not parameters only */
        run {
            val expected = " WHERE (column2<>?)"
            assert((mm as MMInterfaceMySQL).createWhereString(null, whereNotParameters) == expected)
        }

        /** create where string with no parameters */
        run {
            val expected = ""
            assert((mm as MMInterfaceMySQL).createWhereString(null, null) == expected)
        }

        /** create where string with empty parameters */
        run {
            val expected = ""
            assert((mm as MMInterfaceMySQL).createWhereString(LinkedHashMap(), LinkedHashMap()) == expected)
        }

        /** create where string with more where parameters */
        run {
            val expected = " WHERE (column1=?) AND (column2=?)"
            whereParameters.apply { put("column2", "where2") }
            assert((mm as MMInterfaceMySQL).createWhereString(whereParameters, LinkedHashMap()) == expected)
        }

        /** create where string with more where not parameters */
        run {
            val expected = " WHERE (column2<>?) AND (column3<>?)"
            whereNotParameters.apply { put("column3", "where3") }
            assert((mm as MMInterfaceMySQL).createWhereString(LinkedHashMap(), whereNotParameters) == expected)
        }

        /** create where string with more where and where not parameters */
        run {
            val expected = " WHERE (column1=?) AND (column2=?) AND (column2<>?) AND (column3<>?)"
            assert((mm as MMInterfaceMySQL).createWhereString(whereParameters, whereNotParameters) == expected)
        }
    }
}
