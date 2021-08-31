package eu.fbk.st.cryptoac.crypto.java

import eu.fbk.st.cryptoac.Parameters
import eu.fbk.st.cryptoac.crypto.AsymKeysType
import eu.fbk.st.cryptoac.crypto.CryptoFactory
import eu.fbk.st.cryptoac.crypto.CryptoTest
import eu.fbk.st.cryptoac.crypto.CryptoType
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import org.junit.jupiter.api.assertThrows
import java.io.ByteArrayInputStream
import java.security.*
import java.security.spec.InvalidKeySpecException
import javax.crypto.BadPaddingException
import kotlin.random.Random

/** Test class for class "CryptoJava". */
internal class CryptoJavaTest : CryptoTest() {

    private val cryptoJava = CryptoFactory.getCrypto(CryptoType.JAVA) as CryptoJava
    private val asymEncKeys = cryptoJava.generateAsymEncKeys()
    private val asymSigKeys = cryptoJava.generateAsymSigKeys()
    private val symKey = cryptoJava.generateSymKey()
    private val bytesSigLength = 1000
    private val bytesEncLength = 1000


    @Test
    fun checkAsymEncKeys() {
        `pair of asymmetric encryption keys belong to each other`()
        `pairs of different asymmetric encryption keys do not belong to each other`()
    }

    @Test
    fun checkAsymSigKeys() {
        `pair of asymmetric signing keys belong to each other`()
        `pairs of different asymmetric signing keys do not belong to each other`()
    }

    @Test
    fun asymEncrypt() {
        // TODO
    }

    @Test
    fun asymDecrypt() {
        // TODO
    }


