package eu.fbk.st.cryptoac.crypto.openabe

import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.decodeBase64
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.generateRandomString
import it.stefanoberlato.LibopenabeInitializer
import it.stefanoberlato.oabe.*
import it.stefanoberlato.oabe.crypto.*
import kotlinx.coroutines.runBlocking
import mu.KotlinLogging
import org.apache.commons.codec.binary.Base64InputStream
import java.io.InputStream
import java.security.*
import java.security.spec.InvalidKeySpecException

private val logger = KotlinLogging.logger {}

/**
 * Implementation of the Crypto provider with
 * OpenABE library (https://github.com/zeutro/openabe).
 */
class CryptoOpenABE : CryptoPKE, CryptoSKE, CryptoABE {

    // TODO In oABE, oPKE and oSIG, there is currently
    //  no way through which we can check whether a
    //  key ID is already present or not, except for trying
    //  to export it. For simplicity, we now import a key
    //  every time we need to perform a crypto operation,
    //  but this may not be the optimal behaviour

    companion object {
        lateinit var oABE: OpenABECryptoContext
        lateinit var oPKE: OpenPKEContext
        lateinit var oSIG: OpenPKSIGContext
    }

    init {
        runBlocking {
            try {
                val loaded = LibopenabeInitializer.isLibraryLoadedYet()
                val initialized = LibopenabeInitializer.isPlatformInitializedYet()

                /**
                 * If true, it means that the library was already loaded
                 * and initialized. As such, issue a warning but do nothing
                 */
                if (loaded && initialized) {
                    logger.warn {
                        "Receive request to initialize the OpenABE " +
                        "library, but it was already initialized"
                    }
                } else {
                    if (!loaded) {
                        logger.info { "Library was not loaded yet" }
                    } else {
                        logger.info { "Library is loaded but was shut down"}
                    }
                    LibopenabeInitializer.initialize()
                    oPKE = OpenPKEContext(ECID.NIST_P256)
                    oSIG = OpenPKSIGContext(ECID.NIST_P256)
                    oABE = OpenABECryptoContext(SchemeID.CP_ABE)
                    logger.info {
                        oABE.enableVerbose()
                        "Enabling oABE verbose mode"
                    }
                    oABE.generateParams()
                }
            } catch (e: Exception) {
                val message ="Unable to initialize the OpenABE library (${e.localizedMessage})"
                logger.error { message }
                logger.error { e }
                throw CryptographicOperationException(message)
            }
        }
    }

    /**
     * This function is invoked each time the cryptographic
     * provider is initialized, and it should contain the
     * code to initialize the provider
     */
    override fun init() {
        logger.info { "No action required to initialize the OpenABE crypto" }
    }

    /**
     * This function is invoked each time the cryptographic
     * provider is destroyed, and it should contain the
     * code to de-initialize the provider (e.g., by wiping
     * secret keys)
     */
    override fun deinit() {
        // TODO should also clear stored keys from library? or oABE.destroy does it already?
        logger.info { "De-initializing the OpenABE library" }
//        oABE.destroy() TODO this is commented because, ideally, the shutdown free all the memory anyway (to check?)
//        oPKE.destroy()
//        oSIG.destroy()
        runBlocking {
            LibopenabeInitializer.shutdown()
        }
    }

    /**
     * Return a freshly generated asymmetric
     * key pair with id [keyID] for encryption
     * (if [keyID] is null, it will be randomly
     * generated)
     */
    override fun generateAsymEncKeys(
        keyID: String?
    ): KeyPairCryptoAC {
        logger.debug { "Generating encryption asymmetric key pair" }
        val notNullKeyID = keyID ?: generateRandomString()
        oPKE.keygen(keyID = notNullKeyID)
        return KeyPairOpenABE(
            public = PublicKeyOpenABE(
                public = oPKE.exportPublicKey(keyID = notNullKeyID),
                keyID = notNullKeyID
            ),
            private = PrivateKeyOpenABE(
                private = oPKE.exportPrivateKey(keyID = notNullKeyID),
                keyID = notNullKeyID
            ),
            keyType = AsymKeysType.ENC
        )
    }

