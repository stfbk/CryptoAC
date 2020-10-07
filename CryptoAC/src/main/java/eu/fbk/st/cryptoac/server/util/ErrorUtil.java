package eu.fbk.st.cryptoac.server.util;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import org.eclipse.jetty.http.HttpStatus;
import spark.ExceptionHandler;
import spark.Request;
import spark.Response;
import spark.Route;

import java.util.HashMap;
import java.util.Map;

import static eu.fbk.st.cryptoac.server.proxy.util.ViewUtil.render;
import static eu.fbk.st.cryptoac.server.util.JSONUtil.getJSONToReturn;
import static eu.fbk.st.cryptoac.server.util.RequestUtil.userAcceptsHtml;
import static eu.fbk.st.cryptoac.util.Const.Server.kHTMLTemplateError;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;

/**
 * This class is the controller for HTTP errors.
 */
public class ErrorUtil {


    /**
     * This method returns the 400 error template in HTML or the API output object in JSON.
     */
    public static Route badRequest = (Request request, Response response) ->
            error(request, response, HttpStatus.BAD_REQUEST_400,
                    "Sorry! You sent a bad request", code_400.toString());

    /**
     * This method returns the 401 error template in HTML or the API output object in JSON.
     */
    public static Route unauthorized = (Request request, Response response) ->
            error(request, response, HttpStatus.UNAUTHORIZED_401,
                    "Sorry! You must be authenticated to access this resource", code_401.toString());

    /**
     * This method returns the 403 error template in HTML or the API output object in JSON.
     */
    public static Route forbidden = (Request request, Response response) ->
            error(request, response, HttpStatus.FORBIDDEN_403,
                "Sorry! You do not have the necessary permissions or need to configure an account", code_403.toString());


    /**
     * This method returns the 404 error template in HTML or the API output object in JSON.
     */
    public static Route notFound = (Request request, Response response) ->
            error(request, response, HttpStatus.NOT_FOUND_404,
                    "Sorry! Resource not found", code_404.toString());

    /**
     * This method returns the 406 error template in HTML or the API output object in JSON.
     */
    public static Route notAcceptable = (Request request, Response response) ->
            error(request, response, HttpStatus.NOT_ACCEPTABLE_406,
                "Sorry! You made a not acceptable request", code_406.toString());


    /**
     * This method returns the 422 error template in HTML or the API output object in JSON.
     */
    public static Route unprocessableEntity = (Request request, Response response) ->
            error(request, response, HttpStatus.UNPROCESSABLE_ENTITY_422,
                    "Sorry! It seems you missed or wrongly set a parameter", code_422.toString());


    /**
     * This method returns the 500 error template in HTML or the API output object in JSON.
     */
    public static Route internalError = (Request request, Response response) ->
         error(request, response, HttpStatus.INTERNAL_SERVER_ERROR_500,
                    "Sorry! We had an internal error, please retry", code_500.toString());


    /**
     * This method returns the 500 error template when an exception arises and is not caught
     */
    public static ExceptionHandler<Exception> internalErrorException = (Exception e, Request request, Response response) -> {
        App.logger.error("[{}{}{} ", "ErrorController", " (" + "internalErrorException" + ")]: ",
                "Exception while handling request to " + request.uri() + ": " + e.getMessage(), e);

        error(request, response, HttpStatus.INTERNAL_SERVER_ERROR_500,
                "Sorry! We had an internal error, please retry", code_500.toString());
    };


    /**
     * This is a utility method to fill the Apache Velocity Engine model to animate the HTML error page.
     * @param first first digit of HTTP error code
     * @param second second digit of HTTP error code
     * @param third third digit of HTTP error code
     * @param errorMessage a more detailed error message
     * @return the model, filled with the given variables
     */
    public static Map<String, Object> renderModel(String first, String second, String third, String errorMessage) {

        // the Model that will be put in the template for the
        // dynamic generation of the HTML View (MVC)
        Map<String, Object> model = new HashMap<>();

        // insert all the variables
        model.put("errorMessage", errorMessage);
        model.put("first", first);
        model.put("second", second);
        model.put("third", third);

        return model;
    }

    /**
     * Utility method to generate an error template in HTML or the API output object in JSON given an error code.
     * @param request the HTTP request
     * @param response the HTTP response
     * @param httpStatus the HTTP error status
     * @param message the more detailed error message
     * @param code operation outcome code
     * @return a string representing the rendered template
     */
    public static String error(Request request, Response response, Integer httpStatus,
                                String message, String code) {

        response.status(httpStatus);
        String returningValue;

        String first, second, third;
        third = String.valueOf( httpStatus      % 10);
        second = String.valueOf((httpStatus/10) % 10);
        first = String.valueOf((httpStatus/100) % 10);

        if (userAcceptsHtml(request))
            returningValue = render(renderModel(first, second, third, message), kHTMLTemplateError);
        // in any other case, answer with a JSON
        else {
            APIOutput error = new APIOutput(null, code, httpStatus);
            returningValue = getJSONToReturn(error, response);
        }

        return returningValue;
    }
}
