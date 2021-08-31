package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.proxy.UserSession
import eu.fbk.st.cryptoac.implementation.ds.registerDSRoutes
import eu.fbk.st.cryptoac.implementation.rm.registerRMRoutes
import eu.fbk.st.cryptoac.proxy.registerProxyRoutes
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.serialization.*
import io.ktor.server.jetty.*
import io.ktor.sessions.*
import io.ktor.velocity.*
import mu.KotlinLogging
import org.apache.commons.cli.*
import org.apache.velocity.runtime.RuntimeConstants
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader
import java.io.File
import java.io.IOException

private val logger = KotlinLogging.logger {}

/** The key for the port parameter. */
const val PORT_KEY = "port"

/** The key for the proxy operation mode parameter. */
const val OM_PROXY = "operationModeProxy"

/** The key for the RM operation mode parameter. */
const val OM_RM = "operationModeRM"

/** The key for the DS operation mode parameter. */
const val OM_DS = "operationModeDS"

/** The key for the admin ID parameter.*/
const val ADMIN_KEY = "adminID"

/** The key for the name of the log file. */
const val LOGFILE_NAME_KEY = "logFileName"

/** The key for the cryptographic implementation. */
const val CRYPTO_KEY = "CryptographicImplementation"

/** (any mode) The path of the folder where to store everything that is needed by CryptoAC. */
const val ROOT_DIRECTORY_PATH = "server/"

/** (DS mode) The folder where to store uploaded files. Users cannot download from this folder. */
val UPLOAD_DIRECTORY: File = File("${ROOT_DIRECTORY_PATH}ds/upload")

/** (DS mode) The folder where to store files users can download. Users cannot upload in this folder. */
val DOWNLOAD_DIRECTORY: File = File("${ROOT_DIRECTORY_PATH}ds/download")

/** (proxy mode) The path of the folder where the proxy stores users' configuration data. */
const val USERS_PROFILE_DIRECTORY_PATH = "${ROOT_DIRECTORY_PATH}proxy/upload/"


/** (proxy mode) The static files (e.g., js, css, images) expiration time (in seconds). */
var staticFilesExpirationTime = 600L

/** (proxy mode) The expiration time for idling sessions (in seconds). */
var sessionExpirationTime = 300

/** (any mode) The port the server opens to receive requests. */
var serverPort = 7777

/** (any mode) The name of the log file. */
var logFileName = "CryptoAC.log"

/** (any mode) The name of the log file. */
var cryptoImplementation = CryptoType.JAVA

/** (any mode) The operation mode. */
var om: OperationMode = OperationMode.PROXY

data class User(val name: String, val surname: String)
/** Acquire the specified program arguments [args] and creates the server. */
// TODO altri parametri da passare: percorso ai certificati per SSL
fun main(args: Array<String>) {

    val options = Options()
    
    val portOption = Option("p", PORT_KEY, true,
        "The port the server will use to listen to connections [default is $serverPort]")
    portOption.isRequired = false
    options.addOption(portOption)

    val adminIDOption = Option("a", ADMIN_KEY, true, "The ID of the admin [default is $ADMIN]")
    adminIDOption.isRequired = false
    options.addOption(adminIDOption)

    val logFileNameOption = Option("l", LOGFILE_NAME_KEY, true,
    "The name of the log file [default is $logFileName]")
    logFileNameOption.isRequired = false
    options.addOption(logFileNameOption)

    val cryptoOption = Option("c", CRYPTO_KEY, true,
        "The name of the cryptographic implementation  [default is $cryptoImplementation]")
    cryptoOption.isRequired = false
    options.addOption(cryptoOption)

    val omOptionGroup = OptionGroup()
    omOptionGroup.isRequired = false

    val omOptionProxy = Option("op", OM_PROXY, false, "Run CryptoAC as a proxy")
    val omOptionRM = Option("or", OM_RM, false, "Run CryptoAC as a RM")
    val omOptionDS = Option("od", OM_DS, false, "Run CryptoAC as a DS")

    omOptionGroup.addOption(omOptionProxy)
    omOptionGroup.addOption(omOptionRM)
    omOptionGroup.addOption(omOptionDS)
    options.addOptionGroup(omOptionGroup)

    val parser = DefaultParser()

    /** Check and acquire the parameters. */
    val cmd: CommandLine = parser.parse(options, args)

    om = when {
        cmd.hasOption(OM_RM) -> OperationMode.RM
        cmd.hasOption(OM_DS) -> OperationMode.DS
        else -> OperationMode.PROXY
    }

    serverPort = getIntOption(cmd, PORT_KEY, serverPort, 1, 65535)
    //ADMIN = getStringOption(cmd, ADMIN_KEY, ADMIN)
    cryptoImplementation = CryptoType.valueOf(getStringOption(cmd, ADMIN_KEY, CryptoType.JAVA.toString()))

    val props = System.getProperties()
    if (cmd.hasOption(LOGFILE_NAME_KEY)) {
        logFileName = getStringOption(cmd, LOGFILE_NAME_KEY, logFileName)
        props.setProperty("logback.logFile.Name", logFileName)
        props.setProperty("logback.configurationFile", "logbackFile.xml")
    }
    else {
        props.setProperty("logback.configurationFile", "logbackConsole.xml")
    }

    logger.info { "Operation mode $om" }
    logger.info { "Admin ID $ADMIN" }

    EngineMain.main(args)
}

