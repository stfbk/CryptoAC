package eu.fbk.st.cryptoac.core.element;


import java.io.Serializable;
import java.security.KeyPair;


/**
 * This element represents a role in CryptoAC.
 */
public class Role extends CryptoACActiveElement implements Serializable {

    /**
     * The version number of the PKC keys of the role.
     */
    private final Integer roleVersionNumber;

    /**
     * Constructor with parameters
     * @param roleName the (unique) name of the role
     * @param roleVersionNumber the positive role version number
     * @param roleEncryptingKeyPair keypair used for encrypting
     * @param roleSigningKeyPair keypair used for signing
     */
    public Role (String roleName, Integer roleVersionNumber, KeyPair roleEncryptingKeyPair, KeyPair roleSigningKeyPair) {

        super(roleEncryptingKeyPair, roleSigningKeyPair, roleName);

        this.roleVersionNumber = roleVersionNumber;

        if (isVersionNumberInvalid(roleVersionNumber))
            throw new IllegalArgumentException("Version number is either null or less than 1");
    }


    /**
     * getter for the role version number.
     * @return return the role version number
     */
    public Integer getRoleVersionNumber() {
        return roleVersionNumber;
    }

    /**
     * It checks whether all the fields of the file are not null.
     * @return true is all fields are not null, false otherwise
     */
    @Override
    public boolean isCompleteInAllFields() {

        return (getName() != null &&
                getToken() != null &&
                getEncryptingPublicKey() != null  &&
                getSigningPublicKey() != null  &&
                getRoleVersionNumber() != null);
    }
}
