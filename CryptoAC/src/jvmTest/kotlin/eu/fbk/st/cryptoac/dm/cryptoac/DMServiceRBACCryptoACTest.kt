package eu.fbk.st.cryptoac.dm.cryptoac

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.Parameters.adminCoreRBACCryptoACParametersNoOPA
import eu.fbk.st.cryptoac.TestUtilities.Companion.assertLock
import eu.fbk.st.cryptoac.TestUtilities.Companion.dir
import eu.fbk.st.cryptoac.dm.DMFactory
import eu.fbk.st.cryptoac.dm.DMServiceRBACTest
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.model.unit.Resource
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.*

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class DMServiceRBACCryptoACTest : DMServiceRBACTest() {

    override val dmRBAC = DMFactory.getDM(
        Parameters.dmServiceCryptoACParameters
    ) as DMServiceRBACCryptoAC
    override val dm = dmRBAC

    private var processDocker: Process? = null



    @BeforeAll
    override fun setUpAll() {
        "./cleanAllAndBuild.sh".runCommand(dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_dm\"".runCommand(
            workingDir = dir,
            endStrings = hashSetOf("Started ServerConnector")
        )
    }

    @BeforeEach
    override fun setUp() {
        assertLock(dm)
        assert(dm.configure(adminCoreRBACCryptoACParametersNoOPA) == OutcomeCode.CODE_000_SUCCESS)
    }

    @AfterEach
    override fun tearDown() {
        super.tearDown()
        /** the DM is resetted directly in the tests */
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



    override fun add_admin_works() {
        /** Add admin is not implemented */
    }

    @Test
    override fun add_admin_with_wrong_name_or_twice_fails() {
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
    override fun add_user_twice_or_with_blank_username_fail() {
        /** Add user is not implemented */
    }

    @Test
    override fun delete_user_works() {
        /** Delete user is not implemented */
    }

    @Test
    override fun delete_user_twice_or_not_existing_or_with_blank_username_fail() {
        /** Delete user is not implemented */
    }

    @Test
    override fun add_resource_works() {
        val emptyResource = Resource(
            name = "empty",
            enforcement = EnforcementType.COMBINED
        )
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val newResourceContent = "exam content"

        /** add resource */
        run {
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = newResourceContent.inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)

            assert(
                dm.addResource(
                    newResource = emptyResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = emptyResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)

            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "another exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
        }

        /** Cleanup */
        assert(
            dm.deleteResource(
                resourceName = newResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)

        assert(
            dm.deleteResource(
                resourceName = emptyResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun add_resource_twice_or_with_blank_name_fail() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val blankResource = Resource(
            name = "",
            enforcement = EnforcementType.COMBINED
        )
        val newResourceContent1 = "exam content"
        val newResourceContent2 = "second exam content"

        /** add resource twice */
        run {
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = newResourceContent1.inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = newResourceContent2.inputStream()
                ) == OutcomeCode.CODE_003_RESOURCE_ALREADY_EXISTS)
        }

        /** add resource with blank name */
        runBlocking {
            assert(
                dm.addResource(
                    newResource = blankResource,
                    content = newResourceContent1.inputStream()
                ) == OutcomeCode.CODE_020_INVALID_PARAMETER
            )
        }

        /** Cleanup */
        assert(
            dm.writeResource(
                updatedResource = newResource,
                content = "".inputStream()
            ) == OutcomeCode.CODE_000_SUCCESS)
        assert(
            dm.deleteResource(
                resourceName = newResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun read_resource_works() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val resourceContent = "exam content"

        /** read resource */
        run {
            assert(dm
                .addResource(
                    newResource = newResource,
                    content = resourceContent.inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            dm.readResource(
                resourceName = newResource.name
            ).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals(resourceContent.toByteArray()))
            }
        }

        /** Cleanup */
        assert(
            dm.deleteResource(
                resourceName = newResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun read_non_existing_or_deleted_resource_or_with_blank_name_fail() {
        /** read non-existing resource */
        run {
            dm.readResource(
                resourceName = "non-existing"
            ).apply {
                assert(code == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
                assert(stream == null)
            }
        }

        /** read deleted resource */
        run {
            val newResource = Resource(
                name = "exam",
                enforcement = EnforcementType.COMBINED
            )

            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)

            dm.readResource(
                resourceName = "non-existing"
            ).apply {
                assert(code == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
                assert(stream == null)
            }
        }

        /** read resource with blank name */
        runBlocking {
            assert(
                dm.readResource(
                    resourceName = " "
                ).code == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    override fun write_resource_works() {
        val newResource = Resource(
            name = "exam",
            enforcement = EnforcementType.COMBINED
        )
        val otherNewResource = Resource(
            name = "test",
            enforcement = EnforcementType.COMBINED
        )

        /** write resource */
        run {
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)

            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "updated resource content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)

            dm.readResource(
                resourceName = newResource.name
            ).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals("updated resource content".toByteArray()))
            }

            assert(
                dm.addResource(
                    newResource = otherNewResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = otherNewResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.addResource(
                    newResource = otherNewResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = otherNewResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            dm.readResource(
                resourceName = otherNewResource.name
            ).apply {
                assert(code == OutcomeCode.CODE_000_SUCCESS)
                assert(stream!!.readAllBytes().contentEquals("".toByteArray()))
            }
        }

        /** Cleanup */
        assert(
            dm.deleteResource(
                resourceName = newResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)

        assert(
            dm.deleteResource(
                resourceName = otherNewResource.name
            ) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Test
    override fun write_non_existing_or_deleted_resource_or_with_blank_name_fail() {
        /** write non-existing resource */
        run {
            val nonExisting = Resource(
                name = "non-existing",
                enforcement = EnforcementType.COMBINED
            )
            assert(
                dm.writeResource(
                    updatedResource = nonExisting,
                    content = "non-existing".inputStream()
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** write deleted resource */
        run {
            val newResource = Resource(
                name = "exam",
                enforcement = EnforcementType.COMBINED
            )
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "updated exam content".inputStream()
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** write resource with blank name */
        runBlocking {
            val emptyResource = Resource(
                name = "",
                enforcement = EnforcementType.COMBINED
            )

            assert(
                dm.writeResource(
                    updatedResource = emptyResource,
                    content = "empty resource content".inputStream()
                ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }
    }

    @Test
    override fun delete_resource_works() {
        /** delete resource */
        run {
            val newResource = Resource(
                name = "exam",
                enforcement = EnforcementType.COMBINED
            )
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)
        }
    }

    @Test
    override fun delete_non_existing_or_deleted_resource_or_with_blank_name_fail() {
        /** delete non-existing resource */
        run {
            assert(
                dm.deleteResource(
                    resourceName = "non-existing"
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** delete non-existing resource */
        run {
            val newResource = Resource(
                name = "exam",
                enforcement = EnforcementType.COMBINED
            )
            assert(
                dm.addResource(
                    newResource = newResource,
                    content = "exam content".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.writeResource(
                    updatedResource = newResource,
                    content = "".inputStream()
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_000_SUCCESS)
            assert(
                dm.deleteResource(
                    resourceName = newResource.name
                ) == OutcomeCode.CODE_006_RESOURCE_NOT_FOUND)
        }

        /** delete resource with blank name */
        runBlocking {
            assert(
                dm.deleteResource(
                    resourceName = " "
                ) == OutcomeCode.CODE_020_INVALID_PARAMETER)
        }
    }
}
