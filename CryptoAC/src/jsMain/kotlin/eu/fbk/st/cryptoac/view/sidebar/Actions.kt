package eu.fbk.st.cryptoac.view.sidebar

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.core.myJson
import eu.fbk.st.cryptoac.model.tuple.PermissionType
import eu.fbk.st.cryptoac.model.unit.EnforcementType
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.icons.*
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarContent
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarMenu
import eu.fbk.st.cryptoac.view.components.prosidebar.proSidebarSubMenu
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
import kotlinx.serialization.decodeFromString
import mu.KotlinLogging
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Int8Array
import org.w3c.files.File
import org.w3c.files.FileReader
import react.*

private val logger = KotlinLogging.logger {}

external interface ActionsProps : Props {
    var handleDisplayAlert: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var handleAddTableInContent: (String) -> Unit
    var userIsAdmin: Boolean
    var httpClient: HttpClient
    var coreType: CoreType
}

/**
 * The React component containing the
 * forms for invoking CryptoAC APIs;
 */
class Actions : RComponent<ActionsProps, State>() {

    // TODO autocomplete fields based on tables in the dashboard (e.g., with Lucene?)

    override fun RBuilder.render() {

        proSidebarContent {

            /** Show the CryptoAC forms only if the user is logged and has a profile */
            val cryptoACForm = when (props.coreType) {
                CoreType.RBAC_AT_REST -> if (props.userIsAdmin) {
                    (adminCryptoACFormsRBACCryptoAC + userCryptoACFormsRBACCloud)
                } else {
                    userCryptoACFormsRBACCloud
                }
                CoreType.RBAC_MQTT -> if (props.userIsAdmin) {
                    (adminCryptoACFormsRBACMQTT + userCryptoACFormsRBACMQTT)
                } else {
                    userCryptoACFormsRBACMQTT
                }
                CoreType.ABAC_AT_REST -> TODO()
                CoreType.ABAC_MQTT -> TODO()
            }
            cryptoACForm.forEach { cryptoACFormData ->

                /**
                 * "key" helps the React rendered figure out which parts
                 * of the list need to refresh and which ones can stay the
                 * same (optimisation).
                 */
                key = cryptoACFormData.key

                /** Create a pro sidebar menu for containing the form */
                proSidebarMenu {
                    attrs.iconShape = "circle"
                    proSidebarSubMenu {
                        attrs {
                            title = cryptoACFormData.submitButtonText
                            icon = createElement { cryptoACFormData.icon { } }!!
                        }

                        /** Render a CryptoAC form component */
                        child(
                            cryptoACForm {
                                attrs {
                                    acceptDisabledElements = false
                                    submitButtonText = cryptoACFormData.submitButtonText
                                    endpoint = cryptoACFormData.endpoint
                                    coreType = cryptoACFormData.coreType
                                    method = cryptoACFormData.method
                                    cryptoACFormFields = cryptoACFormData.cryptoACFormFields
                                    handleSubmitEvent = cryptoACFormData.submit
                                    handleDisplayAlert = props.handleDisplayAlert
                                }
                            }
                        )
                    }
                }

                /** Divider between the add/assign CryptoAC forms and the delete/revoke ones */
                if (cryptoACFormData.divider) {
                    child(
                        cryptoACDivider {
                            width = 100.pct
                            marginTop = 0.px
                            marginBottom = 0.px
                        }
                    )
                }
            }
        }
    }

