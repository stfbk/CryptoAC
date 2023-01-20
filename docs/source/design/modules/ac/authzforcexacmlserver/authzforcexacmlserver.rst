.. role:: bash(code)
   :language: bash

***********************
AuthzForce XACML Server
***********************

The `OASIS eXtensible Access Control Markup Language (XACML) <https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=xacml>`_ standard defines a declarative fine-grained, attribute-based access control policy language, an architecture, and a processing model describing how to evaluate access requests according to the rules defined in policies. The `AuthzForce Server (Community Edition) <https://gitlab.ow2.org/authzforce/server>`_ is an open-source implementation of the OASIS XACML standard (v3.0) providing a multi-tenant RESTful API to Policy Administration Points (PAP) and Policy Decision Points (PDP) supporting attribute-based access control.

.. note::
   CryptoAC currently integrates the cryptographic access control policy with XACML for role-based access control only.



Role-based Access Control Integration with the AuthzForce XACML Server
######################################################################

CryptoAC integrates with the AuthzForce XACML Server by synchronizing the cryptographic access control policy with multiple XACML policy sets. We implement the management and evaluation of the policy as described in the `"XACML v3.0 Core and Hierarchical Role Based Access Control (RBAC) Profile Version 1.0" profile <http://docs.oasis-open.org/xacml/3.0/xacml-3.0-rbac-v1-spec-cd-03-en.pdf>`_. Therefore, we encode the permissions of a role into a dedicated **permissions policy set**, as shown below:

.. code-block:: xml

    <!-- This PPS (i.e., Permission Policy Set) contains the permissions
        associated with the role roleName (replace "roleName" with the 
        name of the role) -->
    <PolicySet
        xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17 xacml-core-v3-schema-wd-17.xsd" 
        PolicySetId="PPS:role:roleName" 
        Version="1.0" 
        PolicyCombiningAlgId="urn:oasis:names:tc:xacml:3.0:policy-combining-algorithm:permit-overrides">
        <Target/>
        <Policy 
            PolicyId="Permissions:for:the:role:roleName" 
            Version="1.0" 
            RuleCombiningAlgId="urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides">
            <Target/>
            <!-- Each rule is a permission of the role (replace 
                "resourceName" and "actionName" with the names
                of the resource and the action granted ) -->

            <!-- Permission to perform action actionName on resourceName -->
            <Rule RuleId="Permission:to:actionName:resource:resourceName" Effect="Permit">
                <Target>
                    <AnyOf>
                        <AllOf>
                            <Match MatchId="urn:oasis:names:tc:xacml:1.0:function:string-equal">
                                <AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">
                                    resourceName
                                </AttributeValue>
                                <AttributeDesignator 
                                    MustBePresent="true" 
                                    Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource" 
                                    AttributeId="urn:oasis:names:tc:xacml:1.0:resource:resource-id" 
                                    DataType="http://www.w3.org/2001/XMLSchema#string"/>
                            </Match>
                        </AllOf>
                    </AnyOf>
                    <AnyOf>
                        <AllOf>
                            <Match MatchId="urn:oasis:names:tc:xacml:1.0:function:string-equal">
                                <AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">
                                    actionName
                                </AttributeValue>
                                <AttributeDesignator 
                                    MustBePresent="true" 
                                    Category="urn:oasis:names:tc:xacml:3.0:attribute-category:action" 
                                    AttributeId="urn:oasis:names:tc:xacml:1.0:action:action-id" 
                                    DataType="http://www.w3.org/2001/XMLSchema#string"/>
                            </Match>
                        </AllOf>
                    </AnyOf>
                </Target>
            </Rule>
        </Policy>
    </PolicySet>


Similarly, we encode the assignments of users to the role into a dedicated **role enablement policy set**:  

