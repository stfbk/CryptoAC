package eu.fbk.st.cryptoac.server

import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.Parameters.adminCoreRBACCLOUDParameters
import eu.fbk.st.cryptoac.Parameters.aliceUser
import eu.fbk.st.cryptoac.TestUtilities
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreParametersMOCK
import eu.fbk.st.cryptoac.core.myJson
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import org.junit.jupiter.api.assertThrows
import java.io.FileNotFoundException

internal class ProfileManagerTest {

    private val aliceCoreRBACMOCKParameters = CoreParametersMOCK(
        user = aliceUser,
        cryptoType = Parameters.cryptoType,
    )
    private val bobCoreRBACMOCKParameters = CoreParametersMOCK(
        user = Parameters.bobUser,
        cryptoType = Parameters.cryptoType,
    )


    @AfterEach
    fun tearDown() {
        TestUtilities.resetLocalCryptoAC()
    }

    @Test
    fun `save core parameters works`() {
        /** save core parameters */
        run {
            assertDoesNotThrow {
                ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMOCKParameters)
            }
        }
    }

    @Test
    fun `save core parameters twice fails`() {
        /** save core parameters twice */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMOCKParameters)
            assertThrows<FileAlreadyExistsException> {
                ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMOCKParameters)
            }
        }
    }



    @Test
    fun `load profile parameters works`() {
        /** load profile parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMOCKParameters)
            val loadedParameters = ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMOCKParameters.coreType)
            assert(aliceCoreRBACMOCKParameters == loadedParameters)
        }
    }

    @Test
    fun `load non-existing profile parameters fails`() {
        /** load non-existing profile parameters */
        run {
            assert(ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMOCKParameters.coreType) == null)
        }
    }



    @Test
    fun `update profile parameters works`() {
        /** update profile parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMOCKParameters)
            ProfileManager.updateProfile(aliceUser.name, bobCoreRBACMOCKParameters)
            val loadedParameters = ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMOCKParameters.coreType)
            assert(aliceCoreRBACMOCKParameters != loadedParameters)
        }
    }

    @Test
    fun `update non-existing profile parameters fails`() {
        /** update non-existing profile parameters */
        run {
            assertThrows<FileNotFoundException> {
                ProfileManager.updateProfile(aliceUser.name, aliceCoreRBACMOCKParameters)
            }
        }
    }



    @Test
    fun `delete profile parameters works`() {
        /** delete profile parameters */
        run {
            ProfileManager.saveProfile(aliceUser.name, aliceCoreRBACMOCKParameters)
            assert(ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMOCKParameters.coreType) != null)
            assert(ProfileManager.deleteProfile(aliceUser.name, aliceCoreRBACMOCKParameters.coreType))
            assert(ProfileManager.loadProfile(aliceUser.name, aliceCoreRBACMOCKParameters.coreType) == null)
        }
    }

    @Test
    fun `delete non-existing profile parameters fails`() {
        /** delete non-existing profile parameters */
        run {
            assert(!ProfileManager.deleteProfile(aliceUser.name, aliceCoreRBACMOCKParameters.coreType))
        }
    }
}