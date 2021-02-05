package eu.fbk.st.cryptoac.server.model;

import eu.fbk.st.cryptoac.util.OperationOutcomeCode;

import java.io.Serializable;


/**
 *  This POJO represents the return value of an API.
 */
public class APIOutput implements Serializable {

    /**
     * This object represents the returning value of the operation.
     * Note: it must be serializable to JSON.
     */
    private Object outputJSON;

    /**
     * The outcome code of the operation.
     */
    private OperationOutcomeCode outcomeCode;


    /**
     * Constructor with parameters.
     * @param objectToReturnJSONAble the operation result (only if method was GET)
     * @param outcomeCode the outcome message of the operation
     */
    public APIOutput(Object objectToReturnJSONAble, OperationOutcomeCode outcomeCode) {
        this.setOutputJSON(objectToReturnJSONAble);
        this.outcomeCode = outcomeCode;
    }


    /**
     * getter for the outcome code.
     * @return the outcome code
     */
    public OperationOutcomeCode getOutcomeCode() {
        return outcomeCode;
    }

    /**
     * setter for the outcome code.
     * @param outcomeCode the outcome code
     */
    public void setOutcomeCode(OperationOutcomeCode outcomeCode) {
        this.outcomeCode = outcomeCode;
    }

    /**
     * getter for the object.
     * @return the object
     */
    public Object getOutputJSON() {
        return outputJSON;
    }

    /**
     * setter for the output JSON.
     * @param outputJSON the output JSON
     */
    public void setOutputJSON(Object outputJSON) {
        this.outputJSON = outputJSON;
    }
}
