package eu.fbk.st.cryptoac.dm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.unit.*
import eu.fbk.st.cryptoac.Lockable
import eu.fbk.st.cryptoac.Service
import eu.fbk.st.cryptoac.dm.model.CodeInputStream
import java.io.InputStream

/**
 * Interface defining the methods to
 * interact with the DM
 */
interface DMService : Lockable, Service {

    /**
     * Create a new resource [newResource], possibly
     * initializing it with the given [content]
     * in the DM and return the outcome code
     */
    fun addResource(
        newResource: Resource,
        content: InputStream
    ): OutcomeCode

    /**
     * Require read access to the resource [resourceName],
     * possibly returning an input stream from the DM
     * along with the outcome code
     */
    fun readResource(
        resourceName: String
    ): CodeInputStream

    /**
     * Require write access to the resource [updatedResource],
     * possibly using the [content] in the DM and return
     * the outcome code
     */
    fun writeResource(
        updatedResource: Resource,
        content: InputStream
    ): OutcomeCode

    /**
     * Delete the resource [resourceName] from the DM
     * and return the outcome code
     */
    fun deleteResource(
        resourceName: String
    ): OutcomeCode
}