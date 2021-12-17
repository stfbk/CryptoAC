package eu.fbk.st.cryptoac.benchmarks

//import eu.fbk.st.cryptoac.TestUtilities
//import mu.KotlinLogging
//import org.openjdk.jmh.annotations.*
//import java.util.*
//import java.util.concurrent.*
//import kotlin.collections.HashSet
//
//private val logger = KotlinLogging.logger {}
//
//@State(Scope.Benchmark)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 5, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 50,  time = 1, timeUnit = TimeUnit.SECONDS)
//open class Core {
//
//    val names = utility_generateRandomNames(100)
//    var currentName = 0
//
//    @Setup
//    fun setUp() {
//        logger.warn { "Make sure you started the other services before running the benchmarks" }
//        TestUtilities.initAdminFromProxy()
//    }
//
//    @Benchmark
//    fun addUserFromProxy() {
//        TestUtilities.addAndInitUser(names.elementAt(currentName))
//        currentName += 1
//    }
//
//    private fun utility_generateRandomNames(number: Int): HashSet<String> {
//        val names = HashSet<String>()
//        val bytes = ByteArray(8)
//        while (names.size < number) {
//            Random().nextBytes(bytes)
//            names.add(Base64.getEncoder().encodeToString(bytes))
//        }
//        return names
//    }
//}