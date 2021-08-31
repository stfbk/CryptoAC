package eu.fbk.st.cryptoac.crypto.java

import eu.fbk.st.cryptoac.crypto.*
import mu.KotlinLogging
import org.apache.commons.codec.binary.Base64InputStream
import java.io.InputStream
import java.security.*
import java.security.spec.PKCS8EncodedKeySpec
import java.security.spec.X509EncodedKeySpec
import javax.crypto.*
import javax.crypto.spec.SecretKeySpec

// TODO refactor primitives with Veronica's thesis

private val logger = KotlinLogging.logger {}

/**
 * Java implementation of the Crypto interface to supply cryptographic operations.
 * The [parameters] are used to configure the length of keys and algorithms to use.
 */
class CryptoJava(private val parameters: CryptoParameters?) : Crypto {

    private val asymEncKeysLength = parameters?.asymEncKeysLength ?: 2048
    private val asymEncKeysGenAlgorithm = parameters?.asymEncKeysGenAlgorithm ?: "RSA"
    private val asymEncAlgorithm = parameters?.asymEncAlgorithm ?: "RSA"
    private val asymSigKeysLength = parameters?.asymSigKeysLength ?: 2048
    private val asymSigKeysGenAlgorithm = parameters?.asymSigKeysGenAlgorithm ?: "RSA"
    private val asymSigAlgorithm = parameters?.asymSigAlgorithm ?: "SHA512withRSA"
    private val hashAlgorithm = parameters?.hashAlgorithm ?: "SHA-512"
    private val symKeyLength = parameters?.symKeyLength ?: 256
    private val symKeyAlgorithm = parameters?.symAlgorithm ?: "AES"


    /** The length of the block for asymmetric encryption */
    private val encBlockLength = (asymEncKeysLength / 8) - 11 // TODO this is true only for padding we use now?

    /** The length of the block for asymmetric decryption */
    private val decBlockLength = (asymEncKeysLength / 8) // TODO this is true only for padding we use now?

    /** The object used for encryption asymmetric keys generation */
    private val asymEncKeysGenerator: KeyPairGenerator = KeyPairGenerator.getInstance(asymEncKeysGenAlgorithm)

    /** The object used for signature asymmetric keys generation */
    private val asymSigKeysGenerator: KeyPairGenerator = KeyPairGenerator.getInstance(asymSigKeysGenAlgorithm)

    /** The object used for symmetric keys generation */
    private val symKeysGenerator: KeyGenerator = KeyGenerator.getInstance(symKeyAlgorithm)

    /** The object used for asymmetric encryption and decryption */
    private val asymCipher: Cipher = Cipher.getInstance(asymEncAlgorithm)

    /** The object used for symmetric encryption and decryption */
    private val symCipher: Cipher = Cipher.getInstance(symKeyAlgorithm)

    /** The object used for creating and verifying signatures */
    private val signatureObject: Signature = Signature.getInstance(asymSigAlgorithm)

    /** The object used for recreating encoded encryption asymmetric keys */
    private val asymEncKeyFactory: KeyFactory = KeyFactory.getInstance(asymEncKeysGenAlgorithm)

    init {
        asymEncKeysGenerator.initialize(asymEncKeysLength)
        asymSigKeysGenerator.initialize(asymSigKeysLength)
        symKeysGenerator.init(symKeyLength)
    }


    /** Return a freshly generated asymmetric key pair for encryption. */
    override fun generateAsymEncKeys(): KeyPair {
        logger.debug { "Generating encryption asymmetric key pair" }
        return asymEncKeysGenerator.generateKeyPair()
    }

    /** Return a freshly generated asymmetric key pair for signatures. */
    override fun generateAsymSigKeys(): KeyPair {
        logger.debug { "Generating signing asymmetric key pair" }
        return asymSigKeysGenerator.generateKeyPair()
    }

    /** Return a freshly generated sym key. */
    override fun generateSymKey(): SecretKey {
        logger.debug { "Generating symmetric key" }
        return symKeysGenerator.generateKey()
    }

    /** Return the hash of the given [bytes]. */
    override fun generateDigest(bytes: ByteArray): ByteArray {
        logger.debug { "Hashing ${bytes.size} bytes" }
        val digest = MessageDigest.getInstance(hashAlgorithm)
        return digest.digest((bytes))
    }


    /** Verify the digital [signature] of the [bytes] with the [verifyingKey]. */
    override fun verifySignature(signature: ByteArray, bytes: ByteArray, verifyingKey: PublicKey) {
        logger.debug { "Verifying signature of ${signature.size} bytes for ${bytes.size} bytes" }

        if (signature.isEmpty()) {
            logger.warn { "No signature to verify" }
        }

        signatureObject.initVerify(verifyingKey)
        signatureObject.update(bytes)

        if (!signatureObject.verify(signature)) {
            logger.error { "Invalid signature" }
            throw SignatureException("Invalid signature")
        }
        else {
            logger.debug { "Signature successfully verified" }
        }
    }

