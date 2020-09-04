package eu.fbk.st.cryptoac.cloud.aws;

import java.io.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.security.*;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.X509EncodedKeySpec;
import java.sql.*;
import java.util.*;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.services.s3.AmazonS3;

import eu.fbk.st.cryptoac.tuple.Permission;
import eu.fbk.st.cryptoac.tuple.FileTuple;
import eu.fbk.st.cryptoac.tuple.PermissionTuple;

import static eu.fbk.st.cryptoac.cloud.aws.InputToCryptoACLambda.*;
import static eu.fbk.st.cryptoac.enumerators.OperationOutcomeCode.*;


/**
 * It is programmed to validate files uploaded in the temporary bucket by users
 * and to move them in the S3 download bucket. This routine handles the **AddFile**
 * and **Write** operations, by checking in both cases the digital signatures of
 * the tuples and the correctness of the other parameters
 * (e.g. File version number is 1 for new files, permission is granted to the admin, ...)
 */
public class CryptoACLambda implements RequestHandler<InputToCryptoACLambda, OutputFromCryptoACLambda> {


    // Note: parameters are (and should be) hard-coded. Otherwise, it means that they
    // come from the client and could be made up (e.g. pointing to a fake database with fake data)
    // Then, since the code will run only in AWS, not need to worry about reverse engineering (by others, not AWS)

    String signAlgorithm = "SHA512withRSA";
    String pkiAlgorithm = "RSA";
    String s3FinalBucket = "stefano-cryptoac-files-download";
    String s3TemporaryBucket = "stefano-cryptoac-files-upload";
    String jdbcUrl = "jdbc:mysql://stefano-cryptoac-rds.cqfjkffmwvek.eu-central-1.rds.amazonaws.com:3306";
    String rdsUsername = "admin";
    String rdsPassword = "W84uxsU50yYv/hjAJf/ED/JE1jhPMG2lzx69npfM";
    String s3Region = "eu-central-1";
    String adminId = "admin";

    // database tables
    String databaseName = "databaseCryptoAC";
    String usersTable = databaseName + ".users";
    String rolesTable = databaseName + ".roles";
    String filesTable = databaseName + ".files";
    String permissionTuplesTable = databaseName + ".permissionTuples";
    String fileTuplesTable = databaseName + ".fileTuples";

