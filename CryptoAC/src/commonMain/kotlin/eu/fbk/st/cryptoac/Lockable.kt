package eu.fbk.st.cryptoac

/**
 * Interface defining the methods to
 * lock-unlock-rollback a service to
 * avoid inconsistent statuses
 */
interface Lockable {

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    var locks: Int

    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollback the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0. Finally, return
     * the outcome code
     */
    fun lock(): OutcomeCode

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollback to the previous status only when [locks] becomes 0.
     * Finally, return the outcome code
     */
    fun rollback(): OutcomeCode

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0. Finally, return the
     * outcome code
     */
    fun unlock(): OutcomeCode
}