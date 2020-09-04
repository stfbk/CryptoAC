package eu.fbk.st.cryptoac.tuple;


import com.google.gson.GsonBuilder;
import com.google.gson.annotations.Expose;

import java.io.Serializable;

/**
 * General class for tuples in the crypto AC system. A tuple usually binds two logic (thus a couple of logic),
 * the associatedElement (CryptoACElement, that may be a User, a Role or a File) and a
 * tuple-specific element. A tuple is supposed to always have a signer (CryptoACActiveElement)
 * and a signature
 */
public abstract class CryptoACTuple implements Serializable {

    /**
     * The type of the tuple (RK role tuple, FK permission tuple, F file tuple)
     */
    @Expose
    private TupleType tupleType;

    /**
     * The digital signature of the tuple
     * Don't apply the expose annotation so it can be excluded from serialization
     */
    @Expose
    private byte[] signature;

    /**
     * The associated element (so the "main character" of the tuple).
     * For a role tuple is a user, for a permission tuple is a role,
     * for a file tuple is a file.
     */
    @Expose
    private String associatedElement;

    /**
     * The ID of the last signer of the tuple, thus the one that
     * provided the current signature
     */
    @Expose
    private String signerOfThisTuple;


    // default constructor for serialization
    CryptoACTuple () {}

    /**
     * Constructor. Initialize the variables of the classes
     * @param tupleType this instance's kind of tuple (look the enum class)
     * @param associatedElement the associated element
     * @param newSignature the new signature to add to this tuple
     * @param signer the ID of the entity that signed the tuple
     */
    public CryptoACTuple(TupleType tupleType, String associatedElement, byte[] newSignature, String signer) {

        // assign the variables
        this.tupleType = tupleType;
        this.associatedElement = associatedElement;
        this.signerOfThisTuple = signer;
        this.signature = newSignature;
    }

    /**
     * getter for the tuple type
     * @return the tuple type
     */
    public TupleType getTupleType() {
        return tupleType;
    }


    /**
     * setter for the tuple tyle
     * @param tupleType the new tuple type
     */
    public void setTupleType(TupleType tupleType) {

        this.tupleType = tupleType;
    }

    /**
     * getter for the signature
     * @return the signature
     */
    public byte[] getSignature() {

        return signature;
    }

    /**
     * setter for the signature
     * @param signature the new signature
     */
    public void setSignature(byte[] signature) {

        this.signature = signature;
    }

    /**
     * getter for the associated element
     * @return the associated element
     */
    public String getAssociatedElement() {
        return associatedElement;
    }

    /**
     * setter for the associated element
     * @param associatedElement the new associated element
     */
    public void setAssociatedElement(String associatedElement) {

        this.associatedElement = associatedElement;
    }

    /**
     * getter for the token of the signer of this tuple
     * @return the token of the signer of this tuple
     */
    public String getSignerOfThisTuple() {
        return signerOfThisTuple;
    }

    /**
     * setter for the signer of the tuple
     * @param signerOfThisTuple the new signer of the tuple
     */
    public void setSignerOfThisTuple(String signerOfThisTuple) {

        this.signerOfThisTuple = signerOfThisTuple;
    }

    /**
     * setter for the signer and the signature of this tuple
     * @param newSignature the new signature to add to this tuple
     * @param signer the ID of the entity that signed the tuple
     */
    public void signWithANewSignature(byte[] newSignature, String signer) {

        // set the signature
        this.signature = newSignature;

        // set the signer
        this.signerOfThisTuple = signer;
    }


    /**
     * This method returns a JSON string representing this object
     * @return a JSON string representing this object
     */
    @Override
    public String toString() {

        // return this as JSON string
        return new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create().toJson(this);
    }

    /**
     * Utility method to check whether a version number is valid, i.e. exists and is positive
     * @param versionNumber the version number
     * @return true if the number exists and is positive, false otherwise
     */
    public boolean isVersionNumberValid (Integer versionNumber) {

        return (versionNumber != null && versionNumber > 0 );

    }

    /**
     * Utility method to check whether a byte array is valid, i.e. exists and the length is positive
     * @param array the byte array
     * @return true if the byte array exists and the length is positive, false otherwise
     */
    public boolean isByteArrayValid(byte[] array) {

        return (array != null && array.length > 0);
    }

    /**
     * It checks whether all the fields of the tuple are not null. If so, returns true.
     * @return true if the tuple is complete in all its fields, false otherwise
     */
    public abstract boolean isCompleteInAllFields();

    /**
     * It creates a string concatenating all the fields identifying this object (thus its IDs
     * plus other important fields, like the encrypted key)
     * It is abstract because it depends on the fields/variables of the sub-tuples
     * @return a string composed of a concatenation of the identifying fields for this object
     */
    public abstract String getIdentifyingFieldsForSignature();
}