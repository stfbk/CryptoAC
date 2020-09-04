package eu.fbk.st.cryptoac.server.rm;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.core.element.CryptoACActiveElement;
import eu.fbk.st.cryptoac.core.element.File;
import eu.fbk.st.cryptoac.core.element.Role;
import eu.fbk.st.cryptoac.core.tuple.FileTuple;
import eu.fbk.st.cryptoac.core.tuple.Permission;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.dao.DAO;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQLParameters;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import eu.fbk.st.cryptoac.server.util.JSONUtil;
import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import org.eclipse.jetty.http.HttpStatus;
import spark.Request;
import spark.Response;
import spark.Route;

import javax.servlet.ServletException;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.SignatureException;
import java.time.Duration;
import java.util.*;

import static eu.fbk.st.cryptoac.App.admin;
import static eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocal.*;
import static eu.fbk.st.cryptoac.server.util.RequestUtil.*;
import static eu.fbk.st.cryptoac.util.Const.API.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceMySQLParameters.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceParameters.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.kDAO;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.kFileNameInCryptoAC;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;

public class ChecksController {

    /**
     * The MySQL helper object to interact with the metadata storage.
     */
    private static MySQLHelper mySQLHelper;

    /**
     * The base url (with port) of the data storage.
     */
    private static String dsBaseAPI;

    /**
     * The default timeout for connections toward the DS.
     */
    private static final Integer kTimeoutInSeconds = 10;


    // variables for logging
    public static final String className = "ChecksController";
    public static final String addFileLog = "addFile";
    public static final String writeFileLog = "writeFile";


    // initialize the values
    public static void initialize (String mySQLDatabaseURL, String mySQLDatabasePassword, String mySQLDatabasePort,
                                   String mySQLDatabaseUsername, String dataStorageURL, String dataStoragePort) {

        dsBaseAPI = dataStorageURL + ":" + dataStoragePort;

        HashMap<String, byte[]> parameters = new HashMap<>();
        parameters.put(kMySQLDatabaseURL, mySQLDatabaseURL.getBytes());
        parameters.put(kMySQLDatabasePort, mySQLDatabasePort.getBytes());
        parameters.put(kMySQLDatabasePassword, mySQLDatabasePassword.getBytes());
        parameters.put(kUsernameInCryptoAC, mySQLDatabaseUsername.getBytes());

        parameters.put(kEncryptingPublicKey,    "PotF".getBytes());
        parameters.put(kEncryptingPrivateKey,   "PotF".getBytes());
        parameters.put(kSigningPublicKey,       "PotF".getBytes());
        parameters.put(kSigningPrivateKey,      "PotF".getBytes());

        DAOInterfaceMySQLParameters parameterObject = new DAOInterfaceMySQLParameters(parameters);
        mySQLHelper = MySQLHelper.getInstance(parameterObject);
    }


