package eu.fbk.st.cryptoac.core.element;


import com.google.gson.Gson;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * This class defines a CryptoAC element, i.e., whatever element involved in
 * the Access Control policy (i.e., assignable to a CryptoAC tuple).
 * Concrete examples of CryptoAC elements are users, files, roles.
 */
public abstract class CryptoACElement {

    /**
     * The generic name associated to this element. It may be used as identifier.
     */
    private final String name;

    /**
     * A random token associated with this element. It may be used instead of the
     * element name so to not disclose sensitive information (e.g., file names).
     */
    private String token;

    /**
     * Token size in bytes.
     */
    int tokenSize = 50;

    /**
     * A flag to indicate the status of this element.
     */
    private CryptoACElementStatus currentStatus;


    /**
     * Constructor with parameters. Note that the assignment of the token is deferred to subclasses.
     * @param name name associated to this element; the actual semantic depends on the subclass
     */
    CryptoACElement(String name) {
        this.name = name;
    }

    /**
     * getter for the name of this element.
     * @return the name of this element
     */
    public String getName() {
        return name;
    }

    /**
     * getter for the token of this element.
     * @return the token of this element
     */
    public String getToken() {
        return token;
    }

    /**
     * setter for the token of this element.
     * @param token the token of this element
     */
    public void setToken(String token) {
        this.token = token;
    }

    /**
     * This method should check whether the fields of the element are all defined (i.e., not null).
     * @return true if al the fields of the element are defined, false otherwise
     */
    public abstract boolean isCompleteInAllFields();

    /**
     * getter for the current status.
     * @return the the current status
     */
    public CryptoACElementStatus getCurrentStatus() {
        return currentStatus;
    }

    /**
     * setter for the current status.
     * @param currentStatus the new the current status
     */
    public void setCurrentStatus(CryptoACElementStatus currentStatus) {
        this.currentStatus = currentStatus;
    }


    /**
     * This function returns a random array of bytes encoded in base 64 and truncated to match the given size.
     * @param size the number of bytes of the random string
     * @return the random token
     */
    String getRandomToken(int size) {
        byte[] randomBytes = new byte[size];
        new Random().nextBytes(randomBytes);
        return Base64.getEncoder().encodeToString(randomBytes).substring(0, size);
    }

    /**
     * This method returns a JSON string representing this object.
     * @return a JSON string representing this object
     */
    @Override
    public String toString() {
        // return this as JSON string
        // TODO "new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create()"?
        return new Gson().toJson(this);
    }

    /**
     * Utility method to check whether a version number is invalid, i.e. it is null or negative.
     * @param versionNumber the version number
     * @return true if the number is null or is negative, false otherwise
     */
    public boolean isVersionNumberInvalid(Integer versionNumber) {
        return (versionNumber == null || versionNumber <= 0);
    }



    /**
     * This enumerator lists the CryptoAC elements.
     */
    public enum CryptoACElementEnum {

        User("User"),
        Role("Role"),
        File("File");

        private final String param;

        CryptoACElementEnum(String envUrl) {
            this.param = envUrl;
        }

        @Override
        public String toString() {
            return param;
        }

        private static final Map<String, CryptoACElementEnum> lookup = new HashMap<>();

        static {
            for(CryptoACElementEnum env : CryptoACElementEnum.values()) {
                lookup.put(env.toString(), env);
            }
        }

        public static CryptoACElementEnum get(String param) {
            return lookup.get(param);
        }
    }
}