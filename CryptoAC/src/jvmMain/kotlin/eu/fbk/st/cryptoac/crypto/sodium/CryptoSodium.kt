package eu.fbk.st.cryptoac.crypto.sodium

import com.ionspin.kotlin.crypto.LibsodiumInitializer
import com.ionspin.kotlin.crypto.box.Box
import com.ionspin.kotlin.crypto.box.Box.seal
import com.ionspin.kotlin.crypto.box.Box.sealOpen
import com.ionspin.kotlin.crypto.box.BoxCorruptedOrTamperedDataException
import com.ionspin.kotlin.crypto.generichash.GenericHash.genericHash
import com.ionspin.kotlin.crypto.secretstream.SecretStream
import com.ionspin.kotlin.crypto.secretstream.crypto_secretstream_xchacha20poly1305_HEADERBYTES
import com.ionspin.kotlin.crypto.signature.InvalidSignatureException
import com.ionspin.kotlin.crypto.signature.Signature
import com.ionspin.kotlin.crypto.signature.Signature.detached
import com.ionspin.kotlin.crypto.signature.Signature.verifyDetached
import eu.fbk.st.cryptoac.crypto.*
import kotlinx.coroutines.runBlocking
import mu.KotlinLogging
import org.apache.commons.codec.binary.Base64InputStream
import java.io.InputStream
import java.security.*
import java.security.spec.InvalidKeySpecException
import java.util.stream.Stream
import javax.crypto.BadPaddingException

private val logger = KotlinLogging.logger {}

/**
 * Implementation of the Crypto interface with Sodium library (https://libsodium.gitbook.io/).
 * As Sodium has built-in algorithms, the [parameters] are not used, except for the length of
 * the hashes
 */
class CryptoSodium(private val parameters: CryptoParameters?) : Crypto {

    private val hashLength = parameters?.hashLength ?: (512/8)

    init {
        runBlocking {
            try {
                if (LibsodiumInitializer.isInitialized()) {
                    logger.warn {
                        "Receive request to initialize the Sodium " +
                        "library, but it was already initialized"
                    }
                } else {
                    logger.info { "Initializing the Sodium library" }
                    LibsodiumInitializer.initialize()
                }
            } catch(e: Exception) {
                logger.error { "Unable to initialize the Sodium library (${e.localizedMessage})" }
                logger.error { e }
                throw e
            }
        }
    }


    /** Return a freshly generated asymmetric key pair for encryption */
    override fun generateAsymEncKeys(): KeyPairCryptoAC {
        logger.debug { "Generating encryption asymmetric key pair" }
        return Box.keypair().toKeyPairSodium()
    }

    /** Return a freshly generated asymmetric key pair for signatures */
    override fun generateAsymSigKeys(): KeyPairCryptoAC {
        logger.debug { "Generating signing asymmetric key pair" }
        return Signature.keypair().toKeyPairSodium()
    }

    /** Return a freshly generated symmetric key */
    override fun generateSymKey(): SymmetricKeyCryptoAC {
        logger.debug { "Generating symmetric key" }
        return SymmetricKeySodium(SecretKeySodium(SecretStream.xChaCha20Poly1305Keygen()))
    }

    /**
     * Return the hash of the given [bytes]. If [bytes]
     * is empty, throw an IllegalArgumentException
     */
    override fun generateDigest(bytes: ByteArray): ByteArray {
        logger.debug { "Hashing ${bytes.size} bytes" }
        require(bytes.isNotEmpty()) { "Empty ByteArray for digest" }
        return genericHash(bytes.toUByteArray(), hashLength, null).toByteArray()
    }

    /**
     * Verify the digital [signature] of the [bytes] with the [verifyingKey]
     * If the signature is not valid, throw a SignatureException
     * If either [bytes] or [signature] is empty, throw an IllegalArgumentException
     *
     * In this implementation, Sodium uses the Ed25519 (EdDSA) algorithm
     */
    override fun verifySignature(signature: ByteArray, bytes: ByteArray, verifyingKey: PublicKeyCryptoAC) {
        logger.debug { "Verifying signature of ${signature.size} bytes for ${bytes.size} bytes" }
        require(bytes.isNotEmpty()) { "Empty ByteArray for bytes" }
        require(signature.isNotEmpty()) { "Empty ByteArray for signature" }

        try {
            verifyDetached(
                signature = signature.toUByteArray(),
                message = bytes.toUByteArray(),
                publicKey = (verifyingKey as PublicKeySodium).public
            )
        } catch (e: InvalidSignatureException) {
            logger.error { "Invalid signature" }
            throw SignatureException("Invalid signature")
        }
        logger.debug { "Signature successfully verified" }
    }

