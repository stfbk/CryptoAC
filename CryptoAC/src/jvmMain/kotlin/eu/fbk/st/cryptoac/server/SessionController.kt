package eu.fbk.st.cryptoac.server

import development
import eu.fbk.st.cryptoac.PolicyModel
import eu.fbk.st.cryptoac.core.*
import io.ktor.http.cio.websocket.*
import io.ktor.sessions.*
import mu.KotlinLogging
import kotlin.reflect.full.isSubclassOf

private val logger = KotlinLogging.logger {}

/** The list of cores currently active on this server */
private val cores: HashMap<String, HashMap<CoreType, Core>> = hashMapOf()

/** Controller for users' session */
class SessionController {

    companion object {

        /** Create a new empty login session in the [session] for the given [username] */
        fun createSession(session: CurrentSession, username: String) {
            logger.info { "Creating a new session for user $username" }
            session.set(UserSession(username = username))
            cores[username] = hashMapOf()
        }

        /** Add the [wss] to the user [session] for the current [core] */
        fun addSocketToSection(session: CurrentSession, wss: DefaultWebSocketSession, core: CoreType) {
            when (core) {
                CoreType.RBAC_CLOUD -> { /* TODO ERRORE */ }
                CoreType.RBAC_MQTT -> {
                    val userSession = session.get<UserSession>()
                    if (userSession != null && cores[userSession.username]!![core] != null) {
                        (cores[userSession.username]!![core]!! as CoreRBACMQTT).wss = wss
                    } else {
                        // TODO ERRORE
                    }
                }
                CoreType.RBAC_MOCK -> if (development) {
                    /** Do nothing */
                } else {
                    val message = "Using MOCK core when not in development mode"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
            }
        }

        /** Check whether the login [session] exists */
        fun doesSessionExists(session: CurrentSession): Boolean = (session.get<UserSession>() != null)

        /** Get the username in the login [session], if it exists */
        fun getSessionUsername(session: CurrentSession): String? = session.get<UserSession>()?.username

        /** Add the new [core] to the [session], eventually replacing the old one */
        fun setSessionCore(session: CurrentSession, core: Core) {
            val userSession = session.get<UserSession>()
            if (userSession == null) {
                val message = "User is logged-in but no session was found"
                logger.error { message }
                throw IllegalStateException(message)
            } else {
                val coreType = core.coreParameters.coreType
                logger.info { "Adding a new core of type $coreType to session of user ${userSession.username}" }
                cores[userSession.username]!![coreType] = core
                session.set(userSession)
            }
        }

        /**
         * Get from the [session] the core of the [username] 
         * for the given [coreType], or create it with the given
         * [parameters], and check that is can be used for
         * the given [policyModel]
         */
        fun getOrCreateCore(
            session: CurrentSession,
            username: String,
            coreType: CoreType,
            parameters: CoreParameters,
            policyModel: PolicyModel,
        ): Core {
            val userSession = session.get<UserSession>()
            val core = if (userSession != null && cores[userSession.username]!![coreType] != null) {
                logger.info { "Getting core of type $coreType from session of user $username" }
                cores[userSession.username]!![coreType]!!
            } else {
                logger.info { "Creating core of type $coreType for session of user $username" }
                val newCore = CoreFactory.getCore(parameters)
                setSessionCore(session, newCore)
                newCore
            }

            when(policyModel) {
                PolicyModel.RBAC -> {
                    if (!core::class.isSubclassOf(CoreRBAC::class)) {
                        val message = "Core created is not RBAC"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                }
                PolicyModel.ABAC -> TODO()
            }
            return core
        }
    }
}


/** Wrapper for users' session data in the server consisting of the [username] */
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