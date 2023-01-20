package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.getNextVersionNumber
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import kotlinx.serialization.Serializable
import nl.adaptivity.xmlutil.serialization.XmlSerialName

/**
 * Describe a policy set of type PPS:
 * - [schemaLocation] the policy set schema location;
 * - [policySetId] the policy set ID;
 * - [version] the policy set version;
 * - [algorithm] the policy set combining algorithm;
 * - [target] the target for this policy set;
 * - [policy] the policy contained in the policy set.
 */
@Serializable
@XmlSerialName("PolicySet", "urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "")
data class XACMLPPS(

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
     * Return the permissions assigned to the
     * role in the PPS as a map <resourceName,
     * permission>
     */
    fun getPermissionsAssignedToRole(): HashMap<String, HashSet<PermissionType>> {
        val permissionsByResource = HashMap<String, HashSet<PermissionType>>()

        policy.rules.forEach { rule ->
            val resourceName = rule.target.anyOfs!![0].allOfs[0].match.attribute.attributeValue
            val permission = rule.target.anyOfs[1].allOfs[0].match.attribute.attributeValue
            permissionsByResource.getOrPut(resourceName) { hashSetOf() }.add(PermissionType.valueOf(permission))
        }
        return permissionsByResource
    }

    /**
     * Add the [permission] over the [resourceName]
     * to the list of permissions assigned to
     * the role of this PPS
     */
    fun addPermissionToRole(
        resourceName: String,
        permission: PermissionType,
    ) {
        val newPermission = XACMLRule(
            ruleId = "Permission:to:$permission:resource:$resourceName",
            target = XACMLTarget(
                anyOfs = mutableListOf(
                    XACMLAnyOf(
                        allOfs = mutableListOf(
                            XACMLAllOf(
                                match = XACMLMatch(
                                    matchID = "urn:oasis:names:tc:xacml:1.0:function:string-equal",
                                    attribute = XACMLAttributeValue(
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        attributeValue = resourceName,
                                    ),
                                    designator = XACMLAttributeDesignator(
                                        category = "urn:oasis:names:tc:xacml:3.0:attribute-category:resource",
                                        attributeId = "urn:oasis:names:tc:xacml:1.0:resource:resource-id",
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        mustBePresent = "false",
                                    ),
                                )
                            )
                        ),
                    ),
                    XACMLAnyOf(
                        allOfs = if (permission == PermissionType.READWRITE) {
                            mutableListOf(
                                XACMLAllOf(
                                    match = XACMLMatch(
                                        matchID = "urn:oasis:names:tc:xacml:1.0:function:string-equal",
                                        attribute = XACMLAttributeValue(
                                            dataType = "http://www.w3.org/2001/XMLSchema#string",
                                            attributeValue = PermissionType.READ.toString(),
                                        ),
                                        designator = XACMLAttributeDesignator(
                                            category = "urn:oasis:names:tc:xacml:3.0:attribute-category:action",
                                            attributeId = "urn:oasis:names:tc:xacml:1.0:action:action-id",
                                            dataType = "http://www.w3.org/2001/XMLSchema#string",
                                            mustBePresent = "false",
                                        ),
                                    )
                                ),
                                XACMLAllOf(
                                    match = XACMLMatch(
                                        matchID = "urn:oasis:names:tc:xacml:1.0:function:string-equal",
                                        attribute = XACMLAttributeValue(
                                            dataType = "http://www.w3.org/2001/XMLSchema#string",
                                            attributeValue = PermissionType.WRITE.toString(),
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
                        } else {
                            mutableListOf(
                                XACMLAllOf(
                                    match = XACMLMatch(
                                        matchID = "urn:oasis:names:tc:xacml:1.0:function:string-equal",
                                        attribute = XACMLAttributeValue(
                                            dataType = "http://www.w3.org/2001/XMLSchema#string",
                                            attributeValue = permission.toString(),
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
                        }
                    ),
                )
            )
        )
        policy.rules.add(newPermission)
    }

    /**
     * Revoke permission over the [resourceName]
     * from the list of permissions assigned to
     * the role of this PPS. Return true if a
     * permission was revoked in this way
     */
    fun revokePermissionFromRole(
        resourceName: String,
    ): Boolean = policy.rules.removeIf {
        resourceName == it.target.anyOfs!![0].allOfs[0].match.attribute.attributeValue
    }

    /** Update the policy version number */
    fun updatePolicySetVersionNumber() {
        version = getNextVersionNumber(version)
        policy.version = version
    }
}