    // database columns
    String userTokenColumn = "userToken";
    String roleTokenColumn = "roleToken";
    String publicSigningKeyColumn = "publicSigningKey";
    String roleVersionNumberColumn = "roleVersionNumber";
    String permissionTupleFileVersionNumberColumn = "symmetricFileKeyVersionNumber";
    String encryptFileVersionNumberColumn = "encryptFileVersionNumber";
    String decryptFileVersionNumberColumn = "decryptFileVersionNumber";
    String encryptedSymmetricFileKeyColumn = "encryptedSymmetricFileKey";
    String signatureColumn = "signature";
    String permissionColumn = "permission";
    String isSignerUserColumn = "isSignerUserFlag";
    String roleNameColumn = "roleName";
    String fileNameColumn = "fileName";

    
    /**
     * This Lambda is invoked by the client whenever he uploads a file (remember, clients can
     * upload file only in the temporary bucket. Each user can put objects in the temporary file
     * Then the Lambda should validate the file and related signature
     * and then move it to the final bucket, where it will (or at least should be) accessible
     * by other users (of course only when given permission)
     * @param input the lambda input, with the file and related tuples
     * @param context execution context
     * @return a String to indicate the outcome of the operation
     */
    @Override
    public OutputFromCryptoACLambda handleRequest(InputToCryptoACLambda input, Context context) {

        // step to distinguish who threw the exception in the cryptographic operations
        String whereWereWe = "beginning";

        // the file tuple
        FileTuple fileTuple = input.getFileTuple();
        
        // the permission tuple
        PermissionTuple permissionTuple = input.getPermissionTuple();
        
        // the value to return
        OutputFromCryptoACLambda returningValue = null;

        // object to interact with S3
        AmazonS3 amazonS3 = null;

        // get the file name, token, version number
        String fileName = fileTuple.getAssociatedElement();
        String fileToken = fileTuple.getFileToken();
        String signerOfTheTuple = fileTuple.getSignerOfThisTuple();
        Integer decryptFileVersionNumber = fileTuple.getDecryptFileVersionNumber();

        // wrap in try-with-resources
        try  (

                // create database connection
                Connection connection = DriverManager.getConnection(jdbcUrl, rdsUsername, rdsPassword);

                // prepare the statement to get the permission tuples of the role that is writing the file
                PreparedStatement insertPermissionTupleStatement = connection.prepareStatement(
                        "INSERT IGNORE INTO " + permissionTuplesTable +
                                " VALUES (?,?,?,?,?,?,?,?,?,?)");

                // prepare the statement to add the file to the table
                PreparedStatement insertFileTupleStatement = connection.prepareStatement(
                        "INSERT IGNORE INTO " + fileTuplesTable +
                                " VALUES (?,?,?,?,?,?,?)");

                // prepare the statement to update the file to the table
                PreparedStatement updateFileTupleStatement = connection.prepareStatement(
                        "UPDATE " + fileTuplesTable + " SET " +
                                roleTokenColumn + "=?, " +
                                isSignerUserColumn + "=?, " +
                                decryptFileVersionNumberColumn + "=?, " +
                                signatureColumn + "=? " +
                                " WHERE " + fileNameColumn + "=?");

                // prepare the statement to add the file to the table
                PreparedStatement insertFileStatement = connection.prepareStatement(
                        "INSERT IGNORE INTO " + filesTable +
                                " VALUES (?,?,?)");

                // prepare the statement to get the current encrypt file version number
                PreparedStatement getFileVersionNumberStatement = connection.prepareStatement(
                        "SELECT " + encryptFileVersionNumberColumn +
                                " FROM " + filesTable +
                                " WHERE " + fileNameColumn + "=?");

                // prepare the statement to get the permission tuples of the role that is writing the file
                PreparedStatement getPermissionTuplesStatement = connection.prepareStatement(
                        "SELECT *" +
                                " FROM " + permissionTuplesTable +
                                " WHERE " + roleNameColumn + "=? AND " + fileNameColumn + "=?");

                // prepare the statement to get the name of the role from the token of the role
                PreparedStatement getRoleNameFromToken = connection.prepareStatement(
                        "SELECT " + roleNameColumn +
                                " FROM " + rolesTable +
                                " WHERE " + roleTokenColumn + "=?")

        )  {

            insertFileTupleStatement.setString( 1, fileName);                                   // the related file is the new one
            insertFileTupleStatement.setString( 2, fileToken);                                  // the token of the file
            insertFileTupleStatement.setString( 3, signerOfTheTuple);                           // the token of the user that signed the tuples
            insertFileTupleStatement.setString( 4, null);                                    // the tuples were signed by a user, not by a role
            insertFileTupleStatement.setBoolean(5, true);                                    // the tuples were signed by a user, not by a role
            insertFileTupleStatement.setInt(    6, 1);                                       // the file number version, that should be 1 by default
            insertFileTupleStatement.setString( 7, Base64.getEncoder().encodeToString(
                    fileTuple.getSignature()));                                                     // the signature


            // set autocommit to false
            connection.setAutoCommit(false);

            // build the s3 client to move the file from the temporary to the final bucket in the cloud
            amazonS3 = AmazonS3ClientBuilder.standard().withRegion(s3Region).build();

            // if the buckets exist
            if(amazonS3.doesBucketExistV2(s3TemporaryBucket) && amazonS3.doesBucketExistV2(s3FinalBucket)) {

                // the list of file keys in the final bucket. This is to be sure to
                // distinguish between an AddFile and a WriteFile operation
                HashSet<String> filesInCloud = getAllFiles(amazonS3, s3FinalBucket);

                // is the file already present in the bucket
                boolean isFileAlreadyPresent = filesInCloud.contains(fileName);




                // ========== STEP 0 | check whether this is a ADD or a WRITE file operation ==========




                // if the file is not present in the cloud AND the operation is AddFile
                // we are going to move the file from the upload S3 bucket to the download S3 bucket and
                // to add the tuples and the file entry to the database
                if (!isFileAlreadyPresent && input.getLambdaOperation().equals(ADD)) {

                    // set arguments of the statement
                    // Note: role version number set to 1 is fine IFF the admin's role is never updated
                    insertPermissionTupleStatement.setString(1, adminId);                               // the related role is the admin
                    insertPermissionTupleStatement.setString(2, fileName);                              // the related file is the new one
                    insertPermissionTupleStatement.setInt(   3, 1);                                 // the file number version, that should be 1 by default
                    insertPermissionTupleStatement.setString(4, adminId);                               // the token of the role assigned to the file (the admin)
                    insertPermissionTupleStatement.setString(5, fileToken);                             // the token of the file
                    insertPermissionTupleStatement.setInt(   6, 1);                                 // the admin's role version number, that should be 1 by default
                    insertPermissionTupleStatement.setString(7, Base64.getEncoder().encodeToString(
                            permissionTuple.getEncryptedSymmetricFileKey()));                               // the encrypted symmetric key
                    insertPermissionTupleStatement.setString(8, Permission.Read_and_Write.toString());   // the permission to be assigned is Read_and_Write
                    insertPermissionTupleStatement.setString(9, permissionTuple.getSignerOfThisTuple()); // the signer (the token of the user invoking the Lambda)
                    insertPermissionTupleStatement.setString(10, Base64.getEncoder().encodeToString(
                            permissionTuple.getSignature()));                                               // the signature

                    insertFileStatement.setString(1, fileName);                                           // the related file name
                    insertFileStatement.setString(2, fileToken);                                          // the related file token
                    insertFileStatement.setInt(3, 1);                                              // file number version is 1 by default

                    // get the admin's role version number
                    int roleVersionNumber = permissionTuple.getRoleVersionNumber();
                    int encryptFileVersionNumber = permissionTuple.getSymmetricFileKeyVersionNumber();

                    // ========== FIRST CHECK ========== file version numbers to be 1
                    if (decryptFileVersionNumber == 1 && encryptFileVersionNumber == 1) {

                        // ========== SECOND CHECK ========== admin's role version number to be 1
                        if (roleVersionNumber == 1) {

                            // ========== THIRD CHECK ========== files names correspond across tuples
                            if (fileName.equals(fileTuple.getAssociatedElement()) &&
                                fileName.equals(permissionTuple.getAssociatedFile())) {

                                // ========== FOURTH CHECK ========== files tokens correspond across tuples
                                if (fileTuple.getFileToken().equals(permissionTuple.getFileToken())) {

                                    // ========== FIFTH CHECK ========== tuples signer should be the same
                                    if (signerOfTheTuple.equals(permissionTuple.getSignerOfThisTuple())) {

                                        // ========== SIXTH CHECK ========== permission is RW
                                        if (permissionTuple.getAssociatedPermission().toString().
                                                equals(Permission.Read_and_Write.toString())) {

                                            // ========== SEVENTH CHECK ========== admin is the role to which permission is granted
                                            if (adminId.equals(permissionTuple.getRoleToken()) &&
                                                adminId.equals(permissionTuple.getAssociatedElement())) {

                                                // ========== EIGHT CHECK ========== the tuple was signed by a user
                                                if (fileTuple.getIsSignerAUser()) {

                                                    // ========== FINAL CHECK ========== FileTuple and PermissionTuple signature
                                                    // the public key of the role to check the signature
                                                    whereWereWe = "getPublicKeyFromDatabase";
                                                    PublicKey publicKeyOfUser = getPublicSigningKeyFromDatabase(
                                                            connection, signerOfTheTuple, usersTable);

                                                    // if we successfully got the key of the user
                                                    if (publicKeyOfUser != null) {

                                                        // if the signatures are valid
                                                        whereWereWe = "verifyCryptoACTupleTupleSignature";
                                                        if (verifyCryptoACTupleTupleSignature(fileTuple.getIdentifyingFieldsForSignature().
                                                                getBytes(), publicKeyOfUser, fileTuple.getSignature())) {

                                                            if (verifyCryptoACTupleTupleSignature(
                                                                    permissionTuple.getIdentifyingFieldsForSignature().getBytes(),
                                                                    publicKeyOfUser, permissionTuple.getSignature())) {

                                                                // ========== Everything is Ok! ==========

                                                                // if the file was successfully inserted in the database
                                                                if (insertFileStatement.executeUpdate() == 1) {

                                                                    // add the permission tuple to the database. if everything went well
                                                                    if (insertPermissionTupleStatement.executeUpdate() == 1) {

                                                                        // add the file tuple to the database. if everything went well
                                                                        if (insertFileTupleStatement.executeUpdate() == 1) {

                                                                            // copy the object into the temporary bucket
                                                                            amazonS3.copyObject(s3TemporaryBucket, fileName, s3FinalBucket, fileName);

                                                                            // once done, delete the file in the temporary bucket
                                                                            amazonS3.deleteObject(s3TemporaryBucket, fileName);

                                                                            // set proper returning value for the string
                                                                            returningValue = new OutputFromCryptoACLambda(code_0,
                                                                                    code_0.toString());
                                                                        }
                                                                        // else, the file tuple is duplicated
                                                                        else {

                                                                            // set proper error message
                                                                            returningValue = new OutputFromCryptoACLambda(code_25,
                                                                                    "file tuple duplicated");
                                                                        }
                                                                    }
                                                                    // else, the permission tuple is duplicated
                                                                    else {

                                                                        // set proper error message
                                                                        returningValue = new OutputFromCryptoACLambda(code_24,
                                                                                "permission tuple duplicated");
                                                                    }
                                                                }
                                                                // the file ID is duplicated
                                                                else {

                                                                    // set proper error message
                                                                    returningValue = new OutputFromCryptoACLambda(code_3,
                                                                            "file ID duplicated");
                                                                }
                                                            }
                                                            // if the signature of the permission tuple is not valid
                                                            else {

                                                                // set proper error message
                                                                returningValue = new OutputFromCryptoACLambda(code_7,
                                                                        "the signature of the given permission tuple is not valid");
                                                            }
                                                        }
                                                        // if the signature of the file tuple is not valid
                                                        else {

                                                            // set proper error message
                                                            returningValue = new OutputFromCryptoACLambda(code_7,
                                                                    "the signature of the given file tuple is not valid");
                                                        }
                                                    }
                                                    // we did not find the tuple of the user that signed the tuples
                                                    else {

                                                        // set proper error message
                                                        returningValue = new OutputFromCryptoACLambda(code_10,
                                                                "did not found key of the signer user: " + signerOfTheTuple);
                                                    }
                                                }
                                                // the file tuple is said NOT to be signed by a user
                                                else {

                                                    // set proper error message
                                                    returningValue = new OutputFromCryptoACLambda(code_59,
                                                            "the file tuple should be signed by a user");
                                                }
                                            }
                                            // the role to which permission is granted is not the admin
                                            else {

                                                // set proper error message
                                                returningValue = new OutputFromCryptoACLambda(code_59,
                                                        "the permission should be granted to the admin");
                                            }
                                        }
                                        // the permission is not RW
                                        else {

                                            // set proper error message
                                            returningValue = new OutputFromCryptoACLambda(code_59,
                                                    "the permission should be Read and Write, not something else");
                                        }
                                    }
                                    // two different entities signed the tuples
                                    else {

                                        // set proper error message
                                        returningValue = new OutputFromCryptoACLambda(code_59,
                                                "two different users signed the tuples: " +
                                                        signerOfTheTuple + " and " + permissionTuple.getSignerOfThisTuple());
                                    }
                                }
                                // the file tokens are not properly set across the tuples
                                else {

                                    // set proper error message
                                    returningValue = new OutputFromCryptoACLambda(code_59,
                                            "file tokens across tuples do not correspond. Given" +
                                                    " file tokens (file tuple, permission tuple) are: " +
                                                    fileTuple.getFileToken() + ", " + permissionTuple.getFileToken());
                                }
                            }
                            // the file names are not properly set across the tuples
                            else {

                                // set proper error message
                                returningValue = new OutputFromCryptoACLambda(code_59,
                                        "file names across tuples do not correspond. Given" +
                                                " file names (file, file tuple, permission tuple) are: " +
                                                fileName + ", " + fileTuple.getAssociatedElement() + ", " +
                                                permissionTuple.getAssociatedFile());
                            }
                        }
                        // the role version number is not correct
                        else {

                            // set proper error message
                            returningValue = new OutputFromCryptoACLambda(code_17,
                                    "role version number is not consistent. Given is " +
                                            roleVersionNumber + ", actual should be 1");
                        }
                    }
                    // the file version number is not correct
                    else {

                        // set proper error message
                        returningValue = new OutputFromCryptoACLambda(code_17,
                                "file version numbers is not consistent. Given is (" +
                                        decryptFileVersionNumber + ", " + encryptFileVersionNumber +
                                        "), actual should be both 1");
                    }
                }












                // if the file is already present in the cloud AND the operation is WriteFile
                // we are going to move the file from the upload S3 bucket to the download S3 bucket and
                // to update the file tuple and the file entry to the database
                else if (isFileAlreadyPresent && input.getLambdaOperation().equals(WRITE)) {

                    // set argument and execute the statement
                    getFileVersionNumberStatement.setString(1, fileName);
                    ResultSet fileVersionNumberQueryResult = getFileVersionNumberStatement.executeQuery();

                    // ========== FIRST CHECK ========== the tuple was signed by a role
                    if (!fileTuple.getIsSignerAUser()) {

                        // ========== SECOND CHECK ========== check that the file exits in the database
                        if (fileVersionNumberQueryResult.isBeforeFirst()) {

                            // move to the next (and only) row
                            fileVersionNumberQueryResult.next();

                            // get the current file version number (in the database, not in the tuple)
                            int actualFileVersionNumber = fileVersionNumberQueryResult.getInt(encryptFileVersionNumberColumn);

                            // ========== THIRD CHECK ========== check that the new decrypt file number is the latest encrypt file number
                            // (i.e., the file was encrypted with the latest key)
                            if (actualFileVersionNumber == decryptFileVersionNumber) {

                                // ========== FOURTH CHECK ========== FileTuple signature
                                // the public key of the role to check the signature
                                whereWereWe = "getPublicKeyFromDatabase";
                                PublicKey publicKeyOfRole = getPublicSigningKeyFromDatabase(connection, signerOfTheTuple, rolesTable);

                                // if the got the key of the role
                                if (publicKeyOfRole != null) {

                                    // if the signature is valid
                                    whereWereWe = "verifyCryptoACTupleTupleSignature";
                                    if (verifyCryptoACTupleTupleSignature(fileTuple.getIdentifyingFieldsForSignature().
                                            getBytes(), publicKeyOfRole, fileTuple.getSignature())) {

                                        // ========== FIFTH CHECK ========== does the role have WRITE permission over the file?
                                        // retrieve the name of the role
                                        getRoleNameFromToken.setString(1, signerOfTheTuple);

                                        ResultSet rs = getRoleNameFromToken.executeQuery();

                                        // if we successfully got the ID of the role
                                        if (rs.next()) {

                                            // set arguments
                                            getPermissionTuplesStatement.setString(1, rs.getString(roleNameColumn));
                                            getPermissionTuplesStatement.setString(2, fileName);

                                            // execute the query
                                            ResultSet getPermissionTuplesQueryResult = getPermissionTuplesStatement.executeQuery();

                                            // get the result
                                            while (getPermissionTuplesQueryResult.next()) {

                                                // the byte to compute the signature on
                                                byte[] dataToComputePermissionTupleSignatureOn =
                                                        (getPermissionTuplesQueryResult.getString(roleNameColumn) +
                                                                getPermissionTuplesQueryResult.getString(fileNameColumn) +
                                                                getPermissionTuplesQueryResult.getString(permissionColumn) +
                                                                getPermissionTuplesQueryResult.getInt(permissionTupleFileVersionNumberColumn) +
                                                                getPermissionTuplesQueryResult.getInt(roleVersionNumberColumn) +
                                                                (Arrays.toString(Base64.getDecoder().decode(
                                                                        getPermissionTuplesQueryResult.getBytes(
                                                                                encryptedSymmetricFileKeyColumn))))).getBytes();

                                                // if the permission of the tuple is Read_and_Write
                                                if (Permission.Read_and_Write.toString().equals(
                                                        getPermissionTuplesQueryResult.getString(permissionColumn))) {

                                                    // get signer key
                                                    whereWereWe = "getPublicKeyFromDatabase";
                                                    PublicKey publicKeyOfUser = getPublicSigningKeyFromDatabase(connection,
                                                            getPermissionTuplesQueryResult.getString(
                                                                    userTokenColumn), usersTable);

                                                    // if we got the key of the user
                                                    if (publicKeyOfUser != null) {

                                                        // if the signature is valid
                                                        if (verifyCryptoACTupleTupleSignature(
                                                                dataToComputePermissionTupleSignatureOn, publicKeyOfUser,
                                                                Base64.getDecoder().decode(
                                                                        getPermissionTuplesQueryResult.getString(signatureColumn)))) {

                                                            // if this is the newest version
                                                            if (getPermissionTuplesQueryResult.
                                                                    getInt(permissionTupleFileVersionNumberColumn) == actualFileVersionNumber) {

                                                                // Yes, the role has write permissions!

                                                                // set update arguments
                                                                updateFileTupleStatement.setString( 1, signerOfTheTuple);
                                                                updateFileTupleStatement.setBoolean(2, false);
                                                                updateFileTupleStatement.setInt(    3, decryptFileVersionNumber);
                                                                updateFileTupleStatement.setString( 4, Base64.getEncoder().
                                                                        encodeToString(fileTuple.getSignature()));
                                                                updateFileTupleStatement.setString( 5, fileName);

                                                                // update the file tuple to the database. if everything went well
                                                                if (updateFileTupleStatement.executeUpdate() == 1) {

                                                                    // copy the object into the temporary bucket
                                                                    amazonS3.copyObject(s3TemporaryBucket, fileName, s3FinalBucket, fileName);

                                                                    // once done, delete the file in the temporary bucket
                                                                    amazonS3.deleteObject(s3TemporaryBucket, fileName);

                                                                    // set proper returning value for the string
                                                                    returningValue = new OutputFromCryptoACLambda(code_0,
                                                                            " file " + fileName + " was" +
                                                                                    " successfully moved to the final folder (WriteFile operation)");

                                                                }
                                                                // else, the file tuple is duplicated
                                                                else {

                                                                    // set proper error message
                                                                    returningValue = new OutputFromCryptoACLambda(code_25,
                                                                            "file tuple duplicated");
                                                                }

                                                                // break the while loop
                                                                break;
                                                            }
                                                        }
                                                        // if the signature is not valid
                                                        else {

                                                            // set proper error message
                                                            returningValue = new OutputFromCryptoACLambda(code_7,
                                                                    "signature of a permission tuple in the DB is not valid:" +
                                                                            ", role is " +
                                                                            getPermissionTuplesQueryResult.getString(roleNameColumn) +
                                                                            ", file is " +
                                                                            getPermissionTuplesQueryResult.getString(fileNameColumn) +
                                                                            ", permission is " +
                                                                            getPermissionTuplesQueryResult.getString(permissionColumn) +
                                                                            ", role version number is " +
                                                                            getPermissionTuplesQueryResult.getString(roleVersionNumberColumn) +
                                                                            ", file version number is " +
                                                                            getPermissionTuplesQueryResult.getString(permissionTupleFileVersionNumberColumn) +
                                                                            ", Signer is " +
                                                                            getPermissionTuplesQueryResult.getString(userTokenColumn));
                                                        }
                                                    }
                                                    // did not find the key of the user
                                                    else {

                                                        // set proper error message
                                                        returningValue = new OutputFromCryptoACLambda(code_10,
                                                                "did not found key of signer user: " +
                                                                        getPermissionTuplesQueryResult.getString(userTokenColumn));
                                                    }
                                                }
                                            }
                                            // if nothing happened before, it means that...
                                            if (returningValue == null) {

                                                // ... the role does not have access to the file
                                                returningValue = new OutputFromCryptoACLambda(code_15,
                                                        "user assumed role " + signerOfTheTuple +
                                                                " that does not have access to the file " + fileName);
                                            }
                                        }
                                        // the signer does not exist
                                        else {

                                            // set proper error message
                                            returningValue = new OutputFromCryptoACLambda(code_10,
                                                    "role with token " + signerOfTheTuple + " does not exist");
                                        }
                                    }
                                    // if the signature is not valid
                                    else {

                                        // set proper error message
                                        returningValue = new OutputFromCryptoACLambda(code_7,
                                                "signature of given file tuple is not valid");
                                    }
                                }
                                // did not find the key of the role
                                else {

                                    // set proper error message
                                    returningValue = new OutputFromCryptoACLambda(code_10,
                                            "did not found key of signer role: " + signerOfTheTuple);
                                }
                            }
                            // the version number is not correct
                            else {

                                // set proper error message
                                returningValue = new OutputFromCryptoACLambda(code_17,
                                        "file version numbers do not correspond. Given is " +
                                                decryptFileVersionNumber + ", actual is " + actualFileVersionNumber);
                            }
                        }
                        // there are no entries in the table
                        else {

                            // set proper error message
                            returningValue = new OutputFromCryptoACLambda(code_6,
                                    "even though the file is present in the cloud, there" +
                                            " is not related entry in the database");
                        }
                    }
                    // the file tuple is said NOT to be signed by a role
                    else {

                        // set proper error message
                        returningValue = new OutputFromCryptoACLambda(code_59,
                                "the file tuple should be signed by a role");
                    }
                }
                // the operation was set wrong
                else {

                    if (isFileAlreadyPresent && input.getLambdaOperation().equals(ADD)) {

                        // set proper error message
                        returningValue = new OutputFromCryptoACLambda(code_3,
                                "cannot add file: the file " + fileName + " already " +
                                        "exists in the bucket " + s3FinalBucket);
                    } else if (!isFileAlreadyPresent && input.getLambdaOperation().equals(WRITE)) {

                        // set proper error message
                        returningValue = new OutputFromCryptoACLambda(code_6,
                                "cannot write file: the file " + fileName + " does not " +
                                        "exist in the bucket " + s3FinalBucket);
                    } else {

                        // set proper error message
                        returningValue = new OutputFromCryptoACLambda(code_boh,
                                "operation " + input.getLambdaOperation() + " for file " +
                                        fileName + " is inconsistent in bucket " + s3FinalBucket);
                    }
                }
                // if everything went well
                if (returningValue.getReturningCode() == code_0) {

                    // commit
                    connection.commit();
                }
                // otherwise
                else {

                    // rollback
                    connection.rollback();
                }

            }
            // one of the buckets does not exist
            else {

                // set proper error message
                returningValue = new OutputFromCryptoACLambda(code_42,
                        "either the temporary (" + s3TemporaryBucket +
                                ") or the final bucket (" + s3FinalBucket + ") does not exists");
            }

        }
        catch (SQLException e) {

            returningValue = new OutputFromCryptoACLambda(code_41,
                    getStringFromException(e));
        }
        // cryptographic related exceptions
        catch (NoSuchAlgorithmException | SignatureException | InvalidKeyException | InvalidKeySpecException e) {

            // set proper error message
            switch (whereWereWe) {

                case "getPublicKeyFromDatabase":
                    returningValue = new OutputFromCryptoACLambda(code_18,
                            getStringFromException(e));
                    break;
                case "verifyCryptoACTupleTupleSignature":
                    returningValue = new OutputFromCryptoACLambda(code_13,
                            getStringFromException(e));
                    break;
                default:
                    returningValue = new OutputFromCryptoACLambda(code_boh,
                            getStringFromException(e));
                    break;
            }
        }
        // general exception catch for unknown errors
        catch (Exception e) {

            returningValue = new OutputFromCryptoACLambda(code_boh,
                    getStringFromException(e));
        }

        // if something went wrong, we have to delete the temporary file
        if (returningValue.getReturningCode() != code_0) {

            // if we have all parameters
            if (amazonS3 != null && s3TemporaryBucket != null && fileName != null) {

                // delete the file in the temporary bucket
                amazonS3.deleteObject(s3TemporaryBucket, fileName);
            }
        }

        // finally, return
        return returningValue;
    }


