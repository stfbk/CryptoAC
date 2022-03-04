package eu.fbk.st.cryptoac.implementation.mm

import com.mysql.cj.jdbc.exceptions.CommunicationsException
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.EncryptedAsymKeys
import eu.fbk.st.cryptoac.crypto.EncryptedSymKey
import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.encodeBase64
import mu.KotlinLogging
import java.io.BufferedReader
import java.io.FileNotFoundException
import java.io.InputStreamReader
import java.sql.Types.NULL
import java.util.*
import org.owasp.encoder.Encode
import java.security.PublicKey
import java.sql.*
import kotlin.collections.ArrayList
import kotlin.collections.HashSet
import kotlin.collections.LinkedHashMap

private val logger = KotlinLogging.logger {}

/** The file containing SQL commands to initialize the database */
const val INIT_SQL_CODE = "/cryptoac/mysqldatabase.sql"

/** The name of the schema in the database */
const val databaseName = "cryptoac"

const val usersTable = "$databaseName.users"
const val deletedUsersTable = "$databaseName.deletedUsers"
const val usersView = "$databaseName.user_specific_users"
const val usersStatusView = "$databaseName.user_specific_users_status"
const val rolesTable = "$databaseName.roles"
const val deletedRolesTable = "$databaseName.deletedRoles"
const val deletedFilesTable = "$databaseName.deletedFiles"
const val filesTable = "$databaseName.files"
const val filesView = "$databaseName.user_specific_files"
const val roleTuplesTable = "$databaseName.roleTuples"
const val roleTuplesView = "$databaseName.user_specific_roleTuples"
const val permissionTuplesTable = "$databaseName.permissionTuples"
const val permissionTuplesView = "$databaseName.user_specific_permissionTuples"
const val fileTuplesTable = "$databaseName.fileTuples"
const val fileTuplesView = "$databaseName.user_specific_fileTuples"
const val userTokenColumn = "userToken"
const val roleTokenColumn = "roleToken"
const val fileTokenColumn = "fileToken"
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
const val encryptedSymKeyColumn = "encryptedSymKey"
const val signatureColumn = "signature"
const val permissionColumn = "permission"
const val signerTokenColumn = "signerToken"
const val usernameColumn = "username"
const val roleNameColumn = "roleName"
const val fileNameColumn = "fileName"
const val statusColumn = "status"
const val enforcementColumn = "enforcement"

// TODO use OPA to filter queries to MySQL database?

/**
 * Implementation of the methods to interface with the MM as a MySQL8+
 * database configured with the given [mmMySQLInterfaceParameters].
 * Note that the database is configured to avoid the disclosure of
 * the AC policy to users with tokens and views.
 * Note that the name of the user connecting to the database is the
 * same as the name in the AC policy.
 * Note that any value represented by a byte array is converted to
 * BASE64 before being stored
 */
