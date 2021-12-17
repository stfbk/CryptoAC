package eu.fbk.st.cryptoac.crypto.sodium

import com.ionspin.kotlin.crypto.box.BoxCorruptedOrTamperedDataException
import com.ionspin.kotlin.crypto.secretstream.SecretStreamCorruptedOrTamperedDataException
import eu.fbk.st.cryptoac.crypto.*
import org.junit.jupiter.api.*
import java.io.ByteArrayInputStream
import java.security.InvalidKeyException
import kotlin.random.Random


/** Test class for class "cryptoSodium" */
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
internal class CryptoSodiumTest : CryptoTest() {

    override val cryptoObject: CryptoSodium =
        CryptoFactory.getCrypto(CryptoType.SODIUM) as CryptoSodium

    @Test
    override fun `decrypt stream with wrong key`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val otherKey = cryptoObject.generateSymKey()
        val encBytes = cryptoObject.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
        assertThrows<SecretStreamCorruptedOrTamperedDataException> {
            cryptoObject.decryptStream(otherKey, ByteArrayInputStream(encBytes)).readAllBytes()
        }
    }

    @Test
    fun `check of a pair of asymmetric encryption keys works`() {
        assertDoesNotThrow {
            cryptoObject.checkAsymEncKeys(asymEncKeys)
        }
    }

    @Test
    fun `check of asymmetric encryption keys of different pairs throws InvalidKeyException`() {
        val otherKeys = cryptoObject.generateAsymEncKeys()
        val wrongKeyPair = KeyPairCryptoAC(asymEncKeys.public, otherKeys.private, AsymKeysType.ENC)
        assertThrows<InvalidKeyException> {
            cryptoObject.checkAsymEncKeys(wrongKeyPair)
        }
    }

    @Test
    fun `check of a pair of asymmetric signing keys works`() {
        assertDoesNotThrow {
            cryptoObject.checkAsymSigKeys(asymSigKeys)
        }
    }

    @Test
    fun `check of asymmetric signing keys of different pairs throws InvalidKeyException`() {
        val otherKeys = cryptoObject.generateAsymSigKeys()
        val wrongKeyPair = KeyPairCryptoAC(asymSigKeys.public, otherKeys.private, AsymKeysType.SIG)
        assertThrows<InvalidKeyException> {
            cryptoObject.checkAsymSigKeys(wrongKeyPair)
        }
    }

    @Test
    fun `asymmetric encryption works`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        assertDoesNotThrow {
            cryptoObject.asymEncrypt(asymEncKeys.public, bytesToEncrypt)
        }
    }

    @Test
    fun `asymmetric encryption of empty byte array throws IllegalArgumentException`() {
        assertThrows<IllegalArgumentException> {
            cryptoObject.asymEncrypt(asymEncKeys.public, ByteArray(0))
        }
    }

    @Test
    fun `asymmetric decryption works`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val encryptedBytes = cryptoObject.asymEncrypt(asymEncKeys.public, bytesToEncrypt)
        val decryptedBytes = cryptoObject.asymDecrypt(asymEncKeys.public, asymEncKeys.private, encryptedBytes)
        assert(bytesToEncrypt.contentEquals(decryptedBytes))
    }

    @Test
    fun `asymmetric decryption of empty byte array throws IllegalArgumentException`() {
        assertThrows<IllegalArgumentException> {
            cryptoObject.asymDecrypt(asymEncKeys.public, asymEncKeys.private, ByteArray(0))
        }
    }

    @Test
    fun `asymmetric decryption with wrong key throws BoxCorruptedOrTamperedDataException`() {
        val otherAsymEncKeyPair = cryptoObject.generateAsymEncKeys()
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val encryptedBytes = cryptoObject.asymEncrypt(asymEncKeys.public, bytesToEncrypt)
        assertThrows<BoxCorruptedOrTamperedDataException> {
            cryptoObject.asymDecrypt(asymEncKeys.public, otherAsymEncKeyPair.private, encryptedBytes)
        }
    }

    @Test
    fun `asymmetric decryption of random bytes throws BoxCorruptedOrTamperedDataException`() {
        assertThrows<BoxCorruptedOrTamperedDataException> {
            cryptoObject.asymDecrypt(asymEncKeys.public, asymEncKeys.private, Random.nextBytes(bytesEncLength))
        }
    }
}