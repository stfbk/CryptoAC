package eu.fbk.st.cryptoac.crypto

import java.security.GeneralSecurityException

/**
 * Interface for cryptographic
 * operations in CryptoAC
 */
interface Crypto {

    // TODO interesting? => https://github.com/wolfSSL/wolfcrypt-jni
    // TODO interesting? => https://github.com/google/tink

    /**
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

    /**
     * This function is invoked each time the cryptographic
     * provider is initialized, and it should contain the
     * code to initialize the provider
     */
    fun init()

    /**
     * This function is invoked each time the cryptographic
     * provider is destroyed, and it should contain the
     * code to de-initialize the provider (e.g., by wiping
     * secret keys)
     */
    fun deinit()
}

/**
 * Custom exception to wrap more specific
 * exceptions thrown during cryptographic operations
 */
class CryptographicOperationException(msg: String) : GeneralSecurityException(msg)
