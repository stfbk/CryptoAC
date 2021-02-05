package eu.fbk.st.cryptoac.util;

import spark.route.HttpMethod;

import java.util.HashMap;

import static eu.fbk.st.cryptoac.util.Const.FormParameters.*;

/**
 * This class contains constant values used thorough the application group with inner classes.
 *
 * Note: the values in this class are (almost all) given to the Apache Velocity Engine to render HTML
 * templates. This means that the Apache Velocity Engine has placeholders like "$FormParameters.kUserLoggingIn"
 * and automatically converts the placeholder to the actual value of the "kUserLoggingIn" constant. It also
 * means that, IF YOU CHANGE the name of a constant here, YOU HAVE TO change the placeholders in the HTML templates.
 */
public class Const {

    /**
     * This class contains constant values used by the server, such as
     * internal paths for saving temporary files and users' profiles.
     */
    public static class Server {

        /**
         * (DS mode) The path of the folder in which the DS stores uploaded files.
         */
        public static final String kUploadDirectoryDSPath = "server/ds/upload";

        /**
         * (DS mode) The path of the folder in which the DS stores files that users can download.
         */
        public static final String kDownloadDirectoryDSPath = "server/ds/download";


        /**
         * (proxy mode) The path of the folder in which public files (e.g., js, css, images) are stored.
         */
        public static final String kStaticFilesProxyPath = "/server/proxy/public";

        /**
         * (proxy mode) The path of the folder where the proxy stores users' configuration data.
         */
        public static final String kUsersDataDirectoryProxyPath = "server/proxy/upload";

        /**
         * (proxy mode) The path of the folder where the proxy stores temporary files uploaded by users.
         */
        public static final String kTemporaryDirectoryProxyPath = "server/proxy/tmp";

        /**
         * (any mode) The system property that defines the name of the log file.
         */
        public static final String kLogBackFileNameSysProperty = "logback.logFile.Name";

        /**
         * (any mode) The system property that defines the path of the XML configuration file.
         */
        public static final String kLogBackConfigFilePathSysProperty = "logback.configurationFile";

        /**
         * (any mode) The path to the logback configuration file that redirects logs to a log file.
         */
        public static final String kLogBackConfigFileToFilePath = "logbackFile.xml";

        /**
         * (any mode) The path to the logback configuration file that redirects logs to the standard output
         */
        public static final String kLogBackConfigFileToConsolePath = "logbackConsole.xml";

        /**
         * (proxy mode) The path to the login HTML template.
         */
        public static final String kHTMLTemplateLogin = "/server/velocity/login.vm";

        /**
         * (proxy mode) The path to the error HTML template.
         */
        public static final String kHTMLTemplateError = "/server/velocity/error.vm";

        /**
         * (proxy mode) The path to the index HTML template.
         */
        public static final String kHTMLTemplateIndex = "/server/velocity/base.vm";
    }

    /**
     * This class contains keys to insert other constant values used by the Apache Velocity Engine.
     * In practice, this class has a field for each class whose parameters need to be given to the
     * Apache Velocity Engine.
     */
    public static class Apache {

        /**
         * constant values used keys of values in maps when rendering HTML templates.
         */
        public static final String kMapKeys = "MapKeys";

        /**
         * constant values used as parameter keys in HTML forms when rendering HTML templates.
         */
        public static final String kFormParameters = "FormParameters";

        /**
         * constant values for the DAO interface used as
         * parameter keys in HTML forms when rendering HTML templates.
         */
        public static final String kDAOInterfaceParameters = "DAOInterfaceParameters";

        /**
         * constant values for the DAO Local interface used as
         * parameter keys in HTML forms when rendering HTML templates.
         */
        public static final String kDAOInterfaceLocalParameters = "DAOInterfaceLocalParameters";

        /**
         * constant values for the DAO MySQL interface used as
         * parameter keys in HTML forms when rendering HTML templates.
         */
        public static final String kDAOInterfaceMySQLParameters = "DAOInterfaceMySQLParameters";

        /**
         * constant values for the DAO AWS interface used as
         * parameter keys in HTML forms when rendering HTML templates.
         */
        public static final String kDAOInterfaceAWSParameters = "DAOInterfaceAWSParameters";

