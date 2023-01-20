package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * A cryptographic object can be implemented in:
 * - JAVA: java-level implementation of cryptographic algorithms;
 * - SODIUM: native-level implementation of cryptographic algorithms
 *           with sodium library (https://libsodium.gitbook.io);
 * - OPENABE: native-level implementation of attribute-based encryption
 *           (https://github.com/StefanoBerlato/kotlin-multiplatform-openabe).
 */
@Serializable
enum class CryptoType {
    JAVA,
    SODIUM,
    OPENABE,
}