/** This module is called with the resources/application.conf file. */
fun Application.module(testing: Boolean = true) {
    logger.info { "Starting application module (testing $testing)" }
    val port = environment.config.property("ktor.deployment.port").getString()
    val sslPort = environment.config.property("ktor.deployment.sslPort").getString()
    logger.info { "port is $port, sslPort is $sslPort" }

    install(ContentNegotiation) {
        json()
    }
    install(Sessions) {
        /**
         * "storage = SessionStorageMemory()" implies that this session's data are kept
         * in memory and only a session ID is passed between the client and the server.
         */
        cookie<UserSession>("LOGIN_SESSION", storage = SessionStorageMemory()) {
            cookie.secure = true
            cookie.maxAgeInSeconds = 0
        }
    }
    install(Velocity) {
        setProperty(RuntimeConstants.RESOURCE_LOADERS, "classpath")
        setProperty("resource.loader.classpath.class", ClasspathResourceLoader::class.java.name)
    }

    /** Force HTTPS. */
    install(HttpsRedirect)

    // TODO check below CORS
    install(CORS) {
        method(HttpMethod.Get)
        method(HttpMethod.Post)
        method(HttpMethod.Delete)
        anyHost()
    }
    install(Compression) {
        gzip()
    }
    if (testing) {
        initializeProxy()
        initializeDS()
        registerProxyRoutes()
        registerRMRoutes()
        registerDSRoutes()
    }
    else {
        when (om) {
            OperationMode.PROXY -> {
                initializeProxy()
                registerProxyRoutes()
            }
            OperationMode.RM -> {
                registerRMRoutes()
            }
            OperationMode.DS -> {
                initializeDS()
                registerDSRoutes()
            }
        }
    }
}





/**
 * Acquire the [key] integer option, checking it is within the [minValue] and the [maxValue].
 * If the option was not given, return the [defaultValue].
 */
fun getIntOption(cmd: CommandLine, key: String, defaultValue: Int, minValue: Int, maxValue: Int): Int {
    var valueToReturn = defaultValue
    val optionAsString = cmd.getOptionValue(key)
    if (optionAsString != null) valueToReturn = optionAsString.toInt()
    require(!(valueToReturn < minValue || valueToReturn > maxValue)) {
        "given option $valueToReturn is not between the interval $minValue and $maxValue"
    }
    return valueToReturn
}

/**
 * Acquire the [key] integer option, checking it is not blank.
 * If the option was not given, return the [defaultValue].
 */
fun getStringOption(cmd: CommandLine, key: String, defaultValue: String): String {
    var valueToReturn = defaultValue
    val option = cmd.getOptionValue(key)
    if (option != null) valueToReturn = option
    require(valueToReturn.isNotBlank()) { "given string is blank" }
    return valueToReturn
}

/** Initialize the data structures for the proxy to operate properly. */
fun initializeProxy() {
    val usersProfileDirectory = File(USERS_PROFILE_DIRECTORY_PATH)
    if (!usersProfileDirectory.exists()) {
        if (!usersProfileDirectory.mkdirs()) {
            val message = "unable to create directory ${usersProfileDirectory.absolutePath}"
            logger.error(message)
            throw IOException(message)
        }
    }
}

/** Initialize the data structures for the DS to operate properly. */
fun initializeDS() {
    if (!UPLOAD_DIRECTORY.exists()) {
        if (!UPLOAD_DIRECTORY.mkdirs()) {
            val message = "unable to create directory ${UPLOAD_DIRECTORY.absolutePath}"
            logger.error(message)
            throw IOException(message)
        }
    }
    if (!DOWNLOAD_DIRECTORY.exists()) {
        if (!DOWNLOAD_DIRECTORY.mkdirs()) {
            val message = "unable to create directory ${DOWNLOAD_DIRECTORY.absolutePath}"
            logger.error(message)
            throw IOException(message)
        }
    }
}


/**
 * A CryptoAC instance has one operation mode among the following:
 * - PROXY: the instance runs as a proxy;
 * - RM: the instance runs as a RM;
 * - DS: the instance runs as a DS.
 */
enum class OperationMode {
    PROXY, RM, DS,
}