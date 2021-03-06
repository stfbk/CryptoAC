package eu.fbk.st.cryptoac.server.proxy.users;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import eu.fbk.st.cryptoac.util.AccessControlEnforcement;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import eu.fbk.st.cryptoac.server.util.*;
import eu.fbk.st.cryptoac.dao.DAO;
import spark.Request;
import spark.Response;
import spark.Route;
import spark.route.HttpMethod;

import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;

import static eu.fbk.st.cryptoac.server.proxy.util.APIFinalizer.*;
import static eu.fbk.st.cryptoac.server.util.ErrorUtil.error;
import static eu.fbk.st.cryptoac.util.Const.*;
import static eu.fbk.st.cryptoac.server.util.RequestUtil.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.*;

/**
 * This class is the controller for APIs that users can invoke.
 */
public class UserController {

    /**
     * This endpoint handles GET requests for reading files.
     */
    public static Route readFile = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

        String nameOfTheFile = getPathParameter(request, kFileNameInCryptoAC);

        invocationResult = executeAPI(request, response, selectedDAO,
                false, API.GETFILE, HttpMethod.get, nameOfTheFile);

        // if everything went well, it means that there is a file ready to be downloaded by the user
        // we return the file to the user piece by piece, we do not want to read the whole file into
        // memory (i.e., we do not want to use streamToReturn.readAllBytes() )
        if (invocationResult.getOutcomeCode().equals(OperationOutcomeCode.code_0)) {

            InputStream fileToReturn = ((InputStream) invocationResult.getOutputJSON());

            HttpServletResponse rawResponse = response.raw();
            
            // set "application/octet-stream" even though it is not, as I did not found a (reliable) way of
            // getting the mime type from the file extension or stream) and the content disposition header
            rawResponse.setContentType("application/octet-stream");
            response.header("Content-Disposition", "attachment; filename=" + nameOfTheFile);
            response.header("Content-Type", "application/octet-stream");

            // this is the maximum part that we want to return to the user in one time
            int singlePart = 5 * 1024 * 1024;

            // boolean variable to check whether there are still bytes to
            // read from the file stream and return to the user
            boolean areThereStillBytesToRead = true;

            byte[] bytesToReturn;

            while (areThereStillBytesToRead) {

                byte[] bufferInThisLoop = new byte[singlePart];
                int numberOfReadBytes = fileToReturn.read(bufferInThisLoop);

                // the stream is empty
                if (numberOfReadBytes == -1) {
                    areThereStillBytesToRead = false;
                }
                else {
                    if (numberOfReadBytes < singlePart) {
                        bytesToReturn = new byte[numberOfReadBytes];
                        System.arraycopy(bufferInThisLoop, 0, bytesToReturn, 0, numberOfReadBytes);
                    }
                    else
                        bytesToReturn = bufferInThisLoop;

                    // write the files in the output stream and flush
                    rawResponse.getOutputStream().write(bytesToReturn);
                }
                rawResponse.getOutputStream().flush();
            }
            rawResponse.getOutputStream().close();
            return response.raw();
        }
        // it means that something went wrong while asking to read the file
        else
            return error(request, response, invocationResult.getOutcomeCode().toString(), invocationResult.getOutcomeCode());
    };

    /**
     * This endpoint handles POST requests for adding new files.
     */
    public static Route addFile = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

        String nameOfTheFile = request.raw().getPart(kFileInCryptoAC).getSubmittedFileName();
        String accessControlLevel =
                new String(request.raw().getPart(kAccessControlEnforcement).getInputStream().readAllBytes());
        AccessControlEnforcement accessControlEnforcement = AccessControlEnforcement.get(accessControlLevel);

        InputStream fileInputStream = getStreamParameterNoCheckSizeFromMultipart(request, kFileInCryptoAC);

        invocationResult = executeAPI(request, response, selectedDAO, false,
                API.POSTFILE, HttpMethod.post, nameOfTheFile, fileInputStream, accessControlEnforcement);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles PATCH requests for writing over files.
     */
    public static Route writeFile = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

        String fileNameToUpload = request.raw().getPart(kFileInCryptoAC).getSubmittedFileName();
        InputStream fileInputStream = getStreamParameterNoCheckSizeFromMultipart(request, kFileInCryptoAC);

        invocationResult = executeAPI(request, response, selectedDAO, false,
                API.PATCHFILE, HttpMethod.patch, fileNameToUpload, fileInputStream);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles GET requests for retrieving role tuples.
     */
    public static Route listAssignments = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

        // get optional parameters
        String givenOffset      = getQueryParameter(request, kOffsetInCryptoAC);
        String givenLimit       = getQueryParameter(request, kLimitInCryptoAC);
        String givenRoleName    = getQueryParameter(request, kRoleNameInCryptoAC);

        // if optional parameters are null, pass the class instead
        invocationResult = executeAPI(request, response, selectedDAO, false,
                API.GETASSIGNMENTS, HttpMethod.get,
                givenRoleName == null ? String.class : givenRoleName,
                givenOffset == null ? Integer.class : Integer.parseInt(givenOffset),
                givenLimit == null ? Integer.class : Integer.parseInt(givenLimit));

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles GE requests for retrieving permission tuples.
     */
    public static Route listPermissions = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

        // get optional parameters
        String givenOffset   = getQueryParameter(request, kOffsetInCryptoAC);
        String givenLimit    = getQueryParameter(request, kLimitInCryptoAC);
        String givenRoleName = getQueryParameter(request, kRoleNameInCryptoAC);
        String givenFileName = getQueryParameter(request, kFileNameInCryptoAC);

        // if optional parameters are null, pass the class instead
        invocationResult = executeAPI(request, response, selectedDAO, false,
                API.GETPERMISSIONS, HttpMethod.get, 
                givenRoleName == null ? String.class : givenRoleName,
                givenFileName == null ? String.class : givenFileName,
                givenOffset == null ? Integer.class : Integer.parseInt(givenOffset),
                givenLimit == null ? Integer.class : Integer.parseInt(givenLimit));

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };
}