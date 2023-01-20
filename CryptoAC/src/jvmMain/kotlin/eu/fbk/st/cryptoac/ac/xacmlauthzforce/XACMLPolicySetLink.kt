package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a document representing a policy set link:
 * - [rel] the rel;
 * - [href] the href (e.g., "RPS:role:admin").
 */
@Serializable
@XmlSerialName("link", "http://www.w3.org/2005/Atom", "ns3")
data class XACMLPolicySetLink(
    val rel: String,
    val href: String,
)