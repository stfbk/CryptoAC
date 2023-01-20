package eu.fbk.st.cryptoac.ac

/**
 * An AC service can be implemented by:
 * - RBAC_OPA: Open Policy Agent for RBAC;
 * - RBAC_DYNSEC: DynSec plugin of Mosquitto MQTT broker for RBAC;
 * - RBAC_XACML_AUTHZFORCE: AuthzForce XACML Server for RBAC;
 * - NONE: No AC chosen.
 */
enum class ACType {
    RBAC_OPA,
    RBAC_DYNSEC,
    RBAC_XACML_AUTHZFORCE,
    NONE,
}
