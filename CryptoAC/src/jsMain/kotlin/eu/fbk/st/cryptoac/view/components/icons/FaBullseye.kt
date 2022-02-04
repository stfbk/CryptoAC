@file:JsModule("react-icons/fa")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.icons

import kotlinext.js.Object
import react.*

@JsName("FaBullseye")
external val faBullseye: ComponentClass<FaBullseyeProps>

external interface FaBullseyeProps : Props {
    var style: Object
}