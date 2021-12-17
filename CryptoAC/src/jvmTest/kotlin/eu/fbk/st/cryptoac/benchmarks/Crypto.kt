package eu.fbk.st.cryptoac.benchmarks

import eu.fbk.st.cryptoac.crypto.*
import eu.fbk.st.cryptoac.crypto.Crypto
import org.openjdk.jmh.annotations.*
import java.io.ByteArrayInputStream
import java.util.concurrent.*
import kotlin.random.Random

@State(Scope.Benchmark)
@Fork(1)
@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@Warmup(iterations = 10, time = 1, timeUnit = TimeUnit.SECONDS)
@Measurement(iterations = 10, time = 1, timeUnit = TimeUnit.SECONDS)
open class Crypto {
    private val crypto: Crypto = CryptoFactory.getCrypto(CryptoType.SODIUM)
    private val asymEncKeys = crypto.generateAsymEncKeys()
    private val asymSigKeys = crypto.generateAsymSigKeys()
    private val symKey = crypto.generateSymKey()
    private val byteToDigest = Random.nextBytes(1024)
    private val bytesToSign = Random.nextBytes(1024)
    private val bytesToEncrypt = Random.nextBytes(1024)
    private val signature = crypto.createSignature(bytesToSign, asymSigKeys.private)
    private val encryptedAsymEncKeys = crypto.encryptAsymKeys(asymEncKeys.public, asymEncKeys, AsymKeysType.ENC)
    private val encryptedAsymSigKeys = crypto.encryptAsymKeys(asymEncKeys.public, asymSigKeys, AsymKeysType.SIG)
    private val encryptedSymKey = crypto.encryptSymKey(asymEncKeys.public, symKey)
    private val encryptedBytes = crypto.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
    private val asymEncKeysPublicEncoded = asymEncKeys.public.encoded
    private val asymEncKeysPrivateEncoded = asymEncKeys.private.encoded
    private val asymSigKeysPublicEncoded = asymSigKeys.public.encoded
    private val asymSigKeysPrivateEncoded = asymSigKeys.private.encoded
    
    @Setup
    fun setUp() {
    }

    @Benchmark
    fun generateAsymEncKeys() {
        crypto.generateAsymEncKeys()
    }

    @Benchmark
    fun generateAsymSigKeys() {
        crypto.generateAsymSigKeys()
    }

    @Benchmark
    fun generateSymKeys() {
        crypto.generateSymKey()
    }

    @Benchmark
    fun generateDigest() {
        crypto.generateDigest(byteToDigest)
    }

    @Benchmark
    fun createSignature() {
        crypto.createSignature(bytesToSign, asymSigKeys.private)
    }

    @Benchmark
    fun verifySignature() {
        crypto.verifySignature(signature, bytesToSign, asymSigKeys.public)
    }

    @Benchmark
    fun encryptAsymEncKeys() {
        crypto.encryptAsymKeys(asymEncKeys.public, asymEncKeys, AsymKeysType.ENC)
    }

    @Benchmark
    fun encryptAsymSigKeys() {
        crypto.encryptAsymKeys(asymEncKeys.public, asymSigKeys, AsymKeysType.SIG)
    }

    @Benchmark
    fun decryptAsymEncKeys() {
        crypto.decryptAsymEncKeys(asymEncKeys.public, asymEncKeys.private, encryptedAsymEncKeys)
    }

    @Benchmark
    fun decryptAsymSigKeys() {
        crypto.decryptAsymSigKeys(asymEncKeys.public, asymEncKeys.private, encryptedAsymSigKeys)
    }

    @Benchmark
    fun encryptSymKey() {
        crypto.encryptSymKey(asymEncKeys.public, symKey)
    }

    @Benchmark
    fun decryptSymKey() {
        crypto.decryptSymKey(asymEncKeys.public, asymEncKeys.private, encryptedSymKey)
    }

    @Benchmark
    fun encryptStream() {
        crypto.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
    }

    @Benchmark
    fun decryptStream() {
        crypto.decryptStream(symKey, encryptedBytes.inputStream()).readAllBytes()
    }

    @Benchmark
    fun recreateAsymEncKeyPair() {
        crypto.recreateAsymKeyPair(
            asymEncKeysPublicEncoded, asymEncKeysPrivateEncoded, AsymKeysType.ENC
        )
    }

    @Benchmark
    fun recreateAsymSigKeyPair() {
        crypto.recreateAsymKeyPair(
            asymSigKeysPublicEncoded, asymSigKeysPrivateEncoded, AsymKeysType.SIG
        )
    }

    @Benchmark
    fun recreateAsymEncPublicKey() {
        crypto.recreateAsymPublicKey(
            asymEncKeysPublicEncoded, AsymKeysType.ENC
        )
    }

    @Benchmark
    fun recreateAsymSigPublicKey() {
        crypto.recreateAsymPublicKey(
            asymSigKeysPublicEncoded, AsymKeysType.SIG
        )
    }

    @Benchmark
    fun recreateAsymEncPrivateKey() {
        crypto.recreateAsymPrivateKey(
            asymEncKeysPrivateEncoded, AsymKeysType.ENC
        )
    }

    @Benchmark
    fun recreateAsymSigPrivateKey() {
        crypto.recreateAsymPrivateKey(
            asymSigKeysPrivateEncoded, AsymKeysType.SIG
        )
    }
}