package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a rule:
 * - [ruleId] the rule ID;
 * - [effect] the effect of the rule;
 * - [target] the target for this rule;
 * - [condition] the condition contained in the rule.
 */
@Serializable
@XmlSerialName("Rule", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLRule(

    @XmlSerialName("RuleId", "", "")
    val ruleId: String,

    @XmlSerialName("Effect", "", "")
    val effect: String = "Permit",

    val target: XACMLTarget,

    val condition: XACMLCondition? = null,
)
