package eu.fbk.st.cryptoac.dao.aws;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.identitymanagement.AmazonIdentityManagement;
import com.amazonaws.services.identitymanagement.AmazonIdentityManagementClientBuilder;
import com.amazonaws.services.identitymanagement.model.*;
import com.amazonaws.services.lambda.AWSLambda;
import com.amazonaws.services.lambda.AWSLambdaClientBuilder;
import com.amazonaws.services.lambda.invoke.LambdaInvokerFactory;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;

import java.io.InputStream;
import java.security.KeyPair;
import java.util.*;

import eu.fbk.st.cryptoac.App;
import eu.fbk.st.cryptoac.dao.DAOException;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQL;
import eu.fbk.st.cryptoac.core.element.File;
import eu.fbk.st.cryptoac.dao.DAOInterfaceParameters;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import eu.fbk.st.cryptoac.core.element.User;
import eu.fbk.st.cryptoac.core.tuple.FileTuple;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.util.FileUtil;
import org.jetbrains.annotations.NotNull;

import java.io.*;
import java.util.prefs.Preferences;

import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceAWSParameters.*;
import static eu.fbk.st.cryptoac.util.OperationOutcomeCode.*;

/**
 * This class implements the DAO interface for Amazon Web Services (AWS) by inheriting from the DAOInterfaceMySQL
 * to store metadata in a MySQL8+ database. Currently, this class expects the presence of an AWS Lambda function
 * acting as a reference monitor and two AWS S3 buckets for data storage.
 * TODO create the AWS lambda and the S3 buckets here, not assume to be there before
 *
 * Note: an AmazonServiceException implies that the call was transmitted
 * successfully, but Amazon S3 couldn't process it, so it returned an error response
 *
 * Note: an SdkClientException implies that Amazon S3 couldn't be contacted
 * for a response, or the client couldn't parse the response from Amazon S3
 */
public class DAOInterfaceAWS extends DAOInterfaceMySQL {


    /**
     * Object for invoking the S3 service.
     */
    private final AmazonS3 s3;

    /**
     * Object for invoking the Lambda function.
     */
    private final AWSLambda lambda;

    /**
     * Object for invoking the IAM service.
     */
    private final AmazonIdentityManagement iam;

    /**
     * The name of the AWS S3 bucket in which files are to be uploaded.
     */
    private static String uploadBucketName;

    /**
     * The name of the AWS S3 bucket from which files are to be downloaded.
     */
    private static String downloadBucketName;

    /**
     * The region in which the AWS Lambda and S3 services are deployed.
     * Corollary: AWS Lambda and S3 must be deployed in the same region
     */
    private static String s3Region;

    /**
     * The credential provider object for interacting with AWS services.
     */
    AWSCredentialsProvider awsCP;

    /**
     * The name of the policy related to S3 permissions.
     */
    private static final String policyName = "cryptoac-policy-users";

    /**
     * Key for storing the ARN of the policy returned by AWS.
     */
    private static final String policyARNKey = "policyARN";

    /**
     * The policy ARN returned by AWS. We need to keep reference of the ARN
     * to be able to apply the policy to new users.
     */
    private static String policyARN;



    /**
     * Constructor with parameters.
     * @param daoInterfaceAWSParameters the needed parameters to create an instance of this class. This
     *                   means the username and password for connecting to the database, the database url and
     *                   the database port. Additionally, this class needs the names of the two S3 buckets, the
     *                   AWS access key, AWS secret key and AWS region
     */
    private DAOInterfaceAWS(DAOInterfaceAWSParameters daoInterfaceAWSParameters) {

        super(daoInterfaceAWSParameters);

        // this name will be used in logs as the class name
        className = "daoInterfaceAWS";

        downloadBucketName      = daoInterfaceAWSParameters.getAwsS3BucketDownload();
        uploadBucketName        = daoInterfaceAWSParameters.getAwsS3BucketUpload();
        s3Region                = daoInterfaceAWSParameters.getAwsS3Region();
        String userAccessKey    = daoInterfaceAWSParameters.getAwsAccessKey();
        String userSecretKey    = daoInterfaceAWSParameters.getAwsSecretKey();

        // create the object storing AWS credentials and needed to interact with AWS services
        BasicAWSCredentials awsCredentials = new BasicAWSCredentials(userAccessKey, userSecretKey);
        awsCP = new AWSStaticCredentialsProvider(awsCredentials);

        s3      = AmazonS3ClientBuilder.standard()
                .withRegion(s3Region)
                .withCredentials(awsCP)
                .build();

        lambda  = AWSLambdaClientBuilder.standard()
                .withRegion(s3Region)
                .withCredentials(awsCP)
                .build();

        iam     = AmazonIdentityManagementClientBuilder.standard()
                .withRegion(s3Region)
                .withCredentials(awsCP)
                .build();
    }

