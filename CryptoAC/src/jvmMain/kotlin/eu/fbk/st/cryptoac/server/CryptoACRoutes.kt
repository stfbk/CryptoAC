package eu.fbk.st.cryptoac.server

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
import eu.fbk.st.cryptoac.API.CRYPTOAC
import eu.fbk.st.cryptoac.API.ROLES
import eu.fbk.st.cryptoac.API.USERS
import eu.fbk.st.cryptoac.PolicyModel
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
import eu.fbk.st.cryptoac.core.elements.ElementStatus
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.encodeBase64
import eu.fbk.st.cryptoac.inputStream
import eu.fbk.st.cryptoac.server.SessionController.Companion.addSocketToSection
import eu.fbk.st.cryptoac.server.SessionController.Companion.createSession
import eu.fbk.st.cryptoac.server.SessionController.Companion.doesSessionExists
import eu.fbk.st.cryptoac.server.SessionController.Companion.getOrCreateCore
import eu.fbk.st.cryptoac.server.SessionController.Companion.getSessionUsername
import eu.fbk.st.cryptoac.server.SessionController.Companion.setSessionCore
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.http.cio.websocket.*
import io.ktor.http.content.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.sessions.*
import io.ktor.util.*
import io.ktor.websocket.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import mu.KotlinLogging
import java.io.File
import java.io.InputStream
import java.lang.IllegalArgumentException
import java.util.*
import kotlin.collections.LinkedHashSet

private val logger = KotlinLogging.logger {}

/** Route related to the web app */
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

// TODO put this elsewhere
data class UserData(
    var loggedUser: String? = null,
    var coreType: CoreType? = null,
    var parameters: CoreParameters? = null,
)
val loggedUserDataKey = AttributeKey<UserData>("loggedUserDataKey")

/**
 * Routes related to users' profiles; create (post),
 * read (get), update (patch), delete (delete)
 */
