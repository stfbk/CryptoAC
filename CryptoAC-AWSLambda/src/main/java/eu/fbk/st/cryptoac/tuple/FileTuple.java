package eu.fbk.st.cryptoac.tuple;

import com.google.gson.annotations.Expose;

import java.io.Serializable;

/**
 * The associated element of this tuple is obviously the related File. Because of implementation complexity,
 * the encrypted file is not directly part of the tuple. Instead, the tuple has the path of hte file on the filesystem.
 * The version number refers to the symmetric key. Each time a role loses the permission over the file or a user
 * is deleted from a role, it is increased by 1
 */
public class FileTuple extends CryptoACTuple implements Serializable {

    /**
     * The version number of the symmetric key that has to be used to DECRYPT the file
     */
    @Expose
    private Integer decryptFileVersionNumber;

    /**
     *  given that a FileTuple can be signed by both users and roles, it is important to
     *  have a variable that holds this information, so to properly check the signature afterward
     */
    @Expose
    private Boolean isSignerAUser;

    /**
     * The token of the file
     * Don't apply the expose annotation so it can be excluded from serialization
     */
    private String fileToken;

    // default constructor for serialization
    public FileTuple () {}

    /**
     * Constructor. Initialize the variables of the class
     * @param associatedElement the associated element (thus, the File ID)
     * @param fileToken the token of the file associated to this tuple
     * @param fileVersionNumber the file version number (0 is the file is a new file).
     *                          A negative or zero value will be set to 1 by default
     *                          and will result in an IllegalArgumentException
     * @param isSignerAUser true is signer is user, false otherwise
     * @param newSignature the new signature to add to this tuple
     * @param signer the ID of the entity that signed the tuple
     * @throws IllegalArgumentException if the provided version number is lesser than 0
     */
    public FileTuple(String associatedElement, String fileToken, Integer fileVersionNumber, Boolean isSignerAUser,
                     byte[] newSignature, String signer) throws IllegalArgumentException {

        // super constructor
        super(TupleType.F, associatedElement, newSignature, signer);

        // set the other attributes
        this.decryptFileVersionNumber = fileVersionNumber < 1 ? 1 : fileVersionNumber;
        this.isSignerAUser = isSignerAUser;
        this.fileToken = fileToken;

        // if the version number is < 1
        if (fileVersionNumber < 1) {

            // throw exception
            throw new IllegalArgumentException("version number cannot be less than 1");
        }
    }

    /**
     * getter for the version number of the symmetric key
     * @return the version number of the symmetric key
     */
    public Integer getDecryptFileVersionNumber() {
        return decryptFileVersionNumber;
    }


    /**
     * setter for the decrypt file version number
     * @param decryptFileVersionNumber the new decrypt file version number
     */
    public void setDecryptFileVersionNumber(int decryptFileVersionNumber) {

        this.decryptFileVersionNumber = decryptFileVersionNumber;
    }


    /**
     * getter for the isFileTupleIsSignerAUser variable
     * @return isFileTupleIsSignerAUser
     */
    public Boolean getIsSignerAUser() {
        return isSignerAUser;
    }

    /**
     * setter for the is signer user flag
     * @param isSignerAUser the new is signer user flag
     */
    public void setIsSignerAUser(boolean isSignerAUser) {

        this.isSignerAUser = isSignerAUser;
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
     * It checks whether all the fields of the tuple are not null.
     * @return true is all fields are not null, false otherwise
     */
    @Override
    public boolean isCompleteInAllFields() {

        return (!getAssociatedElement().isBlank() &&
                !getSignerOfThisTuple().isBlank() &&
                isVersionNumberValid(getDecryptFileVersionNumber()) &&
                getIsSignerAUser() != null &&
                isByteArrayValid(getSignature()));
    }

    /**
     * creates a string with all the fields identifying this object
     * @return a string composed of a concatenation of the identifying fields for this object
     */
    @Override
    public String getIdentifyingFieldsForSignature() {

        // the fields, concatenated
        return (getAssociatedElement()) + getDecryptFileVersionNumber();
    }
}