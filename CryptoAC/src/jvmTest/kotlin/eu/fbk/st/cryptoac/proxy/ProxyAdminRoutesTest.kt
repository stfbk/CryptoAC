package eu.fbk.st.cryptoac.proxy

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

/** Test class for proxy routes for the administrator. */
internal class ProxyAdminRoutesTest {

    @BeforeEach
    fun setUp() {
        TestUtilities.startCloud()
        TestUtilities.initAdminFromProxy()
    }

    @AfterEach
    fun tearDown() {
        TestUtilities.stopCloud()
        TestUtilities.resetDSCloud()
        TestUtilities.resetMetadataStorageMySQL()
        TestUtilities.resetOPACloud()
        TestUtilities.resetProxy()
    }



    @Test
    fun `add user works`() {
        /** add user */
        run {
            ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `add user twice or with admin name or with same name as previously deleted user fails`() {
        /** add user twice */
        run {
            ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add user`("alice", OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with admin name */
        run {
            ProxyUtilities.`add user`(ADMIN, OutcomeCode.CODE_001_USER_ALREADY_EXISTS)
        }

        /** add user with same name as previously deleted user */
        run {
            ProxyUtilities.`delete user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add user`("alice", OutcomeCode.CODE_013_USER_WAS_DELETED)
        }
    }



    @Test
    fun `delete user works`() {
        /** delete user */
        run {
            ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete user`("alice", OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `delete non-existing and deleted user fails`() {
        /** delete non-existing user */
        run {
            ProxyUtilities.`delete user`("alice", OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** delete deleted user */
        run {
            ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete user`("alice", OutcomeCode.CODE_004_USER_NOT_FOUND)
        }
    }

    @Test
    fun `delete the administrator user fails`() {
        /** delete the administrator user */
        run {
            ProxyUtilities.`delete user`(ADMIN, OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }



    @Test
    fun `add role works`() {
        /** add user */
        run {
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `add role twice or with admin name or with same name as previously deleted role fails`() {
        /** add role twice */
        run {
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with admin name */
        run {
            ProxyUtilities.`add role`(ADMIN, OutcomeCode.CODE_002_ROLE_ALREADY_EXISTS)
        }

        /** add role with same name as previously deleted role */
        run {
            ProxyUtilities.`delete role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_014_ROLE_WAS_DELETED)
        }
    }



    @Test
    fun `delete role works`() {
        /** delete role */
        run {
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete role`("employee", OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `delete non-existing and deleted role fails`() {
        /** delete non-existing role */
        run {
            ProxyUtilities.`delete role`("employee", OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** delete deleted role */
        run {
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete role`("employee", OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
    }

    @Test
    fun `delete the administrator role fails`() {
        /** delete the administrator role */
        run {
            ProxyUtilities.`delete role`(ADMIN, OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }



    @Test
    fun `delete file works`() {
        /** delete file */
        run {
            ProxyUtilities.`add file`("testFile",
                "testFile".toByteArray().inputStream(),
                EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete file`("testFile", OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `delete non-existing and deleted file fails`() {
        /** delete non-existing file */
        run {
            ProxyUtilities.`delete file`("testFile", OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** delete deleted file */
        run {
            ProxyUtilities.`add file`("testFile",
                "testFile".toByteArray().inputStream(),
                EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete file`("testFile", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete file`("testFile", OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }



    @Test
    fun `assign user to role works`() {
        /** assign user to role */
        run {
            val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`initialize user`(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `assign user to role twice fails`() {
        /** assign user to role twice */
        run {
            val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`initialize user`(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_010_ROLETUPLE_ALREADY_EXISTS)
        }
    }

    @Test
    fun `assign non-existing, incomplete or deleted user to non-existing or deleted role fails`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        val aliceParameters: CoreParameters?

        /** assign non-existing user to role */
        run {
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_004_USER_NOT_FOUND)
        }

        /** assign incomplete user to role */
        run {
            aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_037_USER_DOES_NOT_EXIST_OR_WAS_NOT_INITIALIZED_OR_WAS_DELETED)
        }

        /** assign deleted user to role */
        run {
            ProxyUtilities.`initialize user`(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_013_USER_WAS_DELETED)
        }

        /** assign user to non-existing role */
        run {
            ProxyUtilities.`assign user to role`("alice", "non-existing", OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** assign user to deleted role */
        run {
            ProxyUtilities.`delete role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }
    }

    @Test
    fun `assign user to admin role fails`() {
        /** assign user to admin role */
        run {
            val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`initialize user`(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", ADMIN, OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }



    @Test
    fun `revoke user from role works`() {
        /** revoke user from role */
        run {
            val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`initialize user`(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`revoke user from role`("alice", "employee", OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `revoke admin from role or user from role twice fails`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)

        /** revoke admin from role */
        run {
            ProxyUtilities.`revoke user from role`(ADMIN, "employee", OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** revoke user from role twice */
        run {
            val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`initialize user`(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`revoke user from role`("alice", "employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`revoke user from role`("alice", "employee", OutcomeCode.CODE_007_ROLETUPLE_NOT_FOUND)
        }
    }



    @Test
    fun `assign read or write permission to role over file works`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("testFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)

        /** assign read permission to role over file */
        run {
            ProxyUtilities.`assign permission to role over file`("employee",
                "testFile",
                PermissionType.READ,
                OutcomeCode.CODE_000_SUCCESS)
        }

        /** assign write permission to role over file */
        run {
            ProxyUtilities.`assign permission to role over file`("employee",
                "testFile",
                PermissionType.READWRITE,
                OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `assign to role read or write permission over file twice fails`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("testFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)

        /** assign to role read permission over file twice */
        run {
            ProxyUtilities.`assign permission to role over file`("employee",
                "testFile",
                PermissionType.READ,
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign permission to role over file`("employee",
                "testFile",
                PermissionType.READ,
                OutcomeCode.CODE_016_INVALID_PERMISSION)
        }

        /** assign to role write permission over file twice */
        run {
            ProxyUtilities.`assign permission to role over file`("employee",
                "testFile",
                PermissionType.READWRITE,
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign permission to role over file`("employee",
                "testFile",
                PermissionType.READWRITE,
                OutcomeCode.CODE_011_PERMISSIONTUPLE_ALREADY_EXISTS)
        }
    }

    @Test
    fun `assign to non-existing or deleted role permission over non-existing or deleted file fails`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add role`("deletedRole", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`delete role`("deletedRole", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("testFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("deletedFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`delete file`("deletedFile", OutcomeCode.CODE_000_SUCCESS)

        /** assign to non-existing role permission over file */
        run {
            ProxyUtilities.`assign permission to role over file`("non-existing",
                "testFile",
                PermissionType.READ,
                OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** assign to deleted role permission over file */
        run {
            ProxyUtilities.`assign permission to role over file`("deletedRole",
                "testFile",
                PermissionType.READ,
                OutcomeCode.CODE_005_ROLE_NOT_FOUND)
        }

        /** assign to role permission over non-existing file */
        run {
            ProxyUtilities.`assign permission to role over file`("employee",
                "non-existing",
                PermissionType.READ,
                OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** assign to role permission over deleted file */
        run {
            ProxyUtilities.`assign permission to role over file`("employee",
                "deleted",
                PermissionType.READ,
                OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }

    @Test
    fun `assign read permission to role having already write permission over file fails`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("testFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)

        /** assign read permission to role having already write permission over file */
        run {
            ProxyUtilities.`assign permission to role over file`("employee",
                "testFile",
                PermissionType.READWRITE,
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign permission to role over file`("employee",
                "testFile",
                PermissionType.READ,
                OutcomeCode.CODE_016_INVALID_PERMISSION)
        }
    }



    @Test
    fun `revoke read or write permission from role over file works`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("testFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`assign permission to role over file`("employee",
            "testFile",
            PermissionType.READWRITE,
            OutcomeCode.CODE_000_SUCCESS)

        /** revoke write permission from role over file */
        run {
            ProxyUtilities.`revoke permission from role`("employee",
                "testFile",
                PermissionType.WRITE,
                OutcomeCode.CODE_000_SUCCESS)
        }

        /** revoke read permission from role over file */
        run {
            ProxyUtilities.`revoke permission from role`("employee",
                "testFile",
                PermissionType.READWRITE,
                OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `revoke read or write permission from role over file twice fails`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("testFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`assign permission to role over file`("employee",
            "testFile",
            PermissionType.READWRITE,
            OutcomeCode.CODE_000_SUCCESS)

        /** revoke write permission from role over file twice */
        run {
            ProxyUtilities.`revoke permission from role`("employee",
                "testFile",
                PermissionType.WRITE,
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`revoke permission from role`("employee",
                "testFile",
                PermissionType.WRITE,
                OutcomeCode.CODE_016_INVALID_PERMISSION)
        }

        /** revoke read permission from role over file twice */
        run {
            ProxyUtilities.`revoke permission from role`("employee",
                "testFile",
                PermissionType.READWRITE,
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`revoke permission from role`("employee",
                "testFile",
                PermissionType.READWRITE,
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }
    }

    @Test
    fun `revoke not assigned read or write permission from role over file fails`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("testFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)

        /** revoke not assigned write permission from role over file */
        run {
            ProxyUtilities.`revoke permission from role`("employee",
                "testFile",
                PermissionType.WRITE,
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }

        /** revoke not assigned read permission from role over file */
        run {
            ProxyUtilities.`revoke permission from role`("employee",
                "testFile",
                PermissionType.READWRITE,
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }
    }

    @Test
    fun `revoke read or write permission from non-existing or delete role from non-existing or deleted file fails`() {
        ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add role`("deletedRole", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`delete role`("deletedRole", OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("testFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`add file`("deletedFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
        ProxyUtilities.`delete file`("deletedFile", OutcomeCode.CODE_000_SUCCESS)

        /** revoke from non-existing role permission over file */
        run {
            ProxyUtilities.`revoke permission from role`("non-existing",
                "testFile",
                PermissionType.WRITE,
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }

        /** revoke from deleted role permission over file */
        run {
            ProxyUtilities.`revoke permission from role`("deletedRole",
                "testFile",
                PermissionType.WRITE,
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }

        /** revoke from role permission over non-existing file */
        run {
            ProxyUtilities.`revoke permission from role`("employee",
                "non-existing",
                PermissionType.WRITE,
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }

        /** revoke from role permission over deleted file */
        run {
            ProxyUtilities.`revoke permission from role`("employee",
                "deleted",
                PermissionType.WRITE,
                OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }
    }

    @Test
    fun `revoke read or write permission from admin over file fails`() {
        ProxyUtilities.`add file`("testFile",
            "testFile".toByteArray().inputStream(),
            EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)

        /** revoke write permission from admin over file */
        run {
            ProxyUtilities.`revoke permission from role`(ADMIN,
                "testFile",
                PermissionType.WRITE,
                OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }

        /** revoke read permission from admin over file */
        run {
            ProxyUtilities.`revoke permission from role`(ADMIN,
                "testFile",
                PermissionType.READWRITE,
                OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED)
        }
    }
}