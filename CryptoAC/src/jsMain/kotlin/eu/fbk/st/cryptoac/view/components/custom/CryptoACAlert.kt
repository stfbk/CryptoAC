package eu.fbk.st.cryptoac.view.components.custom

import eu.fbk.st.cryptoac.view.components.materialui.alert
import eu.fbk.st.cryptoac.view.components.materialui.snackbar
import org.w3c.dom.events.Event
import react.*

/** Possible values for the CryptoAC alert */
enum class CryptoACAlertSeverity {
    SUCCESS, WARNING, INFO, ERROR,
}

external interface CryptoACAlertProps : Props {
    // TODO doc
    var severityProp: CryptoACAlertSeverity
    var messageProp: String
    var openProp: Boolean
    var handleCloseProp: (Event) -> Unit
}

/** A custom component for an alert */
val CryptoACAlert = FC<CryptoACAlertProps> { props ->

    snackbar {
        open = props.openProp
        autoHideDuration = if (props.severityProp == CryptoACAlertSeverity.SUCCESS) 4000 else null
        onClose = { event: Event, _: String ->
            props.handleCloseProp(event)
        }
        alert {
            severity = props.severityProp.toString().lowercase()
            onClose = { event: Event -> props.handleCloseProp(event) }
            +props.messageProp
        }
    }
}
