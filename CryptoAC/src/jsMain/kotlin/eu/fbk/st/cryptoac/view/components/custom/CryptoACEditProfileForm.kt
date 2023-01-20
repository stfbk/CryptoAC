package eu.fbk.st.cryptoac.view.components.custom

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
import kotlinx.css.*
import kotlinx.html.hidden
import kotlinx.html.js.onChangeFunction
import kotlinx.serialization.decodeFromString
import mu.KotlinLogging
import org.w3c.dom.*
import org.w3c.files.File
import org.w3c.files.FileReader
import org.w3c.files.get
import react.*
import react.dom.*
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface CryptoACEditProfileFormProps : Props {
    var handleDisplayAlert: (OutcomeCode, CryptoACAlertSeverity) -> Unit
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var handleChangeCoreType: ((CoreType) -> Unit)?
    var handleChangeACType: ((ACType) -> Unit)?
    var handleChangeRMType: ((RMType) -> Unit)?
    var handleChangeMMType: ((MMType) -> Unit)?
    var handleChangeDMType: ((DMType) -> Unit)?
    var handleProfileWasCreatedOrModified: (CoreType) -> Unit
    var isCreatingNewProfile: Boolean
    var httpClient: HttpClient
    var username: String?
    var coreParameters: CoreParameters?
    var coreType: CoreType
    var rmType: RMType
    var mmType: MMType
    var dmType: DMType
    var acType: ACType
}

external interface CryptoACEditProfileFormState : State {

    /** Whether the component was just mounted */
    var justMounted: Boolean

    /** The form fields of the edit profile form */
    var cryptoACFormFields: List<List<CryptoACFormField>>

    /** Whether the edit profile form is visible or not */
    var editProfileFormIsOpen: Boolean
}

