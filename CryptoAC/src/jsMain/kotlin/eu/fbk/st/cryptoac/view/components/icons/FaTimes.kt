@file:JsModule("react-icons/fa")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.icons

import kotlinx.js.Object
import react.*

@JsName("FaTimes")
external val faTimes: ComponentClass<FaTimesProps>

external interface FaTimesProps : Props {
    var style: Object
}