    /**
     * Return a digital signature calculated on the [bytes] with the
     * [signingKey]. If [bytes] is empty, throw an IllegalArgumentException
     *
     * In this implementation, Sodium uses the Ed25519 (EdDSA) algorithm
     */
    override fun createSignature(bytes: ByteArray, signingKey: PrivateKeyCryptoAC): ByteArray {
        logger.debug { "Creating signature for ${bytes.size} bytes" }
        require(bytes.isNotEmpty()) { "Empty ByteArray for bytes to sign" }

        return detached(
            message = bytes.toUByteArray(),
            secretKey = (signingKey as PrivateKeySodium).private
        ).toByteArray()
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
        logger.debug { "Encrypting asymmetric key pair" }

        return EncryptedAsymKeys(
            public = asymEncrypt(encryptingKey = encryptingKey, bytes = asymKeys.public.encoded),
            private = asymEncrypt(encryptingKey = encryptingKey, bytes = asymKeys.private.encoded),
            keysType = type,
        )
    }

    /**
     * Decrypt the [encryptedAsymEncKeys] encrypted with the
     * [encryptingKey] with the [decryptingKey]. Furthermore,
     * check that the keys form a valid key pair. Finally,
     * return them as a key pair
     * If the decryption fails, throw a CryptographicOperationException
     */
    override fun decryptAsymEncKeys(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encryptedAsymEncKeys: EncryptedAsymKeys
    ): KeyPairCryptoAC {
        logger.debug { "Decrypting asymmetric encryption key pair" }
        return try {
            recreateAsymKeyPair(
                asymPublicKeyBytes = asymDecrypt(
                    encryptingKey = encryptingKey,
                    decryptingKey = decryptingKey,
                    encBytes = encryptedAsymEncKeys.public
                ),
                asymPrivateKeyBytes = asymDecrypt(
                    encryptingKey = encryptingKey,
                    decryptingKey = decryptingKey,
                    encBytes = encryptedAsymEncKeys.private
                ),
                type = AsymKeysType.ENC
            )
        } catch (e: Exception) {
            when (e) {
                is BoxCorruptedOrTamperedDataException, is NegativeArraySizeException -> {
                    logger.error { "Exception while decrypting asymmetric encryption key pair" }
                    logger.error { e }
                    throw CryptographicOperationException(e.localizedMessage)
                }
                else -> throw e
            }
        }
    }

    /**
     * Decrypt the [encryptedAsymSigKeys] encrypted with the
     * [encryptingKey] with the [decryptingKey]. Furthermore,
     * check that the keys form a valid key pair. Finally,
     * return them as a key pair
     * If the decryption fails, throw a CryptographicOperationException
     */
    override fun decryptAsymSigKeys(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encryptedAsymSigKeys: EncryptedAsymKeys
    ): KeyPairCryptoAC {
        logger.debug { "Decrypting asymmetric signature key pair" }

        return try {
            recreateAsymKeyPair(
                asymPublicKeyBytes = asymDecrypt(
                    encryptingKey = encryptingKey,
                    decryptingKey = decryptingKey,
                    encBytes = encryptedAsymSigKeys.public
                ),
                asymPrivateKeyBytes = asymDecrypt(
                    encryptingKey = encryptingKey,
                    decryptingKey = decryptingKey,
                    encBytes = encryptedAsymSigKeys.private
                ),
                type = AsymKeysType.SIG
            )
        } catch (e: Exception) {
            when (e) {
                is BoxCorruptedOrTamperedDataException, is NegativeArraySizeException -> {
                    logger.error { "Exception while decrypting asymmetric signature key pair" }
                    logger.error { e }
                    throw CryptographicOperationException(e.localizedMessage)
                }
                else -> throw e
            }
        }
    }

    /**
     * Encrypt the [symKey] with the
     * [encryptingKey] and return the encrypted key
     */
    override fun encryptSymKey(
        encryptingKey: PublicKeyCryptoAC,
        symKey: SymmetricKeyCryptoAC
    ): EncryptedSymKey {
        logger.debug { "Encrypting symmetric key" }
        return EncryptedSymKey(
            asymEncrypt(encryptingKey = encryptingKey, bytes = symKey.secretKey.encoded)
        )
    }