    override fun `verification of original signature works`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        assertDoesNotThrow {
            val signature = Parameters.cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
            Parameters.cryptoObject.verifySignature(signature = signature, bytes = bytesToSign, asymSigKeys.public)
        }
    }
    override fun `signature creation of zero bytes fails`() {
        val bytesToSign = ByteArray(0)
        assertThrows<SignatureException> {
            Parameters.cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
        }
    }

    override fun `verification of signature of zero bytes fails`() {
        val signature = ByteArray(0)
        assertThrows<SignatureException> {
            Parameters.cryptoObject.verifySignature(signature, signature, asymSigKeys.public)
        }
    }
    override fun `verification of modified signature fails`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = Parameters.cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
        signature[signature.size-1] = signature[0].also { signature[0] = signature[signature.size-1] }
        assertThrows<SignatureException> {
            Parameters.cryptoObject.verifySignature(signature = signature, bytes = bytesToSign, asymSigKeys.public)
        }
    }
    override fun `verification of swapped signatures fails`() {
        val bytesToSign1 = Random.nextBytes(bytesSigLength)
        val bytesToSign2 = Random.nextBytes(bytesSigLength)
        val signature1 = Parameters.cryptoObject.createSignature(bytesToSign1, asymSigKeys.private)
        val signature2 = Parameters.cryptoObject.createSignature(bytesToSign2, asymSigKeys.private)
        assertThrows<SignatureException> {
            Parameters.cryptoObject.verifySignature(signature = signature1, bytes = bytesToSign2, asymSigKeys.public)
        }
        assertThrows<SignatureException> {
            Parameters.cryptoObject.verifySignature(signature = signature2, bytes = bytesToSign1, asymSigKeys.public)
        }
    }
    override fun `verification of signatures made with other key fails`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = Parameters.cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
        val otherAsymKeys = Parameters.cryptoObject.generateAsymSigKeys()
        assertThrows<SignatureException> {
            Parameters.cryptoObject.verifySignature(signature = signature, bytes = bytesToSign, otherAsymKeys.public)
        }
    }
    override fun `verification of short signature throws exception`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = Parameters.cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
        val shortSignature = signature.copyOfRange(0, signature.size-1)
        assertThrows<SignatureException> {
            Parameters.cryptoObject.verifySignature(signature = shortSignature, bytes = bytesToSign, asymSigKeys.public)
        }
    }

    override fun `recreation of asymmetric encryption keys works`() {
        val keyPair = Parameters.cryptoObject.recreateAsymKeys(asymEncKeys.public.encoded, asymEncKeys.private.encoded, AsymKeysType.ENC)
        assert(keyPair.public == asymEncKeys.public)
        assert(keyPair.private == asymEncKeys.private)
    }
    override fun `recreation of different asymmetric encryption keys does not work`() {
        val otherKeys = Parameters.cryptoObject.generateAsymEncKeys()
        assertThrows<InvalidKeyException> {
            Parameters.cryptoObject.recreateAsymKeys(asymEncKeys.public.encoded, otherKeys.private.encoded, AsymKeysType.ENC)
        }
    }
    override fun `recreation of asymmetric encryption keys from random bytes does not work`() {
        val randomEncAsymKeyPublic = Random.nextBytes(asymEncKeys.public.encoded.size)
        val randomEncAsymKeyPrivate = Random.nextBytes(asymEncKeys.private.encoded.size)
        assertThrows<InvalidKeySpecException> {
            Parameters.cryptoObject.recreateAsymKeys(randomEncAsymKeyPublic, randomEncAsymKeyPrivate, AsymKeysType.ENC)
        }
    }
    override fun `recreation of asymmetric signing keys works`() {
        val keyPair = Parameters.cryptoObject.recreateAsymKeys(asymSigKeys.public.encoded, asymSigKeys.private.encoded, AsymKeysType.SIG)
        assert(keyPair.public == asymSigKeys.public)
        assert(keyPair.private == asymSigKeys.private)
    }
    override fun `recreation of different asymmetric signing keys does not work`() {
        val otherKeys = Parameters.cryptoObject.generateAsymSigKeys()
        assertThrows<InvalidKeyException> {
            Parameters.cryptoObject.recreateAsymKeys(asymSigKeys.public.encoded, otherKeys.private.encoded, AsymKeysType.SIG)
        }
    }
    override fun `recreation of asymmetric signing keys from random bytes does not work`() {
        val randomSigAsymKeyPublic = Random.nextBytes(asymSigKeys.public.encoded.size)
        val randomSigAsymKeyPrivate = Random.nextBytes(asymSigKeys.private.encoded.size)
        assertThrows<InvalidKeySpecException> {
            Parameters.cryptoObject.recreateAsymKeys(randomSigAsymKeyPublic, randomSigAsymKeyPrivate, AsymKeysType.SIG)
        }
    }

    override fun `encryption and decryption of asymmetric encryption keys works`() {
        val otherAsymEncKeys = Parameters.cryptoObject.generateAsymEncKeys()
        val encryptedAsymEncKeys = Parameters.cryptoObject.encryptAsymKeys(otherAsymEncKeys.public, asymEncKeys, AsymKeysType.ENC)
        val decryptedAsymEncKeys = Parameters.cryptoObject.decryptAsymEncKeys(otherAsymEncKeys.private, encryptedAsymEncKeys)
        assert(decryptedAsymEncKeys.public.encoded.contentEquals(asymEncKeys.public.encoded))
        assert(decryptedAsymEncKeys.private.encoded.contentEquals(asymEncKeys.private.encoded))
    }
    override fun `encryption and decryption of asymmetric encryption keys with different keys does not work`() {
        val otherAsymEncKeys1 = Parameters.cryptoObject.generateAsymEncKeys()
        val otherAsymEncKeys2 = Parameters.cryptoObject.generateAsymEncKeys()
        val encryptedAsymEncKeys = Parameters.cryptoObject.encryptAsymKeys(otherAsymEncKeys1.public, asymEncKeys, AsymKeysType.ENC)
        assertThrows<BadPaddingException> {
            Parameters.cryptoObject.decryptAsymEncKeys(otherAsymEncKeys2.private, encryptedAsymEncKeys)
        }
    }
    override fun `encryption and decryption of asymmetric signing keys works`() {
        val otherAsymSigKeys = Parameters.cryptoObject.generateAsymSigKeys()
        val encryptedAsymSigKeys = Parameters.cryptoObject.encryptAsymKeys(otherAsymSigKeys.public, asymSigKeys, AsymKeysType.SIG)
        val decryptedAsymSigKeys = Parameters.cryptoObject.decryptAsymSigKeys(otherAsymSigKeys.private, encryptedAsymSigKeys)
        assert(decryptedAsymSigKeys.public.encoded.contentEquals(asymSigKeys.public.encoded))
        assert(decryptedAsymSigKeys.private.encoded.contentEquals(asymSigKeys.private.encoded))
    }
    override fun `encryption and decryption of asymmetric signing keys with different keys does not work`() {
        val otherAsymSigKeys1 = Parameters.cryptoObject.generateAsymSigKeys()
        val otherAsymSigKeys2 = Parameters.cryptoObject.generateAsymSigKeys()
        val encryptedAsymSigKeys = Parameters.cryptoObject.encryptAsymKeys(otherAsymSigKeys1.public, asymSigKeys, AsymKeysType.SIG)
        assertThrows<BadPaddingException> {
            Parameters.cryptoObject.decryptAsymSigKeys(otherAsymSigKeys2.private, encryptedAsymSigKeys)
        }
    }
    override fun `encryption and decryption of symmetric key works`() {
        val encryptedSymKey = Parameters.cryptoObject.encryptSymKey(asymEncKeys.public, symKey)
        val decryptedSymKey = Parameters.cryptoObject.decryptSymKey(asymEncKeys.private, encryptedSymKey)
        assert(decryptedSymKey.encoded.contentEquals(symKey.encoded))
    }
    override fun `encryption and decryption of symmetric key with different keys does not work`() {
        val otherAsymEncKeys = Parameters.cryptoObject.generateAsymEncKeys()
        val encryptedSymKey = Parameters.cryptoObject.encryptSymKey(asymEncKeys.public, symKey)
        assertThrows<BadPaddingException> {
            Parameters.cryptoObject.decryptSymKey(otherAsymEncKeys.private, encryptedSymKey)
        }
    }

    override fun `stream encryption and decryption work`() {
        val bytesToEncrypt = Random.nextBytes(1000)
        val encBytes = Parameters.cryptoObject.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
        val decBytes = Parameters.cryptoObject.decryptStream(symKey, ByteArrayInputStream(encBytes))
        assert(bytesToEncrypt.contentEquals(decBytes.readAllBytes()))
    }
    override fun `stream encryption and decryption with different keys does not work`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val otherKey = Parameters.cryptoObject.generateSymKey()
        val encBytes = Parameters.cryptoObject.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
        val decBytes = Parameters.cryptoObject.decryptStream(otherKey, ByteArrayInputStream(encBytes))
        assert(!bytesToEncrypt.contentEquals(decBytes.readAllBytes()))
    }

    private fun `pair of asymmetric encryption keys belong to each other`() {
        assertDoesNotThrow { cryptoJava.checkAsymEncKeys(asymEncKeys) }
    }
    private fun `pairs of different asymmetric encryption keys do not belong to each other`() {
        val otherKeys = cryptoJava.generateAsymEncKeys()
        val wrongKeyPair = KeyPair(asymEncKeys.public, otherKeys.private)
        assertThrows<InvalidKeyException> { cryptoJava.checkAsymEncKeys(wrongKeyPair) }
    }
    private fun `pair of asymmetric signing keys belong to each other`() {
        assertDoesNotThrow { cryptoJava.checkAsymSigKeys(asymSigKeys) }
    }
    private fun `pairs of different asymmetric signing keys do not belong to each other`() {
        val otherKeys = cryptoJava.generateAsymSigKeys()
        val wrongKeyPair = KeyPair(asymSigKeys.public, otherKeys.private)
        assertThrows<InvalidKeyException> { cryptoJava.checkAsymSigKeys(wrongKeyPair) }
    }
}