package eu.fbk.st.cryptoac.crypto

import org.junit.Assert.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import org.junit.jupiter.api.assertThrows
import java.io.ByteArrayInputStream
import java.io.IOError
import java.io.IOException
import java.security.InvalidKeyException
import java.security.SignatureException
import java.security.spec.InvalidKeySpecException
import kotlin.random.Random

/** Test class for interface "Crypto" */
internal abstract class CryptoTest {

    abstract val cryptoObject: Crypto
    val asymEncKeys by lazy { cryptoObject.generateAsymEncKeys() }
    val asymSigKeys by lazy { cryptoObject.generateAsymSigKeys() }
    val symKey by lazy { cryptoObject.generateSymKey() }
    val bytesEncLength = 1000
    val bytesSigLength = 1000
    val bytesDigestLength = 1000
    
    
    @Test
    fun `generate asymmetric encryption key works`() {
        assertDoesNotThrow {
            cryptoObject.generateAsymEncKeys()
        }
    }
    
    @Test
    fun `generate asymmetric signing key works`() {
        assertDoesNotThrow {
            cryptoObject.generateAsymSigKeys()
        }
    }
    
    @Test
    fun `generate symmetric key works`() {
        assertDoesNotThrow {
            cryptoObject.generateSymKey()
        }
    }

    @Test
    fun `generate digest works`() {
        val byteToDigest = Random.nextBytes(bytesDigestLength)
        assertEquals(512/8, cryptoObject.generateDigest(byteToDigest).size)
    }
    
    @Test
    fun `generate digest of empty byte array throws IllegalArgumentException`() {
        assertThrows<IllegalArgumentException> {
            cryptoObject.generateDigest(ByteArray(0))
        }
    }