    /**
     * Decrypt the [encryptedSymKey] encrypted with the
     * [encryptingKey] with the [decryptingKey]. Finally,
     * return the secret key
     * If the decryption fails, throw a CryptographicOperationException
     */
    override fun decryptSymKey(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encryptedSymKey: EncryptedSymKey
    ): SymmetricKeyCryptoAC {
        logger.debug { "Decrypting symmetric key" }

        return try {
            SymmetricKeySodium(
                SecretKeySodium(
                    asymDecrypt(
                        encryptingKey = encryptingKey,
                        decryptingKey = decryptingKey,
                        encBytes = encryptedSymKey.key
                    ).toUByteArray()
                )
            )
        } catch (e: BoxCorruptedOrTamperedDataException) {
            logger.error { "Exception while decrypting symmetric key" }
            logger.error { e }
            throw CryptographicOperationException(e.localizedMessage)
        }
    }


    /**
     * Encrypt the content of the [stream] with
     * the [encryptingKey] and return it as a stream.
     * Empty streams are allowed due to the difficulty
     * of checking whether a stream is empty without
     * consuming it. Ensure that authenticated encryption
     * only is used
     *
     * In this implementation, add first the header, then
     * the content of the [stream] where we first apply
     * a Base64 stream and then a Sodium cipher stream
     * with the [encryptingKey]
     * The Sodium cipher stream uses a hardened version of
     * the ChaCha20 stream cipher and the Poly1305 universal
     * hash function
     */
    override fun encryptStream(encryptingKey: SymmetricKeyCryptoAC, stream: InputStream): InputStream {
        logger.debug { "Encrypting stream" }
        val stateAndHeader = SecretStream.xChaCha20Poly1305InitPush(
            encryptingKey.secretKey.encoded.toUByteArray()
        )
        return SodiumCipherInputStream(
            inputStream = Base64InputStream(stream, true),
            stateAndHeader = stateAndHeader,
            mode = SodiumCipherInputStream.ENCRYPT_MODE,
        )
    }

    /**
     * Decrypt the content of the [stream] with
     * the [decryptingKey] and return it as a stream.
     * Empty streams are allowed due to the difficulty
     * of checking whether a stream is empty without
     * consuming it. Ensure that authenticated encryption
     * only is used
     *
     * In this implementation, get first the header, then
     * wrap the content of the [stream] first with a Sodium
     * cipher stream with the [decryptingKey] and then
     * a Base64 stream
     * The Sodium cipher stream uses a hardened version of
     * the ChaCha20 stream cipher and the Poly1305 universal
     * hash function
     */
    override fun decryptStream(decryptingKey: SymmetricKeyCryptoAC, stream: InputStream): InputStream {
        logger.debug { "Decrypting stream" }
        val header = stream.readNBytes(crypto_secretstream_xchacha20poly1305_HEADERBYTES)
        val stateAndHeader = SecretStream.xChaCha20Poly1305InitPull(
            key = decryptingKey.secretKey.encoded.toUByteArray(),
            header = header.toUByteArray()
        )
        return Base64InputStream(SodiumCipherInputStream(
            inputStream = stream,
            stateAndHeader = stateAndHeader,
            mode = SodiumCipherInputStream.DECRYPT_MODE,
        ), false)
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
        logger.debug { "Recreating asymmetric $type key pair" }

        if (asymPublicKeyBytes.isEmpty()) {
            throw InvalidKeySpecException("Empty public ket")
        }
        if (asymPrivateKeyBytes.isEmpty()) {
            throw InvalidKeySpecException("Empty public ket")
        }
        val keyPair = KeyPairSodium(
            public = PublicKeySodium(asymPublicKeyBytes.toUByteArray()),
            private = PrivateKeySodium(asymPrivateKeyBytes.toUByteArray()),
            keyType = type
        )

        if (type == AsymKeysType.ENC) {
            checkAsymEncKeys(keyPair)
        } else if (type == AsymKeysType.SIG) {
            checkAsymSigKeys(keyPair)
        }
        return keyPair
    }

    /**
     * Reconstruct a public key of the given [type] from
     * the encoded encryption [asymPublicKeyBytes]
     */
    override fun recreateAsymPublicKey(
        asymPublicKeyBytes: ByteArray,
        type: AsymKeysType
    ): PublicKeyCryptoAC {
        logger.debug { "Recreating asymmetric $type public key" }

        if (asymPublicKeyBytes.isEmpty()) {
            throw InvalidKeySpecException("Empty public ket")
        }
        return PublicKeySodium(asymPublicKeyBytes.toUByteArray())
    }

