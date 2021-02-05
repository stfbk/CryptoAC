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
import eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocal;
import eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocalParameters;
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
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceLocalParameters.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceMySQLParameters.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceParameters.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.kDAO;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.kFileNameInCryptoAC;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;

public class ChecksController {

    /**
     * The MySQL helper object to interact with the metadata storage.
     */
    private static DAOInterfaceLocal daoInterfaceLocal;

    /**
     * The url + port of the DS.
     */
    public static String dsBaseAPI;

    /**
     * The url + port of the OPA server.
     */
    public static String opaBaseAPI;

    // variables for logging
    public static final String className = "ChecksController";
    public static final String configureLog = "configure";
    public static final String addFileLog = "addFile";
    public static final String writeFileLog = "writeFile";


    /**
     * Initialise the RM by configuring URL, ports and credentials.
     * @param givenjDBUrl the url to contact the DS
     * @param givenMySQLUser the name of the RM  in the MS
     * @param givenMySQLPassword the password of the RM in the MS
     * @param givenDSBaseAPI url + port of the DS
     * @param givenOPABaseAPI url + port of the OPA server
     */
    private static void initialize (String givenjDBUrl, String givenMySQLUser, String givenMySQLPassword, String givenDSBaseAPI, String givenOPABaseAPI) {

        String[] msBaseAPISplit  = givenjDBUrl.replace(kJDBC, "").split(":");
        String[] dsBaseAPISplit  = givenDSBaseAPI.split(":");
        String[] opaBaseAPISplit = givenOPABaseAPI.split(":");

        dsBaseAPI = givenDSBaseAPI;
        opaBaseAPI = givenOPABaseAPI;

        HashMap<String, byte[]> parameters = new HashMap<>();
        parameters.put(kMySQLDatabaseURL,      msBaseAPISplit[0].getBytes());
        parameters.put(kMySQLDatabasePort,     msBaseAPISplit[1].getBytes());
        parameters.put(kMySQLDatabasePassword, givenMySQLPassword.getBytes());
        parameters.put(kUsernameInCryptoAC,    givenMySQLUser.getBytes());

        // EE: check them out, they are great
        parameters.put(kEncryptingPublicKey,  "PotF".getBytes());
        parameters.put(kEncryptingPrivateKey, "PotF".getBytes());
        parameters.put(kSigningPublicKey,     "PotF".getBytes());
        parameters.put(kSigningPrivateKey,    "PotF".getBytes());

        // note: we are not going to use these parameters, as this
        // class is the RM itself! However, we have to provide a
        // valid url and port to go over the safe regex validation
        parameters.put(kLocalRMURL,   dsBaseAPISplit[0].getBytes());
        parameters.put(kLocalRMPort,  dsBaseAPISplit[1].getBytes());

        parameters.put(kLocalDSURL,   dsBaseAPISplit[0].getBytes());
        parameters.put(kLocalDSPort,  dsBaseAPISplit[1].getBytes());
        parameters.put(kLocalOPAURL,  opaBaseAPISplit[0].getBytes());
        parameters.put(kLocalOPAPort, opaBaseAPISplit[1].getBytes());

        DAOInterfaceLocalParameters parameterObject = new DAOInterfaceLocalParameters(parameters);
        daoInterfaceLocal = DAOInterfaceLocal.getInstance(parameterObject);
    }


