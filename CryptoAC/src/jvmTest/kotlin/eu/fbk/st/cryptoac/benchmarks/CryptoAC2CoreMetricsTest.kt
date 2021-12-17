package eu.fbk.st.cryptoac.benchmarks


import eu.fbk.st.cryptoac.core.elements.*
import eu.fbk.st.cryptoac.core.tuples.*
import mu.KotlinLogging
import java.util.*

private val logger = KotlinLogging.logger {}

internal class CoreMetricsTest {
/**
    private val cryptoObject = CryptoFactory.getCrypto(CryptoType.JAVA, alwaysAvailableCryptoParameters)
    private val adminAsymEncKeys = cryptoObject.generateAsymEncKeys()
    private val adminAsymSigKeys = cryptoObject.generateAsymSigKeys()

    private val adminUser = User(
        name = ADMIN, isAdmin = true,
        asymEncKeys = adminAsymEncKeys,
        asymSigKeys = adminAsymSigKeys,
    )

    private val CoreObject = Core(adminUser, cryptoObject, adminCoreRBACCLOUDParameters)


    private val repetitions = 1000
    private val warmup = 50

    @BeforeEach
    fun `setup environment`() {
        TestUtilities.startCloud()
        TestUtilities.initAdminFromCore()
    }

    @AfterEach
    fun `tear down environment`() {
        TestUtilities.stopCloud()
        TestUtilities.resetDMCloud()
        TestUtilities.resetMetadataStorageMySQL()
        TestUtilities.resetOPACloud()
    }

    /** Here we assume all elements exists and are operational (those tests are in CoreTest) */


