@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("Checkbox")
external val checkbox: RClass<CheckboxProps>

external interface CheckboxProps : RProps {
    var checked: Boolean
    var value: String
    var onChange: (Event) -> Unit
}