    /** Return a digital signature calculated on the [bytes] with the [signingKey]. */
    override fun createSignature(bytes: ByteArray, signingKey: PrivateKey): ByteArray {
        logger.debug { "Creating signature for ${bytes.size} bytes" }

        if (bytes.isEmpty()) {
            logger.error { "No bytes to sign" }
            throw SignatureException("Invalid signature")
        }

        signatureObject.initSign(signingKey)
        signatureObject.update(bytes)
        logger.debug { "Signature successfully created" }
        return signatureObject.sign()
    }


    /**
     * Encrypt the [asymKeys] of the given [type] with
     * the [encryptingKey] and return the encrypted keys.
     */
    override fun encryptAsymKeys(encryptingKey: PublicKey, asymKeys: KeyPair, type: AsymKeysType): EncryptedAsymKeys {
        logger.debug { "Encrypting asymmetric key pair" }

        return EncryptedAsymKeys(
            public = asymEncrypt(encryptingKey = encryptingKey, bytes = asymKeys.public.encoded),
            private = asymEncrypt(encryptingKey = encryptingKey, bytes = asymKeys.private.encoded),
            type = type,
        )
    }

    /**
     * Decrypt the [encryptedAsymEncKeys] with the [decryptingKey]
     * and return the asym enc keys in a key pair.
     */
    override fun decryptAsymEncKeys(decryptingKey: PrivateKey, encryptedAsymEncKeys: EncryptedAsymKeys): KeyPair {
        logger.debug { "Decrypting asymmetric encryption key pair" }

        return recreateAsymKeys(
            asymPublicKeyBytes = asymDecrypt(decryptingKey = decryptingKey, encBytes = encryptedAsymEncKeys.public),
            asymPrivateKeyBytes = asymDecrypt(decryptingKey = decryptingKey, encBytes = encryptedAsymEncKeys.private),
            type = AsymKeysType.ENC
        )
    }

    /** Decrypt the [encryptedAsymSigKeys] with the [decryptingKey] and return the asym sig keys in a key pair. */
    override fun decryptAsymSigKeys(decryptingKey: PrivateKey, encryptedAsymSigKeys: EncryptedAsymKeys): KeyPair {
        logger.debug { "Decrypting asymmetric signature key pair" }

        return recreateAsymKeys(
            asymPublicKeyBytes = asymDecrypt(decryptingKey = decryptingKey, encBytes = encryptedAsymSigKeys.public),
            asymPrivateKeyBytes = asymDecrypt(decryptingKey = decryptingKey, encBytes = encryptedAsymSigKeys.private),
            type = AsymKeysType.SIG
        )
    }

    /** Encrypt the [symKey] with the [encryptingKey] and return the encrypted key. */
    override fun encryptSymKey(encryptingKey: PublicKey, symKey: SecretKey): EncryptedSymKey {
        logger.debug { "Encrypting symmetric key" }
        return EncryptedSymKey(asymEncrypt(encryptingKey = encryptingKey, bytes = symKey.encoded))
    }

    /** Decrypt the [encryptedSymKey] with the [decryptingKey] and return the key. */
    override fun decryptSymKey(decryptingKey: PrivateKey, encryptedSymKey: EncryptedSymKey): SecretKey {
        logger.debug { "Decrypting symmetric key" }
        return SecretKeySpec(
            asymDecrypt(decryptingKey = decryptingKey, encBytes = encryptedSymKey.key),
            0, symKeyLength / 8, symKeyAlgorithm
        )
    }

    /**
     * Encrypt the content of the [stream] with the [encryptingKey] and return the stream.
     * Apply a Base64 stream and a cipher stream with the [encryptingKey], respectively.
     */
    override fun encryptStream(encryptingKey: SecretKey, stream: InputStream): InputStream {
        logger.debug { "Encrypting file stream" }
        symCipher.init(Cipher.ENCRYPT_MODE, encryptingKey)
        return CipherInputStream(Base64InputStream(stream, true), symCipher)
    }

    /**
     * Decrypt the content of the [stream] with the [decryptingKey] and return the stream.
     * Apply a cipher stream with the [decryptingKey] and a Base64 stream, respectively.
     */
    override fun decryptStream(decryptingKey: SecretKey, stream: InputStream): InputStream {
        logger.debug { "Decrypting file stream" }
        symCipher.init(Cipher.DECRYPT_MODE, decryptingKey)
        return Base64InputStream(CipherInputStream(stream, symCipher), false)
    }

