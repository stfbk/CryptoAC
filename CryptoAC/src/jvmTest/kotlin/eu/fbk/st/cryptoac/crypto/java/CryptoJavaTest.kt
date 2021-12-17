package eu.fbk.st.cryptoac.crypto.java

import eu.fbk.st.cryptoac.crypto.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import org.junit.jupiter.api.assertThrows
import java.security.*
import javax.crypto.BadPaddingException
import kotlin.random.Random

/** Test class for class "CryptoJava" */
internal class CryptoJavaTest : CryptoTest() {

    override val cryptoObject: CryptoJava =
        CryptoFactory.getCrypto(CryptoType.JAVA) as CryptoJava


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
        val decryptedBytes = cryptoObject.asymDecrypt(asymEncKeys.private, encryptedBytes)
        assert(bytesToEncrypt.contentEquals(decryptedBytes))
    }

    @Test
    fun `asymmetric decryption of empty byte array throws IllegalArgumentException`() {
        assertThrows<IllegalArgumentException> {
            cryptoObject.asymDecrypt(asymEncKeys.private, ByteArray(0))
        }
    }

    @Test
    fun `asymmetric decryption with wrong key throws BadPaddingException`() {
        val otherAsymEncKeyPair = cryptoObject.generateAsymEncKeys()
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val encryptedBytes = cryptoObject.asymEncrypt(asymEncKeys.public, bytesToEncrypt)
        assertThrows<BadPaddingException> {
            cryptoObject.asymDecrypt(otherAsymEncKeyPair.private, encryptedBytes)
        }
    }

    @Test
    fun `asymmetric decryption of random bytes throws BadPaddingException`() {
        assertThrows<BadPaddingException> {
            cryptoObject.asymDecrypt(asymEncKeys.private, Random.nextBytes(bytesEncLength))
        }
    }
}