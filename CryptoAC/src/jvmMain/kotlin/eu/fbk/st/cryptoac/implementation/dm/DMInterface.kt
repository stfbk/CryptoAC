package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.elements.*
import java.io.InputStream

/** Interface defining the methods to interact with the DM */
interface DMInterface {

    /**
     * The number of locks for the
     * lock-rollback-unlock mechanism
     */
    var locks: Int

    /**
     * If necessary, configure the DM with relevant
     * [parameters] and return the outcome code
     */
    fun configure(parameters: CoreParameters): OutcomeCode

    /**
     * Create a new resource [newFile], possibly
     * initializing it with the given [content]
     * in the DM and return the outcome code
     */
    fun addFile(newFile: File, content: InputStream): OutcomeCode

    /**
     * Require read access to the resource [fileName],
     * possibly returning an input stream from the DM
     * along with the outcome code
     */
    fun readFile(fileName: String): WrappedInputStream

    /**
     * Require write access to the resource [updatedFile],
     * possibly using the [content] in the DM and return
     * the outcome code
     */
    fun writeFile(updatedFile: File, content: InputStream): OutcomeCode

    /**
     * Delete the resource [fileName] from the DM
     * and return the outcome code
     */
    fun deleteFile(fileName: String): OutcomeCode



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0. Finally, return
     * the outcome code
     */
    fun lock(): OutcomeCode

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0.
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

    /**
     * This function is invoked whenever the interface
     * is dismissed, and it should contain the code to
     * de-initialize the interface (e.g., possibly disconnect
     * from remote services like MQTT brokers, databases, etc.)
     */
    fun deinit()
}

/** Wrapper for the outcome [code] and a [stream] */
data class WrappedInputStream(val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, val stream: InputStream? = null)