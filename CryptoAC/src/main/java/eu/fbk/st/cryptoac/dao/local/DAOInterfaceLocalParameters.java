package eu.fbk.st.cryptoac.dao.local;

import com.google.gson.annotations.Expose;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQLParameters;
import eu.fbk.st.cryptoac.util.OperationOutcomeCode;

import java.util.HashMap;

import static eu.fbk.st.cryptoac.util.Const.DAOInterfaceLocalParameters.*;
import static eu.fbk.st.cryptoac.util.SafeRegex.checkIfMatchesRegex;
import static eu.fbk.st.cryptoac.util.SafeRegex.safeTextRegex;

/**
 * This class contains the parameters needed to instantiate the Local DAO interface.
 */
public class DAOInterfaceLocalParameters extends DAOInterfaceMySQLParameters {

    /**
     * the URL of the reference monitor.
     */
    @Expose
    private String rmURL;

    /**
     * the port of the reference monitor.
     */
    @Expose
    private String rmPort;

    /**
     * the URL of the data storage.
     */
    @Expose
    private String dsURL;

    /**
     * the port of the data storage.
     */
    @Expose
    private String dsPort;


    /**
     * Constructor with parameters. The accepted parameters are the username (kUsernameInCryptoAC),
     * the database url (kMySQLDatabaseURL), port (kMySQLDatabasePort), the password of the user
     * (kMySQLDatabasePassword), the url of the reference monitor (kLocalRMURL), port
     * (kLocalRMPort), the url of the data storage (kLocalDSURL) and the port (kLocalDSPort)
     * @param configurationParameters the parameters to initialize this instance variables with
     */
    public DAOInterfaceLocalParameters(HashMap<String, byte[]> configurationParameters) {

        super(configurationParameters);

        this.rmURL  = new String(configurationParameters.get(kLocalRMURL));
        this.dsURL  = new String(configurationParameters.get(kLocalDSURL));
        this.rmPort = new String(configurationParameters.get(kLocalRMPort));
        this.dsPort = new String(configurationParameters.get(kLocalDSPort));

        checkLocalParametersAreValid();
    }

    /**
     * This method checks that the values of the parameters are valid through regular expressions.
     * @throws IllegalArgumentException if at least one of the parameters does not satisfy the regular expression
     */
    protected void checkLocalParametersAreValid() {

        if (!(checkIfMatchesRegex(safeTextRegex, rmURL)))
            throw new IllegalArgumentException("the reference monitor URL parameter is null or it does not match a safe regular expression");
        if (!(checkIfMatchesRegex(safeTextRegex, dsURL)))
            throw new IllegalArgumentException("the data storage URL parameter is null or it does not match a safe regular expression");

        try {
            if (!((Integer.parseInt(rmPort) > 0) && (Integer.parseInt(rmPort) < 65535)))
                throw new IllegalArgumentException("reference monitor port is minor than 0/greater than 65535");
        }
        catch (NumberFormatException e) {
            throw new IllegalArgumentException("reference monitor port is not a number: " + rmPort);
        }
        try {
            if (!((Integer.parseInt(dsPort) > 0) && (Integer.parseInt(dsPort) < 65535)))
                throw new IllegalArgumentException("data storage port is minor than 0/greater than 65535");
        }
        catch (NumberFormatException e) {
            throw new IllegalArgumentException("data storage port is not a number: " + dsPort);
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

        if (updatedData.containsKey(kLocalRMURL))
            rmURL = new String(updatedData.get(kLocalRMURL));
        if (updatedData.containsKey(kLocalDSURL))
            dsURL = new String(updatedData.get(kLocalDSURL));
        if (updatedData.containsKey(kLocalRMPort))
            rmPort = new String(updatedData.get(kLocalRMPort));
        if (updatedData.containsKey(kLocalDSPort))
            dsPort = new String(updatedData.get(kLocalDSPort));

        checkLocalParametersAreValid();

        return returningCode;
    }

    /**
     * getter for the URL of the reference monitor.
     * @return the URL of the reference monitor
     */
    public String getRMURL() {
        return rmURL;
    }

    /**
     * getter for the port of the reference monitor.
     * @return the port of the reference monitor
     */
    public String getRMPort() {
        return rmPort;
    }

    /**
     * getter for the URL of the data storage.
     * @return the URL of the data storage
     */
    public String getDSURL() {
        return dsURL;
    }

    /**
     * getter for the port of the data storage.
     * @return the port of the data storage
     */
    public String getDSPort() {
        return dsPort;
    }
}
