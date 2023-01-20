package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.OutcomeCode
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * The key is the username (currently logged in) while
 * the value is the number of sessions the user has active
 */
private val loggedUsers: HashMap<String, Int> = hashMapOf()


/** Controller for users' login (and authentication) */
class LoginController {

    companion object {

        /**
         * Ensure that the credentials provided
         * by the [username] are valid to login.
         * Allow multiple logins
         */
        fun login(username: String): OutcomeCode {
            logger.info { "Logging in user $username" }
            loggedUsers[username] = loggedUsers.getOrDefault(username, 0) + 1
            // TODO actually login the user (https://ktor.io/docs/authentication.html)
            return OutcomeCode.CODE_000_SUCCESS
        }

        /**
         * The [username] is logging out
         */
        fun logout(username: String): OutcomeCode {
            logger.info { "Logging out user $username" }
            loggedUsers[username] = loggedUsers[username]!! - 1
            // TODO actually logout the user (https://ktor.io/docs/authentication.html)
            return OutcomeCode.CODE_000_SUCCESS
        }

        /** Check whether the user is currently logged in */
        fun isUserLoggedIn(username: String): Boolean = (loggedUsers[username] ?: 0) > 0
    }
}











