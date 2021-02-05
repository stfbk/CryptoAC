package eu.fbk.st.cryptoac.core.element;

import eu.fbk.st.cryptoac.App;

import java.security.*;
import java.util.HashMap;
import java.util.Map;


/**
 * This class defines a CryptoAC active element, i.e., with cryptographic keys.
 * Concrete examples of CryptoAC active elements are users and roles.
 */
public abstract class CryptoACActiveElement extends CryptoACElement {

    /**
     * The keypair associated to this entity for encrypting.
     * Note: transient so they are not serialized
     */
    private final transient KeyPair encryptingKeyPair;

    /**
     * The keypair associated to this entity for signing.
     * Note: transient so they are not serialized
     */
    private final transient KeyPair signingKeyPair;

    /**
     * Constructor with parameters.
     * @param encryptingKeyPair keypair for encrypting
     * @param signingKeyPair keypair for signing
     * @param name the ID of this cryptoAC element
     */
    CryptoACActiveElement(KeyPair encryptingKeyPair, KeyPair signingKeyPair, String name) {

        super(name);

        this.encryptingKeyPair = encryptingKeyPair;
        this.signingKeyPair = signingKeyPair;

        // if the element is the admin, the token is the name of the admin itself
        if (name.equals(App.admin))
            this.setToken(App.admin);
        else
            this.setToken(getRandomToken(tokenSize));
    }

    /**
     * getter for the encrypting public key.
     * @return the encrypting public key
     */
    public PublicKey getEncryptingPublicKey() {
        return (encryptingKeyPair == null) ? null : encryptingKeyPair.getPublic();
    }

    /**
     * getter for the encrypting private key.
     * @return the encrypting private key
     */
    PrivateKey getEncryptingPrivateKey() {
        return (encryptingKeyPair == null) ? null : encryptingKeyPair.getPrivate();
    }

    /**
     * getter for the signing public key.
     * @return the signing public key
     */
    public PublicKey getSigningPublicKey() {
        return (signingKeyPair == null) ? null : signingKeyPair.getPublic();
    }

    /**
     * getter for the signing private key.
     * @return the signing private key
     */
    PrivateKey getSigningPrivateKey() {
        return (signingKeyPair == null) ? null : signingKeyPair.getPrivate();
    }

    /**
     * This enumerator lists the CryptoAC active elements.
     */
    public enum CryptoACActiveElementEnum {

        User("User"),
        Role("Role");

        private final String param;

        CryptoACActiveElementEnum(String envUrl) {
            this.param = envUrl;
        }

        @Override
        public String toString() {
            return param;
        }

        private static final Map<String, CryptoACActiveElement.CryptoACActiveElementEnum> lookup = new HashMap<>();

        static {
            for(CryptoACActiveElement.CryptoACActiveElementEnum env : CryptoACActiveElement.CryptoACActiveElementEnum.values()) {
                lookup.put(env.toString(), env);
            }
        }

        public static CryptoACActiveElement.CryptoACActiveElementEnum get(String param) {
            return lookup.get(param);
        }
    }
}