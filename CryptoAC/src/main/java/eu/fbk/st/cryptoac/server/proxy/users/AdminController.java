package eu.fbk.st.cryptoac.server.proxy.users;

import com.google.gson.Gson;
import eu.fbk.st.cryptoac.dao.DAO;
import eu.fbk.st.cryptoac.core.tuple.Permission;
import eu.fbk.st.cryptoac.dao.DAOInterfaceParameters;
import eu.fbk.st.cryptoac.server.util.*;
import eu.fbk.st.cryptoac.server.model.APIOutput;
import eu.fbk.st.cryptoac.util.Const;
import org.eclipse.jetty.http.HttpStatus;
import spark.Request;
import spark.Response;
import spark.Route;
import spark.route.HttpMethod;


import java.util.HashMap;

import static eu.fbk.st.cryptoac.server.proxy.profile.ProfileController.fromStringToDAOInterfaceParameters;
import static eu.fbk.st.cryptoac.server.proxy.util.APIFinalizer.*;
import static eu.fbk.st.cryptoac.util.Const.API.*;
import static eu.fbk.st.cryptoac.server.util.RequestUtil.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceParameters.*;
import static eu.fbk.st.cryptoac.util.Const.FormParameters.*;
import static eu.fbk.st.cryptoac.util.Const.SessionKeys.kDataOfUserLoggedIn;


/**
 * This class is the controller for APIs that administrators can invoke.
 */
public class AdminController {

    /**
     * This endpoint handles GET requests for retrieving users.
     */
    public static Route listUsers = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        // get optional parameters
        String givenOffset = getOptionalQueryParameter(request, kOffsetInCryptoAC);
        String givenLimit  = getOptionalQueryParameter(request, kLimitInCryptoAC);

        // if optional parameters are null, pass the class instead
        invocationResult = executeAPI(request, selectedDAO, true,
                GETUSERS, HttpMethod.get,
                givenOffset == null ? Integer.class : Integer.parseInt(givenOffset),
                givenLimit == null ? Integer.class : Integer.parseInt(givenLimit));

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles GET requests for retrieving roles.
     */
    public static Route listRoles = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        // get optional parameters
        String givenOffset = getOptionalQueryParameter(request, kOffsetInCryptoAC);
        String givenLimit  = getOptionalQueryParameter(request, kLimitInCryptoAC);

        // if optional parameters are null, pass the class instead
        invocationResult = executeAPI(request, selectedDAO, true,
                GETROLES, HttpMethod.get,
                givenOffset == null ? Integer.class : Integer.parseInt(givenOffset),
                givenLimit == null ? Integer.class : Integer.parseInt(givenLimit));

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles GET requests for retrieving files.
     */
    public static Route listFiles = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        // get optional parameters
        String givenOffset = getOptionalQueryParameter(request, kOffsetInCryptoAC);
        String givenLimit  = getOptionalQueryParameter(request, kLimitInCryptoAC);

        // if optional parameters are null, pass the class instead
        invocationResult = executeAPI(request, selectedDAO, true,
                GETFILES, HttpMethod.get,
                givenOffset == null ? Integer.class : Integer.parseInt(givenOffset),
                givenLimit == null ? Integer.class : Integer.parseInt(givenLimit));

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests for adding users.
     */
    public static Route addUser = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String usernameOfUserToAdd = getStringParameterFromMultipart(request, Const.FormParameters.kUsernameInCryptoAC);

        invocationResult = executeAPI(request, selectedDAO,
                true, POSTUSER, HttpMethod.post, usernameOfUserToAdd);

        if (invocationResult.getHttpStatus() == HttpStatus.OK_200) {

            // here we return the user's profile by combining public data from the admin's profile (e.g., urls,
            // port numbers, ...) with the user's parameters returned by the DAO interface.
            String dataKey = kDataOfUserLoggedIn + selectedDAO;
            DAOInterfaceParameters adminDAOParameters =
                    (DAOInterfaceParameters) RequestUtil.getSessionParameter(request, dataKey);
            DAOInterfaceParameters userDAOParameters = fromStringToDAOInterfaceParameters(adminDAOParameters.toString());
            userDAOParameters.update((HashMap<String, byte[]>) invocationResult.getOutputJSON());
            userDAOParameters.setUsernameInCryptoAC(usernameOfUserToAdd);
            invocationResult.setOutputJSON(userDAOParameters);
        }

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests for deleting users.
     */
    public static Route deleteUser = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String usernameOfUserToDelete = getMandatoryPathParameter(request, Const.FormParameters.kUsernameInCryptoAC);

