package eu.fbk.st.cryptoac.view.components.custom

import csstype.Display
import csstype.None.Companion.none
import csstype.TextAlign
import csstype.px
import emotion.react.css
import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.model.unit.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.dm.cryptoac.DMServiceCryptoACParameters
import eu.fbk.st.cryptoac.dm.mqtt.DMServiceMQTTParameters
import eu.fbk.st.cryptoac.dm.DMServiceParameters
import eu.fbk.st.cryptoac.dm.DMType
import eu.fbk.st.cryptoac.ac.*
import eu.fbk.st.cryptoac.ac.dynsec.ACServiceRBACDynSecParameters
import eu.fbk.st.cryptoac.ac.opa.ACServiceRBACOPAParameters
import eu.fbk.st.cryptoac.ac.xacmlauthzforce.ACServiceRBACXACMLAuthzForceParameters
import eu.fbk.st.cryptoac.rm.cryptoac.RMServiceRBACCryptoACParameters
import eu.fbk.st.cryptoac.rm.RMServiceParameters
import eu.fbk.st.cryptoac.rm.RMType
import eu.fbk.st.cryptoac.mm.MMServiceParameters
import eu.fbk.st.cryptoac.mm.redis.MMServiceRedisParameters
import eu.fbk.st.cryptoac.mm.MMType
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreParametersRBAC
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.mm.mysql.MMServiceRBACMySQLParameters
import eu.fbk.st.cryptoac.view.components.icons.faChevronDown
import eu.fbk.st.cryptoac.view.components.icons.faChevronUp
import eu.fbk.st.cryptoac.view.components.icons.faCloudUploadAlt
import eu.fbk.st.cryptoac.view.components.materialui.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.serialization.decodeFromString
import mu.KotlinLogging
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.files.File
import org.w3c.files.FileReader
import org.w3c.files.get
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

private val logger = KotlinLogging.logger {}

external interface CryptoACEditProfileFormProps : Props {
    // TODO doc
    var handleDisplayAlertProp: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var handleChangeBackdropIsOpenProp: (Boolean) -> Unit
    var handleChangeCoreTypeProp: ((CoreType) -> Unit)?
    var handleChangeACTypeProp: ((ACType) -> Unit)?
    var handleChangeRMTypeProp: ((RMType) -> Unit)?
    var handleChangeMMTypeProp: ((MMType) -> Unit)?
    var handleChangeDMTypeProp: ((DMType) -> Unit)?
    var handleProfileWasCreatedOrModifiedProp: (CoreType) -> Unit
    var isCreatingNewProfileProp: Boolean
    var httpClientProp: HttpClient
    var usernameProp: String?
    var coreParametersProp: CoreParameters?
    var coreTypeProp: CoreType
    var rmTypeProp: RMType
    var mmTypeProp: MMType
    var dmTypeProp: DMType
    var acTypeProp: ACType
}
fun CryptoACEditProfileFormProps.calculateHashCode(): Int {
    var result = isCreatingNewProfileProp.hashCode()
    result = 31 * result + usernameProp.hashCode()
    result = 31 * result + coreParametersProp.hashCode()
    result = 31 * result + coreTypeProp.hashCode()
    result = 31 * result + rmTypeProp.hashCode()
    result = 31 * result + mmTypeProp.hashCode()
    result = 31 * result + dmTypeProp.hashCode()
    result = 31 * result + acTypeProp.hashCode()
    return result
}

data class CryptoACEditProfileFormState(
    /** Whether the component was just mounted */
    var justMountedState: Boolean = true,

    /** Hash of last props received */
    var propsHashState: Int = 0,

    /** The form fields of the edit profile form */
    var cryptoACFormFieldsState: List<List<CryptoACFormField>> = listOf(),

    /** Whether the edit profile form is visible or not */
    var editProfileFormIsOpenState: Boolean = true,
) : State

