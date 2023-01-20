package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.Parameters.aliceCoreRBACMQTTParameters
import eu.fbk.st.cryptoac.Parameters.aliceUser
import eu.fbk.st.cryptoac.Parameters.bobCoreRBACMQTTParameters
import eu.fbk.st.cryptoac.TestUtilities
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import org.junit.jupiter.api.assertThrows
import java.io.FileNotFoundException

internal class ProfileManagerTest {

    @AfterEach
    fun tearDown() {
        TestUtilities.deleteLocalCryptoACUsersProfiles()
    }

    @Test
    fun `save profile works`() {
        /** save profile */
        run {
            assertDoesNotThrow {
                ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMQTTParameters)
            }
        }
    }

    @Test
    fun `save profile twice fails`() {
        /** save profile twice */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMQTTParameters)
            assertThrows<FileAlreadyExistsException> {
                ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMQTTParameters)
            }
        }
    }

    @Test
    fun `load profile works`() {
        /** load profile */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMQTTParameters)
            val loadedProfile = ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMQTTParameters.coreType)
            assert(aliceCoreRBACMQTTParameters == loadedProfile)
        }
    }

    @Test
    fun `load non-existing profile fails`() {
        /** load non-existing profile */
        run {
            assert(ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMQTTParameters.coreType) == null)
        }
    }

    @Test
    fun `update profile works`() {
        /** update profile */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMQTTParameters)
            ProfileManager.updateProfile(aliceUser.name, bobCoreRBACMQTTParameters)
            val loadedProfile = ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMQTTParameters.coreType)
            assert(aliceCoreRBACMQTTParameters != loadedProfile)
        }
    }

    @Test
    fun `update non-existing profile fails`() {
        /** update non-existing profile */
        run {
            assertThrows<FileNotFoundException> {
                ProfileManager.updateProfile(aliceUser.name, aliceCoreRBACMQTTParameters)
            }
        }
    }

    @Test
    fun `delete profile works`() {
        /** delete profile */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMQTTParameters)
            assert(ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMQTTParameters.coreType) != null)
            assert(ProfileManager.deleteProfile(aliceUser.name, aliceCoreRBACMQTTParameters.coreType))
            assert(ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMQTTParameters.coreType) == null)
        }
    }

    @Test
    fun `delete non-existing profile fails`() {
        /** delete non-existing profile */
        run {
            assert(!ProfileManager.deleteProfile(aliceUser.name, aliceCoreRBACMQTTParameters.coreType))
        }
    }
}
