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

    // TODO like deinit, do init here?

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

    /**
     * This function is invoked whenever the core object
     * is dismissed, and it should contain the code to
     * de-initialize the core (e.g., possibly disconnect from
     * remote services like MQTT brokers, databases, etc.)
     */
    abstract fun deinit()
}