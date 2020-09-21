package eu.fbk.st.cryptoac;

import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.server.ds.FilesController;
import eu.fbk.st.cryptoac.server.proxy.users.AdminController;
import eu.fbk.st.cryptoac.server.proxy.users.UserController;
import eu.fbk.st.cryptoac.server.rm.ChecksController;
import eu.fbk.st.cryptoac.server.util.ErrorUtil;
import eu.fbk.st.cryptoac.server.util.FiltersUtil;
import eu.fbk.st.cryptoac.server.proxy.login.LoginController;
import eu.fbk.st.cryptoac.server.proxy.profile.ProfileController;
import eu.fbk.st.cryptoac.server.model.OperationMode;
import eu.fbk.st.cryptoac.server.util.RequestUtil;
import org.apache.commons.cli.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.util.Properties;

import static eu.fbk.st.cryptoac.server.util.ErrorUtil.*;
import static eu.fbk.st.cryptoac.server.model.OperationMode.*;
import static eu.fbk.st.cryptoac.util.CMDUtil.*;
import static eu.fbk.st.cryptoac.util.Const.API.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.kDAO;
import static eu.fbk.st.cryptoac.util.Const.Server.*;
import static java.lang.System.exit;
import static spark.Spark.*;

/**
 * The application entry point; it creates a server exposing REST APIs, depending on the given parameters.
 */
public class App {

    /**
     * (DS mode) The folder where the DS stores uploaded files (users cannot download).
     */
    public static final File uploadDirectoryDS = new File(kUploadDirectoryDSPath);

    /**
     * (DS mode) The folder in the DS from which users can download (not upload) files.
     */
    public static final File downloadDirectoryDS = new File(kDownloadDirectoryDSPath);


    /**
     * (proxy mode) The folder where the proxy stores users' configuration data.
     */
    public static final File usersDataDirectoryProxy = new File(kUsersDataDirectoryProxyPath);

    /**
     * (proxy mode) The folder where temporary files uploaded by clients may be stored.
     */
    public static final File temporaryDirectoryProxy = new File(kTemporaryDirectoryProxyPath);

    /**
     * (any mode) The logger object through which all logs are written.
     */
    public static Logger logger = null;

    /**
     * (any mode) The ID of the admin.
     * Note: every instance of CryptoAC (proxy, RM, DS, MS) has to refer to the admin through this ID.
     * Note: you can modify it with program parameters.
     */
    public static String admin = "admin";

    /**
     * (any mode) The port the server opens to receive requests.
     * Note: you can modify it with program parameters.
     */
    private static int serverPort = 7777;

    /**
     * (proxy mode) The static files (e.g., js, css, images) expiration time (in seconds).
     * After that time, the server will clear the cache and fetch the files from the disk.
     * Note: you can modify it with program parameters.
     */
    private static long staticFilesExpirationTime = 600L;

    /**
     * (proxy mode) The expiration time for idling sessions (in seconds) after which the session will be reset
     * Note: you can modify it with program parameters.
     */
    public static int sessionExpirationTime = 300;

    /**
     * (any mode) The maximum number of threads that the jetty server will spawn. Must be above 2
     * Note: you can modify it with program parameters, depending on the machine you are running
     */
    public static int maxThreads = 4;

    /**
     * (any mode) The minimum number of threads that the jetty server will spawn
     * Note: you can modify it with program parameters, depending on the machine you are running
     */
    public static int minThreads = 1;

    /**
     * (any mode) The timeout for idling threads (in milliseconds)
     * Note: you can modify it with program parameters
     */
    public static int threadsTimeOutMillis = 30000;

    /**
     * (any mode) The name of the log file
     * Note: you can modify it with program parameters
     */
    public static String logFileName = "CryptoAC.log";


