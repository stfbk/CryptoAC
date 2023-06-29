//package benchmarks
//
//import benchmarks.TestUtilities.Companion.RandomNamesState
//import benchmarks.TestUtilities.Companion.addAndInitUser
//import benchmarks.TestUtilities.Companion.assertSuccessOrThrow
//import benchmarks.TestUtilities.Companion.coreRBACMQTTNoACNoTLS
//import eu.fbk.st.cryptoac.generateRandomString
//import eu.fbk.st.cryptoac.inputStream
//import eu.fbk.st.cryptoac.model.tuple.PermissionType
//import eu.fbk.st.cryptoac.model.unit.EnforcementType.COMBINED
//import org.openjdk.jmh.annotations.*
//import java.util.*
//import java.util.concurrent.TimeUnit
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkInitAdmin {
//
//    @TearDown(Level.Iteration)
//    fun tearDownTrial() {
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun initAdmin() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkAddUser {
//
//    private var usernames = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun addUser() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addUser(usernames.getNextName()).code)
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkAddRole {
//
//    private var roleNames  = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun addRole() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(roleNames.getNextName()))
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkAddResource {
//
//    private var resourceNames = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun addResource() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addResource(
//            resourceNames.getNextName().replace("+", ""),
//            generateRandomString(1024).inputStream(),
//            COMBINED
//        ))
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkDeleteResource {
//
//    private var resourceNamesAlreadyPresent = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        for (i in 0 until (100 + 1000)) {
//            assertSuccessOrThrow(
//                coreRBACMQTTNoACNoTLS.addResource(
//                    resourceNamesAlreadyPresent.getNextName().replace("+", ""),
//                    "none".inputStream(),
//                    COMBINED
//                )
//            )
//        }
//        resourceNamesAlreadyPresent.reset()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun deleteResource() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.deleteResource(
//            resourceNamesAlreadyPresent.getNextName().replace("+", ""),
//        ))
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkAssignUserToRole {
//
//    var usernamesAlreadyPresent = RandomNamesState()
//    var roleNamesAlreadyPresent  = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        for (i in 0 until (100 + 1000)) {
//            assertSuccessOrThrow(addAndInitUser(coreRBACMQTTNoACNoTLS, usernamesAlreadyPresent.getNextName()))
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(roleNamesAlreadyPresent.getNextName()))
//        }
//        usernamesAlreadyPresent.reset()
//        roleNamesAlreadyPresent.reset()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun assignUserToRole() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignUserToRole(
//            usernamesAlreadyPresent.getNextName(),
//            roleNamesAlreadyPresent.getNextName(),
//        ))
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkAssignNewPermissionToRole {
//
//    private var roleNamesAlreadyPresent  = RandomNamesState()
//    private var resourceNamesAlreadyPresent = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        for (i in 0 until (100 + 1000)) {
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(roleNamesAlreadyPresent.getNextName()))
//            assertSuccessOrThrow(
//                coreRBACMQTTNoACNoTLS.addResource(
//                    resourceNamesAlreadyPresent.getNextName().replace("+", ""),
//                    "none".inputStream(),
//                    COMBINED
//                )
//            )
//        }
//        roleNamesAlreadyPresent.reset()
//        resourceNamesAlreadyPresent.reset()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun assignNewPermissionToRole() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//            roleNamesAlreadyPresent.getNextName(),
//            resourceNamesAlreadyPresent.getNextName().replace("+", ""),
//            PermissionType.READ
//        ))
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkAssignExistingPermissionToRole {
//
//    private var roleNamesAlreadyPresent  = RandomNamesState()
//    private var resourceNamesAlreadyPresent = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        for (i in 0 until (100 + 1000)) {
//            val currentRoleName = roleNamesAlreadyPresent.getNextName()
//            val currentResourceName = resourceNamesAlreadyPresent.getNextName().replace("+", "")
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(currentRoleName))
//            assertSuccessOrThrow(
//                coreRBACMQTTNoACNoTLS.addResource(
//                    currentResourceName.replace("+", ""),
//                    "none".inputStream(),
//                    COMBINED
//                )
//            )
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//                currentRoleName,
//                currentResourceName,
//                PermissionType.READ
//            ))
//        }
//        roleNamesAlreadyPresent.reset()
//        resourceNamesAlreadyPresent.reset()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun assignExistingPermissionToRole() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//            roleNamesAlreadyPresent.getNextName(),
//            resourceNamesAlreadyPresent.getNextName().replace("+", ""),
//            PermissionType.READWRITE
//        ))
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkRevokeUserFromRole {
//
//    private var usernamesAlreadyPresent = RandomNamesState()
//    private var roleNamesAlreadyPresent  = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        for (i in 0 until (100 + 1000)) {
//            val currentUserName = usernamesAlreadyPresent.getNextName()
//            val currentRoleName = roleNamesAlreadyPresent.getNextName()
//            assertSuccessOrThrow(addAndInitUser(coreRBACMQTTNoACNoTLS, currentUserName))
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(currentRoleName))
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignUserToRole(
//                currentUserName,
//                currentRoleName,
//            ))
//        }
//        usernamesAlreadyPresent.reset()
//        roleNamesAlreadyPresent.reset()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun revokeUserFromRole() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.revokeUserFromRole(
//            usernamesAlreadyPresent.getNextName(),
//            roleNamesAlreadyPresent.getNextName(),
//        ))
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkRevokeOnePermissionFromRole {
//
//    private var roleNamesAlreadyPresent  = RandomNamesState()
//    private var resourceNamesAlreadyPresent = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        for (i in 0 until (100 + 1000)) {
//            val currentRoleName = roleNamesAlreadyPresent.getNextName()
//            val currentResourceName = resourceNamesAlreadyPresent.getNextName().replace("+", "")
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(currentRoleName))
//            assertSuccessOrThrow(
//                coreRBACMQTTNoACNoTLS.addResource(
//                    currentResourceName.replace("+", ""),
//                    "none".inputStream(),
//                    COMBINED
//                )
//            )
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//                currentRoleName,
//                currentResourceName,
//                PermissionType.READWRITE
//            ))
//        }
//        roleNamesAlreadyPresent.reset()
//        resourceNamesAlreadyPresent.reset()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun revokeOnePermissionFromRole() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.revokePermissionFromRole(
//            roleNamesAlreadyPresent.getNextName(),
//            resourceNamesAlreadyPresent.getNextName().replace("+", ""),
//            PermissionType.WRITE
//        ))
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 100, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 1000, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkRevokeAllPermissionsFromRole {
//
//    private var roleNamesAlreadyPresent  = RandomNamesState()
//    private var resourceNamesAlreadyPresent = RandomNamesState()
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        for (i in 0 until (100 + 1000)) {
//            val currentRoleName = roleNamesAlreadyPresent.getNextName()
//            val currentResourceName = resourceNamesAlreadyPresent.getNextName().replace("+", "")
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(currentRoleName))
//            assertSuccessOrThrow(
//                coreRBACMQTTNoACNoTLS.addResource(
//                    currentResourceName.replace("+", ""),
//                    "none".inputStream(),
//                    COMBINED
//                )
//            )
//            assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//                currentRoleName,
//                currentResourceName,
//                PermissionType.READWRITE
//            ))
//        }
//        roleNamesAlreadyPresent.reset()
//        resourceNamesAlreadyPresent.reset()
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Benchmark
//    fun revokeAllPermissionsFromRole() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.revokePermissionFromRole(
//            roleNamesAlreadyPresent.getNextName(),
//            resourceNamesAlreadyPresent.getNextName().replace("+", ""),
//            PermissionType.READWRITE
//        ))
//    }
//}
//
//
//
//// ===== ===== ===== BELOW, BENCHMARK FOR REVOKEP ACTION ===== ===== =====
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 0, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 101, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkRevokeAllPermissionsFromRoleIterateThroughParameters {
//
//    private var roleNamesAlreadyPresent  = RandomNamesState()
//    private var roleName = "roleNameUnderTest"
//    private var resourceName = "resourceNameUnderTest"
//
//    private var step = 5
//    private var iteration = 0
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        println("setUpTrial")
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(roleName))
//        assertSuccessOrThrow(
//            coreRBACMQTTNoACNoTLS.addResource(
//                resourceName,
//                "none".inputStream(),
//                COMBINED
//            )
//        )
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//            roleName,
//            resourceName,
//            PermissionType.READWRITE
//        ))
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        println("tearDownTrial")
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Setup(Level.Iteration)
//    fun setUpIteration() {
//        println("setUpIteration: started iteration number $iteration")
//        if (iteration != 0) {
//            for (i in 0 until step) {
//                val currentRoleName = roleNamesAlreadyPresent.getNextName()
//                assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(currentRoleName))
//                assertSuccessOrThrow(
//                    coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//                        currentRoleName,
//                        resourceName,
//                        PermissionType.READWRITE
//                    )
//                )
//            }
//        }
//    }
//
//    @TearDown(Level.Iteration)
//    fun tearDownIteration() {
//        println("tearDownTrial: concluded iteration number $iteration")
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//            roleName,
//            resourceName,
//            PermissionType.READWRITE
//        ))
//        iteration++
//    }
//
//    @Benchmark
//    fun revokeAllPermissionsFromRole() {
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.revokePermissionFromRole(
//            roleName,
//            resourceName,
//            PermissionType.READWRITE
//        ))
//    }
//}
//
//
//
//// ===== ===== ===== BELOW, BENCHMARK FOR REVOKEU ACTION ===== ===== =====
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 0, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 101, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkRevokeUserFromRoleIterateThroughParameter1 {
//
//    private var usernamesAlreadyPresent  = RandomNamesState()
//    private var username = "usernameUnderTest"
//    private var roleName = "roleNameUnderTest"
//
//    private var step = 5
//    private var iteration = 0
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        println("setUpTrial")
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        assertSuccessOrThrow(addAndInitUser(coreRBACMQTTNoACNoTLS, username))
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(roleName))
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignUserToRole(
//            username,
//            roleName,
//        ))
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        println("tearDownTrial")
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Setup(Level.Iteration)
//    fun setUpIteration() {
//        println("setUpIteration: started iteration number $iteration")
//        if (iteration != 0) {
//            for (i in 0 until step) {
//                val currentUsername = usernamesAlreadyPresent.getNextName()
//                assertSuccessOrThrow(addAndInitUser(coreRBACMQTTNoACNoTLS, currentUsername))
//                assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignUserToRole(
//                    currentUsername,
//                    roleName,
//                ))
//            }
//        }
//    }
//
//    @TearDown(Level.Iteration)
//    fun tearDownIteration() {
//        println("tearDownTrial: concluded iteration number $iteration")
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignUserToRole(
//            username,
//            roleName,
//        ))
//        iteration++
//    }
//
//    @Benchmark
//    fun revokeUserFromRole() {
//        assertSuccessOrThrow(
//            coreRBACMQTTNoACNoTLS.revokeUserFromRole(
//                username,
//                roleName,
//            )
//        )
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 0, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 101, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkRevokeUserFromRoleIterateThroughParameter2 {
//
//    private var username = "usernameUnderTest"
//    private var roleName = "roleNameUnderTest"
//    private var resourceNamesAlreadyPresent  = RandomNamesState()
//
//    private var step = 5
//    private var iteration = 0
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        println("setUpTrial")
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        assertSuccessOrThrow(addAndInitUser(coreRBACMQTTNoACNoTLS, username))
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(roleName))
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignUserToRole(
//            username,
//            roleName,
//        ))
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        println("tearDownTrial")
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Setup(Level.Iteration)
//    fun setUpIteration() {
//        println("setUpIteration: started iteration number $iteration")
//        if (iteration != 0) {
//            for (i in 0 until step) {
//                val currentResourceName = resourceNamesAlreadyPresent.getNextName().replace("+", "")
//                assertSuccessOrThrow(
//                    coreRBACMQTTNoACNoTLS.addResource(
//                        currentResourceName,
//                        "none".inputStream(),
//                        COMBINED
//                    )
//                )
//                assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//                    roleName,
//                    currentResourceName,
//                    PermissionType.READWRITE
//                ))
//            }
//        }
//    }
//
//    @TearDown(Level.Iteration)
//    fun tearDownIteration() {
//        println("tearDownTrial: concluded iteration number $iteration")
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignUserToRole(
//            username,
//            roleName,
//        ))
//        iteration++
//    }
//
//    @Benchmark
//    fun revokeUserFromRole() {
//        assertSuccessOrThrow(
//            coreRBACMQTTNoACNoTLS.revokeUserFromRole(
//                username,
//                roleName,
//            )
//        )
//    }
//}
//
//
//
//@State(Scope.Benchmark)
//@Threads(1)
//@Fork(1)
//@BenchmarkMode(Mode.SingleShotTime)
//@OutputTimeUnit(TimeUnit.MILLISECONDS)
//@Warmup(iterations = 0, time = 1, timeUnit = TimeUnit.SECONDS)
//@Measurement(iterations = 101, time = 1, timeUnit = TimeUnit.SECONDS)
//open class CoreRBACMQTTBenchmarkRevokeUserFromRoleIterateThroughParameter3 {
//
//    private var username = "usernameUnderTest"
//    private var roleName = "roleNameUnderTest"
//    private var resourceName = "resourceNameUnderTest"
//    private var roleNamesAlreadyPresent  = RandomNamesState()
//
//    private var step = 5
//    private var iteration = 0
//
//    @Setup(Level.Trial)
//    fun setUpTrial() {
//        println("setUpTrial")
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.configureServices())
//        coreRBACMQTTNoACNoTLS.initCore()
//        assertSuccessOrThrow(addAndInitUser(coreRBACMQTTNoACNoTLS, username))
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(roleName))
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignUserToRole(
//            username,
//            roleName,
//        ))
//        assertSuccessOrThrow(
//            coreRBACMQTTNoACNoTLS.addResource(
//                resourceName,
//                "none".inputStream(),
//                COMBINED
//            )
//        )
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//            roleName,
//            resourceName,
//            PermissionType.READWRITE
//        ))
//    }
//
//    @TearDown(Level.Trial)
//    fun tearDownTrial() {
//        println("tearDownTrial")
//        coreRBACMQTTNoACNoTLS.subscribedTopicsKeysAndMessages.clear()
//        TestUtilities.resetDMServiceRBACMQTT(coreRBACMQTTNoACNoTLS.dm)
//        TestUtilities.resetMMServiceRBACRedis()
//    }
//
//    @Setup(Level.Iteration)
//    fun setUpIteration() {
//        println("setUpIteration: started iteration number $iteration")
//        if (iteration != 0) {
//            for (i in 0 until step) {
//                val currentRoleName = roleNamesAlreadyPresent.getNextName()
//                assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.addRole(currentRoleName))
//                assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignPermissionToRole(
//                    currentRoleName,
//                    resourceName,
//                    PermissionType.READWRITE
//                ))
//            }
//        }
//    }
//
//    @TearDown(Level.Iteration)
//    fun tearDownIteration() {
//        println("tearDownTrial: concluded iteration number $iteration")
//        assertSuccessOrThrow(coreRBACMQTTNoACNoTLS.assignUserToRole(
//            username,
//            roleName,
//        ))
//        iteration++
//    }
//
//    @Benchmark
//    fun revokeUserFromRole() {
//        assertSuccessOrThrow(
//            coreRBACMQTTNoACNoTLS.revokeUserFromRole(
//                username,
//                roleName,
//            )
//        )
//    }
//}
