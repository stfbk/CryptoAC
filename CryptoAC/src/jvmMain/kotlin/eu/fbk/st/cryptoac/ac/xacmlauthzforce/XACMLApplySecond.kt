package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe an apply of the second level:
 * - [functionId] the function ID;
 * - [attribute] the attribute value contained in the second apply.
 */
@Serializable
@XmlSerialName("Apply", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLApplySecond(

    @XmlSerialName("FunctionId", "", "")
    val functionId: String,

    val attribute: XACMLAttributeValue,
)
