package eu.fbk.st.cryptoac.crypto

import java.io.InputStream

/**
 * Interface for symmetric cryptographic
 * operations in CryptoAC
 */
interface CryptoSKE : Crypto {

    /** Return a freshly generated symmetric key */
    fun generateSymKey(): SymmetricKeyCryptoAC

    /**
     * Encrypt the content of the [stream] with
     * the [encryptingKey] and return it as a stream.
     * Empty streams are allowed due to the difficulty
     * of checking whether a stream is empty without
     * consuming it. Ensure that authenticated encryption
     * only is used
     */
    fun encryptStream(
        encryptingKey: SymmetricKeyCryptoAC,
        stream: InputStream
    ): InputStream

    /**
     * Decrypt the content of the [stream] with
     * the [decryptingKey] and return it as a stream.
     * Empty streams are allowed due to the difficulty
     * of checking whether a stream is empty without
     * consuming it. Ensure that authenticated encryption
     * only is used
     */
    fun decryptStream(
        decryptingKey: SymmetricKeyCryptoAC,
        stream: InputStream
    ): InputStream
}