/** This component renders a form for sending API requests to the proxy */
class CryptoACEditProfileForm : RComponent<CryptoACEditProfileFormProps, CryptoACEditProfileFormState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                textAlign = TextAlign.center
                paddingTop = 10.px
                paddingBottom = 10.px
            }
            paper {

                /** The header with the title, the file upload option and the collapsable toggle icon */
                typography {
                    attrs {
                        variant = "h6"
                        // id = "editProfile"
                        component = "div"
                    }
                    +"${if (props.isCreatingNewProfile) {
                        "Create"
                    } else {
                        "Edit"
                    }} or Upload Profile"

                    iconButton {
                        attrs {
                            color = "primary"
                            component = "label"
                            onClick = { event ->
                                if (event.target is HTMLInputElement) {
                                    (event.target as HTMLInputElement).value = ""
                                }
                            }
                        }
                        child(createElement<Props> { faCloudUploadAlt { } }!!)
                        input {
                            attrs {
                                type = kotlinx.html.InputType.file
                                accept = ".json"
                                hidden = true
                                this.onChangeFunction = { event ->
                                    logger.info { "Received upload configuration file event" }
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
                                children = createElement {
                                    if (!state.editProfileFormIsOpen) {
                                        faChevronDown { }
                                    } else {
                                        faChevronUp { }
                                    }
                                }!!
                                onClick = {
                                    setState {
                                        editProfileFormIsOpen = !editProfileFormIsOpen
                                    }
                                }
                            }
                        }
                    }
                }

                /** The edit profile form */
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
                    child(
                        cryptoACForm {
                            attrs {
                                acceptDisabledElements = !props.isCreatingNewProfile
                                handleDisplayAlert = props.handleDisplayAlert
                                handleSubmitEvent = { method, endpoint, values, _ ->
                                    submitEditProfileForm(method, endpoint, values)
                                }
                                method = if (props.isCreatingNewProfile) {
                                    HttpMethod.Post
                                } else {
                                    HttpMethod.Patch
                                }
                                cryptoACFormFields = state.cryptoACFormFields
                                submitButtonText = "Edit Profile"
                                coreType = props.coreType
                                endpoint = API.PROFILES
                            }
                        }
                    )
                }
            }
        }
    }

    override fun CryptoACEditProfileFormState.init() {
        logger.info { "Initializing the state of the CryptoACEditProfileFormState component" }

        editProfileFormIsOpen = true
        cryptoACFormFields = listOf()

        justMounted = true

        /** Execute before the render in both the Mounting and Updating lifecycle phases */
        CryptoACEditProfileForm::class.js.asDynamic().getDerivedStateFromProps = {
            newProps: CryptoACEditProfileFormProps, state: CryptoACEditProfileFormState ->
            logger.info { "Check whether to update CryptoACEditProfileForm" }
            logger.debug { "state.justMounted: ${state.justMounted}" }
            logger.debug { "!areEquals(props, newProps): ${!areEquals(props, newProps)}" }
            if (state.justMounted || !areEquals(props, newProps)) {
                logger.info { "CryptoACEditProfileForm is getting updated" }
                if (newProps.coreParameters != null) {
                    logger.info { "Parameters were given, use them to update the fields" }
                    updateFieldsFromParameters(
                        newProps.coreParameters!!,
                        forceTypesUpdate = newProps.isCreatingNewProfile,
                        propsToUse = newProps
                    )?.let {
                        state.cryptoACFormFields = it
                    }
                } else {
                    logger.info { "Parameters were not given, rely on properties" }
                    state.cryptoACFormFields = getFieldsFromParameters(newProps)
                }
            }
            state.justMounted = false
        }
    }

    private fun areEquals(
        props: CryptoACEditProfileFormProps,
        newProps: CryptoACEditProfileFormProps
    ): Boolean {
        if (props === newProps) return true
        if (props::class != newProps::class) return false

        if (props.isCreatingNewProfile != newProps.isCreatingNewProfile) return false
        if (props.coreParameters != newProps.coreParameters) return false
        if (props.coreType != newProps.coreType) return false
        if (props.username != newProps.username) return false
        if (props.rmType != newProps.rmType) return false
        if (props.mmType != newProps.mmType) return false
        if (props.dmType != newProps.dmType) return false
        if (props.acType != newProps.acType) return false

        return true
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
                updateFieldsFromParameters(
                    parameters,
                    forceTypesUpdate = props.isCreatingNewProfile
                )?.let {
                    setState {
                        cryptoACFormFields = it
                    }
                }
            }
        } else {
            logger.warn { "The user did not provide a .json file for the profile" }
            props.handleDisplayAlert(OutcomeCode.CODE_040_MALFORMED_PROFILE, CryptoACAlertSeverity.WARNING)
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
    private fun updateFieldsFromParameters(
        parameters: CoreParameters,
        forceTypesUpdate: Boolean,
        propsToUse: CryptoACEditProfileFormProps = props
    ): List<List<CryptoACFormField>>? {

        return try {

            val versionNumber = parameters.versionNumber
            val coreType = parameters.coreType
            val cryptoType = parameters.cryptoType
            val user = parameters.user

            logger.info { "Updating the fields of the edit profile form (core type is $coreType)" }

            /** Consistency checks */
            if (coreType != propsToUse.coreType) {
                throw UnsupportedOperationException(
                    "Core type of parameters ($coreType) is different " +
                        "from core type of properties (${propsToUse.coreType}"
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
                        "(RM type in props is ${propsToUse.rmType}"
                }
                if (rmParameters.rmType != propsToUse.rmType) {
                    if (forceTypesUpdate) {
                        logger.info { "Forcing update of RM type" }
                        propsToUse.handleChangeRMType?.let { it(rmParameters.rmType) }
                        propsToUse.handleDisplayAlert(OutcomeCode.CODE_057_SERVICE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
                    } else {
                        throw UnsupportedOperationException(
                            "RM type of file (${rmParameters.rmType}) is different from currently selected core type (${propsToUse.rmType}"
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
                        "(MM type in props is ${propsToUse.mmType}"
                }
                if (mmParameters.mmType != propsToUse.mmType) {
                    if (forceTypesUpdate) {
                        logger.info { "Forcing update of MM type" }
                        propsToUse.handleChangeMMType?.let { it(mmParameters.mmType) }
                        propsToUse.handleDisplayAlert(OutcomeCode.CODE_057_SERVICE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
                    } else {
                        throw UnsupportedOperationException(
                            "MM type of file (${mmParameters.mmType}) is different from currently selected core type (${propsToUse.mmType}"
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
                        "(DM type in props is ${propsToUse.dmType}"
                }
                if (dmParameters.dmType != propsToUse.dmType) {
                    if (forceTypesUpdate) {
                        logger.info { "Forcing update of DM type" }
                        propsToUse.handleChangeDMType?.let { it(dmParameters.dmType) }
                        propsToUse.handleDisplayAlert(OutcomeCode.CODE_057_SERVICE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
                    } else {
                        throw UnsupportedOperationException(
                            "DM type of file (${dmParameters.dmType}) is different from currently selected core type (${propsToUse.dmType}"
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
                    "(AC type in props is ${propsToUse.acType}"
                }
                if (acParameters.acType != propsToUse.acType) {
                    if (forceTypesUpdate) {
                        logger.info { "Forcing update of AC type" }
                        propsToUse.handleChangeACType?.let { it(acParameters.acType) }
                        propsToUse.handleDisplayAlert(
                            OutcomeCode.CODE_057_SERVICE_TYPE_UPDATED,
                            CryptoACAlertSeverity.INFO
                        )
                    } else {
                        throw UnsupportedOperationException(
                            "AC type of file (${acParameters.acType}) is different from currently selected core type (${propsToUse.acType}"
                        )
                    }
                }
            } else {
                logger.info { "No AC parameters were given" }
            }

            getFieldsFromParameters(
                propsToUse,
                user, cryptoType,
                rmParameters,
                mmParameters,
                dmParameters,
                acParameters,
            )
        } catch (e: NullPointerException) {
            logger.warn { "NullPointerException, malformed .json profile file" }
            logger.warn { e }
            propsToUse.handleDisplayAlert(OutcomeCode.CODE_040_MALFORMED_PROFILE, CryptoACAlertSeverity.ERROR)
            null
        } catch (e: UnsupportedOperationException) {
            logger.warn { "UnsupportedOperationException, .json profile file have different types than requested" }
            logger.warn { e }
            propsToUse.handleDisplayAlert(OutcomeCode.CODE_061_WRONG_PARAMETERS_FOR_CORE, CryptoACAlertSeverity.WARNING)
            null
        }
    }

    /**
     * Submit and handle the callback for the edit profile form. It receives as input
     * the HTTPS [method], the [endpoint] (URL) and the [values] to add to the request
     */
    private fun submitEditProfileForm(
        method: HttpMethod,
        endpoint: String,
        values: HashMap<String, String>
    ) {
        logger.info { "Submitting CryptoAC edit profile form, method $method, endpoint $endpoint" }

        try {
            val rmParameters = when (props.rmType) {
                RMType.RBAC_CRYPTOAC -> RMServiceRBACCryptoACParameters.fromMap(values)
                RMType.NONE -> null
            }
            val mmParameters = when (props.mmType) {
                MMType.RBAC_MYSQL, MMType.ABAC_MYSQL -> MMServiceRBACMySQLParameters.fromMap(
                    parameters = values
                )
                MMType.RBAC_REDIS -> MMServiceRedisParameters.fromMap(
                    parameters = values,
                    mmType = MMType.RBAC_REDIS
                )
            }
            val dmParameters = when (props.dmType) {
                DMType.CRYPTOAC -> DMServiceCryptoACParameters.fromMap(values)
                DMType.MQTT -> DMServiceMQTTParameters.fromMap(values)
            }
            val acParameters = when (props.acType) {
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
            val parameters = when (props.coreType) {
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
                props.handleDisplayAlert(OutcomeCode.CODE_048_HTTP_METHOD_NOT_SUPPORTED, CryptoACAlertSeverity.ERROR)
            }
            MainScope().launch {
                /** Send the HTTPS request */
                props.handleChangeBackdropIsOpen(true)
                val response: HttpResponse = if (method == HttpMethod.Post) {
                    props.httpClient.post {
                        url(endpoint)
                        contentType(ContentType.Application.Json)
                        setBody(parameters as CoreParameters)
                    }
                } else {
                    props.httpClient.patch {
                        url(endpoint)
                        contentType(ContentType.Application.Json)
                        setBody(parameters as CoreParameters)
                    }
                }
                val code: OutcomeCode = response.body()
                val status = response.status
                props.handleChangeBackdropIsOpen(false)

                if (status == HttpStatusCode.OK) {
                    logger.info { "Response status is $status, code is $code" }
                    props.handleDisplayAlert(OutcomeCode.CODE_000_SUCCESS, CryptoACAlertSeverity.SUCCESS)
                    props.handleProfileWasCreatedOrModified(props.coreType)
                    setState { editProfileFormIsOpen = false }
                } else {
                    logger.warn { "Response status is $status, code is $code" }
                    props.handleDisplayAlert(code, CryptoACAlertSeverity.ERROR)
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
     * Update the edit profile fields with the given [user], [cryptoType],
     * [rmParameters], [mmParameters], [dmParameters] and [acParameters]
     */
    private fun getFieldsFromParameters(
        propsToUse: CryptoACEditProfileFormProps = props,
        user: User? = null,
        cryptoType: CryptoType = CryptoType.SODIUM,
        rmParameters: RMServiceParameters? = null,
        mmParameters: MMServiceParameters? = null,
        dmParameters: DMServiceParameters? = null,
        acParameters: ACServiceParameters? = null,
    ): List<List<CryptoACFormField>> {

        logger.info { "Getting profile fields from parameters (core type is ${propsToUse.coreType})" }

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

        val rmType = rmParameters?.rmType ?: propsToUse.rmType
        logger.info { "RM type to use is $rmType" }
        fields.addAll(
            when (rmType) {
                RMType.RBAC_CRYPTOAC -> RMServiceRBACCryptoACParameters.toMap(
                    rmParameters?.let { it as RMServiceRBACCryptoACParameters }
                )
                RMType.NONE -> listOf()
            }
        )

        val mmType = mmParameters?.mmType ?: propsToUse.mmType
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

        val dmType = dmParameters?.dmType ?: propsToUse.dmType
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

        val acType = acParameters?.acType ?: propsToUse.acType
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
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACEditProfileForm(handler: CryptoACEditProfileFormProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(CryptoACEditProfileForm::class) {
            this.attrs(handler)
        }
    }!!
}
