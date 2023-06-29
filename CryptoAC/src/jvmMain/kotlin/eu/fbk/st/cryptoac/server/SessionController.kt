package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.PolicyModel
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.mqtt.CoreABACMQTT
import eu.fbk.st.cryptoac.core.mqtt.CoreRBACMQTT
import io.ktor.server.sessions.*
import io.ktor.websocket.*
import mu.KotlinLogging
import java.util.concurrent.ConcurrentHashMap
import kotlin.reflect.full.isSubclassOf

private val logger = KotlinLogging.logger {}

/**
 * The list of cores currently active on this server.
 * The key is the username, while the value is an hash map
 * that, for each core type, stores the corresponding core
 * object. Note that we use the mutex of each core object to
 * synchronize operations done by cores, so that a core always
 * has to finish the current operation before start another one.
 * Otherwise, an agent logged into two (or more) sessions
 * may concurrently modify the state of the AC policy, leading
 * to inconsistencies. The same reasoning applies to internal
 * variables of the core object, of course
 */
private val cores: ConcurrentHashMap<String, HashMap<CoreType, Core>> = ConcurrentHashMap()
// TODO ensure usages of "cores" are thread-safe

/** Controller for users' session */
class SessionController {

    companion object {

        /**
         * Create a new user session in the [session] for the given [username].
         * Note that there may be multiple sessions for the same user (i.e.,
         * when the user is logging in from different browsers or devices)
         */
        fun createSession(session: CurrentSession, username: String) {
            logger.info { "Creating a new session for user $username" }
            session.set(UserSession(username = username))
            if (!cores.containsKey(username)) {
                logger.info { "Initializing the 'cores' object for user $username" }
                cores[username] = hashMapOf()
            } else {
                logger.info { "The 'cores' object for user $username already exists" }
            }
        }

        /** Add the [wss] to the user [session] for the current [core] */
        fun addSocketToSession(session: CurrentSession, wss: DefaultWebSocketSession, core: CoreType) {
            when (core) {
                CoreType.RBAC_AT_REST -> {
                    val message = "Web socket is not expected for ${CoreType.RBAC_AT_REST}"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                CoreType.RBAC_MQTT -> {
                    val userSession = session.get<UserSession>()
                    if (userSession != null && cores[userSession.username]!![core] != null) {
                        (cores[userSession.username]!![core]!! as CoreRBACMQTT).wss = wss
                    } else {
                        val message = "User is logged-in but no session was found"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                }
                CoreType.ABAC_AT_REST -> {
                    val message = "Web socket is not expected for ${CoreType.ABAC_AT_REST}"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
                CoreType.ABAC_MQTT -> {
                    val userSession = session.get<UserSession>()
                    if (userSession != null && cores[userSession.username]!![core] != null) {
                        (cores[userSession.username]!![core]!! as CoreABACMQTT).wss = wss
                    } else {
                        val message = "User is logged-in but no session was found"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                }
            }
        }

        /** Check whether the login [session] exists */
        fun doesSessionExists(session: CurrentSession): Boolean =
            (session.get<UserSession>() != null)

        /** Get the username in the login [session], if it exists */
        fun getSessionUsername(session: CurrentSession): String? =
            session.get<UserSession>()?.username

        /**
         * Add the new [core] for the [username],
         * eventually replacing the old core
         */
        fun setUserCore(username: String, core: Core) {
            val coreType = core.coreParameters.coreType
            if (cores[username]!![coreType] != null) {
                logger.info {
                    "Replacing core of type " +
                    "$coreType for user $username"
                }
                cores[username]!![coreType]!!.deinitCore()
            } else {
                logger.info {
                    "Adding a new core of type " +
                    "$coreType to user $username"
                }
            }
            cores[username]!![coreType] = core
        }

        /**
         * Get the core of the [username] for the given
         * [coreType], or create it with the given
         * [parameters], and check that is can be used for
         * the given [policyModel]
         */
        fun getOrCreateCore(
            username: String,
            coreType: CoreType,
            parameters: CoreParameters,
            policyModel: PolicyModel
        ): Core {
            val core = if (cores[username]!![coreType] != null) {
                logger.info { "Getting core of type $coreType for user $username" }
                cores[username]!![coreType]!!
            } else {
                logger.info { "Creating core of type $coreType for user $username" }
                val newCore = CoreFactory.getCore(parameters)
                setUserCore(username, newCore)
                newCore.initCore()
                newCore
            }

            when (policyModel) {
                PolicyModel.RBAC -> {
                    if (!core::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                }
                PolicyModel.ABAC -> {
                    if (!core::class.isSubclassOf(CoreABAC::class)) {
                        val message = "Core created is not ABAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                }
            }

            return core
        }

        /** De-init all cores for the [username] */
        fun deinitAllCores(username: String) {
            cores[username]?.forEach {
                it.value.deinitCore()
            }
            cores.remove(username)
        }
    }
}

/** Wrapper for users' session data in the server ([username]) */
data class UserSession(val username: String) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as UserSession

        if (username != other.username) return false

        return true
    }

    override fun hashCode(): Int {
        return username.hashCode()
    }
}
