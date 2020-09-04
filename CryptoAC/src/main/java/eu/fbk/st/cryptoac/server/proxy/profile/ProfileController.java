package eu.fbk.st.cryptoac.server.proxy.profile;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.core.element.User;
import eu.fbk.st.cryptoac.dao.DAO;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.dao.DAOInterface;
import eu.fbk.st.cryptoac.dao.DAOInterfaceParameters;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.util.FileUtil;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import eu.fbk.st.cryptoac.server.proxy.login.LoginController;
import eu.fbk.st.cryptoac.server.util.*;
import eu.fbk.st.cryptoac.server.proxy.util.ViewUtil;
import org.eclipse.jetty.http.HttpStatus;
import spark.Filter;
import spark.Request;
import spark.Response;
import spark.Route;

import javax.servlet.ServletException;
import java.io.*;
import java.nio.file.FileSystemException;
import java.security.KeyPair;
import java.util.HashMap;

import static eu.fbk.st.cryptoac.App.usersDataDirectoryProxy;
import static eu.fbk.st.cryptoac.server.util.ErrorUtil.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceParameters.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.*;
import static eu.fbk.st.cryptoac.util.Const.SessionKeys.*;
import static eu.fbk.st.cryptoac.util.Const.Server.*;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;
import static eu.fbk.st.cryptoac.server.util.RequestUtil.*;
import static spark.Spark.halt;


/**
 * This class is the controller for APIs that relates to server users' profile.
 */
public class ProfileController {

    // variables for logging purposes
    private static final String className               = "ProfileController";
    private static final String getUserProfileLog       = "getUserProfile";
    private static final String createProfileLog        = "createProfile";
    private static final String updateProfileLog        = "UpdateProfile";
    private static final String isProfileCompleteLog    = "isProfileComplete";

