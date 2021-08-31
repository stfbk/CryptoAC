package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.crypto.*

/**
 * The Core implements a cryptographic access control scheme.
 * Core uses the keys of the [user] and the [crypto] for
 * cryptographic computations. Core configures interfaces toward
 * the other entities (e.g., MS, DS, RM) with the given [coreParameters].
 */
abstract class Core(
    open val user: User,
    open val crypto: Crypto,
    open val coreParameters: CoreParameters
) {
    /** Initialize the admin [user]'s and return the outcome code. */
    abstract fun initAdmin(): OutcomeCode

    /** Initialize the [user]'s and then return the outcome code. */
    abstract fun initUser(): OutcomeCode
}