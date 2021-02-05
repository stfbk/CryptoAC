package eu.fbk.st.cryptoac.dao;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.core.element.*;
import eu.fbk.st.cryptoac.core.tuple.FileTuple;
import eu.fbk.st.cryptoac.core.tuple.Permission;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.core.tuple.RoleTuple;
import eu.fbk.st.cryptoac.util.AccessControlEnforcement;
import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.util.EncryptedPKCKeyPair;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import org.jetbrains.annotations.NotNull;
import org.owasp.encoder.Encode;


import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.X509EncodedKeySpec;
import java.sql.*;
import java.util.*;

import static eu.fbk.st.cryptoac.core.element.CryptoACElementStatus.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceMySQLParameters.kMySQLDatabasePassword;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;


/**
 *  This abstract class implements the methods to handle metadata in a MySQL8+ database. If you want to support
 *  a new storage solution while using a MySQL database for metadata, create a new class and make it extends
 *  this class. It is way quicker than re-implementing everything by yourself.
 *  Still, you will have to implement the abstract methods to create (add), delete (delete), update (write)
 *  and download (read) files. Of this methods, only create, update and download can be invoked by the user.
 *  Therefore, assuming malicious users, invocations to these methods must be checked by the RM.
 *  Note that it is up to you to choose where to place the RM.
 *
 *  Note: we configured the database to avoid the disclosure of the AC policy to the users. First, we assign a
 *  random token to each user, role and file identifier. Then, we grant users SELECT privilege on the token column
 *  only and not on the real identifier (i.e., the name of the user, role or file). To hide role and permission
 *  tuples, we created Views on top of the tables containing the tuples. The views are created by filtering the
 *  tuples not associated with the user that is connected to the database. In this way, each user can only see
 *  the roles and files he is associated with. Finally, triggers in the database allow automatic setting of tokens.
 *
 *  Note: the name of the user in CryptoAC and the name of the user that connects to the database (i.e., the user
 *  at database level) have to be the same.
 *
 *  Note: the limit of rows that a MySQL database return will be the default "sql_select_limt" system variable
 *  in the MySQL database (typically 2^32-1 or 2^64-1
 *
 * Note: byte arrays (i.e., encrypted values) are converted to BASE64 before being stored in the database
 */
public abstract class DAOInterfaceMySQL implements DAOInterface {

    // variables for logging
    protected static String className;
    protected static String countRowsInTable = "countRowsInTable";

    /**
     * the default offset for MySQL queries.
     */
    Integer defaultOffset = 0;

    /**
     * the default limit for MySQL queries.
     */
    Integer defaultLimit = 100;

    /**
     * the path of the file containing the sql commands to create
     * the needed tables, views and triggers in the the database
     */
    private static final String kInitializationFileMySQLPath = "/cryptoac/mysqldatabase.sql";

    /**
     * the name of the database schema.
     */
    public static final String databaseName = "databaseCryptoAC";

    // database tables
    public static final String usersTable = databaseName + ".users";
    public static final String usersView = databaseName + ".user_specific_users";
    public static final String rolesTable = databaseName + ".roles";
    public static final String filesTable = databaseName + ".files";
    public static final String roleTuplesTable = databaseName + ".roleTuples";
    public static final String roleTuplesView = databaseName + ".user_specific_roleTuples";
    public static final String permissionTuplesTable = databaseName + ".permissionTuples";
    public static final String permissionTuplesView = databaseName + ".user_specific_permissionTuples";
    public static final String fileTuplesTable = databaseName + ".fileTuples";
    public static final String fileTuplesView = databaseName + ".user_specific_fileTuples";

    // database columns
    public static final String userTokenColumn = "userToken";
    public static final String roleTokenColumn = "roleToken";
    public static final String fileTokenColumn = "fileToken";
    public static final String publicEncryptingKeyColumn = "publicEncryptingKey";
    public static final String publicSigningKeyColumn = "publicSigningKey";
    public static final String roleVersionNumberColumn = "roleVersionNumber";
    public static final String permissionTupleFileVersionNumberColumn = "symmetricFileKeyVersionNumber";
    public static final String encryptFileVersionNumberColumn = "encryptFileVersionNumber";
    public static final String decryptFileVersionNumberColumn = "decryptFileVersionNumber";
    public static final String encryptedRolePrivateEncryptingKeyColumn = "encryptedRolePrivateEncryptingKey";
    public static final String encryptedRolePublicEncryptingKeyColumn = "encryptedRolePublicEncryptingKey";
    public static final String encryptedRolePrivateSigningKeyColumn = "encryptedRolePrivateSigningKey";
    public static final String encryptedRolePublicSigningKeyColumn = "encryptedRolePublicSigningKey";
    public static final String encryptedSymmetricFileKeyColumn = "encryptedSymmetricFileKey";
    public static final String signatureColumn = "signature";
    public static final String permissionColumn = "permission";
    public static final String elementSignerColumn = "elementSigner";
    public static final String elementTokenColumn = "elementToken";
    public static final String usernameColumn = "username";
    public static final String roleNameColumn = "roleName";
    public static final String fileNameColumn = "fileName";
    public static final String statusFlagColumn = "statusFlag";
    public static final String accessControlEnforcementColumn = "accessControlEnforcement";

    // variables for keeping track of where an exception was thrown
    public static final String kSignTuple = "signTuple";
    public static final String kEncryptPKIKeys = "encryptPKIKeys";


    /**
     * This variable counts the number of locks on the database to implement a "rollback" mechanism
     * in case something goes wrong in the middle of an SQL transaction.
     */
    protected int locksOnCloud;

    /**
     * The connection to the MySQL database.
     */
    protected Connection connection;

    /**
     * Properties related to the MySQL connection.
     */
    protected Properties mySqlProperties;

    /**
     * The jDBUrl of the database.
     */
    protected String jDBUrl;

    /**
     * the key of the user in the MySQL properties object.
     */
    public static final String kMySQLPropertyUser = "user";

    /**
     * the key of the password in the MySQL properties object.
     */
    public static final String kMySQLPropertyPassword = "password";

    /**
     * the key of the useSSL configuration in the MySQL properties object.
     */
    public static final String kMySQLPropertyUseSSL = "useSSL";

    /**
     * the key of the JDBC first part of the URL.
     */
    public static final String kJDBC = "jdbc:mysql://";





    /**
     * Constructor with parameters.
     * @param DAOInterfaceMySQLParameters the parameters needed to configure the connection toward the database.
     *                                    The parameters should contain the username and password for connecting
     *                                    to the database, the database url and the database port
     */
    protected DAOInterfaceMySQL(DAOInterfaceMySQLParameters DAOInterfaceMySQLParameters) {

        locksOnCloud = 0;

        className = "DAOInterfaceMySQL";

        String username             = DAOInterfaceMySQLParameters.getUsernameInCryptoAC();
        String passwordForDatabase  = DAOInterfaceMySQLParameters.getMySQLDatabasePassword();
        String urlOfDatabase        = DAOInterfaceMySQLParameters.getMySQLDatabaseURL();
        String portOfDatabase       = DAOInterfaceMySQLParameters.getMySQLDatabasePort();

        // concatenate parameters to get the URL of the database (JDBC is the driver)
        jDBUrl = kJDBC + urlOfDatabase + ":" + portOfDatabase;

        mySqlProperties = new Properties();
        mySqlProperties.setProperty(kMySQLPropertyUseSSL,    "true");
        mySqlProperties.setProperty(kMySQLPropertyUser,      username);
        mySqlProperties.setProperty(kMySQLPropertyPassword,  passwordForDatabase);
    }

