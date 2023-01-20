package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe an attribute designator:
 * - [category] the category;
 * - [attributeId] the attribute ID;
 * - [dataType] the data type;
 * - [mustBePresent] whether the attribute must be present;
 */
@Serializable
@XmlSerialName("AttributeDesignator", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLAttributeDesignator(

    @XmlSerialName("Category", "", "")
    val category: String,

    @XmlSerialName("AttributeId", "", "")
    val attributeId: String,

    @XmlSerialName("DataType", "", "")
    val dataType: String,

    @XmlSerialName("MustBePresent", "", "")
    val mustBePresent: String,
)
