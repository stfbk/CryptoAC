package eu.fbk.st.cryptoac

import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.http.*

/**
 * Parameters for HTTP requests
 * Required parameters are rendered as path parameters.
 * Optional parameters are rendered as query parameters
 */
object SERVER {

    /** The chosen crypto interface for CryptoAC */
    const val CRYPTO = "Cryptography"

    /** The chosen core system for CryptoAC */
    const val CORE = "Core"

    /** The name of the user */
    const val USERNAME = "Username"

    /** The name of the role */
    const val ROLE_NAME = "Role_Name"

    /** The name of the file */
    const val FILE_NAME = "File_Name"

    /** The permission to give or revoke */
    const val PERMISSION = "Permission"

    // TODO add in the APIs
    /** The offset in the number of CryptoACElements or tuples to retrieve from the metadata */
    const val OFFSET = "Offset"

    // TODO add in the APIs
    /** The maximum number of CryptoACElements or tuples to retrieve from the metadata */
    const val LIMIT = "Limit"

    /** The access control enforcement level chosen by the user for a new file */
    const val ENFORCEMENT = "Access_Control_Enforcement"

    /** The content of the file in CryptoAC */
    const val FILE_CONTENT = "File_Content"

    /** Whether the user is an admin */
    const val IS_ADMIN = "Admin"

    /** The rm */
    const val RM = "RM"

    /** The mm */
    const val MM = "MM"

    /** The dm */
    const val DM = "DM"

    /** The URL of the rm */
    const val RM_URL = "RM_URL"

    /** The port of the rm */
    const val RM_PORT = "RM_Port"

    /** The URL of the dm */
    const val DM_URL = "DM_URL"

    /** Whether to use TLS with the dm */
    const val DM_TLS = "DM_TLS"

    /** The port of the dm */
    const val DM_PORT = "DM_Port"

    /** The password of the dm */
    const val DM_PASSWORD = "DM_Password"

    /** The URL of the mm */
    const val MM_URL = "MM_URL"

    /** The password of the mm */
    const val MM_PASSWORD = "MM_Password"

    /** The user token for the mm */
    const val MM_TOKEN = "MM_Token"

    /** The port of the mm */
    const val MM_PORT = "MM_Port"

    /** The URL of the OPA */
    const val OPA_URL = "OPA_URL"

    /** The policy model for OPA */
    const val OPA_POLICY_MODEL = "OPA_POLICY_MODEL"

    /** The port of the OPA */
    const val OPA_PORT = "OPA_Port"
}

/**
 * Ktor (2.0.0-beta-1) lacks a submit form method
 * with HTTP patch, thus, we create this extension
 */
suspend fun HttpClient.submitFormPatch(
    formParameters: Parameters,
    block: HttpRequestBuilder.() -> Unit
) = request {
    method = HttpMethod.Patch
    setBody(FormDataContent(formParameters))
    block()
}

