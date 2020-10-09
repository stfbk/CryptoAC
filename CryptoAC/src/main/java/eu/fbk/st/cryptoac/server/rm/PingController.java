package eu.fbk.st.cryptoac.server.rm;

import eu.fbk.st.cryptoac.server.model.APIOutput;
import eu.fbk.st.cryptoac.server.util.JSONUtil;
import org.eclipse.jetty.http.HttpStatus;
import spark.Request;
import spark.Response;
import spark.Route;

import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.code_0;

/**
 * This class is the controller for pings to the RM.
 */
public class PingController {

    /**
     * This endpoint handles GET requests for pinging the RM
     */
    public static Route ping = (Request request, Response response) -> {

        // TODO authentication

        APIOutput invocationResult = new APIOutput(
                code_0.toString(),
                code_0.toString(),
                HttpStatus.OK_200);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };
}
