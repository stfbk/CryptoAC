package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a target:
 * - [anyOfs] the list of any ofs contained in the target.
 */
@Serializable
@XmlSerialName("Target", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLTarget(

    val anyOfs: List<XACMLAnyOf>? = null,
)
