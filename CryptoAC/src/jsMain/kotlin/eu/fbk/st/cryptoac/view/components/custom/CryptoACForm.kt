package eu.fbk.st.cryptoac.view.components.custom

import csstype.AlignContent
import csstype.AlignItems
import csstype.TextAlign
import csstype.px
import emotion.react.css
import eu.fbk.st.cryptoac.CryptoACFormField
import eu.fbk.st.cryptoac.InputType
import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.view.*
import eu.fbk.st.cryptoac.view.components.icons.faCloudUploadAlt
import eu.fbk.st.cryptoac.view.components.icons.faPaperPlane
import eu.fbk.st.cryptoac.view.components.materialui.*
import eu.fbk.st.cryptoac.view.content.tradeoffboard.Scenario
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import mu.KotlinLogging
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.files.File
import org.w3c.files.get
import react.*
import react.dom.*
import react.dom.events.FormEvent
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.span
import web.html.HTMLFormElement

private val logger = KotlinLogging.logger {}

external interface CryptoACFormProps : Props {
    /** The HTTP endpoint this form should send request to */
    var endpointProp: String

    /** The HTTP method for this form */
    var methodProp: HttpMethod

    /** Text to display in the submit button */
    var submitButtonTextProp: String

    /** The list of the input fields of this form */
    var cryptoACFormFieldsProp: List<List<CryptoACFormField>>

    /** The function to invoke for submitting the form */
    var handleSubmitEventProp: (HttpMethod, String, HashMap<String, String>, HashMap<String, File>) -> Unit

    /** Whether to disable [cryptoACFormFieldsProp] as requested or not */
    var acceptDisabledElementsProp: Boolean

    /** The currently chosen core type */
    var coreTypeProp: CoreType

    /** Handler for displaying the alert*/
    var handleDisplayAlertProp: (OutcomeCode, CryptoACAlertSeverity) -> Unit
}

/**
 * When a form gets submitted, we extract the values of the input
 * fields of the form and then send the API request to the proxy
 */
private fun handleCryptoACFormSubmit(
    props: CryptoACFormProps,
    e: FormEvent<HTMLFormElement>,
    submitAndHandleCallback: (
        HttpMethod,
        String,
        HashMap<String, String>, HashMap<String, File>
    ) -> Unit
) {
    e.preventDefault()

    logger.info { "Received form submit request, retrieving values" }
    val form = e.target as HTMLFormElement

    /** Programmatically retrieve values from input fields of the [form] */
    val values = HashMap<String, String>()
    for (i in 0..form.elements.length) {
        form.elements.item(i).apply {
            if (this is HTMLInputElement && value.isNotBlank()) {
                when (type) {
                    InputType.password.toString() -> values[name] = value
                    InputType.text.toString() -> values[name] = value
                    InputType.number.toString() -> values[name] = value
                    InputType.radio.toString() -> if (checked) { values[name] = value }
                    InputType.checkBox.toString().lowercase() -> values[value.split(divider)[1]] = value.split(divider)[0]
                    else -> {
                        console.log("TODO FIX") // TODO fix
                    }
                }
            }
        }
    }

    /** Programmatically retrieve files from input fields of the [form] */
    val files = HashMap<String, File>()
    for (i in 0..form.elements.length) {
        form.elements.item(i).apply {
            if (this is HTMLInputElement && type == InputType.file.toString()) {
                val file = this.files!![0]
                if (file != null) {
                    files[name] = file
                }
            }
        }
    }

    logger.debug { "Collected ${values.size} values, ${files.size} files: " }
    values.forEach { logger.debug { "key ${it.key}, value ${it.value}" } }
    files.forEach { logger.debug { "resource name ${it.key}" } }

    /** Compute the number of collected and expected values */
    val collectedValues = values.size + files.size
    var expectedValues = 0
    props.cryptoACFormFieldsProp.forEach { expectedValues += it.size }

    /** If all inputs were provided and collected */
    if (expectedValues == collectedValues) {
        // TODO dunno if wrapping with "MainScope().launch" is correct
        MainScope().launch {
            val actualEndpoint = if (props.coreTypeProp == null) {
                "$baseURL${props.endpointProp}"
            } else {
                "$baseURL${props.endpointProp.replace("{${SERVER.CORE}}", props.coreTypeProp.toString())}"
            }
            submitAndHandleCallback(props.methodProp, actualEndpoint, values, files)
        }
    } else {
        logger.warn { "Not all values were given (collected $collectedValues, expected $expectedValues), canceling submit request" }
        props.handleDisplayAlertProp(OutcomeCode.CODE_019_MISSING_PARAMETERS, CryptoACAlertSeverity.WARNING)
    }
}


