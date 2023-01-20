package eu.fbk.st.cryptoac.crypto.openabe

import com.ionspin.kotlin.crypto.secretstream.SecretStreamCorruptedOrTamperedDataException
import eu.fbk.st.cryptoac.crypto.*
import it.stefanoberlato.oabe.crypto.OpenABESymKeyHandleImplRunTime
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import java.io.ByteArrayInputStream
import java.io.IOException
import kotlin.random.Random

internal class CryptoOpenABESKETest : CryptoSKETest() {

    lateinit var cryptoABEObject: CryptoOpenABE
    override lateinit var cryptoSKEObject: CryptoOpenABE

    @BeforeEach
    fun setUp() {
        cryptoABEObject = CryptoABEFactory.getCrypto(CryptoABEType.OPENABE) as CryptoOpenABE
        cryptoSKEObject = cryptoABEObject
    }

    @AfterEach
    fun tearDown() {
        cryptoABEObject.deinit()
    }

    // TODO make that  cryptoSKEObject.decryptStream for sodium throws
    //  generic crypto exception instead of OpenABESymKeyHandleImplRunTime
    @Test
    override fun `decrypt stream with wrong key`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val otherKey = cryptoSKEObject.generateSymKey()
        val encBytes = cryptoSKEObject.encryptStream(
            encryptingKey = symKey,
            stream = ByteArrayInputStream(bytesToEncrypt)
        ).readAllBytes()
        assertThrows<OpenABESymKeyHandleImplRunTime> {
            cryptoSKEObject.decryptStream(
                decryptingKey = otherKey,
                stream = ByteArrayInputStream(encBytes)
            ).readAllBytes()
        }
    }
}