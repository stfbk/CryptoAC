@file:JsModule("react-icons/fa")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.icons

import kotlinx.js.Object
import react.*

@JsName("FaStream")
external val faStream: ComponentClass<FaStreamProps>

external interface FaStreamProps : Props {
    var style: Object
}
