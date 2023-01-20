package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe the response from the XACML server
 * after the evaluation of a policy set:
 * - [result] the result.
 */
@Serializable
@XmlSerialName("Response", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "ns4")
data class XACMLResponse(
    val result: XACMLResult,
)
