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
     * parameters and eventually return the outcome code
     */
    abstract fun initAdmin(): OutcomeCode

    /**
     * This function is invoked by the user, and it should
     * initialize the user's status, configure eventual
     * parameters and eventually return the outcome code
     */
    abstract fun initUser(): OutcomeCode
}