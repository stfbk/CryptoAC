package eu.fbk.st.cryptoac.mm.mysql

import com.mysql.cj.jdbc.exceptions.CommunicationsException
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.mm.MMServiceABAC
import eu.fbk.st.cryptoac.mm.MMType
import eu.fbk.st.cryptoac.model.CodeServiceParameters
import eu.fbk.st.cryptoac.model.ABACUnitElementTypeWithStatus
import eu.fbk.st.cryptoac.model.ABACUnitElementTypeWithVN
import eu.fbk.st.cryptoac.model.CodeBoolean
import io.ktor.util.*
import mu.KotlinLogging
import java.io.BufferedReader
import java.io.FileNotFoundException
import java.io.InputStreamReader
import java.sql.*
import java.util.*
import kotlin.collections.ArrayList
import kotlin.collections.HashSet
import kotlin.collections.LinkedHashMap

private val logger = KotlinLogging.logger {}

// TODO use OPA to filter queries to MySQL database?

// TODO as of now, there is no way to hide
//  resources and access structures from
//  users through views, as there is no
//  ABAC syntax in MySQL. Therefore, for now,
//  users can see all resources (a solution
//  could be to use OPA in the middle)


/**
 * Implementation of the methods to interface with the MM as a MySQL8+
 * database configured with the given [mmMySQLServiceParameters].
 * Note that the database is configured to avoid the disclosure of
 * the AC policy to users with tokens and views.
 * Note that the name of the user connecting to the database is the
 * same as the name in the AC policy.
 * Note that any value represented by a byte array is converted to
 * BASE64 before being stored
 */
