package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.crypto.*

/**
 * The Core implements a cryptographic access control scheme.
 * Core configures interfaces toward the other entities (e.g.,
 * MM, DM, RM) with the given [coreParameters] and uses the
 * [crypto] object for cryptographic computations
 */
abstract class Core(
    open val crypto: Crypto,
    open val coreParameters: CoreParameters
) {

    // TODO Add file signature to file content

    /** Initialize the admin and return the outcome code */
    abstract fun initAdmin(): OutcomeCode

    /** Initialize the user's and then return the outcome code */
    abstract fun initUser(): OutcomeCode
}