.. code-block:: xml

    <!-- This REPS (i.e., Role Enablement Policy Set) contains the users
        associated with the role roleName (replace "roleName" with the 
        name of the role and "username" with the name of the user) -->
    <PolicySet
        xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17 xacml-core-v3-schema-wd-17.xsd" 
        PolicySetId="REPS:role:roleName" 
        Version="1.0" 
        PolicyCombiningAlgId="urn:oasis:names:tc:xacml:3.0:policy-combining-algorithm:permit-overrides">
        <Target/>
        <Policy
            xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17 xacmlcore-v3-schema-wd-17.xsd"
            PolicyId="Assignment:Policy:roleName"
            Version="1.0"
            RuleCombiningAlgId="urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides">
            <Target/>

            <!-- roleName role requirements rule -->
            <Rule RuleId="roleName:role:requirements" Effect="Permit">
                <Target>
                    <AnyOf>

                        <!-- one line for each user -->
                        <AllOf>
                            <Match MatchId="urn:oasis:names:tc:xacml:1.0:function:string-equal">
                                <AttributeValue
                                    DataType="http://www.w3.org/2001/XMLSchema#string">username</AttributeValue>
                                <AttributeDesignator
                                MustBePresent="true"
                                Category="urn:oasis:names:tc:xacml:1.0:subject-category:access-subject"
                                AttributeId="urn:oasis:names:tc:xacml:1.0:subject:subject-id"
                                DataType="http://www.w3.org/2001/XMLSchema#string"/>
                            </Match>
                        </AllOf>
                        
                    </AnyOf>
                    <AnyOf>
                        <AllOf>
                            <Match MatchId="urn:oasis:names:tc:xacml:1.0:function:string-equal">
                                <AttributeValue
                                    DataType="http://www.w3.org/2001/XMLSchema#string">roleName</AttributeValue>
                                <AttributeDesignator
                                    MustBePresent="true"
                                    Category="urn:oasis:names:tc:xacml:3.0:attribute-category:resource"
                                    AttributeId="urn:oasis:names:tc:xacml:2.0:subject:role"
                                    DataType="http://www.w3.org/2001/XMLSchema#string"/>
                            </Match>
                        </AllOf>
                    </AnyOf>
                    <AnyOf>
                        <AllOf>
                            <Match MatchId="urn:oasis:names:tc:xacml:1.0:function:string-equal">
                                <AttributeValue
                                    DataType="http://www.w3.org/2001/XMLSchema#string">urn:oasis:names:tc:xacml:2.0:actions:enableRole</AttributeValue>
                                <AttributeDesignator
                                    MustBePresent="true"
                                    Category="urn:oasis:names:tc:xacml:3.0:attribute-category:action"
                                    AttributeId="urn:oasis:names:tc:xacml:1.0:action:action-id"
                                    DataType="http://www.w3.org/2001/XMLSchema#string"/>
                            </Match>
                        </AllOf>
                    </AnyOf>
                </Target>
            </Rule>
        </Policy>
    </PolicySet>


Finally, we allow users to assume the role and use the relative permissions with a dedicated **roles policy set**:

.. code-block:: xml

    <!-- This RPS (i.e., Role Policy Set) allows requiring a subject
        to have the attribute roleName (i.e., to be assigned to
        the role) to use the permissions associated with the role 
        roleName (replace "roleName" with the name of the role) -->
    <PolicySet
            xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17 xacml-core-v3-schema-wd-17.xsd"
            PolicySetId="RPS:role:roleName"
            Version="1.0"
            PolicyCombiningAlgId="urn:oasis:names:tc:xacml:3.0:policy-combining-algorithm:permit-overrides">
        <Target>
            <AnyOf>
                <AllOf>
                    <!-- Applies only to subjects holding the attribute of the role roleName -->
                    <Match MatchId="urn:oasis:names:tc:xacml:1.0:function:string-equal">
                        <AttributeValue DataType="http://www.w3.org/2001/XMLSchema#string">
                            roleName
                        </AttributeValue>
                        <AttributeDesignator MustBePresent="true"
                                            Category="urn:oasis:names:tc:xacml:1.0:subject-category:access-subject"
                                            AttributeId="urn:oasis:names:tc:xacml:2.0:subject:role"
                                            DataType="http://www.w3.org/2001/XMLSchema#string"/>
                    </Match>
                </AllOf>
            </AnyOf>
        </Target>
        <!-- Include the permissions associated with the role roleName -->
        <PolicySetIdReference>PPS:role:roleName</PolicySetIdReference>
    </PolicySet>

.. note::
   Each modification to the cryptographic access control policy is reflected into policy sets directly, i.e., a new version of the policy sets is created (and replaces the old version) each time the policy is modified.



Role-based Access Control Configuration for the AuthzForce XACML Server
***********************************************************************

To interact with the AuthzForce XACML Server, CryptoAC needs to know the endpoint (i.e., the URL and the port) on which the server is listening to connections; see the :ref:`Core Profiles <Core Profiles>` section for more details. Then, at start-up, CryptoAC configures the server by creating a dedicated `domain <https://authzforce-ce-fiware.readthedocs.io/en/latest/UserAndProgrammersGuide.html#domain-management-api>`_ (named :bash:`domain:cryptoac`) and the permissions, role enablement and roles policy sets for the administrator. CryptoAC also configures the properties of the `Policy Repository (PRP) <https://authzforce-ce-fiware.readthedocs.io/en/latest/UserAndProgrammersGuide.html#policy-repository-prp-properties>`_ by setting the :bash:`maxVersionCountPerPolicy` and :bash:`versionRollingEnabled` properties to :bash:`100` and :bash:`true`, respectively. Finally, CryptoAC sets the root policy set--which contains the ID of all other policy sets--as shown below:

.. code-block:: xml

    <PolicySet
        xmlns="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="urn:oasis:names:tc:xacml:3.0:core:schema:wd-17 xacml-core-v3-schema-wd-17.xsd"
        PolicySetId="CryptoAC:root:policy"
        Version="1.0"
        PolicyCombiningAlgId="urn:oasis:names:tc:xacml:3.0:policy-combining-algorithm:permit-overrides">
        <Target />
        <PolicySetIdReference>RPS:role:admin</PolicySetIdReference>
        <PolicySetIdReference>REPS:role:admin</PolicySetIdReference>
    </PolicySet>

.. warning::
   The `secure deployment of the AuthzForce XACML Server <https://authzforce-ce-fiware.readthedocs.io/en/latest/InstallationAndAdministrationGuide.html#administration>`_ and the integration of CryptoAC with security features such as HTTPS communication, authentication and authorization of clients is currently under development.
