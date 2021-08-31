package eu.fbk.st.cryptoac.crypto

import org.junit.jupiter.api.Test

/** Test class for interface "Crypto". */
internal abstract class CryptoTest {

    @Test
    fun generateAsymEncKeys() {
        // TODO tests for generateAsymEncKeys
    }

    @Test
    fun generateAsymSigKeys() {
        // TODO tests for generateAsymSigKeys
    }

    @Test
    fun generateSymKey() {
        // TODO tests for generateSymKey
    }

    @Test
    fun generateDigest() {
        // TODO tests for generateDigest
    }

    @Test
    fun verifySignature() {
        `verification of original signature works`()
        `verification of modified signature fails`()
        `verification of short signature throws exception`()
        `verification of signature of zero bytes fails`()
        `verification of swapped signatures fails`()
        `verification of signatures made with other key fails`()
    }

    @Test
    fun createSignature() {
        `signature creation of zero bytes fails`()
    }

    @Test
    fun encryptAsymKeys() {
        /** Tested in the "decryptAsymEncKeys()" test. */
    }

    @Test
    fun decryptAsymEncKeys() {
        // TODO tests for decryptAsymEncKeys
    }

    @Test
    fun encryptSymKey() {
        /** Tested in the "decryptSymKey()" test. */
    }

    @Test
    fun decryptAsymSigKeys() {
        // TODO tests for decryptAsymSigKeys
    }

    @Test
    fun decryptSymKey() {
        `stream encryption and decryption with different keys does not work`()
        `stream encryption and decryption work`()
    }

    @Test
    fun encryptStream() {
        /** Tested in the "decryptStream()" test. */
    }

    @Test
    fun decryptStream() {
        `encryption and decryption of asymmetric encryption keys works`()
        `encryption and decryption of asymmetric encryption keys with different keys does not work`()
        `encryption and decryption of asymmetric signing keys works`()
        `encryption and decryption of asymmetric signing keys with different keys does not work`()
        `encryption and decryption of symmetric key works`()
        `encryption and decryption of symmetric key with different keys does not work`()
    }

    @Test
    fun recreateAsymKeys() {
        `recreation of asymmetric encryption keys from random bytes does not work`()
        `recreation of asymmetric encryption keys works`()
        `recreation of asymmetric signing keys works`()
        `recreation of asymmetric signing keys from random bytes does not work`()
        `recreation of different asymmetric encryption keys does not work`()
        `recreation of different asymmetric signing keys does not work`()
    }


    abstract fun `verification of original signature works`()
    abstract fun `signature creation of zero bytes fails`()

    abstract fun `verification of signature of zero bytes fails`()
    abstract fun `verification of modified signature fails`()
    abstract fun `verification of swapped signatures fails`()
    abstract fun `verification of signatures made with other key fails`()
    abstract fun `verification of short signature throws exception`()

    abstract fun `recreation of asymmetric encryption keys works`()
    abstract fun `recreation of different asymmetric encryption keys does not work`()
    abstract fun `recreation of asymmetric encryption keys from random bytes does not work`()
    abstract fun `recreation of asymmetric signing keys works`()
    abstract fun `recreation of different asymmetric signing keys does not work`()
    abstract fun `recreation of asymmetric signing keys from random bytes does not work`()

    abstract fun `encryption and decryption of asymmetric encryption keys works`()
    abstract fun `encryption and decryption of asymmetric encryption keys with different keys does not work`()
    abstract fun `encryption and decryption of asymmetric signing keys works`()
    abstract fun `encryption and decryption of asymmetric signing keys with different keys does not work`()
    abstract fun `encryption and decryption of symmetric key works`()
    abstract fun `encryption and decryption of symmetric key with different keys does not work`()

    abstract fun `stream encryption and decryption work`()
    abstract fun `stream encryption and decryption with different keys does not work`()
}
