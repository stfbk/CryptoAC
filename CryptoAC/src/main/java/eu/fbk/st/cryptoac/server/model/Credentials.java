package eu.fbk.st.cryptoac.server.model;

/**
 * This class is a POJO for the credentials of the user (username and password).
 */
public class Credentials {

    /**
     * the username.
     */
    private final String username;

    /**
     * the password.
     */
    private final String password;

    /**
     * Constructor with parameters.
     * @param username the username
     * @param password the password
     */
    public Credentials(String username, String password) {

        this.username = username;
        this.password = password;
    }

    /**
     * getter for the username.
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * getter for the password.
     * @return the password
     */
    public String getPassword() {
        return password;
    }
}