        /**
         * possible routes, i.e., API endpoints, when rendering HTML templates.
         */
        public static final String kAPI = "API";
    }

    /**
     * This class contains the keys of values put in the HTTP session object.
     */
    public static class SessionKeys {

        /**
         * the data of the logged user.
         */
        public static final String kDataOfUserLoggedIn = "dataOfUserLoggedIn";

        /**
         * the name of the logged user in the server.
         */
        public static final String kCurrentlyLoggedUser = "Currently_Logged_User";

        /**
         * key for the flag of whether the user logged out.
         */
        public static final String kLoggedOut = "Logged_Out";
    }

    /**
     * This class contains constant values used as parameter keys in HTML forms.
     */
    public static class FormParameters {

        /**
         * the name of the user logging in the server
         */
        public static final String kUserLoggingIn = "User";

        /**
         * the name of the user of which information (e.g., profile) is requested.
         */
        public static final String kRequestedUserInServer = "Requested_User";

        /**
         * the password the user uses to log in the server
         */
        public static final String kPasswordOfUserLoggingIn = "Password";

        /**
         * the chosen underlying storage system for CryptoAC.
         */
        public static final String kDAO = "Storage_Solution";

        /**
         * the name of the user in CryptoAC.
         */
        public static final String kUsernameInCryptoAC = DAOInterfaceParameters.kUsernameInCryptoAC;

        /**
         * the name of the role in CryptoAC.
         */
        public static final String kRoleNameInCryptoAC = "Role_Name";

        /**
         * the name of the file in CryptoAC.
         */
        public static final String kFileNameInCryptoAC = "File_Name";

        /**
         * the role version number in CryptoAC.
         */
        public static final String kRoleVersionNumberInCryptoAC = "Role_Version_Number";

        /**
         * the file version number in CryptoAC.
         */
        public static final String kFileVersionNumberInCryptoAC = "File_Version_Number";

        /**
         * the file itself in CryptoAC.
         */
        public static final String kFileInCryptoAC = "File";

        /**
         * the permission to give or revoke in CryptoAC.
         */
        public static final String kPermissionInCryptoAC = "Permission";

        /**
         * the offset in the number of CryptoACElements (i.e., users, roles and files) or tuples
         * (role, permission and file tuples) to retrieve from the metadata in CryptoAC.
         */
        public static final String kOffsetInCryptoAC = "Offset";

        /**
         * the maximum number of CryptoACElements (i.e., users, roles and files) or tuples
         * (role, permission and file tuples) to retrieve from the metadata in CryptoAC.
         */
        public static final String kLimitInCryptoAC = "Limit";

        /**
         * the access control enforcement level chosen by the user for a new file.
         */
        public static final String kAccessControlEnforcement = "Access_Control_Enforcement";
    }


    /**
     * This class contains constant values used as parameter keys for the DAO interface.
     * These values should always correspond to the name of the fields of the DAOInterfaceParameters class
     */
    public static class DAOInterfaceParameters {

        /**
         * the flag for whether the user is an admin or not.
         */
        public static final String kIsAdminInCryptoAC = "isAdminInCryptoAC";

        /**
         * the name of the user in CryptoAC.
         */
        public static final String kUsernameInCryptoAC = "usernameInCryptoAC";

        /**
         * the encrypting public key of the user.
         */
        public static final String kEncryptingPublicKey = "encryptingPublicKey";

        /**
         * the encrypting private key of the user.
         */
        public static final String kEncryptingPrivateKey = "encryptingPrivateKey";

        /**
         * the signing public key of the user.
         */
        public static final String kSigningPublicKey = "signingPublicKey";

        /**
         * the signing private key of the user.
         */
        public static final String kSigningPrivateKey = "signingPrivateKey";
    }

    /**
     * This class contains constant values used as parameter keys for the MySQL DAO interface.
     * These values should always correspond to the name of the fields of the DAOInterfaceMySQLParameters class
     */
    public static class DAOInterfaceMySQLParameters {

