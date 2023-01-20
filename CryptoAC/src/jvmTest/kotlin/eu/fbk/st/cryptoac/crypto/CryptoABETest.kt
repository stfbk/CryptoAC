package eu.fbk.st.cryptoac.crypto

import eu.fbk.st.cryptoac.crypto.openabe.KeyPairOpenABE
import eu.fbk.st.cryptoac.crypto.openabe.PrivateKeyOpenABE
import eu.fbk.st.cryptoac.encodeBase64
import it.stefanoberlato.oabe.OpenABECryptoContextDecrypt
import org.junit.jupiter.api.*
import kotlin.random.Random
import kotlin.test.assertEquals
import kotlin.test.assertTrue

internal abstract class CryptoABETest : CryptoTest() {

    abstract val cryptoABEObject: CryptoABE
    abstract val cryptoPKEObject: CryptoPKE

    @Test
    fun `encrypt and decrypt ABE with authorized key works`() {
        val privateABEKey = cryptoABEObject.generateABEPrivateKey(
            keyID = "key0",
            attributes = "|attr1|attr2",
        )
        cryptoABEObject.importABEUserKey(privateABEKey)
        val plaintext = Random.nextBytes(bytesEncLength).encodeBase64()
        val ciphertext = cryptoABEObject.encryptABE(
            accessStructure = "attr1 and attr2",
            plaintext = plaintext,
        )
        val decrypted = cryptoABEObject.decryptABE(
            keyID = "key0",
            ciphertext = ciphertext,
        )
        assertEquals(plaintext, decrypted)
    }

    @Test
    fun `decrypt ABE with unauthorized key fails`() {
        val privateABEKey = cryptoABEObject.generateABEPrivateKey(
            keyID = "key1",
            attributes = "|attr1",
        )
        cryptoABEObject.importABEUserKey(privateABEKey)
        val plaintext = Random.nextBytes(bytesEncLength).encodeBase64()
        val ciphertext = cryptoABEObject.encryptABE(
            accessStructure = "attr1 and attr2",
            plaintext = plaintext,
        )

        var thrown = false
        try {
            cryptoABEObject.decryptABE(
                keyID = "key1",
                ciphertext = ciphertext,
            )
        } catch (e: OpenABECryptoContextDecrypt) {
            thrown = true
        }
        assertTrue(thrown)
    }

    @Test
    fun `encrypt and decrypt ABE with non existing key fails`() {
        val privateABEKey = cryptoABEObject.generateABEPrivateKey(
            keyID = "key2",
            attributes = "|attr1|attr2",
        )
        cryptoABEObject.importABEUserKey(privateABEKey)
        val plaintext = Random.nextBytes(bytesEncLength).encodeBase64()
        val ciphertext = cryptoABEObject.encryptABE(
            accessStructure = "attr1 and attr2",
            plaintext = plaintext,
        )

        var thrown = false
        try {
            cryptoABEObject.decryptABE(
                keyID = "key3",
                ciphertext = ciphertext,
            )
        } catch (e: OpenABECryptoContextDecrypt) {
            thrown = true
        }
        assertTrue(thrown)
    }

    @Test
    fun `decrypt ABE tampered ciphertext with authorized key fails`() {
        val privateABEKey = cryptoABEObject.generateABEPrivateKey(
            keyID = "key4",
            attributes = "|attr1|attr2",
        )
        cryptoABEObject.importABEUserKey(privateABEKey)

        val plaintext = Random.nextBytes(bytesEncLength).encodeBase64()
        val ciphertext = cryptoABEObject.encryptABE(
            accessStructure = "attr1 and attr2",
            plaintext = plaintext,
        )
        val ciphertextByteArray = ciphertext.encodeToByteArray()

        var index1: Int
        var index2: Int
        do {
            index1 = Random.nextInt(0, ciphertextByteArray.size)
            index2 = Random.nextInt(0, ciphertextByteArray.size)
        } while (ciphertextByteArray[index1] == ciphertextByteArray[index2])
        ciphertextByteArray[index1] = ciphertextByteArray[index2].also {
            ciphertextByteArray[index2] = ciphertextByteArray[index1]
        }

        var thrown = false
        try {
            cryptoABEObject.decryptABE(
                keyID = "key4",
                ciphertext = ciphertextByteArray.decodeToString(),
            )
        } catch (e: OpenABECryptoContextDecrypt) {
            thrown = true
        }
        assertTrue(thrown)
    }

