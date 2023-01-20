@file:JsModule("react-icons/fa")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.icons

import kotlinx.js.Object
import react.*

@JsName("FaMedal")
external val faMedal: ComponentClass<FaMedalProps>

external interface FaMedalProps : Props {
    var style: Object
}