    /**
     * Submit the given [values] at the specified [endpoint] through the [method].
     * Finally, handle the HTTP response with the provided [callback] function
     */
    private fun submitCryptoACForm(
        method: HttpMethod,
        endpoint: String,
        values: HashMap<String, String>,
        callback: (HttpResponse, HashMap<String, String>) -> Unit,
    ) {
        logger.info { "Submitting CryptoAC form (method $method, endpoint $endpoint) with the following values:" }
        values.forEach { logger.info { "- key: ${it.key}, value: ${it.value}" } }

        props.handleChangeBackdropIsOpen(true)

        MainScope().launch {
            /** Send the request based on the method */
            try {
                if (method == HttpMethod.Post || method == HttpMethod.Patch) {
                    if (method == HttpMethod.Post) {
                        callback(
                            props.httpClient.submitForm(
                                formParameters = Parameters.build {
                                    values.forEach {
                                        append(it.key, it.value)
                                    }
                                }
                            ) {
                                url(endpoint)
                            },
                            values
                        )
                    } else {
                        callback(
                            props.httpClient.submitFormPatch(
                                formParameters = Parameters.build {
                                    values.forEach {
                                        append(it.key, it.value)
                                    }
                                }
                            ) {
                                url(endpoint)
                            },
                            values
                        )
                    }
                } else {
                    props.handleChangeBackdropIsOpen(false)
                    logger.error { "Method $method is not supported" }
                    props.handleDisplayAlert(OutcomeCode.CODE_048_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Exception) {
                props.handleChangeBackdropIsOpen(false)
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /**
     * Submit as binary data the given [values] and [files] at the specified
     * [endpoint] through the [method]. Finally, handle the HTTP response with
     * the provided [callback] function
     */
    private fun submitCryptoACFormWithBinaryData(
        method: HttpMethod,
        endpoint: String,
        values: HashMap<String, String>,
        files: HashMap<String, File>,
        callback: (HttpResponse) -> Unit,
    ) {
        logger.info {
            "Submitting CryptoAC form, method $method, endpoint $endpoint, ${files.size} files" +
                if (values.size > 0) " and the following values:" else ""
        }
        values.forEach { logger.info { "- key: ${it.key}, value: ${it.value}" } }

        props.handleChangeBackdropIsOpen(true)

        MainScope().launch {
            /** Send the request based on the method */
            try {
                if (method == HttpMethod.Post || method == HttpMethod.Patch) {
                    val parts = mutableListOf<FormPart<*>>()
                    values.entries.forEach {
                        parts += FormPart(key = it.key, value = it.value)
                    }
                    var fileEntriesUploaded = 0
                    files.entries.forEach {
                        val reader = FileReader()
                        reader.readAsArrayBuffer(it.value)//reader.readAsBinaryString(it.value)
                        reader.onload = { _ ->
                            fileEntriesUploaded += 1

                            /**
                             * TODO the code below works fine, but there should be new APIs to avoid unsafe casts
                             * See https://youtrack.jetbrains.com/issue/KT-30098/Add-extension-function-on-ArrayBuffer-to-ByteArray-in-JS-stdlib
                             * (there should also be APIs here: https://api.ktor.io/ktor-io/io.ktor.utils.io.js/index.html
                             */
                            val fileContent = Int8Array(reader.result as ArrayBuffer).unsafeCast<ByteArray>()

                            val formPart = FormPart(
                                key = it.key,
                                value = fileContent,
                                headers = Headers.build {
                                    append(HttpHeaders.ContentDisposition, "filename=${it.value.name}")
                                }
                            )
                            parts += formPart
                            if (fileEntriesUploaded == files.size) {
                                MainScope().launch {
                                    callback(
                                        props.httpClient.submitFormWithBinaryData(
                                            url = endpoint,
                                            formData = formData(*parts.toTypedArray()),
                                        ) {
                                            this.method = method
                                        }
                                    )
                                }
                            }
                        }
                    }
                } else {
                    props.handleChangeBackdropIsOpen(false)
                    logger.error { "Method $method is not supported" }
                    props.handleDisplayAlert(OutcomeCode.CODE_048_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Error) {
                props.handleChangeBackdropIsOpen(false)
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /**
     * Submit the form as a request in a new tab of the browser, setting the
     * [values] as URL path parameters (if [query] is false) or as URL query
     * parameters (if [query] is true) at the specified [endpoint] through the [method]
     */
    private fun submitCryptoACFormInNewTab(
        method: HttpMethod,
        endpoint: String,
        values: HashMap<String, String>,
        query: Boolean
    ) {
        logger.info { "Submitting CryptoAC form (method $method, endpoint $endpoint, query $query) with the following values:" }
        values.forEach { logger.info { "- key: ${it.key}, value: ${it.value}" } }

        props.handleChangeBackdropIsOpen(true)

        MainScope().launch {
            /** Send the request based on the method */
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
                    props.handleChangeBackdropIsOpen(false)
                    win?.onload = {
                        /** The file was correctly downloaded from CryptoAC */
                        if (win!!.document == undefined) {
                            logger.info { "Get request successful" }
                            props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                        }
                        win.close()
                    }
                } else {
                    props.handleChangeBackdropIsOpen(false)
                    logger.error { "Method $method is not supported" }
                    props.handleDisplayAlert(OutcomeCode.CODE_048_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Error) {
                props.handleChangeBackdropIsOpen(false)
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /**
     * Submit the form setting the [values] as URL path parameters (if [query] is false) or as
     * URL query parameters (if [query] is true) at the specified [endpoint] through the [method]
     */
    private fun submitCryptoACForm(
        method: HttpMethod,
        endpoint: String,
        values: HashMap<String, String>,
        query: Boolean,
        callback: (HttpResponse, HashMap<String, String>) -> Unit,
    ) {
        logger.info { "Submitting CryptoAC form (method $method, endpoint $endpoint, query $query) with the following values:" }
        values.forEach { logger.info { "- key: ${it.key}, value: ${it.value}" } }

        props.handleChangeBackdropIsOpen(true)

        MainScope().launch {
            /** Send the request based on the method */
            try {
                if (method == HttpMethod.Delete || method == HttpMethod.Get) {
                    val endpointWithParameters = StringBuilder(endpoint.substring(0, endpoint.length - 1))
                    if (query) {
                        endpointWithParameters.append("?")
                        values.forEach { endpointWithParameters.append(it.key).append("=").append(it.value.replace("/", "%2F")) } // TODO "it.value.replace("/", "%2F")" encodes '/', but not all URL characters. Find a better solution to build URLs in Ktor (start from here https://ktor.io/docs/request.html)
                    } else {
                        values.forEach { endpointWithParameters.append("/").append(it.value.replace("/", "%2F")) } // TODO "it.value.replace("/", "%2F")" encodes '/', but not all URL characters. Find a better solution to build URLs in Ktor (start from here https://ktor.io/docs/request.html)
                    }
                    if (method == HttpMethod.Delete) {
                        callback(props.httpClient.delete { url(endpointWithParameters.toString()) }, values)
                    } else if (method == HttpMethod.Get) {
                        callback(props.httpClient.get { url(endpointWithParameters.toString()) }, values)
                    }
                } else {
                    props.handleChangeBackdropIsOpen(false)
                    logger.error { "Method $method is not supported" }
                    props.handleDisplayAlert(OutcomeCode.CODE_048_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
                }
            } catch (e: Exception) {
                props.handleChangeBackdropIsOpen(false)
                logger.error { "Error during HTTP request (${e.message}), see console log for details" }
                console.log(e)
                props.handleDisplayAlert(OutcomeCode.CODE_049_UNEXPECTED, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /** Handle the [response] from CryptoAC by showing in the alert the outcome code */
    private fun callbackShowOutcomeCode(response: HttpResponse) {

        props.handleChangeBackdropIsOpen(false)

        MainScope().launch {
            val status = response.status
            if (status == HttpStatusCode.OK) {
                logger.info { "Response status is $status" }
                props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
            } else {
                val outcomeCode = myJson.decodeFromString<OutcomeCode>(response.bodyAsText())
                logger.warn { "Response status is $status, outcome code is $outcomeCode" }
                props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /** Handle the [response] from CryptoAC by getting the profile of the new user */
    private fun callbackDownloadUserProfile(response: HttpResponse, values: HashMap<String, String>) {

        props.handleChangeBackdropIsOpen(false)

        MainScope().launch {
            val status = response.status
            if (status == HttpStatusCode.OK) {
                logger.info { "Response status is $status" }
                val text = response.bodyAsText()
                val element = document.createElement("a")
                element.setAttribute("href", "data:application/json;charset=utf-8,$text")
                element.setAttribute("download", "${values[SERVER.USERNAME]}.json")
                element.setAttribute("display", "none")
                document.body!!.appendChild(element)
                element.asDynamic().click()
                document.body!!.removeChild(element)
            } else {
                val outcomeCode = myJson.decodeFromString<OutcomeCode>(response.bodyAsText())
                logger.warn { "Response status is $status, outcome code is $outcomeCode" }
                props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /** Handle the [response] from CryptoAC by displaying the received MQTT messages in the content */
    private fun callbackSubscribeToTopic(response: HttpResponse, values: HashMap<String, String>) {

        props.handleChangeBackdropIsOpen(false)

        MainScope().launch {
            val status = response.status
            if (status == HttpStatusCode.OK) {
                logger.info { "Response status is $status" }
                props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                props.handleAddTableInContent(values[SERVER.RESOURCE_NAME]!!)
            } else {
                val outcomeCode = myJson.decodeFromString<OutcomeCode>(response.bodyAsText())
                logger.warn { "Response status is $status, outcome code is $outcomeCode" }
                props.handleDisplayAlert(outcomeCode, CryptoACAlertSeverity.ERROR)
            }
        }
    }

    /** CryptoAC forms for the admin in the CryptoAC implementation */
    private val adminCryptoACFormsRBACCryptoAC = listOf(

        /** Add user form */
        CryptoACFormData(
            icon = faUserPlus,
            key = "add_user",
            submitButtonText = "Add User",
            endpoint = API.CRYPTOAC + API.USERS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, params -> callbackDownloadUserProfile(response, params) }
            },
            cryptoACFormFields = listOf(
                listOf(
                    CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)
                )
            )
        ),

        /** Add role form */
        CryptoACFormData(
            icon = faUserSecret,
            key = "add_role",
            submitButtonText = "Add Role",
            endpoint = API.CRYPTOAC + API.ROLES,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(
                    CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)
                )
            )
        ),

        /** Assign user to role form */
        CryptoACFormData(
            icon = faUserFriends,
            key = "assign_user_to_role",
            submitButtonText = "Assign User to Role",
            endpoint = API.CRYPTOAC + API.ASSIGNMENTS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)),
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Assign permission to role form */
        CryptoACFormData(
            icon = faUserShield,
            key = "assign_permission_to_role",
            submitButtonText = "Assign Permission to Role",
            endpoint = API.CRYPTOAC + API.PERMISSIONS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.RESOURCE_NAME, SERVER.RESOURCE_NAME.replace("_", " "), InputType.text)),
                listOf(
                    CryptoACFormField(
                        SERVER.PERMISSION, SERVER.PERMISSION, InputType.radio,
                        listOf(
                            PermissionType.READ.toString(), PermissionType.READWRITE.toString()
                        ),
                        PermissionType.READ.toString()
                    )
                ),
            ),
            divider = true
        ),

        /** Delete user form */
        CryptoACFormData(
            icon = faUserMinus,
            key = "delete_user",
            submitButtonText = "Delete User",
            endpoint = API.CRYPTOAC + API.USERS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text))
            )
        ),

        /** Delete role form */
        CryptoACFormData(
            icon = faUserNinja,
            key = "delete_role",
            submitButtonText = "Delete Role",
            endpoint = API.CRYPTOAC + API.ROLES,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Delete resource form */
        CryptoACFormData(
            icon = faFileExcel,
            key = "delete_resource",
            submitButtonText = "Delete File",
            endpoint = API.CRYPTOAC + API.RESOURCES,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.RESOURCE_NAME, SERVER.RESOURCE_NAME.replace("_", " "), InputType.text)),
            )
        ),

        /** Revoke user from role form */
        CryptoACFormData(
            icon = faUserTimes,
            key = "revoke_user_from_role",
            submitButtonText = "Revoke User from Role",
            endpoint = API.CRYPTOAC + API.ASSIGNMENTS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)),
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Revoke permission from role form */
        CryptoACFormData(
            icon = faUserLock,
            key = "revoke_permission_from_role",
            submitButtonText = "Revoke Permission from Role",
            endpoint = API.CRYPTOAC + API.PERMISSIONS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.RESOURCE_NAME, SERVER.RESOURCE_NAME.replace("_", " "), InputType.text)),
                listOf(
                    CryptoACFormField(
                        SERVER.PERMISSION, SERVER.PERMISSION, InputType.radio,
                        listOf(
                            PermissionType.READWRITE.toString(), PermissionType.WRITE.toString()
                        ),
                        PermissionType.READWRITE.toString()
                    )
                ),
            ),
            divider = true
        ),
    )

    /** CryptoAC forms for the user in the CryptoAC implementation */
    private val userCryptoACFormsRBACCloud = listOf(

        /** Add resource form */
        CryptoACFormData(
            icon = faFileMedical,
            key = "add_resource",
            submitButtonText = "Add File",
            endpoint = API.CRYPTOAC + API.RESOURCES,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, files ->
                submitCryptoACFormWithBinaryData(method, endpoint, values, files) { response -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(
                    CryptoACFormField(
                        SERVER.RESOURCE_NAME,
                        "Upload here your file",
                        InputType.file
                    )
                ),
                listOf(
                    CryptoACFormField(
                        SERVER.ENFORCEMENT, SERVER.ENFORCEMENT, InputType.radio,
                        listOf(
                            EnforcementType.COMBINED.toString(), EnforcementType.TRADITIONAL.toString()
                        ),
                        EnforcementType.COMBINED.toString()
                    )
                ),
            )
        ),

        /** Write resource form */
        CryptoACFormData(
            icon = faFileSignature,
            key = "write_resource",
            submitButtonText = "Write File",
            endpoint = API.CRYPTOAC + API.RESOURCES,
            method = HttpMethod.Patch,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, files ->
                submitCryptoACFormWithBinaryData(method, endpoint, values, files) { response -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(
                    CryptoACFormField(
                        SERVER.RESOURCE_NAME,
                        "Upload here your file",
                        InputType.file
                    )
                )
            )
        ),

        /** Read resource form */
        CryptoACFormData(
            icon = faFileDownload,
            key = "read_resource",
            submitButtonText = "Read File",
            endpoint = API.CRYPTOAC + API.RESOURCES,
            method = HttpMethod.Get,
            coreType = CoreType.RBAC_AT_REST,
            submit = { method, endpoint, values, _ ->
                submitCryptoACFormInNewTab(method, endpoint, values, false)
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.RESOURCE_NAME, SERVER.RESOURCE_NAME.replace("_", " "), InputType.text))
            )
        ),
    )

    /** CryptoAC forms for the admin in the MQTT implementation */
    private val adminCryptoACFormsRBACMQTT = listOf(

        /** Add user form */
        CryptoACFormData(
            icon = faUserPlus,
            key = "add_user",
            submitButtonText = "Add User",
            endpoint = API.CRYPTOAC + API.USERS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, params -> callbackDownloadUserProfile(response, params) }
            },
            cryptoACFormFields = listOf(
                listOf(
                    CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)
                )
            )
        ),

        /** Add role form */
        CryptoACFormData(
            icon = faUserSecret,
            key = "add_role",
            submitButtonText = "Add Role",
            endpoint = API.CRYPTOAC + API.ROLES,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(
                    CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)
                )
            )
        ),