    /**
     * Return a freshly generated asymmetric
     * key pair with id [keyID] for signatures
     * (if [keyID] is null, it will be randomly
     * generated)
     */
    override fun generateAsymSigKeys(
        keyID: String?
    ): KeyPairCryptoAC {
        logger.debug { "Generating signing asymmetric key pair" }
        val notNullKeyID = keyID ?: generateRandomString()
        oSIG.keygen(keyID = notNullKeyID)
        return KeyPairOpenABE(
            public = PublicKeyOpenABE(
                public = oSIG.exportPublicKey(keyID = notNullKeyID),
                keyID = notNullKeyID
            ),
            private = PrivateKeyOpenABE(
                private = oSIG.exportPrivateKey(keyID = notNullKeyID),
                keyID = notNullKeyID
            ),
            keyType = AsymKeysType.SIG
        )
    }

    /** Return a freshly generated symmetric key */
    override fun generateSymKey(): SymmetricKeyCryptoAC {
        logger.debug { "Generating symmetric key" }
        return SymmetricKeyOpenABE(
            secretKey = SecretKeyOpenABE(
                secretKey = Zsymcrypto.generateSymmetricKey(32)
            )
        )
    }

    /**
     * Verify the digital [signature] of the [bytes] with the [verifyingKey]
     * If the signature is not valid, throw a SignatureException
     * If either [bytes] or [signature] is empty, throw an IllegalArgumentException
     *
     * In this implementation, OpenABE uses the TODO algorithm
     */
    override fun verifySignature(
        signature: ByteArray,
        bytes: ByteArray,
        verifyingKey: PublicKeyCryptoAC
    ) {
        logger.debug { "Verifying signature of ${signature.size} bytes for ${bytes.size} bytes" }
        require(bytes.isNotEmpty()) { "Empty ByteArray for bytes" }
        require(signature.isNotEmpty()) { "Empty ByteArray for signature" }
        verifyingKey as PublicKeyOpenABE
        val keyID = verifyingKey.keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID

        oSIG.importPublicKey(
            keyID = keyID,
            keyBlob = verifyingKey.public
        )
        try {
            oSIG.verify(
                keyID = keyID,
                signature = signature.decodeToString(),
                message = bytes.decodeToString(),
            )
        } catch (e: OpenPKSIGContextVerify) {
            val message = "Invalid signature"
            logger.error { message }
            throw SignatureException(message)
        }
        logger.debug { "Signature successfully verified" }
    }

