package eu.fbk.st.cryptoac.mm

import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.Lockable
import eu.fbk.st.cryptoac.Service
import eu.fbk.st.cryptoac.model.unit.UnitElementStatus

/** The default offset for rows in queries */
const val DEFAULT_OFFSET = 0

/** The default limit for rows in queries */
const val DEFAULT_LIMIT = 100

// TODO check the usage of the "NO_LIMIT" variable, it breaks pagination
/** The unlimited value for rows in queries */
const val NO_LIMIT = -1

/**
 * Interface defining the methods to
 * interact with the MM
 */
interface MMService : Lockable, Service {

    /**
     * Retrieve data of the users matching the specified
     * [username] and [status], if given, starting from
     * the [offset] limiting the number of users to return
     * to the given [limit] and with the (possibly) relevant
     * information of whether the user invoking this function
     * [isAdmin]. If no users are found, return an empty set.
     * This method should support invocations by non-admin users
     */
    fun getUsers(
        username: String? = null,
        status: UnitElementStatus? = null,
        isAdmin: Boolean = true,
        offset: Int = DEFAULT_OFFSET,
        limit: Int = DEFAULT_LIMIT,
    ): HashSet<User>
}