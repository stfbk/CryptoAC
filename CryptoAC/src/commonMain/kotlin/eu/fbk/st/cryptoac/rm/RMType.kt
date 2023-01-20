package eu.fbk.st.cryptoac.rm

/**
 * An RM service can be implemented by:
 * - RBAC_CRYPTOAC: CryptoAC for RBAC;
 * - NONE: No RM chosen.
 */
enum class RMType {
    RBAC_CRYPTOAC,
    NONE,
}
