@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import org.w3c.dom.events.Event
import react.*

@JsName("Button")
external val submitButton: ComponentClass<SubmitButtonProps>

external interface SubmitButtonProps : Props {
    var type: String
    var onClick: (Event) -> Unit
    var color: String
    var variant: String
}