fun Route.profileRouting() {


    /** Wrap all routes related to the users' profiles */
    route(PROFILES) {

        /**
         * Ensure that the user invoking the API
         * is authenticated and provided a valid
         * core parameter
         */
        intercept(ApplicationCallPipeline.Features) {
            if (checkPreconditions(
                    call, 
                    checkProfile =false, 
                    checkAdmin = false)
            ) {
                proceed()
            } else {
                finish()
            }
        }

        /**
         * The admin can get the profile of all users,
         * while a user can only get her own profile
         */
        get("{$USERNAME}") {

            // TODO implement button in web interface to
            //  download user's profile as json

            val userData = call.attributes[loggedUserDataKey]
            val loggedUser = userData.loggedUser!!
            val coreType = userData.coreType!!

            val requestedUsername = call.parameters[USERNAME] ?:
                return@get unprocessableEntity(
                    call,
                    "Missing $USERNAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS
                )

            logger.info {
                "User $loggedUser is querying profile of " +
                "user $requestedUsername for core $coreType"
            }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)
            if (loggedUserParams == null) {
                logger.info { "User $loggedUser is logged in but no profile was found" }
                return@get notFound(
                    call,
                    "Profile of logged user $loggedUser not found",
                    OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                )
            }

            if (loggedUser == requestedUsername) {
                call.respond(myJson.encodeToString(loggedUserParams))
            } else if (loggedUser == ADMIN && loggedUserParams.user.isAdmin) {
                val requestedUserParams = ProfileManager.loadProfile(requestedUsername, coreType)
                if (requestedUserParams == null) {
                    val message = "Profile of user $requestedUsername not found"
                    logger.info { message }
                    return@get notFound(
                        call,
                        message,
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                    )
                }
                else {
                    call.respond(myJson.encodeToString(requestedUserParams))
                }
            }
            else {
                logger.warn { "User $loggedUser is not authorized to get profile of user $requestedUsername" }
                return@get forbidden(
                    call,
                    "Cannot get profile of user $requestedUsername",
                    OutcomeCode.CODE_035_FORBIDDEN
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

            val userData = call.attributes[loggedUserDataKey]
            val loggedUser = userData.loggedUser!!
            val coreType = userData.coreType!!

            val requestedUsername = call.parameters[USERNAME] ?:
                return@delete unprocessableEntity(
                    call,
                    "Missing $USERNAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS
                )

            logger.info {
                "User $loggedUser is deleting profile of " +
                "user $requestedUsername for core $coreType"
            }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)
            if (loggedUserParams == null) {
                logger.info { "User $loggedUser is logged in but no profile was found" }
                return@delete notFound(
                    call,
                    "Profile of logged user $loggedUser not found",
                    OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                )
            }

            /**
             * Proceed only if the admin is deleting
             * the profile of another user or the
             * user herself is deleting her profile
             */
            return@delete if (
                (loggedUser == requestedUsername) ||
                (loggedUser == ADMIN && loggedUserParams.user.isAdmin)
            ) {
                if (ProfileManager.deleteProfile(requestedUsername, coreType)) {
                    ok(call)
                } else {
                    notFound(
                        call,
                        "Profile of user $requestedUsername not found",
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                    )
                }
            } else {
                logger.warn { "User $loggedUser is not authorized to delete profile of user $requestedUsername" }
                return@delete forbidden(
                    call,
                    "Cannot delete profile of user $requestedUsername",
                    OutcomeCode.CODE_035_FORBIDDEN
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

            val userData = call.attributes[loggedUserDataKey]
            val loggedUser = userData.loggedUser!!
            val coreType = userData.coreType!!

            logger.info { "User $loggedUser is creating a profile for core $coreType" }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)
            if (loggedUserParams == null) {
                logger.info { "User $loggedUser is logged in but no profile was found" }
                return@post notFound(
                    call,
                    "Profile of logged user $loggedUser not found",
                    OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                )
            }


            /** Get the core parameters from the request */
            // TODO should be "val coreParameters = call.receive<CoreParameters>()", but, if we
            //  leave the serialization process to Ktor, the encoded string will not contain
            //  the "type" field (e.g., "type":"eu.fbk.st.cryptoac.core.CoreParametersMOCK"),
            //  which is fundamental for decoding. Therefore, we do with strings; However,
            //  an additional issue is that serializing from JS (i.e., from the web dashboard)
            //  will add quotes around the payload, while serializing from the JVM (i.e., during
            //  tests) won't; investigate
            val receivedParameters  = call.receive<String>()
            val coreParametersString = if (
                receivedParameters.startsWith("\"") ||
                receivedParameters.startsWith("'")
            ) {
                receivedParameters.replace("""\"""", "\"").drop(1).dropLast(1)
            } else {
                receivedParameters
            }
            val coreParameters: CoreParameters = myJson.decodeFromString(coreParametersString)
            val requestedUsername = coreParameters.user.name
            val requestedCore = coreParameters.coreType


            if (
                loggedUser == requestedUsername ||
                (loggedUser == ADMIN && loggedUserParams.user.isAdmin)
            ) {

                logger.info {
                    "The profile to be created is for a user with name " +
                    "$requestedUsername and core $requestedCore"
                }

                if (coreParameters.user.isAdmin && requestedUsername != ADMIN) {
                    return@post unprocessableEntity(
                        call,
                        "The given username ($requestedUsername) should be $ADMIN",
                        OutcomeCode.CODE_018_INTERFACE_CONFIGURATION_PARAMETERS
                    )
                }

                if (!coreParameters.checkParameters()) {
                    return@post unprocessableEntity(
                        call,
                        "Parameters were not validated by regular expressions",
                        OutcomeCode.CODE_018_INTERFACE_CONFIGURATION_PARAMETERS
                    )
                }

                /**
                 * We generate cryptographic keys and invoke the
                 * initialization function only if the user has
                 * an incomplete status, otherwise we just save
                 * the profile
                 */
                if (coreParameters.user.status == ElementStatus.INCOMPLETE) {

                    logger.info { "User $requestedUsername marked as incomplete, initializing" }

                    val cryptoObject = CryptoFactory.getCrypto(coreParameters.cryptoType)
                    val asymEncKeys = cryptoObject.generateAsymEncKeys()
                    val asymSigKeys = cryptoObject.generateAsymSigKeys()
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
                 * profile, store the core in the session
                 */
                // TODO when the session is destroyed, you have to clear
                //  out the MQTT core, so to disconnect the MQTT client (?)
                if (requestedUsername == loggedUser) {
                    setSessionCore(call.sessions, CoreFactory.getCore(coreParameters))
                }

                return@post ok(call)
            }
            else {
                logger.warn { "User $loggedUser is not authorized to create profile for user $requestedUsername" }
                return@post forbidden(
                    call,
                    "Cannot create profile of user $requestedUsername",
                    OutcomeCode.CODE_035_FORBIDDEN,
                )
            }
        }

        /**
         * The admin can update the profile of all users,
         * while a user can only update her own profile
         */
        patch {

            val userData = call.attributes[loggedUserDataKey]
            val loggedUser = userData.loggedUser!!
            val coreType = userData.coreType!!

            logger.info { "User $loggedUser is updating a profile for core $coreType" }

            val loggedUserParams = ProfileManager.loadProfile(loggedUser, coreType)
            if (loggedUserParams == null) {
                logger.info { "User $loggedUser is logged in but no profile was found" }
                return@patch notFound(
                    call,
                    "Profile of logged user $loggedUser not found",
                    OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                )
            }

            /** Get the core parameters from the request */
            // TODO should be "val coreParameters = call.receive<CoreParameters>()", but, if we
            //  leave the serialization process to Ktor, the encoded string will not contain
            //  the "type" field (e.g., "type":"eu.fbk.st.cryptoac.core.CoreParametersMOCK"),
            //  which is fundamental for decoding. Therefore, we do with strings; However,
            //  an additional issue is that serializing from JS (i.e., from the web dashboard)
            //  will add quotes around the payload, while serializing from the JVM (i.e., during
            //  tests) won't; investigate
            val receivedParameters  = call.receive<String>()
            val coreParametersString = if (
                receivedParameters.startsWith("\"") ||
                receivedParameters.startsWith("'")
            ) {
                receivedParameters.replace("""\"""", "\"").drop(1).dropLast(1)
            } else {
                receivedParameters
            }
            val updatedCoreParameters: CoreParameters = myJson.decodeFromString(coreParametersString)
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
                        OutcomeCode.CODE_018_INTERFACE_CONFIGURATION_PARAMETERS
                    )
                }


                val oldUserParameters = if (loggedUser == requestedUsername) {
                    loggedUserParams
                } else {
                    ProfileManager.loadProfile(requestedUsername, coreType)
                }
                if (oldUserParameters == null) {
                    val message = "Profile of user $requestedUsername not found"
                    logger.info { message }
                    return@patch notFound(
                        call,
                        message,
                        OutcomeCode.CODE_038_PROFILE_NOT_FOUND
                    )
                }

                oldUserParameters.update(updatedCoreParameters)
                
                /** Finally, save the profile and update the core in the session */
                ProfileManager.updateProfile(requestedUsername, oldUserParameters)
                setSessionCore(call.sessions, CoreFactory.getCore(oldUserParameters))

                return@patch ok(call)
            }
            else {
                logger.warn { "User $loggedUser is not authorized to update profile of user $requestedUsername" }
                return@patch forbidden(
                    call,
                    "Cannot update profile of user $requestedUsername",
                    OutcomeCode.CODE_035_FORBIDDEN,
                )
            }
        }
    }
}

