package eu.fbk.st.cryptoac.crypto.openssl

import eu.fbk.st.cryptoac.crypto.*
import mu.KotlinLogging
import java.io.InputStream

private val logger = KotlinLogging.logger {}


/** TODO use https://wiki.openssl.org/index.php/EVP */

class CryptoOpenSSL(val parameters: CryptoParameters?) : Crypto {

    private val asymEncKeysLength = parameters?.asymEncKeysLength ?: 2048
    private val asymEncKeysGenAlgorithm = parameters?.asymEncKeysGenAlgorithm ?: "RSA"
    private val asymEncAlgorithm = parameters?.asymEncAlgorithm ?: "RSA"
    private val asymSigKeysLength = parameters?.asymSigKeysLength ?: 2048
    private val asymSigKeysGenAlgorithm = parameters?.asymSigKeysGenAlgorithm ?: "RSA"
    private val asymSigAlgorithm = parameters?.asymSigAlgorithm ?: "SHA512withRSA"
    private val hashAlgorithm = parameters?.hashAlgorithm ?: "SHA-512"
    private val symKeyLength = parameters?.symKeyLength ?: 256
    private val symKeyAlgorithm = parameters?.symAlgorithm ?: "AES"

    init {
        Runtime.getRuntime().loadLibrary("CryptoAC")
    }

    // TODO test everything

    external fun callInt(x: Int): Int
    external fun generateKey(): Any?

    /** Return a freshly generated asymmetric key pair for encryption */
    override fun generateAsymEncKeys(): KeyPairCryptoAC {
        TODO("Not yet implemented")
    }

    /** Return a freshly generated asymmetric key pair for signatures */
    override fun generateAsymSigKeys(): KeyPairCryptoAC {
        TODO("Not yet implemented")
    }

    /** Return a freshly generated symmetric key */
    override fun generateSymKey(): SymmetricKeyCryptoAC {
        TODO("Not yet implemented")
    }

    /**
     * Return the hash of the given [bytes]. If [bytes]
     * is empty, throw an IllegalArgumentException
     */
    override fun generateDigest(bytes: ByteArray): ByteArray {
        TODO("Not yet implemented")
    }

    /**
     * Verify the digital [signature] of the [bytes] with the [verifyingKey]
     * If the signature is not valid, throw a SignatureException
     * If either [bytes] or [signature] is empty, throw an IllegalArgumentException
     */
    override fun verifySignature(signature: ByteArray, bytes: ByteArray, verifyingKey: PublicKeyCryptoAC) {
        TODO("Not yet implemented")
    }

    /**
     * Return a digital signature calculated on the [bytes] with the
     * [signingKey]. If [bytes] is empty, throw an IllegalArgumentException
     */
    override fun createSignature(bytes: ByteArray, signingKey: PrivateKeyCryptoAC): ByteArray {
        TODO("Not yet implemented")
    }

    /**
     * Encrypt the [asymKeys] of the given [type] with
     * the [encryptingKey] and return the encrypted keys
     */
    override fun encryptAsymKeys(
        encryptingKey: PublicKeyCryptoAC,
        asymKeys: KeyPairCryptoAC,
        type: AsymKeysType
    ): EncryptedAsymKeys {
        TODO("Not yet implemented")
    }

    /**
     * Decrypt the [encryptedAsymEncKeys] encrypted with the
     * [encryptingKey] with the [decryptingKey]. Furthermore,
     * check that the keys form a valid key pair. Finally,
     * return them as a key pair
     */
    override fun decryptAsymEncKeys(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encryptedAsymEncKeys: EncryptedAsymKeys
    ): KeyPairCryptoAC {
        TODO("Not yet implemented")
    }

    /**
     * Decrypt the [encryptedAsymSigKeys] encrypted with the
     * [encryptingKey] with the [decryptingKey]. Furthermore,
     * check that the keys form a valid key pair. Finally,
     * return them as a key pair
     */
    override fun decryptAsymSigKeys(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encryptedAsymSigKeys: EncryptedAsymKeys
    ): KeyPairCryptoAC {
        TODO("Not yet implemented")
    }

    /**
     * Encrypt the [symKey] with the
     * [encryptingKey] and return the encrypted key
     */
    override fun encryptSymKey(encryptingKey: PublicKeyCryptoAC, symKey: SymmetricKeyCryptoAC): EncryptedSymKey {
        TODO("Not yet implemented")
    }

    /**
     * Decrypt the [encryptedSymKey] encrypted with the
     * [encryptingKey] with the [decryptingKey]. Finally,
     * return the secret key
     */
    override fun decryptSymKey(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encryptedSymKey: EncryptedSymKey
    ): SymmetricKeyCryptoAC {
        TODO("Not yet implemented")
    }

    /**
     * Encrypt the content of the [stream] with
     * the [encryptingKey] and return it as a stream.
     * Empty streams are allowed due to the difficulty
     * of checking whether a stream is empty without
     * consuming it
     */
    override fun encryptStream(encryptingKey: SymmetricKeyCryptoAC, stream: InputStream): InputStream {
        TODO("Not yet implemented")
    }

    /**
     * Decrypt the content of the [stream] with
     * the [decryptingKey] and return it as a stream.
     * Empty streams are allowed due to the difficulty
     * of checking whether a stream is empty without
     * consuming it
     */
    override fun decryptStream(decryptingKey: SymmetricKeyCryptoAC, stream: InputStream): InputStream {
        TODO("Not yet implemented")
    }

    /**
     * Return a key pair of the given [type] created from
     * the encoded encryption [asymPublicKeyBytes] and the
     * encoded encryption [asymPrivateKeyBytes].
     * Also, check the two keys actually form a valid pair
     */
    override fun recreateAsymKeyPair(
        asymPublicKeyBytes: ByteArray,
        asymPrivateKeyBytes: ByteArray,
        type: AsymKeysType
    ): KeyPairCryptoAC {
        TODO("Not yet implemented")
    }

    /**
     * Reconstruct a public key of the given [type] from
     * the encoded encryption [asymPublicKeyBytes]
     */
    override fun recreateAsymPublicKey(asymPublicKeyBytes: ByteArray, type: AsymKeysType): PublicKeyCryptoAC {
        TODO("Not yet implemented")
    }

    /**
     * Reconstruct a private key of the given [type] from
     * the encoded encryption [asymPrivateKeyBytes]
     */
    override fun recreateAsymPrivateKey(asymPrivateKeyBytes: ByteArray, type: AsymKeysType): PrivateKeyCryptoAC {
        TODO("Not yet implemented")
    }

}