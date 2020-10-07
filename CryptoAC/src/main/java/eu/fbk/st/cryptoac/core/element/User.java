package eu.fbk.st.cryptoac.core.element;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.dao.DAOInterface;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.core.tuple.FileTuple;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.core.tuple.Permission;
import eu.fbk.st.cryptoac.core.tuple.RoleTuple;
import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.util.EncryptedPKCKeyPair;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import org.jetbrains.annotations.NotNull;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import java.io.InputStream;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.util.Base64;
import java.util.HashMap;
import java.util.HashSet;

import static eu.fbk.st.cryptoac.core.tuple.Permission.Read_and_Write;
import static eu.fbk.st.cryptoac.core.tuple.Permission.Read;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;
import static java.lang.System.exit;

/**
 * This class represents a user in CryptoAC. A user can add, read and write files,
 * depending on the AC policy. The administrator is a user with super privileges;
 * the administrator can add and delete users and roles, distribute and revoke
 * permissions and add, read, write, and delete files.
 */
public final class User extends CryptoACActiveElement {

    // variables for logging
    private static final String className = "User";
    private static final String addNewUser = "addUser";
    private static final String initializeUser = "initializeUser";
    private static final String initializeAdmin = "initializeAdmin";
    private static final String addNewRole = "addRole";
    private static final String addNewFile = "addFile";
    private static final String deleteUser = "deleteUser";
    private static final String deleteRole = "deleteRole";
    private static final String deleteFile = "deleteFile";
    private static final String assignUserToRole = "assignUserToRole";
    private static final String assignPermissionToRoleOverFile = "assignPermissionToRole";
    private static final String revokeUserFromRole = "revokeUserFromRole";
    private static final String revokePermissionFromRole = "revokePermissionFromRole";
    private static final String readFile = "readFile";
    private static final String writeFile = "writeFile";
    private static final String listUsers = "listUsers";
    private static final String listRoles = "listRoles";
    private static final String listFiles = "listFiles";
    private static final String listAssignments = "listAssignments";
    private static final String listPermissions = "listPermissions";
    private static final String getRandomToken = "getRandomToken";

    // variables for keeping track of where an exception was thrown
    public static final String kSignTuple = "signTuple";
    public static final String kEncryptPKIKeys = "encryptPKIKeys";
    public static final String kEncryptFile = "encryptFile";
    public static final String kEncryptSymmetricKey = "encryptSymmetricKey";
    public static final String kVerifySignature = "verifySignature";
    public static final String kDecryptPKIKeys = "decryptPKIKeys";
    public static final String kDecryptSymmetricKey = "decryptSymmetricKey";
    public static final String kDecryptFile = "decryptFile";

    /**
     * The instance of the DAO interface for this user. This interface will be used
     * to store and retrieve data from the underlying chosen storage solution.
     */
    public DAOInterface daoInterface = null;

    /**
     * Boolean flag to distinguish the administrator from normal users.
     * This flag is only used internally, and changing it from 'false' to 'true'
     * does not grant any new permission the user.
     */
    private boolean isUserAdmin;

    /**
     * Constructor with parameters.
     * @param username the username of this user
     * @param isUserAdmin flag to distinguish the administrator from normal users
     * @param userEncryptingKeyPair keypair used for encrypting
     * @param userSigningKeyPair keypair used for signing
     */
    public User(String username, boolean isUserAdmin, KeyPair userEncryptingKeyPair, KeyPair userSigningKeyPair) {

        super(userEncryptingKeyPair, userSigningKeyPair, username);
        this.isUserAdmin = isUserAdmin;
    }