    @Test
    fun `create signature works`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        assertDoesNotThrow {
            cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
        }
    }
    
    @Test
    fun `create signature of empty byte array throws IllegalArgumentException`() {
        assertThrows<IllegalArgumentException> {
            cryptoObject.createSignature(ByteArray(0), asymSigKeys.private)
        }
    }
    
    @Test
    fun `verify original signature works`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        assertDoesNotThrow {
            val signature = cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
            cryptoObject.verifySignature(signature = signature, bytes = bytesToSign, asymSigKeys.public)
        }
    }
    
    @Test
    fun `verify tampered signature throws SignatureException`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
        val tamperedSignature = signature.copyOf()
        do {
            Random.nextBytes(tamperedSignature)
        } while (signature.contentEquals(tamperedSignature))
        assertThrows<SignatureException> {
            cryptoObject.verifySignature(signature = tamperedSignature, bytes = bytesToSign, asymSigKeys.public)
        }
    }
    
    @Test
    fun `verify swapped signatures throws SignatureException`() {
        val bytesToSign1 = Random.nextBytes(bytesSigLength)
        val bytesToSign2 = Random.nextBytes(bytesSigLength)
        val signature1 = cryptoObject.createSignature(bytesToSign1, asymSigKeys.private)
        val signature2 = cryptoObject.createSignature(bytesToSign2, asymSigKeys.private)
        assertThrows<SignatureException> {
            cryptoObject.verifySignature(signature = signature1, bytes = bytesToSign2, asymSigKeys.public)
        }
        assertThrows<SignatureException> {
            cryptoObject.verifySignature(signature = signature2, bytes = bytesToSign1, asymSigKeys.public)
        }
    }
    
    @Test
    fun `verify signature of empty byte array or empty signature throws IllegalArgumentException`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
        assertThrows<IllegalArgumentException> {
            cryptoObject.verifySignature(signature = signature, bytes = ByteArray(0), asymSigKeys.public)
        }
        assertThrows<IllegalArgumentException> {
            cryptoObject.verifySignature(signature = ByteArray(0), bytes = bytesToSign, asymSigKeys.public)
        }
    }
    
    @Test
    fun `verify signature made with different key throws SignatureException`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
        val otherAsymKeys = cryptoObject.generateAsymSigKeys()
        assertThrows<SignatureException> {
            cryptoObject.verifySignature(signature = signature, bytes = bytesToSign, otherAsymKeys.public)
        }
    }

    @Test
    fun `verify short signature throws SignatureException`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = cryptoObject.createSignature(bytesToSign, asymSigKeys.private)
        val shortSignature = signature.copyOfRange(0, signature.size-1)
        assertThrows<SignatureException> {
            cryptoObject.verifySignature(
                signature = shortSignature, bytes = bytesToSign, asymSigKeys.public
            )
        }
    }

    @Test
    fun `recreate asymmetric encryption keys works`() {
        val keyPair = cryptoObject.recreateAsymKeyPair(
            asymEncKeys.public.encoded, asymEncKeys.private.encoded, AsymKeysType.ENC
        )
        assert(keyPair.public.encoded.contentEquals(asymEncKeys.public.encoded))
        assert(keyPair.private.encoded.contentEquals(asymEncKeys.private.encoded))
    }
    
    @Test
    fun `recreate different pairs of asymmetric encryption keys throws InvalidKeyException`() {
        val otherKeys = cryptoObject.generateAsymEncKeys()
        assertThrows<InvalidKeyException> {
            cryptoObject.recreateAsymKeyPair(
                asymEncKeys.public.encoded, otherKeys.private.encoded, AsymKeysType.ENC
            )
        }
    }

    @Test
    fun `recreate asymmetric signing keys works`() {
        val keyPair = cryptoObject.recreateAsymKeyPair(
            asymSigKeys.public.encoded, asymSigKeys.private.encoded, AsymKeysType.SIG
        )
        assert(keyPair.public.encoded.contentEquals(asymSigKeys.public.encoded))
        assert(keyPair.private.encoded.contentEquals(asymSigKeys.private.encoded))
    }
    
    @Test
    fun `recreate asymmetric encryption keys with private or public key missing throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoObject.recreateAsymKeyPair(
                asymSigKeys.public.encoded, ByteArray(0), AsymKeysType.ENC
            )
        }
        assertThrows<InvalidKeySpecException> {
            cryptoObject.recreateAsymKeyPair(
                ByteArray(0), asymSigKeys.private.encoded, AsymKeysType.ENC
            )
        }
    }
    
    @Test
    fun `recreate asymmetric signing keys with private or public key missing throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoObject.recreateAsymKeyPair(
                asymSigKeys.public.encoded, ByteArray(0), AsymKeysType.SIG
            )
        }
        assertThrows<InvalidKeySpecException> {
            cryptoObject.recreateAsymKeyPair(
                ByteArray(0), asymSigKeys.private.encoded, AsymKeysType.SIG
            )
        }
    }
    
    @Test
    fun `recreate different pairs of asymmetric signing keys throws InvalidKeyException`() {
        val otherKeys = cryptoObject.generateAsymSigKeys()
        assertThrows<InvalidKeyException> {
            cryptoObject.recreateAsymKeyPair(
                asymSigKeys.public.encoded, otherKeys.private.encoded, AsymKeysType.SIG
            )
        }
    }

    @Test
    fun `recreate asymmetric signing public key with empty byte array throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoObject.recreateAsymPublicKey(
                ByteArray(0), AsymKeysType.ENC
            )
        }
    }
    
    @Test
    fun `recreate asymmetric encryption public key with empty byte array throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoObject.recreateAsymPublicKey(
                ByteArray(0), AsymKeysType.ENC
            )
        }
    }
    
    @Test
    fun `recreate asymmetric signing public key works`() {
        val publicKey = cryptoObject.recreateAsymPublicKey(
            asymSigKeys.public.encoded, AsymKeysType.SIG
        )
        assert(publicKey.encoded.contentEquals(asymSigKeys.public.encoded))
    }
    
    @Test
    fun `recreate asymmetric encryption public key works`() {
        val publicKey = cryptoObject.recreateAsymPublicKey(
            asymEncKeys.public.encoded, AsymKeysType.ENC
        )
        assert(publicKey.encoded.contentEquals(asymEncKeys.public.encoded))
    }

    @Test
    fun `recreate asymmetric signing private key with empty byte array throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoObject.recreateAsymPrivateKey(
                ByteArray(0), AsymKeysType.SIG
            )
        }
    }
    
    @Test
    fun `recreate asymmetric encryption private key with empty byte array throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoObject.recreateAsymPrivateKey(
                ByteArray(0), AsymKeysType.ENC
            )
        }
    }
    
    @Test
    fun `recreate asymmetric signing private key works`() {
        val privateKey = cryptoObject.recreateAsymPrivateKey(
            asymSigKeys.private.encoded, AsymKeysType.SIG
        )
        assert(privateKey.encoded.contentEquals(asymSigKeys.private.encoded))
    }
    
    @Test
    fun `recreate asymmetric encryption private key works`() {
        val privateKey = cryptoObject.recreateAsymPrivateKey(
            asymEncKeys.private.encoded, AsymKeysType.ENC
        )
        assert(privateKey.encoded.contentEquals(asymEncKeys.private.encoded))
    }
    
    @Test
    fun `encrypt asymmetric encryption keys works`() {
        val otherAsymEncKeys = cryptoObject.generateAsymEncKeys()
        assertDoesNotThrow {
            cryptoObject.encryptAsymKeys(otherAsymEncKeys.public, asymEncKeys, AsymKeysType.ENC)
        }
    }
    
    @Test
    fun `encrypt asymmetric signing keys works`() {
        val otherAsymSigKeys = cryptoObject.generateAsymSigKeys()
        assertDoesNotThrow {
            cryptoObject.encryptAsymKeys(otherAsymSigKeys.public, asymEncKeys, AsymKeysType.ENC)
        }
    }
    
    @Test
    fun `decrypt asymmetric encryption keys works`() {
        val otherAsymEncKeys = cryptoObject.generateAsymEncKeys()
        val encryptedAsymEncKeys = cryptoObject.encryptAsymKeys(otherAsymEncKeys.public, asymEncKeys, AsymKeysType.ENC)
        val decryptedAsymEncKeys = cryptoObject.decryptAsymEncKeys(otherAsymEncKeys.public, otherAsymEncKeys.private, encryptedAsymEncKeys)
        assert(decryptedAsymEncKeys.public.encoded.contentEquals(asymEncKeys.public.encoded))
        assert(decryptedAsymEncKeys.private.encoded.contentEquals(asymEncKeys.private.encoded))
    }
    
    @Test
    fun `decrypt random bytes as asymmetric encryption keys throws CryptographicOperationException`() {
        val encryptedAsymEncKeys = EncryptedAsymKeys(
            private = Random.nextBytes(asymEncKeys.private.encoded.size),
            public = Random.nextBytes(asymEncKeys.public.encoded.size),
            keysType = AsymKeysType.ENC
        )
        assertThrows<CryptographicOperationException> {
            cryptoObject.decryptAsymEncKeys(asymEncKeys.public, asymEncKeys.private, encryptedAsymEncKeys)
        }
    }
    
    @Test
    fun `decrypt asymmetric encryption keys of different pairs throws InvalidKeyException`() {
        val otherAsymEncKeys1 = cryptoObject.generateAsymEncKeys()
        val otherAsymEncKeys2 = cryptoObject.generateAsymEncKeys()
        val encryptedAsymEncKeys1 = cryptoObject.encryptAsymKeys(asymEncKeys.public, otherAsymEncKeys1, AsymKeysType.ENC)
        val encryptedAsymEncKeys2 = cryptoObject.encryptAsymKeys(asymEncKeys.public, otherAsymEncKeys2, AsymKeysType.ENC)
        val diffEncryptedAsymKeys = EncryptedAsymKeys(
            public = encryptedAsymEncKeys1.public,
            private = encryptedAsymEncKeys2.private,
            keysType = AsymKeysType.ENC
        )
        assertThrows<InvalidKeyException> {
            cryptoObject.decryptAsymEncKeys(asymEncKeys.public, asymEncKeys.private, diffEncryptedAsymKeys)
        }
    }
    
    @Test
    fun `decrypt asymmetric encryption keys with wrong key throws CryptographicOperationException`() {
        val otherAsymEncKeys1 = cryptoObject.generateAsymEncKeys()
        val otherAsymEncKeys2 = cryptoObject.generateAsymEncKeys()
        val encryptedAsymEncKeys = cryptoObject.encryptAsymKeys(otherAsymEncKeys1.public, asymEncKeys, AsymKeysType.ENC)
        assertThrows<CryptographicOperationException> {
            cryptoObject.decryptAsymEncKeys(otherAsymEncKeys2.public, otherAsymEncKeys2.private, encryptedAsymEncKeys)
        }
    }
    
    @Test
    fun `decrypt asymmetric signing keys works`() {
        val otherAsymEncKeys = cryptoObject.generateAsymEncKeys()
        val encryptedAsymSigKeys = cryptoObject.encryptAsymKeys(otherAsymEncKeys.public, asymSigKeys, AsymKeysType.SIG)
        val decryptedAsymSigKeys = cryptoObject.decryptAsymSigKeys(otherAsymEncKeys.public, otherAsymEncKeys.private, encryptedAsymSigKeys)
        assert(decryptedAsymSigKeys.public.encoded.contentEquals(asymSigKeys.public.encoded))
        assert(decryptedAsymSigKeys.private.encoded.contentEquals(asymSigKeys.private.encoded))
    }

    @Test
    fun `decrypt asymmetric signing keys with wrong key throws CryptographicOperationException`() {
        val otherAsymSigKeys1 = cryptoObject.generateAsymSigKeys()
        val otherAsymSigKeys2 = cryptoObject.generateAsymSigKeys()
        val encryptedAsymSigKeys = cryptoObject.encryptAsymKeys(otherAsymSigKeys1.public, asymSigKeys, AsymKeysType.SIG)
        assertThrows<CryptographicOperationException> {
            cryptoObject.decryptAsymSigKeys(otherAsymSigKeys2.public, otherAsymSigKeys2.private, encryptedAsymSigKeys)
        }
    }

    @Test
    fun `decrypt random bytes as asymmetric signing keys throws CryptographicOperationException`() {
        val encryptedAsymSigKeys = EncryptedAsymKeys(
            private = Random.nextBytes(asymSigKeys.private.encoded.size),
            public = Random.nextBytes(asymSigKeys.public.encoded.size),
            keysType = AsymKeysType.SIG
        )
        assertThrows<CryptographicOperationException> {
            cryptoObject.decryptAsymSigKeys(asymEncKeys.public, asymEncKeys.private, encryptedAsymSigKeys)
        }
    }
    
    @Test
    fun `decrypt asymmetric signing keys of different pairs throws InvalidKeyException`() {
        val otherAsymSigKeys1 = cryptoObject.generateAsymSigKeys()
        val otherAsymSigKeys2 = cryptoObject.generateAsymSigKeys()
        val encryptedAsymSigKeys1 = cryptoObject.encryptAsymKeys(asymEncKeys.public, otherAsymSigKeys1, AsymKeysType.SIG)
        val encryptedAsymSigKeys2 = cryptoObject.encryptAsymKeys(asymEncKeys.public, otherAsymSigKeys2, AsymKeysType.SIG)
        val diffEncryptedAsymKeys = EncryptedAsymKeys(
            public = encryptedAsymSigKeys1.public,
            private = encryptedAsymSigKeys2.private,
            keysType = AsymKeysType.SIG
        )
        assertThrows<InvalidKeyException> {
            cryptoObject.decryptAsymSigKeys(asymEncKeys.public, asymEncKeys.private, diffEncryptedAsymKeys)
        }
    }
    
    @Test
    fun `encrypt symmetric key works`() {
        assertDoesNotThrow {
            cryptoObject.encryptSymKey(asymEncKeys.public, symKey)
        }
    }
    
    @Test
    fun `decrypt symmetric key works`() {
        val encryptedSymKey = cryptoObject.encryptSymKey(asymEncKeys.public, symKey)
        val decryptedSymKey = cryptoObject.decryptSymKey(asymEncKeys.public, asymEncKeys.private, encryptedSymKey)
        assert(decryptedSymKey.secretKey.encoded.contentEquals(symKey.secretKey.encoded))
    }
    
    @Test
    fun `decrypt symmetric key with wrong key throws CryptographicOperationException`() {
        val otherAsymEncKeys = cryptoObject.generateAsymEncKeys()
        val encryptedSymKey = cryptoObject.encryptSymKey(asymEncKeys.public, symKey)
        assertThrows<CryptographicOperationException> {
            cryptoObject.decryptSymKey(otherAsymEncKeys.public, otherAsymEncKeys.private, encryptedSymKey)
        }
    }
    
    @Test
    fun `decrypt random bytes as symmetric key throws CryptographicOperationException`() {
        val otherAsymEncKeys = cryptoObject.generateAsymEncKeys()
        val encryptedSymKey = cryptoObject.encryptSymKey(asymEncKeys.public, symKey)
        assertThrows<CryptographicOperationException> {
            cryptoObject.decryptSymKey(otherAsymEncKeys.public, otherAsymEncKeys.private, encryptedSymKey)
        }
    }
    
    @Test
    fun `encrypt stream works`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        assertDoesNotThrow {
            cryptoObject.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
        }
    }
    
    @Test
    fun `encrypt empty stream works`() {
        assertDoesNotThrow {
            cryptoObject.encryptStream(symKey, ByteArrayInputStream(ByteArray(0))).readAllBytes()
        }
    }
    
    @Test
    fun `decrypt empty stream works`() {
        val bytesToEncrypt = Random.nextBytes(0)
        val encBytes = cryptoObject.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
        val decBytes = cryptoObject.decryptStream(symKey, ByteArrayInputStream(encBytes))
        assert(bytesToEncrypt.contentEquals(decBytes.readAllBytes()))
    }
    
    @Test
    fun `decrypt stream works`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val encBytes = cryptoObject.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
        val decBytes = cryptoObject.decryptStream(symKey, ByteArrayInputStream(encBytes)).readAllBytes()
        assert(bytesToEncrypt.contentEquals(decBytes))
    }

    @Test
    open fun `decrypt stream with wrong key`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val otherKey = cryptoObject.generateSymKey()
        val encBytes = cryptoObject.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
        try {
            val decBytes = cryptoObject.decryptStream(otherKey, ByteArrayInputStream(encBytes)).readAllBytes()
            assert(!bytesToEncrypt.contentEquals(decBytes))
        } catch (e: IOException) {
            assert(e.message!!.contains("javax.crypto.AEADBadTagException: Tag mismatch!"))
        }
    }
 }
