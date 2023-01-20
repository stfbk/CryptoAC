@file:JsModule("react-icons/fa")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.icons

import kotlinx.js.Object
import react.*

@JsName("FaUser")
external val faUser: ComponentClass<FaUserProps>

external interface FaUserProps : Props {
    var style: Object
}
