package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe an attribute:
 * - [attributeId] the ID of the attribute;
 * - [includeInResult] whether to include the attribute in the result;
 * - [attributeValue] the attribute value.
 */
@Serializable
@XmlSerialName("Attribute", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLAttribute(

    @XmlSerialName("AttributeId", "", "")
    val attributeId: String,

    @XmlSerialName("IncludeInResult", "", "")
    val includeInResult: String = "false",

    val attributeValue: XACMLAttributeValue,
)