        invocationResult = executeAPI(request, selectedDAO, true,
                DELETEUSER, HttpMethod.delete, usernameOfUserToDelete);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests for adding roles.
     */
    public static Route addRole = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String nameOfRoleToAdd = getStringParameterFromMultipart(request, kRoleNameInCryptoAC);

        invocationResult = executeAPI(request, selectedDAO, true,
                POSTROLE, HttpMethod.post, nameOfRoleToAdd);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests for deleting roles.
     */
    public static Route deleteRole = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String nameOfRoleToDelete = getMandatoryPathParameter(request, kRoleNameInCryptoAC);

        invocationResult = executeAPI(request, selectedDAO, true,
                DELETEROLE, HttpMethod.delete, nameOfRoleToDelete);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests for deleting files.
     */
    public static Route deleteFile = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String nameOfFileToDelete = getMandatoryPathParameter(request, kFileNameInCryptoAC);

        invocationResult = executeAPI(request, selectedDAO, true, 
                DELETEFILE, HttpMethod.delete, nameOfFileToDelete);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests for adding role tuples.
     */
    public static Route assignUserToRole = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String usernameOfTheUserToAssign = getStringParameterFromMultipart(request, Const.FormParameters.kUsernameInCryptoAC);
        String nameOfTheRoleToAssign = getStringParameterFromMultipart(request, kRoleNameInCryptoAC);

        invocationResult = executeAPI(request, selectedDAO, true, 
                POSTASSIGNMENT, HttpMethod.post, usernameOfTheUserToAssign, nameOfTheRoleToAssign);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests for deleting role tuples.
     */
    public static Route revokeUserFromRole = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String usernameOfTheUserToRevoke = getMandatoryPathParameter(request, Const.FormParameters.kUsernameInCryptoAC);
        String nameOfTheRoleToRevokeFrom = getMandatoryPathParameter(request, kRoleNameInCryptoAC);

        invocationResult = executeAPI(request, selectedDAO,
                true, DELETEASSIGNMENT, HttpMethod.delete,
                usernameOfTheUserToRevoke, nameOfTheRoleToRevokeFrom);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests for adding permission tuples.
     */
    public static Route assignPermissionToRole = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String nameOfTheRelatedRole = getStringParameterFromMultipart(request, kRoleNameInCryptoAC);
        String nameOfTheRelatedFile = getStringParameterFromMultipart(request, kFileNameInCryptoAC);
        Permission permissionToBeGiven = Permission.get(getStringParameterFromMultipart(request, kPermissionInCryptoAC));

        invocationResult = executeAPI(request, selectedDAO, true,
                POSTPERMISSION, HttpMethod.post, nameOfTheRelatedRole,
                nameOfTheRelatedFile, permissionToBeGiven);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };

    /**
     * This endpoint handles POST requests for deleting permission tuples.
     */
    public static Route revokePermissionFromRole = (Request request, Response response) -> {

        APIOutput invocationResult;
        DAO selectedDAO = DAO.get(getMandatoryPathParameter(request, kDAO));

        String nameOfTheRelatedRole  = getMandatoryPathParameter(request, kRoleNameInCryptoAC);
        String nameOfTheRelatedFile  = getMandatoryPathParameter(request, kFileNameInCryptoAC);
        Permission permissionToBeRevoked = Permission.get(getMandatoryPathParameter(request, kPermissionInCryptoAC));

        invocationResult = executeAPI(request, selectedDAO, true,
                DELETEPERMISSION, HttpMethod.delete, nameOfTheRelatedRole,
                nameOfTheRelatedFile, permissionToBeRevoked);

        return JSONUtil.getJSONToReturn(invocationResult, response);
    };
}