    /**
     * Reconstruct a private key of the given [type] from
     * the encoded encryption [asymPrivateKeyBytes]
     */
    override fun recreateAsymPrivateKey(asymPrivateKeyBytes: ByteArray, type: AsymKeysType): PrivateKeyCryptoAC {
        logger.debug { "Recreating asymmetric $type public key" }

        if (asymPrivateKeyBytes.isEmpty()) {
            throw InvalidKeySpecException("Empty public ket")
        }
        return PrivateKeySodium(asymPrivateKeyBytes.toUByteArray())
    }


    /**
     * Check that the public and private keys in the
     * encryption [keyPair] form a valid key pair
     */
    fun checkAsymEncKeys(keyPair: KeyPairCryptoAC) {
        logger.debug { "Challenging an encryption key pair" }

        val challenge = "Frankly, my dear, I don't give a damn"
        val encBytes = asymEncrypt(keyPair.public, challenge.toByteArray())
        try {
            if (!challenge.toByteArray().contentEquals(
                    asymDecrypt(keyPair.public, keyPair.private, encBytes))
            ) {
                logger.error { "Inconsistent encryption key pair" }
                throw InvalidKeyException("Inconsistent encryption key pair")
            }
        }
        catch (e: SignatureException) {
            logger.error { "Inconsistent encryption key pair" }
            throw InvalidKeyException("Inconsistent encryption key pair")
        }
        catch (e: BoxCorruptedOrTamperedDataException) {
            logger.error { "Inconsistent encryption key pair" }
            throw InvalidKeyException("Inconsistent encryption key pair")
        }
        logger.debug { "Encryption key pair challenge successful" }
    }

    /** Check that the public and private keys in the signing [keyPair] form a valid key pair */
    fun checkAsymSigKeys(keyPair: KeyPairCryptoAC) {
         logger.debug { "Challenging a signing key pair" }

        val challenge = "Here's looking at you, kid"
        val signature = createSignature(challenge.toByteArray(), keyPair.private)
        try {
            verifySignature(signature, challenge.toByteArray(), keyPair.public)
        }
        catch (e: SignatureException) {
            logger.error { "Inconsistent signing key pair" }
            throw InvalidKeyException("Inconsistent signing key pair")
        }
        catch (e: BadPaddingException) {
            logger.error { "Inconsistent signing key pair" }
            throw InvalidKeyException("Inconsistent signing key pair")
        }
        logger.debug { "Signing key pair challenge successful" }
    }

    // TODO switch to authenticated encryption?
    /**
     * Encrypt the [bytes] with the [encryptingKey]
     *
     * In this implementation, Sodium uses Elliptic Curves Diffie-Hellman
     * (ECDH), X25519, to derive a symmetric key and then the Salsa20 symmetric
     * stream cipher (with XSalsa20 192-bit nonce extension) and the Poly1305
     * universal hash function, which acts as a message authentication code.
     */
    fun asymEncrypt(
        encryptingKey: PublicKeyCryptoAC,
        bytes: ByteArray
    ): ByteArray {
        val bytesSize = bytes.size
        require(bytes.isNotEmpty()) { "Empty ByteArray to encrypt" }
        return seal(
            message = bytes.toUByteArray(),
            recipientsPublicKey = (encryptingKey as PublicKeySodium).public,
        ).toByteArray()
    }

    /**
     * Decrypt the [encBytes] with the [decryptingKey]
     *
     * In this implementation, Sodium uses Elliptic Curves Diffie-Hellman
     * (ECDH), X25519, to derive a symmetric key and then the Salsa20 symmetric
     * stream cipher (with XSalsa20 192-bit nonce extension) and the Poly1305
     * universal hash function, which acts as a message authentication code.
     */
    fun asymDecrypt(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encBytes: ByteArray
    ): ByteArray {
        val encBytesSize = encBytes.size
        require(encBytes.isNotEmpty()) { "Empty ByteArray to decrypt" }
        return sealOpen(
            ciphertext = encBytes.toUByteArray(),
            recipientsPublicKey = (encryptingKey as PublicKeySodium).public,
            recipientsSecretKey = (decryptingKey as PrivateKeySodium).private,
        ).toByteArray()
    }
}