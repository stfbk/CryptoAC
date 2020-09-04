package eu.fbk.st.cryptoac.util;

/**
 * POJO to represent an encrypted pair of PKC keys as two array of bytes
 */
public class EncryptedPKCKeyPair {

    /**
     * encrypted PKC private key.
     */
    private byte [] encryptedPrivateKey;

    /**
     * encrypted PKC private key.
     */
    private byte [] encryptedPublicKey;


    /**
     * getter for the encrypted PKC private key
     * @return the encrypted PKC private key
     */
    public byte[] getEncryptedPrivateKey() {
        return encryptedPrivateKey;
    }

    /**
     * getter for the encrypted PKC public key
     * @return the encrypted PKC public key
     */
    public byte[] getEncryptedPublicKey() {
        return encryptedPublicKey;
    }

    /**
     * setter for the encrypted PKC private key
     * @param encryptedPrivateKey the encrypted PKC private key
     * @return this for concatenation
     */
    public EncryptedPKCKeyPair setEncryptedPrivateKey(byte[] encryptedPrivateKey) {
        this.encryptedPrivateKey = encryptedPrivateKey;
        return this;
    }

    /**
     * setter for the encrypted PKC public key
     * @param encryptedPublicKey the encrypted PKC public key
     * @return this for concatenation
     */
    public EncryptedPKCKeyPair setEncryptedPublicKey(byte[] encryptedPublicKey) {
        this.encryptedPublicKey = encryptedPublicKey;
        return this;
    }
}
