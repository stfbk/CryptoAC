package eu.fbk.st.cryptoac.server.ds;

import com.google.gson.Gson;
import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.dao.DAO;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocal;
import eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocalParameters;
import eu.fbk.st.cryptoac.dao.local.OPADocument;
import eu.fbk.st.cryptoac.dao.local.OPAQuery;
import eu.fbk.st.cryptoac.util.FileUtil;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import eu.fbk.st.cryptoac.server.util.JSONUtil;
import org.eclipse.jetty.http.HttpStatus;
import spark.Request;
import spark.Response;
import spark.Route;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.FileAlreadyExistsException;
import java.time.Duration;
import java.util.HashMap;
import java.util.UUID;

import static eu.fbk.st.cryptoac.App.downloadDirectoryDS;
import static eu.fbk.st.cryptoac.App.uploadDirectoryDS;
import static eu.fbk.st.cryptoac.dao.DAOInterfaceMySQL.*;
import static eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocal.*;
import static eu.fbk.st.cryptoac.util.Const.API.OPARBACPOLICY;
import static eu.fbk.st.cryptoac.util.Const.API.OPARBACQUERY;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceLocalParameters.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceLocalParameters.kLocalOPAPort;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceMySQLParameters.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceParameters.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.*;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;
import static eu.fbk.st.cryptoac.util.FileUtil.SaveMode.THROW_EXCEPTION;
import static eu.fbk.st.cryptoac.server.util.RequestUtil.*;
import static java.lang.System.exit;

public class FilesController {

    // variables for logging
    public static final String className = "FilesController";
    public static final String moveFileLog = "moveFile";
    public static final String downloadFileLog = "downloadFile";
    public static final String uploadFileLog = "uploadFile";
    public static final String overwriteFileLog = "overwriteFile";
    public static final String deleteFileLog = "deleteFile";
    public static final String configureLog = "configure";

    /**
     * The url + port of the OPA server.
     */
    public static String opaBaseAPI;

    /**
     * Initialise the DS by configuring URL and port of the OPA server
     * @param givenOPABaseAPI url + port of the OPA server
     */
    private static void initialize (String givenOPABaseAPI) {
        opaBaseAPI = givenOPABaseAPI;
    }


