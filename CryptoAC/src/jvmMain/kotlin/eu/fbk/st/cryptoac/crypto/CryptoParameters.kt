package eu.fbk.st.cryptoac.crypto

/**
 * A CryptoParameters supplies the necessary parameters to instantiate a Crypto object.
 * A CryptoParameters is defined by the [asymEncKeysLength], the [asymEncKeysGenAlgorithm],
 * the [asymEncAlgorithm], the [asymSigKeysLength], the [asymSigKeysGenAlgorithm],
 * the [asymSigAlgorithm], the [symKeyLength], the [symAlgorithm] and the [hashAlgorithm]
 */
data class CryptoParameters(
    val asymEncKeysLength: Int, val asymEncKeysGenAlgorithm: String, val asymEncAlgorithm: String,
    val asymSigKeysLength: Int, val asymSigKeysGenAlgorithm: String, val asymSigAlgorithm: String,
    val symKeyLength: Int, val symAlgorithm: String,
    val hashAlgorithm: String,
)