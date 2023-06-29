@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import js.core.Object
import org.w3c.dom.events.Event
import react.*

@JsName("Select")
external val select: ComponentClass<SelectProps>
// TODO doc
external interface SelectProps : Props {
    var disabled: Boolean
    var style: Object
    var value: String
    var inputProps: Object
    var autoWidth: Boolean
    var name: String
    var defaultValue: String
    var id: String
    var labelId: String
    var label: String
    var onChange: (Event) -> Unit
}
