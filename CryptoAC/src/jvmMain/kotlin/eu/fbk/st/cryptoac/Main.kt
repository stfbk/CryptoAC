package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.internalError
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.implementation.dm.registerDMRoutes
import eu.fbk.st.cryptoac.implementation.rm.registerRMRoutes
import eu.fbk.st.cryptoac.server.UserSession
import eu.fbk.st.cryptoac.server.registerCryptoACRoutes
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.serialization.*
import io.ktor.server.jetty.*
import io.ktor.sessions.*
import io.ktor.velocity.*
import io.ktor.websocket.*
import kotlinx.coroutines.delay
import mu.KotlinLogging
import org.apache.commons.cli.*
import org.apache.velocity.runtime.RuntimeConstants
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader
import java.io.File
import java.io.IOException
import java.io.InputStream
import java.nio.charset.Charset
import java.util.*


private val logger = KotlinLogging.logger {}

/** The key for the port parameter */
const val PORT_KEY = "port"

/** The key for the CryptoAC operation mode parameter */
const val OM_CRYPTOAC = "operationModeCryptoAC"

/** The key for the RM operation mode parameter */
const val OM_RM = "operationModeRM"

/** The key for the DM operation mode parameter */
const val OM_DM = "operationModeDM"

/** The key for the admin ID parameter */
const val ADMIN_KEY = "adminID"

/** The key for the name of the log file */
const val LOGFILE_NAME_KEY = "logFileName"

/** (any mode) The path of the folder where to store everything that is needed by CryptoAC */
const val ROOT_DIRECTORY_PATH = "server/"

/** (DM mode) The folder where to store uploaded files. Users cannot download from this folder */
val UPLOAD_DIRECTORY: File = File("${ROOT_DIRECTORY_PATH}dm/upload")

/** (DM mode) The folder where to store files users can download. Users cannot upload in this folder */
val DOWNLOAD_DIRECTORY: File = File("${ROOT_DIRECTORY_PATH}dm/download")

/** (CryptoAC mode) The path of the folder where CryptoAC stores users' configuration data */
const val USERS_PROFILE_DIRECTORY_PATH = "${ROOT_DIRECTORY_PATH}proxy/upload/"

/** (any mode) The port the server opens to receive requests */
var serverPort = 7777

/** (any mode) The name of the log file */
var logFileName = "CryptoAC.log"

/** (any mode) The operation mode */
var om: OperationMode = OperationMode.CRYPTOAC

