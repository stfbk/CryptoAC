@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("RadioGroup")
external val radioGroup: ComponentClass<RadioGroupProps>

external interface RadioGroupProps : Props {
    var name: String
    var value: String
    var row: Boolean
    var onChange: (Event) -> Unit
}