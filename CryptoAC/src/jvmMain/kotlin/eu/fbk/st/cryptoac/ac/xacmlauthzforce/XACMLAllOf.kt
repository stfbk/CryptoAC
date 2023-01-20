package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a target:
 * - [match] the match contained in the all of.
 */
@Serializable
@XmlSerialName("AllOf", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLAllOf(

    val match: XACMLMatch,
)
