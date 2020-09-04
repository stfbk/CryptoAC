package eu.fbk.st.cryptoac.dao.aws;

import eu.fbk.st.cryptoac.core.tuple.FileTuple;
import eu.fbk.st.cryptoac.core.tuple.PermissionTuple;

import java.io.Serializable;

/**
 * This POJO (Plain Old Java Object) wraps data to send to the Lambda function.
 * If the operation is ADD, then the expected parameters are the file tuple or
 * the file and a permission tuple assigning the administrator privileges
 * over the file. If the operation is WRITE, only the file tuple.
 */
public class InputToCryptoACLambda implements Serializable {

    /**
     * the operation for which to invoke the lambda function.
     */
    private Operation lambdaOperation;

    /**
     * the file tuple related to the file to add or write.
     */
    private FileTuple fileTuple;

    /**
     * eventual permission tuple related to the file to add.
     */
    private PermissionTuple permissionTuple;

    // note: do not create another constructor, otherwise serialization will have issues

    /**
     * getter for the operation.
     * @return the operation
     */
    public Operation getLambdaOperation() {
        return lambdaOperation;
    }

    /**
     * setter for the operation.
     * @param lambdaOperation the operation
     */
    public void setLambdaOperation(Operation lambdaOperation) {
        this.lambdaOperation = lambdaOperation;
    }

    /**
     * getter for the permission tuple.
     * @return the permission tuple
     */
    public PermissionTuple getPermissionTuple() {
        return permissionTuple;
    }

    /**
     * setter for the permission tuple.
     * @param permissionTuple the permission tuple
     */
    public void setPermissionTuple(PermissionTuple permissionTuple) {
        this.permissionTuple = permissionTuple;
    }

    /**
     * getter for the file tuple.
     * @return the file tuple
     */
    public FileTuple getFileTuple() {
        return fileTuple;
    }

    /**
     * setter for the file tuple.
     * @param fileTuple the file tuple
     */
    public void setFileTuple(FileTuple fileTuple) {
        this.fileTuple = fileTuple;
    }
}