/** Routes related to admin's access control policy management */
fun Route.adminRouting() {

    /** Wrap all routes related to CryptoAC */
    route(CRYPTOAC) {

        /**
         * Ensure that the user invoking the API
         * is authenticated, provided a valid
         * core parameter, has a profile and
         * is the admin
         */
        intercept(ApplicationCallPipeline.Features) {
            if (checkPreconditions(call)) {
                proceed()
            } else {
                finish()
            }
        }

        route(USERS) {

            /**
             * Get the list of currently
             * existing users
             */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                logger.info { "User $loggedUser is retrieving the list of users" }

                /** Get the (visible) users */
                val getUsersResult = coreObject.getUsers()
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

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val newUsername = call.receiveParameters()[USERNAME] ?:
                    return@post unprocessableEntity(
                        call,
                        "Missing $USERNAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to create " +
                    "user $newUsername for core $coreType"
                }

                /** Create the new user  */
                val addUserResult = coreObject.addUser(newUsername)
                if (addUserResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@post internalError(
                        call,
                        "Error while creating user $newUsername",
                        addUserResult.code
                    )
                }
                val parameters = addUserResult.parameters
                call.respond(myJson.encodeToString(parameters))

            }

            /**
             * Delete a user from the
             * access control policy
             */
            delete("{$USERNAME}") {

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val usernameToDelete = call.parameters[USERNAME] ?:
                    return@delete unprocessableEntity(
                        call,
                        "Missing $USERNAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to delete " +
                    "user $usernameToDelete for core $coreType"
                }

                /** Delete the user  */
                val deleteUserCode = coreObject.deleteUser(usernameToDelete)
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

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                logger.info { "User $loggedUser is retrieving the list of roles" }

                /** Get the (visible) roles */
                val getRolesResult = coreObject.getRoles()
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
                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val newRoleName = call.receiveParameters()[ROLE_NAME] ?:
                    return@post unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to create " +
                    "role $newRoleName for core $coreType"
                }

                /** Create the new role  */
                val addRoleCode = coreObject.addRole(newRoleName)
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
                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val roleNameToDelete = call.parameters[ROLE_NAME] ?:
                    return@delete unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to delete " +
                    "role $roleNameToDelete for core $coreType"
                }

                /** Delete the role  */
                val deleteRoleCode = coreObject.deleteRole(roleNameToDelete)
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

        route(FILES) {

            /**
             * Get the list of currently
             * existing files
             */
            get {
                // TODO implement button in web interface
                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                logger.info { "User $loggedUser is retrieving the list of files" }

                /** Get the (visible) files */
                val getFilesResult = coreObject.getFiles()
                if (getFilesResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(
                        call,
                        "Error while getting files",
                        getFilesResult.code
                    )
                }
                call.respond(getFilesResult.files ?: hashSetOf())
            }

            /**
             * Delete a file from the
             * access control policy
             */
            delete("{$FILE_NAME}") {
                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val fileNameToDelete = call.parameters[FILE_NAME] ?:
                    return@delete unprocessableEntity(
                        call,
                        "Missing $FILE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to delete " +
                    "file $fileNameToDelete for core $coreType"
                }

                /** Delete the file  */
                val deleteFileCode = coreObject.deleteFile(fileNameToDelete)
                if (deleteFileCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@delete internalError(
                        call,
                        "Error while deleting file $fileNameToDelete",
                        deleteFileCode
                    )
                }
                call.respond(deleteFileCode)

            }
        }

        route(ASSIGNMENTS) {

            /**
             * Create a new user-role assignment
             * in the access control policy
             */
            post {
                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val parameters = call.receiveParameters()
                val username = parameters[USERNAME] ?:
                    return@post unprocessableEntity(
                        call,
                        "Missing $USERNAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val roleName = parameters[ROLE_NAME] ?:
                    return@post unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to assign user " +
                    "$username to role $roleName for core $coreType"
                }

                /** Create the new user-role assignment  */
                val addAssignmentCode = coreObject.assignUserToRole(username, roleName)
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
                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val username = call.parameters[USERNAME] ?:
                    return@delete unprocessableEntity(
                        call,
                        "Missing $USERNAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val roleName = call.parameters[ROLE_NAME] ?:
                    return@delete unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to revoke user " +
                    "$username from role $roleName for core $coreType"
                }

                /** Revoke the user-role assignment  */
                val revokeAssignmentCode = coreObject.revokeUserFromRole(username, roleName)
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
             * a file in the access control policy
             */
            post {
                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val parameters = call.receiveParameters()
                val roleName = parameters[ROLE_NAME] ?:
                    return@post unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val fileName = parameters[FILE_NAME] ?:
                    return@post unprocessableEntity(
                        call,
                        "Missing $FILE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val permissionInput = parameters[PERMISSION] ?:
                    return@post unprocessableEntity(
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
                    "to role $roleName over file $fileName for core $coreType"
                }

                /** Assign the new permission */
                val addPermissionCode = coreObject.assignPermissionToRole(roleName, fileName, permission)
                if (addPermissionCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@post internalError(
                        call,
                        "Error while assigning permission " +
                                "$permission to role $roleName over file $fileName",
                        addPermissionCode
                    )
                }
                call.respond(addPermissionCode)
            }

            /**
             * Delete a permission from a role over a
             * file from the access control policy
             */
            delete("{$ROLE_NAME}/{$FILE_NAME}/{$PERMISSION}") {
                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val roleName = call.parameters[ROLE_NAME] ?:
                    return@delete unprocessableEntity(
                        call,
                        "Missing $ROLE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val fileName = call.parameters[FILE_NAME] ?:
                    return@delete unprocessableEntity(
                        call,
                        "Missing $FILE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                val permissionInput = call.parameters[PERMISSION] ?:
                    return@delete unprocessableEntity(
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
                    "from role $roleName over file $fileName for core $coreType"
                }

                /** Revoke the permission */
                val revokePermissionCode = coreObject.revokePermissionFromRole(roleName, fileName, permission)
                if (revokePermissionCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@delete internalError(
                        call,
                        "Error while revoking permission $permission " +
                                "from role $roleName over file $fileName",
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

        /**
         * Ensure that the user invoking the API
         * is authenticated, provided a valid
         * core parameter and has a profile
         */
        intercept(ApplicationCallPipeline.Features) {
            if (checkPreconditions(call, checkAdmin = false)) {
                proceed()
            } else {
                finish()
            }
        }

        route(FILES) {

            /**
             * Get a file from the access
             * control policy
             */
            get("{$FILE_NAME}") {

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val fileNameToGet = call.parameters[FILE_NAME] ?:
                    return@get unprocessableEntity(
                        call,
                        "Missing $FILE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )

                logger.info {
                    "User $loggedUser is asking to get file " +
                    "$fileNameToGet for core $coreType"
                }

                /** Get the file */
                val cryptoACFile = coreObject.readFile(fileNameToGet)
                if (cryptoACFile.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(
                        call,
                        "Error while getting file $fileNameToGet",
                        cryptoACFile.code
                    )
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

            /**
             * Create a new file in the
             * access control policy
             */
            post {

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC


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
                                    logger.warn { "Received unexpected part ${part.name}" }
                                }
                            }
                            is PartData.FileItem -> {
                                newFileName = part.originalFileName as String
                                stream = part.streamProvider()
                            }
                            is PartData.BinaryItem -> {
                                logger.warn { "Received unexpected binary ${part.name}" }
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
                if (stream == null) {
                    return@post unprocessableEntity(
                        call,
                        "Missing $FILE_CONTENT parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                }
                if (newFileName == null) {
                    return@post unprocessableEntity(
                        call,
                        "Missing $FILE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                }

                logger.info {
                    "User $loggedUser is asking to create file $newFileName " +
                    "with enforcement $enforcement for core $coreType"
                }

                /** Create the new file */
                val addFileCode = coreObject.addFile(newFileName!!, stream!!, enforcement)
                if (addFileCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@post internalError(
                        call,
                        "Error while creating file $newFileName",
                        addFileCode
                    )
                }
                call.respond(addFileCode)
            }

            /**
             * Update a file in the
             * access control policy
             */
            patch {

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                var fileName: String? = null
                var stream: InputStream? = null

                if (call.request.contentType().match(ContentType.MultiPart.FormData)) {
                    call.receiveMultipart().forEachPart { part ->
                        when (part) {
                            is PartData.FormItem -> {
                                logger.warn { "Received unexpected part ${part.name}" }
                            }
                            is PartData.FileItem -> {
                                fileName = part.originalFileName as String
                                stream = part.streamProvider()
                            }
                            is PartData.BinaryItem -> {
                                logger.warn { "Received unexpected binary ${part.name}" }
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
                    return@patch unprocessableEntity(
                        call,
                        "Missing $FILE_NAME parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                }
                if (stream == null) {
                    return@patch unprocessableEntity(
                        call,
                        "Missing $FILE_CONTENT parameter",
                        OutcomeCode.CODE_019_MISSING_PARAMETERS
                    )
                }

                logger.info {
                    "User $loggedUser is asking to write " +
                    "file $fileName for core $coreType"
                }

                /** Update the file */
                val writeFileCode = coreObject.writeFile(fileName!!, stream!!)
                if (writeFileCode != OutcomeCode.CODE_000_SUCCESS) {
                    return@patch internalError(
                        call,
                        "Error while writing file $fileName",
                        writeFileCode
                    )
                }
                call.respond(writeFileCode)
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

            /**
             * Get the assignments of the
             * currently logged-in user
             * */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
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
                val getAssignmentsResult = coreObject.getAssignments(
                    username = requestedUsername,
                    roleName = requestedRoleName
                )
                if (getAssignmentsResult.code != OutcomeCode.CODE_000_SUCCESS) {
                    return@get internalError(call,
                        "Error while getting assignments",
                        getAssignmentsResult.code)
                }
                call.respond(getAssignmentsResult.roleTuples ?: hashSetOf())
            }
        }

        route(PERMISSIONS) {

            /**
             * Get the permissions of the
             * currently logged-in user
             */
            get {
                // TODO implement button in web interface
                // TODO think of eventual path or query parameters

                val userData = call.attributes[loggedUserDataKey]
                val loggedUser = userData.loggedUser!!
                val coreType = userData.coreType!!
                val coreObject = getOrCreateCore(
                    call.sessions, loggedUser, coreType,
                    userData.parameters!!, PolicyModel.RBAC,
                ) as CoreRBAC

                val requestedRoleName = call.request.queryParameters[ROLE_NAME]
                val requestedFileName = call.request.queryParameters[FILE_NAME]
                logger.info {
                    "User $loggedUser is querying for permissions with filter role " +
                    "$requestedRoleName and file $requestedFileName for core $coreType"
                }

                /** Get the permissions */
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
                logger.warn {
                    "Received login request from already " +
                    "logged user ${getSessionUsername(call.sessions)}"
                }
                return@post ok(call)
            }
            else {
                val postParameters = call.receiveParameters()
                val username = postParameters[USERNAME] ?:
                return@post unprocessableEntity(
                    call,
                    "Missing $USERNAME parameter",
                    OutcomeCode.CODE_019_MISSING_PARAMETERS)
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
 * that user is logged in and the core type is provided,
 * and [checkProfile] and whether the user [checkAdmin]
 * if requested. The function store relevant information
 * in the call attributes under the [loggedUserDataKey].
 * Return true if all preconditions are met, false otherwise
 */
suspend fun checkPreconditions(
    call: ApplicationCall,
    checkProfile: Boolean = true,
    checkAdmin: Boolean = true,
): Boolean {
    var preconditionsAreMet = true
    val userData = UserData()

    val loggedUser = getSessionUsername(call.sessions)
    userData.loggedUser = loggedUser
    if (loggedUser == null) {
        unauthorized(
            call,
            "User is not authenticated",
            OutcomeCode.CODE_036_UNAUTHORIZED
        )
        preconditionsAreMet = false
    }

    if (preconditionsAreMet) {
        val coreParam = call.parameters[CORE]
        if (coreParam == null) {
            unprocessableEntity(
                call,
                "Missing $CORE parameter",
                OutcomeCode.CODE_019_MISSING_PARAMETERS
            )
            preconditionsAreMet = false
        } else {
            try {
                val coreType = CoreType.valueOf(coreParam)
                userData.coreType = coreType
            } catch (e: IllegalArgumentException) {
                unprocessableEntity(
                    call,
                    "Wrong $CORE parameter",
                    OutcomeCode.CODE_020_INVALID_PARAMETER
                )
                preconditionsAreMet = false
            }
        }
    }

    if (checkProfile && preconditionsAreMet) {
        val loggedUserParams = ProfileManager.loadProfile(userData.loggedUser!!, userData.coreType!!)
        userData.parameters = loggedUserParams
        if (loggedUserParams == null) {
            logger.info { "User $loggedUser is logged in but no profile was found" }
            notFound(
                call,
                "Profile of logged user $loggedUser not found",
                OutcomeCode.CODE_038_PROFILE_NOT_FOUND
            )
            preconditionsAreMet = false
        }
    }

    if (checkAdmin && preconditionsAreMet) {
        val isAdmin = userData.parameters!!.user.isAdmin
        if (!isAdmin) {
            val apiURI = call.request.uri
            logger.info { "Not-admin User $loggedUser invoking restricted API $apiURI" }
            forbidden(
                call,
                "Not-admin User $loggedUser invoking restricted API $apiURI",
                OutcomeCode.CODE_035_FORBIDDEN
            )
            preconditionsAreMet = false
        }
    }

    call.attributes.put(loggedUserDataKey, userData)

    return preconditionsAreMet
}

/** Represent a web socket [session] with the user [username] */
data class Connection(val session: DefaultWebSocketSession, val username: String)