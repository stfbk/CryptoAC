package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe an apply of the first level:
 * - [functionId] the function ID;
 * - [apply] the second apply contained in the first apply;
 * - [designator] the attribute designator contained in the first apply.
 */
@Serializable
@XmlSerialName("Apply", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLApplyFirst(

    @XmlSerialName("FunctionId", "", "")
    val functionId: String,

    val apply: XACMLApplySecond,

    val designator: XACMLAttributeDesignator,
)