        /**
         * the password of the user for the database.
         */
        public static final String kMySQLDatabasePassword = "mySQLDatabasePassword";

        /**
         * the url of the database.
         */
        public static final String kMySQLDatabaseURL = "mySQLDatabaseURL";

        /**
         * the port of the database.
         */
        public static final String kMySQLDatabasePort = "mySQLDatabasePort";
    }

    /**
     * This class contains constant values used as parameter keys for the AWS DAO interface.
     * These values should always correspond to the name of the fields of the DAOInterfaceAWSParameters class
     */
    public static class DAOInterfaceAWSParameters {

        /**
         * the AWS S3 region.
         */
        public static final String kAWSS3Region = "awsS3Region";

        /**
         * the name of the AWS upload bucket in S3.
         */
        public static final String kAWSS3BucketUpload = "awsS3BucketUpload";

        /**
         * the name of the AWS download bucket in S3.
         */
        public static final String kAWSS3BucketDownload = "awsS3BucketDownload";

        /**
         * the user's AWS access key.
         */
        public static final String kAWSAccessKey = "awsAccessKey";

        /**
         * the user's AWS secret key.
         */
        public static final String kAWSSecretKey = "awsSecretKey";
    }

    /**
     * This class contains constant values used as parameter keys for the Local DAO interface.
     * These values should always correspond to the name of the fields of the DAOInterfaceLocalParameters class.
     */
    public static class DAOInterfaceLocalParameters {

        /**
         * the url of the RM.
         */
        public static final String kLocalRMURL  = "rmURL";

        /**
         * the port of the RM.
         */
        public static final String kLocalRMPort = "rmPort";

        /**
         * the url of the DS.
         */
        public static final String kLocalDSURL  = "dsURL";

        /**
         * the port of the DS.
         */
        public static final String kLocalDSPort = "dsPort";

        /**
         * the url of the OPA server.
         */
        public static final String kLocalOPAURL  = "opaURL";

        /**
         * the port of the OPA server.
         */
        public static final String kLocalOPAPort = "opaPort";
    }


    /**
     * This class contains the available APIs that can be invoked in CryptoAC.
     * Required parameters are rendered as path parameters.
     * Optional parameters are rendered as query parameters.
     */
    public static class API {

        /**
         * (any mode) the v1 of the APIs.
         */
        private static final String version1 = "/v1/";

        /**
         * (any mode) the current version of the APIs.
         */
        public static final String currentVersion  = version1;

        /**
         * (proxy mode) base url for proxy APIs.
         */
        public static final String BASEPROXY = currentVersion + "proxy/";

        /**
         * (rm mode) base url for rm APIs.
         */
        public static final String BASERM    = currentVersion + "rm/";

        /**
         * (ds mode) base url for ds APIs.
         */
        public static final String BASEDS    = currentVersion + "ds/";

        /**
         * (OPA) base url for OPA APIs.
         */
        public static final String BASEOPA   = "/v1/";

        /**
         * (proxy  mode) base url for users' profile, which stores values like configuration parameters
         * for the DAO and cryptographic keys. Note that the BASEPROFILES API path does not include
         * BASEPROXY, as APIs after BASEPROXY are protected
         */
        public static final String BASEPROFILES    = currentVersion + "profile/";

        /**
         * (proxy mode) base url for user related APIs with respect to a specific DAO.
         */
        public static final String BASEUSERS       = BASEPROXY + "users/:" + kDAO + "/";

        /**
         * (proxy mode) base url for role related APIs with respect to a specific DAO.
         */
        public static final String BASEROLES       = BASEPROXY + "roles/:" + kDAO + "/";

        /**
         * (proxy mode) base url for file related APIs with respect to a specific DAO.
         */
        public static final String BASEFILES       = BASEPROXY + "files/:" + kDAO + "/";

        /**
         * (proxy mode) base url for role tuple related APIs with respect to a specific DAO.
         */
        public static final String BASEASSIGNMENTS = BASEPROXY + "assignments/:" + kDAO + "/";

        /**
         * (proxy mode) base url for file tuple related APIs with respect to a specific DAO.
         */
        public static final String BASEPERMISSIONS = BASEPROXY + "permissions/:" + kDAO + "/";



