package eu.fbk.st.cryptoac.server.model;

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
     * The outcome message of the operation to display to the user.
     */
    private String outcomeMessage;

    /**
     * The HTTP status of the operation.
     */
    private Integer httpStatus;


    /**
     * Constructor with parameters.
     * @param JSONAbleObjectToReturn the operation result (only if method was GET)
     * @param outcomeMessage the outcome message of the operation
     * @param httpStatus the status of the response
     */
    public APIOutput(Object JSONAbleObjectToReturn, String outcomeMessage, Integer httpStatus) {
        this.setOutputJSON(JSONAbleObjectToReturn);
        this.outcomeMessage = outcomeMessage;
        this.setHttpStatus(httpStatus);
    }


    /**
     * getter for the outcome message.
     * @return the outcome message
     */
    public String getOutcomeMessage() {
        return outcomeMessage;
    }

    /**
     * getter for the object.
     * @return the object
     */
    public Object getOutputJSON() {
        return outputJSON;
    }

    /**
     * getter for the HTTP status.
     * @return the HTTP status
     */
    public Integer getHttpStatus() {
        return httpStatus;
    }


    /**
     * setter for the output JSON.
     * @param outputJSON the output JSON
     */
    public void setOutputJSON(Object outputJSON) {
        this.outputJSON = outputJSON;
    }

    /**
     * setter for the HTTP status.
     * @param httpStatus the HTTP status
     */
    public void setHttpStatus(Integer httpStatus) {
        this.httpStatus = httpStatus;
    }

    /**
     * setter for the outcome message.
     * @param outcomeMessage the outcome message
     */
    public void setOutcomeMessage(String outcomeMessage) {
        this.outcomeMessage = outcomeMessage;
    }
}
