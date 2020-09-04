package eu.fbk.st.cryptoac.server.util;

import eu.fbk.st.cryptoac.App;
import spark.*;

/**
 * This class contains filters to apply before and after an HTTP request has been received
 */
public class FiltersUtil {


    /**
     * If a user manually manipulates paths or forgets to add
     * a trailing slash, redirect the user to the correct path.
     */
    public static Filter addTrailingSlashes = (Request request, Response response) -> {
        if (!request.pathInfo().endsWith("/"))
            response.redirect(request.pathInfo() + "/");
    };

    /**
     * This filer enables GZIP header for all responses.
     */
    public static Filter addGzipHeader = (Request request, Response response) ->
            response.header("Content-Encoding", "gzip");

    /**
     * Utility method to log any incoming request.
     */
    public static Filter logRequest = (Request request, Response response) -> {
        if (request.pathInfo().endsWith("/"))
            App.logger.info("{}{}{}{} ","Received a ", request.requestMethod() ," request for ", request.uri());
    };
}