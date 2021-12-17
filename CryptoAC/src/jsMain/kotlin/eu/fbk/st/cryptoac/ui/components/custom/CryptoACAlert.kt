package eu.fbk.st.cryptoac.ui.components.custom

import eu.fbk.st.cryptoac.ui.components.materialui.lab.alert
import eu.fbk.st.cryptoac.ui.components.materialui.core.snackbar
import org.w3c.dom.events.Event
import react.*

/** Possible values for the CryptoAC alert */
enum class CryptoACAlertSeverity {
    SUCCESS, WARNING, INFO, ERROR,
}

external interface CryptoACAlertProps : Props {
    var severity: CryptoACAlertSeverity
    var message: String
    var open: Boolean
    var handleClose: (Event) -> Unit
}

/** A custom component for an alert */
class CryptoACAlert: RComponent<CryptoACAlertProps, State>() {
    override fun RBuilder.render() {
        snackbar {
            attrs {
                open = props.open
                autoHideDuration = if (props.severity == CryptoACAlertSeverity.SUCCESS) 4000 else null
                onClose = { event: Event, _: String ->
                    props.handleClose(event)
                }
            }
            alert {
                attrs {
                    severity = props.severity.toString().lowercase()
                    onClose = { event -> props.handleClose(event) }
                }
                +props.message
            }
        }
    }
}

/** Extend RBuilder for easier use of this React component */
fun cryptoACAlert(handler: CryptoACAlertProps.() -> Unit): ReactElement {
    return createElement {
        child(CryptoACAlert::class) {
            this.attrs(handler)
        }
    }!!
}
