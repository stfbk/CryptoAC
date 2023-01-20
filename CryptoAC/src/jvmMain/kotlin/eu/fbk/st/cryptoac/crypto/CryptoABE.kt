package eu.fbk.st.cryptoac.crypto

import eu.fbk.st.cryptoac.crypto.openabe.PrivateKeyOpenABE

/**
 * Interface for ABE cryptographic
 * operations in CryptoAC
 */
interface CryptoABE : Crypto {

    companion object {
        /**
         * The character sequence used to
         * delimit a name and a version number
         */
        const val nameAndVersionNumberDelimiter = "_"

        /**
         * The character sequence used to
         * delimit an attribute name and its value
         */
        const val attributeAndValueDelimiter = ":"

        /**
         * The character sequence used to
         * delimit an attribute sequence
         */
        const val attributeSequenceDelimiter = "|"
    }



    /**
     * Return a freshly generated ABE
     * private key embedding the given
     * [attributes] with the given [keyID].
     */
    fun generateABEPrivateKey(
        attributes: String,
        keyID: String
    ): PrivateKeyOpenABE

    /**
     * Encrypt the given [plaintext]
     * under the [accessStructure]
     */
    fun encryptABE(
        accessStructure: String,
        plaintext: String
    ): String

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
    fun decryptABE(
        keyID: String,
        keyABE: PrivateKeyOpenABE? = null,
        ciphertext: String
    ): String

    /** Return the ABE public parameters */
    fun exportABEPublicParams(): String

    /** Import ABE [publicParameters] */
    fun importABEPublicParams(publicParameters: String)

    /** Import the ABE [userKey] */
    fun importABEUserKey(
        userKey: PrivateKeyOpenABE,
    )

    /** Delete the ABE key with the [keyID] */
    fun deleteABEUserKey(keyID: String)
}
