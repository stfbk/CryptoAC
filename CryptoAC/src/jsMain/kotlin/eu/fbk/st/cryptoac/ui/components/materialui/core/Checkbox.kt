@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("Checkbox")
external val checkbox: ComponentClass<CheckboxProps>

external interface CheckboxProps : Props {
    var checked: Boolean
    var value: String
    var onChange: (Event) -> Unit
}
