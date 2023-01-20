package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a condition:
 * - [apply] the first apply contained in the condition;
 */
@Serializable
@XmlSerialName("Condition", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLCondition(

    val apply: XACMLApplyFirst,
)
