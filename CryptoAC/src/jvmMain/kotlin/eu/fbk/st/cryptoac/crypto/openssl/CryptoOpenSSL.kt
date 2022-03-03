package eu.fbk.st.cryptoac.crypto.openssl

//import eu.fbk.st.cryptoac.crypto.*
//import mu.KotlinLogging
//import java.io.InputStream
//
//private val logger = KotlinLogging.logger {}
//
//
///** TODO use https://wiki.openssl.org/index.php/EVP */
//
//class CryptoOpenSSL(val parameters: CryptoParameters?) : Crypto {
//
//    private val asymEncKeysLength = parameters?.asymEncKeysLength ?: 2048
//    private val asymEncKeysGenAlgorithm = parameters?.asymEncKeysGenAlgorithm ?: "RSA"
//    private val asymEncAlgorithm = parameters?.asymEncAlgorithm ?: "RSA"
//    private val asymSigKeysLength = parameters?.asymSigKeysLength ?: 2048
//    private val asymSigKeysGenAlgorithm = parameters?.asymSigKeysGenAlgorithm ?: "RSA"
//    private val asymSigAlgorithm = parameters?.asymSigAlgorithm ?: "SHA512withRSA"
//    private val hashAlgorithm = parameters?.hashAlgorithm ?: "SHA-512"
//    private val symKeyLength = parameters?.symKeyLength ?: 256
//    private val symKeyAlgorithm = parameters?.symAlgorithm ?: "AES"
//
//    init {
//        Runtime.getRuntime().loadLibrary("CryptoAC")
//    }
//
//    // TODO test everything
//
//    external fun callInt(x: Int): Int
//    external fun generateKey(): Any?
//}