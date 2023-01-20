package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName
import nl.adaptivity.xmlutil.serialization.XmlValue

/**
 * Describe the decision of the evaluation of a policy set:
 * - [decisionValue] the actual decision value.
 */
@Serializable
@XmlSerialName("Decision", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "ns4")
data class XACMLDecision(
    @XmlValue(true)
    val decisionValue: String,
)
