package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.API.ASSIGNMENTS
import eu.fbk.st.cryptoac.API.CRYPTOAC
import eu.fbk.st.cryptoac.API.RESOURCES
import eu.fbk.st.cryptoac.API.LOGIN
import eu.fbk.st.cryptoac.API.LOGOUT
import eu.fbk.st.cryptoac.API.PERMISSIONS
import eu.fbk.st.cryptoac.API.PROFILES
import eu.fbk.st.cryptoac.API.ROLES
import eu.fbk.st.cryptoac.API.USERS
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.conflict
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.forbidden
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.internalError
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.notFound
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.ok
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.unauthorized
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.unprocessableEntity
import eu.fbk.st.cryptoac.SERVER.CORE
import eu.fbk.st.cryptoac.SERVER.ENFORCEMENT
import eu.fbk.st.cryptoac.SERVER.RESOURCE_CONTENT
import eu.fbk.st.cryptoac.SERVER.RESOURCE_NAME
import eu.fbk.st.cryptoac.SERVER.PERMISSION
import eu.fbk.st.cryptoac.SERVER.ROLE_NAME
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.core.CoreFactory
import eu.fbk.st.cryptoac.model.unit.UnitElementStatus
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreRBAC
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.crypto.CryptoPKEFactory
import eu.fbk.st.cryptoac.server.LoginController.Companion.isUserLoggedIn
import eu.fbk.st.cryptoac.server.LoginController.Companion.login
import eu.fbk.st.cryptoac.server.LoginController.Companion.logout
import eu.fbk.st.cryptoac.server.SessionController.Companion.addSocketToSession
import eu.fbk.st.cryptoac.server.SessionController.Companion.createSession
import eu.fbk.st.cryptoac.server.SessionController.Companion.deinitAllCores
import eu.fbk.st.cryptoac.server.SessionController.Companion.doesSessionExists
import eu.fbk.st.cryptoac.server.SessionController.Companion.getOrCreateCore
import eu.fbk.st.cryptoac.server.SessionController.Companion.getSessionUsername
import eu.fbk.st.cryptoac.server.SessionController.Companion.setUserCore
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.sessions.*
import io.ktor.server.websocket.*
import io.ktor.util.*
import io.ktor.websocket.*
import kotlinx.coroutines.channels.ClosedReceiveChannelException
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import mu.KotlinLogging
import java.io.File
import java.io.InputStream
import java.lang.IllegalArgumentException
import java.util.*
import java.util.concurrent.ConcurrentHashMap
import kotlin.collections.LinkedHashSet

private val logger = KotlinLogging.logger {}

/** To synchronize login/logout requests from the same user */
// TODO currently, we need to synchronize also GET requests, as
//  otherwise there may be issues with the lock-unlock mechanism
//  (e.g., it may happen that "A lock has been set but not released",
//  i.e., two simultaneous requests enter in the lock or unlock
//  functions at the same time). We should improve this
val logUsersMutexes: ConcurrentHashMap<String, Mutex> = ConcurrentHashMap()



/** Routes related to the web app */
fun Route.velocityRouting() {

    /** Get the web app */
    get("/") {
        call.respondText(
            this::class.java.classLoader.getResource("index.html")!!.readText(),
            ContentType.Text.Html
        )
    }

    static("/") {
        resources("")
    }
}

/**
 * Routes related to users' profiles; create (post),
 * read (get), update (patch), delete (delete)
 */
