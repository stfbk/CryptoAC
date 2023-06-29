package eu.fbk.st.cryptoac.rm.cryptoac

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertUnlock
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.ac.ACFactory
import eu.fbk.st.cryptoac.ac.opa.ACServiceRBACOPA
import eu.fbk.st.cryptoac.dm.DMFactory
import eu.fbk.st.cryptoac.model.unit.Resource
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.mm.MMFactory
import eu.fbk.st.cryptoac.mm.MMServiceRBAC
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.rm.RMFactory
import eu.fbk.st.cryptoac.rm.RMService
import eu.fbk.st.cryptoac.rm.RMServiceRBACTest
import org.junit.jupiter.api.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class RMServiceRBACCryptoACTest : RMServiceRBACTest() {

    override val rmRBAC = RMFactory.getRM(
        Parameters.rmServiceRBACCryptoACParameters
    )!! as RMServiceRBACCryptoAC
    override val dm = DMFactory.getDM(
        Parameters.dmServiceCryptoACParameters
    )
    override val rm = rmRBAC

    private val mm: MMServiceRBAC = MMFactory.getMM(
        Parameters.mmServiceRBACMySQLParameters
    ) as MMServiceRBAC
    private val ac: ACServiceRBACOPA = ACFactory.getAC(
        Parameters.acServiceRBACOPAParameters
    ) as ACServiceRBACOPA
    private var processDocker: Process? = null



    @BeforeAll
    override fun setUpAll() {
        "./cleanAllAndBuild.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_rm cryptoac_dm cryptoac_mysql cryptoac_opa\"".runCommand(
            workingDir = dir,
            endStrings = hashSetOf(
                "port: 3306  MySQL Community Server - GPL",
                "Routes were registered, CryptoAC is up",
                "This will be made the default in later OPA releases."
            )
        )
    }

    @BeforeEach
    override fun setUp() {
        super.setUp()
        assertLock(ac)
        assert(ac.configure() == OutcomeCode.CODE_000_SUCCESS)
        assert(ac.addAdmin(Parameters.adminUser) == OutcomeCode.CODE_000_SUCCESS)
        assert(ac.assignUserToRole(Parameters.adminUser.name, Parameters.adminUser.name) == OutcomeCode.CODE_000_SUCCESS)
        assertUnlock(ac)
        assertLock(mm)
        assert(mm.configure() == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.addAdmin(Parameters.adminUser) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.addRole(Parameters.adminRole) == OutcomeCode.CODE_000_SUCCESS)
        assert(mm.addRoleTuples(hashSetOf(Parameters.adminRoleTuple)) == OutcomeCode.CODE_000_SUCCESS)
        assertUnlock(mm)
    }

    @AfterEach
    override fun tearDown() {
        super.tearDown()
        TestUtilities.resetMMServiceRBACMySQL()
        TestUtilities.resetACServiceRBCAOPA()
    }

    @AfterAll
    override fun tearDownAll() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./cleanAll.sh".runCommand(
            workingDir = dir,
            endStrings = hashSetOf("clean_all_end_of_script")
        )
    }



    @Test
    override fun add_admin_works() {
        /** Add admin is not implemented */
    }

    @Test
    override fun add_admin_with_different_name_or_twice_fails() {
        /** Add admin is not implemented */
    }

    @Test
    override fun init_user_works() {
        /** Init user is not implemented */
    }

    @Test
    override fun init_user_not_existing_or_already_initialized_or_deleted_fail() {
        /** Init user is not implemented */
    }

    @Test
    override fun add_user_works() {
        /** Add user is not implemented */
    }

    @Test
    override fun add_user_twice_or_with_admin_or_blank_username_or_previously_deleted_fail() {
        /** Add user is not implemented */
    }

    @Test
    override fun delete_incomplete_and_operational_user_by_name_works() {
        /** Delete user is not implemented */
    }

    @Test
    override fun delete_user_twice_or_not_existing_or_with_blank_username_by_name_fail() {
        /** Delete user is not implemented */
    }

    @Test
    override fun delete_the_admin_user_by_name_fails() {
        /** Delete user is not implemented */
    }



    @Test
    override fun check_add_resource_once_works() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )

        /** check add resource once */
        run {
            assert(dm.addResource(
                newResource = newResource,
                content = "exam content".inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
            val addResourceRequest = createAddResourceRequest(
                resourceName = newResource.name,
                roleName = ADMIN
            )
            assert(
                rm.checkAddResource(
                    newResource = addResourceRequest.resource,
                    adminPermissionTuple = addResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(dm.deleteResource(newResource.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun check_add_resource_twice_non_existing_or_deleted_resource_fail() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val addResourceRequest = createAddResourceRequest(newResource.name, ADMIN)

        /** check add resource twice */
        run {
            assert(dm.addResource(
                newResource = newResource,
                content = "exam content".inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm.checkAddResource(
                    newResource = addResourceRequest.resource,
                    adminPermissionTuple = addResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm.checkAddResource(
                    newResource = addResourceRequest.resource,
                    adminPermissionTuple = addResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_003_RESOURCE_ALREADY_EXISTS
            )
        }

        /** check non-existing resource */
        run {
            val nonExistingResourceRequest = createAddResourceRequest(
                resourceName = "non-existing",
                roleName = ADMIN
            )
            assert(
                rm.checkAddResource(
                    newResource = nonExistingResourceRequest.resource,
                    adminPermissionTuple = nonExistingResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** check deleted resource */
        run {
            assert(dm.deleteResource(newResource.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm.checkAddResource(
                    newResource = addResourceRequest.resource,
                    adminPermissionTuple = addResourceRequest.permissionTuple
                ) == OutcomeCode.CODE_003_RESOURCE_ALREADY_EXISTS
            )
        }
    }

    @Test
    override fun check_write_resource_once_works() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val addResourceRequest = createAddResourceRequest(newResource.name, ADMIN)
        assert(dm.addResource(
            newResource = newResource,
            content = "exam content".inputStream()
        ) == OutcomeCode.CODE_000_SUCCESS)
        assert(rm.checkAddResource(
            newResource = addResourceRequest.resource,
            adminPermissionTuple = addResourceRequest.permissionTuple
        ) == OutcomeCode.CODE_000_SUCCESS)

        /** check write resource once */
        run {
            val updatedResource = Resource(
                name = "exam",
                enforcement = EnforcementType.COMBINED
            )
            assert(dm.addResource(
                newResource = updatedResource,
                content = "updated exam content".inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)

            val writeResourceRequest = createWriteResourceRequest(
                resourceName = newResource.name,
                resourceToken = addResourceRequest.resource.token,
                symKeyVersionNumber = 1
            )
            assert(rm.checkWriteResource(
                roleName = ADMIN,
                symEncKeyVersionNumber = writeResourceRequest.symKeyVersionNumber,
                newResource = writeResourceRequest.resource
            ) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(dm.deleteResource(newResource.name) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun check_write_resource_twice_non_existing_or_deleted_resource_fail() {
        val newResource = Resource(name = "exam", enforcement = EnforcementType.COMBINED)
        val addResourceRequest = createAddResourceRequest(newResource.name, ADMIN)
        assert(dm.addResource(
            newResource = newResource,
            content = "exam content".inputStream()
        ) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            rm.checkAddResource(
                addResourceRequest.resource, addResourceRequest.permissionTuple
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        val updatedResource = Resource(name = "exam", enforcement = EnforcementType.COMBINED)
        assert(dm.addResource(
            newResource = updatedResource,
            content = "updated exam content".inputStream()
        ) == OutcomeCode.CODE_000_SUCCESS)
        val writeResourceRequest = createWriteResourceRequest(
            resourceName = newResource.name,
            resourceToken = addResourceRequest.resource.token,
            symKeyVersionNumber = 1
        )
        assert(
            rm.checkWriteResource(
                ADMIN,
                writeResourceRequest.symKeyVersionNumber,
                writeResourceRequest.resource
            ) == OutcomeCode.CODE_000_SUCCESS
        )

        /** check write resource twice */
        run {
            assert(
                rm.checkWriteResource(
                    roleName = ADMIN,
                    symEncKeyVersionNumber = writeResourceRequest.symKeyVersionNumber,
                    newResource = writeResourceRequest.resource
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** check write non-existing resource */
        run {
            val nonExistingWriteResourceRequest = createWriteResourceRequest(
                resourceName = "non-existing",
                resourceToken = "non-existing",
                symKeyVersionNumber = 1
            )
            assert(
                rm.checkWriteResource(
                    ADMIN,
                    nonExistingWriteResourceRequest.symKeyVersionNumber,
                    nonExistingWriteResourceRequest.resource
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }

        /** check write deleted resource */
        run {
            assert(dm.deleteResource(newResource.name) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                rm.checkWriteResource(
                    ADMIN,
                    writeResourceRequest.symKeyVersionNumber,
                    writeResourceRequest.resource
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND
            )
        }
    }



    override fun addAndInitUser(user: User): RMService {
        val addUserResult = rm.addUser(user)
        assert(addUserResult.code == OutcomeCode.CODE_000_SUCCESS)
        val userRM = RMServiceRBACCryptoAC(addUserResult.parameters as RMServiceRBACCryptoACParameters)
        userRM.initUser(user)
        return userRM
    }
}
