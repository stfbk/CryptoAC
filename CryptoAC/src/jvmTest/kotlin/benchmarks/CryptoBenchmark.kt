package benchmarks
//
// import eu.fbk.st.cryptoac.crypto.*
// import eu.fbk.st.cryptoac.crypto.Crypto
// import org.openjdk.jmh.annotations.*
// import java.io.ByteArrayInputStream
// import java.util.concurrent.*
// import kotlin.random.Random
//
// @State(Scope.Benchmark)
// @Fork(1)
// @BenchmarkMode(Mode.SingleShotTime)
// @OutputTimeUnit(TimeUnit.MILLISECONDS)
// @Warmup(iterations = 10, time = 1, timeUnit = TimeUnit.SECONDS)
// @Measurement(iterations = 10, time = 1, timeUnit = TimeUnit.SECONDS)
// open class CryptoBenchmark {
//    private val crypto: Crypto = CryptoFactory.getCrypto(CryptoType.SODIUM)
//    private val asymEncKeys = cryptoPKE.generateAsymEncKeys()
//    private val asymSigKeys = cryptoPKE.generateAsymSigKeys()
//    private val symKey = cryptoSKE.generateSymKey()
//    private val byteToDigest = Random.nextBytes(1024)
//    private val bytesToSign = Random.nextBytes(1024)
//    private val bytesToEncrypt = Random.nextBytes(1024)
//    private val signature = cryptoPKE.createSignature(bytesToSign, asymSigKeys.private)
//    private val encryptedAsymEncKeys = cryptoPKE.encryptAsymKeys(asymEncKeys.public, asymEncKeys, AsymKeysType.ENC)
//    private val encryptedAsymSigKeys = cryptoPKE.encryptAsymKeys(asymEncKeys.public, asymSigKeys, AsymKeysType.SIG)
//    private val encryptedSymKey = cryptoPKE.encryptSymKey(asymEncKeys.public, symKey)
//    private val encryptedBytes = cryptoSKE.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
//    private val asymEncKeysPublicEncoded = asymEncKeys.public.encoded
//    private val asymEncKeysPrivateEncoded = asymEncKeys.private.encoded
//    private val asymSigKeysPublicEncoded = asymSigKeys.public.encoded
//    private val asymSigKeysPrivateEncoded = asymSigKeys.private.encoded
//
//    @Setup
//    fun setUp() {
//    }
//
//    @Benchmark
//    fun generateAsymEncKeys() {
//        cryptoPKE.generateAsymEncKeys()
//    }
//
//    @Benchmark
//    fun generateAsymSigKeys() {
//        cryptoPKE.generateAsymSigKeys()
//    }
//
//    @Benchmark
//    fun generateSymKeys() {
//        cryptoSKE.generateSymKey()
//    }
//
//    @Benchmark
//    fun generateDigest() {
//        crypto.generateDigest(byteToDigest)
//    }
//
//    @Benchmark
//    fun createSignature() {
//        cryptoPKE.createSignature(bytesToSign, asymSigKeys.private)
//    }
//
//    @Benchmark
//    fun verifySignature() {
//        cryptoPKE.verifySignature(signature, bytesToSign, asymSigKeys.public)
//    }
//
//    @Benchmark
//    fun encryptAsymEncKeys() {
//        cryptoPKE.encryptAsymKeys(asymEncKeys.public, asymEncKeys, AsymKeysType.ENC)
//    }
//
//    @Benchmark
//    fun encryptAsymSigKeys() {
//        cryptoPKE.encryptAsymKeys(asymEncKeys.public, asymSigKeys, AsymKeysType.SIG)
//    }
//
//    @Benchmark
//    fun decryptAsymEncKeys() {
//        cryptoPKE.decryptAsymEncKeys(asymEncKeys.public, asymEncKeys.private, encryptedAsymEncKeys)
//    }
//
//    @Benchmark
//    fun decryptAsymSigKeys() {
//        cryptoPKE.decryptAsymSigKeys(asymEncKeys.public, asymEncKeys.private, encryptedAsymSigKeys)
//    }
//
//    @Benchmark
//    fun encryptSymKey() {
//        cryptoPKE.encryptSymKey(asymEncKeys.public, symKey)
//    }
//
//    @Benchmark
//    fun decryptSymKey() {
//        cryptoPKE.decryptSymKey(asymEncKeys.public, asymEncKeys.private, encryptedSymKey)
//    }
//
//    @Benchmark
//    fun encryptStream() {
//        cryptoSKE.encryptStream(symKey, ByteArrayInputStream(bytesToEncrypt)).readAllBytes()
//    }
//
//    @Benchmark
//    fun decryptStream() {
//        cryptoSKE.decryptStream(symKey, encryptedBytes.inputStream()).readAllBytes()
//    }
//
//    @Benchmark
//    fun recreateAsymEncKeyPair() {
//        cryptoPKE.recreateAsymKeyPair(
//            asymEncKeysPublicEncoded, asymEncKeysPrivateEncoded, AsymKeysType.ENC
//        )
//    }
//
//    @Benchmark
//    fun recreateAsymSigKeyPair() {
//        cryptoPKE.recreateAsymKeyPair(
//            asymSigKeysPublicEncoded, asymSigKeysPrivateEncoded, AsymKeysType.SIG
//        )
//    }
//
//    @Benchmark
//    fun recreateAsymEncPublicKey() {
//        cryptoPKE.recreateAsymPublicKey(
//            asymEncKeysPublicEncoded, AsymKeysType.ENC
//        )
//    }
//
//    @Benchmark
//    fun recreateAsymSigPublicKey() {
//        cryptoPKE.recreateAsymPublicKey(
//            asymSigKeysPublicEncoded, AsymKeysType.SIG
//        )
//    }
//
//    @Benchmark
//    fun recreateAsymEncPrivateKey() {
//        crypto.recreateAsymPrivateKey(
//            asymEncKeysPrivateEncoded, AsymKeysType.ENC
//        )
//    }
//
//    @Benchmark
//    fun recreateAsymSigPrivateKey() {
//        crypto.recreateAsymPrivateKey(
//            asymSigKeysPrivateEncoded, AsymKeysType.SIG
//        )
//    }
// }
