package eu.fbk.st.cryptoac.rm

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.model.tuple.PermissionTuple
import eu.fbk.st.cryptoac.model.unit.Resource

/**
 * Interface defining the methods to
 * interact with the RM for an RBAC
 * scenario
 */
interface RMServiceRBAC : RMService {

    /**
     * Invoke the RM to validate the creation of
     * a new resource involving the given
     * [newResource] and [adminPermissionTuple]
     * and return the outcome code
     */
    fun checkAddResource(
        newResource: Resource,
        adminPermissionTuple: PermissionTuple
    ): OutcomeCode

    /**
     * Invoke the RM to validate the update of
     * a resource using the given [roleName] and
     * involving the given [newResource] and
     * [symEncKeyVersionNumber], and return the
     * outcome code
     */
    fun checkWriteResource(
        roleName: String,
        symEncKeyVersionNumber: Int,
        newResource: Resource
    ): OutcomeCode
}