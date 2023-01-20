package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a list of attributes:
 * - [category] the category of the attributes;
 * - [attributes] the list of attributes supplied to the XACML server.
 */
@Serializable
@XmlSerialName("Attributes", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLAttributes(

    @XmlSerialName("Category", "", "")
    val category: String,

    val attributes: MutableList<XACMLAttribute> = mutableListOf(),
)