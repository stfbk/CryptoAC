package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.SERVER.CORE

/**
 * The APIs exposed by CryptoAC.
 * Required parameters are rendered as path parameters.
 * Optional parameters are rendered as query parameters
 */
object API {

    /** (any mode) the HTTP protocol. TODO this should removed and only HTTPS should be used*/
    const val HTTP = "http://"

    /** (any mode) the HTTPS protocol */
    const val HTTPS = "https://"

    /** (any mode) the v1 of the APIs */
    private const val VERSION1 = "/v1/"

    /** (any mode) the current version of the APIs */
    private const val CURRENT_VERSION = VERSION1

    /** (CryptoAC) base URL for CryptoAC APIs */
    const val CRYPTOAC = "${CURRENT_VERSION}CryptoAC/"

    /** (CryptoAC RM mode) base URL for rm APIs */
    const val RM = "${CURRENT_VERSION}rm/"

    /** (CryptoAC DM mode) base URL for dm APIs */
    const val DM = "${CURRENT_VERSION}dm/"

    /** (OPA) base URL for OPA APIs */
    const val OPA = "/v1/"

    
    /** (CryptoAC mode) base URL for user related APIs */
    const val USERS = "users/{$CORE}/"

    /** (CryptoAC mode) base URL for role related APIs */
    const val ROLES = "roles/{$CORE}/"

    /** (CryptoAC mode) base URL for file related APIs */
    const val FILES = "files/{$CORE}/"

    /** (CryptoAC mode) base URL for role tuple related APIs */
    const val ASSIGNMENTS = "assignments/{$CORE}/"

    /** (CryptoAC mode) base URL for file tuple related APIs */
    const val PERMISSIONS = "permissions/{$CORE}/"

    /** (CryptoAC mode) base URL for users' profile */
    const val PROFILES = "${CURRENT_VERSION}profile/{$CORE}/"


    /** (CryptoAC mode) get the login page */
    const val LOGIN = "/login/"

    /** (CryptoAC mode) log out the authenticated user */
    const val LOGOUT = "/logout/"



    /** (OPA) API for managing the rbac policy in OPA */
    const val OPA_RBAC_POLICY = "${OPA}policies/rbac"

    /** (OPA) API for managing the rbac data in OPA */
    const val OPA_RBAC_DATA = "${OPA}data/rbac"

    /** (OPA) API for querying the rbac policy in OPA */
    const val OPA_RBAC_QUERY = "${OPA}data/app/rbac/allow"
}
