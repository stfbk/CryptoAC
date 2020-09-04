package eu.fbk.st.cryptoac.dao;

import java.util.HashMap;
import java.util.Map;

/**
 * This enumerator lists the available implemented DAO interfaces.
 */
public enum DAO {

    Local("Local"),
    Mock("Mock"),
    AWS("AWS");


    private final String param;

    DAO(String envUrl) {
        this.param = envUrl;
    }

    @Override
    public String toString() {
        return param;
    }

    //****** Reverse Lookup Implementation************//
    //Lookup table
    private static final Map<String, DAO> lookup = new HashMap<>();

    //Populate the lookup table on loading time
    static
    {
        for(DAO env : DAO.values())
        {
            lookup.put(env.toString(), env);
        }
    }

    //This method can be used for reverse lookup purpose
    public static DAO get(String param)
    {
        return lookup.get(param);
    }
}