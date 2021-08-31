package eu.fbk.st.cryptoac.proxy

import eu.fbk.st.cryptoac.Parameters.adminCoreRBACCloudParameters
import eu.fbk.st.cryptoac.Parameters.aliceCoreRBACCloudParameters
import eu.fbk.st.cryptoac.Parameters.aliceUser
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.CoreParametersCloud
import eu.fbk.st.cryptoac.core.CoreType
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import java.io.FileNotFoundException

internal class ProfileManagerTest {

    @AfterEach
    fun tearDown() {
        TestUtilities.resetProxy()
    }

    @Test
    fun `save storage cloud parameters works`() {
        /** save storage cloud parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACCloudParameters)
        }
    }

    @Test
    fun `save storage cloud parameters twice fails`() {
        /** save storage cloud parameters twice */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACCloudParameters)
            assertThrows<FileAlreadyExistsException> {
                ProfileManager.saveProfile(aliceUser.name,
                    aliceCoreRBACCloudParameters)
            }
        }
    }



    @Test
    fun `load storage cloud parameters works`() {
        /** load storage cloud parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACCloudParameters)
            val loadedParameters = ProfileManager.loadProfile(aliceUser.name, CoreType.RBAC_CLOUD)
            assert(aliceCoreRBACCloudParameters == loadedParameters as CoreParametersCloud)
        }
    }

    @Test
    fun `load non-existing storage cloud parameters fails`() {
        /** load non-existing storage cloud parameters */
        run {
            assert(ProfileManager.loadProfile(aliceUser.name, CoreType.RBAC_CLOUD) == null)
        }
    }



    @Test
    fun `update storage cloud parameters works`() {
        /** update storage cloud parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACCloudParameters)
            ProfileManager.updateProfile(aliceUser.name, adminCoreRBACCloudParameters)
            val loadedParameters = ProfileManager.loadProfile(aliceUser.name, CoreType.RBAC_CLOUD)
            assert(aliceCoreRBACCloudParameters != loadedParameters)
        }
    }

    @Test
    fun `update non-existing storage cloud parameters fails`() {
        /** update non-existing storage cloud parameters */
        run {
            assertThrows<FileNotFoundException> {
                ProfileManager.updateProfile(aliceUser.name,
                    aliceCoreRBACCloudParameters)
            }
        }
    }



    @Test
    fun `delete storage cloud parameters works`() {
        /** delete storage cloud parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACCloudParameters)
            assert(ProfileManager.loadProfile(aliceUser.name, CoreType.RBAC_CLOUD) != null)
            assert(ProfileManager.deleteProfile(aliceUser.name, CoreType.RBAC_CLOUD) == OutcomeCode.CODE_000_SUCCESS)
            assert(ProfileManager.loadProfile(aliceUser.name, CoreType.RBAC_CLOUD) == null)
        }
    }

    @Test
    fun `delete non-existing storage cloud parameters fails`() {
        /** delete non-existing storage cloud parameters */
        run {
            assert(ProfileManager.deleteProfile(aliceUser.name, CoreType.RBAC_CLOUD) == OutcomeCode.CODE_038_PROFILE_NOT_FOUND)
        }
    }
}