    /**
     * This method creates a new instance of this class with the given parameters.
     * @param daoInterfaceAWSParameters initialization parameters (see class constructor)
     */
    public static DAOInterfaceAWS getInstance(DAOInterfaceAWSParameters daoInterfaceAWSParameters) {
        return new DAOInterfaceAWS(daoInterfaceAWSParameters);
    }



    /**
     * This method is invoked once before starting to interact with AWS. It initializes the administrator by
     * invoking the super method. Then, it creates a policy in AWS that allows future users to upload files to
     * the temporary bucket, download files from the definitive bucket and invoke the lambda function (i.e., the RM)
     * @param adminEncryptingKeys the encrypting keys of the admin
     * @param adminSigningKeys the signing keys of the admin
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void initializeAdmin(@NotNull KeyPair adminEncryptingKeys, @NotNull KeyPair adminSigningKeys) throws DAOException {

        super.initializeAdmin(adminEncryptingKeys, adminSigningKeys);

        App.logger.info("[{}{}{} ", className, " (" + initializeAdmin + ")]: ",
                "creating the AWS policy");

        // TODO note: this is not optimal, because it gives permission to the user to invoke ALL lambda
        //  functions. It should be restricted to the cryptoac lambda function.. but we would need the ARN of
        //  the lambda function. In the future, the lambda function will be instantiated by the admin. So, we will
        //  know the ARN.
        String policyJSON =
                "{" +
                        "  \"Version\": \"2012-10-17\"," +
                        "  \"Statement\": " +
                        "   [" +
                        "        {" +
                        "           \"Effect\": \"Allow\"," +
                        "           \"Action\": \"s3:GetObject\"," +
                        "           \"Resource\": \"arn:aws:s3:::" + downloadBucketName + "/*\"" +
                        "        }, " +
                        "        {" +
                        "           \"Effect\": \"Allow\"," +
                        "            \"Action\": \"lambda:InvokeFunction\"," +
                        "            \"Resource\": \"*\"" +
                        "        }, " +
                        "        {" +
                        "            \"Effect\": \"Allow\", " +
                        "            \"Action\": \"s3:PutObject\", " +
                        "            \"Resource\": \"arn:aws:s3:::" + uploadBucketName +"/*\" " +
                        "       }" +
                        "   ]" +
                        "}";

        CreatePolicyRequest createPolicyRequest = new CreatePolicyRequest()
                .withPolicyName(policyName).withPolicyDocument(policyJSON);
        policyARN = iam.createPolicy(createPolicyRequest).getPolicy().getArn();

        // it is important to save the policy ARN. In this way, whenever a new
        // user will be created, the admin will be able to assign the user this
        // policy by referring to this ARN
        Preferences prefs = Preferences.userRoot().node(this.getClass().getName());
        prefs.put(policyARNKey, policyARN);

        // TODO what happen when the admin wants to log in in another instance of CryptoAC?
        //  we should take this information and insert it in the admin's profile
    }



    /**
     * This method adds a new user in the database by invoking the super function. Then, it also creates
     * a corresponding AWS user in AWS IAM.
     * @param newUserToInsert the user object to insert
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     * @return an hash map for eventual configuration parameters of the user (i.e., the user's AWS credentials)
     */
     public HashMap<String, byte[]> addUser(@NotNull User newUserToInsert) throws DAOException {

        // remember that the super method returns the password of the user
        // to access the database under the "kMySQLDatabasePassword" key
         HashMap<String, byte[]> userMySQLDatabaseParameters = super.addUser(newUserToInsert);

        // this object is returned at the end of the function. It
        // will contain the user's AWS credentials, i.e., the AWS
        // access key and AWS secret key, and the database password
        HashMap<String, byte[]> userAWSCredentials = new HashMap<>(userMySQLDatabaseParameters);


        String username = newUserToInsert.getName();

        App.logger.info("[{}{}{} ", className, " (" + addUser + ")]: ", "adding user " + username);

        

        // ===== Step 1. Create the AWS user in IAM =====
        CreateUserRequest createUserRequest = new CreateUserRequest().withUserName(username);
        iam.createUser(createUserRequest);


        // ===== Step 2. Assign IAM policy to the user =====
        Preferences prefs = Preferences.userRoot().node(this.getClass().getName());
        policyARN = prefs.get(policyARNKey, null);
        AttachUserPolicyRequest attachUserPolicyRequest = new AttachUserPolicyRequest()
                .withUserName(username).withPolicyArn(policyARN);
        iam.attachUserPolicy(attachUserPolicyRequest);


        // ===== Step 3. Create AWS credentials for the new user =====
        CreateAccessKeyRequest createAccessKeyRequest = new CreateAccessKeyRequest().withUserName(username);
        CreateAccessKeyResult createAccessKeyResult = iam.createAccessKey(createAccessKeyRequest);
        userAWSCredentials.put(kAWSAccessKey, createAccessKeyResult.getAccessKey().getAccessKeyId().getBytes());
        userAWSCredentials.put(kAWSSecretKey, createAccessKeyResult.getAccessKey().getSecretAccessKey().getBytes());

        return userAWSCredentials;
    }


