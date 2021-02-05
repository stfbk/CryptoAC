package eu.fbk.st.cryptoac.dao.local;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.core.element.User;
import eu.fbk.st.cryptoac.core.tuple.*;
import eu.fbk.st.cryptoac.dao.DAO;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQL;
import eu.fbk.st.cryptoac.core.element.File;
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
import java.security.KeyPair;
import java.time.Duration;
import java.util.*;

import static eu.fbk.st.cryptoac.util.Const.API.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.kDAO;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.kFileNameInCryptoAC;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;

/**
 * This class is an implementation of the DAO interface for PaaS Docker deployment. In addition to the
 * functionalities inherited by DAOInterfaceMySQL, this class provides integration with CryptoAC DS and
 * CryptoAC RM. Moreover, this class interacts with an OPA server for the configuration of (traditional)
 * AC policies.
 */
public class DAOInterfaceLocal extends DAOInterfaceMySQL {

    /**
     * The default timeout for HTTP connections.
     */
    public static final Integer kTimeoutInSeconds = 10;

    /**
     * the base API path (url + port) of the RM.
     */
    private final String rmBaseAPI;

    /**
     * the base API path (url + port) of the DS.
     */
    private final String dsBaseAPI;

    /**
     * the base API path (url + port) of the OPA server.
     */
    private final String opaBaseAPI;

    // TODO HTTPS
    /**
     * the HTTP protocol.
     */
    public static final String kHTTP = "http://";

    /**
     * the HTTP client.
     */
    private final HttpClient.Builder kHTTPClientBuilder;

    /**
     * the HTTP request builder.
     */
    private final HttpRequest.Builder kHTTPRequestBuilder;



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
     * the key of the JDB URL in HTTP requests.
     */
    public static final String kJDBUrl = "JDBUrl";

    /**
     * the key of the DS base API URL in HTTP requests.
     */
    public static final String kDSBaseAPI = "dsBaseAPI";

    /**
     * the key of the OPA base API URL in HTTP requests.
     */
    public static final String kOPABaseAPI = "opaBaseAPI";


    /**
     * the path of the file containing the rego RBAC policy in the resources.
     */
    private static final String kInitializationRegoRBACPolicy = "/cryptoac/rbac.rego";

    /**
     * the key in the OPA RBAC document for the user-role (UR) relationship.
     */
    public static final String kUR = "ur";

    /**
     * the key in the OPA RBAC document for the role-file (PA) relationship.
     */
    public static final String kPA = "pa";

