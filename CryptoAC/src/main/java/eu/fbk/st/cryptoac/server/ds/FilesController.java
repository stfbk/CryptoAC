package eu.fbk.st.cryptoac.server.ds;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.dao.DAO;
import eu.fbk.st.cryptoac.util.FileUtil;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import eu.fbk.st.cryptoac.server.util.JSONUtil;
import org.eclipse.jetty.http.HttpStatus;
import spark.Request;
import spark.Response;
import spark.Route;
import spark.resource.UriPath;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.util.UUID;

import static eu.fbk.st.cryptoac.App.downloadDirectoryDS;
import static eu.fbk.st.cryptoac.App.uploadDirectoryDS;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.*;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;
import static eu.fbk.st.cryptoac.util.FileUtil.SaveMode.THROW_EXCEPTION;
import static eu.fbk.st.cryptoac.server.util.RequestUtil.*;

public class FilesController {

    // variables for logging
    public static final String className = "FilesController";
    public static final String moveFileLog = "moveFile";
    public static final String downloadFileLog = "downloadFile";
    public static final String uploadFileLog = "uploadFile";
    public static final String overwriteFileLog = "overwriteFile";
    public static final String deleteFileLog = "deleteFile";

    /**
     * GET | download a file
     */
    public static Route downloadFile = (Request request, Response response) -> {

        // TODO check that cryptoac users are those actually downloading the file

        APIOutput invocationResult = null;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String fileName = getMandatoryPathParameter(request, kFileNameInCryptoAC);

        try {

            App.logger.info("[{}{}{}{} ", className, " (" + downloadFileLog + ")]: ", "user asked to download file ", fileName);

            InputStream fileToReturn = new FileInputStream(
                    new File(downloadDirectoryDS.getAbsolutePath() + "/" + selectedDAO + "/" + fileName));

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
            invocationResult = new APIOutput(code_6.toString(), code_6.toString(), HttpStatus.NOT_FOUND_404);
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
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));
        String fileName = getMandatoryPathParameter(request, kFileNameInCryptoAC);

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
                if (supposedFile.renameTo(movedFile))
                    invocationResult = new APIOutput(code_0.toString(), code_0.toString(), HttpStatus.OK_200);
                else {
                    App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                            "error while renaming file ", fileName);
                    invocationResult = new APIOutput(code_80.toString(), code_80.toString(),
                            HttpStatus.INTERNAL_SERVER_ERROR_500);
                }
            }
            else {
                App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                        "error while creating directory for file ", fileName);
                invocationResult = new APIOutput(code_73.toString(), code_73.toString(),
                        HttpStatus.INTERNAL_SERVER_ERROR_500);
            }
        }
        else {
            App.logger.error("[{}{}{}{}{} ", className, " (" + moveFileLog + ")]: ", "file ", fileName, " not found");
            invocationResult = new APIOutput(code_6.toString(), code_6.toString(), HttpStatus.NOT_FOUND_404);
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * POST | add a new file
     */
    public static Route uploadFile = (Request request, Response response) -> {

        // TODO check that a real user is actually the one submitting the request

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

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
            invocationResult = new APIOutput(code_0, code_0.toString(), HttpStatus.OK_200);
        }
        // thrown if a file with the same name already exists
        catch (FileAlreadyExistsException e) {
            App.logger.error("[{}{}{}{}{} ", className, " (" + uploadFileLog + ")]: ",
                    "file ", fileName, " already exists");
            // TODO we should find a better way, otherwise malicious users could send a lot of requests and then
            //  guess all file names... maybe use the token as primary key?
            invocationResult = new APIOutput(code_3, code_3.toString(), HttpStatus.CONFLICT_409);
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * PUT | overwrite a file
     */
    public static Route overwriteFile = (Request request, Response response) -> {

        // TODO check that the RM is the one actually submitting the request
        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String fileName = getMandatoryPathParameter(request, kFileNameInCryptoAC);

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
                    if (temporaryFile.delete())
                        invocationResult = new APIOutput(code_0.toString(), code_0.toString(),
                                HttpStatus.OK_200);
                    else {
                        App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                                "error while deleting old version of file ", fileName);
                        invocationResult = new APIOutput(code_38.toString(), code_38.toString(),
                                HttpStatus.INTERNAL_SERVER_ERROR_500);
                        // TODO but actually is fine, just we have a random file around
                    }
                }
                else {
                    if (oldFileToDelete.renameTo(newFileToSave)) {
                        App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                                "error while saving the new file, rollbacked to old version of file ", fileName);
                        invocationResult = new APIOutput(code_37.toString(), code_37.toString(),
                                HttpStatus.INTERNAL_SERVER_ERROR_500);
                    }
                    else {
                        // TODO what the hello to do?
                        App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                                "old version of file ", fileName, " was renamed, then there was an error while ",
                                "saving the new file and then we did not manage to rollback to old version.",
                                "Contact the system administrators");
                        invocationResult = new APIOutput(code_80.toString(), code_80.toString(),
                                HttpStatus.INTERNAL_SERVER_ERROR_500);
                    }
                }
            }
            else {
                App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                        "error while renaming old version of file ", fileName);
                invocationResult = new APIOutput(code_80.toString(), code_80.toString(),
                        HttpStatus.INTERNAL_SERVER_ERROR_500);
            }
        }
        else {
            App.logger.error("[{}{}{}{}{} ", className, " (" + overwriteFileLog + ")]: ", "file ", fileName, " not found");
            invocationResult = new APIOutput(code_6.toString(), code_6.toString(), HttpStatus.NOT_FOUND_404);
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * DELETE | delete a file
     */
    public static Route deleteFile = (Request request, Response response) -> {
        // TODO check that the administrator is actually the one submitting the request

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));
        String fileName = getMandatoryPathParameter(request, kFileNameInCryptoAC);

        App.logger.info("[{}{}{}{} ", className, " (" + deleteFileLog + ")]: ", "deleting file ", fileName);

        String newFileLocationPath  = downloadDirectoryDS.getAbsolutePath() + "/" + selectedDAO.toString() + "/" + fileName;
        File fileToDelete = new File(newFileLocationPath);

        if (fileToDelete.exists()) {
            if (fileToDelete.delete()) {
                invocationResult = new APIOutput(code_0.toString(), code_0.toString(), HttpStatus.OK_200);
            }
            else {
                App.logger.error("[{}{}{}{} ", className, " (" + moveFileLog + ")]: ",
                        "error while deleting file ", fileName);
                invocationResult = new APIOutput(code_20.toString(), code_20.toString(), HttpStatus.NOT_FOUND_404);
            }
        }
        else {
            App.logger.error("[{}{}{}{}{} ", className, " (" + moveFileLog + ")]: ", "file ", fileName, " not found");
            invocationResult = new APIOutput(code_6.toString(), code_6.toString(), HttpStatus.NOT_FOUND_404);
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

}
