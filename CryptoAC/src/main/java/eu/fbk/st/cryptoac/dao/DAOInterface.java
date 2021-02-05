package eu.fbk.st.cryptoac.dao;


import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.dao.aws.DAOInterfaceAWS;
import eu.fbk.st.cryptoac.dao.aws.DAOInterfaceAWSParameters;
import eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocal;
import eu.fbk.st.cryptoac.dao.local.DAOInterfaceLocalParameters;
import eu.fbk.st.cryptoac.dao.mock.DAOInterfaceMock;
import eu.fbk.st.cryptoac.dao.mock.DAOInterfaceMockParameters;
import eu.fbk.st.cryptoac.core.element.File;
import eu.fbk.st.cryptoac.core.element.Role;
import eu.fbk.st.cryptoac.core.element.User;
import eu.fbk.st.cryptoac.core.tuple.FileTuple;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.core.tuple.RoleTuple;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import org.jetbrains.annotations.NotNull;

import java.io.InputStream;
import java.security.*;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.*;

import static eu.fbk.st.cryptoac.core.element.CryptoACElementStatus.operational;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.code_58;


/**
 *  This interface describes the methods CryptoAC needs to interact with the chosen underlying storage system.
 *  If you are planning to implement support for a storage system, read the documentation of the methods thoroughly.
 *
 *  Note: Since we cannot forecast all possible exceptions that might be thrown in future implementations (and therefore we cannot
 *  * catch them), the idea is to wrap DAO-specific exceptions in this general DAO exception.
 *
 *  Note: since we cannot forecast all possible exceptions that might be thrown by implementations of this interface
 *  (as many exceptions depends on the chosen underlying storage system), here's the deal: if an exception is thrown,
 *  handle it locally in your implementation and then throw a "DAOException" instead with the the proper error code.
 *  See the "OperationOutcomeCode" class for the list of possible codes.
 *
 *  Note: users and roles ARE NEVER to be actually "deleted" from the metadata when the admin invokes the delete
 *  user/role function. Instead, you should just flag them as deleted. This is because we may still need their
 *  public keys to verify signatures of old tuples. When adding new tuples, remember to check that the elements
 *  (users and roles) related to tuples are not flagged as deleted. Files, instead, can be completely deleted as
 *  there is no need to flag them.
 *
 *  Note: we advise to design a technique to hide the AC policy from users; this means that users should be able
 *  to access to their roles and permissions, but they should know nothing regarding other users' privileges.
 *  For instance, if you decide to store metadata in a database, you could use tokenization and views.
 *
 *  Note: you also have to implement the "getInstance" method that is invoked at run time for getting an instance 
 *  of the DAO interface. When you customize the "getInstance" method in your implementation (method hiding), you 
 *  can configure the parameters you need to interact with your storage system (e.g., database url, aws region).
 */
public interface DAOInterface {

    // variables for logging
    String isUserAdmin = "isUserAdmin";
    String addUser = "addUser";
    String addRole = "addRole";
    String addFile = "addFile";
    String addRoleTuple = "addRoleTuple";
    String addPermissionTuple = "addPermissionTuple";
    String addFileTuple = "addFileTuple";
    String getUsers = "getUsers";
    String getRoles = "getRoles";
    String getFiles = "getFiles";
    String deleteUser = "deleteUser";
    String deleteRole = "deleteRole";
    String deleteFile = "deleteFile";
    String deleteFileAndFileTuple = "deleteFileAndFileTuple";
    String updatePermissionInPermissionTuple = "updatePermissionInPermissionTuple";
    String updateFile = "updateFile";
    String downloadFile = "downloadFile";
    String getPublicKeyOfCryptoACActiveElement = "getPublicKeyOfCryptoACActiveElement";
    String getVersionNumberOfElement = "getVersionNumberOfElement";
    String getFileDecryptingVersionNumberByToken = "getFileDecryptingVersionNumberByToken";
    String checkStatusOfCryptoACActiveElement = "checkStatusOfCryptoACActiveElement";
    String deleteRoleTuples = "deleteRoleTuples";
    String deletePermissionTuples = "deletePermissionTuples";
    String deleteFileTuplesByFileName = "deleteFileTuplesByFileName";
    String initialiseUser = "initialiseUser";
    String updateRoleKeys = "updateRoleKeys";
    String updateFileVersionNumber = "updateFileVersionNumber";
    String lockDAOInterfaceStatus = "lockDAOInterfaceStatus";
    String unlockDAOInterfaceStatus = "unlockDAOInterfaceStatus";
    String rollback = "rollback";
    String initializeAdmin = "initializeAdmin";
    String queryForRoleTuples = "queryForRoleTuples";
    String queryForPermissionTuples = "queryForPermissionTuples";
    String queryForFileTuples = "queryForFileTuples";
    String getInstance = "getInstance";


