package eu.fbk.st.cryptoac.core.element;

import eu.fbk.st.cryptoac.util.OperationOutcomeCode;
import org.jetbrains.annotations.NotNull;

/**
 * This class is a POJO for the returning value of the operations performed by the User (addUser, addRole,...).
 * It wraps the returning code and an object representing the returning value of the operation (if any).
 */
public class UserOutput {


    /**
     * the returning code, representing the outcome of the operation.
     */
    private final OperationOutcomeCode returningCode;


    /**
     * the returning value, if any.
     */
    private final Object retuningValue;


    /**
     * Constructor with parameters.
     * @param returningCode the code to return (not null)
     * @param retuningValue the value to return (may be null)
     */
    public UserOutput(@NotNull OperationOutcomeCode returningCode, Object retuningValue) {
        this.returningCode = returningCode;
        this.retuningValue = retuningValue;
    }

    /**
     * getter for the outcome code.
     * @return the outcome code
     */
    public OperationOutcomeCode getReturningCode() {
        return returningCode;
    }

    /**
     * getter for the returning value.
     * @return the returning value
     */
    public Object getRetuningValue() {
        return retuningValue;
    }
}
