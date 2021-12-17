package eu.fbk.st.cryptoac.ui.content

import development
import eu.fbk.st.cryptoac.API.PROFILES
import eu.fbk.st.cryptoac.CryptoACFormField
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER.USERNAME
import eu.fbk.st.cryptoac.core.*
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

external interface ContentProps : Props {
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var handleChangeUserHasProfile: (Boolean) -> Unit
    var handleChangeUserIsLogged: (Boolean) -> Unit
    var handleChangeUserIsAdmin: (Boolean) -> Unit
    var handleChangeUsername: (String?) -> Unit
    var handleDisplayAlert: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var userHasProfile: Boolean
    var userIsLogged: Boolean
    var userIsAdmin: Boolean
    var httpClient: HttpClient
    var coreType: CoreType
    var username: String?
    var tables: MutableList<String>
}

external interface ContentState : State {
    /** Whether the edit profile form is visible or not */
    var editProfileFormIsOpen: Boolean

    /** The form fields of the edit profile form */
    var cryptoACFormFields: List<List<CryptoACFormField>>
}

/**
 * The Content React component, consisting of:
 * 1. The edit profile form;
 * 2. The specific content for tables and
 *    data of the chosen core type
 */
class Content: RComponent<ContentProps, ContentState>() {

    override fun RBuilder.render() {

        /** 1. The edit profile */
        styledDiv {
            css {
                textAlign = TextAlign.center
                marginTop = 10.px
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
         * 2. The specific content for tables and data of the
         * selected core type (if the user has a profile)
         * */
        if (props.userHasProfile) {
            when (props.coreType) {
                CoreType.RBAC_CLOUD -> child(rbacCLOUDContent {
                    handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                    handleDisplayAlert = props.handleDisplayAlert
                    userIsAdmin = props.userIsAdmin
                    httpClient = props.httpClient
                    coreType = props.coreType
                })
                CoreType.RBAC_MQTT -> child(rbacMQTTContent {
                    handleChangeBackdropIsOpen = props.handleChangeBackdropIsOpen
                    handleDisplayAlert = props.handleDisplayAlert
                    userIsAdmin = props.userIsAdmin
                    httpClient = props.httpClient
                    coreType = props.coreType
                    topics = props.tables
                })
            }
        }
    }

    override fun ContentState.init() {
        logger.info { "Initializing the state of the Content component" }
        editProfileFormIsOpen = true
        cryptoACFormFields = listOf()

        MainScope().launch {
            getProfileFromProxy()
        }
    }


    /**
     * Submit and handle the callback for the edit profile form. It receives as input
     * the HTTPS [method], the [endpoint] (URL) and the [values] to add to the request
     */
    private fun submitEditProfileForm(method: HttpMethod, endpoint: String, values: HashMap<String, String>) {
        logger.info { "Submitting CryptoAC edit profile form, method $method, endpoint $endpoint" }

        /** Create the core parameters object based on the core type */
        val parameters = when (props.coreType) {
            CoreType.RBAC_CLOUD -> CoreParametersCLOUD.fromMap(values)
            CoreType.RBAC_MQTT -> CoreParametersMQTT.fromMap(values)
            CoreType.RBAC_MOCK -> if (development) {
                CoreParametersMOCK.fromMap()
            } else {
                val message = "Using MOCK core when not in development mode"
                logger.error { message }
                throw IllegalStateException(message)
            }
        }

        if (method != HttpMethod.Post && method != HttpMethod.Patch) {
            logger.warn { "HTTP Method of edit profile form is neither Post nor Patch (it is $method)" }
            props.handleDisplayAlert(OutcomeCode.CODE_046_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
        }
        if (parameters == null) {
            logger.warn { "Not all fields of the edit profile form were filled" }
            props.handleDisplayAlert(OutcomeCode.CODE_019_MISSING_PARAMETERS, CryptoACAlertSeverity.WARNING)
        } else {
            MainScope().launch {
                try {
                    /** Send the HTTPS  request */
                    props.handleChangeBackdropIsOpen(true)
                    val response: HttpResponse = if (method == HttpMethod.Post) {
                        props.httpClient.post(endpoint) {
                            contentType(ContentType.Application.Json)
                            body = parameters
                        }
                    } else {
                        props.httpClient.patch(endpoint) {
                            contentType(ContentType.Application.Json)
                            body = parameters
                        }
                    }
                    val code: OutcomeCode = response.receive()
                    val status = response.status
                    props.handleChangeBackdropIsOpen(false)

                    if (status == HttpStatusCode.OK) {
                        logger.info { "Response status is ${status}, code is $code" }
                        props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                        props.handleChangeUserIsAdmin(parameters.user.isAdmin)
                        props.handleChangeUsername(parameters.user.name)
                        props.handleChangeUserHasProfile(true)
                        setState { editProfileFormIsOpen = false }
                    } else {
                        logger.warn { "Response status is ${status}, code is $code" }
                        props.handleDisplayAlert(code, CryptoACAlertSeverity.ERROR)
                        props.handleChangeUserHasProfile(false)
                        props.handleChangeUserIsAdmin(false)
                        props.handleChangeUsername(null)
                        setState { editProfileFormIsOpen = true }
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
                try {
                    val parameters = when (props.coreType) {
                        CoreType.RBAC_CLOUD -> Json.decodeFromString<CoreParametersCLOUD>(fileContent)
                        CoreType.RBAC_MQTT -> Json.decodeFromString<CoreParametersMQTT>(fileContent)
                        CoreType.RBAC_MOCK -> if (development) {
                            Json.decodeFromString<CoreParametersMOCK>(fileContent)
                        } else {
                            val message = "Using MOCK core when not in development mode"
                            logger.error { message }
                            throw IllegalStateException(message)
                        }
                    }
                    setState {
                        editProfileFormIsOpen = true
                    }
                    getFieldsFromParameters(parameters)
                } catch (e: Exception) {
                    if (e.asDynamic().name == "JsonDecodingException") {
                        logger.warn {"Malformed .json profile file" }
                        logger.warn { e }
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

    /** Update the edit profile fields with the new [params] */
    private fun getFieldsFromParameters(params: CoreParameters? = null) {
        logger.info {"Getting profile fields from parameters" }

        setState {
            cryptoACFormFields = when (props.coreType) {
                CoreType.RBAC_CLOUD -> CoreParametersCLOUD.toMap(if (params == null) null else params as CoreParametersCLOUD)
                CoreType.RBAC_MQTT -> CoreParametersMQTT.toMap(if (params == null) null else params as CoreParametersMQTT)
                CoreType.RBAC_MOCK -> if (development) {
                    CoreParametersMOCK.toMap()
                } else {
                    val message = "Using MOCK core when not in development mode"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
            }
        }
    }

    /** Get the profile of the [username] for the current coreType */
    private suspend fun getProfileFromProxy(username: String? = props.username) {
        val actualEndpoint = "$baseURL${PROFILES.replace("{Core}", props.coreType.toString())}?$USERNAME=$username"
        logger.info { "Getting the profile for user $username at endpoint $actualEndpoint" }
        val httpResponse: HttpResponse = props.httpClient.get(actualEndpoint)

        val status = httpResponse.status
        if (status == HttpStatusCode.OK) {
            logger.info { "Response status is $status" }
            val loggedUserCoreParameters = when (props.coreType) {
                CoreType.RBAC_CLOUD -> Json.decodeFromString<CoreParametersCLOUD>(httpResponse.readText())
                CoreType.RBAC_MQTT -> Json.decodeFromString<CoreParametersMQTT>(httpResponse.readText())
                CoreType.RBAC_MOCK -> if (development) {
                    Json.decodeFromString<CoreParametersMOCK>(httpResponse.readText())
                } else {
                    val message = "Using MOCK core when not in development mode"
                    logger.error { message }
                    throw IllegalStateException(message)
                }
            }
            setState {
                props.handleChangeUserHasProfile(true)
                props.handleChangeUserIsAdmin(loggedUserCoreParameters.user.isAdmin)
                props.handleChangeUsername(loggedUserCoreParameters.user.name)
                editProfileFormIsOpen = false
            }
            getFieldsFromParameters(loggedUserCoreParameters)
        } else {
            val text = httpResponse.readText()
            val outcomeCode: OutcomeCode = Json.decodeFromString(text)
            logger.warn { "Response status is ${status}, code is $outcomeCode" }
            props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            setState {
                props.handleChangeUserHasProfile(false)
                props.handleChangeUserIsAdmin(false)
                props.handleChangeUsername(null)
                editProfileFormIsOpen = true
            }
            getFieldsFromParameters()
        }
    }
}

fun content(handler: ContentProps.() -> Unit): ReactElement {
    return createElement {
        child(Content::class) {
            this.attrs(handler)
        }
    }!!
}