    /**
     * Return a digital signature calculated on the [bytes] with the
     * [signingKey]. If [bytes] is empty, throw an IllegalArgumentException
     *
     * In this implementation, OpenABE uses the TODO algorithm
     */
    override fun createSignature(
        bytes: ByteArray,
        signingKey: PrivateKeyCryptoAC
    ): ByteArray {
        logger.debug { "Creating signature for ${bytes.size} bytes" }
        require(bytes.isNotEmpty()) { "Empty ByteArray for bytes to sign" }
        signingKey as PrivateKeyOpenABE
        val keyID = signingKey.keyID!!  // TODO handle exception => explain that OpenABE keys MUST always have their ID

        oSIG.importPrivateKey(
            keyID = keyID,
            keyBlob = signingKey.private
        )
        try {
            return oSIG.sign(
                keyID = keyID,
                message = bytes.decodeToString(),
            ).toByteArray().apply {
            }
        } catch (e: OpenPKSIGContextSign) {
            val message = "Error in signing process"
            logger.error { message }
            throw SignatureException(message)
        }
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

        if (asymKeys.public.keyID!! != asymKeys.private.keyID!!) { // TODO handle exception => explain that OpenABE keys MUST always have their ID
            throw InvalidKeyException("Key IDs are different")
        }
        encryptingKey as PublicKeyOpenABE

        return EncryptedAsymKeys(
            public = asymEncrypt(
                encryptingKey = encryptingKey,
                bytes = asymKeys.public.encoded
            ),
            private = asymEncrypt(
                encryptingKey = encryptingKey,
                bytes = asymKeys.private.encoded
            ),
            keyType = type,
            keyID = asymKeys.public.keyID
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
        logger.debug {
            "Decrypting asymmetric encryption key pair " +
            "with ID ${encryptedAsymEncKeys.keyID} with " +
            "with a decryption key with ID ${decryptingKey.keyID} " +
            "and an encryption key with ID ${encryptingKey.keyID} "
        }
        encryptingKey as PublicKeyOpenABE
        decryptingKey as PrivateKeyOpenABE

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
                type = AsymKeysType.ENC,
                keyID = encryptedAsymEncKeys.keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
            )
        } catch (e: OpenPKEContextDecrypt) {
            logger.error { "Exception while decrypting asymmetric signature key pair" }
            logger.error { e }
            throw CryptographicOperationException(e.localizedMessage)
        } catch (e: InvalidKeyException) {
            logger.error { "Exception while creating asymmetric signature key pair" }
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
        logger.debug {
            "Decrypting asymmetric signature key pair " +
            "with ID ${encryptedAsymSigKeys.keyID} with " +
            "with a decryption key with ID ${decryptingKey.keyID} " +
            "and an encryption key with ID ${encryptingKey.keyID} "
        }
        encryptingKey as PublicKeyOpenABE
        decryptingKey as PrivateKeyOpenABE

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
                type = AsymKeysType.SIG,
                keyID = encryptedAsymSigKeys.keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
            )
        } catch (e: OpenPKEContextDecrypt) {
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
        encryptingKey as PublicKeyOpenABE

        return EncryptedSymKey(
            asymEncrypt(
                encryptingKey = encryptingKey,
                bytes = symKey.secretKey.encoded
            )
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
        logger.debug {
            "Decrypting symmetric key with a " +
            "decryption key with ID ${decryptingKey.keyID} " +
            "and an encryption key with ID ${encryptingKey.keyID} "
        }
        encryptingKey as PublicKeyOpenABE
        decryptingKey as PrivateKeyOpenABE

        return try {
            SymmetricKeyOpenABE(
                SecretKeyOpenABE(
                    asymDecrypt(
                        encryptingKey = encryptingKey,
                        decryptingKey = decryptingKey,
                        encBytes = encryptedSymKey.key
                    )
                )
            )
        } catch (e: OpenPKEContextDecrypt) {
            logger.error { "Exception while decrypting asymmetric signature key pair" }
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
     * In this implementation, first apply a Base64 stream
     * to [stream] and then an OpenABE cipher stream with
     * the [encryptingKey]
     * The OpenABE cipher stream uses TODO algorithm(s)
     */
    override fun encryptStream(
        encryptingKey: SymmetricKeyCryptoAC,
        stream: InputStream
    ): InputStream {
        logger.debug { "Encrypting stream" }
        return OpenABECipherInputStream(
            inputStream = Base64InputStream(stream, true),
            key = encryptingKey.secretKey.encoded,
            mode = OpenABECipherInputStream.ENCRYPT_MODE,
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
     * In this implementation, first apply an OpenABE cipher
     * stream with the [decryptingKey] to [stream] and then
     * a Base64 stream
     * The OpenABE cipher stream uses TODO algorithm(s)
     */
    override fun decryptStream(
        decryptingKey: SymmetricKeyCryptoAC,
        stream: InputStream
    ): InputStream {
        logger.debug { "Decrypting stream" }
        return Base64InputStream(
            OpenABECipherInputStream(
                inputStream = stream,
                key = decryptingKey.secretKey.encoded,
                mode = OpenABECipherInputStream.DECRYPT_MODE,
            ),
            false
        )
    }

    /**
     * Return a key pair of the given [type] created from
     * the encoded encryption [asymPublicKeyBytes] and the
     * encoded encryption [asymPrivateKeyBytes]. Optionally,
     * specify a [keyID]
     * Also, check the two keys actually form a valid pair
     */
    override fun recreateAsymKeyPair(
        asymPublicKeyBytes: ByteArray,
        asymPrivateKeyBytes: ByteArray,
        type: AsymKeysType,
        keyID: String?
    ): KeyPairCryptoAC {
        logger.debug { "Recreating asymmetric $type key pair" }

        if (asymPublicKeyBytes.isEmpty()) {
            throw InvalidKeySpecException("Empty public key")
        }
        if (asymPrivateKeyBytes.isEmpty()) {
            throw InvalidKeySpecException("Empty private key")
        }

        val keyPair = KeyPairOpenABE(
            public = PublicKeyOpenABE(
                public = asymPublicKeyBytes.decodeToString(),
                keyID = keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
            ),
            private = PrivateKeyOpenABE(
                private = asymPrivateKeyBytes.decodeToString(),
                keyID = keyID
            ),
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
     * the encoded encryption [asymPublicKeyBytes]. Optionally,
     * specify a [keyID]
     */
    override fun recreateAsymPublicKey(
        asymPublicKeyBytes: ByteArray,
        type: AsymKeysType,
        keyID: String?
    ): PublicKeyOpenABE {
        logger.debug { "Recreating asymmetric $type public key" }

        if (asymPublicKeyBytes.isEmpty()) {
            throw InvalidKeySpecException("Empty public key")
        }

        return PublicKeyOpenABE(
            public = asymPublicKeyBytes.decodeToString(),
            keyID = keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
        )
    }

    /**
     * Reconstruct a private key of the given [type] from
     * the encoded encryption [asymPrivateKeyBytes]. Optionally,
     * specify a [keyID]
     */
    override fun recreateAsymPrivateKey(
        asymPrivateKeyBytes: ByteArray,
        type: AsymKeysType,
        keyID: String?
    ): PrivateKeyOpenABE {
        logger.debug { "Recreating asymmetric $type public key" }

        if (asymPrivateKeyBytes.isEmpty()) {
            throw InvalidKeySpecException("Empty private key")
        }

        return PrivateKeyOpenABE(
            private = asymPrivateKeyBytes.decodeToString(),
            keyID = keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
        )
    }

    /**
     * Check that the public and private keys in the
     * encryption [keyPair] form a valid key pair
     */
    override fun checkAsymEncKeys(keyPair: KeyPairCryptoAC) {
        logger.debug { "Challenging an encryption key pair" }

        if (keyPair.keyType != AsymKeysType.ENC) {
            throw InvalidKeyException("Key pair type is not ${AsymKeysType.ENC} but ${keyPair.keyType} ")
        }
        if (keyPair.public.keyID!! != keyPair.private.keyID!!) { // TODO handle exception => explain that OpenABE keys MUST always have their ID
            throw CryptographicOperationException("Key IDs are different")
        }

        /**
         * Check that the IDs assigned to
         * the keys are actually the right ones
         */
        checkPublicPKEKeyHasRightID(keyPair.public as PublicKeyOpenABE)
        checkPrivatePKEKeyHasRightID(keyPair.private as PrivateKeyOpenABE)

        val challenge = "Frankly, my dear, I don't give a damn"
        val encBytes = asymEncrypt(
            encryptingKey = keyPair.public,
            bytes = challenge.toByteArray()
        )
        try {
            if (!challenge.toByteArray().contentEquals(asymDecrypt(
                encryptingKey = keyPair.public,
                decryptingKey = keyPair.private,
                encBytes = encBytes
            ))) {
                logger.error { "Inconsistent encryption key pair" }
                throw InvalidKeyException("Inconsistent encryption key pair")
            }
        } catch (e: OpenPKEContextDecrypt) {
            logger.error { "Inconsistent encryption key pair" }
            throw InvalidKeyException("Inconsistent encryption key pair")
        }
        logger.debug { "Encryption key pair challenge successful" }
    }

    /** Check that the public and private keys in the signing [keyPair] form a valid key pair */
    override fun checkAsymSigKeys(keyPair: KeyPairCryptoAC) {
        logger.debug { "Challenging a signing key pair" }

        if (keyPair.keyType != AsymKeysType.SIG) {
            throw InvalidKeyException("Key pair type is not ${AsymKeysType.SIG} but ${keyPair.keyType} ")
        }
        if (keyPair.public.keyID!! != keyPair.private.keyID!!) { // TODO handle exception => explain that OpenABE keys MUST always have their ID
            throw InvalidKeyException("Key IDs are different")
        }
        keyPair as KeyPairOpenABE

        /**
         * Check that the IDs assigned to
         * the keys are actually the right ones
         */
        checkPublicPKSIGKeyHasRightID(keyPair.public)
        checkPrivatePKSIGKeyHasRightID(keyPair.private)

        val challenge = "Here's looking at you, kid"
        val signature = createSignature(challenge.toByteArray(), keyPair.private)
        try {
            verifySignature(signature, challenge.toByteArray(), keyPair.public)
        } catch (e: SignatureException) {
            logger.error { "Inconsistent signing key pair" }
            throw InvalidKeyException("Inconsistent signing key pair")
        }
        logger.debug { "Signing key pair challenge successful" }
    }

    /**
     * Return a freshly generated ABE
     * private key embedding the given
     * [attributes] with the given [keyID]
     *
     * In this implementation, the freshly
     * generated key is deleted from the
     * context by default for added security.
     * If you want to use the key, import it
     * first with the "importABEUserKey" function
     * (remember to delete it when not used anymore)
     */
    override fun generateABEPrivateKey(
        attributes: String,
        keyID: String,
    ): PrivateKeyOpenABE {
        logger.debug { "" +
            "Generating ABE asymmetric key with " +
            "attributes $attributes and ID $keyID"
        }
        oABE.keygen(
            keyInput = attributes,
            keyID = keyID,
        )
        val key = oABE.exportUserKey(keyID = keyID)
        oABE.deleteKey(keyID)
        return PrivateKeyOpenABE(
            private = key,
            keyID = keyID,
        )
    }

    /**
     * Encrypt the given [plaintext]
     * under the [accessStructure]
     */
    override fun encryptABE(
        accessStructure: String,
        plaintext: String
    ): String {
        logger.debug { "Encrypting plaintext under access structure $accessStructure" }
        return oABE.encrypt(
            encInput = accessStructure,
            plaintext = plaintext
        )
    }

    /**
     * Decrypt the given [ciphertext]
     * with the key corresponding to
     * the [keyID]. If [keyABE] is
     * given, import it under [keyID].
     * Otherwise, the key  corresponding
     * to the given [keyID] should already
     * have been imported through the function
     * "importABEUserKey()"
     */
    override fun decryptABE(
        keyID: String,
        keyABE: PrivateKeyOpenABE?,
        ciphertext: String
    ): String {
        logger.debug { "Decrypting ciphertext with key ID $keyID" }
        if (keyABE != null) {
            logger.debug { "As keyABE was given, import it under ID $keyID" }
            require(keyID == keyABE.keyID)
            importABEUserKey(keyABE)
        }
        return oABE.decrypt(
            keyID = keyID,
            ciphertext = ciphertext
        )
    }

    /** Return the ABE public parameters */
    override fun exportABEPublicParams(): String {
        logger.debug { "Exporting ABE public parameters" }
        return oABE.exportPublicParams()
    }

    /** Import ABE [publicParameters] */
    override fun importABEPublicParams(publicParameters: String) {
        logger.debug { "Importing ABE public parameters" }
        oABE.importPublicParams(publicParameters)
    }

    //** Import the ABE [userKey] */
    override fun importABEUserKey(
        userKey: PrivateKeyOpenABE,
    ) {
        val keyID = userKey.keyID!! // TODO handle exception => explain that ABE keys MUST always have their ID
        logger.debug { "Importing ABE user key with key ID $keyID" }
        oABE.importUserKey(
            keyID = keyID,
            keyBlob = userKey.private
        )
    }

    /** Delete the ABE key with the [keyID] */
    override fun deleteABEUserKey(keyID: String) {
        logger.debug { "Delete ABE user key with key ID $keyID" }
        oABE.deleteKey(keyID = keyID)
    }

    // TODO switch to authenticated encryption?
    /**
     * Encrypt the [bytes] with the [encryptingKey]
     *
     * In this implementation, OpenABE uses TODO algorithms
     */
    override fun asymEncrypt(
        encryptingKey: PublicKeyCryptoAC,
        bytes: ByteArray
    ): ByteArray {
        require(bytes.isNotEmpty()) { "Empty ByteArray to encrypt" }
        val keyID = (encryptingKey as PublicKeyOpenABE).keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID

        oPKE.importPublicKey(
            keyID = keyID,
            keyBlob = encryptingKey.public
        )
        return oPKE.encrypt(
            receiverID = keyID,
            plaintext = bytes.encodeBase64(),
        ).decodeBase64()
    }

    /**
     * Decrypt the [encBytes] encrypted with the
     * [encryptingKey] with the [decryptingKey]
     * If the decryption fails, throw a
     * CryptographicOperationException
     *
     * In this implementation, OpenABE uses TODO algorithms
     */
    override fun asymDecrypt(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encBytes: ByteArray
    ): ByteArray {
        require(encBytes.isNotEmpty()) { "Empty ByteArray to decrypt" }
        encryptingKey as PublicKeyOpenABE
        decryptingKey as PrivateKeyOpenABE

        val keyID = decryptingKey.keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
        oPKE.importPrivateKey(
            keyID = keyID,
            keyBlob = decryptingKey.private
        )
        oPKE.importPublicKey(
            keyID = keyID,
            keyBlob = encryptingKey.public
        )
        return try {
            oPKE.decrypt(
                receiverID = keyID,
                ciphertext = encBytes.encodeBase64(),
            ).decodeBase64()
        } catch (e: OpenPKEContextDecrypt) {
            logger.error { "Exception while asymmetric decryption" }
            logger.error { e }
            throw CryptographicOperationException(e.localizedMessage)
        }
    }



    /**
     * Check whether there exists a PKE [public] key with
     * the same ID. If not, import the key. Otherwise, check
     * whether the existing and the [public] key are the same.
     * Otherwise, throw an InvalidKeyException
     */
    private fun checkPublicPKEKeyHasRightID(public: PublicKeyOpenABE) {
        val keyID = public.keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
        val exportedKey = try {
            oPKE.exportPublicKey(keyID)
        } catch (e: OpenPKEContextExportKey) {
            logger.warn { "Key with ID $keyID does not exists, import it" }
            oPKE.importPublicKey(
                keyID = keyID,
                keyBlob = public.public
            )
            return
        }

        if (exportedKey != public.public) {
            val message = "Public PKE key with ID $keyID already exists " +
                    "and it is different from the given one"
            logger.error { message }
            throw CryptographicOperationException(message)
        }
    }

    /**
     * Check whether there exists a PKE [private] key with
     * the same ID. If not, import the key. Otherwise, check
     * whether the existing and the [private] key are the same.
     * Otherwise, throw an InvalidKeyException
     */
    private fun checkPrivatePKEKeyHasRightID(private: PrivateKeyOpenABE) {
        val keyID = private.keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
        val exportedKey = try {
            oPKE.exportPrivateKey(keyID)
        } catch (e: OpenPKEContextExportKey) {
            logger.warn { "Key with ID $keyID does not exists, import it" }
            oPKE.importPrivateKey(
                keyID = keyID,
                keyBlob = private.private
            )
            return
        }

        if (exportedKey != private.private) {
            val message = "Private PKE key with ID $keyID already exists " +
                    "and it is different from the given one"
            logger.error { message }
            throw InvalidKeyException(message)
        }
    }

    /**
     * Check whether there exists a PKSIG [public] key with
     * the same ID. If not, import the key. Otherwise, check
     * whether the existing and the [public] key are the same.
     * Otherwise, throw an InvalidKeyException
     */
    private fun checkPublicPKSIGKeyHasRightID(public: PublicKeyOpenABE) {
        val keyID = public.keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
        val exportedKey = try {
            oSIG.exportPublicKey(keyID)
        } catch (e: OpenPKSIGContextExportKey) {
            logger.warn { "Key with ID $keyID does not exists, import it" }
            oSIG.importPublicKey(
                keyID = keyID,
                keyBlob = public.public
            )
            return
        }

        if (exportedKey != public.public) {
            val message = "Public PKSIG key with ID $keyID already exists " +
                    "and it is different from the given one"
            logger.error { message }
            throw InvalidKeyException(message)
        }
    }

    /**
     * Check whether there exists a PKSIG [private] key with
     * the same ID. If not, import the key. Otherwise, check
     * whether the existing and the [private] key are the same.
     * Otherwise, throw an InvalidKeyException
     */
    private fun checkPrivatePKSIGKeyHasRightID(private: PrivateKeyOpenABE) {
        val keyID = private.keyID!! // TODO handle exception => explain that OpenABE keys MUST always have their ID
        val exportedKey = try {
            oSIG.exportPrivateKey(keyID)
        } catch (e: OpenPKSIGContextExportKey) {
            logger.warn { "Key with ID $keyID does not exists, import it" }
            oSIG.importPrivateKey(
                keyID = keyID,
                keyBlob = private.private
            )
            return
        }

        if (exportedKey != private.private) {
            val message = "Private PKSIG key with ID $keyID already exists " +
                    "and it is different from the given one"
            logger.error { message }
            throw InvalidKeyException(message)
        }
    }
}
