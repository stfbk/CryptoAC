package eu.fbk.st.cryptoac.core.tuple;


import com.google.gson.GsonBuilder;
import com.google.gson.annotations.Expose;

import java.io.Serializable;

/**
 * General class for tuples in the Crypto AC system. A tuple usually links two entities (e.g., user and role) that are
 * the associated element (e.g., User, Role or File) and a tuple-specific element. A tuple is supposed to always have a
 * signer and a signature.
 */
public abstract class CryptoACTuple implements Serializable {

    /**
     * The type of the tuple (RK role tuple, FK permission tuple, F file tuple).
     */
    @Expose
    private TupleType tupleType;

    /**
     * The digital signature of the tuple.
     */
    private byte[] signature;

    /**
     * The associated element; for a role tuple it is a user, for a
     * permission tuple it is a role, for a file tuple it is a file.
     */
    @Expose
    private String associatedElement;

    /**
     * The ID of the signer of the tuple.
     */
    @Expose
    private String signerOfThisTuple;

    /**
     * Empty constructor for serialization.
     */
    CryptoACTuple () {}

    /**
     * Constructor with parameters.
     * @param tupleType the tuple's type
     * @param associatedElement the tuple's associated element
     * @param newSignature the tuple's signature
     * @param signer the ID of the entity that signed the tuple
     */
    public CryptoACTuple(TupleType tupleType, String associatedElement, byte[] newSignature, String signer) {

        this.tupleType = tupleType;
        this.associatedElement = associatedElement;
        this.signerOfThisTuple = signer;
        this.signature = newSignature;
    }

    /**
     * getter for the tuple's type.
     * @return the tuple's type
     */
    public TupleType getTupleType() {
        return tupleType;
    }


    /**
     * setter for the tuple's type.
     * @param tupleType the tuple's type
     */
    public void setTupleType(TupleType tupleType) {
        this.tupleType = tupleType;
    }

    /**
     * getter for the tuple's signature.
     * @return the tuple's signature
     */
    public byte[] getSignature() {
        return signature;
    }

    /**
     * setter for the tuple's signature.
     * @param signature the tuple's signature
     */
    public void setSignature(byte[] signature) {
        this.signature = signature;
    }

    /**
     * getter for the tuple's associated element.
     * @return the tuple's associated element
     */
    public String getAssociatedElement() {
        return associatedElement;
    }

    /**
     * setter for the tuple's associated element.
     * @param associatedElement the tuple's associated element
     */
    public void setAssociatedElement(String associatedElement) {
        this.associatedElement = associatedElement;
    }

    /**
     * getter for the ID of the signer of this tuple.
     * @return the ID of the signer of this tuple
     */
    public String getSignerOfThisTuple() {
        return signerOfThisTuple;
    }

    /**
     * setter for the ID of the signer of the tuple.
     * @param signerOfThisTuple the ID of the signer of the tuple
     */
    public void setSignerOfThisTuple(String signerOfThisTuple) {
        this.signerOfThisTuple = signerOfThisTuple;
    }

    /**
     * setter for adding both the signer and the signature of this tuple.
     * @param newSignature the new signature to add to this tuple
     * @param signer the ID of the entity that signed the tuple
     */
    public void signWithANewSignature(byte[] newSignature, String signer) {
        this.signature = newSignature;
        this.signerOfThisTuple = signer;
    }

    /**
     * This method returns a JSON string representing this object.
     * @return a JSON string representing this object
     */
    @Override
    public String toString() {
        return new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create().toJson(this);
    }

    /**
     * Utility method to check whether a version number is valid, i.e. exists and is positive.
     * @param versionNumber the version number
     * @return true if the number exists and is positive, false otherwise
     */
    public boolean isVersionNumberValid (Integer versionNumber) {
        return (versionNumber != null && versionNumber > 0 );
    }

    /**
     * Utility method to check whether a byte array is valid, i.e. exists and the length is positive.
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
    public boolean isCompleteInAllFields() {
        return (!getAssociatedElement().isBlank() &&
                !getSignerOfThisTuple().isBlank() &&
                getTupleType() != null &&
                isByteArrayValid(getSignature()));
    }

    /**
     * It creates a string concatenating all the fields identifying this object (thus its IDs
     * plus other important fields, like encrypted keys). It is abstract because it depends on
     * the fields/variables of the concrete tuples.
     * @return a string composed of a concatenation of the identifying fields for this object
     */
    public abstract String getIdentifyingFieldsForSignature();
}