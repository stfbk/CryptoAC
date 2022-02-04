package eu.fbk.st.cryptoac.proxy

import development
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.USERS_PROFILE_DIRECTORY_PATH
import eu.fbk.st.cryptoac.core.*
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import java.io.File

private val logger = KotlinLogging.logger {}

/**
 * Allow to save and load users' profiles. A profile consists
 * in the parameters of a user for a specific core type
 */
class ProfileManager {

    companion object {

        /** Return the key identifying the [username]'s profile for the given [core] */
        private fun getProfileKey(username: String, core: CoreType) = "$USERS_PROFILE_DIRECTORY_PATH$username.${core}"

        /** Save the [username]'s [coreParameters] */
        fun saveProfile(username: String, coreParameters: CoreParameters) {
            logger.debug { "Saving profile for user $username" }
            FileSystemManager.saveFile(
                path = getProfileKey(username, coreParameters.coreType),
                content = when (coreParameters.coreType) {
                    CoreType.RBAC_CLOUD -> myJson.encodeToString(coreParameters as CoreParametersCLOUD).byteInputStream()
                    CoreType.RBAC_MQTT -> myJson.encodeToString(coreParameters as CoreParametersMQTT).byteInputStream()
                    CoreType.RBAC_MOCK -> if (development) {
                        myJson.encodeToString(coreParameters as CoreParametersMOCK).byteInputStream()
                    } else {
                        val message = "Using MOCK core when not in development mode"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                },
                saveMode = FileSaveMode.THROW_EXCEPTION
            )
        }

        /** Update the [username]'s [coreParameters] */
        fun updateProfile(username: String, coreParameters: CoreParameters) {
            logger.debug { "Updating profile for user $username" }
            FileSystemManager.saveFile(
                path = getProfileKey(username, coreParameters.coreType),
                content = when (coreParameters.coreType) {
                    CoreType.RBAC_CLOUD -> myJson.encodeToString(coreParameters as CoreParametersCLOUD).byteInputStream()
                    CoreType.RBAC_MQTT -> myJson.encodeToString(coreParameters as CoreParametersMQTT).byteInputStream()
                    CoreType.RBAC_MOCK -> if (development) {
                        myJson.encodeToString(coreParameters as CoreParametersMOCK).byteInputStream()
                    } else {
                        val message = "Using MOCK core when not in development mode"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                },
                saveMode = FileSaveMode.OVERWRITE
            )
        }

        /** Load the [username]'s profile for the given [coreType] */
        fun loadProfile(username: String, coreType: CoreType): CoreParameters? {
            logger.debug { "Loading profile for user $username" }
            val profileFile = File(getProfileKey(username, coreType))
            return if (profileFile.exists()) {
                val profileString = String(profileFile.inputStream().readAllBytes())
                when (coreType) {
                    CoreType.RBAC_CLOUD -> myJson.decodeFromString<CoreParametersCLOUD>(profileString)
                    CoreType.RBAC_MQTT -> myJson.decodeFromString<CoreParametersMQTT>(profileString)
                    CoreType.RBAC_MOCK -> if (development) {
                        myJson.decodeFromString<CoreParametersMOCK>(profileString)
                    } else {
                        val message = "Using MOCK core when not in development mode"
                        logger.error { message }
                        throw IllegalStateException(message)
                    }
                }
            } else {
                null
            }
        }

        /** Delete the [username]'s profile for the given [core] */
        fun deleteProfile(username: String, core: CoreType): OutcomeCode {
            logger.info { "Deleting profile of user $username" }
            val profileFile = File(getProfileKey(username, core))
            return if (profileFile.exists()) {
                if (profileFile.delete()) {
                    OutcomeCode.CODE_000_SUCCESS
                }
                else {
                    OutcomeCode.CODE_024_FILE_DELETE
                }
            } else {
                OutcomeCode.CODE_038_PROFILE_NOT_FOUND
            }
        }
    }
}