    /**
     * Return a key pair of the given [type] created from the encoded encryption [asymPublicKeyBytes]
     * and the encoded encryption [asymPrivateKeyBytes], if given. If both keys were given, also check
     * the two keys actually form a valid pair.
     */
    override fun recreateAsymKeys(
        asymPublicKeyBytes: ByteArray?, asymPrivateKeyBytes: ByteArray?,
        type: AsymKeysType,
    ): KeyPair {
        /** Note that, in this case, the [type] of the keys is not relevant */
        val asymPublicKey = if (asymPublicKeyBytes != null) {
            logger.debug { "Recreating asymmetric $type public key" }
            asymEncKeyFactory.generatePublic(X509EncodedKeySpec(asymPublicKeyBytes))
        } else {
            null
        }
        val asymPrivateKey = if (asymPrivateKeyBytes != null) {
            logger.debug { "Recreating asymmetric $type private key" }
            asymEncKeyFactory.generatePrivate(PKCS8EncodedKeySpec(asymPrivateKeyBytes))
        } else {
            null
        }

        val keyPair = KeyPair(asymPublicKey, asymPrivateKey)
        if (asymPublicKey != null && asymPrivateKey != null) {
            checkAsymEncKeys(keyPair)
        }
        return keyPair
    }


    /** Check that the public and private keys in the encryption [keyPair] form a valid key pair. */
    fun checkAsymEncKeys(keyPair: KeyPair) {
        logger.debug { "Challenging an encryption key pair" }

        val challenge = "The Poets of the Fall are a great band"
        val encBytes = asymEncrypt(keyPair.public, challenge.toByteArray())
        try {
            if (!challenge.toByteArray().contentEquals(asymDecrypt(keyPair.private,encBytes))) {
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

    /** Check that the public and private keys in the signing [keyPair] form a valid key pair. */
    fun checkAsymSigKeys(keyPair: KeyPair) {
        logger.debug { "Challenging a signing key pair" }

        val challenge = "The Poets of the Fall are a great band"
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

    /** Encrypt the [bytes] with the [encryptingKey]. */
    fun asymEncrypt(encryptingKey: PublicKey, bytes: ByteArray): ByteArray {
        val bytesSize = bytes.size
        logger.debug { "Encrypting $bytesSize bytes" }

        /** Guard clauses. */
        if (bytesSize == 0) {
            logger.warn { "No bytes to encrypt" }
            return ByteArray(0)
        }

        asymCipher.init(Cipher.ENCRYPT_MODE, encryptingKey)

        // Number of blocks to be encrypted (integer division rounded up).
        val encBlocksNumber = (bytesSize + encBlockLength - 1) / encBlockLength
        val encBytes = ByteArray(encBlocksNumber * decBlockLength)
        logger.debug { "Encrypting $encBlocksNumber blocks of size $encBlockLength" }

        for (i in 0 until encBlocksNumber) {
            val inputOffset = i * encBlockLength
            val outputOffset = i * decBlockLength
            var inputLength = encBlockLength

            // If true, this is the last block to encrypt.
            if (i == encBlocksNumber - 1) {
                inputLength = bytesSize - inputOffset
            }
            asymCipher.doFinal(bytes, inputOffset, inputLength, encBytes, outputOffset)
        }
        return encBytes

    }

    /** Decrypt the [encBytes] with the [decryptingKey]. */
    fun asymDecrypt(decryptingKey: PrivateKey, encBytes: ByteArray): ByteArray {
        val encBytesSize = encBytes.size
        logger.debug { "Decrypting $encBytesSize bytes" }

        /** Guard clauses. */
        if (encBytesSize == 0) {
            logger.warn { "No bytes to decrypt" }
            return ByteArray(0)
        }

        asymCipher.init(Cipher.DECRYPT_MODE, decryptingKey)

        // Number of blocks to be decrypted (integer division rounded up).
        val decBlocksNumber = (encBytesSize + decBlockLength - 1) / decBlockLength
        val bytes = ByteArray(decBlocksNumber * decBlockLength)
        var decBytes = 0
        logger.debug { "Decrypting $decBlocksNumber blocks of size $decBlockLength" }

        for (i in 0 until decBlocksNumber) {
            val inputOffset = i * decBlockLength
            val outputOffset = i * encBlockLength
            var inputLength = decBlockLength

            // If true, this is the last block to decrypt.
            if (i == decBlocksNumber - 1) {
                inputLength = encBytesSize - inputOffset
            }
            decBytes = asymCipher.doFinal(encBytes, inputOffset, inputLength, bytes, outputOffset)
        }
        // We have to eliminate the last bytes because they are actually the padding.
        return bytes.sliceArray(0 until decBytes + (decBlocksNumber - 1) * encBlockLength)

    }
}