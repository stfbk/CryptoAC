package eu.fbk.st.cryptoac.ac

import eu.fbk.st.cryptoac.Lockable
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.Service
import eu.fbk.st.cryptoac.model.tuple.PermissionType

/**
 * Interface defining the
 * methods to interact with
 * a traditional AC enforcement
 * mechanism
 */
interface ACService : Lockable, Service {

    /**
     * Check whether the [username] has
     * [permission] over [resourceName] and
     * return either CODE_000_SUCCESS
     * (if the user is authorized) or
     * CODE_037_FORBIDDEN (if the user is
     * not authorized). [permission] can
     * be either READ or WRITE
     */
    fun isUserAllowed(
        username: String,
        permission: PermissionType,
        resourceName: String,
    ): OutcomeCode
}
