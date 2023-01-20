package benchmarks

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.core.CoreRBAC
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.encodeBase64
import kotlinx.benchmark.Setup
import kotlinx.benchmark.TearDown
import org.openjdk.jmh.annotations.*
import java.io.InputStream
import java.util.*
import java.util.concurrent.TimeUnit
import kotlin.collections.HashSet

@State(Scope.Benchmark)
@Threads(1)
@Fork(1)
@BenchmarkMode(Mode.SingleShotTime)
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@Warmup(iterations = 5, time = 1, timeUnit = TimeUnit.SECONDS)
@Measurement(iterations = 20, time = 1, timeUnit = TimeUnit.SECONDS)
abstract class CoreRBACBenchmark {

    abstract val core: CoreRBAC

    @Setup(Level.Trial)
    abstract fun setUpTrial()

    @TearDown(Level.Trial)
    abstract fun tearDownTrial()

    @Setup(Level.Iteration)
    abstract fun setUpIteration()

    @TearDown(Level.Iteration)
    abstract fun tearDownIteration()

    companion object {
        private fun generateRandomStrings(size: Int, number: Int): HashSet<String> {
            val names = HashSet<String>()
            val bytes = ByteArray(size)
            while (names.size < number) {
                Random().nextBytes(bytes)
                names.add(bytes.encodeBase64())
            }
            return names
        }

        private fun generateRandomStreams(sizeInBytes: Int, number: Int): HashSet<InputStream> {
            val streams = HashSet<InputStream>()
            val bytes = ByteArray(sizeInBytes)
            while (streams.size < number) {
                Random().nextBytes(bytes)
                streams.add(bytes.inputStream())
            }
            return streams
        }
    }

    @State(Scope.Thread)
    open class RandomNamesState {
        private var names = generateRandomStrings(size = 10, number = 5 + 20)
        private var iterator = names.iterator()
        fun getNextName(): String = iterator.next()
    }

    @State(Scope.Thread)
    open class RandomStreamState {
        private var streams = generateRandomStreams(sizeInBytes = 1024, number = 5 + 20)
        private var iterator = streams.iterator()
        fun getNextStream(): InputStream = iterator.next()
    }

    @Benchmark
    fun addUser(usernames: RandomNamesState) {
        assert(core.addUser(usernames.getNextName()).code == OutcomeCode.CODE_000_SUCCESS)
    }

    @Benchmark
    fun addRole(roleNames: RandomNamesState) {
        assert(core.addRole(roleNames.getNextName()) == OutcomeCode.CODE_000_SUCCESS)
    }

    @Benchmark
    fun addFile(fileNames: RandomNamesState, fileStreams: RandomStreamState) {
        assert(
            core.addResource(
                fileNames.getNextName(),
                fileStreams.getNextStream(),
                EnforcementType.COMBINED
            ) == OutcomeCode.CODE_000_SUCCESS
        )
    }

    // TODO complete benchmarks

//
//    @Benchmark
//    fun deleteUser(username: String) {
//
//    }
//

//    @Benchmark
//    fun deleteRole(roleName: String) {
//
//    }
//
//    @Benchmark
//    fun deleteFile(fileName: String) {
//
//    }
//
//    @Benchmark
//    fun assignUserToRole(
//        username: String,
//        roleName: String
//    ) {
//
//    }
//
//    @Benchmark
//    fun revokeUserFromRole(
//        username: String,
//        roleName: String
//    ) {
//
//    }
//
//    @Benchmark
//    fun assignPermissionToRole(
//        roleName: String,
//        fileName: String,
//        permission: PermissionType
//    ) {
//
//    }
//
//    @Benchmark
//    fun revokePermissionFromRole(
//        roleName: String,
//        fileName: String,
//        permission: PermissionType
//    ) {
//
//    }
//
//    @Benchmark
//    fun readFile(fileName: String) {
//
//    }
//
//    @Benchmark
//    fun writeFile(fileName: String, fileContent: InputStream) {
//
//    }
//
//
//
//    @Benchmark
//    fun getUsers() {
//
//    }
//
//    @Benchmark
//    fun getRoles() {
//
//    }
//
//    @Benchmark
//    fun getFiles() {
//
//    }
//
//    @Benchmark
//    fun getAssignments(
//        username: String? = null,
//        roleName: String? = null
//    ) {
//
//    }
//
//    @Benchmark
//    fun getPermissions(
//        username: String? = null,
//        roleName: String? = null,
//        fileName: String? = null
//    ) {
//
//    }
//
//
}
