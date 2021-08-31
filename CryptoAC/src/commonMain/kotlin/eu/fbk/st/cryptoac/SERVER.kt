package eu.fbk.st.cryptoac

/**
 * Parameters for HTTP requests
 * Required parameters are rendered as path parameters.
 * Optional parameters are rendered as query parameters.
 */
object SERVER {

    /** The chosen core system for CryptoAC. */
    const val CORE = "Core"

    /** The name of the user. */
    const val USERNAME = "Username"

    /** The name of the role. */
    const val ROLE_NAME = "Role_Name"

    /** The name of the file. */
    const val FILE_NAME = "File_Name"

    /** The permission to give or revoke. */
    const val PERMISSION = "Permission"

    // TODO add in the APIs
    /** The offset in the number of CryptoACElements or tuples to retrieve from the metadata. */
    const val OFFSET = "Offset"

    // TODO add in the APIs
    /** The maximum number of CryptoACElements or tuples to retrieve from the metadata. */
    const val LIMIT = "Limit"

    /** The access control enforcement level chosen by the user for a new file. */
    const val ENFORCEMENT = "Access_Control_Enforcement"

    /** The content of the file in CryptoAC. */
    const val FILE_CONTENT = "File_Content"

    /** Whether the user is an admin. */
    const val IS_ADMIN = "Admin"

    /** The URL of the rm. */
    const val RM_URL = "RM_URL"

    /** The port of the rm. */
    const val RM_PORT = "RM_Port"

    /** The URL of the ds. */
    const val DS_URL = "DS_URL"

    /** The port of the ds. */
    const val DS_PORT = "DS_Port"

    /** The password of the ds. */
    const val DS_PASSWORD = "DS_Password"

    /** The URL of the ms. */
    const val MS_URL = "MS_URL"

    /** The password of the ms. */
    const val MS_PASSWORD = "MS_Password"

    /** The port of the ms. */
    const val MS_PORT = "MS_Port"

    /** The URL of the OPA. */
    const val OPA_URL = "OPA_URL"

    /** The port of the OPA. */
    const val OPA_PORT = "OPA_Port"
}

