package eu.fbk.st.cryptoac.server.util;

import eu.fbk.st.cryptoac.App;
import org.eclipse.jetty.http.HttpStatus;
import spark.*;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import static eu.fbk.st.cryptoac.server.util.ErrorUtil.badRequest;
import static eu.fbk.st.cryptoac.util.SafeRegex.*;
import static spark.Spark.halt;

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
     * Utility method to log any incoming request.
     */
    public static Filter logRequest = (Request request, Response response) -> {
        String method = request.requestMethod();
        String uri = request.uri();
        if (matchRegex(safeTextNoSpacesRegex, method) && matchRegex(uriRegex, uri)) {
            App.logger.info("{}{}{}{} ","Received a ", request.requestMethod() ," request for ", request.uri());
        }
        else {
            App.logger.error("Received a request whose method or uri does not match a safe regex. "
                    + "Printing, encoded in base64, the method ("
                    + Base64.getEncoder().encodeToString(method.getBytes(StandardCharsets.UTF_8))
                    + ") and the uri ("
                    + Base64.getEncoder().encodeToString(uri.getBytes(StandardCharsets.UTF_8))
                    + ")");
            halt(HttpStatus.BAD_REQUEST_400, (String) badRequest.handle(request, response));
            // TODO take further action?
        }
    };

    /**
     * This filer enables GZIP header for all responses.
     */
    public static Filter addGzipHeader = (Request request, Response response) ->
            response.header("Content-Encoding", "gzip");
}