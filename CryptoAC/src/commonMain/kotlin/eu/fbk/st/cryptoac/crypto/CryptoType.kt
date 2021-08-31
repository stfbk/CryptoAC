package eu.fbk.st.cryptoac.crypto

import kotlinx.serialization.Serializable

/**
 * A cryptographic object can be implemented in:
 * - JAVA: java-level implementation of cryptographic algorithms;
 * - NATIVE: native-level implementation of cryptographic algorithms.
 */
@Serializable
enum class CryptoType {
    JAVA, NATIVE
}