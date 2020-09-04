package eu.fbk.st.cryptoac.dao.mock;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.core.element.CryptoACElementStatus;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQL;
import eu.fbk.st.cryptoac.core.element.File;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import eu.fbk.st.cryptoac.core.tuple.FileTuple;
import eu.fbk.st.cryptoac.core.tuple.Permission;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.util.CryptoUtil;
import eu.fbk.st.cryptoac.util.FileUtil;
import org.jetbrains.annotations.NotNull;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.SignatureException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.*;

import static eu.fbk.st.cryptoac.App.uploadDirectoryDS;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;
import static eu.fbk.st.cryptoac.util.FileUtil.SaveMode.OVERWRITE;
import static eu.fbk.st.cryptoac.util.FileUtil.SaveMode.THROW_EXCEPTION;

/**
 * This class is an implementation of the DAO interface for testing purposes.
 * Encrypted files are stored locally where this software is running.
 * Please ignore this class.
 */
public class DAOInterfaceMock extends DAOInterfaceMySQL {

    // variable to keep the user connection when changing context
    Connection userConnection;

    /**
     * This constructor simply invokes the constructor of the super class
     * @param cloudInterfaceMockParameters a map containing the needed parameters to create an instance of this class (see super class
     *                   documentation)
     */
    protected DAOInterfaceMock(DAOInterfaceMockParameters cloudInterfaceMockParameters) {

        super(cloudInterfaceMockParameters);

        // set classname
        className = "DAOInterfaceMock";
    }

    /**
     * This method creates a new instance of this class with the given parameters
     * @param cloudInterfaceMockParameters initialization parameters (see class constructor)
     */
    public static DAOInterfaceMock getInstance(DAOInterfaceMockParameters cloudInterfaceMockParameters) {

        // create an return a new CloudInterfaceMock
        return new DAOInterfaceMock(cloudInterfaceMockParameters);
    }

