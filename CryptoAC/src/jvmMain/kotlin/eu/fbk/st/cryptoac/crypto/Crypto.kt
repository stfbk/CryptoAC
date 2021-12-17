package eu.fbk.st.cryptoac.crypto

import java.io.InputStream
import java.security.GeneralSecurityException

/** Interface for cryptographic operations and parameters in CryptoAC */
interface Crypto {

    /** TODO wipe keys after use.
     * One solution to mitigate the heap state is to run a program with try-finally statement
     * At least we can ensure that the finalization routines are run at program exit
     * The finally block contains some code to force a garbage collect, using System.gc() and System.runFinalization()
     *
     * TODO avoid swap
     * In some operating systems there are system calls that you can use to
     * inform the virtual memory system that speciﬁc parts of the memory are
     * not to be swapped out:
     * in Unix systems, the mlock() system call is often implemented in such a way that locked memory is never swapped to disk
     *
     * TODO avoid data retention by memory
     * Workaround: instead of storing m, we generate a random string R and we store R and R ⊕ m, see [15] and [16] in references
     * [15] Peter Gutmann, Secure Deletion of Data from Magnetic and Solid-State Memory, USENIX Security Symposium Proceedings, 1996
     * [16] G. Di Crescenzo, N. Ferguson, R. Impagliazzo, M. Jakobsson, How To Forget a Secret, STACS 99. STACS 1999. Lecture Note in Computer Science, vol 1563. Springer
     *
     * TODO randomness
     * use PRNG
     * https://man7.org/linux/man-pages/man2/getrandom.2.html
     *
     * TODO how to store user password?
     * how to store user password? hash it, but do not use MD5 and SHA
     *    bcrypt (CPU intensive)
     *    scrypt (CPU and memory intensive)
     *    Argon2 (CPU, memory and degree of parallelism intensive)
     *
     * TODO complete support to openssl library
     * complete support to openssl library
     */

    /** Return a freshly generated asymmetric key pair for encryption */
    fun generateAsymEncKeys(): KeyPairCryptoAC

    /** Return a freshly generated asymmetric key pair for signatures */
    fun generateAsymSigKeys(): KeyPairCryptoAC

    /** Return a freshly generated symmetric key */
    fun generateSymKey(): SymmetricKeyCryptoAC

    /**
     * Return the hash of the given [bytes]. If [bytes]
     * is empty, throw an IllegalArgumentException
     */
    fun generateDigest(bytes: ByteArray): ByteArray


    /**
     * Verify the digital [signature] of the [bytes] with the [verifyingKey]
     * If the signature is not valid, throw a SignatureException
     * If either [bytes] or [signature] is empty, throw an IllegalArgumentException
     */
    fun verifySignature(signature: ByteArray, bytes: ByteArray, verifyingKey: PublicKeyCryptoAC)

    /**
     * Return a digital signature calculated on the [bytes] with the
     * [signingKey]. If [bytes] is empty, throw an IllegalArgumentException
     */
    fun createSignature(bytes: ByteArray, signingKey: PrivateKeyCryptoAC): ByteArray


    /**
     * Encrypt the [asymKeys] of the given [type] with
     * the [encryptingKey] and return the encrypted keys
     */
    fun encryptAsymKeys(
        encryptingKey: PublicKeyCryptoAC,
        asymKeys: KeyPairCryptoAC,
        type: AsymKeysType
    ): EncryptedAsymKeys

    /**
     * Decrypt the [encryptedAsymEncKeys] encrypted with the
     * [encryptingKey] with the [decryptingKey]. Furthermore,
     * check that the keys form a valid key pair. Finally,
     * return them as a key pair
     * If the decryption fails, throw a CryptographicOperationException
     */
    fun decryptAsymEncKeys(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encryptedAsymEncKeys: EncryptedAsymKeys
    ): KeyPairCryptoAC

    /**
     * Decrypt the [encryptedAsymSigKeys] encrypted with the
     * [encryptingKey] with the [decryptingKey]. Furthermore,
     * check that the keys form a valid key pair. Finally,
     * return them as a key pair
     * If the decryption fails, throw a CryptographicOperationException
     */
    fun decryptAsymSigKeys(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encryptedAsymSigKeys: EncryptedAsymKeys
    ): KeyPairCryptoAC


    /**
     * Encrypt the [symKey] with the
     * [encryptingKey] and return the encrypted key
     */
    fun encryptSymKey(encryptingKey: PublicKeyCryptoAC, symKey: SymmetricKeyCryptoAC): EncryptedSymKey

    /**
     * Decrypt the [encryptedSymKey] encrypted with the
     * [encryptingKey] with the [decryptingKey]. Finally,
     * return the secret key
     * If the decryption fails, throw a CryptographicOperationException
     */
    fun decryptSymKey(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encryptedSymKey: EncryptedSymKey
    ): SymmetricKeyCryptoAC


    /**
     * Encrypt the content of the [stream] with
     * the [encryptingKey] and return it as a stream.
     * Empty streams are allowed due to the difficulty
     * of checking whether a stream is empty without
     * consuming it
     */
    fun encryptStream(encryptingKey: SymmetricKeyCryptoAC, stream: InputStream): InputStream

    /**
     * Decrypt the content of the [stream] with
     * the [decryptingKey] and return it as a stream.
     * Empty streams are allowed due to the difficulty
     * of checking whether a stream is empty without
     * consuming it
     */
    fun decryptStream(decryptingKey: SymmetricKeyCryptoAC, stream: InputStream): InputStream


    /**
     * Return a key pair of the given [type] created from
     * the encoded encryption [asymPublicKeyBytes] and the
     * encoded encryption [asymPrivateKeyBytes].
     * Also, check the two keys actually form a valid pair
     */
    fun recreateAsymKeyPair(
        asymPublicKeyBytes: ByteArray,
        asymPrivateKeyBytes: ByteArray,
        type: AsymKeysType,
    ): KeyPairCryptoAC

    /**
     * Reconstruct a public key of the given [type] from
     * the encoded encryption [asymPublicKeyBytes]
     */
    fun recreateAsymPublicKey(
        asymPublicKeyBytes: ByteArray,
        type: AsymKeysType,
    ): PublicKeyCryptoAC

    /**
     * Reconstruct a private key of the given [type] from
     * the encoded encryption [asymPrivateKeyBytes]
     */
    fun recreateAsymPrivateKey(
        asymPrivateKeyBytes: ByteArray,
        type: AsymKeysType,
    ): PrivateKeyCryptoAC
}


/**
 * Custom exception to wrap more specific
 * exceptions thrown during cryptographic operations
 */
class CryptographicOperationException(msg: String) : GeneralSecurityException(msg)