    /**
     * POST | check an add file operation
     */
    public static Route addFile = (Request request, Response response) -> {

        // TODO check that cryptoac users are those actually requesting the operation

        APIOutput invocationResult;
        boolean toCallback = false;

        try {

            DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

            // first, acquire the parameters from the request
            FileTuple fileTuple = new Gson()
                    .fromJson(getStringParameterFromMultipart(request, kFileTupleKey), FileTuple.class);
            PermissionTuple permissionTuple = new Gson()
                    .fromJson(getStringParameterFromMultipart(request, kPermissionTupleKey), PermissionTuple.class);
            String encryptingKeyVersionNumber = getStringParameterFromMultipart(request, kEncryptingKeyVersionNumberKey);

            String fileName = fileTuple.getAssociatedElement();
            File file = new File(fileName, null, Integer.parseInt(encryptingKeyVersionNumber));
            file.setToken(fileTuple.getFileToken());

            App.logger.info("[{}{}{}{} ", className, " (" + addFileLog + ")]: ",
                    "received request to add file ", fileName);

            // We have to check that:
            // - the tuples' signatures are correct. This includes also checking that the
            //   user that signed the tuples actually exists and is the same for both tuples;
            // - the file version numbers of the file (encrypting and decrypting) are 1;
            // - the PermissionTuple gives all permission to the admin and not to some other user;
            // - the file name and token in the FileTuple and PermissionTuple is the same.

            String fileToken = fileTuple.getFileToken();
            String signerOfTheTuple = fileTuple.getSignerOfThisTuple();
            Integer decryptFileVersionNumber = fileTuple.getDecryptingKeyVersionNumber();

            // ========== FIRST CHECK ========== file version numbers to be 1
            if (decryptFileVersionNumber == 1 && Integer.parseInt(encryptingKeyVersionNumber) == 1) {

                // ========== SECOND CHECK ========== admin's role version number to be 1
                if (permissionTuple.getRoleVersionNumber() == 1) {

                    // ========== THIRD CHECK ========== files names correspond across tuples
                    if (fileName.equals(permissionTuple.getAssociatedFile())) {

                        // ========== FOURTH CHECK ========== files tokens correspond across tuples
                        if (fileToken.equals(permissionTuple.getFileToken())) {

                            // ========== FIFTH CHECK ========== tuples signers should be the same
                            if (signerOfTheTuple.equals(permissionTuple.getSignerOfThisTuple())) {

                                // ========== SIXTH CHECK ========== permission is RW
                                if (permissionTuple.getAssociatedPermission().toString().equals(
                                        Permission.Read_and_Write.toString())) {

                                    // ========== SEVENTH CHECK ========== admin is the role to which permission is granted
                                    if (admin.equals(permissionTuple.getRoleToken()) &&
                                            admin.equals(permissionTuple.getAssociatedElement())) {

                                        // ========== EIGHT CHECK ========== the tuple was signed by a user
                                        if (fileTuple.getElementSigner() ==
                                                CryptoACActiveElement.CryptoACActiveElementEnum.User) {

                                            // ========== FINAL CHECK ========== tuple's signature is correct
                                            mySQLHelper.lockDAOInterfaceStatus();
                                            toCallback = true;

                                            PublicKey publicKeyOfSigner = mySQLHelper
                                                    .getPublicSigningKeyOfUserByToken(signerOfTheTuple);

                                            CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                                    fileTuple, publicKeyOfSigner);
                                            CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                                    permissionTuple, publicKeyOfSigner);


                                            // if everything is correct, add the tuples to the metadata storage
                                            // and then ask the data storage to move the data
                                            mySQLHelper.addFileToTable(file);
                                            mySQLHelper.addFileTuple(fileTuple);
                                            mySQLHelper.addPermissionTuple(permissionTuple);

                                            // TODO https
                                            // ask the DS to move the file to the download folder
                                            HttpRequest requestToMoveFile = HttpRequest.newBuilder()
                                                    .uri(new URI("http://"
                                                            + dsBaseAPI
                                                            + MOVEFILE
                                                                .replace(":" + kDAO, selectedDAO.toString())
                                                                .replace(":" + kFileNameInCryptoAC, fileName)))
                                                    .version(HttpClient.Version.HTTP_2)
                                                    .timeout(Duration.ofSeconds(kTimeoutInSeconds))
                                                    .method("PATCH", HttpRequest.BodyPublishers.noBody())
                                                    .build();

                                            HttpResponse<String> responseFromDS = HttpClient.newBuilder()
                                                    .build().send(requestToMoveFile, HttpResponse.BodyHandlers.ofString());

                                            invocationResult = new Gson().fromJson(responseFromDS.body(), APIOutput.class);
                                            OperationOutcomeCode returningCode = OperationOutcomeCode.get(invocationResult.getOutcomeMessage());

                                            if (returningCode == code_0)
                                                mySQLHelper.unlockDAOInterfaceStatus();
                                        }
                                        // if so, it means that the file tuple was not signed by a user
                                        else {
                                            invocationResult = new APIOutput("the file tuple " +
                                                    "was not signed by a user ", code_59.toString(),
                                                    HttpStatus.UNPROCESSABLE_ENTITY_422);
                                        }
                                    }
                                    // if so, it means that the permission is not given to the administrator
                                    else {
                                        invocationResult = new APIOutput("the permission is not " +
                                                "given to the administrator ", code_59.toString(),
                                                HttpStatus.UNPROCESSABLE_ENTITY_422);
                                    }
                                }
                                // if so, it means that the permission given to the administrator is not read and write
                                else {
                                    invocationResult = new APIOutput("the permission given to " +
                                            "the administrator is not read and write ", code_59.toString(),
                                            HttpStatus.UNPROCESSABLE_ENTITY_422);
                                }
                            }
                            // if so, it means that the signers of the two tuples are different from each other
                            else {
                                invocationResult = new APIOutput("the signers of the two " +
                                        "tuples are different from each other ", code_59.toString(),
                                        HttpStatus.UNPROCESSABLE_ENTITY_422);
                            }
                        }
                        // if so, it means that the tokens of the file in the two tuples are different from each other
                        else {
                            invocationResult = new APIOutput("the tokens of the file in the " +
                                    "two tuples are different from each other ", code_59.toString(),
                                    HttpStatus.UNPROCESSABLE_ENTITY_422);
                        }
                    }
                    // if so, it means that the names of the file in the two tuples are different from each other
                    else {
                        invocationResult = new APIOutput("the names of the file in the " +
                                "two tuples are different from each other ", code_59.toString(),
                                HttpStatus.UNPROCESSABLE_ENTITY_422);
                    }
                }
                // if so, it means that the admin's role version number is not 1
                else {
                    invocationResult = new APIOutput("admin's role version number is not 1 ",
                            code_17.toString(), HttpStatus.UNPROCESSABLE_ENTITY_422);
                }
            }
            // if so, it means that file version numbers are different from 1
            else {
                invocationResult = new APIOutput("file version numbers are different from 1 ",
                        code_17.toString(), HttpStatus.UNPROCESSABLE_ENTITY_422);
            }
        }
        // thrown while parsing the received parameters as tuples
        catch (JsonSyntaxException e) {
            invocationResult = new APIOutput("exception while parsing the received parameters" +
                    " as tuples ", code_59.toString(), HttpStatus.UNPROCESSABLE_ENTITY_422);
        }
        // thrown while getting the parameters from the HTTP request
        catch (IOException | InterruptedException | ServletException | IllegalArgumentException e) {
            invocationResult = new APIOutput("exception while getting the parameters from " +
                    "the HTTP request ", code_76.toString(), HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown while interacting with the metadata storage
        catch (DAOException e) {
            invocationResult = new APIOutput("exception while interacting with the metadata " +
                    "storage ", e.getErrorCode().toString(), HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown while verifying the signature of a tuple
        catch (InvalidKeyException | NoSuchAlgorithmException e) {
            invocationResult = new APIOutput("exception while verifying the signature of a tuple ",
                    code_13.toString(), HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown if the signature of a tuple is not valid
        catch (SignatureException e) {
            invocationResult = new APIOutput("the signature of a tuple is not valid ",
                    code_7.toString(), HttpStatus.INTERNAL_SERVER_ERROR_500);
        }

        if (invocationResult.getHttpStatus() != HttpStatus.OK_200)
            App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + addFileLog + ")]: ", "error: ",
                    invocationResult.getOutputJSON().toString(), " (", invocationResult.getOutcomeMessage(), ")");

        if (invocationResult.getHttpStatus() != HttpStatus.OK_200 && toCallback)
            mySQLHelper.rollback();

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };


    /**
     * PATCH | check a write file operation
     */
    public static Route writeFile = (Request request, Response response) -> {

        // TODO check that cryptoac users are those actually requesting the operation

        APIOutput invocationResult = null;
        boolean toCallback = false;

        try {

            DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

            // first, acquire the parameters from the request
            FileTuple fileTuple = new Gson()
                    .fromJson(getStringParameterFromMultipart(request, kFileTupleKey), FileTuple.class);
            String encryptingKeyVersionNumber = getStringParameterFromMultipart(request, kEncryptingKeyVersionNumberKey);
            String fileName = fileTuple.getAssociatedElement();

            File file = new File(fileName, null, Integer.parseInt(encryptingKeyVersionNumber));
            file.setToken(fileTuple.getFileToken());

            App.logger.info("[{}{}{}{} ", className, " (" + writeFileLog + ")]: ",
                    "received request to write file ", fileName);

            // We have to check that:
            // - the file tuple's signature is correct. This includes also checking that the role
            // that signed the tuple actually exists and it was not deleted;
            // - the file version number is the latest one;
            // - the role that signed the file tuple has READ AND WRITE permission over the file.

            String roleToken = fileTuple.getSignerOfThisTuple();
            Integer decryptFileVersionNumber = fileTuple.getDecryptingKeyVersionNumber();

            // ========== FIRST CHECK ========== the tuple was signed by a role
            if (fileTuple.getElementSigner() == CryptoACActiveElement.CryptoACActiveElementEnum.Role) {

                mySQLHelper.lockDAOInterfaceStatus();
                toCallback = true;
                int actualFileVersionNumber = mySQLHelper.getFileEncryptingVersionNumberByName(fileName);

                // ========== SECOND CHECK ========== check that the new decrypt file number is the
                // latest encrypt file number (i.e., the file was encrypted with the latest key)
                if (actualFileVersionNumber == decryptFileVersionNumber) {

                    // ========== THIRD CHECK ========== FileTuple signature
                    PublicKey publicKeyOfRole = mySQLHelper.getPublicSigningKeyOfRoleByToken(roleToken);
                    CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(fileTuple, publicKeyOfRole);

                    // ========== FINAL CHECK ========== does the role have WRITE permission over the file?
                    HashSet<Role> rolesThatSignedTheTuple =
                            mySQLHelper.getRole(null, roleToken, -1, -1);

                    if (!rolesThatSignedTheTuple.isEmpty()) {

                        if (rolesThatSignedTheTuple.size() == 1) {

                            Role roleThatSignedTheTuple = null;
                            for (Role role : rolesThatSignedTheTuple)
                                roleThatSignedTheTuple = role;
                            String roleName = roleThatSignedTheTuple.getName();

                            HashSet<PermissionTuple> permissionTuplesOfRole =
                                    mySQLHelper.getPermissionTuples(roleName, fileName,
                                            null, null, -1, -1);

                            boolean didWeFindTheTuple = false;

                            // we look for the tuple giving RW permission to the role over the file
                            for (PermissionTuple permissionTuple : permissionTuplesOfRole) {

                                if (Permission.Read_and_Write == permissionTuple.getAssociatedPermission()) {

                                    PublicKey publicKeyOfSigner = mySQLHelper.getPublicSigningKeyOfUserByToken(
                                            permissionTuple.getSignerOfThisTuple());
                                    CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(permissionTuple, publicKeyOfSigner);

                                    // if the permission tuple is related to the latest file number
                                    if (permissionTuple.getEncryptingKeyVersionNumber() == actualFileVersionNumber) {

                                        // Yes, the role has write permissions!
                                        didWeFindTheTuple = true;

                                        // if everything is correct, update the tuple in the metadata storage
                                        // and then ask the data storage to overwrite the file
                                        mySQLHelper.deleteFileTupleByFileName(fileName);
                                        mySQLHelper.addFileTuple(fileTuple);

                                        // TODO https
                                        // ask the DS to overwrite the file in the download folder
                                        HttpRequest requestToWriteFile = HttpRequest.newBuilder()
                                                .uri(new URI("http://"
                                                        + dsBaseAPI
                                                        + OVERWRITEFILE
                                                        .replace(":" + kDAO, selectedDAO.toString())
                                                        .replace(":" + kFileNameInCryptoAC, fileName)))
                                                .version(HttpClient.Version.HTTP_2)
                                                .timeout(Duration.ofSeconds(kTimeoutInSeconds))
                                                .PUT(HttpRequest.BodyPublishers.noBody())
                                                .build();


                                        HttpResponse<String> responseFromDS = HttpClient.newBuilder()
                                                .build().send(requestToWriteFile, HttpResponse.BodyHandlers.ofString());

                                        invocationResult = new Gson().fromJson(responseFromDS.body(), APIOutput.class);
                                        OperationOutcomeCode returningCode = OperationOutcomeCode.get(invocationResult.getOutcomeMessage());

                                        if (returningCode == code_0)
                                            mySQLHelper.unlockDAOInterfaceStatus();

                                        // break the while loop
                                        break;
                                    }
                                }
                            }
                            if (!didWeFindTheTuple) {
                                invocationResult = new APIOutput("the role with token" +
                                        roleToken + " does not have write permission on file " + fileName,
                                        code_15.toString(), HttpStatus.FORBIDDEN_403);
                            }
                        }
                        // if so, it means that the role that signed the tuple is not uniquely identified by its token
                        else {
                            invocationResult = new APIOutput("found more than one role with token" +
                                    roleToken, code_79.toString(), HttpStatus.INTERNAL_SERVER_ERROR_500);
                        }
                    }
                    // if so, it means that the role that signed the tuple does not exist in the database
                    else {
                        invocationResult = new APIOutput("the role with token" +
                                roleToken + " does not exists in the database",
                                code_10.toString(), HttpStatus.UNPROCESSABLE_ENTITY_422);
                    }
                }
                // if so, it means that the version number in the file tuple is not the latest one
                else {
                    invocationResult = new APIOutput("file version number should be " +
                            actualFileVersionNumber + " and instead it is " +  decryptFileVersionNumber,
                        code_17.toString(), HttpStatus.UNPROCESSABLE_ENTITY_422);
                }
            }
            // if so, it means that the file tuple was not signed by a role
            else {
                invocationResult = new APIOutput("the file tuple was not signed by a role",
                        code_59.toString(), HttpStatus.UNPROCESSABLE_ENTITY_422);
            }
        }
        // thrown while parsing the received parameters as tuples
        catch (JsonSyntaxException e) {
            invocationResult = new APIOutput("exception while parsing the received parameters" +
                    " as tuples ", code_59.toString(), HttpStatus.UNPROCESSABLE_ENTITY_422);
        }
        // thrown while getting the parameters from the HTTP request
        catch (IOException | InterruptedException | ServletException | IllegalArgumentException e) {
            invocationResult = new APIOutput("exception while getting the parameters from " +
                    "the HTTP request ", code_76.toString(), HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown while interacting with the metadata storage
        catch (DAOException e) {
            invocationResult = new APIOutput("exception while interacting with the metadata " +
                    "storage ", e.getErrorCode().toString(), HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown while verifying the signature of a tuple
        catch (InvalidKeyException | NoSuchAlgorithmException e) {
            invocationResult = new APIOutput("exception while verifying the signature of a tuple ",
                    code_13.toString(), HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown if the signature of a tuple is not valid
        catch (SignatureException e) {
            invocationResult = new APIOutput("the signature of a tuple is not valid ",
                    code_7.toString(), HttpStatus.INTERNAL_SERVER_ERROR_500);
        }

        if (invocationResult.getHttpStatus() != HttpStatus.OK_200)
            App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + writeFileLog + ")]: ", "error: ",
                    invocationResult.getOutputJSON().toString(), " (", invocationResult.getOutcomeMessage(), ")");

        if (invocationResult.getHttpStatus() != HttpStatus.OK_200 && toCallback)
            mySQLHelper.rollback();

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };
}