        /** Add resource form */
        CryptoACFormData(
            icon = faFileMedical,
            key = "add_resource",
            submitButtonText = "Add Topic",
            endpoint = API.CRYPTOAC + API.RESOURCES,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.RESOURCE_NAME, SERVER.RESOURCE_NAME, InputType.text)),
                listOf(
                    CryptoACFormField(
                        SERVER.ENFORCEMENT, SERVER.ENFORCEMENT, InputType.radio,
                        listOf(
                            EnforcementType.COMBINED.toString(), EnforcementType.TRADITIONAL.toString()
                        ),
                        EnforcementType.COMBINED.toString()
                    )
                ),
            )
        ),

        /** Assign user to role form */
        CryptoACFormData(
            icon = faUserFriends,
            key = "assign_user_to_role",
            submitButtonText = "Assign User to Role",
            endpoint = API.CRYPTOAC + API.ASSIGNMENTS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text)),
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Assign permission to role form */
        CryptoACFormData(
            icon = faUserShield,
            key = "assign_permission_to_role",
            submitButtonText = "Assign Permission to Role",
            endpoint = API.CRYPTOAC + API.PERMISSIONS,
            method = HttpMethod.Post,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.RESOURCE_NAME, "Topic Name", InputType.text)),
                listOf(
                    CryptoACFormField(
                        SERVER.PERMISSION, SERVER.PERMISSION, InputType.radio,
                        listOf(
                            PermissionType.READ.toString(), PermissionType.READWRITE.toString()
                        ),
                        PermissionType.READ.toString()
                    )
                ),
            ),
            divider = true
        ),

        /** Delete user form */
        CryptoACFormData(
            icon = faUserMinus,
            key = "delete_user",
            submitButtonText = "Delete User",
            endpoint = API.CRYPTOAC + API.USERS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.USERNAME, SERVER.USERNAME, InputType.text))
            )
        ),

        /** Delete role form */
        CryptoACFormData(
            icon = faUserNinja,
            key = "delete_role",
            submitButtonText = "Delete Role",
            endpoint = API.CRYPTOAC + API.ROLES,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text))
            )
        ),

        /** Delete resource form */
        CryptoACFormData(
            icon = faFileExcel,
            key = "delete_resource",
            submitButtonText = "Delete Topic",
            endpoint = API.CRYPTOAC + API.RESOURCES,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.RESOURCE_NAME, "Topic Name", InputType.text)),
            )
        ),

        /** Revoke user from role form */
        CryptoACFormData(
            icon = faUserTimes,
            key = "revoke_user_from_role",
            submitButtonText = "Revoke User from Role",
            endpoint = API.CRYPTOAC + API.ASSIGNMENTS,
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

        /** Revoke permission from role form */
        CryptoACFormData(
            icon = faUserLock,
            key = "revoke_permission_from_role",
            submitButtonText = "Revoke Permission from Role",
            endpoint = API.CRYPTOAC + API.PERMISSIONS,
            method = HttpMethod.Delete,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(CryptoACFormField(SERVER.ROLE_NAME, SERVER.ROLE_NAME.replace("_", " "), InputType.text)),
                listOf(CryptoACFormField(SERVER.RESOURCE_NAME, "Topic Name", InputType.text)),
                listOf(
                    CryptoACFormField(
                        SERVER.PERMISSION, SERVER.PERMISSION, InputType.radio,
                        listOf(
                            PermissionType.READWRITE.toString(), PermissionType.WRITE.toString()
                        ),
                        PermissionType.READWRITE.toString()
                    )
                ),
            ),
            divider = true
        ),
    )

    /** CryptoAC forms for the user in the MQTT implementation */
    private val userCryptoACFormsRBACMQTT = listOf(

        /** Write resource form */
        CryptoACFormData(
            icon = faFileSignature,
            key = "write_resource",
            submitButtonText = "Publish to Topic",
            endpoint = API.CRYPTOAC + API.RESOURCES,
            method = HttpMethod.Patch,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values) { response, _ -> callbackShowOutcomeCode(response) }
            },
            cryptoACFormFields = listOf(
                listOf(
                    CryptoACFormField(SERVER.RESOURCE_NAME, "Topic Name", InputType.text),
                    CryptoACFormField(SERVER.RESOURCE_CONTENT, "Message", InputType.text)
                )
            )
        ),

        /** Read resource form */
        CryptoACFormData(
            icon = faFileDownload,
            key = "read_resource",
            submitButtonText = "Subscribe to Topic",
            endpoint = API.CRYPTOAC + API.RESOURCES,
            method = HttpMethod.Get,
            coreType = CoreType.RBAC_MQTT,
            submit = { method, endpoint, values, _ ->
                submitCryptoACForm(method, endpoint, values, false) { response, params -> callbackSubscribeToTopic(response, params) }
            },
            cryptoACFormFields = listOf(
                listOf(
                    CryptoACFormField(SERVER.RESOURCE_NAME, "Topic Name", InputType.text),
                )
            )
        ),
    )
}

/** Extend RBuilder for easier use of this React component */
fun actions(handler: ActionsProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(Actions::class) {
            this.attrs(handler)
        }
    }!!
}
