package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a policy:
 * - [schemaLocation] the policy set schema location;
 * - [policyId] the policy ID;
 * - [version] the policy version;
 * - [algorithm] the policy combining algorithm;
 * - [target] the target for this policy;
 * - [rules] the list of rules contained in the policy.
 */
@Serializable
@XmlSerialName("Policy", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLPolicy(

    @XmlSerialName("schemaLocation", "http://www.w3.org/2001/XMLSchema-instance", "xsi")
    val schemaLocation: String ? = "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17 xacml-core-v3-schema-wd-17.xsd",

    @XmlSerialName("PolicyId", "", "")
    val policyId: String,

    @XmlSerialName("Version", "", "")
    var version: String = "1.0",

    @XmlSerialName("RuleCombiningAlgId", "", "")
    val algorithm: String = "urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides",

    val target: XACMLTarget = XACMLTarget(),

    val rules: MutableList<XACMLRule>,
)
