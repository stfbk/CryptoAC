package eu.fbk.st.cryptoac.core.element;

import java.io.InputStream;

/**
 * This element represents a file encrypted by CryptoAC.
 */
public class File extends CryptoACElement {

    /**
     * The input stream pointing to the content of the file
     */
    private final transient InputStream fileStream;

    /**
     * The version number of the symmetric key that has to be used to ENCRYPT the file.
     */
    private final Integer encryptingKeyVersionNumber;

    /**
     * Constructor with parameters
     * @param fileName the (unique) name of the file
     * @param fileStream the stream of the content of the file
     * @param encryptingKeyVersionNumber the positive version number of the symmetric key
     */
    public File(String fileName, InputStream fileStream, Integer encryptingKeyVersionNumber) {

        super(fileName);

        this.setToken(getRandomToken(tokenSize));
        this.fileStream = fileStream;
        this.encryptingKeyVersionNumber = encryptingKeyVersionNumber;

        if (isVersionNumberInvalid(encryptingKeyVersionNumber))
            throw new IllegalArgumentException("Version number is either null or less than 1");
    }

    /**
     * getter for the file stream.
     * @return the file stream
     */
    public InputStream getFileStream() {
        return fileStream;
    }

    /**
     * getter for the symmetric key version number.
     * @return the symmetric key version number
     */
    public Integer getEncryptingKeyVersionNumber() {
        return encryptingKeyVersionNumber;
    }

    /**
     * It checks whether all the fields of the file are not null.
     * @return true is all fields are not null, false otherwise
     */
    @Override
    public boolean isCompleteInAllFields() {

        return (getEncryptingKeyVersionNumber() != null &&
                getFileStream() != null &&
                getToken() != null &&
                getName() != null);
    }
}