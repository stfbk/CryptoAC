package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.model.*
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.*
import java.io.InputStream

/** The CoreABAC implements an attribute-based cryptographic access control scheme */
abstract class CoreABAC(
    override val crypto: Crypto,
    override val coreParameters: CoreParameters
) : Core(crypto, coreParameters) {

    /**
     * Add a user with the given [username] by accordingly updating the metadata and
     * returning the outcome code, along with eventual configuration parameters.
     * Note that other user's metadata (e.g., public keys) can be updated by the user
     * him/herself in the "initUser" function
     */
    abstract fun addUser(username: String): CoreParameters

    /**
     * Delete the user with the matching [username] from the metadata and
     * revoking the user from all roles. Finally, return the outcome code
     */
    abstract fun deleteUser(username: String): OutcomeCode

    /**
     * Assign the [attribute] to the user
     * [username] and then return the outcome code
     */
    abstract fun assignAttribute(username: String, attribute: String): OutcomeCode

    /**
     * Revoke the [attribute] from the user
     * [username] and then return the outcome code
     */
    abstract fun revokeAttribute(username: String, attribute: String): OutcomeCode

    /**
     * Add a new file with the given name [fileName] and [fileContent] and
     * apply the specified [enforcement]. Also, assign permission to the
     * admin over the file. Finally, return the outcome code
     */
    abstract fun addFile(fileName: String, fileContent: InputStream, enforcement: EnforcementType): OutcomeCode

    /**
     * Delete the file with the matching [fileName] from the metadata and
     * delete all the related file and permission tuples. Finally, return
     * the outcome code
     */
    abstract fun deleteFile(fileName: String): OutcomeCode

    /**
     * Read the file [fileName] by downloading and decrypting
     * its content, if possible, and return the outcome code
     */
    abstract fun readFile(fileName: String): CodeFile

    /**
     * Write the new [fileContent] for the file [fileName],
     * if possible, and return the outcome code
     */
    abstract fun writeFile(fileName: String, fileContent: InputStream): OutcomeCode



    /**
     * Retrieve and return the users that the
     * user can see, along with the outcome code
     */
    abstract fun getUsers(): CodeUsers

    /**
     * Retrieve and return the attributes that the
     * user can see, along with the outcome code
     */
    abstract fun getAttributes(): CodeRoles

    /**
     * Retrieve and return the files that the
     * user can see, along with the outcome code
     */
    abstract fun getFiles(): CodeFiles

    /**
     * Retrieve and return the attribute of the user
     * [username], along with the outcome code
     */
    abstract fun getAttributes(username: String? = coreParameters.user.name): CodeRoleTuples
}