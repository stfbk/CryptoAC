package eu.fbk.st.cryptoac.implementation.rm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.tuples.FileTuple
import eu.fbk.st.cryptoac.core.tuples.PermissionTuple

/** Interface defining the methods to interact with the RM */
abstract class RMInterface {

    /**
     * Configure the RM with relevant [parameters]
     * and return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_042_RM_CONNECTION_TIMEOUT
     */
    abstract fun configure(parameters: CoreParameters): OutcomeCode

    /**
     * Invoke the RM to validate
     * the add file operation involving the given
     * [newFileTuple] and [adminPermissionTuple]
     * and return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_003_FILE_ALREADY_EXISTS
     * - CODE_004_USER_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_015_FILE_WAS_DELETED
     * - CODE_016_INVALID_PERMISSION
     * - CODE_017_INVALID_VERSION_NUMBER
     * - CODE_020_INVALID_PARAMETER
     * - CODE_021_RM_CONFIGURATION
     * - CODE_025_FILE_RENAMING
     * - CODE_026_TUPLE_FORMAT
     * - CODE_042_RM_CONNECTION_TIMEOUT
     * - CODE_043_DM_CONNECTION_TIMEOUT
     */
    abstract fun checkAddFile(newFileTuple: FileTuple, adminPermissionTuple: PermissionTuple): OutcomeCode

    /**
     * Invoke the RM to validate
     * the write file operation involving the given
     * [newFileTuple] with the [symEncKeyVersionNumber]
     * and return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_004_USER_NOT_FOUND
     * - CODE_006_FILE_NOT_FOUND
     * - CODE_009_FILETUPLE_NOT_FOUND
     * - CODE_015_FILE_WAS_DELETED
     * - CODE_017_INVALID_VERSION_NUMBER
     * - CODE_020_INVALID_PARAMETER
     * - CODE_021_RM_CONFIGURATION
     * - CODE_025_FILE_RENAMING
     * - CODE_027_AC_ENFORCEMENT_INCONSISTENT
     * - CODE_042_RM_CONNECTION_TIMEOUT
     * - CODE_043_DM_CONNECTION_TIMEOUT
     */
    abstract fun checkWriteFile(symEncKeyVersionNumber: Int, newFileTuple: FileTuple): OutcomeCode
}