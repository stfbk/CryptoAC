package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.OutcomeCode
import eu.fbk.st.cryptoac.SERVER
import eu.fbk.st.cryptoac.core.CoreType
import eu.fbk.st.cryptoac.CryptoACFormField
import eu.fbk.st.cryptoac.InputType
import eu.fbk.st.cryptoac.view.*
import eu.fbk.st.cryptoac.view.components.icons.faCloudUploadAlt
import eu.fbk.st.cryptoac.view.components.icons.faPaperPlane
import eu.fbk.st.cryptoac.view.components.materialui.*
import eu.fbk.st.cryptoac.view.content.tradeoffboard.Likelihood
import eu.fbk.st.cryptoac.view.content.tradeoffboard.Scenario
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.html.hidden
import kotlinx.html.js.onSubmitFunction
import mu.KotlinLogging
import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.files.File
import org.w3c.files.get
import react.*
import react.dom.*
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface CryptoACProps : Props {
    /** The HTTP endpoint this form should send request to */
    var endpoint: String

    /** The HTTP method for this form */
    var method: HttpMethod

    /** Text to display in the submit button */
    var submitButtonText: String

    /** The list of the input fields of this form */
    var cryptoACFormFields: List<List<CryptoACFormField>>

    /** The function to invoke for submitting the form */
    var handleSubmitEvent: (HttpMethod, String, HashMap<String, String>, HashMap<String, File>) -> Unit

    var coreType: CoreType
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var handleDisplayCryptoACAlert : (OutcomeCode, CryptoACAlertSeverity) -> Unit
}

/** This component renders a form for sending API requests to the proxy */
class CryptoACForm: RComponent<CryptoACProps, State>() {

    override fun RBuilder.render() {

        /** Create the form */
        form {
            attrs {
                action = props.endpoint
                onSubmitFunction = { event ->
                    handleCryptoACFormSubmit(event, props.handleSubmitEvent)
                }
            }

            /** Use a grid for the input fields */
            grid {
                attrs {
                    container = true
                    spacing = 1
                }

                /** For each "row" of input fields */
                props.cryptoACFormFields.forEach { formRow ->

                    key = formRow.map { it.name+it.defaultValue }.joinToString { it }

                    /** Compute the space for the columns */
                    val currentSM = 12 / formRow.size

                    /** For each field in the row */
                    formRow.forEach { formField ->

                        key = formField.name+formField.defaultValue

                        grid {
                            attrs {
                                item = true
                                xs = 12
                                sm = currentSM
                            }

                            when (formField.type) {
                                /** Create a radio input */
                                InputType.radio -> {
                                    child(cryptoACRadioGroup {
                                        defaultValue = formField.defaultValue!!
                                        name = formField.name
                                        row = true
                                        options = formField.options!!.map {
                                            CryptoACRadioOption(it, it, if (props.method == HttpMethod.Delete) {
                                                "secondary"
                                            } else {
                                                "primary"
                                            })
                                        }
                                        onChange = { event ->
                                            val newValue = (event.target as HTMLInputElement).value
                                            logger.info { "chosen new value for radio group ${formField.name}: $newValue" }
                                            true
                                        }
                                    })
                                }
                                /** Create a select input */
                                InputType.select -> {
                                    styledDiv {
                                        css {
                                            marginBottom = 10.px
                                            marginTop = 10.px
                                            marginRight = 20.px
                                        }
                                        formControl {
                                            attrs {
                                                if (formField.className != null) {
                                                    className = formField.className
                                                }
                                                variant = "standard"
                                            }
                                            child(cryptoACSelect {
                                                name = formField.name
                                                id = formField.label
                                                label = formField.label
                                                labelId = "${formField.label}-label"
                                                autoWidth = true
                                                options = Scenario.values().map { it.toString() }
                                                defaultValue = formField.defaultValue!!
                                                options = formField.options!!
                                                onChange = { }
                                            })
                                        }
                                    }
                                }
                                /** Create a text input */
                                InputType.text, InputType.password, InputType.number -> {
                                    styledDiv {
                                        css {
                                            marginBottom = 10.px
                                            marginTop = 10.px
                                            marginRight = 20.px
                                        }
                                        child(cryptoACTextField {
                                            if (formField.className != null) {
                                                className = formField.className
                                            }
                                            defaultValue = if (
                                                formField.defaultValue.isNullOrBlank() ||
                                                formField.defaultValue == "null"
                                            ) {
                                                ""
                                            } else {
                                                formField.defaultValue
                                            }
                                            name = formField.name
                                            label = formField.label
                                            type = formField.type.toString()
                                            variant = "standard"
                                            color = if (props.method == HttpMethod.Delete) {
                                                "secondary"
                                            } else {
                                                "primary"
                                            }
                                        })
                                    }
                                }
                                /** Create a checkbox input */
                                InputType.checkBox -> {
                                    styledDiv {
                                        css {
                                            marginBottom = 10.px
                                            marginTop = 10.px
                                            marginRight = 20.px
                                        }
                                        child(cryptoACCheckbox {
                                            attrs {
                                                defaultValue = if (
                                                    formField.defaultValue.isNullOrBlank() ||
                                                    formField.defaultValue == "null"
                                                ) {
                                                    "false"
                                                } else {
                                                    formField.defaultValue
                                                }
                                                label = formField.name
                                            }
                                        })
                                    }
                                }
                                /** Create a file input */
                                InputType.file -> {
                                    iconButton {
                                        attrs {
                                            color = "primary"
                                            component = "label"
                                        }
                                        child(createElement { faCloudUploadAlt { } }!!)
                                        input {
                                            attrs {
                                                name = formField.name
                                                type = kotlinx.html.InputType.file
                                                hidden = true
                                            }
                                        }
                                    }
                                }

                                else -> throw Exception("TODO") // TODO
                            }
                        }
                    }
                }

                /** Create the submit button */
                grid {
                    attrs {
                        item = true
                        xs = 12
                        sm = 12
                    }
                    styledDiv {
                        css {
                            textAlign = TextAlign.center
                            textAlign = TextAlign.center
                            alignItems = Align.center
                            alignContent = Align.center
                            marginTop = 15.px
                            marginRight = 15.px
                        }
                        submitButton {
                            attrs {
                                type = InputType.submit.toString()
                                color = if (props.method == HttpMethod.Delete) {
                                    "secondary"
                                } else {
                                    "primary"
                                }
                                variant = "contained"
                            }
                            styledDiv {
                                css {
                                    marginRight = 5.px
                                }
                                +props.submitButtonText.uppercase()
                            }
                            faPaperPlane { }
                        }
                    }
                }
            }
        }
    }

