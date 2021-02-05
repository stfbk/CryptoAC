package eu.fbk.st.cryptoac.core.tuple;

import com.google.gson.annotations.Expose;
import eu.fbk.st.cryptoac.core.element.CryptoACActiveElement;
import eu.fbk.st.cryptoac.util.AccessControlEnforcement;

import java.io.Serializable;

/**
 * The associated element of this tuple is a file. The encrypted file is not directly part of the tuple.
 * Instead, the tuple carries the ID of the file. Note that the version number refers to the symmetric key.
 * Each time a role that could access the file loses the permission over the file or a user is deleted from
 * that role, the version number of the symmetric key is increased by 1.
 */
public class FileTuple extends CryptoACTuple implements Serializable {

    /**
     * The version number of the symmetric key that has to be used to DECRYPT the file.
     */
    @Expose
    private Integer decryptingKeyVersionNumber;

    /**
     * Given that a FileTuple can be signed by both users and roles, it is important to
     * have a variable that holds this information, so to properly check the signature afterward.
     */
    @Expose
    private CryptoACActiveElement.CryptoACActiveElementEnum elementSigner;

    /**
     * The ID (token, for anonymization) of the file.
     * Don't apply the expose annotation so it can be excluded from serialization.
     */
    private String fileToken;

    /**
     * The enforcement chosen for this file.
     */
    @Expose
    private AccessControlEnforcement accessControlEnforcement;



    /**
     * Empty constructor for serialization.
     */
    public FileTuple () {}

    /**
     * Constructor with parameters.
     * @param associatedElement the associated element (thus, the File ID)
     * @param fileToken the token of the file associated to this tuple
     * @param fileVersionNumber the positive file version number
     * @param elementSigner the CryptoAC active element that signed the tuple
     * @param newSignature the new signature to add to this tuple
     * @param signer the ID of the entity that signed the tuple
     * @param accessControlEnforcement the enforcement chosen for this file
     * @throws IllegalArgumentException if the provided version number is null or less than 1
     */
    public FileTuple(String associatedElement, String fileToken, Integer fileVersionNumber,
                     CryptoACActiveElement.CryptoACActiveElementEnum elementSigner, byte[] newSignature,
                     String signer, AccessControlEnforcement accessControlEnforcement) throws IllegalArgumentException {

        super(TupleType.F, associatedElement, newSignature, signer);

        this.decryptingKeyVersionNumber = fileVersionNumber;
        this.elementSigner = elementSigner;
        this.fileToken = fileToken;
        this.accessControlEnforcement = accessControlEnforcement;

        if (!isVersionNumberValid(fileVersionNumber))
            throw new IllegalArgumentException("Version number is either null or less than 1");
    }

    /**
     * getter for the version number of the symmetric key.
     * @return the version number of the symmetric key
     */
    public Integer getDecryptingKeyVersionNumber() {
        return decryptingKeyVersionNumber;
    }


    /**
     * setter for the decrypt file version number.
     * @param decryptingKeyVersionNumber the new decrypt file version number
     */
    public void setDecryptingKeyVersionNumber(int decryptingKeyVersionNumber) {
        this.decryptingKeyVersionNumber = decryptingKeyVersionNumber;
    }


    /**
     * getter for the type of CryptoAC active element that signed the tuple.
     * @return the type of CryptoAC active element that signed the tuple.
     */
    public CryptoACActiveElement.CryptoACActiveElementEnum getElementSigner() {
        return elementSigner;
    }

    /**
     * setter for the type of CryptoAC active element that signed the tuple.
     * @param elementSigner the type of CryptoAC active element that signed the tuple.
     */
    public void setElementSigner(CryptoACActiveElement.CryptoACActiveElementEnum elementSigner) {
        this.elementSigner = elementSigner;
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
     * getter for the file access control enforcement.
     * @return the file access control enforcement
     */
    public AccessControlEnforcement getAccessControlEnforcement() {
        return accessControlEnforcement;
    }

    /**
     * setter for the file access control enforcement.
     * @param accessControlEnforcement the file access control enforcement
     */
    public void setAccessControlEnforcement(AccessControlEnforcement accessControlEnforcement) {
        this.accessControlEnforcement = accessControlEnforcement;
    }

    /**
     * It checks whether all the fields of the tuple are not null.
     * Note that the token may be null, so it is not checked.
     * @return true is all fields are not null, false otherwise
     */
    @Override
    public boolean isCompleteInAllFields() {
        return (super.isCompleteInAllFields() &&
                isVersionNumberValid(getDecryptingKeyVersionNumber()) &&
                getAccessControlEnforcement() != null &&
                getElementSigner() != null);
    }

    /**
     * creates a string with all the fields identifying this object.
     * @return a string composed of a concatenation of the identifying fields for this object
     */
    @Override
    public String getIdentifyingFieldsForSignature() {
        return getAssociatedElement() + getDecryptingKeyVersionNumber() + getAccessControlEnforcement();
    }
}