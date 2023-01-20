package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a target:
 * - [matchID] the ID of the match;
 * - [attribute] the attribute value contained in the match;
 * - [designator] the attribute designator contained in the first apply.
 */
@Serializable
@XmlSerialName("Match", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLMatch(

    @XmlSerialName("MatchId", "", "")
    val matchID: String,

    val attribute: XACMLAttributeValue,

    val designator: XACMLAttributeDesignator,
)
