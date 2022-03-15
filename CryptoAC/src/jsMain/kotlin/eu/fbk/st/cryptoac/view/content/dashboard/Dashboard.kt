package eu.fbk.st.cryptoac.view.content.dashboard

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.API.PROFILES
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.implementation.dm.*
import eu.fbk.st.cryptoac.implementation.mm.*
import eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceCryptoACParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceParameters
import eu.fbk.st.cryptoac.implementation.rm.RMType
import eu.fbk.st.cryptoac.view.baseURL
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.icons.faChevronDown
import eu.fbk.st.cryptoac.view.components.icons.faChevronUp
import eu.fbk.st.cryptoac.view.components.icons.faCloudUploadAlt
import eu.fbk.st.cryptoac.view.components.materialui.iconButton
import eu.fbk.st.cryptoac.view.components.materialui.paper
import eu.fbk.st.cryptoac.view.components.materialui.typography
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.html.hidden
import kotlinx.html.js.onChangeFunction
import kotlinx.serialization.decodeFromString
import mu.KotlinLogging
import org.w3c.dom.HTMLInputElement
import org.w3c.files.File
import org.w3c.files.FileReader
import org.w3c.files.get
import react.*
import react.dom.attrs
import react.dom.input
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface DashboardProps : Props {
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var handleChangeUserHasProfile: (Boolean) -> Unit
    var handleChangeUserIsAdmin: (Boolean) -> Unit
    var handleDisplayAlert: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var handleChangeRMType: (RMType) -> Unit
    var handleChangeMMType: (MMType) -> Unit
    var handleChangeDMType: (DMType) -> Unit
    var userHasProfile: Boolean
    var userIsLogged: Boolean
    var userIsAdmin: Boolean
    var httpClient: HttpClient
    var coreType: CoreType
    var rmType: RMType
    var mmType: MMType
    var dmType: DMType
    var username: String?
    var tables: MutableList<String>
}

external interface DashboardState : State {
    /** Whether the edit profile form is visible or not */
    var editProfileFormIsOpen: Boolean

    /** The form fields of the edit profile form */
    var cryptoACFormFields: List<List<CryptoACFormField>>
}

/**
 * The Dashboard React component, consisting of:
 * 1. The edit profile form;
 * 2. The specific dashboard for tables and
 *    data of the chosen core type
 */
class Dashboard: RComponent<DashboardProps, DashboardState>() {

    override fun RBuilder.render() {

        /** 1. The edit profile */
        styledDiv {
            css {
                textAlign = TextAlign.center
                paddingTop = 10.px
                paddingBottom = 10.px
            }
            paper {

                /** 1.1. The header with the title, the file upload option and the collapsable toggle icon */
                typography {
                    attrs {
                        variant = "h6"
                        id = "editProfile"
                        component = "div"
                    }
                    +"Edit or Upload Profile"
                    iconButton {
                        attrs {
                            color = "primary"
                            component = "label"
                        }
                        child(createElement { faCloudUploadAlt { } }!!)
                        input {
                            attrs {
                                type = kotlinx.html.InputType.file
                                accept = ".json"
                                hidden = true
                                this.onChangeFunction = { event ->
                                    logger.info {"Received upload configuration file event" }
                                    parseProfileFile((event.target as HTMLInputElement).files!![0]!!)
                                }
                            }
                        }
                    }
                    styledDiv {
                        css {
                            display = Display.inline
                            float = Float.right
                            marginTop = 7.px
                            marginRight = 10.px
                        }
                        iconButton {
                            attrs {
                                color = "primary"
                                component = "label"
                                size = "small"
                                children = createElement { if (!state.editProfileFormIsOpen) {
                                    faChevronDown { }
                                } else {
                                    faChevronUp { }
                                }}!!
                                onClick = {
                                    setState {
                                        editProfileFormIsOpen = !editProfileFormIsOpen
                                    }
                                }
                            }
                        }
                    }
                }

                /** 1.2. The edit profile form */
                styledDiv {
                    css {
                        marginTop = 10.px
                        marginBottom = 10.px
                        marginRight = 10.px
                        marginLeft = 30.px
                        if (!state.editProfileFormIsOpen) {
                            display = Display.none
                        }
                    }

                    /** Render the edit profile form */
                    child(cryptoACForm {
                        attrs {
                            handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                            handleDisplayCryptoACAlert = props.handleDisplayAlert
                            handleSubmitEvent = { method, endpoint, values, _ ->
                                submitEditProfileForm(method, endpoint, values)
                            }
                            method = if (props.userHasProfile) {
                                HttpMethod.Patch
                            } else {
                                HttpMethod.Post
                            }
                            cryptoACFormFields = state.cryptoACFormFields
                            submitButtonText = "Edit Profile"
                            coreType = props.coreType
                            endpoint = PROFILES
                        }
                    })
                }
            }
        }

        // TODO automatically refresh users/roles/files tables after update
        // TODO secure passwords (e.g., salt+hash)
        /**
         * 2. The specific dashboard for tables and data of the
         * selected core type (if the user has a profile)
         */
        if (props.userHasProfile) {
            when (props.coreType) {
                CoreType.RBAC_CLOUD -> child(rbacCLOUDDashboard {
                    handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                    handleDisplayAlert = props.handleDisplayAlert
                    userIsAdmin = props.userIsAdmin
                    httpClient = props.httpClient
                    coreType = props.coreType
                })
                CoreType.RBAC_MQTT -> child(rbacMQTTDashboard {
                    handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                    handleDisplayAlert = props.handleDisplayAlert
                    userIsAdmin = props.userIsAdmin
                    httpClient = props.httpClient
                    coreType = props.coreType
                    topics = props.tables
                })
                CoreType.RBAC_MOCK -> TODO()
            }
        }
    }

