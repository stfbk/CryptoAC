package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a document representing a list of domain links:
 * - [link] the list of domain links.
 */
@Serializable
@XmlSerialName("resources", "http://authzforce.github.io/rest-api-model/xmlns/authz/5", "ns2")
data class XACMLDomainLinks(

    val link: List<XACMLDomainLink>? = null,
)