    /**
     * This method stores the new file locally in the file system (1), saves the related metadata from the 
     * file tuple (2) and the permission tuple that gives the admin all permissions over the file (3) in the 
     * MYSql database.
     * Remember that file names are unique.
     * Remember that you can get the content of the file from the InputStream in the newFile parameter.
     * Remember that the reference monitor has to check the validity of the new data. This means that:
     *  - tuples' signatures shall be correct. This includes also checking that the user that signed the
     *    tuples actually exists and is the same for both tuples;
     *  - the file version number shall be equal to 1 in the newFile and newFileTuple;
     *  - the newPermissionTuple shall give all permission to the admin and not to some other user.
     *  - the file name in newFile, newFileTuple and newPermissionTuple shall be the same.
     * @param newFile the new file
     * @param newFileTuple the new file tuple
     * @param newPermissionTuple the new permission tuple giving the admin access to the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void addFile(@NotNull File newFile, @NotNull FileTuple newFileTuple, @NotNull PermissionTuple newPermissionTuple) throws DAOException {

        // === act as admin. This is because this class is for testing purposes ONLY and the following
        // functionalities should be implemented in the reference monitor
        actAsAdmin();

        // get tuple signer
        String userTokenThatSignedFileTuple = newFileTuple.getSignerOfThisTuple();
        String userTokenThatSignedPermissionTuple = newPermissionTuple.getSignerOfThisTuple();

        // log starting info

        App.logger.warn("[{}{}{} ", className, " (" + addFile + ")]: ", "user with token" + userTokenThatSignedFileTuple + " is adding a new file with name: " +
                        newFile.getName() + " along with the file tuple " + newFileTuple.toString() + " and " +
                        "permission tuple " + newPermissionTuple.toString());

        // code for operation outcome
        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // if the same user signed the two tuples
        if (userTokenThatSignedFileTuple.equals(userTokenThatSignedPermissionTuple)) {

            // get the public key of the user
            PublicKey userKey = getPublicSigningKeyOfUserByToken(userTokenThatSignedFileTuple);


            try (

                    // prepare the statement. We use "INSERT IGNORE" so that a duplicate key (fileName) would not
                    // throw an exception but rather it would set the returning count of affected rows to 0
                    PreparedStatement insertFileStatement = connection.prepareStatement(
                            "INSERT IGNORE INTO " + filesTable +
                                    " VALUES (?,?,?,?)")

            ) {

                // check that tuples' signatures are correct
                CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(newFileTuple, userKey);
                CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(newPermissionTuple, userKey);

                // check that file version numbers are correct
                if (newFile.getEncryptingKeyVersionNumber().equals(newFileTuple.getDecryptingKeyVersionNumber()) &&
                   newFileTuple.getDecryptingKeyVersionNumber().equals(1)) {

                    // check that the permission tuple gives RW permission to the admin and not to some other user
                    if (newPermissionTuple.getAssociatedPermission() == Permission.Read_and_Write &&
                        newPermissionTuple.getAssociatedElement().equals(App.admin)) {

                        // lastly, check that the file names are the same
                        if (newFile.getName().equals(newFileTuple.getAssociatedElement()) &&
                            newFile.getName().equals(newPermissionTuple.getAssociatedFile())) {

                            // set the arguments of the statements
                            insertFileStatement.setString(1, newFile.getName());
                            insertFileStatement.setString(2, newFile.getToken());
                            insertFileStatement.setInt(   3, newFile.getEncryptingKeyVersionNumber());
                            insertFileStatement.setString(4, CryptoACElementStatus.operational.getValue());

                            // execute the query
                            int affectedRowCountFile = insertFileStatement.executeUpdate();

                            // so the new entry was properly added
                            if (affectedRowCountFile == 1) {

                                // everything is fine. Add the tuples
                                addPermissionTuple(newPermissionTuple);
                                addFileTuple(newFileTuple);

                                // get the content of the file from the InputStream
                                InputStream is = newFile.getFileStream();

                                // save the file
                                FileUtil.saveFileOnFileSystem(
                                        uploadDirectoryDS.getAbsolutePath() + "/" + newFile.getName(), is, THROW_EXCEPTION);

                            }
                            // otherwise, the ID of the file is duplicated
                            else {

                                // set error code
                                returningCode = code_3;
                            }
                        }
                        // file names do not correspond
                        else {

                            // log error

                            App.logger.error("[{}{}{} ", className, " (" + addFile + ")]: ", "the file names are not the same across the tuples (" +
                                                                    newFile.getName() + ", " + newFileTuple.getAssociatedElement() +
                                                                    ", " + newPermissionTuple.getAssociatedFile() +  ")");

                            // set error code
                            returningCode = code_59;
                        }
                    }
                    // wrong permission or user in permission tuple
                    else {

                        // log error

                        App.logger.error("[{}{}{} ", className, " (" + addFile + ")]: ", "the permission tuple gives " +
                                                            newPermissionTuple.getAssociatedPermission().toString() + " to the user " +
                                                            newPermissionTuple.getAssociatedElement());

                        // set error code
                        returningCode = code_59;
                    }
                }
                // wrong file version numbers
                else {

                    // log error

                    App.logger.error("[{}{}{} ", className, " (" + addFile + ")]: ", "file version number is " +
                                                    newFile.getEncryptingKeyVersionNumber() + " and not 1");

                    // set error code
                    returningCode = code_59;
                }
            }
            // error while verifying signature
            catch (InvalidKeyException | NoSuchAlgorithmException e) {

                // log error

                App.logger.error("[{}{}{} ", className, " (" + addFile + ")]: ", "error while verifying the signature of the tuple (" + e.getMessage() + ")");

                // set error code
                returningCode = code_13;
                exceptionThrown = e;
            }
            // signature is invalid
            catch (SignatureException e) {

                // log error

                App.logger.error("[{}{}{} ", className, " (" + addFile + ")]: ", "signature of tuple is invalid (" + e.getMessage() + ")");

                // set error code
                returningCode = code_7;
                exceptionThrown = e;
            }
            // exception while saving file
            catch (IOException e) {

                // log error

                App.logger.error("[{}{}{} ", className, " (" + addFile + ")]: ", "exception while saving file (" + e.getMessage() + ")");

                // set error code
                returningCode = code_37;
                exceptionThrown = e;
            }
            // thrown by sql query
            catch (SQLException e) {

                // log error

                App.logger.error("[{}{}{} ", className, " (" + addFile + ")]: ", "exception while executing " +
                                    "INSERT query (" + e.getMessage() + ")");

                // set error code
                returningCode = code_58;
                exceptionThrown = e;
            }
        }
        else {

            // log error

            App.logger.error("[{}{}{} ", className, " (" + addFile + ")]: ", "the two tuples were not signed by the same user");

            // set error code
            returningCode = code_7;
        }

        // go back to act as the user
        actAsUser();

        // log and in case throw exception
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

        // === act as admin. This is because this class is for testing purposes ONLY and the following
        // functionalities should be implemented in the reference monitor
        actAsAdmin();

        // log starting info

        App.logger.warn("[{}{}{} ", className, " (" + deleteFile + ")]: ", "admin is deleting file " + fileName);

        // code for operation outcome
        OperationOutcomeCode returningCode;
        Exception exceptionThrown = null;

        // delete the file tuple
        deleteFileTupleByFileName(fileName);

        // the linked map with the parameters for the WHERE clauses
        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(fileNameColumn, fileName);

        // delete the file
        try (

                // prepare the statement
                PreparedStatement deleteFileStatement = createDeleteStatement(filesTable, whereParameters, null)
        ) {

            // execute the query
            int rowAffected = deleteFileStatement.executeUpdate();

            // if the query was ok
            if (rowAffected > 0) {

                // delete the file from the file system
                FileUtil.deleteFileFromFileSystem(new java.io.File(uploadDirectoryDS.getAbsolutePath() +
                        "/" + fileName));

                // set code to success
                returningCode = code_0;
            }
            // else we did not delete any file
            else {

                // set code to proper error
                returningCode = code_6;
            }

        }
        // thrown by delete file from file system
        catch (IOException e) {

            // log error

            App.logger.error("[{}{}{} ", className, " (" + deleteFile + ")]: ", "exception while deleting file (" + e.getMessage() + ")");

            // set error code
            returningCode = code_38;
            exceptionThrown = e;
        }
        // thrown by sql query
        catch (SQLException e) {

            // log error

            App.logger.error("[{}{}{} ", className, " (" + deleteFile + ")]: ", "exception while executing DELETE query (" + e.getMessage() + ")");

            // set error code
            returningCode = code_58;
            exceptionThrown = e;
        }

        // go back to act as the user
        actAsUser();

        // log and in case throw exception
        logAtEndOfMethod(returningCode, deleteFile, exceptionThrown);
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

        // === act as admin. This is because this class is for testing purposes ONLY and the following
        // controls should be implemented in the reference monitor
        actAsAdmin();

        // get tuple signer (token) and file name
        String roleTokenThatSignedFileTuple = updatedFileTuple.getSignerOfThisTuple();
        String fileName = updatedFile.getName();

        // log starting info

        App.logger.warn("[{}{}{} ", className, " (" + updateFile + ")]: ", "role with token" + roleTokenThatSignedFileTuple + " is updating file with name: " +
                        updatedFile.getName() + " along with the file tuple " + updatedFileTuple.toString());

        // code for operation outcome
        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        // get the public key of the role
        PublicKey roleKey = getPublicSigningKeyOfRoleByToken(roleTokenThatSignedFileTuple);

        try (

                // TODO remember that the FileTuple table is different now

                // prepare the statement to update the file to the table
                PreparedStatement updateFileTupleStatement = connection.prepareStatement(
                        "UPDATE " + fileTuplesTable + " SET " +
                                elementTokenColumn + "=?, " +
                                elementSignerColumn + "=?, " +
                                decryptFileVersionNumberColumn + "=?, " +
                                signatureColumn + "=? " +
                                " WHERE " + fileNameColumn + "=?")
            ) {

            // check that tuple' signatures is correct
            CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(updatedFileTuple, roleKey);

            // get the latest file version number from the files table
            int latestFileVersionNumber = getFileEncryptingVersionNumberByToken(updatedFile.getToken());

            // if the version numbers match
            if (latestFileVersionNumber == updatedFileTuple.getDecryptingKeyVersionNumber()) {

                // get the role permission tuples
                HashSet<PermissionTuple> rolePermissionTuples =
                        getPermissionTuplesByRoleTokenAndFileName(roleTokenThatSignedFileTuple, fileName, 0, -1);

                // did we find the proper permission tuple giving the role the permission to write on the file?
                boolean findRolePermissionTuple = false;

                // for each tuple
                for (PermissionTuple permissionTuple : rolePermissionTuples) {

                    // if it does give READ AND WRITE permissions on the file
                    if (permissionTuple.getAssociatedPermission().toString().
                            equals(Permission.Read_and_Write.toString())) {

                        // if the version number is the right one
                        if (permissionTuple.getEncryptingKeyVersionNumber() == latestFileVersionNumber) {

                            // get signer key
                            PublicKey signerKey =
                                    getPublicSigningKeyOfUserByToken(permissionTuple.getSignerOfThisTuple());

                            // check tuple signature
                            CryptoUtil.getCryptoUtil().verifyCryptoACTupleSignature(
                                    permissionTuple, signerKey);

                            // if we get here, we found that the role has write permission
                            findRolePermissionTuple = true;

                            // break the loop
                            break;
                        }
                    }
                }

                // if every check succeeded
                if (findRolePermissionTuple) {

                    // update the file tuple

                    // set update arguments
                    updateFileTupleStatement.setString( 1, roleTokenThatSignedFileTuple);
                    updateFileTupleStatement.setBoolean(2, false);
                    updateFileTupleStatement.setInt(    3, latestFileVersionNumber);
                    updateFileTupleStatement.setString( 4, Base64.getEncoder().
                            encodeToString(updatedFileTuple.getSignature()));
                    updateFileTupleStatement.setString( 5, fileName);

                    // update the file tuple to the database. if everything went well
                    if (updateFileTupleStatement.executeUpdate() == 1) {

                        // get the content of the file from the InputStream
                        InputStream is = updatedFile.getFileStream();

                        // save the file
                        FileUtil.saveFileOnFileSystem(
                                uploadDirectoryDS.getAbsolutePath() + "/" + updatedFile.getName(), is, OVERWRITE);
                    }
                }
                else {

                    // log error

                    App.logger.error("[{}{}{} ", className, " (" + updateFile + ")]: ", "role does not have permission on the file");

                    // set error code
                    returningCode = code_15;
                }
            }
            // wrong file version numbers
            else {

                // log error

                App.logger.error("[{}{}{} ", className, " (" + updateFile + ")]: ", "file version number is " +
                                            updatedFileTuple.getDecryptingKeyVersionNumber() +
                                            " and not " + latestFileVersionNumber);

                // set error code
                returningCode = code_59;
            }
        }
        // error while verifying signature
        catch (InvalidKeyException | NoSuchAlgorithmException e) {

            // log error

            App.logger.error("[{}{}{} ", className, " (" + updateFile + ")]: ", "error while verifying the signature of the tuple (" + e.getMessage() + ")");

            // set error code
            returningCode = code_13;
            exceptionThrown = e;
        }
        // signature is invalid
        catch (SignatureException e) {

            // log error

            App.logger.error("[{}{}{} ", className, " (" + updateFile + ")]: ", "signature of tuple is invalid (" + e.getMessage() + ")");

            // set error code
            returningCode = code_7;
            exceptionThrown = e;
        }
        // exception while saving file
        catch (IOException e) {

            // log error

            App.logger.error("[{}{}{} ", className, " (" + updateFile + ")]: ", "exception while saving file (" + e.getMessage() + ")");

            // set error code
            returningCode = code_37;
            exceptionThrown = e;
        }
        catch (SQLException e) {

            // log error

            App.logger.error("[{}{}{} ", className, " (" + updateFile + ")]: ", "exception while updating the file tuple in the database (" + e.getMessage() + ")");

            // set error code
            returningCode = code_58;
            exceptionThrown = e;
        }

        // go back to act as the user
        actAsUser();

        // log and in case throw exception
        logAtEndOfMethod(returningCode, updateFile, exceptionThrown);
    }

    /**
     * This method downloads the (latest version of) the requested file ("read" operation)
     * @param fileName the name of the file
     * @return the encrypted file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public InputStream downloadFile(String fileName) throws DAOException {

        // === act as admin. This is because this class is for testing purposes ONLY and the following
        // functionalities should be implemented in the reference monitor
        actAsAdmin();

        // log starting info

        App.logger.warn("[{}{}{} ", className, " (" + downloadFile + ")]: ", "downloading file" + fileName);

        // code for operation outcome
        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        InputStream fileToReturn = null;

        try {
            fileToReturn = new FileInputStream(
                    new java.io.File(uploadDirectoryDS.getAbsolutePath() + "/" + fileName));
        }
        catch (FileNotFoundException e) {

            // log error

            App.logger.error("[{}{}{} ", className, " (" + updateFile + ")]: ", "the file was not found (" + e.getMessage() + ")");

            // set error code
            returningCode = code_6;
            exceptionThrown = e;
        }

        // go back to act as the user
        actAsUser();

        // log and in case throw exception
        logAtEndOfMethod(returningCode, downloadFile, exceptionThrown);

        // return the file
        return fileToReturn;
    }


    /**
     * This utility function changes the connection to the mysql database so that
     * it is the admin that performs the operations on the database
     */
    private void actAsAdmin() {

        // save old connection
        userConnection = connection;


        // == from here on, act as the admin
        try {

            // we switch connections only of the user is not the admin already
            if (!connection.getMetaData().getUserName().split("@")[0].equals(App.admin)) {
                Properties adminMySQLProperties = new Properties();
                adminMySQLProperties.setProperty("useSSL", "true");
                adminMySQLProperties.setProperty("user", App.admin);
                adminMySQLProperties.setProperty("password", "password");
                connection = DriverManager.getConnection(jDBUrl, adminMySQLProperties);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /**
     * This utility function changes the connection to the mysql database so
     * to revert to the connection of the user
     */
    private void actAsUser () {
        connection = userConnection;
    }

    /**
     * This utility function retrieves the permission tuples matching the given role token and file name from the database
     * @param roleToken token of the role that has to match in the tuple
     * @param fileName name of the file that has to match in the tuple
     * @param offset the offset in number of rows to start selecting from. If the limit parameter is
     *               negative, the offset parameter will be ignored
     * @param limit limit the number of row to return (pagination). If negative, no limit will be applied and the
     *              limit will be the default "sql_select_limt" system variable in the MySQL database (default is
     *              the maximum number of rows that the server permits per table, typically 2^31-1 or 2^64-1
     * @return an hash set filled with the tuples, if any. Otherwise, an empty set. Note that there can be multiple
     *         permission tuples for the same combination file-role (read referenced paper for details)
     * @throws DAOException if something went wrong in the process, throw a CloudException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    private HashSet<PermissionTuple> getPermissionTuplesByRoleTokenAndFileName (String roleToken, String fileName, int offset, int limit) throws DAOException {

        // the linked map with the parameters for the WHERE clauses
        LinkedHashMap<String, Object> whereParameters = new LinkedHashMap<>();
        whereParameters.put(roleTokenColumn, roleToken);
        whereParameters.put(fileNameColumn, fileName);

        // return the tuples
        return queryForPermissionTuples(permissionTuplesTable, offset, limit, whereParameters, null);
    }
}