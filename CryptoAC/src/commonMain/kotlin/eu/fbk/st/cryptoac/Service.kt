package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.model.CodeBoolean
import eu.fbk.st.cryptoac.model.CodeServiceParameters
import eu.fbk.st.cryptoac.model.unit.User

/**
 * Interface defining the
 * methods of a service
 */
interface Service {

    /**
     * Check whether the service was
     * already configured (at least once)
     */
    fun alreadyConfigured(): CodeBoolean

    /**
     * This function is invoked when initializing the
     * admin (after the 'init' function), and it should
     * configure the service with the given [parameters]
     * and return the outcome code. When implementing this
     * function, remember to decide how to handle (e.g.,
     * reject or allow) subsequent invocations
     */
    fun configure(
        parameters: CoreParameters? = null
    ): OutcomeCode

    /**
     * This function is invoked each time the (interface toward
     * the) service is created, and it should contain the code to
     * initialize the interface (e.g., possibly connect to
     * remote services like MQTT brokers, databases, etc.)
     */
    fun init() // TODO should we return the code in case of error?

    /**
     * This function is invoked each time the (interface toward
     * the) service is destroyed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    fun deinit() // TODO should we return the code in case of error?

    /**
     * Add (and initialize) the [newAdmin] in the
     * service and return the outcome code. Check that
     * the name of the admin is the expected one and
     * that the admin was not already added (or initialized)
     */
    fun addAdmin(
        newAdmin: User
    ): OutcomeCode

     /**
     * Initialize the [user] in the service and
     * return the outcome code. Check that the user
     * is present and was not already initialized or
     * deleted. This method should support invocations
     * by non-admin users
     */
    fun initUser(
        user: User
    ): OutcomeCode

    /**
     * Add the [newUser] in the service by, e.g.,
     * creating an account for the user. Check that
     * the user was not already added. Finally,
     * return the user's configuration parameters
     * together with the outcome code
     */
    fun addUser(
        newUser: User
    ): CodeServiceParameters

    /**
     * Delete [username] from the service. Check
     * that the user exists
     */
    fun deleteUser(
        username: String
    ): OutcomeCode
}