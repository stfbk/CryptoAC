package eu.fbk.st.cryptoac.proxy

import eu.fbk.st.cryptoac.core.CoreFactory
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.Core
import io.ktor.sessions.*
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/** The list of cores currently active on this server. */
private val cores: HashMap<String, HashMap<CoreType, Core>> = hashMapOf()

/** Controller for users' session. */
class SessionController {

    companion object {

        /** Create a new empty login session in the [session] for the given [username]. */
        fun createSession(session: CurrentSession, username: String) {
            logger.info { "Creating a new session for user $username" }
            session.set(UserSession(username = username))
            cores[username] = hashMapOf()
        }

        /** Check whether the login [session] exists. */
        fun doesSessionExists(session: CurrentSession): Boolean = (session.get<UserSession>() != null)

        /** Get the username in the login [session], if it exists. */
        fun getSessionUsername(session: CurrentSession): String? = session.get<UserSession>()?.username

        /** Add the new [core] to the [session], eventually replacing the old one. */
        fun setSessionCore(session: CurrentSession, core: Core) {
            val userSession = session.get<UserSession>()
            if (userSession == null) {
                val message = "User is logged in but no session was found"
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
         * Get from the [session] the core of the [username] for the given [core] or create it.
         * Return null if the user is logged in but no profile was found for the given [core].
         */
        fun getOrCreateCore(session: CurrentSession, username: String, core: CoreType): Core? {
            val userSession = session.get<UserSession>()
            return if (userSession != null && cores[userSession.username]!![core] != null) {
                logger.info { "Getting core of type $core from session of user $username" }
                cores[userSession.username]!![core]!!
            } else {
                logger.info { "Creating core of type $core for session of user $username" }
                val loggedUserParams = ProfileManager.loadProfile(username, core)
                if (loggedUserParams == null) {
                    logger.warn { "User $username is logged in but no profile was found" }
                    return null
                }
                val newCore = CoreFactory.getCore(loggedUserParams)
                setSessionCore(session, newCore)
                newCore
            }
        }
    }
}