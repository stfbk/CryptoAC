package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a policy set of type REPS:
 * - [schemaLocation] the policy set schema location;
 * - [policySetId] the policy set ID;
 * - [version] the policy set version;
 * - [algorithm] the policy set combining algorithm;
 * - [target] the target for this policy set;
 * - [policy] the policy contained in the policy set.
 */
@Serializable
@XmlSerialName("PolicySet", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLREPS(

    @XmlSerialName("schemaLocation", "http://www.w3.org/2001/XMLSchema-instance", "xsi")
    val schemaLocation: String = "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17 xacml-core-v3-schema-wd-17.xsd",

    @XmlSerialName("PolicySetId", "", "")
    val policySetId: String,

    @XmlSerialName("Version", "", "")
    var version: String = "1.0",

    @XmlSerialName("PolicyCombiningAlgId", "", "")
    val algorithm: String = "urn:oasis:names:tc:xacml:3.0:policy-combining-algorithm:permit-overrides",

    val target: XACMLTarget = XACMLTarget(),

    val policy: XACMLPolicy,
) {

    /**
     * Return the list of users assigned
     * to the role in the REPS
     */
    fun getUsersAssignedToRole(): HashSet<String> {
        val users = HashSet<String>()

        val rule = policy.rules.firstOrNull()
            ?: return users
        val allOfs = rule.target.anyOfs?.firstOrNull()?.allOfs
            ?: return users

        allOfs.forEach {
            users.add(it.match.attribute.attributeValue)
        }

        return users
    }

    /**
     * Add the [username] to the
     * list of users assigned to
     * the role of this REPS
     */
    fun assignUserToRole(
        username: String,
    ) {

        val roleName = XACMLPolicySet.getRoleNameFromPolicySetID(policySetId)

        val newAssignment = XACMLAllOf(
            match = XACMLMatch(
                matchID = "urn:oasis:names:tc:xacml:1.0:function:string-equal",
                attribute = XACMLAttributeValue(
                    dataType = "http://www.w3.org/2001/XMLSchema#string",
                    attributeValue = username,
                ),
                designator = XACMLAttributeDesignator(
                    category = "urn:oasis:names:tc:xacml:1.0:subject-category:access-subject",
                    attributeId = "urn:oasis:names:tc:xacml:1.0:subject:subject-id",
                    dataType = "http://www.w3.org/2001/XMLSchema#string",
                    mustBePresent = "false",
                ),
            )
        )

        if (policy.rules.isEmpty()) {
            policy.rules.add(
                XACMLRule(
                    ruleId = "$roleName:role:requirements",
                    target = XACMLTarget(
                        anyOfs = listOf(
                            XACMLAnyOf(
                                allOfs = mutableListOf(
                                    newAssignment
                                )
                            ),
                            XACMLAnyOf(
                                allOfs = mutableListOf(
                                    XACMLAllOf(
                                        match = XACMLMatch(
                                            matchID = "urn:oasis:names:tc:xacml:1.0:function:string-equal",
                                            attribute = XACMLAttributeValue(
                                                dataType = "http://www.w3.org/2001/XMLSchema#string",
                                                attributeValue = roleName,
                                            ),
                                            designator = XACMLAttributeDesignator(
                                                category = "urn:oasis:names:tc:xacml:3.0:attribute-category:resource",
                                                attributeId = "urn:oasis:names:tc:xacml:2.0:subject:role",
                                                dataType = "http://www.w3.org/2001/XMLSchema#string",
                                                mustBePresent = "false",
                                            ),
                                        )
                                    )
                                )
                            ),
                            XACMLAnyOf(
                                allOfs = mutableListOf(
                                    XACMLAllOf(
                                        match = XACMLMatch(
                                            matchID = "urn:oasis:names:tc:xacml:1.0:function:string-equal",
                                            attribute = XACMLAttributeValue(
                                                dataType = "http://www.w3.org/2001/XMLSchema#string",
                                                attributeValue = "urn:oasis:names:tc:xacml:2.0:actions:enableRole",
                                            ),
                                            designator = XACMLAttributeDesignator(
                                                category = "urn:oasis:names:tc:xacml:3.0:attribute-category:action",
                                                attributeId = "urn:oasis:names:tc:xacml:1.0:action:action-id",
                                                dataType = "http://www.w3.org/2001/XMLSchema#string",
                                                mustBePresent = "false",
                                            ),
                                        )
                                    )
                                )
                            ),
                        )
                    ),
                    condition = null,
                )
            )
        } else {
            policy.rules.first().target.anyOfs!!.first().allOfs.add(
                newAssignment
            )
        }
    }


    /**
     * Revoke [username] from the list of
     * users assigned to the role of this
     * REPS. Return true if a user was
     * revoked in this way
     */
    fun revokeUserFromRole(
        username: String,
    ): Boolean = policy.rules.first().target.anyOfs!!.first().allOfs.removeIf {
        username == it.match.attribute.attributeValue
    }

    /** Update the policy version number */
    fun updatePolicySetVersionNumber() {
        version = XACMLPolicySet.getNextVersionNumber(version)
        policy.version = version
    }
}
