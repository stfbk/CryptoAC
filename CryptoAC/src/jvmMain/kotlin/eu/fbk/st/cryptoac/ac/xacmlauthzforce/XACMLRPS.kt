package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a policy set of type RPS:
 * - [schemaLocation] the policy set schema location;
 * - [policySetId] the policy set ID;
 * - [version] the policy set version;
 * - [algorithm] the policy set combining algorithm;
 * - [target] the target for this policy set;
 * - [policySetIDReference] the ID of the referenced policy set.
 */
@Serializable
@XmlSerialName("PolicySet", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLRPS(

    @XmlSerialName("schemaLocation", "http://www.w3.org/2001/XMLSchema-instance", "xsi")
    val schemaLocation: String = "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17 xacml-core-v3-schema-wd-17.xsd",

    @XmlSerialName("PolicySetId", "", "")
    val policySetId: String,

    @XmlSerialName("Version", "", "")
    var version: String = "1.0",

    @XmlSerialName("PolicyCombiningAlgId", "", "")
    val algorithm: String = "urn:oasis:names:tc:xacml:3.0:policy-combining-algorithm:permit-overrides",

    val target: XACMLTarget,

    val policySetIDReference: XACMLPolicySetIDReference,
)
