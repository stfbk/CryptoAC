package eu.fbk.st.cryptoac.server.model;

import java.util.HashMap;
import java.util.Map;

/**
 * This enumerator lists the available operation modes of CryptoAC.
 */
public enum OperationMode {

    proxy("proxy"),
    DS("DS"),
    RM("RM");


    private final String param;

    OperationMode(String envUrl) {
        this.param = envUrl;
    }

    @Override
    public String toString() {
        return param;
    }

    //****** Reverse Lookup Implementation************//
    //Lookup table
    private static final Map<String, OperationMode> lookup = new HashMap<>();

    //Populate the lookup table on loading time
    static
    {
        for(OperationMode env : OperationMode.values())
        {
            lookup.put(env.toString(), env);
        }
    }

    //This method can be used for reverse lookup purpose
    public static OperationMode get(String param)
    {
        return lookup.get(param);
    }
}