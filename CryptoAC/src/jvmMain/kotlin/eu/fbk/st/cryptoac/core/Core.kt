package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.crypto.*

/**
 * The Core implements the cryptographic access control scheme.
 * It receives the [coreParameters] and uses the [crypto] object
 * for performing cryptographic computations.
 */
abstract class Core(
    open val crypto: Crypto,
    open val coreParameters: CoreParameters
) {

    /**
     * This function is invoked by the admin, and it should
     * initialize the admin's status, configure eventual
     * parameters and eventually return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_002_ROLE_ALREADY_EXISTS
     * - CODE_010_ROLETUPLE_ALREADY_EXISTS
     * - CODE_014_ROLE_WAS_DELETED
     * - CODE_028_OPA_POLICY_CREATION
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_034_ADMIN_ALREADY_INITIALIZED
     * - CODE_042_RM_CONNECTION_TIMEOUT
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     * - CODE_060_ADMIN_NAME
     */
    abstract fun initAdmin(): OutcomeCode

    /**
     * This function is invoked by the user, and it should
     * initialize the user's status, configure eventual
     * parameters and eventually return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_004_USER_NOT_FOUND
     * - CODE_013_USER_WAS_DELETED
     * - CODE_030_OPA_DOCUMENT_DOWNLOAD
     * - CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     * - CODE_044_MM_CONNECTION_TIMEOUT
     * - CODE_061_USER_ALREADY_INITIALIZED
     */
    abstract fun initUser(): OutcomeCode
}