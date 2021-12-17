package eu.fbk.st.cryptoac.crypto.openssl

import org.junit.jupiter.api.Test

internal class CryptoOpenSSLTest {

    // TODO test everything
    @Test
    fun sayHello() {
        CryptoOpenSSL(null).callInt(1)
    }

    @Test
    fun genKey() {
        val inst = CryptoOpenSSL(null)
        val a = inst.generateKey()
        println(a)
    }
}