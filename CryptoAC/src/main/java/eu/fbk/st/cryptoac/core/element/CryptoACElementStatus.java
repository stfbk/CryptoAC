package eu.fbk.st.cryptoac.core.element;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * CryptoAC active elements may be in the following statuses:
 * - incomplete: when the element is present but not fully configured (e.g., a user missing the keys)
 * - operational: when the element is present, fully configured and is ready for use
 * - deleted: when the element was deleted but it is kept in the metadata (e.g., a role that was deleted but we
 *   keep it anyway to check eventual digital signatures on tuples)
 */
public enum CryptoACElementStatus implements Serializable {

    incomplete("incomplete"),
    operational("operational"),
    deleted("deleted");

    private final String param;

    CryptoACElementStatus(String envUrl) {
        this.param = envUrl;
    }

    @Override
    public String toString() {
        return param;
    }

    public String getValue() {
        return param;
    }

    private static final Map<String, CryptoACElementStatus> lookup = new HashMap<>();

    static {
        for(CryptoACElementStatus env : CryptoACElementStatus.values()) {
            lookup.put(env.toString(), env);
        }
    }

    public static CryptoACElementStatus get(String param) {
        return lookup.get(param);
    }
}