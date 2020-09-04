package eu.fbk.st.cryptoac.core.tuple;

import com.google.gson.annotations.Expose;

import java.io.Serializable;
import java.util.Arrays;

/**
 * This tuple binds a Role and a File over a Permission. Thus, it allows users belonging to the Role
 * to use the given permission (read or read_and_write) over the file. The associated element is the
 * Role, while the specific element is the File.
 */
public class PermissionTuple extends CryptoACTuple implements Serializable {

    /**
     * The version number of the symmetric key that has to be used to ENCRYPT the file.
     */
    @Expose
    private Integer encryptingKeyVersionNumber;

    /**
     * The version number of the keys of the role.
     */
    @Expose
    private Integer roleVersionNumber;

    /**
     * The encrypted symmetric key.
     * Don't apply the expose annotation so it can be excluded from serialization
     */
    private byte [] encryptedSymmetricFileKey;

    /**
     * The ID of the associated file
     */
    @Expose
    private String associatedFile;

    /**
     * The token of the role
     * Don't apply the expose annotation so it can be excluded from serialization
     */
    private String roleToken;

    /**
     * The token of the file
     * Don't apply the expose annotation so it can be excluded from serialization
     */
    private String fileToken;

    /**
     * The associated permission
     */
    @Expose
    private Permission associatedPermission;

    /**
     * Empty constructor for serialization.
     */
    public PermissionTuple () {}

    /**
     * Constructor with parameters.
     * @param associatedElement the element associated (a Role Id)
     * @param roleVersionNumber the positive role version number
     * @param associatedFile the associated file ID
     * @param associatedPermission the permission being granted to the role over the specified file
     * @param fileVersionNumber the positive file version number
     * @param encryptedSymmetricFileKey the encrypted symmetric key for accessing the file encrypted with
     *                                  the public key of the role
     * @param roleToken the token of the role associated to this tuple
     * @param fileToken the token of the file associated to this tuple
     * @param newSignature the new signature to add to this tuple
     * @param signer the ID of the entity that signed the tuple
     * @throws IllegalArgumentException if one of the provided version number is lesser than 0
     */
    public PermissionTuple(String associatedElement, Integer roleVersionNumber, String associatedFile,
                           Permission associatedPermission, Integer fileVersionNumber, byte[] encryptedSymmetricFileKey,
                           String roleToken, String fileToken, byte[] newSignature, String signer)
            throws IllegalArgumentException {

        super(TupleType.FK, associatedElement, newSignature, signer);

        this.encryptingKeyVersionNumber = fileVersionNumber < 1 ? 1 : fileVersionNumber;
        this.roleVersionNumber = roleVersionNumber < 1 ? 1 : roleVersionNumber;
        this.encryptedSymmetricFileKey = encryptedSymmetricFileKey;
        this.associatedFile = associatedFile;
        this.associatedPermission = associatedPermission;
        this.roleToken = roleToken;
        this.fileToken = fileToken;

        if (!isVersionNumberValid(roleVersionNumber) || !isVersionNumberValid(fileVersionNumber))
            throw new IllegalArgumentException("Version number is either null or less than 1");
    }

    /**
     * getter for the version number.
     * @return the version number
     */
    public Integer getEncryptingKeyVersionNumber() {
        return encryptingKeyVersionNumber;
    }

    /**
     * setter for the file key version number.
     * @param encryptingKeyVersionNumber the new file key version number
     */
    public void setEncryptingKeyVersionNumber(int encryptingKeyVersionNumber) {
        this.encryptingKeyVersionNumber = encryptingKeyVersionNumber;
    }


    /**
     * getter for the role version number.
     * @return the role version number
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
     * getter for the (encrypted) symmetric key used to encrypt the file.
     * @return the (encrypted) symmetric key used to encrypt the file
     */
    public byte[] getEncryptedSymmetricFileKey() {
        return encryptedSymmetricFileKey;
    }

    /**
     * setter for the encrypted symmetric file key.
     * @param encryptedSymmetricFileKey the new encrypted symmetric file key
     */
    public void setEncryptedSymmetricFileKey(byte[] encryptedSymmetricFileKey) {
        this.encryptedSymmetricFileKey = encryptedSymmetricFileKey;
    }

    /**
     * getter for the file.
     * @return the file
     */
    public String getAssociatedFile() {
        return associatedFile;
    }

    /**
     * setter for the file.
     * @param associatedFile the new file
     */
    public void setAssociatedFile(String associatedFile) {
        this.associatedFile = associatedFile;
    }

    /**
     * getter for the role token.
     * @return the role token
     */
    public String getRoleToken() {
        return roleToken;
    }

    /**
     * setter for the role token.
     * @param roleToken the new role token
     */
    public void setRoleToken(String roleToken) {
        this.roleToken = roleToken;
    }

    /**
     * getter for the file token.
     * @return the file token
     */
    public String getFileToken() {
        return fileToken;
    }

    /**
     * setter for the file token.
     * @param fileToken the new file token
     */
    public void setFileToken(String fileToken) {
        this.fileToken = fileToken;
    }

    /**
     * getter for the associated permission.
     * @return the associated permission
     */
    public Permission getAssociatedPermission() {
        return  associatedPermission;
    }

    /**
     * setter for the associated permission.
     * @param associatedPermission the new associated permission
     */
    public void setAssociatedPermission(Permission associatedPermission) {
        this.associatedPermission = associatedPermission;
    }

    /**
     * It checks whether all the fields of the tuple are not null.
     * Note that the tokens may be null, so they are not checked.
     * @return true is all fields are not null, false otherwise
     */
    @Override
    public boolean isCompleteInAllFields() {

        return (super.isCompleteInAllFields() &&
                !getAssociatedFile().isBlank() &&
                isVersionNumberValid(getEncryptingKeyVersionNumber()) &&
                isVersionNumberValid(getRoleVersionNumber()) &&
                isByteArrayValid(getEncryptedSymmetricFileKey()) &&
                getAssociatedPermission() != null);
    }

    /**
     * Creates a string with all the fields identifying this object
     * @return a string composed of a concatenation of the identifying fields for this object
     */
    @Override
    public String getIdentifyingFieldsForSignature() {

        return  getAssociatedElement() +
                getAssociatedFile() +
                getAssociatedPermission().toString() +
                getEncryptingKeyVersionNumber() +
                getRoleVersionNumber() +
                Arrays.toString(getEncryptedSymmetricFileKey());
    }
}
