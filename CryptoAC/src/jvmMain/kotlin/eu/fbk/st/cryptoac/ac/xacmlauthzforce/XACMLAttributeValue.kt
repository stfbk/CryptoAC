package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName
import nl.adaptivity.xmlutil.serialization.XmlValue

/**
 * Describe an attribute value:
 * - [dataType] the data type;
 * - [attributeValue] the actual attribute value.
 */
@Serializable
@XmlSerialName("AttributeValue", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLAttributeValue(

    @XmlSerialName("DataType", "", "")
    val dataType: String,

    @XmlValue(true)
    val attributeValue: String,
)