    /**
     * This method is invoked once to initialize the administrator.
     * This method has to create in the MS:
     * - a new User named with the admin ID;
     * - a new Role named with the admin ID and the same keys as the admin user;
     * - a new RoleTuple that binds the admin User and the admin Role.
     * Moreover, this method has to initialize the RM and the DS, if needed according to the specific implementation.
     * @param adminEncryptingKeys the encrypting keys of the admin
     * @param adminSigningKeys the signing keys of the admin
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void initializeAdmin(@NotNull KeyPair adminEncryptingKeys, @NotNull KeyPair adminSigningKeys) throws DAOException;

    /**
     * This method is invoked to check whether the user is the administrator or not.
     * The way this is asserted is left to the implementation.
     * @param username the name of the user
     * @return true if the user is the admin, false otherwise
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    boolean isUserAdmin(@NotNull String username) throws DAOException;




    /**
     * This method adds a new user. Remember that usernames are unique.
     * @param newUserToInsert the user object to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     * @return an hash map for eventual configuration parameters of the user
     */
    HashMap<String, byte[]> addUser(@NotNull User newUserToInsert) throws DAOException;

    /**
     * This method adds a new role and the tuple that binds the admin and the new role.
     * Remember that role names are unique.
     * @param newRole the role to insert
     * @param newRoleTuple the tuple of the role to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addRole(@NotNull Role newRole, @NotNull RoleTuple newRoleTuple) throws DAOException;

    /**
     * This method adds a new file in database "files" table.
     * Remember that file names are unique.
     * @param fileToAdd the file to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addFile(File fileToAdd) throws DAOException;

    /**
     * This method stores the new file (1), saves the related metadata from the file tuple (2) and
     * the permission tuple that gives the admin all permissions over the file (3).
     * Remember that file names are unique.
     * Remember that you can get the content of the file from the InputStream in the newFile parameter.
     * Remember that the reference monitor has to check the validity of the new data. This means that:
     *  - tuples' signatures shall be correct. This includes also checking that the user that signed the
     *    tuples actually exists, it was not deleted and is the same for both tuples;
     *  - the file version number shall be equal to 1 in the newFile and newFileTuple;
     *  - the newPermissionTuple shall give all permission to the admin and not to some other user.
     *  - the file name and token in newFile, newFileTuple and newPermissionTuple shall be the same.
     * @param newFile the new file
     * @param newFileTuple the new file tuple
     * @param newPermissionTuple the new permission tuple giving the admin access to the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addFile(@NotNull File newFile, @NotNull FileTuple newFileTuple, @NotNull PermissionTuple newPermissionTuple) throws DAOException;


    /**
     * This method adds the new role tuple, checking the existence of both the user and the role.
     * @param newRoleTuple the role tuple to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addRoleTuple(@NotNull RoleTuple newRoleTuple) throws DAOException;

    /**
     * This method adds the new role tuples, checking the existence of the involved users and roles.
     * @param newRoleTuples the set of role tuples to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addRoleTuple(@NotNull HashSet<RoleTuple> newRoleTuples) throws DAOException;

    /**
     * This method adds the new permission tuple, checking the existence of both the role and the file.
     * @param newPermissionTuple the permission tuple to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addPermissionTuple(@NotNull PermissionTuple newPermissionTuple) throws DAOException;

    /**
     * This method adds the new permission tuples, checking the existence of the involved roles and files.
     * @param newPermissionTuples the set of permission tuples to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addPermissionTuple(@NotNull HashSet<PermissionTuple> newPermissionTuples) throws DAOException;

    /**
     * This method adds the new file tuple, checking the existence of the file.
     * @param newFileTuple the file tuple to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addFileTuple(@NotNull FileTuple newFileTuple) throws DAOException;

    /**
     * This method adds the new file tuple,s checking the existence of the involved files.
     * @param newFileTuple the set of file tuples to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void addFileTuple(HashSet<FileTuple> newFileTuple) throws DAOException;



    /**
     * This method retrieves data of the specified user.
     * @param username name of the user to retrieve,
     *                 null if the users are not to be filtered by username
     * @param userToken token of the user to retrieve,
     *                 null if the users are not to be filtered by token
     * @param offset the offset in number of users to start selecting from
     * @param limit limit the number of users to return. If negative, no limit will be applied
     * @return an hash set filled with the users
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<User> getUser(String username, String userToken, Integer offset, Integer limit) throws DAOException;

    /**
     * This method retrieves data of the specified role.
     * @param roleName name of the role to retrieve,
     *                 null if the roles are not to be filtered by name
     * @param roleToken token of the role to retrieve,
     *                 null if the roles are not to be filtered by token
     * @param offset the offset in number of roles to start selecting from
     * @param limit limit the number of roles to return. If negative, no limit will be applied
     * @return an hash set filled with the roles
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<Role> getRole(String roleName, String roleToken, Integer offset, Integer limit) throws DAOException;

    /**
     * This method retrieves data of the specified file.
     * @param fileName name of the file to retrieve,
     *                 null if the files are not to be filtered by name
     * @param fileToken token of the file to retrieve,
     *                 null if the files are not to be filtered by token
     * @param offset the offset in number of files to start selecting from
     * @param limit limit the number of files to return. If negative, no limit will be applied
     * @return an hash set filled with the files
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<File> getFile(String fileName, String fileToken, Integer offset, Integer limit) throws DAOException;


    /**
     * @param username name of the user of the token to retrieve.
     * @return the token of the given user. If no user matches the given username, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
    * exception along with a proper OperationOutcomeCode code
     */
    String getUserTokenFromUsername(@NotNull String username) throws DAOException;

