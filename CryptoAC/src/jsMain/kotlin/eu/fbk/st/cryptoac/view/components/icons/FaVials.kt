@file:JsModule("react-icons/fa")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.icons

import kotlinx.js.Object
import react.*

@JsName("FaVials")
external val faVials: ComponentClass<FaVialsProps>

external interface FaVialsProps : Props {
    var style: Object
}
