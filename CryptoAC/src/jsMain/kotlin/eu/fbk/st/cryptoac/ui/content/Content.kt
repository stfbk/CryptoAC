package eu.fbk.st.cryptoac.ui.content

import eu.fbk.st.cryptoac.API.PROFILES
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER.DS_PASSWORD
import eu.fbk.st.cryptoac.SERVER.DS_PORT
import eu.fbk.st.cryptoac.SERVER.DS_URL
import eu.fbk.st.cryptoac.SERVER.IS_ADMIN
import eu.fbk.st.cryptoac.SERVER.MS_PASSWORD
import eu.fbk.st.cryptoac.SERVER.MS_PORT
import eu.fbk.st.cryptoac.SERVER.MS_URL
import eu.fbk.st.cryptoac.SERVER.OPA_PORT
import eu.fbk.st.cryptoac.SERVER.OPA_URL
import eu.fbk.st.cryptoac.SERVER.RM_PORT
import eu.fbk.st.cryptoac.SERVER.RM_URL
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.core.CoreParameters
import eu.fbk.st.cryptoac.core.CoreParametersMQTT
import eu.fbk.st.cryptoac.core.CoreParametersCloud
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.implementation.ds.DSMQTTMessage
import eu.fbk.st.cryptoac.ui.baseURL
import eu.fbk.st.cryptoac.ui.components.custom.*
import eu.fbk.st.cryptoac.ui.components.icons.faChevronDown
import eu.fbk.st.cryptoac.ui.components.icons.faChevronUp
import eu.fbk.st.cryptoac.ui.components.icons.faCloudUploadAlt
import eu.fbk.st.cryptoac.ui.components.materialui.core.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.html.InputType
import kotlinx.html.hidden
import kotlinx.html.js.onChangeFunction
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
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

external interface ContentProps : RProps {
    var userHasProfile: Boolean
    var userIsLogged: Boolean
    var userIsAdmin: Boolean
    var httpClient: HttpClient
    var contentMessages: HashMap<String, MutableList<DSMQTTMessage>>
    var coreType: CoreType
    var username: String?
    var handleChangeBackdropOpen: (Boolean) -> Unit
    var handleChangeUserIsLogged: (Boolean) -> Unit
    var handleChangeUserHasProfile: (Boolean) -> Unit
    var handleChangeUsername: (String?) -> Unit
    var handleChangeUserIsAdmin : (Boolean) -> Unit
    var handleDisplayAlert : (OutcomeCode, CryptoACAlertSeverity) -> Unit
}

external interface ContentState : RState {
    /** Whether the edit profile form is visible or not. */
    var editProfileFormOpen: Boolean
}

/**
 * The Content React component, consisting of:
 * 1. The edit profile form;
 * 2. The specific content for tables and data of the selected core type.
 */
class Content: RComponent<ContentProps, ContentState>() {

