package eu.fbk.st.cryptoac.model.unit

import kotlinx.serialization.Serializable

/**
 * A resource may be protected with one enforcement type among the following:
 * - TRADITIONAL: the resource is un-encrypted and traditional access
 *                control is enforced;
 * - COMBINED: the resource is encrypted and both traditional and
 *             cryptographic access control are enforced;
 */
@Serializable
enum class EnforcementType {
    // TODO if you modify the enforcement type to allow cryptographic enforcement only,
    //  then you'll need to modify (at least the) CryptoAC DM. In fact, at the moment,
    //  CryptoAC as DM sends requests to the AC for each resource (i.e., CryptoAC as DM
    //  does not know what enforcement type was chosen for a resource)
    TRADITIONAL, COMBINED
}