    /**
     * This method verifies a tuple's signature against the given public key
     *
     * @param dataToVerify data to verify the signature against
     * @param keyToVerify the key to use
     * @param oldSignature the signature that has to match
     * @throws NoSuchAlgorithmException throws NoSuchAlgorithmException
     * @throws InvalidKeyException      throws InvalidKeyException
     * @throws SignatureException       throws SignatureException
     */
    private boolean verifyCryptoACTupleTupleSignature(
            byte[] dataToVerify, PublicKey keyToVerify, byte[] oldSignature)
            throws InvalidKeyException, NoSuchAlgorithmException, SignatureException {

        // get the signature object
        Signature verifier = Signature.getInstance(signAlgorithm);

        // initialize the signer with the public key
        verifier.initVerify(keyToVerify);

        // update the data to verify
        verifier.update(dataToVerify);

        // if the signature is NOT valid
        return verifier.verify(oldSignature);
    }

    /**
     * Utility method to get a public key (either of a User or of a Role) from the database
     *
     * @param connection connection object toward the database
     * @param ID the token of the user or the role
     * @param tableName the name of the table (users' or roles' table)
     * @return the public key of the user
     * @throws SQLException SQLException
     * @throws NoSuchAlgorithmException NoSuchAlgorithmException
     * @throws InvalidKeySpecException InvalidKeySpecException
     */
    private PublicKey getPublicSigningKeyFromDatabase(Connection connection, String ID, String tableName)
            throws SQLException, NoSuchAlgorithmException, InvalidKeySpecException {

        // the key to return
        PublicKey returningKey= null;

        // column of the token of the entity
        String tokenColumn = userTokenColumn;

        if (tableName.equals(rolesTable)) {

            tokenColumn = roleTokenColumn;
        }

        // prepare and fill the statement
        PreparedStatement getPublicKeyStatement = connection.prepareStatement(
                "SELECT " + publicSigningKeyColumn +
                        " FROM " + tableName +
                        " WHERE " + tokenColumn + "=?");

        getPublicKeyStatement.setString(1, ID);

        // execute the query
        ResultSet getRolePublicKeyQueryResult = getPublicKeyStatement.executeQuery();

        // get the result
        while (getRolePublicKeyQueryResult.next()) {

            // get the bytes representing the key
            byte[] publicKeyOfRoleAsBytes = Base64.getDecoder().decode(
                    getRolePublicKeyQueryResult.getString(publicSigningKeyColumn));

            // generate the key from the bytes
            KeyFactory kf = KeyFactory.getInstance(pkiAlgorithm);
            returningKey = kf.generatePublic(new X509EncodedKeySpec(publicKeyOfRoleAsBytes));
        }

        // close and return
        getPublicKeyStatement.close();
        return returningKey;
    }

