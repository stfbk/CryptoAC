package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.Parameters.aliceUser
import eu.fbk.st.cryptoac.Parameters.aliceCoreParameters
import eu.fbk.st.cryptoac.Parameters.bobCoreParameters
import eu.fbk.st.cryptoac.TestUtilities
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import org.junit.jupiter.api.assertThrows
import java.io.FileNotFoundException

internal class ProfileManagerTest {

    @AfterEach
    fun tearDown() {
        TestUtilities.resetLocalProxy()
    }

    @Test
    fun `save core parameters works`() {
        /** save core parameters */
        run {
            assertDoesNotThrow {
                ProfileManager.saveProfile(aliceUser.name, aliceCoreParameters)
            }
        }
    }

    @Test
    fun `save core parameters twice fails`() {
        /** save core parameters twice */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreParameters)
            assertThrows<FileAlreadyExistsException> {
                ProfileManager.saveProfile(aliceUser.name, aliceCoreParameters)
            }
        }
    }



    @Test
    fun `load profile parameters works`() {
        /** load profile parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreParameters)
            val loadedParameters = ProfileManager.loadProfile(aliceUser.name, aliceCoreParameters.coreType)
            assert(aliceCoreParameters == loadedParameters)
        }
    }

    @Test
    fun `load non-existing profile parameters fails`() {
        /** load non-existing profile parameters */
        run {
            assert(ProfileManager.loadProfile(aliceUser.name, aliceCoreParameters.coreType) == null)
        }
    }



    @Test
    fun `update profile parameters works`() {
        /** update profile parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreParameters)
            ProfileManager.updateProfile(aliceUser.name, bobCoreParameters)
            val loadedParameters = ProfileManager.loadProfile(aliceUser.name, aliceCoreParameters.coreType)
            assert(aliceCoreParameters != loadedParameters)
        }
    }

    @Test
    fun `update non-existing profile parameters fails`() {
        /** update non-existing profile parameters */
        run {
            assertThrows<FileNotFoundException> {
                ProfileManager.updateProfile(aliceUser.name, aliceCoreParameters)
            }
        }
    }



    @Test
    fun `delete profile parameters works`() {
        /** delete profile parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreParameters)
            assert(ProfileManager.loadProfile(aliceUser.name, aliceCoreParameters.coreType) != null)
            assert(ProfileManager.deleteProfile(aliceUser.name, aliceCoreParameters.coreType))
            assert(ProfileManager.loadProfile(aliceUser.name, aliceCoreParameters.coreType) == null)
        }
    }

    @Test
    fun `delete non-existing profile parameters fails`() {
        /** delete non-existing profile parameters */
        run {
            assert(!ProfileManager.deleteProfile(aliceUser.name, aliceCoreParameters.coreType))
        }
    }
}