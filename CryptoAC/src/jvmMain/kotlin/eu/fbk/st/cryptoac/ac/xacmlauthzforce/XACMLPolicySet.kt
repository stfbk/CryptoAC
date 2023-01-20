package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a policy set:
 * - [link] the list of domain links.
 */
@Serializable
@XmlSerialName("resources", "http://authzforce.github.io/rest-api-model/xmlns/authz/5", "ns2")
data class XACMLPolicySet(
    val rel: String,
    val href: String,
    val title: String,
) {

    companion object {

        /** The ID of the default root policy set */
        const val rootDefaultPolicySetId = "root"

        /** The ID of the root policy set */
        const val rootPolicySetIdCryptoAC = "CryptoAC:root:policy"

        /**
         * Get the ID of the permission
         * policy set of role [roleName]
         */
        fun getPPSIDByRole(
            roleName: String
        ) = "${XACMLPolicySetType.PPS}:role:$roleName"

        /**
         * Get the ID of the role
         * policy set of role [roleName]
         */
        fun getRPSIDByRole(
            roleName: String
        ) = "${XACMLPolicySetType.RPS}:role:$roleName"

        /**
         * Get the ID of the role enablement
         * policy set of role [roleName]
         */
        fun getREPSIDByRole(
            roleName: String
        ) = "${XACMLPolicySetType.REPS}:role:$roleName"

        /** Return the type of the policy set */
        fun getPolicySetTypeFromPolicySetID(policySetID: String) =
            XACMLPolicySetType.valueOf(policySetID.split(":")[0])

        /** Return the role name of the policy set */
        fun getRoleNameFromPolicySetID(policySetID: String) =
            policySetID.split(":")[2]

        /**
         * Define the criterion based on which compute
         * new version numbers for policies and policy
         * sets. Currently, just increment to the maximum
         * integer value
         */
        fun getNextVersionNumber(version: String): String = (version.toDouble() + 1.0).toString()
        // TODO decide better criteria
    }
}
