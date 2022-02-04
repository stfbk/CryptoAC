@file:JsModule("@material-ui/lab")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import org.w3c.dom.events.Event
import react.*

@JsName("Alert")
external val alert: ComponentClass<AlertProps>

external interface AlertProps : Props {
    var severity: String
    var onClose: (Event) -> Unit
}