package eu.fbk.st.cryptoac.server.util;

import com.google.gson.Gson;
import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import org.eclipse.jetty.http.HttpStatus;
import spark.Response;

/**
 * This class contains methods related to transformations from and to JSONs for the returning values of APIs.
 */
public class JSONUtil {

    private static final String className = "JSONUtil";
    private static final String dataToJSON = "dataToJSON";

    /**
     * This method transforms the given instance of APIOutputModel to a JSON string.
     * @param objectToTransform the object to transform to a JSON string
     * @param response the HTTP response, so to set the response status accordingly
     * @return the API output as a JSON string
     */
    public static String getJSONToReturn(APIOutput objectToTransform, Response response) {

        String objectToJSON;

        response.type("application/json");

        try {
            objectToJSON = new Gson().toJson(objectToTransform);
            response.status(objectToTransform.getHttpStatus());
        }
        // this exception is thrown is the transformation failed
        catch (Exception e) {

            App.logger.error("[{}{}{} ", className, " (" + dataToJSON + ")]: ",
                    "exception while mapping API output model to a JSON string (" + e.getMessage() + ")");

            objectToJSON = "{" +
                    "\"outcomeCode\":\"Server Exception: exception while mapping object to JSON\"," +
                    "\"outputJSON\":\"Server Exception: exception while mapping object to JSON\"," +
                    "\"httpStatus\":\"500\"" +
                    "}";
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        return objectToJSON;
    }
}
