package eu.fbk.st.cryptoac.util;

import java.util.HashMap;
import java.util.Map;

/**
 * This enumerator lists the available access control enforcement levels.
 */
public enum AccessControlEnforcement {

    Traditional("Traditional"),
    Cryptographic("Cryptographic"),
    Combined("Combined");


    private final String param;

    AccessControlEnforcement(String envUrl) {
        this.param = envUrl;
    }

    @Override
    public String toString() {
        return param;
    }

    private static final Map<String, eu.fbk.st.cryptoac.util.AccessControlEnforcement> lookup = new HashMap<>();

    static {
        for(eu.fbk.st.cryptoac.util.AccessControlEnforcement env : eu.fbk.st.cryptoac.util.AccessControlEnforcement.values()) {
            lookup.put(env.toString(), env);
        }
    }

    public static eu.fbk.st.cryptoac.util.AccessControlEnforcement get(String param) {
        return lookup.get(param);
    }
}
