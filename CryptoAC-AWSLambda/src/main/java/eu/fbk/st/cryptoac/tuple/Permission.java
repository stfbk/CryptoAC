package eu.fbk.st.cryptoac.tuple;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * Permission tuple to define the possible assignable permissions.
 * So far we have:
 * - Read_and_Write
 * - Read
 * - Write
 */
public enum Permission implements Serializable {

    Read_and_Write( "Read_and_Write"),
    Read( "Read"),
    Write( "Write");


    private String param;

    Permission(String envUrl) {
        this.param = envUrl;
    }

    @Override
    public String toString() {
        return param;
    }

    //****** Reverse Lookup Implementation************//
    //Lookup table
    private static final Map<String, Permission> lookup = new HashMap<>();

    //Populate the lookup table on loading time
    static
    {
        for(Permission env : Permission.values())
        {
            lookup.put(env.toString(), env);
        }
    }

    //This method can be used for reverse lookup purpose
    public static Permission get(String param)
    {
        // replace spaces with underscore
        param = param.replace(" ", "_");
        return lookup.get(param);
    }
}