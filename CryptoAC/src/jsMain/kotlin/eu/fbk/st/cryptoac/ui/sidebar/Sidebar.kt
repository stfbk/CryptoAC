package eu.fbk.st.cryptoac.ui.sidebar

import eu.fbk.st.cryptoac.API
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.tuples.EnforcementType
import eu.fbk.st.cryptoac.core.tuples.PermissionType
import eu.fbk.st.cryptoac.implementation.ds.DSMQTTMessage
import eu.fbk.st.cryptoac.ui.baseURL
import eu.fbk.st.cryptoac.ui.components.custom.*
import eu.fbk.st.cryptoac.ui.components.icons.*
import eu.fbk.st.cryptoac.ui.components.materialui.core.iconButton
import eu.fbk.st.cryptoac.ui.sidebar.prosidebar.*
import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.css.properties.TextDecoration
import kotlinx.html.InputType
import kotlinx.html.js.onClickFunction
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import mu.KotlinLogging
import org.w3c.dom.HTMLInputElement
import org.w3c.files.File
import org.w3c.files.FileReader
import react.*
import styled.*

private val logger = KotlinLogging.logger {}

external interface SidebarProps : RProps {
    var handleAddMessagesToDisplayInContent: (String, MutableList<DSMQTTMessage>) -> Unit
    var handleToggleSidebar: () -> Unit
    var handleChangeBackdropOpen: (Boolean) -> Unit
    var handleChangeCoreType: (CoreType) -> Unit
    var handleDisplayAlert : (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var proSidebarCollapsed: Boolean
    var collapsedWidth: LinearDimension
    var width: LinearDimension
    var image: String
    var breakpoint: String
    var httpClient: HttpClient
    var userIsAdmin: Boolean
    var userHasProfile: Boolean
    var coreType: CoreType
    var userIsLogged: Boolean
}

external interface SidebarState : RState {
    /** Whether to display the radio options for the core type selection. */
    var displayCoreTypeRadio: Boolean
}

/**
 * The proSidebar React component, consisting of:
 * 1. The header, containing the header text, the options for the coreType and the sidebar toggle icon;
 * 2. The content, containing the CryptoAC forms for invoking CryptoAC APIs;
 * 3. The footer, containing reference to the source GitHub repository.
*/
class Sidebar: RComponent<SidebarProps, SidebarState>() {

    override fun RBuilder.render() {

        /**
         * Very much ugly, but the problem is that we need to create a ReactElement as
         * prop of another element . However, the only way I found to create a ReactElement
         * is to render it. Unfortunately, rendering an element makes it appear on the
         * HTML page automatically. Then, when we give the element as prop to the other
         * component, it gets rendered again. As a result, the element appears in the HTML page twice.
         * To fix this problem, I create the element in a hidden div, then re-use the
         * element as prop. Of course, we have to TODO find a better way.
         */
        var faCaretLeftIcon: ReactElement? = null
        var faCaretRightIcon: ReactElement? = null
        styledDiv {
            css {
                display = Display.none
            }
            faCaretLeftIcon = faCaretLeft { }
            faCaretRightIcon = faCaretRight { }
        }

        proSidebar {
            attrs {
                collapsed = props.proSidebarCollapsed
                collapsedWidth = props.collapsedWidth
                width = props.width
                image = props.image
                breakpoint = props.breakpoint
            }

            /** 1. The header, containing the header text, the options for the coreType and the sidebar toggle icon. */
            proSidebarHeader {
                styledDiv {
                    css {
                        display = Display.block
                        alignItems = Align.center
                        justifyContent = JustifyContent.center
                        textAlign = TextAlign.center
                        textTransform = TextTransform.uppercase
                        fontWeight = FontWeight.bold
                        letterSpacing = 2.px
                        overflow = Overflow.hidden
                        textOverflow = TextOverflow.ellipsis
                        whiteSpace = WhiteSpace.nowrap
                        if (!props.proSidebarCollapsed) {
                            padding(24.px)
                        }
                    }

                    /** The title in the header of the sidebar. */
                    styledP {
                        css {
                            fontSize = 18.px
                            display = Display.inline
                        }
                        attrs.onClickFunction = { _ ->
                            toggleDisplayCoreTypeRadio()
                        }
                        +if (!props.proSidebarCollapsed) "CryptoAC" else ""
                        styledSub {
                            domProps.className = "badge red"
                            css {
                                marginLeft = if (!props.proSidebarCollapsed) 5.px else 0.px
                                fontSize = 10.px
                                cursor = Cursor.pointer
                            }
                            +props.coreType.toString()
                        }
                    }
                    /** Render the sidebar toggle icon based on the current state of the sidebar. */
                    styledDiv {
                        css {
                            display = if (!props.proSidebarCollapsed) Display.inline else Display.block
                        }
                        iconButton {
                            attrs {
                                color = "primary"
                                onClick = { props.handleToggleSidebar() }
                                children = if (!props.proSidebarCollapsed) {
                                    faCaretLeftIcon!!
                                } else {
                                    faCaretRightIcon!!
                                }
                            }
                        }
                    }

                    /** The radio group options for selecting the core type. */
                    styledDiv {
                        css {
                            display = if (!state.displayCoreTypeRadio || props.proSidebarCollapsed) {
                                Display.none
                            } else {
                                Display.initial
                            }
                        }
                        cryptoACRadioGroup {
                            name = "coreType"
                            row = false
                            onChange = { event ->
                                props.handleChangeCoreType(CoreType.valueOf((event.target as HTMLInputElement).value))
                            }
                            options = CoreType.values()
                                .map { CryptoACRadioOption(it.toString(), it.toString(), "primary") }
                            defaultValue = props.coreType.toString()
                        }
                    }
                }
            }

            /** 2. The content, containing the CryptoAC forms for invoking CryptoAC API.; */
            proSidebarContent {
                /** Show the CryptoAC forms only if the user is logged and has a profile. */
                if (props.userIsLogged && props.userHasProfile) {
                    val cryptoACForm = when (props.coreType) {
                        CoreType.RBAC_CLOUD -> if (props.userIsAdmin) (adminCryptoACFormsRBACCloud + userCryptoACFormsRBACCloud) else userCryptoACFormsRBACCloud
                        CoreType.RBAC_MQTT -> if (props.userIsAdmin) (adminCryptoACFormsRBACMQTT + userCryptoACFormsRBACMQTT) else userCryptoACFormsRBACMQTT
                    }
                    cryptoACForm.forEach { cryptoACFormData ->

                        // TODO find a better way.
                        var subMenuIcon: ReactElement? = null
                        styledDiv {
                            css {
                                display = Display.none
                            }
                            subMenuIcon = cryptoACFormData.icon { }
                        }

                        /**
                         * "key" helps the React rendered figure out which parts
                         * of the list need to refresh and which ones can stay the
                         * same (optimisation).
                         */
                        key = cryptoACFormData.key

                        /** Create a pro sidebar menu for containing the form. */
                        proSidebarMenu {
                            attrs.iconShape = "circle"
                            proSidebarSubMenu {
                                attrs {
                                    title = cryptoACFormData.submitButtonText
                                    icon = subMenuIcon!!
                                }

                                /** Render a CryptoAC form component */
                                cryptoACForm {
                                    attrs {
                                        submitButtonText = cryptoACFormData.submitButtonText
                                        endpoint = cryptoACFormData.endpoint
                                        coreType = cryptoACFormData.coreType
                                        method = cryptoACFormData.method
                                        cryptoACFormFields = cryptoACFormData.cryptoACFormFields
                                        submit = cryptoACFormData.submit
                                        handleChangeBackdropOpen = props.handleChangeBackdropOpen
                                        handleDisplayCryptoACAlert = props.handleDisplayAlert
                                    }
                                }
                            }
                        }

                        /** Divider between the add/assign CryptoAC forms and the delete/revoke ones. */
                        if (cryptoACFormData.divider) {
                            styledDiv {
                                css {
                                    borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
                                }
                            }
                        }
                    }
                }
            }

            /** 3. The footer, containing reference to the source GitHub repository. */
            proSidebarFooter {
                styledDiv {
                    css {
                        display = Display.flex
                        alignItems = Align.center
                        justifyContent = JustifyContent.center
                        padding(20.px, 24.px)
                        textAlign = TextAlign.center
                    }
                    styledA(
                        href = "https://github.com/stfbk/CryptoAC",
                        target = "_blank",
                    ) {
                        css {
                            borderRadius = 40.px
                            background = "rgba(255, 255, 255, 0.05)"
                            color = Color("#adadad")
                            textDecoration = TextDecoration.none
                            margin(0.px)
                            height = 35.px
                            display = Display.flex
                            alignItems = Align.center
                            justifyContent = JustifyContent.center
                            textOverflow = TextOverflow.ellipsis
                            overflow = Overflow.hidden
                            hover {
                                color = Color("#d8d8d8")
                            }
                            if (!props.proSidebarCollapsed) {
                                padding(1.px, 15.px)
                            }
                        }
                        faGithub { }
                        if (!props.proSidebarCollapsed) {
                            styledSpan {
                                css {
                                    marginLeft = 5.px
                                    fontSize = 13.px
                                }
                                +"View source"
                            }
                        }
                    }
                }
            }
        }
    }

    /** Init the state with default values. */
    override fun SidebarState.init() {
        logger.info { "Initializing the state of the Sidebar component" }
        displayCoreTypeRadio = false
    }

    /** Toggle the value of the 'displayCoreTypeRadio' state. */
    private fun toggleDisplayCoreTypeRadio() {
        val display = !state.displayCoreTypeRadio
        logger.info { "Setting the 'displayCoreTypeRadio' state to $display" }
        setState { displayCoreTypeRadio = display }
    }

    /**
     * Submit, with the "x-www-form-urlencoded" application content type,
     * the given [values] at the specified [endpoint] through the [method].
     * Finally, handle the HTTP response with the provided [callback] function.
     */
    private fun submitCryptoACFormUrlEncoded (
        method: HttpMethod, endpoint: String,
        values: HashMap<String, String>,
        callback: (HttpResponse, HashMap<String, String>) -> Unit,
    ) {
        logger.info { "Submitting CryptoAC form (method $method, endpoint $endpoint) with the following values:" }
        values.forEach { logger.info { "- key: ${it.key}, value: ${it.value}" } }

        props.handleChangeBackdropOpen(true)

        MainScope().launch {
            /** Send the request based on the method. */
            try {
                if (method == HttpMethod.Post || method == HttpMethod.Patch) {
                    if (method == HttpMethod.Post) {
                        callback(props.httpClient.post(endpoint) {
                            contentType(ContentType.Application.FormUrlEncoded)
                            body = values.toList().formUrlEncode()
                        }, values)
                    } else {
                        callback(props.httpClient.patch(endpoint) {
                            contentType(ContentType.Application.FormUrlEncoded)
                            body = values.toList().formUrlEncode()
                        }, values)
                    }
                }
                else {
                    props.handleChangeBackdropOpen(false)
                    logger.error { "Method $method is not supported" }
                    props.handleDisplayAlert(OutcomeCode.CODE_046_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Exception) {
                props.handleChangeBackdropOpen(false)
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_047_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /**
     * Submit as binary data the given [values] and [files] at the specified
     * [endpoint] through the [method]. Finally, handle the HTTP response with
     * the provided [callback] function.
     */
    private fun submitCryptoACFormWithBinaryData (
        method: HttpMethod, endpoint: String,
        values: HashMap<String, String>, files: HashMap<String, File>,
        callback: (HttpResponse) -> Unit,
    ) {
        logger.info {
            "Submitting CryptoAC form, method $method, endpoint $endpoint, ${files.size} files" +
                    if (values.size > 0) " and the following values:" else ""
        }
        values.forEach { logger.info { "- key: ${it.key}, value: ${it.value}" } }

        props.handleChangeBackdropOpen(true)

        MainScope().launch {
            /** Send the request based on the method. */
            try {
                if (method == HttpMethod.Post || method == HttpMethod.Patch) {
                    val parts = mutableListOf<FormPart<*>>()
                    values.entries.forEach {
                        parts += FormPart(key = it.key, value = it.value)
                    }
                    var fileEntriesUploaded = 0
                    files.entries.forEach {
                        val reader = FileReader()
                        reader.readAsBinaryString(it.value)
                        reader.onload = { _ ->
                            fileEntriesUploaded += 1
                            val fileContent = reader.result.toString()
                            val formPart = FormPart(key = it.key, value = fileContent, Headers.build {
                                append(HttpHeaders.ContentDisposition, "filename=${it.value.name}")
                            })
                            parts += formPart
                            if (fileEntriesUploaded == files.size) {
                                MainScope().launch {
                                    callback(
                                        props.httpClient.submitFormWithBinaryData(
                                            url = endpoint,
                                            formData = formData(*parts.toTypedArray())
                                        ) {
                                            this.method = method
                                        }
                                    )
                                }
                            }
                        }
                    }
                }
                else {
                    props.handleChangeBackdropOpen(false)
                    logger.error { "Method $method is not supported" }
                    props.handleDisplayAlert(OutcomeCode.CODE_046_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Error) {
                props.handleChangeBackdropOpen(false)
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_047_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /**
     * Submit the form as a request in a new tab of the browser, setting the
     * [values] as URL path parameters (if [query] is false) or as URL query
     * parameters (if [query] is true) at the specified [endpoint] through the [method].
     */
    private fun submitCryptoACFormInNewTab (
        method: HttpMethod, endpoint: String,
        values: HashMap<String, String>, query: Boolean
    ) {
        logger.info { "Submitting CryptoAC form (method $method, endpoint $endpoint, query $query) with the following values:" }
        values.forEach { logger.info { "- key: ${it.key}, value: ${it.value}" } }

        props.handleChangeBackdropOpen(true)

        MainScope().launch {
            /** Send the request based on the method. */
            try {
                if (method == HttpMethod.Get) {
                    val endpointWithParameters = StringBuilder(endpoint.substring(0, endpoint.length - 1))
                    if (query) {
                        endpointWithParameters.append("?")
                        values.forEach { endpointWithParameters.append(it.key).append("=").append(it.value) }
                    } else {
                        values.forEach { endpointWithParameters.append("/").append(it.value) }
                    }
                    val win = window.open(url = endpointWithParameters.toString(), target = "_blank")
                    props.handleChangeBackdropOpen(false)
                    win?.onload = {
                        /** The file was correctly downloaded from the proxy. */
                        if (win!!.document == undefined) {
                            logger.info { "Get request successful" }
                            props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                        }
                        win.close()
                    }
                }
                else {
                    props.handleChangeBackdropOpen(false)
                    logger.error { "Method $method is not supported" }
                    props.handleDisplayAlert(OutcomeCode.CODE_046_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Error) {
                props.handleChangeBackdropOpen(false)
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_047_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /**
     * Submit the form setting the [values] as URL path parameters (if [query] is false) or as
     * URL query parameters (if [query] is true) at the specified [endpoint] through the [method].
     */
    private fun submitCryptoACForm(
        method: HttpMethod, endpoint: String,
        values: HashMap<String, String>,
        query: Boolean,
        callback: (HttpResponse, HashMap<String, String>) -> Unit,
    ) {
        logger.info { "Submitting CryptoAC form (method $method, endpoint $endpoint, query $query) with the following values:" }
        values.forEach { logger.info { "- key: ${it.key}, value: ${it.value}" } }

        props.handleChangeBackdropOpen(true)

        MainScope().launch {
            /** Send the request based on the method. */
            try {
                if (method == HttpMethod.Delete || method == HttpMethod.Get) {
                    val endpointWithParameters = StringBuilder(endpoint.substring(0, endpoint.length - 1))
                    if (query) {
                        endpointWithParameters.append("?")
                        values.forEach { endpointWithParameters.append(it.key).append("=").append(it.value) }
                    } else {
                        values.forEach { endpointWithParameters.append("/").append(it.value) }
                    }
                    if (method == HttpMethod.Delete) {
                        callback(props.httpClient.delete(endpointWithParameters.toString()), values)
                    } else if (method == HttpMethod.Get) {
                        callback(props.httpClient.get(endpointWithParameters.toString()), values)
                    }
                }
                else {
                    props.handleChangeBackdropOpen(false)
                    logger.error { "Method $method is not supported" }
                    props.handleDisplayAlert(OutcomeCode.CODE_046_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Exception) {
                props.handleChangeBackdropOpen(false)
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_047_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }



    /** Handle the [response] from the proxy by showing in the alert the outcome code. */
    private fun callbackShowOutcomeCode(response: HttpResponse) {

        props.handleChangeBackdropOpen(false)

        MainScope().launch {
            val status = response.status
            if (status == HttpStatusCode.OK) {
                logger.info { "Response status is $status" }
                props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
            } else {
                val outcomeCode = Json.decodeFromString<OutcomeCode>(response.readText())
                logger.warn { "Response status is $status, outcome code is $outcomeCode" }
                props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /** Handle the [response] from the proxy by getting the profile of the new user. */
    private fun callbackDownloadUserProfile(response: HttpResponse, values: HashMap<String, String>) {

        props.handleChangeBackdropOpen(false)

        MainScope().launch {
            val status = response.status
            if (status == HttpStatusCode.OK) {
                logger.info { "Response status is $status" }
                val text = response.readText()
                val element = document.createElement("a")
                element.setAttribute("href", "data:application/json;charset=utf-8,$text")
                element.setAttribute("download", "${values[SERVER.USERNAME]}.json")
                element.setAttribute("display", "none")
                document.body!!.appendChild(element)
                element.asDynamic().click()
                document.body!!.removeChild(element)
                /*logger.info { "Getting the user profile from the proxy" }
                submitCryptoACFormInNewTab( // TODO is this needed?
                    method = HttpMethod.Get,
                    endpoint = "$baseURL${API.PROFILES.replace("{${SERVER.CORE}}", props.coreType.toString())}",
                    values = values,
                    query = true
                )*/
            } else {
                val outcomeCode = Json.decodeFromString<OutcomeCode>(response.readText())
                logger.warn { "Response status is $status, outcome code is $outcomeCode" }
                props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /** Handle the [response] from the proxy by displaying the received MQTT messages in the content. */
    private fun callbackReceiveMQTTMessages(response: HttpResponse, values: HashMap<String, String>) {

        props.handleChangeBackdropOpen(false)

        MainScope().launch {
            val status = response.status
            if (status == HttpStatusCode.OK) {
                logger.info { "Response status is $status" }
                val mqttMessages: MutableList<DSMQTTMessage> = Json.decodeFromString(response.readText())
                if (mqttMessages.isEmpty()) {
                    props.handleDisplayAlert(OutcomeCode.CODE_051_NO_NEW_MESSAGES_TO_READ, CryptoACAlertSeverity.INFO)
                } else {
                    props.handleAddMessagesToDisplayInContent(values[SERVER.FILE_NAME]!!, mqttMessages)
                }
            } else {
                val outcomeCode = Json.decodeFromString<OutcomeCode>(response.readText())
                logger.warn { "Response status is $status, outcome code is $outcomeCode" }
                props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /** CryptoAC forms for the administrator in the CLOUD implementation. */
    private val adminCryptoACFormsRBACCloud = listOf(

        /** Add user form. */
        CryptoACFormData(
            icon = faUserPlus,
            key = "add_user",
            submitButtonText = "Add User",
            endpoint = API.PROXY + API.USERS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, params -> callbackDownloadUserProfile(response, params) }
            },
            cryptoACFormFields = listOf(listOf(
                CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)
            ))
        ),

        /** Add role form. */
        CryptoACFormData(
            icon = faUserSecret,
            key = "add_role",
            submitButtonText = "Add Role",
            endpoint = API.PROXY + API.ROLES,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(listOf(
                CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)
            ))
        ),

        /** Assign user to role form. */
        CryptoACFormData(
            icon = faUserFriends,
            key = "assign_user_to_role",
            submitButtonText = "Assign User to Role",
            endpoint = API.PROXY + API.ASSIGNMENTS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)),
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Assign permission to role form. */
        CryptoACFormData(
            icon = faUserShield,
            key = "assign_permission_to_role",
            submitButtonText = "Assign Permission to Role",
            endpoint = API.PROXY + API.PERMISSIONS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.FILE_NAME, SERVER.FILE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.PERMISSION, SERVER.PERMISSION, InputType.radio, listOf(
                    PermissionType.READ.toString(), PermissionType.READWRITE.toString()
                ), PermissionType.READ.toString())),
            ),
            divider = true
        ),

        /** Delete user form. */
        CryptoACFormData(
            icon = faUserMinus,
            key = "delete_user",
            submitButtonText = "Delete User",
            endpoint = API.PROXY + API.USERS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text))
            )
        ),

        /** Delete role form. */
        CryptoACFormData(
            icon = faUserNinja,
            key = "delete_role",
            submitButtonText = "Delete Role",
            endpoint = API.PROXY + API.ROLES,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Delete file form. */
        CryptoACFormData(
            icon = faFileExcel,
            key = "delete_file",
            submitButtonText = "Delete File",
            endpoint = API.PROXY + API.FILES,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.FILE_NAME, SERVER.FILE_NAME.replace("_", " "), InputType.text)),
            )
        ),


        /** Revoke user from role form. */
        CryptoACFormData(
            icon = faUserTimes,
            key = "revoke_user_from_role",
            submitButtonText = "Revoke User from Role",
            endpoint = API.PROXY + API.ASSIGNMENTS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)),
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Revoke permission from role form. */
        CryptoACFormData(
            icon = faUserLock,
            key = "revoke_permission_from_role",
            submitButtonText = "Revoke Permission from Role",
            endpoint = API.PROXY + API.PERMISSIONS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.FILE_NAME, SERVER.FILE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.PERMISSION, SERVER.PERMISSION, InputType.radio, listOf(
                    PermissionType.READWRITE.toString(), PermissionType.WRITE.toString()
                ), PermissionType.READWRITE.toString())),
            ),
            divider = true
        ),
    )

    /** CryptoAC forms for the user in the CLOUD implementation. */
    private val userCryptoACFormsRBACCloud = listOf(

        /** Add file form. */
        CryptoACFormData(
            icon = faFileMedical,
            key = "add_file",
            submitButtonText = "Add File",
            endpoint = API.PROXY + API.FILES,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, files ->
                submitCryptoACFormWithBinaryData(method, endpoint, values, files) { response -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.FILE_NAME, SERVER.FILE_NAME, InputType.file)),
                listOf(CryptoACFormField(SERVER.ENFORCEMENT, SERVER.ENFORCEMENT, InputType.radio, listOf(
                    EnforcementType.COMBINED.toString(), EnforcementType.TRADITIONAL.toString()
                ), EnforcementType.COMBINED.toString())),
            )
        ),

        /** Write file form. */
        CryptoACFormData(
            icon = faFileSignature,
            key = "write_file",
            submitButtonText = "Write File",
            endpoint = API.PROXY + API.FILES,
            method = HttpMethod.Patch,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, files ->
                submitCryptoACFormWithBinaryData(method, endpoint, values, files) { response -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(listOf(
                CryptoACFormField(SERVER.FILE_NAME, SERVER.FILE_NAME, InputType.file)
            ))
        ),

        /** Read file form. */
        CryptoACFormData(
            icon = faFileDownload,
            key = "read_file",
            submitButtonText = "Read File",
            endpoint = API.PROXY + API.FILES,
            method = HttpMethod.Get,
            coreType = CoreType.RBAC_CLOUD,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormInNewTab(method, endpoint, values, false)
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.FILE_NAME, SERVER.FILE_NAME.replace("_", " "), InputType.text))
            )
        ),
    )

    /** CryptoAC forms for the administrator in the MQTT implementation. */
    private val adminCryptoACFormsRBACMQTT = listOf(

        /** Add user form. */
        CryptoACFormData(
            icon = faUserPlus,
            key = "add_user",
            submitButtonText = "Add User",
            endpoint = API.PROXY + API.USERS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, params-> callbackDownloadUserProfile(response, params) }
            },
            cryptoACFormFields = listOf(listOf(
                CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)
            ))
        ),

        /** Add role form. */
        CryptoACFormData(
            icon = faUserSecret,
            key = "add_role",
            submitButtonText = "Add Role",
            endpoint = API.PROXY + API.ROLES,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(listOf(
                CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)
            ))
        ),

        /** Add file form. */
        CryptoACFormData(
            icon = faFileMedical,
            key = "add_file",
            submitButtonText = "Add Topic",
            endpoint = API.PROXY + API.FILES,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.FILE_NAME, SERVER.FILE_NAME, InputType.text)),
                listOf(CryptoACFormField(SERVER.ENFORCEMENT, SERVER.ENFORCEMENT, InputType.radio, listOf(
                    EnforcementType.COMBINED.toString(), EnforcementType.TRADITIONAL.toString()
                ), EnforcementType.COMBINED.toString())),
            )
        ),

        /** Assign user to role form. */
        CryptoACFormData(
            icon = faUserFriends,
            key = "assign_user_to_role",
            submitButtonText = "Assign User to Role",
            endpoint = API.PROXY + API.ASSIGNMENTS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)),
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Assign permission to role form. */
        CryptoACFormData(
            icon = faUserShield,
            key = "assign_permission_to_role",
            submitButtonText = "Assign Permission to Role",
            endpoint = API.PROXY + API.PERMISSIONS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.FILE_NAME, "Topic Name", InputType.text)),
                listOf(CryptoACFormField(SERVER.PERMISSION, SERVER.PERMISSION, InputType.radio, listOf(
                    PermissionType.READ.toString(), PermissionType.READWRITE.toString()
                ), PermissionType.READ.toString())),
            ),
            divider = true
        ),

        /** Delete user form. */
        CryptoACFormData(
            icon = faUserMinus,
            key = "delete_user",
            submitButtonText = "Delete User",
            endpoint = API.PROXY + API.USERS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text))
            )
        ),

        /** Delete role form. */
        CryptoACFormData(
            icon = faUserNinja,
            key = "delete_role",
            submitButtonText = "Delete Role",
            endpoint = API.PROXY + API.ROLES,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Delete file (topic) form. */
        CryptoACFormData(
            icon = faFileExcel,
            key = "delete_file",
            submitButtonText = "Delete Topic",
            endpoint = API.PROXY + API.FILES,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.FILE_NAME, "Topic Name", InputType.text)),
            )
        ),


        /** Revoke user from role form. */
        CryptoACFormData(
            icon = faUserTimes,
            key = "revoke_user_from_role",
            submitButtonText = "Revoke User from Role",
            endpoint = API.PROXY + API.ASSIGNMENTS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)),
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Revoke permission from role form. */
        CryptoACFormData(
            icon = faUserLock,
            key = "revoke_permission_from_role",
            submitButtonText = "Revoke Permission from Role",
            endpoint = API.PROXY + API.PERMISSIONS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.FILE_NAME, "Topic Name", InputType.text)),
                listOf(CryptoACFormField(SERVER.PERMISSION, SERVER.PERMISSION, InputType.radio, listOf(
                    PermissionType.READWRITE.toString(), PermissionType.WRITE.toString()
                ), PermissionType.READWRITE.toString())),
            ),
            divider = true
        ),
    )

    /** CryptoAC forms for the user in the MQTT implementation. */
    private val userCryptoACFormsRBACMQTT = listOf(

        /** Write file form. */
        CryptoACFormData(
            icon = faFileSignature,
            key = "write_file",
            submitButtonText = "Publish to Topic",
            endpoint = API.PROXY + API.FILES,
            method = HttpMethod.Patch,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormUrlEncoded(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(listOf(
                CryptoACFormField(SERVER.FILE_NAME, "Topic Name", InputType.text),
                CryptoACFormField(SERVER.FILE_CONTENT, "Message", InputType.text)
            ))
        ),

        /** Read file form. */
        CryptoACFormData(
            icon = faFileDownload,
            key = "read_file",
            submitButtonText = "Read from Topic",
            endpoint = API.PROXY + API.FILES,
            method = HttpMethod.Get,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, params -> callbackReceiveMQTTMessages(response, params) }
            },
            cryptoACFormFields = listOf(
                listOf(
                    CryptoACFormField(SERVER.FILE_NAME, "Topic Name", InputType.text),
                )
            )
        ),
    )
}

/** Extend RBuilder for easier use of this React component. */
fun RBuilder.proSidebarWrapper(handler: SidebarProps.() -> Unit): ReactElement {
    return child(Sidebar::class) {
        this.attrs(handler)
    }
}