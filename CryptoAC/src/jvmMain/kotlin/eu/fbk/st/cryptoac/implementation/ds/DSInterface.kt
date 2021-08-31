package eu.fbk.st.cryptoac.implementation.ds

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.elements.*
import java.io.InputStream

/** Abstract class defining the methods to interface with the DS. */
abstract class DSInterface {

    /** The number of locks on the database for the lock-rollback-unlock mechanism. */
    var locks = 0



    /**
     * Configure the DS with relevant
     * [parameters] and return the outcome code.
     */
    abstract fun configure(parameters: CoreParameters): OutcomeCode

    /**
     * Add the [content] of the [newFile]
     * in the DS and return the outcome code.
     */
    abstract fun addFile(newFile: File, content: InputStream): OutcomeCode

    /**
     * Download the content of the file matching
     * the given [fileName] from the DS.
     */
    abstract fun readFile(fileName: String): WrappedInputStream

    /**
     * Overwrite the [content] of the [updatedFile]
     * in the DS and return the outcome code.
     */
    abstract fun writeFile(updatedFile: File, content: InputStream): OutcomeCode

    /**
     * Delete the [fileName] from the data
     * storage and return the outcome code.
     */
    abstract fun deleteFile(fileName: String): OutcomeCode



    /**
     * Signal the start of a new atomic transaction so to rollback to the
     * previous status in case of errors. As this method could be invoked
     * multiple times before committing or rollbacking the transactions,
     * increment the number of [locks] by 1 at each invocation, effectively
     * starting a new transaction only when [lock] is 0.
     */
    abstract fun lock(): OutcomeCode

    /**
     * Signal an error during an atomic transaction so to restore the
     * previous status. As this method could be invoked multiple times,
     * decrement the number of [locks] by 1 at each invocation, effectively
     * rollbacking to the previous status only when [lock] becomes 0.
     */
    abstract fun rollback(): OutcomeCode

    /**
     * Signal the end of an atomic transaction so commit the changes.
     * As this method could be invoked multiple times, decrement the
     * number of [locks] by 1 at each invocation, effectively committing
     * the transaction only when [lock] becomes 0.
     */
    abstract fun unlock(): OutcomeCode
}

/** Wrapper for the outcome [code] and a [stream] */
data class WrappedInputStream(val code: OutcomeCode = OutcomeCode.CODE_000_SUCCESS, val stream: InputStream? = null)