        /**
         * (proxy mode) API for getting the list of users (admin only).
         */
        public static final String GETUSERS     = BASEUSERS;

        /**
         * (proxy mode) API for creating a new user (admin only).
         */
        public static final String POSTUSER     = BASEUSERS;

        /**
         * (proxy mode) API for deleting a user (admin only).
         */
        public static final String DELETEUSER   = BASEUSERS + ":" + kUsernameInCryptoAC + "/";


        /**
         * (proxy mode) API for getting the list of roles (admin only).
         */
        public static final String GETROLES     = BASEROLES;

        /**
         * (proxy mode) API for creating a new role (admin only).
         */
        public static final String POSTROLE     = BASEROLES;

        /**
         * (proxy mode) API for deleting a role (admin only).
         */
        public static final String DELETEROLE   = BASEROLES + ":" + kRoleNameInCryptoAC + "/";


        /**
         * (proxy mode) API for downloading a file.
         */
        public static final String GETFILE      = BASEFILES + ":" + kFileNameInCryptoAC + "/";

        /**
         * (proxy mode) API for getting the list of files (admin only).
         */
        public static final String GETFILES     = BASEFILES;

        /**
         * (proxy mode) API for creating a new file.
         */
        public static final String POSTFILE     = BASEFILES;

        /**
         * (proxy mode) API for deleting a file (admin only).
         */
        public static final String DELETEFILE   = BASEFILES + ":" + kFileNameInCryptoAC + "/";

        /**
         * (proxy mode) API for writing over a file.
         */
        public static final String PATCHFILE    = BASEFILES;


        /**
         * (proxy mode) API for getting the list of role tuples associated to the authenticated user.
         */
        public static final String GETASSIGNMENTS = BASEASSIGNMENTS;

        /**
         * (proxy mode) API for creating a role tuple (admin only).
         */
        public static final String POSTASSIGNMENT   = BASEASSIGNMENTS;

        /**
         * (proxy mode) API for deleting a role tuple (admin only).
         */
        public static final String DELETEASSIGNMENT = BASEASSIGNMENTS + ":" + FormParameters.kUsernameInCryptoAC + "/:" + kRoleNameInCryptoAC + "/";


        /**
         * (proxy mode) API for getting the list of permission tuples associated to the authenticated user.
         */
        public static final String GETPERMISSIONS = BASEPERMISSIONS;

        /**
         * (proxy mode) API for creating a permission tuple (admin only).
         */
        public static final String POSTPERMISSION   = BASEPERMISSIONS;

        /**
         * (proxy mode) API for deleting a permission tuple (admin only).
         */
        public static final String DELETEPERMISSION = BASEPERMISSIONS + ":" + kRoleNameInCryptoAC + "/:" + kFileNameInCryptoAC + "/:" + kPermissionInCryptoAC + "/" ;



        /**
         * (proxy mode) API for getting the profile of the given user (authenticated user only
         * if he requests his own profile, otherwise admin only).
         */
        public static final String GETPROFILE       = BASEPROFILES + ":" + kDAO + "/";


        /**
         * (proxy mode) API for creating the profile of a user (admin or authenticated user only).
         */
        public static final String POSTPROFILE      = BASEPROFILES + ":" + kDAO + "/";


        /**
         * (proxy mode) API for updating the profile of a user (admin or authenticated user only).
         */
        public static final String PATCHPROFILE     = BASEPROFILES + ":" + kDAO + "/";

        /**
         * (proxy mode) redirect to index.
         */
        public static final String SLASH                    = "/";

        /**
         * (proxy mode) get the login page.
         */
        public static final String LOGIN                    = "/login/";

        /**
         * (proxy mode) log out the authenticated user.
         */
        public static final String LOGOUT                   = "/logout/";

        /**
         * (proxy mode) get the index page (UI dashboard).
         */
        public static final String INDEX                    = "/index/";



        /**
         * (rm mode) API for configuring the RM (admin only).
         */
        public static final String RMCONFIGURE = BASERM + "configure/";

        /**
         * (rm mode) API for pinging the RM so users check
         * that they have the right configuration data.
         */
        public static final String RMPING = BASERM + "ping/";

