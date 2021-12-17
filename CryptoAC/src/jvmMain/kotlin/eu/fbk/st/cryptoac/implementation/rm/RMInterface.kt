package eu.fbk.st.cryptoac.implementation.rm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.tuples.FileTuple
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple

/** Abstract class defining the methods to interface with the RM */
abstract class RMInterface {

    /**
     * Configure the RM with relevant
     * [parameters] and return the outcome code
     */
    abstract fun configure(parameters: CoreParameters): OutcomeCode

    /**
     * Invoke the RM to validate
     * the add file operation involving the given
     * [newFileTuple] and [adminPermissionTuple]
     * and return the outcome code
     */
    abstract fun checkAddFile(newFileTuple: FileTuple, adminPermissionTuple: PermissionTuple): OutcomeCode

    /**
     * Invoke the RM to validate
     * the write file operation involving the given
     * [newFileTuple] with the [symEncKeyVersionNumber]
     * and return the outcome code
     */
    abstract fun checkWriteFile(symEncKeyVersionNumber: Int, newFileTuple: FileTuple): OutcomeCode
}