package eu.fbk.st.cryptoac.dao.local;

import com.google.gson.Gson;
import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.dao.DAO;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQL;
import eu.fbk.st.cryptoac.core.element.File;
import eu.fbk.st.cryptoac.core.tuple.FileTuple;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import org.eclipse.jetty.http.HttpStatus;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpTimeoutException;
import java.time.Duration;

import static eu.fbk.st.cryptoac.util.Const.API.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.kDAO;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.kFileNameInCryptoAC;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;

/**
 * This class is an implementation of the DAO interface for IaaS local docker deployment
 */
public class DAOInterfaceLocal extends DAOInterfaceMySQL {

    /**
     * The default timeout for connections toward the DS and the RM.
     */
    private static final Integer kTimeoutInSeconds = 10;

    /**
     * the base API path (url + port) of the reference monitor.
     */
    private final String rmBaseAPI;

    /**
     * the base API path (url + port) of the data storage.
     */
    private final String dsBaseAPI;

    /**
     * the key of the file tuple content in HTTP requests.
     */
    public static final String kFileTupleKey = "FileTuple";

    /**
     * the key of the permission tuple content in HTTP requests.
     */
    public static final String kPermissionTupleKey = "PermissionTuple";

    /**
     * the key of the file stream in HTTP requests.
     */
    public static final String kFileStreamKey = "FileStream";

    /**
     * the key of the encrypting key version number in HTTP requests.
     */
    public static final String kEncryptingKeyVersionNumberKey = "EncryptingKeyVersionNumber";


    /**
     * Constructor with parameters.
     * @param daoInterfaceLocalParameters the needed parameters to create an instance of this class. As this
     *                                      class does not have additional parameters, check the constructor
     *                                      of the super class
     */
    protected DAOInterfaceLocal(DAOInterfaceLocalParameters daoInterfaceLocalParameters) {

        super(daoInterfaceLocalParameters);

        locksOnCloud = 0;

        // this name will be used in logs as the class name
        className = "DAOInterfaceLocal";

        rmBaseAPI = daoInterfaceLocalParameters.getRMURL() + ":" + daoInterfaceLocalParameters.getRMPort();
        dsBaseAPI = daoInterfaceLocalParameters.getDSURL() + ":" + daoInterfaceLocalParameters.getDSPort();
    }

    /**
     * This method creates a new instance of this class with the given parameters.
     * @param daoInterfaceLocalParameters initialization parameters (see class constructor)
     */
    public static DAOInterfaceLocal getInstance(DAOInterfaceLocalParameters daoInterfaceLocalParameters) {
        return new DAOInterfaceLocal(daoInterfaceLocalParameters);
    }

