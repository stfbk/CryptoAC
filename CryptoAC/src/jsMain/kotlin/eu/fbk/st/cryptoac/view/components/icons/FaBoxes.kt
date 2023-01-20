@file:JsModule("react-icons/fa")
@file:JsNonModule

package eu.fbk.st.cryptoac.view.components.icons

import kotlinx.js.Object
import react.*

@JsName("FaBoxes")
external val faBoxes: ComponentClass<FaBoxesProps>

external interface FaBoxesProps : Props {
    var style: Object
}
