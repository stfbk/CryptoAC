package eu.fbk.st.cryptoac.mm.mysql

import com.mysql.cj.jdbc.exceptions.CommunicationsException
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.model.tuple.*
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.EncryptedAsymKeys
import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.mm.MMServiceRBAC
import eu.fbk.st.cryptoac.mm.MMType
import eu.fbk.st.cryptoac.model.CodeServiceParameters
import eu.fbk.st.cryptoac.model.*
import mu.KotlinLogging
import java.io.BufferedReader
import java.io.FileNotFoundException
import java.io.InputStreamReader
import java.security.PublicKey
import java.sql.*
import java.util.*
import kotlin.collections.ArrayList
import kotlin.collections.HashSet
import kotlin.collections.LinkedHashMap

private val logger = KotlinLogging.logger {}

// TODO use OPA to filter queries to MySQL database?

// TODO the databaseRBAC.sql code contains triggers to
//  manage the update of tokens, but they should be
//  removed (because they are useless), right?

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
class MMServiceRBACMySQL(
    private val mmMySQLServiceParameters: MMServiceRBACMySQLParameters
) : MMServiceRBAC, MMServiceMySQL {

    companion object {
        /** The name of the schema in the database */
        private const val databaseName = "cryptoac"
        const val usersTable = "$databaseName.users"
        const val deletedUsersTable = "$databaseName.deletedUsers"
        const val usersView = "$databaseName.user_specific_users"
        const val usersStatusView = "$databaseName.user_specific_users_status"
        const val rolesTable = "$databaseName.roles"
        const val deletedRolesTable = "$databaseName.deletedRoles"
        const val deletedResourcesTable = "$databaseName.deletedResources"
        const val resourcesTable = "$databaseName.resources"
        const val resourcesView = "$databaseName.user_specific_resources"
        const val roleTuplesTable = "$databaseName.roleTuples"
        const val roleTuplesView = "$databaseName.user_specific_roleTuples"
        const val permissionTuplesTable = "$databaseName.permissionTuples"
        const val permissionTuplesView = "$databaseName.user_specific_permissionTuples"
        const val userTokenColumn = "userToken"
        const val roleTokenColumn = "roleToken"
        const val resourceTokenColumn = "resourceToken"
        const val asymEncPublicKeyColumn = "asymEncPublicKey"
        const val asymSigPublicKeyColumn = "asymSigPublicKey"
        const val roleVersionNumberColumn = "roleVersionNumber"
        const val symKeyVersionNumberColumn = "symKeyVersionNumber"
        const val symEncKeyVersionNumberColumn = "symEncKeyVersionNumber"
        const val symDecKeyVersionNumberColumn = "symDecKeyVersionNumber"
        const val encryptedAsymEncPublicKeyColumn = "encryptedAsymEncPublicKey"
        const val encryptedAsymEncPrivateKeyColumn = "encryptedAsymEncPrivateKey"
        const val encryptedAsymSigPublicKeyColumn = "encryptedAsymSigPublicKey"
        const val encryptedAsymSigPrivateKeyColumn = "encryptedAsymSigPrivateKey"
        const val encryptingSymKeyColumn = "encryptingSymKey"
        const val decryptingSymKeyColumn = "decryptingSymKey"
        const val signatureColumn = "signature"
        const val permissionColumn = "permission"
        const val signerTokenColumn = "signerToken"
        const val usernameColumn = "username"
        const val roleNameColumn = "roleName"
        const val resourceNameColumn = "resourceName"
        const val statusColumn = "status"
        const val enforcementColumn = "enforcement"

        /** The file containing SQL commands to initialize the database */
        const val INIT_RBAC_SQL_CODE = "/cryptoac/MySQL/databaseRBAC.sql"
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

        val sqlFile = MMServiceRBACMySQL::class.java.getResourceAsStream(INIT_RBAC_SQL_CODE)
        if (sqlFile == null) {
            val message = "Initialization SQL file $INIT_RBAC_SQL_CODE not found"
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
        logger.info { "No action required to initialize the MM RBAC MySQL service" }
    }

    /**
     * This function is invoked each time the (interface toward
     * the) service is destroyed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    override fun deinit() {
        logger.info { "No action required to de-initialize the MM RBAC MySQL service" }
    }

    /**
     * Add (and initialize) the [newAdmin] in the
     * service and return the outcome code. Check that
     * the name of the admin is the expected one and
     * that the admin was not already added (or initialized)
     * 
     * In this implementation, add the [newAdmin] in the 
     * metadata by setting the public keys and token of the 
     * [newAdmin] and return the outcome code
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
     * of the [user], updating also the status flag, and 
     * return the outcome code
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
                    table = usersStatusView,
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
     * In this implementation, the user's asymmetric
     * encryption and signing public keys and token
     * will be set by the user him/herself later on
     * (initUser function)
     */
    override fun addUser(
        newUser: User
    ): CodeServiceParameters {
        val username = newUser.name
        val userToken = newUser.token

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CodeServiceParameters(code = CODE_020_INVALID_PARAMETER)
        }


        logger.info { "Adding the user $username in the metadata and in the database" }

        if (getUsers(
                username = username,
                status = UnitElementStatus.DELETED
            ).isNotEmpty()) {
            logger.warn { "User $username was previously deleted" }
            return CodeServiceParameters(CODE_013_USER_WAS_DELETED)
        }

        /** TODO check password generation */
        val passwordBytes = ByteArray(20)
        Random().nextBytes(passwordBytes)
        val newPassword = passwordBytes.encodeBase64()

        /**
         * Add the user in the metadata, keys and
         * token will be set by the user
         */
        logger.debug { "Adding the user in the metadata" }
        val adminUserValues = arrayListOf<Any?>(
            username,
            userToken,
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

            connection!!.prepareStatement(
                "GRANT SELECT (" +
                        "$roleTokenColumn, " +
                        "$asymEncPublicKeyColumn, " +
                        "$asymSigPublicKeyColumn, " +
                        "$statusColumn, " +
                        "$roleVersionNumberColumn) ON $rolesTable TO ?"
            ).use {
                logger.debug { "Granting permission on roles table" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT (" +
                        "$roleTokenColumn, " +
                        "$asymEncPublicKeyColumn, " +
                        "$asymSigPublicKeyColumn, " +
                        "$statusColumn, " +
                        "$roleVersionNumberColumn) ON $deletedRolesTable TO ?"
            ).use {
                logger.debug { "Granting permission on deleted roles table" }
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
                "GRANT SELECT ON $roleTuplesView TO ?"
            ).use {
                logger.debug { "Granting permission on role tuples view" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT ON $permissionTuplesView TO ?"
            ).use {
                logger.debug { "Granting permission on permission tuples view" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT ON $resourcesView TO ?"
            ).use {
                logger.debug { "Granting permission on resources view" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT UPDATE ON $usersView TO ?"
            ).use {
                logger.debug { "Granting permission on users view" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT ON $usersStatusView TO ?"
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
            parameters = MMServiceRBACMySQLParameters(
                username = username,
                password = newPassword,
                port = mmMySQLServiceParameters.port,
                url = mmMySQLServiceParameters.url
            )
        )
    }

    /**
     * Delete [username] from the service. Check
     * that the user exists, and she is not the admin
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
                        type = RBACUnitElementTypeWithStatus.USER
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
     * Add the [newRole] in the metadata and
     * return the outcome code. Check that the
     * role does not already exist or was deleted
     */
    override fun addRole(newRole: Role): OutcomeCode {
        logger.info { "Adding the role ${newRole.name} in the metadata" }

        if (getRoles(
                roleName = newRole.name,
                status = UnitElementStatus.DELETED
            ).isNotEmpty()) {
            logger.warn { "Role ${newRole.name} was previously deleted" }
            return CODE_014_ROLE_WAS_DELETED
        }

        /** Add the role in the metadata */
        logger.debug { "Adding the role in the metadata" }
        val roleValues = arrayListOf<Any?>(
            newRole.name,
            newRole.token,
            newRole.asymEncKeys!!.public,
            newRole.asymSigKeys!!.public,
            newRole.versionNumber,
            UnitElementStatus.OPERATIONAL
        )
        return createInsertStatement(
            table = rolesTable,
            values = arrayListOf(roleValues),
            connection = connection!!,
        ).use {
            if (it.executeUpdate() == 1) {
                CODE_000_SUCCESS
            } else {
                logger.warn { "Role ${newRole.name} already present in the metadata" }
                CODE_002_ROLE_ALREADY_EXISTS
            }
        }
    }

    /**
     * Add the [newResource] in the metadata and
     * return the outcome code. Check that the
     * resource does not already exist or was deleted
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
     * Add the [newRoleTuples] in the metadata and
     * return the outcome code. Check that involved
     * users exist, are not incomplete or were not
     * deleted, and that involved roles exist and
     * were not deleted. Also check whether a role
     * tuple already exists
     */
    override fun addRoleTuples(newRoleTuples: HashSet<RoleTuple>): OutcomeCode {
        val size = newRoleTuples.size
        if (size == 0) {
            logger.warn { "No role tuples given" }
            return CODE_000_SUCCESS
        }

        /**
         * Check that involved users exist, are
         * not incomplete or were not deleted,
         * and that involved roles exist and
         * were not deleted
         */
        var code = CODE_000_SUCCESS
        run error@{
            newRoleTuples.forEach { roleTuple ->

                val username = roleTuple.username
                val roleName = roleTuple.roleName

                code = when (
                    getStatus(name = username, type = RBACUnitElementTypeWithStatus.USER)
                ) {
                    null -> {
                        logger.warn { "User $username was not found" }
                        CODE_004_USER_NOT_FOUND
                    }
                    UnitElementStatus.DELETED -> {
                        logger.warn { "User $username was previously deleted" }
                        CODE_013_USER_WAS_DELETED
                    }
                    UnitElementStatus.INCOMPLETE -> {
                        logger.warn { "User $username is incomplete" }
                        CODE_053_USER_IS_INCOMPLETE
                    }
                    else ->
                        CODE_000_SUCCESS
                }
                if (code != CODE_000_SUCCESS) {
                    return@error
                }

                code = when (
                    getStatus(name = roleName, type = RBACUnitElementTypeWithStatus.ROLE)
                ) {
                    null -> {
                        logger.warn { "Role $roleName was not found" }
                        CODE_005_ROLE_NOT_FOUND
                    }
                    UnitElementStatus.DELETED -> {
                        logger.warn { "Role $roleName was previously deleted" }
                        CODE_014_ROLE_WAS_DELETED
                    }
                    else ->
                        CODE_000_SUCCESS
                }
                if (code != CODE_000_SUCCESS) {
                    return@error
                }
            }
        }
        if (code != CODE_000_SUCCESS) {
            return code
        }

        /** Create the list of values to insert in the metadata */
        logger.info { "Adding $size role tuples in the metadata (one per row below):" }
        val roleTuples = ArrayList<ArrayList<Any?>>(size)
        newRoleTuples.forEachIndexed { index, roleTuple ->
            logger.info {
                "${index + 1}: user ${roleTuple.username} " +
                        "to role ${roleTuple.roleName}"
            }
            roleTuples.add(createArray(roleTuple))
        }


        /** Add the role tuples in the metadata */
        return createInsertStatement(
            table = roleTuplesTable,
            values = roleTuples,
            connection = connection!!,
        ).use {
            val rowCount = it.executeUpdate()
            if (rowCount != size) {
                logger.warn { "One ore more RoleTuples were not added (expected $size, actual $rowCount)" }
                run loop@{
                    /**
                     * Check whether the operation failed because the
                     * tuple already exists or the user or role are missing
                     */
                    newRoleTuples.forEach { roleTuple ->
                        val username = roleTuple.username
                        val roleName = roleTuple.roleName

                        val codeUser = when (getStatus(
                            name = username,
                            type = RBACUnitElementTypeWithStatus.USER
                        )) {
                            UnitElementStatus.INCOMPLETE -> CODE_053_USER_IS_INCOMPLETE
                            UnitElementStatus.OPERATIONAL -> CODE_010_ROLETUPLE_ALREADY_EXISTS
                            UnitElementStatus.DELETED -> CODE_013_USER_WAS_DELETED
                            null -> CODE_004_USER_NOT_FOUND
                        }
                        if (codeUser != CODE_010_ROLETUPLE_ALREADY_EXISTS) {
                            return@loop codeUser
                        }

                        val codeRole = when (getStatus(
                            name = roleName,
                            type = RBACUnitElementTypeWithStatus.ROLE
                        )) {
                            UnitElementStatus.OPERATIONAL -> CODE_010_ROLETUPLE_ALREADY_EXISTS
                            UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                            UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                        }
                        if (codeRole != CODE_010_ROLETUPLE_ALREADY_EXISTS) {
                            return@loop codeRole
                        }
                    }
                    CODE_010_ROLETUPLE_ALREADY_EXISTS
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Add the [newPermissionTuples] in the metadata
     * and return the outcome code. Check that involved
     * roles exist and were not deleted and that involved
     * resources exist and were not deleted. Also check whether
     * a permission tuple already exists
     */
    override fun addPermissionTuples(
        newPermissionTuples: HashSet<PermissionTuple>
    ): OutcomeCode {
        val size = newPermissionTuples.size
        if (size == 0) {
            logger.warn { "No permission tuples given" }
            return CODE_000_SUCCESS
        }

        /** Create the list of values to insert in the metadata */
        logger.info { "Adding $size permission tuples in the metadata (one per row below):" }
        val permissionTuples = ArrayList<ArrayList<Any?>>(size)
        newPermissionTuples.forEachIndexed { index, permissionTuple ->
            logger.info {
                "${index + 1}: role ${permissionTuple.roleName} to resource " +
                "${permissionTuple.resourceName} with permission ${permissionTuple.permission}"
            }
            permissionTuples.add(createArray(permissionTuple))
        }

        /** Add the permission tuples in the metadata */
        return createInsertStatement(
            table = permissionTuplesTable,
            values = permissionTuples,
            connection = connection!!,
        ).use {
            val rowCount = it.executeUpdate()
            if (rowCount != size) {
                logger.warn {
                    "One ore more permission tuples were " +
                            "not added (expected $size, actual $rowCount)"
                }
                run loop@{
                    /**
                     * Check whether the operation failed because the
                     * tuple already exists or the role or resource are missing
                     */
                    newPermissionTuples.forEach { permissionTuple ->
                        val resourceName = permissionTuple.resourceName
                        val roleName = permissionTuple.roleName

                        val codeRole = when (getStatus(
                            name = roleName,
                            type = RBACUnitElementTypeWithStatus.ROLE
                        )) {
                            UnitElementStatus.OPERATIONAL -> CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
                            UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                            UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                        }

                        if (codeRole != CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS) {
                            return@loop codeRole
                        }

                        val codeResource = when (getStatus(
                            name = resourceName,
                            type = RBACUnitElementTypeWithStatus.RESOURCE
                        )) {
                            UnitElementStatus.OPERATIONAL -> CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
                            UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                            UnitElementStatus.INCOMPLETE, null -> CODE_006_RESOURCE_NOT_FOUND
                        }

                        if (codeResource != CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS) {
                            return@loop codeResource
                        }
                    }
                    CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
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
     * Retrieve data of the roles matching the specified
     * [roleName] and [status], if given, starting from
     * the [offset] limiting the number of roles to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no roles are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getRoles(
        roleName: String?,
        status: UnitElementStatus?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int,
    ): HashSet<Role> {
        logger.info { "Getting data of roles (offset $offset, limit $limit)" }

        // TODO support invocations by non-admin users

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!roleName.isNullOrBlank()) {
            logger.info { "Filtering by matching role name $roleName" }
            whereParameters[roleNameColumn] = roleName
        }
        if (status != null && status != UnitElementStatus.DELETED) {
            logger.info { "Filtering by matching status $status" }
            whereParameters[statusColumn] = status
        }

        val roles = HashSet<Role>()

        createSelectStatement(
            table = rolesTable,
            whereParameters = whereParameters,
            limit = limit,
            offset = offset,
            connection = connection!!,
        ).use { firstStatement ->
            createSelectStatement(
                table = deletedRolesTable,
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
                        val role = Role(
                            name = sanitizeForHTML(rs.getString(roleNameColumn)),
                            status = status ?: UnitElementStatus.valueOf(
                                value = sanitizeForHTML(rs.getString(statusColumn))
                            ),
                            versionNumber = rs.getInt(roleVersionNumberColumn),
                        )
                        role.token = sanitizeForHTML(rs.getString(roleTokenColumn))
                        roles.add(role)
                    }
                }
            }
        }

        logger.debug { "Found ${roles.size} roles" }
        return roles
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
            table = if (isAdmin) resourcesTable else resourcesView,
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
     * Retrieve the role tuples matching the [username]
     * and/or the [roleName], if given, starting from th
     * [offset] limiting the number of tuples to return
     * to the given [limit] and with the (possibly)
     * relevant information of whether the user invoking
     * this function [isAdmin]. If no role tuples are found,
     * return an empty set. This method should
     * support invocations by non-admin users
     */
    override fun getRoleTuples(
        username: String?,
        roleName: String?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int
    ): HashSet<RoleTuple> {
        logger.info { "Getting data of role tuples (offset $offset, limit $limit)" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!username.isNullOrBlank()) {
            logger.info { "Filtering by matching username $username" }
            whereParameters[usernameColumn] = username
        }
        if (!roleName.isNullOrBlank()) {
            logger.info { "Filtering by matching role name $roleName" }
            whereParameters[roleNameColumn] = roleName
        }
        if (whereParameters.isEmpty()) {
            logger.info { "Not filtering for user or role name" }
        }

        val roleTuples = HashSet<RoleTuple>()

        createSelectStatement(
            table = if (isAdmin) roleTuplesTable else roleTuplesView,
            whereParameters = whereParameters,
            limit = limit,
            offset = offset,
            connection = connection!!,
        ).use {
            val rs = it.executeQuery()
            while (rs.next()) {
                val roleTuple = RoleTuple(
                    username = sanitizeForHTML(rs.getString(usernameColumn)),
                    roleName = sanitizeForHTML(rs.getString(roleNameColumn)),
                    roleVersionNumber = rs.getInt(roleVersionNumberColumn),
                    encryptedAsymEncKeys = EncryptedAsymKeys(
                        public = sanitizeForHTML(rs.getString(encryptedAsymEncPublicKeyColumn)).decodeBase64(),
                        private = sanitizeForHTML(rs.getString(encryptedAsymEncPrivateKeyColumn)).decodeBase64(),
                        keyType = AsymKeysType.ENC,
                    ),
                    encryptedAsymSigKeys = EncryptedAsymKeys(
                        public = sanitizeForHTML(rs.getString(encryptedAsymSigPublicKeyColumn)).decodeBase64(),
                        private = sanitizeForHTML(rs.getString(encryptedAsymSigPrivateKeyColumn)).decodeBase64(),
                        keyType = AsymKeysType.SIG,
                    ),
                )
                roleTuple.updateSignature(
                    newSignature = sanitizeForHTML(rs.getString(signatureColumn)).decodeBase64(),
                    newSigner = ADMIN,
                )
                roleTuples.add(roleTuple)
            }
        }
        logger.debug { "Found ${roleTuples.size} role tuples" }
        return roleTuples
    }

    /**
     * Retrieve the permission tuples matching the [roleName] and/or
     * the [resourceName], starting from the [offset] limiting the number
     * of tuples to return to the given [limit] and with the (possibly)
     * relevant information of whether the user invoking this function
     * [isAdmin]. If no permission tuples are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    override fun getPermissionTuples(
        roleName: String?,
        resourceName: String?,
        isAdmin: Boolean,
        offset: Int,
        limit: Int,
    ): HashSet<PermissionTuple> {
        logger.info { "Getting data of permission tuples (offset $offset, limit $limit)" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!roleName.isNullOrBlank()) {
            logger.info { "Filtering by matching role name $roleName" }
            whereParameters[roleNameColumn] = roleName
        }
        if (!resourceName.isNullOrBlank()) {
            logger.info { "Filtering by matching resource name $resourceName" }
            whereParameters[resourceNameColumn] = resourceName
        }
        if (whereParameters.isEmpty()) {
            logger.info { "Not filtering for role or resource name" }
        }

        val permissionTuples = HashSet<PermissionTuple>()

        createSelectStatement(
            table = if (isAdmin) permissionTuplesTable else permissionTuplesView,
            whereParameters = whereParameters,
            limit = limit,
            offset = offset,
            connection = connection!!,
        ).use {
            val rs = it.executeQuery()
            while (rs.next()) {
                val permissionTuple = PermissionTuple(
                    roleName = sanitizeForHTML(rs.getString(roleNameColumn)),
                    resourceName = sanitizeForHTML(rs.getString(resourceNameColumn)),
                    roleToken = sanitizeForHTML(rs.getString(roleTokenColumn)),
                    resourceToken = sanitizeForHTML(rs.getString(resourceTokenColumn)),
                    roleVersionNumber = rs.getInt(roleVersionNumberColumn),
                    symKeyVersionNumber = rs.getInt(symKeyVersionNumberColumn),
                    permission = PermissionType.valueOf(sanitizeForHTML(rs.getString(permissionColumn))),
                    encryptingSymKey = EncryptedSymKey(
                        sanitizeForHTML(rs.getString(encryptingSymKeyColumn)).decodeBase64()
                    ),
                    decryptingSymKey = EncryptedSymKey(
                        sanitizeForHTML(rs.getString(decryptingSymKeyColumn)).decodeBase64()
                    )
                )
                permissionTuple.updateSignature(
                    newSignature = sanitizeForHTML(rs.getString(signatureColumn)).decodeBase64(),
                    newSigner = sanitizeForHTML(rs.getString(signerTokenColumn)),
                )
                permissionTuples.add(permissionTuple)
            }
        }
        logger.debug { "Found ${permissionTuples.size} permission tuples" }
        return permissionTuples
    }

    /**
     * Retrieve the public asymmetric key of the given
     * [asymKeyType] belonging to the element of the
     * specified [elementType] by matching the [name] or
     * the [token] (at least one required). Note that
     * only operational or deleted elements are considered,
     * and resources do not have public keys. If the key was
     * not found, return null. This method should support
     * invocations by non-admin users
     */
    override fun getPublicKey(
        name: String?,
        token: String?,
        elementType: RBACUnitElementTypeWithKeys,
        asymKeyType: AsymKeysType,
    ): ByteArray? {
        logger.info { "Getting public key of type $asymKeyType of a element of type $elementType" }

        // TODO support invocations by non-admin users

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!name.isNullOrBlank()) {
            logger.info { "Filtering by matching name $name" }
            whereParameters[if (elementType == RBACUnitElementTypeWithKeys.USER)
                usernameColumn
            else
                roleNameColumn
            ] = name
        }
        if (!token.isNullOrBlank()) {
            logger.info { "Filtering by matching token $token" }
            whereParameters[if (elementType == RBACUnitElementTypeWithKeys.USER)
                userTokenColumn
            else
                roleTokenColumn
            ] = token
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
         * Search the key in both the users/roles
         * table and the deleted users/roles table
         */
        createSelectStatement(
            table = if (elementType == RBACUnitElementTypeWithKeys.USER)
                usersTable
            else
                rolesTable,
            whereParameters = whereParameters,
            selectedColumns = selectedColumns,
            whereNotParameters = whereNotParameters,
            limit = 1,
            offset = 0,
            connection = connection!!,
        ).use { firstStatement ->
            createSelectStatement(
                table = if (elementType == RBACUnitElementTypeWithKeys.USER)
                    deletedUsersTable
                else
                    deletedRolesTable,
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

        logger.debug { "Public key was${ if (asymPublicKeyBytes == null) "not" else ""} found" }
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
        elementType: RBACUnitElementTypeWithVN,
    ): Int? {
        logger.info { "Getting version number of a $elementType" }

        // TODO support invocations by non-admin users

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!name.isNullOrBlank()) {
            logger.info { "Filtering by matching name $name" }
            whereParameters[if (elementType == RBACUnitElementTypeWithVN.ROLE)
                roleNameColumn
            else resourceNameColumn
            ] = name
        }
        if (!token.isNullOrBlank()) {
            logger.info { "Filtering by matching token $token" }
            whereParameters[if (elementType == RBACUnitElementTypeWithVN.ROLE)
                roleTokenColumn
            else resourceTokenColumn
            ] = token
        }
        if (whereParameters.isEmpty()) {
            val message = "A name or a token has to be specified"
            logger.error { message }
            throw IllegalArgumentException(message)
        }
        whereParameters[statusColumn] = UnitElementStatus.OPERATIONAL

        val selectedColumn = if (elementType == RBACUnitElementTypeWithVN.ROLE) {
            roleVersionNumberColumn
        } else {
            symEncKeyVersionNumberColumn
        }
        val selectedColumns = arrayListOf(selectedColumn)

        var versionNumber: Int? = null

        createSelectStatement(
            table = if (elementType == RBACUnitElementTypeWithVN.ROLE)
                rolesTable
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
     */
    override fun getToken(
        name: String, type:
        RBACUnitElementTypeWithStatus
    ): String? {
        logger.info { "Getting token of a $type" }

        // TODO support invocations by non-admin users
        val whereParameters = LinkedHashMap<String, Any?>()
        logger.info { "Filtering by matching name $name" }
        whereParameters[
                when (type) {
                    RBACUnitElementTypeWithStatus.USER -> usernameColumn
                    RBACUnitElementTypeWithStatus.ROLE -> roleNameColumn
                    RBACUnitElementTypeWithStatus.RESOURCE -> resourceNameColumn
                }
        ] = name

        val table1: String
        val table2: String

        val selectedColumn = when (type) {
            RBACUnitElementTypeWithStatus.USER -> { table1 = usersTable; table2 = deletedUsersTable; userTokenColumn }
            RBACUnitElementTypeWithStatus.ROLE -> { table1 = rolesTable; table2 = deletedRolesTable; roleTokenColumn }
            RBACUnitElementTypeWithStatus.RESOURCE -> { table1 = resourcesTable; table2 = deletedResourcesTable; resourceTokenColumn }
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
     */
    override fun getStatus(
        name: String?,
        token: String?,
        type: RBACUnitElementTypeWithStatus
    ): UnitElementStatus? {
        logger.debug { "Getting the status of a $type" }

        // TODO support invocations by non-admin users

        val table1: String
        val table2: String

        when (type) {
            RBACUnitElementTypeWithStatus.USER -> { table1 = usersTable; table2 = deletedUsersTable; }
            RBACUnitElementTypeWithStatus.ROLE -> { table1 = rolesTable; table2 = deletedRolesTable; }
            RBACUnitElementTypeWithStatus.RESOURCE -> { table1 = resourcesTable; table2 = deletedResourcesTable; }
        }
        val selectedColumns = arrayListOf(statusColumn)

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!name.isNullOrBlank()) {
            logger.info { "Filtering by matching name $name" }
            whereParameters[
                    when (type) {
                        RBACUnitElementTypeWithStatus.USER -> usernameColumn
                        RBACUnitElementTypeWithStatus.ROLE -> roleNameColumn
                        RBACUnitElementTypeWithStatus.RESOURCE -> resourceNameColumn
                    }
            ] = name
        }
        if (!token.isNullOrBlank()) {
            logger.info { "Filtering by matching token $token" }
            whereParameters[
                    when (type) {
                        RBACUnitElementTypeWithStatus.USER -> userTokenColumn
                        RBACUnitElementTypeWithStatus.ROLE -> roleTokenColumn
                        RBACUnitElementTypeWithStatus.RESOURCE -> resourceTokenColumn
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
     * Delete the [roleName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a role (e.g., the public key to verify digital
     * signatures). Finally, return the outcome code.
     * Check that the role exists and was not already
     * deleted. Check that [roleName] is not the admin
     *
     * In this implementation, move the [roleName] in the
     * deleted roles table
     */
    override fun deleteRole(roleName: String): OutcomeCode {
        logger.info { "Deleting role $roleName" }

        /** Guard Clauses */
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        logger.debug { "Moving the role from table $rolesTable to table $deletedRolesTable" }
        val whereParameters = linkedMapOf<String, Any?>(
            roleNameColumn to roleName
        )
        val selectedColumns = arrayListOf(
            roleNameColumn,
            roleTokenColumn,
            asymEncPublicKeyColumn,
            asymSigPublicKeyColumn,
            roleVersionNumberColumn,
            "'${UnitElementStatus.DELETED}'"
        )
        createSelectStatement(
            table = rolesTable,
            selectedColumns = selectedColumns,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use { selectStatement ->
            connection!!.prepareStatement(
                "INSERT INTO $deletedRolesTable (${selectStatement.asString()})"
            ).use {
                if (it.executeUpdate() != 1) {
                    logger.warn { "Role $roleName not found in the metadata" }
                    return when (getStatus(
                        name = roleName,
                        type = RBACUnitElementTypeWithStatus.ROLE
                    )) {
                        UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                        null -> CODE_005_ROLE_NOT_FOUND
                        else -> {
                            val message = "Role not found but role is in table"
                            logger.error { message }
                            throw IllegalArgumentException(message)
                        }
                    }
                }
            }
        }

        logger.debug { "Deleting the role from table $rolesTable" }
        createDeleteStatement(
            table = rolesTable,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            return if (it.executeUpdate() != 1) {
                logger.warn { "Role $roleName not found in the metadata" }
                CODE_005_ROLE_NOT_FOUND
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
    override fun deleteResource(resourceName: String): OutcomeCode {
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
                        type = RBACUnitElementTypeWithStatus.RESOURCE
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
     * Delete the role tuples matching the given
     * [roleName] and return the outcome code.
     * Check that [roleName] is not the admin.
     * Also check that at least one role tuple
     * is deleted, and if not check whether the
     * [roleName] exists and was not deleted
     */
    override fun deleteRoleTuples(roleName: String): OutcomeCode {
        logger.info { "Deleting role tuples for role name $roleName" }

        /** Guard Clauses */
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN role tuple" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        logger.info { "Filtering by matching role name $roleName" }
        val whereParameters = linkedMapOf<String, Any?>(
            roleNameColumn to roleName
        )

        logger.debug { "Deleting the role tuples from table $roleTuplesTable" }
        createDeleteStatement(
            table = roleTuplesTable,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            val affectedRows = it.executeUpdate()
            logger.debug { "$affectedRows role tuples were deleted" }
            return if (affectedRows <= 0) {
                logger.warn { "No role tuple was deleted" }
                /**
                 * Check whether the operation failed because there
                 * are no tuples or because the role is missing or
                 * was deleted
                 */
                when (getStatus(
                    name = roleName,
                    type = RBACUnitElementTypeWithStatus.ROLE
                )) {
                    UnitElementStatus.OPERATIONAL -> CODE_007_ROLETUPLE_NOT_FOUND
                    UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                    UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Delete the permission tuples matching the [roleName]
     * and/or the [resourceName] (at least one required). Finally,
     * return the outcome code. Check that [roleName] is not
     * the admin. Also check that at least one permission tuple
     * is deleted, and if not check whether the [roleName] and
     * the [resourceName] exist and were not deleted
     */
    override fun deletePermissionTuples(
        roleName: String?,
        resourceName: String?,
    ): OutcomeCode {
        logger.info { "Deleting permission tuples" }

        /** Guard Clauses */
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN permission tuple" }
            return CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!roleName.isNullOrBlank()) {
            logger.info { "Filtering by matching role name $roleName" }
            whereParameters[roleNameColumn] = roleName
        }
        if (!resourceName.isNullOrBlank()) {
            logger.info { "Filtering by matching resource name $resourceName" }
            whereParameters[resourceNameColumn] = resourceName
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

        logger.debug { "Deleting the permission tuple from table $permissionTuplesTable" }
        createDeleteStatement(
            table = permissionTuplesTable,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            val affectedRows = it.executeUpdate()
            logger.debug { "$affectedRows permission tuples were deleted" }
            return if (affectedRows <= 0) {
                logger.warn { "No permission tuple was deleted" }
                /**
                 * Check whether the operation failed because there
                 * are no tuples or because the role or the resource is
                 * missing or was deleted
                 */
                val roleExists = if (roleName != null) {
                    when (getStatus(
                        name = roleName,
                        type = RBACUnitElementTypeWithStatus.ROLE
                    )) {
                        UnitElementStatus.OPERATIONAL -> CODE_008_PERMISSIONTUPLE_NOT_FOUND
                        UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                        UnitElementStatus.INCOMPLETE, null -> CODE_005_ROLE_NOT_FOUND
                    }
                } else {
                    CODE_008_PERMISSIONTUPLE_NOT_FOUND
                }

                if (roleExists == CODE_008_PERMISSIONTUPLE_NOT_FOUND) {
                    if (resourceName != null) {
                        when (getStatus(
                            name = resourceName,
                            type = RBACUnitElementTypeWithStatus.RESOURCE
                        )) {
                            UnitElementStatus.OPERATIONAL -> CODE_008_PERMISSIONTUPLE_NOT_FOUND
                            UnitElementStatus.DELETED -> CODE_015_RESOURCE_WAS_DELETED
                            UnitElementStatus.INCOMPLETE, null -> CODE_006_RESOURCE_NOT_FOUND
                        }
                    } else {
                        CODE_008_PERMISSIONTUPLE_NOT_FOUND
                    }
                } else {
                    roleExists
                }
            } else {
                CODE_000_SUCCESS
            }
        }
    }

    /**
     * Update the token of [roleName] with the [newRoleToken],
     * the asymmetric encryption and signing public keys with
     * the new [newAsymEncPublicKey] and [newAsymSigPublicKey]
     * and increase by 1 the [oldRoleVersionNumber]. Check that
     * the role exists and was not deleted
     */
    override fun updateRoleTokenAndVersionNumberAndAsymKeys(
        roleName: String,
        oldRoleVersionNumber: Int,
        oldRoleToken: String,
        newRoleToken: String,
        newAsymEncPublicKey: PublicKey,
        newAsymSigPublicKey: PublicKey
    ): OutcomeCode {
        logger.info { "Updating the token and the public keys of role $roleName" }

        val whereParameters = linkedMapOf<String, Any?>(
            roleNameColumn to roleName
        )
        val values = linkedMapOf<String, Any>(
            roleTokenColumn to newRoleToken,
            asymEncPublicKeyColumn to newAsymEncPublicKey.encoded.encodeBase64(),
            asymSigPublicKeyColumn to newAsymSigPublicKey.encoded.encodeBase64(),
            roleVersionNumberColumn to (oldRoleVersionNumber + 1)
        )

        return createUpdateStatement(
            table = rolesTable,
            values = values,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "Role $roleName not found in the metadata" }
                when (getStatus(
                    name = roleName,
                    type = RBACUnitElementTypeWithStatus.ROLE
                )) {
                    UnitElementStatus.DELETED -> CODE_014_ROLE_WAS_DELETED
                    null -> CODE_005_ROLE_NOT_FOUND
                    else -> {
                        val message = "Role not found but role is in table"
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
     * Update the version numbers of the [updatedResource]
     * and return the outcome code. Check that the resource
     * exists
     */
    override fun updateResourceVersionNumber(updatedResource: Resource): OutcomeCode {
        val resourceName = updatedResource.name
        logger.info { "Updating the version numbers of $resourceName" }

        val whereParameters = linkedMapOf<String, Any?>(
            resourceNameColumn to resourceName
        )
        val values = linkedMapOf<String, Any>(
            symEncKeyVersionNumberColumn to updatedResource.symEncKeyVersionNumber,
            symDecKeyVersionNumberColumn to updatedResource.symDecKeyVersionNumber
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
                    type = RBACUnitElementTypeWithStatus.RESOURCE
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
     * Update the token of the [resourceName] with the
     * [newResourceToken] and the encryption version
     * number with the [newSymEncKeyVersionNumber].
     * Check that the resource exists
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
                    type = RBACUnitElementTypeWithStatus.RESOURCE
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
     * Update all fields (except role and resource name) of the
     * given [updatedPermissionTuple] and return the outcome code.
     * Check that the permission tuple exists
     */
    override fun updatePermissionTuple(updatedPermissionTuple: PermissionTuple): OutcomeCode {
        logger.info {
            "Updating the permission tuple of role ${updatedPermissionTuple.roleName} " +
                    "to resource ${updatedPermissionTuple.resourceName}"
        }

        val whereParameters = linkedMapOf<String, Any?>(
            roleNameColumn to updatedPermissionTuple.roleName,
            resourceNameColumn to updatedPermissionTuple.resourceName,
            symKeyVersionNumberColumn to updatedPermissionTuple.symKeyVersionNumber
        )
        val values = linkedMapOf<String, Any>(
            permissionColumn to updatedPermissionTuple.permission,
            signatureColumn to updatedPermissionTuple.signature!!.encodeBase64(),
            symKeyVersionNumberColumn to updatedPermissionTuple.symKeyVersionNumber,
            signerTokenColumn to updatedPermissionTuple.signer!!,
            roleTokenColumn to updatedPermissionTuple.roleToken,
            resourceTokenColumn to updatedPermissionTuple.resourceToken,
            encryptingSymKeyColumn to updatedPermissionTuple.encryptingSymKey!!.key.encodeBase64(),
            decryptingSymKeyColumn to updatedPermissionTuple.decryptingSymKey!!.key.encodeBase64(),
            symKeyVersionNumberColumn to updatedPermissionTuple.symKeyVersionNumber,
            roleVersionNumberColumn to updatedPermissionTuple.roleVersionNumber
        )

        createUpdateStatement(
            table = permissionTuplesTable,
            values = values,
            whereParameters = whereParameters,
            connection = connection!!,
        ).use {
            return if (it.executeUpdate() != 1) {
                logger.warn { "Permission tuple was not found" }
                CODE_008_PERMISSIONTUPLE_NOT_FOUND
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
                    logger.info { "Connection already established (new version with MySQL)" }
                    locks++
                    CODE_000_SUCCESS
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
                //connection!!.close()
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
     * Create and return an array list from the given [roleTuple]
     * to match the order of the columns of the role tuples table
     */
    private fun createArray(roleTuple: RoleTuple): ArrayList<Any?> {
        return arrayListOf(
            roleTuple.username,
            roleTuple.roleName,
            roleTuple.encryptedAsymEncKeys!!.public.encodeBase64(),
            roleTuple.encryptedAsymEncKeys.private.encodeBase64(),
            roleTuple.encryptedAsymSigKeys!!.public.encodeBase64(),
            roleTuple.encryptedAsymSigKeys.private.encodeBase64(),
            roleTuple.roleVersionNumber,
            roleTuple.signature!!.encodeBase64()
        )
    }

    /**
     * Create and return an array list from the given [permissionTuple]
     * to match the order of the columns of the permission tuples table
     */
    private fun createArray(permissionTuple: PermissionTuple): ArrayList<Any?> {
        return arrayListOf(
            permissionTuple.roleName,
            permissionTuple.resourceName,
            permissionTuple.roleToken,
            permissionTuple.resourceToken,
            permissionTuple.encryptingSymKey!!.key.encodeBase64(),
            permissionTuple.decryptingSymKey!!.key.encodeBase64(),
            permissionTuple.symKeyVersionNumber,
            permissionTuple.roleVersionNumber,
            permissionTuple.permission,
            permissionTuple.signer,
            permissionTuple.signature!!.encodeBase64()
        )
    }
}
