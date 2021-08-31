package eu.fbk.st.cryptoac.crypto

import java.io.InputStream
import java.security.KeyPair
import java.security.PrivateKey
import java.security.PublicKey
import javax.crypto.SecretKey

/** Interface for cryptographic operations and parameters in CryptoAC. */
interface Crypto {

    /** Return a freshly generated asymmetric key pair for encryption. */
    fun generateAsymEncKeys(): KeyPair

    /** Return a freshly generated asymmetric key pair for signatures. */
    fun generateAsymSigKeys(): KeyPair

    /** Return a freshly generated sym key. */
    fun generateSymKey(): SecretKey

    /** Return the hash of the given [bytes]. */
    fun generateDigest(bytes: ByteArray): ByteArray


    /** Verify the digital [signature] of the [bytes] with the [verifyingKey]. */
    fun verifySignature(signature: ByteArray, bytes: ByteArray, verifyingKey: PublicKey)

    /** Return a digital signature calculated on the [bytes] with the [signingKey]. */
    fun createSignature(bytes: ByteArray, signingKey: PrivateKey): ByteArray


    /** Encrypt the [asymKeys] of the given [type] with the [encryptingKey] and return the encrypted keys. */
    fun encryptAsymKeys(encryptingKey: PublicKey, asymKeys: KeyPair, type: AsymKeysType): EncryptedAsymKeys

    /** Decrypt the [encryptedAsymEncKeys] with the [decryptingKey] and return the asym enc keys in a key pair. */
    fun decryptAsymEncKeys(decryptingKey: PrivateKey, encryptedAsymEncKeys: EncryptedAsymKeys): KeyPair

    /** Decrypt the [encryptedAsymSigKeys] with the [decryptingKey] and return the asym sig keys in a key pair. */
    fun decryptAsymSigKeys(decryptingKey: PrivateKey, encryptedAsymSigKeys: EncryptedAsymKeys): KeyPair


    /** Encrypt the [symKey] with the [encryptingKey] and return the encrypted key. */
    fun encryptSymKey(encryptingKey: PublicKey, symKey: SecretKey): EncryptedSymKey

    /** Decrypt the [encryptedSymKey] with the [decryptingKey] and return the key. */
    fun decryptSymKey(decryptingKey: PrivateKey, encryptedSymKey: EncryptedSymKey): SecretKey


    /**
     * Encrypt the content of the [stream] with the [encryptingKey] and return the stream.
     * Apply a Base64 stream and a cipher stream with the [encryptingKey], respectively.
     */
    fun encryptStream(encryptingKey: SecretKey, stream: InputStream): InputStream

    /**
     * Decrypt the content of the [stream] with the [decryptingKey] and return the stream.
     * Apply a cipher stream with the [decryptingKey] and a Base64 stream, respectively.
     */
    fun decryptStream(decryptingKey: SecretKey, stream: InputStream): InputStream

    /**
     * Return a key pair of the given [type] created from the encoded encryption [asymPublicKeyBytes]
     * and the encoded encryption [asymPrivateKeyBytes], if given. If both keys were given, also check
     * the two keys actually form a valid pair.
     */
    fun recreateAsymKeys(
        asymPublicKeyBytes: ByteArray? = null, asymPrivateKeyBytes: ByteArray? = null,
        type: AsymKeysType,
    ): KeyPair
}