    override fun RBuilder.render() {

        // TODO make it collapsable
        /**
         * 1. The edit profile, consisting of:
         * 1.1. The header with the title, the file upload option and the collapsable toggle icon;
         * 1.2. The edit profile form.
         */
        styledDiv {
            css {
                textAlign = TextAlign.center
                marginTop = 10.px
                paddingBottom = 10.px
            }
            paper {

                /** 1.1. The header with the title, the file upload option and the collapsable toggle icon. */
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
                            children = faCloudUploadAlt { }
                        }
                        input {
                            attrs {
                                type = InputType.file
                                accept = ".json"
                                hidden = true
                                this.onChangeFunction = { event ->
                                    logger.info {"Received upload configuration file event" }
                                    val fileInput = event.target as HTMLInputElement
                                    val file = fileInput.files!![0]
                                    parseProfileFile(file!!)
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
                                children = if (!state.editProfileFormOpen) {
                                    faChevronDown { }
                                } else {
                                    faChevronUp { }
                                }
                                onClick = {
                                    setState {
                                        editProfileFormOpen = !editProfileFormOpen
                                    }
                                }
                            }
                        }
                    }
                }

                /** 1.2. The edit profile form. */
                styledDiv {
                    css {
                        marginTop = 10.px
                        marginBottom = 10.px
                        marginRight = 10.px
                        marginLeft = 30.px
                        if (!state.editProfileFormOpen) {
                            display = Display.none
                        }
                    }

                    /** Render the edit profile form. */
                    cryptoACForm {
                        attrs {
                            handleChangeBackdropOpen = props.handleChangeBackdropOpen
                            handleDisplayCryptoACAlert = props.handleDisplayAlert
                            submitButtonText = "Edit Profile"
                            method = if (props.userHasProfile) HttpMethod.Patch else HttpMethod.Post
                            coreType = props.coreType
                            endpoint = PROFILES
                            submit = { method, endpoint, values, _ ->
                                submitEditProfile(method, endpoint, values)
                            }
                            cryptoACFormFields = when (props.coreType) {
                                CoreType.RBAC_CLOUD -> coreParametersCloudFormFields
                                CoreType.RBAC_MQTT -> coreParametersMQTTCryptoACFormFields
                            }
                        }
                    }
                }
            }
        }

        /** 2. The specific content for tables and data of the selected core type (if the user has a profile). */
        if (props.userHasProfile) {
            when (props.coreType) {
                CoreType.RBAC_CLOUD -> cloudContent {
                    httpClient = props.httpClient
                    userIsAdmin = props.userIsAdmin
                    coreType = props.coreType
                    handleChangeBackdropOpen = props.handleChangeBackdropOpen
                    handleDisplayAlert = props.handleDisplayAlert
                }
                CoreType.RBAC_MQTT -> mqttContent {
                    httpClient = props.httpClient
                    userIsAdmin = props.userIsAdmin
                    coreType = props.coreType
                    handleChangeBackdropOpen = props.handleChangeBackdropOpen
                    handleDisplayAlert = props.handleDisplayAlert
                    contentMessages = props.contentMessages
                }
            }
        }
    }

    override fun ContentState.init() {
        logger.info { "Initializing the state of the Content component" }
        editProfileFormOpen = true

        MainScope().launch {
            getProfileFromProxy()
        }
    }

    /**
     * Submit and handle the callback for the edit profile form. It receives as input
     * the HTTP [method], the [endpoint] (URL) and the [values] to add to the request.
     */
    private fun submitEditProfile(method: HttpMethod, endpoint: String, values: HashMap<String, String>) {
        logger.info { "Submitting CryptoAC edit profile form, method $method, endpoint $endpoint" }
        props.handleChangeBackdropOpen(true)

        /** Create the core parameters object based on the core type. */
        val parameters = when (props.coreType) {
            CoreType.RBAC_CLOUD -> CoreParametersCloud.fromMap(values)
            CoreType.RBAC_MQTT -> CoreParametersMQTT.fromMap(values)
        }

        if (parameters == null) {
            logger.warn { "Not all fields of the edit profile form were filled" }
            props.handleDisplayAlert(OutcomeCode.CODE_019_MISSING_PARAMETERS, CryptoACAlertSeverity.WARNING)
        } else {
            MainScope().launch {
                try {
                    /** Send the HTTP post request. */
                    val response: HttpResponse = props.httpClient.post(endpoint) {
                        contentType(ContentType.Application.Json)
                        body = parameters
                    }
                    val code: OutcomeCode = response.receive()
                    val status = response.status
                    props.handleChangeBackdropOpen(false)

                    if (status == HttpStatusCode.OK) {
                        logger.info { "Response status is ${status}, code is $code" }
                        props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                        props.handleChangeUserHasProfile(true)
                        props.handleChangeUserIsAdmin(parameters.isAdmin)
                        props.handleChangeUsername(parameters.username)
                        setState { editProfileFormOpen = false }
                    } else {
                        logger.warn { "Response status is ${status}, code is $code" }
                        props.handleDisplayAlert(code, CryptoACAlertSeverity.ERROR)
                        props.handleChangeUserHasProfile(false)
                        props.handleChangeUserIsAdmin(false)
                        props.handleChangeUsername(null)
                        setState { editProfileFormOpen = true }
                    }
                } catch (e: Error) {
                    logger.error { "Error during edit profile (${e.message}), see console log for details" }
                    console.log(e)
                    props.handleDisplayAlert(OutcomeCode.CODE_047_UNEXPECTED, CryptoACAlertSeverity.ERROR)
                }
            }
        }
    }

    /**
     * Parse the content of the given profile [file] and update
     * the fields of the edit profile form accordingly.
     */
    private fun parseProfileFile(file: File) {
        /** Only Json files are parsable at the moment. */
        if (file.name.endsWith(".json")) {
            val reader = FileReader()
            reader.readAsText(file, "UTF-8")
            /** Once the file is loaded, read the content and decode the core parameters. */
            reader.onload = { _ ->
                val fileContent = reader.result.toString()
                try {
                    val parameters = when (props.coreType) {
                        CoreType.RBAC_CLOUD -> Json.decodeFromString<CoreParametersCloud>(fileContent)
                        CoreType.RBAC_MQTT -> Json.decodeFromString<CoreParametersMQTT>(fileContent)
                    }
                    setState {
                        editProfileFormOpen = true
                        getFieldsFromParameters(parameters)
                    }
                } catch (e: Exception) {
                    if (e.asDynamic().name == "JsonDecodingException") {
                        logger.warn {"Malformed .json profile file" }
                        props.handleDisplayAlert(OutcomeCode.CODE_039_MALFORMED_PROFILE_FILE, CryptoACAlertSeverity.ERROR)
                    } else {
                        logger.error { "Error during upload file (${e.message}), see console log for details" }
                        console.log(e)
                        props.handleDisplayAlert(OutcomeCode.CODE_047_UNEXPECTED, CryptoACAlertSeverity.ERROR)
                    }
                }
            }
        } else {
            logger.warn {"The user did not provide a .json file for the profile" }
            props.handleDisplayAlert(OutcomeCode.CODE_039_MALFORMED_PROFILE_FILE, CryptoACAlertSeverity.WARNING)
        }
    }

    // TODO refactor sooner or later
    /** Update the edit profile fields with the new [parameters]. */
    private fun getFieldsFromParameters(parameters: CoreParameters) {
        logger.info {"Getting profile fields from parameters" }
        when (parameters.coreType) {
            CoreType.RBAC_CLOUD -> {
                coreParametersCloudFormFields = listOf(
                    listOf(
                        CryptoACFormField(
                            USERNAME,
                            USERNAME,
                            InputType.text,
                            className = "darkTextField",
                            defaultValue = parameters.username
                        ),
                        CryptoACFormField(
                            IS_ADMIN,
                            IS_ADMIN.replace("_", " "),
                            InputType.checkBox,
                            className = "darkTextField",
                            defaultValue = parameters.isAdmin.toString()
                        ),
                    ), listOf(
                        CryptoACFormField(
                            RM_URL,
                            RM_URL.replace("_", " "),
                            InputType.text,
                            className = "darkTextField",
                            defaultValue = (parameters as CoreParametersCloud).rmCloudInterfaceParameters.url
                        ),
                        CryptoACFormField(
                            RM_PORT,
                            RM_PORT.replace("_", " "),
                            InputType.number,
                            className = "darkTextField",
                            defaultValue = parameters.rmCloudInterfaceParameters.port.toString()
                        ),
                    ), listOf(
                        CryptoACFormField(
                            MS_URL,
                            MS_URL.replace("_", " "),
                            InputType.text,
                            className = "darkTextField",
                            defaultValue = parameters.msMySQLInterfaceParameters.url
                        ),
                        CryptoACFormField(
                            MS_PASSWORD,
                            MS_PASSWORD.replace("_", " "),
                            InputType.password,
                            className = "darkTextField",
                            defaultValue = parameters.msMySQLInterfaceParameters.password
                        ),
                        CryptoACFormField(
                            MS_PORT,
                            MS_PORT.replace("_", " "),
                            InputType.number,
                            className = "darkTextField",
                            defaultValue = parameters.msMySQLInterfaceParameters.port.toString()
                        ),
                    ), listOf(
                        CryptoACFormField(
                            DS_URL,
                            DS_URL.replace("_", " "),
                            InputType.text,
                            className = "darkTextField",
                            defaultValue = parameters.dsCloudInterfaceParameters.url
                        ),
                        CryptoACFormField(
                            DS_PORT,
                            DS_PORT.replace("_", " "),
                            InputType.number,
                            className = "darkTextField",
                            defaultValue = parameters.dsCloudInterfaceParameters.port.toString()
                        ),
                    ), listOf(
                        CryptoACFormField(
                            OPA_URL,
                            OPA_URL.replace("_", " "),
                            InputType.text,
                            className = "darkTextField",
                            defaultValue = parameters.opaInterfaceParameters.url
                        ),
                        CryptoACFormField(
                            OPA_PORT,
                            OPA_PORT.replace("_", " "),
                            InputType.number,
                            className = "darkTextField",
                            defaultValue = parameters.opaInterfaceParameters.port.toString()
                        ),
                    )
                )
            }
            CoreType.RBAC_MQTT -> {
                coreParametersMQTTCryptoACFormFields = listOf(
                    listOf(
                        CryptoACFormField(
                            USERNAME,
                            USERNAME,
                            InputType.text,
                            className = "darkTextField",
                            defaultValue = parameters.username
                        ),
                        CryptoACFormField(
                            IS_ADMIN,
                            IS_ADMIN.replace("_", " "),
                            InputType.checkBox,
                            className = "darkTextField",
                            defaultValue = parameters.isAdmin.toString()
                        ),
                    ), listOf(
                        CryptoACFormField(
                            DS_URL,
                            "Broker URL",
                            InputType.text,
                            className = "darkTextField",
                            defaultValue = (parameters as CoreParametersMQTT).dsMQTTInterfaceParameters.url
                        ),
                        CryptoACFormField(
                            DS_PASSWORD,
                            "Broker Password",
                            InputType.password,
                            className = "darkTextField",
                            defaultValue = parameters.dsMQTTInterfaceParameters.password
                        ),
                        CryptoACFormField(
                            DS_PORT,
                            "Broker Port",
                            InputType.number,
                            className = "darkTextField",
                            defaultValue = parameters.dsMQTTInterfaceParameters.port.toString()
                        ),
                    ), listOf(
                        CryptoACFormField(
                            MS_URL,
                            MS_URL.replace("_", " "),
                            InputType.text,
                            className = "darkTextField",
                            defaultValue = parameters.msMySQLInterfaceParameters.url
                        ),
                        CryptoACFormField(
                            MS_PASSWORD,
                            MS_PASSWORD.replace("_", " "),
                            InputType.password,
                            className = "darkTextField",
                            defaultValue = parameters.msMySQLInterfaceParameters.password
                        ),
                        CryptoACFormField(
                            MS_PORT,
                            MS_PORT.replace("_", " "),
                            InputType.number,
                            className = "darkTextField",
                            defaultValue = parameters.msMySQLInterfaceParameters.port.toString()
                        )
                    )
                )
            }
        }
    }

    /** Get the profile of the [username] for the current coreType. */
    private suspend fun getProfileFromProxy(username: String? = props.username): CoreParameters? {
        val actualEndpoint = "$baseURL${PROFILES.replace("{Core}", props.coreType.toString())}?$USERNAME=$username"
        logger.info { "Getting the profile for user $username at endpoint $actualEndpoint" }
        val httpResponse: HttpResponse = props.httpClient.get(actualEndpoint)

        val status = httpResponse.status
        return if (status == HttpStatusCode.OK) {
            logger.info { "Response status is $status" }
            val loggedUserCoreParameters = when (props.coreType) {
                CoreType.RBAC_CLOUD -> Json.decodeFromString<CoreParametersCloud>(httpResponse.readText())
                CoreType.RBAC_MQTT -> Json.decodeFromString<CoreParametersMQTT>(httpResponse.readText())
            }
            setState {
                props.handleChangeUserHasProfile(true)
                props.handleChangeUserIsAdmin(loggedUserCoreParameters.isAdmin)
                props.handleChangeUsername(loggedUserCoreParameters.username)
                editProfileFormOpen = false
                getFieldsFromParameters(loggedUserCoreParameters)
            }
            loggedUserCoreParameters
        } else {
            val text = httpResponse.readText()
            val outcomeCode: OutcomeCode = Json.decodeFromString(text)
            logger.warn { "Response status is ${status}, code is $outcomeCode" }
            props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            setState {
                props.handleChangeUserHasProfile(false)
                props.handleChangeUserIsAdmin(false)
                props.handleChangeUsername(null)
                editProfileFormOpen = true
            }
            null
        }
    }

    /** The list of form fields for the CLOUD core type. */
    private var coreParametersCloudFormFields = listOf(
        listOf(
            CryptoACFormField(USERNAME, USERNAME, InputType.text, className = "darkTextField"),
            CryptoACFormField(IS_ADMIN, IS_ADMIN.replace("_", " "), InputType.checkBox, className = "darkTextField"),
        ), listOf(
            CryptoACFormField(RM_URL, RM_URL.replace("_", " "), InputType.text, className = "darkTextField"),
            CryptoACFormField(RM_PORT, RM_PORT.replace("_", " "), InputType.number, className = "darkTextField"),
        ), listOf(
            CryptoACFormField(MS_URL, MS_URL.replace("_", " "), InputType.text, className = "darkTextField"),
            CryptoACFormField(MS_PASSWORD, MS_PASSWORD.replace("_", " "), InputType.password, className = "darkTextField"),
            CryptoACFormField(MS_PORT, MS_PORT.replace("_", " "), InputType.number, className = "darkTextField"),
        ), listOf(
            CryptoACFormField(DS_URL, DS_URL.replace("_", " "), InputType.text, className = "darkTextField"),
            CryptoACFormField(DS_PORT, DS_PORT.replace("_", " "), InputType.number, className = "darkTextField"),
        ), listOf(
            CryptoACFormField(OPA_URL, OPA_URL.replace("_", " "), InputType.text, className = "darkTextField"),
            CryptoACFormField(OPA_PORT, OPA_PORT.replace("_", " "), InputType.number, className = "darkTextField"),
        )
    )

    /** The list of form fields for the MQTT core type. */
    private var coreParametersMQTTCryptoACFormFields: List<List<CryptoACFormField>> = listOf(
        listOf(
            CryptoACFormField(USERNAME, USERNAME, InputType.text, className = "darkTextField"),
            CryptoACFormField(IS_ADMIN, IS_ADMIN.replace("_", " "), InputType.checkBox, className = "darkTextField"),
        ), listOf(
            CryptoACFormField(DS_URL, "Broker URL", InputType.text, className = "darkTextField"),
            CryptoACFormField(DS_PASSWORD, "Broker Password", InputType.password, className = "darkTextField"),
            CryptoACFormField(DS_PORT, "Broker Port", InputType.number, className = "darkTextField"),
            ), listOf(
            CryptoACFormField(MS_URL, MS_URL.replace("_", " "), InputType.text, className = "darkTextField"),
            CryptoACFormField(MS_PASSWORD, MS_PASSWORD.replace("_", " "), InputType.password, className = "darkTextField"),
            CryptoACFormField(MS_PORT, MS_PORT.replace("_", " "), InputType.number, className = "darkTextField"),
        )
    )
}

fun RBuilder.content(handler: ContentProps.() -> Unit): ReactElement {
    return child(Content::class) {
        this.attrs(handler)
    }
}