    /**
     * This method flags as deleted the user with the given username in the database and deletes the user
     * at database level by invoking the super function. Then, it also deletes the AWS user from IAM
     * @param username the name of the user
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    public void deleteUser(@NotNull String username) throws DAOException {

        super.deleteUser(username);

        App.logger.info("[{}{}{} ", className, " (" + deleteUser + ")]: ", "deleting user " + username);

        // ===== Step 1. Delete the user AWS Access key (required by AWS before deleting the user) =====
        boolean isTruncated = false;
        String userAccessKeyID = null;
        ListAccessKeysRequest listAccessKeysRequest = new ListAccessKeysRequest().withUserName(username);

        while (!isTruncated) {
            ListAccessKeysResult listAccessKeysResult = iam.listAccessKeys(listAccessKeysRequest);
            for (AccessKeyMetadata metadata : listAccessKeysResult.getAccessKeyMetadata())
                userAccessKeyID = metadata.getAccessKeyId();
            listAccessKeysResult.setMarker(listAccessKeysResult.getMarker());
            if (!listAccessKeysResult.getIsTruncated())
                isTruncated = true;
        }

        DeleteAccessKeyRequest deleteAccessKeyRequest = new DeleteAccessKeyRequest()
                .withUserName(username).withAccessKeyId(userAccessKeyID);
        iam.deleteAccessKey(deleteAccessKeyRequest);


        // ===== Step 2. Detach the AWS IAM policy from the user (required by AWS before deleting the user) =====
        DetachUserPolicyRequest detachUserPolicyRequest = new DetachUserPolicyRequest()
                .withUserName(username).withPolicyArn(policyARN);
        iam.detachUserPolicy(detachUserPolicyRequest);

        // ===== Step 3. Delete the IAM user =====
        DeleteUserRequest deleteUserRequest = new DeleteUserRequest().withUserName(username);
        iam.deleteUser(deleteUserRequest);
    }

    /**
     * This method creates AWS metadata related to the file and
     * then invokes another method to invoke the Lambda function.
     * @param newFile the new file
     * @param newFileTuple the new file tuple
     * @param newPermissionTuple the new permission tuple giving the admin access to the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void addFile(@NotNull File newFile, @NotNull FileTuple newFileTuple, @NotNull PermissionTuple newPermissionTuple) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + addFile + ")]: ", "adding file " + newFile.toString());

        // create the object containing the necessary metadata to send to the Lambda function

        InputToCryptoACLambda inputToCryptoACLambda = new InputToCryptoACLambda();
        inputToCryptoACLambda.setLambdaOperation(Operation.Add);
        inputToCryptoACLambda.setFileTuple(newFileTuple);
        inputToCryptoACLambda.setPermissionTuple(newPermissionTuple);

        // this function uploads the file in the upload bucket and
        // then invokes the lambda (i.e., the reference monitor) to
        // check the consistency of all metadata and conclude the
        // addition of the new file by moving it to the download bucket
        OperationOutcomeCode returningCode = uploadFileAndInvokeLambda(newFile.getFileStream(), inputToCryptoACLambda);

        logAtEndOfMethod(returningCode, addFile, null);
    }


    /**
     * This method deletes the file with the given file name from S3.
     * Then, it deletes both the file from the database and the file tuple.
     * @param fileName the name of the file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void deleteFileAndFileTuple(@NotNull String fileName) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + deleteFile + ")]: ", "deleting file (file and tuple " +
                "in database and file in S3) " + fileName);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;

        if(s3.doesBucketExistV2(downloadBucketName)) {

            if (s3.doesObjectExist(downloadBucketName, fileName)) {

                try {

                    deleteFileTupleByFileName(fileName);
                    deleteFile(fileName);

                    s3.deleteObject(new DeleteObjectRequest(downloadBucketName, fileName));
                }
                catch(AmazonServiceException e) {
                    returningCode = code_45;
                    exceptionThrown = e;
                }
                catch(SdkClientException e) {
                    returningCode = code_40;
                    exceptionThrown = e;
                }
            }
            // it means that file to delete does not exist in the AWS S3 bucket
            else
                returningCode = code_6;
        }
        // it means that the download AWS S3 bucket does not exist
        else
            returningCode = code_42;

        logAtEndOfMethod(returningCode, deleteFile, exceptionThrown);
    }

    /**
     * This method creates AWS metadata related to the file and then invokes another function to invoke the RM.
     * @param updatedFile the updated file
     * @param updatedFileTuple the updated file tuple
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public void updateFile(File updatedFile, FileTuple updatedFileTuple) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + updateFile + ")]: ", "updating file " + updatedFile.toString() +
                ", tuple " + updatedFileTuple.toString());

        // create the object containing the necessary data to send to the Lambda function
        InputToCryptoACLambda inputToCryptoACLambda = new InputToCryptoACLambda();
        inputToCryptoACLambda.setLambdaOperation(Operation.Write);
        inputToCryptoACLambda.setFileTuple(updatedFileTuple);
        inputToCryptoACLambda.setPermissionTuple(null);

        // this function uploads the file in the upload bucket and
        // then invokes the lambda (i.e., the reference monitor) to
        // check the consistency of all metadata
        OperationOutcomeCode returningCode = uploadFileAndInvokeLambda(updatedFile.getFileStream(), inputToCryptoACLambda);

        logAtEndOfMethod(returningCode, updateFile, null);
    }

    /**
     * This method downloads the requested file ("read" operation) from the download AWS S3 bucket.
     * @param fileName the name of the file
     * @return the encrypted file
     * @throws DAOException if something went wrong in the process, throw a DAOException wrapping the original
     * exception along with a proper OperationOutcomeCode code
     */
    @Override
    public InputStream downloadFile(String fileName) throws DAOException {

        App.logger.info("[{}{}{} ", className, " (" + downloadFile + ")]: ", "downloading file " + fileName);

        OperationOutcomeCode returningCode = code_0;
        Exception exceptionThrown = null;
        InputStream downloadedFile = null;

        if(s3.doesBucketExistV2(downloadBucketName)){

            if(s3.doesObjectExist(downloadBucketName, fileName)){

                try (S3Object downloadedS3Object = s3.getObject(new GetObjectRequest(downloadBucketName, fileName))) {

                    // TODO what written here is awful. We cannot have a stream, save it in the disk and
                    //  reload it again. Unfortunately, AWS SKD closes the stream if the S3Object is
                    //  closed as well, so...
                    // TODO the temporary file is never deleted... this depends on when the
                    //  user downloads the file

                    String randomString = String.valueOf(Math.random());
                    String encryptedTemporaryFilePath =
                            App.temporaryDirectoryProxy.getAbsolutePath() + "/" + fileName + randomString;

                    java.io.File encryptedFile = new java.io.File(encryptedTemporaryFilePath);
                    java.io.File savedFile = FileUtil.saveFileOnFileSystem(encryptedFile.getAbsolutePath(),
                            downloadedS3Object.getObjectContent(), FileUtil.SaveMode.APPEND_NUMBER);
                    downloadedFile = new FileInputStream(savedFile);
                }
                catch(AmazonServiceException e) {
                    returningCode = code_45;
                    exceptionThrown = e;
                }
                catch(SdkClientException e) {
                    returningCode = code_40;
                    exceptionThrown = e;
                }
                // this exception may be thrown when we try to save the file to the disk
                catch (IOException e) {
                    returningCode = code_37;
                    exceptionThrown = e;
                }
            }
            // it means that file to delete does not exist in the AWS S3 bucket
            else
                returningCode = code_6;
        }
        // it means that the download AWS S3 bucket does not exist
        else
            returningCode = code_42;

        logAtEndOfMethod(returningCode, downloadFile, exceptionThrown);

        return downloadedFile;
    }


