package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName
import nl.adaptivity.xmlutil.serialization.XmlValue

/**
 * Describe a policy set ID Reference:
 * - [policySetID] the referenced policy set ID.
 */
@Serializable
@XmlSerialName("PolicySetIdReference", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLPolicySetIDReference(

    @XmlValue(true)
    val policySetID: String,
)
