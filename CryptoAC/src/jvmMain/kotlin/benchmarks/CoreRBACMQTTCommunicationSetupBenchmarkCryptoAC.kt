package benchmarks

import benchmarks.TestUtilities.Companion.assertSuccessOrThrow
import benchmarks.TestUtilities.Companion.assertTrueOrThrow
import benchmarks.TestUtilities.Companion.coreRBACMQTTNoACNoTLS
import eu.fbk.st.cryptoac.inputStream
import eu.fbk.st.cryptoac.model.unit.EnforcementType.COMBINED
import eu.fbk.st.cryptoac.model.unit.Resource
import org.openjdk.jmh.annotations.*
import java.util.*
import java.util.concurrent.TimeUnit

@State(Scope.Benchmark)
@Threads(1)
@Fork(1)
@BenchmarkMode(Mode.SingleShotTime)
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
open class CoreRBACMQTTCommunicationSetupBenchmarkCryptoAC {

    private val resourceName = "resourceTestUnderTest"
    private var resource: Resource? = null
    private var iteration = 0

    @Setup(Level.Trial)
    fun setUpTrial() {
        println("setUpTrial")
        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
        coreRBACMQTTNoACNoTLS.initCore()
        assertSuccessOrThrow(
            coreRBACMQTTNoACNoTLS.addResource(
                resourceName,
                "none".inputStream(),
                COMBINED
            )
        )
        val resourceCode = coreRBACMQTTNoACNoTLS.getResources()
        assertSuccessOrThrow(resourceCode.code)
        resource = resourceCode.resources!!.first()
    }

    @TearDown(Level.Trial)
    fun tearDownTrial() {
        println("tearDownTrial")
        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
        TestUtilities.resetMMServiceRBACRedis()
    }

    @Setup(Level.Iteration)
    fun setUpIteration() {
        println("setUpIteration: started iteration number $iteration")
    }

    @TearDown(Level.Iteration)
    fun tearDownIteration() {
        println("tearDownTrial: concluded iteration number $iteration")
        coreRBACMQTTNoACNoTLS.deinitCore()
        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
        iteration++
    }

    @Benchmark
    fun connectToTheBroker() {
        assertTrueOrThrow(coreRBACMQTTNoACNoTLS.dm.client.connectSync())
        coreRBACMQTTNoACNoTLS.mm.lock()
        coreRBACMQTTNoACNoTLS.getSymmetricKey(
            resource = resource!!,
            encryptingKey =  true
        )
        coreRBACMQTTNoACNoTLS.mm.unlock()
    }
}
