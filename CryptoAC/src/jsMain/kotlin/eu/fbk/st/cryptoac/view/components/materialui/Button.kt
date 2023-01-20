@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import kotlinx.js.Object
import org.w3c.dom.events.Event
import react.*

@JsName("Button")
external val button: ComponentClass<ButtonProps>

external interface ButtonProps : Props {
    var variant: String
    var style: Object
    var onClick: (Event) -> Unit
}
