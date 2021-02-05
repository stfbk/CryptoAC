package eu.fbk.st.cryptoac.core.tuple;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * Permission tuple to define the possible assignable permissions over files.
 * - Read_and_Write, for both read and write
 * - Read, for read
 * - Write, for write
 */
public enum Permission implements Serializable {

    Read_and_Write( "Read_and_Write"),
    Read( "Read"),
    Write( "Write");


    private final String param;

    Permission(String envUrl) {
        this.param = envUrl;
    }

    @Override
    public String toString() {
        return param;
    }

    private static final Map<String, Permission> lookup = new HashMap<>();

    static {
        for(Permission env : Permission.values()) {
            lookup.put(env.toString(), env);
        }
    }

    public static Permission get(String param) {
        // replace spaces with underscore
        param = param.replace(" ", "_");
        return lookup.get(param);
    }
}