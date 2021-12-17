package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * A cryptographic object can be implemented in:
 * - JAVA: java-level implementation of cryptographic algorithms;
 * - TODO OPENSSL: native-level implementation of cryptographic algorithms with openssl crypto library;
 * - SODIUM: native-level implementation of cryptographic algorithms with sodium library (https://libsodium.gitbook.io).
 */
@Serializable
enum class CryptoType {
    JAVA,
    // OPENSSL,
    SODIUM,
}