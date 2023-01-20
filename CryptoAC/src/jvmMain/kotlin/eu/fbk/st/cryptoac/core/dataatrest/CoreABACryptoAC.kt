package eu.fbk.st.cryptoac.core.dataatrest

import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

// TODO implementa la possibilità di dare WRITE permissions
//  only anche nel cloud? Però attenti che il CSP può colludere

///**
// * The CoreABACCryptoAC implements an attribute-based CAC scheme
// * with hybrid cryptography for the base CryptoAC scenario.
// * It requires an MM, an RM and a DM service, while AC is optional
// * It uses the given [crypto] object and the [coreParameters]
// */
//class CoreABACryptoAC(
//    override val crypto: CryptoABE,
//    override val coreParameters: CoreParametersABAC
//) : CoreABACTuples(crypto, coreParameters)
//
//// TODO implement