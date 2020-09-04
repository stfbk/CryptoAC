package eu.fbk.st.cryptoac.dao.aws;

import eu.fbk.st.cryptoac.util.OperationOutcomeCode;

import java.io.Serializable;

/**
 * This POJO (Plain Old Java Object) wraps data to send to the Lambda function.
 */
public class OutputFromCryptoACLambda implements Serializable {

    /**
     * The code returned by the Lambda function.
     */
    private OperationOutcomeCode returningCode;

    /**
     * String that eventually contains a more detailed error.
     */
    private String moreDetailedError;

    /**
     * Constructor with parameters.
     * @param returningCode the returned code
     * @param moreDetailedError eventually, a more detailed error
     */
    public OutputFromCryptoACLambda(OperationOutcomeCode returningCode, String moreDetailedError) {
        setReturningCode(returningCode);
        setMoreDetailedError(moreDetailedError);
    }

    /**
     * Constructor without parameters (for serialization)
     */
    public OutputFromCryptoACLambda() {
    }

    /**
     * getter for the outcome code.
     * @return the outcome code
     */
    public OperationOutcomeCode getReturningCode() {
        return returningCode;
    }

    /**
     * setter for the outcome code.
     * @param returningCode the outcome code
     */
    public void setReturningCode(OperationOutcomeCode returningCode) {
        this.returningCode = returningCode;
    }

    /**
     * getter for the more detailed error.
     * @return the more detailed error
     */
    public String getMoreDetailedError() {
        return moreDetailedError;
    }

    /**
     * setter for the more detailed error.
     * @param moreDetailedError the more detailed error
     */
    public void setMoreDetailedError(String moreDetailedError) {
        this.moreDetailedError = moreDetailedError;
    }
}


