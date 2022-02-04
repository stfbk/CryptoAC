package eu.fbk.st.cryptoac.proxy

import development
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.crypto.CryptoFactory
import eu.fbk.st.cryptoac.API.ASSIGNMENTS
import eu.fbk.st.cryptoac.API.FILES
import eu.fbk.st.cryptoac.API.LOGIN
import eu.fbk.st.cryptoac.API.LOGOUT
import eu.fbk.st.cryptoac.API.PERMISSIONS
import eu.fbk.st.cryptoac.API.PROFILES
import eu.fbk.st.cryptoac.API.PROXY
import eu.fbk.st.cryptoac.API.ROLES
import eu.fbk.st.cryptoac.API.USERS
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.forbidden
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.internalError
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.notFound
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.ok
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.unauthorized
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.unprocessableEntity
import eu.fbk.st.cryptoac.SERVER.ENFORCEMENT
import eu.fbk.st.cryptoac.SERVER.FILE_NAME
import eu.fbk.st.cryptoac.SERVER.FILE_CONTENT
import eu.fbk.st.cryptoac.SERVER.PERMISSION
import eu.fbk.st.cryptoac.SERVER.ROLE_NAME
import eu.fbk.st.cryptoac.SERVER.CORE
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.inputStream
import eu.fbk.st.cryptoac.proxy.SessionController.Companion.addSocketToSection
import eu.fbk.st.cryptoac.proxy.SessionController.Companion.createSession
import eu.fbk.st.cryptoac.proxy.SessionController.Companion.doesSessionExists
import eu.fbk.st.cryptoac.proxy.SessionController.Companion.getOrCreateCore
import eu.fbk.st.cryptoac.proxy.SessionController.Companion.getSessionUsername
import eu.fbk.st.cryptoac.proxy.SessionController.Companion.setSessionCore
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.http.cio.websocket.*
import io.ktor.http.content.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.sessions.*
import io.ktor.websocket.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import java.io.File
import java.io.InputStream
import java.lang.IllegalArgumentException
import java.util.*
import kotlin.collections.LinkedHashSet
import kotlin.reflect.full.isSubclassOf

// TODO AGGIORNA IL FILE SWAGGER DELLE APIs

private val logger = KotlinLogging.logger {}

