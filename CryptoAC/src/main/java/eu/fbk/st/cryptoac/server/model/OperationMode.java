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

    private static final Map<String, OperationMode> lookup = new HashMap<>();

    static {
        for(OperationMode env : OperationMode.values()) {
            lookup.put(env.toString(), env);
        }
    }

    public static OperationMode get(String param) {
        return lookup.get(param);
    }
}