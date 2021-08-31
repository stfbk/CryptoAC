package eu.fbk.st.cryptoac.core.elements

import java.security.MessageDigest

// TODO comment
actual fun digest(algorithm: String, bytes: ByteArray): String {
    val md = MessageDigest.getInstance(algorithm)
    val digest = md.digest(bytes)
    return digest.fold("") { str, it -> str + "%02x".format(it) }
}