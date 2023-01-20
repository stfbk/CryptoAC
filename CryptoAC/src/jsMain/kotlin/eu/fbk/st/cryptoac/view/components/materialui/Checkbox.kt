@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import org.w3c.dom.events.Event
import react.*

@JsName("Checkbox")
external val checkbox: ComponentClass<CheckboxProps>
// TODO doc
external interface CheckboxProps : Props {
    var disabled: Boolean
    var checked: Boolean
    var value: String
    var onChange: (Event) -> Unit
}
