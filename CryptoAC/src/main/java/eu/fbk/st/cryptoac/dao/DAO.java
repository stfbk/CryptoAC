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

    private static final Map<String, DAO> lookup = new HashMap<>();

    static {
        for(DAO env : DAO.values()) {
            lookup.put(env.toString(), env);
        }
    }

    public static DAO get(String param) {
        return lookup.get(param);
    }
}