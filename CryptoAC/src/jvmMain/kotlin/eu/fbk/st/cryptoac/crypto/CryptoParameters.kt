package eu.fbk.st.cryptoac.crypto

/**
 * A CryptoParameters supplies the necessary parameters to instantiate a Crypto object.
 * A CryptoParameters is defined by the [asymEncKeysLength], the [asymEncKeysGenAlgorithm],
 * the [asymEncAlgorithm], the [asymSigKeysLength], the [asymSigKeysGenAlgorithm],
 * the [asymSigAlgorithm], the [symKeyLength], the [symAlgorithm], the [hashAlgorithm],
 * the [symAuthenticatedEncryptionAlgorithm] and the [hashLength]. All lengths are in bits.
 */
data class CryptoParameters(
    val asymEncKeysLength: Int, val asymEncKeysGenAlgorithm: String, val asymEncAlgorithm: String,
    val asymSigKeysLength: Int, val asymSigKeysGenAlgorithm: String, val asymSigAlgorithm: String,
    val symKeyLength: Int, val symAlgorithm: String,
    val symAuthenticatedEncryptionAlgorithm: String,
    val hashAlgorithm: String, val hashLength: Int,
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as CryptoParameters

        if (asymEncKeysLength != other.asymEncKeysLength) return false
        if (asymEncKeysGenAlgorithm != other.asymEncKeysGenAlgorithm) return false
        if (asymEncAlgorithm != other.asymEncAlgorithm) return false
        if (asymSigKeysLength != other.asymSigKeysLength) return false
        if (asymSigKeysGenAlgorithm != other.asymSigKeysGenAlgorithm) return false
        if (asymSigAlgorithm != other.asymSigAlgorithm) return false
        if (symKeyLength != other.symKeyLength) return false
        if (symAlgorithm != other.symAlgorithm) return false
        if (symAuthenticatedEncryptionAlgorithm != other.symAuthenticatedEncryptionAlgorithm) return false
        if (hashAlgorithm != other.hashAlgorithm) return false
        if (hashLength != other.hashLength) return false

        return true
    }

    override fun hashCode(): Int {
        var result = asymEncKeysLength
        result = 31 * result + asymEncKeysGenAlgorithm.hashCode()
        result = 31 * result + asymEncAlgorithm.hashCode()
        result = 31 * result + asymSigKeysLength
        result = 31 * result + asymSigKeysGenAlgorithm.hashCode()
        result = 31 * result + asymSigAlgorithm.hashCode()
        result = 31 * result + symKeyLength
        result = 31 * result + symAlgorithm.hashCode()
        result = 31 * result + symAuthenticatedEncryptionAlgorithm.hashCode()
        result = 31 * result + hashAlgorithm.hashCode()
        result = 31 * result + hashLength
        return result
    }
}