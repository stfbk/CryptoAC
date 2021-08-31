package eu.fbk.st.cryptoac.proxy

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.elements.ElementStatus
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

/** Test class for proxy routes for users. */
internal class ProxyUserRoutesTest {

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
    fun `add file works`() {
        /** add file */
        run {
            ProxyUtilities.`add file`("testFile",
                "testFile".toByteArray().inputStream(),
                EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    fun `add file twice or with same name as previously deleted file fails`() {
        /** add file twice */
        run {
            run {
                ProxyUtilities.`add file`("testFile",
                    "testFile".toByteArray().inputStream(),
                    EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
            }
            run {
                ProxyUtilities.`add file`("testFile",
                    "testFile".toByteArray().inputStream(),
                    EnforcementType.COMBINED, OutcomeCode.CODE_003_FILE_ALREADY_EXISTS)
            }
        }

        /** add file with same name as previously deleted file */
        run {
            run {
                ProxyUtilities.`add file`("testFile2",
                    "testFile2".toByteArray().inputStream(),
                    EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
            }
            ProxyUtilities.`delete file`("testFile2", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add file`("testFile2",
                "testFile2".toByteArray().inputStream(),
                EnforcementType.COMBINED, OutcomeCode.CODE_015_FILE_WAS_DELETED)
        }
    }



    @Test
    fun `read file works`() {
        /** read file */
        run {
            ProxyUtilities.`add file`("testFile",
                "testFile".toByteArray().inputStream(),
                EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
            val fileContent = ProxyUtilities.`read file`("testFile", OutcomeCode.CODE_000_SUCCESS)
            assert(fileContent!!.readAllBytes().contentEquals("testFile".toByteArray()))
        }
    }

    @Test
    fun `read non-existing or deleted file fails`() {
        /** read non-existing file */
        run {
            ProxyUtilities.`read file`("testFile", OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** read deleted file */
        run {
            ProxyUtilities.`add file`("testFile",
                "testFile".toByteArray().inputStream(),
                EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete file`("testFile", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`read file`("testFile", OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }


    @Test
    fun `write file works`() {
        /** write file */
        run {
            ProxyUtilities.`add file`("testFile",
                "testFile".toByteArray().inputStream(),
                EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`write file`("testFile",
                "updatedContent".toByteArray().inputStream(),
                OutcomeCode.CODE_000_SUCCESS)
            val fileContent = ProxyUtilities.`read file`("testFile", OutcomeCode.CODE_000_SUCCESS)
            assert(fileContent!!.readAllBytes().contentEquals("updatedContent".toByteArray()))
        }
    }

    @Test
    fun `write non-existing or deleted file fails`() {
        /** write non-existing file */
        run {
            ProxyUtilities.`write file`("testFile",
                "testFile".toByteArray().inputStream(),
                OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }

        /** write deleted file */
        run {
            ProxyUtilities.`add file`("testFile",
                "testFile".toByteArray().inputStream(),
                EnforcementType.COMBINED, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`delete file`("testFile", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`write file`("testFile",
                "testFile".toByteArray().inputStream(),
                OutcomeCode.CODE_006_FILE_NOT_FOUND)
        }
    }



    @Test
    fun `get users as admin or as user works`() {
        /** get users as admin */
        run {
            ProxyUtilities.`get users`(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 1)
                assert(first().name == ADMIN)
            }

            val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`get users`(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 2)
                (filter { it.name == "alice" }).apply {
                    assert(!first().isAdmin)
                    assert(first().status == ElementStatus.INCOMPLETE)
                }
            }

            ProxyUtilities.`initialize user`(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`get users`(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 2)
                (filter { it.name == "alice" }).apply {
                    assert(first().status == ElementStatus.OPERATIONAL)
                }
            }
        }

        /** get users as user */
        run {
            ProxyUtilities.`get users`(OutcomeCode.CODE_000_SUCCESS, "alice").apply {
                assert(this!!.first().name == "alice")
            }
        }
    }

    @Test
    fun `get assignments as admin or as user works`() {
        /** get assignments as admin */
        run {
            ProxyUtilities.`get assignments`(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 1)
                first().apply {
                    assert(username == ADMIN)
                    assert(roleName == ADMIN)
                }
            }

            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`get assignments`(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 2)
                first { roleTuple -> roleTuple.roleName == "employee" }.apply {
                    assert(username == ADMIN)
                }
            }

            val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`initialize user`(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)

        }

        /** get assignments as user */
        run {
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`get assignments`(OutcomeCode.CODE_000_SUCCESS, "alice").apply {
                assert(this!!.first().roleName == "employee")
            }
        }
    }

    @Test
    fun `get permissions as admin or as user works`() {
        /** get permissions as admin */
        run {
            ProxyUtilities.`add file`("document",
                "content".toByteArray().inputStream(),
                EnforcementType.COMBINED,
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add file`("excel",
                "content".toByteArray().inputStream(),
                EnforcementType.COMBINED,
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`get permissions`(OutcomeCode.CODE_000_SUCCESS).apply {
                assert(this!!.size == 2)
            }
        }

        /** get permissions as user */
        run {
            val aliceParameters = ProxyUtilities.`add user`("alice", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`initialize user`(aliceParameters!!, OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`add role`("employee", OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`assign user to role`("alice", "employee", OutcomeCode.CODE_000_SUCCESS)

            ProxyUtilities.`get permissions`(OutcomeCode.CODE_000_SUCCESS, "alice").apply {
                assert(this!!.size == 0)
            }
            ProxyUtilities.`assign permission to role over file`("employee",
                "excel",
                PermissionType.READ,
                OutcomeCode.CODE_000_SUCCESS)
            ProxyUtilities.`get permissions`(OutcomeCode.CODE_000_SUCCESS, "alice").apply {
                assert(this!!.first().fileName == "excel")
            }
        }
    }
}