/** Acquire the specified program arguments [args] and creates the server */
fun main(args: Array<String>) {

    // TODO security checks:
    //  - certificates for TLS
    //  - HSTS header
    //  - Content Security Policy header
    //  - brute force attacks
    //  - session time expiration (login cookie)?
    //  - static files time expiration?

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

    val omOptionGroup = OptionGroup()
    omOptionGroup.isRequired = false

    val omOptionCryptoAC = Option("op", OM_CRYPTOAC, false, "Run CryptoAC as CryptoAC")
    val omOptionRM = Option("or", OM_RM, false, "Run CryptoAC as an RM")
    val omOptionDM = Option("od", OM_DM, false, "Run CryptoAC as a DM")

    omOptionGroup.addOption(omOptionCryptoAC)
    omOptionGroup.addOption(omOptionRM)
    omOptionGroup.addOption(omOptionDM)
    options.addOptionGroup(omOptionGroup)

    val parser = DefaultParser()

    /** Check and acquire the parameters */
    val cmd: CommandLine = parser.parse(options, args)

    om = when {
        cmd.hasOption(OM_RM) -> OperationMode.RM
        cmd.hasOption(OM_DM) -> OperationMode.DM
        else -> OperationMode.CRYPTOAC
    }

    serverPort = getIntOption(cmd, PORT_KEY, serverPort, 1, 65535)
    //ADMIN = getStringOption(cmd, ADMIN_KEY, ADMIN)

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

/** This module is called with the resources/application.conf file */
fun Application.module() {
    logger.info { "Starting application module" }
    val port = environment.config.property("ktor.deployment.port").getString()
    val sslPort = environment.config.property("ktor.deployment.sslPort").getString()
    logger.info { "port is $port, sslPort is $sslPort" }

    install(ContentNegotiation) {
        json(json = myJson)
    }
    install(Sessions) {
        /**
         * "storage = SessionStorageMemory()" implies that this session's data are kept
         * in memory and only a session ID is passed between the client and the server
         */
        cookie<UserSession>("LOGIN_SESSION", storage = SessionStorageMemory()) {
            cookie.secure = true
            /** Age is 0 so cookie is treated as a session cookie */
            cookie.maxAgeInSeconds = 0
        }
    }
    install(Velocity) {
        setProperty(RuntimeConstants.RESOURCE_LOADERS, "classpath")
        setProperty("resource.loader.classpath.class", ClasspathResourceLoader::class.java.name)
    }

    /** Force HTTPS */
    install(HttpsRedirect)

    /** Respond appropriately to any failure state */
    install(StatusPages) {
        exception<Throwable> { cause ->
            logger.error { "Request to ${call.request.uri} resulted in exception: ${cause.message}" }
            logger.error { cause }
            internalError(
                call,
                OutcomeCode.CODE_049_UNEXPECTED.toString(),
                OutcomeCode.CODE_049_UNEXPECTED
            )
        }
    }

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
    when (om) {
        OperationMode.CRYPTOAC -> {
            install(WebSockets) {
                // TODO config web sockets, check ktor docs
            }
            initializeCryptoAC()
            registerCryptoACRoutes()
        }
        OperationMode.RM -> {
            registerRMRoutes()
        }
        OperationMode.DM -> {
            initializeDM()
            registerDMRoutes()
        }
    }
}





/**
 * Acquire the [key] integer option, checking it is within the [minValue] and the [maxValue].
 * If the option was not given, return the [defaultValue]
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
 * If the option was not given, return the [defaultValue]
 */
fun getStringOption(cmd: CommandLine, key: String, defaultValue: String): String {
    var valueToReturn = defaultValue
    val option = cmd.getOptionValue(key)
    if (option != null) valueToReturn = option
    require(valueToReturn.isNotBlank()) { "given string is blank" }
    return valueToReturn
}

/** Initialize the data structures for CryptoAC to operate properly */
fun initializeCryptoAC() {
    val usersProfileDirectory = File(USERS_PROFILE_DIRECTORY_PATH)
    if (!usersProfileDirectory.exists()) {
        if (!usersProfileDirectory.mkdirs()) {
            val message = "unable to create directory ${usersProfileDirectory.absolutePath}"
            logger.error(message)
            throw IOException(message)
        }
    }
}

/** Initialize the data structures for the DM to operate properly */
fun initializeDM() {
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
 * - CryptoAC: the instance runs as CryptoAC;
 * - RM: the instance runs as an RM;
 * - DM: the instance runs as a DM
 */
enum class OperationMode {
    CRYPTOAC, RM, DM,
}

/** Extension function to Base64-encode a byte array into a string */
fun ByteArray.encodeBase64(): String = Base64.getEncoder().encodeToString(this)

/** Extension function to Base64-decode a string into a byte array */
fun String.decodeBase64(): ByteArray = Base64.getDecoder().decode(this)

/** Extension function to get (byte array) input stream from a string */
fun String.inputStream(charset: Charset = Charsets.UTF_8): InputStream = this.toByteArray(charset).inputStream()

/**
 * Every [polling] milliseconds, check whether the [block] is verified
 * and return true when it is; if the block is not verified in the given
 * [timeout], return false.
 * Specify tail recursion to allow the function to be optimized into a loop
 */
tailrec suspend fun waitForCondition (timeout: Long = 5000, polling: Long = 100, block: () -> Boolean) : Boolean {
    if (timeout < 0) {
        return false
    }
    if (block.invoke()) {
        return true
    }
    delay(polling)
    return waitForCondition(timeout - polling, polling, block)
}