    /**
     * Constructor with parameters.
     * @param daoInterfaceLocalParameters the needed parameters to create an instance of this class.
     *                                    The parameters should contain the url and port or the other Docker
     *                                    like RM, DS and MS.z
     */
    protected DAOInterfaceLocal(DAOInterfaceLocalParameters daoInterfaceLocalParameters) {

        super(daoInterfaceLocalParameters);

        locksOnCloud = 0;

        // this name will be used in logs as the class name
        className = "DAOInterfaceLocal";

        rmBaseAPI  = daoInterfaceLocalParameters.getRMURL()  + ":" + daoInterfaceLocalParameters.getRMPort();
        dsBaseAPI  = daoInterfaceLocalParameters.getDSURL()  + ":" + daoInterfaceLocalParameters.getDSPort();
        opaBaseAPI = daoInterfaceLocalParameters.getOPAURL() + ":" + daoInterfaceLocalParameters.getOPAPort();

        // TODO set SSL context
        kHTTPClientBuilder = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_2)
                .connectTimeout(Duration.ofSeconds(kTimeoutInSeconds));
        kHTTPRequestBuilder = HttpRequest.newBuilder()
                .version(HttpClient.Version.HTTP_2)
                .timeout(Duration.ofSeconds(kTimeoutInSeconds));
    }

    /**
     * This method creates a new instance of this class with the given parameters.
     * @param daoInterfaceLocalParameters initialization parameters (see class constructor)
     */
    public static DAOInterfaceLocal getInstance(DAOInterfaceLocalParameters daoInterfaceLocalParameters) {
        return new DAOInterfaceLocal(daoInterfaceLocalParameters);
    }



    /**
     * This method is invoked once to initialize the administrator.
     * It configures the RM (1) and the DS (2) by providing relevant parameters
     * (e.g., IP and port of the MS). Finally, it creates the Rego RBAC policy (2)
     * and base document (3) in the OPA server and invokes (4) the superclass method.
     * @param adminEncryptingKeys the encrypting keys of the admin
     * @param adminSigningKeys the signing keys of the admin
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void initializeAdmin(@NotNull KeyPair adminEncryptingKeys, @NotNull KeyPair adminSigningKeys) throws DAOException {

        OperationOutcomeCode returningCode;
        Exception thrownException = null;

        try (
            // get a stream to the Rego RBAC policy
            InputStream inputStreamRegoRBACPolicy =
                    DAOInterfaceMySQL.class.getResourceAsStream(kInitializationRegoRBACPolicy)
        ) {

            // ========== 1 ========== configure the RM
            App.logger.info("[{}{}{} ", className, " (" + initializeAdmin + ")]: ", "configuring the RM");

            MultipartBodyPublisher publisherForBodyRMRequest = new MultipartBodyPublisher()
                    .addPart(kJDBUrl, jDBUrl)
                    .addPart(kMySQLPropertyUser, mySqlProperties.getProperty(kMySQLPropertyUser))
                    .addPart(kMySQLPropertyPassword, mySqlProperties.getProperty(kMySQLPropertyPassword))
                    .addPart(kOPABaseAPI, opaBaseAPI)
                    .addPart(kDSBaseAPI, dsBaseAPI);

            HttpRequest requestToConfigureRM = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + rmBaseAPI + RMCONFIGURE))
                    .header("Content-Type", "multipart/form-data; boundary=" + publisherForBodyRMRequest.getBoundary())
                    .header("Accept", "application/json")
                    .POST(publisherForBodyRMRequest.build())
                    .build();

            HttpResponse<String> responseFromRM =
                    kHTTPClientBuilder.build().send(requestToConfigureRM, HttpResponse.BodyHandlers.ofString());

            APIOutput apiOutputFromService = new Gson().fromJson(responseFromRM.body(), APIOutput.class);
            returningCode = apiOutputFromService.getOutcomeCode();
            int statusCode = responseFromRM.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400 || returningCode != code_0) {
                App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "RM configuration returned code " + returningCode, " with HTTP status ",
                        statusCode, " and message: ", apiOutputFromService.getOutcomeCode());
                throw new DAOException(null, code_86);
            }



            // ========== 2 ========== configure the DS
            App.logger.info("[{}{}{} ", className, " (" + initializeAdmin + ")]: ", "configuring the DS");

            MultipartBodyPublisher publisherForBodyDSRequest = new MultipartBodyPublisher()
                    .addPart(kOPABaseAPI, opaBaseAPI);

            HttpRequest requestToConfigureDS = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + dsBaseAPI + DSCONFIGURE))
                    .header("Content-Type", "multipart/form-data; boundary=" + publisherForBodyDSRequest.getBoundary())
                    .header("Accept", "application/json")
                    .POST(publisherForBodyDSRequest.build())
                    .build();

            HttpResponse<String> responseFromDS =
                    kHTTPClientBuilder.build().send(requestToConfigureDS, HttpResponse.BodyHandlers.ofString());

            apiOutputFromService = new Gson().fromJson(responseFromDS.body(), APIOutput.class);
            returningCode = apiOutputFromService.getOutcomeCode();
            statusCode = responseFromDS.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400 || returningCode != code_0) {
                App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "DS configuration returned code " + returningCode, " with HTTP status ",
                        statusCode, " and message: ", apiOutputFromService.getOutcomeCode());
                throw new DAOException(null, code_90);
            }





            // ========== 3 ========== create the RBAC policy in the OPA server
            App.logger.info("[{}{}{} ", className, " (" + initializeAdmin + ")]: ", "configuring the OPA server");

            String rbacPolicyOPA = new String(inputStreamRegoRBACPolicy.readAllBytes());

            HttpRequest requestToCreatePolicyOPA = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + opaBaseAPI + OPARBACPOLICY))
                    .PUT(HttpRequest.BodyPublishers.ofString(rbacPolicyOPA))
                    .build();

            HttpResponse<String> responseFromCreatePolicyOPA =
                    kHTTPClientBuilder.build().send(requestToCreatePolicyOPA, HttpResponse.BodyHandlers.ofString());

            statusCode = responseFromCreatePolicyOPA.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400) {
                App.logger.error("[{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "OPA policy creation returned HTTP status ", statusCode);
                throw new DAOException(null, code_81);
            }


            // ========== 4 ========== create the RBAC document in the OPA server
            HttpRequest requestToCreateDocumentOPA = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + opaBaseAPI + OPARBACDATA))
                    .header("Content-Type", "application/json")
                    .PUT(HttpRequest.BodyPublishers.ofString("{\"" + kUR + "\":{}, \"" + kPA + "\":{}}"))
                    .build();

            HttpResponse<String> responseFromCreateDocumentOPA =
                    kHTTPClientBuilder.build().send(requestToCreateDocumentOPA, HttpResponse.BodyHandlers.ofString());

            statusCode = responseFromCreateDocumentOPA.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400) {
                App.logger.error("[{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "OPA document creation returned HTTP status ", statusCode);
                throw new DAOException(null, code_82);
            }


            // ========== 5 ========== initialize the admin with tuples
            super.initializeAdmin(adminEncryptingKeys, adminSigningKeys);
            returningCode = code_0;
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            thrownException = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            thrownException = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            thrownException = e;
            returningCode = code_76;
        }
        // thrown if the HTTP response could not be parsed into JSON
        catch(JsonSyntaxException e) {
            thrownException = e;
            returningCode = code_50;
        }

        logAtEndOfMethod(returningCode, initializeAdmin, thrownException);
    }


    /**
     * This method checks the DAO interface parameters by pinging the RM and the DS.
     * @param userToInitialise the user object to initialise
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void initializeUser(@NotNull User userToInitialise) throws DAOException {

        pingCryptoACService(kHTTP + rmBaseAPI + RMPING, initialiseUser);
        pingCryptoACService(kHTTP + dsBaseAPI + DSPING, initialiseUser);

        super.initializeUser(userToInitialise);
    }


    /**
     * This method uploads (1) the file to the DS. Then, it sends (2) a POST request to the RM
     * to ask to validate the operation. Finally, the RM returns either a positive or a negative
     * (e.g., in case tuples or signatures are wrong) response.
     * Remember that file names are unique.
     * Remember that you can get the content of the file from the InputStream in the newFile parameter.
     * Remember that the RM has to check the validity of the new data. This means that:
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
    public void addFile(@NotNull File newFile, @NotNull FileTuple newFileTuple,
                        @NotNull PermissionTuple newPermissionTuple) throws DAOException {

        OperationOutcomeCode returningCode;
        Exception thrownException = null;

        try {

            String fileName = newFile.getName();

            App.logger.info("[{}{}{} ", className, " (" + addFile + ")]: ", "adding file " + fileName);


            // ========== 1 ========== send the file to the DS that will store it in the "untrusted" folder
            HttpRequest requestToUploadFile = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + dsBaseAPI + UPLOADFILE.replace(":" + kDAO, DAO.Local.toString())))
                    .header("Content-Type", "application/octet-stream")
                    .header("Content-Disposition", "attachment; filename=\"" + fileName + "\"")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofInputStream(newFile::getFileStream))
                    .build();

            HttpResponse<String> responseFromDS =
                    kHTTPClientBuilder.build().send(requestToUploadFile, HttpResponse.BodyHandlers.ofString());

            APIOutput apiOutputFromService = new Gson().fromJson(responseFromDS.body(), APIOutput.class);
            returningCode = apiOutputFromService.getOutcomeCode();
            int statusCode = responseFromDS.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400 || returningCode != code_0) {
                App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "DS file upload returned code " + returningCode, " with HTTP status ",
                        statusCode, " and message: ", apiOutputFromService.getOutcomeCode());
                throw new DAOException(null, code_19);
            }


            // ========== 2 ========== ask RM to validate the new file
            // we can now ask the RM to add the tuples in the database
            // and then tell the DS to move the uploaded from from the
            // "untrusted" folder for new files to the actual folder,
            // where other users can download it.
            App.logger.info("[{}{}{} ", className, " (" + addFile + ")]: ", "asking RM to validate operation");


            // TODO "new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create()"?
            MultipartBodyPublisher publisherForRMBody = new MultipartBodyPublisher()
                    .addPart(kEncryptingKeyVersionNumberKey, String.valueOf(newFile.getEncryptingKeyVersionNumber()))
                    .addPart(kFileTupleKey, new Gson().toJson(newFileTuple))
                    .addPart(kPermissionTupleKey, new Gson().toJson(newPermissionTuple));

            HttpRequest requestToConfirmAdd = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + rmBaseAPI + ADDFILE.replace(":" + kDAO, DAO.Local.toString())))
                    .header("Content-Type", "multipart/form-data; boundary=" + publisherForRMBody.getBoundary())
                    .header("Accept", "application/json")
                    .POST(publisherForRMBody.build())
                    .build();

            HttpResponse<String> responseFromRM =
                    kHTTPClientBuilder.build().send(requestToConfirmAdd, HttpResponse.BodyHandlers.ofString());

            apiOutputFromService = new Gson().fromJson(responseFromRM.body(), APIOutput.class);
            returningCode = apiOutputFromService.getOutcomeCode();
            statusCode = responseFromRM.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400 || returningCode != code_0) {
                App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "RM new file validation returned code " + returningCode, " with HTTP status ",
                        statusCode, " and message: ", apiOutputFromService.getOutcomeCode());
                throw new DAOException(null, code_87);
            }

            returningCode = code_0;
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            thrownException = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            thrownException = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            thrownException = e;
            returningCode = code_76;
        }
        // thrown if the HTTP response could not be parsed into JSON
        catch(JsonSyntaxException e) {
            thrownException = e;
            returningCode = code_50;
        }

        logAtEndOfMethod(returningCode, addFile, thrownException);
    }



    /**
     * This method invokes the superclass method and then updates the
     * RBAC document in the OPA server according to the new role tuple.
     * @param newRoleTuple the role tuple to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void addRoleTuple(@NotNull RoleTuple newRoleTuple) throws DAOException {

        String username = newRoleTuple.getAssociatedElement();

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(usernameColumn, username);
        HashSet<String> columnsToSelect = new HashSet<>();
        columnsToSelect.add(roleNameColumn);
        int countOfRoleTuples = countRowsInTable(roleTuplesTable,
                whereParameters, null, columnsToSelect);

        // first we add the role tuple in the database. If there were no
        // errors, then we can also modify the "traditional" AC policy
        // It is important to always keep this order (first modify the
        // CAC policy, then modify the OPA document), as otherwise we
        // may obtain a wrong count of tuples
        super.addRoleTuple(newRoleTuple);

        App.logger.info("[{}{}{}{} ", className, " (" + addRoleTuple + ")]: ",
                "updating the OPA document with new role tuple: ", newRoleTuple.toString());

        // note that, if "updateRBACDocumentOPAServer" throws a DAO exception, the system
        // results in an inconsistent state, as the OPA document and the CAC policy are in
        // different states themselves. However, remember that the user class will rollbacks
        // the state of the database, so no worries
        updateRBACDocumentOPAServer(
                "[" + getJSONPatchForAddOperation(kUR, countOfRoleTuples, newRoleTuple) + "]", addRoleTuple);
    }

    /**
     * This method invokes the superclass method and then updates the
     * RBAC document in the OPA server according to the new role tuples.
     * @param newRoleTuples the set of role tuples to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void addRoleTuple(@NotNull HashSet<RoleTuple> newRoleTuples) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + addRoleTuple + ")]: ", "adding a set of role tuples");

        // we store the count of role tuples per user so to avoid querying the database
        // when we already have the count of role tuples of a given user
        HashMap<String, Integer> countOfRoleTuplesPerUser = new HashMap<>();

        // to send a single HTTP PATCH request to the OPA server, we first
        // create the JSON patch to the OPA document, then we send the request
        StringBuilder jsonPatch = new StringBuilder("[");

        // in this loop, we create the JSON patch string
        for (RoleTuple newRoleTuple : newRoleTuples) {

            String username = newRoleTuple.getAssociatedElement();
            int countOfRoleTuples;

            if (!countOfRoleTuplesPerUser.containsKey(username)) {

                // retrieve the count of role tuples for this user
                LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
                whereParameters.put(usernameColumn, username);
                HashSet<String> columnsToSelect = new HashSet<>();
                columnsToSelect.add(roleNameColumn);
                countOfRoleTuples = countRowsInTable(roleTuplesTable,
                        whereParameters, null, columnsToSelect);
            }
            else {
                countOfRoleTuples = countOfRoleTuplesPerUser.get(username);
                countOfRoleTuples = countOfRoleTuples + 1;
            }
            countOfRoleTuplesPerUser.put(username, countOfRoleTuples);

            jsonPatch.append(getJSONPatchForAddOperation(kUR, countOfRoleTuples, newRoleTuple));
        }

        jsonPatch.append("]");

        // first we add the role tuples in the database. If there were no
        // errors, then we can also modify the "traditional" AC policy.
        // It is important to always keep this order (first modify the
        // CAC policy, then modify the OPA document), as otherwise we
        // may obtain a wrong count of tuples
        super.addRoleTuple(newRoleTuples);

        App.logger.info("[{}{}{} ", className, " (" + addRoleTuple + ")]: ",
                "updating the OPA document with new role tuples");

        // note that, if "updateRBACDocumentOPAServer" throws a DAO exception, the system
        // results in an inconsistent state, as the OPA document and the CAC policy are in
        // different states themselves. However, remember that the user class will rollbacks
        // the state of the database, so no worries
        updateRBACDocumentOPAServer(jsonPatch.toString(), addRoleTuple);
    }



    /**
     * This method invokes the superclass method and then updates the
     * RBAC document in the OPA server according to the new permission tuple.
     * @param newPermissionTuple the permission tuple to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void addPermissionTuple(@NotNull PermissionTuple newPermissionTuple) throws DAOException {

        String roleName = newPermissionTuple.getAssociatedElement();

        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(roleNameColumn, roleName);
        HashSet<String> columnsToSelect = new HashSet<>();
        columnsToSelect.add(fileNameColumn);
        int countOfPermissionTuples = countRowsInTable(permissionTuplesTable,
                whereParameters, null, columnsToSelect);

        // first we add the permission tuple in the database. If there were no
        // errors, then we can also modify the "traditional" AC policy.
        // It is important to always keep this order (first modify the
        // CAC policy, then modify the OPA document), as otherwise we
        // may obtain a wrong count of tuples
        super.addPermissionTuple(newPermissionTuple);

        App.logger.info("[{}{}{}{} ", className, " (" + addPermissionTuple + ")]: ",
                "updating the OPA document with new permission tuple: ", newPermissionTuple.toString());

        // note that, if "updateRBACDocumentOPAServer" throws a DAO exception, the system
        // results in an inconsistent state, as the OPA document and the CAC policy are in
        // different states themselves. However, remember that the user class will rollbacks
        // the state of the database, so no worries
        updateRBACDocumentOPAServer(
                "[" + getJSONPatchForAddOperation(kPA, countOfPermissionTuples, newPermissionTuple) + "]",
                addPermissionTuple);
    }

    /**
     * This method invokes the superclass method and then updates the
     * RBAC document in the OPA server according to the new permission tuples.
     * @param newPermissionTuples the set of permission tuples to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void addPermissionTuple(@NotNull HashSet<PermissionTuple> newPermissionTuples) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + addPermissionTuple + ")]: ", "adding a set of permission tuples");

        // we store the count of permission tuples per user so to avoid querying the database
        // when we already have the count of permission tuples of a given role
        HashMap<String, Integer> countOfPermissionTuplesPerRole = new HashMap<>();

        // to send a single HTTP PATCH request to the OPA server, we first
        // create the JSON patch to the OPA document, then we send the request
        StringBuilder jsonPatch = new StringBuilder("[");

        // in this loop, we create the JSON patch string
        for (PermissionTuple newPermissionTuple : newPermissionTuples) {

            String roleName = newPermissionTuple.getAssociatedElement();
            int countOfPermissionTuples;

            if (!countOfPermissionTuplesPerRole.containsKey(roleName)) {

                // retrieve the count of permission tuples for this role.
                LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
                whereParameters.put(roleNameColumn, roleName);
                HashSet<String> columnsToSelect = new HashSet<>();
                columnsToSelect.add(fileNameColumn);
                countOfPermissionTuples = countRowsInTable(permissionTuplesTable,
                        whereParameters, null, columnsToSelect);
            }
            else {
                countOfPermissionTuples = countOfPermissionTuplesPerRole.get(roleName);
                countOfPermissionTuples = countOfPermissionTuples + 1;
            }
            countOfPermissionTuplesPerRole.put(roleName, countOfPermissionTuples);

            jsonPatch.append(getJSONPatchForAddOperation(kPA, countOfPermissionTuples, newPermissionTuple));
        }

        jsonPatch.append("]");

        // first we add the permission tuples in the database. If there were no
        // errors, then we can also modify the "traditional" AC policy.
        // It is important to always keep this order (first modify the
        // CAC policy, then modify the OPA document), as otherwise we
        // may obtain a wrong count of tuples
        super.addPermissionTuple(newPermissionTuples);

        App.logger.info("[{}{}{} ", className, " (" + addPermissionTuple + ")]: ",
                "updating the OPA document with new permission tuples");

        // note that, if "updateRBACDocumentOPAServer" throws a DAO exception, the system
        // results in an inconsistent state, as the OPA document and the CAC policy are in
        // different states themselves. However, remember that the user class will rollbacks
        // the state of the database, so no worries
        updateRBACDocumentOPAServer(jsonPatch.toString(), addPermissionTuple);
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
        Exception thrownException = null;

        try {

            App.logger.info("[{}{}{} ", className, " (" + deleteFileAndFileTuple + ")]: ", "deleting file " + fileName);

            deleteFileTupleByFileName(fileName);
            deleteFile(fileName);

            HttpRequest requestToDeleteFile = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + dsBaseAPI + REMOVEFILE
                            .replace(":" + kDAO, DAO.Local.toString())
                            .replace(":" + kFileNameInCryptoAC, fileName)))
                    .header("Accept", "application/json")
                    .DELETE()
                    .build();

            HttpResponse<String> responseFromDS =
                    kHTTPClientBuilder.build().send(requestToDeleteFile, HttpResponse.BodyHandlers.ofString());

            APIOutput apiOutputFromService = new Gson().fromJson(responseFromDS.body(), APIOutput.class);
            returningCode = apiOutputFromService.getOutcomeCode();
            int statusCode = responseFromDS.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400 || returningCode != code_0) {
                App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "DS file delete returned code " + returningCode, " with HTTP status ",
                        statusCode, " and message: ", apiOutputFromService.getOutcomeCode());
                throw new DAOException(null, code_20);
            }

            returningCode = code_0;
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            thrownException = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            thrownException = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            thrownException = e;
            returningCode = code_76;
        }
        // thrown if the HTTP response could not be parsed into JSON
        catch(JsonSyntaxException e) {
            thrownException = e;
            returningCode = code_50;
        }

        logAtEndOfMethod(returningCode, deleteFileAndFileTuple, thrownException);
    }



    /**
     * This method invokes the superclass method and then updates the
     * RBAC document in the OPA server according to the deleted role tuples.
     * @param roleName name of the role that has to match in the role tuple,
     *                 null if the role tuples are not to be deleted by role
     * @param roleVersionNumber the role version number to match in the role tuple,
     *                 null if the role tuples are not to be deleted by role version number
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void deleteRoleTuples(String roleName, Integer roleVersionNumber) throws DAOException {

        super.deleteRoleTuples(roleName, roleVersionNumber);

        // JSON Patch (https://tools.ietf.org/html/rfc6902) is based on the JSON
        // pointer RFC (https://tools.ietf.org/html/rfc6901) in which there is no
        // way to select an element from an array by some property except by index

        // Therefore, to remove the role tuples from the OPA document policy, we
        // have to download the whole OPA document to find the right indexes.
        // Only then, we can apply the JSON patch.

        // TODO A possible revision to the JSON-Patch format is being discussed (last update Nov 2019),
        //  which may support value-based array operations. Check https://github.com/json-patch/json-patch2
        //  and especially https://github.com/json-patch/json-patch2/issues/18.

        OPADocument opaDocument = getOPADocument(deleteRoleTuples);
        HashMap<String, ArrayList<RoleTuple>> roleTuples = opaDocument.getResult().getUr();

        // to send a single HTTP PATCH request to the OPA server, we first
        // create the JSON patch to the OPA document, then we send the request
        StringBuilder jsonPatch = new StringBuilder("[");

        // in this loop, we create the JSON patch string
        for (String currentUsername : roleTuples.keySet()) {

            ArrayList<RoleTuple> currentRoleTuples = roleTuples.get(currentUsername);

            // we have a reverse for loop as we need to remove the last elements of the
            // array first (otherwise, if we were to remove the first elements, the others
            // would shift position and we should recompute all indexes)
            for (int i = currentRoleTuples.size() - 1; i >= 0; i--) {

                RoleTuple currentRoleTuple = currentRoleTuples.get(i);

                if (currentRoleTuple.getAssociatedRole().equals(roleName) ||
                    currentRoleTuple.getRoleVersionNumber().equals(roleVersionNumber)) {

                    jsonPatch
                            .append("{ \"op\": \"remove\", \"path\": \"/" + kUR + "/")
                            .append(currentUsername).append("/").append(i).append("\" }");
                }
            }
        }

        jsonPatch.append("]");

        // note that, if "updateRBACDocumentOPAServer" throws a DAO exception, the system
        // results in an inconsistent state, as the OPA document and the CAC policy are in
        // different states themselves. However, remember that the user class will rollbacks
        // the state of the database, so no worries
        updateRBACDocumentOPAServer(jsonPatch.toString(), deleteRoleTuples);
    }

    /**
     * This method invokes the superclass method and then updates the
     * RBAC document in the OPA server according to the deleted permission tuples.
     * @param roleName name of the role that has to match in the permission tuple,
     *                 null if the permission tuples are not to be deleted by role
     * @param fileName name of the file that has to match in the permission tuple,
     *                 null if the permission tuples are not to be deleted by file
     * @param roleVersionNumber the role version number to match in the role tuple,
     *                 null if the role tuples are not to be deleted by role version number
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void deletePermissionTuples(String roleName, String fileName, Integer roleVersionNumber) throws DAOException {

        super.deletePermissionTuples(roleName, fileName, roleVersionNumber);

        // JSON Patch (https://tools.ietf.org/html/rfc6902) is based on the JSON
        // pointer RFC (https://tools.ietf.org/html/rfc6901) in which there is no
        // way to select an element from an array by some property except by index.

        // Therefore, to remove the permission tuples from the OPA document policy, we
        // have to download the whole OPA document to find the right indexes.
        // Only then, we can apply the JSON patch.

        // TODO A possible revision to the JSON-Patch format is being discussed (last update Nov 2019),
        //  which may support value-based array operations. Check https://github.com/json-patch/json-patch2
        //  and especially https://github.com/json-patch/json-patch2/issues/18.

        OPADocument opaDocument = getOPADocument(deletePermissionTuples);
        HashMap<String, ArrayList<PermissionTuple>> permissionTuples = opaDocument.getResult().getPa();


        // to send a single HTTP PATCH request to the OPA server, we first
        // create the JSON patch to the OPA document, then we send the request.
        StringBuilder jsonPatch = new StringBuilder("[");

        // in this loop, we create the JSON patch string.
        for (String currentRoleName : permissionTuples.keySet()) {

            if (currentRoleName.equals(roleName)) {

                jsonPatch
                        .append("{ \"op\": \"remove\", \"path\": \"/" + kPA + "/")
                        .append(currentRoleName).append("\" }");
            }
            else {

                ArrayList<PermissionTuple> currentPermissionTuples = permissionTuples.get(currentRoleName);

                // we have a reverse for loop as we need to remove the last elements of the
                // array first (otherwise, if we were to remove the first elements, the others
                // would shift position and we should recompute all indexes)
                for (int i = currentPermissionTuples.size() - 1; i >= 0; i--) {

                    PermissionTuple currentPermissionTuple = currentPermissionTuples.get(i);

                    if (currentPermissionTuple.getAssociatedFile().equals(fileName) ||
                            currentPermissionTuple.getRoleVersionNumber().equals(roleVersionNumber)) {

                        jsonPatch
                                .append("{ \"op\": \"remove\", \"path\": \"/" + kPA + "/")
                                .append(currentRoleName).append("/").append(i).append("\" }");
                    }
                }
            }
        }

        jsonPatch.append("]");

        // note that, if "updateRBACDocumentOPAServer" throws a DAO exception, the system
        // results in an inconsistent state, as the OPA document and the CAC policy are in
        // different states themselves. However, remember that the user class will rollbacks
        // the state of the database, so no worries
        updateRBACDocumentOPAServer(jsonPatch.toString(), deletePermissionTuples);
    }

    /**
     * This method invokes the superclass method and then updates the
     * RBAC document in the OPA server according to the modified permission tuples.
     * @param updatedPermissionTuple the updated permission tuple
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void updatePermissionInPermissionTuple(PermissionTuple updatedPermissionTuple) throws DAOException {

        super.updatePermissionInPermissionTuple(updatedPermissionTuple);

        // JSON Patch (https://tools.ietf.org/html/rfc6902) is based on the JSON
        // pointer RFC (https://tools.ietf.org/html/rfc6901) in which there is no
        // way to select an element from an array by some property except by index.

        // Therefore, to modify the permission tuple in the OPA document policy, we
        // have to download the whole OPA document to find the right index.
        // Only then, we can apply the JSON patch.

        // TODO A possible revision to the JSON-Patch format is being discussed (last update Nov 2019),
        //  which may support value-based array operations. Check https://github.com/json-patch/json-patch2
        //  and especially https://github.com/json-patch/json-patch2/issues/18.

        OPADocument opaDocument = getOPADocument(updatePermissionInPermissionTuple);
        HashMap<String, ArrayList<PermissionTuple>> permissionTuples = opaDocument.getResult().getPa();
        String roleName = updatedPermissionTuple.getAssociatedElement();

        // to send a single HTTP PATCH request to the OPA server, we first
        // create the JSON patch to the OPA document, then we send the request.
        StringBuilder jsonPatch = new StringBuilder("[");

        ArrayList<PermissionTuple> currentPermissionTuples =
                permissionTuples.get(roleName);

        boolean found = false;

        for (int i = 0 ; i < currentPermissionTuples.size() && !found; i++) {

            PermissionTuple currentPermissionTuple = currentPermissionTuples.get(i);

            if (currentPermissionTuple.getAssociatedFile().equals(updatedPermissionTuple.getAssociatedFile()) ||
                currentPermissionTuple.getEncryptingKeyVersionNumber().equals(updatedPermissionTuple.getEncryptingKeyVersionNumber())) {

                jsonPatch
                        .append("{\"op\": \"replace\", \"path\": \"/")
                        .append(kPA)
                        .append("/")
                        .append(roleName)
                        .append("/")
                        .append(i)
                        .append("/associatedPermission\",\"value\": \"")
                        .append(updatedPermissionTuple.getAssociatedPermission().toString())
                        .append("\"}");
                found = true;
            }
        }

        jsonPatch.append("]");

        // note that, if "updateRBACDocumentOPAServer" throws a DAO exception, the system
        // results in an inconsistent state, as the OPA document and the CAC policy are in
        // different states themselves. However, remember that the user class will rollbacks
        // the state of the database, so no worries
        updateRBACDocumentOPAServer(jsonPatch.toString(), updatePermissionInPermissionTuple);
    }




    /**
     * This method updates the content of the file matching the given file name ("write" operation); it
     * - replaces (or uses versioning, if supported) the previous file
     * - (2) updates the file tuple with the new one.
     * If the file didn't exist before, throw exception.
     * Remember that the RM has to check the validity of the new data. This means that:
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
        Exception thrownException = null;

        try {

            String fileName = updatedFile.getName();
            App.logger.info("[{}{}{} ", className, " (" + updateFile + ")]: ", "updating file " + fileName);

            // ========== 1 ========== send the file to the DS that will store it in the "untrusted" folder
            HttpRequest requestToUploadFile = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + dsBaseAPI + UPLOADFILE.replace(":" + kDAO, DAO.Local.toString())))
                    .header("Content-Type", "application/octet-stream")
                    .header("Content-Disposition", "attachment; filename=\"" + fileName + "\"")
                    .header("Accept", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofInputStream(updatedFile::getFileStream))
                    .build();

            HttpResponse<String> responseFromDS =
                    kHTTPClientBuilder.build().send(requestToUploadFile, HttpResponse.BodyHandlers.ofString());

            APIOutput apiOutputFromService = new Gson().fromJson(responseFromDS.body(), APIOutput.class);
            returningCode = apiOutputFromService.getOutcomeCode();
            int statusCode = responseFromDS.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400 || returningCode != code_0) {
                App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "DS file update returned code " + returningCode, " with HTTP status ",
                        statusCode, " and message: ", apiOutputFromService.getOutcomeCode());
                throw new DAOException(null, code_21);
            }


            // ========== 2 ========== ask RM to validate the new file
            // we can now ask the RM to add the tuple in the database
            // and then tell the DS to overwrite the file in the folder
            // where other users can download it.
            // TODO "new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create()"?
            MultipartBodyPublisher publisherForRMBody = new MultipartBodyPublisher()
                    .addPart(kEncryptingKeyVersionNumberKey, String.valueOf(updatedFile.getEncryptingKeyVersionNumber()))
                    .addPart(kFileTupleKey, new Gson().toJson(updatedFileTuple));

            HttpRequest requestToConfirmWrite = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + rmBaseAPI + WRITEFILE.replace(":" + kDAO, DAO.Local.toString())))
                    .header("Content-Type", "multipart/form-data; boundary=" + publisherForRMBody.getBoundary())
                    .header("Accept", "application/json")
                    .method("PATCH", publisherForRMBody.build())
                    .build();

            HttpResponse<String> responseFromRM =
                    kHTTPClientBuilder.build().send(requestToConfirmWrite, HttpResponse.BodyHandlers.ofString());

            apiOutputFromService = new Gson().fromJson(responseFromRM.body(), APIOutput.class);
            returningCode = apiOutputFromService.getOutcomeCode();
            statusCode = responseFromRM.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400 || returningCode != code_0) {
                App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "RM updated file validation returned code " + returningCode, " with HTTP status ",
                        statusCode, " and message: ", apiOutputFromService.getOutcomeCode());
                throw new DAOException(null, code_88);
            }

            returningCode = code_0;
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            thrownException = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            thrownException = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            thrownException = e;
            returningCode = code_76;
        }
        // thrown if the HTTP response could not be parsed into JSON
        catch(JsonSyntaxException e) {
            thrownException = e;
            returningCode = code_50;
        }

        logAtEndOfMethod(returningCode, updateFile, thrownException);
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
        Exception thrownException = null;
        InputStream fileToReturn = null;

        try {

            App.logger.info("[{}{}{} ", className, " (" + downloadFile + ")]: ", "downloading file " + fileName);

            // download the file from the DS
            HttpRequest requestToDownloadFile = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + dsBaseAPI + DOWNLOADFILE
                            .replace(":" + kDAO, DAO.Local.toString())
                            .replace(":" + kFileNameInCryptoAC, fileName)))
                    .header("Accept", "application/json, application/octet-stream")
                    .GET()
                    .build();

            HttpResponse<InputStream> responseFromDS =
                    kHTTPClientBuilder.build().send(requestToDownloadFile, HttpResponse.BodyHandlers.ofInputStream());

            int statusCode = responseFromDS.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400) {
                APIOutput apiOutputFromService =
                        new Gson().fromJson(new String (responseFromDS.body().readAllBytes()), APIOutput.class);
                returningCode = apiOutputFromService.getOutcomeCode();
                App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "DS file download returned code " + returningCode, " with HTTP status ",
                        statusCode, " and message: ", apiOutputFromService.getOutcomeCode());
                throw new DAOException(null, code_22);
            }

            fileToReturn = responseFromDS.body();
            returningCode = code_0;
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            thrownException = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            thrownException = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            thrownException = e;
            returningCode = code_76;
        }
        // thrown if the HTTP response could not be parsed into JSON
        catch(JsonSyntaxException e) {
            thrownException = e;
            returningCode = code_50;
        }

        logAtEndOfMethod(returningCode, downloadFile, thrownException);

        return fileToReturn;
    }



    /**
     * This method updates the RBAC document data in the OPA server to reflect the changes made
     * to the MS CAC policy. Every time the CAC policy is modified (e.g., add/remove user/role/file,
     * assign/revoke permissions...) this function gets invoked.
     * @param jsonPatch JSON patch document as specified in RFC6902
     * @param methodName name of the method invoking this method
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    private void updateRBACDocumentOPAServer(String jsonPatch, String methodName) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + methodName + ")]: ",
                "updating OPA RBAC Document with patch: ", jsonPatch);

        OperationOutcomeCode returningCode;
        Exception thrownException = null;

        try {
            HttpRequest requestToUpdateDocumentOPA = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + opaBaseAPI + OPARBACDATA))
                    .header("Content-Type", "application/json-patch+json")
                    .method("PATCH", HttpRequest.BodyPublishers.ofString(jsonPatch))
                    .build();

            HttpResponse<String> responseFromUpdateDocumentOPA =
                    kHTTPClientBuilder.build().send(requestToUpdateDocumentOPA, HttpResponse.BodyHandlers.ofString());

            int statusCode = responseFromUpdateDocumentOPA.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400) {
                App.logger.error("[{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "OPA document patch returned HTTP status ", statusCode);
                throw new DAOException(null, code_83);
            }

            returningCode = code_0;
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            thrownException = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            thrownException = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            thrownException = e;
            returningCode = code_76;
        }

        logAtEndOfMethod(returningCode, methodName, thrownException);
    }


    /**
     * This method pings the given CryptoAC service (RM, DS) to ensure it is up and working.
     * @param uri the URI of the service
     * @param methodName name of the method invoking this method
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    private void pingCryptoACService(String uri, String methodName) throws DAOException {

        App.logger.info("[{}{}{}{} ", className, " (" + methodName + ")]: ", "pinging service ", uri);

        OperationOutcomeCode returningCode;
        Exception thrownException = null;

        try {

            HttpRequest pingRequest = kHTTPRequestBuilder.copy()
                    .uri(new URI(uri))
                    .header("Accept", "application/json")
                    .GET()
                    .build();

            HttpResponse<String> responseFromService =
                    kHTTPClientBuilder.build().send(pingRequest, HttpResponse.BodyHandlers.ofString());

            APIOutput apiOutputFromService = new Gson().fromJson(responseFromService.body(), APIOutput.class);
            int statusCode = responseFromService.statusCode();
            returningCode = apiOutputFromService.getOutcomeCode();

            if (statusCode != HttpStatus.OK_200) {
                returningCode = code_85;
            }
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            thrownException = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            thrownException = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            thrownException = e;
            returningCode = code_76;
        }
        // thrown if the HTTP response could not be parsed into JSON
        catch(JsonSyntaxException e) {
            thrownException = e;
            returningCode = code_50;
        }

        logAtEndOfMethod(returningCode, methodName, thrownException);
    }


    /**
     * Utility method to build a JSON patch request
     * @param urORpa either "ur" or "pa"
     * @param counter the counter for array elements
     * @param tuple the tuple to add or remove
     * @return the JSON patch request as string
     */
    private String getJSONPatchForAddOperation(String urORpa, int counter, CryptoACTuple tuple) {

        StringBuilder jsonPatch = new StringBuilder("{ \"op\": \"add\", \"path\": \"/")
                .append(urORpa).append("/")
                .append(tuple.getAssociatedElement());

        // to account for indexing starting from 0
        counter = counter - 1;

        if (counter >= 0)
            jsonPatch.append("/").append(counter);

        jsonPatch.append("\", \"value\":");

        if (counter < 0)
            jsonPatch.append("[");

        jsonPatch.append(new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create().toJson(tuple));

        if (counter < 0)
            jsonPatch.append("]");

        jsonPatch.append("}");


        return jsonPatch.toString();
    }


    /**
     * This method downloads the OPA RBAC document from the OPA server
     * @param methodName name of the method invoking this method
     * @return the OPA document
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    private OPADocument getOPADocument(String methodName) throws DAOException {

        OperationOutcomeCode returningCode;
        Exception thrownException = null;
        OPADocument opaDocument = null;

        try {

            App.logger.info("[{}{}{} ", className, " (" + methodName + ")]: ",
                    "querying the OPA server to get RBAC document");

            // download the OPA RBAC document.
            HttpRequest requestToDownloadDocumentOPA = kHTTPRequestBuilder.copy()
                    .uri(new URI(kHTTP + opaBaseAPI + OPARBACDATA))
                    .GET()
                    .build();

            HttpResponse<String> responseFromDownloadDocumentOPA =
                    kHTTPClientBuilder.build().send(requestToDownloadDocumentOPA, HttpResponse.BodyHandlers.ofString());

            int statusCode = responseFromDownloadDocumentOPA.statusCode();

            if (statusCode >= HttpStatus.BAD_REQUEST_400) {
                App.logger.error("[{}{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                        "OPA document download returned HTTP status ", statusCode);
                throw new DAOException(null, code_84);
            }

            opaDocument = new Gson().fromJson(responseFromDownloadDocumentOPA.body(), OPADocument.class);
            returningCode = code_0;
        }
        // thrown when creating the URI
        catch (URISyntaxException e) {
            thrownException = e;
            returningCode = code_77;
        }
        // thrown if the HTTP request goes in timeout
        catch (HttpTimeoutException e) {
            thrownException = e;
            returningCode = code_75;
        }
        // thrown if the HTTP request has an error while waiting or sending/receiving data
        catch (InterruptedException | IOException e) {
            thrownException = e;
            returningCode = code_76;
        }

        logAtEndOfMethod(returningCode, methodName, thrownException);

        return opaDocument;
    }
}