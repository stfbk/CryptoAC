package eu.fbk.st.cryptoac.core.tuples

import kotlinx.serialization.Serializable

/**
 * A File may be protected with one enforcement type among the following:
 * - TRADITIONAL: the File is stored un-encrypted and traditional access control is enforced;
 * - COMBINED: the File is stored encrypted and both traditional and cryptographic access control are enforced;
 */
@Serializable
enum class EnforcementType {
    TRADITIONAL, COMBINED
}