    @Test
    fun `generating ABE private key works`() {
        cryptoABEObject.generateABEPrivateKey(
            keyID = "key5",
            attributes = "|attr1|attr2",
        )
    }

    @Test
    fun `encrypt and decrypt ABE key with the same asymmetric key pair works`() {
        val asymKeys = cryptoPKEObject.generateAsymEncKeys(keyID = "key6") as KeyPairOpenABE
        val abeKey = cryptoABEObject.generateABEPrivateKey(
            keyID = "key7",
            attributes = "|attr1|attr2",
        )
        val encryptedABEKey = cryptoPKEObject.asymEncrypt(
            encryptingKey = asymKeys.public,
            bytes = abeKey.encoded,
        )
        val decryptedABEKey = PrivateKeyOpenABE(
            private = cryptoPKEObject.asymDecrypt(
                encryptingKey = asymKeys.public,
                decryptingKey = asymKeys.private,
                encBytes = encryptedABEKey
            ).decodeToString(),
            keyID = null // TODO is this ID ok?
        )
        assertEquals(abeKey.private, decryptedABEKey.private)
    }

    @Test
    fun `decrypt ABE key with different asymmetric key pair fails`() {
        val asymKeys1 = cryptoPKEObject.generateAsymEncKeys(keyID = "key8") as KeyPairOpenABE
        val asymKeys2 = cryptoPKEObject.generateAsymEncKeys(keyID = "key8") as KeyPairOpenABE
        val abeKey = cryptoABEObject.generateABEPrivateKey(
            keyID = "key9",
            attributes = "|attr1|attr2",
        )
        val encryptedABEKey = cryptoPKEObject.asymEncrypt(
            encryptingKey = asymKeys1.public,
            bytes = abeKey.encoded,
        )
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.asymDecrypt(
                encryptingKey = asymKeys1.public,
                decryptingKey = asymKeys2.private,
                encBytes = encryptedABEKey
            )
        }
    }

    @Test
    fun `decrypt tampered ABE key with the same asymmetric key pair fails`() {
        val asymKeys = cryptoPKEObject.generateAsymEncKeys(keyID = "key8") as KeyPairOpenABE
        val abeKey = cryptoABEObject.generateABEPrivateKey(
            keyID = "key9",
            attributes = "|attr1|attr2",
        )
        val encryptedABEKey = cryptoPKEObject.asymEncrypt(
            encryptingKey = asymKeys.public,
            bytes = abeKey.encoded,
        )

        var index1: Int
        var index2: Int
        do {
            index1 = Random.nextInt(0, encryptedABEKey.size)
            index2 = Random.nextInt(0, encryptedABEKey.size)
        } while (encryptedABEKey[index1] == encryptedABEKey[index2])
        encryptedABEKey[index1] = encryptedABEKey[index2].also {
            encryptedABEKey[index2] = encryptedABEKey[index1]
        }
        assertThrows<CryptographicOperationException> {
            cryptoPKEObject.asymDecrypt(
                encryptingKey = asymKeys.public,
                decryptingKey = asymKeys.private,
                encBytes = encryptedABEKey
            )
        }
    }

    // TODO create tests for the following functions of the CryptoOpenABE class
    //  - exportABEPublicParams
    //  - importABEPublicParams
    //  - importABEUserKey
    //  - deleteABEUserKey
}
