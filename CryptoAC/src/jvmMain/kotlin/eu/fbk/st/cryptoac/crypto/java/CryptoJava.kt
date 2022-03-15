package eu.fbk.st.cryptoac.crypto.java

import eu.fbk.st.cryptoac.crypto.*
import mu.KotlinLogging
import org.apache.commons.codec.binary.Base64InputStream
import java.io.InputStream
import java.io.SequenceInputStream
import java.security.*
import java.security.spec.PKCS8EncodedKeySpec
import java.security.spec.X509EncodedKeySpec
import javax.crypto.*
import javax.crypto.spec.GCMParameterSpec
import javax.crypto.spec.SecretKeySpec
import kotlin.random.Random


private val logger = KotlinLogging.logger {}

/**
 * Java implementation of the Crypto interface to supply cryptographic operations.
 * The [parameters] are used to configure the length of keys and algorithms to use
 */
class CryptoJava(private val parameters: CryptoParameters?) : Crypto {

    private val asymEncKeysLength = parameters?.asymEncKeysLength ?: 2048
    private val asymEncKeysGenAlgorithm = parameters?.asymEncKeysGenAlgorithm ?: "RSA"
    private val asymEncAlgorithm = parameters?.asymEncAlgorithm ?: "RSA"
    private val asymSigKeysLength = parameters?.asymSigKeysLength ?: 2048
    private val asymSigKeysGenAlgorithm = parameters?.asymSigKeysGenAlgorithm ?: "RSA"
    private val asymSigAlgorithm = parameters?.asymSigAlgorithm ?: "SHA512withRSA"
    private val hashAlgorithm = parameters?.hashAlgorithm ?: "SHA-512"
    private val hashLength = parameters?.hashAlgorithm ?: 512
    private val symKeyLength = parameters?.symKeyLength ?: 256
    private val symKeyAlgorithm = parameters?.symAlgorithm ?: "AES"
    private val symAuthenticatedEncryptionAlgorithm = parameters?.symAuthenticatedEncryptionAlgorithm ?: "AES/GCM/NoPadding"


    /** The length of the block for asymmetric encryption */
    private val encBlockLength = (asymEncKeysLength / 8) - 11

    /** The length of the block for asymmetric decryption */
    private val decBlockLength = (asymEncKeysLength / 8)

    /** The object used for encryption asymmetric keys generation */
    private val asymEncKeysGenerator: KeyPairGenerator = KeyPairGenerator.getInstance(asymEncKeysGenAlgorithm)

    /** The object used for signature asymmetric keys generation */
    private val asymSigKeysGenerator: KeyPairGenerator = KeyPairGenerator.getInstance(asymSigKeysGenAlgorithm)

    /** The object used for symmetric keys generation */
    private val symKeysGenerator: KeyGenerator = KeyGenerator.getInstance(symKeyAlgorithm)

    /** The object used for asymmetric encryption and decryption */
    private val asymCipher: Cipher = Cipher.getInstance(asymEncAlgorithm)

    /** The object used for symmetric encryption and decryption */
    private val symCipher: Cipher = Cipher.getInstance(symAuthenticatedEncryptionAlgorithm)

    /** The object used for creating and verifying signatures */
    private val signatureObject: Signature = Signature.getInstance(asymSigAlgorithm)

    /** The object used for recreating encoded encryption asymmetric keys */
    private val asymEncKeyFactory: KeyFactory = KeyFactory.getInstance(asymEncKeysGenAlgorithm)

    /** The length of the tag in AEAD */
    private val tagLength = 12

    init {
        asymEncKeysGenerator.initialize(asymEncKeysLength)
        asymSigKeysGenerator.initialize(asymSigKeysLength)
        symKeysGenerator.init(symKeyLength)
    }


    /** Return a freshly generated asymmetric key pair for encryption */
    override fun generateAsymEncKeys(): KeyPairCryptoAC {
        logger.debug { "Generating encryption asymmetric key pair" }
        return asymEncKeysGenerator.generateKeyPair().toKeyPairJava(AsymKeysType.ENC)
    }

    /** Return a freshly generated asymmetric key pair for signatures */
    override fun generateAsymSigKeys(): KeyPairCryptoAC {
        logger.debug { "Generating signing asymmetric key pair" }
        return asymSigKeysGenerator.generateKeyPair().toKeyPairJava(AsymKeysType.SIG)
    }

    /** Return a freshly generated symmetric key */
    override fun generateSymKey(): SymmetricKeyCryptoAC {
        logger.debug { "Generating symmetric key" }
        return symKeysGenerator.generateKey().toSymmetricKeyJava()
    }

    /**
     * Return the hash of the given [bytes]. If [bytes]
     * is empty, throw an IllegalArgumentException
     */
    override fun generateDigest(bytes: ByteArray): ByteArray {
        logger.debug { "Hashing ${bytes.size} bytes" }
        require(bytes.isNotEmpty()) { "Empty ByteArray for digest" }
        val digest = MessageDigest.getInstance(hashAlgorithm)
        return digest.digest((bytes))
    }


