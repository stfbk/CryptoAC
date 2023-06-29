package eu.fbk.st.cryptoac.ac.xacmlauthzforce

import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.API.HTTPS
import eu.fbk.st.cryptoac.Constants
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.ac.ACServiceRBAC
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.getPPSIDByRole
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.getREPSIDByRole
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.getRPSIDByRole
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.getRoleNameFromPolicySetID
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.rootDefaultPolicySetId
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.XACMLPolicySet.Companion.rootPolicySetIdCryptoAC
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceCryptoACParameters
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.model.CodeBoolean
import eu.fbk.st.cryptoac.model.CodeServiceParameters
import eu.fbk.st.cryptoac.model.CodeString
import eu.fbk.st.cryptoac.model.CodeStrings
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.User
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.plugins.cookies.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.xml.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import mu.KotlinLogging
import nl.adaptivity.xmlutil.serialization.XML
import java.io.BufferedReader
import java.io.FileNotFoundException
import java.io.InputStreamReader
import java.security.cert.X509Certificate
import java.util.*
import javax.net.ssl.X509TrustManager
import kotlin.collections.HashSet

private val logger = KotlinLogging.logger {}

/**
 * Implementation of the methods to interface with the AuthzForce XACML
 * PDP server configured with the given [acServiceParameters]
 */
