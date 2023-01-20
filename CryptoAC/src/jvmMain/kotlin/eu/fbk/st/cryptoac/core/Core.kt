package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.ServiceType
import eu.fbk.st.cryptoac.ac.ACService
import eu.fbk.st.cryptoac.crypto.CryptoPKE
import eu.fbk.st.cryptoac.crypto.CryptoSKE
import eu.fbk.st.cryptoac.dm.DMService
import eu.fbk.st.cryptoac.mm.MMService
import eu.fbk.st.cryptoac.model.CodeCoreParameters
import eu.fbk.st.cryptoac.model.CodeUsers
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.rm.RMService
import kotlinx.coroutines.sync.Mutex
import mu.KotlinLogging

private val logger = KotlinLogging.logger {}

/**
 * A Core implements a cryptographic access control scheme.
 * It receives the [coreParameters] and uses the [cryptoPKE] and
 * [cryptoSKE] objects to perform cryptographic computations.
 * A Core is always used by a [user], and the policy model (e.g.,
 * RBAC, ABAC) has to be specified (and enforced) by subclasses.
 * Finally, a core has a [mutex] for regulating concurrent execution
 */
abstract class Core(
    open val cryptoPKE: CryptoPKE,
    open val cryptoSKE: CryptoSKE,
    open val coreParameters: CoreParameters
) {

    /** The mutex to regulate concurrent execution */
    val mutex = Mutex()

    /** The user object */
    abstract val user: User

    /** The MM service */
    abstract val mm: MMService

    /** The RM service */
    abstract val rm: RMService?

    /** The DM service */
    abstract val dm: DMService

    /** The AC service */
    abstract val ac: ACService?

    /**
     * This function is invoked each time the core object
     * is created (not only the first time), and it
     * should contain the code to set up the core
     * (e.g., possibly connect to remote services like
     * MQTT brokers, databases, etc.)
     */
    open fun initCore() {
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            // TODO return code
        }
        mm.init()
        rm?.init()
        dm.init()
        ac?.init()
        cryptoPKE.init()
        cryptoSKE.init()

        endOfMethod(code) // TODO return code
    }

    /**
     * This function is invoked each time the core object
     * is destroyed, and it should contain the code to
     * de-initialize the core (e.g., possibly disconnect
     * remote services like MQTT brokers, databases, wipe
     * cryptographic secrets, etc.)
     */
    open fun deinitCore() {
        mm.deinit()
        rm?.deinit()
        dm.deinit()
        ac?.deinit()
        cryptoPKE.deinit()
        cryptoSKE.deinit()
        // TODO wipe crypto material from user object
    }

    /**
     * This function is invoked by the admin, and
     * it should configure the services, initialize
     * the admin's status in the various services,
     * set the value of relevant parameters and return
     * the outcome code. Ideally, this function should
     * be invoked only once. When implementing this
     * function, remember to decide how to handle (e.g.,
     * reject or allow) subsequent invocations
     */
    abstract fun configureServices(): OutcomeCode

    /**
     * This function is invoked by the user, and it
     * should initialize the user's status in the
     * various services and return the outcome code.
     * When implementing this function, remember to
     * decide how to handle (e.g., reject or allow)
     * subsequent invocations
     */
    open fun initUser(): OutcomeCode {

        logger.info { "Initializing token and public key of user ${user.name}" }

        /** Lock the status of the services */
        var code = startOfMethod()
        if (code != CODE_000_SUCCESS) {
            return code
        }
        
        /** Init the user in the MM */
        code = mm.initUser(user)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }

        /** Init the user in the RM */
        code = rm?.initUser(user)
            ?: CODE_000_SUCCESS
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }
        
        /** Init the user in the DM */
        code = dm.initUser(user)
        if (code != CODE_000_SUCCESS) {
            return endOfMethod(
                code = code
            )
        }

        /** Init the user in the AC */
        return endOfMethod(
            code = ac?.initUser(user)
                ?: CODE_000_SUCCESS
        )
    }

    /**
     * Add a user with the given [username] to the
     * policy and return eventual configuration
     * parameters along with the outcome code
     * (if an error occurred, the configuration
     * parameters will be null). Note that users
     * cannot be assigned (to, e.g., attributes or
     * roles) until they invoke the initUser method
     */
    abstract fun addUser(
        username: String
    ): CodeCoreParameters

    /**
     * Delete the user with the matching [username] from
     * the policy and revoke the user from all assignments
     * (of, e.g., attributes or roles). Finally, return
     * the outcome code
     */
    abstract fun deleteUser(
        username: String
    ): OutcomeCode

    /**
     * Return the set of users, along with the
     * outcome code (if an error occurred, the
     * set of users will be null)
     */
    abstract fun getUsers(): CodeUsers



    /**
     * Lock the specified services
     * and return the outcome code
     */
    protected fun startOfMethod(
        mmLock: Boolean = true,
        dmLock: Boolean = true,
        acLock: Boolean = true,
    ): OutcomeCode {
        logger.info {
            "Locking the following services: " +
            (if (acLock && ac != null) "AC " else "") +
            (if (mmLock) "MM " else "") +
            if (dmLock) "DM " else ""
        }
        val mmLockCode = if (mmLock) mm.lock() else CODE_000_SUCCESS
        return if (mmLockCode == CODE_000_SUCCESS) {
            val acLockCode = if (acLock && ac != null) ac!!.lock() else CODE_000_SUCCESS
            if (acLockCode == CODE_000_SUCCESS) {
                val dmLockCode = if (dmLock) dm.lock() else CODE_000_SUCCESS
                if (dmLockCode == CODE_000_SUCCESS) {
                    CODE_000_SUCCESS
                } else {
                    logger.warn { "DM lock failed, code is $dmLockCode" }
                    if (acLock && ac != null) unlockOrRollbackService(ServiceType.AC)
                    if (mmLock) unlockOrRollbackService(ServiceType.MM)
                    dmLockCode
                }
            } else {
                logger.warn { "AC lock failed, code is $acLockCode" }
                if (mmLock) unlockOrRollbackService(ServiceType.MM)
                acLockCode
            }
        } else {
            logger.warn { "MM lock failed, code is $mmLockCode" }
            mmLockCode
        }
    }

    /**
     * If the [code] is a success, unlock the
     * specified services (i.e., commit the
     * changes). Otherwise, rollback to the
     * previous status. In both cases, return
     * the outcome code
     */
    protected fun endOfMethod(
        code: OutcomeCode,
        mmLocked: Boolean = true,
        dmLocked: Boolean = true,
        acLocked: Boolean = true,
    ): OutcomeCode {

        if (code == CODE_000_SUCCESS) {
            logger.info {
                "Operation successful, unlocking the following services: " +
                        (if (acLocked && ac != null) "AC " else "") +
                        (if (mmLocked) "MM " else "") +
                        if (dmLocked) "DM " else ""
            }
            if (mmLocked) unlockOrRollbackService(ServiceType.MM)
            if (acLocked && ac != null) unlockOrRollbackService(ServiceType.AC)
            if (dmLocked) unlockOrRollbackService(ServiceType.DM)
        } else {
            logger.info {
                "Operation unsuccessful (code $code), rollback the following services: " +
                        (if (acLocked && ac != null) "AC " else "") +
                        (if (mmLocked) "MM " else "") +
                        if (dmLocked) "DM " else ""
            }
            if (mmLocked) unlockOrRollbackService(ServiceType.MM, true)
            if (acLocked && ac != null) unlockOrRollbackService(ServiceType.AC, true)
            if (dmLocked) unlockOrRollbackService(ServiceType.DM, true)
        }
        return code
    }

    /**
     * Unlock or rollback the specified [serviceType],
     * depending on the [rollback] flag
     */
    private fun unlockOrRollbackService(
        serviceType: ServiceType,
        rollback: Boolean = false
    ) {
        val code = when (serviceType) {
            ServiceType.MM -> if (rollback) mm.rollback() else mm.unlock()
            ServiceType.DM -> if (rollback) dm.rollback() else dm.unlock()
            ServiceType.AC -> if (rollback) ac!!.rollback() else ac!!.unlock()
            ServiceType.RM -> {
                val message = "${ServiceType.RM} is not lockable"
                logger.error { message }
                throw IllegalStateException(message)
            }
        }
        if (code != CODE_000_SUCCESS) {
            val message =
                "$serviceType lock was fine but " +
                (if (rollback) "rollback" else "unlock") +
                " failed, code is $code"
            logger.error { message }
            throw IllegalStateException(message)
        }
    }
}
