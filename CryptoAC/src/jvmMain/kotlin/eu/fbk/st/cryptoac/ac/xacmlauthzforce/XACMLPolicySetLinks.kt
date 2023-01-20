package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a document representing a list of policy set links:
 * - [link] the list of policy set links.
 */
@Serializable
@XmlSerialName("resources", "http://authzforce.github.io/rest-api-model/xmlns/authz/5", "ns2")
data class XACMLPolicySetLinks(

    val link: List<XACMLPolicySetLink>? = null,
)
