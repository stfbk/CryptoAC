package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.crypto.*

/**
 * The CoreRBAC extends the [Core] class by implementing an
 * attribute-based based cryptographic access control scheme.
 * It receives the [coreParameters] and uses the [crypto]
 * object for performing cryptographic computations
 */
abstract class CoreABAC(
    override val crypto: Crypto,
    override val coreParameters: CoreParameters
) : Core(crypto, coreParameters) {

    // TODO when ABE is available
}