package eu.fbk.st.cryptoac.benchmarks

import eu.fbk.st.cryptoac.crypto.*
import java.util.*

internal class CryptoMetricsTest {
/**
    private val cryptoParametersJava: CryptoParameters = CryptoParameters(
        asymEncKeysLength = 2048, asymEncKeysGenAlgorithm = "RSA", asymEncAlgorithm = "RSA",
        asymSigKeysLength = 2048, asymSigKeysGenAlgorithm = "RSA", asymSigAlgorithm = "SHA512withRSA",
        symKeyLength = 256, symAlgorithm = "AES",
        hashAlgorithm = "SHA-512",
    )
    // TODO modify "cryptoObject" creation for testing other implementations, or setup parametrized tests
    private val cryptoParameters = cryptoParametersJava
    private val cryptoObject = CryptoFactory.getCrypto(CryptoType.JAVA, cryptoParameters)

    private val repetitions = 1000


    @Test
    fun `experiment - generate asymmetric key`() {
        var totalTime = 0L
        val keysList = ArrayList<KeyPair>()

        /** metrics - generate asymmetric key [repetitions] times */
        for (i in 0 until repetitions) {
            totalTime += measureNanoTime {
                keysList.add(cryptoObject.generateAsymEncKeys())
            }
        }
        assert(keysList.size == repetitions)
        println("total time asymmetric key generation is $totalTime, divided by $repetitions is ${totalTime/repetitions} nanoseconds (${(totalTime/repetitions)/1000000} milliseconds)")
    }

    @Test
    fun `experiment - encrypt and decrypt with asymmetric key`() {
        var totalTimeEncrypt = 0L
        var totalTimeDecrypt = 0L
        val keysList = ArrayList<KeyPair>()

        val keys = cryptoObject.generateAsymEncKeys()
        val keysToEncrypt = cryptoObject.generateAsymEncKeys()

        /** metrics - encrypt and decrypt with asymmetric key [repetitions] times */
        for (i in 0 until repetitions) {
            println(i)
            val currentEncryptedKeys: EncryptedAsymKeys
            totalTimeEncrypt += measureNanoTime {
                currentEncryptedKeys = cryptoObject.encryptAsymKeys(keys.public, keysToEncrypt, AsymKeysType.ENC)
            }
            totalTimeDecrypt += measureNanoTime {
                keysList.add(cryptoObject.decryptAsymEncKeys(keys.private, currentEncryptedKeys))
            }
        }
        assert(keysList.size == repetitions)
        println("total time asymmetric encryption is $totalTimeEncrypt, divided by $repetitions is ${totalTimeEncrypt/repetitions} nanoseconds (${(totalTimeEncrypt/repetitions)/1000000} milliseconds)")
        println("total time asymmetric decryption is $totalTimeDecrypt, divided by $repetitions is ${totalTimeDecrypt/repetitions} nanoseconds (${(totalTimeDecrypt/repetitions)/1000000} milliseconds)")
    }

    @Test
    fun `experiment - generate symmetric key`() {
        var totalTime = 0L
        val keysList = ArrayList<SecretKey>()

        /** metrics - generate symmetric key [repetitions] times */
        for (i in 0 until repetitions) {
            totalTime += measureNanoTime {
                keysList.add(cryptoObject.generateSymKey())
            }
        }
        assert(keysList.size == repetitions)
        println("total time symmetric key generation is $totalTime, divided by $repetitions is ${totalTime/repetitions} nanoseconds (${(totalTime/repetitions)/1000000} milliseconds)")
    }

    @Test
    fun `experiment - encrypt and decrypt with symmetric key`() {
        var totalTimeEncrypt = 0L
        var totalTimeDecrypt = 0L

        val key = cryptoObject.generateSymKey()
        val bytes = ByteArray(1024*1024)
        Random().nextBytes(bytes)

        /** metrics - encrypt with symmetric key [repetitions] times */
        for (i in 0 until repetitions) {
            val encryptedBytes: ByteArray
            val decryptedBytes: ByteArray
            totalTimeEncrypt += measureNanoTime {
                encryptedBytes = cryptoObject.encryptStream(key, bytes.inputStream()).readAllBytes()
            }
            totalTimeDecrypt += measureNanoTime {
                decryptedBytes = cryptoObject.decryptStream(key, encryptedBytes.inputStream()).readAllBytes()
            }
            assert(bytes.contentEquals(decryptedBytes))
        }
        println("total time symmetric encryption is $totalTimeEncrypt, divided by $repetitions is ${totalTimeEncrypt/repetitions} nanoseconds (${(totalTimeEncrypt/repetitions)/1000000} milliseconds)")
        println("total time symmetric decryption is $totalTimeDecrypt, divided by $repetitions is ${totalTimeDecrypt/repetitions} nanoseconds (${(totalTimeDecrypt/repetitions)/1000000} milliseconds)")
    }

    @Test
    fun `experiment - generate and verify signatures with asymmetric key`() {
        var totalTimeGenerate = 0L
        var totalTimeVerify = 0L

        val keys = cryptoObject.generateAsymSigKeys()
        val bytes = ByteArray(16743)
        Random().nextBytes(bytes)

        /** metrics - generate and verify signatures with asymmetric key [repetitions] times */
        for (i in 0 until repetitions) {
            val signature: ByteArray
            totalTimeGenerate += measureNanoTime {
                signature = cryptoObject.createSignature(bytes, keys.private)
            }
            totalTimeVerify += measureNanoTime {
                cryptoObject.verifySignature(signature, bytes, keys.public)
            }
        }
        println("total time signature generation is $totalTimeGenerate, divided by $repetitions is ${totalTimeGenerate/repetitions} nanoseconds (${(totalTimeGenerate/repetitions)/1000000} milliseconds)")
        println("total time signature verification is $totalTimeVerify, divided by $repetitions is ${totalTimeVerify/repetitions} nanoseconds (${(totalTimeVerify/repetitions)/1000000} milliseconds)")
    }
*/
}