    /**
     * The main method creates the server and configures the necessary routes for REST APIs.
     * CryptoAC is a flexible tool, and each instance can be configured to assume a different role;
     * CryptoAC supports the roles of proxy, Reference Monitor (RM) and Data Storage (DS). The role
     * of Metadata Storage (DS) can instead be assumed by a MySQL8+ database; see the doc for more details.
     * @param args program arguments
     */
    // TODO altri parametri da passare: percorso ai certificati per SSL
    public static void main (String[] args) {

        // ===== ===== ===== ===== PARAMETERS ACQUISITION ===== ===== ===== =====
        Options options = new Options();

        Option portOption = new Option("p", kCMDPortKey, true,
                "The port the server will use to listen to connections [default is " + serverPort + "]");
        portOption.setType(Integer.class);
        portOption.setRequired(false);
        options.addOption(portOption);

        Option adminIDOption = new Option("a", kCMDAdminID, true,
                "The ID of the admin [default is \"" + admin + "\"]");
        adminIDOption.setType(String.class);
        adminIDOption.setRequired(false);
        options.addOption(adminIDOption);

        Option staticFilesExpTimeOption = new Option("f", kCMDStaticFilesExpTime, true,
                "The static files expiration time in seconds [default is \"" + staticFilesExpirationTime + "\"]");
        staticFilesExpTimeOption.setType(String.class);
        staticFilesExpTimeOption.setRequired(false);
        options.addOption(staticFilesExpTimeOption);

        Option sessionExpTimeOption = new Option("s", kCMDSessionExpTime, true,
                "The users session expiration time in seconds [default is \"" + sessionExpirationTime + "\"]");
        sessionExpTimeOption.setType(Integer.class);
        sessionExpTimeOption.setRequired(false);
        options.addOption(sessionExpTimeOption);

        Option maxThreadsNumberOption = new Option("m", kCMDMaxThreads, true,
                "The max number of threads the server will spawn [default is \"" + maxThreads + "\"]");
        maxThreadsNumberOption.setType(Integer.class);
        maxThreadsNumberOption.setRequired(false);
        options.addOption(maxThreadsNumberOption);

        Option minThreadsNumberOption = new Option("n", kCMDMinThreads, true,
                "The min number of threads the server will spawn [default is \"" + minThreads + "\"]");
        minThreadsNumberOption.setType(Integer.class);
        minThreadsNumberOption.setRequired(false);
        options.addOption(minThreadsNumberOption);

        Option threadsTimeOutMillisOption = new Option("t", kCMDThreadsTimeOutMillis, true,
                "The timeout of idling threads in milliseconds [default is \"" + threadsTimeOutMillis + "\"]");
        threadsTimeOutMillisOption.setType(Integer.class);
        threadsTimeOutMillisOption.setRequired(false);
        options.addOption(threadsTimeOutMillisOption);

        Option logFileNameOption = new Option("l", kCMDLogFileName, true,
                "The name of the log file to enable file-level logging [default is \"" + logFileName + "\"]. " +
                        "If this option is not provided, logs will be redirected to the standard output");
        logFileNameOption.setType(String.class);
        logFileNameOption.setRequired(false);
        options.addOption(logFileNameOption);



        Option pkcKeyLengthOption = new Option("cp", kCMDPKCKeyLength, true,
                "The length of PKC keys [default is \"" + CryptoUtil.getPKCKeyLength() + "\"]");
        pkcKeyLengthOption.setType(Integer.class);
        pkcKeyLengthOption.setRequired(false);
        options.addOption(pkcKeyLengthOption);

        Option pkcAlgorithmOption = new Option("ca", kCMDPKCAlgorithm, true,
                "The algorithm used to generate PKC keys [default is \"" + CryptoUtil.getPKCAlgorithm() + "\"]");
        pkcAlgorithmOption.setType(String.class);
        pkcAlgorithmOption.setRequired(false);
        options.addOption(pkcAlgorithmOption);

        Option hashAlgorithmOption = new Option("ch", kCMDHashAlgorithm, true,
                "The algorithm used for hashing [default is \"" + CryptoUtil.getHashAlgorithm() + "\"]");
        hashAlgorithmOption.setType(String.class);
        hashAlgorithmOption.setRequired(false);
        options.addOption(hashAlgorithmOption);

        Option pkcSigningAlgorithmOption = new Option("cs", kCMDPKCSigningAlgorithm, true,
                "The algorithm used for signing with PKC private keys/verifying with PKC public keys" +
                        " [default is \"" + CryptoUtil.getPKCSigningAlgorithm() + "\"]");
        pkcSigningAlgorithmOption.setType(String.class);
        pkcSigningAlgorithmOption.setRequired(false);
        options.addOption(pkcSigningAlgorithmOption);

        Option symAlgorithmOption = new Option("ch", kCMDSymAlgorithm, true,
                "The algorithm used for symmetric encryption [default is \"" + CryptoUtil.getSymAlgorithm() + "\"]");
        symAlgorithmOption.setType(String.class);
        symAlgorithmOption.setRequired(false);
        options.addOption(symAlgorithmOption);

        Option symKeyLengthOption = new Option("ck", kCMDSymKeyLength, true,
                "The length of symmetric keys [default is \"" + CryptoUtil.getSymKeyLength() + "\"]");
        symKeyLengthOption.setType(Integer.class);
        symKeyLengthOption.setRequired(false);
        options.addOption(symKeyLengthOption);


        OptionGroup operationModeOptionGroup = new OptionGroup();
        operationModeOptionGroup.setRequired(true);

        Option operationModeOptionProxy = new Option("op", kCMDOperationModeProxy, false,
                "To launch this instance of CryptoAC as a proxy");

        Option operationModeOptionRM = new Option("or", kCMDOperationModeRM, true,
                "To launch this instance of CryptoAC as a reference monitor. Parameters are the " +
                        "metadata storage URL, metadata storage password, metadata storage port, metadata " +
                        "storage username, data storage URL, data storage port (separator is the white space)");
        operationModeOptionRM.setArgs(6);
        operationModeOptionRM.setValueSeparator(' ');

        Option operationModeOptionDS = new Option("od", kCMDOperationModeDS, false,
                "To launch this instance of CryptoAC as a data storage");

        operationModeOptionGroup.addOption(operationModeOptionProxy);
        operationModeOptionGroup.addOption(operationModeOptionRM);
        operationModeOptionGroup.addOption(operationModeOptionDS);
        options.addOptionGroup(operationModeOptionGroup);

        CommandLineParser parser = new DefaultParser();
        CommandLine cmd;

        try {

            // check and acquire the parameters
            cmd = parser.parse(options, args);
            OperationMode operationMode;

            if (cmd.hasOption(kCMDOperationModeProxy))
                operationMode = proxy;
            else if (cmd.hasOption(kCMDOperationModeDS))
                operationMode = DS;
            else if (cmd.hasOption(kCMDOperationModeRM)) {
                operationMode = RM;
                String[] argumentsRM = cmd.getOptionValues(kCMDOperationModeRM);
                ChecksController.initialize(argumentsRM[0], argumentsRM[1], argumentsRM[2],
                        argumentsRM[3], argumentsRM[4], argumentsRM[5]);
            }
            else
                throw new ParseException("Operation mode is missing. You must provide either the -op, -or or -od option");

            serverPort = acquireIntegerOption(
                    cmd, kCMDPortKey, serverPort, 1, 65535);
            maxThreads = acquireIntegerOption(
                    cmd, kCMDMaxThreads, maxThreads, 4, Integer.MAX_VALUE);
            minThreads = acquireIntegerOption(
                    cmd, kCMDMinThreads, minThreads, 1, maxThreads);
            sessionExpirationTime = acquireIntegerOption(
                    cmd, kCMDSessionExpTime, sessionExpirationTime, 1, Integer.MAX_VALUE);
            staticFilesExpirationTime = acquireIntegerOption(
                    cmd, kCMDStaticFilesExpTime, (int) staticFilesExpirationTime, 1, Integer.MAX_VALUE);
            threadsTimeOutMillis = acquireIntegerOption(
                    cmd, kCMDThreadsTimeOutMillis, threadsTimeOutMillis, 1, Integer.MAX_VALUE);

            admin = acquireStringOption(cmd, kCMDAdminID, admin);


            new CryptoUtil(
                    acquireStringOption(cmd, kCMDPKCAlgorithm, CryptoUtil.getPKCAlgorithm()),
                    acquireStringOption(cmd, kCMDHashAlgorithm, CryptoUtil.getHashAlgorithm()),
                    acquireIntegerOption(cmd, kCMDPKCKeyLength, CryptoUtil.getPKCKeyLength(), 1, Integer.MAX_VALUE),
                    acquireStringOption(cmd, kCMDPKCSigningAlgorithm, CryptoUtil.getPKCSigningAlgorithm()),
                    acquireStringOption(cmd, kCMDSymAlgorithm, CryptoUtil.getSymAlgorithm()),
                    acquireIntegerOption(cmd, kCMDSymKeyLength, CryptoUtil.getSymKeyLength(), 1, Integer.MAX_VALUE)
            );

            Properties props = System.getProperties();
            if (cmd.hasOption(kCMDLogFileName)) {
                logFileName = acquireStringOption(cmd, kCMDLogFileName, logFileName);
                props.setProperty(kLogBackFileNameSysProperty, logFileName);
                props.setProperty(kLogBackConfigFilePathSysProperty, kLogBackConfigFileToFilePath);
            }
            else {
                props.setProperty(kLogBackConfigFilePathSysProperty, kLogBackConfigFileToConsolePath);
            }


            // ===== ===== ===== ===== SET UP OF SERVER ===== ===== ===== =====
            logger = LoggerFactory.getLogger(App.class);
            logger.info("[{}{}{}{}{}{}{}{} ", "Application", " (" + "main" + ")]: ", "Starting server on port ",
                    serverPort, ", admin ID ", admin, ", operation mode ", operationMode);


            // here we have common configuration to all operation modes

            threadPool(maxThreads, minThreads, threadsTimeOutMillis);
            port(serverPort);

            // SSL setup TODO (provide certificate and uncomment)
            /*String ksPath = "src/main/resources/server/ssl/selfsigned.jks";
            String ksPass = "piroghe";
            secure(ksPath, ksPass, null, null);*/


            // 1. if this instance of CryptoAC is configured to be a proxy
            if (operationMode.equals(proxy)) {

                if (!temporaryDirectoryProxy.exists()) {
                    if (!temporaryDirectoryProxy.mkdirs()) {
                        logger.error("[{}{}{}{} ", "Application", " (" + "main" + ")]: ",
                                "unable to create directories for path ", temporaryDirectoryProxy.getAbsolutePath());

                        // exit with status 73 (see the OperationOutcomeCode class)
                        exit(73);
                    }
                }

                staticFiles.location(kStaticFilesProxyPath);
                staticFiles.expireTime(staticFilesExpirationTime);
                staticFiles.externalLocation(temporaryDirectoryProxy.getAbsolutePath() + "/");

                // ===== SET UP BEFORE FILTERS =====
                before("*", FiltersUtil.addTrailingSlashes);
                before("*", FiltersUtil.logRequest);
                before("*", RequestUtil.checkRequestIsWellFormatted);
                before(currentVersion + "/*",               LoginController.authenticateUser);
                before(BASEPROXY + "/*",                    RequestUtil.checkRequestAcceptJSON);
                before(BASEPROXY + "/*/:" + kDAO + "/*",    ProfileController.checkProfileCompleteAndLoadIt);

                // ===== SET UP ROUTES =====
                // session related routes
                get     (LOGIN,     LoginController.loginPage);
                post    (LOGIN,     LoginController.login);
                get     (LOGOUT,    LoginController.logout);

                // routes reserved for the admin
                post    (POSTUSER,          AdminController.addUser);
                delete  (DELETEUSER,        AdminController.deleteUser);
                post    (POSTROLE,          AdminController.addRole);
                delete  (DELETEROLE,        AdminController.deleteRole);
                delete  (DELETEFILE,        AdminController.deleteFile);
                post    (POSTASSIGNMENT,    AdminController.assignUserToRole);
                delete  (DELETEASSIGNMENT,  AdminController.revokeUserFromRole);
                post    (POSTPERMISSION,    AdminController.assignPermissionToRole);
                delete  (DELETEPERMISSION,  AdminController.revokePermissionFromRole);
                get     (GETUSERS,          AdminController.listUsers);
                get     (GETROLES,          AdminController.listRoles);
                get     (GETFILES,          AdminController.listFiles);

                // routes callable also by users
                get     (GETFILE,           UserController.readFile);
                post    (POSTFILE,          UserController.addFile);
                patch   (PATCHFILE,         UserController.writeFile);
                get     (GETASSIGNMENTS,    UserController.listAssignments);
                get     (GETPERMISSIONS,    UserController.listPermissions);

                // Utilities for handling users' profiles
                get     (SLASH,             ProfileController.indexPage);
                get     (INDEX,             ProfileController.indexPage);
                get     (GETPROFILE,        ProfileController.getUserProfile);
                post    (POSTPROFILE,       ProfileController.createProfile);
                patch   (PATCHPROFILE,      ProfileController.UpdateProfile);
            }

            // 2. if this instance of CryptoAC is configured to be a RM
            else if (operationMode.equals(RM)) {

                // ===== SET UP BEFORE FILTERS =====
                before("*", FiltersUtil.addTrailingSlashes);
                before("*", FiltersUtil.logRequest);
                before("*", RequestUtil.checkRequestIsWellFormatted);

                // ===== SET UP ROUTES =====
                // routes for adding and writing files
                post    (ADDFILE,           ChecksController.addFile);
                patch   (WRITEFILE,         ChecksController.writeFile);

                // TODO what about authentication?
            }

            // 3. if this instance of CryptoAC is configured to be a DS
            else if (operationMode.equals(DS)) {

                if (!uploadDirectoryDS.exists()) {
                    if (!uploadDirectoryDS.mkdirs()) {
                        logger.error("[{}{}{}{} ", "Application", " (" + "main" + ")]: ",
                                "unable to create directories for path ", uploadDirectoryDS.getAbsolutePath());

                        // exit with status 73 (see the OperationOutcomeCode class)
                        exit(73);
                    }
                }

                if (!downloadDirectoryDS.exists()) {
                    if (!downloadDirectoryDS.mkdirs()) {
                        logger.error("[{}{}{}{} ", "Application", " (" + "main" + ")]: ",
                                "unable to create directories for path ", downloadDirectoryDS.getAbsolutePath());

                        // exit with status 73 (see the OperationOutcomeCode class)
                        exit(73);
                    }
                }

                // set storage of files to the upload directory
                staticFiles.externalLocation(uploadDirectoryDS.getAbsolutePath() + "/");

                // ===== SET UP BEFORE FILTERS =====
                before("*", FiltersUtil.addTrailingSlashes);
                before("*", FiltersUtil.logRequest);
                before("*", RequestUtil.checkRequestIsWellFormatted);

                // ===== SET UP ROUTES =====
                // routes for adding, writing and deleting files
                get     (DOWNLOADFILE,  FilesController.downloadFile);
                patch   (MOVEFILE,      FilesController.moveFile);
                put     (OVERWRITEFILE, FilesController.overwriteFile);
                post    (UPLOADFILE,    FilesController.uploadFile);
                delete  (REMOVEFILE,    FilesController.deleteFile);

                // TODO what about authentication?
            }

            // here we have further common configuration to all operation modes

            // add gzip header to compress responses
            after("*", FiltersUtil.addGzipHeader);

            // standard response for 5** errors
            internalServerError(internalError);

            // standard response for requests ending in 404
            notFound(ErrorUtil.notFound);

            // if asked, return the swagger file for version 1
            get(currentVersion, (request, response) -> {  response.redirect("/other/swagger-v1.yaml"); return null; });

            // catch any exception that may be thrown by the APIs
            exception(Exception.class, internalErrorException);
        }
        // if the user provided a wrong parameter
        catch (ParseException e) {

            logger = logger == null ? LoggerFactory.getLogger(App.class) : logger;
            logger.error("[{}{}{} ", "Application", " (" + "main" + ")]: ", "wrong usage or arguments");

            String header = "\nCryptoAC enforces cryptographic access control on data hosted in partially trusted environments\n\n";
            String footer = "\nPlease report issues to sberlato@fbk.eu";
            HelpFormatter formatter = new HelpFormatter();
            formatter.printHelp("CryptoAC", header, options, footer, true);

            // exit with status 64 (see the OperationOutcomeCode class)
            exit(64);
        }
        // catch any other exception
        catch (Exception e) {

            logger = logger == null ? LoggerFactory.getLogger(App.class) : logger;
            logger.error("[{}{}{} ", "Application", " (" + "main" + ")]: ", "unexpected exception: ", e);

            // exit with status 72 (see the OperationOutcomeCode class)
            exit(72);
        }
    }
}