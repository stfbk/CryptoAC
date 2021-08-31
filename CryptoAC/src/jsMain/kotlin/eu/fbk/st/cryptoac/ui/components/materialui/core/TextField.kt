@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("TextField")
external val textField: RClass<TextFieldProps>

external interface TextFieldProps : RProps {
    var className: String
    var name: String
    var type: String
    var label: String
    var required: Boolean
    var variant: String
    var onChange: (Event) -> Unit
    var value: String
    var color: String
    var autoComplete: String
}