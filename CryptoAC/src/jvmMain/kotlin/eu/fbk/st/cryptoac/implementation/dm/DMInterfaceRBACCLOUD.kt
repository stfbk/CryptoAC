package eu.fbk.st.cryptoac.implementation.dm

import eu.fbk.st.cryptoac.OutcomeCode

/** Interface defining the methods to interact with the DM for a RBAC CLOUD scenario */
interface DMInterfaceRBACCLOUD : DMInterface {

    /**
     * Delete the [fileName] from the temporary
     * storage and return the outcome code:
     * - CODE_000_SUCCESS
     * - CODE_043_DM_CONNECTION_TIMEOUT
     */
    fun deleteTemporaryFile(fileName: String): OutcomeCode
}
