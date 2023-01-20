package eu.fbk.st.cryptoac.ac.xacmlauthzforce

/**
 * A Policy Set can be:
 * - PPS: Permission Policy Sets for the role-permission (PA) relationship;
 * - RPS: Role Policy Sets for the role-permission (PA) relationship;
 * - REPS: Role Enablement Policy Set for the user-role (UR) relationship.
 */
enum class XACMLPolicySetType {
    PPS,
    RPS,
    REPS,
}