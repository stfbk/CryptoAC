package eu.fbk.st.cryptoac.implementation.rm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.tuples.FileTuple
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple

/** Interface defining the methods to interact with the RM */
abstract class RMInterface {

    /**
     * If necessary, configure the RM with relevant
     * [parameters] and return the outcome code
     */
    abstract fun configure(parameters: CoreParameters): OutcomeCode

    /**
     * Invoke the RM to validate the creation of
     * a new resource involving the given
     * [newFileTuple] and [adminPermissionTuple]
     * and return the outcome code
     */
    abstract fun checkAddFile(newFileTuple: FileTuple, adminPermissionTuple: PermissionTuple): OutcomeCode

    /**
     * Invoke the RM to validate the update of
     * a resource involving the given [newFileTuple]
     * and [symEncKeyVersionNumber], and return the
     * outcome code
     */
    abstract fun checkWriteFile(symEncKeyVersionNumber: Int, newFileTuple: FileTuple): OutcomeCode
}