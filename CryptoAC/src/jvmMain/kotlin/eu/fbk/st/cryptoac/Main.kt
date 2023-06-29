package eu.fbk.st.cryptoac

import eu.fbk.st.cryptoac.Constants.ADMIN
import eu.fbk.st.cryptoac.ResponseRoutes.Companion.internalError
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.dm.cryptoac.registerDMRoutes
import eu.fbk.st.cryptoac.rm.cryptoac.registerRMRoutes
import eu.fbk.st.cryptoac.server.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.jetty.*
import io.ktor.server.plugins.compression.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.plugins.httpsredirect.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.request.*
import io.ktor.server.sessions.*
import io.ktor.server.velocity.*
import io.ktor.server.websocket.*
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
import kotlin.random.Random

private val logger = KotlinLogging.logger {}



/** Options to configure Ktor (application.conf) */
/** The key for the HTTPs port parameter */
const val PORT_KEY = "port"

/** The key for the keystore */
const val KEYSTORE_KEY = "keystore"

/** The key for the key alias */
const val KEY_ALIAS_KEY = "key_alias"

/** The key for the keystore password */
const val KEYSTORE_PASSWORD_KEY = "keystore_password"

/** The key for the password of the private key  */
const val KEYSTORE_PRIVATE_KEY_PASSWORD_KEY = "keystore_private_key_password"



/** Options to configure CryptoAC */
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

/** The key for the log level */
const val LOGLEVEL_KEY = "logLevel"



/** CryptoAC constant values */
/** (any mode) The path of the folder where to store everything that is needed by CryptoAC */
const val ROOT_DIRECTORY_PATH = "server/"

/** (CryptoAC mode) The path of the folder where CryptoAC stores users' configuration data */
const val USERS_PROFILE_DIRECTORY_PATH = "${ROOT_DIRECTORY_PATH}proxy/upload/"

/** (DM mode) The folder where to store uploaded files. Users cannot download from this folder */
val UPLOAD_DIRECTORY: File = File("${ROOT_DIRECTORY_PATH}dm/upload")

/** (DM mode) The folder where to store files users can download. Users cannot upload in this folder */
val DOWNLOAD_DIRECTORY: File = File("${ROOT_DIRECTORY_PATH}dm/download")



/** Ktor and CryptoAC options with constant values */
/** (any mode) The HTTPS port the server opens to receive requests */
var httpsPort: Int = 8443

/** (any mode) The keystore */
var keystore: String = "server/temporary.jks"

/** (any mode) The key alias */
var keyAlias: String = "alias"

/** (any mode) The password of the keystore */
var keyStorePassword: String = "password"

/** (any mode) The password of the private key */
var keyStorePrivateKeyPassword: String = "password"

/** (any mode) The name of the log file */
var logFileName = "CryptoAC.log"

/** (any mode) The log level */
var logLevel = "info"

/** (any mode) The operation mode */
var om: OperationMode = OperationMode.CRYPTOAC