    /**
     * @param roleName name of the role of the token to retrieve.
     * @return the token of the given role. If no user role the given role name, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    String getRoleTokenFromUsername(@NotNull String roleName) throws DAOException;

    /**
     * @param fileName name of the file of the token to retrieve.
     * @return the token of the given file. If no file matches the file name, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    String getFileTokenFromUsername(@NotNull String fileName) throws DAOException;


    /**
     * This method retrieves the role tuples matching the given parameters.
     * @param username name of the user that has to match in the role tuple, 
     *                 null if the role tuples are not to be filtered by user 
     * @param roleName name of the role that has to match in the role tuple, 
     *                 null if the role tuples are not to be filtered by role 
     * @param offset the offset in number of role tuples to start selecting from
     * @param limit limit the number of role tuples to return. If negative, no limit will be applied
     * @return an hash set filled with the role tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<RoleTuple> getRoleTuples(String username, String roleName, Integer offset, Integer limit) throws DAOException;

    /**
     * This method retrieves the permission tuples matching the given parameters.
     * @param roleName name of the role that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by role 
     * @param fileName name of the file that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by file 
     * @param fileVersionNumber the file version number that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by file version number
     * @param roleVersionNumber the role version number to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered role version number 
     * @param offset the offset in number of permission tuples to start selecting from
     * @param limit limit the number of permission tuples to return. If negative, no limit will be applied
     * @return an hash set filled with the permission tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<PermissionTuple> getPermissionTuples(String roleName, String fileName, Integer fileVersionNumber, 
                                                 Integer roleVersionNumber, Integer offset, Integer limit) throws DAOException;

    /**
     * This method retrieves the permission tuples matching the given parameters. The name of the role is
     * a mandatory parameter, as the returned permission tuples will NOT match the role name. 
     * @param fileName name of the file that has to match in the tuple,
     *                 null if the permission tuples are not to be filtered by file
     * @param roleName name of the role that has NOT to match in the tuple
     * @param fileVersionNumber the file version number that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by file version number
     * @param offset the offset in number of permission tuples to start selecting from
     * @param limit limit the number of permission tuples to return. If negative, no limit will be applied
     * @return an hash set filled with the permission tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<PermissionTuple> getPermissionTuplesWithNoRoleName(String fileName, @NotNull String roleName,
                                                               Integer fileVersionNumber, Integer offset, Integer limit) throws DAOException;

    /**
     * This method retrieves the file tuples matching the given file name.
     * @param fileName name of the file that has to match in the tuple,
     *                 null if the file tuples are not to be filtered by file
     * @return an hash set filled with the file tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<FileTuple> getFileTuples(String fileName) throws DAOException;


    
    /**
     * This method retrieves the role tuples of the user invoking this method and matching the given parameters.
     * @param myUsername name of the user that has to match in the role tuple
     * @param roleName name of the role that has to match in the role tuple, 
     *                 null if the role tuples are not to be filtered by role 
     * @param offset the offset in number of role tuples to start selecting from
     * @param limit limit the number of role tuples to return. If negative, no limit will be applied
     * @return an hash set filled with the role tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<RoleTuple> getMyRoleTuples(@NotNull String myUsername, String roleName, Integer offset, Integer limit) throws DAOException;
    
    /**
     * This method retrieves the permission tuples of the user invoking this method and matching the given parameters.
     * @param myUsername name of the user that has to match in the role tuple
     * @param roleName name of the role that has to match in the permission tuple, 
     *                 null if the permission tuples are not to be filtered by role 
     * @param fileName name of the file that has to match in the permission tuple, 
     *                 null if the permission tuples are not to be filtered by file 
     * @param fileVersionNumber the file version number that has to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by file version number
     * @param roleVersionNumber the role version number to match in the permission tuple,
     *                 null if the permission tuples are not to be filtered by role version number
     * @param offset the offset in number of role tuples to start selecting from
     * @param limit limit the number of role tuples to return. If negative, no limit will be applied
     * @return an hash set filled with the permission tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<PermissionTuple> getMyPermissionTuples(@NotNull String myUsername, String roleName, String fileName,
                                                   Integer roleVersionNumber, Integer fileVersionNumber, Integer offset,
                                                   Integer limit) throws DAOException;
    
    /**
     * This method retrieves the file tuples of the user invoking this method and matching the given parameters.
     * @param myUsername name of the user that has to match in the role tuple
     * @param fileName name of the file that has to match in the permission tuple, 
     *                 null if the permission tuples are not to be filtered by file 
     * @param offset the offset in number of file tuples to start selecting from
     * @param limit limit the number of file tuples to return. If negative, no limit will be applied
     * @return an hash set filled with the file tuples
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    HashSet<FileTuple> getMyFileTuples(@NotNull String myUsername, String fileName, Integer offset, Integer limit) throws DAOException;


    /**
     * This method retrieves the public signing key of the user with the given token.
     * @param userToken the token of the user
     * @return the key of the user (even if the user was deleted). If the user never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    PublicKey getPublicSigningKeyOfUserByToken(@NotNull String userToken) throws DAOException;

    /**
     * This method retrieves the public signing key of the user with the given username.
     * @param username the name of the user
     * @return the key of the user (even if the user was deleted). If the user never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    PublicKey getPublicSigningKeyOfUserByName(@NotNull String username) throws DAOException;

    /**
     * This method retrieves the public signing key of the role with the given token.
     * @param roleToken the token of the role
     * @return the key of the role (even if the role was deleted). If the role never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    PublicKey getPublicSigningKeyOfRoleByToken(@NotNull String roleToken) throws DAOException;

    /**
     * This method retrieves the public signing key of the role with the given name.
     * @param roleName the name of the role
     * @return the key of the role (even if the role was deleted). If the role never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    PublicKey getPublicSigningKeyOfRoleByName(@NotNull String roleName) throws DAOException;

    /**
     * This method retrieves the public encrypting key of the user with the given token.
     * @param userToken the token of the user
     * @return the key of the user (even if the user was deleted). If the user never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    PublicKey getPublicEncryptingKeyOfUserByToken(@NotNull String userToken) throws DAOException;

    /**
     * This method retrieves the public encrypting key of the user with the given name.
     * @param username the name of the user
     * @return the key of the user (even if the user was deleted). If the user never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    PublicKey getPublicEncryptingKeyOfUserByName(@NotNull String username) throws DAOException;

    /**
     * This method retrieves the public encrypting key of the role with the given token.
     * @param roleToken the token of the role
     * @return the key of the role (even if the role was deleted). If the role never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    PublicKey getPublicEncryptingKeyOfRoleByToken(@NotNull String roleToken) throws DAOException;

    /**
     * This method retrieves the public encrypting key of the role with the given name.
     * @param roleName the name of the role
     * @return the key of the role (even if the role was deleted). If the role never existed, throw DAOException
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    PublicKey getPublicEncryptingKeyOfRoleByName(@NotNull String roleName) throws DAOException;




    /**
     * This method retrieves the version number of the role with the given token.
     * @param roleToken the token of the role
     * @return the role version number, only is the role exists and was not deleted. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    Integer getRoleVersionNumberByToken(@NotNull String roleToken) throws DAOException;

    /**
     * This method retrieves the version number of the symmetric key that has to 
     * be used to encrypt the file with the given token.
     * @param fileToken the token of the file
     * @return the file version number, only is the file exists. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    Integer getFileEncryptingVersionNumberByToken(@NotNull String fileToken) throws DAOException;

    /**
     * This method retrieves the version number of the role with the given name.
     * @param roleName the name of the role
     * @return the role version number, only is the role exists and was not deleted. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    Integer getRoleVersionNumberByName(@NotNull String roleName) throws DAOException;

    /**
     * This method retrieves the version number of the symmetric key that has to 
     * be used to encrypt the file with the given name.
     * @param fileName the name of the file
     * @return the file version number, only is the file exists. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    Integer getFileEncryptingVersionNumberByName(@NotNull String fileName) throws DAOException;

    /**
     * This method retrieves the version number of the symmetric key that has to
     * be used to decrypt the file with the given name.
     * @param fileName the name of the file
     * @return the file version number, only is the file exists. Otherwise, throw an exception
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    Integer getFileDecryptingVersionNumberByName(@NotNull String fileName) throws DAOException;





    /**
     * This method flags as deleted the user with the given username.
     * @param username the name of the user
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void deleteUser(@NotNull String username) throws DAOException;

    /**
     * This method flags as deleted the role with the given role name.
     * @param roleName the name of the role
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void deleteRole(@NotNull String roleName) throws DAOException;

    /**
     * This method deletes the file with the given file name from the metadata storage.
     * @param fileName the name of the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void deleteFile(@NotNull String fileName) throws DAOException;

    /**
     * This method deletes the file with the given file name and deletes both the file metadata and the file tuple
     * @param fileName the name of the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void deleteFileAndFileTuple(@NotNull String fileName) throws DAOException;






    /**
     * This method deletes the role tuples matching the given parameters.
     * Note that at least a parameter must be specified.
     * @param roleName name of the role that has to match in the role tuple,
     *                 null if the role tuples are not to be deleted by role
     * @param roleVersionNumber the role version number to match in the role tuple,
     *                 null if the role tuples are not to be deleted by role version number
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void deleteRoleTuples(String roleName, Integer roleVersionNumber) throws DAOException;

    /**
     * This method deletes the permission tuples matching the given parameters.
     * Note that at least a parameter must be specified.
     * @param roleName name of the role that has to match in the permission tuple,
     *                 null if the permission tuples are not to be deleted by role
     * @param fileName name of the file that has to match in the permission tuple,
     *                 null if the permission tuples are not to be deleted by file
     * @param roleVersionNumber the role version number to match in the role tuple,
     *                 null if the role tuples are not to be deleted by role version number
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void deletePermissionTuples(String roleName, String fileName, Integer roleVersionNumber) throws DAOException;

    /**
     * This method deletes the permission tuples matching the given file name.
     * @param fileName name of the file that has to match in the permission tuple
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void deleteFileTupleByFileName(@NotNull String fileName) throws DAOException;




    /**
     * This method initialises the user (e.g., updates the public keys, token and status
     * flag in the database and checks the DAO interface parameters).
     * @param userToInitialise the user object to initialise
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void initializeUser(@NotNull User userToInitialise) throws DAOException;

    /**
     * This method updates the public key of the role matching the given role name.
     * @param roleName the name of the role
     * @param roleEncryptingPublicKey the new encrypting public key
     * @param roleSigningPublicKey the new signing public key
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void updateRoleKeys(@NotNull String roleName, @NotNull PublicKey roleEncryptingPublicKey, @NotNull PublicKey roleSigningPublicKey) throws DAOException;

    /**
     * This method increments the file version number (thus the file version number for the encryption
     * of the file, thus NOT in the file tuple) by 1.
     * @param fileName the name of the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void incrementFileVersionNumberByOne(@NotNull String fileName) throws DAOException;

    /**
     * This method updates the permission, signature and signer token of a permission tuple
     * @param updatedPermissionTuple the updated permission tuple
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void updatePermissionInPermissionTuple(PermissionTuple updatedPermissionTuple) throws DAOException;


    /**
     * This method updates the content of the file matching the given file name ("write" operation); it
     * - (1) replaces (or uses versioning, if supported) the previous file
     * - (2) updates the file tuple with the new one.
     * If the file didn't exist before, throw exception.
     * Remember that the reference monitor has to check the validity of the new data. This means that:
     *  - tuples' signatures shall be correct. This includes also checking that the role that signed the
     *    tuples actually exists and it was not deleted.
     *  - the file version number is actually the latest one;
     *  - the role that signed the file tuple has READ AND WRITE permission over the file
     * @param updatedFile the updated file
     * @param updatedFileTuple the updated file tuple
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void updateFile(File updatedFile, FileTuple updatedFileTuple) throws DAOException;


    /**
     * This method downloads the (latest version of) the requested file ("read" operation).
     * @param fileName the name of the file
     * @return the encrypted file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    InputStream downloadFile(String fileName) throws DAOException;


    /**
     * This method is (and shall be) invoked by the "User" class before using DAO functions, i.e., before
     * starting to interact with the underlying storage system. The idea is to avoid inconsistencies when
     * an error arises. This method should increment an integer (lock number) to indicate the beginning of an
     * atomic transaction and save the state of the storage system. For instance, this method could take a
     * snapshot of the storage solution to be able to rollback in case something goes wrong, or (if using a
     * MySql database) set the "autocommit" flag to OFF
     * Note that, if the method was already invoked once (and the lock was not already released), further
     * invocations of this method should just increment the counter and return "true" without doing anything.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void lockDAOInterfaceStatus() throws DAOException;

    /**
     * This method is (and shall be) invoked by the "User" class after having finished of using DAO functions,
     * i.e., when a sequence of operations on the underlying storage system is finished. This method should
     * decrement the lock counter to indicate that the transaction has ended. If the lock counter reaches
     * 0, this method should to remove the lock from the storage, for instance by committing the transactions.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void unlockDAOInterfaceStatus() throws DAOException;



    /**
     * This method is (and shall be) invoked by the "User" class after the use of a DAO function resulted
     * in an error (e.g., an exception was thrown) and now the storage is in an inconsistent state. This
     * method should decrement the lock counter. If the lock counter reaches 0, this method should undo
     * every operation made since the first lock was placed, for instance by roll-backing the transactions.
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    void rollback() throws DAOException;




    /**
     * This method creates an instance of the DAO interface to interact with the selected storage system.
     * @param selectedDAO the storage system selected by the user
     * @param DAOInterfaceParameters initialization parameters that must be given to the chosen storage system
     * @return the instance of the DAO interface to interact with the chosen storage system
     */
    static DAOInterface getInstance(DAO selectedDAO, DAOInterfaceParameters DAOInterfaceParameters) {

        App.logger.info("[{}{}{}{} ", "DAOInterface", " (" + getInstance + ")]: ",
                "creating an instance of the DAO interface to interact with ", selectedDAO.toString());

        DAOInterface instanceToReturn = null;

        switch (selectedDAO) {

            case AWS:
                instanceToReturn = DAOInterfaceAWS.getInstance((DAOInterfaceAWSParameters) DAOInterfaceParameters);
                break;

            case Local:
                instanceToReturn = DAOInterfaceLocal.getInstance((DAOInterfaceLocalParameters) DAOInterfaceParameters);
                break;

            case Mock:
                instanceToReturn = DAOInterfaceMock.getInstance((DAOInterfaceMockParameters) DAOInterfaceParameters);
                break;

            default:
                App.logger.error("[{}{}{}{}{} ", "DAOInterface", " (" + getInstance + ")]: ",
                        selectedDAO, ": ", code_39.toString());
        }

        return instanceToReturn;
    }
}