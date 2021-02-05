package eu.fbk.st.cryptoac.server.proxy.util;


import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.dao.DAOInterface;
import eu.fbk.st.cryptoac.dao.DAOInterfaceParameters;
import eu.fbk.st.cryptoac.core.element.User;
import eu.fbk.st.cryptoac.util.AccessControlEnforcement;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import eu.fbk.st.cryptoac.core.tuple.Permission;
import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.core.element.UserOutput;
import eu.fbk.st.cryptoac.dao.DAO;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import eu.fbk.st.cryptoac.server.util.RequestUtil;
import org.eclipse.jetty.http.HttpStatus;
import spark.Request;
import spark.Response;
import spark.route.HttpMethod;

import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.util.Base64;

import static eu.fbk.st.cryptoac.server.util.ErrorUtil.unprocessableEntity;
import static eu.fbk.st.cryptoac.util.Const.API.fromAPIToMethod;
import static eu.fbk.st.cryptoac.util.Const.SessionKeys.kCurrentlyLoggedUser;
import static eu.fbk.st.cryptoac.util.Const.SessionKeys.kDataOfUserLoggedIn;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;
import static eu.fbk.st.cryptoac.server.util.RequestUtil.getSessionParameter;
import static spark.Spark.halt;

/**
 * This class acts as an interface between the server and the CryptoAC
 * core by finalizing API requests received by the proxy.
 *
 * In practice, this class takes as input the parameters provided by
 * the user in the HTTP request. Then, depending on the API, this class
 * invokes the corresponding method in the User class via reflection
 */
public class APIFinalizer {

    // variables for logging
    private static final String className = "APIFinalizer";
    private static final String executeAPI = "executeAPI";