    /**
     * Verify the digital [signature] of the [bytes] with the [verifyingKey]
     * If the signature is not valid, throw a SignatureException
     * If either [bytes] or [signature] is empty, throw an IllegalArgumentException
     */
    override fun verifySignature(signature: ByteArray, bytes: ByteArray, verifyingKey: PublicKeyCryptoAC) {
        logger.debug { "Verifying signature of ${signature.size} bytes for ${bytes.size} bytes" }
        require(bytes.isNotEmpty()) { "Empty ByteArray for bytes" }
        require(signature.isNotEmpty()) { "Empty ByteArray for signature" }

        signatureObject.initVerify((verifyingKey as PublicKeyJava).public)
        signatureObject.update(bytes)
        if (!signatureObject.verify(signature)) {
            logger.error { "Invalid signature" }
            throw SignatureException("Invalid signature")
        }
        else {
            logger.debug { "Signature successfully verified" }
        }
    }

    /**
     * Return a digital signature calculated on the [bytes] with the
     * [signingKey]. If [bytes] is empty, throw an IllegalArgumentException
     */
    override fun createSignature(bytes: ByteArray, signingKey: PrivateKeyCryptoAC): ByteArray {
        logger.debug { "Creating signature for ${bytes.size} bytes" }
        require(bytes.isNotEmpty()) { "Empty ByteArray for bytes to sign" }

        signatureObject.initSign((signingKey as PrivateKeyJava).private)
        signatureObject.update(bytes)
        logger.debug { "Signature successfully created" }
        return signatureObject.sign()
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
                asymPublicKeyBytes = asymDecrypt(decryptingKey = decryptingKey, encBytes = encryptedAsymEncKeys.public),
                asymPrivateKeyBytes = asymDecrypt(decryptingKey = decryptingKey, encBytes = encryptedAsymEncKeys.private),
                type = AsymKeysType.ENC
            )
        } catch (e: BadPaddingException) {
            logger.error { "Exception while decrypting asymmetric encryption key pair" }
            logger.error { e }
            throw CryptographicOperationException(e.localizedMessage)
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
                asymPublicKeyBytes = asymDecrypt(decryptingKey = decryptingKey, encBytes = encryptedAsymSigKeys.public),
                asymPrivateKeyBytes = asymDecrypt(
                    decryptingKey = decryptingKey,
                    encBytes = encryptedAsymSigKeys.private
                ),
                type = AsymKeysType.SIG
            )
        } catch (e: BadPaddingException) {
            logger.error { "Exception while decrypting asymmetric signature key pair" }
            logger.error { e }
            throw CryptographicOperationException(e.localizedMessage)
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
            SecretKeySpec(
                asymDecrypt(decryptingKey = decryptingKey, encBytes = encryptedSymKey.key),
                0, symKeyLength / 8, symKeyAlgorithm
            ).toSymmetricKeyJava()
        } catch (e: BadPaddingException) {
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
     * In this implementation, apply a Base64 stream
     * and then a cipher stream with the [encryptingKey],
     * prepending the initialization vector to the stream
     */
    override fun encryptStream(encryptingKey: SymmetricKeyCryptoAC, stream: InputStream): InputStream {
        logger.debug { "Encrypting stream" }
        val iv = Random.nextBytes(tagLength) // TODO check random
        symCipher.init(
            Cipher.ENCRYPT_MODE,
            encryptingKey.secretKey as SecretKey,
            GCMParameterSpec(128, iv)
        )
        return SequenceInputStream(
            iv.inputStream(),
            CipherInputStream(Base64InputStream(stream, true), symCipher)
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
     * In this implementation, apply a cipher stream
     * and then a Base64 stream with the [decryptingKey]
     */
    override fun decryptStream(decryptingKey: SymmetricKeyCryptoAC, stream: InputStream): InputStream {
        logger.debug { "Decrypting stream" }
        symCipher.init(
            Cipher.DECRYPT_MODE,
            decryptingKey.secretKey as SecretKey,
            GCMParameterSpec(128, stream.readNBytes(tagLength))
        )
        return Base64InputStream(CipherInputStream(stream, symCipher), false)
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
        type: AsymKeysType,
    ): KeyPairCryptoAC {
        logger.debug { "Recreating asymmetric $type key pair" }
        val asymPublicKey =
            asymEncKeyFactory.generatePublic(X509EncodedKeySpec(asymPublicKeyBytes))
        val asymPrivateKey =
            asymEncKeyFactory.generatePrivate(PKCS8EncodedKeySpec(asymPrivateKeyBytes))
        val keyPair = KeyPair(asymPublicKey!!, asymPrivateKey!!).toKeyPairJava(type)
        checkAsymEncKeys(keyPair)
        return keyPair
    }

    /**
     * Reconstruct a public key of the given [type] from
     * the encoded encryption [asymPublicKeyBytes]
     */
    override fun recreateAsymPublicKey(
        asymPublicKeyBytes: ByteArray,
        type: AsymKeysType,
    ): PublicKeyJava {
        logger.debug { "Recreating asymmetric $type public key" }
        val asymPublicKey =
            asymEncKeyFactory.generatePublic(X509EncodedKeySpec(asymPublicKeyBytes))
        return PublicKeyJava(asymPublicKey)
    }

    /**
     * Reconstruct a private key of the given [type] from
     * the encoded encryption [asymPrivateKeyBytes]
     */
    override fun recreateAsymPrivateKey(
        asymPrivateKeyBytes: ByteArray,
        type: AsymKeysType,
    ): PrivateKeyJava {
        logger.debug { "Recreating asymmetric $type private key" }
        val asymPrivateKey =
            asymEncKeyFactory.generatePrivate(PKCS8EncodedKeySpec(asymPrivateKeyBytes))
        return PrivateKeyJava(asymPrivateKey)
    }




    /**
     * Check that the public and private keys in the
     * encryption [keyPair] form a valid key pair
     */
    fun checkAsymEncKeys(keyPair: KeyPairCryptoAC) {
        logger.debug { "Challenging an encryption key pair" }

        val challenge = "I'm gonna make him an offer he can't refuse"
        val encBytes = asymEncrypt(keyPair.public, challenge.toByteArray())
        try {
            if (!challenge.toByteArray().contentEquals(asymDecrypt(keyPair.private, encBytes))) {
                logger.error { "Inconsistent encryption key pair" }
                throw InvalidKeyException("Inconsistent encryption key pair")
            }
        }
        catch (e: SignatureException) {
            logger.error { "Inconsistent encryption key pair" }
            throw InvalidKeyException("Inconsistent encryption key pair")
        }
        catch (e: BadPaddingException) {
            logger.error { "Inconsistent encryption key pair" }
            throw InvalidKeyException("Inconsistent encryption key pair")
        }
        logger.debug { "Encryption key pair challenge successful" }
    }

    /** Check that the public and private keys in the signing [keyPair] form a valid key pair */
    fun checkAsymSigKeys(keyPair: KeyPairCryptoAC) {
        logger.debug { "Challenging a signing key pair" }

        val challenge = "Toto, I've a feeling we're not in Kansas anymore"
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

    /** Encrypt the [bytes] with the [encryptingKey] */
    fun asymEncrypt(encryptingKey: PublicKey, bytes: ByteArray): ByteArray {
        val bytesSize = bytes.size
        require(bytes.isNotEmpty()) { "Empty ByteArray to encrypt" }

        asymCipher.init(Cipher.ENCRYPT_MODE, (encryptingKey as PublicKeyJava).public)

        val numBlocksToEncrypt = (bytesSize + encBlockLength - 1) / encBlockLength
        val encBytes = ByteArray(numBlocksToEncrypt * decBlockLength)

        for (i in 0 until numBlocksToEncrypt) {
            val inputOffset = i * encBlockLength
            val outputOffset = i * decBlockLength
            var inputLength = encBlockLength

            /** If true, this is the last block to encrypt */
            if (i == numBlocksToEncrypt - 1) {
                inputLength = bytesSize - inputOffset
            }
            asymCipher.doFinal(bytes, inputOffset, inputLength, encBytes, outputOffset)
        }
        return encBytes

    }

    /** Decrypt the [encBytes] with the [decryptingKey] */
    fun asymDecrypt(decryptingKey: PrivateKey, encBytes: ByteArray): ByteArray {
        val encBytesSize = encBytes.size
        require(encBytes.isNotEmpty()) { "Empty ByteArray to decrypt" }

        asymCipher.init(Cipher.DECRYPT_MODE, (decryptingKey as PrivateKeyJava).private)

        val numBlocksToEncrypt = (encBytesSize + decBlockLength - 1) / decBlockLength
        val bytes = ByteArray(numBlocksToEncrypt * decBlockLength)
        var decBytes = 0

        for (i in 0 until numBlocksToEncrypt) {
            val inputOffset = i * decBlockLength
            val outputOffset = i * encBlockLength
            var inputLength = decBlockLength

            /** If true, this is the last block to encrypt */
            if (i == numBlocksToEncrypt - 1) {
                inputLength = encBytesSize - inputOffset
            }
            decBytes = asymCipher.doFinal(encBytes, inputOffset, inputLength, bytes, outputOffset)
        }
        /** eliminate the last padding bytes */
        return bytes.sliceArray(0 until decBytes + (numBlocksToEncrypt - 1) * encBlockLength)
    }
}
