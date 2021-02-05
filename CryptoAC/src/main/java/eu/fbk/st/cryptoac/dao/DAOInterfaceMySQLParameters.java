package eu.fbk.st.cryptoac.dao;


import com.google.gson.annotations.Expose;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;

import java.util.HashMap;

import static eu.fbk.st.cryptoac.util.SafeRegex.*;
import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceMySQLParameters.*;

/**
 * This class contains the parameters needed to instantiate the MySQL DAO interface.
 */
public class DAOInterfaceMySQLParameters extends DAOInterfaceParameters {

    /**
     * the URL of the database containing the metadata.
     */
    @Expose
    private String mySQLDatabaseURL;

    /**
     * the port of the database containing the metadata.
     */
    @Expose
    private String mySQLDatabasePort;

    /**
     * the user's password of the database containing the metadata.
     * Don't apply the expose annotation so it can be excluded from serialization.
     */
    private String mySQLDatabasePassword;

    /**
     * Constructor with parameters. The accepted parameters are the username (kUsernameInCryptoAC),
     * the database url (kMySQLDatabaseURL), port (kMySQLDatabasePort) and the password of the user
     * (kMySQLDatabasePassword).
     * @param configurationParameters the parameters to initialize this instance variables with
     */
    public DAOInterfaceMySQLParameters(HashMap<String, byte[]> configurationParameters) {

        super(configurationParameters);

        mySQLDatabaseURL = new String(configurationParameters.get(kMySQLDatabaseURL));
        mySQLDatabasePort = new String(configurationParameters.get(kMySQLDatabasePort));
        mySQLDatabasePassword = new String(configurationParameters.get(kMySQLDatabasePassword));

        checkMySQLParametersAreValid();
    }

    /**
     * This method checks that the values of the parameters are valid through regular expressions.
     * @throws IllegalArgumentException if at least one of the parameters does not satisfy the regular expression
     */
    protected void checkMySQLParametersAreValid() {

        if (!(matchRegex(urlOrIPRegex, mySQLDatabaseURL)))
            throw new IllegalArgumentException("the database URL parameter is null or it does not match a safe regular expression");
        if (!(matchRegex(safeTextRegex, mySQLDatabasePassword)))
            throw new IllegalArgumentException("the database password parameter is null or it does not match a safe regular expression");

        try {
            if (!((Integer.parseInt(mySQLDatabasePort) > 0) && (Integer.parseInt(mySQLDatabasePort) < 65535)))
                throw new IllegalArgumentException("database port is minor than 0/greater than 65535");
        }
        catch (NumberFormatException e) {
            throw new IllegalArgumentException("database port is not a number: " + mySQLDatabasePort);
        }
    }

    /**
     * This method should update the values of the parameters with the new data and then check
     * that the parameters are valid; only given parameters should be updated.
     * Note: the username cannot be updated, as it is the only identifier for the user. Also
     * the administrator status cannot change.
     * @param updatedData the parameters to update with the new values
     * @return an operation outcome code for the result of the operation
     */
    @Override
    public OperationOutcomeCode update(HashMap<String, byte[]> updatedData) {

        OperationOutcomeCode returningCode = super.update(updatedData);

        if (updatedData.containsKey(kMySQLDatabaseURL))
            mySQLDatabaseURL = new String(updatedData.get(kMySQLDatabaseURL));
        if (updatedData.containsKey(kMySQLDatabasePort))
            mySQLDatabasePort = new String(updatedData.get(kMySQLDatabasePort));
        if (updatedData.containsKey(kMySQLDatabasePassword))
            mySQLDatabasePassword = new String(updatedData.get(kMySQLDatabasePassword));

        checkMySQLParametersAreValid();

        return returningCode;
    }

    /**
     * getter for the database URL.
     * @return the database URL
     */
    public String getMySQLDatabaseURL() {
        return mySQLDatabaseURL;
    }

    /**
     * getter for the database port.
     * @return the database port
     */
    public String getMySQLDatabasePort() {
        return mySQLDatabasePort;
    }

    /**
     * getter for the database password.
     * @return the database password
     */
    public String getMySQLDatabasePassword() {
        return mySQLDatabasePassword;
    }
}

