package eu.fbk.st.cryptoac.crypto

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import org.junit.jupiter.api.assertThrows
import java.security.InvalidKeyException
import java.security.SignatureException
import java.security.spec.InvalidKeySpecException
import kotlin.random.Random

internal abstract class CryptoPKETest : CryptoTest() {

    abstract val cryptoPKEObject: CryptoPKE
    abstract val cryptoSKEObject: CryptoSKE
    open val symKey by lazy { cryptoSKEObject.generateSymKey() }
    open val asymEncKeys by lazy { cryptoPKEObject.generateAsymEncKeys(keyID = "key0") }
    open val asymSigKeys by lazy { cryptoPKEObject.generateAsymSigKeys(keyID = "key1") }


    @Test
    fun `generate asymmetric encryption key works`() {
        assertDoesNotThrow {
            cryptoPKEObject.generateAsymEncKeys(keyID = "key2")
        }
    }

    @Test
    fun `generate asymmetric signing key works`() {
        assertDoesNotThrow {
            cryptoPKEObject.generateAsymSigKeys(keyID = "key3")
        }
    }

    @Test
    fun `create signature works`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        assertDoesNotThrow {
            cryptoPKEObject.createSignature(bytesToSign, asymSigKeys.private)
        }
    }

    @Test
    fun `create signature of empty byte array throws IllegalArgumentException`() {
        assertThrows<IllegalArgumentException> {
            cryptoPKEObject.createSignature(
                bytes = ByteArray(0),
                signingKey = asymSigKeys.private
            )
        }
    }

    @Test
    fun `verify original signature works`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        assertDoesNotThrow {
            val signature = cryptoPKEObject.createSignature(
                bytes = bytesToSign,
                signingKey = asymSigKeys.private
            )
            cryptoPKEObject.verifySignature(
                signature = signature,
                bytes = bytesToSign,
                verifyingKey = asymSigKeys.public
            )
        }
    }

    @Test
    fun `verify tampered signature throws SignatureException`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = cryptoPKEObject.createSignature(bytesToSign, asymSigKeys.private)
        val tamperedSignature = signature.copyOf()
        do {
            Random.nextBytes(tamperedSignature)
        } while (signature.contentEquals(tamperedSignature))
        assertThrows<SignatureException> {
            cryptoPKEObject.verifySignature(
                signature = tamperedSignature,
                bytes = bytesToSign,
                verifyingKey = asymSigKeys.public
            )
        }
    }

    @Test
    fun `verify swapped signatures throws SignatureException`() {
        val bytesToSign1 = Random.nextBytes(bytesSigLength)
        val bytesToSign2 = Random.nextBytes(bytesSigLength)
        val signature1 = cryptoPKEObject.createSignature(bytesToSign1, asymSigKeys.private)
        val signature2 = cryptoPKEObject.createSignature(bytesToSign2, asymSigKeys.private)
        assertThrows<SignatureException> {
            cryptoPKEObject.verifySignature(
                signature = signature1,
                bytes = bytesToSign2,
                verifyingKey = asymSigKeys.public
            )
        }
        assertThrows<SignatureException> {
            cryptoPKEObject.verifySignature(
                signature = signature2,
                bytes = bytesToSign1,
                verifyingKey = asymSigKeys.public
            )
        }
    }

    @Test
    fun `verify signature of empty byte array or empty signature throws IllegalArgumentException`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = cryptoPKEObject.createSignature(bytesToSign, asymSigKeys.private)
        assertThrows<IllegalArgumentException> {
            cryptoPKEObject.verifySignature(
                signature = signature,
                bytes = ByteArray(0),
                verifyingKey = asymSigKeys.public
            )
        }
        assertThrows<IllegalArgumentException> {
            cryptoPKEObject.verifySignature(
                signature = ByteArray(0),
                bytes = bytesToSign,
                verifyingKey = asymSigKeys.public
            )
        }
    }

    @Test
    fun `verify signature made with different key throws SignatureException`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = cryptoPKEObject.createSignature(bytesToSign, asymSigKeys.private)
        val otherAsymKeys = cryptoPKEObject.generateAsymSigKeys(keyID = "key4")
        assertThrows<SignatureException> {
            cryptoPKEObject.verifySignature(
                signature = signature,
                bytes = bytesToSign,
                verifyingKey = otherAsymKeys.public
            )
        }
    }

    @Test
    fun `verify short signature throws SignatureException`() {
        val bytesToSign = Random.nextBytes(bytesSigLength)
        val signature = cryptoPKEObject.createSignature(bytesToSign, asymSigKeys.private)
        val shortSignature = signature.copyOfRange(0, signature.size/2)
        assertThrows<SignatureException> {
            cryptoPKEObject.verifySignature(
                signature = shortSignature,
                bytes = bytesToSign,
                verifyingKey = asymSigKeys.public
            )
        }
    }

    @Test
    fun `recreate asymmetric encryption keys works`() {
        val keyPair = cryptoPKEObject.recreateAsymKeyPair(
            asymPublicKeyBytes = asymEncKeys.public.encoded,
            asymPrivateKeyBytes = asymEncKeys.private.encoded,
            type = AsymKeysType.ENC,
            keyID = "key0"
        )
        assert(keyPair.public.encoded.contentEquals(asymEncKeys.public.encoded))
        assert(keyPair.private.encoded.contentEquals(asymEncKeys.private.encoded))
    }

    @Test
    fun `recreate different pairs of asymmetric encryption keys throws InvalidKeyException`() {
        val otherKeys = cryptoPKEObject.generateAsymEncKeys(keyID = "key5")
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.recreateAsymKeyPair(
                asymPublicKeyBytes = asymEncKeys.public.encoded,
                asymPrivateKeyBytes = otherKeys.private.encoded,
                type = AsymKeysType.ENC,
                keyID = "key5"
            )
        }
    }

    @Test
    fun `recreate asymmetric signing keys works`() {
        val keyPair = cryptoPKEObject.recreateAsymKeyPair(
            asymPublicKeyBytes = asymSigKeys.public.encoded,
            asymPrivateKeyBytes = asymSigKeys.private.encoded,
            type = AsymKeysType.SIG,
            keyID = "key1"
        )
        assert(keyPair.public.encoded.contentEquals(asymSigKeys.public.encoded))
        assert(keyPair.private.encoded.contentEquals(asymSigKeys.private.encoded))
    }

    @Test
    fun `recreate asymmetric encryption keys with private or public key missing throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoPKEObject.recreateAsymKeyPair(
                asymPublicKeyBytes = asymSigKeys.public.encoded,
                asymPrivateKeyBytes = ByteArray(0),
                type = AsymKeysType.ENC,
                keyID = "key0"
            )
        }
        assertThrows<InvalidKeySpecException> {
            cryptoPKEObject.recreateAsymKeyPair(
                asymPublicKeyBytes = ByteArray(0),
                asymPrivateKeyBytes = asymSigKeys.private.encoded,
                type = AsymKeysType.ENC,
                keyID = "key0"
            )
        }
    }

    @Test
    fun `recreate asymmetric signing keys with private or public key missing throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoPKEObject.recreateAsymKeyPair(
                asymPublicKeyBytes = asymSigKeys.public.encoded,
                asymPrivateKeyBytes = ByteArray(0),
                type = AsymKeysType.SIG,
                keyID = "key0"
            )
        }
        assertThrows<InvalidKeySpecException> {
            cryptoPKEObject.recreateAsymKeyPair(
                asymPublicKeyBytes = ByteArray(0),
                asymPrivateKeyBytes = asymSigKeys.private.encoded,
                type = AsymKeysType.SIG,
                keyID = "key0"
            )
        }
    }

    @Test
    fun `recreate different pairs of asymmetric signing keys throws InvalidKeyException`() {
        val otherKeys = cryptoPKEObject.generateAsymSigKeys(keyID = "key6")
        assertThrows<InvalidKeyException> {
            cryptoPKEObject.recreateAsymKeyPair(
                asymPublicKeyBytes = asymSigKeys.public.encoded,
                asymPrivateKeyBytes = otherKeys.private.encoded,
                type = AsymKeysType.SIG,
                keyID = "key6"
            )
        }
    }

    @Test
    fun `recreate asymmetric signing public key with empty byte array throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoPKEObject.recreateAsymPublicKey(
                asymPublicKeyBytes = ByteArray(0),
                type = AsymKeysType.ENC,
                keyID = "key0"
            )
        }
    }

    @Test
    fun `recreate asymmetric encryption public key with empty byte array throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoPKEObject.recreateAsymPublicKey(
                asymPublicKeyBytes = ByteArray(0),
                type = AsymKeysType.ENC,
                keyID = "key0"
            )
        }
    }

    @Test
    fun `recreate asymmetric signing public key works`() {
        val publicKey = cryptoPKEObject.recreateAsymPublicKey(
            asymPublicKeyBytes = asymSigKeys.public.encoded,
            type = AsymKeysType.SIG,
            keyID = "key1"
        )
        assert(publicKey.encoded.contentEquals(asymSigKeys.public.encoded))
    }

    @Test
    fun `recreate asymmetric encryption public key works`() {
        val publicKey = cryptoPKEObject.recreateAsymPublicKey(
            asymPublicKeyBytes = asymEncKeys.public.encoded,
            type = AsymKeysType.ENC,
            keyID = "key0"
        )
        assert(publicKey.encoded.contentEquals(asymEncKeys.public.encoded))
    }

    @Test
    fun `recreate asymmetric signing private key with empty byte array throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoPKEObject.recreateAsymPrivateKey(
                asymPrivateKeyBytes = ByteArray(0),
                type = AsymKeysType.SIG,
                keyID = "key0"
            )
        }
    }

    @Test
    fun `recreate asymmetric encryption private key with empty byte array throws InvalidKeySpecException`() {
        assertThrows<InvalidKeySpecException> {
            cryptoPKEObject.recreateAsymPrivateKey(
                asymPrivateKeyBytes = ByteArray(0),
                type = AsymKeysType.ENC,
                keyID = "key0"
            )
        }
    }

    @Test
    fun `recreate asymmetric signing private key works`() {
        val privateKey = cryptoPKEObject.recreateAsymPrivateKey(
            asymPrivateKeyBytes = asymSigKeys.private.encoded,
            type = AsymKeysType.SIG,
            keyID = "key1"
        )
        assert(privateKey.encoded.contentEquals(asymSigKeys.private.encoded))
    }

    @Test
    fun `recreate asymmetric encryption private key works`() {
        val privateKey = cryptoPKEObject.recreateAsymPrivateKey(
            asymPrivateKeyBytes = asymEncKeys.private.encoded,
            type = AsymKeysType.ENC,
            keyID = "key0"
        )
        assert(privateKey.encoded.contentEquals(asymEncKeys.private.encoded))
    }

    @Test
    fun `encrypt asymmetric encryption keys works`() {
        val otherAsymEncKeys = cryptoPKEObject.generateAsymEncKeys(keyID = "key7")
        assertDoesNotThrow {
            cryptoPKEObject.encryptAsymKeys(
                encryptingKey = asymEncKeys.public,
                asymKeys = otherAsymEncKeys,
                type = AsymKeysType.ENC
            )
        }
    }

    @Test
    fun `encrypt asymmetric signing keys works`() {
        val otherAsymSigKeys = cryptoPKEObject.generateAsymSigKeys(keyID = "key8")
        assertDoesNotThrow {
            cryptoPKEObject.encryptAsymKeys(
                encryptingKey = asymEncKeys.public,
                asymKeys = otherAsymSigKeys,
                type = AsymKeysType.SIG
            )
        }
    }

    @Test
    fun `decrypt asymmetric encryption keys works`() {
        val otherAsymEncKeys = cryptoPKEObject.generateAsymEncKeys(keyID = "key9")
        val encryptedAsymEncKeys = cryptoPKEObject.encryptAsymKeys(
            encryptingKey = otherAsymEncKeys.public,
            asymKeys = asymEncKeys,
            type = AsymKeysType.ENC
        )
        val decryptedAsymEncKeys = cryptoPKEObject.decryptAsymEncKeys(
            encryptingKey = otherAsymEncKeys.public,
            decryptingKey = otherAsymEncKeys.private,
            encryptedAsymEncKeys = encryptedAsymEncKeys
        )
        assert(decryptedAsymEncKeys.public.encoded.contentEquals(asymEncKeys.public.encoded))
        assert(decryptedAsymEncKeys.private.encoded.contentEquals(asymEncKeys.private.encoded))
    }

    @Test
    fun `decrypt random bytes as asymmetric encryption keys throws CryptographicOperationException`() {
        val encryptedAsymEncKeys = EncryptedAsymKeys(
            private = Random.nextBytes(asymEncKeys.private.encoded.size),
            public = Random.nextBytes(asymEncKeys.public.encoded.size),
            keyType = AsymKeysType.ENC
        )
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.decryptAsymEncKeys(
                encryptingKey = asymEncKeys.public,
                decryptingKey = asymEncKeys.private,
                encryptedAsymEncKeys = encryptedAsymEncKeys
            )
        }
    }

    @Test
    fun `decrypt asymmetric encryption keys of different pairs throws InvalidKeyException`() {
        val otherAsymEncKeys1 = cryptoPKEObject.generateAsymEncKeys(keyID = "key10")
        val otherAsymEncKeys2 = cryptoPKEObject.generateAsymEncKeys(keyID = "key11")
        val encryptedAsymEncKeys1 = cryptoPKEObject.encryptAsymKeys(
            encryptingKey = asymEncKeys.public,
            asymKeys = otherAsymEncKeys1,
            type = AsymKeysType.ENC
        )
        val encryptedAsymEncKeys2 = cryptoPKEObject.encryptAsymKeys(
            encryptingKey = asymEncKeys.public,
            asymKeys = otherAsymEncKeys2,
            type = AsymKeysType.ENC
        )
        val diffEncryptedAsymKeys = EncryptedAsymKeys(
            public = encryptedAsymEncKeys1.public,
            private = encryptedAsymEncKeys2.private,
            keyType = AsymKeysType.ENC,
            keyID = "key10"
        )
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.decryptAsymEncKeys(
                encryptingKey = asymEncKeys.public,
                decryptingKey = asymEncKeys.private,
                encryptedAsymEncKeys = diffEncryptedAsymKeys
            )
        }
    }

    @Test
    fun `decrypt asymmetric encryption keys with wrong key throws CryptographicOperationException`() {
        val otherAsymEncKeys1 = cryptoPKEObject.generateAsymEncKeys(keyID = "key12")
        val otherAsymEncKeys2 = cryptoPKEObject.generateAsymEncKeys(keyID = "key13")
        val encryptedAsymEncKeys = cryptoPKEObject.encryptAsymKeys(
            encryptingKey = otherAsymEncKeys1.public,
            asymKeys = asymEncKeys,
            type = AsymKeysType.ENC
        )
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.decryptAsymEncKeys(
                encryptingKey = otherAsymEncKeys2.public,
                decryptingKey = otherAsymEncKeys2.private,
                encryptedAsymEncKeys = encryptedAsymEncKeys
            )
        }
    }

    @Test
    fun `decrypt asymmetric signing keys works`() {
        val otherAsymEncKeys = cryptoPKEObject.generateAsymEncKeys(keyID = "key14")
        val encryptedAsymSigKeys = cryptoPKEObject.encryptAsymKeys(
            encryptingKey = otherAsymEncKeys.public,
            asymKeys = asymSigKeys,
            type = AsymKeysType.SIG
        )
        val decryptedAsymSigKeys = cryptoPKEObject.decryptAsymSigKeys(
            encryptingKey = otherAsymEncKeys.public,
            decryptingKey = otherAsymEncKeys.private,
            encryptedAsymSigKeys = encryptedAsymSigKeys
        )
        assert(decryptedAsymSigKeys.public.encoded.contentEquals(asymSigKeys.public.encoded))
        assert(decryptedAsymSigKeys.private.encoded.contentEquals(asymSigKeys.private.encoded))
    }

    @Test
    fun `decrypt asymmetric signing keys with wrong key throws CryptographicOperationException`() {
//        (cryptoPKEObject as CryptoOpenABE).testTODELETE()
        val otherAsymEncKeys1 = cryptoPKEObject.generateAsymEncKeys(keyID = "key15")
        val otherAsymEncKeys2 = cryptoPKEObject.generateAsymEncKeys(keyID = "key16")
        val encryptedAsymSigKeys = cryptoPKEObject.encryptAsymKeys(
            encryptingKey = otherAsymEncKeys1.public,
            asymKeys = asymSigKeys,
            type = AsymKeysType.SIG
        )
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.decryptAsymSigKeys(
                encryptingKey = otherAsymEncKeys2.public,
                decryptingKey = otherAsymEncKeys2.private,
                encryptedAsymSigKeys = encryptedAsymSigKeys
            )
        }
    }

    @Test
    fun `decrypt random bytes as asymmetric signing keys throws CryptographicOperationException`() {
        val encryptedAsymSigKeys = EncryptedAsymKeys(
            private = Random.nextBytes(asymSigKeys.private.encoded.size),
            public = Random.nextBytes(asymSigKeys.public.encoded.size),
            keyType = AsymKeysType.SIG,
        )
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.decryptAsymSigKeys(
                encryptingKey = asymEncKeys.public,
                decryptingKey = asymEncKeys.private,
                encryptedAsymSigKeys = encryptedAsymSigKeys
            )
        }
    }

    @Test
    fun `decrypt asymmetric signing keys of different pairs throws InvalidKeyException`() {
        val otherAsymSigKeys1 = cryptoPKEObject.generateAsymSigKeys(keyID = "key17")
        val otherAsymSigKeys2 = cryptoPKEObject.generateAsymSigKeys(keyID = "key18")
        val encryptedAsymSigKeys1 = cryptoPKEObject.encryptAsymKeys(
            encryptingKey = asymEncKeys.public,
            asymKeys = otherAsymSigKeys1,
            type = AsymKeysType.SIG
        )
        val encryptedAsymSigKeys2 = cryptoPKEObject.encryptAsymKeys(
            encryptingKey = asymEncKeys.public,
            asymKeys = otherAsymSigKeys2,
            type = AsymKeysType.SIG
        )
        val diffEncryptedAsymKeys = EncryptedAsymKeys(
            public = encryptedAsymSigKeys1.public,
            private = encryptedAsymSigKeys2.private,
            keyType = AsymKeysType.SIG,
            keyID = "key17"
        )
        assertThrows<InvalidKeyException> {
            cryptoPKEObject.decryptAsymSigKeys(
                encryptingKey = asymEncKeys.public,
                decryptingKey = asymEncKeys.private,
                encryptedAsymSigKeys = diffEncryptedAsymKeys
            )
        }
    }

    @Test
    fun `encrypt symmetric key works`() {
        assertDoesNotThrow {
            cryptoPKEObject.encryptSymKey(asymEncKeys.public, symKey)
        }
    }

    @Test
    fun `decrypt symmetric key works`() {
        val encryptedSymKey = cryptoPKEObject.encryptSymKey(
            encryptingKey = asymEncKeys.public,
            symKey = symKey
        )
        val decryptedSymKey = cryptoPKEObject.decryptSymKey(
            encryptingKey = asymEncKeys.public,
            decryptingKey = asymEncKeys.private,
            encryptedSymKey = encryptedSymKey
        )
        assert(decryptedSymKey.secretKey.encoded.contentEquals(symKey.secretKey.encoded))
    }

    @Test
    fun `decrypt symmetric key with wrong key throws CryptographicOperationException`() {
        val otherAsymEncKeys = cryptoPKEObject.generateAsymEncKeys(keyID = "key19")
        val encryptedSymKey = cryptoPKEObject.encryptSymKey(asymEncKeys.public, symKey)
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.decryptSymKey(
                encryptingKey = otherAsymEncKeys.public,
                decryptingKey = otherAsymEncKeys.private,
                encryptedSymKey = encryptedSymKey
            )
        }
    }

    @Test
    fun `decrypt random bytes as symmetric key throws CryptographicOperationException`() {
        val otherAsymEncKeys = cryptoPKEObject.generateAsymEncKeys(keyID = "key20")
        val encryptedSymKey = cryptoPKEObject.encryptSymKey(asymEncKeys.public, symKey)
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.decryptSymKey(
                encryptingKey = otherAsymEncKeys.public,
                decryptingKey = otherAsymEncKeys.private,
                encryptedSymKey = encryptedSymKey
            )
        }
    }

    @Test
    fun `check of a pair of asymmetric encryption keys works`() {
        assertDoesNotThrow {
            cryptoPKEObject.checkAsymEncKeys(asymEncKeys)
        }
    }

    @Test
    open fun `check of asymmetric encryption keys of different pairs throws InvalidKeyException`() {
        val otherKeys = cryptoPKEObject.generateAsymEncKeys(keyID = "key21")
        val wrongKeyPair = KeyPairCryptoAC(
            public = asymEncKeys.public,
            private = otherKeys.private,
            keyType = AsymKeysType.ENC
        )
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.checkAsymEncKeys(wrongKeyPair)
        }
    }

    @Test
    fun `check of a pair of asymmetric signing keys works`() {
        assertDoesNotThrow {
            cryptoPKEObject.checkAsymSigKeys(asymSigKeys)
        }
    }

    @Test
    open fun `check of asymmetric signing keys of different pairs throws InvalidKeyException`() {
        val otherKeys = cryptoPKEObject.generateAsymSigKeys(keyID = "key22")
        val wrongKeyPair = KeyPairCryptoAC(
            public = asymSigKeys.public,
            private = otherKeys.private,
            keyType = AsymKeysType.SIG
        )
        assertThrows<InvalidKeyException> {
            cryptoPKEObject.checkAsymSigKeys(wrongKeyPair)
        }
    }

    @Test
    fun `asymmetric encryption works`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        assertDoesNotThrow {
            cryptoPKEObject.asymEncrypt(asymEncKeys.public, bytesToEncrypt)
        }
    }

    @Test
    fun `asymmetric encryption of empty byte array throws IllegalArgumentException`() {
        assertThrows<IllegalArgumentException> {
            cryptoPKEObject.asymEncrypt(asymEncKeys.public, ByteArray(0))
        }
    }

    @Test
    fun `asymmetric decryption works`() {
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val encryptedBytes = cryptoPKEObject.asymEncrypt(asymEncKeys.public, bytesToEncrypt)
        val decryptedBytes = cryptoPKEObject.asymDecrypt(asymEncKeys.public, asymEncKeys.private, encryptedBytes)
        assert(bytesToEncrypt.contentEquals(decryptedBytes))
    }

    @Test
    fun `asymmetric decryption of empty byte array throws IllegalArgumentException`() {
        assertThrows<IllegalArgumentException> {
            cryptoPKEObject.asymDecrypt(asymEncKeys.public, asymEncKeys.private, ByteArray(0))
        }
    }

    @Test
    fun `asymmetric decryption with wrong key throws CryptographicOperationException`() {
        val otherAsymEncKeyPair = cryptoPKEObject.generateAsymEncKeys()
        val bytesToEncrypt = Random.nextBytes(bytesEncLength)
        val encryptedBytes = cryptoPKEObject.asymEncrypt(asymEncKeys.public, bytesToEncrypt)
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.asymDecrypt(asymEncKeys.public, otherAsymEncKeyPair.private, encryptedBytes)
        }
    }

    @Test
    fun `asymmetric decryption of random bytes throws CryptographicOperationException`() {
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.asymDecrypt(asymEncKeys.public, asymEncKeys.private, Random.nextBytes(bytesEncLength))
        }
    }
}
