package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe the result of the evaluation of a policy set:
 * - [decision] the decision.
 */
@Serializable
@XmlSerialName("Result", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "ns4")
data class XACMLResult(
    val decision: XACMLDecision,
)
