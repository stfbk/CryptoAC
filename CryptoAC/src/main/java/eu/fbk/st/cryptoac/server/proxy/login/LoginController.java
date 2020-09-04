package eu.fbk.st.cryptoac.server.proxy.login;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.server.model.Credentials;
import eu.fbk.st.cryptoac.server.util.ErrorUtil;
import eu.fbk.st.cryptoac.server.proxy.util.ViewUtil;
import spark.Filter;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.HashMap;
import java.util.Map;

import static eu.fbk.st.cryptoac.server.util.ErrorUtil.unauthorized;
import static eu.fbk.st.cryptoac.util.Const.*;
import static eu.fbk.st.cryptoac.server.util.RequestUtil.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.*;
import static eu.fbk.st.cryptoac.util.Const.SessionKeys.*;
import static eu.fbk.st.cryptoac.util.Const.Server.*;
import static spark.Spark.halt;

/**
 * This class is the controller for the login and the session
 * of users, the login page and authentication requests
 */
public class LoginController {

    // variables for logging
    private static final String className = "LoginController";
    private static final String loginLog = "login";
    private static final String logoutLog = "logout";
    private static final String authenticateUserLog = "authenticateUser";


    /**
     * This method serves the login HTML page.
     * Each user from the web interface has to
     * be logged in before performing any action.
     */
    public static Route loginPage = (Request request, Response response) -> {

        if (isUserLoggedIn(request))
            response.redirect(API.INDEX);
        else
            return ViewUtil.render(new HashMap<>(), kHTMLTemplateLogin);

        return null;

    };

    /**
     * This method logs out the user and
     * then server the login page.
     */
    public static Route logout = (Request request, Response response) -> {

        if (isUserLoggedIn(request)) {

            request.session().invalidate();

            Map<String, Object> model = new HashMap<>();
            model.put(kLoggedOut, true);
            return ViewUtil.render(model, kHTMLTemplateLogin);
        }
        // it means that the user asked to logout but he was not logged in
        else
            response.redirect(API.LOGIN);

        return null;
    };

    /**
     * This method handles authentication requests and redirects users to the index page.
     * If the authentication was not successful, it redirects back to the
     * login page with the proper error message.
     */
    public static Route login = (Request request, Response response) -> {

        if (isUserLoggedIn(request))
            response.redirect(API.INDEX);

        else {

            // get the credentials from the POST parameters
            String givenUsername = (String) getOptionalQueryParameter(request, kUserLoggingIn);
            String givenPassword = (String) getOptionalQueryParameter(request, kPasswordOfUserLoggingIn);

            if (givenUsername.isBlank() || givenPassword.isBlank())
                return ErrorUtil.missingParameter.handle(request, response);

            if (authenticateUser(givenUsername, givenPassword)) {

                request.session(true);
                request.session().maxInactiveInterval(App.sessionExpirationTime);
                setSessionParameter(request, kCurrentlyLoggedUser, givenUsername);

                response.redirect(API.INDEX);
            }
            // it means that the authentication was not successful
            else {

                App.logger.error("[{}{}{}{} ", className, " (" + loginLog + ")]: ",
                        "authentication failed for user ", givenUsername);
                halt(401, (String) unauthorized.handle(request, response));
            }
        }

        return null;
    };

    /**
     * This method authenticates users.
     * @param username the given username
     * @param password the given password
     * @return true or false depending on the outcome of the verification of the given credentials
     */
    public static boolean authenticateUser (String username, String password) {
        // TODO Silvio said with SSO and Google
        return true;
    }

    /**
     * Checks whether the user is logged in.
     * @param request the HTTP request
     * @return true if the user is already logged in, false otherwise
     */
    public static boolean isUserLoggedIn (Request request) {
        return isThereAttributeInSession(request, kCurrentlyLoggedUser);
    }

    /**
     * This method is invoked before an API is executed to check that the user is
     * logged in and authenticated (there is a session). If not, the method tries
     * to authenticate the user through the Authentication header in the
     * HTTP request. OAuth tokens are not currently supported. TODO in the future
     */
    public static Filter authenticateUser = (Request request, Response response) -> {

        // it means that the user is not logged in. Therefore, we try to authenticate
        // the user through the Authentication header in the HTTP request
        if (!isUserLoggedIn(request)) {

            Credentials credentials = getCredentialsFromAuthnHeaderBasic(request);

            if (credentials == null) {
                App.logger.error("[{}{}{} ", className, " (" + authenticateUserLog + ")]: ",
                        "user is not authenticated and did not provide Basic header credentials");
                halt(401, (String) unauthorized.handle(request, response));
            }
            else {

                String username = credentials.getUsername();
                String password = credentials.getPassword();

                if (!authenticateUser(username, password)) {
                    App.logger.error("[{}{}{} ", className, " (" + authenticateUserLog + ")]: ",
                            "user is not authenticated and header credentials are wrong");
                    halt(401, (String) unauthorized.handle(request, response));
                }
                // it means that the user successfully authenticated
                else {

                    request.session(true);
                    request.session().maxInactiveInterval(App.sessionExpirationTime);
                    setSessionParameter(request, kCurrentlyLoggedUser, username);

                    App.logger.info("[{}{}{}{}{} ", className, " (" + authenticateUserLog + ")]: ",
                            "user ", username, " authenticated with header credentials");
                }
            }
        }
    };
}