/** Routes related to velocity templates; login (get), index (get), logout (delete) */
fun Route.velocityRouting() {

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

/** Routes related to users' profiles; create (post), read (get), update (patch), delete (delete) */
fun Route.profileRouting() {

    /** Wrap all routes related to the users' profiles */
    route(PROFILES) {

        /**
         * The admin can get the profiles of all users, while a user can only get his own profile.
         * If a user tries to get the profile of another user, he would get a 404 instead of a 403
         * to avoid information leakage
         */
        get {
            // TODO implement button in web interface to download user's profile as json

            /** Users must be logged-in to access this API */
            val loggedUser = getSessionUsername(call.sessions) ?: return@get unauthorized(call,
                "User is not authenticated",
                OutcomeCode.CODE_036_UNAUTHORIZED)

            // TODO implement that if no requestedUsername is specified, then return users with pagination (?) or block this capability. Remember to document it

            val requestedUsername = call.request.queryParameters[USERNAME] ?: return@get unprocessableEntity(
                call,
                "Missing $USERNAME parameter",
                OutcomeCode.CODE_019_MISSING_PARAMETERS,
            )
            logger.info { "User $loggedUser is querying profile of user $requestedUsername" }

            val coreParam = call.parameters[CORE] ?: return@get unprocessableEntity(call,
                "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
            val coreType = try {
                CoreType.valueOf(coreParam)
            } catch (e: IllegalArgumentException) {
                return@get unprocessableEntity(call,
                    "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
            }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)
            if (loggedUserParams == null) {
                logger.info { "User $loggedUser is logged-in but no profile was found (probably it has yet to create it)" }
                return@get notFound(
                    call, "Profile of logged user $requestedUsername not found, create one",
                    OutcomeCode.CODE_038_PROFILE_NOT_FOUND,
                )
            }

            if (loggedUser == requestedUsername) {
                loggedUserParams.obscureSensitiveFields()
                call.respond(myJson.encodeToString(loggedUserParams))
            } else if (loggedUser == ADMIN && loggedUserParams.user.isAdmin) {
                val requestedUserParams = ProfileManager.loadProfile(requestedUsername, coreType)
                if (requestedUserParams == null) {
                    val message = "Profile of user $requestedUsername was not found"
                    logger.info { message }
                    return@get notFound(call, message, OutcomeCode.CODE_004_USER_NOT_FOUND)
                }
                else {
                    requestedUserParams.obscureSensitiveFields()
                    call.respond(myJson.encodeToString(requestedUserParams))
                }
            }
            else {
                logger.warn { "User $loggedUser requested a non-accessible profile of user $requestedUsername" }
                return@get notFound(
                    call, "Profile of user $requestedUsername not found",
                    OutcomeCode.CODE_004_USER_NOT_FOUND,
                )
            }
        }

        /**
         * Create a new user by generating keys and checking the consistency of the given data.
         * Finally, save the new profile
         */
        post {

            /** Users must be logged-in to access this API */
            val loggedUser = getSessionUsername(call.sessions) ?: return@post unauthorized(call,
                "User is not authenticated",
                OutcomeCode.CODE_036_UNAUTHORIZED)

            val coreParam = call.parameters[CORE] ?: return@post unprocessableEntity(call,
                "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
            val coreType = try {
                CoreType.valueOf(coreParam)
            } catch (e: IllegalArgumentException) {
                return@post unprocessableEntity(call,
                    "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
            }

            logger.info { "User $loggedUser is creating a new profile for core $coreType" }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)
            val isLoggedUserAdmin = loggedUserParams?.user?.isAdmin ?: false

            /** Get the core parameters from the request */
            // TODO should become "val coreParameters = call.receive<CoreParameters>()", but serialization issues; investigate
            val coreParametersString = call.receive<String>().replace("""\"""", "\"").drop(1).dropLast(1)
            val coreParameters: CoreParameters = myJson.decodeFromString(coreParametersString)

            val requestedUsername = coreParameters.user.name
            logger.info { "User $loggedUser is creating a profile for user $requestedUsername" }

            if (loggedUser == requestedUsername || (loggedUser == ADMIN && isLoggedUserAdmin)) {

                if (coreParameters.user.isAdmin && requestedUsername != ADMIN) {
                    return@post unprocessableEntity(call,
                        "The given username ($requestedUsername) should be $ADMIN",
                        OutcomeCode.CODE_018_INTERFACE_CONFIGURATION_PARAMETERS)
                }

                if (!coreParameters.checkParameters()) {
                    return@post unprocessableEntity(call,
                        "Parameters were not validated by regular expressions",
                        OutcomeCode.CODE_018_INTERFACE_CONFIGURATION_PARAMETERS)
                }

                val cryptoObject = CryptoFactory.getCrypto(coreParameters.cryptoType)
                val asymEncKeys = cryptoObject.generateAsymEncKeys()
                val asymSigKeys = cryptoObject.generateAsymSigKeys()
                val newUser = User(requestedUsername,
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
                    isAdmin = coreParameters.user.isAdmin)
                coreParameters.user = newUser
                val core = CoreFactory.getCore(coreParameters)

                val initCode = if (coreParameters.user.isAdmin) {
                    core.initAdmin()
                } else {
                    core.initUser()
                }

                if (initCode != OutcomeCode.CODE_000_SUCCESS) {
                    val message = "Internal error while initialising the user"
                    logger.warn { "$message (code $initCode)" }
                    return@post internalError(call,
                        message,
                        initCode)
                }
                logger.debug { "Initialisation was successful, now saving profile" }

                /** Finally, save the profile */
                ProfileManager.saveProfile(requestedUsername, coreParameters)

                /** If the user is logged-in and with a profile, store the core in the session */
                // TODO when the session is destroyed, you have to clear out the MQTT core, so to disconnect the MQTT client (?)
                if (requestedUsername == loggedUser) {
                    setSessionCore(call.sessions, core)
                }

                return@post ok(call)
            }
            else {
                logger.warn { "User $loggedUser requested to create profile of user $requestedUsername" }
                return@post forbidden(
                    call, "Cannot create profile of user $requestedUsername",
                    OutcomeCode.CODE_035_FORBIDDEN,
                )
            }
        }

        /**
         * Update the profile of a user and check the consistency of the updated data.
         * Finally, save the updated profile
         */
        patch {

            /** Users must be logged-in to access this API */
            val loggedUser = getSessionUsername(call.sessions) ?: return@patch unauthorized(call,
                "User is not authenticated",
                OutcomeCode.CODE_036_UNAUTHORIZED)

            val coreParam = call.parameters[CORE] ?: return@patch unprocessableEntity(call,
                "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
            val coreType = try {
                CoreType.valueOf(coreParam)
            } catch (e: IllegalArgumentException) {
                return@patch unprocessableEntity(call,
                    "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
            }

            logger.info { "User $loggedUser is updating a profile for core $coreType" }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)
            val isLoggedUserAdmin = loggedUserParams?.user?.isAdmin ?: false

            /** Get the core parameters from the request */
            // TODO should become "val coreParameters = call.receive<CoreParameters>()", but serialization issues; investigate
            val updatedCoreParametersString = call.receive<String>().replace("""\"""", "\"").drop(1).dropLast(1)
            val updatedCoreParameters: CoreParameters = myJson.decodeFromString(updatedCoreParametersString)

            val requestedUsername = updatedCoreParameters.user.name
            logger.info { "User $loggedUser is updating the profile for user $requestedUsername" }

            if (loggedUser == requestedUsername || (loggedUser == ADMIN && isLoggedUserAdmin)) {

                if (!updatedCoreParameters.checkParameters()) {
                    return@patch unprocessableEntity(call,
                        "Parameters were not validated by regular expressions",
                        OutcomeCode.CODE_018_INTERFACE_CONFIGURATION_PARAMETERS)
                }

                val oldUserParameters: CoreParameters? = if (loggedUser == requestedUsername) {
                    loggedUserParams
                } else {
                    ProfileManager.loadProfile(requestedUsername, coreType)
                }
                oldUserParameters!!.update(updatedCoreParameters)
                
                /** Finally, save the profile and update the core in the session */
                ProfileManager.updateProfile(requestedUsername, oldUserParameters)
                setSessionCore(call.sessions, CoreFactory.getCore(oldUserParameters))

                return@patch ok(call)
            }
            else {
                logger.warn { "User $loggedUser requested to update profile of user $requestedUsername" }
                return@patch forbidden(
                    call, "Cannot update profile of user $requestedUsername",
                    OutcomeCode.CODE_035_FORBIDDEN,
                )
            }
        }

        /**
         * Delete the profile of the specified user and remove him from the access control policy.
         * Only the administrator can invoke this API
         */
        delete("{$USERNAME}") {
            // TODO implement button in web interface
            // TODO integrate swagger documentation

            /** Users must be logged-in to access this API */
            val loggedUser = getSessionUsername(call.sessions) ?: return@delete unauthorized(call,
                "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

            val usernameToDelete = call.parameters[USERNAME] ?: return@delete unprocessableEntity(call,
                "Missing $USERNAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
            logger.info { "User $loggedUser is asking to delete profile of user $usernameToDelete" }

            val coreParam = call.parameters[CORE] ?: return@delete unprocessableEntity(call,
                "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
            val coreType = try {
                CoreType.valueOf(coreParam)
            } catch (e: IllegalArgumentException) {
                return@delete unprocessableEntity(call,
                    "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
            }

            /** Proceed only if the admin is deleting the profile of another user */
            return@delete if (loggedUser == ADMIN && loggedUser != usernameToDelete) {
                val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                    ?: return@delete notFound(call,
                        "Profile of logged user $usernameToDelete not found, create one",
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                    val message = "Core created is not RBAC"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                coreObject as CoreRBAC

                /** Delete the profile of the specified user and remove him from the access control policy  */
                val deleteCode = coreObject.deleteUser(usernameToDelete)
                if (deleteCode != OutcomeCode.CODE_000_SUCCESS) {
                    internalError(call,
                        "Unexpected error while deleting user $usernameToDelete from the access control policy",
                        deleteCode)
                }
                else {
                    when (ProfileManager.deleteProfile(usernameToDelete, coreType)) {
                        OutcomeCode.CODE_000_SUCCESS -> ok(call)
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND -> notFound(call,
                            "Profile of user $usernameToDelete not found", OutcomeCode.CODE_038_PROFILE_NOT_FOUND)
                        OutcomeCode.CODE_024_FILE_DELETE -> internalError(call,
                            "Error while profile of user $usernameToDelete", OutcomeCode.CODE_024_FILE_DELETE)
                        else -> internalError(call,
                            "Unknown error while deleting profile of user $usernameToDelete", OutcomeCode.CODE_024_FILE_DELETE)
                    }
                }
            }
            else if (loggedUser == usernameToDelete) {
                logger.warn { "User $loggedUser requested to delete his own profile" }
                if (loggedUser == ADMIN) {
                    unprocessableEntity(call,
                        "You cannot delete your own profile",
                        OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
                }
                else {
                    unprocessableEntity(call,
                        "You cannot delete your own profile",
                        OutcomeCode.CODE_023_USER_CANNOT_BE_MODIFIED)
                }
            }
            else {
                logger.warn { "Non-admin user $loggedUser requested to delete profile of another user $usernameToDelete" }
                notFound(call, "Profile of user $usernameToDelete not found",
                    OutcomeCode.CODE_004_USER_NOT_FOUND)
            }
        }
    }
}

/** Routes related to admin's access control policy management */
fun Route.adminRouting() {

    /** Wrap all routes related to the proxy */
    route(PROXY) {

        route(USERS) {

            /** Return the list of currently existing users */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@get unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val coreParam = call.parameters[CORE] ?: return@get unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@get unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@get notFound(
                            call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                        )

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Get the (visible) users.  */
                    val getUsersResult = coreObject.getUsers()
                    if (getUsersResult.code != OutcomeCode.CODE_000_SUCCESS) {
                        return@get internalError(
                            call,
                            "Error while getting users",
                            getUsersResult.code
                        )
                    }
                    call.respond(getUsersResult.users ?: hashSetOf())
                } else {
                    logger.warn { "User $loggedUser requested to get the list of users" }
                    return@get forbidden(call, "Cannot get the list of users",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }

            /**
             * Create a new user in the access control policy
             * and return the configuration parameters
             */
            post {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@post unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val newUsername =
                    call.receiveParameters()[USERNAME] ?: return@post unprocessableEntity(call,
                        "Missing $USERNAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                logger.info { "User $loggedUser is asking to create user $newUsername" }

                val coreParam = call.parameters[CORE] ?: return@post unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@post unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@post notFound(call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Create the new user  */
                    val addUserResult = coreObject.addUser(newUsername)
                    if (addUserResult.code != OutcomeCode.CODE_000_SUCCESS) {
                        return@post internalError(call,
                            "Error while creating user $newUsername",
                            addUserResult.code)
                    }
                    val parameters = addUserResult.parameters
                    call.respond(myJson.encodeToString(parameters))
                } else {
                    logger.warn { "User $loggedUser requested to create user $newUsername" }
                    return@post forbidden(call, "Cannot create user $newUsername",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }

            // TODO overlap with profiles' route delete? both delete the user
            /** Delete a user from the access control policy */
            delete("{$USERNAME}") {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@delete unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val usernameToDelete =
                    call.parameters[USERNAME] ?: return@delete unprocessableEntity(call,
                        "Missing $USERNAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                logger.info { "User $loggedUser is asking to delete user $usernameToDelete" }

                val coreParam = call.parameters[CORE] ?: return@delete unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@delete unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@delete notFound(call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Delete the user  */
                    val deleteUserCode = coreObject.deleteUser(usernameToDelete)
                    if (deleteUserCode != OutcomeCode.CODE_000_SUCCESS) {
                        return@delete internalError(call,
                            "Error while deleting user $usernameToDelete",
                            deleteUserCode)
                    }
                    call.respond(deleteUserCode)
                } else {
                    logger.warn { "User $loggedUser requested to delete user $usernameToDelete" }
                    return@delete forbidden(call, "Cannot delete user $usernameToDelete",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }
        }

        route(ROLES) {

            /** Return the list of currently existing roles */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@get unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val coreParam = call.parameters[CORE] ?: return@get unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@get unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@get notFound(
                            call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                        )

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Get the (visible) roles.  */
                    val getRolesResult = coreObject.getRoles()
                    if (getRolesResult.code != OutcomeCode.CODE_000_SUCCESS) {
                        return@get internalError(
                            call,
                            "Error while getting roles",
                            getRolesResult.code
                        )
                    }
                    call.respond(getRolesResult.roles ?: hashSetOf())
                } else {
                    logger.warn { "User $loggedUser requested to get the list of roles" }
                    return@get forbidden(call, "Cannot get the list of roles",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }

            /** Create a new role in the access control policy */
            post {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@post unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val newRoleName =
                    call.receiveParameters()[ROLE_NAME] ?: return@post unprocessableEntity(call,
                        "Missing $ROLE_NAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                logger.info { "User $loggedUser is asking to create role $newRoleName" }

                val coreParam = call.parameters[CORE] ?: return@post unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@post unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@post notFound(call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Create the new role  */
                    val addRoleCode = coreObject.addRole(newRoleName)
                    if (addRoleCode != OutcomeCode.CODE_000_SUCCESS) {
                        return@post internalError(call,
                            "Error while creating role $newRoleName",
                            addRoleCode)
                    }
                    call.respond(addRoleCode)
                } else {
                    logger.warn { "User $loggedUser requested to create role $newRoleName" }
                    return@post forbidden(call, "Cannot create role $newRoleName",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
             }

            /** Delete a role from the access control policy */
            delete("{$ROLE_NAME}") {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@delete unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val roleNameToDelete =
                    call.parameters[ROLE_NAME] ?: return@delete unprocessableEntity(call,
                        "Missing $ROLE_NAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                logger.info { "User $loggedUser is asking to delete role $roleNameToDelete" }

                val coreParam = call.parameters[CORE] ?: return@delete unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@delete unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@delete notFound(call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Delete the role  */
                    val deleteRoleCode = coreObject.deleteRole(roleNameToDelete)
                    if (deleteRoleCode != OutcomeCode.CODE_000_SUCCESS) {
                        return@delete internalError(call,
                            "Error while deleting role $roleNameToDelete",
                            deleteRoleCode)
                    }
                    call.respond(deleteRoleCode)
                } else {
                    logger.warn { "User $loggedUser requested to delete role $roleNameToDelete" }
                    return@delete forbidden(call, "Cannot delete role $roleNameToDelete",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }
        }

        route(FILES) {

            /** Return the list of currently existing files */
            get {
                // TODO implement button in web interface

                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@get unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val coreParam = call.parameters[CORE] ?: return@get unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@get unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@get notFound(
                            call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                        )

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Get the (visible) files.  */
                    val getFilesResult = coreObject.getFiles()
                    if (getFilesResult.code != OutcomeCode.CODE_000_SUCCESS) {
                        return@get internalError(
                            call,
                            "Error while getting files",
                            getFilesResult.code
                        )
                    }
                    call.respond(getFilesResult.files ?: hashSetOf())
                } else {
                    logger.warn { "User $loggedUser requested to get the list of files" }
                    return@get forbidden(call, "Cannot get the list of files",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }

            /** Delete a file from the access control policy */
            delete("{$FILE_NAME}") {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@delete unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val fileNameToDelete =
                    call.parameters[FILE_NAME] ?: return@delete unprocessableEntity(call,
                        "Missing $FILE_NAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                logger.info { "User $loggedUser is asking to delete file $fileNameToDelete" }

                val coreParam = call.parameters[CORE] ?: return@delete unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@delete unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@delete notFound(call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Delete the file  */
                    val deleteFileCode = coreObject.deleteFile(fileNameToDelete)
                    if (deleteFileCode != OutcomeCode.CODE_000_SUCCESS) {
                        return@delete internalError(call,
                            "Error while deleting file $fileNameToDelete",
                            deleteFileCode)
                    }
                    call.respond(deleteFileCode)
                } else {
                    logger.warn { "User $loggedUser requested to delete file $fileNameToDelete" }
                    return@delete forbidden(call, "Cannot delete file $fileNameToDelete",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }
        }

        route(ASSIGNMENTS) {

            /** Create a new user-role assignment in the access control policy */
            post {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@post unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val parameters = call.receiveParameters()
                val username =
                    parameters[USERNAME] ?: return@post unprocessableEntity(call,
                        "Missing $USERNAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val roleName =
                    parameters[ROLE_NAME] ?: return@post unprocessableEntity(call,
                        "Missing $ROLE_NAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                logger.info { "User $loggedUser is asking to assign user $username to role $roleName" }

                val coreParam = call.parameters[CORE] ?: return@post unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@post unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@post notFound(call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Create the new user-role assignment  */
                    val addAssignmentCode = coreObject.assignUserToRole(username, roleName)
                    if (addAssignmentCode != OutcomeCode.CODE_000_SUCCESS) {
                        return@post internalError(call,
                            "Error while assigning user $username to role $roleName",
                            addAssignmentCode)
                    }
                    call.respond(addAssignmentCode)
                } else {
                    logger.warn { "User $loggedUser requested to assign user $username to role $roleName" }
                    return@post forbidden(call, "Cannot assign user $username to role $roleName",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }

            /** Delete a user-role assignment from the access control policy */
            delete("{$USERNAME}/{$ROLE_NAME}") {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@delete unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val username = call.parameters[USERNAME] ?: return@delete unprocessableEntity(call,
                    "Missing $USERNAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val roleName = call.parameters[ROLE_NAME] ?: return@delete unprocessableEntity(call,
                    "Missing $ROLE_NAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
                logger.info { "User $loggedUser is asking to revoke user $username from role $roleName" }

                val coreParam = call.parameters[CORE] ?: return@delete unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@delete unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@delete notFound(call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Revoke the user-role assignment  */
                    val revokeAssignmentCode = coreObject.revokeUserFromRole(username, roleName)
                    if (revokeAssignmentCode != OutcomeCode.CODE_000_SUCCESS) {
                        return@delete internalError(call,
                            "Error while revoking user $username from role $roleName",
                            revokeAssignmentCode)
                    }
                    call.respond(revokeAssignmentCode)
                } else {
                    logger.warn { "User $loggedUser requested to revoke user $username from role $roleName" }
                    return@delete forbidden(call, "Cannot revoke user $username from role $roleName",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }
        }

        route(PERMISSIONS) {

            /** Assign a new permission to a role over a file in the access control policy */
            post {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@post unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val parameters = call.receiveParameters()
                val roleName =
                    parameters[ROLE_NAME] ?: return@post unprocessableEntity(call,
                        "Missing $ROLE_NAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val fileName =
                    parameters[FILE_NAME] ?: return@post unprocessableEntity(call,
                        "Missing $FILE_NAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val permissionInput = parameters[PERMISSION] ?: return@post unprocessableEntity(call,
                        "Missing $PERMISSION parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val permission = try {
                    PermissionType.valueOf(permissionInput)
                } catch (e: IllegalArgumentException) {
                    return@post unprocessableEntity(call,
                        "Wrong $PERMISSION parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                logger.info { "User $loggedUser is asking to assign permission $permission to role $roleName over file $fileName" }

                val coreParam = call.parameters[CORE] ?: return@post unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@post unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@post notFound(call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Assign the new permission */
                    val addPermissionCode = coreObject.assignPermissionToRole(roleName, fileName, permission)
                    if (addPermissionCode != OutcomeCode.CODE_000_SUCCESS) {
                        return@post internalError(call,
                            "Error while assigning permission $permission to role $roleName over file $fileName",
                            addPermissionCode)
                    }
                    call.respond(addPermissionCode)
                } else {
                    logger.warn { "User $loggedUser requested to assign permission $permission to role $roleName over file $fileName" }
                    return@post forbidden(call, "Cannot assign permission $permission to role $roleName over file $fileName",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }

            /** Delete a permission from a role over a file from the access control policy */
            delete("{$ROLE_NAME}/{$FILE_NAME}/{$PERMISSION}") {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@delete unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val roleName = call.parameters[ROLE_NAME] ?: return@delete unprocessableEntity(call,
                    "Missing $ROLE_NAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val fileName = call.parameters[FILE_NAME] ?: return@delete unprocessableEntity(call,
                    "Missing $FILE_NAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val permissionInput = call.parameters[PERMISSION] ?: return@delete unprocessableEntity(call,
                    "Missing $PERMISSION parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val permission = try {
                    PermissionType.valueOf(permissionInput)
                } catch (e: IllegalArgumentException) {
                    return@delete unprocessableEntity(call,
                        "Wrong $PERMISSION parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                logger.info { "User $loggedUser is asking to revoke permission $permission from role $roleName over file $fileName" }

                val coreParam = call.parameters[CORE] ?: return@delete unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@delete unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                /** Proceed only if the logged user is the admin */
                if (loggedUser == ADMIN) {
                    val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                        ?: return@delete notFound(call,
                            "Profile of logged user $loggedUser not found, create one",
                            OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                    if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                    coreObject as CoreRBAC

                    /** Revoke the permission */
                    val revokePermissionCode = coreObject.revokePermissionFromRole(roleName, fileName, permission)
                    if (revokePermissionCode != OutcomeCode.CODE_000_SUCCESS) {
                        return@delete internalError(call,
                            "Error while revoking permission $permission from role $roleName over file $fileName",
                            revokePermissionCode)
                    }
                    call.respond(revokePermissionCode)
                } else {
                    logger.warn { "User $loggedUser requested to revoke permission $permission from role $roleName over file $fileName" }
                    return@delete forbidden(call, "Cannot revoke permission $permission from role $roleName over file $fileName",
                        OutcomeCode.CODE_035_FORBIDDEN)
                }
            }
        }
    }
}

/** Routes related to users' access control policy management */
fun Route.userRouting() {

    /** Wrap all routes related to the proxy */
    route(PROXY) {

        route(FILES) {

            /** Get a file from the access control policy */
            get("{$FILE_NAME}") {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@get unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val fileNameToGet =
                    call.parameters[FILE_NAME] ?: return@get unprocessableEntity(call,
                        "Missing $FILE_NAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                logger.info { "User $loggedUser is asking to get file $fileNameToGet" }

                val coreParam = call.parameters[CORE] ?: return@get unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@get unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                    ?: return@get notFound(call,
                        "Profile of logged user $loggedUser not found, create one",
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                    val message = "Core created is not RBAC"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                coreObject as CoreRBAC

                /** Get the file.  */
                val cryptoACFile = coreObject.readFile(fileNameToGet)
                if (cryptoACFile.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(call,
                        "Error while getting file $fileNameToGet",
                        cryptoACFile.code)
                }
                if (cryptoACFile.stream == null) {
                    return@get ok(call)
                } else {
                    call.response.header("Content-Disposition", "attachment; filename=\"$fileNameToGet\"")
                    val contentType = ContentType.fromFileExtension(File(fileNameToGet).extension).firstOrNull()
                        ?: ContentType.Application.OctetStream

                    call.respondOutputStream(contentType, HttpStatusCode.OK) {
                        cryptoACFile.stream.copyTo(this)
                    }
                }
            }

            /** Create a new file in the access control policy */
            post {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@post unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                var enforcementInput: String? = null
                var newFileName: String? = null
                var stream: InputStream? = null

                if (call.request.contentType().match(ContentType.MultiPart.FormData)) {
                    call.receiveMultipart().forEachPart { part ->
                        when (part) {
                            is PartData.FormItem -> {
                                if (part.name == ENFORCEMENT) {
                                    enforcementInput = part.value
                                } else {
                                    logger.warn { "Received not expected form item multipart parameter ${part.name}" }
                                }
                            }
                            is PartData.FileItem -> {
                                newFileName = part.originalFileName as String
                                stream = part.streamProvider()
                            }
                            is PartData.BinaryItem -> {
                                logger.warn { "Received not expected binary item multipart parameter ${part.name}" }
                            }
                            else -> {
                                // TODO
                            }
                        }
                    }
                } else if (call.request.contentType().match(ContentType.Application.FormUrlEncoded)) {
                    val parameters = call.receiveParameters()
                    newFileName = parameters[FILE_NAME]
                    enforcementInput = parameters[ENFORCEMENT]
                    stream = "todo this is useless".inputStream() // TODO
                } else {
                    // TODO
                }


                val enforcement = if (enforcementInput == null) {
                    return@post unprocessableEntity(call,
                        "Missing $ENFORCEMENT parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS)
                } else {
                    try {
                        EnforcementType.valueOf(enforcementInput!!)
                    } catch (e: IllegalArgumentException) {
                        return@post unprocessableEntity(call,
                            "Wrong $ENFORCEMENT parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                    }
                }
                if (stream == null) {
                    return@post unprocessableEntity(call,
                        "Missing $FILE_CONTENT parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS)
                }
                if (newFileName == null) {
                    return@post unprocessableEntity(call,
                        "Missing $FILE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS)
                }
                logger.info { "User $loggedUser is asking to create file $newFileName with enforcement $enforcement" }

                val coreParam = call.parameters[CORE] ?: return@post unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@post unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                    ?: return@post notFound(call,
                        "Profile of logged user $loggedUser not found, create one",
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                    val message = "Core created is not RBAC"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                coreObject as CoreRBAC

                /** Create the new file.  */
                val addFileCode = coreObject.addFile(newFileName!!, stream!!, enforcement)
                if (addFileCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@post internalError(call,
                        "Error while creating file $newFileName",
                        addFileCode)
                }
                call.respond(addFileCode)
            }

            /** Update a file in the access control policy */
            patch {
                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@patch unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                var fileName: String? = null
                var stream: InputStream? = null

                if (call.request.contentType().match(ContentType.MultiPart.FormData)) {
                    call.receiveMultipart().forEachPart { part ->
                        when (part) {
                            is PartData.FormItem -> {
                                logger.warn { "Received not expected form item multipart parameter ${part.name}" }
                            }
                            is PartData.FileItem -> {
                                fileName = part.originalFileName as String
                                stream = part.streamProvider()
                            }
                            is PartData.BinaryItem -> {
                                logger.warn { "Received not expected binary item multipart parameter ${part.name}" }
                            }
                        }
                    }
                } else if (call.request.contentType().match(ContentType.Application.FormUrlEncoded)) {
                    val parameters = call.receiveParameters()
                    fileName = parameters[FILE_NAME]
                    val fileContent = parameters[FILE_CONTENT]
                    stream = fileContent?.inputStream()
                } else {
                    // TODO
                }

                if (fileName == null) {
                    return@patch unprocessableEntity(call,
                        "Missing $FILE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS)
                }
                if (stream == null) {
                    return@patch unprocessableEntity(call,
                        "Missing $FILE_CONTENT parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS)
                }
                logger.info { "User $loggedUser is asking to write file $fileName" }

                val coreParam = call.parameters[CORE] ?: return@patch unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@patch unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                    ?: return@patch notFound(call,
                        "Profile of logged user $loggedUser not found, create one",
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                    val message = "Core created is not RBAC"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                coreObject as CoreRBAC

                /** Update the file.  */
                val writeFileCode = coreObject.writeFile(fileName!!, stream!!)
                if (writeFileCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@patch internalError(call,
                        "Error while writing file $fileName",
                        writeFileCode)
                }
                call.respond(writeFileCode)
            }


            /**
             * Allows connecting to the proxy
             * through a WebSocket (WS)
             */
            val connections = Collections.synchronizedSet<Connection?>(LinkedHashSet())
            webSocket {
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
                addSocketToSection(call.sessions, this, coreType)

                val thisConnection = Connection(this, loggedUser)
                connections += thisConnection
                try {
                    for (frame in incoming) {
                        frame as? Frame.Text ?: continue
                        val receivedText = frame.readText()
                        logger.info { "received message from client: $receivedText" }
                    }
                } catch (e: Exception) {
                    logger.error { "Exception: ${e.localizedMessage}" }
                    logger.error { e.printStackTrace() }
                } finally {
                    logger.warn { "Removing $thisConnection!" }
                    connections -= thisConnection
                }
            }
        }

        route(ASSIGNMENTS) {

            /** Return the assignments of the currently logged-in user */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@get unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val coreParam = call.parameters[CORE] ?: return@get unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@get unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                    ?: return@get notFound(call,
                        "Profile of logged user $loggedUser not found, create one",
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                    val message = "Core created is not RBAC"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                coreObject as CoreRBAC

                val requestedUsername = if(coreObject.coreParameters.user.isAdmin) {
                    call.request.queryParameters[USERNAME]
                } else {
                    loggedUser
                }
                val requestedRoleName = call.request.queryParameters[ROLE_NAME]
                logger.info {
                    "User $loggedUser is querying for assignments with filter user " +
                    "$requestedUsername and role $requestedRoleName for core $coreType"
                }

                /** Get the assignments.  */
                val getAssignmentsResult = coreObject.getAssignments(username = requestedUsername, roleName = requestedRoleName)
                if (getAssignmentsResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(call,
                        "Error while getting assignments",
                        getAssignmentsResult.code)
                }
                call.respond(getAssignmentsResult.roleTuples ?: hashSetOf())
            }
        }

        route(PERMISSIONS) {

            /** Return the permissions of the currently logged-in user */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                /** Users must be logged-in to access this API */
                val loggedUser = getSessionUsername(call.sessions) ?: return@get unauthorized(call,
                    "User is not authenticated", OutcomeCode.CODE_036_UNAUTHORIZED)

                val coreParam = call.parameters[CORE] ?: return@get unprocessableEntity(call,
                    "Missing $CORE parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                val coreType = try {
                    CoreType.valueOf(coreParam)
                } catch (e: IllegalArgumentException) {
                    return@get unprocessableEntity(call,
                        "Wrong $CORE parameter", OutcomeCode.CODE_020_INVALID_PARAMETER)
                }

                val coreObject = getOrCreateCore(call.sessions, loggedUser, coreType)
                    ?: return@get notFound(call,
                        "Profile of logged user $loggedUser not found, create one",
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND)

                if (!coreObject::class.isSubclassOf(CoreRBAC::class)) {
                    val message = "Core created is not RBAC"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                coreObject as CoreRBAC

                val requestedRoleName = call.request.queryParameters[ROLE_NAME]
                val requestedFileName = call.request.queryParameters[FILE_NAME]
                logger.info {
                    "User $loggedUser is querying for permissions with filter role " +
                    "$requestedRoleName and file $requestedFileName for core $coreType"
                }

                /** Get the permissions.  */
                val getPermissionsResult = coreObject.getPermissions(
                    roleName = requestedRoleName,
                    fileName = requestedFileName
                )
                if (getPermissionsResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(call,
                        "Error while getting assignments",
                        getPermissionsResult.code)
                }
                call.respond(getPermissionsResult.permissionTuples ?: hashSetOf())
            }
        }

    }
}

/** Routes related to user's login; login (post), logout (delete) */
fun Route.loginRouting() {

    /** Wrap all routes related to log in */
    route(LOGIN) {

        /** Log in the user */
        post {
            if (doesSessionExists(call.sessions)) {
                logger.warn { "Received login request from already logged user ${getSessionUsername(call.sessions)}" }
                return@post ok(call)
            }
            else {
                val postParameters = call.receiveParameters()
                val username = postParameters[USERNAME] ?: return@post unprocessableEntity(call,
                    "Missing $USERNAME parameter", OutcomeCode.CODE_019_MISSING_PARAMETERS)
                logger.info { "Received login request for user $username" }
                // TODO actually login the user (https://ktor.io/docs/authentication.html)

                createSession(call.sessions, username)
                return@post ok(call)
            }
        }
    }

    /** Wrap all routes related to log out */
    route(LOGOUT) {

        /** Log out the user */
        delete {
            if (doesSessionExists(call.sessions)) {
                logger.info { "Received logout request from user ${getSessionUsername(call.sessions)} " }
                call.sessions.clear<UserSession>()
                return@delete ok(call)
            }
            else {
                logger.warn { "Received logout request from not logged-in user" }
                return@delete ok(call)
            }
        }
    }
}

/** Register the routes for the proxy */
fun Application.registerProxyRoutes() {
    logger.info { "Registering proxy routes" }
    routing {
        velocityRouting()
        profileRouting()
        loginRouting()
        adminRouting()
        userRouting()
    }
}

/** Represent a web socket [session] with the user [username] */
data class Connection(val session: DefaultWebSocketSession, val username: String)