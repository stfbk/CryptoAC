@file:JsModule("@material-ui/lab")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.lab

import org.w3c.dom.events.Event
import react.*

@JsName("Alert")
external val alert: RClass<AlertProps>

external interface AlertProps : RProps {
    var severity: String
    var onClose: (Event) -> Unit
}