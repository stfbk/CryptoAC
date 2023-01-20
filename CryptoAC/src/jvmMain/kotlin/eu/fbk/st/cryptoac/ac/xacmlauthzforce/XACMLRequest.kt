package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a request to the XACML Server:
 * - [combinedDecision] whether the decision is combined;
 * - [returnPolicyIdList] whether to return the policy IDs list;
 * - [attributesList] the list of (list of) attributes supplied to the XACML server.
 */
@Serializable
@XmlSerialName("Request", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLRequest(

    @XmlSerialName("CombinedDecision", "", "")
    val combinedDecision: String = "false",

    @XmlSerialName("ReturnPolicyIdList", "", "")
    val returnPolicyIdList: String = "false",

    val attributesList: MutableList<XACMLAttributes>,
)