/** Acquire the specified program arguments [args] and creates the server */
fun main(args: Array<String>) {

    // TODO before using CryptoAC in a real environment, several
    //  additional security checks must be considered, e.g.:
    //  - certificates for TLS
    //  - HSTS header
    //  - Content Security Policy header
    //  - brute force attacks
    //  - session time expiration (login cookie)?
    //  - static files time expiration?
    //  - checking the configuration of Ktor (engine, web sockets, logs, metrics)
    //  - check the CORS policy

    val options = Options()

    val portOption = Option(
        "p", PORT_KEY, true,
        "The HTTPS port the server will use to listen to connections [default is $httpsPort]"
    )
    portOption.isRequired = false
    options.addOption(portOption)

    val keystoreOption = Option(
        "s", KEYSTORE_KEY, true,
        "The keystore [default is $keystore]"
    )
    keystoreOption.isRequired = false
    options.addOption(keystoreOption)

    val keyAliasOption = Option(
        "i", KEY_ALIAS_KEY, true,
        "The key alias [default is $keyAlias]"
    )
    keyAliasOption.isRequired = false
    options.addOption(keyAliasOption)

    val keystorePasswordOption = Option(
        "w", KEYSTORE_PASSWORD_KEY, true,
        "The password of the keystore [default is $keyStorePassword]"
    )
    keystorePasswordOption.isRequired = false
    options.addOption(keystorePasswordOption)

    val keystorePrivateKeyPasswordOption = Option(
        "r", KEYSTORE_PRIVATE_KEY_PASSWORD_KEY, true,
        "The password of the private key [default is $keyStorePrivateKeyPassword]"
    )
    keystorePrivateKeyPasswordOption.isRequired = false
    options.addOption(keystorePrivateKeyPasswordOption)

    val adminIDOption = Option(
        "a", ADMIN_KEY, true,
        "The ID of the admin [default is $ADMIN]"
    )
    adminIDOption.isRequired = false
    options.addOption(adminIDOption)

    val logFileNameOption = Option(
        "l", LOGFILE_NAME_KEY, true,
        "The name of the log file [default is $logFileName]"
    )
    logFileNameOption.isRequired = false
    options.addOption(logFileNameOption)

    val logLevelOption = Option(
        "k", LOGLEVEL_KEY, true,
        "The log level [default is $logLevel]"
    )
    logLevelOption.isRequired = false
    options.addOption(logLevelOption)

    val omOptionGroup = OptionGroup()
    omOptionGroup.isRequired = false

    val omOptionCryptoAC = Option(
        "op",
        OM_CRYPTOAC,
        false,
        "Run CryptoAC as a proxy"
    )

    val omOptionRM = Option(
        "or",
        OM_RM,
        false,
        "Run CryptoAC as an RM"
    )

    val omOptionDM = Option(
        "od",
        OM_DM,
        false,
        "Run CryptoAC as a DM"
    )

    omOptionGroup.addOption(omOptionCryptoAC)
    omOptionGroup.addOption(omOptionRM)
    omOptionGroup.addOption(omOptionDM)
    options.addOptionGroup(omOptionGroup)

    val parser = DefaultParser()

    /** Check and acquire the parameters */
    val cmd: CommandLine = parser.parse(options, args)
    val props = System.getProperties()

    // TODO currently, cannot pass options to configure logger (i.e., properties below are seemingly ignored)
    logLevel = getStringOption(cmd, LOGLEVEL_KEY, logLevel)
    props.setProperty("logback.logLevel", logLevel.uppercase())
    if (cmd.hasOption(LOGFILE_NAME_KEY)) {
        logFileName = cmd.getOptionValue(LOGFILE_NAME_KEY) ?: logFileName
        props.setProperty("logback.logFile.Name", logFileName)
        props.setProperty("logback.configurationFile", "logbackOnFile.xml")
    } else {
        props.setProperty("logback.configurationFile", "logbackOnConsole.xml")
    }

    om = when {
        cmd.hasOption(OM_RM) -> OperationMode.RM
        cmd.hasOption(OM_DM) -> OperationMode.DM
        else -> OperationMode.CRYPTOAC
    }
    logger.info { "Operation mode $om" }

    httpsPort = getIntOption(cmd, PORT_KEY, httpsPort, 1, 65535)
    props.setProperty("ktoAtRuntime.deployment.port", httpsPort.toString())
    logger.info { "HTTPS port is $httpsPort" }

    keystore = getStringOption(cmd, KEYSTORE_KEY, keystore)
    props.setProperty("ktoAtRuntime.security.keyStore", keystore)
    logger.info { "Keystore is $keystore" }

    keyAlias = getStringOption(cmd, KEY_ALIAS_KEY, keyAlias)
    props.setProperty("ktoAtRuntime.security.keyAlias", keyAlias)
    logger.info { "Key alias is $keyAlias" }

    keyStorePassword = getStringOption(cmd, KEYSTORE_PASSWORD_KEY, keyStorePassword)
    props.setProperty("ktoAtRuntime.security.keyStorePassword", keyStorePassword)
    logger.info { "Do not logging keystore password" }

    keyStorePrivateKeyPassword = getStringOption(cmd, KEYSTORE_PRIVATE_KEY_PASSWORD_KEY, keyStorePrivateKeyPassword)
    props.setProperty("ktoAtRuntime.security.privateKeyPassword", keyStorePrivateKeyPassword)
    logger.info { "Do not logging private key password" }

    // TODO what to do with this? we should sync it everywhere (or leave it
    //  to default value and highlight in the documentation that, if modified,
    //  it should be updated everywhere
    // ADMIN = getStringOption(cmd, ADMIN_KEY, ADMIN)
    logger.info { "Admin ID $ADMIN" }

    EngineMain.main(args)
}

/** This module is called with the resources/application.conf file */
fun Application.module() {
    logger.info { "Starting application module" }

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

    /** Force HTTPS (the server already offers only the HTTPS port, but do it anyway) */
    install(HttpsRedirect)

    /** Respond appropriately to any failure state */
    install(StatusPages) {
        exception<Throwable> { call, cause ->
            logger.error { "Request to ${call.request.uri} resulted in exception: ${cause.message}" }
            cause.printStackTrace()
            logger.error { cause }

            // TODO "ScopeCoroutine was cancelled" is the message in the exception thrown
            //  when closing a websocket. We need to find a way to not throw
            //  an exception when closing a websocket
            if (cause.message != "ScopeCoroutine was cancelled") {
                internalError(
                    call,
                    OutcomeCode.CODE_049_UNEXPECTED.toString(),
                    OutcomeCode.CODE_049_UNEXPECTED
                )
            }
        }
    }

    install(CORS) {
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)
        allowMethod(HttpMethod.Delete)
        anyHost()
    }
    install(Compression) {
        gzip()
    }
//    intercept(ApplicationCallPipeline.Plugins) {
//        logAPI(call)
//    }
    when (om) {
        OperationMode.CRYPTOAC -> {
            install(WebSockets) {
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

    logger.warn { "Routes were registered, CryptoAC is up" }
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
            logger.error { message }
            throw IOException(message)
        }
    }
}

/** Initialize the data structures for the DM to operate properly */
fun initializeDM() {
    if (!UPLOAD_DIRECTORY.exists()) {
        if (!UPLOAD_DIRECTORY.mkdirs()) {
            val message = "unable to create directory ${UPLOAD_DIRECTORY.absolutePath}"
            logger.error { message }
            throw IOException(message)
        }
    }
    if (!DOWNLOAD_DIRECTORY.exists()) {
        if (!DOWNLOAD_DIRECTORY.mkdirs()) {
            val message = "unable to create directory ${DOWNLOAD_DIRECTORY.absolutePath}"
            logger.error { message }
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
tailrec suspend fun waitForCondition(timeout: Long = 5000, polling: Long = 100, block: () -> Boolean): Boolean {
    if (timeout < 0) {
        return false
    }
    if (block.invoke()) {
        return true
    }
    delay(polling)
    return waitForCondition(timeout - polling, polling, block)
}

/** Generate a random string */
fun generateRandomString(size: Int = 20): String {
    val charPool: List<Char> = ('a'..'z') + ('A'..'Z') + ('0'..'9')
    return (1..size)
        .map { Random.nextInt(0, charPool.size) }
        .map(charPool::get)
        .joinToString("")
}