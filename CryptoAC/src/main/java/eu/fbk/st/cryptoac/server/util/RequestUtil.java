package eu.fbk.st.cryptoac.server.util;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.server.model.Credentials;
import org.eclipse.jetty.http.HttpStatus;
import spark.Filter;
import spark.Request;
import spark.Response;
import spark.Session;

import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletException;
import javax.servlet.http.Part;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.*;


import static eu.fbk.st.cryptoac.server.util.ErrorUtil.notAcceptable;
import static eu.fbk.st.cryptoac.util.SafeRegex.*;
import static spark.Spark.halt;

/**
 * Utility class for handling HTTP requests and session parameters.
 */
public class RequestUtil {

    // variables for logging
    private static final String className = "RequestUtil";
    private static final String checkRequestIsWellFormattedLog = "checkRequestIsWellFormatted";
    private static final String getCredentialsFromAuthnHeaderBasic = "getCredentialsFromAuthnHeaderBasic";
    private static final String checkRequestAcceptJSONLog = "checkRequestAcceptJSON";


    /**
     * The maximum size of the input for parts (i.e., all except uploaded files).
     */
    private static final int maxInputSize = 2048;


    /**
     * generic setter for attributes of the user's session.
     * @param request the HTTP request
     * @param key key of the attribute
     * @param value value of the attribute
     */
    public static void setSessionParameter(Request request, String key, Object value) {
        request.session().attribute(key, value);
    }

    /**
     * generic getter for path parameters in HTTP requests. The parameters must have been specified
     * in the route (e.g., "/user/:name" => you can request.params("name")) with the colon.
     * @param request the HTTP request
     * @param parameter the key of the parameter
     * @return the parameter, if any. Null otherwise
     */
    public static String getPathParameter(Request request, String parameter) {
        // TODO check here against safe regex? or check in any usage of this?
        return request.params(parameter);
    }

    /**
     * generic getter for query parameters in HTTP requests. The parameters are those
     * specified as key:value after the "?" in the URL
     * @param request the HTTP request
     * @param parameter the key of the parameter
     * @return the parameter, if any. Null otherwise
     */
    public static String getQueryParameter(Request request, String parameter) {
        // TODO check here against safe regex? or check in any usage of this?
        return request.queryParams(parameter);
    }

    /**
     * specific getter for parameters in multipart HTTP requests.
     * @param request the HTTP request
     * @param parameter the key of the parameter
     * @return the parameter, if any. Null otherwise
     * @throws IOException exception while getting the part from the request
     * @throws ServletException exception while getting the part from the request
     * @throws IllegalArgumentException a part is too big in size
     */
    public static String getStringParameterFromMultipart(Request request, String parameter)
            throws IOException, ServletException, IllegalArgumentException {

        // TODO check here against safe regex? or check in any usage of this?

        String returningValue = null;

        Part partParameter = request.raw().getPart(parameter);
        if (partParameter != null) {

            if (partParameter.getSize() < maxInputSize) {

                InputStream partInputStream = partParameter.getInputStream();
                if (partInputStream != null)
                    returningValue = new String(partInputStream.readAllBytes());
            }
            // it means that the size of the part exceeds the maximum size
            else
                throw new IllegalArgumentException("Input to big for part with name " +
                        partParameter.getName() + ", content type " + partParameter.getContentType() +
                        ", size " + partParameter.getSize() + " (limit is " + maxInputSize + " bytes).");
        }
        return returningValue;
    }

    /**
     * utility method to get all not-empty parameters in a multipart request as byte arrays.
     * Note that the maximum size limit ($maxInputSize) applies.
     * @param request the HTTP request
     * @return a map of the present parameters. The key is the name, the value the byte array
     * @throws IOException exception while getting the part from the request
     * @throws ServletException exception while getting the part from the request
     * @throws IllegalArgumentException a part is too big in size
     */
    public static HashMap<String, byte[]> getParametersFromMultipart(Request request)
            throws IOException, ServletException, IllegalArgumentException {

        HashMap<String, byte[]> parametersMap = new HashMap<>();

        for (Part tempPart : request.raw().getParts()) {

            if (tempPart.getSize() < maxInputSize) {

                byte[] tempPartBytes = tempPart.getInputStream().readAllBytes();
                if (tempPartBytes.length != 0)
                    parametersMap.put(tempPart.getName(), tempPartBytes);
            }
            // it means that the size of the part exceeds the maximum size
            else
                throw new IllegalArgumentException("Input to big for part with name " +
                        tempPart.getName() + ", content type " + tempPart.getContentType() +
                        ", size " + tempPart.getSize() + " (limit is " + maxInputSize + " bytes).");
        }

        return parametersMap;
    }

    /**
     * specific getter for parameters in a multipart HTTP request.
     * Note that the size of the parameter is not checked.
     * @param request the HTTP request
     * @param parameter the key of the parameter
     * @return the parameter, if any. Null otherwise
     * @throws IOException exception while getting the part from the request
     * @throws ServletException exception while getting the part from the request
     */
    public static InputStream getStreamParameterNoCheckSizeFromMultipart(Request request, String parameter)
            throws IOException, ServletException {

        InputStream returningValue = null;

        Part partParameter = request.raw().getPart(parameter);

        if (partParameter != null)
            returningValue = partParameter.getInputStream();

        return returningValue;
    }

    /**
     * generic getter for user's session parameters.
     * @param request the HTTP request
     * @param parameter the key of the parameter
     * @return the parameter, if any. Null otherwise
     */
    public static Object getSessionParameter(Request request, String parameter) {

        Object requestedValue = null;

        if (isThereAttributeInSession(request, parameter))
            requestedValue = request.session().attribute(parameter);

        return requestedValue;
    }

