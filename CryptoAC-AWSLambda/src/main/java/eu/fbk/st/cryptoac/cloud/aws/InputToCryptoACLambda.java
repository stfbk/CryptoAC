package eu.fbk.st.cryptoac.cloud.aws;

import eu.fbk.st.cryptoac.tuple.FileTuple;
import eu.fbk.st.cryptoac.tuple.PermissionTuple;

import java.io.Serializable;

/**
 * POJO (Plain Old Java Object) to wrap the data to send to the
 * CryptoACLambda, thus the operation to perform and the related data
 */
public class InputToCryptoACLambda implements Serializable {

    // the available operations
    public static final String ADD = "addFile";
    public static final String WRITE = "writeFile";

    // the Lambda operation, either read or write
    private String lambdaOperation;

    // file tuple
    private FileTuple fileTuple;

    // eventual permission tuple
    private PermissionTuple permissionTuple;


    /**
     * getter for the operation
     * @return the operation
     */
    public String getLambdaOperation() {

        return lambdaOperation;
    }

    /**
     * setter for the operation
     * @param lambdaOperation the operation
     */
    public void setLambdaOperation(String lambdaOperation) {

        this.lambdaOperation = lambdaOperation;
    }

    /**
     * getter for the permission tuple
     * @return the permission tuple
     */
    public PermissionTuple getPermissionTuple() {
        return permissionTuple;
    }

    /**
     * setter for the permission tuple
     * @param permissionTuple the permission tuple
     */
    public void setPermissionTuple(PermissionTuple permissionTuple) {
        this.permissionTuple = permissionTuple;
    }

    /**
     * getter for the file tuple
     * @return the file tuple
     */
    public FileTuple getFileTuple() {
        return fileTuple;
    }

    /**
     * setter for the file tuple
     * @param fileTuple the file tuple
     */
    public void setFileTuple(FileTuple fileTuple) {
        this.fileTuple = fileTuple;
    }
}


