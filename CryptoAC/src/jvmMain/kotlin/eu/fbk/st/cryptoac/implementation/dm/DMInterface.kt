package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.elements.*
import java.io.InputStream

/** Interface defining the methods to interact with the DM */
interface DMInterface {

    /** The number of locks on the database for the lock-rollback-unlock mechanism */
    var locks: Int

    /**
     * Configure the DM with relevant
     * [parameters] and return the outcome code
     */
    fun configure(parameters: CoreParameters): OutcomeCode

    /**
     * Add the [content] of the [newFile]
     * in the DM and return the outcome code
     */
    fun addFile(newFile: File, content: InputStream): OutcomeCode

    /**
     * Download the content of the file matching
     * the given [fileName] from the DM
     */
    fun readFile(fileName: String): WrappedInputStream

    /**
     * Overwrite the [content] of the [updatedFile]
     * in the DM and return the outcome code
     */
    fun writeFile(updatedFile: File, content: InputStream): OutcomeCode

    /**
     * Delete the [fileName] from the data
     * storage and return the outcome code
     */
    fun deleteFile(fileName: String): OutcomeCode



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [locks] is 0
     */
    fun lock(): OutcomeCode

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [locks] becomes 0
     */
    fun rollback(): OutcomeCode

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [locks] becomes 0
     */
    fun unlock(): OutcomeCode
}

/** Wrapper for the outcome [code] and a [stream] */
data class WrappedInputStream(val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, val stream: InputStream? = null)