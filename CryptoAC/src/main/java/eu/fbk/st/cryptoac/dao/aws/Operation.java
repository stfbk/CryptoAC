package eu.fbk.st.cryptoac.dao.aws;

import java.util.HashMap;
import java.util.Map;

/**
 * This enumerator lists the available operations for which to invoke the lambda function.
 */
public enum Operation {

    Add("addFile"),
    Write("writeFile");


    private final String param;

    Operation(String envUrl) {
        this.param = envUrl;
    }

    @Override
    public String toString() {
        return param;
    }

    //****** Reverse Lookup Implementation************//
    //Lookup table
    private static final Map<String, Operation> lookup = new HashMap<>();

    //Populate the lookup table on loading time
    static
    {
        for(Operation env : Operation.values())
        {
            lookup.put(env.toString(), env);
        }
    }

    //This method can be used for reverse lookup purpose
    public static Operation get(String param)
    {
        return lookup.get(param);
    }
}