    /**
     * generic getter for user's session parameters which
     * also removes the parameter from the user's session.
     * @param request the HTTP request
     * @param parameter the key of the parameter
     * @return the parameter, if any. Null otherwise
     */
    public static Object popSessionParameter(Request request, String parameter) {

        Object requestedValue = null;

        if (isThereAttributeInSession(request, parameter)) {
            requestedValue = request.session().attribute(parameter);
            request.session().removeAttribute(parameter);
        }

        return requestedValue;
    }

    /**
     * ensure that the client accepts HTML responses.
     * @param request the HTTP request
     * @return true if the client accepts HTML responses, false otherwise
     */
    public static boolean userAcceptsHtml(Request request) {
        String accept = request.headers("Accept");
        return accept != null && accept.contains("text/html");
    }

    /**
     * ensure that the client accepts JSON responses.
     * @param request the HTTP request
     * @return true if the client accepts JSON responses, false otherwise
     */
    public static boolean clientAcceptsJson(Request request) {
        String accept = request.headers("Accept");
        return accept != null && accept.contains("application/json");
    }


    /**
     * Utility method to check if in the given attribute is present in the user's session
     * @param request HTTP request object
     * @param requestedAttribute the key of the parameter
     * @return true if present, false otherwise
     */
    public static boolean isThereAttributeInSession(Request request, String requestedAttribute) {

        boolean isThere = false;

        Session currentSession = request.session(false);

        if (currentSession != null)
            isThere = currentSession.attributes().contains(requestedAttribute);

        return isThere;
    }

    /**
     * Utility method to get the credentials from the Authentication header, if any.
     * @param request the HTTP request
     * @return an array of Strings [username, password], or null if no credentials were provided or there was an error
     */
    public static Credentials getCredentialsFromAuthnHeaderBasic(Request request) {

        String authorizationHeader = request.headers("Authorization");
        Credentials credentials = null;

        if (authorizationHeader != null) {

            try {

                String[] authorizationHeaderSplit = authorizationHeader.split(" ");
                String authenticationMethod = authorizationHeaderSplit[0];
                String base64EncodedCredentials = authorizationHeaderSplit[1];

                // if the login is BASIC (https://en.wikipedia.org/wiki/Basic_access_authentication)
                if ("Basic".equals(authenticationMethod)) {

                    if (matchRegex(base64Regex, base64EncodedCredentials)) {

                        // get the credentials that were encoded in Base64.
                        // The first string is the username, the second string is the password
                        String[] credentialsArray = new String(Base64.getDecoder()
                                .decode(base64EncodedCredentials)).split(":");
                        String givenUsername = credentialsArray[0];
                        String givenPassword = credentialsArray[1];

                        // TODO check also the password against a regex? how?
                        //  we should first decide a policy wrt passwords, like hashing
                        if (matchRegex(safeTextNoSpacesRegex, givenUsername)) {
                            credentials = new Credentials(givenUsername, givenPassword);
                        }
                        else {
                            App.logger.error("Received a request whose username in the authentication header " +
                                "credentials does not match a safe regex. Printing, encoded in base64, the username ("
                                + Base64.getEncoder().encodeToString(givenUsername.getBytes(StandardCharsets.UTF_8))
                                + ")");
                        }
                    }
                    else {
                        App.logger.error("Received a request whose authentication header credentials does not match"
                                + " a safe regex. Printing, encoded in base64, the credentials ("
                                + Base64.getEncoder().encodeToString(base64EncodedCredentials
                                .getBytes(StandardCharsets.UTF_8))
                                + ")");
                        // TODO take further action?
                    }
                }
                // it means that the authentication method is not supported
                else {
                    if (matchRegex(safeTextNoSpacesRegex, authenticationMethod)) {
                        App.logger.error("[{}{}{}{} ", className, " (" + getCredentialsFromAuthnHeaderBasic + ")]: ",
                                "type of authentication is not supported: ", authenticationMethod);
                    }
                    else {
                        App.logger.error("Received a request whose authentication type does not match a safe regex. "
                                + "Printing, encoded in base64, the authentication type ("
                                + Base64.getEncoder().encodeToString(authenticationMethod.getBytes(StandardCharsets.UTF_8))
                                + ")");
                        // TODO take further action?
                    }
                }
            }
            catch (Throwable e) {
                App.logger.error("[{}{}{}{}{} ", className, " (" + getCredentialsFromAuthnHeaderBasic + ")]: ",
                        "unexpected error while getting the credentials (", e.getMessage(), ")");
            }
        }
        // it means that the authentication header is empty
        else {
            App.logger.warn("[{}{}{} ", className, " (" + getCredentialsFromAuthnHeaderBasic + ")]: ",
                    "the Authentication header is empty");
        }
        return credentials;
    }


    /**
     * Utility method to add the multipart Jetty configuration attribute if the request is multipart
     */
    public static Filter setAttributeForMultipart = (Request request, Response response) -> {

        String contentType = request.contentType();
        contentType = contentType == null ? "" : contentType;

        if (contentType.contains("multipart/form-data"))
            // since it is a multipart, we need to set the
            // right property to parse the data in the request
            request.raw().setAttribute("org.eclipse.jetty.multipartConfig",
                    new MultipartConfigElement("/tmp"));
    };

    /**
     * Utility method to check whether an HTTP request accepts JSON as response.
     * If not, the method redirects to 406.
     */
    public static Filter checkRequestAcceptJSON = (Request request, Response response) -> {

        // is the client accept JSON
        if (!clientAcceptsJson(request)) {
            App.logger.error("[{}{}{} ", className, " (" + checkRequestAcceptJSONLog + ")]: ",
                    "the HTTP request does not accept JSON as response");
            halt(HttpStatus.NOT_ACCEPTABLE_406, (String) notAcceptable.handle(request, response));
        }
    };
}
