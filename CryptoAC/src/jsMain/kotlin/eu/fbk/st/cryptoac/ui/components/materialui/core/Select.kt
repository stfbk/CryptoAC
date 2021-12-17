@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.ui.components.materialui.core

import org.w3c.dom.events.Event
import react.*

@JsName("Select")
external val select: ComponentClass<SelectProps>
// TODO doc
external interface SelectProps : Props {
    var className: String
    var value: String
    var autoWidth: Boolean
    var name: String
    var defaultValue: String
    var id: String
    var labelId: String
    var label: String
    var onChange: (Event) -> Unit
    var children: Array<ReactElement>
}