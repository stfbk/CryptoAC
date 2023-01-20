package eu.fbk.st.cryptoac.crypto

import java.io.InputStream

/**
 * Interface for asymmetric cryptographic
 * operations in CryptoAC
 */
interface CryptoPKE : Crypto {

    /**
     * Return a freshly generated asymmetric
     * key pair with id [keyID] for encryption
     */
    fun generateAsymEncKeys(keyID: String? = null): KeyPairCryptoAC

    /**
     * Return a freshly generated asymmetric
     * key pair with id [keyID] for signatures
     */
    fun generateAsymSigKeys(keyID: String? = null): KeyPairCryptoAC

    /**
     * Verify the digital [signature] of the [bytes] with the [verifyingKey]
     * If the signature is not valid, throw a SignatureException
     * If either [bytes] or [signature] is empty, throw an IllegalArgumentException
     */
    fun verifySignature(
        signature: ByteArray,
        bytes: ByteArray,
        verifyingKey: PublicKeyCryptoAC
    )

    /**
     * Return a digital signature calculated on the [bytes] with the
     * [signingKey]. If [bytes] is empty, throw an IllegalArgumentException
     */
    fun createSignature(
        bytes: ByteArray,
        signingKey: PrivateKeyCryptoAC
    ): ByteArray

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
    fun encryptSymKey(
        encryptingKey: PublicKeyCryptoAC,
        symKey: SymmetricKeyCryptoAC
    ): EncryptedSymKey

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
     * Return a key pair of the given [type] created from
     * the encoded encryption [asymPublicKeyBytes] and the
     * encoded encryption [asymPrivateKeyBytes]. Optionally,
     * specify a [keyID]
     * Also, check the two keys actually form a valid pair
     */
    fun recreateAsymKeyPair(
        asymPublicKeyBytes: ByteArray,
        asymPrivateKeyBytes: ByteArray,
        type: AsymKeysType,
        keyID: String? = null
    ): KeyPairCryptoAC

    /**
     * Reconstruct a public key of the given [type] from
     * the encoded encryption [asymPublicKeyBytes]. Optionally,
     * specify a [keyID]
     */
    fun recreateAsymPublicKey(
        asymPublicKeyBytes: ByteArray,
        type: AsymKeysType,
        keyID: String? = null
    ): PublicKeyCryptoAC

    /**
     * Reconstruct a private key of the given [type] from
     * the encoded encryption [asymPrivateKeyBytes]. Optionally,
     * specify a [keyID]
     */
    fun recreateAsymPrivateKey(
        asymPrivateKeyBytes: ByteArray,
        type: AsymKeysType,
        keyID: String? = null
    ): PrivateKeyCryptoAC


    /**
     * Check that the public and private keys in the
     * encryption [keyPair] form a valid key pair
     */
    fun checkAsymEncKeys(
        keyPair: KeyPairCryptoAC
    )

    /**
     * Check that the public and private keys in
     * the signing [keyPair] form a valid key pair
     */
    fun checkAsymSigKeys(
        keyPair: KeyPairCryptoAC
    )

    /** Encrypt the [bytes] with the [encryptingKey] */
    fun asymEncrypt(
        encryptingKey: PublicKeyCryptoAC,
        bytes: ByteArray
    ): ByteArray

    /**
     * Decrypt the [encBytes] encrypted with the
     * [encryptingKey] with the [decryptingKey]
     * If the decryption fails, throw a
     * CryptographicOperationException
     */
    fun asymDecrypt(
        encryptingKey: PublicKeyCryptoAC,
        decryptingKey: PrivateKeyCryptoAC,
        encBytes: ByteArray
    ): ByteArray
}