    /**
     * This method creates a new user in CryptoAC. Note that this method only creates the entry in
     * the metadata, while the user has still to initialize other values (e.g., add the public key).
     * @param username the new user's username
     * @return the outcome of the operation and eventual configuration parameters
     */
    UserOutput addUser (@NotNull String username) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + addNewUser + ")]: ", "user ", getName(),
                ": creating new User with name ", username);

        HashMap<String, byte[]> eventualConfigurationParameters = null;

        try {

            // remember, keys will be provided by the user
            User newUser = new User(username, false,null, null);
            daoInterface.lockDAOInterfaceStatus();
            eventualConfigurationParameters = daoInterface.addUser(newUser);
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, addNewUser, exceptionThrown);

        return new UserOutput(returningCode, eventualConfigurationParameters);
    }

    /**
     * This method is invoked by a new user to initialize the user's public key and the user's token.
     * @return the outcome of the operation
     */
    public UserOutput initializeUser() {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{} ", className, " (" + initializeUser + ")]: ", "user ", getName(),
                ": initializing public key and token");

        try {
            daoInterface.lockDAOInterfaceStatus();
            daoInterface.updateUserData(this);
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, initializeUser, exceptionThrown);
        return new UserOutput(returningCode, null);
    }

    /**
     * This method is invoked once at system start by the admin to initialize the admin's keys.
     * @return the outcome of the operation
     */
    public UserOutput initializeAdmin() {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{} ", className, " (" + initializeAdmin + ")]: ", "user ", getName(),
                " is initializing the administrator");

        try {
            daoInterface.lockDAOInterfaceStatus();
            daoInterface.initializeAdmin(
                    new KeyPair(getEncryptingPublicKey(), getEncryptingPrivateKey()),
                    new KeyPair(getSigningPublicKey(), getSigningPrivateKey()));
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, initializeAdmin, exceptionThrown);
        return new UserOutput(returningCode, null);
    }


    /**
     * This method deletes the given user from CryptoAC by revoking all roles assigned to the user and flagging
     * the user object in the metadata (its public key may be used to verify signatures).
     * @param username the user's username (not token)
     * @return the outcome of the operation
     */
    UserOutput deleteUser (@NotNull String username) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + deleteUser + ")]: ", "user ", getName(),
                ": deleting User ", username);

        try {

            if (!username.equals(App.admin)) {

                daoInterface.lockDAOInterfaceStatus();
                daoInterface.deleteUser(username);

                // now we revoke the user from each of the assigned roles.
                // TODO it should is possible to perform some optimizations on the revoke method

                // get all the tuples related to the user
                HashSet<RoleTuple> roleTuplesAssociatedWithTheDeletedUser =
                        daoInterface.getRoleTuples(username, null, 0, -1);

                for (RoleTuple roleTupleToRevoke : roleTuplesAssociatedWithTheDeletedUser) {

                    CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                            roleTupleToRevoke, getSigningPublicKey());
                    returningCode = revokeUserFromRole(roleTupleToRevoke.getAssociatedElement(),
                            roleTupleToRevoke.getAssociatedRole()).getReturningCode();

                    // if the operation was not successful
                    if (returningCode != OperationOutcomeCode.code_0) {

                        App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + deleteUser + ")]: ",
                                "revokeUserFromRole method for User ", username, " and role ",
                                roleTupleToRevoke.getAssociatedRole(), " returned an error: ", returningCode.toString());
                        break;
                    }
                }
            }
            // here if the user to delete is the admin
            else {
                App.logger.error("[{}{}{} ", className, " (" + deleteUser + ")]: ", "c'mon, don't delete the admin");
                returningCode = OperationOutcomeCode.code_69;
            }
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        // exceptions while validating the signature of the role tuples
        catch (InvalidKeyException | NoSuchAlgorithmException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_13;
        }
        // the signature of a role tuple is not valid
        catch (SignatureException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_7;

        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, deleteUser, exceptionThrown);
        return new UserOutput(returningCode, null);
    }



    /**
     * This method creates a new role in CryptoAC; it creates the PKI keys and the Role object.
     * Then, it encrypts the keys of the role with the public key of the admin and finally creates and signs
     * with the private key of the admin the new role tuple.
     * @param roleName the name of the new role (not token)
     * @return the outcome of the operation and the token of the role. The token is null if something went wrong
     */
    UserOutput addRole(@NotNull String roleName) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;
        Role newRole;

        // this variable allows to keep track of which instruction threw an eventual exception
        String whereWereWe = "";

        App.logger.info("[{}{}{}{}{}{}{} ", className, " (" + addNewRole + ")]: ", "user ", getName(),
                ": creating a new Role ", roleName, " and a RoleTuple to assign the admin to the new role");

        try {
            // create the keys of the role
            KeyPair newEncryptingRoleKeys = CryptoUtil.generatePKCKeys();
            KeyPair newSigningRoleKeys = CryptoUtil.generatePKCKeys();
            newRole = new Role(roleName, 1, newEncryptingRoleKeys, newSigningRoleKeys);

            // encrypt the keys of the role with the private key of the administrator
            whereWereWe = kEncryptPKIKeys;
            EncryptedPKCKeyPair encryptedNewEncryptingRoleKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys(
                    newEncryptingRoleKeys.getPublic(), newEncryptingRoleKeys.getPrivate(), getEncryptingPublicKey());
            EncryptedPKCKeyPair encryptedNewSigningRoleKeys = CryptoUtil.getCryptoUtil().encryptPKCKeys(
                    newSigningRoleKeys.getPublic(), newSigningRoleKeys.getPrivate(), getEncryptingPublicKey());

            // create the new role tuple to associate the admin with the new role
            RoleTuple newRoleTuple = new RoleTuple(App.admin, newRole.getName(),
                    encryptedNewEncryptingRoleKeys, encryptedNewSigningRoleKeys,
                    1, null, null);

            // sign the tuple with the private key of the admin
            whereWereWe = kSignTuple;
            CryptoUtil.getCryptoUtil().signCryptoACTuple(newRoleTuple, getSigningPrivateKey(), getToken());

            // finally, add the new role
            daoInterface.lockDAOInterfaceStatus();
            daoInterface.addRole(newRole, newRoleTuple);
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        // the signature of the new role tuple is not valid
        catch (SignatureException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_7;
        }
        // catch cryptographic exceptions
        catch (BadPaddingException | NoSuchAlgorithmException | IllegalBlockSizeException | InvalidKeyException e) {

            exceptionThrown = e;
            switch (whereWereWe) {

                case kSignTuple:
                    returningCode = OperationOutcomeCode.code_12;
                    break;
                case kEncryptPKIKeys:
                    returningCode = OperationOutcomeCode.code_29;
                    break;
                default:
                    returningCode = OperationOutcomeCode.code_72;
            }
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, addNewRole, exceptionThrown);
        return new UserOutput(returningCode, null);
    }

    /**
     * This method deletes the given role from CryptoAC by deleting the related role tuples, revoking all permissions
     * and flagging the role object in the metadata (its public key may be used to verify signatures).
     * @param roleName the name of the role (not token)
     * @return the outcome of the operation
     */
    UserOutput deleteRole (@NotNull String roleName) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + deleteRole + ")]: ", "user ", getName(),
                ": deleting Role ", roleName);

        try {

            if (!roleName.equals(App.admin)) {

                daoInterface.lockDAOInterfaceStatus();
                daoInterface.deleteRole(roleName);
                daoInterface.deleteRoleTuples(roleName, null);

                // here we get all permissions associate to the deleted role to update them (i.e., to create a new
                // symmetric key to access to the files)
                HashSet<PermissionTuple> permissionTuplesAssociatedWithTheDeletedRole = daoInterface.getPermissionTuples
                        (roleName, null, null, null, 0, -1);

                for (PermissionTuple permissionTupleToRevoke : permissionTuplesAssociatedWithTheDeletedRole) {

                    PublicKey userVerifyingKey = daoInterface.getPublicSigningKeyOfUserByToken(
                            permissionTupleToRevoke.getSignerOfThisTuple());

                    // verify the tuple signature. This is not required by the theoretical
                    // formulation of the problem, but we perform such check for completeness anyway
                    CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                            permissionTupleToRevoke, userVerifyingKey);

                    // invoke the revoke method
                    returningCode = revokePermissionFromRole(permissionTupleToRevoke.getAssociatedElement(),
                            permissionTupleToRevoke.getAssociatedFile(), Read_and_Write).getReturningCode();

                    if (returningCode != OperationOutcomeCode.code_0) {

                        App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + deleteRole + ")]: ",
                                "revokePermissionFromRole method for role ", roleName, " and file ",
                                permissionTupleToRevoke.getAssociatedFile(), " returned an error: ",
                                returningCode.toString());
                        break;
                    }
                }
            }
            // here if the role to delete is the admin's one
            else {
                App.logger.error("[{}{}{} ", className, " (" + deleteRole + ")]: ",
                        "c'mon, don't delete the admin's role");
                returningCode = OperationOutcomeCode.code_69;
            }
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        // exceptions while validating the signature of the tuples
        catch (InvalidKeyException | NoSuchAlgorithmException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_13;
        }
        // the signature of a tuple is not valid
        catch (SignatureException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_7;
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, deleteRole, exceptionThrown);
        return new UserOutput(returningCode, null);
    }



    /**
     * This methods adds a new file to CryptoAC and creates the permission tuple giving the admin permission
     * over the new file and also the file tuple referring to the new file.
     * @param fileName the name of the file (not token)
     * @param fileStream the stream of the file (unencrypted)
     * @return the outcome of the operation together with the token of the file. The token is null if something went wrong
     */
    UserOutput addFile(@NotNull String fileName, @NotNull InputStream fileStream) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;
        InputStream newFileEncryptedStream;
        File newFile;

        App.logger.info("[{}{}{}{}{}{}{} ", className, " (" + addNewFile + ")]: ", "user ", getName(),
                ": creating a new file ", fileName, " along with the permission and file tuples");

        // this variable allows to keep track of which instruction threw an eventual exception
        String whereWereWe = "";

        try {

            SecretKey symKetForEncryptingFile = CryptoUtil.generateSymKey();

            whereWereWe = kEncryptFile;
            newFileEncryptedStream = CryptoUtil.getCryptoUtil().encryptInputStream(symKetForEncryptingFile, fileStream);
            newFile = new File(fileName, newFileEncryptedStream, 1);

            // remember that the token of the role of the admin is the ID of the admin
            daoInterface.lockDAOInterfaceStatus();
            PublicKey adminEncryptingPublicKey = daoInterface.getPublicEncryptingKeyOfRoleByToken(App.admin);

            // encrypt the symmetric key with the private key of the admin. This will allow the admin to
            // decrypt the symmetric key, i.e., it grants the admin access to the file
            whereWereWe = kEncryptSymmetricKey;
            byte[] encryptedSymKey = CryptoUtil.getCryptoUtil().encryptSymmetricKey(
                    symKetForEncryptingFile, adminEncryptingPublicKey);

            // get the role's version number to consistently create the admin's permission tuple. Note that
            // the version number of the role of the admin should be always 1, but we fetch it anyway for
            // eventual new features that may change this behaviour
            int roleVersionNumber = daoInterface.getRoleVersionNumberByToken(App.admin);

            whereWereWe = kSignTuple;
            PermissionTuple newPermissionTuple = new PermissionTuple(App.admin, roleVersionNumber,
                    fileName, Read_and_Write, 1, encryptedSymKey, App.admin,
                    newFile.getToken(), null, null);
            FileTuple newFileTuple = new FileTuple(fileName, newFile.getToken(), 1,
                    CryptoACActiveElementEnum.User, null, null);
            CryptoUtil.getCryptoUtil().signCryptoACTuple(newFileTuple, getSigningPrivateKey(), getToken());
            CryptoUtil.getCryptoUtil().signCryptoACTuple(newPermissionTuple, getSigningPrivateKey(), getToken());

            daoInterface.addFile(newFile, newFileTuple, newPermissionTuple);
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        // exception while encrypting the file or the symmetric key or while signing a tuple
        catch (BadPaddingException | IllegalBlockSizeException | InvalidKeyException |
               NoSuchAlgorithmException | NoSuchPaddingException | SignatureException e) {

            exceptionThrown = e;
            
            switch (whereWereWe) {
                case kSignTuple:
                    returningCode = OperationOutcomeCode.code_12;
                    break;
                case kEncryptSymmetricKey:
                    returningCode = OperationOutcomeCode.code_31;
                    break;
                case kEncryptFile:
                    returningCode = OperationOutcomeCode.code_33;
                    break;
                default:
                    returningCode = OperationOutcomeCode.code_72;
            }
        }
        // catch any other eventual exception
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, addNewFile, exceptionThrown);
        return new UserOutput(returningCode, null);
    }

    /**
     * This method deletes the given file from CryptoAC by deleting the file and all the related permission tuples.
     * @param fileName the name of the file (not token)
     * @return the outcome of the operation
     */
    UserOutput deleteFile (@NotNull String fileName) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{}{}{} ", className, " (" + deleteFile + ")]: ", "user ", getName(), ": deleting file ", 
                fileName, " and all the permission tuples");

        try {
            daoInterface.lockDAOInterfaceStatus();
            daoInterface.deletePermissionTuples(null, fileName, null);
            daoInterface.deleteFileAndFileTuple(fileName);
        }
        catch (DAOException e) {
            exceptionThrown = e;

            // in case the file does not exist, set the proper code (as we first invoke the
            // "deletePermissionTuples" function to avoid errors due to foreign keys, if the
            // file does not exist we would get a code_27 error code)
            returningCode = e.getErrorCode() == code_27 ? code_6 : e.getErrorCode();
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, deleteFile, exceptionThrown);
        return new UserOutput(returningCode, null);
    }


    /**
     * This method assigns a user to a role by creating a new role tuple.
     * @param username the username of the user (not token)
     * @param roleName the roleName of the role (not token)
     * @return the outcome of the operation
     */
    UserOutput assignUserToRole (@NotNull String username, @NotNull String roleName)  {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{}{}{}{} ", className, " (" + assignUserToRole + ")]: ", "user ", getName(),
                ": assigning user ", username, " to role ", roleName);

        // this variable allows to keep track of which instruction threw an eventual exception
        String whereWereWe = "";

        try {

            daoInterface.lockDAOInterfaceStatus();

            // we get the role tuple of the admin to decrypt the private keys of the role. Then, we will encrypt
            // the private keys with the public key of the user, so that the user will have access to the keys
            HashSet<RoleTuple> adminRoleTuples = daoInterface.getRoleTuples(App.admin, roleName, 0, -1);
            
            RoleTuple adminRoleTuple = null;
            for (RoleTuple roleTuple : adminRoleTuples) adminRoleTuple = roleTuple;

            if (adminRoleTuple != null) {

                // now: only the administrator can sign role tuples. Therefore, the key to verify the signature
                // of the role tuples is the admin's one. This means that there is no need to go and fetch the
                // key of the signer of the role tuple from the metadata. However, we do it anyway, because
                // of eventual future features (e.g., multi-admin)
                PublicKey userVerifyingKey = daoInterface.getPublicSigningKeyOfUserByToken(
                        adminRoleTuple.getSignerOfThisTuple());

                // verify the signature of the admin's role tuple
                whereWereWe = kVerifySignature;
                CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(adminRoleTuple, userVerifyingKey);

                // try to decrypt the private keys of the role
                whereWereWe = kDecryptPKIKeys;
                KeyPair roleEncryptingKeyPair = CryptoUtil.getCryptoUtil().decryptPKCKeys(
                        adminRoleTuple.getEncryptedEncryptingRoleKeys(), getEncryptingPrivateKey());
                KeyPair roleSigningKeyPair = CryptoUtil.getCryptoUtil().decryptPKCKeys(
                        adminRoleTuple.getEncryptedSigningRoleKeys(), getEncryptingPrivateKey());

                // get the public key of the user to assign to the role to encrypt the role's private keys
                PublicKey publicKeyOfUserToAssign = daoInterface.getPublicEncryptingKeyOfUserByName(username);

                // try to encrypt the keys with the user public key
                whereWereWe = kEncryptPKIKeys;
                EncryptedPKCKeyPair roleEncryptingKeysEncryptedByUser = CryptoUtil.getCryptoUtil()
                        .encryptPKCKeys(
                                roleEncryptingKeyPair.getPublic(),
                                roleEncryptingKeyPair.getPrivate(),
                                publicKeyOfUserToAssign);
                EncryptedPKCKeyPair roleSigningKeysEncryptedByUser = CryptoUtil.getCryptoUtil()
                        .encryptPKCKeys(
                                roleSigningKeyPair.getPublic(),
                                roleSigningKeyPair.getPrivate(),
                                publicKeyOfUserToAssign);

                // create the role tuple
                RoleTuple newRoleTupleBindingUserAndRole = new RoleTuple(
                        username, roleName,
                        roleEncryptingKeysEncryptedByUser, roleSigningKeysEncryptedByUser,
                        adminRoleTuple.getRoleVersionNumber(), null, null);

                // sign the tuple
                whereWereWe = kSignTuple;
                CryptoUtil.getCryptoUtil().signCryptoACTuple(
                        newRoleTupleBindingUserAndRole, getSigningPrivateKey(), getToken());

                // add the new role tuple
                daoInterface.addRoleTuple(newRoleTupleBindingUserAndRole);
            }
            // here if the tuple of the admin is not found. Probably, it means that the role has been deleted
            else {
                App.logger.error("[{}{}{}{}{} ", className, " (" + assignUserToRole + ")]: ",
                        "did not found role tuple of admin for role ", roleName,
                        ". Probably, the role has been deleted");
                returningCode = OperationOutcomeCode.code_5;
            }
        }
        catch (DAOException e) {

            returningCode = e.getErrorCode();
        }
        // exceptions thrown when encrypting/decrypting/signing/verifying a tuple
        catch ( NoSuchAlgorithmException  | InvalidKeyException |
                IllegalBlockSizeException | BadPaddingException | InvalidKeySpecException e) {

            exceptionThrown = e;
            switch (whereWereWe) {

                case kSignTuple:
                    returningCode = OperationOutcomeCode.code_12;
                    break;
                case kVerifySignature:
                    returningCode = OperationOutcomeCode.code_13;
                    break;
                case kEncryptPKIKeys:
                    returningCode = OperationOutcomeCode.code_29;
                    break;
                case kDecryptPKIKeys:
                    returningCode = OperationOutcomeCode.code_30;
                    break;
                default:
                    returningCode = OperationOutcomeCode.code_72;
            }
        }
        // the signature of a tuple is not valid
        catch (SignatureException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_7;
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, assignUserToRole, exceptionThrown);
        return new UserOutput(returningCode, null);
    }


    /**
     * This method revokes the given user from the given role.
     * @param username the Id of the user
     * @param roleName the Id of the role
     * @return the outcome of the operation
     */
    UserOutput revokeUserFromRole (@NotNull String username, @NotNull String roleName) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + revokeUserFromRole + ")]: ",
                "admin is revoking the user ", username, " from role ", roleName);

        // this variable allows to keep track of which instruction threw an eventual exception
        String whereWereWe = "";

        try {

            if (!username.equals(App.admin) && !roleName.equals(App.admin)) {

                daoInterface.lockDAOInterfaceStatus();

                // get all the role tuples related to the given role, as
                // we need to update them with the new keys of the role
                HashSet<RoleTuple> roleTuplesRelatedToInvolvedRole =
                        daoInterface.getRoleTuples(null, roleName, 0, -1);

                int oldRoleVersionNumber = -1;
                int newRoleVersionNumber = -1;
                boolean doesRoleTupleToRevokeExist = false;

                for (RoleTuple tupleToUpdate : roleTuplesRelatedToInvolvedRole) {

                    if (tupleToUpdate.getAssociatedElement().equals(username)) {

                        // now: only the administrator can sign role tuples. Therefore, the key to verify the signature
                        // of the role tuples is the admin's one. This means that there is no need to go and fetch the
                        // key of the signer of the role tuple from the metadata. However, we do it anyway, because
                        // of eventual future features (e.g., multi-admin)
                        PublicKey userVerifyingKey = daoInterface.getPublicSigningKeyOfUserByToken(
                                tupleToUpdate.getSignerOfThisTuple());

                        CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                tupleToUpdate, userVerifyingKey);

                        // the new version number is the old one + 1
                        oldRoleVersionNumber = tupleToUpdate.getRoleVersionNumber();
                        newRoleVersionNumber = oldRoleVersionNumber + 1;

                        doesRoleTupleToRevokeExist = true;

                        break;
                    }
                }

                if (doesRoleTupleToRevokeExist) {

                    // these are the new keys of the role that has to be inserted in each role tuple;
                    // of course, we have then to re-compute the signature of the modified role tuple
                    KeyPair newEncryptingRoleKeys = CryptoUtil.generatePKCKeys();
                    KeyPair newSigningRoleKeys = CryptoUtil.generatePKCKeys();

                    // we need the private keys of the role from which the user is being revoked
                    RoleTuple adminRoleTuple = null;

                    // these set will contain the new role tuples
                    HashSet<RoleTuple> newRoleTuplesRelatedToInvolvedRole = new HashSet<>();

                    // we take the role tuples related to the role from which the user is being revoked.
                    // then, we consider only the role tuples that are NOT related to the given user, as
                    // we have to update these tuples with the new role keys and new version number.
                    // Then, we will sign the tuples and store them in the metadata
                    for (RoleTuple tupleToUpdate : roleTuplesRelatedToInvolvedRole) {

                        String user = tupleToUpdate.getAssociatedElement();

                        // if the user is not the one being revoked from the role, i.e., this is a role
                        // tuple related to a user that needs access to the new role keys
                        if (!user.equals(username)) {

                            if (user.equals(App.admin))
                                adminRoleTuple = tupleToUpdate;

                            // now: only the administrator can sign role tuples. Therefore, the key to verify the signature
                            // of the role tuples is the admin's one. This means that there is no need to go and fetch the
                            // key of the signer of the role tuple from the metadata. However, we do it anyway, because
                            // of eventual future features (e.g., multi-admin)
                            PublicKey userVerifyingKey = daoInterface.getPublicSigningKeyOfUserByToken(
                                    tupleToUpdate.getSignerOfThisTuple());

                            whereWereWe = kVerifySignature;
                            CryptoUtil.getCryptoUtil().
                                    verifyCryptoACTupleSignature(tupleToUpdate, userVerifyingKey);

                            // we need to get the pubic key of the user, as we need to encrypt the new keys
                            // of the role with the public key of the user
                            PublicKey userPublicKey = daoInterface.getPublicEncryptingKeyOfUserByName(
                                    tupleToUpdate.getAssociatedElement());

                            whereWereWe = kEncryptPKIKeys;
                            EncryptedPKCKeyPair encryptedEncryptingNewKeys = CryptoUtil.getCryptoUtil()
                                    .encryptPKCKeys(
                                            newEncryptingRoleKeys.getPublic(),
                                            newEncryptingRoleKeys.getPrivate(),
                                            userPublicKey);
                            EncryptedPKCKeyPair encryptedSigningNewKeys = CryptoUtil.getCryptoUtil()
                                    .encryptPKCKeys(
                                            newSigningRoleKeys.getPublic(),
                                            newSigningRoleKeys.getPrivate(),
                                            userPublicKey);

                            RoleTuple newRoleRoleTuple = new RoleTuple(user, roleName,
                                    encryptedEncryptingNewKeys, encryptedSigningNewKeys,
                                    newRoleVersionNumber, null, null);

                            whereWereWe = kSignTuple;
                            CryptoUtil.getCryptoUtil().signCryptoACTuple(
                                    newRoleRoleTuple, getSigningPrivateKey(), getToken());

                            newRoleTuplesRelatedToInvolvedRole.add(newRoleRoleTuple);
                        }

                    }


                    daoInterface.deleteRoleTuples(roleName, oldRoleVersionNumber);
                    daoInterface.addRoleTuple(newRoleTuplesRelatedToInvolvedRole);

                    if (adminRoleTuple != null) {

                        // decrypt the keys of the role from which the user is being revoked,
                        // so that then we can decrypt the old symmetric keys of the files that
                        // the user could access
                        whereWereWe = kDecryptPKIKeys;
                        KeyPair oldRoleKeys = CryptoUtil.getCryptoUtil().decryptPKCKeys(
                                adminRoleTuple.getEncryptedEncryptingRoleKeys(), getEncryptingPrivateKey());

                        HashSet<PermissionTuple> permissionTuplesRelatedToInvolvedRole =
                                daoInterface.getPermissionTuples(roleName, null, null,
                                        null, 0,-1);

                        // this set will contain all permission tuples that are updated
                        HashSet<PermissionTuple> permissionTuplesToAdd = new HashSet<>();

                        // if the role from which the user had been revoked has at least a permission over a file
                        if (!permissionTuplesRelatedToInvolvedRole.isEmpty()) {

                            // this hashmap will collect the name of all file that the role (from which the
                            // user had been revoked) has access to. The key is the ID of the file, while
                            // the value is the set of permission tuples related to that file
                            HashMap<String, HashSet<PermissionTuple>> filesTheInvolvedRoleHasAccessTo =
                                    new HashMap<>();

                            for (PermissionTuple currentPermissionTuple : permissionTuplesRelatedToInvolvedRole) {

                                PublicKey userVerifyingKey = daoInterface.getPublicSigningKeyOfUserByToken(
                                        currentPermissionTuple.getSignerOfThisTuple());

                                CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                        currentPermissionTuple, userVerifyingKey);

                                String fileName = currentPermissionTuple.getAssociatedFile();
                                filesTheInvolvedRoleHasAccessTo.put(fileName, new HashSet<>());
                                filesTheInvolvedRoleHasAccessTo.get(fileName).add(currentPermissionTuple);
                            }

                            // now, for each file the role (from which the user had been revoked) has access to
                            for (String currentFile : filesTheInvolvedRoleHasAccessTo.keySet()) {

                                // this is the latest version number, i.e., the version number of the key
                                // with which the file has to be encrypted
                                int latestFileVersionNumber = daoInterface.getFileEncryptingVersionNumberByName(currentFile);

                                // generate a new symmetric key for the file. Remember that old symmetric
                                // keys are not secure, as the revoked user may have cached them
                                SecretKey newFileKey = CryptoUtil.generateSymKey();

                                HashSet<PermissionTuple> permissionTuplesOfCurrentFile =
                                        filesTheInvolvedRoleHasAccessTo.get(currentFile);

                                // first, we update the permission tuples of the involved role
                                // remember that we have already checked the signature of these tuples
                                for (PermissionTuple rolePermissionTuple : permissionTuplesOfCurrentFile) {

                                    int thisTupleFileVersionNumber =
                                            rolePermissionTuple.getEncryptingKeyVersionNumber();

                                    // this byte array will contain the (encrypted) symmetric key of the new
                                    // permission tuple. However, remember that the key depends on the
                                    // tuple's file version number. If it is the latest, the symmetric
                                    // key is the new one (i.e., the key to use to encrypt the file).
                                    // Otherwise, keep the same key (i.e., the key to use to decrypt
                                    // the file). In any case, encrypt with the new keys of the role
                                    byte[] thisTupleFileKey;

                                    if (thisTupleFileVersionNumber == latestFileVersionNumber) {

                                        whereWereWe = kEncryptSymmetricKey;
                                        thisTupleFileKey = CryptoUtil.getCryptoUtil().encryptSymmetricKey(
                                                newFileKey, newEncryptingRoleKeys.getPublic());
                                    }
                                    else {

                                        whereWereWe = kDecryptSymmetricKey;
                                        SecretKey oldFileKey = CryptoUtil.getCryptoUtil().decryptSymmetricKey(
                                                rolePermissionTuple.getEncryptedSymmetricFileKey(),
                                                oldRoleKeys.getPrivate());

                                        whereWereWe = kEncryptSymmetricKey;
                                        thisTupleFileKey = CryptoUtil.getCryptoUtil().encryptSymmetricKey(
                                                        oldFileKey, newEncryptingRoleKeys.getPublic());
                                    }

                                    // finally, create the new permission tuple
                                    PermissionTuple newPermissionTuple = new PermissionTuple(
                                            roleName,
                                            newRoleVersionNumber,
                                            currentFile,
                                            rolePermissionTuple.getAssociatedPermission(),
                                            rolePermissionTuple.getEncryptingKeyVersionNumber() + 1,
                                            thisTupleFileKey,
                                            daoInterface.getRoleTokenFromUsername(roleName),
                                            daoInterface.getFileTokenFromUsername(currentFile),
                                            null, null);

                                    whereWereWe = kSignTuple;
                                    CryptoUtil.getCryptoUtil().signCryptoACTuple(
                                            newPermissionTuple, getSigningPrivateKey(), getToken());

                                    permissionTuplesToAdd.add(newPermissionTuple);
                                }


                                // second, we update the permission tuples of all other roles.
                                // here we just have to replace the symmetric encrypting key
                                // with the new one
                                HashSet<PermissionTuple> permissionTuplesToUpdate = daoInterface.
                                        getPermissionTuplesWithNoRoleName(
                                                currentFile, roleName, latestFileVersionNumber, 0, -1);

                                for (PermissionTuple currentPermissionTuple : permissionTuplesToUpdate) {

                                    PublicKey userPublicKey = daoInterface.getPublicSigningKeyOfUserByToken(
                                            currentPermissionTuple.getSignerOfThisTuple());

                                    whereWereWe = kVerifySignature;
                                    CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                            currentPermissionTuple, userPublicKey);

                                    // we need the public key of the role to encrypt the new symmetric key
                                    PublicKey rolePublicKey = daoInterface.getPublicEncryptingKeyOfRoleByName(
                                            currentPermissionTuple.getAssociatedElement());

                                    whereWereWe = kEncryptSymmetricKey;
                                    byte[] thisTupleFileKey = CryptoUtil.getCryptoUtil().
                                            encryptSymmetricKey(newFileKey, rolePublicKey);

                                    String currentTupleRoleName = currentPermissionTuple.getAssociatedElement();

                                    // finally, create the new permission tuple
                                    PermissionTuple newPermissionTuple = new PermissionTuple(
                                            currentTupleRoleName,
                                            currentPermissionTuple.getRoleVersionNumber(),
                                            currentFile,
                                            currentPermissionTuple.getAssociatedPermission(),
                                            latestFileVersionNumber + 1,
                                            thisTupleFileKey,
                                            daoInterface.getRoleTokenFromUsername(currentTupleRoleName),
                                            daoInterface.getFileTokenFromUsername(currentFile),
                                            null, null);

                                    whereWereWe = kSignTuple;
                                    CryptoUtil.getCryptoUtil().signCryptoACTuple(
                                            newPermissionTuple, getSigningPrivateKey(), getToken());

                                    permissionTuplesToAdd.add(newPermissionTuple);
                                }

                                // remember to increment the file version number
                                daoInterface.incrementFileVersionNumberByOne(currentFile);
                            }

                            if (returningCode == OperationOutcomeCode.code_0) {

                                // delete the outdated role tuples
                                daoInterface.deletePermissionTuples(roleName, null, oldRoleVersionNumber);
                                daoInterface.addPermissionTuple(permissionTuplesToAdd);
                            }
                        }

                        if (returningCode == OperationOutcomeCode.code_0) {

                            // remember to increment the role version number and also the public key
                            daoInterface.updateRoleKeys(roleName,
                                    newEncryptingRoleKeys.getPublic(), newSigningRoleKeys.getPublic());
                        }
                    }
                    // we should never be here, because it would mean that there is something
                    // wrong in the creation of a role object. Either that or someone deleted the
                    // tuple of the admin from the database
                    else {

                        // log error
                        App.logger.error("[{}{}{}{} ", className, " (" + revokeUserFromRole + ")]: ",
                                ": did not found the role tuple of the admin for role ", roleName);
                        returningCode = OperationOutcomeCode.code_8;
                    }
                }
                // the tuple to revoke does not exist, i.e., the user was not assigned to the role
                else {
                    App.logger.error("[{}{}{}{}{}{} ", className, " (" + revokeUserFromRole + ")]: ", "User ",
                                        username, " is not assigned to role ", roleName);
                    returningCode = OperationOutcomeCode.code_26;
                }
            }
            // the user wants to revoke the admin from some role or some user from the admin role
            else {
                App.logger.error("[{}{}{} ", className, " (" + deleteUser + ")]: ", "c'mon, don't play with the admin");
                returningCode = OperationOutcomeCode.code_69;
            }
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        // exceptions thrown by one of the method for encrypting/decrypting/signing
        catch ( NoSuchAlgorithmException  | InvalidKeyException |
                IllegalBlockSizeException | BadPaddingException | InvalidKeySpecException e) {

            exceptionThrown = e;
            switch (whereWereWe) {

                case kSignTuple:
                    returningCode = OperationOutcomeCode.code_12;
                    break;
                case kVerifySignature:
                    returningCode = OperationOutcomeCode.code_13;
                    break;
                case kEncryptPKIKeys:
                    returningCode = OperationOutcomeCode.code_29;
                    break;
                case kDecryptPKIKeys:
                    returningCode = OperationOutcomeCode.code_30;
                    break;
                case kEncryptSymmetricKey:
                    returningCode = OperationOutcomeCode.code_31;
                    break;
                case kDecryptSymmetricKey:
                    returningCode = OperationOutcomeCode.code_32;
                    break;
                default:
                    returningCode = OperationOutcomeCode.code_72;
            }
        }
        // the signature of a tuple is not valid
        catch (SignatureException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_7;
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, revokeUserFromRole, exceptionThrown);
        return new UserOutput(returningCode, null);
    }

    /**
     * This method assigns a permission to a role (thus it creates a new PermissionTuple).
     * @param roleName the roleName of the role to give the permission to
     * @param fileName the path of the file the role is being assigned permission over
     * @param permissionToBeGiven the permission to be given to the role, either Read or Read_and_Write
     * @return the outcome of the operation:
     */
    UserOutput assignPermissionToRole(@NotNull String roleName, @NotNull String fileName,
                                      @NotNull Permission permissionToBeGiven)  {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{}{}{}{}{}{} ", className, " (" + assignPermissionToRoleOverFile + ")]: ", "user ",
                getName(), ": assigning the role ", roleName, " permission", permissionToBeGiven,
                " over the file ", fileName);

        // this variable allows to keep track of which instruction threw an eventual exception
        String whereWereWe = "";

        try {

            daoInterface.lockDAOInterfaceStatus();
            HashSet<PermissionTuple> adminPermissionTuples = daoInterface.getPermissionTuples(
                    App.admin, fileName, null, null, 0,-1);

            if (!adminPermissionTuples.isEmpty()) {

                int latestRoleVersionNumber = daoInterface.getRoleVersionNumberByName(roleName);

                // check if the role has other permissions over the file. Indeed, it may be the case that
                // we just have to update one of these tuples
                HashSet<PermissionTuple> previousPermissionsOfRoleOverFile =
                        daoInterface.getPermissionTuples(
                                roleName, fileName, null, latestRoleVersionNumber, 0,-1);

                // either the role already has a permission over the file, or it doesn't. In the first case,
                // we just have to add the new permission to the existing permission tuples. Otherwise, we
                // need to share the symmetric key of the file with the role. That is why we need the permission
                // tuples of the admin, to decrypt the symmetric key. Of course, we loop as we need to match
                // the version numbers, as there may be difference symmetric keys
                for (PermissionTuple adminPermissionTuple : adminPermissionTuples) {

                    PublicKey publicKeyOfSigner = daoInterface.getPublicSigningKeyOfUserByToken(
                            adminPermissionTuple.getSignerOfThisTuple());

                    whereWereWe = kVerifySignature;
                    CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                            adminPermissionTuple, publicKeyOfSigner);

                    PermissionTuple previousPermissionOfRoleOverFile = null;

                    // we look for a permission tuple related to the role with the same
                    // file version number as the admin's permission tuple
                    for (PermissionTuple tuple : previousPermissionsOfRoleOverFile) {

                        if (adminPermissionTuple.getEncryptingKeyVersionNumber().equals(
                                tuple.getEncryptingKeyVersionNumber())) {

                            // store its reference
                            previousPermissionOfRoleOverFile = tuple;
                        }
                    }

                    // if a previous tuple exists (i.e. the role already has a permission
                    // over the file, i.e., the role already has the symmetric key
                    if (previousPermissionOfRoleOverFile != null) {

                        PublicKey userVerifyingKey = daoInterface.getPublicSigningKeyOfUserByToken(
                                previousPermissionOfRoleOverFile.getSignerOfThisTuple());

                        whereWereWe = kVerifySignature;
                        CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                previousPermissionOfRoleOverFile, userVerifyingKey);

                        if (permissionToBeGiven == Read &&
                                previousPermissionOfRoleOverFile.getAssociatedPermission() == Read_and_Write) {

                            App.logger.error("[{}{}{}{}{} ", className, " (" +
                                    assignPermissionToRoleOverFile + ")]: ",
                                    "Trying to assign Read permission to a role that already has ",
                                    "Read_and_Write permission. If you want to revoke ",
                                    "the permission, use the revoke method instead");
                            returningCode = OperationOutcomeCode.code_16;
                            break;
                        }
                        else if (permissionToBeGiven ==
                                previousPermissionOfRoleOverFile.getAssociatedPermission()) {

                            App.logger.error("[{}{}{}{} ", className, " (" +
                                    assignPermissionToRoleOverFile + ")]: ",
                                    "Trying to assign a permission already existing:", permissionToBeGiven);
                            returningCode = OperationOutcomeCode.code_24;
                            break;
                        }
                        else {

                            // create the new permission tuple
                            PermissionTuple upgradedPermissionTuple = new PermissionTuple(
                                    roleName,
                                    previousPermissionOfRoleOverFile.getRoleVersionNumber(),
                                    fileName,
                                    permissionToBeGiven,
                                    previousPermissionOfRoleOverFile.getEncryptingKeyVersionNumber(),
                                    previousPermissionOfRoleOverFile.getEncryptedSymmetricFileKey(),
                                    daoInterface.getRoleTokenFromUsername(roleName),
                                    daoInterface.getFileTokenFromUsername(fileName),
                                    null, null);

                            whereWereWe = kSignTuple;
                            CryptoUtil.getCryptoUtil().signCryptoACTuple(
                                    upgradedPermissionTuple, getSigningPrivateKey(), getToken());

                            daoInterface.updatePermissionInPermissionTuple(upgradedPermissionTuple);
                        }
                    }
                    // if here, the role does not have any existing permission over the file.
                    // Therefore, we have to create permission tuples from scratch
                    else {

                        whereWereWe = kDecryptSymmetricKey;
                        SecretKey fileKey = CryptoUtil.getCryptoUtil().decryptSymmetricKey(
                                adminPermissionTuple.getEncryptedSymmetricFileKey(), getEncryptingPrivateKey());

                        PublicKey rolePublicKey = daoInterface.getPublicEncryptingKeyOfRoleByName(roleName);

                        whereWereWe = kEncryptSymmetricKey;
                        byte[] encryptedFileKeyWithRoleKeys = CryptoUtil.getCryptoUtil().
                                encryptSymmetricKey(fileKey, rolePublicKey);

                        PermissionTuple newPermissionTuple = new PermissionTuple(
                                roleName,
                                adminPermissionTuple.getRoleVersionNumber(),
                                fileName,
                                permissionToBeGiven,
                                adminPermissionTuple.getEncryptingKeyVersionNumber(),
                                encryptedFileKeyWithRoleKeys,
                                daoInterface.getRoleTokenFromUsername(roleName),
                                daoInterface.getFileTokenFromUsername(fileName),
                                null, null);

                        whereWereWe = kSignTuple;
                        CryptoUtil.getCryptoUtil().signCryptoACTuple(
                                newPermissionTuple, getSigningPrivateKey(), getToken());

                        daoInterface.addPermissionTuple(newPermissionTuple);
                    }
                }
            }
            // if the tuple of the admin is not found, it probably means that the file has been deleted
            else {

                App.logger.error("[{}{}{}{}{} ", className, " (" + assignPermissionToRoleOverFile + ")]: ",
                        "did not found permission tuple of admin for file ", fileName,
                        ". Probably, the file has been deleted");
                returningCode = OperationOutcomeCode.code_6;
            }
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        // exception thrown when verifying the signature of a tuple or when decrypting/encrypting
        catch ( NoSuchAlgorithmException | InvalidKeyException |
                BadPaddingException | IllegalBlockSizeException e) {

            exceptionThrown = e;
            switch (whereWereWe) {

                case kSignTuple:
                    returningCode = OperationOutcomeCode.code_12;
                    break;
                case kVerifySignature:
                    returningCode = OperationOutcomeCode.code_13;
                    break;
                case kEncryptSymmetricKey:
                    returningCode = OperationOutcomeCode.code_31;
                    break;
                case kDecryptSymmetricKey:
                    returningCode = OperationOutcomeCode.code_32;
                    break;
                default:
                    returningCode = OperationOutcomeCode.code_72;
            }
        }
        // the signature of a tuple is not valid
        catch (SignatureException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_7;

        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, assignPermissionToRoleOverFile, exceptionThrown);
        return new UserOutput(returningCode, null);
    }




    /**
     * This method revokes the given permission over the given file from the given role.
     * @param roleName the name of the role (not token)
     * @param fileName the name of the file (not token)
     * @param permission the permission to remove
     * @return the outcome of the operation
     */
    UserOutput revokePermissionFromRole(@NotNull String roleName, @NotNull String fileName, @NotNull Permission permission) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{}{}{}{}{}{} ", className, " (" + revokePermissionFromRole + ")]: ", "user ",
                getName(), ": revoking the role ", roleName, " the permission ", permission, " from file ", fileName);

        // this variable allows to keep track of which instruction threw an eventual exception
        String whereWereWe = "";

        try {

            daoInterface.lockDAOInterfaceStatus();

            if (permission == Permission.Write) {

                // fetch the permission tuples related to the given role so to remove the 'Write' permission from
                // each tuple
                HashSet<PermissionTuple> permissionTuplesToUpdate = daoInterface.getPermissionTuples(
                        roleName, fileName, null, null,0, -1);

                for (PermissionTuple oldPermissionTuple : permissionTuplesToUpdate) {

                    PublicKey userVerifyingKey = daoInterface.getPublicSigningKeyOfUserByToken(
                            oldPermissionTuple.getSignerOfThisTuple());

                    whereWereWe = kVerifySignature;
                    CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                            oldPermissionTuple, userVerifyingKey);

                    // create a new permission tuple equal to the old tuple, except for the permission
                    PermissionTuple newPermissionTuple = new PermissionTuple(
                            roleName,
                            oldPermissionTuple.getRoleVersionNumber(),
                            fileName,
                            Permission.Read,
                            oldPermissionTuple.getEncryptingKeyVersionNumber(),
                            oldPermissionTuple.getEncryptedSymmetricFileKey(),
                            daoInterface.getRoleTokenFromUsername(roleName),
                            daoInterface.getFileTokenFromUsername(fileName),
                            null, null);

                    CryptoUtil.getCryptoUtil().signCryptoACTuple(
                            newPermissionTuple, getSigningPrivateKey(), getToken());

                    daoInterface.updatePermissionInPermissionTuple(newPermissionTuple);
                }
            }

            else if (permission == Read_and_Write) {

                // we have to delete the permission tuples related to the role, as the role should
                // not have access to the symmetric key anymore. Then, we create a new symmetric key,
                // in case a user from the role cached the key
                daoInterface.deletePermissionTuples(roleName, fileName, null);

                SecretKey newKey = CryptoUtil.generateSymKey();
                int fileLatestVersionNumber = daoInterface.getFileEncryptingVersionNumberByName(fileName);

                // get the latest permission tuples of other roles, as we have
                // to update the symmetric key and replace it with the new one
                HashSet<PermissionTuple> latestPermissionTuples = daoInterface.getPermissionTuples(
                        null, fileName, fileLatestVersionNumber, null, 0, -1);

                for (PermissionTuple permissionTuple : latestPermissionTuples) {

                    // we will use the public key to encrypt the new symmetric key
                    PublicKey rolePublicKey = daoInterface.getPublicEncryptingKeyOfRoleByName(
                            permissionTuple.getAssociatedElement());

                    PublicKey userVerifyingKey = daoInterface.getPublicSigningKeyOfUserByToken(
                            permissionTuple.getSignerOfThisTuple());

                    whereWereWe = kVerifySignature;
                    CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                            permissionTuple, userVerifyingKey);

                    whereWereWe = kEncryptSymmetricKey;
                    byte[] newKeyFileEncrypted = CryptoUtil.getCryptoUtil().encryptSymmetricKey
                            (newKey, rolePublicKey);

                    String currentTupleRoleName = permissionTuple.getAssociatedElement();
                    String currentTupleFileName = permissionTuple.getAssociatedFile();

                    // create the new permission tuple with the updated key and version number
                    PermissionTuple newPermissionTuple = new PermissionTuple(
                            permissionTuple.getAssociatedElement(),
                            permissionTuple.getRoleVersionNumber(),
                            permissionTuple.getAssociatedFile(),
                            permissionTuple.getAssociatedPermission(),
                            permissionTuple.getEncryptingKeyVersionNumber() + 1,
                            newKeyFileEncrypted,
                            daoInterface.getRoleTokenFromUsername(currentTupleRoleName),
                            daoInterface.getFileTokenFromUsername(currentTupleFileName),
                            null, null);

                    whereWereWe = kSignTuple;
                    CryptoUtil.getCryptoUtil().signCryptoACTuple(
                            newPermissionTuple, getSigningPrivateKey(), getToken());

                    daoInterface.addPermissionTuple(newPermissionTuple);
                }

                // increment the latest version number of the file
                daoInterface.incrementFileVersionNumberByOne(fileName);

            }
            // here if the permission to revoke is neither Write nor Read_and_Write
            else {
                App.logger.error("[{}{}{} ", className, " (" + revokePermissionFromRole + ")]: ",
                        "permission is neither Write nor Read_and_Write");
                returningCode = OperationOutcomeCode.code_16;
            }
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        // exception thrown by cryptographic operations
        catch ( NoSuchAlgorithmException | InvalidKeyException | BadPaddingException | IllegalBlockSizeException e) {

            exceptionThrown = e;
            switch (whereWereWe) {

                case kSignTuple:
                    returningCode = OperationOutcomeCode.code_12;
                    break;
                case kVerifySignature:
                    returningCode = OperationOutcomeCode.code_13;
                    break;
                case kEncryptSymmetricKey:
                    returningCode = OperationOutcomeCode.code_31;
                    break;
                default:
                    returningCode = OperationOutcomeCode.code_72;
            }

        }
        // the signature of a tuple is not valid
       catch (SignatureException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_7;
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, revokePermissionFromRole, exceptionThrown);
        return new UserOutput(returningCode, null);
    }


    /**
     * This methods downloads and decrypts (if possible) the given file.
     * Note: if the user is not authorized, the method simply returns that the
     * file does not exists to avoid information leakage on the file.
     * @param fileName the name of the file (not token)
     * @return the outcome of the operation
     */
    UserOutput readFile (@NotNull String fileName) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;
        InputStream decryptedFileStream = null;

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + readFile + ")]: ", "user ",
                getName(), ": reading file ", fileName);

        // this variable allows to keep track of which instruction threw an eventual exception
        String whereWereWe = "";

        try {

            daoInterface.lockDAOInterfaceStatus();

            // this hash set contains the file tuple related to the file to
            // read if the user has access to the file, no tuples otherwise
            HashSet<FileTuple> fileTupleOfFileToReads = daoInterface.getMyFileTuples(getName(), fileName, 0,1);

            if (!fileTupleOfFileToReads.isEmpty()) {

                FileTuple fileTupleOfFileToRead = null;
                for (FileTuple fileTuple : fileTupleOfFileToReads)
                    fileTupleOfFileToRead = fileTuple;

                String signerOfTuple = fileTupleOfFileToRead.getSignerOfThisTuple();
                PublicKey publicKeyOfSigner =
                        fileTupleOfFileToRead.getElementSigner() == CryptoACActiveElementEnum.User ?
                        daoInterface.getPublicSigningKeyOfUserByToken(signerOfTuple) :
                        daoInterface.getPublicSigningKeyOfRoleByToken(signerOfTuple);

                whereWereWe = kVerifySignature;
                CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                        fileTupleOfFileToRead, publicKeyOfSigner);

                // now we have to obtain the symmetric key to decrypt the file. Therefore, we get the
                // decrypting key version number from the file tuple, and then fetch the corresponding
                // permission tuple

                HashSet<PermissionTuple> filePermissionTuples = daoInterface.getMyPermissionTuples(
                        getName(), null, fileName, null,
                        fileTupleOfFileToRead.getDecryptingKeyVersionNumber(), 0, -1);

                if (!filePermissionTuples.isEmpty()) {

                    PermissionTuple permissionTupleOfFileToRead = null;
                    for (PermissionTuple permissionTuple : filePermissionTuples)
                        permissionTupleOfFileToRead = permissionTuple;

                    PublicKey userVerifyingKeyPermissionTuple = daoInterface.getPublicSigningKeyOfUserByToken(
                            permissionTupleOfFileToRead.getSignerOfThisTuple());

                    whereWereWe = kVerifySignature;
                    CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                            permissionTupleOfFileToRead, userVerifyingKeyPermissionTuple);

                    // now we get the role tuple of the role that can read the file. With the
                    // role tuple, we can decrypt the role private key. With the role private
                    // key, we can decrypt the symmetric key. With the symmetric key, we can
                    // decrypt the file

                    HashSet<RoleTuple> fileRoleTuples = daoInterface.getMyRoleTuples(getName(),
                            permissionTupleOfFileToRead.getAssociatedElement(), 0, -1);

                    if (!fileRoleTuples.isEmpty()) {

                        RoleTuple roleTupleOfFileToRead = null;
                        for (RoleTuple roleTuple : fileRoleTuples)
                            roleTupleOfFileToRead = roleTuple;

                        PublicKey userVerifyingKeyRoleTuple = daoInterface.
                                getPublicSigningKeyOfUserByToken(roleTupleOfFileToRead.getSignerOfThisTuple());

                        whereWereWe = kVerifySignature;
                        CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                roleTupleOfFileToRead, userVerifyingKeyRoleTuple);

                        InputStream fileToRead = daoInterface.downloadFile(fileName);

                        // now we decrypt the keys of the role. Then, we use the keys of the role
                        // to decrypt the symmetric key. Finally, we decrypt the file

                        whereWereWe = kDecryptPKIKeys;
                        KeyPair roleEncryptingKeyPair = CryptoUtil.getCryptoUtil().decryptPKCKeys(
                                roleTupleOfFileToRead.getEncryptedEncryptingRoleKeys(),
                                getEncryptingPrivateKey());

                        whereWereWe = kDecryptSymmetricKey;
                        SecretKey fileKey = CryptoUtil.getCryptoUtil().decryptSymmetricKey(
                                permissionTupleOfFileToRead.getEncryptedSymmetricFileKey(),
                                roleEncryptingKeyPair.getPrivate());

                        whereWereWe = kDecryptFile;
                        decryptedFileStream = CryptoUtil.getCryptoUtil().
                                decryptFile(fileKey, fileToRead);
                    }
                    // it means that the user can access the permission tuples of roles to which the user
                    // is not assigned to. This is an inconsistent state
                    else {

                        App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + readFile + ")]: ", "user ",
                                getName(), " can access permission tuples but does not have any role ",
                                "tuple for file", fileName);
                        returningCode = OperationOutcomeCode.code_14;
                    }
                }
                // it means that we are in an inconsistent state, as the user got the file tuple but there are
                // no permission tuples, i.e., the user is not assigned to a role that can read the file
                else {

                    App.logger.error("[{}{}{}{}{}{} ", className, " (" + readFile + ")]: ", "user ", getName(),
                            " can access the file tuple but does not have any permission tuple for file ",
                            fileName);
                    returningCode = OperationOutcomeCode.code_14;
                }
            }
            // either the file does not exists or the user does not have access to the file
            // in both cases, the most secure response is to say that the file does not exist
            // so to return a 404 instead of a 403
            else {
                App.logger.error("[{}{}{}{}{} ", className, " (" + readFile + ")]: ",
                        "file ", fileName, " does not exist");
                returningCode = OperationOutcomeCode.code_6;
            }
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        // exception thrown by cryptographic operations
        catch (NoSuchAlgorithmException | InvalidKeyException | BadPaddingException |
                InvalidKeySpecException | IllegalBlockSizeException e) {

            exceptionThrown = e;
            switch (whereWereWe) {

                case kVerifySignature:
                    returningCode = OperationOutcomeCode.code_13;
                    break;
                case kDecryptPKIKeys:
                    returningCode = OperationOutcomeCode.code_30;
                    break;
                case kDecryptSymmetricKey:
                    returningCode = OperationOutcomeCode.code_32;
                    break;
                case kDecryptFile:
                    returningCode = OperationOutcomeCode.code_34;
                    break;
                default:
                    returningCode = OperationOutcomeCode.code_72;
            }
        }
        // the signature of a tuple is not valid
        catch (SignatureException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_7;
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, readFile, exceptionThrown);
        return new UserOutput(returningCode, decryptedFileStream);
    }


    /**
     * This method updates the given file.
     * Note: if the user is not authorized, the method simply returns that the
     * file does not exists to avoid information leakage on the file.
     * @param fileName the name of the file (not token)
     * @param fileStream the stream of the file (unencrypted, in plain text)
     * @return the outcome of the operation
     */
    UserOutput writeFile (@NotNull String fileName, @NotNull InputStream fileStream)  {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;
        InputStream streamOfEncryptedFile;

        App.logger.info("[{}{}{}{}{}{} ", className, " (" + writeFile + ")]: ", "user ",
                getName(), ": writing file ", fileName);

        // this variable allows to keep track of which instruction threw an eventual exception
        String whereWereWe = "";

        try {

            daoInterface.lockDAOInterfaceStatus();

            // this hash set contains the file tuple related to the file to
            // write if the user has access to the file, no tuples otherwise
            HashSet<FileTuple> fileTupleOfFileToReads = daoInterface.getMyFileTuples(getName(), fileName, 0,1);

            if (!fileTupleOfFileToReads.isEmpty()) {

                FileTuple fileTupleOfFileToRead = null;
                for (FileTuple fileTuple : fileTupleOfFileToReads)
                    fileTupleOfFileToRead = fileTuple;

                String signerOfTuple = fileTupleOfFileToRead.getSignerOfThisTuple();
                PublicKey publicKeyOfSigner =
                        fileTupleOfFileToRead.getElementSigner() == CryptoACActiveElementEnum.User ?
                        daoInterface.getPublicSigningKeyOfUserByToken(signerOfTuple) :
                        daoInterface.getPublicSigningKeyOfRoleByToken(signerOfTuple);

                whereWereWe = kVerifySignature;
                CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                        fileTupleOfFileToRead, publicKeyOfSigner);


                // now we have to obtain the symmetric key to encrypt the file. Therefore, we get the
                // encrypting key version number from the file, and then fetch the corresponding
                // permission tuple

                int latestFileVersionNumber = daoInterface.getFileEncryptingVersionNumberByToken(
                        fileTupleOfFileToRead.getFileToken());

                HashSet<PermissionTuple> filePermissionTuples = daoInterface.getMyPermissionTuples(getName(),
                        null, fileName, null, latestFileVersionNumber, 0, -1);

                if (!filePermissionTuples.isEmpty()) {

                    PermissionTuple permissionTupleOfFileToWrite = null;
                    for (PermissionTuple permissionTuple : filePermissionTuples) {
                        if (permissionTuple.getAssociatedPermission() == Read_and_Write)
                            permissionTupleOfFileToWrite = permissionTuple;
                    }

                    if (permissionTupleOfFileToWrite != null) {

                        PublicKey userVerifyingKeyPermissionTuple = daoInterface.getPublicSigningKeyOfUserByToken(
                                permissionTupleOfFileToWrite.getSignerOfThisTuple());

                        whereWereWe = kVerifySignature;
                        CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                permissionTupleOfFileToWrite, userVerifyingKeyPermissionTuple);


                        // now we get the role tuple of the role that can write the file. With the
                        // role tuple, we can decrypt the role private key. With the role private
                        // key, we can decrypt the symmetric key. With the symmetric key, we can
                        // encrypt the file

                        HashSet<RoleTuple> fileRoleTuples = daoInterface.getMyRoleTuples(getName(),
                                permissionTupleOfFileToWrite.getAssociatedElement(), 0, -1);

                        if (!fileRoleTuples.isEmpty()) {

                            RoleTuple roleTupleOfFileToWrite = null;
                            for (RoleTuple roleTuple : fileRoleTuples)
                                roleTupleOfFileToWrite = roleTuple;

                            PublicKey userVerifyingKeyRoleTuple =
                                    daoInterface.getPublicSigningKeyOfUserByToken(App.admin);

                            whereWereWe = kVerifySignature;
                            CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                    roleTupleOfFileToWrite, userVerifyingKeyRoleTuple);

                            // now we decrypt the keys of the role. Then, we use the keys of the role
                            // to decrypt the symmetric key. Finally, we encrypt the file and upload it

                            whereWereWe = kDecryptPKIKeys;
                            KeyPair roleEncryptingKeyPair = CryptoUtil.getCryptoUtil().decryptPKCKeys(
                                    roleTupleOfFileToWrite.getEncryptedEncryptingRoleKeys(),
                                    getEncryptingPrivateKey());

                            KeyPair roleSigningKeyPair = CryptoUtil.getCryptoUtil().decryptPKCKeys(
                                    roleTupleOfFileToWrite.getEncryptedSigningRoleKeys(),
                                    getEncryptingPrivateKey());

                            whereWereWe = kDecryptSymmetricKey;
                            SecretKey fileKey = CryptoUtil.getCryptoUtil().decryptSymmetricKey(
                                    permissionTupleOfFileToWrite.getEncryptedSymmetricFileKey(),
                                    roleEncryptingKeyPair.getPrivate());
                            // encrypt the new file
                            whereWereWe = kEncryptFile;
                            streamOfEncryptedFile = CryptoUtil.getCryptoUtil().
                                    encryptInputStream(fileKey, fileStream);

                            File newFileToUpload = new File(fileName,
                                    streamOfEncryptedFile, latestFileVersionNumber);
                            newFileToUpload.setToken(permissionTupleOfFileToWrite.getFileToken());

                            FileTuple newFileTupleToUpload = new FileTuple(fileName,
                                    "mock token", latestFileVersionNumber,
                                    CryptoACActiveElementEnum.Role, null, null);

                            whereWereWe = kSignTuple;
                            CryptoUtil.getCryptoUtil().signCryptoACTuple(
                                    newFileTupleToUpload,
                                    roleSigningKeyPair.getPrivate(),
                                    permissionTupleOfFileToWrite.getRoleToken());

                            daoInterface.updateFile(newFileToUpload, newFileTupleToUpload);
                        }
                        // it means that the user can access the permission tuples of roles to which the user
                        // is not assigned to. This is an inconsistent state
                        else {

                            App.logger.error("[{}{}{}{}{}{}{} ", className, " (" + writeFile + ")]: ", "user ",
                                    getName(), " can access permission tuples but does not have any role ",
                                    "tuple for file", fileName);
                            returningCode = OperationOutcomeCode.code_15;
                        }
                    }
                    // it means that the user is assigned to roles that have read but not write access to the file
                    else {

                        App.logger.error("[{}{}{}{}{}{} ", className, " (" + writeFile + ")]: ", "user ",
                                getName(), " has read but not write permission on file ", fileName);
                        returningCode = OperationOutcomeCode.code_15;
                    }
                }
                // it means that we are in an inconsistent state, as the user got the file tuple but there are
                // no permission tuples, i.e., the user is not assigned to a role that can access the file
                else {
                    App.logger.error("[{}{}{}{}{}{} ", className, " (" + writeFile + ")]: ", "user ", getName(),
                            " can access the file tuple but does not have any permission tuple for file ",
                            fileName);
                    returningCode = OperationOutcomeCode.code_14;
                }
            }
            // either the file does not exists or the user does not have access to the file
            // in both cases, the most secure response is to say that the file does not exist
            else {
                App.logger.error("[{}{}{}{}{} ", className, " (" + writeFile + ")]: ",
                        "file ", fileName, " does not exist");
                returningCode = OperationOutcomeCode.code_6;
            }
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }
        // exception thrown by cryptographic operations
        catch (NoSuchAlgorithmException | InvalidKeyException | BadPaddingException |
                InvalidKeySpecException | IllegalBlockSizeException e) {

            exceptionThrown = e;
            switch (whereWereWe) {

                case kSignTuple:
                    returningCode = OperationOutcomeCode.code_12;
                    break;
                case kVerifySignature:
                    returningCode = OperationOutcomeCode.code_13;
                    break;
                case kDecryptPKIKeys:
                    returningCode = OperationOutcomeCode.code_30;
                    break;
                case kDecryptSymmetricKey:
                    returningCode = OperationOutcomeCode.code_32;
                    break;
                case kEncryptFile:
                    returningCode = OperationOutcomeCode.code_33;
                    break;
                default:
                    returningCode = OperationOutcomeCode.code_72;
            }
        }
        // the signature of a tuple is not valid
        catch (SignatureException e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_7;
        }
        catch (Exception e) {
            exceptionThrown = e;
            returningCode = OperationOutcomeCode.code_72;
        }

        logAtEndOfMethod(returningCode, writeFile, exceptionThrown);
        return new UserOutput(returningCode, null);
    }


    /**
     * This method returns the list of users that this user can see. If this user is the admin, then the admin
     * can see all users, otherwise none.
     * @param offset the offset where to start fetching rows from
     * @param limit the limit of rows to return
     * @return the outcome of the operation. The first element is the outcome code, the second a set of Users objects
     */
    UserOutput listUsers(Integer offset, Integer limit) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{} ", className, " (" + listUsers + ")]: ", "user ", getName(),
                ": getting all users");

        HashSet<User> associatedUsers = new HashSet<>();

        try {
            daoInterface.lockDAOInterfaceStatus();
            associatedUsers = daoInterface.getUser(null, null, offset, limit);
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }

        logAtEndOfMethod(returningCode, listUsers, exceptionThrown);
        return new UserOutput(returningCode, associatedUsers);
    }

    /**
     * This method returns the list of role that this user can see. If this user is the admin, then the admin
     * can see all role, otherwise none.
     * @param offset the offset where to start fetching rows from
     * @param limit the limit of rows to return
     * @return the outcome of the operation. The first element is the outcome code, the second a set of Role objects
     */
    UserOutput listRoles(Integer offset, Integer limit) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{} ", className, " (" + listRoles + ")]: ", "user ", getName(),
                ": getting all roles");

        HashSet<Role> associatedRoles = new HashSet<>();

        try {

            daoInterface.lockDAOInterfaceStatus();
            associatedRoles = daoInterface.getRole(null, null, offset, limit);
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }

        logAtEndOfMethod(returningCode, listRoles, exceptionThrown);
        return new UserOutput(returningCode, associatedRoles);
    }

    /**
     * This method returns the list of files that this user can see. If this user is the admin, then the admin
     * can see all files, otherwise none.
     * @param offset the offset where to start fetching rows from
     * @param limit the limit of rows to return
     * @return the outcome of the operation. The first element is the outcome code, the second a set of File objects
     */
    UserOutput listFiles(Integer offset, Integer limit) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{} ", className, " (" + listFiles + ")]: ", "user ", getName(),
                ": getting all files");

        HashSet<File> associatedFiles = new HashSet<>();

        try {

            daoInterface.lockDAOInterfaceStatus();
            associatedFiles = daoInterface.getFile(null, null, offset, limit);
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }

        logAtEndOfMethod(returningCode, listFiles, exceptionThrown);
        return new UserOutput(returningCode, associatedFiles);
    }

    /**
     * This method returns the role tuples associated to this user.
     * @param roleName the name of the role that has to match in the tuples
     * @param offset the offset where to start fetching rows from
     * @param limit the limit of rows to return
     * @return the outcome of the operation. The first element is the outcome code, the second a set of role tuples
     */
    UserOutput listAssignments (String roleName, Integer offset, Integer limit) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;
        HashSet<RoleTuple> associatedAssignments = new HashSet<>();

        App.logger.info("[{}{}{}{}{}{}{} ", className, " (" + listAssignments + ")]: ", "user ", getName(),
                ": getting role tuples for user ", getName(),
                (roleName == null ? "" : " and filtered by role " + roleName) );

        try {
            daoInterface.lockDAOInterfaceStatus();
            associatedAssignments = daoInterface.getMyRoleTuples(getName(), roleName, offset, limit);
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }

        logAtEndOfMethod(returningCode, listAssignments, exceptionThrown);
        return new UserOutput(returningCode, associatedAssignments);
    }

    /**
     * This method returns the permission tuples associated to the specified role, file and version numbers.
     * If this user is not the admin, then this user can only see his permission tuples
     * @param roleName the name of the role of the role tuples to return, or null if not relevant (not token)
     * @param fileName the name of the file of the role tuples to return, or null if not relevant (not token)
     * @param offset the offset where to start fetching rows from
     * @param limit the limit of rows to return
     * @return the outcome of the operation. The first element is the outcome code,
     * the second a set of permission tuples
     */
    UserOutput listPermissions (String roleName, String fileName, Integer offset, Integer limit) {

        OperationOutcomeCode returningCode = OperationOutcomeCode.code_0;
        Exception exceptionThrown = null;

        App.logger.info("[{}{}{}{}{}{}{}{} ", className, " (" + listPermissions + ")]: ", "user ", getName(),
                ": getting permissions tuples with role ", roleName, ", file ", fileName);

        HashSet<PermissionTuple> associatedPermissions = new HashSet<>();

        try {

            daoInterface.lockDAOInterfaceStatus();

            if (this.isUserAdmin())
                associatedPermissions = daoInterface.getPermissionTuples(
                        roleName, fileName, null, null, offset, limit);
            else {

                App.logger.info("{}{}{}{}{}", className, " (" + listPermissions + ")]: ", "user ", getName(),
                        " is not the admin, filtering permissions tuples by this user name");
                associatedPermissions = daoInterface.getMyPermissionTuples(getName(), roleName, fileName,
                        null, null, offset, limit);
            }
        }
        catch (DAOException e) {
            exceptionThrown = e;
            returningCode = e.getErrorCode();
        }

        logAtEndOfMethod(returningCode, listPermissions, exceptionThrown);
        return new UserOutput(returningCode, associatedPermissions);
    }

    /**
     * getter for the admin flag.
     * @return the admin flag
     */
    public boolean isUserAdmin() {
        return isUserAdmin;
    }

    /**
     * setter for the admin flag
     * @param userAdmin the admin flag
     */
    public void setUserAdmin(boolean userAdmin) {
        isUserAdmin = userAdmin;
    }

    /**
     * This method wraps the common code at the end of the methods interacting with the DAO.
     * @param code code to log
     * @param methodName name of the method invoking this method
     * @param exceptionToPrint eventual exception to print
     */
    private void logAtEndOfMethod(OperationOutcomeCode code, String methodName, Exception exceptionToPrint) {

        if (code != OperationOutcomeCode.code_0) {

            App.logger.error("[{}{}{}{}{}{} ", className, " (" + methodName + ")]: ", code.toString(),
                    "! Now doing rollback... (",
                    (exceptionToPrint == null ? "no exception" : exceptionToPrint.getMessage()), ")",
                    exceptionToPrint);
            try {
                daoInterface.rollback();
            }
            catch (DAOException e) {
                App.logger.error("[{}{}{}{}{}{} ", className, " (" + methodName + ")]: ", e.getErrorCode().toString(),
                                "! Rollback failed! Contact the system administrator (", e.getMessage(), ")", e);
            }
        }
        else {
            try {
                daoInterface.unlockDAOInterfaceStatus();
            }
            catch (DAOException e) {
                App.logger.error("[{}{}{}{}{}{}{}{} ", className, " (" + methodName + ")]: ", "the method executed ",
                        "but the unlocking of the DAO failed: ", e.getErrorCode().toString(),
                        " (", e.getMessage(), ")", e);
            }
        }
    }

    /**
     * This method checks whether all the fields of the user are not null.
     * @return true is all fields are not null, false otherwise
     */
    @Override
    public boolean isCompleteInAllFields() {
        return (getName() != null &&
                getToken() != null &&
                getEncryptingPublicKey() != null &&
                getSigningPublicKey() != null);
    }

    /**
     * This method returns a predictable token of the given size in bytes.
     * The token is calculated by hashing the encrypting private key and the name of the entity
     * @param size the number of bytes of the final hash
     * @return the hash value
     */
    @Override
    String getRandomToken (int size) {

        String token = super.getRandomToken(size);

        try {
            MessageDigest digest = MessageDigest.getInstance(CryptoUtil.getHashAlgorithm());
            byte[] hash = digest.digest(getEncryptingPrivateKey().getEncoded());
            token = Base64.getEncoder().encodeToString(hash).substring(0, size);
        }
        catch (NoSuchAlgorithmException e) {
            App.logger.error("[{}{}{}{} ", className, " (" + getRandomToken + ")]: ",
                    "The algorithm requested for the creation of the token does not exist: ", e);
            exit(35);
        }
        catch (NullPointerException e) {
            App.logger.warn("[{}{}{}{} ", className, " (" + getRandomToken + ")]: ", "The private key is null.",
                        " The token will be randomly generated");
        }
        return token;
    }
}