class ACServiceRBACXACMLAuthzForce(
    private val acServiceParameters: ACServiceRBACXACMLAuthzForceParameters
): ACServiceRBAC {

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    override var locks = 0

    /** The external ID of the CryptoAC domain */
    private val externalDomainCryptoACID = "domain:cryptoac"

    /** The ID of the CryptoAC domain */
    private var domainCryptoACID = ""

    /**
     * The file containing the XML data
     * to create the CryptoAC domain in
     * the AuthzForce XACML Server
     */
    private val domainRBAC = "/cryptoac/XACML_AuthzForce/domain_cryptoac.xml"

    /**
     * The file containing the XML properties
     * for the PRP in the AuthzForce XACML Server
     */
    private val propertiesPRP = "/cryptoac/XACML_AuthzForce/properties_PRP.xml"

    /**
     * The file containing the admin rule enablement
     * policy set to initialize the AuthzForce XACML Server
     */
    private val adminREPSRBAC = "/cryptoac/XACML_AuthzForce/admin_REPS.xml"

    /**
     * The file containing the admin permission
     * policy set to initialize the XACML server
     */
    private val adminPPSRBAC = "/cryptoac/XACML_AuthzForce/admin_PPS.xml"

    /**
     * The file containing the admin role
     * policy set to initialize the XACML server
     */
    private val adminRPSRBAC = "/cryptoac/XACML_AuthzForce/admin_RPS.xml"

    /**
     * The file containing the CryptoAC root
     * policy set to initialize the XACML server
     */
    private val adminROOTRBAC = "/cryptoac/XACML_AuthzForce/admin_ROOT.xml"

    /** The base API path (url + port) of XACML */
    private val xacmlBaseAPI = "${acServiceParameters.url}:${acServiceParameters.port}"

    /**
     * A map for keeping track of which policies were added
     * during a transaction, so to be able to rollback in case
     * of error. The key is the policy ID, the value is the
     * set of version numbers added for that policy
     */
    private var addedPolicies = hashMapOf<String, HashSet<String>>()

    /** The Ktor Http client */
    private var client: HttpClient? = null



    /**
     * Check whether the service was
     * already configured (at least once)
     *
     * In this implementation, get the ID
     * of the CryptoAC domain. If it exists,
     * it means that we already configured
     * the XACML server
     */
    override fun alreadyConfigured(): CodeBoolean {
        logger.info { "Checking whether the RBAC XACML server is already configured" }

        val domainCode = getDomainCryptoACID()
        return if (domainCode.code == CODE_000_SUCCESS) {
            if (domainCode.string != null) {
                CodeBoolean()
            } else {
                CodeBoolean(
                    boolean = false
                )
            }
        } else {
            CodeBoolean(
                code = domainCode.code
            )
        }
    }

    /**
     * This function is invoked when initializing the
     * admin (after the 'init' function), and it should
     * configure the service with the given [parameters]
     * and return the outcome code. When implementing this
     * function, remember to decide how to handle (e.g.,
     * reject or allow) subsequent invocations
     *
     * In this implementation, create the domain CryptoAC,
     * the REPS, PPS and RPS policies for the admin and the
     * root policy; deny subsequent invocations
     */
    override fun configure(
        parameters: CoreParameters?
    ): OutcomeCode {

        logger.info { "Initializing the RBAC XACML" }

        val serviceStatus = alreadyConfigured()
        if (serviceStatus.code != CODE_000_SUCCESS) {
            return serviceStatus.code
        } else if (serviceStatus.boolean) {
            logger.warn { "The RBAC XACML was already initialized" }
            return CODE_077_SERVICE_ALREADY_CONFIGURED
        }

        val domainRBACFile = ACServiceRBACXACMLAuthzForce::class.java.getResourceAsStream(domainRBAC)
        val propertiesPRPFile = ACServiceRBACXACMLAuthzForce::class.java.getResourceAsStream(propertiesPRP)
        val adminREPSRBACFile = ACServiceRBACXACMLAuthzForce::class.java.getResourceAsStream(adminREPSRBAC)
        val adminPPSRBACFile = ACServiceRBACXACMLAuthzForce::class.java.getResourceAsStream(adminPPSRBAC)
        val adminRPSRBACFile = ACServiceRBACXACMLAuthzForce::class.java.getResourceAsStream(adminRPSRBAC)
        val adminROOTRBACFile = ACServiceRBACXACMLAuthzForce::class.java.getResourceAsStream(adminROOTRBAC)
        if (domainRBACFile == null ||
            propertiesPRPFile == null ||
            adminREPSRBACFile == null ||
            adminPPSRBACFile == null ||
            adminRPSRBACFile == null ||
            adminROOTRBACFile == null
        ) {
            val message = "One or more initialization files not found"
            logger.error { message }
            throw FileNotFoundException(message)
        }
        val domainRBACXML: String
        BufferedReader(InputStreamReader(domainRBACFile)).use { reader ->
            domainRBACXML = reader.readText()
        }
        val propertiesPRPXML: String
        BufferedReader(InputStreamReader(propertiesPRPFile)).use { reader ->
            propertiesPRPXML = reader.readText()
        }
        val adminREPSRBACXML: String
        BufferedReader(InputStreamReader(adminREPSRBACFile)).use { reader ->
            adminREPSRBACXML = reader.readText()
        }
        val adminPPSRBACXML: String
        BufferedReader(InputStreamReader(adminPPSRBACFile)).use { reader ->
            adminPPSRBACXML = reader.readText()
        }
        val adminRPSRBACXML: String
        BufferedReader(InputStreamReader(adminRPSRBACFile)).use { reader ->
            adminRPSRBACXML = reader.readText()
        }
        val adminROOTRBACXML: String
        BufferedReader(InputStreamReader(adminROOTRBACFile)).use { reader ->
            adminROOTRBACXML = reader.readText()
        }
        
        var code: OutcomeCode = CODE_000_SUCCESS
        runBlocking {
            val xacmlDomainsURL = "${HTTPS}${xacmlBaseAPI}${API.XACML_AUTHZFORCE}"
            logger.info { "Creating the XACML Domain sending a POST request to $xacmlDomainsURL" }
            val xacmlResponse = client!!.post {
                header("Accept", "application/xml")
                header("Content-Type", "application/xml;charset=UTF-8")
                url(xacmlDomainsURL)
                setBody(domainRBACXML)
            }
            logger.debug { "Received response from the XACML server" }
            if (xacmlResponse.status != HttpStatusCode.OK) {
                val errorMessage = xacmlResponse.bodyAsText()
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}, error: $errorMessage)"
                }
                code = CODE_078_XACML_CONFIGURATION
            }
        }
        if (code != CODE_000_SUCCESS) {
            return code
        }


        val domainCode = getDomainCryptoACID()
        if (domainCode.code != CODE_000_SUCCESS) {
            return domainCode.code
        }

        runBlocking {
            val xacmlPRPURL = "${HTTPS}${xacmlBaseAPI}${API.XACML_AUTHZFORCE}${domainCryptoACID}/pap/prp.properties"
            logger.info { "Setting PRP properties in the XACML server sending a PUT request to $xacmlPRPURL" }
            val xacmlResponse = client!!.put {
                header("Accept", "application/xml")
                header("Content-Type", "application/xml;charset=UTF-8")
                url(xacmlPRPURL)
                setBody(propertiesPRPXML)
            }
            logger.debug { "Received response from the XACML server" }
            if (xacmlResponse.status != HttpStatusCode.OK) {
                val errorMessage = xacmlResponse.bodyAsText()
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}, error: $errorMessage)"
                }
                code = CODE_078_XACML_CONFIGURATION
            }
        }
        if (code != CODE_000_SUCCESS) {
            return code
        }

        logger.info { "Creating the XACML REPS for the admin" }
        code = addOrUpdatePolicySet(
            policySet = adminREPSRBACXML
        )
        if (code != CODE_000_SUCCESS) {
            return code
        }

        logger.info { "Creating the XACML PPS for the admin" }
        code = addOrUpdatePolicySet(
            policySet = adminPPSRBACXML
        )
        if (code != CODE_000_SUCCESS) {
            return code
        }

        logger.info { "Creating the XACML RPS for the admin" }
        code = addOrUpdatePolicySet(
            policySet = adminRPSRBACXML
        )
        if (code != CODE_000_SUCCESS) {
            return code
        }

        logger.info { "Creating the XACML ROOT policy" }
        code = addOrUpdatePolicySet(
            policySet = adminROOTRBACXML
        )
        if (code != CODE_000_SUCCESS) {
            return code
        }

        runBlocking {
            val xacmlPAPPropertiesURL = "${HTTPS}${xacmlBaseAPI}${API.XACML_AUTHZFORCE}${domainCryptoACID}/pap/pdp.properties"
            logger.info { "Setting the XACML ROOT policy sending a POST request to $xacmlPAPPropertiesURL" }
            val xacmlResponse = client!!.put {
                header("Accept", "application/xml")
                header("Content-Type", "application/xml;charset=UTF-8")
                url(xacmlPAPPropertiesURL)
                setBody("""
                    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
                    <pdpPropertiesUpdate
                        xmlns="http://authzforce.github.io/rest-api-model/xmlns/authz/5">
                        <rootPolicyRefExpression>$rootPolicySetIdCryptoAC</rootPolicyRefExpression>
                    </pdpPropertiesUpdate>
                """.trimIndent())
            }
            logger.debug { "Received response from the XACML server" }
            if (xacmlResponse.status != HttpStatusCode.OK) {
                val errorMessage = xacmlResponse.bodyAsText()
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}, error: $errorMessage)"
                }
                code = CODE_080_XACML_PAP
            }
        }

        return code
    }

    /**
     * This function is invoked each time the service
     * is initialized, and it should contain the code to
     * initialize the interface (e.g., possibly connect to
     * remote services like MQTT brokers, databases, etc.)
     *
     * In this implementation, retrieve the domain CryptoAC ID
     */
    override fun init() {
        getDomainCryptoACID()
    }

    /**
     * This function is invoked each time the (interface toward
     * the) service is destroyed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    override fun deinit() {
        logger.info { "No action required to de-initialize the AC RBAC XACML service" }
    }

    /**
     * Add (and initialize) the [newAdmin] in the
     * service and return the outcome code. Check that
     * the name of the admin is the expected one and
     * that the admin was not already added (or initialized)
     *
     * In this implementation, just check that
     * the admin name is the expected one; the
     * XACML server does not have the U and R
     * sets, but only the UR and PA sets
     */
    override fun addAdmin(
        newAdmin: User
    ): OutcomeCode {
        /** Guard clauses */
        if (newAdmin.name != ADMIN) {
            logger.warn {
                "Admin user has name ${newAdmin.name}" +
                ", but admin name should be $ADMIN"
            }
            return CODE_036_ADMIN_NAME
        }

        return CODE_000_SUCCESS
    }

    /**
     * Initialize the [user] in the service and
     * return the outcome code. Check that the user
     * is present and was not already initialized or
     * deleted. This method should support invocations
     * by non-admin users
     */
    override fun initUser(
        user: User
    ): OutcomeCode {
        logger.info { "No action required to initialize user" }
        return CODE_000_SUCCESS
    }

    /**
     * Add the [newUser] in the service by, e.g.,
     * creating an account for the user. Check that 
     * the user was not already added. Finally,
     * return the user's configuration parameters
     * together with the outcome code
     *
     * In this implementation, there is no set U
     * to which add the [newUser]
     */
    override fun addUser(
        newUser: User
    ): CodeServiceParameters {
        val username = newUser.name

        /** Guard clauses */
        if (username.isBlank() ) {
            logger.warn { "Username is blank" }
            return CodeServiceParameters(CODE_020_INVALID_PARAMETER)
        }

        // TODO to implement when we will have login with users

        return CodeServiceParameters(
            parameters = ACServiceRBACXACMLAuthzForceParameters(
                port = acServiceParameters.port,
                url = acServiceParameters.url,
            )
        )
    }

    /**
     * Delete [username] from the service. Check
     * that the user exists, and she is not the admin
     *
     * In this implementation, we delete
     * [username]'s assignments from UR
     * but there is no need to delete
     * [username] from U
     */
    override fun deleteUser(
        username: String
    ): OutcomeCode {

        /** Guard clauses */
        if (username.isBlank()) {
            logger.warn { "Username is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        return when (val revokeUserCode = revokeUserFromRoleWildcard(username = username)) {
            CODE_041_UR_ASSIGNMENTS_NOT_FOUND -> {
                /**
                 * It means that the user was not assigned
                 * to any role, and that's fine for us
                 */
                CODE_000_SUCCESS
            }
            else -> {
                revokeUserCode
            }
        }
    }



    /**
     * Add [roleName] to R
     *
     * In this implementation, there is no
     * need to add [roleName] to R, we just
     * add the (empty) PPS, REPS and RPS of
     * the role and update the root policy
     */
    override fun addRole(
        roleName: String
    ): OutcomeCode {
        logger.info { "Adding role $roleName" }

        /** Guard clauses */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }


        val policySetRootCode = getRootPolicySet()
        if (policySetRootCode.code != CODE_000_SUCCESS) {
            logger.warn { "Error while getting the root policy set (${policySetRootCode.code})" }
            return policySetRootCode.code
        }
        val policySetRoot = policySetRootCode.xacmlPolicySetRoot!!

        val roleNames = getRoleNamesInDomain()
        if (roleNames.code != CODE_000_SUCCESS) {
            logger.warn { "Error while checking that the role does not exist already" }
            return roleNames.code
        }
        if (roleNames.strings!!.contains(roleName)) {
            logger.warn { "Role $roleName already exists" }
            return CODE_002_ROLE_ALREADY_EXISTS
        }

        val rolePPS = XACMLPPS(
            policySetId = "PPS:role:$roleName",
            policy = XACMLPolicy(
                policyId = "Permissions:for:the:role:$roleName",
                rules = mutableListOf()
            )
        )
        logger.info { "Adding the PPS of the new role $roleName" }
        var code = addOrUpdatePolicySet(
            policySet = XML{ }.encodeToString(rolePPS)
        )
        if (code != CODE_000_SUCCESS) {
            return code
        } else {
            addedPolicies.getOrPut(rolePPS.policySetId) { hashSetOf() }.add(rolePPS.version)
        }

        val roleREPS = XACMLREPS(
            policySetId = "REPS:role:$roleName",
            policy = XACMLPolicy(
                policyId = "Assignment:Policy:$roleName",
                rules = mutableListOf(
                    XACMLRule(
                        ruleId = "$roleName:role:requirements",
                        target = XACMLTarget(
                            anyOfs = mutableListOf(
                                XACMLAnyOf(
                                    allOfs = mutableListOf()
                                ),
                                XACMLAnyOf(
                                    allOfs = mutableListOf(
                                        XACMLAllOf(
                                            match = XACMLMatch(
                                                matchID = "urn:oasis:names:tc:xacml:1.0:function:string-equal",
                                                attribute = XACMLAttributeValue(
                                                    dataType = "http://www.w3.org/2001/XMLSchema#string",
                                                    attributeValue = roleName
                                                ),
                                                designator = XACMLAttributeDesignator(
                                                    category = "urn:oasis:names:tc:xacml:3.0:attribute-category:resource",
                                                    attributeId = "urn:oasis:names:tc:xacml:2.0:subject:role",
                                                    dataType = "http://www.w3.org/2001/XMLSchema#string",
                                                    mustBePresent = "false",
                                                )
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
                                                    attributeValue = "urn:oasis:names:tc:xacml:2.0:actions:enableRole"
                                                ),
                                                designator = XACMLAttributeDesignator(
                                                    category = "urn:oasis:names:tc:xacml:3.0:attribute-category:action",
                                                    attributeId = "urn:oasis:names:tc:xacml:1.0:action:action-id",
                                                    dataType = "http://www.w3.org/2001/XMLSchema#string",
                                                    mustBePresent = "false",
                                                )
                                            )
                                        )
                                    )
                                ),
                            )
                        )
                    )
                )
            )
        )
        roleREPS.assignUserToRole(ADMIN)
        logger.info { "Adding the REPS of the new role $roleName" }
        code = addOrUpdatePolicySet(
            policySet = XML{ }.encodeToString(roleREPS)
        )
        if (code != CODE_000_SUCCESS) {
            return code
        } else {
            addedPolicies.getOrPut(roleREPS.policySetId) { hashSetOf() }.add(roleREPS.version)
        }

        val roleRPS = XACMLRPS(
            policySetId = "RPS:role:$roleName",
            policySetIDReference = XACMLPolicySetIDReference(
                policySetID = "PPS:role:$roleName"
            ),
            target = XACMLTarget(
                anyOfs = mutableListOf(
                    XACMLAnyOf(
                        allOfs = mutableListOf(
                            XACMLAllOf(
                                match = XACMLMatch(
                                    matchID = "urn:oasis:names:tc:xacml:1.0:function:string-equal",
                                    attribute = XACMLAttributeValue(
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        attributeValue = roleName
                                    ),
                                    designator = XACMLAttributeDesignator(
                                        category = "urn:oasis:names:tc:xacml:1.0:subject-category:access-subject",
                                        attributeId = "urn:oasis:names:tc:xacml:2.0:subject:role",
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        mustBePresent = "false",
                                    ),
                                )
                            )
                        )
                    )
                )
            ),
        )
        logger.info { "Adding the RPS of the new role $roleName" }
        code = addOrUpdatePolicySet(
            policySet = XML{ }.encodeToString(roleRPS)
        )
        if (code != CODE_000_SUCCESS) {
            return code
        } else {
            addedPolicies.getOrPut(roleRPS.policySetId) { hashSetOf() }.add(roleRPS.version)
        }

        logger.info { "Update the root policy adding the RPS and REPS of $roleName" }
        policySetRoot.addRPSandREPS(
            roleName = roleName
        )
        policySetRoot.updatePolicySetVersionNumber()
        code = addOrUpdatePolicySet(
            policySet = XML{ }.encodeToString(policySetRoot)
        )
        if (code == CODE_000_SUCCESS) {
            addedPolicies.getOrPut(policySetRoot.policySetId) { hashSetOf() }.add(policySetRoot.version)
        }
        return code
    }

    /**
     * Delete [roleName] from R and
     * [roleName]'s assignments from
     * UR and PA
     *
     * In this implementation, we delete
     * [roleName]'s RPS, REPS and PPS
     * and update the root policy
     */
    override fun deleteRole(
        roleName: String
    ): OutcomeCode {
        logger.info { "Deleting role $roleName" }

        /** Guard clauses */
        if (roleName.isBlank()) {
            logger.warn { "Role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }


        val policySetRootCode = getRootPolicySet()
        if (policySetRootCode.code != CODE_000_SUCCESS) {
            logger.warn { "Error while getting the root policy set (${policySetRootCode.code})" }
            return policySetRootCode.code
        }
        val policySetRoot = policySetRootCode.xacmlPolicySetRoot!!

        logger.info { "Update the root policy removing the RPS and REPS of $roleName" }
        policySetRoot.removeRPSandREPS(
            roleName = roleName
        )
        policySetRoot.updatePolicySetVersionNumber()
        var code = addOrUpdatePolicySet(
            policySet = XML{ }.encodeToString(policySetRoot)
        )
        if (code != CODE_000_SUCCESS) {
            return code
        } else {
            addedPolicies.getOrPut(policySetRoot.policySetId) { hashSetOf() }.add(policySetRoot.version)
        }

        logger.debug { "Deleting the role RPS" }
        code = deletePolicySetByID(
            policySetID = getRPSIDByRole(roleName)
        )
        if (code != CODE_000_SUCCESS) {
            return if (code == CODE_081_XACML_PAP_POLICY_NOT_FOUND) {
                CODE_005_ROLE_NOT_FOUND
            } else {
                code
            }
        }

        logger.debug { "Deleting the role REPS" }
        code = deletePolicySetByID(
            policySetID = getREPSIDByRole(roleName)
        )
        if (code != CODE_000_SUCCESS) {
            return code
        }

        logger.debug { "Deleting the role PPS" }
        return deletePolicySetByID(
            policySetID = getPPSIDByRole(roleName)
        )
    }

    /**
     * Add [resourceName] to P
     *
     * In this implementation, there is no
     * need to add [resourceName] to P
     */
    override fun addResource(
        resourceName: String
    ): OutcomeCode {
        return CODE_000_SUCCESS
    }

    /**
     * Delete [resourceName] from P and
     * [resourceName]'s assignments from PA
     *
     * In this implementation, we delete
     * [resourceName]'s assignments from
     * PA but there is no need to
     * delete [resourceName] from P
     */
    override fun deleteResource(
        resourceName: String
    ): OutcomeCode {

        /** Guard clauses */
        if (resourceName.isBlank()) {
            logger.warn { "Resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        return when (val revokePermissionCode = revokePermissionFromRoleWildcard(resourceName = resourceName)) {
            CODE_042_PA_ASSIGNMENTS_NOT_FOUND -> {
                /**
                 * It means that no role was assigned permission
                 * over the resource, and that's fine for us
                 */
                CODE_000_SUCCESS
            }
            else -> {
                revokePermissionCode
            }
        }
    }

    /** Add ([username], [roleName]) to UR */
    override fun assignUserToRole(
        username: String,
        roleName: String
    ): OutcomeCode {
        logger.info { "Adding UR assignment $username-$roleName" }

        /** Guard clauses */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "User or role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        val oldRoleREPSCode = getREPSByRole(
            roleName = roleName
        )
        if (oldRoleREPSCode.code != CODE_000_SUCCESS) {
            logger.warn { "Error while getting REPS (${oldRoleREPSCode.code})" }
            return oldRoleREPSCode.code
        }
        val roleREPS = oldRoleREPSCode.xacmlREPS!!


        /**
         * Check whether [username] is already
         * assigned to [roleName]
         */
        if (roleREPS.getUsersAssignedToRole().contains(username)) {
            logger.warn {
                "UR assignment between user $username " +
                "and role $roleName already exists"
            }
            return CODE_062_UR_ASSIGNMENTS_ALREADY_EXISTS
        }

        logger.info {
            "Updating the REPS of the new UR " +
            "assignment (user $username, role $roleName)"
        }
        roleREPS.assignUserToRole(
            username = username
        )
        roleREPS.updatePolicySetVersionNumber()
        val code = addOrUpdatePolicySet(
            policySet = XML{ }.encodeToString(roleREPS)
        )
        if (code == CODE_000_SUCCESS) {
            addedPolicies.getOrPut(roleREPS.policySetId) { hashSetOf() }.add(roleREPS.version)
        }
        return code
    }

    /** Delete ([username], [roleName]) from UR */
    override fun revokeUserFromRole(
        username: String,
        roleName: String
    ): OutcomeCode {

        /** Guard clauses */
        if (username.isBlank() || roleName.isBlank()) {
            logger.warn { "User or role name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        return revokeUserFromRoleWildcard(username, roleName)
    }

    /**
     * Add ([roleName], ([permission],
     * [resourceName])) to PA
     */
    override fun assignPermissionToRole(
        roleName: String,
        permission: PermissionType,
        resourceName: String
    ): OutcomeCode {
        logger.info { "Adding PA assignment $roleName-$permission-$resourceName" }

        /** Guard clauses */
        if (roleName.isBlank() || resourceName.isBlank()) {
            logger.warn { "Role or resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        val oldRolePPSCode = getPPSByRole(
            roleName = roleName
        )
        if (oldRolePPSCode.code != CODE_000_SUCCESS) {
            logger.warn { "Error while getting PPS (${oldRolePPSCode.code})" }
            return oldRolePPSCode.code
        }
        val rolePPS = oldRolePPSCode.xacmlPPS!!

        return when (permission) {
            PermissionType.READ -> assignROrWPermissionToRole(
                rolePPS = rolePPS,
                roleName = roleName,
                permission = PermissionType.READ,
                resourceName = resourceName
            )
            PermissionType.WRITE -> assignROrWPermissionToRole(
                rolePPS = rolePPS,
                roleName = roleName,
                permission = PermissionType.WRITE,
                resourceName = resourceName
            )
            PermissionType.READWRITE -> {
                val code = assignROrWPermissionToRole(
                    rolePPS = rolePPS,
                    roleName = roleName,
                    permission = PermissionType.READ,
                    resourceName = resourceName
                )
                if (code == CODE_000_SUCCESS) {
                    assignROrWPermissionToRole(
                        rolePPS = rolePPS,
                        roleName = roleName,
                        permission = PermissionType.WRITE,
                        resourceName = resourceName
                    )
                } else {
                    code
                }
            }
        }
    }

    /** Delete ([roleName], (-, [resourceName])) from PA */
    override fun revokePermissionFromRole(
        roleName: String,
        resourceName: String
    ): OutcomeCode {

        /** Guard clauses */
        if (roleName.isBlank() || resourceName.isBlank()) {
            logger.warn { "Role or resource name is blank" }
            return CODE_020_INVALID_PARAMETER
        }

        return revokePermissionFromRoleWildcard(roleName, resourceName)
    }

    /**
     * Replace ([roleName], (-, [resourceName])) with
     * ([roleName], ([permission], [resourceName]))
     * in PA
     */
    override fun updatePermissionToRole(
        roleName: String,
        permission: PermissionType,
        resourceName: String
    ): OutcomeCode {
        logger.info { "Update PA assignment $roleName-$permission-$resourceName" }

        val code = revokePermissionFromRole(
            roleName = roleName,
            resourceName = resourceName
        )
        return if (code == CODE_000_SUCCESS) {
            assignPermissionToRole(
                roleName = roleName,
                permission = permission,
                resourceName = resourceName
            )
        } else {
            code
        }
    }

    /**
     * Check whether the [username] has
     * [permission] over [resourceName] and
     * return either CODE_000_SUCCESS
     * (if the user is authorized) or
     * CODE_037_FORBIDDEN (if the user is
     * not authorized). [permission] can
     * be either READ or WRITE
     */
    override fun isUserAllowed(
        username: String,
        permission: PermissionType,
        resourceName: String
    ): OutcomeCode = isUserAllowed(
        username = username,
        roleName = null,
        permission = permission,
        resourceName = resourceName
    )

    /**
     * Check whether the [username] has
     * [permission] over [resourceName]
     * through role [roleName] (if given,
     * otherwise it is up to the AC service
     * to find a suitable role) and
     * return either CODE_000_SUCCESS
     * (if the user is authorized) or
     * CODE_037_FORBIDDEN (if the user is
     * not authorized). [permission] can
     * be either READ or WRITE
     */
    override fun isUserAllowed(
        username: String,
        roleName: String?,
        permission: PermissionType,
        resourceName: String,
    ): OutcomeCode {

        /** Guard clauses */
        if (permission != PermissionType.READ && permission != PermissionType.WRITE) {
            logger.warn { "Permission should be either ${PermissionType.READ} or ${PermissionType.WRITE}" }
            return CODE_020_INVALID_PARAMETER
        }

        logger.info { "Collecting all roles to consider for user $username" }
        val roleNamesToCheck = hashSetOf<String>()
        var code = CODE_000_SUCCESS
        if (roleName == null) {
            val roleNamesCode = getRoleNamesInDomain()
            if (roleNamesCode.code != CODE_000_SUCCESS) {
                code = roleNamesCode.code
            } else {
                run error@{
                    roleNamesCode.strings!!.forEach { currentRoleName ->
                        val currentREPSCode = getREPSByRole(
                            roleName = currentRoleName
                        )
                        if (currentREPSCode.code != CODE_000_SUCCESS) {
                            code = currentREPSCode.code
                            return@error
                        }
                        if (currentREPSCode.xacmlREPS!!.getUsersAssignedToRole().contains(username)) {
                            roleNamesToCheck.add(currentRoleName)
                        }
                    }
                }
            }
        } else {
            roleNamesToCheck.add(roleName)
        }
        if (code != CODE_000_SUCCESS) {
            return code
        }


        logger.info { "Keep roles assigned to user $username" }
        val roleAssignedToUser = hashSetOf<String>()
        run error@{
            roleNamesToCheck.forEach { currentRoleName ->
                logger.info { "Querying whether user $username is assigned to role $currentRoleName" }
                val xacmlURRequest = XACMLRequest(
                    attributesList = mutableListOf(
                        XACMLAttributes(
                            category = "urn:oasis:names:tc:xacml:1.0:subject-category:access-subject",
                            attributes = mutableListOf(
                                XACMLAttribute(
                                    attributeId = "urn:oasis:names:tc:xacml:1.0:subject:subject-id",
                                    attributeValue = XACMLAttributeValue(
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        attributeValue = username
                                    )
                                )
                            )
                        ),
                        XACMLAttributes(
                            category = "urn:oasis:names:tc:xacml:3.0:attribute-category:resource",
                            attributes = mutableListOf(
                                XACMLAttribute(
                                    attributeId = "urn:oasis:names:tc:xacml:2.0:subject:role",
                                    attributeValue = XACMLAttributeValue(
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        attributeValue = currentRoleName
                                    )
                                )
                            )
                        ),
                        XACMLAttributes(
                            category = "urn:oasis:names:tc:xacml:3.0:attribute-category:action",
                            attributes = mutableListOf(
                                XACMLAttribute(
                                    attributeId = "urn:oasis:names:tc:xacml:1.0:action:action-id",
                                    attributeValue = XACMLAttributeValue(
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        attributeValue = "urn:oasis:names:tc:xacml:2.0:actions:enableRole"
                                    )
                                )
                            )
                        ),
                        XACMLAttributes(
                            category = "urn:oasis:names:tc:xacml:3.0:attribute-category:environment",
                        ),
                    )
                )

                code = sendRequestToPDP(xacmlURRequest)
                when (code) {
                    CODE_000_SUCCESS -> roleAssignedToUser.add(currentRoleName)
                    CODE_083_XACML_PDP_UNAUTHORIZED -> { code = CODE_000_SUCCESS }
                    else -> return@error
                }
            }
        }
        if (code != CODE_000_SUCCESS) {
            return code
        }


        logger.info { "Keep roles having permission $permission over resource $resourceName" }
        val roleHavingPermissionOnResource = hashSetOf<String>()
        run error@{
            roleAssignedToUser.forEach { currentRoleName ->
                logger.info {
                    "Querying whether user $username has " +
                    "permission $permission over the resource " +
                    "$resourceName through role $currentRoleName"
                }
                val xacmlPARequest = XACMLRequest(
                    attributesList = mutableListOf(
                        XACMLAttributes(
                            category = "urn:oasis:names:tc:xacml:1.0:subject-category:access-subject",
                            attributes = mutableListOf(
                                XACMLAttribute(
                                    attributeId = "urn:oasis:names:tc:xacml:2.0:subject:role",
                                    attributeValue = XACMLAttributeValue(
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        attributeValue = currentRoleName
                                    )
                                )
                            )
                        ),
                        XACMLAttributes(
                            category = "urn:oasis:names:tc:xacml:3.0:attribute-category:resource",
                            attributes = mutableListOf(
                                XACMLAttribute(
                                    attributeId = "urn:oasis:names:tc:xacml:1.0:resource:resource-id",
                                    attributeValue = XACMLAttributeValue(
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        attributeValue = resourceName
                                    )
                                )
                            )
                        ),
                        XACMLAttributes(
                            category = "urn:oasis:names:tc:xacml:3.0:attribute-category:action",
                            attributes = mutableListOf(
                                XACMLAttribute(
                                    attributeId = "urn:oasis:names:tc:xacml:1.0:action:action-id",
                                    attributeValue = XACMLAttributeValue(
                                        dataType = "http://www.w3.org/2001/XMLSchema#string",
                                        attributeValue = permission.toString()
                                    )
                                )
                            )
                        ),
                        XACMLAttributes(
                            category = "urn:oasis:names:tc:xacml:3.0:attribute-category:environment",
                        ),
                    )
                )

                code = sendRequestToPDP(xacmlPARequest)
                when (code) {
                    CODE_000_SUCCESS -> roleHavingPermissionOnResource.add(currentRoleName)
                    CODE_083_XACML_PDP_UNAUTHORIZED -> { code = CODE_000_SUCCESS }
                    else -> return@error
                }
            }
        }

        return if (roleHavingPermissionOnResource.isEmpty()) {
            CODE_037_FORBIDDEN
        } else if (code != CODE_000_SUCCESS) {
            code
        } else {
            logger.info {
                "User $username has permission $permission over the resource " +
                "$resourceName through role ${roleHavingPermissionOnResource.first()}"
            }
            CODE_000_SUCCESS
        }
    }



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollback the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0
     *
     * In this implementation, clear [addedPolicies]
     */
    override fun lock(): OutcomeCode {
        return if (locks == 0) {
            logger.info { "Locking the status of the XACML policy" }
            client = HttpClient(CIO) {
                // TODO configure this, as for now the client accepts all certificates
                engine {
                    https {
                        trustManager = object: X509TrustManager {
                            override fun checkClientTrusted(p0: Array<out X509Certificate>?, p1: String?) { }
                            override fun checkServerTrusted(p0: Array<out X509Certificate>?, p1: String?) { }
                            override fun getAcceptedIssuers(): Array<X509Certificate>? = null
                        }
                    }
                }
                install(ContentNegotiation) {
                    xml(format = XML { } )
                }
                expectSuccess = false
                /** To accept all cookies */
                install(HttpCookies)
            }
            addedPolicies.clear()
            locks++
            CODE_000_SUCCESS
        } else if (locks > 0) {
            locks++
            logger.debug { "Increment lock number to $locks" }
            CODE_000_SUCCESS
        } else {
            logger.warn { "Lock number is negative ($locks)" }
            CODE_031_LOCK_CALLED_IN_INCONSISTENT_STATUS
        }
    }

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollback to the previous status only when [locks] becomes 0
     *
     * In this implementation, delete the policies in [addedPolicies]
     * and clear it
     */
    override fun rollback(): OutcomeCode {
        return when {
            locks == 1 -> {
                logger.info { "Rollback the status of the XACML policy" }
                locks--
                var code: OutcomeCode = CODE_000_SUCCESS
                addedPolicies.forEach {
                    it.value.forEach { versionNumber ->
                        if (code == CODE_000_SUCCESS) {
                            code = deletePolicySetByID(
                                policySetID = it.key,
                                versionNumber = versionNumber
                            )
                        }
                    }
                }
                // TODO how to rollback if one delete goes wrong?
                addedPolicies.clear()
                code
            }
            locks > 1 -> {
                locks--
                logger.debug { "Decrement lock number to $locks" }
                CODE_000_SUCCESS
            }
            else -> {
                logger.warn { "AC rollback number is zero or negative ($locks)" }
                CODE_033_ROLLBACK_CALLED_IN_INCONSISTENT_STATUS
            }
        }
    }

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0
     *
     * In this implementation, clear [addedPolicies]
     */
    override fun unlock(): OutcomeCode {
        return when {
            locks == 1 -> {
                logger.info { "Unlocking the status of the XACML policy" }
                locks--
                addedPolicies.clear()
                client!!.close()
                client = null
                CODE_000_SUCCESS
            }
            locks > 1 -> {
                locks--
                logger.debug { "Decrement lock number to $locks" }
                CODE_000_SUCCESS
            }
            else -> {
                logger.warn { "AC unlock number is zero or negative ($locks)" }
                CODE_032_UNLOCK_CALLED_IN_INCONSISTENT_STATUS
            }
        }
    }



    /**
     * Retrieve the domain CryptoAC ID
     * from the XACML server and store
     * it in [domainCryptoACID]. Return the
     * ID or the eventual error code
     */
    fun getDomainCryptoACID(): CodeString {
        return runBlocking {
            val xacmlDomainsURL = "${HTTPS}${xacmlBaseAPI}${API.XACML_AUTHZFORCE}?externalId=${externalDomainCryptoACID}"
            logger.debug { "Get CryptoAC domain ID sending a GET request to $xacmlDomainsURL" }
            val xacmlResponse = client!!.get {
                header("Accept", "application/xml")
                url(xacmlDomainsURL)
            }
            logger.debug { "Received response from the XACML server" }
            if (xacmlResponse.status != HttpStatusCode.OK) {
                val errorMessage = xacmlResponse.bodyAsText()
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}, error: $errorMessage)"
                }
                CodeString(
                    code = CODE_079_XACML_DOMAIN_QUERY
                )
            } else {
                val responseString = xacmlResponse.bodyAsText()
                val link = XML { }.decodeFromString<XACMLDomainLinks>(responseString).link?.firstOrNull()
                if (link == null) {
                    CodeString()
                } else {
                    domainCryptoACID = link.href
                    CodeString(
                        string = domainCryptoACID
                    )
                }
            }
        }
    }

    /**
     * Retrieve all the policy sets in the
     * [domainID] from the XACML server
     */
    fun getPolicySetsInDomain(
        domainID: String = domainCryptoACID
    ): XACMLPolicySetLinksCode {
        return runBlocking {
            val xacmlPolicySetsURL = "${HTTPS}${xacmlBaseAPI}${API.XACML_AUTHZFORCE}${domainID}/pap/policies"
            logger.debug { "Get all policy sets sending a GET request to $xacmlPolicySetsURL" }
            val xacmlResponse = client!!.get {
                header("Accept", "application/xml")
                url(xacmlPolicySetsURL)
            }
            logger.debug { "Received response from the XACML server" }
            if (xacmlResponse.status != HttpStatusCode.OK) {
                val errorMessage = xacmlResponse.bodyAsText()
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}, error: $errorMessage)"
                }
                XACMLPolicySetLinksCode(
                    code = CODE_079_XACML_DOMAIN_QUERY
                )
            } else {
                val responseString = xacmlResponse.bodyAsText()
                val policySets = XML { }.decodeFromString<XACMLPolicySetLinks>(responseString).link
                XACMLPolicySetLinksCode(
                    policySetsLinks = policySets
                )
            }
        }
    }

    /**
     * Retrieve all role names in the
     * [domainID] from the XACML server
     */
    private fun getRoleNamesInDomain(
        domainID: String = domainCryptoACID
    ): CodeStrings {
        logger.debug { "Get all role names in the domain $domainID" }

        val policySetsCode = getPolicySetsInDomain(
            domainID = domainID
        )
        return if (policySetsCode.code != CODE_000_SUCCESS) {
            CodeStrings(
                code = policySetsCode.code
            )
        } else {
            val roleNames = hashSetOf<String>()
            policySetsCode.policySetsLinks!!.forEach {
                /** We exclude the root policy sets */
                if (it.href != rootDefaultPolicySetId && it.href != rootPolicySetIdCryptoAC) {
                    roleNames.add(
                        getRoleNameFromPolicySetID(
                            policySetID = it.href
                        )
                    )
                }
            }
            CodeStrings(
                strings = roleNames
            )
        }
    }

    /**
     * Retrieve the policy set with the
     * [policySetID] and [version] from
     * the XACML server
     */
    private fun getPolicySetByID(
        policySetID: String,
        version: String = "latest"
    ): CodeString {
        return runBlocking {
            val xacmlPolicySetURL = "${HTTPS}${xacmlBaseAPI}${API.XACML_AUTHZFORCE}${domainCryptoACID}/pap/policies/${policySetID}/${version}"
            logger.debug { "Get the policy set sending a GET request to $xacmlPolicySetURL" }
            val xacmlResponse = client!!.get {
                header("Accept", "application/xml")
                url(xacmlPolicySetURL)
            }
            logger.debug { "Received response from the XACML server" }
            if (xacmlResponse.status == HttpStatusCode.NotFound) {
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}), probably the policy set does not exist"
                }
                CodeString(
                    code = CODE_081_XACML_PAP_POLICY_NOT_FOUND
                )
            } else if (xacmlResponse.status != HttpStatusCode.OK) {
                val errorMessage = xacmlResponse.bodyAsText()
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}, error: $errorMessage)"
                }
                CodeString(
                    code = CODE_079_XACML_DOMAIN_QUERY
                )
            } else {
                CodeString(
                    string = xacmlResponse.bodyAsText()
                )
            }
        }
    }

    /**
     * Retrieve the permission policy set
     * of role [roleName] and [version] from
     * the XACML server
     */
    private fun getPPSByRole(
        roleName: String,
        version: String = "latest"
    ): XACMLPPSCode {
        val policySetCode = getPolicySetByID(
            policySetID = getPPSIDByRole(
                roleName = roleName
            ),
            version = version
        )
        return if (policySetCode.code != CODE_000_SUCCESS) {
            if (policySetCode.code == CODE_081_XACML_PAP_POLICY_NOT_FOUND) {
                XACMLPPSCode(
                    code = CODE_005_ROLE_NOT_FOUND
                )
            } else {
                XACMLPPSCode(
                    code = policySetCode.code
                )
            }
        } else {
            XACMLPPSCode(
                xacmlPPS = XML { }.decodeFromString<XACMLPPS>(policySetCode.string!!)
            )
        }
    }

    /**
     * Retrieve the role policy set
     * of role [roleName] and [version] from
     * the XACML server
     */
    private fun getREPSByRole(
        roleName: String,
        version: String = "latest"
    ): XACMLREPSCode {
        val policySetCode = getPolicySetByID(
            policySetID = getREPSIDByRole(
                roleName = roleName
            ),
            version = version
        )
        return if (policySetCode.code != CODE_000_SUCCESS) {
            if (policySetCode.code == CODE_081_XACML_PAP_POLICY_NOT_FOUND) {
                XACMLREPSCode(
                    code = CODE_005_ROLE_NOT_FOUND
                )
            } else {
                XACMLREPSCode(
                    code = policySetCode.code
                )
            }
        } else {
            XACMLREPSCode(
                xacmlREPS = XML { }.decodeFromString<XACMLREPS>(policySetCode.string!!)
            )
        }
    }

    /**
     * Retrieve the root policy set
     * from the XACML server
     */
    fun getRootPolicySet(
        version: String = "latest"
    ): XACMLPolicySetRootCode {
        val policySetCode = getPolicySetByID(
            policySetID = rootPolicySetIdCryptoAC,
            version = version
        )
        return if (policySetCode.code != CODE_000_SUCCESS) {
            XACMLPolicySetRootCode(
                code = policySetCode.code
            )
        } else {
            XACMLPolicySetRootCode(
                xacmlPolicySetRoot = XML { }.decodeFromString<XACMLPolicySetRoot>(policySetCode.string!!)
            )
        }
    }

    /**
     * Delete ([username], [roleName]) from
     * UR. Null values are wildcards. At least
     * one value is required
     */
    private fun revokeUserFromRoleWildcard(
        username: String? = null,
        roleName: String? = null
    ): OutcomeCode {
        logger.info {
            "Deleting UR assignments " +
            (if (username != null) "for user $username " else "") +
            if (roleName != null) "for role $roleName " else ""
        }

        /**
         * At least one parameter has to be specified, otherwise
         * the delete operation would delete all assignments
         */
        if (username == null && roleName == null) {
            val message = "No arguments were provided for delete operation"
            logger.error { message }
            throw IllegalArgumentException(message)
        }

        logger.debug { "Getting all roles involved in the revocation" }
        val roleNamesCode = getRoleNamesInDomain()
        if (roleNamesCode.code != CODE_000_SUCCESS) {
            return roleNamesCode.code
        }
        /** Check that the role exists */
        if (roleName != null && !roleNamesCode.strings!!.contains(roleName)) {
            logger.debug { "Role $roleName does not exist" }
            return CODE_041_UR_ASSIGNMENTS_NOT_FOUND
        }
        val roleNames = if (roleName != null) {
            hashSetOf(roleName)
        } else {
            roleNamesCode.strings!!
        }

        logger.debug { "Getting all REPSs of involved roles" }
        var code = CODE_000_SUCCESS
        val repss = hashSetOf<XACMLREPS>()
        run error@{
            roleNames.forEach {
                val currentREPSCODE = getREPSByRole(
                    roleName = it
                )
                code = currentREPSCODE.code
                if (code != CODE_000_SUCCESS) {
                    return@error
                }
                repss.add(currentREPSCODE.xacmlREPS!!)
            }
        }
        if (code != CODE_000_SUCCESS) {
            return code
        }


        logger.debug { "For each REPS, revoke the involved users" }
        val modifiedREPSs = hashSetOf<XACMLREPS>()
        repss.forEach { reps ->

            val usernames = if (username != null) {
                hashSetOf(username)
            } else {
                reps.getUsersAssignedToRole()
            }

            var modified = false
            usernames.forEach { username ->
                if (reps.revokeUserFromRole(username)) {
                    modified = true
                }
            }
            if (modified) {
                modifiedREPSs.add(reps)
            }
        }

        logger.debug { "Push back all modified REPS" }
        run error@ {
            modifiedREPSs.forEach {
                it.updatePolicySetVersionNumber()
                code = addOrUpdatePolicySet(
                    policySet = XML{ }.encodeToString(it)
                )
                if (code != CODE_000_SUCCESS) {
                    return@error
                } else {
                    addedPolicies.getOrPut(it.policySetId) { hashSetOf() }.add(it.version)
                }
            }
        }
        if (modifiedREPSs.isEmpty()) {
            code = CODE_041_UR_ASSIGNMENTS_NOT_FOUND
        }

        return code
    }

    /**
     * Delete ([roleName], (-, [resourceName]))
     * from PA. Null values are wildcards. At
     * least one value is required
     */
    private fun revokePermissionFromRoleWildcard(
        roleName: String? = null,
        resourceName: String? = null
    ): OutcomeCode {
        logger.info {
            "Deleting PA assignments " +
            (if (roleName != null) "for role $roleName " else "") +
            if (resourceName != null) "for resource $resourceName " else ""
        }

        /**
         * At least one parameter has to be specified, otherwise
         * the delete operation would delete all assignments
         */
        if (roleName == null && resourceName == null) {
            val message = "No arguments were provided for delete operation"
            logger.error { message }
            throw IllegalArgumentException(message)
        }


        logger.debug { "Getting all roles involved in the revocation" }
        val roleNamesCode = getRoleNamesInDomain()
        if (roleNamesCode.code != CODE_000_SUCCESS) {
            return roleNamesCode.code
        }
        /** Check that the role exists */
        if (roleName != null && !roleNamesCode.strings!!.contains(roleName)) {
            logger.debug { "Role $roleName does not exist" }
            return CODE_042_PA_ASSIGNMENTS_NOT_FOUND
        }
        val roleNames = if (roleName != null) {
            hashSetOf(roleName)
        } else {
            roleNamesCode.strings!!.apply {
                /** Remove the admin role */
                remove(ADMIN)
            }
        }

        logger.debug { "Getting all PPS of involved roles" }
        var code = CODE_000_SUCCESS
        val ppss = hashSetOf<XACMLPPS>()
        run error@{
            roleNames.forEach {
                val currentPPSCODE = getPPSByRole(
                    roleName = it
                )
                code = currentPPSCODE.code
                if (code != CODE_000_SUCCESS) {
                    return@error
                }
                ppss.add(currentPPSCODE.xacmlPPS!!)
            }
        }
        if (code != CODE_000_SUCCESS) {
            return code
        }


        logger.debug { "For each PPS, revoke the permission over the involved resource" }
        val modifiedPPSs = hashSetOf<XACMLPPS>()
        ppss.forEach { pps ->

            val resourceNames = if (resourceName != null) {
                hashSetOf(resourceName)
            } else {
                pps.getPermissionsAssignedToRole().keys
            }

            resourceNames.forEach { resourceName ->
                if (pps.revokePermissionFromRole(resourceName)) {
                    modifiedPPSs.add(pps)
                }
            }
        }

        logger.debug { "Push back all modified PPS" }
        run error@ {
            modifiedPPSs.forEach {
                it.updatePolicySetVersionNumber()
                code = addOrUpdatePolicySet(
                    policySet = XML{ }.encodeToString(it)
                )
                if (code != CODE_000_SUCCESS) {
                    return@error
                } else {
                    addedPolicies.getOrPut(it.policySetId) { hashSetOf() }.add(it.version)
                }
            }
        }

        if (modifiedPPSs.isEmpty()) {
            code = CODE_042_PA_ASSIGNMENTS_NOT_FOUND
        }
        return code
    }

    /**
     * Send a request to add or update the policy set in
     * the XACML server and return the outcome code
     * (the API to add and update policies is the same)
     */
    fun addOrUpdatePolicySet(
        policySet: String,
    ): OutcomeCode {
        var code = CODE_000_SUCCESS
        runBlocking {
            val xacmlPAPURL = "${HTTPS}${xacmlBaseAPI}${API.XACML_AUTHZFORCE}${domainCryptoACID}/pap/policies"
            logger.info { "Adding or updating the XACML policy set sending a POST request to $xacmlPAPURL" }
            val xacmlResponse = client!!.post {
                header("Accept", "application/xml")
                header("Content-Type", "application/xml;charset=UTF-8")
                url(xacmlPAPURL)
                setBody(policySet)
            }
            logger.debug { "Received response from the XACML server" }
            if (xacmlResponse.status != HttpStatusCode.OK) {
                val errorMessage = xacmlResponse.bodyAsText()
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}, error: $errorMessage)"
                }
                code = CODE_080_XACML_PAP
            }
        }
        return code
    }

    /**
     * Send a request to delete the policy set with
     * the given [policySetID] and [versionNumber]
     * in the XACML server and return the outcome code
     */
    fun deletePolicySetByID(
        policySetID: String,
        versionNumber: String = "latest",
    ): OutcomeCode {
        var code = CODE_000_SUCCESS
        runBlocking {
            val xacmlPAPURL = "${HTTPS}${xacmlBaseAPI}${API.XACML_AUTHZFORCE}${domainCryptoACID}/pap/policies/$policySetID/$versionNumber"
            logger.info { "Deleting the XACML policy set sending a DELETE request to $xacmlPAPURL" }
            val xacmlResponse = client!!.delete {
                header("Accept", "application/xml")
                url(xacmlPAPURL)
            }
            logger.debug { "Received response from the XACML server" }
            if (
                xacmlResponse.status == HttpStatusCode.InternalServerError ||
                xacmlResponse.status == HttpStatusCode.NotFound
            ) {
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}), probably the policy set does not exist"
                }
                code = CODE_081_XACML_PAP_POLICY_NOT_FOUND
            } else if (xacmlResponse.status != HttpStatusCode.OK) {
                val errorMessage = xacmlResponse.bodyAsText()
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}, error: $errorMessage)"
                }
                code = CODE_080_XACML_PAP
            }
        }
        return code
    }

    private fun assignROrWPermissionToRole(
        rolePPS: XACMLPPS,
        roleName: String,
        permission: PermissionType,
        resourceName: String,
    ): OutcomeCode {
        /**
         * Check whether [roleName] already
         * has permission over [resourceName]
         */
        val rolePermissions = rolePPS.getPermissionsAssignedToRole()
        if (rolePermissions[resourceName]?.contains(permission) == true) {
            logger.warn {
                "PA assignment between role $roleName " +
                "and resource $resourceName for permission" +
                " $permission already exists"
            }
            return CODE_063_PA_ASSIGNMENTS_ALREADY_EXISTS
        }

        logger.info {
            "Updating the REPS policy with the new PA " +
            "assignment (role $roleName, resource $resourceName)"
        }
        rolePPS.addPermissionToRole(
            resourceName = resourceName,
            permission = permission
        )
        rolePPS.updatePolicySetVersionNumber()

        val code = addOrUpdatePolicySet(
            policySet = XML{ }.encodeToString(rolePPS)
        )
        if (code == CODE_000_SUCCESS) {
            addedPolicies.getOrPut(rolePPS.policySetId) { hashSetOf() }.add(rolePPS.version)
        }
        return code
    }

    /**
     * Send the [xacmlRequest] to the PDD. Return CODE_000_SUCCESS
     * if the PDP returned 'permit', CODE_083_XACML_PDP_UNAUTHORIZED
     * if the PDP returned 'deny' or 'notApplicable' or another code
     * in case of errors
     */
    private fun sendRequestToPDP(
        xacmlRequest: XACMLRequest
    ): OutcomeCode {
        var code = CODE_000_SUCCESS
        runBlocking {
            val xacmlPDPURL = "${HTTPS}${xacmlBaseAPI}${API.XACML_AUTHZFORCE}${domainCryptoACID}/pdp"
            val xacmlResponse = client!!.post {
                header("Accept", "application/xml")
                header("Content-Type", "application/xml;charset=UTF-8")
                url(xacmlPDPURL)
                setBody(xacmlRequest)
            }
            logger.debug { "Received response from the XACML server" }
            if (xacmlResponse.status != HttpStatusCode.OK) {
                val errorMessage = xacmlResponse.bodyAsText()
                logger.warn {
                    "Received error code from the XACML server (status: " +
                    "${xacmlResponse.status}, error: $errorMessage)"
                }
                code = CODE_082_XACML_PDP
            } else {
                val resultString = xacmlResponse.bodyAsText()
                val result = XML { }.decodeFromString<XACMLResponse>(resultString)
                if (result.result.decision.decisionValue == "Permit") {
                    logger.debug { "User is authorized" }
                } else {
                    logger.debug { "User is not authorized" }
                    code = CODE_083_XACML_PDP_UNAUTHORIZED
                }
            }
        }
        return code
    }
}