    /**
     * POST | configure the DS
     */
    public static Route configure = (Request request, Response response) -> {

        // TODO check that admin is the one actually requesting the operation

        APIOutput invocationResult;

        App.logger.info("[{}{}{} ", className, " (" + configureLog + ")]: ",
                "received request to configure DS ");

        // first, acquire the parameters from the request
        String opaBaseAPI = getStringParameterFromMultipart(request, DAOInterfaceLocal.kOPABaseAPI);

        invocationResult = new APIOutput(code_0.toString(), code_0);
        response.status(HttpStatus.OK_200);

        initialize(opaBaseAPI);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * GET | download a file
     */
    public static Route downloadFile = (Request request, Response response) -> {

        // TODO check that cryptoac users are those actually downloading the file (authenticate users)

        APIOutput invocationResult = null;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

        String fileName = getPathParameter(request, kFileNameInCryptoAC);

        try {

//            // TODO authenticate users, then check file tuple to see
//            //  if to enforce AC or not and then build input string
//            String userName = "TODO";
//
//
//            String input = "{\"input\":{\"user\": \""
//                    + userName
//                    + "\", \"associatedPermission\": \"Read\", \"associatedFile\":\""
//                    + fileName
//                    +"\"}}";
//
//            App.logger.info("[{}{}{}{}{}{} ", className, " (" + downloadFileLog + ")]: ",
//                    "user ", userName, " asked to download file ", fileName);
//
//            HttpRequest requestToAuthorizeUser = HttpRequest.newBuilder()
//                    .version(HttpClient.Version.HTTP_2)
//                    .timeout(Duration.ofSeconds(kTimeoutInSeconds))
//                    .uri(new URI(kHTTP + opaBaseAPI + OPARBACQUERY))
//                    .header("Content-Type", "application/json")
//                    .POST(HttpRequest.BodyPublishers.ofString(input))
//                    .build();
//
//            HttpResponse<String> responseFromAuthorizeUser = HttpClient.newBuilder()
//                    .version(HttpClient.Version.HTTP_2)
//                    .connectTimeout(Duration.ofSeconds(kTimeoutInSeconds))
//                    .build().send(requestToAuthorizeUser, HttpResponse.BodyHandlers.ofString());
//
//            int statusCode = responseFromAuthorizeUser.statusCode();
//
//            if (statusCode >= HttpStatus.BAD_REQUEST_400) {
//                App.logger.error("[{}{}{}{} ", className, " (" + downloadFileLog + ")]: ",
//                        "OPA policy query returned HTTP status ", statusCode);
//                throw new DAOException(null, code_91);
//            }
//
//            OPAQuery opaQuery = new Gson().fromJson(responseFromAuthorizeUser.body(), OPAQuery.class);
//
//            // if the user is allows to read the file
//            if (opaQuery.getResult()) {
//
//            }
//            else {
//                // return 404
//            }







            InputStream fileToReturn = new FileInputStream(
                    downloadDirectoryDS.getAbsolutePath() + "/" + selectedDAO + "/" + fileName);

            HttpServletResponse rawResponse = response.raw();

            // set "application/octet-stream" even though it is not, as I did not found a (reliable) way of
            // getting the mime type from the file extension or stream) and the content disposition header
            rawResponse.setContentType("application/octet-stream");
            response.header("Content-Disposition", "attachment; filename=" + fileName);

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
        }
        // the file does not exist
        catch (FileNotFoundException e) {
            App.logger.error("[{}{}{}{}{} ", className, " (" + uploadFileLog + ")]: ",
                    "file ", fileName, " not found");
            invocationResult = new APIOutput(code_6.toString(), code_6);
            response.status(HttpStatus.NOT_FOUND_404);
        }

        if (invocationResult == null)
            return response.raw();
        else
            return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * PATCH | check that the file exists in the upload folder and move it in the download folder
     */
    public static Route moveFile = (Request request, Response response) -> {

        // TODO check that the RM is the one actually submitting the request

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));
        String fileName = getPathParameter(request, kFileNameInCryptoAC);

        String oldFilPath           = uploadDirectoryDS.getAbsolutePath() + "/" + selectedDAO.toString() + "/" + fileName;
        String newFileDirectoryPath = downloadDirectoryDS.getAbsolutePath() + "/" + selectedDAO.toString();
        String newFileLocationPath  = newFileDirectoryPath + "/" + fileName;

        App.logger.info("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                "The reference monitor asked to move file ", fileName);

        File supposedFile           = new File(oldFilPath);
        File directoryForNewFile    = new File(newFileDirectoryPath);
        File movedFile              = new File(newFileLocationPath);

        boolean createdFolder = false;

        if (supposedFile.exists()) {
            if (!directoryForNewFile.exists()) {
                if (directoryForNewFile.mkdirs())
                    createdFolder = true;
            }
            else
                createdFolder = true;


            if (createdFolder) {
                if (supposedFile.renameTo(movedFile)) {
                    invocationResult = new APIOutput(code_0.toString(), code_0);
                    response.status(HttpStatus.OK_200);
                }
                else {
                    App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                            "error while renaming file ", fileName);
                    invocationResult = new APIOutput(code_80.toString(), code_80);
                    response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
                }
            }
            else {
                App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                        "error while creating directory for file ", fileName);
                invocationResult = new APIOutput(code_73.toString(), code_73);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
            }
        }
        else {
            App.logger.error("[{}{}{}{}{} ", className, " (" + moveFileLog + ")]: ", "file ", fileName, " not found");
            invocationResult = new APIOutput(code_6.toString(), code_6);
            response.status(HttpStatus.NOT_FOUND_404);
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * POST | add a new file
     */
    public static Route uploadFile = (Request request, Response response) -> {

        // TODO check that a real user is actually the one submitting the request

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

        // attachment; filename="theNameOfTheFile"
        // ==> attachment; filename=theNameOfTheFile
        // ==> ["attachment; ", "theNameOfTheFile"]
        // ==> ["theNameOfTheFile"]
        String fileName = request.headers("Content-Disposition")
                .replaceAll("\"", "")
                .split("filename=")[1];

        App.logger.info("[{}{}{}{} ", className, " (" + uploadFileLog + ")]: ", "user asked to upload file ", fileName);

        // remember that the body is the file itself
        try {
            // we use the flag THROW_EXCEPTION in case the file already exists in the upload directory
            // (i.e., concurrent upload of two files with the same name)
            FileUtil.saveFileOnFileSystem(
                    uploadDirectoryDS.getAbsolutePath() + "/" + selectedDAO.toString() + "/" + fileName,
                    request.raw().getInputStream(),
                    THROW_EXCEPTION);
            invocationResult = new APIOutput(code_0, code_0);
            response.status(HttpStatus.OK_200);
        }
        // thrown if a file with the same name already exists
        catch (FileAlreadyExistsException e) {
            App.logger.error("[{}{}{}{}{} ", className, " (" + uploadFileLog + ")]: ",
                    "file ", fileName, " already exists");
            // TODO we should find a better way, otherwise malicious users could send a lot of requests and then
            //  guess all file names... maybe use the token as primary key?
            invocationResult = new APIOutput(code_3, code_3);
            response.status(HttpStatus.CONFLICT_409);
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * PUT | overwrite a file
     */
    public static Route overwriteFile = (Request request, Response response) -> {

        // TODO check that the RM is the one actually submitting the request
        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

        String fileName = getPathParameter(request, kFileNameInCryptoAC);

        App.logger.info("[{}{}{}{} ", className, " (" + overwriteFileLog + ")]: ",
                "the reference monitor asked to overwrite file ", fileName);

        String newFilePath = uploadDirectoryDS.getAbsolutePath() + "/" + selectedDAO.toString() + "/" + fileName;
        String finalPath = downloadDirectoryDS.getAbsolutePath() + "/" + selectedDAO.toString() + "/" + fileName;
        String temporaryPath = downloadDirectoryDS.getAbsolutePath() + "/" + selectedDAO.toString() +
                "/" + UUID.randomUUID().toString() + fileName;

        File newFileToSave      = new File(newFilePath);
        File oldFileToDelete    = new File(finalPath);
        File temporaryFile      = new File(temporaryPath);

        if (newFileToSave.exists() && oldFileToDelete.exists()) {
            if (oldFileToDelete.renameTo(temporaryFile)) {
                if (newFileToSave.renameTo(oldFileToDelete)) {
                    if (temporaryFile.delete()) {
                        invocationResult = new APIOutput(code_0.toString(), code_0);
                        response.status(HttpStatus.OK_200);
                    }
                    else {
                        App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                                "error while deleting old version of file ", fileName);
                        invocationResult = new APIOutput(code_38.toString(), code_38);
                        response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
                        // TODO but actually is fine, just we have a random file around
                    }
                }
                else {
                    if (oldFileToDelete.renameTo(newFileToSave)) {
                        App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                                "error while saving the new file, rollback to old version of file ", fileName);
                        invocationResult = new APIOutput(code_37.toString(), code_37);
                    }
                    else {
                        // TODO what the hello to do?
                        App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                                "old version of file ", fileName, " was renamed, then there was an error while ",
                                "saving the new file and then we did not manage to rollback to old version.",
                                "Contact the system administrators");
                        invocationResult = new APIOutput(code_80.toString(), code_80);
                    }
                    response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
                }
            }
            else {
                App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                        "error while renaming old version of file ", fileName);
                invocationResult = new APIOutput(code_80.toString(), code_80);
                response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
            }
        }
        else {
            App.logger.error("[{}{}{}{}{} ", className, " (" + overwriteFileLog + ")]: ", "file ", fileName, " not found");
            invocationResult = new APIOutput(code_6.toString(), code_6);
            response.status(HttpStatus.NOT_FOUND_404);
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * DELETE | delete a file
     */
    public static Route deleteFile = (Request request, Response response) -> {
        // TODO check that the administrator is actually the one submitting the request

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));
        String fileName = getPathParameter(request, kFileNameInCryptoAC);

        App.logger.info("[{}{}{}{} ", className, " (" + deleteFileLog + ")]: ", "deleting file ", fileName);

        String newFileLocationPath  = downloadDirectoryDS.getAbsolutePath() + "/" + selectedDAO.toString() + "/" + fileName;
        File fileToDelete = new File(newFileLocationPath);

        if (fileToDelete.exists()) {
            if (fileToDelete.delete()) {
                invocationResult = new APIOutput(code_0.toString(), code_0);
                response.status(HttpStatus.OK_200);
            }
            else {
                App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                        "error while deleting file ", fileName);
                invocationResult = new APIOutput(code_20.toString(), code_20);
                response.status(HttpStatus.NOT_FOUND_404);
            }
        }
        else {
            App.logger.error("[{}{}{}{}{} ", className, " (" + moveFileLog + ")]: ", "file ", fileName, " not found");
            invocationResult = new APIOutput(code_6.toString(), code_6);
            response.status(HttpStatus.NOT_FOUND_404);
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

}
