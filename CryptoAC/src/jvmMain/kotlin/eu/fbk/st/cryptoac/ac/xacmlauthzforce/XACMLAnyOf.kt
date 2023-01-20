package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe an any of:
 * - [allOfs] the list of all ofs contained in the any of.
 */
@Serializable
@XmlSerialName("AnyOf", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLAnyOf(

    val allOfs: MutableList<XACMLAllOf>,
)