        /**
         * (rm mode) API for requesting to add a file.
         */
        public static final String ADDFILE = BASERM + "files/:" + kDAO + "/";

        /**
         * (rm mode) API for requesting to write over a file.
         */
        public static final String WRITEFILE = BASERM + "files/:" + kDAO + "/";




        /**
         * (ds mode) API for configuring the DS (admin only).
         */
        public static final String DSCONFIGURE = BASEDS + "configure/";

        /**
         * (ds mode) API for pinging the DS so users check
         * that they have the right configuration data.
         */
        public static final String DSPING = BASEDS + "ping/";

        /**
         * (ds mode) API for downloading an encrypted file.
         */
        public static final String DOWNLOADFILE     = BASEDS + "files/:" + kDAO + "/:" + kFileNameInCryptoAC + "/";

        /**
         * (ds mode) API for moving an encrypted file from the upload to the download folder.
         */
        public static final String MOVEFILE         = BASEDS + "files/:" + kDAO + "/:" + kFileNameInCryptoAC + "/";

        /**
         * (ds mode) API for overwriting an encrypted file.
         */
        public static final String OVERWRITEFILE    = BASEDS + "files/:" + kDAO + "/:" + kFileNameInCryptoAC + "/";

        /**
         * (ds mode) API for uploading a new encrypted file.
         */
        public static final String UPLOADFILE       = BASEDS + "files/:" + kDAO + "/";

        /**
         * (ds mode) API for deleting an encrypted file.
         */
        public static final String REMOVEFILE       = BASEDS + "files/:" + kDAO + "/:" + kFileNameInCryptoAC + "/";



        /**
         * (OPA) API for managing the rbac policy in OPA.
         */
        public static final String OPARBACPOLICY = BASEOPA + "policies/rbac";

        /**
         * (OPA) API for managing the rbac data in OPA.
         */
        public static final String OPARBACDATA = BASEOPA + "data/rbac";

        /**
         * (OPA) API for querying the rbac policy in OPA.
         */
        public static final String OPARBACQUERY = BASEOPA + "data/app/rbac/allow";




        /**
         * HashMap converting API (e.g. "/users/") to the method to invoke in the User class (e.g. "addUser")
         */
        public static HashMap<HttpMethod, HashMap<String, String>> fromAPIToMethod;

        static {

            fromAPIToMethod = new HashMap<>();

            HashMap<String, String> getMethods    = new HashMap<>();
            HashMap<String, String> postMethods   = new HashMap<>();
            HashMap<String, String> patchMethods  = new HashMap<>();
            HashMap<String, String> deleteMethods = new HashMap<>();

            postMethods.put(POSTUSER,           "addUser");
            deleteMethods.put(DELETEUSER,       "deleteUser");

            postMethods.put(POSTROLE,           "addRole");
            deleteMethods.put(DELETEROLE,       "deleteRole");

            postMethods.put(POSTFILE,           "addFile");
            deleteMethods.put(DELETEFILE,       "deleteFile");

            postMethods.put(POSTASSIGNMENT,     "assignUserToRole");
            deleteMethods.put(DELETEASSIGNMENT, "revokeUserFromRole");

            postMethods.put(POSTPERMISSION,     "assignPermissionToRole");
            deleteMethods.put(DELETEPERMISSION, "revokePermissionFromRole");

            getMethods.put(GETFILE,             "readFile");
            patchMethods.put(PATCHFILE,         "writeFile");

            getMethods.put(GETUSERS,            "listUsers");
            getMethods.put(GETROLES,            "listRoles");
            getMethods.put(GETFILES,            "listFiles");

            getMethods.put(GETASSIGNMENTS,      "listAssignments");
            getMethods.put(GETPERMISSIONS,      "listPermissions");

            fromAPIToMethod.put(HttpMethod.get,     getMethods);
            fromAPIToMethod.put(HttpMethod.post,    postMethods);
            fromAPIToMethod.put(HttpMethod.patch,   patchMethods);
            fromAPIToMethod.put(HttpMethod.delete,  deleteMethods);
        }
    }
}