fun Route.profileRouting() {

    /** Wrap all routes related to the users' profiles */
    route(PROFILES) {

        /**
         * The admin can get the profile of all users,
         * while a user can only get her own profile
         */
        get("{$USERNAME}") {

            // TODO implement button in web interface to
            //  download user's profile as json

            if (!checkPreconditions(call, checkTheProfile = true, checkIfAdmin = false)) {
                return@get
            }

            val userData = call.attributes[loggedUserDataKey]
            val loggedUser = userData.loggedUser!!
            val coreType = userData.coreType!!

            val requestedUsername = call.parameters[USERNAME]
                ?: return@get unprocessableEntity(
                    call,
                    "Missing $USERNAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS
                )

            logger.info {
                "User $loggedUser is querying profile of " +
                "user $requestedUsername for core $coreType"
            }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)!!
            if (loggedUser == requestedUsername) {
                call.respond(loggedUserParams)
            } else if (loggedUser == ADMIN && loggedUserParams.user.isAdmin) {
                val requestedUserParams = ProfileManager.loadProfile(requestedUsername, coreType)
                if (requestedUserParams == null) {
                    val message = "Profile of user $requestedUsername not found"
                    logger.info { message }
                    return@get notFound(
                        call,
                        message,
                        OutcomeCode.CODE_039_PROFILE_NOT_FOUND
                    )
                } else {
                    call.respond(requestedUserParams)
                }
            } else {
                logger.warn { "User $loggedUser is not authorized to get profile of user $requestedUsername" }
                return@get forbidden(
                    call,
                    "Cannot get profile of user $requestedUsername",
                    OutcomeCode.CODE_037_FORBIDDEN
                )
            }
        }

        /**
         * The admin can delete the profile of all users,
         * while a user can only delete her own profile,
         * if present. This API does not delete the user
         * from the access control policy
         */
        delete("{$USERNAME}") {

            // TODO implement button in web interface

            if (!checkPreconditions(call, checkTheProfile = true, checkIfAdmin = false)) {
                return@delete
            }

            val userData = call.attributes[loggedUserDataKey]
            val loggedUser = userData.loggedUser!!
            val coreType = userData.coreType!!

            val requestedUsername = call.parameters[USERNAME]
                ?: return@delete unprocessableEntity(
                    call,
                    "Missing $USERNAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS
                )

            logger.info {
                "User $loggedUser is deleting profile of " +
                "user $requestedUsername for core $coreType"
            }

            /**
             * Proceed only if the admin is deleting
             * the profile of another user or the
             * user herself is deleting her profile
             */
            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)!!
            return@delete if (
                (loggedUser == requestedUsername) ||
                (loggedUser == ADMIN && loggedUserParams.user.isAdmin)
            ) {
                // TODO note that this allows an admin to delete her profile
                if (ProfileManager.deleteProfile(requestedUsername, coreType)) {
                    ok(call)
                } else {
                    notFound(
                        call,
                        "Profile of user $requestedUsername not found",
                        OutcomeCode.CODE_039_PROFILE_NOT_FOUND
                    )
                }
            } else {
                logger.warn { "User $loggedUser is not authorized to delete profile of user $requestedUsername" }
                return@delete forbidden(
                    call,
                    "Cannot delete profile of user $requestedUsername",
                    OutcomeCode.CODE_037_FORBIDDEN
                )
            }
        }

        /**
         * Create and save a profile for a user checking
         * the consistency of the given data and possibly
         * generating cryptographic keys. If the user has
         * yet to be initialized, call the initialization
         * function
         */
        post {

            if (!checkPreconditions(call, checkTheProfile = false, checkIfAdmin = false)) {
                return@post
            }

            val userData = call.attributes[loggedUserDataKey]
            val loggedUser = userData.loggedUser!!
            val coreType = userData.coreType!!

            logger.info { "User $loggedUser is creating a profile for core $coreType" }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)

            /** Get the core parameters from the request */
            val coreParameters: CoreParameters = call.receive()
            val requestedUsername = coreParameters.user.name
            val requestedCore = coreParameters.coreType

            if (
                loggedUser == requestedUsername ||
                (loggedUser == ADMIN && loggedUserParams?.user?.isAdmin == true)
            ) {

                logger.info {
                    "The profile to be created is for a user with name " +
                    "$requestedUsername and core $requestedCore"
                }

                if (coreParameters.user.isAdmin && requestedUsername != ADMIN) {
                    return@post unprocessableEntity(
                        call,
                        "The given username ($requestedUsername) should be $ADMIN",
                        OutcomeCode.CODE_018_SERVICE_CONFIGURATION_PARAMETERS
                    )
                }

                if (!coreParameters.checkParameters()) {
                    return@post unprocessableEntity(
                        call,
                        "Parameters were not validated by regular expressions",
                        OutcomeCode.CODE_018_SERVICE_CONFIGURATION_PARAMETERS
                    )
                }

                /**
                 * We generate cryptographic keys and invoke the
                 * initialization function only if the user has
                 * an incomplete status, otherwise we just save
                 * the profile
                 */
                if (coreParameters.user.status == UnitElementStatus.INCOMPLETE) {

                    logger.info { "User $requestedUsername marked as incomplete, initializing" }

                    val cryptoPKEObject = CryptoPKEFactory.getCrypto(coreParameters.cryptoType)
                    val asymEncKeys = cryptoPKEObject.generateAsymEncKeys()
                    val asymSigKeys = cryptoPKEObject.generateAsymSigKeys()
                    val newUser = User(
                        requestedUsername,
                        asymEncKeys = AsymKeys(
                            public = asymEncKeys.public.encoded.encodeBase64(),
                            private = asymEncKeys.private.encoded.encodeBase64(),
                            keysType = AsymKeysType.ENC
                        ),
                        asymSigKeys = AsymKeys(
                            public = asymSigKeys.public.encoded.encodeBase64(),
                            private = asymSigKeys.private.encoded.encodeBase64(),
                            keysType = AsymKeysType.SIG
                        ),
                        isAdmin = coreParameters.user.isAdmin
                    )
                    newUser.token = coreParameters.user.token
                    coreParameters.user = newUser
                    val core = CoreFactory.getCore(coreParameters)

                    val initCode = if (coreParameters.user.isAdmin) {
                        core.configureServices()
                    } else {
                        core.initUser()
                    }

                    if (initCode != OutcomeCode.CODE_000_SUCCESS) {
                        val message = "Internal error while initialising the user"
                        logger.warn { "$message (code $initCode)" }
                        return@post internalError(
                            call,
                            message,
                            initCode
                        )
                    }
                } else {
                    logger.info { "No need to initialize user $requestedUsername" }
                }

                /** Finally, save the profile */
                ProfileManager.saveProfile(requestedUsername, coreParameters)

                /**
                 * If the user is logged-in and with a
                 * profile, store the core for the user
                 */
                if (requestedUsername == loggedUser) {
                    setUserCore(loggedUser, CoreFactory.getCore(coreParameters))
                }

                return@post ok(call)
            } else {
                logger.warn { "User $loggedUser is not authorized to create profile for user $requestedUsername" }
                return@post forbidden(
                    call,
                    "Cannot create profile of user $requestedUsername",
                    OutcomeCode.CODE_037_FORBIDDEN,
                )
            }
        }

        /**
         * The admin can update the profile of all users,
         * while a user can only update her own profile
         */
        patch {

            if (!checkPreconditions(call, checkTheProfile = true, checkIfAdmin = false)) {
                return@patch
            }

            val userData = call.attributes[loggedUserDataKey]
            val loggedUser = userData.loggedUser!!
            val coreType = userData.coreType!!

            logger.info { "User $loggedUser is updating a profile for core $coreType" }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)!!

            /** Get the core parameters from the request */
            val updatedCoreParameters: CoreParameters = call.receive()
            val requestedUsername = updatedCoreParameters.user.name
            val requestedCore = updatedCoreParameters.coreType

            if (
                loggedUser == requestedUsername ||
                (loggedUser == ADMIN && loggedUserParams.user.isAdmin)
            ) {

                logger.info {
                    "The profile to be updated is for a user with name " +
                        "$requestedUsername and core $requestedCore"
                }

                if (!updatedCoreParameters.checkParameters()) {
                    return@patch unprocessableEntity(
                        call,
                        "Parameters were not validated by regular expressions",
                        OutcomeCode.CODE_018_SERVICE_CONFIGURATION_PARAMETERS
                    )
                }

                val userParameters = if (loggedUser == requestedUsername) {
                    loggedUserParams
                } else {
                    ProfileManager.loadProfile(requestedUsername, coreType)
                }
                if (userParameters == null) {
                    val message = "Profile of user $requestedUsername not found"
                    logger.info { message }
                    return@patch notFound(
                        call,
                        message,
                        OutcomeCode.CODE_039_PROFILE_NOT_FOUND
                    )
                }

                userParameters.update(updatedCoreParameters)

                /** Finally, save the profile and update the core of the user */
                ProfileManager.updateProfile(requestedUsername, userParameters)
                setUserCore(requestedUsername, CoreFactory.getCore(userParameters))

                return@patch ok(call)
            } else {
                logger.warn { "User $loggedUser is not authorized to update profile of user $requestedUsername" }
                return@patch forbidden(
                    call,
                    "Cannot update profile of user $requestedUsername",
                    OutcomeCode.CODE_037_FORBIDDEN,
                )
            }
        }
    }
}

