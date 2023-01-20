package eu.fbk.st.cryptoac.crypto.openabe

import eu.fbk.st.cryptoac.crypto.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

internal class CryptoOpenABEABETest : CryptoABETest() {

    override lateinit var cryptoABEObject: CryptoOpenABE
    override lateinit var cryptoPKEObject: CryptoOpenABE

    @BeforeEach
    fun setUp() {
        cryptoABEObject = CryptoABEFactory.getCrypto(CryptoABEType.OPENABE) as CryptoOpenABE
        cryptoPKEObject = cryptoABEObject
    }

    @AfterEach
    fun tearDown() {
        cryptoABEObject.deinit()
    }
}