fun areEquals(
    props: CryptoACEditProfileFormProps,
    newProps: CryptoACEditProfileFormProps
): Boolean {
    if (props === newProps) return true
    if (props::class != newProps::class) return false

    if (props.isCreatingNewProfileProp != newProps.isCreatingNewProfileProp) return false
    if (props.coreParametersProp != newProps.coreParametersProp) return false
    if (props.coreTypeProp != newProps.coreTypeProp) return false
    if (props.usernameProp != newProps.usernameProp) return false
    if (props.rmTypeProp != newProps.rmTypeProp) return false
    if (props.mmTypeProp != newProps.mmTypeProp) return false
    if (props.dmTypeProp != newProps.dmTypeProp) return false
    if (props.acTypeProp != newProps.acTypeProp) return false

    return true
}

/**
 * Parse the content of the given profile [file] and update
 * the fields of the edit profile form accordingly
 */
suspend fun parseProfileFile(
    props: CryptoACEditProfileFormProps,
    file: File
): CoreParameters? = suspendCoroutine { continuation ->
    /** Only Json files are parsable at the moment */
    if (file.name.endsWith(".json")) {
        val reader = FileReader()
        reader.readAsText(file, "UTF-8")

        /** Once the file is loaded, read the content and decode the core parameters */
        reader.onload = { _ ->
            val fileContent = reader.result.toString()
            val parameters = myJson.decodeFromString<CoreParameters>(fileContent)
            continuation.resume(parameters)
        }
    } else {
        logger.warn { "The user did not provide a .json file for the profile" }
        props.handleDisplayAlertProp(OutcomeCode.CODE_040_MALFORMED_PROFILE, CryptoACAlertSeverity.WARNING)
    }
}

/**
 * Fill the fields of the edit profile form with the
 * given [parameters]. If the [parameters] do not
 * correspond to the currently selected services
 * (i.e., the RM, MM, DM and AC types), either force
 * the update of the services (if [forceTypesUpdate]
 * is true) or throw an error. If everything succeeds,
 * return true, else false
 */
