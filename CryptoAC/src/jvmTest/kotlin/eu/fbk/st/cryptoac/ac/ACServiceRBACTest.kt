package eu.fbk.st.cryptoac.ac

import eu.fbk.st.cryptoac.OutcomeCode.*
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnLockAndLock
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.User
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.*

internal abstract class ACServiceRBACTest : ACServiceTest() {

    abstract val acRBAC: ACServiceRBAC



    @Test
    open fun add_role_works() {
        val roleName = "roleTest1"

        /** add role */
        runBlocking {
            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)
    }

    @Test
    open fun add_role_twice_or_with_blank_name_fail() {
        val roleName = "roleTest1"

        /** add role twice */
        runBlocking {
            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with blank name */
        runBlocking {
            assert(
                acRBAC.addRole(
                    roleName = ""
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)
    }

    @Test
    open fun delete_role_works() {
        val roleName = "roleTest1"

        /** delete role */
        runBlocking {
            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.deleteRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)
        }
    }

    @Test
    open fun delete_role_twice_or_with_blank_role_name_fail() {
        val roleName = "roleTest1"

        /** delete role twice */
        runBlocking {
            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.deleteRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.deleteRole(
                    roleName = roleName
                ) in listOf(CODE_005_ROLE_NOT_FOUND, CODE_014_ROLE_WAS_DELETED))
        }

        /** delete role with blank name */
        runBlocking {
            assert(
                acRBAC.deleteRole(
                    roleName = ""
                ) == CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    open fun add_resource_works() {
        val resourceName = "resourceTest1"

        /** add resource */
        runBlocking {
            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteResource(
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
    }

    @Test
    open fun add_resource_twice_or_with_blank_name_fail() {
        val resourceName = "resourceTest1"

        /** add resource twice */
        runBlocking {
            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_003_RESOURCE_ALREADY_EXISTS)
        }

        /** add resource with blank name */
        runBlocking {
            assert(
                acRBAC.addResource(
                    resourceName = ""
                ) == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteResource(
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
    }

    @Test
    open fun delete_resource_works() {
        val resourceName = "resourceTest1"

        /** delete resource */
        runBlocking {
            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.deleteResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)
        }
    }

    @Test
    open fun delete_resource_twice_or_with_blank_resource_name_fail() {
        val resourceName = "resourceTest1"

        /** delete resource twice */
        runBlocking {
            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.deleteResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.deleteResource(
                    resourceName = resourceName
                ) in listOf(CODE_006_RESOURCE_NOT_FOUND, CODE_015_RESOURCE_WAS_DELETED))
        }

        /** delete resource with blank name */
        runBlocking {
            assert(
                acRBAC.deleteResource(
                    resourceName = ""
                ) == CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    open fun assign_user_to_role_works() {
        val username = "userTest1"
        val roleName = "roleTest1"

        /** assign user to role */
        runBlocking {
            assert(acRBAC.addUser(
                newUser = User(username)
            ).code == CODE_000_SUCCESS)

            assert(
                acRBAC.addRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = roleName
            ) == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteUser(
            username = username
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == CODE_000_SUCCESS)
    }

    @Test
    open fun assign_user_to_role_twice_or_non_existing_user_to_role_or_non_existing_role_or_blank_name_fail() {
        val username = "userTest1"
        val roleName = "roleTest1"

        /** assign user to role twice */
        runBlocking {
            assert(acRBAC.addUser(
                newUser = User(username)
            ).code == CODE_000_SUCCESS)

            assert(
                acRBAC.addRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = roleName
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = roleName
            ) == CODE_062_UR_ASSIGNMENTS_ALREADY_EXISTS)
        }

        /** assign user to non-existing role */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = "non-existing-role"
            ) == CODE_005_ROLE_NOT_FOUND)
        }

        /** assign non-existing user to role */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                username = "non-existing-user",
                roleName = roleName
            ) == CODE_004_USER_NOT_FOUND)
        }

        /** assign user to role with blank name */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = " "
            ) == CODE_020_INVALID_PARAMETER)
        }

        /** assign user with blank name to role */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                username = " ",
                roleName = roleName
            ) == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteUser(
            username = username
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == CODE_000_SUCCESS)
    }

    @Test
    open fun revoke_user_from_role_works() {
        val username = "userTest1"
        val roleName = "roleTest1"

        /** revoke user from role */
        runBlocking {
            assert(acRBAC.addUser(
                newUser = User(username)
            ).code == CODE_000_SUCCESS)

            assert(
                acRBAC.addRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = roleName
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.revokeUserFromRole(
                username = username,
                roleName = roleName,
            ) == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteUser(
            username = username
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == CODE_000_SUCCESS)
    }

    @Test
    open fun revoke_user_from_role_twice_or_non_existing_user_from_role_or_non_existing_role_or_blank_name_fail () {
        val username = "userTest1"
        val roleName = "roleTest1"

        assert(acRBAC.addUser(
            newUser = User(username)
        ).code == CODE_000_SUCCESS)

        assert(
            acRBAC.addRole(
            roleName = roleName
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        /** revoke user from role twice */
        runBlocking {
            assert(
                acRBAC.assignUserToRole(
                username = username,
                roleName = roleName
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.revokeUserFromRole(
                username = username,
                roleName = roleName,
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.revokeUserFromRole(
                username = username,
                roleName = roleName,
            ) == CODE_041_UR_ASSIGNMENTS_NOT_FOUND)
        }

        /** revoke non-existing user from role */
        runBlocking {
            assert(
                acRBAC.revokeUserFromRole(
                username = "non-existing-user",
                roleName = roleName,
            ) in listOf(CODE_004_USER_NOT_FOUND, CODE_041_UR_ASSIGNMENTS_NOT_FOUND))
        }

        /** revoke user from non-existing role */
        runBlocking {
            assert(
                acRBAC.revokeUserFromRole(
                username = username,
                roleName = "non-existing-role",
            ) in listOf(CODE_005_ROLE_NOT_FOUND, CODE_041_UR_ASSIGNMENTS_NOT_FOUND))
        }

        /** revoke user from role with blank name */
        runBlocking {
            assert(
                acRBAC.revokeUserFromRole(
                username = username,
                roleName = " ",
            ) == CODE_020_INVALID_PARAMETER)
        }

        /** revoke user with blank name from role */
        runBlocking {
            assert(
                acRBAC.revokeUserFromRole(
                username = " ",
                roleName = roleName,
            ) == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteUser(
            username = username
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == CODE_000_SUCCESS)
    }

    @Test
    open fun assign_permission_to_role_works() {
        val roleName = "roleTest1"
        val resourceName = "resourceTest1"

        /** assign permission to role */
        runBlocking {
            assert(
                acRBAC.addRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.addResource(
                    resourceName = resourceName
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READWRITE,
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteResource(
                resourceName = resourceName
        ) == CODE_000_SUCCESS)
    }

    @Test
    open fun assign_permission_to_role_twice_or_non_existing_role_or_non_existing_resource_or_blank_name_fail() {
        val roleName = "roleTest1"
        val resourceName = "resourceTest1"

        /** assign permission to role twice */
        runBlocking {
            assert(
                acRBAC.addRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READWRITE,
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READWRITE,
                resourceName = resourceName
            ) == CODE_063_PA_ASSIGNMENTS_ALREADY_EXISTS)
        }

        /** assign permission to role on non-existing resource */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READWRITE,
                resourceName = "non-existing-resource",
            ) == CODE_006_RESOURCE_NOT_FOUND)
        }

        /** assign permission to non-existing role on resource */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                roleName = "non-existing-role",
                permission = PermissionType.READWRITE,
                resourceName = resourceName
            ) == CODE_005_ROLE_NOT_FOUND)
        }

        /** assign permission to role with blank name on resource */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                roleName = " ",
                permission = PermissionType.READWRITE,
                resourceName = resourceName
            ) == CODE_020_INVALID_PARAMETER)
        }

        /** assign permission to role on resource with blank name */
        runBlocking {
            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READWRITE,
                resourceName = " "
            ) == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteResource(
                resourceName = resourceName
        ) == CODE_000_SUCCESS)
    }

    @Test
    open fun revoke_permission_from_role_works() {
        val roleName = "roleTest1"
        val resourceName = "resourceTest1"

        /** revoke permission from role */
        run {
            assert(
                acRBAC.addRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READ,
                resourceName = "exam"
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READ,
                resourceName = "salary"
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.revokePermissionFromRole(
                roleName = roleName,
                resourceName = "exam"
            ) == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteResource(
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
    }

    @Test
    open fun revoke_permission_from_role_twice_or_non_existing_role_from_resource_or_non_existing_resource_or_blank_name_fail() {
        val roleName = "roleTest1"
        val resourceName = "resourceTest1"

        /** revoke permission from role twice */
        runBlocking {
            assert(
                acRBAC.addRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignPermissionToRole(
                roleName = roleName,
                permission = PermissionType.READWRITE,
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.revokePermissionFromRole(
                roleName = roleName,
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.revokePermissionFromRole(
                roleName = roleName,
                resourceName = resourceName
            ) == CODE_042_PA_ASSIGNMENTS_NOT_FOUND)
        }

        /** revoke permission from role on non-existing resource */
        runBlocking {
            assert(
                acRBAC.revokePermissionFromRole(
                roleName = roleName,
                resourceName = "non-existing-resource"
            ) in listOf(CODE_006_RESOURCE_NOT_FOUND, CODE_042_PA_ASSIGNMENTS_NOT_FOUND))
        }

        /** revoke permission from non-existing role on resource */
        runBlocking {
            assert(
                acRBAC.revokePermissionFromRole(
                roleName = "non-existing-role",
                resourceName = resourceName
            ) in listOf(CODE_005_ROLE_NOT_FOUND, CODE_042_PA_ASSIGNMENTS_NOT_FOUND))
        }

        /** revoke permission from role on resource with blank name */
        runBlocking {
            assert(
                acRBAC.revokePermissionFromRole(
                roleName = roleName,
                resourceName = " "
            ) == CODE_020_INVALID_PARAMETER)
        }

        /** revoke permission from role with blank name on resource */
        runBlocking {
            assert(
                acRBAC.revokePermissionFromRole(
                roleName = " ",
                resourceName = resourceName
            ) == CODE_020_INVALID_PARAMETER)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
            roleName = roleName
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteResource(
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
    }

    @Test
    open fun update_permission_to_role_works() {
        val roleName = "roleTest1"
        val resourceName = "resourceTest1"

        /** update permission to role */
        run {
            assert(
                acRBAC.addRole(
                    roleName = roleName
            ) == CODE_000_SUCCESS)

            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.assignPermissionToRole(
                    roleName = roleName,
                    permission = PermissionType.READ,
                    resourceName = resourceName
            ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.updatePermissionToRole(
                    roleName = roleName,
                    permission = PermissionType.READWRITE,
                    resourceName = resourceName
            ) == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteResource(
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
    }

    @Test
    open fun update_permission_of_non_existing_permission_or_blank_name_fail() {
        val roleName = "roleTest1"
        val resourceName = "resourceTest1"

        /** update permission of non-existing permission */
        run {
            assert(
                acRBAC.addRole(
                    roleName = roleName
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.addResource(
                    resourceName = resourceName
                ) == CODE_000_SUCCESS)
            assertUnLockAndLock(acRBAC)

            assert(
                acRBAC.updatePermissionToRole(
                    roleName = roleName,
                    permission = PermissionType.READWRITE,
                    resourceName = resourceName
                ) == CODE_042_PA_ASSIGNMENTS_NOT_FOUND)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteRole(
                roleName = roleName
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteResource(
                resourceName = resourceName
            ) == CODE_000_SUCCESS)
    }

    @Test
    override fun check_allowed_user_is_authorized_works() {

        assert(acRBAC.addUser(
            newUser = User("alice")
        ).code == CODE_000_SUCCESS)

        assert(
            acRBAC.addRole(
                roleName = "employee"
            ) == CODE_000_SUCCESS)

        assert(
            acRBAC.addResource(
                resourceName = "exam"
            ) == CODE_000_SUCCESS)

        assert(
            acRBAC.assignUserToRole(
                username = "alice",
                roleName = "employee",
            ) == CODE_000_SUCCESS)

        assert(
            acRBAC.assignPermissionToRole(
                roleName = "employee",
                permission = PermissionType.READ,
                resourceName = "exam"
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        /** check read authorized user gets read allowed */
        run {
            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    permission = PermissionType.READ,
                    resourceName = "exam"
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    roleName = "employee",
                    permission = PermissionType.READ,
                    resourceName = "exam"
                ) == CODE_000_SUCCESS)
        }

        assert(
            acRBAC.revokeUserFromRole(
                username = "alice",
                roleName = "employee",
            ) == CODE_000_SUCCESS)

        assert(
            acRBAC.addRole(
                roleName = "ceo",
            ) == CODE_000_SUCCESS)

        assert(
            acRBAC.assignUserToRole(
                username = "alice",
                roleName = "ceo",
            ) == CODE_000_SUCCESS)

        assert(
            acRBAC.assignPermissionToRole(
                roleName = "ceo",
                permission = PermissionType.READWRITE,
                resourceName = "exam"
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        /** check read-write authorized user gets read allowed */
        run {
            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    permission = PermissionType.READ,
                    resourceName = "exam"
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    roleName = "ceo",
                    permission = PermissionType.READ,
                    resourceName = "exam"
                ) == CODE_000_SUCCESS)
        }

        /** check read-write authorized user gets write allowed */
        run {
            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    permission = PermissionType.WRITE,
                    resourceName = "exam"
                ) == CODE_000_SUCCESS)

            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    roleName = "ceo",
                    permission = PermissionType.WRITE,
                    resourceName = "exam"
                ) == CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteUser(
                username = "alice"
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteRole(
                roleName = "employee"
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteResource(
                resourceName = "exam"
            ) == CODE_000_SUCCESS)
    }

    @Test
    override fun check_not_authorized_user_gets_denied_works() {

        assert(acRBAC.addUser(
            newUser = User("alice")
        ).code == CODE_000_SUCCESS)

        assert(
            acRBAC.addResource(
                resourceName = "exam"
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        /** check not authorized user gets read denied */
        run {
            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    permission = PermissionType.READ,
                    resourceName = "exam"
                ) == CODE_037_FORBIDDEN)
        }

        /** check not authorized user gets write denied */
        run {
            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    permission = PermissionType.WRITE,
                    resourceName = "exam"
                ) == CODE_037_FORBIDDEN)
        }

        assert(
            acRBAC.addRole(
                roleName = "employee"
            ) == CODE_000_SUCCESS)

        assert(
            acRBAC.assignUserToRole(
                username = "alice",
                roleName = "employee",
            ) == CODE_000_SUCCESS)

        assert(
            acRBAC.assignPermissionToRole(
                roleName = "employee",
                permission = PermissionType.READ,
                resourceName = "exam"
            ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        /** check read authorized user gets write denied */
        run {
            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    permission = PermissionType.WRITE,
                    resourceName = "exam"
                ) == CODE_037_FORBIDDEN)

            assert(
                acRBAC.isUserAllowed(
                    username = "alice",
                    roleName = "employee",
                    permission = PermissionType.WRITE,
                    resourceName = "exam"
                ) == CODE_037_FORBIDDEN)
        }

        /** Cleanup */
        assert(
            acRBAC.deleteUser(
            username = "alice"
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteRole(
            roleName = "employee"
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)

        assert(
            acRBAC.deleteResource(
            resourceName = "employee"
        ) == CODE_000_SUCCESS)
        assertUnLockAndLock(acRBAC)
    }
}