    override fun DashboardState.init() {
        logger.info { "Initializing the state of the Dashboard component" }
        editProfileFormIsOpen = true
        cryptoACFormFields = listOf()

        MainScope().launch {
            if (props.userIsLogged) {
                getProfileFromCryptoAC()
            } else {
                logger.warn { "Trying to see the dashboard but user is not logged in" }
                props.handleDisplayAlert(OutcomeCode.CODE_051_LOGIN_REQUIRED, CryptoACAlertSeverity.INFO)
            }
        }
    }


    /**
     * Submit and handle the callback for the edit profile form. It receives as input
     * the HTTPS [method], the [endpoint] (URL) and the [values] to add to the request
     */
    private fun submitEditProfileForm(method: HttpMethod, endpoint: String, values: HashMap<String, String>) {
        logger.info { "Submitting CryptoAC edit profile form, method $method, endpoint $endpoint" }

        try {
            val rmParameters = when (props.rmType) {
                RMType.CRYPTOAC -> RMInterfaceCryptoACParameters.fromMap(values)
                RMType.NONE -> null
            }
            val mmParameters = when (props.mmType) {
                MMType.MYSQL -> MMInterfaceMySQLParameters.fromMap(values)
                MMType.REDIS -> MMInterfaceRedisParameters.fromMap(values)
            }
            val dmParameters = when (props.dmType) {
                DMType.CRYPTOAC -> DMInterfaceCryptoACParameters.fromMap(values)
                DMType.MOSQUITTO -> DMInterfaceMosquittoParameters.fromMap(values)
            }
            val user = User(
                name = values[USERNAME]!!,
                isAdmin = values[SERVER.IS_ADMIN].toBoolean(),
            )
            val cryptoType = CryptoType.valueOf(values[SERVER.CRYPTO]!!)

            /** Create the core parameters object based on the core type */
            val parameters = when (props.coreType) {
                CoreType.RBAC_CLOUD -> {
                    CoreParametersCLOUD(
                        user = user,
                        cryptoType = cryptoType,
                        rmInterfaceParameters = rmParameters!!,
                        mmInterfaceParameters = mmParameters as MMInterfaceRBACCLOUDParameters,
                        dmInterfaceParameters = dmParameters as DMInterfaceRBACCLOUDParameters,
                        opaInterfaceParameters = OPAInterfaceParameters(
                            port = values[SERVER.OPA_PORT]!!.toInt(),
                            url = values[SERVER.OPA_URL]!!,
                            policyModel = PolicyModel.valueOf(values[SERVER.OPA_POLICY_MODEL]!!)
                        )
                    )
                }
                CoreType.RBAC_MQTT -> {
                    CoreParametersMQTT(
                        user = user,
                        cryptoType = cryptoType,
                        mmInterfaceParameters = mmParameters,
                        dmInterfaceParameters = dmParameters as DMInterfaceRBACMQTTParameters,
                    )
                }
                CoreType.RBAC_MOCK -> {
                    val message = "Using MOCK core when not in development mode"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
            }

            if (method != HttpMethod.Post && method != HttpMethod.Patch) {
                logger.warn { "HTTP Method of edit profile form is neither Post nor Patch (it is $method)" }
                props.handleDisplayAlert(OutcomeCode.CODE_048_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
            }
            MainScope().launch {
                /** Send the HTTPS request */
                props.handleChangeBackdropIsOpen(true)
                val response: HttpResponse = if (method == HttpMethod.Post) {
                    props.httpClient.post {
                        url(endpoint)
                        contentType(ContentType.Application.Json)
                        setBody(parameters)
                    }
                } else {
                    props.httpClient.patch {
                        url(endpoint)
                        contentType(ContentType.Application.Json)
                        setBody(parameters)
                    }
                }
                val code: OutcomeCode = response.body()
                val status = response.status
                props.handleChangeBackdropIsOpen(false)

                if (status == HttpStatusCode.OK) {
                    logger.info { "Response status is ${status}, code is $code" }
                    props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                    props.handleChangeUserIsAdmin(parameters.user.isAdmin)
                    props.handleChangeUserHasProfile(true)
                    setState { editProfileFormIsOpen = false }
                } else {
                    logger.warn { "Response status is ${status}, code is $code" }
                    props.handleDisplayAlert(code, CryptoACAlertSeverity.ERROR)
                    props.handleChangeUserHasProfile(false)
                    props.handleChangeUserIsAdmin(false)
                    setState { editProfileFormIsOpen = true }
                }
            }
        } catch (e: NullPointerException) {
            e.printStackTrace()
            logger.warn { "NullPointerException: probably not all fields of the edit profile form were filled" }
            props.handleDisplayAlert(OutcomeCode.CODE_019_MISSING_PARAMETERS, CryptoACAlertSeverity.WARNING)
        } catch (e: Error) {
            logger.error { "Error during edit profile (${e.message}), see console log for details" }
            console.log(e)
            props.handleDisplayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
        }
    }

    /**
     * Parse the content of the given profile [file] and update
     * the fields of the edit profile form accordingly
     */
    private fun parseProfileFile(file: File) {
        /** Only Json files are parsable at the moment */
        if (file.name.endsWith(".json")) {
            val reader = FileReader()
            reader.readAsText(file, "UTF-8")

            /** Once the file is loaded, read the content and decode the core parameters */
            reader.onload = { _ ->
                val fileContent = reader.result.toString()
                val parameters = myJson.decodeFromString<CoreParameters>(fileContent)
                parseProfileAndUpdateFields(parameters, forceTypesUpdate = true)
            }
        } else {
            logger.warn {"The user did not provide a .json file for the profile" }
            props.handleDisplayAlert(OutcomeCode.CODE_040_MALFORMED_PROFILE_FILE, CryptoACAlertSeverity.WARNING)
        }
    }

    /** Get the profile of the [username] for the current coreType */
    private suspend fun getProfileFromCryptoAC(username: String? = props.username) {
        val actualEndpoint = "$baseURL${PROFILES.replace("{Core}", props.coreType.toString())}$username"
        logger.info { "Getting the profile for user $username at endpoint $actualEndpoint" }
        val httpResponse = props.httpClient.get { url(actualEndpoint) }

        val status = httpResponse.status
        if (status == HttpStatusCode.OK) {
            logger.info { "Response status is $status" }
            val profileAsString = httpResponse.bodyAsText()
            val parameters = myJson.decodeFromString<CoreParameters>(profileAsString)
            if (parseProfileAndUpdateFields(parameters, forceTypesUpdate = true)) {
                setState {
                    props.handleChangeUserHasProfile(true)
                    props.handleChangeUserIsAdmin(parameters.user.isAdmin)
                    editProfileFormIsOpen = false
                }
            }
        } else {
            val text = httpResponse.bodyAsText()
            val outcomeCode: OutcomeCode = myJson.decodeFromString(text)
            logger.warn { "Response status is ${status}, code is $outcomeCode" }
            props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            setState {
                props.handleChangeUserHasProfile(false)
                props.handleChangeUserIsAdmin(false)
                editProfileFormIsOpen = true
            }
            getFieldsFromParameters(User(name = props.username!!), CryptoType.SODIUM)
        }
    }

    /**
     * Fill the fields of the edit profile form with the
     * given [parameters]. If the [parameters] do not
     * correspond to the currently selected interfaces
     * (i.e., the RM, MM and DM types), either force
     * the update of the interfaces (if [forceTypesUpdate]
     * is true) or throw an error. If everything succeeds,
     * return true, else false
     */
    private fun parseProfileAndUpdateFields(
        parameters: CoreParameters,
        forceTypesUpdate: Boolean): Boolean {
        var everythingIsFine = true

        try {
            val versionNumber = parameters.versionNumber
            val coreType = parameters.coreType
            val cryptoType = parameters.cryptoType
            val user = parameters.user

            /** Consistency checks */
            if (coreType != props.coreType) {
                throw UnsupportedOperationException(
                    "Core type of file ($coreType) is different from currently selected core type (${props.coreType}")
            }
            when (versionNumber) {
                1 -> {
                    logger.debug { "Version number of profile file is 1" }
                }
                else -> {
                    throw UnsupportedOperationException("Version number $versionNumber is not supported")
                }
            }

            /** Acquire eventual RM parameters */
            val rmParameters = when (parameters) {
                is CoreParametersCLOUD -> parameters.rmInterfaceParameters
                else -> null
            }
            if (rmParameters != null) {
                if (rmParameters.rmType != props.rmType) {
                    if (forceTypesUpdate) {
                        props.handleChangeRMType(rmParameters.rmType)
                        props.handleDisplayAlert(OutcomeCode.CODE_057_INTERFACE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)

                    } else {
                        throw UnsupportedOperationException(
                            "RM type of file (${rmParameters.rmType}) is different from currently selected core type (${props.rmType}"
                        )
                    }
                }
            }

            /** Acquire eventual MM parameters */
            val mmParameters = when (parameters) {
                is CoreParametersCLOUD -> parameters.mmInterfaceParameters
                is CoreParametersMQTT -> parameters.mmInterfaceParameters
                else -> null
            }
            if (mmParameters != null) {
                if (mmParameters.mmType != props.mmType) {
                    if (forceTypesUpdate) {
                        props.handleChangeMMType(mmParameters.mmType)
                        props.handleDisplayAlert(OutcomeCode.CODE_057_INTERFACE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
                    } else {
                        throw UnsupportedOperationException(
                            "MM type of file (${mmParameters.mmType}) is different from currently selected core type (${props.mmType}"
                        )
                    }
                }
            }

            /** Acquire eventual DM parameters */
            val dmParameters = when (parameters) {
                is CoreParametersCLOUD -> parameters.dmInterfaceParameters
                is CoreParametersMQTT -> parameters.dmInterfaceParameters
                else -> null
            }
            if (dmParameters != null) {
                if (dmParameters.dmType != props.dmType) {
                    if (forceTypesUpdate) {
                        props.handleChangeDMType(dmParameters.dmType)
                        props.handleDisplayAlert(OutcomeCode.CODE_057_INTERFACE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
                    } else {
                        throw UnsupportedOperationException(
                            "DM type of file (${dmParameters.dmType}) is different from currently selected core type (${props.dmType}"
                        )
                    }
                }
            }

            /** Acquire eventual OPA parameters */
            val opaParameters = when (parameters) {
                is CoreParametersCLOUD -> parameters.opaInterfaceParameters
                else -> null
            }

            setState {
                editProfileFormIsOpen = true
            }

            getFieldsFromParameters(
                user, cryptoType,
                rmParameters,
                mmParameters,
                dmParameters,
                opaParameters,
            )
        } catch (e: Exception) {
            everythingIsFine = false
            if (e is NullPointerException ||
                e is UnsupportedOperationException ||
                e.asDynamic().name == "JsonDecodingException") {

                logger.warn { "Malformed .json profile file" }
                logger.warn { e }
                props.handleDisplayAlert(OutcomeCode.CODE_040_MALFORMED_PROFILE_FILE, CryptoACAlertSeverity.ERROR)
            } else {
                logger.error { "Error during upload file (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }

        return everythingIsFine
    }

    /**
     * Update the edit profile fields with the given [user], [cryptoType],
     * [rmParameters], [mmParameters] and [dmParameters]
     */
    private fun getFieldsFromParameters(
        user: User,
        cryptoType: CryptoType,
        rmParameters: RMInterfaceParameters? = null,
        mmParameters: MMInterfaceParameters? = null,
        dmParameters: DMInterfaceParameters? = null,
        opaParameters: OPAInterfaceParameters? = null,
    ) {

        logger.info {"Getting profile fields from parameters" }
        val fields = mutableListOf(listOf(
            CryptoACFormField(
                USERNAME,
                USERNAME,
                InputType.text,
                className = "darkTextField",
                defaultValue = user.name
            ),
            CryptoACFormField(
                SERVER.IS_ADMIN,
                SERVER.IS_ADMIN.replace("_", " "),
                InputType.checkBox,
                className = "darkTextField",
                defaultValue = user.isAdmin.toString()
            ),
            CryptoACFormField(
                SERVER.CRYPTO,
                SERVER.CRYPTO,
                InputType.select,
                options = CryptoType.values().map { it.toString() },
                className = "darkTextField",
                defaultValue = cryptoType.toString()
            ),
        ))
        fields.addAll(when (props.rmType) {
            RMType.CRYPTOAC -> RMInterfaceCryptoACParameters.toMap(rmParameters?.let { rmParameters as RMInterfaceCryptoACParameters })
            RMType.NONE -> listOf()
        })
        fields.addAll(when (props.mmType) {
            MMType.MYSQL -> MMInterfaceMySQLParameters.toMap(mmParameters?.let { mmParameters as MMInterfaceMySQLParameters })
            MMType.REDIS -> MMInterfaceRedisParameters.toMap(mmParameters?.let { mmParameters as MMInterfaceRedisParameters })
        })
        fields.addAll(when (props.dmType) {
            DMType.CRYPTOAC -> DMInterfaceCryptoACParameters.toMap(dmParameters?.let { dmParameters as DMInterfaceCryptoACParameters })
            DMType.MOSQUITTO -> DMInterfaceMosquittoParameters.toMap(dmParameters?.let { dmParameters as DMInterfaceMosquittoParameters })
        })

        if (props.coreType == CoreType.RBAC_CLOUD) {
            fields.addAll(
                listOf(
                    listOf(
                        CryptoACFormField(
                            SERVER.OPA_URL,
                            SERVER.OPA_URL.replace("_", " "),
                            InputType.text,
                            className = "darkTextField",
                            defaultValue = opaParameters?.url
                        ),
                        CryptoACFormField(
                            SERVER.OPA_PORT,
                            SERVER.OPA_PORT.replace("_", " "),
                            InputType.number,
                            className = "darkTextField",
                            defaultValue = opaParameters?.port.toString()
                        ),
                        CryptoACFormField(
                            SERVER.OPA_POLICY_MODEL,
                            SERVER.OPA_POLICY_MODEL.replace("_", " "),
                            InputType.select,
                            options = PolicyModel.values().map { it.toString() },
                            className = "darkTextField",
                            defaultValue = opaParameters?.policyModel.toString()
                        ),
                    )
                )
            )
        }

        setState {
            cryptoACFormFields = fields.toList()
        }
    }

}

fun dashboard(handler: DashboardProps.() -> Unit): ReactElement {
    return createElement {
        child(Dashboard::class) {
            this.attrs(handler)
        }
    }!!
}