    /**
     * This method is invoked once to initialize the administrator.
     * This method creates in the MS:
     * - a new User named with the admin ID;
     * - a new Role named with the admin ID and the same keys as the admin user;
     * - a new RoleTuple that binds the admin User and the admin Role.
     * Also, this method initializes all the needed tables, views and triggers
     * in the database by reading the "mysqldatabase.sql" file in the resources.
     * @param adminEncryptingKeys the encrypting keys of the admin
     * @param adminSigningKeys the signing keys of the admin
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void initializeAdmin(@NotNull KeyPair adminEncryptingKeys, @NotNull KeyPair adminSigningKeys) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                "initializing the administrator user and role in the database");

        OperationOutcomeCode returningCode = code_0;
        Exception thrownException = null;

        // this variable allows to keep track of which instruction threw an eventual exception
        String whereWereWe = "";

        // the content is composed of the SQL commands that we need to execute to initialize the database
        InputStream inputStreamMySQLFile = DAOInterfaceMySQL.class.getResourceAsStream(kInitializationFileMySQLPath);

        // this is an array of users and an array of roles to insert in the database.
        // We only have one user and one role, though (i.e., the admin)
        ArrayList<ArrayList<Object>> valuesToInsertInUserTable = new ArrayList<>();
        ArrayList<ArrayList<Object>> valuesToInsertInRoleTable = new ArrayList<>();

        ArrayList<Object> tempArrayUserTable = new ArrayList<>();
        ArrayList<Object> tempArrayRoleTable = new ArrayList<>();

        tempArrayUserTable.add(App.admin);
        tempArrayUserTable.add(App.admin);
        tempArrayUserTable.add(Base64.getEncoder().encodeToString(adminEncryptingKeys.getPublic().getEncoded()));
        tempArrayUserTable.add(Base64.getEncoder().encodeToString(adminSigningKeys.getPublic().getEncoded()));
        tempArrayUserTable.add(operational.getValue());

        tempArrayRoleTable.add(App.admin);
        tempArrayRoleTable.add(App.admin);
        tempArrayRoleTable.add(Base64.getEncoder().encodeToString(adminEncryptingKeys.getPublic().getEncoded()));
        tempArrayRoleTable.add(Base64.getEncoder().encodeToString(adminSigningKeys.getPublic().getEncoded()));
        tempArrayRoleTable.add(1);
        tempArrayRoleTable.add(operational.getValue());

        valuesToInsertInUserTable.add(tempArrayUserTable);
        valuesToInsertInRoleTable.add(tempArrayRoleTable);

        try (
                PreparedStatement insertAdminUserStatement = createInsertStatement(usersTable, valuesToInsertInUserTable);
                PreparedStatement insertAdminRoleStatement = createInsertStatement(rolesTable, valuesToInsertInRoleTable);

                Statement initializationStatement = connection.createStatement();

                BufferedReader br = new BufferedReader(new InputStreamReader(inputStreamMySQLFile))
        ) {

            // read and execute the sql commands from the file
            StringBuilder builder = new StringBuilder();
            String defaultDelimiter = ";";
            String line, delimiterChar = defaultDelimiter;
            boolean comment = false;
            while ((line = br.readLine()) != null) {
                builder.append(line);

                // if so, we are starting a comment
                if (line.startsWith("/*")) {
                    comment = true;
                }
                // if so, we are ending a comment and we reset the string builder
                if (line.endsWith("*/")) {
                    comment = false;
                    builder = new StringBuilder();
                }

                // if so, we are setting a new delimiter (as probably we are creating a stored procedure)
                if (line.startsWith("DELIMITER")) {
                    delimiterChar = line.split(" ")[1];
                    builder = new StringBuilder();
                }
                // if so, it means that we just read one complete query and we can execute it
                else if (line.endsWith(delimiterChar) && !comment) {
                    builder.replace(builder.length() - delimiterChar.length(), builder.length(), defaultDelimiter);
                    initializationStatement.executeUpdate(builder.toString());
                    builder = new StringBuilder();
                    delimiterChar = defaultDelimiter;
                }
                builder.append(" ");
            }


            int affectedRowCount = insertAdminUserStatement.executeUpdate();

            if (affectedRowCount == 1) {

                affectedRowCount = insertAdminRoleStatement.executeUpdate();

                if (affectedRowCount == 1) {

                    // lastly, we have to add the role tuple. So encrypt the admin keys with the admin
                    // public key, create and sign the tuple and finally put it in the database
                    whereWereWe = kEncryptPKIKeys;
                    EncryptedPKCKeyPair encryptedEncryptingKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys(
                            adminEncryptingKeys.getPublic(),
                            adminEncryptingKeys.getPrivate(),
                            adminEncryptingKeys.getPublic());
                    EncryptedPKCKeyPair encryptedSigningKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys(
                            adminSigningKeys.getPublic(),
                            adminSigningKeys.getPrivate(),
                            adminEncryptingKeys.getPublic());

                    RoleTuple adminRoleTuple = new RoleTuple(
                            App.admin, App.admin,
                            encryptedEncryptingKeys, encryptedSigningKeys,
                            1, null, null);

                    whereWereWe = kSignTuple;
                    CryptoUtil.getCryptoUtil().signCryptoACTuple(adminRoleTuple,
                            adminSigningKeys.getPrivate(), App.admin);

                    addRoleTuple(adminRoleTuple);
                }
                // probably, the ID of the user is duplicated in the roles table
                else
                    returningCode = code_2;
            }
            // probably, the ID of the user is duplicated in the users table
            else {
                returningCode = code_1;
            }
        }
        // catch exceptions while reading the configuration file
        catch (IOException e) {
            returningCode = code_54;
            thrownException = e;
        }
        // catch exceptions while encrypting the keys or signing tuple
        catch (BadPaddingException | IllegalBlockSizeException | InvalidKeyException |
                NoSuchAlgorithmException | SignatureException | NoSuchPaddingException e) {

            switch (whereWereWe) {

                case kEncryptPKIKeys:
                    returningCode = code_29;
                    break;
                case kSignTuple:
                    returningCode = code_12;
                    break;
                default:
                    returningCode = code_72;
            }
            thrownException = e;
        } catch (SQLException e) {
            returningCode = code_58;
            thrownException = e;
        }

        logAtEndOfMethod(returningCode, initializeAdmin, thrownException);
    }


    /**
     * This method checks whether the user is an administrator or not. The way here 
     * implemented is to check whether the user has DELETE privileges on the database.
     * @param username the name of the user
     * @return true if the user is the admin, false otherwise
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public boolean isUserAdmin(@NotNull String username) throws DAOException {


        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;
        boolean isAdmin = false;

        try (
                PreparedStatement retrievePrivilegesStatement = connection.prepareStatement(
                        "SHOW GRANTS FOR ?")
        ) {

            retrievePrivilegesStatement.setString(1, username);
            ResultSet rs = retrievePrivilegesStatement.executeQuery();

            // for each privilege the user has
            while (rs.next()) {

                String currentGrant = escapeString(rs.getString(1));
                if (currentGrant.toLowerCase().contains("delete"))
                    isAdmin = true;
            }

            rs.close();

            App.logger.info("[{}{}{}{}{}{} ", className, " (" + isUserAdmin + ")]: ",
                    "user ", username, (isAdmin ? " is" : " is not"), " admin");

        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, isUserAdmin, exceptionThrown);
        return isAdmin;
    }


    /**
     * This method adds a new user to the database by inserting the user in the "users" table with a mock
     * value as public key (literally "mock". The keys are initialized by the user). The token is random.
     * Moreover, the method creates the user at database level and grant the necessary privileges (e.g.,
     * select on tables).
     * @param newUserToInsert the user object to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     * @return an hash map for eventual configuration parameters of the user (i.e., the user's database password)
     */
    public HashMap<String, byte[]> addUser(@NotNull User newUserToInsert) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + addUser + ")]: ", 
                "adding a new user to the database: " + newUserToInsert.toString());

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        String username = newUserToInsert.getName();

        // this is an array of users to insert in the database; we only have one user, though
        ArrayList<ArrayList<Object>> usersToInsert = new ArrayList<>();
        
        ArrayList<Object> userToInsert = new ArrayList<>();

        // set the arguments of the statement (set mock value for the keys)
        userToInsert.add(username);
        userToInsert.add(username);
        userToInsert.add("mock");
        userToInsert.add("mock");
        userToInsert.add(incomplete.getValue());
        usersToInsert.add(userToInsert);

        // insert the user in the table and create the related a database user
        try (

                PreparedStatement createUser = connection.prepareStatement(
                        "CREATE USER IF NOT EXISTS ? " +
                                "IDENTIFIED BY ?;"
                );

                // grant select on the users table. We limit the access to the
                // public key (so to not disclose the list of users), status and the token
                // (to be able to perform queries with the WHERE clause on that column)
                PreparedStatement grantPrivilegesSelectUsersTable = connection.prepareStatement(
                        "GRANT SELECT (" + userTokenColumn + ", " + publicEncryptingKeyColumn + ", " +
                                publicSigningKeyColumn + ", " + statusFlagColumn + ") " +
                                "ON " + usersTable + " TO ?;"
                );

                // grant select on the roles table. We limit the access to the public key and
                // version number columns (so to not disclose the list of roles), status and the token
                // (to be able to perform queries with the WHERE clause on that column)
                PreparedStatement grantPrivilegesSelectRolesTable = connection.prepareStatement(
                        "GRANT SELECT (" + roleTokenColumn + ", " + publicEncryptingKeyColumn  + ", " +
                                publicSigningKeyColumn  + ", " + statusFlagColumn +
                                ", " + roleVersionNumberColumn + ") ON " + rolesTable + " TO ?;"
                );

                // grant select on the files table. We limit the access to the
                // version number column (so to not disclose the list of files), status and the token
                // (to be able to perform queries with the WHERE clause on that column)
                PreparedStatement grantPrivilegesSelectFilesTable = connection.prepareStatement(
                        "GRANT SELECT (" + fileTokenColumn + ", " + encryptFileVersionNumberColumn +
                                ", " + statusFlagColumn + ") " +"ON " + filesTable + " TO ?;"
                );

                // grant select only on the role tuples view => limit access to personal tuples
                PreparedStatement grantPrivilegesSelectRoleTuplesView = connection.prepareStatement(
                        "GRANT SELECT ON " + roleTuplesView + " TO ?;"
                );

                // grant select only on the permission tuples view => limit access to personal tuples
                PreparedStatement grantPrivilegesSelectPermissionTuplesView = connection.prepareStatement(
                        "GRANT SELECT ON " + permissionTuplesView + " TO ?;"
                );

                // grant select only on the file tuples view => limit access to personal tuples
                PreparedStatement grantPrivilegesSelectFileTuplesView = connection.prepareStatement(
                        "GRANT SELECT ON " + fileTuplesView + " TO ?;"
                );

                // grant privilege to update its public key (only once, as the view structure dictates)
                PreparedStatement grantPrivilegeUpdate = connection.prepareStatement(
                        "GRANT UPDATE ON " + usersView + " TO ?;"
                );

                PreparedStatement insertUserStatement = createInsertStatement(usersTable, usersToInsert)
        ) {

            // REMEMBER that the .execute statements return true if the first
            // result is a ResultSet object; false if it is an update count
            // or there are no results. Therefore, the statement may have been
            // execute correctly even if the query returns false. The only
            // way to understand if there was any error is through exceptions
            createUser.setString(1, username);
            createUser.setString(2, newUserToInsert.getToken());
            createUser.execute();

            grantPrivilegesSelectUsersTable.setString(1, username);
            grantPrivilegesSelectUsersTable.execute();

            grantPrivilegesSelectRolesTable.setString(1, username);
            grantPrivilegesSelectRolesTable.execute();

            grantPrivilegesSelectFilesTable.setString(1, username);
            grantPrivilegesSelectFilesTable.execute();

            grantPrivilegesSelectRoleTuplesView.setString(1, username);
            grantPrivilegesSelectRoleTuplesView.execute();

            grantPrivilegesSelectPermissionTuplesView.setString(1, username);
            grantPrivilegesSelectPermissionTuplesView.execute();

            grantPrivilegesSelectFileTuplesView.setString(1, username);
            grantPrivilegesSelectFileTuplesView.execute();

            grantPrivilegeUpdate.setString(1, username);
            grantPrivilegeUpdate.execute();

            int affectedRowCount = insertUserStatement.executeUpdate();

            // if true, probably the name of the user is duplicated
            if (affectedRowCount != 1) {

                // check whether the user with the same name was deleted or not
                if (checkStatusOfCryptoACElement(username, CryptoACElement.CryptoACElementEnum.User, false) == deleted)
                    returningCode = code_55;
                else
                    returningCode = code_1;
            }
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addUser, exceptionThrown);

        HashMap<String, byte[]> returnParameters = new HashMap<>();
        returnParameters.put(kMySQLDatabasePassword, newUserToInsert.getToken().getBytes());
        return returnParameters;
    }

    /**
     * This method adds a new role and the tuple that binds the admin and the new role by inserting the role
     * in the database "roles" table and the tuple in the "roleTuples" table. Remember that role names are unique.
     * @param newRole the role to insert
     * @param newRoleTuple the tuple of the role to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void addRole(@NotNull Role newRole, @NotNull RoleTuple newRoleTuple) throws DAOException {

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + addRole + ")]: ", "adding a new role: ",
                newRole.toString(), " and tuple ", newRoleTuple.toString());

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // this is an array of roles to insert in the database; we only have one role, though
        ArrayList<ArrayList<Object>> rolesToInsert = new ArrayList<>();

        ArrayList<Object> roleToInsert = new ArrayList<>();
        roleToInsert.add(newRole.getName());
        roleToInsert.add(newRole.getToken());
        roleToInsert.add(Base64.getEncoder().encodeToString(newRole.getEncryptingPublicKey().getEncoded()));
        roleToInsert.add(Base64.getEncoder().encodeToString(newRole.getSigningPublicKey().getEncoded()));
        roleToInsert.add(newRole.getRoleVersionNumber());
        roleToInsert.add(operational.getValue());

        rolesToInsert.add(roleToInsert);

        try (
                PreparedStatement insertRoleStatement = createInsertStatement(rolesTable, rolesToInsert)
        ) {

            int affectedRowCountRole = insertRoleStatement.executeUpdate();

            if (affectedRowCountRole == 1)
                addRoleTuple(newRoleTuple);
            // probably, the name of the role is duplicated
            else {

                // check whether the role with the same name was deleted or not
                if (checkStatusOfCryptoACElement(newRole.getName(), CryptoACElement.CryptoACElementEnum.Role, false) == deleted)
                    returningCode = code_56;
                else
                    returningCode = code_2;
            }
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addRole, exceptionThrown);
    }

    /**
     * This method adds a new file in database "files" table.
     * Remember that file names are unique.
     * @param fileToAdd the file to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void addFile(File fileToAdd) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + addFile + ")]: ",
                "adding a new file in the files table:  ", fileToAdd.toString());

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // this is an array of roles to insert in the database; we only have one role, though
        ArrayList<ArrayList<Object>> filesToInsert = new ArrayList<>();

        ArrayList<Object> fileToInsert = new ArrayList<>();
        fileToInsert.add(fileToAdd.getName());
        fileToInsert.add(fileToAdd.getToken());
        fileToInsert.add(fileToAdd.getEncryptingKeyVersionNumber());
        fileToInsert.add(operational.getValue());

        filesToInsert.add(fileToInsert);

        try (
                PreparedStatement insertFileStatement = createInsertStatement(filesTable, filesToInsert)
        ) {

            int affectedRowCountFile = insertFileStatement.executeUpdate();

            if (affectedRowCountFile != 1)
                returningCode = code_3;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addFile, exceptionThrown);
    }

    /**
     * This method stores the new file (1), saves the related metadata from the file tuple (2) and
     * the permission tuple that gives the admin all permissions over the file (3).
     * Remember that file names are unique.
     * Remember that you can get the content of the file from the InputStream in the newFile parameter.
     * Remember that the RM has to check the validity of the new data. This means that:
     *  - tuples' signatures shall be correct. This includes also checking that the user that signed the
     *    tuples actually exists and is the same for both tuples;
     *  - the file version number shall be equal to 1 in the newFile and newFileTuple;
     *  - the newPermissionTuple shall give all permission to the admin and not to some other user.
     *  - the file name and token in newFile, newFileTuple and newPermissionTuple shall be the same.
     * @param newFile the new file
     * @param newFileTuple the new file tuple
     * @param newPermissionTuple the new permission tuple giving the admin access to the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    abstract public void addFile(@NotNull File newFile, @NotNull FileTuple newFileTuple, @NotNull PermissionTuple newPermissionTuple) throws DAOException;



    /**
     * This method adds the new role tuple to the MS by inserting the tuple in the "RoleTuples" table
     * and checking the existence of both the involved user and the role.
     * @param newRoleTuple the role tuple to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void addRoleTuple(@NotNull RoleTuple newRoleTuple) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + addRoleTuple + ")]: ",
                "adding a new role tuple: ", newRoleTuple.toString());

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // this is an array of role tuples to insert in the database; we only have one role tuple, though
        ArrayList<ArrayList<Object>> roleTuplesToInsert = new ArrayList<>();
        roleTuplesToInsert.add(checkIfUserAndRoleExistAndCreateArray(newRoleTuple));

        try (
                PreparedStatement insertRoleTupleStatement = createInsertStatement(roleTuplesTable, roleTuplesToInsert)
        ) {

            int affectedRowCount = insertRoleTupleStatement.executeUpdate();

            if (affectedRowCount != 1)
                returningCode = code_23;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addRoleTuple, exceptionThrown);
    }

    /**
     * This method adds the new role tuples to the MS by inserting them in the "RoleTuples" table
     * and checking the existence of the involved users and roles.
     * @param newRoleTuples the set of role tuples to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void addRoleTuple(@NotNull HashSet<RoleTuple> newRoleTuples) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + addRoleTuple + ")]: ", "adding a set of role tuples");

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // this is an array of role tuples to insert in the database
        ArrayList<ArrayList<Object>> roleTuplesToInsert = new ArrayList<>();

        for (RoleTuple currentRoleTuple : newRoleTuples)
            roleTuplesToInsert.add(checkIfUserAndRoleExistAndCreateArray(currentRoleTuple));

        try (
                PreparedStatement insertRoleTuplesStatement = createInsertStatement(roleTuplesTable, roleTuplesToInsert)
        ) {

            int affectedRowCount = insertRoleTuplesStatement.executeUpdate();

            if (affectedRowCount != roleTuplesToInsert.size())
                returningCode = code_23;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addRoleTuple, exceptionThrown);
    }

    /**
     * This method adds the new permission tuple to the MS by inserting the tuple in the
     * "permissionTuples" table and checking the existence of both the involved role and the file.
     * @param newPermissionTuple the permission tuple to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void addPermissionTuple(@NotNull PermissionTuple newPermissionTuple) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + addPermissionTuple + ")]: ",
                "adding a new permission tuple: ", newPermissionTuple.toString());

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // this is an array of role tuples to insert in the database; we only have one role tuple, though
        ArrayList<ArrayList<Object>> permissionTuplesToInsert = new ArrayList<>();
        permissionTuplesToInsert.add(checkIfRoleAndFileExistAndCreateArray(newPermissionTuple));

        try (
                PreparedStatement insertPermissionTupleStatement =
                        createInsertStatement(permissionTuplesTable, permissionTuplesToInsert)
        ) {

            int affectedRowCount = insertPermissionTupleStatement.executeUpdate();

            if (affectedRowCount != 1)
                returningCode = code_24;
        }
        catch(SQLException e){
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addPermissionTuple, exceptionThrown);
    }

    /**
     * This method adds the new permission tuples to the MS by inserting them in the
     * "permissionTuples" table and checking the existence of the involved roles and files.
     * @param newPermissionTuples the set of permission tuples to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void addPermissionTuple(@NotNull HashSet<PermissionTuple> newPermissionTuples) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + addPermissionTuple + ")]: ", "adding a set of permission tuples");

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // this is an array of permission tuples to insert in the database
        ArrayList<ArrayList<Object>> permissionTuplesToInsert = new ArrayList<>();

        for (PermissionTuple currentPermissionTuple : newPermissionTuples)
            permissionTuplesToInsert.add(checkIfRoleAndFileExistAndCreateArray(currentPermissionTuple));

        try (
                PreparedStatement insertPermissionTuplesStatement =
                        createInsertStatement(permissionTuplesTable, permissionTuplesToInsert)
        ) {

            int affectedRowCount = insertPermissionTuplesStatement.executeUpdate();

            if (affectedRowCount != permissionTuplesToInsert.size())
                returningCode = code_24;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addPermissionTuple, exceptionThrown);
    }

    /**
     * This method adds the new file tuple to the MS by inserting the tuple in the
     * "fileTuples" table and checking the existence of the involved file.
     * @param newFileTuple the file tuple to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void addFileTuple(@NotNull FileTuple newFileTuple) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + addFileTuple + ")]: ",
                "adding a new file tuple: ", newFileTuple.toString());

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // this is an array of file tuples to insert in the database; we only have one file tuple, though
        ArrayList<ArrayList<Object>> fileTuplesToInsert = new ArrayList<>();
        fileTuplesToInsert.add(checkIfFileExistsAndCreateArray(newFileTuple));

        try (
                PreparedStatement insertFileTupleStatement =
                        createInsertStatement(fileTuplesTable, fileTuplesToInsert)
        ) {

            int affectedRowCount = insertFileTupleStatement.executeUpdate();

            if (affectedRowCount != 1)
                returningCode = code_25;
        }
        catch(SQLException e){
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addFileTuple, exceptionThrown);
    }

    /**
     * This method adds the new file tuples to the MS by inserting them in the
     * "fileTuples" table and checking the existence of the involved files.
     * @param newFileTuples the set of permission tuples to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void addFileTuple(@NotNull HashSet<FileTuple> newFileTuples) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + addFileTuple + ")]: ", "adding a set of file tuples");

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // this is an array of file tuples to insert in the MS
        ArrayList<ArrayList<Object>> fileTuplesToInsert = new ArrayList<>();

        for (FileTuple currentFileTuple : newFileTuples)
            fileTuplesToInsert.add(checkIfFileExistsAndCreateArray(currentFileTuple));

        try (
                PreparedStatement insertFileTuplesStatement =
                        createInsertStatement(fileTuplesTable, fileTuplesToInsert)
        ) {

            int affectedRowCount = insertFileTuplesStatement.executeUpdate();

            if (affectedRowCount != fileTuplesToInsert.size())
                returningCode = code_25;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, addFileTuple, exceptionThrown);
    }







    /**
     * This method retrieves data of the specified user.
     * @param username name of the user to retrieve,
     *                 null if the users are not to be filtered by username
     * @param userToken token of the user to retrieve,
     *                 null if the users are not to be filtered by token
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @return an hash set filled with the users
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<User> getUser(String username, String userToken, Integer offset, Integer limit) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + getUsers + ")]: ", "querying the database for data of ",
                ( username == null ? "all users" : "user " + username));

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;
        offset = (offset == null) ? defaultOffset: offset;
        limit  = (limit == null)  ? defaultLimit : limit;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        if (username != null)
            whereParameters.put(usernameColumn, username);
        if (userToken != null)
            whereParameters.put(userTokenColumn, userToken);

        HashSet<User> allUsers = new HashSet<>();

        try (
            PreparedStatement ps = createSelectStatement(usersTable, offset, limit,
                    whereParameters, null, null, false);
            ResultSet rs = ps.executeQuery()
        ) {

            // get the rows resulting from the query. If no entry matches, the following
            // instructions will not be executed, thus the returning value will be an empty hash set
            while (rs.next()) {

                User tempUser = new User(escapeString(rs.getString(usernameColumn)), false, null, null);
                tempUser.setToken(escapeString(rs.getString(userTokenColumn)));
                tempUser.setCurrentStatus(CryptoACElementStatus.get(rs.getString(statusFlagColumn)));
                tempUser.setUserAdmin(tempUser.getName().equals(App.admin));

                allUsers.add(tempUser);
            }
        }
        catch (SQLException e) {
            exceptionThrown = e;
            returningCode = code_58;
        }

        logAtEndOfMethod(returningCode, getUsers, exceptionThrown);
        return allUsers;
    }

    /**
     * This method retrieves data of the specified role.
     * @param roleName name of the role to retrieve,
     *                 null if the roles are not to be filtered by name
     * @param roleToken token of the role to retrieve,
     *                 null if the roles are not to be filtered by token
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @return an hash set filled with the roles
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<Role> getRole(String roleName, String roleToken, Integer offset, Integer limit) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + getRoles + ")]: ", "querying the database for data of ",
                ( roleName == null ? "all roles" : "role " + roleName));

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;
        offset = (offset == null) ? defaultOffset: offset;
        limit  = (limit == null)  ? defaultLimit : limit;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        if (roleName != null)
            whereParameters.put(roleNameColumn, roleName);
        if (roleToken != null)
            whereParameters.put(roleTokenColumn, roleToken);

        HashSet<Role> allRoles = new HashSet<>();

        try (
                PreparedStatement ps = createSelectStatement(rolesTable, offset, limit,
                        whereParameters, null, null, false);
                ResultSet rs = ps.executeQuery()
        ) {

            // get the rows resulting from the query. If no entry matches, the following
            // instructions will not be executed, thus the returning value will be an empty hash set
            while (rs.next()) {

                Role tempRole = new Role(escapeString(rs.getString(roleNameColumn)),
                        rs.getInt(roleVersionNumberColumn), null, null);
                tempRole.setToken(escapeString(rs.getString(roleTokenColumn)));
                tempRole.setCurrentStatus(CryptoACElementStatus.get(rs.getString(statusFlagColumn)));

                allRoles.add(tempRole);
            }
        }
        catch (SQLException e) {
            exceptionThrown = e;
            returningCode = code_58;
        }

        logAtEndOfMethod(returningCode, getRoles, exceptionThrown);
        return allRoles;
    }

    /**
     * This method retrieves data of the specified file.
     * @param fileName name of the file to retrieve,
     *                 null if the files are not to be filtered by name
     * @param fileToken token of the file to retrieve,
     *                 null if the files are not to be filtered by token
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @return an hash set filled with the files
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<File> getFile(String fileName, String fileToken, Integer offset, Integer limit) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + getFiles + ")]: ", "querying the database for data of ",
                ( fileName == null ? "all files" : "file " + fileName));

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;
        offset = (offset == null) ? defaultOffset: offset;
        limit  = (limit == null)  ? defaultLimit : limit;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        if (fileName != null)
            whereParameters.put(fileNameColumn, fileName);
        if (fileToken != null)
            whereParameters.put(fileTokenColumn, fileToken);

        HashSet<File> allFiles = new HashSet<>();

        try (
                PreparedStatement ps = createSelectStatement(filesTable, offset, limit,
                        whereParameters, null, null, false);
                ResultSet rs = ps.executeQuery()
        ) {

            // get the rows resulting from the query. If no entry matches, the following
            // instructions will not be executed, thus the returning value will be an empty hash set
            while (rs.next()) {
                File tempFile = new File(escapeString(rs.getString(fileNameColumn)),
                        null, rs.getInt(encryptFileVersionNumberColumn));
                tempFile.setToken(escapeString(rs.getString(fileTokenColumn)));

                allFiles.add(tempFile);
            }
        }
        catch (SQLException e) {
            exceptionThrown = e;
            returningCode = code_58;
        }

        logAtEndOfMethod(returningCode, getFiles, exceptionThrown);
        return allFiles;
    }


    /**
     * @param username name of the user of the token to retrieve.
     * @return the token of the given user. If no user matches the given username, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public String getUserTokenFromUsername(@NotNull String username) throws DAOException {
        return getTokenOfCryptoACElement(username, usersTable, usernameColumn, userTokenColumn, code_4);
    }

    /**
     * @param roleName name of the role of the token to retrieve.
     * @return the token of the given role. If no user role the given role name, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public String getRoleTokenFromUsername(@NotNull String roleName) throws DAOException {
        return getTokenOfCryptoACElement(roleName, rolesTable, roleNameColumn, roleTokenColumn, code_5);
    }


    /**
     * @param fileName name of the file of the token to retrieve.
     * @return the token of the given file. If no file matches the file name, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public String getFileTokenFromUsername(@NotNull String fileName) throws DAOException {
        return getTokenOfCryptoACElement(fileName, filesTable, fileNameColumn, fileTokenColumn, code_6);
    }



    /**
     * This method retrieves the role tuples matching the given parameters.
     * @param username name of the user that has to match in the role tuple,
     *                 null if the role tuples are not to be filtered by user
     * @param roleName name of the role that has to match in the role tuple,
     *                 null if the role tuples are not to be filtered by role
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @return an hash set filled with the role tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<RoleTuple> getRoleTuples(String username, String roleName, Integer offset, Integer limit) throws DAOException {

        offset = (offset == null) ? defaultOffset: offset;
        limit  = (limit == null)  ? defaultLimit : limit;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        if (username != null)
            whereParameters.put(usernameColumn, username);
        if (roleName != null)
            whereParameters.put(roleNameColumn, roleName);

        return queryForRoleTuples(roleTuplesTable, offset, limit, whereParameters, null);
    }

    /**
     * This method retrieves the permission tuples matching the given parameters.
     * @param roleName name of the role that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by role
     * @param fileName name of the file that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by file
     * @param fileVersionNumber the file version number that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered file version number
     * @param roleVersionNumber the role version number to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered role version number
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @return an hash set filled with the permission tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<PermissionTuple> getPermissionTuples(String roleName, String fileName, Integer fileVersionNumber,
                                                        Integer roleVersionNumber, Integer offset, Integer limit) throws DAOException {

        offset = (offset == null) ? defaultOffset: offset;
        limit  = (limit == null)  ? defaultLimit : limit;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        if (roleName != null)
            whereParameters.put(roleNameColumn, roleName);
        if (fileName != null)
            whereParameters.put(fileNameColumn, fileName);
        if (fileVersionNumber != null)
            whereParameters.put(permissionTupleFileVersionNumberColumn, fileVersionNumber);
        if (roleVersionNumber != null)
            whereParameters.put(roleVersionNumberColumn, roleVersionNumber);

        return queryForPermissionTuples(permissionTuplesTable, offset, limit, whereParameters, null);
    }

    /**
     * This method retrieves the permission tuples matching the given parameters. The name of the role is
     * a mandatory parameter, as the returned permission tuples will NOT match the role name.
     * @param fileName name of the file that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by file
     * @param roleName name of the role that has NOT to match in the permission tuple,
     * @param fileVersionNumber the file version number that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered file version number
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @return an hash set filled with the permission tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<PermissionTuple> getPermissionTuplesWithNoRoleName (String fileName, @NotNull String roleName,
                                                                       Integer fileVersionNumber,
                                                                       Integer offset, Integer limit) throws DAOException {

        offset = (offset == null) ? defaultOffset: offset;
        limit  = (limit == null)  ? defaultLimit : limit;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        if (fileName != null)
            whereParameters.put(fileNameColumn, fileName);
        if (fileVersionNumber != null)
            whereParameters.put(permissionTupleFileVersionNumberColumn, fileVersionNumber);

        LinkedHashMap<String, Object> whereNotParameters = new LinkedHashMap<>();
        whereNotParameters.put(roleNameColumn, roleName);

        return queryForPermissionTuples(permissionTuplesTable, offset, limit, whereParameters, whereNotParameters);
    }

    /**
     * This method retrieves the file tuples matching the given file name from the database.
     * @param fileName name of the file that has to match in the tuple,
     *                 null if the file tuples are not to be filtered by file
     * @return an hash set filled with the file tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<FileTuple> getFileTuples(String fileName) throws DAOException {

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        if (fileName != null)
            whereParameters.put(fileNameColumn, fileName);

        return queryForFileTuples(fileTuplesTable, 0, 1, whereParameters);
    }




    /**
     * This method retrieves the role tuples of the user invoking this method and matching the given parameter.
     * @param myUsername name of the user that has to match in the role tuple. As of now, the role tuples are
     *                   automatically filtered by the current user name through database views
     * @param roleName name of the role that has to match in the role tuple,
     *                 null if the role tuples are not to be filtered by role
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @return an hash set filled with the role tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<RoleTuple> getMyRoleTuples(@NotNull String myUsername, String roleName,
                                              Integer offset, Integer limit) throws DAOException {

        offset = (offset == null) ? defaultOffset: offset;
        limit  = (limit == null)  ? defaultLimit : limit;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(usernameColumn, myUsername);

        if (roleName != null)
            whereParameters.put(roleNameColumn, roleName);

        return queryForRoleTuples(roleTuplesView, offset, limit, whereParameters, null);
    }

    /**
     * This method retrieves the permission tuples of the user invoking this method and matching the given parameters.
     * @param myUsername name of the user that has to match in the role tuple. As of now, the permission tuples are
     *                   automatically filtered by the current user name through database views
     * @param roleName name of the role that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by role
     * @param fileName name of the file that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by file
     * @param fileVersionNumber the file version number that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by file version number
     * @param roleVersionNumber the role version number to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by role version number
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @return an hash set filled with the permission tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<PermissionTuple> getMyPermissionTuples(@NotNull String myUsername, String roleName, String fileName,
                                                          Integer roleVersionNumber, Integer fileVersionNumber,
                                                          Integer offset, Integer limit) throws DAOException {

        offset = (offset == null) ? defaultOffset: offset;
        limit  = (limit == null)  ? defaultLimit : limit;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();

        if (roleName != null)
            whereParameters.put(roleNameColumn, roleName);
        if (fileName != null)
            whereParameters.put(fileNameColumn, fileName);
        if (roleVersionNumber != null)
            whereParameters.put(roleVersionNumberColumn, roleVersionNumber);
        if (fileVersionNumber != null)
            whereParameters.put(permissionTupleFileVersionNumberColumn, fileVersionNumber);

        return queryForPermissionTuples(permissionTuplesView, offset, limit, whereParameters, null);
    }

    /**
     * This method retrieves the file tuples of the user invoking this method and matching the given parameters.
     * @param myUsername name of the user that has to match in the role tuple. As of now, the permission tuples are
     *                   automatically filtered by the current user name through database views
     * @param fileName name of the file that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by file
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     *               If null the default value will be used.
     * @return an hash set filled with the file tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public HashSet<FileTuple> getMyFileTuples(@NotNull String myUsername, String fileName, Integer offset, Integer limit) throws DAOException {

        offset = (offset == null) ? defaultOffset: offset;
        limit  = (limit == null)  ? defaultLimit : limit;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();

        if (fileName != null)
            whereParameters.put(fileNameColumn, fileName);

        return queryForFileTuples(fileTuplesView, offset, limit, whereParameters);
    }



    /**
     * This method retrieves the public signing key of the user with the given token.
     * @param userToken the token of the user
     * @return the key of the user (even if the user was deleted). If the user never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public PublicKey getPublicSigningKeyOfUserByToken(@NotNull String userToken) throws DAOException {
        return getPublicKeyOfCryptoACActiveElement(userToken, usersTable, userTokenColumn, publicSigningKeyColumn, code_4);
    }

    /**
     * This method retrieves the public signing key of the role with the given token.
     * @param roleToken the token of the role
     * @return the key of the role (even if the role was deleted). If the role never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public PublicKey getPublicSigningKeyOfRoleByToken(@NotNull String roleToken) throws DAOException {
        return getPublicKeyOfCryptoACActiveElement(roleToken, rolesTable, roleTokenColumn, publicSigningKeyColumn, code_5);
    }

    /**
     * This method retrieves the public signing key of the user with the given username.
     * @param username the name of the user
     * @return the key of the user (even if the user was deleted). If the user never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public PublicKey getPublicSigningKeyOfUserByName(@NotNull String username) throws DAOException {
        return getPublicKeyOfCryptoACActiveElement(username, usersTable, usernameColumn, publicSigningKeyColumn, code_4);
    }

    /**
     * This method retrieves the public signing key of the role with the given name.
     * @param roleName the name of the role
     * @return the key of the role (even if the role was deleted). If the user never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public PublicKey getPublicSigningKeyOfRoleByName(@NotNull String roleName) throws DAOException {
        return getPublicKeyOfCryptoACActiveElement(roleName, rolesTable, roleNameColumn, publicSigningKeyColumn, code_5);
    }

    /**
     * This method retrieves the public encrypting key of the user with the given token.
     * @param userToken the token of the user
     * @return the key of the user (even if the user was deleted). If the user never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public PublicKey getPublicEncryptingKeyOfUserByToken(@NotNull String userToken) throws DAOException {
        return getPublicKeyOfCryptoACActiveElement(userToken, usersTable, userTokenColumn, publicEncryptingKeyColumn, code_4);
    }

    /**
     * This method retrieves the public encrypting key of the user with the given name.
     * @param username the name of the user
     * @return the key of the user (even if the user was deleted). If the user never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public PublicKey getPublicEncryptingKeyOfUserByName(@NotNull String username) throws DAOException {
        return getPublicKeyOfCryptoACActiveElement(username, usersTable, usernameColumn, publicEncryptingKeyColumn, code_4);
    }

    /**
     * This method retrieves the public encrypting key of the role with the given token.
     * @param roleToken the token of the role
     * @return the key of the role (even if the role was deleted). If the role never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public PublicKey getPublicEncryptingKeyOfRoleByToken(@NotNull String roleToken) throws DAOException {
        return getPublicKeyOfCryptoACActiveElement(roleToken, rolesTable, roleTokenColumn, publicEncryptingKeyColumn, code_5);
    }

    /**
     * This method retrieves the public encrypting key of the role with the given name.
     * @param roleName the name of the role
     * @return the key of the role (even if the role was deleted). If the role never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public PublicKey getPublicEncryptingKeyOfRoleByName(@NotNull String roleName) throws DAOException {
        return getPublicKeyOfCryptoACActiveElement(roleName, rolesTable, roleNameColumn, publicEncryptingKeyColumn, code_5);
    }




    /**
     * This method retrieves the version number of the role with the given token.
     * @param roleToken the token of the role
     * @return the role version number, only is the role exists and was not deleted. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public Integer getRoleVersionNumberByToken(@NotNull String roleToken) throws DAOException {
        return getVersionNumberOfCryptoACElement(roleToken, rolesTable, roleTokenColumn, roleVersionNumberColumn, code_5);
    }

    /**
     * This method retrieves the version number of the role with the given name.
     * @param roleName the name of the role
     * @return the role version number, only is the role exists and was not deleted. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public Integer getRoleVersionNumberByName(@NotNull String roleName) throws DAOException {
        return getVersionNumberOfCryptoACElement(roleName, rolesTable, roleNameColumn, roleVersionNumberColumn, code_5);
    }

    /**
     * This method retrieves the version number of the symmetric key that has to
     * be used to encrypt the file with the given name.
     * @param fileName the name of the file
     * @return the file version number, only is the file exists. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public Integer getFileEncryptingVersionNumberByName(@NotNull String fileName) throws DAOException {
        return getVersionNumberOfCryptoACElement(fileName, filesTable, fileNameColumn, encryptFileVersionNumberColumn, code_6);
    }

    /**
     * This method retrieves the version number of the symmetric key that has to
     * be used to encrypt the file with the given token.
     * @param fileToken the token of the file
     * @return the file version number, only is the file exists. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public Integer getFileEncryptingVersionNumberByToken(@NotNull String fileToken) throws DAOException {
        return getVersionNumberOfCryptoACElement(fileToken, filesTable, fileTokenColumn, encryptFileVersionNumberColumn, code_6);
    }

    /**
     * This method retrieves the version number of the symmetric key that has to
     * be used to decrypt the file with the given name.
     * @param fileName the name of the file
     * @return the file version number, only is the file exists. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public Integer getFileDecryptingVersionNumberByName(@NotNull String fileName) throws DAOException {
        return getVersionNumberOfCryptoACElement(fileName, fileTuplesTable, fileNameColumn, decryptFileVersionNumberColumn, code_6);
    }




    /**
     * This method flags as deleted the user with the given username in the database. Moreover, this method
     * also deletes the user at database level.
     * @param username the name of the user
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void deleteUser(@NotNull String username) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + deleteUser + ")]: ",
                "deleting (thus flagging) user ", username);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> updatedValues = new LinkedHashMap<>();
        updatedValues.put(statusFlagColumn, deleted.getValue());

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(usernameColumn, username);

        LinkedHashMap<String, Object> whereNotParameters = new LinkedHashMap<>();
        whereNotParameters.put(statusFlagColumn, deleted.getValue());

        try (

                PreparedStatement dropUser = connection.prepareStatement("DROP USER IF EXISTS ?");
                PreparedStatement deleteUserStatement = createUpdateStatement(usersTable, updatedValues, whereParameters, whereNotParameters)
        ) {

            dropUser.setString(1, username);
            dropUser.execute();

            int rowAffected = deleteUserStatement.executeUpdate();

            if (rowAffected != 1)
                returningCode = code_4;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, deleteUser, exceptionThrown);
    }

    /**
     * This method flags as deleted the role with the given role name.
     * @param roleName the name of the role
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void deleteRole(@NotNull String roleName) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + deleteRole + ")]: ",
                "deleting (thus flagging) role ", roleName);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> updatedValues = new LinkedHashMap<>();
        updatedValues.put(statusFlagColumn, deleted.getValue());

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(roleNameColumn, roleName);

        LinkedHashMap<String, Object> whereNotParameters = new LinkedHashMap<>();
        whereNotParameters.put(statusFlagColumn, deleted.getValue());

        try (
                PreparedStatement deleteRoleStatement = createUpdateStatement
                        (rolesTable, updatedValues, whereParameters, whereNotParameters)
        ) {

            int rowAffected = deleteRoleStatement.executeUpdate();

            if (rowAffected != 1)
                returningCode = code_5;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, deleteRole, exceptionThrown);
    }

    /**
     * This method deletes the file with the given file name from the MS.
     * @param fileName the name of the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void deleteFile(@NotNull String fileName) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + deleteFile + ")]: ",
                "deleting file ", fileName);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(fileNameColumn, fileName);

        try (
                PreparedStatement deleteFileStatement = createDeleteStatement(filesTable, whereParameters, null)
        ) {

            int rowAffected = deleteFileStatement.executeUpdate();

            if (rowAffected != 1)
                returningCode = code_6;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, deleteFile, exceptionThrown);
    }


    /**
     * This method deletes the file with the given file name and deletes both the file metadata and the file tuple
     * @param fileName the name of the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    abstract public void deleteFileAndFileTuple(@NotNull String fileName) throws DAOException;


    /**
     * This method deletes the role tuples matching the given parameters.
     * Note that at least a parameter must be specified.
     * @param roleName name of the role that has to match in the role tuple,
     *                 null if the role tuples are not to be deleted by role
     * @param roleVersionNumber the role version number to match in the role tuple,
     *                 null if the role tuples are not to be deleted by role version number
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void deleteRoleTuples(String roleName, Integer roleVersionNumber) throws DAOException {

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + deleteRoleTuples + ")]: ",
                "deleting all the role tuples with role ", roleName, " and version number ", roleVersionNumber);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        if (roleName != null)
            whereParameters.put(roleNameColumn, roleName);
        if (roleVersionNumber != null)
            whereParameters.put(roleVersionNumberColumn, roleVersionNumber);

        // of course, we delete the tuples only if at least one parameters
        // was provided. Otherwise, we would delete ALL tuples.
        if (!whereParameters.isEmpty()) {

            try (
                    PreparedStatement deleteRoleTuplesStatement =
                            createDeleteStatement(roleTuplesTable, whereParameters, null)
            ) {

                int rowAffected = deleteRoleTuplesStatement.executeUpdate();

                if (rowAffected <= 0)
                    returningCode = code_26;
            }
            catch (SQLException e) {
                returningCode = code_58;
                exceptionThrown = e;
            }
        }
        else {
            returningCode = code_71;
        }

        // log and in case throw exception
        logAtEndOfMethod(returningCode, deleteRoleTuples, exceptionThrown);
    }

    /**
     * This method deletes the permission tuples matching the given parameters.
     * Note that at least a parameter must be specified.
     * @param roleName name of the role that has to match in the permission tuple,
     *                 null if the permission tuples are not to be deleted by role
     * @param fileName name of the file that has to match in the permission tuple,
     *                 null if the permission tuples are not to be deleted by file
     * @param roleVersionNumber the role version number to match in the role tuple,
     *                 null if the role tuples are not to be deleted by role version number
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void deletePermissionTuples(String roleName, String fileName, Integer roleVersionNumber) throws DAOException {

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + deletePermissionTuples + ")]: ",
                "deleting all the permission tuples with role ", roleName,
                " and role version number ", roleVersionNumber);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        if (roleName != null)
            whereParameters.put(roleNameColumn, roleName);
        if (fileName != null)
            whereParameters.put(fileNameColumn, fileName);
        if (roleVersionNumber != null)
            whereParameters.put(roleVersionNumberColumn, roleVersionNumber);

        // of course, we delete the tuples only if at least one parameters
        // was provided. Otherwise, we would delete ALL tuples
        if (!whereParameters.isEmpty()) {

            try (
                    PreparedStatement deletePermissionTuplesStatement =
                            createDeleteStatement(permissionTuplesTable, whereParameters, null)
            ) {

                int rowAffected = deletePermissionTuplesStatement.executeUpdate();

                if (rowAffected <= 0)
                    returningCode = code_27;
            }
            catch (SQLException e) {
                returningCode = code_58;
                exceptionThrown = e;
            }
        }
        else {
            returningCode = code_71;
        }

        logAtEndOfMethod(returningCode, deletePermissionTuples, exceptionThrown);
    }

    /**
     * This method deletes the permission tuples matching the given file name.
     * @param fileName name of the file that has to match in the permission tuple
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void deleteFileTupleByFileName(@NotNull String fileName) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + deleteFileTuplesByFileName + ")]: ",
                "deleting the file tuple with file name ", fileName);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(fileNameColumn, fileName);

        try (
                PreparedStatement deleteFileTuplesStatement =
                        createDeleteStatement(fileTuplesTable, whereParameters, null)
        ) {

            int rowAffected = deleteFileTuplesStatement.executeUpdate();

            if (rowAffected != 1)
                returningCode = code_6;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, deleteFileTuplesByFileName, exceptionThrown);
    }




    /**
     * This method updates the public keys, token and status
     * flag of a new user in the user view in the database.
     * @param userToInitialise the user object to initialise
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void initializeUser(@NotNull User userToInitialise) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + initialiseUser + ")]: ", "updating new user's data");

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> updatedValues = new LinkedHashMap<>();
        updatedValues.put(publicEncryptingKeyColumn,
                Base64.getEncoder().encodeToString(userToInitialise.getEncryptingPublicKey().getEncoded()));
        updatedValues.put(publicSigningKeyColumn,
                Base64.getEncoder().encodeToString(userToInitialise.getSigningPublicKey().getEncoded()));
        updatedValues.put(userTokenColumn, userToInitialise.getToken());
        updatedValues.put(statusFlagColumn, operational.getValue());

        try (
                PreparedStatement updateUserKeyStatement =
                        createUpdateStatement(usersView, updatedValues, null, null)
        ) {

            if (updateUserKeyStatement.executeUpdate() != 1)
                returningCode = code_4;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, initialiseUser, exceptionThrown);
    }

    /**
     * This method updates the public key of the role matching the given role name.
     * @param roleName the name of the role
     * @param roleEncryptingPublicKey the new encrypting public key
     * @param roleSigningPublicKey the new signing public key
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void updateRoleKeys(@NotNull String roleName, @NotNull PublicKey roleEncryptingPublicKey,
                               @NotNull PublicKey roleSigningPublicKey) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + updateRoleKeys + ")]: ",
                "updating public key of role ", roleName);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> updatedValues = new LinkedHashMap<>();
        updatedValues.put(publicEncryptingKeyColumn,
                Base64.getEncoder().encodeToString(roleEncryptingPublicKey.getEncoded()));
        updatedValues.put(publicSigningKeyColumn,
                Base64.getEncoder().encodeToString(roleSigningPublicKey.getEncoded()));
        updatedValues.put(roleVersionNumberColumn + "=" + roleVersionNumberColumn + "+1", null);

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(roleNameColumn, roleName);

        LinkedHashMap<String, Object> whereNotParameters = new LinkedHashMap<>();
        whereNotParameters.put(statusFlagColumn, deleted.getValue());

        try (
                PreparedStatement updateRoleKeyStatement =
                        createUpdateStatement(rolesTable, updatedValues, whereParameters, whereNotParameters)
        ) {

            if (updateRoleKeyStatement.executeUpdate() != 1)
                returningCode = code_5;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, updateRoleKeys, exceptionThrown);
    }

    /**
     * This method increments the file version number (thus the file version number for the encryption
     * of the file in the "files" table, not in "fileTuples" table) by 1.
     * @param fileName the name of the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void incrementFileVersionNumberByOne(@NotNull String fileName) throws DAOException {

        App.logger.info("[{}{}{}{}{} ", className, " (" + updateFileVersionNumber + ")]: ",
                "updating file version number of file ", fileName, " by 1");

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> updatedValues = new LinkedHashMap<>();
        updatedValues.put(encryptFileVersionNumberColumn + "=" + encryptFileVersionNumberColumn +"+1", null);

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(fileNameColumn, fileName);

        try (
                PreparedStatement updateFileVersionNumberStatement =
                        createUpdateStatement(filesTable, updatedValues, whereParameters, null)
        ) {

            if (updateFileVersionNumberStatement.executeUpdate() != 1)
                returningCode = code_6;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, updateFileVersionNumber, exceptionThrown);
    }

    /**
     * This method updates the permission, signature and signer token of a permission tuple
     * @param updatedPermissionTuple the updated permission tuple
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void updatePermissionInPermissionTuple(PermissionTuple updatedPermissionTuple) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + updatePermissionInPermissionTuple + ")]: ",
                "updating permission tuple ", updatedPermissionTuple.toString());

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> updatedValues = new LinkedHashMap<>();
        updatedValues.put(permissionColumn, updatedPermissionTuple.getAssociatedPermission().toString());
        updatedValues.put(signatureColumn, Base64.getEncoder().encodeToString(updatedPermissionTuple.getSignature()));
        updatedValues.put(userTokenColumn, updatedPermissionTuple.getSignerOfThisTuple());

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(roleNameColumn,  updatedPermissionTuple.getAssociatedElement());
        whereParameters.put(fileNameColumn, updatedPermissionTuple.getAssociatedFile());
        whereParameters.put(permissionTupleFileVersionNumberColumn,  updatedPermissionTuple.getEncryptingKeyVersionNumber());

        try (
                PreparedStatement updatePermissionTupleStatement =
                        createUpdateStatement(permissionTuplesTable, updatedValues, whereParameters, null)
        ) {

            if (updatePermissionTupleStatement.executeUpdate() != 1)
                returningCode = code_11;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, updatePermissionInPermissionTuple, exceptionThrown);
    }

    /**
     * This method updates the content of the file matching the given file name ("write" operation); it
     * - (1) replaces (or uses versioning, if supported) the previous file
     * - (2) updates the file tuple with the new one.
     * If the file didn't exist before, throw exception.
     * Remember that the RM has to check the validity of the new data. This means that:
     *  - the file tuple' signatures shall be correct. This includes also checking that the role that signed the
     *    tuple actually exists and it was not deleted.
     *  - the file version number is actually the latest one;
     *  - the role that signed the file tuple has READ AND WRITE permission over the file
     * @param updatedFile the updated file
     * @param updatedFileTuple the updated file tuple
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    abstract public void updateFile(File updatedFile, FileTuple updatedFileTuple) throws DAOException;

    /**
     * This method downloads the (latest version of) the requested file ("read" operation).
     * @param fileName the name of the file
     * @return the encrypted file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    abstract public InputStream downloadFile(String fileName) throws DAOException;



    /**
     * This method is (and shall be) invoked by the "User" class before using DAO methods, i.e., before
     * starting to interact with the underlying storage system. The idea is to avoid inconsistencies when
     * an error arises.
     * In particular, this method sets the "autocommit" flag to OFF to perform atomic transactions on the
     * database. If the method was already invoked once (and the lock was not already released), further
     * invocations of this method increment the counter and return "true" without doing anything.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void lockDAOInterfaceStatus() throws DAOException {

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + lockDAOInterfaceStatus + ")]: ",
                "setting a lock on database; old number was ", locksOnCloud, ", now is ", (locksOnCloud +1));

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        try {

            if (locksOnCloud == 0) {

                App.logger.info("[{}{}{} ", className, " (" + lockDAOInterfaceStatus + ")]: ",
                        "actually locking the database and creating new SQL connection...");

                if (connection == null || connection.isClosed()) {

                    connection = DriverManager.getConnection(jDBUrl, mySqlProperties);
                    connection.setAutoCommit(false);
                    locksOnCloud = locksOnCloud + 1;
                }
                // else, a lock has been called BUT the connection was not properly closed
                // (e.g. the first method that locked did not called the "unlock" method)
                else {

                    App.logger.error("[{}{}{} ", className, " (" + lockDAOInterfaceStatus + ")]: ",
                            "setting first lock on database unlock method was not invoked. Rollbacking");

                    connection.rollback();
                    connection.close();
                    locksOnCloud = 0;
                    returningCode = code_44;
                }
            }
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, lockDAOInterfaceStatus, exceptionThrown);
    }

    /**
     * This method is (and shall be) invoked by the "User" class after having finished of using DAO methods,
     * i.e., when a sequence of operations on the underlying storage system is finished. This method decrements
     * the lock counter to indicate that the transaction has ended. If the lock counter reaches
     * 0, this method commits the transactions in the database.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void unlockDAOInterfaceStatus() throws DAOException {

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + unlockDAOInterfaceStatus + ")]: ",
                "removing a lock from database; old number was ", locksOnCloud, ", now is ", (locksOnCloud -1));

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        try {

            locksOnCloud = locksOnCloud - 1;

            if (locksOnCloud == 0) {

                App.logger.info("[{}{}{} ", className, " (" + unlockDAOInterfaceStatus + ")]: ",
                        "actually unlocking the database by closing SQL connection...");

                if (connection != null && !connection.isClosed()) {
                    connection.commit();
                    connection.close();
                }
                else {

                    App.logger.warn("[{}{}{} ", className, " (" + unlockDAOInterfaceStatus + ")]: ",
                            "unlocked method called properly but connection was already closed");
                    returningCode = code_44;
                }
            }
            else if (locksOnCloud < 0) {
                App.logger.warn("[{}{}{} ", className, " (" + unlockDAOInterfaceStatus + ")]: ",
                        "unlocked method called  when not necessary");
                locksOnCloud = 0;
            }
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, unlockDAOInterfaceStatus, exceptionThrown);
    }

    /**
     * This method is (and shall be) invoked by the "User" class after the use of a DAO method resulted
     * in an error (e.g., an exception was thrown) and now the storage is in an inconsistent state. This
     * method decrements the lock counter. If the lock counter reaches 0, this method rollbacks the transactions.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void rollback() throws DAOException {

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + rollback + ")]: ",
                "rollbacking and removing a lock from database; old number was ",
                locksOnCloud, ", now is ", (locksOnCloud -1));

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        try {

            locksOnCloud = locksOnCloud - 1;

            if (locksOnCloud == 0) {

                App.logger.info("[{}{}{} ", className, " (" + rollback + ")]: ", "actually rollbacking");

                if (connection != null && !connection.isClosed()) {
                    connection.rollback();
                    connection.close();
                }
                else {
                    App.logger.error("[{}{}{} ", className, " (" + rollback + ")]: ",
                            "rollback method called properly but connection was already closed");
                    returningCode = code_44;
                }
            }
            else if (locksOnCloud < 0) {

                App.logger.warn("[{}{}{} ", className, " (" + rollback + ")]: ",
                        "rollback method called when not necessary");
                locksOnCloud = 0;

            }
        }
        catch (SQLException e) {
            returningCode = code_42;
            exceptionThrown = e;
        }
        logAtEndOfMethod(returningCode, rollback, exceptionThrown);
    }





    // ===== below, you will find new utility methods that are not part of the interface specification =====




    /**
     * Utility method to create a PreparedStatement for the INSERT statement with the given parameters.
     * The only supported parameters now are strings, booleans and integers.
     * @param table the table in which to insert the values
     * @param valuesToInsert values to insert in the given table. Each arrays contains all values for all columns,
     *                       not all the values for a single column, i.e., each array is a row. Note that all
     *                       arrays have to share the same size
     * @return the result set containing the rows matching the given parameters from the given table
     * @throws SQLException if something went wrong in the creation of the SQL statement
     */
    protected PreparedStatement createInsertStatement (@NotNull String table,
                                                       @NotNull ArrayList<ArrayList<Object>> valuesToInsert) throws SQLException {

        // IGNORE because we do not want an exception is a duplicate ID is found. Instead, we count
        // the number of affected rows to understand whether there are duplicates IDs or not.
        StringBuilder insertString = new StringBuilder("INSERT IGNORE INTO " + table + " VALUES ");

        // this is the placeholder string for the values and it will contain
        // a question mark for each value to insert, like "(?,?,?,?),"
        StringBuilder placeHoldersForValues = new StringBuilder("(");

        if (!valuesToInsert.isEmpty()) {
            placeHoldersForValues.append("?,".repeat(valuesToInsert.get(0).size()));
            placeHoldersForValues.delete(placeHoldersForValues.length() - 1, placeHoldersForValues.length()).append("),");
        }

        String placeHolderString = placeHoldersForValues.toString();
        insertString.append(placeHolderString.repeat(valuesToInsert.size()));
        insertString.delete(insertString.length() - 1, insertString.length()).append(";");

        PreparedStatement insertStatement = connection.prepareStatement(insertString.toString());

        // this index expresses where to insert the values in the prepared statement
        int index = 1;

        // TODO can we refactor this to use the insertParametersInPreparedStatement() function?
        for (ArrayList<Object> rowToInsert: valuesToInsert) {

            for (Object value : rowToInsert) {

                if (value == null)
                    insertStatement.setNull(index, java.sql.Types.NULL);

                else {
                    if (value instanceof String)
                        insertStatement.setString(index, (String) value);

                    else if (value instanceof Integer)
                        insertStatement.setInt(index, (Integer) value);

                    else if (value instanceof Boolean)
                        insertStatement.setBoolean(index, (Boolean) value);

                    else if (value instanceof CryptoACActiveElement.CryptoACActiveElementEnum)
                        insertStatement.setString(index, value.toString());
                }
                index++;
            }
        }
        return insertStatement;
    }

    /**
     * Utility method to create a PreparedStatement for the SELECT statement with the given parameters.
     * The only supported parameters now are strings, booleans and integers.
     * @param table the table in which to select the values
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     * @param whereParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to match.
     *                        (LinkedHashMap for predictable iteration order)
     * @param whereNotParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to NOT match.
     *                        (LinkedHashMap for predictable iteration order)
     * @param columnsToSelect the hash set containing the columns to actually select. If null or empty,
     *                        all columns will be selected.
     * @param count if true, select the (distinct) count of records returned by the select query and not the columns.
     *              The columns inside the COUNT() SQL function are those specified in the "columnsToSelect" parameter;
     *              as such, if "count" is "true", "columnsToSelect" can be neither null nor empty.
     * @return the result set containing the rows matching the given parameters from the given table
     * @throws SQLException if something went wrong in the creation of the SQL statement
     */
    protected PreparedStatement createSelectStatement (String table, @NotNull Integer offset, @NotNull Integer limit,
                                                       LinkedHashMap<String, Object> whereParameters,
                                                       LinkedHashMap<String, Object> whereNotParameters,
                                                       HashSet<String> columnsToSelect,
                                                       boolean count) throws SQLException {

        StringBuilder selectString = new StringBuilder("SELECT ");

        whereParameters = whereParameters == null ? new LinkedHashMap<>() : whereParameters;
        whereNotParameters = whereNotParameters == null ? new LinkedHashMap<>() : whereNotParameters;

        if (count)
            selectString.append("COUNT(DISTINCT ");

        if (columnsToSelect != null && !columnsToSelect.isEmpty()) {
            for (String column : columnsToSelect)
                selectString.append(column).append(", ");

            selectString.delete(selectString.length() - 2, selectString.length());
        }
        else if (!count)
            selectString.append(" * ");
        else
            throw new SQLException("count was set true but columnsToSelect was either null or empty");

        if (count)
            selectString.append(")");

        selectString.append(" FROM ").append(table).append(" ");

        selectString.append(createWhereStatement(whereParameters, whereNotParameters));

        // always order by the first column. Actually, we do not need it for
        // ordering, but instead for guaranteeing that pagination works correctly
        // TODO is there a better way?
        selectString.append(" ORDER BY 1");

        if (limit > 0)
            selectString.append(" LIMIT ?,?");

        // we built the string for the preparedStatement.
        // Now, we have to insert the parameters
        PreparedStatement selectStatement = connection.prepareStatement(selectString.toString());

        // this index expresses where to insert the values in the prepared statement
        int index = 1;

        index = insertParametersInPreparedStatement(selectStatement, index, whereParameters);
        index = insertParametersInPreparedStatement(selectStatement, index, whereNotParameters);

        if (limit > 0) {
            selectStatement.setInt(index, offset);
            selectStatement.setInt(index+1, limit);
        }

        return selectStatement;
    }

    /**
     * Utility method to create a PreparedStatement for the DELETE statement with the given parameters.
     * The only supported parameters now are String and Integers.
     * @param table the table to delete from
     * @param whereParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to match
     *                        (LinkedHashMap for predictable iteration order)
     * @return the number of tuples deleted
     * @throws SQLException if something went wrong in the creation of the SQL statement
     */
    protected PreparedStatement createDeleteStatement (String table, LinkedHashMap<String, Object> whereParameters,
                                                       LinkedHashMap<String, Object> whereNotParameters) throws SQLException {

        StringBuilder deleteString = new StringBuilder("DELETE FROM " + table);

        whereParameters = whereParameters == null ? new LinkedHashMap<>() : whereParameters;
        whereNotParameters = whereNotParameters == null ? new LinkedHashMap<>() : whereNotParameters;

        if (!whereParameters.isEmpty() || !whereNotParameters.isEmpty())
            deleteString.append(createWhereStatement(whereParameters, whereNotParameters));

        PreparedStatement deleteStatement = connection.prepareStatement(deleteString.toString());

        // this index expresses where to insert the values in the prepared statement
        int index = 1;

        index = insertParametersInPreparedStatement(deleteStatement, index, whereParameters);
        insertParametersInPreparedStatement(deleteStatement, index, whereNotParameters);

        return deleteStatement;
    }

    /**
     * Utility method to create a PreparedStatement for the UPDATE statement with the given parameters.
     * The only supported parameters now are String and Integers.
     * @param table the table to update the value in
     * @param updateValues map of parameters to update. The key is the name of the column, the object the value.
     *                     If the object is null, the key is assumed to contain the value
     *                     (LinkedHashMap for predictable iteration order)
     * @param whereParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to match
     *                        (LinkedHashMap for predictable iteration order)
     * @return the result set containing the rows matching the given parameters from the given table
     * @throws SQLException if something went wrong in the creation of the SQL statement
     */
    protected PreparedStatement createUpdateStatement (String table, LinkedHashMap<String, Object> updateValues,
                                                       LinkedHashMap<String, Object> whereParameters,
                                                       LinkedHashMap<String, Object> whereNotParameters) throws SQLException {

        StringBuilder updateString = new StringBuilder("UPDATE " + table + " SET ");

        if (!updateValues.isEmpty()) {
            for (Map.Entry<String, Object> entry : updateValues.entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();
                updateString.append(key);
                if (value != null)
                    updateString.append("=?, ");
                else
                    updateString.append(", ");
            }
            updateValues.entrySet().removeIf(e -> (e.getValue() == null));
            updateString.delete(updateString.length() - 2, updateString.length());
        }

        whereParameters = whereParameters == null ? new LinkedHashMap<>() : whereParameters;
        whereNotParameters = whereNotParameters == null ? new LinkedHashMap<>() : whereNotParameters;

        if (!whereParameters.isEmpty() || !whereNotParameters.isEmpty())
            updateString.append(createWhereStatement(whereParameters, whereNotParameters));

        PreparedStatement updateStatement = connection.prepareStatement(updateString.toString());

        // this index expresses where to insert the values in the prepared statement
        int index = 1;

        index = insertParametersInPreparedStatement(updateStatement, index, updateValues);
        index = insertParametersInPreparedStatement(updateStatement, index, whereParameters);
         insertParametersInPreparedStatement(updateStatement, index, whereNotParameters);

        return updateStatement;
    }



    /**
     * This method retrieves role tuples matching the given parameters from either the role tuples table (admin)
     * or from the role tuples view (users) in the database.
     * @param table the table to search in (either the table or the view)
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     * @param whereParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to match
     *                        (LinkedHashMap for predictable iteration order)
     * @return the hash set of the tuples (empty if no row matches the query)
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    protected HashSet<RoleTuple> queryForRoleTuples(String table, @NotNull Integer offset, @NotNull Integer limit,
                                                    LinkedHashMap<String, Object> whereParameters,
                                                    LinkedHashMap<String, Object> whereNotParameters) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + queryForRoleTuples + ")]: ",
                "querying the database for role tuples");

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        whereParameters = whereParameters == null ? new LinkedHashMap<>() : whereParameters;
        whereNotParameters = whereNotParameters == null ? new LinkedHashMap<>() : whereNotParameters;

        HashSet<RoleTuple> requestedRoleTuples = new HashSet<>();

        try (
                PreparedStatement ps = createSelectStatement(table, offset, limit,
                        whereParameters, whereNotParameters, null, false);
                ResultSet rs = ps.executeQuery()
        ) {

            // get the rows resulting from the query. If no entry matches, the following
            // instructions will not be executed, thus the returning value will be an empty hash set
            while (rs.next()) {

                RoleTuple tempRoleTuple = new RoleTuple(
                        escapeString(rs.getString(usernameColumn)),
                        escapeString(rs.getString(roleNameColumn)),
                        new EncryptedPKCKeyPair()
                                .setEncryptedPublicKey(Base64.getDecoder().decode(
                                        escapeString(rs.getString(encryptedRolePublicEncryptingKeyColumn))))
                                .setEncryptedPrivateKey(Base64.getDecoder().decode(
                                        escapeString(rs.getString(encryptedRolePrivateEncryptingKeyColumn)))),
                        new EncryptedPKCKeyPair()
                                .setEncryptedPublicKey(Base64.getDecoder().decode(
                                        escapeString(rs.getString(encryptedRolePublicSigningKeyColumn))))
                                .setEncryptedPrivateKey(Base64.getDecoder().decode(
                                        escapeString(rs.getString(encryptedRolePrivateSigningKeyColumn)))),
                        rs.getInt(roleVersionNumberColumn),
                        Base64.getDecoder().decode(escapeString(rs.getString(signatureColumn))),
                        App.admin);

                requestedRoleTuples.add(tempRoleTuple);
            }
        }
        catch (SQLException e) {
            exceptionThrown = e;
            returningCode = code_58;
        }

        logAtEndOfMethod(returningCode, queryForRoleTuples, exceptionThrown);
        return requestedRoleTuples;
    }

    /**
     * This method retrieves permission tuples matching the given parameters from either the permission tuples
     * table (admin) or from the permission tuples view (users) in the database.
     * @param table the table to search in (either the table or the view)
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     * @param whereParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to match.
     *                        (LinkedHashMap for predictable iteration order)
     * @param whereNotParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to NOT match.
     *                        (LinkedHashMap for predictable iteration order)
     * @return the hash set of the tuples (empty if no row matches the query)
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    protected HashSet<PermissionTuple> queryForPermissionTuples (String table, @NotNull Integer offset, @NotNull Integer limit,
                                                                 LinkedHashMap<String, Object> whereParameters,
                                                                 LinkedHashMap<String, Object> whereNotParameters) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + queryForPermissionTuples + ")]: ",
                "querying the database for permission tuples");

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        HashSet<PermissionTuple> requestedPermissionTuples = new HashSet<>();

        try (
                PreparedStatement ps = createSelectStatement(table, offset, limit,
                        whereParameters, whereNotParameters, null, false);
                ResultSet rs = ps.executeQuery()
        ) {

            // get the rows resulting from the query. If no entry matches, the following
            // instructions will not be executed, thus the returning value will be an empty hash set
            while (rs.next()) {

                PermissionTuple tempPermissionTuple = new PermissionTuple(
                        escapeString(rs.getString(roleNameColumn)),
                        rs.getInt(roleVersionNumberColumn),
                        escapeString(rs.getString(fileNameColumn)),
                        Permission.valueOf(escapeString(rs.getString(permissionColumn))),
                        rs.getInt(permissionTupleFileVersionNumberColumn),
                        Base64.getDecoder().decode(escapeString(rs.getString(encryptedSymmetricFileKeyColumn))),
                        escapeString(rs.getString(roleTokenColumn)),
                        escapeString(rs.getString(fileTokenColumn)),
                        Base64.getDecoder().decode(escapeString(rs.getString(signatureColumn))),
                        escapeString(rs.getString(userTokenColumn)));

                requestedPermissionTuples.add(tempPermissionTuple);
            }
        }
        catch (SQLException e) {
            exceptionThrown = e;
            returningCode = code_58;
        }

        logAtEndOfMethod(returningCode, queryForPermissionTuples, exceptionThrown);
        return requestedPermissionTuples;
    }

    /**
     * This method retrieves file tuples matching the given parameters from either the file tuples table (admin)
     * or from the file tuples view (users) in the database.
     * @param table the table to search in (either the table or the view)
     * @param offset the offset in number of users to start selecting from.
     *               If negative, the parameter will be ignored.
     * @param limit limit the number of users to return.
     *               If negative, the parameter will be ignored.
     * @param whereParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to match. If the object is wrapped
     *                        in an Object[], the condition will be NOT to match (<>)
     *                        (LinkedHashMap for predictable iteration order)
     * @return the hash set of the tuples (empty if no row matches the query)
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    protected HashSet<FileTuple> queryForFileTuples (String table, @NotNull Integer offset, @NotNull Integer limit,
                                                     LinkedHashMap<String, Object> whereParameters) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + queryForFileTuples + ")]: ", "querying the database for file tuples with parameters " + whereParameters.toString());

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        HashSet<FileTuple> requestedFileTuples = new HashSet<>();

        try (
                PreparedStatement ps = createSelectStatement(table, offset, limit,
                        whereParameters, null, null, false);
                ResultSet rs = ps.executeQuery()
        ) {

            // get the rows resulting from the query. If no entry matches, the following
            // instructions will not be executed, thus the returning value will be an empty hash set
            while (rs.next()) {

                CryptoACActiveElement.CryptoACActiveElementEnum elementSigner =
                        CryptoACActiveElement.CryptoACActiveElementEnum.get(rs.getString(elementSignerColumn));
                String elementToken = escapeString(rs.getString(elementTokenColumn));

                FileTuple tempFileTuple = new FileTuple(
                        escapeString(rs.getString(fileNameColumn)),
                        escapeString(rs.getString(fileTokenColumn)),
                        rs.getInt(decryptFileVersionNumberColumn),
                        elementSigner,
                        Base64.getDecoder().decode(escapeString(rs.getString(signatureColumn))),
                        elementToken,
                        AccessControlEnforcement.get(escapeString(rs.getString(accessControlEnforcementColumn))));

                requestedFileTuples.add(tempFileTuple);
            }
        }
        catch (SQLException e) {

            exceptionThrown = e;
            returningCode = code_58;
        }

        logAtEndOfMethod(returningCode, queryForFileTuples, exceptionThrown);
        return requestedFileTuples;
    }




    /**
     * This method retrieves the version number of the given element, either role or file.
     * Note that only operational elements are considered.
     * @param id the ID (either token or name) of the element
     * @param tableToSearchIn table to search in (either "roles" or "files")
     * @param columnToMatchWithID which column has to match the given ID?
     * @param columnToSelect select the role or file version number
     * @param codeIfNotPresent code to return if the element is not present
     * @return the role or file version number. Only operational elements are considered.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    protected int getVersionNumberOfCryptoACElement (String id, String tableToSearchIn, String columnToMatchWithID,
                                                     String columnToSelect, OperationOutcomeCode codeIfNotPresent) throws DAOException {

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + getVersionNumberOfElement + ")]: ",
                "getting version number from table ", tableToSearchIn, " with ID ", id);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(columnToMatchWithID, id);
        whereParameters.put(statusFlagColumn, operational.getValue());

        int requestedVersionNumber = -1;

        HashSet<String> columnsToSelect = new HashSet<>();
        columnsToSelect.add(columnToSelect);

        try (
                PreparedStatement getVersionNumberStatement = createSelectStatement(tableToSearchIn,
                        0, 1, whereParameters, null, columnsToSelect, false);
                ResultSet rs = getVersionNumberStatement.executeQuery()
        ) {

            if (!rs.isBeforeFirst())
                returningCode = codeIfNotPresent;
            else {
                rs.next();
                requestedVersionNumber = rs.getInt(columnToSelect);
            }
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, getVersionNumberOfElement, exceptionThrown);
        return requestedVersionNumber;
    }

    /**
     * This method retrieves the version number of the given element, either role or file.
     * Note that only operational elements are considered.
     * @param name the name of the element
     * @param tableToSearchIn table to search in
     * @param columnToMatchWithToken which column has to match the given name?
     * @param columnToSelect select the token column to return
     * @param codeIfNotPresent code to return if the element is not present
     * @return the token of the element, if any. Only operational elements are considered.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    protected String getTokenOfCryptoACElement (String name, String tableToSearchIn, String columnToMatchWithToken,
                                                     String columnToSelect, OperationOutcomeCode codeIfNotPresent) throws DAOException {

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + getVersionNumberOfElement + ")]: ",
                "getting token from table ", tableToSearchIn, " with name ", name);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(columnToMatchWithToken, name);
        whereParameters.put(statusFlagColumn, operational.getValue());

        String requestedToken = null;

        HashSet<String> columnsToSelect = new HashSet<>();
        columnsToSelect.add(columnToSelect);

        try (
                PreparedStatement getVersionNumberStatement = createSelectStatement(tableToSearchIn,
                        0, 1, whereParameters, null, columnsToSelect, false);
                ResultSet rs = getVersionNumberStatement.executeQuery()
        ) {

            if (!rs.isBeforeFirst())
                returningCode = codeIfNotPresent;
            else {
                rs.next();
                requestedToken = rs.getString(columnToSelect);
            }
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, getVersionNumberOfElement, exceptionThrown);
        return requestedToken;
    }



    /**
     * This method retrieves the public key of the given CryptoAC active element.
     * Note that only operational or deleted elements are considered.
     * @param id the ID (either token or name) of the element
     * @param tableToSearchIn table to search in (either "users" or "roles")
     * @param columnToSearchIn is the given ID the token or the name of the element?
     * @param columnToSelect select either the encrypting or the signing key
     * @param codeIfNotPresent code to return if the element is not present
     * @return the public key of the element. only operational or deleted elements are considered.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    protected PublicKey getPublicKeyOfCryptoACActiveElement(String id, String tableToSearchIn, String columnToSearchIn,
                                                            String columnToSelect, OperationOutcomeCode codeIfNotPresent) throws DAOException {

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + getPublicKeyOfCryptoACActiveElement + ")]: ",
                "getting public key from table ", tableToSearchIn, " with ID ", id);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        PublicKey publicKeyToReturn = null;

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(columnToSearchIn, id);

        HashSet<String> columnsToSelect = new HashSet<>();
        columnsToSelect.add(columnToSelect);
        columnsToSelect.add(statusFlagColumn);

        try (
                PreparedStatement getPublicKeyStatement = createSelectStatement(
                        tableToSearchIn, 0, 1, whereParameters, null, columnsToSelect, false);
                ResultSet rs = getPublicKeyStatement.executeQuery()
        ) {

            if (!rs.isBeforeFirst())
                returningCode = codeIfNotPresent;
            else {

                while (rs.next()) {

                    CryptoACElementStatus status = CryptoACElementStatus.get(rs.getString(statusFlagColumn));

                    if (status == incomplete)
                        returningCode = code_57;
                    else if (status == deleted) {
                        if (tableToSearchIn.equals(usersTable))
                            returningCode = code_55;
                        else
                            returningCode = code_56;
                    } else {

                        byte[] publicKeyAsBytes = Base64.getDecoder().decode(escapeString(rs.getString(columnToSelect)));
                        KeyFactory kf = KeyFactory.getInstance(CryptoUtil.getPKCAlgorithm());
                        publicKeyToReturn = kf.generatePublic(new X509EncodedKeySpec(publicKeyAsBytes));
                    }
                }
            }
        }
        // exception thrown when building back the key
        catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
            returningCode = code_18;
            exceptionThrown = e;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, getPublicKeyOfCryptoACActiveElement, exceptionThrown);
        return publicKeyToReturn;
    }



    /**
     * This method checks the status of the given CryptoAC element in the database.
     * @param id the ID of the element, either name or token
     * @param element the element to check
     * @param isToken true if the ID is the token, false if the ID is the name
     * @return the flag of the element
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    protected CryptoACElementStatus checkStatusOfCryptoACElement(String id, CryptoACElement.CryptoACElementEnum element,
                                                                 boolean isToken) throws DAOException {

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        String tableToSearchIn;
        String columnToMatchID;

        CryptoACElementStatus elementFlag = null;
        OperationOutcomeCode codeToThrowIfElementDoesNotExist;

        if (element == CryptoACElement.CryptoACElementEnum.User) {

            if (isToken)
                columnToMatchID = userTokenColumn;
            else
                columnToMatchID = usernameColumn;

            tableToSearchIn = usersTable;
            codeToThrowIfElementDoesNotExist = code_4;
        }
        else if (element == CryptoACElement.CryptoACElementEnum.Role) {

            if (isToken)
                columnToMatchID = roleTokenColumn;
            else
                columnToMatchID = roleNameColumn;

            tableToSearchIn = rolesTable;
            codeToThrowIfElementDoesNotExist = code_5;
        }
        else if (element == CryptoACElement.CryptoACElementEnum.File) {

                if (isToken)
                    columnToMatchID = fileTokenColumn;
                else
                    columnToMatchID = fileNameColumn;

            tableToSearchIn = filesTable;
            codeToThrowIfElementDoesNotExist = code_6;
        }
        else
            throw new DAOException(new Throwable(code_70.toString()), code_70);


        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(columnToMatchID, id);

        HashSet<String> columnsToSelect = new HashSet<>();
        columnsToSelect.add(statusFlagColumn);

        try (
                PreparedStatement hasTheFlagStatement = createSelectStatement(
                        tableToSearchIn, 0, 1, whereParameters, null, columnsToSelect, false);

                ResultSet result = hasTheFlagStatement.executeQuery()
        ) {

            // if the element actually exists
            if (result.isBeforeFirst()) {
                result.next();
                elementFlag = CryptoACElementStatus.get(result.getString(statusFlagColumn));
            }
            else
                returningCode = codeToThrowIfElementDoesNotExist;
        }
        catch (SQLException e) {
            returningCode = code_58;
            exceptionThrown = e;
        }

        logAtEndOfMethod(returningCode, checkStatusOfCryptoACActiveElement, exceptionThrown);
        return elementFlag;
    }



    /**
     * Utility method to group together a common functionality, i.e., to check whether the user and the role
     * involved in a role tuple exist and were not deleted (so this method returns the role tuple as an array to
     * be inserted in the database) or not (so this method throw a DAOException).
     * @param newRoleTuple the role tuple of which to check user and role
     * @return the role tuple as an array to be inserted in the database, if both user and role exist
     * and were not deleted
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    private ArrayList<Object> checkIfUserAndRoleExistAndCreateArray (@NotNull RoleTuple newRoleTuple)
            throws DAOException {

        OperationOutcomeCode returningCode = code_0;
        ArrayList<Object> roleTupleAsArray = new ArrayList<>();

        String username = newRoleTuple.getAssociatedElement();
        String roleName = newRoleTuple.getAssociatedRole();

        // check that the user and the role exist and are not deleted
        CryptoACElementStatus userFlag = checkStatusOfCryptoACElement(username,
                CryptoACElement.CryptoACElementEnum.User, false);
        CryptoACElementStatus roleFlag = checkStatusOfCryptoACElement(roleName,
                CryptoACElement.CryptoACElementEnum.Role, false);

        if (userFlag == deleted)
            returningCode = code_55;

        else if (userFlag == incomplete)
            returningCode = code_57;

        else if(roleFlag == deleted)
            returningCode = code_56;

        else {
            roleTupleAsArray.add(username);
            roleTupleAsArray.add(roleName);
            roleTupleAsArray.add(newRoleTuple.getRoleVersionNumber());
            roleTupleAsArray.add(Base64.getEncoder().encodeToString(newRoleTuple.getEncryptedEncryptingRoleKeys().getEncryptedPublicKey()));
            roleTupleAsArray.add(Base64.getEncoder().encodeToString(newRoleTuple.getEncryptedEncryptingRoleKeys().getEncryptedPrivateKey()));
            roleTupleAsArray.add(Base64.getEncoder().encodeToString(newRoleTuple.getEncryptedSigningRoleKeys().getEncryptedPublicKey()));
            roleTupleAsArray.add(Base64.getEncoder().encodeToString(newRoleTuple.getEncryptedSigningRoleKeys().getEncryptedPrivateKey()));
            roleTupleAsArray.add(Base64.getEncoder().encodeToString(newRoleTuple.getSignature()));
        }

        logAtEndOfMethod(returningCode, addRoleTuple, null);
        return roleTupleAsArray;
    }


    /**
     * Utility method to group together a common functionality, i.e., to check whether the role and the file
     * involved in a permission tuple exist and were not deleted (so this method returns the permission tuple
     * as an array to be inserted in the database) or not (so this method throw a DAOException).
     * @param newPermissionTuple the permission tuple of which to check role and file
     * @return the permission tuple as an array to be inserted in the database, if both role and file exist
     * and were not deleted
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    private ArrayList<Object> checkIfRoleAndFileExistAndCreateArray (@NotNull PermissionTuple newPermissionTuple)
            throws DAOException {

        OperationOutcomeCode returningCode = code_0;
        ArrayList<Object> permissionTupleAsArray = new ArrayList<>();

        String roleName = newPermissionTuple.getAssociatedElement();
        String fileName = newPermissionTuple.getAssociatedFile();

        // check that the role and the file exist and are not deleted
        CryptoACElementStatus roleFlag = checkStatusOfCryptoACElement(roleName,
                CryptoACElement.CryptoACElementEnum.Role, false);
        CryptoACElementStatus fileFlag = checkStatusOfCryptoACElement(fileName,
                CryptoACElement.CryptoACElementEnum.File, false);

        if (roleFlag == deleted)
            returningCode = code_56;

        else if (fileFlag == deleted)
            returningCode = code_6;

        else {
            permissionTupleAsArray.add(roleName);
            permissionTupleAsArray.add(newPermissionTuple.getAssociatedFile());
            permissionTupleAsArray.add(newPermissionTuple.getEncryptingKeyVersionNumber());
            permissionTupleAsArray.add(newPermissionTuple.getRoleToken());
            permissionTupleAsArray.add(newPermissionTuple.getFileToken());
            permissionTupleAsArray.add(newPermissionTuple.getRoleVersionNumber());
            permissionTupleAsArray.add(Base64.getEncoder().encodeToString(newPermissionTuple.getEncryptedSymmetricFileKey()));
            permissionTupleAsArray.add(newPermissionTuple.getAssociatedPermission().toString());
            permissionTupleAsArray.add(newPermissionTuple.getSignerOfThisTuple());
            permissionTupleAsArray.add(Base64.getEncoder().encodeToString(newPermissionTuple.getSignature()));
        }

        logAtEndOfMethod(returningCode, addPermissionTuple, null);
        return permissionTupleAsArray;
    }


    /**
     * Utility method to group together a common functionality, i.e., to check whether the file
     * involved in a file tuple exists and was not deleted (so this method returns the file tuple
     * as an array to be inserted in the MS) or not (so this method throw a DAOException).
     * @param newFileTuple the file tuple of which to check file
     * @return the file tuple as an array to be inserted in the database, if the file exists
     * and was not deleted
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    private ArrayList<Object> checkIfFileExistsAndCreateArray (@NotNull FileTuple newFileTuple)
            throws DAOException {

        OperationOutcomeCode returningCode = code_0;
        ArrayList<Object> fileTupleAsArray = new ArrayList<>();

        String fileName = newFileTuple.getAssociatedElement();

        // check that the file exists and are not deleted
        CryptoACElementStatus fileFlag = checkStatusOfCryptoACElement(fileName,
                CryptoACElement.CryptoACElementEnum.File, false);

        if (fileFlag == deleted)
            returningCode = code_6;
        else {
            fileTupleAsArray.add(fileName);
            fileTupleAsArray.add(newFileTuple.getFileToken());
            fileTupleAsArray.add(newFileTuple.getSignerOfThisTuple());
            fileTupleAsArray.add(newFileTuple.getElementSigner());
            fileTupleAsArray.add(newFileTuple.getDecryptingKeyVersionNumber());
            fileTupleAsArray.add(newFileTuple.getAccessControlEnforcement().toString());
            fileTupleAsArray.add(Base64.getEncoder().encodeToString(newFileTuple.getSignature()));
        }

        logAtEndOfMethod(returningCode, addFileTuple, null);
        return fileTupleAsArray;
    }





    /**
     * Utility method to group together a common functionality,
     * i.e., to create a where statement from a list parameters.
     * @param whereParameters parameters that has to match
     * @param whereNotParameters parameters that has to NOT match
     * @return the string representing the where statement
     */
    protected String createWhereStatement(@NotNull LinkedHashMap<String, Object> whereParameters,
                                          @NotNull LinkedHashMap<String, Object> whereNotParameters) {

        StringBuilder whereStatement = new StringBuilder();

        if (!whereParameters.isEmpty() || !whereNotParameters.isEmpty()) {

            whereStatement.append(" WHERE ");

            for (Map.Entry<String, Object> entry : whereParameters.entrySet()) {

                String key = entry.getKey();
                Object value = entry.getValue();

                if (value != null) {
                    whereStatement.append("(").append(key);
                    whereStatement.append("=?) AND ");
                }
            }

            for (Map.Entry<String, Object> entry : whereNotParameters.entrySet()) {

                String key = entry.getKey();
                Object value = entry.getValue();

                if (value != null) {

                    whereStatement.append("(").append(key);
                    whereStatement.append("<>?) AND ");
                }
            }

            // remove the last "AND"
            whereStatement.delete(whereStatement.length() - 4, whereStatement.length());
        }

        return whereStatement.toString();
    }


    /**
     * Utility method to group together a common functionality,
     * i.e., to insert the parameters in a statement.
     * @param statement the prepared statement in which to insert the parameters
     * @param index the index of the prepared statement in which insert the parameters
     * @param params the parameters to insert in the prepared statement
     * @return the new index
     * @throws SQLException when inserting a parameters in the prepared statement
     */
    protected int insertParametersInPreparedStatement(@NotNull  PreparedStatement statement, int index,
                                                      @NotNull  LinkedHashMap<String, Object> params) throws SQLException {

        for (Object value: params.values()) {

            if (value instanceof String)
                statement.setString(index, (String) value);

            else if (value instanceof Integer)
                statement.setInt(index, (Integer) value);

            else if (value instanceof Boolean)
                statement.setBoolean(index, (Boolean) value);
            index++;
        }

        return index;
    }


    /**
     * This method counts the (distinct) rows in the given table filtering with the given parameters.
     * @param table the table in which to count the values
     * @param whereParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to match.
     *                        (LinkedHashMap for predictable iteration order)
     * @param whereNotParameters map of parameters to filter by in the WHERE clause. The
     *                        key is the name of the column, the object the value to NOT match.
     *                        (LinkedHashMap for predictable iteration order)
     * @param columnsToSelect the hash set containing the columns to actually select. It can be neither
     *                        null nor empty
     * @return the count of rows in the given table filtered with the given parameters.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    protected int countRowsInTable(String table, LinkedHashMap<String, Object> whereParameters,
                                   LinkedHashMap<String, Object> whereNotParameters,
                                   @NotNull HashSet<String> columnsToSelect) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + countRowsInTable + ")]: ",
                "counting rows in table ", table);

        int countOfRows = 0;

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        try (
                PreparedStatement ps = createSelectStatement(table, -1, -1,
                        whereParameters, whereNotParameters, columnsToSelect, true);
                ResultSet rs = ps.executeQuery()
        ) {
            if (rs.next()) {

                // remember that columns are indexed starting from '1' and not from '0'
                countOfRows = rs.getInt(1);
            }
            else {
                throw new SQLException("Query was executed but resultSet is empty");
            }
        }
        catch (SQLException e) {
            exceptionThrown = e;
            returningCode = code_58;
        }

        logAtEndOfMethod(returningCode, countRowsInTable, exceptionThrown);
        return countOfRows;
    }



    /**
     * This method wraps the common code at the end of the methods interacting with the database.
     * @param code code to log
     * @param methodName name of the method invoking this method
     * @param e eventual exception to print
     * @throws DAOException eventual DAOException to print if the operation outcome code is not 0
     */
    protected static void logAtEndOfMethod(OperationOutcomeCode code, String methodName, Exception e) 
            throws DAOException {

        if (code != code_0) {
            App.logger.error("[{}{}{} ", className, " (" + methodName + ")]: ",
                    code.toString(), e);
            throw new DAOException(e, code);
        }
    }

    /**
     * This method escape HTML characters from the given string
     * @param stringToEscape the string to escape
     * @return the escaped string
     */
    protected static String escapeString(String stringToEscape) {
        return Encode.forHtml(stringToEscape);
    }

}