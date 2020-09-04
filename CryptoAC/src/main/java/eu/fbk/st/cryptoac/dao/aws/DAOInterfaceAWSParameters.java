package eu.fbk.st.cryptoac.dao.aws;

import com.google.gson.annotations.Expose;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQLParameters;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;

import java.util.HashMap;

import static eu.fbk.st.cryptoac.util.SafeRegex.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceAWSParameters.*;

/**
 * This class contains the parameters needed to instantiate the AWS DAO interface.
 */
public class DAOInterfaceAWSParameters extends DAOInterfaceMySQLParameters {



    /**
     * the ID of the lambda function.
     * Don't apply the expose annotation so it can be excluded from serialization.
     */
    public static final String lambdaID = "CryptoACLambda";

    /**
     * the ID of the S3 bucket from which users will download files.
     */
    @Expose
    private String awsS3BucketDownload;

    /**
     * the ID of the S3 bucket in which users will upload files.
     */
    @Expose
    private String awsS3BucketUpload;

    /**
     * the AWS region to which AWS services refer.
     */
    @Expose
    private String awsS3Region;

    /**
     * the access key of the AWS IAM user that is using this instance.
     */
    @Expose
    private String awsAccessKey;

    /**
     * the secret key of the AWS IAM user that is using this instance.
     * Don't apply the expose annotation so it can be excluded from serialization.
     */
    private String awsSecretKey;

    /**
     * Constructor with parameters. The accepted parameters are the username (kUsernameInCryptoAC),
     * the database url (kMySQLDatabaseURL), port (kMySQLDatabasePort) and the password of the user
     * (kMySQLDatabasePassword). In addition, other accepted parameters are the ID of the AWS S3
     * upload (awsS3BucketDownload) and download buckets (awsS3BucketUpload), the AWS S3 region
     * (awsS3Region) and the AWS IAM user access (awsAccessKey) and secret keys (awsSecretKey)
     * @param configurationParameters the parameters to initialize this instance variables with
     */
    public DAOInterfaceAWSParameters(HashMap<String, byte[]> configurationParameters) {

        super(configurationParameters);

        this.awsS3BucketDownload = new String(configurationParameters.get(kAWSS3BucketDownload));
        this.awsS3BucketUpload = new String(configurationParameters.get(kAWSS3BucketUpload));
        this.awsS3Region = new String(configurationParameters.get(kAWSS3Region));
        this.awsAccessKey = new String(configurationParameters.get(kAWSAccessKey));
        this.awsSecretKey = new String(configurationParameters.get(kAWSSecretKey));

        checkAWSParametersAreValid();
    }

    /**
     * This method checks that the values of the parameters are valid through regular expressions.
     * @throws IllegalArgumentException if at least one of the parameters does not satisfy the regular expression
     */
    protected void checkAWSParametersAreValid() {

        if (!(checkIfMatchesRegex(safeTextRegex, awsS3BucketDownload)))
            throw new IllegalArgumentException("the AWS S3 download bucket is null or it does not match a safe regular expression");
        if (!(checkIfMatchesRegex(safeTextRegex, awsS3BucketUpload)))
            throw new IllegalArgumentException("the AWS S3 upload bucket is null or it does not match a safe regular expression");
        if (!(checkIfMatchesRegex(safeTextRegex, awsS3Region)))
            throw new IllegalArgumentException("the AWS region is null or it does not match a safe regular expression");
        if (!(checkIfMatchesRegex(awsAccessKeyRegex, awsAccessKey)))
            throw new IllegalArgumentException("the AWS access key is null or it does not match the AWS access key regular expression");
        if (!(checkIfMatchesRegex(awsSecretKeyRegex, awsSecretKey)))
            throw new IllegalArgumentException("the AWS secret key is null or it does not match the AWS secret key regular expression");
        if (awsS3BucketDownload.equals(awsS3BucketUpload))
            throw new IllegalArgumentException("the upload and download AWS S3 buckets have the same name");
    }

    /**
     * This method should update the values of the parameters with the new data and then check
     * that the parameters are valid; only given parameters should be updated.
     * Note: the username cannot be updated, as it is the only identifier for the user. Also
     * the administrator status cannot change.
     * @param updatedData the parameters to update with the new values
     * @return an operation outcome code for the result of the operation
     */
    @Override
    public OperationOutcomeCode update(HashMap<String, byte[]> updatedData) {

        OperationOutcomeCode returningCode = super.update(updatedData);

        if (updatedData.containsKey(kAWSS3BucketDownload))
            this.awsS3BucketDownload = new String(updatedData.get(kAWSS3BucketDownload));
        if (updatedData.containsKey(kAWSS3BucketUpload))
            this.awsS3BucketUpload = new String(updatedData.get(kAWSS3BucketUpload));
        if (updatedData.containsKey(kAWSS3Region))
            this.awsS3Region = new String(updatedData.get(kAWSS3Region));
        if (updatedData.containsKey(kAWSAccessKey))
            this.awsAccessKey = new String(updatedData.get(kAWSAccessKey));
        if (updatedData.containsKey(kAWSSecretKey))
            this.awsSecretKey = new String(updatedData.get(kAWSSecretKey));

        checkAWSParametersAreValid();

        return returningCode;
    }

    /**
     * getter for the download bucket name.
     * @return the download bucket name
     */
    public String getAwsS3BucketDownload() {
        return awsS3BucketDownload;
    }

    /**
     * getter for the upload bucket name.
     * @return the upload bucket name
     */
    public String getAwsS3BucketUpload() {
        return awsS3BucketUpload;
    }

    /**
     * getter for the s3 region
     * @return the s3 region
     */
    public String getAwsS3Region() {
        return awsS3Region;
    }

    /**
     * getter for the access key
     * @return the access key
     */
    public String getAwsAccessKey() {
        return awsAccessKey;
    }

    /**
     * getter for the secret key
     * @return the secret key
     */
    public String getAwsSecretKey() {
        return awsSecretKey;
    }
}
