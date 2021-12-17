package eu.fbk.st.cryptoac.core

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.core.model.*
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.crypto.Crypto
import java.io.InputStream

/** Mock implementation of CoreRBAC. Use only during testing and development */
class CoreRBACMOCK(
    override val crypto: Crypto,
    override val coreParameters: CoreParametersMOCK
) : CoreRBAC(crypto, coreParameters) {

    override fun addUser(username: String): CodeCoreParameters {
        return CodeCoreParameters(
            OutcomeCode.CODE_000_SUCCESS,
            CoreParametersMOCK(
                user = User(name = username),
                cryptoType = coreParameters.cryptoType,
            )
        )
    }
    override fun deleteUser(username: String): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun addRole(roleName: String): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun deleteRole(roleName: String): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun addFile(fileName: String, fileContent: InputStream, enforcement: EnforcementType): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun deleteFile(fileName: String): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun assignUserToRole(username: String, roleName: String): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun revokeUserFromRole(username: String, roleName: String): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun assignPermissionToRole(roleName: String, fileName: String, permission: PermissionType): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun revokePermissionFromRole(roleName: String, fileName: String, permission: PermissionType): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun readFile(fileName: String): CodeFile {
        return CodeFile(OutcomeCode.CODE_000_SUCCESS)
    }
    override fun writeFile(fileName: String, fileContent: InputStream): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun getUsers(): CodeUsers {
        return CodeUsers(OutcomeCode.CODE_000_SUCCESS)
    }
    override fun getRoles(): CodeRoles {
        return CodeRoles(OutcomeCode.CODE_000_SUCCESS)
    }
    override fun getFiles(): CodeFiles {
        return CodeFiles(OutcomeCode.CODE_000_SUCCESS)
    }
    override fun getAssignments(username: String?, roleName: String?): CodeRoleTuples {
        return CodeRoleTuples(OutcomeCode.CODE_000_SUCCESS)
    }
    override fun getPermissions(username: String?, roleName: String?, fileName: String?): CodePermissionTuples {
        return CodePermissionTuples(OutcomeCode.CODE_000_SUCCESS)
    }
    override fun initAdmin(): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
    override fun initUser(): OutcomeCode {
        return OutcomeCode.CODE_000_SUCCESS
    }
}