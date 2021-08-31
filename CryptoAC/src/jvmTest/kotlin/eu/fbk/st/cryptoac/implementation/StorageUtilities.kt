package eu.fbk.st.cryptoac.implementation

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.Parameters.cryptoObject
import eu.fbk.st.cryptoac.core.elements.ElementTypeWithKey
import eu.fbk.st.cryptoac.core.elements.File
import eu.fbk.st.cryptoac.core.elements.Role
import eu.fbk.st.cryptoac.core.tuples.*
import eu.fbk.st.cryptoac.crypto.AsymKeys
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import java.security.PrivateKey

class StorageUtilities {
    companion object {
        fun createRole(roleName: String, roleVersionNumber: Int = 1): Role {
            val asymEncKeys = cryptoObject.generateAsymEncKeys()
            val asymSigKeys = cryptoObject.generateAsymSigKeys()
            return Role(
                name = roleName,
                asymEncKeys = AsymKeys(private = asymEncKeys.private.encoded, public = asymEncKeys.public.encoded, AsymKeysType.ENC),
                asymSigKeys = AsymKeys(private = asymSigKeys.private.encoded, public = asymSigKeys.public.encoded, AsymKeysType.SIG),
                versionNumber = roleVersionNumber,
            )
        }

        fun createFile(
            fileName: String,
            symEncKeyVersionNumber: Int = 1,
        ): File {
            return File(name = fileName, symEncKeyVersionNumber = symEncKeyVersionNumber)
        }

        fun createRoleTuple(username: String, role: Role): RoleTuple {
            val roleTuple = RoleTuple(
                username = username, roleName = role.name,
                encryptedAsymEncKeys = cryptoObject.encryptAsymKeys(Parameters.adminAsymEncKeys.public,
                    cryptoObject.recreateAsymKeys(role.asymEncKeys!!.public, role.asymEncKeys!!.public, AsymKeysType.ENC),
                    AsymKeysType.ENC),
                encryptedAsymSigKeys = cryptoObject.encryptAsymKeys(Parameters.adminAsymEncKeys.public,
                    cryptoObject.recreateAsymKeys(role.asymSigKeys!!.public, role.asymSigKeys!!.public, AsymKeysType.SIG),
                    AsymKeysType.SIG),
            )
            val signature = cryptoObject.createSignature(roleTuple.getBytesForSignature(), Parameters.adminAsymSigKeys.private)
            roleTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
            return roleTuple
        }

        fun createPermissionTuple(
            role: Role,
            file: File,
            permission: PermissionType = PermissionType.READ,
            signingKey: PrivateKey = Parameters.adminAsymSigKeys.private
        ): PermissionTuple {
            val permissionTuple = PermissionTuple(
                roleName = role.name, fileName = file.name,
                roleToken = role.token, fileToken = file.token,
                permission = permission,
                roleVersionNumber = role.versionNumber, symKeyVersionNumber = file.symEncKeyVersionNumber,
                encryptedSymKey = cryptoObject.encryptSymKey(
                    cryptoObject.recreateAsymKeys(role.asymEncKeys!!.public, type = AsymKeysType.ENC).public,
                    cryptoObject.generateSymKey()
                )
            )
            val signature =
                cryptoObject.createSignature(permissionTuple.getBytesForSignature(), signingKey)
            permissionTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
            return permissionTuple
        }

        fun createFileTuple(
            file: File, enforcementType: EnforcementType = EnforcementType.COMBINED,
            signingKey: PrivateKey = Parameters.adminAsymSigKeys.private
        ): FileTuple {
            val fileTuple = FileTuple(
                fileName = file.name, fileToken = file.token,
                roleToken = ADMIN,
                enforcement = enforcementType,
                symDecKeyVersionNumber = file.symEncKeyVersionNumber,
            )
            val signature = cryptoObject.createSignature(fileTuple.getBytesForSignature(), signingKey)
            fileTuple.updateSignature(signature, ADMIN, ElementTypeWithKey.USER)
            return fileTuple
        }
    }
}