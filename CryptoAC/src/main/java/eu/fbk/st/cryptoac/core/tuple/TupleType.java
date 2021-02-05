package eu.fbk.st.cryptoac.core.tuple;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * Enum collecting the possible types of tuples:
 * - RK, for a tuple associating a user to a role
 * - FK, for a tuple associating a role to a file
 * - F, for a tuple containing an encrypted file
 */
public enum TupleType implements Serializable {

    RK( "RK"),
    FK( "FK"),
    F( "F");

    private final String param;

    TupleType(String envUrl) {
        this.param = envUrl;
    }

    @Override
    public String toString() {
        return param;
    }

    private static final Map<String, TupleType> lookup = new HashMap<>();

    static {
        for(TupleType env : TupleType.values()) {
            lookup.put(env.toString(), env);
        }
    }

    public static TupleType get(String param) {
        return lookup.get(param);
    }
}