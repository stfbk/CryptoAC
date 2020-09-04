package eu.fbk.st.cryptoac.dao;

import eu.fbk.st.cryptoac.util.OperationOutcomeCode;


/**
 * This is a custom exception supposed to be thrown by implementations of the DAO interface. Since we cannot
 * forecast all possible exceptions that might be thrown in future implementations (and therefore we cannot
 * catch them), the idea is to wrap DAO-specific exceptions in this general DAO exception.
 */
public class DAOException extends Exception {

    /**
     * The error code associated with the original exception.
     */
    private final OperationOutcomeCode errorCode;


    /**
     * Constructor with parameters.
     * @param cause the original exception
     * @param errorCode the associated error code. This code cannot be code 0 (that means success)
     * @throws IllegalArgumentException if the provided code is 0
     */
    public DAOException(Throwable cause, OperationOutcomeCode errorCode) {

        super(errorCode.toString(), cause);

        this.errorCode = errorCode.equals(OperationOutcomeCode.code_0) ? OperationOutcomeCode.code_72 : errorCode;

        if (errorCode.equals(OperationOutcomeCode.code_0))
            throw new IllegalArgumentException("error code cannot be 0");
    }

    /**
     * getter for the error code.
     * @return the error code
     */
    public OperationOutcomeCode getErrorCode() {
        return errorCode;
    }
}