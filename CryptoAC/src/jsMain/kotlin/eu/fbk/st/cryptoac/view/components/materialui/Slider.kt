@file:JsModule("@material-ui/core")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.materialui

import org.w3c.dom.events.Event
import react.*

@JsName("Slider")
external val slider: ComponentClass<SliderProps>
// TODO doc
external interface SliderProps : Props {
    var max: Int
    var min: Int
    var value: Any
    var color: String
    var onChange: (Event, Any) -> Unit
    var valueLabelDisplay: String
}