class MMServiceABACMySQL(
    private val mmMySQLServiceParameters: MMServiceABACMySQLParameters
) : MMServiceABAC, MMServiceMySQL {

    companion object {
        /** The name of the schema in the database */
        private const val databaseName = "cryptoac"
        const val masterPublicKeyTable = "$databaseName.masterPublicKey"
        const val usersTable = "$databaseName.users"
        const val deletedUsersTable = "$databaseName.deletedUsers"
        const val usersView = "$databaseName.user_specific_users"
        const val usersInfoView = "$databaseName.user_specific_users_info"
        const val attributesTable = "$databaseName.attributes"
        const val deletedAttributesTable = "$databaseName.deletedAttributes"
        const val resourcesTable = "$databaseName.resources"
        const val deletedResourcesTable = "$databaseName.deletedResources"
        const val attributeTuplesTable = "$databaseName.attributeTuples"
        const val attributeTuplesView = "$databaseName.user_specific_attributeTuples"
        const val accessStructureTuplesTable = "$databaseName.accessStructureTuples"
        const val userTokenColumn = "userToken"
        const val attributeTokenColumn = "attributeToken"
        const val resourceTokenColumn = "resourceToken"
        const val asymEncPublicKeyColumn = "asymEncPublicKey"
        const val asymSigPublicKeyColumn = "asymSigPublicKey"
        const val abeSecretKeyColumn = "abeSecretKey"
        const val attributeVersionNumberColumn = "attributeVersionNumber"
        const val symKeyVersionNumberColumn = "symKeyVersionNumber"
        const val symEncKeyVersionNumberColumn = "symEncKeyVersionNumber"
        const val symDecKeyVersionNumberColumn = "symDecKeyVersionNumber"
        const val encryptingSymKeyColumn = "encryptingSymKey"
        const val decryptingSymKeyColumn = "decryptingSymKey"
        const val signatureColumn = "signature"
        const val permissionColumn = "permission"
        const val usernameColumn = "username"
        const val attributeNameColumn = "attributeName"
        const val attributeValueColumn = "attributeValue"
        const val resourceNameColumn = "resourceName"
        const val statusColumn = "status"
        const val enforcementColumn = "enforcement"
        const val accessStructureColumn = "accessStructure"
        const val signerTokenColumn = "signerToken"
        const val mpkColumn = "mpk"

        /** The file containing SQL commands to initialize the database */
        const val INIT_ABAC_SQL_CODE = "/cryptoac/MySQL/databaseABAC.sql"
    }

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    override var locks = 0

    /** The connection object to the database */
    var connection: Connection? = null

    /** Properties related to the connection object */
    private val connectionProperties: Properties = Properties()

    /** The jDBUrl of the database */
    private val jDBUrl: String = "jdbc:mysql://${mmMySQLServiceParameters.url}:${mmMySQLServiceParameters.port}"

    init {
        connectionProperties.setProperty("user", mmMySQLServiceParameters.username)
        connectionProperties.setProperty("password", mmMySQLServiceParameters.password)
        connectionProperties.setProperty("useSSL", "true")
    }



    /**
     * Check whether the service was
     * already configured (at least once)
     *
     * In this implementation, check if the
     * admin user is present in the database
     */
    override fun alreadyConfigured(): CodeBoolean {
        return try {
            if (getUsers(username = ADMIN).isNotEmpty()) {
                logger.info { "Database already initialized" }
                CodeBoolean()
            } else {
                CodeBoolean(
                    boolean = false
                )
            }
        } catch (e: SQLSyntaxErrorException) {
            if (e.message!!.contains("Unknown database")) {
                CodeBoolean(
                    boolean = false
                )
            } else {
                throw e
            }
        }
    }

    /**
     * This function is invoked when initializing the
     * admin (after the 'init' function), and it should
     * configure the service with the given [parameters]
     * and return the outcome code. When implementing this
     * function, remember to decide how to handle (e.g.,
     * reject or allow) subsequent invocations
     *
     * In this implementation, create the tables,
     * views and triggers in the database. Deny
     * subsequent invocations
     */
    override fun configure(parameters: CoreParameters?): OutcomeCode {

        logger.info { "Initializing the database" }

        val serviceStatus = alreadyConfigured()
        if (serviceStatus.code != CODE_000_SUCCESS) {
            return serviceStatus.code
        } else if (serviceStatus.boolean) {
            logger.warn { "The database was already initialized" }
            return CODE_077_SERVICE_ALREADY_CONFIGURED
        }

        val sqlFile = MMServiceABACMySQL::class.java.getResourceAsStream(INIT_ABAC_SQL_CODE)
        if (sqlFile == null) {
            val message = "Initialization SQL file $INIT_ABAC_SQL_CODE not found"
            logger.error { message }
            throw FileNotFoundException(message)
        }

        /** Read the SQL commands and initialize the database */
        connection!!.createStatement().use { statement ->
            BufferedReader(InputStreamReader(sqlFile)).use { reader ->
                val builder = StringBuilder()
                val defaultDelimiter = ";"
                var delimiter = defaultDelimiter

                reader.forEachLine { line ->
                    builder.append(line)

                    /** A new delimiter char is being set (probably for stored procedure) */
                    if (line.startsWith("DELIMITER")) {
                        delimiter = line.split(" ")[1]
                        builder.clear()
                    } else if (line.endsWith(delimiter)) {
                        builder.replace(
                            builder.length - delimiter.length,
                            builder.length,
                            defaultDelimiter
                        )
                        val commandWitComments = builder.toString().trimStart { it == ' ' }
                        val command = commandWitComments.replace("/\\*.*?\\*/".toRegex(), "")
                        logger.debug { "Locks number is $locks" }
                        logger.debug { "Sending command $command" }
                        statement.executeUpdate(command)
                        builder.clear()
                        delimiter = defaultDelimiter
                    }
                    builder.append(" ")
                }
            }
        }
        return CODE_000_SUCCESS
    }

    /**
     * This function is invoked each time the service
     * is initialized, and it should contain the code to
     * initialize the interface (e.g., possibly connect to
     * remote services like MQTT brokers, databases, etc.)
     */
    override fun init() {
        logger.info { "No action required to initialize the MM ABAC MySQL service" }
    }

    /**
     * This function is invoked each time the (interface toward
     * the) service is destroyed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    override fun deinit() {
        logger.info { "No action required to de-initialize the MM ABAC MySQL service" }
    }

    /**
     * Add (and initialize) the [newAdmin] in the
     * service and return the outcome code. Check that
     * the name of the admin is the expected one and
     * that the admin was not already added (or initialized)
     *
     * In this implementation, add the [newAdmin] in the
     * metadata by setting the public keys and token of
     * the [newAdmin] and return the outcome code
     */
    override fun addAdmin(
        newAdmin: User
    ): OutcomeCode {
        logger.info { "Adding the admin in the MM" }

        /** Guard clauses */
        if (newAdmin.name != ADMIN) {
            logger.warn { "Admin user has name ${newAdmin.name}, but admin name should be $ADMIN" }
            return CODE_036_ADMIN_NAME
        }
        try {
            if (getUsers(username = ADMIN).isNotEmpty()) {
                logger.warn { "Admin $ADMIN already initialized" }
                return CODE_035_ADMIN_ALREADY_INITIALIZED
            }
        } catch (e: SQLSyntaxErrorException) {
            if (e.message.isNullOrBlank() || !e.message!!.contains("Unknown database")) {
                throw e
            }
        }

        /** Add the admin as User in the metadata */
        logger.debug { "Adding the admin as User" }
        val asymEncPublicKeyEncoded = newAdmin.asymEncKeys!!.public
        val asymSigPublicKeyEncoded = newAdmin.asymSigKeys!!.public
        val adminUserValues = arrayListOf<Any?>(
            ADMIN,
            ADMIN,
            asymEncPublicKeyEncoded,
            asymSigPublicKeyEncoded,
            null,
            UnitElementStatus.OPERATIONAL
        )
        return createInsertStatement(
            table = usersTable,
            values = arrayListOf(adminUserValues),
            connection = connection!!,
        ).use {
            if (it.executeUpdate() == 1) {
                CODE_000_SUCCESS
            } else {
                val message = "Admin was not present but update failed"
                logger.error { message }
                throw IllegalArgumentException(message)
            }
        }
    }

    /**
     * Initialize the [user] in the service and
     * return the outcome code. Check that the user
     * is present and was not already initialized or
     * deleted. This method should support invocations
     * by non-admin users
     *
     * In this implementation, initialize the user by
     * adding in the metadata the public keys and token
     * of the [user], updating also the status flag,
     * and return the outcome code
     */
    override fun initUser(
        user: User
    ): OutcomeCode {
        val username = user.name
        logger.info { "Initializing user $username in the metadata" }

        /** Update the users' metadata */
        logger.debug { "Updating the user metadata" }
        val userValues = linkedMapOf<String, Any>(
            asymEncPublicKeyColumn to user.asymEncKeys!!.public,
            asymSigPublicKeyColumn to user.asymSigKeys!!.public,
            userTokenColumn to user.token,
            statusColumn to UnitElementStatus.OPERATIONAL
        )
        return createUpdateStatement(
            table = usersView,
            values = userValues,
            connection = connection!!,
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "Error while initializing user $username" }

                /** Check the reason of the error */
                val status = createSelectStatement(
                    table = usersInfoView,
                    connection = connection!!,
                ).use { selectStatement ->
                    val rs = selectStatement.executeQuery()
                    if (rs.isBeforeFirst) {
                        rs.next()
                        UnitElementStatus.valueOf(rs.getString(statusColumn))
                    } else {
                        null
                    }
                }

                when (status) {
                    null -> {
                        logger.warn { "User ${user.name} does not exist in the metadata" }
                        CODE_004_USER_NOT_FOUND
                    }
                    UnitElementStatus.DELETED -> {
                        logger.warn { "User $username was previously deleted" }
                        CODE_013_USER_WAS_DELETED
                    }
                    UnitElementStatus.OPERATIONAL -> {
                        logger.warn { "User $username already initialized" }
                        CODE_052_USER_ALREADY_INITIALIZED
                    }
                    UnitElementStatus.INCOMPLETE -> {
                        val message = "Error in initializing user $username but status is incomplete"
                        logger.error { message }
                        throw java.lang.IllegalStateException(message)
                    }
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Add the [newUser] in the service by, e.g.,
     * creating an account for the user. Check that 
     * the user was not already added. Finally,
     * return the user's configuration parameters
     * together with the outcome code
     *
     * In this implementation, the user's asymmetric ABE
     * encryption key will be set by the admin
     * after the user initializes her signing public keys
     * and token. Also, create an account in the database
     * for the [newUser]
     */
    override fun addUser(
        newUser: User
    ): CodeServiceParameters {
        val username = newUser.name

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CodeServiceParameters(code = CODE_020_INVALID_PARAMETER)
        }


        logger.info { "Adding the user $username in the metadata and in the database" }
        if (getUsers(
                username = username,
                status = UnitElementStatus.DELETED
            ).isNotEmpty()
        ) {
            logger.warn { "User $username was previously deleted" }
            return CodeServiceParameters(CODE_013_USER_WAS_DELETED)
        }

        /** TODO check password generation */
        val passwordBytes = ByteArray(20)
        Random().nextBytes(passwordBytes)
        val newPassword = passwordBytes.encodeBase64()

        /** Add the user in the metadata. Keys and Token will be set by the user */
        logger.debug { "Adding the user in the metadata" }
        val adminUserValues = arrayListOf<Any?>(
            username,
            username,
            "mock",
            "mock",
            "mock",
            UnitElementStatus.INCOMPLETE
        )
        createInsertStatement(
            table = usersTable,
            values = arrayListOf(adminUserValues),
            connection = connection!!,
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "User $username already present in the metadata" }
                return CodeServiceParameters(CODE_001_USER_ALREADY_EXISTS)
            }
        }

        val code = try {
            /** Create the user at database level and then grant privileges on tables and views */
            connection!!.prepareStatement(
                "CREATE USER ? IDENTIFIED BY ?"
            ).use {
                logger.debug { "Creating the database user" }
                it.setString(1, username)
                it.setString(2, newPassword)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT (" +
                        "$userTokenColumn, " +
                        "$asymEncPublicKeyColumn, " +
                        "$asymSigPublicKeyColumn, " +
                        "$statusColumn) ON $usersTable TO ?"
            ).use {
                logger.debug { "Granting permission on users table" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT (" +
                        "$userTokenColumn, " +
                        "$asymEncPublicKeyColumn, " +
                        "$asymSigPublicKeyColumn, " +
                        "$statusColumn) ON $deletedUsersTable TO ?"
            ).use {
                logger.debug { "Granting permission on deleted users table" }
                it.setString(1, username)
                it.execute()
            }

            // TODO al momento, diamo permessi sui nomi degli attributi, visto
            //  che dobbiamo ancora fare in modo che gli utenti usino solo i
            //  token degli attributi
            connection!!.prepareStatement(
                "GRANT SELECT (" +
                        "$attributeNameColumn, " +
                        "$attributeTokenColumn, " +
                        "$attributeVersionNumberColumn, " +
                        "$statusColumn) ON $attributesTable TO ?"
            ).use {
                logger.debug { "Granting permission on deleted attributes table" }
                it.setString(1, username)
                it.execute()
            }

            // TODO al momento, diamo permessi sui nomi degli attributi, visto
            //  che dobbiamo ancora fare in modo che gli utenti usino solo i
            //  tokend degli attributi
            connection!!.prepareStatement(
                "GRANT SELECT (" +
                        "$attributeNameColumn, " +
                        "$attributeTokenColumn, " +
                        "$attributeVersionNumberColumn, " +
                        "$statusColumn) ON $deletedAttributesTable TO ?"
            ).use {
                logger.debug { "Granting permission on deleted attributes table" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT (" +
                        "$resourceTokenColumn, " +
                        "$symEncKeyVersionNumberColumn, " +
                        "$symDecKeyVersionNumberColumn, " +
                        "$statusColumn) ON $resourcesTable TO ?"
            ).use {
                logger.debug { "Granting permission on resources table" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT ON $attributeTuplesView TO ?"
            ).use {
                logger.debug { "Granting permission on attribute tuples view" }
                it.setString(1, username)
                it.execute()
            }

            // TODO al momento, diamo permessi sulla tabella delle access structure
            //  tuples, dato che non sappiamo come restringere i permessi alle
            //  access structure alle quali l'utente ha accesso
            connection!!.prepareStatement(
                "GRANT SELECT ON $accessStructureTuplesTable TO ?"
            ).use {
                logger.debug { "Granting permission on access structure tuples view" }
                it.setString(1, username)
                it.execute()
            }

            // TODO dare accesso ad una view delle risorse, come facciamo adesso per RBAC

            connection!!.prepareStatement(
                "GRANT UPDATE ON $usersView TO ?"
            ).use {
                logger.debug { "Granting permission on users view" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT ON $usersInfoView TO ?"
            ).use {
                logger.debug { "Granting permission on users status view" }
                it.setString(1, username)
                it.execute()
            }

            CODE_000_SUCCESS
        } catch (e: SQLException) {
            logger.warn { "Could not create user $username in MySQL" }
            CODE_054_CREATE_USER_MM
        }

        return CodeServiceParameters(
            code = code,
            parameters = MMServiceABACMySQLParameters(
                username = username,
                password = newPassword,
                port = mmMySQLServiceParameters.port,
                url = mmMySQLServiceParameters.url
            )
        )
    }

    /**
     * Delete [username] from the service. Check
     * that the user exists
     *
     * In this implementation, move the [username] in the
     * deleted users' table abd delete the user at database
     * level
     */
    override fun deleteUser(
        username: String
    ): OutcomeCode {
        logger.info { "Deleting user $username" }

        /** Guard Clauses */
        if (username == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN user" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        logger.debug { "Moving the user from table $usersTable to table $deletedUsersTable" }
        val whereParameters = linkedMapOf<String, Any?>(
            usernameColumn to username
        )
        val selectedColumns = arrayListOf(
            usernameColumn,
            userTokenColumn,
            asymEncPublicKeyColumn,
            asymSigPublicKeyColumn,
            abeSecretKeyColumn, // TODO instead of copying the abe key, delete it, i.e., set it to null or something similar
            "'${UnitElementStatus.DELETED}'"
        )
        createSelectStatement(
            table = usersTable,
            selectedColumns = selectedColumns,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use { selectStatement ->
            connection!!.prepareStatement(
                "INSERT INTO $deletedUsersTable (${selectStatement.asString()})"
            ).use {
                if (it.executeUpdate() != 1) {
                    logger.warn { "User $username not found in the metadata" }
                    return when (getStatus(
                        name = username,
                        type = ABACUnitElementTypeWithStatus.USER
                    )) {
                        UnitElementStatus.DELETED -> CODE_013_USER_WAS_DELETED
                        null -> CODE_004_USER_NOT_FOUND
                        else -> {
                            val message = "User not found but user is in table"
                            logger.error { message }
                            throw IllegalArgumentException(message)
                        }
                    }
                }
            }
        }

        logger.debug { "Deleting the user from table $usersTable" }
        createDeleteStatement(
            table = usersTable,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "User $username not found in the metadata" }
                return CODE_004_USER_NOT_FOUND
            }
        }

        connection!!.prepareStatement("DROP USER ?").use {
            logger.debug { "Deleting the user from the database" }
            it.setString(1, username)
            return try {
                it.execute()
                CODE_000_SUCCESS
            } catch (e: SQLException) {
                if (e.message?.contains("Operation DROP USER failed") == true) {
                    logger.warn { "Error while deleting user $username from the database " }
                    CODE_056_DELETE_USER_MM
                } else {
                    throw e
                }
            }
        }
    }



    /**
     * Set the ABE master public key
     * ([mpk]) in the metadata
     */
    override fun setMPK(mpk: String): OutcomeCode {
        logger.info { "Adding ABE MPK in the metadata" }

        val mpkValues = arrayListOf<Any?>(
            "1",
            mpk
        )
        createInsertStatement(
            table = masterPublicKeyTable,
            values = arrayListOf(mpkValues),
            connection = connection!!,
        ).use {
            return if (it.executeUpdate() != 1) {
                logger.warn { "Insertion of ABE MPK failed (perhaps, the MPK is already present in the metadata)" }
                CODE_072_MPK_ALREADY_INITIALIZED
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Get the ABE MPK from the metadata.
     * Return null if the ABE MPK was not
     * found
     */
    override fun getMPK(): String? {
        logger.info { "Getting the ABE MPK" }

        createSelectStatement(
            table = masterPublicKeyTable,
            connection = connection!!,
        ).use {
            val rs = it.executeQuery()
            return if (rs.isBeforeFirst) {
                rs.next()
                rs.getString(mpkColumn)
            } else {
                null
            }
        }
    }

    /**
     * Add the [newAttribute] in the metadata and
     * return the outcome code. Check that the
     * [newAttribute] does not already exist or
     * was deleted. If the attribute was deleted
     * and [restoreIfDeleted] was set, restore
     * the operational status of the attribute
     */
    override fun addAttribute(
        newAttribute: Attribute,
        restoreIfDeleted: Boolean
    ): OutcomeCode {
        val attributeName = newAttribute.name
        logger.info { "Adding the attribute $attributeName in the metadata" }

        /** Check whether the attribute is to be restored or not */
        val attributeToRestore = if (getAttributes(
                attributeName = attributeName,
                status = UnitElementStatus.DELETED
            ).isNotEmpty()) {
            if (restoreIfDeleted) {
                logger.warn { "Attribute $attributeName was previously deleted, restoring it" }
                true
            } else {
                logger.warn { "Attribute $attributeName was previously deleted" }
                return CODE_067_ATTRIBUTE_WAS_DELETED
            }
        } else {
            false
        }

        /** Remove the attribute's entry from the deleted attributes table */
        if (attributeToRestore) {
            logger.debug { "Deleting the attribute from table $deletedAttributesTable" }
            val whereParameters = linkedMapOf<String, Any?>(
                attributeNameColumn to attributeName
            )
            createDeleteStatement(
                table = deletedAttributesTable,
                whereParameters = whereParameters,
                connection = connection!!,
            ).use {
                if (it.executeUpdate() != 1) {
                    val message = "Attribute was deleted but it is not present in $deletedAttributesTable"
                    logger.error { message }
                    throw IllegalArgumentException(message)
                }
            }
        }

        /** Add the attribute in the metadata */
        logger.debug { "Adding the attribute in the metadata" }
        val attributeValues = arrayListOf<Any?>(
            attributeName,
            newAttribute.token,
            newAttribute.versionNumber,
            UnitElementStatus.OPERATIONAL
        )

        return createInsertStatement(
            table = attributesTable,
            values = arrayListOf(attributeValues),
            connection = connection!!,
        ).use {
            if (it.executeUpdate() == 1) {
                CODE_000_SUCCESS
            } else {
                logger.warn { "Attribute $attributeName already present in the metadata" }
                CODE_065_ATTRIBUTE_ALREADY_EXISTS
            }
        }
    }

    /**
     * Add the [newResource] in the metadata and
     * return the outcome code. Check that the
     * [newResource] does not already exist or
     * was deleted
     */
    override fun addResource(newResource: Resource): OutcomeCode {
        logger.info { "Adding the resource ${newResource.name} in the metadata" }

        if (getResources(
                resourceName = newResource.name,
                status = UnitElementStatus.DELETED
            ).isNotEmpty()) {
            logger.warn { "Resource ${newResource.name} was previously deleted" }
            return CODE_015_RESOURCE_WAS_DELETED
        }

        /** Add the resource in the metadata */
        logger.debug { "Adding the resource in the metadata" }
        val resourceValues = arrayListOf<Any?>(
            newResource.name,
            newResource.token,
            newResource.symEncKeyVersionNumber,
            newResource.symDecKeyVersionNumber,
            UnitElementStatus.OPERATIONAL,
            newResource.enforcement
        )
        return createInsertStatement(
            table = resourcesTable,
            values = arrayListOf(resourceValues),
            connection = connection!!,
        ).use {
            if (it.executeUpdate() == 1) {
                CODE_000_SUCCESS
            } else {
                logger.warn { "Resource ${newResource.name} already present in the metadata" }
                CODE_003_RESOURCE_ALREADY_EXISTS
            }
        }
    }

    /**
     * Add the [newAttributeTuples] in the metadata and
     * return the outcome code. Check that involved
     * users exist, are not incomplete or were not
     * deleted. Also check whether an attribute tuple
     * already exists
     */
    override fun addAttributeTuples(
        newAttributeTuples: HashSet<AttributeTuple>
    ): OutcomeCode {
        val size = newAttributeTuples.size
        if (size == 0) {
            logger.warn { "No attribute tuples given" }
            return CODE_000_SUCCESS
        }

        /** Create the list of values to insert in the metadata */
        logger.info { "Adding $size attribute tuples in the metadata (one per row below):" }
        val attributeTuples = ArrayList<ArrayList<Any?>>(size)
        newAttributeTuples.forEachIndexed { index, attributeTuple ->
            logger.info {
                "${index + 1}: user ${attributeTuple.username} " +
                "to attribute ${attributeTuple.attributeName}"
            }
            attributeTuples.add(createArray(attributeTuple))
        }

        /** Add the attribute tuples in the metadata */
        return createInsertStatement(
            table = attributeTuplesTable,
            values = attributeTuples,
            connection = connection!!,
        ).use {
            val rowCount = it.executeUpdate()
            if (rowCount != size) {
                logger.warn { "One ore more AttributeTuples were not added (expected $size, actual $rowCount)" }
                run loop@{
                    /**
                     * Check whether the operation failed because the
                     * tuple already exists or the user or attribute are missing
                     */
                    newAttributeTuples.forEach { attributeTuple ->
                        val username = attributeTuple.username
                        val attributeName = attributeTuple.attributeName

                        val codeUser = when (getStatus(
                            name = username,
                            type = ABACUnitElementTypeWithStatus.USER
                        )) {
                            UnitElementStatus.INCOMPLETE -> CODE_053_USER_IS_INCOMPLETE
                            UnitElementStatus.OPERATIONAL -> CODE_068_ATTRIBUTETUPLE_ALREADY_EXISTS
                            UnitElementStatus.DELETED -> CODE_013_USER_WAS_DELETED
                            null -> CODE_004_USER_NOT_FOUND
                        }
                        if (codeUser != CODE_068_ATTRIBUTETUPLE_ALREADY_EXISTS) {
                            return@loop codeUser
                        }

                        val codeAttribute = when (getStatus(
                            name = attributeName,
                            type = ABACUnitElementTypeWithStatus.ATTRIBUTE
                        )) {
                            UnitElementStatus.OPERATIONAL -> CODE_068_ATTRIBUTETUPLE_ALREADY_EXISTS
                            UnitElementStatus.DELETED -> CODE_067_ATTRIBUTE_WAS_DELETED
                            UnitElementStatus.INCOMPLETE, null -> CODE_066_ATTRIBUTE_NOT_FOUND
                        }
                        if (codeAttribute != CODE_068_ATTRIBUTETUPLE_ALREADY_EXISTS) {
                            return@loop codeAttribute
                        }
                    }
                    CODE_068_ATTRIBUTETUPLE_ALREADY_EXISTS
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Add the [newAccessStructureTuples] in the metadata
     * and return the outcome code. Check that involved
     * resources exist and were not deleted. Also check
     * whether an access structure tuple already exists
     */
    override fun addAccessStructureTuples(
        newAccessStructureTuples: HashSet<AccessStructureTuple>
    ): OutcomeCode {
        val size = newAccessStructureTuples.size
        if (size == 0) {
            logger.warn { "No access structure tuples given" }
            return CODE_000_SUCCESS
        }

        /** Create the list of values to insert in the metadata */
        logger.info { "Adding $size access structure tuples in the metadata (one per row below):" }
        val accessStructureTuples = ArrayList<ArrayList<Any?>>(size)
        newAccessStructureTuples.forEachIndexed { index, accessStructureTuple ->
            logger.info {
                "${index + 1}: resource ${accessStructureTuple.resourceName} " +
                "with permission ${accessStructureTuple.permission} " +
                "and access structure ${accessStructureTuple.accessStructure}"
            }
            accessStructureTuples.add(createArray(accessStructureTuple))
        }

        /** Add the access structure tuples in the metadata */
        return createInsertStatement(
            table = accessStructureTuplesTable,
            values = accessStructureTuples,
            connection = connection!!,
        ).use {
            val rowCount = it.executeUpdate()
            if (rowCount != size) {
                logger.warn { "One ore more AccessStructureTuples were not added (expected $size, actual $rowCount)" }
                run loop@{
                    /**
                     * Check whether the operation failed because the
                     * tuple already exists or the resource is missing
                     */
                    newAccessStructureTuples.forEach { accessStructureTuple ->
                        val resourceName = accessStructureTuple.resourceName

                        val codeResource = when (getStatus(
                            name = resourceName,
                            type = ABACUnitElementTypeWithStatus.RESOURCE
                        )) {
                            UnitElementStatus.OPERATIONAL -> CODE_069_ACCESSSTRUCTURETUPLE_ALREADY_EXISTS
                            UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                            UnitElementStatus.INCOMPLETE, null -> CODE_006_RESOURCE_NOT_FOUND
                        }
                        if (codeResource != CODE_069_ACCESSSTRUCTURETUPLE_ALREADY_EXISTS) {
                            return@loop codeResource
                        }
                    }
                    CODE_069_ACCESSSTRUCTURETUPLE_ALREADY_EXISTS
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Retrieve data of the users matching the specified
     * [username] and [status], if given, starting from
     * the [offset] limiting the number of users to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no users are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getUsers(
        username: String?,
        status: UnitElementStatus?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int,
    ): HashSet<User> {
        logger.info { "Getting data of users (offset $offset, limit $limit)" }

        // TODO support invocations by non-admin users

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!username.isNullOrBlank()) {
            logger.info { "Filtering by matching username $username" }
            whereParameters[usernameColumn] = username
        }
        if (status != null) {
            logger.info { "Filtering by matching status $status" }
            whereParameters[statusColumn] = status
        }

        val users = HashSet<User>()

        createSelectStatement(
            table = usersTable,
            whereParameters = whereParameters,
            limit = limit,
            offset = offset,
            connection = connection!!,
        ).use { firstStatement ->
            createSelectStatement(
                table = deletedUsersTable,
                whereParameters = whereParameters,
                limit = limit,
                offset = offset,
                connection = connection!!,
            ).use { secondStatement ->
                val finalStatement = when (status) {
                    null -> {
                        "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                    }
                    UnitElementStatus.DELETED -> {
                        secondStatement.asString()
                    }
                    else -> {
                        firstStatement.asString()
                    }
                }
                connection!!.prepareStatement(finalStatement).use {
                    val rs = it.executeQuery()
                    while (rs.next()) {
                        val user = User(
                            name = sanitizeForHTML(rs.getString(usernameColumn)),
                            status = status ?: UnitElementStatus.valueOf(
                                value = sanitizeForHTML(rs.getString(statusColumn))
                            ),
                            isAdmin = sanitizeForHTML(rs.getString(usernameColumn)) == ADMIN
                        )
                        user.token = sanitizeForHTML(rs.getString(userTokenColumn))
                        users.add(user)
                    }
                }
            }
        }

        logger.debug { "Found ${users.size} users" }
        return users
    }

    /**
     * Retrieve data of the attributes matching the specified
     * [attributeName] and [status], if given, starting from
     * the [offset] limiting the number of attributes to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no attributes are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getAttributes(
        attributeName: String?,
        status: UnitElementStatus?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int,
    ): HashSet<Attribute> {
        logger.info { "Getting data of attributes (offset $offset, limit $limit)" }

        // TODO support invocations by non-admin users

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!attributeName.isNullOrBlank()) {
            logger.info { "Filtering by matching attribute name $attributeName" }
            whereParameters[attributeNameColumn] = attributeName
        }
        if (status != null && status != UnitElementStatus.DELETED) {
            logger.info { "Filtering by matching status $status" }
            whereParameters[statusColumn] = status
        }

        val attributes = HashSet<Attribute>()

        createSelectStatement(
            table = attributesTable,
            whereParameters = whereParameters,
            limit = limit,
            offset = offset,
            connection = connection!!,
        ).use { firstStatement ->
            createSelectStatement(
                table = deletedAttributesTable,
                whereParameters = whereParameters,
                limit = limit,
                offset = offset,
                connection = connection!!,
            ).use { secondStatement ->
                val finalStatement = when (status) {
                    null -> {
                        "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                    }
                    UnitElementStatus.DELETED -> {
                        secondStatement.asString()
                    }
                    else -> {
                        firstStatement.asString()
                    }
                }
                connection!!.prepareStatement(finalStatement).use {
                    val rs = it.executeQuery()
                    while (rs.next()) {
                        val attribute = Attribute(
                            name = sanitizeForHTML(rs.getString(attributeNameColumn)),
                            status = status ?: UnitElementStatus.valueOf(
                                value = sanitizeForHTML(rs.getString(statusColumn))
                            ),
                            versionNumber = rs.getInt(attributeVersionNumberColumn),
                        )
                        attribute.token = sanitizeForHTML(rs.getString(attributeTokenColumn))
                        attributes.add(attribute)
                    }
                }
            }
        }

        logger.debug { "Found ${attributes.size} attributes" }
        return attributes
    }

    /**
     * Retrieve data of the resources matching the specified
     * [resourceName] and [status], if given, starting from
     * the [offset] limiting the number of resources to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no resources are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getResources(
        resourceName: String?,
        status: UnitElementStatus?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int
    ): HashSet<Resource> {
        logger.info { "Getting data of resources (offset $offset, limit $limit)" }

        // TODO support invocations by non-admin users

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!resourceName.isNullOrBlank()) {
            logger.info { "Filtering by matching resource name $resourceName" }
            whereParameters[resourceNameColumn] = resourceName
        }
        if (status != null && status != UnitElementStatus.DELETED) {
            logger.info { "Filtering by matching status $status" }
            whereParameters[statusColumn] = status
        }

        val resources = HashSet<Resource>()

        createSelectStatement(
            table = resourcesTable, // TODO should be "if (isAdmin) resourcesTable else resourcesView,"
            whereParameters = whereParameters,
            limit = limit,
            offset = offset,
            connection = connection!!,
        ).use { firstStatement ->
            createSelectStatement(
                table = deletedResourcesTable,
                whereParameters = whereParameters,
                limit = limit,
                offset = offset,
                connection = connection!!,
            ).use { secondStatement ->
                val finalStatement = if (!isAdmin) {
                    firstStatement.asString()
                } else {
                    when (status) {
                        null -> {
                            "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                        }
                        UnitElementStatus.DELETED -> {
                            secondStatement.asString()
                        }
                        else -> {
                            firstStatement.asString()
                        }
                    }
                }
                connection!!.prepareStatement(finalStatement).use {
                    val rs = it.executeQuery()
                    while (rs.next()) {
                        val resource = Resource(
                            name = sanitizeForHTML(rs.getString(resourceNameColumn)),
                            symEncKeyVersionNumber = rs.getInt(symEncKeyVersionNumberColumn),
                            symDecKeyVersionNumber = rs.getInt(symDecKeyVersionNumberColumn),
                            status = status ?: UnitElementStatus.valueOf(
                                value = sanitizeForHTML(rs.getString(statusColumn))
                            ),
                            enforcement = EnforcementType.valueOf(
                                value = sanitizeForHTML(
                                    rs.getString(
                                        enforcementColumn
                                    )
                                )
                            ),
                        )
                        resource.token = sanitizeForHTML(rs.getString(resourceTokenColumn))
                        resources.add(resource)
                    }
                }
            }
        }

        logger.debug { "Found ${resources.size} resources" }
        return resources
    }

    /**
     * Retrieve the attribute tuples matching the [username]
     * and/or the [attributeName] (at least one required),
     * starting from the [offset] limiting the number of
     * tuples to return to the given [limit] and with the
     * (possibly) relevant information of whether the
     * user invoking this function [isAdmin]. If no
     * attribute tuples are found, return an empty set.
     * This method should support invocations by non-admin
     * users
     */
    override fun getAttributeTuples(
        username: String?,
        attributeName: String?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int,
    ): HashSet<AttributeTuple> {
        logger.info { "Getting data of attribute tuples (offset $offset, limit $limit)" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!username.isNullOrBlank()) {
            logger.info { "Filtering by matching username $username" }
            whereParameters[usernameColumn] = username
        }
        if (!attributeName.isNullOrBlank()) {
            logger.info { "Filtering by matching attribute name $attributeName" }
            whereParameters[attributeNameColumn] = attributeName
        }
        if (whereParameters.isEmpty()) {
            val message = "A user or attribute name has to be specified"
            logger.error { message }
            throw IllegalArgumentException(message)
        }

        val attributeTuples = HashSet<AttributeTuple>()

        createSelectStatement(
            table = if (isAdmin) attributeTuplesTable else attributeTuplesView,
            whereParameters = whereParameters,
            limit = limit,
            offset = offset,
            connection = connection!!,
        ).use {
            val rs = it.executeQuery()
            while (rs.next()) {
                val attributeValue: String?
                rs.getString(attributeValueColumn).apply {
                    attributeValue = if (rs.wasNull() || this == "") {
                        null
                    } else {
                        sanitizeForHTML(this)
                    }
                }
                val attributeTuple = AttributeTuple(
                    username = sanitizeForHTML(rs.getString(usernameColumn)),
                    attributeName = sanitizeForHTML(rs.getString(attributeNameColumn)),
                    attributeValue = attributeValue,
                )
                attributeTuple.updateSignature(
                    newSignature = sanitizeForHTML(rs.getString(signatureColumn)).decodeBase64(),
                    newSigner = ADMIN,
                )
                attributeTuples.add(attributeTuple)
            }
        }
        logger.debug { "Found ${attributeTuples.size} attribute tuples" }
        return attributeTuples
    }

    /**
     * Retrieve the access structure tuples matching the
     * [resourceName], if given, starting from the [offset]
     * limiting the number of tuples to return to the given
     * [limit] and with the (possibly) relevant information
     * of whether the user invoking this function [isAdmin].
     * If no permission tuples are found, return an empty set.
     * This method should support invocations by non-admin
     * users
     */
    override fun getAccessStructureTuples(
        resourceName: String?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int,
    ): HashSet<AccessStructureTuple> {
        logger.info { "Getting data of access structure tuples (offset $offset, limit $limit)" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!resourceName.isNullOrBlank()) {
            logger.info { "Filtering by matching resource name $resourceName" }
            whereParameters[resourceNameColumn] = resourceName
        }

        val accessStructureTuples = HashSet<AccessStructureTuple>()

        createSelectStatement(
            table = accessStructureTuplesTable, // TODO should be "if (isAdmin) accessStructureTuplesTable else accessStructureTuplesView,"
            whereParameters = whereParameters,
            limit = limit,
            offset = offset,
            connection = connection!!,
        ).use {
            val rs = it.executeQuery()
            while (rs.next()) {
                val accessStructureTuple = AccessStructureTuple(
                    resourceName = sanitizeForHTML(rs.getString(resourceNameColumn)),
                    resourceToken = sanitizeForHTML(rs.getString(resourceTokenColumn)),
                    accessStructure = sanitizeForHTML(rs.getString(accessStructureColumn)).decodeBase64String(),
                    symKeyVersionNumber = rs.getInt(symKeyVersionNumberColumn),
                    permission = PermissionType.valueOf(sanitizeForHTML(rs.getString(permissionColumn))),
                    encryptingSymKey = EncryptedSymKey(
                        sanitizeForHTML(rs.getString(encryptingSymKeyColumn)).decodeBase64()
                    ),
                    decryptingSymKey = EncryptedSymKey(
                        sanitizeForHTML(rs.getString(decryptingSymKeyColumn)).decodeBase64()
                    )
                )
                accessStructureTuple.updateSignature(
                    newSignature = sanitizeForHTML(rs.getString(signatureColumn)).decodeBase64(),
                    newSigner = sanitizeForHTML(rs.getString(signerTokenColumn)),
                )
                accessStructureTuples.add(accessStructureTuple)
            }
        }
        logger.debug { "Found ${accessStructureTuples.size} access structure tuples" }
        return accessStructureTuples
    }

    /**
     * Retrieve the public asymmetric key of the given
     * [asymKeyType] belonging to the [name] or the
     * [token] (at least one required). Note that
     * only operational or deleted users are considered.
     * If the key was not found, return null. This method
     * should support invocations by non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    override fun getUserPublicKey(
        name: String?,
        token: String?,
        asymKeyType: AsymKeysType,
    ): ByteArray? {
        logger.info { "Getting public key of type $asymKeyType of user" }

        // TODO support invocations by non-admin users

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!name.isNullOrBlank()) {
            logger.info { "Filtering by matching name $name" }
            whereParameters[usernameColumn] = name
        }
        if (!token.isNullOrBlank()) {
            logger.info { "Filtering by matching token $token" }
            whereParameters[userTokenColumn] = token
        }
        if (whereParameters.isEmpty()) {
            val message = "A name or a token has to be specified"
            logger.error { message }
            throw IllegalArgumentException(message)
        }

        val whereNotParameters = LinkedHashMap<String, Any?>()
        whereNotParameters[statusColumn] = UnitElementStatus.INCOMPLETE

        val selectedColumns = arrayListOf(
            if (asymKeyType == AsymKeysType.ENC)
                asymEncPublicKeyColumn
            else
                asymSigPublicKeyColumn
        )
        var asymPublicKeyBytes: ByteArray? = null

        /**
         * Search the key in both the users
         * table and the deleted users table
         */
        createSelectStatement(
            table = usersTable,
            whereParameters = whereParameters,
            selectedColumns = selectedColumns,
            whereNotParameters = whereNotParameters,
            limit = 1,
            offset = 0,
            connection = connection!!,
        ).use { firstStatement ->
            createSelectStatement(
                table = deletedUsersTable,
                whereParameters = whereParameters,
                selectedColumns = selectedColumns,
                limit = 1,
                offset = 0,
                connection = connection!!,
            ).use { secondStatement ->
                val finalStatement = "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                connection!!.prepareStatement(finalStatement).use {
                    val rs = it.executeQuery()
                    if (rs.next()) {
                        asymPublicKeyBytes = sanitizeForHTML(
                            rs.getString(
                                if (asymKeyType == AsymKeysType.ENC)
                                    asymEncPublicKeyColumn
                                else
                                    asymSigPublicKeyColumn
                            )
                        ).decodeBase64()
                    }
                }
            }
        }

        logger.debug { "Public key was${ if (asymPublicKeyBytes == null) " not" else ""} found" }
        return asymPublicKeyBytes
    }

    /**
     * Retrieve the version number belonging to the element
     * of the specified [elementType] by matching the [name]
     * or [token] (at least one required). Note that only
     * operational elements are considered, and users do not
     * have version numbers. Note also that only the latest
     * version number of resources (i.e., the one used for encryption
     * are considered). If the version number was not found,
     * return null. This method should support invocations by
     * non-admin users
     */
    override fun getVersionNumber(
        name: String?,
        token: String?,
        elementType: ABACUnitElementTypeWithVN,
    ): Int? {
        logger.info { "Getting version number of a $elementType" }

        // TODO support invocations by non-admin users

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!name.isNullOrBlank()) {
            logger.info { "Filtering by matching name $name" }
            whereParameters[if (elementType == ABACUnitElementTypeWithVN.ATTRIBUTE)
                attributeNameColumn
            else resourceNameColumn
            ] = name
        }
        if (!token.isNullOrBlank()) {
            logger.info { "Filtering by matching token $token" }
            whereParameters[if (elementType == ABACUnitElementTypeWithVN.ATTRIBUTE)
                attributeTokenColumn
            else resourceTokenColumn
            ] = token
        }
        if (whereParameters.isEmpty()) {
            val message = "A name or a token has to be specified"
            logger.error { message }
            throw IllegalArgumentException(message)
        }
        whereParameters[statusColumn] = UnitElementStatus.OPERATIONAL

        val selectedColumn = if (elementType == ABACUnitElementTypeWithVN.ATTRIBUTE) {
            attributeVersionNumberColumn
        } else {
            symEncKeyVersionNumberColumn
        }
        val selectedColumns = arrayListOf(selectedColumn)

        var versionNumber: Int? = null

        createSelectStatement(
            table = if (elementType == ABACUnitElementTypeWithVN.ATTRIBUTE)
                attributesTable
            else
                resourcesTable,
            whereParameters = whereParameters,
            selectedColumns = selectedColumns,
            limit = 1,
            offset = 0,
            connection = connection!!,
        ).use {
            val rs = it.executeQuery()
            if (rs.next()) {
                versionNumber = rs.getInt(selectedColumn)
            }
        }
        logger.debug { "Version number was ${ if (versionNumber == null) "not " else ""} found" }
        return versionNumber
    }
    
    /**
     * Retrieve the token of the element of
     * the given [type] matching the [name].
     * If the token was not found, return null.
     * Note that only operational and deleted
     * elements are considered.
     * This method should support invocations
     * by non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    override fun getToken(
        name: String,
        type: ABACUnitElementTypeWithStatus
    ): String? {
        logger.info { "Getting token of a $type" }

        // TODO support invocations by non-admin users
        val whereParameters = LinkedHashMap<String, Any?>()
        logger.info { "Filtering by matching name $name" }
        whereParameters[
                when (type) {
                    ABACUnitElementTypeWithStatus.USER -> usernameColumn
                    ABACUnitElementTypeWithStatus.ATTRIBUTE -> attributeNameColumn
                    ABACUnitElementTypeWithStatus.RESOURCE -> resourceNameColumn
                }
        ] = name

        val table1: String
        val table2: String

        val selectedColumn = when (type) {
            ABACUnitElementTypeWithStatus.USER -> { table1 = usersTable; table2 = deletedUsersTable; userTokenColumn }
            ABACUnitElementTypeWithStatus.ATTRIBUTE -> { table1 = attributesTable; table2 = deletedAttributesTable; attributeTokenColumn }
            ABACUnitElementTypeWithStatus.RESOURCE -> { table1 = resourcesTable; table2 = deletedResourcesTable; resourceTokenColumn }
        }
        val selectedColumns = arrayListOf(selectedColumn)

        var token: String? = null

        createSelectStatement(
            table = table1,
            whereParameters = whereParameters,
            selectedColumns = selectedColumns,
            limit = 1,
            offset = 0,
            connection = connection!!,
        ).use { firstStatement ->
            createSelectStatement(
                table = table2,
                whereParameters = whereParameters,
                selectedColumns = selectedColumns,
                limit = 1,
                offset = 0,
                connection = connection!!,
            ).use { secondStatement ->
                connection!!.prepareStatement(
                    "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                ).use {
                    val rs = it.executeQuery()
                    if (rs.next()) {
                        token = rs.getString(selectedColumn)
                    }
                }
            }
        }
        logger.debug { "Token was ${ if (token == null) "not" else ""} found" }
        return token
    }

    /**
     * Retrieve the status of the element of the
     * given [type] by matching the [name]
     * or [token] (at least one required).
     * If the status was not found, return null.
     * This method should support invocations by
     * non-admin users
     * // TODO add isAdmin parameter and update doc
     */
    override fun getStatus(
        name: String?,
        token: String?,
        type: ABACUnitElementTypeWithStatus
    ): UnitElementStatus? {
        logger.debug { "Getting the status of a $type" }

        // TODO support invocations by non-admin users

        val table1: String
        val table2: String

        when (type) {
            ABACUnitElementTypeWithStatus.USER -> { table1 = usersTable; table2 = deletedUsersTable; }
            ABACUnitElementTypeWithStatus.ATTRIBUTE -> { table1 = attributesTable; table2 = deletedAttributesTable; }
            ABACUnitElementTypeWithStatus.RESOURCE -> { table1 = resourcesTable; table2 = deletedResourcesTable; }
        }
        val selectedColumns = arrayListOf(statusColumn)

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!name.isNullOrBlank()) {
            logger.info { "Filtering by matching name $name" }
            whereParameters[
                    when (type) {
                        ABACUnitElementTypeWithStatus.USER -> usernameColumn
                        ABACUnitElementTypeWithStatus.ATTRIBUTE -> attributeNameColumn
                        ABACUnitElementTypeWithStatus.RESOURCE -> resourceNameColumn
                    }
            ] = name
        }
        if (!token.isNullOrBlank()) {
            logger.info { "Filtering by matching token $token" }
            whereParameters[
                    when (type) {
                        ABACUnitElementTypeWithStatus.USER -> userTokenColumn
                        ABACUnitElementTypeWithStatus.ATTRIBUTE -> attributeTokenColumn
                        ABACUnitElementTypeWithStatus.RESOURCE -> resourceTokenColumn
                    }
            ] = token
        }
        if (whereParameters.isEmpty()) {
            val message = "A name or a token has to be specified"
            logger.error { message }
            throw IllegalArgumentException(message)
        }

        createSelectStatement(
            table = table1,
            whereParameters = whereParameters,
            selectedColumns = selectedColumns,
            connection = connection!!,
        ).use { firstStatement ->
            createSelectStatement(
                table = table2,
                whereParameters = whereParameters,
                selectedColumns = selectedColumns,
                connection = connection!!,
            ).use { secondStatement ->
                connection!!.prepareStatement(
                    "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                ).use {
                    val rs = it.executeQuery()
                    return if (rs.isBeforeFirst) {
                        rs.next()
                        UnitElementStatus.valueOf(rs.getString(statusColumn))
                    } else {
                        null
                    }
                }
            }
        }
    }

    /**
     * Delete the [attributeName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * an attribute (e.g., the version number, in case
     * the attribute gets restored). Finally, return the
     * outcome code. Check that the attribute exists and
     * was not already deleted
     *
     * In this implementation, move the [attributeName] in the
     * deleted attributes table
     */
    override fun deleteAttribute(
        attributeName: String
    ): OutcomeCode {
        logger.info { "Deleting attribute $attributeName" }

        logger.debug { "Moving the attribute from table $attributesTable to table $deletedAttributesTable" }
        val whereParameters = linkedMapOf<String, Any?>(
            attributeNameColumn to attributeName
        )
        val selectedColumns = arrayListOf(
            attributeNameColumn,
            attributeTokenColumn,
            attributeVersionNumberColumn,
            "'${UnitElementStatus.DELETED}'"
        )
        createSelectStatement(
            table = attributesTable,
            selectedColumns = selectedColumns,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use { selectStatement ->
            connection!!.prepareStatement(
                "INSERT INTO $deletedAttributesTable (${selectStatement.asString()})"
            ).use {
                if (it.executeUpdate() != 1) {
                    logger.warn { "Attribute $attributeName not found in the metadata" }
                    return when (getStatus(
                        name = attributeName,
                        type = ABACUnitElementTypeWithStatus.ATTRIBUTE
                    )) {
                        UnitElementStatus.DELETED -> CODE_067_ATTRIBUTE_WAS_DELETED
                        null -> CODE_066_ATTRIBUTE_NOT_FOUND
                        else -> {
                            val message = "Attribute not found but attribute is in table"
                            logger.error { message }
                            throw IllegalArgumentException(message)
                        }
                    }
                }
            }
        }

        logger.debug { "Deleting the attribute from table $attributesTable" }
        createDeleteStatement(
            table = attributesTable,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            return if (it.executeUpdate() != 1) {
                logger.warn { "Attribute $attributeName not found in the metadata" }
                CODE_066_ATTRIBUTE_NOT_FOUND
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Delete the [resourceName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a resource. Finally, return the outcome code.
     * Check that the resource exists and was not already
     * deleted
     *
     * In this implementation, move the [resourceName] in the
     * deleted resources table
     */
    override fun deleteResource(
        resourceName: String
    ): OutcomeCode {
        logger.info { "Deleting resource $resourceName" }

        logger.debug { "Moving the resource from table $resourcesTable to table $deletedResourcesTable" }
        val whereParameters = linkedMapOf<String, Any?>(
            resourceNameColumn to resourceName
        )
        val selectedColumns = arrayListOf(
            resourceNameColumn,
            resourceTokenColumn,
            symEncKeyVersionNumberColumn,
            symDecKeyVersionNumberColumn,
            "'${UnitElementStatus.DELETED}'",
            enforcementColumn
        )
        createSelectStatement(
            table = resourcesTable,
            selectedColumns = selectedColumns,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use { selectStatement ->
            connection!!.prepareStatement(
                "INSERT INTO $deletedResourcesTable (${selectStatement.asString()})"
            ).use {
                if (it.executeUpdate() != 1) {
                    logger.warn { "Resource $resourceName not found in the metadata" }
                    return when (getStatus(
                        name = resourceName,
                        type = ABACUnitElementTypeWithStatus.RESOURCE
                    )) {
                        UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                        null -> CODE_006_RESOURCE_NOT_FOUND
                        else -> {
                            val message = "Resource not found but resource is in table"
                            logger.error { message }
                            throw IllegalArgumentException(message)
                        }
                    }
                }
            }
        }

        logger.debug { "Deleting the resource from table $resourcesTable" }
        createDeleteStatement(
            table = resourcesTable,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            return if (it.executeUpdate() != 1) {
                logger.warn { "Resource $resourceName not found in the metadata" }
                CODE_006_RESOURCE_NOT_FOUND
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Delete the attribute tuples matching the [username]
     * and/or the [attributeName] (at least one required).
     * Finally, return the outcome code. Check that at
     * least one attribute tuple is deleted, and if not check
     * whether the [username] or the [attributeName] exists
     * and was not deleted
     */
    override fun deleteAttributeTuples(
        username: String?,
        attributeName: String?,
    ): OutcomeCode {
        logger.info { "Deleting attribute tuples" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!username.isNullOrBlank()) {
            logger.info { "Filtering by matching username $username" }
            whereParameters[usernameColumn] = username
        }
        if (!attributeName.isNullOrBlank()) {
            logger.info { "Filtering by matching attribute name $attributeName" }
            whereParameters[attributeNameColumn] = attributeName
        }
        /**
         * At least one parameter has to be specified, otherwise
         * the delete operation would delete all rows in the table
         */
        if (whereParameters.isEmpty()) {
            val message = "No arguments were provided for delete operation"
            logger.error { message }
            throw IllegalArgumentException(message)
        }

        logger.debug { "Deleting the attribute tuple from table $attributeTuplesTable" }
        createDeleteStatement(
            table = attributeTuplesTable,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            val affectedRows = it.executeUpdate()
            logger.debug { "$affectedRows attribute tuples were deleted" }
            return if (affectedRows <= 0) {
                logger.warn { "No attribute tuple was deleted" }
                /**
                 * Check whether the operation failed because there
                 * are no tuples or because the user or the attribute is
                 * missing or was deleted
                 */
                val userExists = if (username != null) {
                    when (getStatus(
                        name = username,
                        type = ABACUnitElementTypeWithStatus.USER
                    )) {
                        UnitElementStatus.OPERATIONAL -> CODE_070_ATTRIBUTETUPLE_NOT_FOUND
                        UnitElementStatus.DELETED -> CODE_013_USER_WAS_DELETED
                        UnitElementStatus.INCOMPLETE, null -> CODE_004_USER_NOT_FOUND
                    }
                } else {
                    CODE_070_ATTRIBUTETUPLE_NOT_FOUND
                }

                if (userExists == CODE_070_ATTRIBUTETUPLE_NOT_FOUND) {
                    if (attributeName != null) {
                        when (getStatus(
                            name = attributeName,
                            type = ABACUnitElementTypeWithStatus.ATTRIBUTE
                        )) {
                            UnitElementStatus.OPERATIONAL -> CODE_070_ATTRIBUTETUPLE_NOT_FOUND
                            UnitElementStatus.DELETED -> CODE_067_ATTRIBUTE_WAS_DELETED
                            UnitElementStatus.INCOMPLETE, null -> CODE_066_ATTRIBUTE_NOT_FOUND
                        }
                    } else {
                        CODE_070_ATTRIBUTETUPLE_NOT_FOUND
                    }
                } else {
                    userExists
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Delete the access structure tuples matching
     * the [resourceName] and the [permission], if
     * given. Finally, return the outcome code. Check
     * that exactly one access structure tuple is deleted,
     * and if not check whether the [resourceName]
     * exists and was not deleted, or that the access
     * structure tuple actually exists
     */
    override fun deleteAccessStructureTuples(
        resourceName: String,
        permission: PermissionType?
    ): OutcomeCode {
        logger.info {
            "Deleting access structure tuples for " +
            "resource name $resourceName and permission $permission"
        }

        logger.info { "Filtering by matching resource name $resourceName " }
        val whereParameters = linkedMapOf<String, Any?>(
            resourceNameColumn to resourceName
        )
        if (permission != null) {
            logger.info { "Filtering by matching permission $permission" }
            whereParameters[permissionColumn] = permission
        }

        logger.debug { "Deleting the access structure tuples from table $accessStructureTuplesTable" }
        createDeleteStatement(
            table = accessStructureTuplesTable,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            val affectedRows = it.executeUpdate()
            logger.debug { "$affectedRows access structure tuples were deleted" }
            return if (affectedRows <= 0) {
                logger.warn { "No access structure tuple was deleted" }
                /**
                 * Check whether the operation failed because there
                 * are no tuples or because the resource is missing or
                 * was deleted
                 */
                when (getStatus(
                    name = resourceName,
                    type = ABACUnitElementTypeWithStatus.RESOURCE
                )) {
                    UnitElementStatus.OPERATIONAL -> CODE_071_ACCESSSTRUCTURETUPLE_NOT_FOUND
                    UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                    UnitElementStatus.INCOMPLETE, null -> CODE_006_RESOURCE_NOT_FOUND
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Update the token of the [resourceName] with the
     * [newResourceToken] and the encryption version
     * number with the [newSymEncKeyVersionNumber].
     * This method should also update the resource's token
     * across all metadata. Check that the resource exists
     *
     * In this implementation, the update of the resource's
     * token is done with "ON UPDATE CASCADE"
     */
    override fun updateResourceTokenAndVersionNumber(
        resourceName: String,
        oldResourceToken: String,
        newResourceToken: String,
        newSymEncKeyVersionNumber: Int,
    ): OutcomeCode {
        logger.info { "Updating the token and the sym enc version number of $resourceName" }

        val whereParameters = linkedMapOf<String, Any?>(
            resourceNameColumn to resourceName
        )
        val values = linkedMapOf<String, Any>(
            resourceTokenColumn to newResourceToken,
            symEncKeyVersionNumberColumn to newSymEncKeyVersionNumber,
        )

        return createUpdateStatement(
            table = resourcesTable,
            values = values,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "Resource $resourceName not found in the metadata" }
                when (getStatus(
                    name = resourceName,
                    type = ABACUnitElementTypeWithStatus.RESOURCE
                )) {
                    UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                    null -> CODE_006_RESOURCE_NOT_FOUND
                    else -> {
                        val message = "Resource not found but resource is in table"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Update the token, access structure, encrypting and
     * decrypting key and encryption version number of the access
     * structure with the given [updatedAccessStructureTuple]
     */
    override fun updateAccessStructureTuple(
        updatedAccessStructureTuple: AccessStructureTuple
    ): OutcomeCode {
        logger.info {
            "Updating the access structure tuple of resource " +
            "${updatedAccessStructureTuple.resourceName} "
        }

        val whereParameters = linkedMapOf<String, Any?>(
            resourceNameColumn to updatedAccessStructureTuple.resourceName,
            permissionColumn to updatedAccessStructureTuple.permission.toString()
        )
        val values = linkedMapOf<String, Any>(
            resourceTokenColumn to updatedAccessStructureTuple.resourceToken,
            accessStructureColumn to updatedAccessStructureTuple.accessStructure.encodeBase64(),
            encryptingSymKeyColumn to updatedAccessStructureTuple.encryptingSymKey!!.key.encodeBase64(),
            decryptingSymKeyColumn to updatedAccessStructureTuple.decryptingSymKey!!.key.encodeBase64(),
            symKeyVersionNumberColumn to updatedAccessStructureTuple.symKeyVersionNumber,
            signerTokenColumn to updatedAccessStructureTuple.signer!!,
            signatureColumn to updatedAccessStructureTuple.signature!!.encodeBase64()
        )

        createUpdateStatement(
            table = accessStructureTuplesTable,
            values = values,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            return if (it.executeUpdate() != 1) {
                logger.warn { "Access structure tuple was not found" }
                CODE_071_ACCESSSTRUCTURETUPLE_NOT_FOUND
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Replace the ABE key for [username] with
     * the given [newEncryptedUserABEKey]. Only
     * operational users are considered
     */
    override fun updateUserABEKey(
        username: String,
        newEncryptedUserABEKey: ByteArray?
    ): OutcomeCode {
        logger.info { "Updating the ABE key of user $username" }

        val whereParameters = linkedMapOf<String, Any?>(
            usernameColumn to username,
            statusColumn to UnitElementStatus.OPERATIONAL
        )
        val values = linkedMapOf<String, Any>(
            abeSecretKeyColumn to (newEncryptedUserABEKey?.encodeBase64() ?: ""),
        )

        return createUpdateStatement(
            table = usersTable,
            values = values,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "User $username not found in the metadata" }
                when (getStatus(
                    name = username,
                    type = ABACUnitElementTypeWithStatus.USER
                )) {
                    UnitElementStatus.INCOMPLETE -> CODE_053_USER_IS_INCOMPLETE
                    UnitElementStatus.DELETED -> CODE_013_USER_WAS_DELETED
                    null -> CODE_004_USER_NOT_FOUND
                    else -> {
                        val message = "User not found but user is in table"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Get the [username]'s ABE key. Only
     * operational users are considered.
     * If the key was not found, return
     * null
     */
    override fun getUserABEKey(
        username: String,
    ): ByteArray? {
        // TODO add the isAdmin parameter and toggle below the table to look in for the ABE key
        logger.info { "Getting the ABE key of user $username" }
        val msk: ByteArray?

        val whereParameters = LinkedHashMap<String, Any?>()
        whereParameters[usernameColumn] = username

        createSelectStatement(
            table = usersInfoView,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            val rs = it.executeQuery()
            msk = if (rs.next()) {
                val abeKey: ByteArray?
                rs.getString(abeSecretKeyColumn).apply {
                    abeKey = if (rs.wasNull() || this == "") {
                        null
                    } else {
                        sanitizeForHTML(this).decodeBase64()
                    }
                }
                abeKey
            } else {
                null
            }
        }

        logger.debug { "Key was${if (msk != null) {""} else {" not"}} found" }
        return msk
    }

    /**
     * Update the token of the [attributeName] with the
     * [newAttributeToken] and the version number with
     * the [newVersionNumber]. This method should also
     * update the attribute's token across all metadata.
     * Check that the attribute exists and was not deleted
     */
    override fun updateAttributeTokenAndVersionNumber(
        attributeName: String,
        oldAttributeToken: String,
        newAttributeToken: String,
        newVersionNumber: Int
    ): OutcomeCode {
        logger.info { "Updating the token and the version number of $attributeName" }

        val whereParameters = linkedMapOf<String, Any?>(
            attributeNameColumn to attributeName
        )
        val values = linkedMapOf<String, Any>(
            attributeTokenColumn to newAttributeToken,
            attributeVersionNumberColumn to newVersionNumber,
        )

        return createUpdateStatement(
            table = attributesTable,
            values = values,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "Attribute $attributeName not found in the metadata" }
                when (getStatus(
                    name = attributeName,
                    type = ABACUnitElementTypeWithStatus.ATTRIBUTE
                )) {
                    UnitElementStatus.DELETED -> CODE_067_ATTRIBUTE_WAS_DELETED
                    null -> CODE_066_ATTRIBUTE_NOT_FOUND
                    else -> {
                        val message = "Attribute not found but attribute is in table"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollback the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0. Finally, return
     * the outcome code
     *
     * In this implementation, set the "autocommit" MySQL flag to OFF
     */
    override fun lock(): OutcomeCode {
        return if (locks == 0) {
            logger.info { "Locking the status of the MM" }
            try {
                if (connection == null || connection!!.isClosed) {
                    connection = DriverManager.getConnection(jDBUrl, connectionProperties)
                    connection!!.autoCommit = false
                    locks++
                    CODE_000_SUCCESS
                } else {
                    /** A lock has been set but not released */
                    logger.warn { "A lock has been set but not released" }
                    connection!!.rollback()
                    connection!!.close()
                    locks = 0
                    CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
                }
            } catch (e: CommunicationsException) {
                if ((e.message ?: "").contains("Communications link failure")) {
                    logger.warn { "MM MySQL - connection timeout" }
                    CODE_045_MM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            } catch (e: SQLException) {
                if ((e.message ?: "").contains("Access denied for user")) {
                    logger.warn { "MM MySQL - access denied for user" }
                    CODE_055_ACCESS_DENIED_TO_MM
                } else {
                    throw e
                }
            }
        } else if (locks > 0) {
            locks++
            logger.debug { "Increment lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "Lock number is negative ($locks)" }
            CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
        }
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollback to the previous status only when [locks] becomes 0. Finally,
     * return the outcome code
     *
     * In this implementation, rollback the transaction
     */
    override fun rollback(): OutcomeCode {
        return if (locks == 1) {
            logger.info { "Rollback the status of the MM" }
            locks--
            if (!connection!!.isClosed) {
                connection!!.rollback()
                connection!!.close()
                CODE_000_SUCCESS
            } else {
                /** The lock has already been released */
                logger.warn { "The lock was released but the connection was not closed" }
                CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 1) {
            locks--
            logger.debug { "Decrement lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "MM rollback number is zero or negative ($locks)" }
            CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
        }
    }

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0. Finally, return the
     * outcome code
     *
     * In this implementation, commit the transaction
     */
    override fun unlock(): OutcomeCode {
        return if (locks == 1) {
            logger.info { "Unlocking the status of the MM" }
            locks--
            if (!connection!!.isClosed) {
                try {
                    connection!!.commit()
                } catch (e: SQLException) {
                    logger.warn { "Commit of MySQL database failed" }
                    CODE_034_UNLOCK_FAILED
                }
                connection!!.close()
                CODE_000_SUCCESS
            } else {
                /** The lock has already been released */
                logger.warn { "The lock was released but the connection was not closed" }
                CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 1) {
            locks--
            logger.debug { "Decrement lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "MM unlock number is zero or negative ($locks)" }
            CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
        }
    }



    /**
     * Create and return an array list from the given [attributeTuple]
     * to match the order of the columns of the attribute tuples table
     */
    private fun createArray(attributeTuple: AttributeTuple): ArrayList<Any?> {
        return arrayListOf(
            attributeTuple.username,
            attributeTuple.attributeName,
            attributeTuple.attributeValue ?: "",
            attributeTuple.signature!!.encodeBase64()
        )
    }

    /**
     * Create and return an array list from the given [accessStructureTuple]
     * to match the order of the columns of the access structure tuples table.
     * We encode in Base64 the access structure as it may contain HTML chars
     * (i.e., <, >) TODO is there a better way?
     */
    private fun createArray(accessStructureTuple: AccessStructureTuple): ArrayList<Any?> {
        return arrayListOf(
            accessStructureTuple.resourceName,
            accessStructureTuple.resourceToken,
            accessStructureTuple.accessStructure.encodeBase64(),
            accessStructureTuple.permission,
            accessStructureTuple.encryptingSymKey!!.key.encodeBase64(),
            accessStructureTuple.decryptingSymKey!!.key.encodeBase64(),
            accessStructureTuple.symKeyVersionNumber,
            accessStructureTuple.signer,
            accessStructureTuple.signature!!.encodeBase64()
        )
    }
}