    /**
     * This method uploads the given file to AWS S3 exploiting the low-level APIs for multipart uploads. The problem
     * was that AWS wants to know the length of the file before uploading it in S3, but we have a stream! To bypass
     * this limitation, we store 5MB (minimum imposed by AWS) of the stream in a buffer, then upload the part. We loop
     * until the stream is empty, i.e., until the whole file has been uploaded.
     * @param inputToCryptoACLambda the input for the Lambda
     * @param fileStream the stream pointing to the content of the file
     * @return the outcome of the operation
     */
    private OperationOutcomeCode uploadFileAndInvokeLambda(InputStream fileStream, InputToCryptoACLambda inputToCryptoACLambda) {

        OperationOutcomeCode returningCode;
        String fileName = inputToCryptoACLambda.getFileTuple().getAssociatedElement();

        // this is the minimum size that a part must have, AWS poses a
        // limitation of 5MB at least for each part (except the last one)
        long minPartSizeLong = 5 * 1024 * 1024;

        // this is the actual size of the parts we upload
        // do not change it unless you know what you are doing
        long partSizeLong = minPartSizeLong *2;
        int partSizeInt = Math.toIntExact(partSizeLong);

        try {

            // Create a list of ETag objects. You retrieve ETags for each object part uploaded,
            // then, after each individual part has been uploaded, pass the list of ETags to
            // the request to complete the upload.
            List<PartETag> partETags = new ArrayList<>();

            // Initiate the multipart upload request
            InitiateMultipartUploadRequest initRequest = new InitiateMultipartUploadRequest(
                    uploadBucketName, inputToCryptoACLambda.getFileTuple().getAssociatedElement());
            InitiateMultipartUploadResult initResponse = s3.initiateMultipartUpload(initRequest);

            // this boolean variable is needed to break the 'while 'loop when the whole file has been uploaded
            boolean areThereStillBytesToUpload = true;

            // the number of the part we are uploading (starts from 1)
            int i = 1;

            // therefore, while there are bytes to upload
            while (areThereStillBytesToUpload) {

                // the buffer that will hold the parts to upload
                byte[] bufferInThisLoop = new byte[partSizeInt];

                // now we have to read from the stream until EITHER the stream is empty OR we filled the buffer
                // this is a flag for telling whether we filled the buffer or not in this loop
                boolean didWeFilledTheBuffer = false;

                // number of bytes read in this loop
                int bytesReadInThisLoop = 0;


                // ===== Step 1. Read data from the stream and put them into the buffer, until either =====
                // =====         the buffer is full or the stream is finished                         =====

                // until we have filled the current buffer (since we are getting the file to upload from a stream, it
                // may be possible that we manage to upload all bytes we received BUT the stream has still bytes to
                // upload. So wait either to fill the buffer or read -1, i.e., the buffer is actually empty)
                while (!didWeFilledTheBuffer) {

                    // temporary buffer for this loop (its size is the minimum one)
                    byte[] tempBuffer = new byte[Math.toIntExact(minPartSizeLong)];

                    // read bytes and put them in the buffer
                    int numberOfReadBytes = fileStream.read(tempBuffer);

                    // the stream is empty
                    if (numberOfReadBytes == -1)

                        // we filled the buffer (not the whole buffer, but data are finished, so...)
                        didWeFilledTheBuffer = true;

                    // we read something from the stream
                    else {

                        // put the read bytes in the final buffer
                        System.arraycopy(tempBuffer, 0, bufferInThisLoop, bytesReadInThisLoop, numberOfReadBytes);

                        // sum the bytes read with the total number of bytes read in this loop
                        bytesReadInThisLoop = bytesReadInThisLoop + numberOfReadBytes;

                        // if this exceeds the minimum size
                        if (bytesReadInThisLoop > minPartSizeLong)

                            // we are good to go
                            didWeFilledTheBuffer = true;
                    }
                }

                // ===== Step 2. Upload the data in the buffer as a part to S3 =====

                // insert the read bytes in another stream, that we will upload to S3
                InputStream bytesToUpload = new ByteArrayInputStream(bufferInThisLoop);

                // if we read at least one byte
                if (bytesReadInThisLoop != 0) {

                    // is this the last part we upload?
                    boolean isLastPart = false;

                    // if this part is < 5MB, it means that it is the last part
                    if (bytesReadInThisLoop < partSizeInt)
                        isLastPart = true;


                    // Create the request to upload a part
                    UploadPartRequest uploadRequest = new UploadPartRequest()
                            .withBucketName(uploadBucketName)
                            .withKey(fileName)
                            .withUploadId(initResponse.getUploadId())
                            .withPartNumber(i)
                            .withInputStream(bytesToUpload)
                            .withPartSize(bytesReadInThisLoop)
                            .withLastPart(isLastPart);

                    // Upload the part and add the response's ETag to our list.
                    UploadPartResult uploadResult = s3.uploadPart(uploadRequest);
                    partETags.add(uploadResult.getPartETag());

                    // increment the count of the parts
                    i++;
                }
                // we reached the end of the stream
                else
                    // so no more bytes to upload
                    areThereStillBytesToUpload = false;
            }

            // Complete the multipart upload
            CompleteMultipartUploadRequest compRequest = new CompleteMultipartUploadRequest(
                    uploadBucketName, fileName, initResponse.getUploadId(), partETags);
            s3.completeMultipartUpload(compRequest);

            // ===== Step 3. Invoke the Lambda function to check the data and move the file =====

            final CryptoACLambda lambdaToInvoke = LambdaInvokerFactory.builder()
                    .lambdaClient(lambda)
                    .build(CryptoACLambda.class);

            OutputFromCryptoACLambda lambdaResult = lambdaToInvoke.invokeLambda(inputToCryptoACLambda);
            returningCode = lambdaResult.getReturningCode();

            if (returningCode != code_0)
                App.logger.error("[{}{}{} ", className, " (" + addFile + ")]: ", "Lambda returned with an error: " +
                        "code is " + lambdaResult.getReturningCode().toString() + ", specific error is " +
                        lambdaResult.getMoreDetailedError());
        }
        catch (AmazonServiceException e) {
            returningCode = code_45;
        }
        catch (SdkClientException e) {
            returningCode = code_40;
        }
        catch (IOException e) {
            returningCode = inputToCryptoACLambda.getLambdaOperation().equals(Operation.Add) ? code_19 : code_21;
        }

        return returningCode;
    }
}
