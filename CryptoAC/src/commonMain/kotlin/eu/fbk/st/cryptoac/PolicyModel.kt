package eu.fbk.st.cryptoac

import kotlinx.serialization.Serializable

/**
 * List of access control policy models:
 * - RBAC: Role-Based Access Control;
 * - ABAC: Attribute-Based Access Control.
 */
@Serializable
enum class PolicyModel {
    RBAC,
    ABAC;
}