    /**
     * This method stores the new file (1), saves the related metadata from the file tuple (2) and
     * the permission tuple that gives the admin all permissions over the file (3). In particular,
     * this method first uploads the file to the DS. Then, it sends a POST request to the Reference
     * Monitor to ask it to confirm the operation. Finally, the RM returns either a positive or a
     * negative (e.g., in case tuples or signatures are wrong) response.
     * Remember that file names are unique.
     * Remember that you can get the content of the file from the InputStream in the newFile parameter.
     * Remember that the reference monitor has to check the validity of the new data. This means that:
     *  - tuples' signatures shall be correct. This includes also checking that the user that signed the
     *    tuples actually exists and is the same for both tuples;
     *  - the file version number shall be equal to 1 in the newFile and newFileTuple;
     *  - the newPermissionTuple shall give all permission to the admin and not to some other user.
     *  - the file name and token in newFile, newFileTuple and newPermissionTuple shall be the same.
     * @param newFile the new file
     * @param newFileTuple the new file tuple
     * @param newPermissionTuple the new permission tuple giving the admin access to the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void addFile(@NotNull File newFile, @NotNull FileTuple newFileTuple, @NotNull PermissionTuple newPermissionTuple) throws DAOException {

        OperationOutcomeCode returningCode;
        Exception exceptionThrown = null;

        try {

            String fileName = newFile.getName();

            App.logger.info("[{}{}{} ", className, " (" + addFile + ")]: ", "adding file " + fileName);

            // TODO https
            // first, send the file to the DS that will store it in the "untrusted" folder for new files
            HttpRequest requestToUploadFile = HttpRequest.newBuilder()
                    .uri(new URI("http://" + dsBaseAPI + UPLOADFILE.replace(":" + kDAO, DAO.Local.toString())))
                    .version(HttpClient.Version.HTTP_2)
                    .timeout(Duration.ofSeconds(kTimeoutInSeconds))
                    .header("Content-Type", "application/octet-stream")
                    .header("Content-Disposition", "attachment; filename=\"" + fileName + "\"")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofInputStream(newFile::getFileStream))
                    .build();

            HttpResponse<String> responseFromDS = HttpClient.newBuilder()
                    .build()
                    .send(requestToUploadFile, HttpResponse.BodyHandlers.ofString());

            APIOutput apiOutputFromDS = new Gson().fromJson(responseFromDS.body(), APIOutput.class);
            returningCode = OperationOutcomeCode.get(apiOutputFromDS.getOutcomeMessage());

            // it so, it means that the file was uploaded successfully. Therefore, we
            // can now ask the reference monitor to add the tuples in the database
            // and then tell the data storage to move the uploaded from from the
            // "untrusted" folder for new files to the actual folder where other
            // users can download it.
            if (returningCode == code_0) {

                MultipartBodyPublisher publisherForRMBody = new MultipartBodyPublisher()
                        .addPart(kEncryptingKeyVersionNumberKey, String.valueOf(newFile.getEncryptingKeyVersionNumber()))
                        .addPart(kFileTupleKey, new Gson().toJson(newFileTuple))
                        .addPart(kPermissionTupleKey, new Gson().toJson(newPermissionTuple));

                // TODO https
                HttpRequest requestToConfirmAdd = HttpRequest.newBuilder()
                        .uri(new URI("http://" + rmBaseAPI + ADDFILE.replace(":" + kDAO, DAO.Local.toString())))
                        .version(HttpClient.Version.HTTP_2)
                        .timeout(Duration.ofSeconds(kTimeoutInSeconds))
                        .header("Content-Type", "multipart/form-data; boundary=" + publisherForRMBody.getBoundary())
                        .header("Accept", "application/json")
                        .POST(publisherForRMBody.build())
                        .build();

                HttpResponse<String> responseFromRM = HttpClient.newBuilder()
                        .build().send(requestToConfirmAdd, HttpResponse.BodyHandlers.ofString());

                APIOutput apiOutputFromRM = new Gson().fromJson(responseFromRM.body(), APIOutput.class);
                returningCode = OperationOutcomeCode.get(apiOutputFromRM.getOutcomeMessage());

                if (responseFromRM.statusCode() != HttpStatus.OK_200) {
                    App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + addFile + ")]: ", "the reference monitor ",
                            "returned an error code: " + returningCode.toString(), "(", apiOutputFromDS.getOutputJSON() ,
                            "), status ", apiOutputFromDS.getHttpStatus());
                }
            }
            else {
                App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + addFile + ")]: ", "the data storage ",
                        "returned an error code: " + returningCode.toString(), "(", apiOutputFromDS.getOutputJSON() ,
                        "), status ", apiOutputFromDS.getHttpStatus());
            }
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            exceptionThrown = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            exceptionThrown = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            exceptionThrown = e;
            returningCode = code_76;
        }

        logAtEndOfMethod(returningCode, addFile, exceptionThrown);
    }

    /**
     * This method deletes the file with the given file name and deletes both the file metadata and the file tuple
     * @param fileName the name of the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void deleteFileAndFileTuple(@NotNull String fileName) throws DAOException {

        OperationOutcomeCode returningCode;
        Exception exceptionThrown = null;

        try {

            App.logger.info("[{}{}{} ", className, " (" + deleteFileAndFileTuple + ")]: ", "deleting file " + fileName);

            deleteFileTupleByFileName(fileName);
            deleteFile(fileName);

            // TODO https
            // finally, send the request to the DS that will delete the file
            HttpRequest requestToDeleteFile = HttpRequest.newBuilder()
                    .uri(new URI("http://"
                            + dsBaseAPI
                            + REMOVEFILE
                            .replace(":" + kDAO, DAO.Local.toString())
                            .replace(":" + kFileNameInCryptoAC, fileName)))
                    .version(HttpClient.Version.HTTP_2)
                    .timeout(Duration.ofSeconds(kTimeoutInSeconds))
                    .header("Accept", "application/json")
                    .DELETE()
                    .build();

            HttpResponse<String> responseFromDS = HttpClient.newBuilder()
                    .build()
                    .send(requestToDeleteFile, HttpResponse.BodyHandlers.ofString());

            APIOutput apiOutputFromDS = new Gson().fromJson(responseFromDS.body(), APIOutput.class);
            returningCode = OperationOutcomeCode.get(apiOutputFromDS.getOutcomeMessage());

            if (returningCode != code_0) {
                App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + deleteFileAndFileTuple + ")]: ", "the data storage ",
                        "returned an error code: " + returningCode.toString(), " (", apiOutputFromDS.getOutputJSON() ,
                        "), status ", apiOutputFromDS.getHttpStatus());
            }
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            exceptionThrown = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            exceptionThrown = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            exceptionThrown = e;
            returningCode = code_76;
        }

        logAtEndOfMethod(returningCode, deleteFileAndFileTuple, exceptionThrown);

    }

    /**
     * This method updates the content of the file matching the given file name ("write" operation); it
     * - replaces (or uses versioning, if supported) the previous file
     * - (2) updates the file tuple with the new one.
     * If the file didn't exist before, throw exception.
     * Remember that the reference monitor has to check the validity of the new data. This means that:
     *  - the file tuple' signatures shall be correct. This includes also checking that the role that signed the
     *    tuple actually exists and it was not deleted.
     *  - the file version number is actually the latest one;
     *  - the role that signed the file tuple has READ AND WRITE permission over the file
     * @param updatedFile the updated file
     * @param updatedFileTuple the updated file tuple
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void updateFile(File updatedFile, FileTuple updatedFileTuple) throws DAOException {

        OperationOutcomeCode returningCode;
        Exception exceptionThrown = null;

        try {

            String fileName = updatedFile.getName();
            App.logger.info("[{}{}{} ", className, " (" + updateFile + ")]: ", "updating file " + fileName);

            // TODO https
            // first, send the file to the DS that will store it in the "untrusted" folder
            HttpRequest requestToUploadFile = HttpRequest.newBuilder()
                    .uri(new URI("http://" + dsBaseAPI + UPLOADFILE.replace(":" + kDAO, DAO.Local.toString())))
                    .version(HttpClient.Version.HTTP_2)
                    .timeout(Duration.ofSeconds(kTimeoutInSeconds))
                    .header("Content-Type", "application/octet-stream")
                    .header("Content-Disposition", "attachment; filename=\"" + fileName + "\"")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofInputStream(updatedFile::getFileStream))
                    .build();

            HttpResponse<String> responseFromDS = HttpClient.newBuilder()
                    .build()
                    .send(requestToUploadFile, HttpResponse.BodyHandlers.ofString());

            APIOutput apiOutputFromDS = new Gson().fromJson(responseFromDS.body(), APIOutput.class);
            returningCode = OperationOutcomeCode.get(apiOutputFromDS.getOutcomeMessage());

            // it so, it means that the file was uploaded successfully. Therefore, we
            // can now ask the reference monitor to add the tuple in the database
            // and then tell the data storage to overwrite the file in the folder
            // where other users can download it.
            if (returningCode == code_0) {

                MultipartBodyPublisher publisherForRMBody = new MultipartBodyPublisher()
                        .addPart(kEncryptingKeyVersionNumberKey, String.valueOf(updatedFile.getEncryptingKeyVersionNumber()))
                        .addPart(kFileTupleKey, new Gson().toJson(updatedFileTuple));

                // TODO https
                HttpRequest requestToConfirmWrite = HttpRequest.newBuilder()
                        .uri(new URI("http://" + rmBaseAPI + WRITEFILE.replace(":" + kDAO, DAO.Local.toString())))
                        .version(HttpClient.Version.HTTP_2)
                        .timeout(Duration.ofSeconds(kTimeoutInSeconds))
                        .header("Content-Type", "multipart/form-data; boundary=" + publisherForRMBody.getBoundary())
                        .header("Accept", "application/json")
                        .method("PATCH", publisherForRMBody.build())
                        .build();

                HttpResponse<String> responseFromRM = HttpClient.newBuilder()
                        .build().send(requestToConfirmWrite, HttpResponse.BodyHandlers.ofString());

                APIOutput apiOutputFromRM = new Gson().fromJson(responseFromRM.body(), APIOutput.class);
                returningCode = OperationOutcomeCode.get(apiOutputFromRM.getOutcomeMessage());

                if (responseFromRM.statusCode() != HttpStatus.OK_200) {
                    App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + updateFile + ")]: ", "the reference monitor ",
                            "returned an error code: " + returningCode.toString(), "(", apiOutputFromDS.getOutputJSON() ,
                            "), status ", apiOutputFromDS.getHttpStatus());
                }
            }
            else {
                App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + updateFile + ")]: ", "the data storage ",
                        "returned an error code: " + returningCode.toString(), "(", apiOutputFromDS.getOutputJSON() ,
                        "), status ", apiOutputFromDS.getHttpStatus());
            }
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            exceptionThrown = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            exceptionThrown = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            exceptionThrown = e;
            returningCode = code_76;
        }

        logAtEndOfMethod(returningCode, updateFile, exceptionThrown);
    }

    /**
     * This method downloads the (latest version of) the requested file ("read" operation).
     * @param fileName the name of the file
     * @return the encrypted file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public InputStream downloadFile(String fileName) throws DAOException {

        OperationOutcomeCode returningCode;
        Exception exceptionThrown = null;
        InputStream fileToReturn = null;

        try {

            App.logger.info("[{}{}{} ", className, " (" + downloadFile + ")]: ", "downloading file " + fileName);

            // TODO https
            // download the file from the DS
            HttpRequest requestToDownloadFile = HttpRequest.newBuilder()
                    .uri(new URI("http://"
                            + dsBaseAPI
                            + DOWNLOADFILE
                            .replace(":" + kDAO, DAO.Local.toString())
                            .replace(":" + kFileNameInCryptoAC, fileName)))
                    .version(HttpClient.Version.HTTP_2)
                    .timeout(Duration.ofSeconds(kTimeoutInSeconds))
                    .header("Accept", "application/json, application/octet-stream")
                    .GET()
                    .build();

            HttpResponse<InputStream> responseFromDS = HttpClient.newBuilder()
                    .build()
                    .send(requestToDownloadFile, HttpResponse.BodyHandlers.ofInputStream());

            int dsStatus = responseFromDS.statusCode();

            if (dsStatus == HttpStatus.OK_200) {
                fileToReturn = responseFromDS.body();
                returningCode = code_0;
            }
            // if so, it means that something went wrong server side
            else {

                APIOutput apiOutputFromDS = new Gson().fromJson(
                        new String(responseFromDS.body().readAllBytes()), APIOutput.class);
                returningCode = OperationOutcomeCode.get(apiOutputFromDS.getOutcomeMessage());
                App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + downloadFile + ")]: ", "the data storage ",
                        "returned an error code: " + returningCode.toString(), "(", apiOutputFromDS.getOutputJSON() ,
                        "), status ", apiOutputFromDS.getHttpStatus());
            }
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            exceptionThrown = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            exceptionThrown = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            exceptionThrown = e;
            returningCode = code_76;
        }

        logAtEndOfMethod(returningCode, downloadFile, exceptionThrown);

        return fileToReturn;
    }
}
