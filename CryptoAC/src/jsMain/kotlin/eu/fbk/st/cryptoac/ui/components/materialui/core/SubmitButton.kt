@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("Button")
external val submitButton: RClass<SubmitButtonProps>

external interface SubmitButtonProps : RProps {
    var type: String
    var onClick: (Event) -> Unit
    var color: String
    var variant: String
}