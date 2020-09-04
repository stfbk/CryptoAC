package eu.fbk.st.cryptoac.dao.mock;

import checkers.oigj.quals.O;
import eu.fbk.st.cryptoac.dao.DAOInterfaceMySQLParameters;

import java.util.HashMap;

/**
 * This (pojo) class contains the parameters needed to instantiate the mock cloud interface (for testing)
 * Please ignore this class.
 */
public class DAOInterfaceMockParameters extends DAOInterfaceMySQLParameters {

    /**
     * Constructor with parameters.
     * @param configurationParameters the parameters to initialize this instance variables with
     */
    public DAOInterfaceMockParameters(HashMap<String, byte[]> configurationParameters) {
        super(configurationParameters);
    }
}
