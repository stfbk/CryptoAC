package eu.fbk.st.cryptoac.core

/**
 * A core interface (whose name is composed of the
 * policy model and the scenario) can be implemented by:
 * - RBAC_AT_REST: RB-CAC scheme for data at-rest;
 * - RBAC_MQTT: RB-CAC scheme for publish-subscribe (MQTT);
 * - ABAC_AT_REST: AB-CAC scheme for data at-rest;
 * - ABAC_MQTT: AB-CAC scheme for publish-subscribe (MQTT).
 */
enum class CoreType {
    RBAC_AT_REST,
    RBAC_MQTT,
    ABAC_AT_REST,
    ABAC_MQTT;

    /** Return a pretty representation of the core type */
    fun toPrettyString(): String = when (this) {
        RBAC_AT_REST -> "RBAC for data at rest"
        RBAC_MQTT -> "RBAC for MQTT"
        ABAC_AT_REST -> "ABAC for data at rest"
        ABAC_MQTT -> "ABAC for MQTT"
    }
}
