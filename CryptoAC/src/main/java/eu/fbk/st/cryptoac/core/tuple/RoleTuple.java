package eu.fbk.st.cryptoac.core.tuple;

import com.google.gson.annotations.Expose;
import eu.fbk.st.cryptoac.util.EncryptedPKCKeyPair;

import java.util.Arrays;

/**
 * This tuple binds a user to a role, thus gives access to the role's keys.
 * The associated element is the user, the tuple-specific element is the role.
 */
public class RoleTuple extends CryptoACTuple {

    /**
     * The name of the role associated to the tuple.
     */
    @Expose
    private String associatedRole;

    /**
     * The version number of the keys of the role.
     */
    @Expose
    private Integer roleVersionNumber;

    /**
     * The encrypting PKC keys of the role, encrypted with the public key of the user.
     * Don't apply the expose annotation so it can be excluded from serialization.
     */
    private EncryptedPKCKeyPair encryptingKeys;

    /**
     * The signing PKC keys of the role, encrypted with the public key of the user.
     * Don't apply the expose annotation so it can be excluded from serialization.
     */
    private EncryptedPKCKeyPair signingKeys;

    /**
     * Constructor with parameters.
     * @param associatedElement the associated element
     * @param associatedRole the associated role
     * @param encryptingKeys the encrypting PKC keys of the role, encrypted with the public key of the user
     * @param signingKeys the signing PKC keys of the role, encrypted with the public key of the user
     * @param roleVersionNumber the positive role version number
     * @param newSignature the new signature to add to this tuple
     * @param signer the ID of the entity that signed the tuple
     * @throws IllegalArgumentException if the provided version number is lesser than 0
     */
    public RoleTuple(String associatedElement, String associatedRole, EncryptedPKCKeyPair encryptingKeys,
                     EncryptedPKCKeyPair signingKeys, Integer roleVersionNumber, byte[] newSignature, String signer)
            throws IllegalArgumentException {

        super(TupleType.RK, associatedElement, newSignature, signer);

        this.associatedRole = associatedRole;
        this.encryptingKeys = encryptingKeys;
        this.signingKeys = signingKeys;
        this.roleVersionNumber = roleVersionNumber;

        if (!isVersionNumberValid(roleVersionNumber))
            throw new IllegalArgumentException("Version number is either null or less than 1");
    }


    /**
     * getter for the associated role.
     * @return the associated role
     */
    public String getAssociatedRole() {
        return associatedRole;
    }

    /**
     * setter for the associated role.
     * @param associatedRole the new associated role
     */
    public void setAssociatedRole(String associatedRole) {
        this.associatedRole = associatedRole;
    }

    /**
     * getter for the encrypted encrypting PKC keys of the role.
     * @return the encrypted encrypting PKC keys of the role
     */
    public EncryptedPKCKeyPair getEncryptedEncryptingRoleKeys() {
        return encryptingKeys;
    }

    /**
     * setter for the encrypted encrypting PKC keys of the role.
     * @param encryptingKeys the encrypted encrypting PKC keys of the role
     */
    public void setEncryptedEncryptingRoleKeys(EncryptedPKCKeyPair encryptingKeys) {
        this.encryptingKeys = encryptingKeys;
    }

    /**
     * getter for the encrypted signing PKC keys of the role.
     * @return the encrypted signing PKC keys of the role
     */
    public EncryptedPKCKeyPair getEncryptedSigningRoleKeys() {
        return signingKeys;
    }

    /**
     * setter for the encrypted signing PKC keys of the role.
     * @param signingKeys the encrypted signing PKC keys of the role
     */
    public void setEncryptedSigningRoleKeys(EncryptedPKCKeyPair signingKeys) {
        this.signingKeys = signingKeys;
    }

    /**
     * getter for the version number.
     * @return the version number
     */
    public Integer getRoleVersionNumber() {
        return roleVersionNumber;
    }

    /**
     * setter for the role version number.
     * @param roleVersionNumber the new role version number
     */
    public void setRoleVersionNumber(int roleVersionNumber) {
        this.roleVersionNumber = roleVersionNumber;
    }


    /**
     * It checks whether all the fields of the tuple are not null.
     * @return true is all fields are not null, false otherwise
     */
    @Override
    public boolean isCompleteInAllFields() {

        return (super.isCompleteInAllFields() &&
                !getAssociatedRole().isBlank() &&
                isVersionNumberValid(getRoleVersionNumber()) &&
                isByteArrayValid(getEncryptedEncryptingRoleKeys().getEncryptedPublicKey()) &&
                isByteArrayValid(getEncryptedEncryptingRoleKeys().getEncryptedPrivateKey()) &&
                isByteArrayValid(getEncryptedSigningRoleKeys().getEncryptedPublicKey()) &&
                isByteArrayValid(getEncryptedSigningRoleKeys().getEncryptedPrivateKey()));
    }

    /**
     * Creates a string with all the fields identifying this object.
     * @return a string composed of a concatenation of the identifying fields for this object
     */
    @Override
    public String getIdentifyingFieldsForSignature() {

        return  getAssociatedElement() +
                getAssociatedRole() +
                getRoleVersionNumber() +
                Arrays.toString(getEncryptedEncryptingRoleKeys().getEncryptedPrivateKey()) +
                Arrays.toString(getEncryptedEncryptingRoleKeys().getEncryptedPublicKey()) +
                Arrays.toString(getEncryptedSigningRoleKeys().getEncryptedPrivateKey()) +
                Arrays.toString(getEncryptedSigningRoleKeys().getEncryptedPublicKey());
    }
}
