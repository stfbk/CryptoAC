package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.getREPSIDByRole
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.getRPSIDByRole
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.getRoleNameFromPolicySetID
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.rootPolicySetIdCryptoAC
import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe the rool policy set:
 * - [schemaLocation] the policy set schema location;
 * - [policySetId] the policy set ID;
 * - [version] the policy set version;
 * - [algorithm] the policy set combining algorithm;
 * - [target] the target for this policy set;
 * - [policySetIDReferences] the list of IDs of the referenced policy sets.
 */
@Serializable
@XmlSerialName("PolicySet", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLPolicySetRoot(

    @XmlSerialName("schemaLocation", "http://www.w3.org/2001/XMLSchema-instance", "xsi")
    val schemaLocation: String = "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17 xacml-core-v3-schema-wd-17.xsd",

    @XmlSerialName("PolicySetId", "", "")
    val policySetId: String = rootPolicySetIdCryptoAC,

    @XmlSerialName("Version", "", "")
    var version: String = "1.0",

    @XmlSerialName("PolicyCombiningAlgId", "", "")
    val algorithm: String = "urn:oasis:names:tc:xacml:3.0:policy-combining-algorithm:permit-overrides",

    val target: XACMLTarget = XACMLTarget(),

    val policySetIDReferences: MutableList<XACMLPolicySetIDReference> = mutableListOf(),
) {

    /**
     * Add the IDs of the RPS and REPS of
     * the [roleName] in the list of policies
     * referenced by the root policy
     */
    fun addRPSandREPS(
        roleName: String,
    ) {
        policySetIDReferences.add(
            XACMLPolicySetIDReference(
                policySetID = getRPSIDByRole(roleName)
            )
        )
        policySetIDReferences.add(
            XACMLPolicySetIDReference(
                policySetID = getREPSIDByRole(roleName)
            )
        )
    }

    /**
     * Remove the IDs of the RPS and REPS of
     * the [roleName] from the list of policies
     * referenced by the root policy. Return
     * true if an ID was removed in this way
     */
    fun removeRPSandREPS(
        roleName: String,
    ): Boolean = policySetIDReferences.removeIf {
            getRoleNameFromPolicySetID(it.policySetID) == roleName
        }

    /** Update the policy version number */
    fun updatePolicySetVersionNumber() {
        version = XACMLPolicySet.getNextVersionNumber(version)
    }
}
