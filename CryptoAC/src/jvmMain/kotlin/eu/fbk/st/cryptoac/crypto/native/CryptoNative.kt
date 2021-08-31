package eu.fbk.st.cryptoac.crypto.native

import eu.fbk.st.cryptoac.crypto.*
import mu.KotlinLogging
import java.io.InputStream
import java.security.KeyPair
import java.security.PrivateKey
import java.security.PublicKey
import javax.crypto.SecretKey

private val logger = KotlinLogging.logger {}

/** TODO use https://wiki.openssl.org/index.php/EVP */

class CryptoNative(val parameters: CryptoParameters?) : Crypto {
    /** Return a freshly generated asymmetric key pair for encryption. */
    override fun generateAsymEncKeys(): KeyPair {
        TODO("remember logs and tests")
    }

    /** Return a freshly generated asymmetric key pair for signatures. */
    override fun generateAsymSigKeys(): KeyPair {
        TODO("remember logs and tests")
    }

    /** Return a freshly generated sym key. */
    override fun generateSymKey(): SecretKey {
        TODO("remember logs and tests")
    }

    /** Return the hash of the given [bytes]. */
    override fun generateDigest(bytes: ByteArray): ByteArray {
        TODO("Not yet implemented")
    }

    /** Verify the digital [signature] of the [bytes] with the [verifyingKey]. */
    override fun verifySignature(signature: ByteArray, bytes: ByteArray, verifyingKey: PublicKey) {
        TODO("remember logs and tests")
    }

    /** Return a digital signature calculated on the [bytes] with the [signingKey]. */
    override fun createSignature(bytes: ByteArray, signingKey: PrivateKey): ByteArray {
        TODO("remember logs and tests")
    }

    /** Encrypt the [asymKeys] of the given [type] with the [encryptingKey] and return the encrypted keys. */
    override fun encryptAsymKeys(encryptingKey: PublicKey, asymKeys: KeyPair, type: AsymKeysType): EncryptedAsymKeys {
        TODO("remember logs and tests")
    }

    /** Decrypt the [encryptedAsymEncKeys] with the [decryptingKey] and return the asym enc keys in a key pair. */
    override fun decryptAsymEncKeys(decryptingKey: PrivateKey, encryptedAsymEncKeys: EncryptedAsymKeys): KeyPair {
        TODO("remember logs and tests")
    }

    /** Decrypt the [encryptedAsymSigKeys] with the [decryptingKey] and return the asym sig keys in a key pair. */
    override fun decryptAsymSigKeys(decryptingKey: PrivateKey, encryptedAsymSigKeys: EncryptedAsymKeys): KeyPair {
        TODO("remember logs and tests")
    }

    /** Encrypt the [symKey] with the [encryptingKey] and return the encrypted key. */
    override fun encryptSymKey(encryptingKey: PublicKey, symKey: SecretKey): EncryptedSymKey {
        TODO("remember logs and tests")
    }

    /** Decrypt the [encryptedSymKey] with the [decryptingKey] and return the key. */
    override fun decryptSymKey(decryptingKey: PrivateKey, encryptedSymKey: EncryptedSymKey): SecretKey {
        TODO("remember logs and tests")
    }

    /**
     * Encrypt the content of the [stream] with the [encryptingKey] and return the stream.
     * Apply a Base64 stream and a cipher stream with the [encryptingKey], respectively.
     */
    override fun encryptStream(encryptingKey: SecretKey, stream: InputStream): InputStream {
        TODO("remember logs and tests")
    }

    /**
     * Decrypt the content of the [stream] with the [decryptingKey] and return the stream.
     * Apply a cipher stream with the [decryptingKey] and a Base64 stream, respectively.
     */
    override fun decryptStream(decryptingKey: SecretKey, stream: InputStream): InputStream {
        TODO("remember logs and tests")
    }

    /**
     * Return a key pair of the given [type] created from the encoded encryption [asymPublicKeyBytes]
     * and the encoded encryption [asymPrivateKeyBytes], if given. If both keys were given, also check
     * the two keys actually form a valid pair.
     */
    override fun recreateAsymKeys(
        asymPublicKeyBytes: ByteArray?,
        asymPrivateKeyBytes: ByteArray?,
        type: AsymKeysType,
    ): KeyPair {
        TODO("Not yet implemented")
    }
}