fun updateFieldsFromParameters(
    props: CryptoACEditProfileFormProps,
    parameters: CoreParameters,
    forceTypesUpdate: Boolean,
): List<List<CryptoACFormField>>? {

    return try {

        val versionNumber = parameters.versionNumber
        val coreType = parameters.coreType
        val cryptoType = parameters.cryptoType
        val user = parameters.user

        logger.info { "Updating the fields of the edit profile form (core type is $coreType)" }

        /** Consistency checks */
        if (coreType != props.coreTypeProp) {
            throw UnsupportedOperationException(
                "Core type of parameters ($coreType) is different " +
                "from core type of properties (${props.coreTypeProp}"
            )
        }
        when (versionNumber) {
            1 -> {
                logger.info { "Version number of profile file is 1" }
            }
            else -> {
                throw UnsupportedOperationException("Version number $versionNumber is not supported")
            }
        }

        /** Acquire eventual RM parameters */
        val rmParameters = when (parameters) {
            is CoreParametersRBAC -> parameters.rmServiceParameters
            else -> null
        }
        if (rmParameters != null) {
            logger.info {
                "RM parameters type is ${rmParameters.rmType} " +
                "(RM type in props is ${props.rmTypeProp}"
            }
            if (rmParameters.rmType != props.rmTypeProp) {
                if (forceTypesUpdate) {
                    logger.info { "Forcing update of RM type" }
                    props.handleChangeRMTypeProp?.let { it(rmParameters.rmType) }
                    props.handleDisplayAlertProp(OutcomeCode.CODE_057_SERVICE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
                } else {
                    throw UnsupportedOperationException(
                        "RM type of file (${rmParameters.rmType}) is different from currently selected core type (${props.rmTypeProp}"
                    )
                }
            }
        } else {
            logger.info { "No RM parameters were given" }
        }

        /** Acquire eventual MM parameters */
        val mmParameters = when (parameters) {
            is CoreParametersRBAC -> parameters.mmServiceParameters
            else -> null
        }
        if (mmParameters != null) {
            logger.info {
                "MM parameters type is ${mmParameters.mmType} " +
                "(MM type in props is ${props.mmTypeProp}"
            }
            if (mmParameters.mmType != props.mmTypeProp) {
                if (forceTypesUpdate) {
                    logger.info { "Forcing update of MM type" }
                    props.handleChangeMMTypeProp?.let { it(mmParameters.mmType) }
                    props.handleDisplayAlertProp(OutcomeCode.CODE_057_SERVICE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
                } else {
                    throw UnsupportedOperationException(
                        "MM type of file (${mmParameters.mmType}) is different from currently selected core type (${props.mmTypeProp}"
                    )
                }
            }
        } else {
            logger.info { "No MM parameters were given" }
        }

        /** Acquire eventual DM parameters */
        val dmParameters = when (parameters) {
            is CoreParametersRBAC -> parameters.dmServiceParameters
            else -> null
        }
        if (dmParameters != null) {
            logger.info {
                "DM parameters type is ${dmParameters.dmType} " +
                    "(DM type in props is ${props.dmTypeProp}"
            }
            if (dmParameters.dmType != props.dmTypeProp) {
                if (forceTypesUpdate) {
                    logger.info { "Forcing update of DM type" }
                    props.handleChangeDMTypeProp?.let { it(dmParameters.dmType) }
                    props.handleDisplayAlertProp(OutcomeCode.CODE_057_SERVICE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
                } else {
                    throw UnsupportedOperationException(
                        "DM type of file (${dmParameters.dmType}) is different from currently selected core type (${props.dmTypeProp}"
                    )
                }
            }
        } else {
            logger.info { "No DM parameters were given" }
        }

        /** Acquire eventual AC parameters */
        val acParameters = when (parameters) {
            is CoreParametersRBAC -> parameters.acServiceParameters
            else -> null
        }
        if (acParameters != null) {
            logger.info {
                "AC parameters type is ${acParameters.acType} " +
                "(AC type in props is ${props.acTypeProp}"
            }
            if (acParameters.acType != props.acTypeProp) {
                if (forceTypesUpdate) {
                    logger.info { "Forcing update of AC type" }
                    props.handleChangeACTypeProp?.let { it(acParameters.acType) }
                    props.handleDisplayAlertProp(
                        OutcomeCode.CODE_057_SERVICE_TYPE_UPDATED,
                        CryptoACAlertSeverity.INFO
                    )
                } else {
                    throw UnsupportedOperationException(
                        "AC type of file (${acParameters.acType}) is different from currently selected core type (${props.acTypeProp}"
                    )
                }
            }
        } else {
            logger.info { "No AC parameters were given" }
        }

        getFieldsFromParameters(
            props,
            user, cryptoType,
            rmParameters,
            mmParameters,
            dmParameters,
            acParameters,
        )
    } catch (e: NullPointerException) {
        logger.warn { "NullPointerException, malformed .json profile file" }
        logger.warn { e }
        props.handleDisplayAlertProp(OutcomeCode.CODE_040_MALFORMED_PROFILE, CryptoACAlertSeverity.ERROR)
        null
    } catch (e: UnsupportedOperationException) {
        logger.warn { "UnsupportedOperationException, .json profile file have different types than requested" }
        logger.warn { e }
        props.handleDisplayAlertProp(OutcomeCode.CODE_061_WRONG_PARAMETERS_FOR_CORE, CryptoACAlertSeverity.WARNING)
        null
    }
}

/**
 * Submit and handle the callback for the edit profile form. It receives as input
 * the HTTPS [method], the [endpoint] (URL) and the [values] to add to the request
 */
fun submitEditProfileForm(
    props: CryptoACEditProfileFormProps,
    method: HttpMethod,
    endpoint: String,
    values: HashMap<String, String>
) {
    logger.info { "Submitting CryptoAC edit profile form, method $method, endpoint $endpoint" }

    try {
        val rmParameters = when (props.rmTypeProp) {
            RMType.RBAC_CRYPTOAC -> RMServiceRBACCryptoACParameters.fromMap(values)
            RMType.NONE -> null
        }
        val mmParameters = when (props.mmTypeProp) {
            MMType.RBAC_MYSQL, MMType.ABAC_MYSQL -> MMServiceRBACMySQLParameters.fromMap(
                parameters = values
            )
            MMType.RBAC_REDIS -> MMServiceRedisParameters.fromMap(
                parameters = values,
                mmType = MMType.RBAC_REDIS
            )
        }
        val dmParameters = when (props.dmTypeProp) {
            DMType.CRYPTOAC -> DMServiceCryptoACParameters.fromMap(values)
            DMType.MQTT -> DMServiceMQTTParameters.fromMap(values)
        }
        val acParameters = when (props.acTypeProp) {
            ACType.RBAC_XACML_AUTHZFORCE -> ACServiceRBACXACMLAuthzForceParameters.fromMap(values)
            ACType.RBAC_OPA -> ACServiceRBACOPAParameters.fromMap(values)
            ACType.RBAC_DYNSEC -> ACServiceRBACDynSecParameters.fromMap(values)
            ACType.NONE -> null
        }
        val user = User(
            name = values[SERVER.USERNAME]!!,
            isAdmin = values[SERVER.IS_ADMIN].toBoolean(),
        )
        val cryptoType = CryptoType.valueOf(values[SERVER.CRYPTO]!!)

        /** Create the core parameters object based on the core type */
        val parameters = when (props.coreTypeProp) {
            CoreType.RBAC_AT_REST -> {
                CoreParametersRBAC(
                    user = user,
                    coreType = CoreType.RBAC_AT_REST,
                    cryptoType = cryptoType,
                    rmServiceParameters = rmParameters!!,
                    mmServiceParameters = mmParameters,
                    dmServiceParameters = dmParameters,
                    acServiceParameters = acParameters as ACServiceRBACOPAParameters?
                )
            }
            CoreType.RBAC_MQTT -> {
                CoreParametersRBAC(
                    user = user,
                    coreType = CoreType.RBAC_MQTT,
                    cryptoType = cryptoType,
                    rmServiceParameters = null,
                    mmServiceParameters = mmParameters,
                    dmServiceParameters = dmParameters,
                    acServiceParameters = acParameters as ACServiceRBACDynSecParameters?
                )
            }
            CoreType.ABAC_AT_REST -> TODO()
            CoreType.ABAC_MQTT -> TODO()
        }

        if (method != HttpMethod.Post && method != HttpMethod.Patch) {
            logger.warn { "HTTP Method of edit profile form is neither Post nor Patch (it is $method)" }
            props.handleDisplayAlertProp(OutcomeCode.CODE_048_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
        }
        MainScope().launch {
            /** Send the HTTPS request */
            props.handleChangeBackdropIsOpenProp(true)
            val response: HttpResponse = if (method == HttpMethod.Post) {
                props.httpClientProp.post {
                    url(endpoint)
                    contentType(ContentType.Application.Json)
                    setBody(parameters as CoreParameters)
                }
            } else {
                props.httpClientProp.patch {
                    url(endpoint)
                    contentType(ContentType.Application.Json)
                    setBody(parameters as CoreParameters)
                }
            }
            val code: OutcomeCode = response.body()
            val status = response.status
            props.handleChangeBackdropIsOpenProp(false)

            if (status == HttpStatusCode.OK) {
                logger.info { "Response status is $status, code is $code" }
                props.handleDisplayAlertProp(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                props.handleProfileWasCreatedOrModifiedProp(props.coreTypeProp)
            } else {
                logger.warn { "Response status is $status, code is $code" }
                props.handleDisplayAlertProp(code, CryptoACAlertSeverity.ERROR)
            }
        }
    } catch (e: NullPointerException) {
        e.printStackTrace()
        logger.warn { "NullPointerException: probably not all fields of the edit profile form were filled" }
        props.handleDisplayAlertProp(OutcomeCode.CODE_019_MISSING_PARAMETERS, CryptoACAlertSeverity.WARNING)
    } catch (e: Error) {
        logger.error { "Error during edit profile (${e.message}), see console log for details" }
        console.log(e)
        props.handleDisplayAlertProp(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
    }
}

/**
 * Update the edit profile fields with the given [user], [cryptoType],
 * [rmParameters], [mmParameters], [dmParameters] and [acParameters]
 */
fun getFieldsFromParameters(
    props: CryptoACEditProfileFormProps,
    user: User? = null,
    cryptoType: CryptoType = CryptoType.SODIUM,
    rmParameters: RMServiceParameters? = null,
    mmParameters: MMServiceParameters? = null,
    dmParameters: DMServiceParameters? = null,
    acParameters: ACServiceParameters? = null,
): List<List<CryptoACFormField>> {

    logger.info { "Getting profile fields from parameters (core type is ${props.coreTypeProp})" }

    val fields = mutableListOf(
        listOf(
            CryptoACFormField(
                SERVER.USERNAME,
                SERVER.USERNAME,
                InputType.text,
                className = "darkTextField",
                defaultValue = user?.name,
                disabled = true,
            ),
            CryptoACFormField(
                SERVER.IS_ADMIN,
                SERVER.IS_ADMIN.replace("_", " "),
                InputType.checkBox,
                className = "darkTextField",
                defaultValue = user?.isAdmin.toString(),
                disabled = true,
            ),
            CryptoACFormField(
                SERVER.CRYPTO,
                SERVER.CRYPTO,
                InputType.select,
                options = CryptoType.values().map { it.toString() },
                className = "darkTextField",
                defaultValue = cryptoType.toString(),
                disabled = true,
            ),
        )
    )

    val rmType = rmParameters?.rmType ?: props.rmTypeProp
    logger.info { "RM type to use is $rmType" }
    fields.addAll(
        when (rmType) {
            RMType.RBAC_CRYPTOAC -> RMServiceRBACCryptoACParameters.toMap(
                rmParameters?.let { it as RMServiceRBACCryptoACParameters }
            )
            RMType.NONE -> listOf()
        }
    )

    val mmType = mmParameters?.mmType ?: props.mmTypeProp
    logger.info { "MM type to use is $mmType" }
    fields.addAll(
        when (mmType) {
            MMType.RBAC_MYSQL, MMType.ABAC_MYSQL -> MMServiceRBACMySQLParameters.toMap(
                mmParameters?.let { it as MMServiceRBACMySQLParameters }
            )
            MMType.RBAC_REDIS -> MMServiceRedisParameters.toMap(
                mmParameters?.let { it as MMServiceRedisParameters }
            )
        }
    )

    val dmType = dmParameters?.dmType ?: props.dmTypeProp
    logger.info { "DM type to use is $dmType" }
    fields.addAll(
        when (dmType) {
            DMType.CRYPTOAC -> DMServiceCryptoACParameters.toMap(
                dmParameters?.let { it as DMServiceCryptoACParameters }
            )
            DMType.MQTT -> DMServiceMQTTParameters.toMap(
                dmParameters?.let { it as DMServiceMQTTParameters }
            )
        }
    )

    val acType = acParameters?.acType ?: props.acTypeProp
    logger.info { "AC type to use is $acType" }
    fields.addAll(
        when (acType) {
            ACType.RBAC_XACML_AUTHZFORCE -> ACServiceRBACXACMLAuthzForceParameters.toMap(
                acParameters?.let { it as ACServiceRBACXACMLAuthzForceParameters }
            )
            ACType.RBAC_OPA -> ACServiceRBACOPAParameters.toMap(
                acParameters?.let { it as ACServiceRBACOPAParameters }
            )
            ACType.RBAC_DYNSEC -> ACServiceRBACDynSecParameters.toMap(
                acParameters?.let { it as ACServiceRBACDynSecParameters }
            )
            ACType.NONE -> listOf()
        }
    )

    return fields.toList()
}

// TODO doc
fun getStateFromProps(
    props: CryptoACEditProfileFormProps,
    oldState: CryptoACEditProfileFormState = CryptoACEditProfileFormState(),
): CryptoACEditProfileFormState {
    var copy = false
    val propsHash = props.calculateHashCode()
    if (oldState.justMountedState || oldState.propsHashState != propsHash) {
        logger.info { "CryptoACEditProfileForm is getting updated" }
        if (oldState.justMountedState) {
            logger.info { "(just mounted)" }
        } else {
            logger.info { "(old props hash ${oldState.propsHashState}" }
            logger.info { "(new props hash $propsHash" }
        }
        oldState.propsHashState = propsHash
        if (props.coreParametersProp != null) {
            logger.info { "Parameters were given, use them to update the fields" }
            updateFieldsFromParameters(
                props = props,
                props.coreParametersProp!!,
                forceTypesUpdate = props.isCreatingNewProfileProp
            )?.let {
                oldState.cryptoACFormFieldsState = it
            }
        } else {
            logger.info { "Parameters were not given, rely on properties" }
            oldState.cryptoACFormFieldsState = getFieldsFromParameters(props)
        }
        copy = true
    }
    oldState.justMountedState = false
    return if (copy) oldState.copy() else oldState
}

/** This component renders a form for sending API requests to the proxy */
val CryptoACEditProfileForm = FC<CryptoACEditProfileFormProps> { props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [CryptoACEditProfileFormState] for details
     */
    var state by useState(getStateFromProps(props))

    /** When the props change */
    useEffect(props) {
        state = getStateFromProps(props, state)
    }

    div {
        css {
            textAlign = TextAlign.center
            paddingTop = 10.px
            paddingBottom = 10.px
        }
        paper {

            /** The header with the title, the file upload option and the collapsable toggle icon */
            typography {
                variant = "h6"
                // id = "editProfile"
                component = "div"
                +"${if (props.isCreatingNewProfileProp) {
                    "Create"
                } else {
                    "Edit"
                }} or Upload Profile"

                iconButton {
                    color = "primary"
                    component = "label"
                    onClick = { event: Event ->
                        if (event.target is HTMLInputElement) {
                            (event.target as HTMLInputElement).value = ""
                        }
                    }
                    faCloudUploadAlt { }
                    input {
                        type = web.html.InputType.file
                        accept = ".json"
                        hidden = true
                        onChange = { event ->
                            logger.info { "Received upload configuration file event" }

                            MainScope().launch {
                                parseProfileFile(
                                    props = props,
                                    (event.target as HTMLInputElement).files!![0]!!
                                )?.let {
                                    updateFieldsFromParameters(
                                        props = props,
                                        parameters = it,
                                        forceTypesUpdate = props.isCreatingNewProfileProp
                                    )?.let {
                                        state.cryptoACFormFieldsState = it
                                    }
                                    state = state.copy()
                                }
                            }
                        }
                    }
                }
                div {
                    css {
                        display = Display.inline
                        float = csstype.Float.right
                        marginTop = 7.px
                        marginRight = 10.px
                    }
                    iconButton {
                        color = "primary"
                        component = "label"
                        size = "small"
                        children = createElement {
                            if (!state.editProfileFormIsOpenState) {
                                faChevronDown { }
                            } else {
                                faChevronUp { }
                            }
                        }!!
                        onClick = {
                            state = state.copy(editProfileFormIsOpenState = !state.editProfileFormIsOpenState)
                        }
                    }
                }
            }

            /** The edit profile form */
            div {
                css {
                    marginTop = 10.px
                    marginBottom = 10.px
                    marginRight = 10.px
                    marginLeft = 30.px
                    if (!state.editProfileFormIsOpenState) {
                        display = none
                    }
                }

                /** Render the edit profile form */
                CryptoACForm {
                    acceptDisabledElementsProp = !props.isCreatingNewProfileProp
                    handleDisplayAlertProp = props.handleDisplayAlertProp
                    handleSubmitEventProp = { method, endpoint, values, _: HashMap<String, File> ->
                        submitEditProfileForm(
                            props = props,
                            method = method,
                            endpoint = endpoint,
                            values = values
                        )
                        state = state.copy(editProfileFormIsOpenState = false)
                    }
                    methodProp = if (props.isCreatingNewProfileProp) {
                        HttpMethod.Post
                    } else {
                        HttpMethod.Patch
                    }
                    cryptoACFormFieldsProp = state.cryptoACFormFieldsState
                    submitButtonTextProp = "Edit Profile"
                    coreTypeProp = props.coreTypeProp
                    endpointProp = API.PROFILES
                }
            }
        }
    }
}