/** This component renders a form for sending API requests to the proxy */
val CryptoACForm = FC<CryptoACFormProps> {props ->

    /** Create the form */
    form {
        action = props.endpointProp
        onSubmit = { event ->
            handleCryptoACFormSubmit(
                props = props,
                e = event,
                submitAndHandleCallback = props.handleSubmitEventProp
            )
        }

        /** Use a grid for the input fields */
        grid {
            container = true
            spacing = 1

            /** For each "row" of input fields */
            props.cryptoACFormFieldsProp.forEach { formRow ->

                key = formRow.map { it.name + it.defaultValue }.joinToString { it }

                /** Compute the space for the columns */
                val currentSM = 12 / formRow.size

                /** For each field in the row */
                formRow.forEach { formField ->

                    key = formField.name + formField.defaultValue

                    grid {
                        item = true
                        xs = 12
                        sm = currentSM

                        when (formField.type) {
                            /** Create a radio input */
                            InputType.radio -> {
                                CryptoACRadioGroup {
                                    disabledProp = props.acceptDisabledElementsProp && formField.disabled
                                    defaultValueProp = formField.defaultValue!!
                                    nameProp = formField.name
                                    rowProp = true
                                    optionsProp = formField.options!!.map {
                                        CryptoACRadioOption(
                                            it, it,
                                            if (props.methodProp == HttpMethod.Delete) {
                                                "secondary"
                                            } else {
                                                "primary"
                                            }
                                        )
                                    }
                                    onChangeProp = { event: Event ->
                                        val newValue = (event.target as HTMLInputElement).value
                                        logger.info { "chosen new value for radio group ${formField.name}: $newValue" }
                                        true
                                    }
                                }
                            }
                            /** Create a select input */
                            InputType.select -> {
                                div {
                                    css {
                                        marginBottom = 10.px
                                        marginTop = 10.px
                                        marginRight = 20.px
                                    }
                                    formControl {
                                        if (formField.className != null) {
                                            className = formField.className
                                        }
                                        variant = "standard"
                                        CryptoACSelect {
                                            disabledProp = props.acceptDisabledElementsProp && formField.disabled
                                            nameProp = formField.name
                                            idProp = formField.label
                                            labelProp = formField.label
                                            labelIdProp = "${formField.label}-label"
                                            autoWidthProp = true
                                            optionsProp = Scenario.values().map { it.toString() }
                                            defaultValueProp = formField.defaultValue!!
                                            optionsProp = formField.options!!
                                            onChangeProp = { }
                                        }
                                    }
                                }
                            }
                            /** Create a text input */
                            InputType.text, InputType.password, InputType.number -> {
                                div {
                                    css {
                                        marginBottom = 10.px
                                        marginTop = 10.px
                                        marginRight = 20.px
                                    }
                                    CryptoACTextField {
                                        if (formField.className != null) {
                                            classNameProp = formField.className
                                        }
                                        defaultValueProp = if (
                                            formField.defaultValue.isNullOrBlank() ||
                                            formField.defaultValue == "null"
                                        ) {
                                            ""
                                        } else {
                                            formField.defaultValue
                                        }
                                        disabledProp = props.acceptDisabledElementsProp && formField.disabled
                                        nameProp = formField.name
                                        labelProp = formField.label
                                        typeProp = formField.type.toString()
                                        variantProp = "standard"
                                        colorProp = if (props.methodProp == HttpMethod.Delete) {
                                            "secondary"
                                        } else {
                                            "primary"
                                        }
                                    }
                                }
                            }
                            /** Create a checkbox input */
                            InputType.checkBox -> {
                                div {
                                    css {
                                        marginBottom = 10.px
                                        marginTop = 10.px
                                        marginRight = 20.px
                                    }
                                    CryptoACCheckbox {
                                        disabledProp = props.acceptDisabledElementsProp && formField.disabled
                                        defaultValueProp = if (
                                            formField.defaultValue.isNullOrBlank() ||
                                            formField.defaultValue == "null"
                                        ) {
                                            "false"
                                        } else {
                                            formField.defaultValue
                                        }
                                        labelProp = formField.name
                                    }
                                }
                            }
                            /** Create a file input */
                            InputType.file -> {
                                iconButton {
                                    color = "primary"
                                    component = "label"
                                    faCloudUploadAlt { }
                                    input {
                                        disabled = props.acceptDisabledElementsProp && formField.disabled
                                        name = formField.name
                                        type = web.html.InputType.file
                                        hidden = true
                                    }
                                }
                                span {
                                    +formField.label
                                }
                            }

                            else -> throw Exception("TODO") // TODO
                        }
                    }
                }
            }

            /** Create the submit button */
            grid {
                item = true
                xs = 12
                sm = 12
                div {
                    css {
                        textAlign = TextAlign.center
                        textAlign = TextAlign.center
                        alignItems = AlignItems.center
                        alignContent = AlignContent.center
                        marginTop = 15.px
                        marginRight = 15.px
                    }
                    submitButton {
                        type = InputType.submit.toString()
                        color = if (props.methodProp == HttpMethod.Delete) {
                            "secondary"
                        } else {
                            "primary"
                        }
                        variant = "contained"
                        div {
                            css {
                                marginRight = 5.px
                            }
                            +props.submitButtonTextProp.uppercase()
                        }
                        faPaperPlane { }
                    }
                }
            }
        }
    }
}


/** Data needed to render a CryptoAC form */
data class CryptoACFormData(
    /** React key for the form component */
    val key: String,

    /** Text to display in the submit button */
    val submitButtonText: String,

    /** Specify an icon, only for forms in the pro sidebar */
    val icon: ComponentClass<Props>,

    /** The HTTP endpoint this form should send request to */
    val endpoint: String,

    /** The HTTP method for this form */
    val method: HttpMethod,

    /** The core type, i.e., the chosen (implementation of the) CAC scheme */
    val coreType: CoreType,

    /** The list of the input fields of this form */
    val cryptoACFormFields: List<List<CryptoACFormField>>,

    /** The function to invoke for submitting the form */
    var submit: (HttpMethod, String, HashMap<String, String>, HashMap<String, File>) -> Unit,

    /** Whether the form should display a divider after itself, only for forms in the pro sidebar */
    val divider: Boolean = false
)
