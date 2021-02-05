package eu.fbk.st.cryptoac.dao.local;

import com.google.gson.annotations.Expose;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.core.tuple.RoleTuple;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * This class describes the query results received when querying OPA APIs.
 */
public class OPAQuery implements Serializable {


    /**
     * If decision logging was enabled in OPA, this field contains a
     * string that uniquely identifies the decision/query.
     */
    private String decision_id;

    /**
     * The outcome of the query, either true or false.
     */
    private boolean result;

    /**
     * If query metrics were enabled in OPA, this field contains query
     * performance metrics collected during the parse, compile, and
     * evaluation steps.
     */
    private HashMap<String, Integer> metrics;

    /**
     * Constructor with parameters.
     * @param decision_id the string that uniquely identifies the decision/query
     * @param result the outcome of the query, either true or false
     * @param metrics query performance metrics
     */
    public OPAQuery(String decision_id, boolean result, HashMap<String, Integer> metrics) {
        this.decision_id = decision_id;
        this.result = result;
        this.metrics = metrics;
    }

    /**
     * Getter for the string that uniquely identifies the decision/query
     * @return the string that uniquely identifies the decision/query
     */
    public String getDecision_id() {
        return decision_id;
    }

    /**
     * setter for the string that uniquely identifies the decision/query
     * @param decision_id the string that uniquely identifies the decision/query
     */
    public void setDecision_id(String decision_id) {
        this.decision_id = decision_id;
    }

    /**
     * Getter for the outcome of the query, either true or false
     * @return the outcome of the query, either true or false
     */
    public boolean getResult() {
        return result;
    }

    /**
     * setter for the outcome of the query, either true or false
     * @param result the outcome of the query, either true or false
     */
    public void setResult(boolean result) {
        this.result = result;
    }

    /**
     * Getter for query performance metrics
     * @return query performance metrics
     */
    public HashMap<String, Integer> getMetrics() {
        return metrics;
    }

    /**
     * setter for query performance metrics
     * @param metrics query performance metrics
     */
    public void setMetrics(HashMap<String, Integer> metrics) {
        this.metrics = metrics;
    }
}
