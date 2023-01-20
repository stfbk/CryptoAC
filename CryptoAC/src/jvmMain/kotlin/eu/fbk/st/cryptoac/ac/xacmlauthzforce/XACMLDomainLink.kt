package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a document representing a domain link:
 * - [rel] the rel;
 * - [href] the href;
 * - [title] the title.
 */
@Serializable
@XmlSerialName("link", "http://www.w3.org/2005/Atom", "ns4")
data class XACMLDomainLink(
    val rel: String,
    val href: String,
    val title: String,
)
