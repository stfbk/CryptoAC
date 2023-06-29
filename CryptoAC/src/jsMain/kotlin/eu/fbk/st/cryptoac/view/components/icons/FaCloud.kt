@file:JsModule("react-icons/fa")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.icons

import js.core.Object
import react.*

@JsName("FaCloud")
external val faCloud: ComponentClass<FaCloudProps>

external interface FaCloudProps : Props {
    var style: Object
}