    /**
     * This filter is invoked before APIs are executed to check
     * whether the user has properly configured a profile for
     * the chosen storage system. If so, load the configuration
     * data needed to instantiate the DAO interface.
     * Note: in case of errors, filter do not invoke the "error"
     * method in ErrorUtil but rather the "halt" method by Spark.
     */
    public static Filter checkProfileCompleteAndLoadIt = (Request request, Response response) -> {

        String selectedDAOString = getMandatoryPathParameter(request, kDAO);
        DAO selectedDAO = DAO.get(selectedDAOString);
        String loggedUser = (String) getSessionParameter(request, kCurrentlyLoggedUser);
        String dataKey = kDataOfUserLoggedIn + selectedDAO;

        try {

            if (selectedDAO != null) {

                // if user's data were not previously in the session,
                // save the user's data in the session with key
                // "kDataOfUserLoggedIn + selectedDAO", so it is possible
                // to have multiple data loaded for the same user
                if (!RequestUtil.isThereAttributeInSession(request, dataKey)) {

                    App.logger.info("[{}{}{}{}{}{} ", className, " (" + isProfileCompleteLog + ")]: ",
                            "loading profile of user ", loggedUser, " for storage system ", selectedDAOString);

                    DAOInterfaceParameters daoInterfaceParameters = loadDAOInterfaceParameters(loggedUser, selectedDAO);
                    RequestUtil.setSessionParameter(request, dataKey, daoInterfaceParameters);
                }
            }
            // it means that either the user did not provide a DAO or it is not supported
            else {
                App.logger.error("[{}{}{}{}{} ", className, " (" + isProfileCompleteLog + ")]: ",
                        "storage system ", selectedDAOString, " is not supported");
                halt(422, (String) missingParameter.handle(request, response));
            }

        }
        // this exception is thrown when the configuration file was not found
        catch (FileNotFoundException e) {
            App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + isProfileCompleteLog + ")]: ",
                    "profile of user ", loggedUser, " for storage system ", selectedDAO, " is not complete");
            halt(403, (String) forbidden.handle(request, response));
        }
        // this exception is thrown when there was an exception while reading the configuration file
        catch (IOException e) {
            App.logger.error("[{}{}{}{}{}{} ", className, " (" + isProfileCompleteLog + ")]: ",
                    "exception while reading profile of user ", loggedUser, " for storage system ", selectedDAO);
            halt(500, (String) internalError.handle(request, response));
        }
    };


    /**
     * This endpoint returns the base index page.
     * Note that this endpoint also initializes the user in the chosen storage system.
     */
    public static Route indexPage = (Request request, Response response) -> {

        if (LoginController.isUserLoggedIn(request)) {
            HashMap<String, Object> model = new HashMap<>();
            model.put(kCurrentlyLoggedUser, getSessionParameter(request, kCurrentlyLoggedUser));
            return ViewUtil.render(model, kHTMLTemplateIndex);
        }
        else
            return ViewUtil.render(new HashMap<>(), kHTMLTemplateLogin);
    };

    /**
     * This endpoint handles GET requests for user's data. If the user is the admin, he can
     * retrieves profiles of all other users. If a simple user tries to get the profile
     * of another user, he would get a 404 instead of a 403 to avoid information leakage.
     * Note that this method can be invoked also by users who does not currently have
     * a profile; in this case, this method would certainly return a 404 error, but it is
     * necessary to tell users to configure they profile
     */
    public static Route getUserProfile = (Request request, Response response) -> {
// TODO implement button in web interface to download profile as json
        APIOutput invocationResult;

        try {

            String loggedUser = (String) getSessionParameter(request, kCurrentlyLoggedUser);
            String requestedUsername = getOptionalQueryParameter(request, kRequestedUserInServer);
            DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

            // obscure the private keys of the user before returning the profile
            HashMap<String, byte[]> hideKeys = new HashMap<>();
            hideKeys.put(kEncryptingPrivateKey, "private keys do not leave the proxy for now".getBytes());
            hideKeys.put(kSigningPrivateKey, "private keys do not leave the proxy for now".getBytes());

            DAOInterfaceParameters loggedUserDAOInterfaceParameters =
                    loadDAOInterfaceParameters(loggedUser, selectedDAO);

            // it means that the request comes from the administrator.
            // Therefore, we first check that the user that made the
            // request is actually the administrator, then we return
            // the requested profile (without private keys)
            if (requestedUsername != null && !loggedUser.equals(requestedUsername)) {

                if (!loggedUserDAOInterfaceParameters.isUserAdmin()) {

                    // we return 404 instead of 403, otherwise the user would know that a profile
                    // with the specified username exists, and this would leak information
                    invocationResult = new APIOutput(
                            null, code_53.toString(), HttpStatus.NOT_FOUND_404);
                    App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + getUserProfileLog + ")]: ", "user ",
                            loggedUser, " requested profile of user ", requestedUsername, " but is no admin");
                }
                // it means that the user that made the request is actually the admin, so return the profile
                else {

                    App.logger.info("[{}{}{}{}{}{}{}{} ", className, " (" + getUserProfileLog + ")]: ",
                            "administrator ", loggedUser, " requested profile for user ",
                            requestedUsername, " for storage system ", selectedDAO);

                    DAOInterfaceParameters requestedParameters =
                            loadDAOInterfaceParameters(requestedUsername, selectedDAO);

                    requestedParameters.update(hideKeys);

                    invocationResult = new APIOutput(requestedParameters, code_0.toString(), HttpStatus.OK_200);
                }
            }
            // it means that the user requested his own profile and we can safely return it
            else {
                App.logger.info("[{}{}{}{}{}{} ", className, " (" + getUserProfileLog + ")]: ",
                        "user ", loggedUser, " requested his profile for storage system ", selectedDAO);

                loggedUserDAOInterfaceParameters.update(hideKeys);

                invocationResult = new APIOutput(loggedUserDAOInterfaceParameters, code_0.toString(), HttpStatus.OK_200);
            }
        }
        // this exception is thrown when the configuration file was not found
        catch (FileNotFoundException e) {
            invocationResult = new APIOutput(
                    null,
                    code_53.toString(),
                    HttpStatus.NOT_FOUND_404);
            App.logger.warn("[{}{}{} ", className, " (" + getUserProfileLog + ")]: ",
                    "warning:  (" + e + "). Probably, the user has yet to configure his profile");
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests to create user's data. First, the endpoint
     * generates the key for the user and then checks the consistency of the given data.
     * Then, it checks whether the user is an administrator or not. Finally, it saves
     * the given data in the file system.
     * Note that this endpoint also initializes the user in the chosen storage system.
     * Note: users are not required to have a profile to invoke this API.
     */
    public static Route createProfile = (Request request, Response response) -> {

        APIOutput invocationResult;
        OperationOutcomeCode operationOutcomeCode;
        String userOfWhichToCreateProfile;

        try {

            String loggedUser = (String) getSessionParameter(request, kCurrentlyLoggedUser);
            String requestedUsername = getOptionalQueryParameter(request, kRequestedUserInServer);
            DAO selectedDAO = DAO.get(getOptionalQueryParameter(request, kDAO));

            // it means that the request comes from the administrator.
            // Therefore, we first check that the user that made the
            // request is actually the administrator and that his
            // profile already exists, then we create the requested profile
            if (requestedUsername != null) {

                // note that this invocation throws a "FileNotFoundException" if the
                // (supposedly) administrator user did not create his profile yet
                DAOInterfaceParameters loggedUserDAOInterfaceParameters =
                        loadDAOInterfaceParameters(loggedUser, selectedDAO);

                if (!loggedUserDAOInterfaceParameters.isUserAdmin()) {
                    userOfWhichToCreateProfile = null;
                    App.logger.error("[{}{}{}{}{}{} ", className, " (" + createProfileLog + ")]: ",
                            "not-admin user ", loggedUser, " requested to create profile for user ",
                            requestedUsername);
                }
                // it means that the user that made the request is actually the admin, so create the profile
                else {

                    App.logger.info("[{}{}{}{}{}{}{}{} ", className, " (" + createProfileLog + ")]: ",
                            "administrator ", loggedUser, " requested to create profile for user ",
                            requestedUsername, " for storage system ", selectedDAO);
                    userOfWhichToCreateProfile = requestedUsername;
                }
            }
            else {
                App.logger.info("[{}{}{}{}{}{} ", className, " (" + createProfileLog + ")]: ",
                        "logged user ", loggedUser, " asked to create his profile for storage system ",
                        selectedDAO);
                userOfWhichToCreateProfile = loggedUser;
            }

            if (userOfWhichToCreateProfile != null) {

                // this as the raw parameters that come from the multipart HTML form
                HashMap<String, byte[]> formParameters = getParametersFromMultipart(request);

                // this is where the user's keys are generated. These keys will
                // be used by the user for interacting with the given storage system
                KeyPair encryptingKeys = CryptoUtil.generatePKCKeys();
                KeyPair signingKeys = CryptoUtil.generatePKCKeys();

                formParameters.put(kEncryptingPublicKey, encryptingKeys.getPublic().getEncoded());
                formParameters.put(kEncryptingPrivateKey, encryptingKeys.getPrivate().getEncoded());
                formParameters.put(kSigningPublicKey, signingKeys.getPublic().getEncoded());
                formParameters.put(kSigningPrivateKey, signingKeys.getPrivate().getEncoded());

                DAOInterfaceParameters daoInterfaceParameters =
                        DAOInterfaceParameters.getInstance(selectedDAO, formParameters);

                DAOInterface daoInterface = DAOInterface.getInstance(selectedDAO, daoInterfaceParameters);

                // when locking the DAO interface, we are connecting to the
                // chosen storage system and then checking whether the user
                // is an administrator or not
                String usernameInCryptoAC = daoInterfaceParameters.getUsernameInCryptoAC();
                daoInterface.lockDAOInterfaceStatus();
                boolean isUserAdmin = daoInterface.isUserAdmin(usernameInCryptoAC);
                daoInterfaceParameters.setIsUserAdmin(isUserAdmin);
                daoInterface.unlockDAOInterfaceStatus();

                // if everything is ok, now we can initialize the user in the storage system
                // and then save the DAO interface parameters in the file system.
                User newUser = new User(usernameInCryptoAC, isUserAdmin, encryptingKeys, signingKeys);
                newUser.daoInterface = daoInterface;

                if (isUserAdmin)
                    operationOutcomeCode = newUser.initializeAdmin().getReturningCode();
                else
                    operationOutcomeCode = newUser.initializeUser().getReturningCode();

                if (operationOutcomeCode != code_0) {
                    invocationResult = new APIOutput(null, code_500.toString(),
                            HttpStatus.INTERNAL_SERVER_ERROR_500);
                    App.logger.error("[{}{}{}{}{}{} ", className, " (" + createProfileLog + ")]: ",
                            "error while instantiating the user ", usernameInCryptoAC, ": ",
                            operationOutcomeCode.toString());
                }
                else {

                    String pathOfNewFile = usersDataDirectoryProxy.getAbsolutePath() +
                            "/" + userOfWhichToCreateProfile + "." + selectedDAO.toString();
                    FileUtil.saveFileOnFileSystem(pathOfNewFile,
                            new ByteArrayInputStream(new GsonBuilder()
                                    .disableHtmlEscaping()
                                    .create()
                                    .toJson(daoInterfaceParameters)
                                    .getBytes()),
                            FileUtil.SaveMode.THROW_EXCEPTION);
                    invocationResult = new APIOutput(null, code_0.toString(), HttpStatus.OK_200);
                }
            }
            // it means that a not-admin user requested to create the profile for another user
            else
                invocationResult = new APIOutput(
                        null, code_65.toString(), HttpStatus.FORBIDDEN_403);
        }
        // these exceptions are thrown when saving the file of the user
        catch (FileSystemException e) {
            invocationResult = new APIOutput(null,
                    code_37.toString(),
                    HttpStatus.INTERNAL_SERVER_ERROR_500);
            App.logger.error("[{}{}{} ", className, " (" + createProfileLog + ")]: ",
                    "error:  (" + e + ")");
        }
        // these exceptions are thrown when reading data from parts
        catch (ServletException | IOException e) {
            invocationResult = new APIOutput(null,
                    code_66.toString(),
                    HttpStatus.INTERNAL_SERVER_ERROR_500);
            App.logger.error("[{}{}{} ", className, " (" + createProfileLog + ")]: ",
                    "error:  (" + e + ")");
        }
        // this exception is thrown when a part is too big
        catch (IllegalArgumentException e) {
            invocationResult = new APIOutput(
                    null,
                    code_422.toString(),
                    HttpStatus.UNPROCESSABLE_ENTITY_422);
            App.logger.error("[{}{}{} ", className, " (" + createProfileLog + ")]: ",
                    "error:  (" + e + ")");
        }
        // this exception is thrown when checking if the user is an admin or not
        catch (DAOException e) {
            invocationResult = new APIOutput(
                    null,
                    code_63.toString(),
                    HttpStatus.INTERNAL_SERVER_ERROR_500);
            App.logger.error("[{}{}{} ", className, " (" + createProfileLog + ")]: ",
                    "error:  (" + e + ")");
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests to update user's data. First, the endpoint
     * checks the consistency of the given data. Then, it updates the given data both
     * in the user session and in the file system. Of course, the user must have
     * already been created.
     * Note: users are not required to have a profile to invoke this API.
     */
    public static Route UpdateProfile = (Request request, Response response) -> {

        APIOutput invocationResult;
        String userOfWhichToUpdateProfile;

        try {

            String loggedUser = (String) getSessionParameter(request, kCurrentlyLoggedUser);
            String requestedUsername = getOptionalQueryParameter(request, kRequestedUserInServer);
            DAO selectedDAO = DAO.get(getOptionalQueryParameter(request, kDAO));
            String dataKey = kDataOfUserLoggedIn + selectedDAO;

            // it means that the request comes from the administrator.
            // Therefore, we first check that the user that made the
            // request is actually the administrator and that his
            // profile already exists, then we update the requested profile
            if (requestedUsername != null) {

                // note that this invocation throws a "FileNotFoundException" if the
                // (supposedly) administrator user did not create his profile yet
                DAOInterfaceParameters loggedUserDAOInterfaceParameters =
                        loadDAOInterfaceParameters(loggedUser, selectedDAO);

                if (!loggedUserDAOInterfaceParameters.isUserAdmin()) {
                    userOfWhichToUpdateProfile = null;
                    App.logger.error("[{}{}{}{}{}{} ", className, " (" + updateProfileLog + ")]: ",
                            "not-admin user ", loggedUser, " requested to update profile for user ",
                            requestedUsername);
                }
                // it means that the user that made the request is actually the admin, so create the profile
                else {
                    App.logger.info("[{}{}{}{}{}{}{}{} ", className, " (" + updateProfileLog + ")]: ",
                            "administrator ", loggedUser, " requested to update profile for user ",
                            requestedUsername, " for storage system ", selectedDAO);
                    userOfWhichToUpdateProfile = requestedUsername;
                }
            }
            else {
                App.logger.info("[{}{}{}{}{}{} ", className, " (" + updateProfileLog + ")]: ",
                        "logged user ", loggedUser, " asked to update his profile for storage system ",
                        selectedDAO);
                userOfWhichToUpdateProfile = loggedUser;
            }


            if (userOfWhichToUpdateProfile != null) {

                // first, we update the DAO interface parameters
                DAOInterfaceParameters daoInterfaceParametersToUpdate =
                        (DAOInterfaceParameters) RequestUtil.popSessionParameter(request, dataKey);
                HashMap<String, byte[]> formParameters = getParametersFromMultipart(request);
                OperationOutcomeCode updateCode = daoInterfaceParametersToUpdate.update(formParameters);

                if (updateCode == code_0) {

                    // then, save the new parameters in both the session and in the file system
                    RequestUtil.setSessionParameter(request, dataKey, daoInterfaceParametersToUpdate);

                    String pathOfNewFile = usersDataDirectoryProxy.getAbsolutePath() +
                            "/" + userOfWhichToUpdateProfile + "." + selectedDAO.toString();
                    FileUtil.saveFileOnFileSystem(pathOfNewFile,
                            new ByteArrayInputStream(new GsonBuilder()
                                    .disableHtmlEscaping()
                                    .create()
                                    .toJson(daoInterfaceParametersToUpdate)
                                    .getBytes()),
                            FileUtil.SaveMode.OVERWRITE);
                    invocationResult = new APIOutput(null, code_0.toString(), HttpStatus.OK_200);
                }
                // it means that the updated data that the user provided are not semantically correct
                // (e.g., they do not satisfy the regex or the user tried to update final parameters
                // like the username)
                else {

                    // reset the parameters
                    // TODO can we do better instead or re-loading everyting?
                    DAOInterfaceParameters daoInterfaceParameters = loadDAOInterfaceParameters(loggedUser, selectedDAO);
                    RequestUtil.setSessionParameter(request, dataKey, daoInterfaceParameters);

                    invocationResult = new APIOutput(null,
                            updateCode.toString(),
                            HttpStatus.UNPROCESSABLE_ENTITY_422);
                    App.logger.error("[{}{}{}{} ", className, " (" + updateProfileLog + ")]: ",
                            "error while updating DAO data: ", updateCode.toString());
                }

            }
            // it means that a not-admin user requested to update the profile for another user
            else {
                // we return 404 instead of 403, otherwise the user would know that a profile
                // with the specified username exists, and this would leak information
                invocationResult = new APIOutput(
                        null, code_53.toString(), HttpStatus.NOT_FOUND_404);
                App.logger.error("[{}{}{}{}{}{} ", className, " (" + updateProfileLog + ")]: ",
                        "not-admin user ", loggedUser, " asked to modify profile of user ", requestedUsername);
            }
        }
        // these exceptions are thrown when saving the file of the user
        catch (FileSystemException e) {
            invocationResult = new APIOutput(null,
                    code_37.toString(),
                    HttpStatus.INTERNAL_SERVER_ERROR_500);
            App.logger.error("[{}{}{} ", className, " (" + updateProfileLog + ")]: ",
                    "error:  (" + e + ")");
        }
        // this exception is thrown when the user does not exist
        catch (FileNotFoundException e) {
            invocationResult = new APIOutput(
                    null,
                    code_68.toString(),
                    HttpStatus.NOT_FOUND_404);
            App.logger.error("[{}{}{} ", className, " (" + updateProfileLog + ")]: ",
                    "error:  (" + e + ")");
        }
        // these exceptions are thrown when reading data from parts
        catch (ServletException | IOException e) {
            invocationResult = new APIOutput(null,
                    code_66.toString(),
                    HttpStatus.INTERNAL_SERVER_ERROR_500);
            App.logger.error("[{}{}{} ", className, " (" + updateProfileLog + ")]: ",
                    "error:  (" + e + ")");
        }
        // this exception is thrown when a part is too big
        catch (IllegalArgumentException e) {
            invocationResult = new APIOutput(
                    null,
                    code_422.toString(),
                    HttpStatus.UNPROCESSABLE_ENTITY_422);
            App.logger.error("[{}{}{} ", className, " (" + updateProfileLog + ")]: ",
                    "error:  (" + e + ")");
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };


    /**
     * This method loads from the file system the DAO interface parameters of the
     * given user and de-serialize them into a DAOInterfaceParameters object.
     * @param username the name username
     * @param selectedDAO the selected storage system
     * @return the DAO interface parameters of the given username for the selected storage system
     * @throws FileNotFoundException if the DAO interface parameters are not found
     * @throws IOException if there was an error while reading the file
     */
    private static DAOInterfaceParameters loadDAOInterfaceParameters (String username, DAO selectedDAO) throws IOException {

        DAOInterfaceParameters daoInterfaceParameters;
        String dataKey = username + "." + selectedDAO.toString();
        File configurationFile = new File(usersDataDirectoryProxy.getAbsolutePath() + "/" + dataKey);

        // check if the profile exists first
        if (configurationFile.exists()) {

            // try to load the file
            InputStream configurationFileStream = new FileInputStream(configurationFile);

            daoInterfaceParameters =
                    fromStringToDAOInterfaceParameters(new String(configurationFileStream.readAllBytes()));
        }
        // it means that the user's profile does not exist
        else
            throw new FileNotFoundException("file " + dataKey + " was not found");

        return daoInterfaceParameters;
    }


    /**
     * Utility method to create the proper subclass of DAOInterfaceParameters from the
     * string derived from the GSON serialization
     * @param string the DAOInterfaceParameters object serialized
     * @return the proper subclass of DAOInterfaceParameters corresponding to the given string
     */
    public static DAOInterfaceParameters fromStringToDAOInterfaceParameters(String string) {

        // "disableHtmlEscaping" to avoid escaping the "=" base64 char
        String json = new GsonBuilder()
                .disableHtmlEscaping()
                .create()
                .toJson(string);

        // format the string, removing the " char at the
        // beginning and at the end and replacing \" with "
        json = json.substring(1, json.length() - 1);
        json = json.replaceAll("\\\\\"", "\"");

        // construct a GSON builder with the user data interface adapter. This is because UserData has a variable
        // of type DAOInterfaceParameters, but the serialized data may hold subclasses of DAOInterfaceParameters
        // So we want to deserialize to the proper subclass
        GsonBuilder gsonBuilder = new GsonBuilder();
        gsonBuilder.registerTypeAdapter(DAOInterfaceParameters.class, new InterfaceAdapterUserData<DAOInterfaceParameters>());
        gsonBuilder.setPrettyPrinting();
        Gson userDataGSON = gsonBuilder.create();

        return userDataGSON.fromJson(json, DAOInterfaceParameters.class);
    }
}