    @Test
    fun `experiment - add user`() {
        var totalTime = 0L

        val usernames = utility_generateRandomNames(repetitions + warmup)
        val usernamesIterator = usernames.iterator()

        var currentUsername: String
        var currentCore: Core

        /** warmup */
        run {
            for (i in 0 until warmup) {
                currentUsername = usernamesIterator.next()
                currentCore = addUser(currentUsername)
                assert(currentCore.initUser() == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        val timeGCBefore = utility_getTimeCG()

        /** tests */
        run {
            for (i in 0 until repetitions) {
                println(i)
                currentUsername = usernamesIterator.next()
                currentCore = addUser(currentUsername)
                totalTime += measureNanoTime {
                    assert(currentCore.initUser() == OutcomeCode.CODE_000_SUCCESS)
                }
            }
        }

        val timeGCAfter = utility_getTimeCG()

        totalTime -= (timeGCAfter - timeGCBefore)

        println(
            "total time add user is $totalTime, divided by $repetitions is " + 
            "${totalTime/repetitions} nanoseconds (${(totalTime/repetitions)/1000000} milliseconds)"
        )
    }

    @Test
    fun `experiment - add role`() {
        var totalTime = 0L

        val roleNames = utility_generateRandomNames(repetitions + warmup)
        val iterator = roleNames.iterator()

        var currentRoleName: String

        /** warmup */
        run {
            for (i in 0 until warmup) {
                currentRoleName = iterator.next()
                assert(CoreObject.addRole(currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        val timeGCBefore = utility_getTimeCG()

        /** tests */
        run {
            for (i in 0 until repetitions) {
                println(i)
                currentRoleName = iterator.next()
                totalTime += measureNanoTime {
                    assert(CoreObject.addRole(currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
                }
            }
        }

        val timeGCAfter = utility_getTimeCG()

        totalTime -= (timeGCAfter - timeGCBefore)

        println("total time add role is $totalTime, divided by $repetitions is ${totalTime/repetitions} nanoseconds (${(totalTime/repetitions)/1000000} milliseconds)")
    }

    @Test
    fun `experiment - assign user to role`() {
        var totalTime = 0L

        val alice = "alice"; addAndInitUser(alice)
        val roleNames = utility_generateRandomNames(repetitions + warmup)
        val iterator = roleNames.iterator()

        var currentRoleName: String

        /** warmup */
        run {
            for (i in 0 until warmup) {
                currentRoleName = iterator.next()
                assert(CoreObject.addRole(currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.assignUserToRole(alice, currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        val timeGCBefore = utility_getTimeCG()

        /** tests */
        run {
            for (i in 0 until repetitions) {
                println(i)
                currentRoleName = iterator.next()
                assert(CoreObject.addRole(currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
                totalTime += measureNanoTime {
                    assert(CoreObject.assignUserToRole(alice, currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
                }
            }
        }

        val timeGCAfter = utility_getTimeCG()

        totalTime -= (timeGCAfter - timeGCBefore)

        println("total time assign user to role is $totalTime, divided by $repetitions is ${totalTime/repetitions} nanoseconds (${(totalTime/repetitions)/1000000} milliseconds)")
    }

    @Test
        fun `experiment - assign permission to role`() {
        var totalTime = 0L

        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val fileNames = utility_generateRandomNames(repetitions + warmup)
        val iterator = fileNames.iterator()

        var currentFileName: String

        /** warmup */
        run {
            for (i in 0 until warmup) {
                currentFileName = iterator.next()
                assert(CoreObject.addFile(currentFileName,
                    currentFileName.inputStream(),
                    EnforcementType.COMBINED) ==
                        OutcomeCode.CODE_000_SUCCESS
                )
                assert(
                    CoreObject.assignPermissionToRole(employee,
                        currentFileName,
                        PermissionType.READWRITE) ==
                            OutcomeCode.CODE_000_SUCCESS
                )
            }
        }

        val timeGCBefore = utility_getTimeCG()

        /** tests */
        run {
            for (i in 0 until repetitions) {
                println(i)
                currentFileName = iterator.next()
                assert(CoreObject.addFile(currentFileName,
                    currentFileName.inputStream(),
                    EnforcementType.COMBINED) ==
                        OutcomeCode.CODE_000_SUCCESS
                )
                totalTime += measureNanoTime {
                    assert(
                        CoreObject.assignPermissionToRole(employee,
                            currentFileName,
                            PermissionType.READWRITE) ==
                                OutcomeCode.CODE_000_SUCCESS
                    )
                }
            }
        }

        val timeGCAfter = utility_getTimeCG()

        totalTime -= (timeGCAfter - timeGCBefore)

        println("total time assign permission to role is $totalTime, divided by $repetitions is ${totalTime/repetitions} nanoseconds (${(totalTime/repetitions)/1000000} milliseconds)")
    }

    @Test
    fun `experiment - add, read, write and delete files`() {
        var totalTimeAdd = 0L
        var totalTimeRead = 0L
        var totalTimeWrite = 0L
        var totalTimeDelete = 0L

        val fileContent = nextBytes(1)
        val fileNewContent = nextBytes(1)
        val fileNames = utility_generateRandomNames(repetitions + warmup)
        val iterator = fileNames.iterator()

        var currentFileName: String
        var CryptoACFile: CryptoACFile
        var tempBytes: ByteArray

        /** warmup */
        run {
            for (i in 0 until warmup) {
                currentFileName = iterator.next()
                assert(CoreObject.addFile(currentFileName,
                    fileContent.inputStream(),
                    EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
                CryptoACFile = CoreObject.readFile(currentFileName)
                tempBytes = CryptoACFile.stream!!.readAllBytes()
                assert(CryptoACFile.code == OutcomeCode.CODE_000_SUCCESS)
                assert(tempBytes.contentEquals(fileContent))
                assert(CoreObject.writeFile(currentFileName,
                    fileNewContent.inputStream()) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.deleteFile(currentFileName) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        val timeGCBefore = utility_getTimeCG()

        /** tests */
        run {
            for (i in 0 until repetitions) {
                println(i)
                currentFileName = iterator.next()
                totalTimeAdd += measureNanoTime {
                    assert(
                        CoreObject.addFile(currentFileName,
                            fileContent.inputStream(),
                            EnforcementType.COMBINED) ==
                                OutcomeCode.CODE_000_SUCCESS
                    )
                }

                totalTimeRead += measureNanoTime {
                    CryptoACFile = CoreObject.readFile(currentFileName)
                    tempBytes = CryptoACFile.stream!!.readAllBytes()
                }
                assert(CryptoACFile.code == OutcomeCode.CODE_000_SUCCESS)
                assert(tempBytes.contentEquals(fileContent))

                totalTimeWrite += measureNanoTime {
                    assert(
                        CoreObject.writeFile(currentFileName, fileNewContent.inputStream()) ==
                                OutcomeCode.CODE_000_SUCCESS
                    )
                }

                totalTimeDelete += measureNanoTime {
                    assert(CoreObject.deleteFile(currentFileName) == OutcomeCode.CODE_000_SUCCESS)
                }
            }
        }

        val timeGCAfter = utility_getTimeCG()

        val average = (timeGCAfter - timeGCBefore)/4
        totalTimeAdd -= average
        totalTimeRead -= average
        totalTimeWrite -= average
        totalTimeDelete -= average

        println("total time add file is $totalTimeAdd, divided by $repetitions is ${totalTimeAdd/repetitions} nanoseconds (${(totalTimeAdd/repetitions)/1000000} milliseconds)")
        println("total time read file is $totalTimeRead, divided by $repetitions is ${totalTimeRead/repetitions} nanoseconds (${(totalTimeRead/repetitions)/1000000} milliseconds)")
        println("total time write file is $totalTimeWrite, divided by $repetitions is ${totalTimeWrite/repetitions} nanoseconds (${(totalTimeWrite/repetitions)/1000000} milliseconds)")
        println("total time delete file is $totalTimeDelete, divided by $repetitions is ${totalTimeDelete/repetitions} nanoseconds (${(totalTimeDelete/repetitions)/1000000} milliseconds)")
    }

    @Test
    fun `experiment - revoke user from role`() {
        var totalTimeUpdateRoleTuples = 0L
        var totalTimeUpdateRolePermissionTuples = 0L
        var totalTimeUpdateOtherRolesPermissionTuples = 0L

        val alice = "alice"; addAndInitUser(alice)
        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"; val fileContent = nextBytes(1)
        assert(CoreObject.addFile(exam, fileContent.inputStream(), EnforcementType.COMBINED) ==OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

        var metrics: MetricTimes

        /** warmup */
        run {
            for (i in 0 until warmup) {
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
                utility_revokeUserFromRole(alice, employee)
            }
        }

        val timeGCBefore = utility_getTimeCG()

        /** tests */
        run {
            for (i in 0 until repetitions) {
                println(i)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
                metrics = utility_revokeUserFromRole(alice, employee)
                totalTimeUpdateRoleTuples += metrics.first
                totalTimeUpdateRolePermissionTuples += metrics.second
                totalTimeUpdateOtherRolesPermissionTuples += metrics.third
            }
        }

        val timeGCAfter = utility_getTimeCG()

        val average = (timeGCAfter - timeGCBefore)/3
        totalTimeUpdateRoleTuples -= average
        totalTimeUpdateRolePermissionTuples -= average
        totalTimeUpdateOtherRolesPermissionTuples -= average

        println("total time update role tuples is $totalTimeUpdateRoleTuples, divided by $repetitions is ${totalTimeUpdateRoleTuples/repetitions} nanoseconds (${(totalTimeUpdateRoleTuples/repetitions)/1000000} milliseconds)")
        println("total time update role permission tuples is $totalTimeUpdateRolePermissionTuples, divided by $repetitions is ${totalTimeUpdateRolePermissionTuples/repetitions} nanoseconds (${(totalTimeUpdateRolePermissionTuples/repetitions)/1000000} milliseconds)")
        println("total time update other roles permission tuples is $totalTimeUpdateOtherRolesPermissionTuples, divided by $repetitions is ${totalTimeUpdateOtherRolesPermissionTuples/repetitions} nanoseconds (${(totalTimeUpdateOtherRolesPermissionTuples/repetitions)/1000000} milliseconds)")
    }

    @Test
    fun `experiment - revoke write permission to role`() {
        var totalTime = 0L

        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)

        val exam = "exam"; val fileContent = nextBytes(1)
        assert(CoreObject.addFile(exam, fileContent.inputStream(), EnforcementType.COMBINED) ==OutcomeCode.CODE_000_SUCCESS)

        /** warmup */
        run {
            for (i in 0 until warmup) {
                assert(CoreObject.assignPermissionToRole(employee,
                    exam,
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
                assert(utility_revokeReadPermission(employee, exam) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        val timeGCBefore = utility_getTimeCG()

        /** tests */
        run {
            for (i in 0 until repetitions) {
                println(i)
                assert(CoreObject.assignPermissionToRole(employee,
                    exam,
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
                totalTime += measureNanoTime {
                    assert(utility_revokeReadPermission(employee, exam) == OutcomeCode.CODE_000_SUCCESS)
                }
            }
        }

        val timeGCAfter = utility_getTimeCG()

        totalTime -= timeGCAfter - timeGCBefore

        println("total time revoke write permission to role is $totalTime, divided by $repetitions is ${totalTime/repetitions} nanoseconds (${(totalTime/repetitions)/1000000} milliseconds)")
    }

    @Test
    fun `experiment - revoke all permission to role`() {
        var totalTime = 0L

        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam" ; val fileContent = nextBytes(1)
        assert(CoreObject.addFile(exam, fileContent.inputStream(), EnforcementType.COMBINED) ==OutcomeCode.CODE_000_SUCCESS)

        /** warmup */
        run {
            for (i in 0 until warmup) {
                assert(CoreObject.assignPermissionToRole(employee,
                    exam,
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
                assert(utility_revokeAllPermission(employee, exam) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        val timeGCBefore = utility_getTimeCG()

        /** tests */
        run {
            for (i in 0 until repetitions) {
                println(i)
                assert(
                    CoreObject.assignPermissionToRole(employee, exam, PermissionType.READWRITE) ==
                            OutcomeCode.CODE_000_SUCCESS
                )
                totalTime += measureNanoTime {
                    assert(utility_revokeAllPermission(employee, exam) == OutcomeCode.CODE_000_SUCCESS)
                }
            }
        }

        val timeGCAfter = utility_getTimeCG()

        totalTime -= timeGCAfter - timeGCBefore

        println("total time revoke all permission to role is $totalTime, divided by $repetitions is ${totalTime/repetitions} nanoseconds (${(totalTime/repetitions)/1000000} milliseconds)")
    }




    @Test
    fun `experiment - ac policy simulator from dataset`() {

        /** this is the scenario */
        val numberOfUsers = 46
        val numberOfRoles = 13
        val numberOfFiles = 46
        val numberOfAssignmentsUserRoles = 55
        val numberOfAssignmentsRolesFiles = 359
        val rangeRolesPerUser = 1..5
        val rangeUsersPerRole = 1..17
        val rangeFilesPerRole = 7..45
        val rangeRolesPerFile = 1..12

        /** this are other variables */
        val rolesAssignedToUser = HashMap<String, HashSet<String>>()
        val usersAssignedToRole = HashMap<String, HashSet<String>>()
        val filesAssignedToRole = HashMap<String, HashSet<String>>()
        val rolesAssignedToFile = HashMap<String, HashSet<String>>()
        val usernames = utility_generateRandomNames(numberOfUsers).toTypedArray()
        val roleNames = utility_generateRandomNames(numberOfRoles).toTypedArray()
        val fileNames = utility_generateRandomNames(numberOfFiles).toTypedArray()
        val usernamesExceptOne = usernames.filterIndexed { index, _ -> index != numberOfUsers - 1 }
        val roleNamesExceptOne = roleNames.filterIndexed { index, _ -> index != numberOfRoles - 1 }
        val fileNamesExceptOne = fileNames.filterIndexed { index, _ -> index != numberOfFiles - 1 }
        assert(usernames.size == usernamesExceptOne.size + 1)
        assert(roleNames.size == roleNamesExceptOne.size + 1)
        assert(fileNames.size == fileNamesExceptOne.size + 1)

        var numberOfAssignmentsUserRolesAlreadyDone = 0
        var numberOfAssignmentsRolesFilesAlreadyDone = 0

        /** populate the database with elements, complying with the scenario  */
        run {
            println("adding users")
            usernames.forEach {
                addAndInitUser(it)
                rolesAssignedToUser[it] = HashSet()
            }
            println("adding roles")
            roleNames.forEach {
                assert(CoreObject.addRole(it) == OutcomeCode.CODE_000_SUCCESS)
                usersAssignedToRole[it] = HashSet()
                filesAssignedToRole[it] = HashSet()
            }
            println("adding files")
            fileNames.forEach {
                assert(CoreObject.addFile(it,
                    it.inputStream(),
                    EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
                rolesAssignedToFile[it] = HashSet()
            }
        }

        /** populate the database with maximum assignments, complying with the scenario  */
        run {
            println("maximum assignments for users")
            val maximumUsername = usernames[0]
            while (rolesAssignedToUser[maximumUsername]!!.size < rangeRolesPerUser.last) {
                var currentRoleName: String
                do {
                    currentRoleName = roleNames.random()
                } while (usersAssignedToRole[currentRoleName]!!.size >= rangeUsersPerRole.last || rolesAssignedToUser[maximumUsername]!!.contains(
                        currentRoleName)
                )
                assert(CoreObject.assignUserToRole(maximumUsername,
                    currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
                numberOfAssignmentsUserRolesAlreadyDone++
                rolesAssignedToUser[maximumUsername]!!.add(currentRoleName)
                usersAssignedToRole[currentRoleName]!!.add(maximumUsername)
            }
            println("maximum assignments for roles")
            val maximumRoleName = roleNames[0]
            while (usersAssignedToRole[maximumRoleName]!!.size < rangeUsersPerRole.last) {
                var currentUsername: String
                do {
                    currentUsername = usernames.random()
                } while (rolesAssignedToUser[currentUsername]!!.size >= rangeRolesPerUser.last || usersAssignedToRole[maximumRoleName]!!.contains(
                        currentUsername)
                )
                assert(CoreObject.assignUserToRole(currentUsername,
                    maximumRoleName) == OutcomeCode.CODE_000_SUCCESS)
                numberOfAssignmentsUserRolesAlreadyDone++
                rolesAssignedToUser[currentUsername]!!.add(maximumRoleName)
                usersAssignedToRole[maximumRoleName]!!.add(currentUsername)
            }
            while (filesAssignedToRole[maximumRoleName]!!.size < rangeFilesPerRole.last) {
                var currentFileName: String
                do {
                    currentFileName = fileNames.random()
                } while (rolesAssignedToFile[currentFileName]!!.size >= rangeRolesPerFile.last || filesAssignedToRole[maximumRoleName]!!.contains(
                        currentFileName)
                )
                assert(CoreObject.assignPermissionToRole(maximumRoleName,
                    currentFileName,
                    PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
                numberOfAssignmentsRolesFilesAlreadyDone++
                rolesAssignedToFile[currentFileName]!!.add(maximumRoleName)
                filesAssignedToRole[maximumRoleName]!!.add(currentFileName)
            }
            println("maximum assignments for files")
            val maximumFileName = fileNames[0]
            while (rolesAssignedToFile[maximumFileName]!!.size < rangeRolesPerFile.last) {
                var currentRoleName: String
                do {
                    currentRoleName = roleNames.random()
                } while (filesAssignedToRole[currentRoleName]!!.size >= rangeFilesPerRole.last || rolesAssignedToFile[maximumFileName]!!.contains(
                        currentRoleName)
                )
                assert(CoreObject.assignPermissionToRole(currentRoleName,
                    maximumFileName,
                    PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
                numberOfAssignmentsRolesFilesAlreadyDone++
                rolesAssignedToFile[maximumFileName]!!.add(currentRoleName)
                filesAssignedToRole[currentRoleName]!!.add(maximumFileName)
            }
        }

        /** populate the database with minimum assignments, complying with the scenario  */
        run {
            println("minimum assignments for users")
            for (i in 0 until numberOfUsers) {
                val currentUsername = usernames[i]
                while (rolesAssignedToUser[currentUsername]!!.size < rangeRolesPerUser.first) {
                    var currentRoleName: String
                    do {
                        currentRoleName = roleNamesExceptOne.random()
                    } while (usersAssignedToRole[currentRoleName]!!.size >= rangeUsersPerRole.last || rolesAssignedToUser[currentUsername]!!.contains(
                            currentRoleName)
                    )
                    assert(CoreObject.assignUserToRole(currentUsername,
                        currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
                    numberOfAssignmentsUserRolesAlreadyDone++
                    rolesAssignedToUser[currentUsername]!!.add(currentRoleName)
                    usersAssignedToRole[currentRoleName]!!.add(currentUsername)
                }
            }
            println("minimum assignments for roles")
            for (i in 0 until numberOfRoles) {
                val currentRoleName = roleNames[i]
                while (usersAssignedToRole[currentRoleName]!!.size < rangeUsersPerRole.first) {
                    var currentUsername: String
                    do {
                        currentUsername = usernamesExceptOne.random()
                    } while (rolesAssignedToUser[currentUsername]!!.size >= rangeRolesPerUser.last || usersAssignedToRole[currentRoleName]!!.contains(
                            currentUsername)
                    )
                    assert(CoreObject.assignUserToRole(currentUsername,
                        currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
                    numberOfAssignmentsUserRolesAlreadyDone++
                    rolesAssignedToUser[currentUsername]!!.add(currentRoleName)
                    usersAssignedToRole[currentRoleName]!!.add(currentUsername)
                }
                while (filesAssignedToRole[currentRoleName]!!.size < rangeFilesPerRole.first) {
                    var currentFileName: String
                    do {
                        currentFileName = fileNamesExceptOne.random()
                    } while (rolesAssignedToFile[currentFileName]!!.size >= rangeRolesPerFile.last || filesAssignedToRole[currentRoleName]!!.contains(
                            currentFileName)
                    )
                    assert(CoreObject.assignPermissionToRole(currentRoleName,
                        currentFileName,
                        PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
                    numberOfAssignmentsRolesFilesAlreadyDone++
                    rolesAssignedToFile[currentFileName]!!.add(currentRoleName)
                    filesAssignedToRole[currentRoleName]!!.add(currentFileName)
                }
            }
            println("minimum assignments for files")
            for (i in 0 until numberOfFiles) {
                val currentFileName = fileNames[i]
                while (rolesAssignedToFile[currentFileName]!!.size < rangeRolesPerFile.first) {
                    var currentRoleName: String
                    do {
                        currentRoleName = roleNamesExceptOne.random()
                    } while (filesAssignedToRole[currentRoleName]!!.size >= rangeFilesPerRole.last || rolesAssignedToFile[currentFileName]!!.contains(
                            currentRoleName)
                    )
                    assert(CoreObject.assignPermissionToRole(currentRoleName,
                        currentFileName,
                        PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
                    numberOfAssignmentsRolesFilesAlreadyDone++
                    rolesAssignedToFile[currentFileName]!!.add(currentRoleName)
                    filesAssignedToRole[currentRoleName]!!.add(currentFileName)
                }
            }
        }

        /** populate the database with remaining assignments, complying with the scenario  */
        run {
            println("user-role assignments")
            println("numberOfAssignmentsUserRoles $numberOfAssignmentsUserRoles")
            println("numberOfAssignmentsUserRolesAlreadyDone $numberOfAssignmentsUserRolesAlreadyDone")
            assert(numberOfAssignmentsUserRoles >= numberOfAssignmentsUserRolesAlreadyDone)
            for (i in 0 until numberOfAssignmentsUserRoles - numberOfAssignmentsUserRolesAlreadyDone) {
                var currentUsername: String
                var currentRoleName: String

                do {
                    do {
                        currentUsername = usernamesExceptOne.random()
                    } while (rolesAssignedToUser[currentUsername]!!.size >= rangeRolesPerUser.last)
                    do {
                        currentRoleName = roleNamesExceptOne.random()
                    } while (usersAssignedToRole[currentRoleName]!!.size >= rangeUsersPerRole.last)
                } while (rolesAssignedToUser[currentUsername]!!.contains(currentRoleName))

                assert(CoreObject.assignUserToRole(currentUsername,
                    currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
                rolesAssignedToUser[currentUsername]!!.add(currentRoleName)
                usersAssignedToRole[currentRoleName]!!.add(currentUsername)
            }
            println("role-file assignments")
            println("numberOfAssignmentsRolesFiles $numberOfAssignmentsRolesFiles")
            println("numberOfAssignmentsRolesFilesAlreadyDone $numberOfAssignmentsRolesFilesAlreadyDone")
            assert(numberOfAssignmentsRolesFiles >= numberOfAssignmentsRolesFilesAlreadyDone)
            for (i in 0 until numberOfAssignmentsRolesFiles - numberOfAssignmentsRolesFilesAlreadyDone) {
                var currentRoleName: String
                var currentFileName: String

                do {
                    do {
                        currentRoleName = roleNamesExceptOne.random()
                    } while (filesAssignedToRole[currentRoleName]!!.size >= rangeFilesPerRole.last)
                    do {
                        currentFileName = fileNamesExceptOne.random()
                    } while (rolesAssignedToFile[currentFileName]!!.size >= rangeRolesPerFile.last)
                } while (filesAssignedToRole[currentRoleName]!!.contains(currentFileName))

                assert(CoreObject.assignPermissionToRole(currentRoleName,
                    currentFileName,
                    PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
                filesAssignedToRole[currentRoleName]!!.add(currentFileName)
                rolesAssignedToFile[currentFileName]!!.add(currentRoleName)
            }
        }

        /** sanity check to ensure everything is in range and fine */
        run {
            var isThereMaximumForRolesPerUser = false
            var isThereMaximumForUsersPerRole = false
            var isThereMaximumForFilesPerRole = false
            var isThereMaximumForRolesPerFile = false
            var isThereMinimumForRolesPerUser = false
            var isThereMinimumForUsersPerRole = false
            var isThereMinimumForFilesPerRole = false
            var isThereMinimumForRolesPerFile = false
            assert(usernames.size == numberOfUsers)
            assert(roleNames.size == numberOfRoles)
            assert(fileNames.size == numberOfFiles)
            var sum = 0
            rolesAssignedToUser.forEach { (_, roles) ->
                val size = roles.size
                assert(size >= rangeRolesPerUser.first)
                assert(size <= rangeRolesPerUser.last)
                sum += size
                if (size == rangeRolesPerUser.first) {
                    isThereMinimumForRolesPerUser = true
                }
                if (size == rangeRolesPerUser.last) {
                    isThereMaximumForRolesPerUser = true
                }
            }
            assert(sum == numberOfAssignmentsUserRoles)
            sum = 0

            usersAssignedToRole.forEach { (_, users) ->
                val size = users.size
                assert(size >= rangeUsersPerRole.first)
                assert(size <= rangeUsersPerRole.last)
                sum += size
                if (size == rangeUsersPerRole.first) {
                    isThereMinimumForUsersPerRole = true
                }
                if (size == rangeUsersPerRole.last) {
                    isThereMaximumForUsersPerRole = true
                }
            }
            assert(sum == numberOfAssignmentsUserRoles)
            sum = 0

            filesAssignedToRole.forEach { (_, files) ->
                val size = files.size
                assert(size >= rangeFilesPerRole.first)
                assert(size <= rangeFilesPerRole.last)
                sum += size
                if (size == rangeFilesPerRole.first) {
                    isThereMinimumForFilesPerRole = true
                }
                if (size == rangeFilesPerRole.last) {
                    isThereMaximumForFilesPerRole = true
                }
            }
            assert(sum == numberOfAssignmentsRolesFiles)
            sum = 0

            rolesAssignedToFile.forEach { (_, roles) ->
                val size = roles.size
                assert(size >= rangeRolesPerFile.first)
                assert(size <= rangeRolesPerFile.last)
                sum += size
                if (size == rangeRolesPerFile.first) {
                    isThereMinimumForRolesPerFile = true
                }
                if (size == rangeRolesPerFile.last) {
                    isThereMaximumForRolesPerFile = true
                }
            }
            assert(sum == numberOfAssignmentsRolesFiles)
            assert(isThereMaximumForRolesPerUser)
            assert(isThereMaximumForUsersPerRole)
            assert(isThereMaximumForFilesPerRole)
            assert(isThereMaximumForRolesPerFile)
            assert(isThereMinimumForRolesPerUser)
            assert(isThereMinimumForUsersPerRole)
            assert(isThereMinimumForFilesPerRole)
            assert(isThereMinimumForRolesPerFile)
        }


        /** ready for experimentation */
        val evaluation = HashMap<Int, ArrayList<Long>>()
        for (i in rangeRolesPerFile.first - 1 until rangeRolesPerFile.last) {
            evaluation[i] = ArrayList()
        }

        roleNames.forEach { roleToRevoke ->
            filesAssignedToRole[roleToRevoke]!!.forEach { fileToRevoke ->
                val numberOfOtherRolesWithAccessToFile = rolesAssignedToFile[fileToRevoke]!!.size - 1
                val revokePermissionTime = measureNanoTime {
                    assert(CoreObject.revokePermissionFromRole(roleToRevoke,
                        fileToRevoke,
                        PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
                }
                assert(CoreObject.assignPermissionToRole(roleToRevoke,
                    fileToRevoke,
                    PermissionType.READ) == OutcomeCode.CODE_000_SUCCESS)
                evaluation[numberOfOtherRolesWithAccessToFile]!!.add(revokePermissionTime)
            }
        }
        var totalAverage = 0.0
        for (i in rangeRolesPerFile.first - 1 until rangeRolesPerFile.last) {
            val average = (evaluation[i]!!.average()) / 1000000.0
            println("for $i roles, average is $average milliseconds (with ${evaluation[i]!!.size} experiments with $i roles)")
            totalAverage += average
        }
        println("total average is ${totalAverage / rangeRolesPerFile.last} milliseconds")
    }





    @Test
    fun `experiment - revoke user from role with multiple users associated`() {
        val totalTimes = HashMap<Int, Long>()

        val warmup = 10
        val scale = 100
        val usernames = utility_generateRandomNames(warmup + scale).toTypedArray()
        val alice = "alice"; addAndInitUser(alice)
        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)

        var metrics: MetricTimes

        /** warmup */
        run {
            for (i in 0 until warmup) {
                utility_revokeUserFromRole(alice, employee)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            }
        }


        /** tests */
        run {
            for (i in 0 until scale) {
                println(i)
                val timeGCBefore = utility_getTimeCG()
                metrics = utility_revokeUserFromRole(alice, employee)
                val timeMeasured = metrics.first
                val timeGCAfter = utility_getTimeCG()
                totalTimes[i] = timeMeasured - (timeGCAfter - timeGCBefore)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
                addAndInitUser(usernames[i])
                assert(CoreObject.assignUserToRole(usernames[i], employee) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        println("Times are as follow:")
        println("number, revokeU1")
        totalTimes.forEach { (otherUsers, time) ->
            println("$otherUsers, ${time/1000000.0}")
        }
    }

    @Test
    fun `experiment - revoke user from role with multiple files associated`() {
        val totalTimes = HashMap<Int, Long>()

        val warmup = 10
        val scale = 100
        val fileNames = utility_generateRandomNames(scale).toTypedArray()
        val alice = "alice"; addAndInitUser(alice)
        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)

        var metrics: MetricTimes

        /** warmup */
        run {
            for (i in 0 until warmup) {
                utility_revokeUserFromRole(alice, employee)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        /** tests */
        run {
            for (i in 0 until scale) {
                println(i)
                val timeGCBefore = utility_getTimeCG()
                metrics = utility_revokeUserFromRole(alice, employee)
                val timeMeasured = metrics.second
                val timeGCAfter = utility_getTimeCG()
                totalTimes[i] = timeMeasured - (timeGCAfter - timeGCBefore)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.addFile(fileNames[i],
                    fileNames[i].inputStream(),
                    EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.assignPermissionToRole(employee,
                    fileNames[i],
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        println("Times are as follow:")
        println("number, revokeU2")
        totalTimes.forEach { (filesAssigned, time) ->
            println("$filesAssigned, ${time/1000000.0}")
        }
    }

    @Test
    fun `experiment - revoke user from role with multiple roles associated to file associated to role`() {
        val totalTimes = HashMap<Int, Long>()

        val warmup = 10
        val scale = 100
        val roleNames = utility_generateRandomNames(warmup + scale).toTypedArray()
        val alice = "alice"; addAndInitUser(alice)
        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        assert(CoreObject.addFile(exam, exam.inputStream(), EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

        var metrics: MetricTimes

        /** warmup */
        run {
            for (i in 0 until warmup) {
                utility_revokeUserFromRole(alice, employee)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        /** tests */
        run {
            for (i in 0 until scale) {
                println(i)
                val timeGCBefore = utility_getTimeCG()
                metrics = utility_revokeUserFromRole(alice, employee)
                val timeMeasured = metrics.third
                val timeGCAfter = utility_getTimeCG()
                totalTimes[i] = timeMeasured - (timeGCAfter - timeGCBefore)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.addRole(roleNames[i]) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.assignPermissionToRole(roleNames[i],
                    exam,
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        println("Times are as follow:")
        println("number, revokeU3")
        totalTimes.forEach { (filesAssigned, time) ->
            println("$filesAssigned, ${time/1000000.0}")
        }
    }



    @Test
    fun `experiment - revoke user from role with multiple users associated varying the number of files`() {
        val totalTimes = HashMap<Int, Long>()

        val warmup = 5
        val scale = 100
        val numberOfFiles = 300; var currentFileName: String
        val fileNames = utility_generateRandomNames(numberOfFiles).toTypedArray(); val fileIterator = fileNames.iterator()
        val usernames = utility_generateRandomNames(scale).toTypedArray()
        val userIterator = usernames.iterator(); var currentUsername: String
        val alice = "alice"; addAndInitUser(alice)
        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)

        /** add files */
        run {
            for (i in 0 until numberOfFiles) {
                currentFileName = fileIterator.next()
                assert(CoreObject.addFile(currentFileName,
                    currentFileName.inputStream(),
                    EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.assignPermissionToRole(employee,
                    currentFileName,
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            }
            println("there are $numberOfFiles files")
        }

        /** warmup */
        run {
            for (i in 0 until warmup) {
                utility_revokeUserFromRole(alice, employee)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        /** tests */
        run {
            for (i in 0 until scale) {
                println(i)
                val timeGCBefore = utility_getTimeCG()
                val timeMeasured = measureNanoTime {
                    CoreObject.revokeUserFromRole(alice, employee)
                }
                val timeGCAfter = utility_getTimeCG()
                totalTimes[i] = timeMeasured - (timeGCAfter - timeGCBefore)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
                currentUsername = userIterator.next()
                addAndInitUser(currentUsername)
                assert(CoreObject.assignUserToRole(currentUsername, employee) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        println("Times are as follow:")
        println("number, revokeU1_${numberOfFiles}_U2")
        totalTimes.forEach { (number, time) ->
            println("$number, ${time/1000000.0}")
        }
    }

    @Test
    fun `experiment - revoke user from role with multiple files associated varying the number of other roles`() {
        val totalTimes = HashMap<Int, Long>()

        val warmup = 5
        val scale = 100
        val numberOfOtherRoles = 300; var currentOtherRoleName: String
        val otherRoleNames = utility_generateRandomNames(numberOfOtherRoles).toTypedArray(); val otherRoleIterator = otherRoleNames.iterator()
        val fileNames = utility_generateRandomNames(scale).toTypedArray()
        val fileIterator = fileNames.iterator(); var currentFileName: String
        val alice = "alice"; addAndInitUser(alice)
        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        assert(CoreObject.addFile(exam, exam.inputStream(), EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

        /** add other roles */
        run {
            for (i in 0 until numberOfOtherRoles) {
                currentOtherRoleName = otherRoleIterator.next()
                assert(CoreObject.addRole(currentOtherRoleName) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.assignPermissionToRole(currentOtherRoleName,
                    exam,
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            }
            println("there are $numberOfOtherRoles other roles")
        }

        /** warmup */
        run {
            for (i in 0 until warmup) {
                utility_revokeUserFromRole(alice, employee)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        /** tests */
        run {
            for (i in 0 until scale) {
                println(i)
                val timeGCBefore = utility_getTimeCG()
                val timeMeasured = measureNanoTime {
                    CoreObject.revokeUserFromRole(alice, employee)
                }
                val timeGCAfter = utility_getTimeCG()
                totalTimes[i] = timeMeasured - (timeGCAfter - timeGCBefore)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
                currentFileName = fileIterator.next()
                assert(CoreObject.addFile(currentFileName,
                    currentFileName.inputStream(),
                    EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.assignPermissionToRole(employee,
                    currentFileName,
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            }
        }


        println("Times are as follow:")
        println("number, revokeU2_${numberOfOtherRoles}_U3")
        totalTimes.forEach { (number, time) ->
            println("$number, ${time/1000000.0}")
        }
    }

    @Test
    fun `experiment - revoke user from role with multiple roles associated varying the number of users`() {
        val totalTimes = HashMap<Int, Long>()

        val warmup = 5
        val scale = 100
        val numberOfUsers = 300; var currentUsername: String
        val usernames = utility_generateRandomNames(numberOfUsers).toTypedArray(); val usernameIterator = usernames.iterator()
        val roleNames = utility_generateRandomNames(scale).toTypedArray()
        var currentRoleName: String; val roleNameIterator = roleNames.iterator()
        val alice = "alice"; addAndInitUser(alice)
        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        assert(CoreObject.addFile(exam, exam.inputStream(), EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

        /** add users */
        run {
            for (i in 0 until numberOfUsers) {
                currentUsername = usernameIterator.next()
                addAndInitUser(currentUsername)
                assert(CoreObject.assignUserToRole(currentUsername, employee) == OutcomeCode.CODE_000_SUCCESS)
            }
            println("there are $numberOfUsers users")
        }

        /** warmup */
        run {
            for (i in 0 until warmup) {
                utility_revokeUserFromRole(alice, employee)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        /** tests */
        run {
            for (i in 0 until scale) {
                println(i)
                val timeGCBefore = utility_getTimeCG()
                val timeMeasured = measureNanoTime {
                    CoreObject.revokeUserFromRole(alice, employee)
                }
                val timeGCAfter = utility_getTimeCG()
                totalTimes[i] = timeMeasured - (timeGCAfter - timeGCBefore)
                assert(CoreObject.assignUserToRole(alice, employee) == OutcomeCode.CODE_000_SUCCESS)
                currentRoleName = roleNameIterator.next()
                assert(CoreObject.addRole(currentRoleName) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.assignPermissionToRole(currentRoleName,
                    exam,
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        println("Times are as follow:")
        println("number, revokeU3_${numberOfUsers}_U1")
        totalTimes.forEach { (number, time) ->
            println("$number, ${time/1000000.0}")
        }
    }


    @Test
    fun `experiment - revoke all permission to role with multiple other roles`() {
        val totalTimes = HashMap<Int, Long>()

        val warmup = 10
        val scale = 100
        val roleNames = utility_generateRandomNames(scale).toTypedArray()
        val employee = "employee"; assert(CoreObject.addRole(employee) == OutcomeCode.CODE_000_SUCCESS)
        val exam = "exam"
        assert(CoreObject.addFile(exam, exam.inputStream(), EnforcementType.COMBINED) == OutcomeCode.CODE_000_SUCCESS)
        assert(CoreObject.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

        /** warmup */
        run {
            for (i in 0 until warmup) {
                assert(CoreObject.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        /** tests */
        run {
            for (i in 0 until scale) {
                println(i)
                val timeGCBefore = utility_getTimeCG()
                val timeMeasured = measureNanoTime {
                    assert(CoreObject.revokePermissionFromRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
                }
                val timeGCAfter = utility_getTimeCG()
                totalTimes[i] = timeMeasured - (timeGCAfter - timeGCBefore)
                assert(CoreObject.assignPermissionToRole(employee, exam, PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)

                assert(CoreObject.addRole(roleNames[i]) == OutcomeCode.CODE_000_SUCCESS)
                assert(CoreObject.assignPermissionToRole(roleNames[i],
                    exam,
                    PermissionType.READWRITE) == OutcomeCode.CODE_000_SUCCESS)
            }
        }

        println("Times are as follow:")
        println("number, revokeP")
        totalTimes.forEach { (filesAssigned, time) ->
            println("$filesAssigned, ${time/1000000.0}")
        }
    }




 
    private fun utility_generateRandomNames(number: Int = repetitions): HashSet<String> {
        val names = HashSet<String>()
        val bytes = ByteArray(8)
        while (names.size < number) {
            Random().nextBytes(bytes)
            names.add(Base64.getEncoder().encodeToString(bytes))
        }
        return names
    }

    // these functions are copies of those in Core
    private fun utility_revokeUserFromRole(username: String, roleName: String): MetricTimes {

        var first: Long = 0L
        var second: Long = 0L
        var third: Long = 0L

        val storageDAO = MMMySQL(CoreObject.CoreParametersCLOUD.mmParametersMySQL)
        val crypto = CoreObject.crypto
        val user = CoreObject.user

        val newAsymEncKeys = crypto.generateAsymEncKeys()
        val newAsymSigKeys = crypto.generateAsymSigKeys()

        val adminRoleTuple: RoleTuple
        val oldRoleVersionNumber: Int
        val newRoleVersionNumber: Int

        first += measureNanoTime {

            /** Guard clauses */
            if (username.isBlank() || roleName.isBlank()) {
                throw Exception(OutcomeCode.CODE_020_INVALID_PARAMETER.toString())
            }
            if (username == ADMIN || roleName == ADMIN) {
                throw Exception(OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED.toString())
            }

            /** Lock the status of the metadata */
            val lockCode = storageDAO.lock()
            if (lockCode != OutcomeCode.CODE_000_SUCCESS) {
                throw Exception(lockCode.toString())
            }

            /** Get the RoleTuples of [roleName] */
            val roleRoleTuples = storageDAO.getRoleTuples(roleName = roleName, offset = 0, limit = NO_LIMIT)
            if (roleRoleTuples.isEmpty()) {
                throw Exception(endOfMethod(OutcomeCode.CODE_005_ROLE_NOT_FOUND).toString())
            }

            /** Get the RoleTuple of [username] and [roleName] */
            val userRoleTuple = roleRoleTuples.firstOrNull { it.username == username }
                ?: throw Exception(endOfMethod(OutcomeCode.CODE_026_ROLETUPLE_NOT_FOUND).toString())

            /** Verify the signature of the RoleTuple of [username] and [roleName] */
            verifyTupleSignature(userRoleTuple)

            /** Get the role tuple of the admin and [roleName] */
            adminRoleTuple = roleRoleTuples.first { it.username == ADMIN }

            /** Verify the signature of the RoleTuple of the admin for [roleName] */
            verifyTupleSignature(adminRoleTuple)

            /** Update the version number and provide new keys for the RoleTuples (except for [username]'s one) */
            val newRoleTuples = HashSet<RoleTuple>()
            oldRoleVersionNumber = userRoleTuple.roleVersionNumber
            newRoleVersionNumber = oldRoleVersionNumber + 1
            for (currentTuple in roleRoleTuples) {
                if (currentTuple.username != username) {

                    /** Verify the signature of the current RoleTuple */
                    verifyTupleSignature(currentTuple)

                    /** Get the key of the user of the current RoleTuple */
                    val userAsymEncPublicKeyBytes = storageDAO.getPublicKey(
                        name = currentTuple.username,
                        elementType = ElementType.USER,
                        asymKeyType = AsymKeysType.ENC,
                    )
                    val userAsymEncPublicKey = crypto.recreateAsymKeys(
                        asymPublicKeyBytes = userAsymEncPublicKeyBytes,
                        type = AsymKeysType.ENC
                    ).public

                    /** Encrypt the new asym keys with the public key of the user */
                    val encryptedAsymEncKeys =
                        crypto.encryptAsymKeys(userAsymEncPublicKey, newAsymEncKeys, AsymKeysType.ENC)
                    val encryptedAsymSigKeys =
                        crypto.encryptAsymKeys(userAsymEncPublicKey, newAsymSigKeys, AsymKeysType.SIG)
                    val newRoleTuple = RoleTuple(
                        username = currentTuple.username, roleName = roleName,
                        roleVersionNumber = newRoleVersionNumber,
                        encryptedAsymEncKeys = encryptedAsymEncKeys, encryptedAsymSigKeys = encryptedAsymSigKeys,
                    )
                    val newRoleTupleSignature =
                        crypto.createSignature(newRoleTuple.getBytesForSignature(), user.asymSigKeys!!.private)
                    newRoleTuple.updateSignature(newRoleTupleSignature, ADMIN, ElementType.USER)
                    newRoleTuples.add(newRoleTuple)
                }
            }

            /** Delete the old role tuples of [roleName] */
            val deleteRoleTuplesCode =
                storageDAO.deleteRoleTuples(roleName = roleName)
            if (deleteRoleTuplesCode != OutcomeCode.CODE_000_SUCCESS) {
                throw Exception(endOfMethod(deleteRoleTuplesCode).toString())
            }

            /** Add the new role tuples of [roleName] */
            val addRoleTuplesCode = storageDAO.addRoleTuples(newRoleTuples)
            if (addRoleTuplesCode != OutcomeCode.CODE_000_SUCCESS) {
                throw Exception(endOfMethod(addRoleTuplesCode).toString())
            }
        }

        val oldRoleAsymEncKeys =
            crypto.decryptAsymEncKeys(user.asymEncKeys!!.private, adminRoleTuple.encryptedAsymEncKeys!!)

        second += measureNanoTime {
            /** Get the [roleName] asymmetric encryption keys */

            /** Get the PermissionTuples to update */
            val permissionTuples = storageDAO.getPermissionTuples(roleName = roleName, offset = 0, limit = NO_LIMIT)
            if (permissionTuples.isNotEmpty()) {

                /** The key is the file name, the value are the related permission tuples */
                val roleAccessibleFiles = HashMap<String, HashSet<PermissionTuple>>()

                /** Collect the names of the files that [roleName] has access to */
                for (currentTuple in permissionTuples) {
                    verifyTupleSignature(currentTuple)
                    val fileName = currentTuple.fileName
                    roleAccessibleFiles.putIfAbsent(fileName, HashSet())
                    roleAccessibleFiles[fileName]!!.add(currentTuple)
                }

                /** For each file the revoked [username] had access through [roleName] */
                val newPermissionTuples = HashSet<PermissionTuple>()
                for (roleAccessibleFile in roleAccessibleFiles) {
                    val fileName = roleAccessibleFile.key
                    val fileToken = storageDAO.getToken(name = fileName, type = ElementType.FILE)
                    val currentPermissionTuples = roleAccessibleFile.value

                    val latestFileVersionNumber = storageDAO.getVersionNumber(
                        name = fileName,
                        elementType = ElementType.FILE,
                    )
                    val newSymKey = crypto.generateSymKey()

                    third += measureNanoTime {
                        /** Update the PermissionTuples of the [roleName] */
                        for (currentPermissionTuple in currentPermissionTuples) {

                            val tupleFileVersionNumber = currentPermissionTuple.symKeyVersionNumber
                            val tupleSymKey = if (tupleFileVersionNumber == latestFileVersionNumber) {
                                crypto.encryptSymKey(newAsymEncKeys.public, newSymKey)
                            } else {
                                val oldSymKey =
                                    crypto.decryptSymKey(oldRoleAsymEncKeys.private,
                                        currentPermissionTuple.encryptedSymKey!!)
                                crypto.encryptSymKey(newAsymEncKeys.public, oldSymKey)
                            }

                            val newPermissionTuple = PermissionTuple(
                                roleName = roleName, fileName = fileName,
                                roleVersionNumber = newRoleVersionNumber,
                                symKeyVersionNumber = currentPermissionTuple.symKeyVersionNumber + 1,
                                permission = currentPermissionTuple.permission,
                                encryptedSymKey = tupleSymKey,
                                roleToken = currentPermissionTuple.roleToken, fileToken = fileToken!!,
                            )
                            val signature =
                                crypto.createSignature(newPermissionTuple.getBytesForSignature(),
                                    user.asymSigKeys!!.private)
                            newPermissionTuple.updateSignature(signature, ADMIN, ElementType.USER)
                            newPermissionTuples.add(newPermissionTuple)
                        }


                        /** Get the PermissionTuples of all other roles which can access the current file */
                        val othersPermissionTuples = storageDAO.getPermissionTuples(
                            fileName = fileName, roleNameToExclude = roleName,
                            symKeyVersionNumber = latestFileVersionNumber,
                            offset = 0, limit = NO_LIMIT,
                        )

                        /** Update the PermissionTuples */
                        for (currentTuple in othersPermissionTuples) {
                            verifyTupleSignature(currentTuple)

                            val roleAsymEncPublicKeyBytes = storageDAO.getPublicKey(
                                name = currentTuple.roleName,
                                elementType = ElementType.ROLE,
                                asymKeyType = AsymKeysType.ENC,
                            )
                            val roleAsymEncPublicKey = crypto.recreateAsymKeys(
                                asymPublicKeyBytes = roleAsymEncPublicKeyBytes,
                                type = AsymKeysType.ENC,
                            ).public
                            val tuplesAsymKey = crypto.encryptSymKey(roleAsymEncPublicKey, newSymKey)

                            // finally, create the new permission tuple
                            val newPermissionTuple = PermissionTuple(
                                roleName = currentTuple.roleName, fileName = fileName,
                                roleVersionNumber = currentTuple.roleVersionNumber,
                                symKeyVersionNumber = latestFileVersionNumber!! + 1,
                                permission = currentTuple.permission,
                                encryptedSymKey = tuplesAsymKey,
                                roleToken = currentTuple.roleToken, fileToken = fileToken!!,
                            )
                            val signature =
                                crypto.createSignature(newPermissionTuple.getBytesForSignature(),
                                    user.asymSigKeys!!.private)
                            newPermissionTuple.updateSignature(signature, ADMIN, ElementType.USER)
                            newPermissionTuples.add(newPermissionTuple)
                        }

                        storageDAO.incrementSymEncVersionNumberByOne(fileName)
                    }
                }

                val deletePermissionTuplesCode =
                    storageDAO.deletePermissionTuples(roleName = roleName, roleVersionNumber = oldRoleVersionNumber)
                if (deletePermissionTuplesCode != OutcomeCode.CODE_000_SUCCESS) {
                    throw Exception(deletePermissionTuplesCode.toString())
                }
                val addPermissionTupleCode = storageDAO.addPermissionTuples(newPermissionTuples)
                if (addPermissionTupleCode != OutcomeCode.CODE_000_SUCCESS) {
                    throw Exception(endOfMethod(addPermissionTupleCode).toString())
                }
            }
            if (storageDAO.updateRoleAsymKeys(
                    roleName = roleName,
                    newAsymEncPublicKey = newAsymEncKeys.public, newAsymSigPublicKey = newAsymSigKeys.public
                ) != OutcomeCode.CODE_000_SUCCESS
            ) {
                throw Exception("AAAAA")
            }
        }

        if (endOfMethod(OutcomeCode.CODE_000_SUCCESS) != OutcomeCode.CODE_000_SUCCESS) {
            throw Exception("BBBB")
        }
        return MetricTimes(first, second-third, third)
    }
    
    private fun utility_revokeReadPermission(roleName: String, fileName: String): OutcomeCode {

        /** Guard clauses */
        if (roleName.isBlank() || fileName.isBlank()) {
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }
        val storageDAO = MMMySQL(CoreObject.CoreParametersCLOUD.mmParametersMySQL)
        val crypto = CoreObject.crypto
        val user = CoreObject.user

        /** Lock the status of the metadata */
        val lockCode = storageDAO.lock()
        if (lockCode != OutcomeCode.CODE_000_SUCCESS) {
            return lockCode
        }

        // fetch the permission tuples related to the given role so to remove the 'Write' permission from each tuple
        val permissionTuplesToUpdate = storageDAO.getPermissionTuples(roleName = roleName, fileName = fileName, offset = 0, limit = NO_LIMIT)

        if (permissionTuplesToUpdate.isEmpty()) {
            return endOfMethod(OutcomeCode.CODE_008_PERMISSIONTUPLE_NOT_FOUND)
        }

        for (permissionTupleToUpdate in permissionTuplesToUpdate) {
            verifyTupleSignature(permissionTupleToUpdate)

            if (permissionTupleToUpdate.permission == PermissionType.READ) {
                return endOfMethod(OutcomeCode.CODE_016_INVALID_PERMISSION)
            }

            // create a new permission tuple equal to the old tuple, except for the permission
            val newPermissionTuple = PermissionTuple(
                roleName = roleName, fileName = fileName,
                roleVersionNumber = permissionTupleToUpdate.roleVersionNumber,
                permission = PermissionType.READ,
                encryptedSymKey = permissionTupleToUpdate.encryptedSymKey,
                symKeyVersionNumber = permissionTupleToUpdate.symKeyVersionNumber,
                roleToken = permissionTupleToUpdate.roleToken,
                fileToken = permissionTupleToUpdate.fileToken
            )
            val signature =
                crypto.createSignature(newPermissionTuple.getBytesForSignature(), user.asymSigKeys!!.private)
            newPermissionTuple.updateSignature(signature, ADMIN, ElementType.USER)

            val updateCode = storageDAO.updatePermissionTuple(newPermissionTuple)
            if (updateCode != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(updateCode)
            }
        }
        return endOfMethod(OutcomeCode.CODE_000_SUCCESS)
    }
    
    private fun utility_revokeAllPermission(roleName: String, fileName: String): OutcomeCode {

        /** Guard clauses */
        if (roleName.isBlank() || fileName.isBlank()) {
            return OutcomeCode.CODE_020_INVALID_PARAMETER
        }
        if (roleName == ADMIN) {
            return OutcomeCode.CODE_022_ADMIN_CANNOT_BE_MODIFIED
        }
        val storageDAO = MMMySQL(CoreObject.CoreParametersCLOUD.mmParametersMySQL)
        val crypto = CoreObject.crypto
        val user = CoreObject.user

        /** Lock the status of the metadata */
        val lockCode = storageDAO.lock()
        if (lockCode != OutcomeCode.CODE_000_SUCCESS) {
            return lockCode
        }

        // we have to delete the permission tuples related to the role, as the role should
        // not have access to the symmetric key anymore. Then, we create a new symmetric key,
        // in case a user from the role cached the key
        val deletePermissionTupleCode = storageDAO.deletePermissionTuples(
            roleName = roleName, fileName = fileName
        )
        if (deletePermissionTupleCode != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(deletePermissionTupleCode)
        }

        val newSymKey = crypto.generateSymKey()
        val fileLatestVersionNumber = storageDAO.getVersionNumber(
            name = fileName,
            elementType = ElementType.FILE,
        )

        // get the latest permission tuples of other roles, as we have
        // to update the symmetric key and replace it with the new one
        val latestPermissionTuples = storageDAO.getPermissionTuples(
            fileName = fileName, symKeyVersionNumber = fileLatestVersionNumber,
            offset = 0, limit = NO_LIMIT,
        )

        for (latestPermissionTuple in latestPermissionTuples) {
            verifyTupleSignature(latestPermissionTuple)

            val roleEncPublicKeyBytes = storageDAO.getPublicKey(
                name = latestPermissionTuple.roleName,
                elementType = ElementType.ROLE,
                asymKeyType = AsymKeysType.ENC,
            )
            val roleEncPublicKey = crypto.recreateAsymKeys(
                asymPublicKeyBytes = roleEncPublicKeyBytes,
                type = AsymKeysType.ENC
            ).public
            val encryptedNewSymKey = crypto.encryptSymKey(roleEncPublicKey, newSymKey)

            // create the new permission tuple with the updated key and version number
            val newPermissionTuple = PermissionTuple(
                roleName = latestPermissionTuple.roleName, fileName = latestPermissionTuple.fileName,
                roleVersionNumber = latestPermissionTuple.roleVersionNumber,
                permission = latestPermissionTuple.permission,
                symKeyVersionNumber = latestPermissionTuple.symKeyVersionNumber + 1,
                encryptedSymKey = encryptedNewSymKey,
                roleToken = latestPermissionTuple.roleToken,
                fileToken = latestPermissionTuple.fileToken,
            )
            val signature =
                crypto.createSignature(newPermissionTuple.getBytesForSignature(), user.asymSigKeys!!.private)
            newPermissionTuple.updateSignature(signature, ADMIN, ElementType.USER)

            val updateCode = storageDAO.addPermissionTuples(HashSet<PermissionTuple>().apply { add(newPermissionTuple) })
            if (updateCode != OutcomeCode.CODE_000_SUCCESS) {
                return endOfMethod(updateCode)
            }
        }

        val incrementCode = storageDAO.incrementSymEncVersionNumberByOne(fileName)
        if (incrementCode != OutcomeCode.CODE_000_SUCCESS) {
            return endOfMethod(incrementCode)
        }
        return endOfMethod(OutcomeCode.CODE_000_SUCCESS)
    }
    
    private fun verifyTupleSignature(tuple: Tuple) {
        val storageDAO = MMMySQL(CoreObject.CoreParametersCLOUD.mmParametersMySQL)
        if (tuple.signerType == ElementType.USER && tuple.signer == CoreObject.user.name) {
            CoreObject.crypto.verifySignature(
                signature = tuple.signature!!,
                bytes = tuple.getBytesForSignature(),
                verifyingKey = CoreObject.user.asymSigKeys!!.public
            )
        }
        else {
            val asymSigPublicKeyBytes = storageDAO.getPublicKey(
                token = tuple.signer,
                elementType = tuple.signerType!!,
                asymKeyType = AsymKeysType.SIG,
            )
            val asymSigPublicKey = CoreObject.crypto.recreateAsymKeys(
                asymPublicKeyBytes = asymSigPublicKeyBytes,
                type = AsymKeysType.SIG
            ).public
            CoreObject.crypto.verifySignature(tuple.signature!!, tuple.getBytesForSignature(), asymSigPublicKey)
        }
    }
    
    private fun endOfMethod(code: OutcomeCode): OutcomeCode {
        val storageDAO = MMMySQL(CoreObject.CoreParametersCLOUD.mmParametersMySQL)
        return if (code == OutcomeCode.CODE_000_SUCCESS) {
            val unlockCode = storageDAO.unlock()
            if (unlockCode != OutcomeCode.CODE_000_SUCCESS) {
                unlockCode
            } else {
                code
            }
        } else {
            val rollbackCode = storageDAO.rollback()
            if (rollbackCode != OutcomeCode.CODE_000_SUCCESS) {
                rollbackCode
            } else {
                code
            }
        }
    }

    private fun utility_getTimeCG(): Long {
        var totalGarbageCollections = 0L
        var garbageCollectionTime = 0L

        ManagementFactory.getGarbageCollectorMXBeans().forEach {
            val count = it.collectionCount
            if (count >= 0) {
                totalGarbageCollections += count
            }

            val time = it.collectionTime
            if (time >= 0) {
                garbageCollectionTime += time;
            }
        }

        //println("Total Garbage Collections: $totalGarbageCollections")
        //println("Total Garbage Collection Time (ms): $garbageCollectionTime")

        return garbageCollectionTime
    }

    data class MetricTimes(val first: Long, val second: Long, val third: Long)
 */
}

