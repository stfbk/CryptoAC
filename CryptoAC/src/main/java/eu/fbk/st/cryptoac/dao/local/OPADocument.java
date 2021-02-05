package eu.fbk.st.cryptoac.dao.local;

import com.google.gson.annotations.Expose;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;
import eu.fbk.st.cryptoac.core.tuple.RoleTuple;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * This class describes the document received when querying OPA APIs.
 */
public class OPADocument implements Serializable {


    /**
     * If decision logging was enabled in OPA, this field contains a
     * string that uniquely identifies the decision/query.
     */
    private String decision_id;

    /**
     * The base or virtual document referred to in the API request.
     * If the path is undefined, this key will be omitted.
     */
    private OPADocumentRBAC result;

    /**
     * If query metrics were enabled in OPA, this field contains query
     * performance metrics collected during the parse, compile, and
     * evaluation steps.
     */
    private HashMap<String, Integer> metrics;

    /**
     * Constructor with parameters.
     * @param decision_id the string that uniquely identifies the decision/query
     * @param result the base or virtual document referred to in the API request
     * @param metrics query performance metrics
     */
    public OPADocument(String decision_id, OPADocumentRBAC result, HashMap<String, Integer> metrics) {
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
     * Getter for the base or virtual document referred to in the API request
     * @return the base or virtual document referred to in the API request
     */
    public OPADocumentRBAC getResult() {
        return result;
    }

    /**
     * setter for the base or virtual document referred to in the API request
     * @param result the base or virtual document referred to in the API request
     */
    public void setResult(OPADocumentRBAC result) {
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



    /**
     * This class describes the Role-Based Access Control (RBAC) document
     * for the Open Policy Agent (OPA) deployed in CryptoAC. With document,
     * we mean the assignment of users and permissions to roles.
     */
    public static class OPADocumentRBAC implements Serializable {

        /**
         * The list of role tuples assigned to each user.
         * The key is the name of the user.
         */
        @Expose
        private HashMap<String, ArrayList<RoleTuple>> ur;

        /**
         * The list of permission tuples assigned to each role.
         * The key is the name of the role.
         */
        @Expose
        private HashMap<String, ArrayList<PermissionTuple>> pa;


        /**
         * Constructor with parameters.
         * @param ur the list of role tuples assigned to each user
         * @param pa the list of permission tuples assigned to each role
         */
        public OPADocumentRBAC(HashMap<String, ArrayList<RoleTuple>> ur, HashMap<String, ArrayList<PermissionTuple>> pa) {
            this.ur = ur;
            this.pa = pa;
        }

        /**
         * getter for the list of role tuples assigned to each user.
         * @return the list of role tuples assigned to each user
         */
        public HashMap<String, ArrayList<RoleTuple>> getUr() {
            return ur;
        }

        /**
         * setter for the list of role tuples assigned to each user.
         * @param ur the list of role tuples assigned to each user
         */
        public void setUr(HashMap<String, ArrayList<RoleTuple>> ur) {
            this.ur = ur;
        }

        /**
         * getter for the list of permission tuples assigned to each role.
         * @return the list of permission tuples assigned to each role
         */
        public HashMap<String, ArrayList<PermissionTuple>> getPa() {
            return pa;
        }

        /**
         * setter for the list of permission tuples assigned to each role.
         * @param pa the list of permission tuples assigned to each role
         */
        public void setPa(HashMap<String, ArrayList<PermissionTuple>> pa) {
            this.pa = pa;
        }
    }

}