/** Routes related to admin's access control policy management */
fun Route.adminRouting() {

    /** Wrap all routes related to CryptoAC */
    route(CRYPTOAC) {

        route(USERS) {

            /**
             * Get the list of currently
             * existing users
             */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                if (!checkPreconditions(call)) {
                    return@get
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                logger.info { "User $loggedUser is retrieving the list of users" }

                /** Get the (visible) users */
                val getUsersResult = coreObject.mutex.withLock {
                    coreObject.getUsers()
                }
                if (getUsersResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(
                        call,
                        "Error while getting users",
                        getUsersResult.code
                    )
                }
                call.respond(getUsersResult.users ?: hashSetOf())
            }

            /**
             * Create a new user in the access control policy
             * and return the configuration parameters
             */
            post {

                if (!checkPreconditions(call)) {
                    return@post
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val newUsername = call.receiveParameters()[USERNAME]
                    ?: return@post unprocessableEntity(
                        call,
                        "Missing $USERNAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to create " +
                    "user $newUsername for core $coreType"
                }

                /** Create the new user */
                val addUserResult = coreObject.mutex.withLock {
                    coreObject.addUser(newUsername)
                }
                if (addUserResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@post internalError(
                        call,
                        "Error while creating user $newUsername",
                        addUserResult.code
                    )
                }
                val parameters = addUserResult.parameters
                call.respond(parameters!!)
            }

            /**
             * Delete a user from the
             * access control policy
             */
            delete("{$USERNAME}") {

                if (!checkPreconditions(call)) {
                    return@delete
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val usernameToDelete = call.parameters[USERNAME]
                    ?: return@delete unprocessableEntity(
                        call,
                        "Missing $USERNAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to delete " +
                    "user $usernameToDelete for core $coreType"
                }

                /** Delete the user  */
                val deleteUserCode = coreObject.mutex.withLock {
                    coreObject.deleteUser(usernameToDelete)
                }
                if (deleteUserCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@delete internalError(
                        call,
                        "Error while deleting user $usernameToDelete",
                        deleteUserCode
                    )
                }
                call.respond(deleteUserCode)
            }
        }

        route(ROLES) {

            /**
             * Get the list of currently
             * existing roles
             */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                if (!checkPreconditions(call)) {
                    return@get
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                logger.info { "User $loggedUser is retrieving the list of roles" }

                /** Get the (visible) roles */

                val getRolesResult = coreObject.mutex.withLock {
                    coreObject.getRoles()
                }
                if (getRolesResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(
                        call,
                        "Error while getting roles",
                        getRolesResult.code
                    )
                }
                call.respond(getRolesResult.roles ?: hashSetOf())
            }

            /**
             * Create a new role in the
             * access control policy
             */
            post {

                if (!checkPreconditions(call)) {
                    return@post
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val newRoleName = call.receiveParameters()[ROLE_NAME]
                    ?: return@post unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to create " +
                        "role $newRoleName for core $coreType"
                }

                /** Create the new role  */
                val addRoleCode = coreObject.mutex.withLock {
                    coreObject.addRole(newRoleName)
                }
                if (addRoleCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@post internalError(
                        call,
                        "Error while creating role $newRoleName",
                        addRoleCode
                    )
                }
                call.respond(addRoleCode)
            }

            /**
             * Delete a role from the
             * access control policy
             */
            delete("{$ROLE_NAME}") {

                if (!checkPreconditions(call)) {
                    return@delete
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val roleNameToDelete = call.parameters[ROLE_NAME]
                    ?: return@delete unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to delete " +
                        "role $roleNameToDelete for core $coreType"
                }

                /** Delete the role  */
                val deleteRoleCode = coreObject.mutex.withLock {
                    coreObject.deleteRole(roleNameToDelete)
                }
                if (deleteRoleCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@delete internalError(
                        call,
                        "Error while deleting role $roleNameToDelete",
                        deleteRoleCode
                    )
                }
                call.respond(deleteRoleCode)
            }
        }

        route(RESOURCES) {

            /**
             * Get the list of currently
             * existing resources
             */
            get {
                // TODO implement button in web interface

                if (!checkPreconditions(call)) {
                    return@get
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                logger.info { "User $loggedUser is retrieving the list of resources" }

                /** Get the (visible) resources */
                val getResourcesResult = coreObject.mutex.withLock {
                    coreObject.getResources()
                }
                if (getResourcesResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(
                        call,
                        "Error while getting resources",
                        getResourcesResult.code
                    )
                }
                call.respond(getResourcesResult.resources ?: hashSetOf())
            }

            /**
             * Delete a resource from the
             * access control policy
             */
            delete("{$RESOURCE_NAME}") {

                if (!checkPreconditions(call)) {
                    return@delete
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val resourceNameToDelete = call.parameters[RESOURCE_NAME]
                    ?: return@delete unprocessableEntity(
                        call,
                        "Missing $RESOURCE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to delete " +
                    "resource $resourceNameToDelete for core $coreType"
                }

                /** Delete the resource  */
                val deleteResourceCode = coreObject.mutex.withLock {
                    coreObject.deleteResource(resourceNameToDelete)
                }
                if (deleteResourceCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@delete internalError(
                        call,
                        "Error while deleting resource $resourceNameToDelete",
                        deleteResourceCode
                    )
                }
                call.respond(deleteResourceCode)
            }
        }

        route(ASSIGNMENTS) {

            /**
             * Create a new user-role assignment
             * in the access control policy
             */
            post {

                if (!checkPreconditions(call)) {
                    return@post
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val parameters = call.receiveParameters()
                val username = parameters[USERNAME]
                    ?: return@post unprocessableEntity(
                        call,
                        "Missing $USERNAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val roleName = parameters[ROLE_NAME]
                    ?: return@post unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to assign user " +
                    "$username to role $roleName for core $coreType"
                }

                /** Create the new user-role assignment  */
                val addAssignmentCode = coreObject.mutex.withLock {
                    coreObject.assignUserToRole(username, roleName)
                }
                if (addAssignmentCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@post internalError(
                        call,
                        "Error while assigning user $username to role $roleName",
                        addAssignmentCode
                    )
                }
                call.respond(addAssignmentCode)
            }

            /**
             * Delete a user-role assignment
             * from the access control policy
             */
            delete("{$USERNAME}/{$ROLE_NAME}") {

                if (!checkPreconditions(call)) {
                    return@delete
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val username = call.parameters[USERNAME]
                    ?: return@delete unprocessableEntity(
                        call,
                        "Missing $USERNAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val roleName = call.parameters[ROLE_NAME]
                    ?: return@delete unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to revoke user " +
                        "$username from role $roleName for core $coreType"
                }

                /** Revoke the user-role assignment  */
                val revokeAssignmentCode = coreObject.mutex.withLock {
                    coreObject.revokeUserFromRole(username, roleName)
                }
                if (revokeAssignmentCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@delete internalError(
                        call,
                        "Error while revoking user $username from role $roleName",
                        revokeAssignmentCode
                    )
                }
                call.respond(revokeAssignmentCode)
            }
        }

        route(PERMISSIONS) {

            /**
             * Assign a new permission to a role over
             * a resource in the access control policy
             */
            post {

                if (!checkPreconditions(call)) {
                    return@post
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val parameters = call.receiveParameters()
                val roleName = parameters[ROLE_NAME]
                    ?: return@post unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val resourceName = parameters[RESOURCE_NAME]
                    ?: return@post unprocessableEntity(
                        call,
                        "Missing $RESOURCE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val permissionInput = parameters[PERMISSION]
                    ?: return@post unprocessableEntity(
                        call,
                        "Missing $PERMISSION parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val permission = try {
                    PermissionType.valueOf(permissionInput)
                } catch (e: IllegalArgumentException) {
                    return@post unprocessableEntity(
                        call,
                        "Wrong $PERMISSION parameter",
                        OutcomeCode.CODE_020_INVALID_PARAMETER
                    )
                }

                logger.info {
                    "User $loggedUser is asking to assign permission $permission " +
                        "to role $roleName over resource $resourceName for core $coreType"
                }

                /** Assign the new permission */
                val addPermissionCode = coreObject.mutex.withLock {
                    coreObject.assignPermissionToRole(roleName, resourceName, permission)
                }
                if (addPermissionCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@post internalError(
                        call,
                        "Error while assigning permission " +
                            "$permission to role $roleName over resource $resourceName",
                        addPermissionCode
                    )
                }
                call.respond(addPermissionCode)
            }

            /**
             * Delete a permission from a role over a
             * resource from the access control policy
             */
            delete("{$ROLE_NAME}/{$RESOURCE_NAME}/{$PERMISSION}") {

                if (!checkPreconditions(call)) {
                    return@delete
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val roleName = call.parameters[ROLE_NAME]
                    ?: return@delete unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val resourceName = call.parameters[RESOURCE_NAME]
                    ?: return@delete unprocessableEntity(
                        call,
                        "Missing $RESOURCE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val permissionInput = call.parameters[PERMISSION]
                    ?: return@delete unprocessableEntity(
                        call,
                        "Missing $PERMISSION parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val permission = try {
                    PermissionType.valueOf(permissionInput)
                } catch (e: IllegalArgumentException) {
                    return@delete unprocessableEntity(
                        call,
                        "Wrong $PERMISSION parameter",
                        OutcomeCode.CODE_020_INVALID_PARAMETER
                    )
                }

                logger.info {
                    "User $loggedUser is asking to revoke permission $permission " +
                        "from role $roleName over resource $resourceName for core $coreType"
                }

                /** Revoke the permission */
                val revokePermissionCode = coreObject.mutex.withLock {
                    coreObject.revokePermissionFromRole(roleName, resourceName, permission)
                }
                if (revokePermissionCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@delete internalError(
                        call,
                        "Error while revoking permission $permission " +
                            "from role $roleName over resource $resourceName",
                        revokePermissionCode
                    )
                }
                call.respond(revokePermissionCode)
            }
        }
    }
}

/** Routes related to users' access control policy operations */
fun Route.userRouting() {

    /** Wrap all routes related to CryptoAC */
    route(CRYPTOAC) {

        route(RESOURCES) {

            /**
             * Get a resource from the access
             * control policy
             */
            get("{$RESOURCE_NAME}") {

                if (!checkPreconditions(call, checkIfAdmin = false)) {
                    return@get
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val resourceNameToGet = call.parameters[RESOURCE_NAME]
                    ?: return@get unprocessableEntity(
                        call,
                        "Missing $RESOURCE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to get resource " +
                        "$resourceNameToGet for core $coreType"
                }

                /** Get the resource */
                val cryptoACResource = coreObject.mutex.withLock {
                    coreObject.readResource(resourceNameToGet)
                }
                if (cryptoACResource.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(
                        call,
                        "Error while getting resource $resourceNameToGet",
                        cryptoACResource.code
                    )
                }
                if (cryptoACResource.stream == null) {
                    return@get ok(call)
                } else {
                    call.response.header(
                        HttpHeaders.ContentDisposition,
                        ContentDisposition.Attachment.withParameter(
                            ContentDisposition.Parameters.FileName, resourceNameToGet
                        ).toString()
                    )
                    // call.response.header("Content-Disposition", "attachment; filename=\"$fileNameToGet\"")

                    val contentType = ContentType.fromFileExtension(File(resourceNameToGet).extension).firstOrNull()
                        ?: ContentType.Application.OctetStream
                    call.respondOutputStream(contentType, HttpStatusCode.OK) {
                        cryptoACResource.stream.copyTo(this)
                    }
                }
            }

            /**
             * Create a new resource in the
             * access control policy
             */
            post {

                if (!checkPreconditions(call, checkIfAdmin = false)) {
                    return@post
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                var enforcementInput: String? = null
                var newResourceName: String? = null
                var stream: InputStream = "".inputStream()

                val cType = call.request.contentType()
                if (cType.match(ContentType.MultiPart.FormData)) {
                    call.receiveMultipart().forEachPart { part ->
                        when (part) {
                            is PartData.FormItem -> {
                                if (part.name == ENFORCEMENT) {
                                    enforcementInput = part.value
                                } else {
                                    logger.warn { "Received unexpected part ${part.name}" }
                                }
                            }
                            is PartData.FileItem -> {
                                newResourceName = part.originalFileName as String
                                stream = part.streamProvider()
                            }
                            is PartData.BinaryItem -> {
                                logger.warn { "Received unexpected binary ${part.name}" }
                            }
                            else -> {
                                logger.warn { "Received unexpected part type ${part.javaClass}" }
                            }
                        }
                    }
                } else if (cType.match(ContentType.Application.FormUrlEncoded)) {
                    val parameters = call.receiveParameters()
                    newResourceName = parameters[RESOURCE_NAME]
                    enforcementInput = parameters[ENFORCEMENT]
                    stream = (parameters[RESOURCE_CONTENT] ?: "").inputStream()
                } else {
                    return@post unprocessableEntity(
                        call,
                        "Wrong content type $cType",
                        OutcomeCode.CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED
                    )
                }

                val enforcement = if (enforcementInput == null) {
                    return@post unprocessableEntity(
                        call,
                        "Missing $ENFORCEMENT parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                } else {
                    try {
                        EnforcementType.valueOf(enforcementInput!!)
                    } catch (e: IllegalArgumentException) {
                        return@post unprocessableEntity(
                            call,
                            "Wrong $ENFORCEMENT parameter",
                            OutcomeCode.CODE_020_INVALID_PARAMETER
                        )
                    }
                }
                if (newResourceName == null) {
                    return@post unprocessableEntity(
                        call,
                        "Missing $RESOURCE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                }

                logger.info {
                    "User $loggedUser is asking to create resource $newResourceName " +
                        "with enforcement $enforcement for core $coreType"
                }

                /** Create the new resource */
                val addResourceCode = coreObject.mutex.withLock {
                    coreObject.addResource(newResourceName!!, stream, enforcement)
                }
                if (addResourceCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@post internalError(
                        call,
                        "Error while creating resource $newResourceName",
                        addResourceCode
                    )
                }
                call.respond(addResourceCode)
            }

            /**
             * Update a resource in the
             * access control policy
             */
            patch {

                if (!checkPreconditions(call, checkIfAdmin = false)) {
                    return@patch
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                var resourceName: String? = null
                var stream: InputStream? = null

                val cType = call.request.contentType()
                if (cType.match(ContentType.MultiPart.FormData)) {
                    call.receiveMultipart().forEachPart { part ->
                        when (part) {
                            is PartData.FormItem -> {
                                logger.warn { "Received unexpected part ${part.name}" }
                            }
                            is PartData.FileItem -> {
                                resourceName = part.originalFileName as String
                                stream = part.streamProvider()
                            }
                            is PartData.BinaryItem -> {
                                logger.warn { "Received unexpected binary ${part.name}" }
                            }
                            is PartData.BinaryChannelItem -> {
                                logger.warn { "Received unexpected binary channel item ${part.name}" }
                            }
                        }
                    }
                } else if (cType.match(ContentType.Application.FormUrlEncoded)) {
                    val parameters = call.receiveParameters()
                    resourceName = parameters[RESOURCE_NAME]
                    val resourceContent = parameters[RESOURCE_CONTENT]
                    stream = resourceContent?.inputStream()
                } else {
                    return@patch unprocessableEntity(
                        call,
                        "Wrong content type $cType",
                        OutcomeCode.CODE_060_HTTP_CONTENT_TYPE_NOT_SUPPORTED
                    )
                }

                if (resourceName == null) {
                    return@patch unprocessableEntity(
                        call,
                        "Missing $RESOURCE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                }
                if (stream == null) {
                    return@patch unprocessableEntity(
                        call,
                        "Missing $RESOURCE_CONTENT parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                }

                logger.info {
                    "User $loggedUser is asking to write " +
                    "resource $resourceName for core $coreType"
                }

                /** Update the resource */
                val writeResourceCode = coreObject.mutex.withLock {
                    coreObject.writeResource(resourceName!!, stream!!)
                }
                if (writeResourceCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@patch internalError(
                        call,
                        "Error while writing resource $resourceName",
                        writeResourceCode
                    )
                }
                call.respond(writeResourceCode)
            }

            /**
             * Allows connecting to CryptoAC
             * through a WebSocket (WS)
             */
            val connections = Collections.synchronizedSet<Connection?>(LinkedHashSet())
            webSocket {
                // TODO check and refactor
                //  (perhaps automatically connect websocket when user logs in!)

                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions)
                if (loggedUser == null) {
                    val message = "User not logged-in is asking to use a web socket"
                    logger.error { message }
                    throw IllegalStateException(message)
                }

                val coreParam = call.parameters[CORE]
                if (coreParam == null) {
                    val message = "Missing $CORE parameter"
                    logger.error { message }
                    throw IllegalStateException(message)
                }

                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    val message = "Wrong $CORE parameter"
                    logger.error { message }
                    throw IllegalStateException(message)
                }

                logger.info { "User $loggedUser is connecting to the web socket for core $coreType" }
                addSocketToSession(call.sessions, this, coreType)

                val thisConnection = Connection(this, loggedUser)
                connections += thisConnection
                try {
                    for (frame in incoming) {
                        frame as? Frame.Text ?: continue
                        val receivedText = frame.readBytes()
                        logger.info { "received message from client: $receivedText" }
                    }
                } catch (e: ClosedReceiveChannelException) {
                    logger.info { "ClosedReceiveChannelException: ${e.localizedMessage}" }
                    logger.info { e.printStackTrace() }
                } catch (e: Throwable) {
                    logger.error { "Exception: ${e.localizedMessage}" }
                    logger.error { e.printStackTrace() }
                    // TODO do not catch all exceptions
                } finally {
                    logger.warn { "Removing $thisConnection" }
                    connections -= thisConnection
                }
            }
        }

        route(ASSIGNMENTS) {

            /**
             * Get the list of currently
             * existing assignments
             */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                if (!checkPreconditions(call, checkIfAdmin = false)) {
                    return@get
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val requestedUsername = if (coreObject.coreParameters.user.isAdmin) {
                    call.request.queryParameters[USERNAME]
                } else {
                    loggedUser
                }
                val requestedRoleName = call.request.queryParameters[ROLE_NAME]

                logger.info {
                    "User $loggedUser is querying for assignments with filter user " +
                    "$requestedUsername and role $requestedRoleName for core $coreType"
                }

                /** Get the assignments */
                val getAssignmentsResult = coreObject.mutex.withLock {
                    coreObject.getAssignments(
                        username = requestedUsername,
                        roleName = requestedRoleName
                    )
                }
                if (getAssignmentsResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(
                        call,
                        "Error while getting assignments",
                        getAssignmentsResult.code
                    )
                }
                call.respond(getAssignmentsResult.roleTuples ?: hashSetOf())
            }
        }

        route(PERMISSIONS) {

            /**
             * Get the list of currently
             * existing permissions
             */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                if (!checkPreconditions(call, checkIfAdmin = false)) {
                    return@get
                }

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    username = loggedUser,
                    coreType = coreType,
                    parameters = userData.parameters!!,
                    policyModel = PolicyModel.RBAC
                ) as CoreRBAC

                val requestedUsername = if (coreObject.coreParameters.user.isAdmin) {
                    call.request.queryParameters[USERNAME]
                } else {
                    loggedUser
                }
                val requestedRoleName = call.request.queryParameters[ROLE_NAME]
                val requestedResourceName = call.request.queryParameters[RESOURCE_NAME]
                logger.info {
                    "User $loggedUser is querying for permissions with filter user " +
                    "$requestedUsername, role $requestedRoleName and resource " +
                    "$requestedResourceName for core $coreType"
                }

                /** Get the permissions */
                val getPermissionsResult = coreObject.mutex.withLock {
                    coreObject.getPermissions(
                        username = requestedUsername,
                        roleName = requestedRoleName,
                        resourceName = requestedResourceName
                    )
                }
                if (getPermissionsResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(
                        call,
                        "Error while getting assignments",
                        getPermissionsResult.code
                    )
                }
                call.respond(getPermissionsResult.permissionTuples ?: hashSetOf())
            }
        }
    }
}

/** Routes related to user's login; login (post), logout (delete) */
fun Route.loginRouting() {

    /** TODO authenticate OAuth https://ktor.io/docs/authentication.html  */
    /** Wrap all routes related to log in */
    route(LOGIN) {

        /** Log in the user */
        post {
            val postParameters = call.receiveParameters()
            val username = postParameters[USERNAME]
                ?: return@post unprocessableEntity(
                    call,
                    "Missing $USERNAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS
                )
            logger.info { "Received login request from user $username " }

            /** Since logUsersLocks is a concurrent hash map, getOrPut is thread-safe */
            logUsersMutexes.getOrPut(username) { Mutex() }
            val returnCode = logUsersMutexes[username]!!.withLock  {
                if (doesSessionExists(call.sessions)) {
                    val alreadyLoggedUsername = getSessionUsername(call.sessions)
                    logger.info {
                        "Received login request from user $username which has " +
                        "already a valid session as user $alreadyLoggedUsername"
                    }
                    if (username == alreadyLoggedUsername) {
                        OutcomeCode.CODE_000_SUCCESS
                    } else {
                        OutcomeCode.CODE_062_ALREADY_LOGGED_IN_WITH_DIFFERENT_USERNAME
                    }
                } else {
                    if (isUserLoggedIn(username)) {
                        logger.info {
                            "Received login request from user $username which is " +
                            "already authenticated in another session. Allow it"
                        }
                    }
                    when (val loginCode = login(username)) {
                        OutcomeCode.CODE_000_SUCCESS -> {
                            createSession(call.sessions, username)
                            OutcomeCode.CODE_000_SUCCESS
                        }
                        else -> loginCode
                    }
                }
            }

            return@post when (returnCode) {
                OutcomeCode.CODE_000_SUCCESS -> ok(call)
                OutcomeCode.CODE_062_ALREADY_LOGGED_IN_WITH_DIFFERENT_USERNAME -> conflict(
                    call,
                    "The user was already logged in but with a different username",
                    OutcomeCode.CODE_062_ALREADY_LOGGED_IN_WITH_DIFFERENT_USERNAME
                )
                else -> internalError(call, "Error during login procedure", returnCode)
            }
        }
    }

    /** Wrap all routes related to log out */
    route(LOGOUT) {

        /** Log out the user */
        delete {
            val username = getSessionUsername(call.sessions)
            val returnCode = if (username == null) {
                logger.warn { "Received logout request from not logged-in user" }
                OutcomeCode.CODE_000_SUCCESS
            } else {
                logger.info { "Received logout request from user $username " }
                logUsersMutexes[username]!!.withLock {
                    if (doesSessionExists(call.sessions)) {
                        when (val logoutCode = logout(username)) {
                            OutcomeCode.CODE_000_SUCCESS -> {
                                // TODO when Ktor will have automatic session expire,
                                //  remember to invoke this function also in that case

                                /**
                                 * Deinit the core of the user only if the user
                                 * has logged out from all his sessions
                                 */
                                if (!isUserLoggedIn(username)) {
                                    deinitAllCores(username)
                                }
                                call.sessions.clear<UserSession>()
                                OutcomeCode.CODE_000_SUCCESS
                            }
                            else -> logoutCode
                        }
                    } else {
                        logger.warn { "Received logout request from not logged-in user" }
                        OutcomeCode.CODE_000_SUCCESS
                    }
                }
            }

            return@delete when (returnCode) {
                OutcomeCode.CODE_000_SUCCESS -> ok(call)
                else -> internalError(call, "Error during login procedure", returnCode)
            }
        }
    }
}

/** Register the routes for CryptoAC */
fun Application.registerCryptoACRoutes() {
    logger.info { "Registering CryptoAC routes" }
    routing {
        velocityRouting()
        profileRouting()
        loginRouting()
        adminRouting()
        userRouting()
    }
}



/**
 * Function grouping common checks on preconditions
 * before executing APIs. This function always checks
 * that the user is logged in and the core type is provided.
 * If requested, this function can also [checkTheProfile] of
 * the user and [checkIfAdmin]. This function store relevant
 * information in the call attributes under the [loggedUserDataKey].
 * Return true if all preconditions are met, false otherwise
 */
suspend fun checkPreconditions(
    call: ApplicationCall,
    checkTheProfile: Boolean = true,
    checkIfAdmin: Boolean = true,
): Boolean {
    var preconditionsAreMet = true
    val userData = UserData()

    val apiURI = call.request.uri
    val apiMethod = call.request.httpMethod.toString()

    val loggedUser = getSessionUsername(call.sessions)
    userData.loggedUser = loggedUser
    if (loggedUser == null) {
        logger.warn {
            "Non-authenticated user requested " +
            "API $apiURI with method $apiMethod"
        }
        unauthorized(
            call = call,
            message = "User is not authenticated",
            code = OutcomeCode.CODE_038_UNAUTHORIZED
        )
        preconditionsAreMet = false
    }

    if (preconditionsAreMet) {
        val coreParam = call.parameters[CORE]
        if (coreParam == null) {
            unprocessableEntity(
                call = call,
                message = "Missing $CORE parameter",
                code = OutcomeCode.CODE_019_MISSING_PARAMETERS
            )
            preconditionsAreMet = false
        } else {
            try {
                val coreType = CoreType.valueOf(coreParam)
                userData.coreType = coreType
            } catch (e: IllegalArgumentException) {
                unprocessableEntity(
                    call = call,
                    message = "Wrong $CORE parameter",
                    code = OutcomeCode.CODE_020_INVALID_PARAMETER
                )
                preconditionsAreMet = false
            }
        }
    }

    if (checkTheProfile && preconditionsAreMet) {
        // TODO instead of loading the profile every time, can't we
        //  just check that is there? This would optimize the stuff.
        //  Also, why do we need to 'call.attributes.put(loggedUserDataKey, userData)'
        //  everytime? why can't we just do it at the login (and then update it when
        //  users, e.g., modify their profile or profile gets deleted)?
        //  Also, what it a user is using two cores at the same time? The key
        //  loggedUserDataKey is unique, we should make it dependent on the core
        val loggedUserParams = ProfileManager.loadProfile(userData.loggedUser!!, userData.coreType!!)
        userData.parameters = loggedUserParams
        if (loggedUserParams == null) {
            logger.info { "User $loggedUser is logged in but no profile was found" }
            notFound(
                call = call,
                message = "Profile of logged user $loggedUser not found",
                code = OutcomeCode.CODE_039_PROFILE_NOT_FOUND
            )
            preconditionsAreMet = false
        }
    }

    if (checkIfAdmin && preconditionsAreMet) {
        val isAdmin = userData.parameters!!.user.isAdmin
        if (!isAdmin) {

            val message = "Not-admin User $loggedUser invoking restricted API $apiURI with method $apiMethod"
            logger.info { message }
            forbidden(
                call = call,
                message = message,
                code = OutcomeCode.CODE_037_FORBIDDEN
            )
            preconditionsAreMet = false
        }
    }

    call.attributes.put(loggedUserDataKey, userData)

    return preconditionsAreMet
}

/** Represent a web socket [session] with the user [username] */
data class Connection(
    val session: DefaultWebSocketSession,
    val username: String
)

/**
 * Represent data of a user. We
 * save the name of the [loggedUser],
 * the [coreType] and the [parameters]
 * of the profile of the user
 */
data class UserData(
    var loggedUser: String? = null,
    var coreType: CoreType? = null,
    var parameters: CoreParameters? = null,
)

/** Key to save data of a user */
val loggedUserDataKey = AttributeKey<UserData>("loggedUserDataKey")