    /**
     * When a form gets submitted, we extract the values of the input
     * fields of the form and then send the API request to the proxy
     */
    private fun handleCryptoACFormSubmit(e: Event, submitAndHandleCallback: (HttpMethod, String, HashMap<String, String>, HashMap<String, File>) -> Unit) {
        e.preventDefault()

        logger.info { "Received form submit request, retrieving values" }

        /** Get the values of the input fields */
        val values = getValuesFromInputFields(e.target as HTMLFormElement)
        val files = getFilesFromInputFields(e.target as HTMLFormElement)
        logger.debug { "Collected ${values.size} values, ${files.size} files: " }
        values.forEach { logger.debug { "key ${it.key}, value ${it.value}" } }
        files.forEach { logger.debug { "file name ${it.key}" } }

        /** Compute the number of collected and expected values */
        val collectedValues = values.size + files.size
        var expectedValues = 0
        props.cryptoACFormFields.forEach { expectedValues += it.size }

        /** If all inputs were provided and collected */
        if (expectedValues == collectedValues) {
            // TODO dunno if wrapping with "MainScope().launch" is correct
            MainScope().launch {
                val actualEndpoint = if (props.coreType == undefined) {
                    "$baseURL${props.endpoint}"
                } else {
                    "$baseURL${props.endpoint.replace("{${SERVER.CORE}}", props.coreType.toString())}"
                }
                submitAndHandleCallback(props.method, actualEndpoint, values, files)
            }
        }
        else {
            logger.warn { "Not all values were given (collected $collectedValues, expected $expectedValues), canceling submit request" }
            props.handleDisplayCryptoACAlert(OutcomeCode.CODE_019_MISSING_PARAMETERS, CryptoACAlertSeverity.WARNING)
        }
    }

    /** Programmatically retrieve values from input fields of the [form] */
    private fun getValuesFromInputFields(form: HTMLFormElement): HashMap<String, String> {
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
        return values
    }

    /** Programmatically retrieve files from input fields of the [form] */
    private fun getFilesFromInputFields(form: HTMLFormElement): HashMap<String, File> {
        val values = HashMap<String, File>()
        for (i in 0..form.elements.length) {
            form.elements.item(i).apply {
                if (this is HTMLInputElement && type == InputType.file.toString()) {
                    val file = files!![0]
                    if (file != null) {
                        values[name] = file
                    }
                }
            }
        }
        return values
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACForm(handler: CryptoACProps.() -> Unit): ReactElement {
    return createElement {
        child(CryptoACForm::class) {
            this.attrs(handler)
        }
    }!!
}



/** Data necessary to render a CryptoAC form */
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