    /**
     * Utility method to execute the invoked API with a User Object
     * @param request the HTTP request
     * @param response the HTTP response
     * @param selectedDAO the specific storage system to be used
     * @param areAdminPrivilegesRequired boolean flag to indicate whether the operation requires admin privileges or not
     * @param invokedAPI the API that was invoked
     * @param httpMethod the HTTP method invoked (GET, POST, ...)
     * @param args list of arguments to pass to the function to be invoked. If an argument is not given (i.e., is null),
     *            we still need the class of the argument to get the method via reflection. Therefore, if an argument
     *            should be null, give the class instead (e.g., if you should provide an Integer optional parameter but
     *            the parameter was not given, pass "Integer.class")
     * @return operation code, either from here of from the User object method invocation
     */
    public static APIOutput executeAPI (Request request, Response response, DAO selectedDAO, boolean areAdminPrivilegesRequired,
                                        String invokedAPI, HttpMethod httpMethod, Object... args) throws Exception {
        
        String loggedUser = (String) getSessionParameter(request, kCurrentlyLoggedUser);
        String methodToInvoke = fromAPIToMethod.get(httpMethod).get(invokedAPI);

        App.logger.info("[{}{}{}{}{}{}{}{}{}{}{} ", className, " (" + executeAPI + ")]: ",
                "logged user ", loggedUser, " has invoked API (", methodToInvoke, "): storage system is ",
                selectedDAO, " (admin privileges are", (areAdminPrivilegesRequired ? " " : " not "), "required)");

        APIOutput outputAPI;

        // first, we need to get the method through reflection. Therefore, we need the signature
        // of the method, i.e., the type of the parameters.
        Class<?>[] signatureOfParameters = new Class[args.length];

        for (int i = 0; i < args.length; i++) {

            // Note: we cannot take the type of a parameter with the ".getClass()" method
            // In fact, even if it would be easier, it would also take the actual class of
            // the parameters, and not a superclass. For instance, the "addFile" method
            // requires an "InputStream", but using the ".getClass()" method we could get
            // a "FileInputStream" or a "ByteArrayInputStream" class type, resulting in an error
            if (args[i] == null) {
                App.logger.error("[{}{}{} ", className, " (" + executeAPI + ")]: ", "given null parameter");
                halt(HttpStatus.UNPROCESSABLE_ENTITY_422, (String) unprocessableEntity.handle(request, response));
            }
            else if (args[i] instanceof Class) {
                signatureOfParameters[i] = (Class<?>) args[i];
                args[i] = null;
            } else if (args[i] instanceof String)
                signatureOfParameters[i] = String.class;
            else if (args[i] instanceof Permission)
                signatureOfParameters[i] = Permission.class;
            else if (args[i] instanceof PublicKey)
                signatureOfParameters[i] = PublicKey.class;
            else if (args[i] instanceof InputStream)
                signatureOfParameters[i] = InputStream.class;
            else if (args[i] instanceof Integer)
                signatureOfParameters[i] = Integer.class;
            else if (args[i] instanceof AccessControlEnforcement)
                signatureOfParameters[i] = AccessControlEnforcement.class;

            // error: we are given a type of a parameter we did not expect
            else {
                App.logger.error("[{}{}{}{}{} ", className, " (" + executeAPI + ")]: ", "given parameter with class (",
                        (args[i] == null ? null : args[i].getClass()), ") is not supported for API execution");
                halt(HttpStatus.UNPROCESSABLE_ENTITY_422, (String) unprocessableEntity.handle(request, response));
            }
        }


        // this object will contain the user's configuration
        // data for instantiating the (chosen) DAO interface
        DAOInterfaceParameters userDAOInterfaceParameters;

        try {

            // check that user's data are in the user's session, as user's data are loaded when logging in
            if (RequestUtil.isThereAttributeInSession(request, kDataOfUserLoggedIn + selectedDAO)) {

                userDAOInterfaceParameters = (DAOInterfaceParameters) RequestUtil.getSessionParameter(
                        request, kDataOfUserLoggedIn + selectedDAO);

                KeyPair userEncryptingKeys = CryptoUtil.getCryptoUtil().createAndCheckKeysFromBytes(
                        Base64.getDecoder().decode(userDAOInterfaceParameters.getEncryptingPublicKey()),
                        Base64.getDecoder().decode(userDAOInterfaceParameters.getEncryptingPrivateKey()));
                KeyPair userSigningKeys = CryptoUtil.getCryptoUtil().createAndCheckKeysFromBytes(
                        Base64.getDecoder().decode(userDAOInterfaceParameters.getSigningPublicKey()),
                        Base64.getDecoder().decode(userDAOInterfaceParameters.getSigningPrivateKey()));

                // get the username that the user has in the chosen
                // storage system (i.e., the name in CryptoAC)
                String usernameInCryptoAC = userDAOInterfaceParameters.getUsernameInCryptoAC();
                boolean isUserAdmin = userDAOInterfaceParameters.isUserAdmin();

                User userInvokingAPI = new User(usernameInCryptoAC, isUserAdmin, userEncryptingKeys, userSigningKeys);
                userInvokingAPI.daoInterface = DAOInterface.getInstance(selectedDAO, userDAOInterfaceParameters);

                // if admin privileges are not requested OR the user is the admin, we can
                // safely execute the requested API. Otherwise, it means that the user
                // invoked an API requiring admin privileges while not being an administrator.
                // While this check helps with the right error message, it does not enforce
                // the condition that the user has to be the administrator to invoked such
                // restricted methods, as this should be enforced at storage system level
                if (!areAdminPrivilegesRequired || userInvokingAPI.isUserAdmin()) {

                    Method methodThroughReflection =
                            userInvokingAPI.getClass().getDeclaredMethod(methodToInvoke, signatureOfParameters);
                    methodThroughReflection.setAccessible(true);

                    // here we actually execute the API by invoking the method with the provided parameters
                    UserOutput userOutputOfAPI =
                            (UserOutput) methodThroughReflection.invoke(userInvokingAPI, args);

                    OperationOutcomeCode outcomeCode = userOutputOfAPI.getReturningCode();
                    outputAPI = new APIOutput(
                            outcomeCode == code_0 ? userOutputOfAPI.getRetuningValue() : outcomeCode.toString(),
                            outcomeCode);
                    response.status(outcomeCode == code_0 ? HttpStatus.OK_200 : HttpStatus.INTERNAL_SERVER_ERROR_500);

                    App.logger.info("[{}{}{}{} ", className, " (" + executeAPI + ")]: ",
                            "API executed, the result is: ", outputAPI.getOutcomeCode());
                }
                // it means that the user is trying to execute an operation that
                // requires administrator privileges (that the user does not have)
                else {
                    App.logger.error("[{}{}{}{}{} ", className, " (" + executeAPI + ")]: ", "user ",
                            loggedUser, " is trying to invoke an API that requires admin privileges");
                    outputAPI = new APIOutput(code_65.toString(), code_65);
                    response.status(HttpStatus.FORBIDDEN_403);
                }
            }
            // it means that the user is logged in, but there are
            // no user's data in the session. This is an error
            else {
                App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + executeAPI + ")]: ",
                        "user ", loggedUser, " for storage system ", selectedDAO, " is logged in, ",
                        "but there are no user's data in the session");
                outputAPI = new APIOutput(code_500.toString(), code_500);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
            }
        }
        // this exception is thrown while building back the cryptographic keys
        catch (NoSuchAlgorithmException | InvalidKeyException | InvalidKeySpecException e) {
            App.logger.error("[{}{}{} ", className, " (" + executeAPI + ")]: ",
                    "exception while building back PKC keys (" + e.getMessage() + ")");
            outputAPI = new APIOutput(code_18.toString(), code_18);
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // this exception is thrown while invoking the method through reflection
        catch (InvocationTargetException | NoSuchMethodException | IllegalAccessException e) {
            App.logger.error("[{}{}{}{}{} ", className, " (" + executeAPI + ")]: ",
                    "exception while invoking the method via reflection (", e.getMessage(), ")");
            outputAPI = new APIOutput(code_39.toString(), code_39);
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }

        return outputAPI;
    }
}