    /**
     * Utility method to get the exception as a string
     * @param e the exception
     * @return the string representing the exception
     */
    private static String getStringFromException (Exception e) {

        // the string to return
        String exceptionMessage;

        // if the exception is not null
        if (e != null) {

            // create a string writer
            StringWriter sw = new StringWriter();

            // create a print writer given the string writer
            PrintWriter pw = new PrintWriter(sw);

            // print the exception message inside the print writer
            e.printStackTrace(pw);

            // get the string from the string writer
            exceptionMessage = sw.toString();
        }
        // otherwise
        else {
            // set the proper message
            exceptionMessage = "exception is null!";
        }

        // finally return
        return exceptionMessage;
    }


    private static HashSet<String> getAllFiles (AmazonS3 amazonS3, String bucketName) {

        // value to return
        HashSet<String> returningValue = new HashSet<>();

        // requests and responses, along with the summaries
        ListObjectsV2Request listObjReq = new ListObjectsV2Request().withBucketName(bucketName);
        ListObjectsV2Result listObjRes;
        List<S3ObjectSummary> list = new ArrayList<>();

        // until the object listing is completed
        do {

            // request the object and add the result
            listObjRes = amazonS3.listObjectsV2(listObjReq);
            list.addAll(listObjRes.getObjectSummaries());

            // continue the listing
            listObjReq.setContinuationToken(listObjRes.getNextContinuationToken());

        } while(listObjRes.isTruncated());


        // now, for each object retrieved
        for (S3ObjectSummary file: list) {

            // add its key in the list
            returningValue.add(file.getKey());
        }

        // finally, return the set
        return returningValue;
    }

}