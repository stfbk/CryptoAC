package eu.fbk.st.cryptoac.tuple;

import com.google.gson.annotations.Expose;

import java.io.Serializable;
import java.util.Arrays;

/**
 * This tuple binds a Role and a File over a Permission. Thus, it allows users belonging to the Role
 * to read or write the file. The associated element is the Role, while the specific element is the File.
 */
public class PermissionTuple extends CryptoACTuple implements Serializable {

    /**
     * The version number of the file (has to be greater than 1). This is to be able to distinguish
     * between the key to user to DECRYPT the file (smallest number) and
     * the key to use to ENCRYPT the file (biggest number). In this case, the file version
     * number is referred to the file this symmetric key can en/decrypt
     */
    @Expose
    private Integer symmetricFileKeyVersionNumber;

    /**
     * The version number of the PKI keys of the role
     * (has to be greater than 1).
     */
    @Expose
    private Integer roleVersionNumber;

    /**
     * encrypted symmetric key
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

    // default constructor for serialization
    public PermissionTuple () {}

    /**
     * @param associatedElement the element associated (a Role Id)
     * @param roleVersionNumber the role version number. A negative or zero value will be set to 1 by default
     * @param associatedFile the associated file ID
     * @param associatedPermission the permission being granted to the role over the specified file
     * @param fileVersionNumber the file version number. A negative or zero value will be set to 1 by default
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

        // super constructor
        super(TupleType.FK, associatedElement, newSignature, signer);

        // set the other attributes
        this.symmetricFileKeyVersionNumber = fileVersionNumber < 1 ? 1 : fileVersionNumber;
        this.roleVersionNumber = roleVersionNumber < 1 ? 1 : roleVersionNumber;
        this.encryptedSymmetricFileKey = encryptedSymmetricFileKey;
        this.associatedFile = associatedFile;
        this.associatedPermission = associatedPermission;
        this.roleToken = roleToken;
        this.fileToken = fileToken;

        // if the version number is < 1
        if (roleVersionNumber < 1 || fileVersionNumber < 1) {

            // throw exception
            throw new IllegalArgumentException("version number cannot be less than 1");
        }
    }

    /**
     * getter for the version number
     * @return the version number
     */
    public Integer getSymmetricFileKeyVersionNumber() {
        return symmetricFileKeyVersionNumber;
    }

    /**
     * setter for the file key version number
     * @param symmetricFileKeyVersionNumber the new file key version number
     */
    public void setSymmetricFileKeyVersionNumber(int symmetricFileKeyVersionNumber) {

        this.symmetricFileKeyVersionNumber = symmetricFileKeyVersionNumber;
    }


    /**
     * getter for the role version number
     * @return the role version number
     */
    public Integer getRoleVersionNumber() {
        return roleVersionNumber;
    }

    /**
     * setter for the role version number
     * @param roleVersionNumber the new role version number
     */
    public void setRoleVersionNumber(int roleVersionNumber) {

        this.roleVersionNumber = roleVersionNumber;
    }

    /**
     * getter for the (encrypted) symmetric key used to encrypt the file
     * @return the (encrypted) symmetric key used to encrypt the file
     */
    public byte[] getEncryptedSymmetricFileKey() {
        return encryptedSymmetricFileKey;
    }

    /**
     * setter for the encrypted symmetric file key
     * @param encryptedSymmetricFileKey the new encrypted symmetric file key
     */
    public void setEncryptedSymmetricFileKey(byte[] encryptedSymmetricFileKey) {

        this.encryptedSymmetricFileKey = encryptedSymmetricFileKey;
    }

    /**
     * getter for the File object
     * @return the File object
     */
    public String getAssociatedFile() {
        return associatedFile;
    }

    /**
     * setter for the associated file
     * @param associatedFile the new associated file
     */
    public void setAssociatedFile(String associatedFile) {

        this.associatedFile = associatedFile;
    }

    /**
     * getter for the role token
     * @return the role token
     */
    public String getRoleToken() {
        return roleToken;
    }

    /**
     * setter for the role token
     * @param roleToken the new role token
     */
    public void setRoleToken(String roleToken) {

        this.roleToken = roleToken;
    }

    /**
     * getter for the file token
     * @return the file token
     */
    public String getFileToken() {
        return fileToken;
    }

    /**
     * setter for the file token
     * @param fileToken the new file token
     */
    public void setFileToken(String fileToken) {

        this.fileToken = fileToken;
    }

    /**
     * getter for the Permission over the file (Read_and_Write/Read)
     * @return the Permission over the file (Read_and_Write/Read)
     */
    public Permission getAssociatedPermission() {
        return  associatedPermission;
    }

    /**
     * setter for the associated permission
     * @param associatedPermission the new associated permission
     */
    public void setAssociatedPermission(Permission associatedPermission) {

        this.associatedPermission = associatedPermission;
    }

    /**
     * It checks whether all the fields of the tuple are not null.
     * @return true is all fields are not null, false otherwise
     */
    @Override
    public boolean isCompleteInAllFields() {

        return (!getAssociatedFile().isBlank() &&
                !getAssociatedElement().isBlank() &&
                !getSignerOfThisTuple().isBlank() &&
                isVersionNumberValid(getSymmetricFileKeyVersionNumber()) &&
                isVersionNumberValid(getRoleVersionNumber()) &&
                isByteArrayValid(getSignature()) &&
                isByteArrayValid(getEncryptedSymmetricFileKey()) &&
                getAssociatedPermission() != null);

    }

    /**
     * creates a string with all the fields identifying this object
     * @return a string composed of a concatenation of the identifying fields for this object
     */
    @Override
    public String getIdentifyingFieldsForSignature() {

        // the fields, concatenated
        return  getAssociatedElement() +
                getAssociatedFile() +
                getAssociatedPermission().toString() +
                getSymmetricFileKeyVersionNumber() +
                getRoleVersionNumber() +
                Arrays.toString(getEncryptedSymmetricFileKey());
    }
}
