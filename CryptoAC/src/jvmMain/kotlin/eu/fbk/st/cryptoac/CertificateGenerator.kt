package eu.fbk.st.cryptoac

import io.ktor.network.tls.certificates.*
import java.io.File

object CertificateGenerator {
    @JvmStatic
    fun main(args: Array<String>) {
        val jksFile = File("server/temporary.jks").apply {
            parentFile.mkdirs()
        }
        if (!jksFile.exists()) {
            generateCertificate(
                file = jksFile,
                keyAlias = "alias",
                keyPassword = "password",
                jksPassword = "password"
            )
        }
    }
}