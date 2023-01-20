package benchmarks

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.ac.dynsec.ACServiceRBACDynSec
import eu.fbk.st.cryptoac.core.CoreFactory
import eu.fbk.st.cryptoac.core.mqtt.CoreRBACMQTT

internal open class CoreMQTTRBACBenchmark : CoreRBACBenchmark() {

    override val core: CoreRBACMQTT =
        CoreFactory.getCore(Parameters.adminCoreRBACMQTTParameters) as CoreRBACMQTT
    private var processDocker: Process? = null

    override fun setUpTrial() {
        "./cleanAllAndBuild.sh".runCommand(TestUtilities.dir, hashSetOf("built_all_end_of_script"))
        processDocker = "./startCryptoAC_ALL.sh \"cryptoac_redis cryptoac_proxy cryptoac_mosquitto_dynsec\"".runCommand(
            workingDir = TestUtilities.dir,
            endStrings = hashSetOf(
                "Started ServerConnector",
                "Server initialized",
                "mosquitto version 2.0.14 running",
            )
        )
    }

    override fun tearDownTrial() {
        processDocker!!.destroy()
        Runtime.getRuntime().exec("kill -SIGINT ${processDocker!!.pid()}")
        "./cleanAll.sh".runCommand(
            workingDir = TestUtilities.dir,
            endStrings = hashSetOf("clean_all_end_of_script")
        )
    }

    override fun setUpIteration() {
        assert(core.configureServices() == OutcomeCode.CODE_000_SUCCESS)
    }

    override fun tearDownIteration() {
        core.subscribedTopicsKeysAndMessages.clear()
        TestUtilities.resetACServiceRBACDynSEC(core.ac as ACServiceRBACDynSec?)
        TestUtilities.resetDMServiceRBACMQTT(core.dm)
        TestUtilities.resetMMServiceRBACRedis()
    }
}
