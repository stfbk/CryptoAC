package eu.fbk.st.cryptoac.cloud.aws;

import eu.fbk.st.cryptoac.enumerators.OperationOutcomeCode;

import java.io.Serializable;

/**
 * POJO (Plain Old Java Object) to wrap the data to receive from the
 * eu.fbk.st.cryptoac.dao.aws.CryptoACLambda, thus the outcome code and, in case, a more detailed error
 */
public class OutputFromCryptoACLambda implements Serializable {


    /**
     * The code returned by the Lambda function
     */
    private OperationOutcomeCode returningCode;


    /**
     * In case it is needed, this is a string were to place a more detailed error
     * coming from the Lambda
     */
    private String moreDetailedError;


    /**
     * Constructor
     * @param returningCode the returned code
     * @param moreDetailedError eventually, a more detailed error
     */
    public OutputFromCryptoACLambda(OperationOutcomeCode returningCode, String moreDetailedError) {

        // set the variables
        setReturningCode(returningCode);
        setMoreDetailedError(moreDetailedError);
    }

    /**
     * getter for the outcome code
     * @return the outcome code
     */
    public OperationOutcomeCode getReturningCode() {

        return returningCode;
    }

    /**
     * setter for the outcome code
     * @param returningCode the outcome code
     */
    public void setReturningCode(OperationOutcomeCode returningCode) {

        this.returningCode = returningCode;
    }

    /**
     * getter for the more detailed error
     * @return the more detailed error
     */
    public String getMoreDetailedError() {

        return moreDetailedError;
    }

    /**
     * setter for the more detailed error
     * @param moreDetailedError the more detailed error
     */
    public void setMoreDetailedError(String moreDetailedError) {

        this.moreDetailedError = moreDetailedError;
    }
}


