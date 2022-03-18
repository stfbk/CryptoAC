package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.*
import eu.fbk.st.cryptoac.core.*
import eu.fbk.st.cryptoac.core.elements.User
import eu.fbk.st.cryptoac.crypto.CryptoType
import eu.fbk.st.cryptoac.implementation.dm.*
import eu.fbk.st.cryptoac.implementation.mm.*
import eu.fbk.st.cryptoac.implementation.opa.OPAInterfaceParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceCryptoACParameters
import eu.fbk.st.cryptoac.implementation.rm.RMInterfaceParameters
import eu.fbk.st.cryptoac.implementation.rm.RMType
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
class CryptoACEditProfileForm: RComponent<CryptoACEditProfileFormProps, CryptoACEditProfileFormState>() {

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
                        //id = "editProfile"
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
                    child(cryptoACForm {
                        attrs {
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
                    })
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
            logger.warn {"The user did not provide a .json file for the profile" }
            props.handleDisplayAlert(OutcomeCode.CODE_040_MALFORMED_PROFILE_FILE, CryptoACAlertSeverity.WARNING)
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
                is CoreParametersCLOUD -> parameters.rmInterfaceParameters
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
                        propsToUse.handleDisplayAlert(OutcomeCode.CODE_057_INTERFACE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)

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
                is CoreParametersCLOUD -> parameters.mmInterfaceParameters
                is CoreParametersMQTT -> parameters.mmInterfaceParameters
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
                        propsToUse.handleDisplayAlert(OutcomeCode.CODE_057_INTERFACE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
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
                is CoreParametersCLOUD -> parameters.dmInterfaceParameters
                is CoreParametersMQTT -> parameters.dmInterfaceParameters
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
                        propsToUse.handleDisplayAlert(OutcomeCode.CODE_057_INTERFACE_TYPE_UPDATED, CryptoACAlertSeverity.INFO)
                    } else {
                        throw UnsupportedOperationException(
                            "DM type of file (${dmParameters.dmType}) is different from currently selected core type (${propsToUse.dmType}"
                        )
                    }
                }
            } else {
                logger.info { "No DM parameters were given" }
            }

            /** Acquire eventual OPA parameters */
            val opaParameters = when (parameters) {
                is CoreParametersCLOUD -> parameters.opaInterfaceParameters
                else -> null
            }
            logger.info { "OPA parameters were${if (opaParameters == null) { " not " } else { " " }}provided" }

            getFieldsFromParameters(
                propsToUse,
                user, cryptoType,
                rmParameters,
                mmParameters,
                dmParameters,
                opaParameters,
            )
        } catch (e: NullPointerException) {
            logger.warn { "NullPointerException, malformed .json profile file" }
            logger.warn { e }
            propsToUse.handleDisplayAlert(OutcomeCode.CODE_040_MALFORMED_PROFILE_FILE, CryptoACAlertSeverity.ERROR)
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
                name = values[SERVER.USERNAME]!!,
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
                    props.handleProfileWasCreatedOrModified(props.coreType)
                    setState { editProfileFormIsOpen = false }
                } else {
                    logger.warn { "Response status is ${status}, code is $code" }
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
     * [rmParameters], [mmParameters] and [dmParameters]
     */
    private fun getFieldsFromParameters(
        propsToUse: CryptoACEditProfileFormProps = props,
        user: User? = null,
        cryptoType: CryptoType = CryptoType.SODIUM,
        rmParameters: RMInterfaceParameters? = null,
        mmParameters: MMInterfaceParameters? = null,
        dmParameters: DMInterfaceParameters? = null,
        opaParameters: OPAInterfaceParameters? = null,
    ): List<List<CryptoACFormField>> {

        logger.info {"Getting profile fields from parameters (core type is ${propsToUse.coreType})" }

        val fields = mutableListOf(listOf(
            CryptoACFormField(
                SERVER.USERNAME,
                SERVER.USERNAME,
                InputType.text,
                className = "darkTextField",
                defaultValue = user?.name
            ),
            CryptoACFormField(
                SERVER.IS_ADMIN,
                SERVER.IS_ADMIN.replace("_", " "),
                InputType.checkBox,
                className = "darkTextField",
                defaultValue = user?.isAdmin.toString()
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

        val rmType = rmParameters?.rmType ?: propsToUse.rmType
        logger.info {"RM type to use is $rmType" }
        fields.addAll(
            when (rmType) {
                RMType.CRYPTOAC -> RMInterfaceCryptoACParameters.toMap(
                    rmParameters?.let { it as RMInterfaceCryptoACParameters }
                )
                RMType.NONE -> listOf()
            }
        )

        val mmType = mmParameters?.mmType ?: propsToUse.mmType
        logger.info {"MM type to use is $mmType" }
        fields.addAll(
            when (mmType) {
                MMType.MYSQL -> MMInterfaceMySQLParameters.toMap(
                    mmParameters?.let { it as MMInterfaceMySQLParameters }
                )
                MMType.REDIS -> MMInterfaceRedisParameters.toMap(
                    mmParameters?.let { it as MMInterfaceRedisParameters }
                )
            }
        )

        val dmType = dmParameters?.dmType ?: propsToUse.dmType
        logger.info {"DM type to use is $dmType" }
        fields.addAll(
            when (dmType) {
                DMType.CRYPTOAC -> DMInterfaceCryptoACParameters.toMap(
                    dmParameters?.let { it as DMInterfaceCryptoACParameters }
                )
                DMType.MOSQUITTO -> DMInterfaceMosquittoParameters.toMap(
                    dmParameters?.let { it as DMInterfaceMosquittoParameters }
                )
            }
        )

        if (propsToUse.coreType == CoreType.RBAC_CLOUD) {
            logger.info {"Core type is ${CoreType.RBAC_CLOUD}, thus add OPA fields" }
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
                            defaultValue = (opaParameters?.policyModel ?: PolicyModel.RBAC).toString()
                        ),
                    )
                )
            )
        }

        return fields.toList()
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACEditProfileForm(handler: CryptoACEditProfileFormProps.() -> Unit): ReactElement {
    return createElement {
        child(CryptoACEditProfileForm::class) {
            this.attrs(handler)
        }
    }!!
}