class MMInterfaceMySQL(
    private val mmMySQLInterfaceParameters: MMInterfaceMySQLParameters
) : MMInterface() {

    /** The connection object to the database */
    var connection: Connection? = null

    /** Properties related to the connection object */
    private val connectionProperties: Properties = Properties()

    /** The jDBUrl of the database */
    private val jDBUrl: String = "jdbc:mysql://${mmMySQLInterfaceParameters.url}:${mmMySQLInterfaceParameters.port}"

    init {
        connectionProperties.setProperty("user", mmMySQLInterfaceParameters.username)
        connectionProperties.setProperty("password", mmMySQLInterfaceParameters.password)
        connectionProperties.setProperty("useSSL", "true")
    }

    /**
     * Initialize the admin by adding in the metadata the
     * [admin] as both user and role and the [adminRoleTuple]
     * and return the outcome code. Check that the name of
     * the admin is the expected one (in both the user object
     * and the role tuple) and that the admin was not already
     * initialized
     *
     * In this implementation, also initialize the database
     * with the commands contained in the [INIT_SQL_CODE]
     */
    override fun initAdmin(admin: User, adminRoleTuple: RoleTuple): OutcomeCode {
        logger.info { "Initializing the database and adding the admin in the MM" }

        /** Guard clauses */
        if (
            admin.name != ADMIN ||
            adminRoleTuple.username != ADMIN ||
            adminRoleTuple.roleName != ADMIN
        ) {
            logger.warn { "Admin user has name ${admin.name}, but admin name should be $ADMIN" }
            return OutcomeCode.CODE_036_ADMIN_NAME
        }
        try {
            if (getUsers(username = ADMIN).isNotEmpty()) {
                logger.warn { "Admin $ADMIN already initialized" }
                return OutcomeCode.CODE_035_ADMIN_ALREADY_INITIALIZED
            }
        }
        catch (e: SQLSyntaxErrorException) {
            if (e.message.isNullOrBlank() || !e.message!!.contains("Unknown database")) {
                throw e
            }
        }

        val sqlFile = MMInterfaceMySQL::class.java.getResourceAsStream(INIT_SQL_CODE)
        if (sqlFile == null) {
            val message = "Initialization SQL file $INIT_SQL_CODE not found"
            logger.error { message }
            throw FileNotFoundException(message)
        }


        /** Read the SQL commands and initialize the database */
        connection!!.createStatement().use { statement ->
            BufferedReader(InputStreamReader(sqlFile)).use { reader ->
                val builder = StringBuilder()
                val defaultDelimiter = ";"
                var delimiter = defaultDelimiter
                var isComment = false

                reader.forEachLine { line ->
                    builder.append(line)

                    /** A comment is starting */
                    if (line.startsWith("/*")) {
                        isComment = true
                    }
                    /** A comment is ending */
                    if (line.endsWith("*/")) {
                        isComment = false
                        builder.clear()
                    }

                    /** A new delimiter char is being set (probably for stored procedure) */
                    if (line.startsWith("DELIMITER")) {
                        delimiter = line.split(" ")[1]
                        builder.clear()
                    } else if (line.endsWith(delimiter) && !isComment) {
                        builder.replace(builder.length - delimiter.length, builder.length, defaultDelimiter)
                        val command = builder.toString().trimStart { it == ' ' }
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

        /** Add the admin as User in the metadata */
        logger.debug { "Adding the admin as User" }
        val asymEncPublicKeyEncoded = admin.asymEncKeys!!.public
        val asymSigPublicKeyEncoded = admin.asymSigKeys!!.public
        val adminUserValues = ArrayList<Any?>()
            .apply { add(ADMIN) }
            .apply { add(ADMIN) }
            .apply { add(asymEncPublicKeyEncoded) }
            .apply { add(asymSigPublicKeyEncoded) }
            .apply { add(ElementStatus.OPERATIONAL) }
        createInsertStatement(usersTable, ArrayList<ArrayList<Any?>>().apply { add(adminUserValues) }).use {
            if (it.executeUpdate() != 1) {
                val message = "Admin was not present but update failed"
                logger.error { message }
                throw IllegalArgumentException(message)
            }
        }

        /** Add the admin as Role in the metadata */
        logger.debug { "Adding the admin as Role" }
        val code = addRole(Role(
            name = ADMIN,
            status = ElementStatus.OPERATIONAL,
            versionNumber = 1,
            asymEncKeys = AsymKeys(public = asymEncPublicKeyEncoded, private = "", keysType = AsymKeysType.ENC),
            asymSigKeys = AsymKeys(public = asymSigPublicKeyEncoded, private = "", keysType = AsymKeysType.SIG),
        ))

        return if (code != OutcomeCode.CODE_000_SUCCESS) {
            code
        } else {
            /** Add the RoleTuple linking the admin User to the admin Role to the metadata */
            addRoleTuples(HashSet<RoleTuple>().apply { add(adminRoleTuple) })
        }
    }

    /**
     * Initialize the user by adding in the metadata the
     * public keys and token of the [user], updating also
     * the status flag, and return the outcome code. Check
     * that the user is not already present, was not already
     * initialized and was not already deleted
     */
    override fun initUser(user: User): OutcomeCode {
        val username = user.name
        logger.info { "Initializing user $username in the metadata" }

        /** Update the users' metadata */
        logger.debug { "Updating the user metadata" }
        val userValues = LinkedHashMap<String, Any?>()
            .apply { put(asymEncPublicKeyColumn, user.asymEncKeys!!.public) }
            .apply { put(asymSigPublicKeyColumn, user.asymSigKeys!!.public) }
            .apply { put(userTokenColumn, user.token) }
            .apply { put(statusColumn, ElementStatus.OPERATIONAL) }
        return createUpdateStatement(usersView, userValues).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "Error while initializing user $username" }

                /** Check the reason of the error */
                val status = createSelectStatement(table = usersStatusView).use { selectStatement ->
                    val rs = selectStatement.executeQuery()
                    if (rs.isBeforeFirst) {
                        rs.next()
                        ElementStatus.valueOf(rs.getString(statusColumn))
                    } else {
                        null
                    }
                }

                when (status) {
                    null -> {
                        logger.warn { "User ${user.name} does not exist in the metadata" }
                        OutcomeCode.CODE_004_USER_NOT_FOUND
                    }
                    ElementStatus.DELETED -> {
                        logger.warn { "User $username was previously deleted" }
                        OutcomeCode.CODE_013_USER_WAS_DELETED
                    }
                    ElementStatus.OPERATIONAL -> {
                        logger.warn { "User $username already initialized" }
                        OutcomeCode.CODE_052_USER_ALREADY_INITIALIZED
                    }
                    ElementStatus.INCOMPLETE -> {
                        val message = "Error in initializing user $username but status is incomplete"
                        logger.error { message }
                        throw java.lang.IllegalStateException(message)
                    }
                }
            } else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }



    /**
     * Add the [newUser] in the metadata. The user's
     * asymmetric encryption and signing public keys
     * and token will be set by the user him/herself
     * later on (initUser function). Finally, return
     * the user's configuration parameters together
     * with the outcome code. Check that the user was
     * not previously deleted or already exists
     *
     * In this implementation, also create an account in the database for the [newUser]
     */
    override fun addUser(newUser: User): WrapperMMParameters {
        val username = newUser.name
        logger.info { "Adding the user $username in the metadata and in the database" }

        if (getUsers(
                username = username,
                status = ElementStatus.DELETED
            ).isNotEmpty()) {
            logger.warn { "User $username was previously deleted" }
            return WrapperMMParameters(OutcomeCode.CODE_013_USER_WAS_DELETED)
        }

        /** TODO check password generation */
        val passwordBytes = ByteArray(20)
        Random().nextBytes(passwordBytes)
        val newPassword = passwordBytes.encodeBase64()

        /** Add the user in the metadata. Keys and Token will be set by the user */
        logger.debug { "Adding the user in the metadata" }
        val adminUserValues = ArrayList<Any?>()
            .apply { add(username) }.apply { add(username) }
            .apply { add("mock") }.apply { add("mock") }
            .apply { add(ElementStatus.INCOMPLETE) }
        createInsertStatement(usersTable, ArrayList<ArrayList<Any?>>().apply { add(adminUserValues) }).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "User $username already present in the metadata" }
                return WrapperMMParameters(OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
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
                        "$fileTokenColumn, " +
                        "$symEncKeyVersionNumberColumn, " +
                        "$statusColumn) ON $filesTable TO ?"
            ).use {
                logger.debug { "Granting permission on files table" }
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
                "GRANT SELECT ON $filesView TO ?"
            ).use {
                logger.debug { "Granting permission on files view" }
                it.setString(1, username)
                it.execute()
            }

            connection!!.prepareStatement(
                "GRANT SELECT ON $fileTuplesView TO ?"
            ).use {
                logger.debug { "Granting permission on file tuples view" }
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

            OutcomeCode.CODE_000_SUCCESS
        } catch (e: SQLException) {
            logger.warn { "Could not create user $username in MySQL" }
            OutcomeCode.CODE_054_CREATE_USER_MM
        }

        return WrapperMMParameters(
            code = code,
            parameters = MMInterfaceMySQLParameters(
                username = username, password = newPassword,
                port = mmMySQLInterfaceParameters.port, url = mmMySQLInterfaceParameters.url,
            )
        )
    }

    /**
     * Add the [newRole] in the metadata and
     * return the outcome code. Check that the
     * role does not already exist or was deleted
     */
    override fun addRole(newRole: Role): OutcomeCode {
        logger.info { "Adding the role ${newRole.name} in the metadata" }

        if (getRoles(roleName = newRole.name, status = ElementStatus.DELETED).isNotEmpty()) {
            logger.warn { "Role ${newRole.name} was previously deleted" }
            return OutcomeCode.CODE_014_ROLE_WAS_DELETED
        }

        /** Add the role in the metadata */
        logger.debug { "Adding the role in the metadata" }
        val roleValues = ArrayList<Any?>()
            .apply { add(newRole.name) }
            .apply { add(newRole.token) }
            .apply { add(newRole.asymEncKeys!!.public) }
            .apply { add(newRole.asymSigKeys!!.public) }
            .apply { add(newRole.versionNumber) }
            .apply { add(ElementStatus.OPERATIONAL) }
        return createInsertStatement(rolesTable, ArrayList<ArrayList<Any?>>().apply { add(roleValues) }).use {
            if (it.executeUpdate() == 1) {
                OutcomeCode.CODE_000_SUCCESS
            } else {
                logger.warn { "Role ${newRole.name} already present in the metadata" }
                OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS
            }
        }
    }

    /**
     * Add the [newFile] in the metadata and
     * return the outcome code. Check that the
     * file does not already exist or was deleted
     */
    override fun addFile(newFile: File): OutcomeCode {
        logger.info { "Adding the file ${newFile.name} in the metadata" }

        if (getFiles(fileName = newFile.name, status = ElementStatus.DELETED).isNotEmpty()) {
            logger.warn { "File ${newFile.name} was previously deleted" }
            return OutcomeCode.CODE_015_FILE_WAS_DELETED
        }

        /** Add the file in the metadata */
        logger.debug { "Adding the file in the metadata" }
        val fileValues = ArrayList<Any?>()
            .apply { add(newFile.name) }
            .apply { add(newFile.token) }
            .apply { add(newFile.symEncKeyVersionNumber) }
            .apply { add(ElementStatus.OPERATIONAL) }
            .apply { add(newFile.enforcement) }
        return createInsertStatement(filesTable, ArrayList<ArrayList<Any?>>().apply { add(fileValues) }).use {
            if (it.executeUpdate() == 1) {
                OutcomeCode.CODE_000_SUCCESS
            } else {
                logger.warn { "File ${newFile.name} already present in the metadata" }
                OutcomeCode.CODE_003_FILE_ALREADY_EXISTS
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
            return OutcomeCode.CODE_000_SUCCESS
        }
        logger.info { "Adding $size role tuples in the metadata (one per row below):" }
        newRoleTuples.forEachIndexed { index, roleTuple ->
            logger.info { "${index+1}: user ${roleTuple.username} to role ${roleTuple.roleName}" }
        }

        /** Create the list of values to insert in the metadata */
        logger.debug { "Adding the role tuples" }
        val roleTuples = ArrayList<ArrayList<Any?>>(size)
        newRoleTuples.forEach {
            roleTuples.add(createArray(it))
        }

        /** Add the role tuples in the metadata */
        return createInsertStatement(roleTuplesTable, roleTuples).use {
            val rowCount = it.executeUpdate()
            if (rowCount != size) {
                logger.warn { "One ore more RoleTuples were not added (expected $size, actual $rowCount)" }
                run loop@{
                    /**
                     * Check whether the operation failed because the
                     * tuple already exists or the user or role are missing
                     */
                    newRoleTuples.forEach { roleTuple ->
                        val codeUser = when (getStatus(roleTuple.username, ElementTypeWithStatus.USER)) {
                            ElementStatus.INCOMPLETE -> OutcomeCode.CODE_053_USER_IS_INCOMPLETE
                            ElementStatus.OPERATIONAL -> OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS
                            ElementStatus.DELETED -> OutcomeCode.CODE_013_USER_WAS_DELETED
                            null -> OutcomeCode.CODE_004_USER_NOT_FOUND
                        }
                        if (codeUser != OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS) {
                            return@loop codeUser
                        }

                        val codeRole = when (getStatus(roleTuple.roleName, ElementTypeWithStatus.ROLE)) {
                            ElementStatus.INCOMPLETE -> {
                                val message = "Role ${roleTuple.roleName} has incomplete status"
                                logger.error { message }
                                throw IllegalStateException(message)
                            }
                            ElementStatus.OPERATIONAL -> OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS
                            ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                            null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                        }
                        if (codeRole != OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS) {
                            return@loop codeRole
                        }
                    }
                    OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS
                }
            }
            else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }

    /**
     * Add the [newPermissionTuples] in the metadata
     * and return the outcome code. Check that involved
     * roles exist and were not deleted and that involved
     * files exist and were not deleted. Also check whether
     * a permission tuple already exists
     */
    override fun addPermissionTuples(newPermissionTuples: HashSet<PermissionTuple>): OutcomeCode {
        val size = newPermissionTuples.size
        if (size == 0) {
            logger.warn { "No permission tuples given" }
            return OutcomeCode.CODE_000_SUCCESS
        }
        logger.info { "Adding $size permission tuples in the metadata (one per row below):" }
        newPermissionTuples.forEachIndexed { index, permissionTuple ->
            logger.info { "$index: role ${permissionTuple.roleName} to file ${permissionTuple.fileName}" }
        }

        /** Create the list of values to insert in the metadata */
        logger.debug { "Adding the permission tuples" }
        val permissionTuples = ArrayList<ArrayList<Any?>>(size)
        newPermissionTuples.forEach {
            permissionTuples.add(createArray(it))
        }

        /** Add the role tuples in the metadata */
        return createInsertStatement(permissionTuplesTable, permissionTuples).use {
            val rowCount = it.executeUpdate()
            if (rowCount != size) {
                logger.warn { "One ore more permission tuples were not added (expected $size, actual $rowCount)" }
                run loop@{
                    /**
                     * Check whether the operation failed because the
                     * tuple already exists or the role or file are missing
                     */
                    newPermissionTuples.forEach { permissionTuple ->
                        val codeRole = when (getStatus(permissionTuple.roleName, ElementTypeWithStatus.ROLE)) {
                            ElementStatus.INCOMPLETE -> {
                                val message = "Role ${permissionTuple.roleName} has incomplete status"
                                logger.error { message }
                                throw IllegalStateException(message)
                            }
                            ElementStatus.OPERATIONAL -> OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
                            ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                            null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                        }

                        if (codeRole != OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS) {
                            return@loop codeRole
                        }


                        val codeFile = when (getStatus(permissionTuple.fileName, ElementTypeWithStatus.FILE)) {
                            ElementStatus.INCOMPLETE -> {
                                val message = "File ${permissionTuple.fileName} has incomplete status"
                                logger.error { message }
                                throw IllegalStateException(message)
                            }
                            ElementStatus.OPERATIONAL -> OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
                            ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                            null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                        }

                        if (codeFile != OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS) {
                            return@loop codeFile
                        }
                    }
                    OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS
                }
            }
            else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }

    /**
     * Add the [newFileTuples] in the metadata and
     * return the outcome code. Check that involved
     * files exist and were not deleted. Also check
     * whether a file tuple already exists
     */
    override fun addFileTuples(newFileTuples: HashSet<FileTuple>): OutcomeCode {
        val size = newFileTuples.size
        if (size == 0) {
            logger.warn { "No file tuple given" }
            return OutcomeCode.CODE_000_SUCCESS
        }
        logger.info { "Adding $size file tuples in the metadata (one per row below):" }
        newFileTuples.forEachIndexed { index, fileTuple ->
            logger.info { "$index: file ${fileTuple.fileName}" }
        }

        /** Create the list of values to insert in the metadata */
        logger.debug { "Adding the file tuples" }
        val fileTuples = ArrayList<ArrayList<Any?>>(size)
        newFileTuples.forEach {
            fileTuples.add(createArray(it))
        }

        /** Add the role tuples in the metadata */
        return createInsertStatement(fileTuplesTable, fileTuples).use {
            val rowCount = it.executeUpdate()
            if (rowCount != size) {
                logger.warn { "One ore more file tuples were not added (expected $size, actual $rowCount)" }
                run loop@{
                    /**
                     * Check whether the operation failed because the
                     * tuple already exists or the file is missing
                     */
                    newFileTuples.forEach { fileTuple ->

                        val codeFile = when (getStatus(fileTuple.fileName, ElementTypeWithStatus.FILE)) {
                            ElementStatus.INCOMPLETE -> {
                                val message = "File ${fileTuple.fileName} has incomplete status"
                                logger.error { message }
                                throw IllegalStateException(message)
                            }
                            ElementStatus.OPERATIONAL -> OutcomeCode.CODE_012_FILETUPLE_ALREADY_EXISTS
                            ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                            null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                        }

                        if (codeFile != OutcomeCode.CODE_012_FILETUPLE_ALREADY_EXISTS) {
                            return@loop codeFile
                        }
                    }
                    OutcomeCode.CODE_012_FILETUPLE_ALREADY_EXISTS
                }
            }
            else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }



    /**
     * Retrieve data of the users matching the specified
     * [username] and [status], if given, starting from
     * the [offset] limiting the number of users to return
     * to the given [limit]. If no users are found, return
     * an empty set
     */
    override fun getUsers(
        username: String?,
        status: ElementStatus?,
        offset: Int, limit: Int,
    ): HashSet<User> {
        logger.info { "Getting data of users (offset $offset, limit $limit)" }

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
            limit = limit, offset = offset,
        ).use { firstStatement ->
            createSelectStatement(
                table = deletedUsersTable,
                whereParameters = whereParameters,
                limit = limit, offset = offset,
            ).use { secondStatement ->
                val finalStatement = when (status) {
                    null -> {
                        "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                    }
                    ElementStatus.DELETED -> {
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
                            name = sanitizeStringFromHTLM(rs.getString(usernameColumn)),
                            status = status ?: ElementStatus.valueOf(sanitizeStringFromHTLM(rs.getString(statusColumn))),
                            isAdmin = sanitizeStringFromHTLM(rs.getString(usernameColumn)) == ADMIN
                        )
                        user.token = sanitizeStringFromHTLM(rs.getString(userTokenColumn))
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
     * to the given [limit]. If no roles are found, return
     * an empty set
     */
    override fun getRoles(
        roleName: String?,
        status: ElementStatus?,
        offset: Int, limit: Int,
    ): HashSet<Role> {
        logger.info { "Getting data of roles (offset $offset, limit $limit)" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!roleName.isNullOrBlank()) {
            logger.info { "Filtering by matching role name $roleName" }
            whereParameters[roleNameColumn] = roleName
        }
        if (status != null && status != ElementStatus.DELETED) {
            logger.info { "Filtering by matching status $status" }
            whereParameters[statusColumn] = status
        }

        val roles = HashSet<Role>()

        createSelectStatement(
            table = rolesTable,
            whereParameters = whereParameters,
            limit = limit, offset = offset,
        ).use { firstStatement ->
            createSelectStatement(
                table = deletedRolesTable,
                whereParameters = whereParameters,
                limit = limit, offset = offset,
            ).use { secondStatement ->
                val finalStatement = when (status) {
                    null -> {
                        "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                    }
                    ElementStatus.DELETED -> {
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
                            name = sanitizeStringFromHTLM(rs.getString(roleNameColumn)),
                            status = status ?: ElementStatus.valueOf(sanitizeStringFromHTLM(rs.getString(statusColumn))),
                            versionNumber = rs.getInt(roleVersionNumberColumn),
                        )
                        role.token = sanitizeStringFromHTLM(rs.getString(roleTokenColumn))
                        roles.add(role)
                    }
                }
            }
        }

        logger.debug { "Found ${roles.size} roles" }
        return roles
    }

    /**
     * Retrieve data of the files matching the specified
     * [fileName] and [status], if given, starting from
     * the [offset] limiting the number of files to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no files are found, return an empty set
     */
    override fun getFiles(
        fileName: String?,
        status: ElementStatus?,
        isAdmin: Boolean,
        offset: Int, limit: Int
    ): HashSet<File> {
        logger.info { "Getting data of files (offset $offset, limit $limit)" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!fileName.isNullOrBlank()) {
            logger.info { "Filtering by matching file name $fileName" }
            whereParameters[fileNameColumn] = fileName
        }
        if (status != null && status != ElementStatus.DELETED) {
            logger.info { "Filtering by matching status $status" }
            whereParameters[statusColumn] = status
        }

        val files = HashSet<File>()

        createSelectStatement(
            table = if (isAdmin) filesTable else filesView,
            whereParameters = whereParameters,
            limit = limit, offset = offset,
        ).use { firstStatement ->
            createSelectStatement(
                table = deletedFilesTable,
                whereParameters = whereParameters,
                limit = limit, offset = offset,
            ).use { secondStatement ->
                val finalStatement = if (!isAdmin) {
                    firstStatement.asString()
                } else {
                    when (status) {
                        null -> {
                            "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                        }
                        ElementStatus.DELETED -> {
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
                        val file = File(
                            name = sanitizeStringFromHTLM(rs.getString(fileNameColumn)),
                            symEncKeyVersionNumber = rs.getInt(symEncKeyVersionNumberColumn),
                            status = status ?: ElementStatus.valueOf(sanitizeStringFromHTLM(rs.getString(statusColumn))),
                            enforcement = EnforcementType.valueOf(sanitizeStringFromHTLM(rs.getString(
                                enforcementColumn))),
                        )
                        file.token = sanitizeStringFromHTLM(rs.getString(fileTokenColumn))
                        files.add(file)
                    }
                }
            }
        }

        logger.debug { "Found ${files.size} files" }
        return files
    }



    /**
     * Retrieve the role tuples matching the [username]
     * and/or the [roleName], starting from the [offset]
     * limiting the number of tuples to return to the
     * given [limit] and with the (possibly) relevant
     * information of whether the user invoking this
     * function [isAdmin]. If no role tuples are found,
     * return an empty set
     */
    override fun getRoleTuples(
        username: String?, roleName: String?,
        isAdmin: Boolean,
        offset: Int, limit: Int
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

        val roleTuples = HashSet<RoleTuple>()

        createSelectStatement(
            table = if (isAdmin) roleTuplesTable else roleTuplesView,
            whereParameters = whereParameters,
            limit = limit, offset = offset,
        ).use {
            val rs = it.executeQuery()
            while (rs.next()) {
                val roleTuple = RoleTuple(
                    username = sanitizeStringFromHTLM(rs.getString(usernameColumn)),
                    roleName = sanitizeStringFromHTLM(rs.getString(roleNameColumn)),
                    roleVersionNumber = rs.getInt(roleVersionNumberColumn),
                    encryptedAsymEncKeys = EncryptedAsymKeys(
                        public = sanitizeStringFromHTLM(rs.getString(encryptedAsymEncPublicKeyColumn)).decodeBase64(),
                        private = sanitizeStringFromHTLM(rs.getString(encryptedAsymEncPrivateKeyColumn)).decodeBase64(),
                        keysType = AsymKeysType.ENC,
                    ),
                    encryptedAsymSigKeys = EncryptedAsymKeys(
                        public = sanitizeStringFromHTLM(rs.getString(encryptedAsymSigPublicKeyColumn)).decodeBase64(),
                        private = sanitizeStringFromHTLM(rs.getString(encryptedAsymSigPrivateKeyColumn)).decodeBase64(),
                        keysType = AsymKeysType.SIG,
                    ),
                )
                roleTuple.updateSignature(
                    newSignature = sanitizeStringFromHTLM(rs.getString(signatureColumn)).decodeBase64(),
                    newSigner = ADMIN,
                    newSignerType = ElementTypeWithKey.USER,
                )
                roleTuples.add(roleTuple)
            }
        }
        logger.debug { "Found ${roleTuples.size} role tuples" }
        return roleTuples
    }

    /**
     * Retrieve the permission tuples matching the [roleName] and/or
     * the [fileName], further filtering by [roleToken], [fileToken],
     * [permission], [roleVersionNumber] and [symKeyVersionNumber] and
     * not matching the [roleNameToExclude], if given, starting from
     * the [offset] limiting the number of tuples to return to the given
     * [limit] and with the (possibly) relevant information of whether
     * the user invoking this function [isAdmin]. If no permission tuples
     * are found, return an empty set
     */
    override fun getPermissionTuples(
        roleName: String?, fileName: String?,
        roleToken: String?, fileToken: String?,
        permission: PermissionType?,
        roleNameToExclude: String?,
        roleVersionNumber: Int?, symKeyVersionNumber: Int?,
        isAdmin: Boolean,
        offset: Int, limit: Int,
    ): HashSet<PermissionTuple> {
        logger.info { "Getting data of permission tuples (offset $offset, limit $limit)" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!roleName.isNullOrBlank()) {
            logger.info { "Filtering by matching role name $roleName" }
            whereParameters[roleNameColumn] = roleName
        }
        if (!fileName.isNullOrBlank()) {
            logger.info { "Filtering by matching file name $fileName" }
            whereParameters[fileNameColumn] = fileName
        }


        if (!roleToken.isNullOrBlank()) {
            logger.info { "Filtering by matching role token $roleToken" }
            whereParameters[roleTokenColumn] = roleToken
        }
        if (!fileToken.isNullOrBlank()) {
            logger.info { "Filtering by matching file token $fileToken" }
            whereParameters[fileTokenColumn] = fileToken
        }
        if (permission != null) {
            logger.info { "Filtering by matching permission $permission" }
            whereParameters[permissionColumn] = permission
        }
        if (roleVersionNumber != null) {
            logger.info { "Filtering by matching role version number $roleVersionNumber" }
            whereParameters[roleVersionNumberColumn] = roleVersionNumber
        }
        if (symKeyVersionNumber != null) {
            logger.info { "Filtering by matching symmetric key version number $symKeyVersionNumber" }
            whereParameters[symKeyVersionNumberColumn] = symKeyVersionNumber
        }

        val whereNotParameters = LinkedHashMap<String, Any?>()
        if (!roleNameToExclude.isNullOrBlank()) {
            logger.info { "Filtering by not matching role name $roleNameToExclude" }
            whereNotParameters[roleNameColumn] = roleNameToExclude
        }

        val permissionTuples = HashSet<PermissionTuple>()

        createSelectStatement(
            table = if (isAdmin) permissionTuplesTable else permissionTuplesView,
            whereParameters = whereParameters, whereNotParameters = whereNotParameters,
            limit = limit, offset = offset,
        ).use {
            val rs = it.executeQuery()
            while (rs.next()) {
                val permissionTuple = PermissionTuple(
                    roleName = sanitizeStringFromHTLM(rs.getString(roleNameColumn)),
                    fileName = sanitizeStringFromHTLM(rs.getString(fileNameColumn)),
                    roleToken = sanitizeStringFromHTLM(rs.getString(roleTokenColumn)),
                    fileToken = sanitizeStringFromHTLM(rs.getString(fileTokenColumn)),
                    roleVersionNumber = rs.getInt(roleVersionNumberColumn),
                    symKeyVersionNumber = rs.getInt(symKeyVersionNumberColumn),
                    permission = PermissionType.valueOf(sanitizeStringFromHTLM(rs.getString(permissionColumn))),
                    encryptedSymKey = EncryptedSymKey(
                        sanitizeStringFromHTLM(rs.getString(encryptedSymKeyColumn)).decodeBase64()
                    )
                )
                permissionTuple.updateSignature(
                    newSignature = sanitizeStringFromHTLM(rs.getString(signatureColumn)).decodeBase64(),
                    newSigner = sanitizeStringFromHTLM(rs.getString(signerTokenColumn)),
                    newSignerType = ElementTypeWithKey.USER,
                )
                permissionTuples.add(permissionTuple)
            }
        }
        logger.debug { "Found ${permissionTuples.size} permission tuples" }
        return permissionTuples
    }

    /**
     * Retrieve the file tuples matching the [fileName] starting
     * from the [offset] limiting the number of tuples to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no file tuples are found, return an empty set
     */
    override fun getFileTuples(
        fileName: String,
        isAdmin: Boolean,
        offset: Int, limit: Int,
    ): HashSet<FileTuple>  {
        logger.info { "Getting data of file tuples (offset $offset, limit $limit)" }

        val whereParameters = LinkedHashMap<String, Any?>()
        logger.info { "Filtering by matching file name $fileName" }
        whereParameters[fileNameColumn] = fileName

        val fileTuples = HashSet<FileTuple>()

        createSelectStatement(
            table = if (isAdmin) fileTuplesTable else fileTuplesView,
            whereParameters = whereParameters,
            limit = limit, offset = offset,
        ).use {
            val rs = it.executeQuery()
            while (rs.next()) {
                val fileTuple = FileTuple(
                    fileName = sanitizeStringFromHTLM(rs.getString(fileNameColumn)),
                    fileToken = sanitizeStringFromHTLM(rs.getString(fileTokenColumn)),
                    roleToken = sanitizeStringFromHTLM(rs.getString(roleTokenColumn)),
                    symDecKeyVersionNumber = rs.getInt(symDecKeyVersionNumberColumn),
                    enforcement = EnforcementType.valueOf(sanitizeStringFromHTLM(rs.getString(enforcementColumn))),
                )
                fileTuple.updateSignature(
                    newSignature = sanitizeStringFromHTLM(rs.getString(signatureColumn)).decodeBase64(),
                    newSigner = sanitizeStringFromHTLM(rs.getString(signerTokenColumn)),
                    newSignerType = ElementTypeWithKey.USER,
                )
                fileTuples.add(fileTuple)
            }
        }
        logger.debug { "Found ${fileTuples.size} file tuples" }
        return fileTuples
    }

    /**
     * Retrieve the public asymmetric key of the given
     * [asymKeyType] belonging to the element of the
     * specified [elementType] by matching the [name] or
     * the [token] (at least one required). Note that
     * only operational or deleted elements are considered,
     * and files do not have public keys. If the key was
     * not found, return null
     */
    override fun getPublicKey(
        name: String?,
        token: String?,
        elementType: ElementTypeWithKey,
        asymKeyType: AsymKeysType,
    ): ByteArray? {
        logger.info { "Getting public key of type $asymKeyType of a element of type $elementType" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!name.isNullOrBlank()) {
            logger.info { "Filtering by matching name $name" }
            whereParameters[if (elementType == ElementTypeWithKey.USER) usernameColumn else roleNameColumn] = name
        }
        if (!token.isNullOrBlank()) {
            logger.info { "Filtering by matching token $token" }
            whereParameters[if (elementType == ElementTypeWithKey.USER) userTokenColumn else roleTokenColumn] = token
        }
        if (whereParameters.isEmpty()) {
            val message = "A name or a token has to be specified"
            logger.error { message }
            throw IllegalArgumentException(message)
        }

        val whereNotParameters = LinkedHashMap<String, Any?>()
        whereNotParameters[statusColumn] = ElementStatus.INCOMPLETE

        val selectedColumns = ArrayList<String>()
            .apply { add(
                if (asymKeyType == AsymKeysType.ENC)
                    asymEncPublicKeyColumn
                else
                    asymSigPublicKeyColumn
            ) }

        var asymPublicKeyBytes: ByteArray? = null

        /**
         * Search the key in both the users/roles
         * table and the deleted users/roles table
         */
        createSelectStatement(
            table = if (elementType == ElementTypeWithKey.USER) usersTable else rolesTable,
            whereParameters = whereParameters, selectedColumns = selectedColumns,
            whereNotParameters = whereNotParameters,
            limit = 1, offset = 0,
        ).use { firstStatement ->
            createSelectStatement(
                table = if (elementType == ElementTypeWithKey.USER) deletedUsersTable else deletedRolesTable,
                whereParameters = whereParameters, selectedColumns = selectedColumns,
                limit = 1, offset = 0,
            ).use { secondStatement ->
                val finalStatement = "(${firstStatement.asString()}) UNION (${secondStatement.asString()})"
                connection!!.prepareStatement(finalStatement).use {
                    val rs = it.executeQuery()
                    if (rs.next()) {
                        asymPublicKeyBytes = sanitizeStringFromHTLM(rs.getString(
                            if (asymKeyType == AsymKeysType.ENC) asymEncPublicKeyColumn else asymSigPublicKeyColumn)
                        ).decodeBase64()
                    }
                }
            }
        }


        logger.debug { "Public key was ${ if (asymPublicKeyBytes == null) "not " else ""}found"  }
        return asymPublicKeyBytes
    }

    /**
     * Retrieve the version number belonging to the element
     * of the specified [elementType] by matching the [name]
     * or [token] (at least one required). Note that only
     * operational elements are considered, and users do not
     * have version numbers. Note also that only the latest
     * version number of files (i.e., the one used for encryption
     * are considered). If the version number was not found,
     * return null
     */
    override fun getVersionNumber(
        name: String?, token: String?, elementType: ElementTypeWithVersionNumber,
    ): Int? {
        logger.info { "Getting version number of a $elementType" }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!name.isNullOrBlank()) {
            logger.info { "Filtering by matching name $name" }
            whereParameters[if (elementType == ElementTypeWithVersionNumber.ROLE) roleNameColumn else fileNameColumn] = name
        }
        if (!token.isNullOrBlank()) {
            logger.info { "Filtering by matching token $token" }
            whereParameters[if (elementType == ElementTypeWithVersionNumber.ROLE) roleTokenColumn else fileTokenColumn] = token
        }
        if (whereParameters.isEmpty()) {
            val message = "A name or a token has to be specified"
            logger.error { message }
            throw IllegalArgumentException(message)
        }
        whereParameters[statusColumn] = ElementStatus.OPERATIONAL

        val selectedColumn = if (elementType == ElementTypeWithVersionNumber.ROLE) roleVersionNumberColumn else symEncKeyVersionNumberColumn
        val selectedColumns = ArrayList<String>().apply { add(selectedColumn) }

        var versionNumber: Int? = null

        createSelectStatement(
            table = if (elementType == ElementTypeWithVersionNumber.ROLE) rolesTable else filesTable,
            whereParameters = whereParameters, selectedColumns = selectedColumns,
            limit = 1, offset = 0,
        ).use {
            val rs = it.executeQuery()
            if (rs.next()) {
                versionNumber = rs.getInt(selectedColumn)
            }
        }
        logger.debug { "Version number was ${ if (versionNumber == null) "not " else ""} found"  }
        return versionNumber
    }

    /**
     * Retrieve the token of the element of
     * the given [type] matching the [name].
     * Note that only operational elements are
     * considered. If the token was not found,
     * return null
     */
    override fun getToken(name: String, type: ElementTypeWithStatus): String? {
        logger.info { "Getting token of a $type" }

        /** Guard clauses */
        if (name.isBlank()) {
            val message = "Name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val whereParameters = LinkedHashMap<String, Any?>()
        logger.info { "Filtering by matching name $name" }
        whereParameters[
            when (type) {
                ElementTypeWithStatus.USER -> usernameColumn
                ElementTypeWithStatus.ROLE -> roleNameColumn
                ElementTypeWithStatus.FILE -> fileNameColumn
            }
        ] = name
        whereParameters[statusColumn] = ElementStatus.OPERATIONAL

        val selectedColumn = when (type) {
            ElementTypeWithStatus.USER -> userTokenColumn
            ElementTypeWithStatus.ROLE -> roleTokenColumn
            ElementTypeWithStatus.FILE -> fileTokenColumn
            }
        val selectedColumns = ArrayList<String>().apply { add(selectedColumn) }

        var token: String? = null

        createSelectStatement(
            table = when (type) {
                ElementTypeWithStatus.USER -> usersTable
                ElementTypeWithStatus.ROLE -> rolesTable
                ElementTypeWithStatus.FILE -> filesTable
            },
            whereParameters = whereParameters, selectedColumns = selectedColumns,
            limit = 1, offset = 0,
        ).use {
            val rs = it.executeQuery()
            if (rs.next()) {
                token = rs.getString(selectedColumn)
            }
        }
        logger.debug { "Token was ${ if (token == null) "not " else ""} found"  }
        return token
    }

    /**
     * Retrieve the status of the element of the
     * given [type] matching the given [name].
     * If the status was not found, return null
     */
    override fun getStatus(name: String, type: ElementTypeWithStatus): ElementStatus? {
        logger.debug { "Getting the status of element $type with name $name" }

        /** Guard clauses */
        if (name.isBlank()) {
            val message = "Name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val table1: String
        val table2: String

        val column = when (type) {
            ElementTypeWithStatus.USER -> { table1 = usersTable; table2 = deletedUsersTable; usernameColumn }
            ElementTypeWithStatus.ROLE -> { table1 = rolesTable; table2 = deletedRolesTable; roleNameColumn }
            ElementTypeWithStatus.FILE -> { table1 = filesTable; table2 = deletedFilesTable; fileNameColumn }
        }

        val whereParameters = LinkedHashMap<String, Any?>().apply { put(column, name) }
        val selectedColumns = ArrayList<String>().apply { statusColumn }
        createSelectStatement(
            table = table1,
            whereParameters = whereParameters,
            selectedColumns = selectedColumns
        ).use { firstStatement ->
            createSelectStatement(
                table = table2,
                whereParameters = whereParameters,
                selectedColumns = selectedColumns
            ).use { secondStatement ->
                connection!!.prepareStatement("(${firstStatement.asString()}) UNION (${secondStatement.asString()})").use {
                    val rs = it.executeQuery()
                    return if (rs.isBeforeFirst) {
                        rs.next()
                        ElementStatus.valueOf(rs.getString(statusColumn))
                    } else {
                        null
                    }
                }
            }
        }
    }



    /**
     * Delete the [username] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a user (e.g., the public key to verify digital
     * signatures). Finally, return the outcome code.
     * Check that the user exists and was not already
     * deleted. Check that [username] is not the admin
     *
     * In this implementation, move the [username] in the
     * deleted users' table abd delete the user at database
     * level
     */
    override fun deleteUser(username: String): OutcomeCode {
        logger.info { "Deleting user $username" }

        /** Guard Clauses */
        if (username == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN user" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        logger.debug { "Moving the user from table $usersTable to table $deletedUsersTable" }
        val whereParameters = LinkedHashMap<String, Any?>().apply { put(usernameColumn, username) }
        val selectedColumns = ArrayList<String>()
            .apply { add(usernameColumn) }
            .apply { add(userTokenColumn) }
            .apply { add(asymEncPublicKeyColumn) }
            .apply { add(asymSigPublicKeyColumn) }
            .apply { add("'${ElementStatus.DELETED}'") }
        createSelectStatement(
            table = usersTable,
            selectedColumns = selectedColumns,
            whereParameters = whereParameters,
        ).use { selectStatement ->
            connection!!.prepareStatement("INSERT INTO $deletedUsersTable (${selectStatement.asString()})").use {
                if (it.executeUpdate() != 1) {
                    logger.warn { "User $username not found in the metadata" }
                    return when (getStatus(username, ElementTypeWithStatus.USER)) {
                        ElementStatus.DELETED -> OutcomeCode.CODE_013_USER_WAS_DELETED
                        null -> OutcomeCode.CODE_004_USER_NOT_FOUND
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
            whereParameters = whereParameters
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "User $username not found in the metadata" }
                return OutcomeCode.CODE_004_USER_NOT_FOUND
            }
        }

        connection!!.prepareStatement("DROP USER ?").use {
            logger.debug { "Deleting the user from the database" }
            it.setString(1, username)
            return try {
                it.execute()
                OutcomeCode.CODE_000_SUCCESS
            } catch (e: SQLException) {
                if (e.message?.contains("Operation DROP USER failed") == true) {
                    logger.warn { "Error while deleting user $username from the database " }
                    OutcomeCode.CODE_056_DELETE_USER_MM
                } else {
                    throw e
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
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        logger.debug { "Moving the role from table $rolesTable to table $deletedRolesTable" }
        val whereParameters = LinkedHashMap<String, Any?>().apply { put(roleNameColumn, roleName) }
        val selectedColumns = ArrayList<String>()
            .apply { add(roleNameColumn) }
            .apply { add(roleTokenColumn) }
            .apply { add(asymEncPublicKeyColumn) }
            .apply { add(asymSigPublicKeyColumn) }
            .apply { add(roleVersionNumberColumn) }
            .apply { add("'${ElementStatus.DELETED}'") }
        createSelectStatement(
            table = rolesTable,
            selectedColumns = selectedColumns,
            whereParameters = whereParameters,
        ).use { selectStatement ->
            connection!!.prepareStatement("INSERT INTO $deletedRolesTable (${selectStatement.asString()})").use {
                if (it.executeUpdate() != 1) {
                    logger.warn { "Role $roleName not found in the metadata" }
                    return when (getStatus(roleName, ElementTypeWithStatus.ROLE)) {
                        ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                        null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
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
            whereParameters = whereParameters
        ).use {
            return if (it.executeUpdate() != 1) {
                logger.warn { "Role $roleName not found in the metadata" }
                OutcomeCode.CODE_005_ROLE_NOT_FOUND
            } else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }

    /**
     * Delete the [fileName] by moving the data into a
     * proper data structure holding deleted elements.
     * Indeed, even if deleted, we may need the data of
     * a file. Finally, return the outcome code.
     * Check that the file exists and was not already
     * deleted
     *
     * In this implementation, move the [fileName] in the
     * deleted files table
     */
    override fun deleteFile(fileName: String): OutcomeCode {
        logger.info { "Deleting file $fileName" }

        logger.debug { "Moving the file from table $filesTable to table $deletedFilesTable" }
        val whereParameters = LinkedHashMap<String, Any?>().apply { put(fileNameColumn, fileName) }
        val selectedColumns = ArrayList<String>()
            .apply { add(fileNameColumn) }
            .apply { add(fileTokenColumn) }
            .apply { add(symEncKeyVersionNumberColumn) }
            .apply { add("'${ElementStatus.DELETED}'") }
            .apply { add(enforcementColumn) }
        createSelectStatement(
            table = filesTable,
            selectedColumns = selectedColumns,
            whereParameters = whereParameters,
        ).use { selectStatement ->
            connection!!.prepareStatement("INSERT INTO $deletedFilesTable (${selectStatement.asString()})").use {
                if (it.executeUpdate() != 1) {
                    logger.warn { "File $fileName not found in the metadata" }
                    return when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
                        ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                        null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                        else -> {
                            val message = "File not found but file is in table"
                            logger.error { message }
                            throw IllegalArgumentException(message)
                        }
                    }
                }
            }
        }

        logger.debug { "Deleting the file from table $filesTable" }
        createDeleteStatement(
            table = filesTable,
            whereParameters = whereParameters
        ).use {
            return if (it.executeUpdate() != 1) {
                logger.warn { "File $fileName not found in the metadata" }
                OutcomeCode.CODE_006_FILE_NOT_FOUND
            } else {
                OutcomeCode.CODE_000_SUCCESS
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
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }


        logger.info { "Filtering by matching role name $roleName" }
        val whereParameters = LinkedHashMap<String, Any?>().apply { put(roleNameColumn, roleName) }

        logger.debug { "Deleting the role tuples from table $roleTuplesTable" }
        createDeleteStatement(
            table = roleTuplesTable,
            whereParameters = whereParameters
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
                when (getStatus(roleName, ElementTypeWithStatus.ROLE)) {
                    ElementStatus.INCOMPLETE -> {
                        val message = "Role $roleName has incomplete status"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    ElementStatus.OPERATIONAL -> OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND
                    ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                    null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                }
            } else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }

    /**
     * Delete the permission tuples matching the [roleName]
     * and/or the [fileName] (at least one required), further
     * filtering by [roleVersionNumber], if given. Finally,
     * return the outcome code. Check that [roleName] is not
     * the admin. Also check that at least one permission tuple
     * is deleted, and if not check whether the [roleName] and
     * the [fileName] exist and were not deleted
     */
     override fun deletePermissionTuples(
        roleName: String?,
        fileName: String?,
        roleVersionNumber: Int?
    ): OutcomeCode {
        logger.info { "Deleting permission tuples" }

        /** Guard Clauses */
        if (roleName == ADMIN) {
            logger.warn { "Cannot delete the $ADMIN permission tuple" }
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }

        val whereParameters = LinkedHashMap<String, Any?>()
        if (!roleName.isNullOrBlank()) {
            logger.info { "Filtering by matching role name $roleName" }
            whereParameters[roleNameColumn] = roleName
        }
        if (roleVersionNumber != null) {
            logger.info { "Filtering by matching role version number $roleVersionNumber" }
            whereParameters[roleVersionNumberColumn] = roleVersionNumber
        }
        if (!fileName.isNullOrBlank()) {
            logger.info { "Filtering by matching file name $fileName" }
            whereParameters[fileNameColumn] = fileName
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
            whereParameters = whereParameters
        ).use {
            val affectedRows = it.executeUpdate()
            logger.debug { "$affectedRows permission tuples were deleted" }
            return if (affectedRows <= 0) {
                logger.warn { "No permission tuple was deleted" }
                /**
                 * Check whether the operation failed because there
                 * are no tuples or because the role or the file is
                 * missing or was deleted
                 */
                val roleExists = if (roleName != null) {
                    when (getStatus(roleName, ElementTypeWithStatus.ROLE)) {
                        ElementStatus.INCOMPLETE -> {
                            val message = "Role $roleName has incomplete status"
                            logger.error { message }
                            throw IllegalStateException(message)
                        }
                        ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                        ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                        null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                    }
                } else {
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                }

                if (roleExists == OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND) {
                    if (fileName != null) {
                        when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
                            ElementStatus.INCOMPLETE -> {
                                val message = "File $fileName has incomplete status"
                                logger.error { message }
                                throw IllegalStateException(message)
                            }
                            ElementStatus.OPERATIONAL -> OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                            ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                            null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                        }
                    } else {
                        OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                    }
                } else {
                    OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
                }
            } else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }

    /**
     * Delete the file tuples matching the given
     * [fileName] and return the outcome code.
     * Check that at least one file tuple is
     * deleted, and if not check whether the
     * [fileName] exists and was not deleted
     */
    override fun deleteFileTuples(fileName: String): OutcomeCode {
        logger.info { "Deleting file tuples for file name $fileName" }

        logger.info { "Filtering by matching file name $fileName" }
        val whereParameters = LinkedHashMap<String, Any?>().apply { put(fileNameColumn, fileName) }

        logger.debug { "Deleting the file tuples from table $fileTuplesTable" }
        createDeleteStatement(
            table = fileTuplesTable,
            whereParameters = whereParameters
        ).use {
            val affectedRows = it.executeUpdate()
            logger.debug { "$affectedRows file tuples were deleted" }
            return if (affectedRows <= 0) {
                logger.warn { "No file tuple was deleted" }
                /**
                 * Check whether the operation failed because there
                 * are no tuples or because the file is missing or
                 * was deleted
                 */
                when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
                    ElementStatus.INCOMPLETE -> {
                        val message = "File $fileName has incomplete status"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    ElementStatus.OPERATIONAL -> OutcomeCode.CODE_009_FILETUPLE_NOT_FOUND
                    ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                    null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                }
            } else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }


    /**
     * Increment the symmetric encryption version number
     * of the [fileName] by 1 and return the outcome code.
     * Check that the file exists and was not deleted
     */
    override fun incrementSymEncVersionNumberByOne(fileName: String): OutcomeCode {
        logger.info { "Incrementing the symmetric encryption version number of file $fileName by 1" }

        /** Guard clauses */
        if (fileName.isBlank()) {
            val message = "Name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val whereParameters = LinkedHashMap<String, Any?>().apply { put(fileNameColumn, fileName) }
        val values = LinkedHashMap<String, Any?>()
            .apply { put("$symEncKeyVersionNumberColumn=$symEncKeyVersionNumberColumn+1", null) }

        return createUpdateStatement(
            table = filesTable,
            values = values,
            whereParameters = whereParameters,
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "File $fileName not found in the metadata" }
                return when (getStatus(fileName, ElementTypeWithStatus.FILE)) {
                    ElementStatus.DELETED -> OutcomeCode.CODE_015_FILE_WAS_DELETED
                    null -> OutcomeCode.CODE_006_FILE_NOT_FOUND
                    else -> {
                        val message = "File not found but file is in table"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            } else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }



    /**
     * Update the asymmetric encryption and signing public keys
     * of the given [roleName] with the new [newAsymEncPublicKey]
     * and [newAsymSigPublicKey], and return the outcome code.
     * Check that the role exists and was not deleted
     */
    override fun updateRoleAsymKeys(
        roleName: String,
        newAsymEncPublicKey: PublicKey, newAsymSigPublicKey: PublicKey
    ): OutcomeCode {
        logger.info { "Updating the asymmetric encryption and signing public keys of $roleName" }

        /** Guard clauses */
        if (roleName.isBlank()) {
            val message = "Name given blank for query"
            logger.error { message }
            throw IllegalStateException(message)
        }

        val whereParameters = LinkedHashMap<String, Any?>().apply { put(roleNameColumn, roleName) }
        val values = LinkedHashMap<String, Any?>()
            .apply { put(asymEncPublicKeyColumn, newAsymEncPublicKey.encoded.encodeBase64()) }
            .apply { put(asymSigPublicKeyColumn, newAsymSigPublicKey.encoded.encodeBase64()) }
            .apply { put("$roleVersionNumberColumn=$roleVersionNumberColumn+1", null) }

        return createUpdateStatement(
            table = rolesTable,
            values = values,
            whereParameters = whereParameters,
        ).use {
            if (it.executeUpdate() != 1) {
                logger.warn { "Role $roleName not found in the metadata" }
                when (getStatus(roleName, ElementTypeWithStatus.ROLE)) {
                    ElementStatus.DELETED -> OutcomeCode.CODE_014_ROLE_WAS_DELETED
                    null -> OutcomeCode.CODE_005_ROLE_NOT_FOUND
                    else -> {
                        val message = "Role not found but role is in table"
                        logger.error { message }
                        throw IllegalArgumentException(message)
                    }
                }
            } else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }



    /**
     * Update the permission, signature and signer token of the
     * given [updatedPermissionTuple] and return the outcome code.
     * Check that the permission tuple exists
     */
    override fun updatePermissionTuple(updatedPermissionTuple: PermissionTuple): OutcomeCode {
        logger.info {
            "Updating the permission tuple of role ${updatedPermissionTuple.roleName} " +
                    "to file ${updatedPermissionTuple.fileName}"
        }

        val whereParameters = LinkedHashMap<String, Any?>()
            .apply { put(roleNameColumn, updatedPermissionTuple.roleName) }
            .apply { put(fileNameColumn, updatedPermissionTuple.fileName) }
            .apply { put(symKeyVersionNumberColumn, updatedPermissionTuple.symKeyVersionNumber) }

        val values = LinkedHashMap<String, Any?>()
            .apply { put(permissionColumn, updatedPermissionTuple.permission) }
            .apply { put(signatureColumn, updatedPermissionTuple.signature!!.encodeBase64()) }
            .apply { put(symKeyVersionNumberColumn, updatedPermissionTuple.symKeyVersionNumber) }
            .apply { put(signerTokenColumn, updatedPermissionTuple.signer) }

        createUpdateStatement(
            table = permissionTuplesTable,
            values = values,
            whereParameters = whereParameters,
        ).use {
            return if (it.executeUpdate() != 1) {
                logger.warn { "Permission tuple was not found" }
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND
            } else {
                OutcomeCode.CODE_000_SUCCESS
            }
        }
    }



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
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
                    OutcomeCode.CODE_000_SUCCESS
                } else {
                    /** A lock has been set but not released */
                    logger.warn { "A lock has been set but not released" }
                    connection!!.rollback()
                    connection!!.close()
                    locks = 0
                    OutcomeCode.CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
                }
            } catch(e: CommunicationsException) {
                if ((e.message ?: "").contains("Communications link failure")) {
                    logger.warn { "MM MySQL - connection timeout" }
                    OutcomeCode.CODE_045_MM_CONNECTION_TIMEOUT
                } else {
                    throw e
                }
            }
            catch(e: SQLException) {
                if ((e.message ?: "").contains("Access denied for user")) {
                    logger.warn { "MM MySQL - access denied for user" }
                    OutcomeCode.CODE_055_ACCESS_DENIED_TO_MM
                } else {
                    throw e
                }
            }
        }
        else {
            locks++
            logger.debug { "Increment lock number to $locks" }
            OutcomeCode.CODE_000_SUCCESS
        }
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0.
     * Finally, return the outcome code
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
                OutcomeCode.CODE_000_SUCCESS
            } else {
                /** The lock has already been released */
                logger.warn { "The lock was released but the connection was not closed" }
                OutcomeCode.CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 0) {
            logger.debug { "Decrement lock number to ${locks-1}" }
            locks--
            OutcomeCode.CODE_000_SUCCESS
        } else {
            OutcomeCode.CODE_000_SUCCESS
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
                    OutcomeCode.CODE_034_UNLOCK_FAILED
                }
                connection!!.close()
                OutcomeCode.CODE_000_SUCCESS
            } else {
                /** The lock has already been released */
                logger.warn { "The lock was released but the connection was not closed" }
                OutcomeCode.CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
            }
        } else if (locks > 0) {
            logger.debug { "Decrement lock number to ${locks-1}" }
            locks--
            OutcomeCode.CODE_000_SUCCESS
        } else {
            OutcomeCode.CODE_000_SUCCESS
        }
    }



    /**
     * Create and return a prepared statement to insert the [values] in the [table].
     * Each list in the [values] is a list of all values for all columns (i.e., each
     * list is a row of the column). A value can be a string, a boolean, an integer
     * or an ElementType
     */
    fun createInsertStatement(table: String, values: ArrayList<ArrayList<Any?>>): PreparedStatement {
        logger.debug { "Creating insert statement for table $table" }

        /** We set the IGNORE flag to avoid an exception and handle duplicated ID locally */
        val insertBuilder = StringBuilder("INSERT IGNORE INTO $table VALUES ")

        /** A question mark for each value to insert */
        return if (values.isNotEmpty()) {
            val rowsNumber = values.size
            val columnsNumber = values[0].size
            val valuesPlaceholders = StringBuilder("(")
            valuesPlaceholders.append("?,".repeat(columnsNumber))
            valuesPlaceholders.delete(valuesPlaceholders.length - 1, valuesPlaceholders.length).append("),")
            val placeHolders = valuesPlaceholders.toString()
            insertBuilder.append(placeHolders.repeat(values.size))
            insertBuilder.delete(insertBuilder.length - 1, insertBuilder.length).append(";")

            val insertStatement = connection!!.prepareStatement(insertBuilder.toString())
            var index = 1

            /** Insert the values in the prepared statement */
            values.forEach { row ->
                index = insertValuesInStatement(insertStatement, index, row)
            }

            if (index-1 != rowsNumber*columnsNumber) {
                val message = "Not all rows were given all parameters for all columns"
                logger.warn { message }
                throw SQLException(message)
            }

            logger.debug { "Insert statement is ${insertStatement.asString()}" }
            insertStatement
        }
        else {
            val message = "Asked to create an insert statement but no value was given"
            logger.warn { message }
            throw SQLException(message)
        }
    }

    /**
     * Create and return a prepared statement to retrieve the [selectedColumns] from the [table]
     * matching the [whereParameters] and not matching the [whereNotParameters]. Start retrieving
     * rows from the [offset] until the [limit]. If [limit] is negative, no limit will be applied.
     * If [justTheCount] is asked, then select the (distinct) count of rows and not the columns.
     * If [selectedColumns] is null or empty, select all columns. The columns inside the COUNT()
     * SQL function are those specified in the "columnsToSelect" parameter
     */
    fun createSelectStatement(
        table: String, selectedColumns: ArrayList<String>? = null,
        whereParameters: LinkedHashMap<String, Any?>? = null,
        whereNotParameters: LinkedHashMap<String, Any?>? = null,
        offset: Int = DEFAULT_OFFSET, limit: Int = DEFAULT_LIMIT,
        justTheCount: Boolean = false,
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


        // always order by the first column. Actually, we do not need it for
        // ordering, but instead for guaranteeing that pagination works correctly
        // TODO replace offset with seek method?
        selectBuilder.append(" ORDER BY 1")

        if (limit > 0)
            selectBuilder.append(" LIMIT ?,?")

        // we built the string for the preparedStatement.
        // Now, we have to insert the parameters
        val selectStatement = connection!!.prepareStatement(selectBuilder.toString())

        var index = 1
        if (!whereParameters.isNullOrEmpty()) {
            index = insertValuesInStatement(selectStatement, index, ArrayList(whereParameters.values))
        }
        if (!whereNotParameters.isNullOrEmpty()) {
            index = insertValuesInStatement(selectStatement, index, ArrayList(whereNotParameters.values))
        }

        if (limit > 0) {
            selectStatement.setInt(index, offset)
            selectStatement.setInt(index + 1, limit)
        }

        logger.debug { "Select statement is ${selectStatement.asString()}" }
        return selectStatement
    }

    /**
     * Create and return a prepared statement to update the [values] in the [table]
     * where the row matches the [whereParameters] and does not match the [whereNotParameters].
     * A value can be a string, a boolean, an integer or an ElementType
     */
    fun createUpdateStatement(
        table: String,
        values: LinkedHashMap<String, Any?>,
        whereParameters: LinkedHashMap<String, Any?>? = null, whereNotParameters: LinkedHashMap<String, Any?>? = null,
    ): PreparedStatement {
        logger.debug { "Creating update statement for table $table" }

        val updateBuilder = StringBuilder("UPDATE $table SET ")

        if (values.isNotEmpty()) {
            values.forEach { (column, value) ->
                updateBuilder.append(column).append(
                    if (value != null) {
                        "=?, "
                    } else {
                        ", "
                    }
                )
            }
            values.entries.removeIf { it.value == null }
            updateBuilder.delete(updateBuilder.length - 2, updateBuilder.length)
        }
        else {
            val message = "Asked to create an update statement but no value was given"
            logger.warn { message }
            throw SQLException(message)
        }
        updateBuilder.append(createWhereString(whereParameters, whereNotParameters))

        val updateStatement = connection!!.prepareStatement(updateBuilder.toString())

        var index = insertValuesInStatement(updateStatement, 1, ArrayList(values.values))
        if (!whereParameters.isNullOrEmpty()) {
            index = insertValuesInStatement(updateStatement, index, ArrayList(whereParameters.values))
        }
        if (!whereNotParameters.isNullOrEmpty()) {
            insertValuesInStatement(updateStatement, index, ArrayList(whereNotParameters.values))
        }

        logger.debug { "Update statement is ${updateStatement.asString()}" }
        return updateStatement
    }

    /**
     * Create and return a prepared statement to delete from the [table] the rows
     * matching the [whereParameters] and not matching the [whereNotParameters]
     */
    fun createDeleteStatement(
        table: String,
        whereParameters: LinkedHashMap<String, Any?>? = null,
        whereNotParameters: LinkedHashMap<String, Any?>? = null,
    ): PreparedStatement {
        logger.debug { "Creating delete statement for table $table" }

        if (whereParameters.isNullOrEmpty() && whereNotParameters.isNullOrEmpty()) {
            val message = "Asked to create delete statement but neither where not where not parameters were given"
            logger.warn { message }
            throw SQLException(message)
        }

        val deleteBuilder = StringBuilder("DELETE FROM ").append(table)
        deleteBuilder.append(createWhereString(whereParameters, whereNotParameters))

        // we built the string for the preparedStatement.
        // Now, we have to insert the parameters
        val deleteStatement = connection!!.prepareStatement(deleteBuilder.toString())

        var index = 1
        if (!whereParameters.isNullOrEmpty()) {
            index = insertValuesInStatement(deleteStatement, index, ArrayList(whereParameters.values))
        }
        if (!whereNotParameters.isNullOrEmpty()) {
            insertValuesInStatement(deleteStatement, index, ArrayList(whereNotParameters.values))
        }

        logger.debug { "Delete statement is ${deleteStatement.asString()}" }
        return deleteStatement
    }

    /**
     * Insert the [values] in the [statement] starting from
     * the [startingIndex]. Finally, return the new index
     */
    fun insertValuesInStatement(statement: PreparedStatement, startingIndex: Int, values: ArrayList<Any?>): Int {
        var index = startingIndex
        values.forEach { value ->
            if (value == null) {
                statement.setNull(index, NULL)
            } else {
                when (value) {
                    is String, is ElementType, is ElementStatus, is PermissionType, is EnforcementType -> {
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
     * Create and return an array list from the given [roleTuple]
     * to match the order of the columns of the role tuples table
     */
    private fun createArray(roleTuple: RoleTuple): ArrayList<Any?> {
        return ArrayList<Any?>()
            .apply { add(roleTuple.username) }
            .apply { add(roleTuple.roleName) }
            .apply { add(roleTuple.encryptedAsymEncKeys!!.public.encodeBase64()) }
            .apply { add(roleTuple.encryptedAsymEncKeys!!.private.encodeBase64()) }
            .apply { add(roleTuple.encryptedAsymSigKeys!!.public.encodeBase64()) }
            .apply { add(roleTuple.encryptedAsymSigKeys!!.private.encodeBase64()) }
            .apply { add(roleTuple.roleVersionNumber) }
            .apply { add(roleTuple.signature!!.encodeBase64()) }
    }

    /**
     * Create and return an array list from the given [permissionTuple]
     * to match the order of the columns of the permission tuples table
     */
    private fun createArray(permissionTuple: PermissionTuple): ArrayList<Any?> {
        return ArrayList<Any?>()
            .apply { add(permissionTuple.roleName) }
            .apply { add(permissionTuple.fileName) }
            .apply { add(permissionTuple.roleToken) }
            .apply { add(permissionTuple.fileToken) }
            .apply { add(permissionTuple.encryptedSymKey!!.key.encodeBase64()) }
            .apply { add(permissionTuple.symKeyVersionNumber) }
            .apply { add(permissionTuple.roleVersionNumber) }
            .apply { add(permissionTuple.permission) }
            .apply { add(permissionTuple.signer) }
            .apply { add(permissionTuple.signature!!.encodeBase64()) }
    }

    /**
     * Create and return an array list from the given [fileTuple]
     * to match the order of the columns of the file tuples table
     */
    private fun createArray(fileTuple: FileTuple): ArrayList<Any?> {
        return ArrayList<Any?>()
            .apply { add(fileTuple.fileName) }
            .apply { add(fileTuple.fileToken) }
            .apply { add(fileTuple.symDecKeyVersionNumber) }
            .apply { add(fileTuple.enforcement) }
            .apply { add(fileTuple.roleToken) }
            .apply { add(fileTuple.signer) }
            .apply { add(fileTuple.signature!!.encodeBase64()) }
    }

    /**
     * Escape HTML characters from the given [string]
     * to prevent stored XSS attacks
     */
    private fun sanitizeStringFromHTLM(string: String): String = Encode.forHtml(string)

    /**
     * Return the statement as a string
     */
    private fun PreparedStatement.asString(): String {
        return this.toString().split(": ")[1]
    }
}