    /**
     * POST | configure the RM (credentials, URL, ...)
     */
    public static Route configure = (Request request, Response response) -> {

        // TODO check that admin is the one actually requesting the operation

        APIOutput invocationResult;

        App.logger.info("[{}{}{} ", className, " (" + configureLog + ")]: ",
                "received request to configure RM ");

        // first, acquire the parameters from the request
        String jDBUrl = getStringParameterFromMultipart(request, kJDBUrl);
        String mySQLUser = getStringParameterFromMultipart(request, kMySQLPropertyUser);
        String mySQLPassword = getStringParameterFromMultipart(request, kMySQLPropertyPassword);
        String opaBaseAPI = getStringParameterFromMultipart(request, DAOInterfaceLocal.kOPABaseAPI);
        String dsBaseAPI = getStringParameterFromMultipart(request, DAOInterfaceLocal.kDSBaseAPI);

        invocationResult = new APIOutput(code_0.toString(), code_0);
        response.status(HttpStatus.OK_200);

        initialize(jDBUrl, mySQLUser, mySQLPassword, dsBaseAPI, opaBaseAPI);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * POST | check an add file operation
     */
    public static Route addFile = (Request request, Response response) -> {

        // TODO check that cryptoac users are those actually requesting the operation

        APIOutput invocationResult;
        Exception thrownException = null;
        boolean toCallback = false;

        try {

            DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

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
                                            daoInterfaceLocal.lockDAOInterfaceStatus();
                                            toCallback = true;

                                            PublicKey publicKeyOfSigner = daoInterfaceLocal
                                                    .getPublicSigningKeyOfUserByToken(signerOfTheTuple);

                                            CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                                    fileTuple, publicKeyOfSigner);
                                            CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                                    permissionTuple, publicKeyOfSigner);


                                            // if everything is correct, add the tuples to the metadata storage
                                            // and then ask the data storage to move the data
                                            daoInterfaceLocal.addFile(file);
                                            daoInterfaceLocal.addFileTuple(fileTuple);
                                            daoInterfaceLocal.addPermissionTuple(permissionTuple);

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
                                            OperationOutcomeCode returningCode = invocationResult.getOutcomeCode();

                                            if (returningCode == code_0)
                                                daoInterfaceLocal.unlockDAOInterfaceStatus();
                                        }
                                        // if so, it means that the file tuple was not signed by a user
                                        else {
                                            invocationResult = new APIOutput("the file tuple " +
                                                    "was not signed by a user ", code_59);
                                            response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                                        }
                                    }
                                    // if so, it means that the permission is not given to the administrator
                                    else {
                                        invocationResult = new APIOutput("the permission is not " +
                                                "given to the administrator ", code_59);
                                        response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                                    }
                                }
                                // if so, it means that the permission given to the administrator is not read and write
                                else {
                                    invocationResult = new APIOutput("the permission given to " +
                                            "the administrator is not read and write ", code_59);
                                    response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                                }
                            }
                            // if so, it means that the signers of the two tuples are different from each other
                            else {
                                invocationResult = new APIOutput("the signers of the two " +
                                        "tuples are different from each other ", code_59);
                                response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                            }
                        }
                        // if so, it means that the tokens of the file in the two tuples are different from each other
                        else {
                            invocationResult = new APIOutput("the tokens of the file in the " +
                                    "two tuples are different from each other ", code_59);
                            response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                        }
                    }
                    // if so, it means that the names of the file in the two tuples are different from each other
                    else {
                        invocationResult = new APIOutput("the names of the file in the " +
                                "two tuples are different from each other ", code_59);
                        response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                    }
                }
                // if so, it means that the admin's role version number is not 1
                else {
                    invocationResult = new APIOutput("admin's role version number is not 1 ",
                            code_17);
                    response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                }
            }
            // if so, it means that file version numbers are different from 1
            else {
                invocationResult = new APIOutput("file version numbers are different from 1 ",
                        code_17);
                response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
            }
        }
        // thrown while parsing the received parameters as tuples
        catch (JsonSyntaxException e) {
            invocationResult = new APIOutput("exception while parsing the received parameters" +
                    " as tuples ", code_59);
            thrownException = e;
            response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
        }
        // thrown while getting the parameters from the HTTP request
        catch (IOException | InterruptedException | ServletException | IllegalArgumentException e) {
            invocationResult = new APIOutput("exception while getting the parameters from " +
                    "the HTTP request ", code_76);
            thrownException = e;
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown while interacting with the metadata storage
        catch (DAOException e) {
            invocationResult = new APIOutput("exception while interacting with the metadata " +
                    "storage ", e.getErrorCode());
            thrownException = e;
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown while verifying the signature of a tuple
        catch (InvalidKeyException | NoSuchAlgorithmException e) {
            invocationResult = new APIOutput("exception while verifying the signature of a tuple ",
                    code_13);
            thrownException = e;
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown if the signature of a tuple is not valid
        catch (SignatureException e) {
            invocationResult = new APIOutput("the signature of a tuple is not valid ",
                    code_7);
            thrownException = e;
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }

        if (response.status() != HttpStatus.OK_200)
            App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + addFileLog + ")]: ", "error: ",
                    invocationResult.getOutputJSON().toString(), " (", invocationResult.getOutcomeCode(),
                    "), exception: ", thrownException);

        if (response.status() != HttpStatus.OK_200 && toCallback)
            daoInterfaceLocal.rollback();

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * PATCH | check a write file operation
     */
    public static Route writeFile = (Request request, Response response) -> {

        // TODO check that cryptoac users are those actually requesting the operation

        APIOutput invocationResult = null;
        Exception thrownException = null;
        boolean toCallback = false;

        try {

            DAO selectedDAO = DAO.get(getPathParameter(request, kDAO));

            // first, acquire the parameters from the request
            FileTuple fileTuple = new Gson()
                    .fromJson(getStringParameterFromMultipart(request, kFileTupleKey), FileTuple.class);
            String encryptingKeyVersionNumber = getStringParameterFromMultipart(request, kEncryptingKeyVersionNumberKey);
            String fileName = fileTuple.getAssociatedElement();

            File file = new File(fileName, null, Integer.parseInt(encryptingKeyVersionNumber));
            file.setToken(fileTuple.getFileToken());

            App.logger.info("[{}{}{}{} ", className, " (" + writeFileLog + ")]: ",
                    "received request to write file ", fileName);

            // this hash set contains the file tuple related to the file to
            // read if the user has access to the file, no tuples otherwise
            HashSet<FileTuple> fileTupleOfFileToReads = daoInterfaceLocal.getFileTuples(fileName);

            if (!fileTupleOfFileToReads.isEmpty()) {

                FileTuple oldFileTuple = null;
                for (FileTuple currentFileTuple : fileTupleOfFileToReads)
                    oldFileTuple = currentFileTuple;

                // We have to check that:
                // - the file tuple's signature is correct. This includes also checking that the role
                // that signed the tuple actually exists and it was not deleted;
                // - the file version number is the latest one;
                // - the role that signed the file tuple has READ AND WRITE permission over the file.
                // - the specified AccessControlEnforcement is the same as the old one

                // ========== ZERO CHECK ========== the specified AccessControlEnforcement is the same as the old one
                if (oldFileTuple.getAccessControlEnforcement().equals(fileTuple.getAccessControlEnforcement())) {

                    String roleToken = fileTuple.getSignerOfThisTuple();
                    Integer decryptFileVersionNumber = fileTuple.getDecryptingKeyVersionNumber();

                    // ========== FIRST CHECK ========== the tuple was signed by a role
                    if (fileTuple.getElementSigner() == CryptoACActiveElement.CryptoACActiveElementEnum.Role) {

                        daoInterfaceLocal.lockDAOInterfaceStatus();
                        toCallback = true;
                        int actualFileVersionNumber = daoInterfaceLocal.getFileEncryptingVersionNumberByName(fileName);

                        // ========== SECOND CHECK ========== check that the new decrypt file number is the
                        // latest encrypt file number (i.e., the file was encrypted with the latest key)
                        if (actualFileVersionNumber == decryptFileVersionNumber) {

                            // ========== THIRD CHECK ========== FileTuple signature
                            PublicKey publicKeyOfRole = daoInterfaceLocal.getPublicSigningKeyOfRoleByToken(roleToken);
                            CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(fileTuple, publicKeyOfRole);

                            // ========== FINAL CHECK ========== does the role have WRITE permission over the file?
                            HashSet<Role> rolesThatSignedTheTuple =
                                    daoInterfaceLocal.getRole(null, roleToken, -1, -1);

                            if (!rolesThatSignedTheTuple.isEmpty()) {

                                if (rolesThatSignedTheTuple.size() == 1) {

                                    Role roleThatSignedTheTuple = null;
                                    for (Role role : rolesThatSignedTheTuple)
                                        roleThatSignedTheTuple = role;
                                    String roleName = roleThatSignedTheTuple.getName();

                                    HashSet<PermissionTuple> permissionTuplesOfRole =
                                            daoInterfaceLocal.getPermissionTuples(roleName, fileName,
                                                    null, null, -1, -1);

                                    boolean didWeFindTheTuple = false;

                                    // we look for the tuple giving RW permission to the role over the file
                                    for (PermissionTuple permissionTuple : permissionTuplesOfRole) {

                                        if (Permission.Read_and_Write == permissionTuple.getAssociatedPermission()) {

                                            PublicKey publicKeyOfSigner = daoInterfaceLocal.getPublicSigningKeyOfUserByToken(
                                                    permissionTuple.getSignerOfThisTuple());
                                            CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(permissionTuple, publicKeyOfSigner);

                                            // if the permission tuple is related to the latest file number
                                            if (permissionTuple.getEncryptingKeyVersionNumber() == actualFileVersionNumber) {

                                                // Yes, the role has write permissions!
                                                didWeFindTheTuple = true;

                                                // if everything is correct, update the tuple in the metadata storage
                                                // and then ask the data storage to overwrite the file
                                                daoInterfaceLocal.deleteFileTupleByFileName(fileName);
                                                daoInterfaceLocal.addFileTuple(fileTuple);

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
                                                OperationOutcomeCode returningCode = invocationResult.getOutcomeCode();

                                                if (returningCode == code_0)
                                                    daoInterfaceLocal.unlockDAOInterfaceStatus();

                                                // break the while loop
                                                break;
                                            }
                                        }
                                    }
                                    if (!didWeFindTheTuple) {
                                        invocationResult = new APIOutput("the role with token" +
                                                roleToken + " does not have write permission on file " + fileName,
                                                code_15);
                                        response.status(HttpStatus.FORBIDDEN_403);
                                    }
                                }
                                // if so, it means that the role that signed the tuple is not uniquely identified by its token
                                else {
                                    invocationResult = new APIOutput("found more than one role with token" +
                                            roleToken, code_79);
                                    response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
                                }
                            }
                            // if so, it means that the role that signed the tuple does not exist in the database
                            else {
                                invocationResult = new APIOutput("the role with token" +
                                        roleToken + " does not exists in the database",
                                        code_10);
                                response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                            }
                        }
                        // if so, it means that the version number in the file tuple is not the latest one
                        else {
                            invocationResult = new APIOutput("file version number should be " +
                                    actualFileVersionNumber + " and instead it is " + decryptFileVersionNumber,
                                    code_17);
                            response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                        }
                    }
                    // if so, it means that the file tuple was not signed by a role
                    else {
                        invocationResult = new APIOutput("the file tuple was not signed by a role",
                                code_59);
                        response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                    }
                }
                // if so, it means that the file is to be uploaded with a different AC enforcement
                else {
                    invocationResult = new APIOutput("the specified access control enforcement " +
                            "is wrong (old is " + oldFileTuple.getAccessControlEnforcement() + ", new is " +
                            fileTuple.getAccessControlEnforcement() + "),", code_89);
                    response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
                }
            }
            // if so, it means that the file does not exist
            else {
                invocationResult = new APIOutput("the file does not exist",
                        code_6);
                response.status(HttpStatus.NOT_FOUND_404);
            }
        }
        // thrown while parsing the received parameters as tuples
        catch (JsonSyntaxException e) {
            invocationResult = new APIOutput("exception while parsing the received parameters" +
                    " as tuples ", code_59);
            thrownException = e;
            response.status(HttpStatus.UNPROCESSABLE_ENTITY_422);
        }
        // thrown while getting the parameters from the HTTP request
        catch (IOException | InterruptedException | ServletException | IllegalArgumentException e) {
            invocationResult = new APIOutput("exception while getting the parameters from " +
                    "the HTTP request ", code_76);
            thrownException = e;
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown while interacting with the metadata storage
        catch (DAOException e) {
            invocationResult = new APIOutput("exception while interacting with the metadata " +
                    "storage ", e.getErrorCode());
            thrownException = e;
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown while verifying the signature of a tuple
        catch (InvalidKeyException | NoSuchAlgorithmException e) {
            invocationResult = new APIOutput("exception while verifying the signature of a tuple ",
                    code_13);
            thrownException = e;
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }
        // thrown if the signature of a tuple is not valid
        catch (SignatureException e) {
            invocationResult = new APIOutput("the signature of a tuple is not valid ", code_7);
            thrownException = e;
            response.status(HttpStatus.INTERNAL_SERVER_ERROR_500);
        }

        if (response.status() != HttpStatus.OK_200)
            App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + writeFileLog + ")]: ", "error: ",
                    invocationResult.getOutputJSON().toString(), " (", invocationResult.getOutcomeCode(),
                    "), exception: ", thrownException);

        if (response.status() != HttpStatus.OK_200 && toCallback)
            daoInterfaceLocal.rollback();

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };
}
