package eu.fbk.st.cryptoac.crypto

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import org.junit.jupiter.api.assertThrows
import java.io.ByteArrayInputStream
import java.io.IOException
import java.security.InvalidKeyException
import java.security.SignatureException
import java.security.spec.InvalidKeySpecException
import kotlin.random.Random

internal abstract class CryptoSKETest : CryptoTest() {

    abstract val cryptoSKEObject: CryptoSKE
    open val symKey by lazy { cryptoSKEObject.generateSymKey() }

    @Test
    fun `generate symmetric key works`() {
        assertDoesNotThrow {
            cryptoSKEObject.generateSymKey()
        }
    }

    @Test
    fun `encrypt stream works`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        assertDoesNotThrow {
            cryptoSKEObject.encryptStream(
                encryptingKey = symKey,
                stream = ByteArrayInputStream(bytesToEncrypt)
            ).readAllBytes()
        }
    }

    @Test
    fun `encrypt empty stream works`() {
        assertDoesNotThrow {
            cryptoSKEObject.encryptStream(
                encryptingKey = symKey,
                stream = ByteArrayInputStream(ByteArray(0))
            ).readAllBytes()
        }
    }

    @Test
    fun `decrypt empty stream works`() {
        val bytesToEncrypt = Random.nextBytes(0)
        val encBytes = cryptoSKEObject.encryptStream(
            encryptingKey = symKey,
            stream = ByteArrayInputStream(bytesToEncrypt)
        ).readAllBytes()
        val decBytes = cryptoSKEObject.decryptStream(
            decryptingKey = symKey,
            stream = ByteArrayInputStream(encBytes)
        )
        assert(bytesToEncrypt.contentEquals(decBytes.readAllBytes()))
    }

    @Test
    fun `decrypt stream works`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val encBytes = cryptoSKEObject.encryptStream(
            encryptingKey = symKey,
            stream = ByteArrayInputStream(bytesToEncrypt)
        ).readAllBytes()
        val decBytes = cryptoSKEObject.decryptStream(
            decryptingKey = symKey,
            stream = ByteArrayInputStream(encBytes)
        ).readAllBytes()
        assert(bytesToEncrypt.contentEquals(decBytes))
    }

    @Test
    open fun `decrypt stream with wrong key`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val otherKey = cryptoSKEObject.generateSymKey()
        val encBytes = cryptoSKEObject.encryptStream(
            encryptingKey = symKey,
            stream = ByteArrayInputStream(bytesToEncrypt)
        ).readAllBytes()
        try {
            val decBytes = cryptoSKEObject.decryptStream(
                decryptingKey = otherKey,
                stream = ByteArrayInputStream(encBytes)
            ).readAllBytes()
            assert(!bytesToEncrypt.contentEquals(decBytes))
        } catch (e: IOException) {
            assert(e.message!!.contains("javax.crypto.AEADBadTagException: Tag mismatch!"))
        }
    }
}